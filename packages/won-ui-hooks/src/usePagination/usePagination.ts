import { UsePaginationProps } from '@won-ui/types';
import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';

/**
 * @required
 * @param total
 * @optional
 * @param defaultPage
 * @param currentPage
 */
export function usePagination({
  defaultPage = 1,
  currentPage: propsCurrentPage,
  onChange,
  pageSizeOptions = [10, 20, 30, 50, 100],
  defaultPageSize = pageSizeOptions[0],
  pagesGap = 2,
  total,
  hasMoreButton = false,
}: UsePaginationProps) {
  const [current, setCurrent] = useState(defaultPage);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const maxPageNum = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);
  const additionalPages = useMemo(() => (hasMoreButton ? 2 : 0), [hasMoreButton]);

  const page = useMemo(() => {
    if (propsCurrentPage === undefined) return current;
    if (propsCurrentPage <= 1) return 1;
    if (propsCurrentPage >= maxPageNum) return maxPageNum;
    return propsCurrentPage;
  }, [propsCurrentPage, current]);

  const currentPages = useMemo(() => {
    // 기본 페이지 수보다 maxPage가 높은 경우
    const isLimitedPages = maxPageNum <= pagesGap * 2 + 1;

    let pagesLength = isLimitedPages ? maxPageNum : pagesGap * 2 + 1;
    let startNum = page - pagesGap - additionalPages;
    if (pagesLength !== maxPageNum && hasMoreButton) {
      pagesLength = pagesLength + additionalPages * 2;
    }
    const minStartNum = pagesGap + additionalPages + 1;
    const maxCenterNum = maxPageNum - pagesGap - additionalPages;
    // 스타트 넘버
    if (!isLimitedPages && page > maxCenterNum) {
      startNum = maxCenterNum - pagesGap - additionalPages;
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
  }, [current, total, pageSize, pagesGap, propsCurrentPage, page]);

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

  return {
    page,
    maxPageNum,
    additionalPages,
    currentPages,
    pageSize,
    pageSizeOptions,
    handleChangePage,
    handleChangePageSize,
    handleClickNext,
    handleClickPrev,
    handleClickMoreButton,
  };
}
