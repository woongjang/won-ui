import { Colors } from '@won-ui/types';
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react';
import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { arrowStyle, moreBtnStyle, pageBtnStyle } from './Pagination.style';

interface PaginationProps {
  defaultPage?: number;
  currentPage?: number;
  onChange?: (page: number, pageSize: number) => void;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  pagesGap?: number;
  color?: Colors;
  total: number;
  hasMoreButton?: boolean;
}

/**
 * TODO:
 *  - usePagination 추출해서 커스텀 가능하도록 훅 제공
 */
export function Pagination(props: PaginationProps) {
  const {
    defaultPage,
    currentPage: propsCurrent,
    onChange,
    pageSizeOptions = [10, 20, 30, 50],
    defaultPageSize = pageSizeOptions[0],
    pagesGap = 2,
    total,
    color = 'blue',
    hasMoreButton = false,
  } = props;
  const [current, setCurrent] = useState(defaultPage || 1);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const page = useMemo(() => (propsCurrent ? propsCurrent : current), [propsCurrent, current]);
  const maxPageNum = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);

  const currentPages = useMemo(() => {
    // 가중치 값
    const additionValue = hasMoreButton ? 2 : 0;
    // 기본 페이지 수보다 maxPage가 높은 경우
    const isLimitedPages = maxPageNum <= pagesGap * 2 + 1

    let pagesLength = isLimitedPages ? maxPageNum : pagesGap * 2 + 1;
    let startNum = page - pagesGap - additionValue;
    if (pagesLength !== maxPageNum && hasMoreButton) {
      pagesLength = pagesLength + 4;
    }
    const minStartNum = pagesGap + additionValue + 1;
    const maxCenterNum = maxPageNum - pagesGap - additionValue;
    // 스타트 넘버
    if (!isLimitedPages && page > maxCenterNum) {
      startNum = maxCenterNum - pagesGap - additionValue;
    }
    if (isLimitedPages || page <= minStartNum) {
      startNum = 1;
    }
    
    const pages: (number | 'left' | 'right')[] = Array.from({ length: pagesLength }, (_, i) => {
      if (hasMoreButton && i <= 1 && startNum > 1) return i === 0 ? 1 : 'left';
      if (hasMoreButton && i >= pagesLength - 2 && maxPageNum >= pagesLength + startNum)
        return i === pagesLength - 1 ? maxPageNum : 'right';
      return i + startNum;
    });
    
    return pages;
  }, [current, total, pageSize, pagesGap, propsCurrent, page]);

  const handleChangePage = (page: number) => (e: MouseEvent<HTMLSpanElement>) => {
    if (onChange) {
      onChange(page, pageSize);
      return;
    }
    setCurrent(page);
  };

  const handleChangePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const changePageSize = Number(e.target.value);
    // 페이지가 존재하지 않을 경우에만 수정
    const changeMaxPageNum = Math.ceil(total / changePageSize);
    setPageSize(changePageSize);
    const pageNum = page > changeMaxPageNum ? changeMaxPageNum : page;
    if (page > changeMaxPageNum) setCurrent(changeMaxPageNum);
    if (onChange) {
      onChange(pageNum, changePageSize);
    }
  };

  const handleClickPrev = (e: MouseEvent<HTMLButtonElement>) => {
    if (page === 1) return;
    setCurrent(page - 1);
    if (onChange) onChange(page - 1, pageSize);
  };

  const handleClickNext = (e: MouseEvent<HTMLButtonElement>) => {
    if (page === maxPageNum) return;
    setCurrent(page + 1);
    if (onChange) onChange(page + 1, pageSize);
  };

  const handleClickMoreButton =
    (position: 'left' | 'right') => (e: MouseEvent<HTMLButtonElement>) => {
      if (position === 'left') {
        setCurrent(prev => (prev - (pagesGap * 2 + 1) <= 1 ? 1 : prev - (pagesGap * 2 + 1)));
        return;
      }
      setCurrent(prev =>
        prev + pagesGap * 2 + 1 >= Math.ceil(total / pageSize)
          ? Math.ceil(total / pageSize)
          : prev + pagesGap * 2 + 1
      );
    };

  return (
    <Stack>
      <Stack>
        <Button
          css={arrowStyle.leftArrow}
          color={color}
          onClick={handleClickPrev}
          variant="outline"
        >
          <CaretLeft size={16} weight="bold" />
        </Button>
        {currentPages.map(el => {
          if (el === 'left' || el === 'right')
            return (
              <Button
                css={moreBtnStyle}
                color={color}
                onClick={handleClickMoreButton(el)}
                variant="borderless"
              >
                <DotsThree size={24} />
              </Button>
            );
          return (
            <Button
              color={color}
              css={pageBtnStyle(page === el)}
              key={el}
              onClick={handleChangePage(el)}
              variant={page === el ? 'filled' : 'outline'}
            >
              {el}
            </Button>
          );
        })}
        <Button
          css={arrowStyle.rightArrow}
          color={color}
          onClick={handleClickNext}
          variant="outline"
        >
          <CaretRight size={16} weight="bold" />
        </Button>
      </Stack>
      {/* TODO: Select 이관 후 컴포넌트 수정할 것 */}
      <select value={pageSize} onChange={handleChangePageSize}>
        {pageSizeOptions.map(option => (
          <option key={option} value={option}>
            {option} / page
          </option>
        ))}
      </select>
    </Stack>
  );
}

Pagination.displayName = 'WON-Pagination';
