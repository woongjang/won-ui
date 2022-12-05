import { PageInfo, UsePaginationProps } from '@won-ui/types';
import { ChangeEvent, MouseEvent, useCallback, useMemo, useState } from 'react';

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

  const page = useMemo(
    () => (propsCurrentPage === undefined ? current : propsCurrentPage),
    [propsCurrentPage, current]
  );

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

    const pages: PageInfo[] = Array.from({ length: pagesLength }, (_, i) => {
      let updatePage: PageInfo['page'] = i + startNum;
      if (hasMoreButton && i <= 1 && startNum > 1) {
        updatePage = i === 0 ? 1 : 'left';
      }
      if (hasMoreButton && i >= pagesLength - 2 && maxPageNum >= pagesLength + startNum) {
        updatePage = i === pagesLength - 1 ? maxPageNum : 'right';
      }
      return {
        selected: page === updatePage,
        page: updatePage,
      };
    });

    return pages;
  }, [current, total, pageSize, pagesGap, propsCurrentPage, page]);

  const handleCurrent = useCallback(
    (updatePage: number, updatePageSize: number = pageSize) => {
      let changePage = updatePage;
      if (updatePageSize !== pageSize) {
        // 페이지가 존재하지 않을 경우에만 수정
        const changeMaxPageNum = Math.ceil(total / updatePageSize);
        if (updatePage > changeMaxPageNum) changePage = changeMaxPageNum;
        setPageSize(updatePageSize);
      }
      if (changePage !== page) setCurrent(changePage);
      if (onChange) {
        onChange(updatePage, updatePageSize);
      }
    },
    [onChange, pageSize, page]
  );

  const handleChangePage = (clickedPage: number) => (e: MouseEvent<HTMLSpanElement>) => {
    handleCurrent(clickedPage);
  };

  const handleChangePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const changePageSize = Number(e.target.value);
    handleCurrent(page, changePageSize);
  };

  const handleClickPrev = (e: MouseEvent<HTMLButtonElement>) => {
    if (page <= 1) return;
    handleCurrent(page - 1)
  };

  const handleClickNext = (e: MouseEvent<HTMLButtonElement>) => {
    if (page === maxPageNum) return;
    handleCurrent(page + 1);
  };

  const handleClickMoreButton =
    (position: 'left' | 'right') => (e: MouseEvent<HTMLButtonElement>) => {
      let updatePage = page + pagesGap * 2 + 1 >= Math.ceil(total / pageSize)
          ? Math.ceil(total / pageSize)
          : page + pagesGap * 2 + 1

      if (position === 'left') {
        updatePage = (page - (pagesGap * 2 + 1) <= 1 ? 1 : page - (pagesGap * 2 + 1))
      }
      handleCurrent(updatePage)
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
