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

  const currentPages = useMemo(() => {
    const page = propsCurrent ? propsCurrent : current;
    const maxPageNum = Math.ceil(total / pageSize);
    let startNum = maxPageNum - page < pagesGap ? maxPageNum - pagesGap * 2 : page - pagesGap;
    // 처음 선택일 경우
    if (maxPageNum <= pagesGap * 2 + 1 || page <= pagesGap + 1) {
      startNum = 1;
    }

    let pagesLength = maxPageNum < pagesGap * 2 + 1 ? maxPageNum : pagesGap * 2 + 1;

    if (hasMoreButton && maxPageNum > pagesGap * 2 + 1) {
      if (maxPageNum > pagesGap * 2 && current >= maxPageNum - pagesGap * 2) {
        pagesLength = (pagesGap + 1) * 2 + 1;
        if (page === maxPageNum - pagesGap * 2) {
          pagesLength -= 1;
        }
        startNum = maxPageNum - (pagesGap + 1) * 2;
      }

      if (startNum >= 1 && current < (pagesGap + 1) * 2) {
        startNum = 1;
        pagesLength = (pagesGap + 1) * 2 + 1;
      }
    }

    return Array.from({ length: pagesLength }, (_, i) => i + startNum);
  }, [current, total, pageSize, pagesGap, propsCurrent]);

  const showFirstPage = useMemo(
    () => hasMoreButton && current > pagesGap * 2 + 1,
    [hasMoreButton, current, pagesGap]
  );

  const showLastPage = useMemo(
    () =>
      hasMoreButton &&
      Math.ceil(total / pageSize) - pagesGap * 2 > pagesGap * 2 + 1 &&
      current <= Math.ceil(total / pageSize) - pagesGap * 2,
    [hasMoreButton, current, total, pagesGap, pageSize]
  );

  const showLeftMoreButton = useMemo(
    () => hasMoreButton && current > pagesGap * 2 + 1,
    [hasMoreButton, current, pagesGap]
  );

  const showRightMoreButton = useMemo(
    () => hasMoreButton && current < Math.ceil(total / pageSize) - pagesGap * 2,
    [hasMoreButton, current, pagesGap, total, pageSize]
  );

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
    const maxPageNum = Math.ceil(total / pageSize);
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
        {showFirstPage && hasMoreButton && (
          <Button
            color={color}
            css={pageBtnStyle(page === 1)}
            onClick={handleChangePage(1)}
            variant={page === 1 ? 'filled' : 'outline'}
          >
            {1}
          </Button>
        )}
        {showLeftMoreButton && hasMoreButton && (
          <Button
            css={moreBtnStyle}
            color={color}
            onClick={handleClickMoreButton('left')}
            variant="borderless"
          >
            <DotsThree size={24} />
          </Button>
        )}
        {currentPages.map(el => (
          <Button
            color={color}
            css={pageBtnStyle(page === el)}
            key={el}
            onClick={handleChangePage(el)}
            variant={page === el ? 'filled' : 'outline'}
          >
            {el}
          </Button>
        ))}
        {showRightMoreButton && hasMoreButton && (
          <Button
            css={moreBtnStyle}
            color={color}
            onClick={handleClickMoreButton('right')}
            variant="borderless"
          >
            <DotsThree size={24} />
          </Button>
        )}
        {showLastPage && hasMoreButton && (
          <Button
            color={color}
            css={pageBtnStyle(page === Math.ceil(total / pageSize))}
            onClick={handleChangePage(Math.ceil(total / pageSize))}
            variant={page === Math.ceil(total / pageSize) ? 'filled' : 'outline'}
          >
            {Math.ceil(total / pageSize)}
          </Button>
        )}
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
