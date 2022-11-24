import { Colors } from '@won-ui/types';
import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';
import { Button } from '../Button/Button';
import { arrowStyle, containerStyle, pageBtnStyle, paginationStyle } from './Pagination.style';

interface PaginationProps {
  defaultCurrent?: number;
  currentPage?: number;
  onChange?: (page: number, pageSize: number) => void;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  pagesGap?: number;
  color?: Colors;
  total: number;
}

export function Pagination(props: PaginationProps) {
  const {
    defaultCurrent,
    currentPage: propsCurrent,
    onChange,
    defaultPageSize: propsPageSize = 10,
    pageSizeOptions = [10, 20, 30, 50],
    pagesGap = 2,
    total,
    color = 'blue',
  } = props;
  const [current, setCurrent] = useState(defaultCurrent || 1);
  const [pageSize, setPageSize] = useState(propsPageSize);

  const page = useMemo(() => (propsCurrent ? propsCurrent : current), [propsCurrent, current]);

  const currentPages = useMemo(() => {
    const page = propsCurrent ? propsCurrent : current;
    const maxPageNum = Math.ceil(total / pageSize);
    let startNum = maxPageNum - page < pagesGap ? maxPageNum - pagesGap * 2 : page - pagesGap;
    // 처음 선택일 경우
    if (maxPageNum <= pagesGap * 2 + 1 || page <= pagesGap + 1) {
      startNum = 1;
    }

    const pagesLength = maxPageNum < pagesGap * 2 + 1 ? maxPageNum : pagesGap * 2 + 1;
    return Array.from({ length: pagesLength }, (_, i) => i + startNum);
  }, [current, total, pageSize, pagesGap, propsCurrent]);

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
  return (
    <div css={containerStyle}>
      <div css={paginationStyle}>
        <Button css={arrowStyle(color).leftArrow} color={color} onClick={handleClickPrev}>
          {'<'}
        </Button>
        {currentPages.map(el => (
          <Button
            color={color}
            css={pageBtnStyle(page === el)}
            key={el}
            onClick={handleChangePage(el)}
          >
            {el}
          </Button>
        ))}
        <Button css={arrowStyle(color).rightArrow} color={color} onClick={handleClickNext}>
          {'>'}
        </Button>
      </div>
      <select value={pageSize} onChange={handleChangePageSize}>
        {pageSizeOptions.map(option => (
          <option key={option} value={option}>
            {option} / page
          </option>
        ))}
      </select>
    </div>
  );
}

Pagination.displayName = 'WON-Pagination';