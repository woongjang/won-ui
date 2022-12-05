import { usePagination } from '@won-ui/hooks';
import { Colors, UsePaginationProps } from '@won-ui/types';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { useMemo } from 'react';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { arrowStyle } from './Pagination.style';
import { PaginationItem } from './PaginationItem';

export interface PaginationProps extends UsePaginationProps {
  color?: Colors;
  position?: 'left' | 'right' | 'center';
}

export function Pagination(props: PaginationProps) {
  const { color = 'blue', position = 'center', ...usePaginationOptions } = props;
  const {
    page,
    currentPages,
    maxPageNum,
    pageSize,
    pageSizeOptions,
    handleChangePage,
    handleChangePageSize,
    handleClickNext,
    handleClickPrev,
    handleClickMoreButton,
  } = usePagination(usePaginationOptions);

  const paginationPosition = useMemo(
    () =>
      ({
        left: 'flex-start',
        right: 'flex-end',
        center: 'center',
      }[position]),
    [position]
  );

  return (
    <Stack justify={paginationPosition}>
      <Stack>
        <Button
          css={arrowStyle.leftArrow}
          disabled={page === 1}
          color={color}
          onClick={handleClickPrev}
          variant="outline"
        >
          <CaretLeft size={16} weight="bold" />
        </Button>
        {currentPages.map(pageInfo => (
          <PaginationItem
            key={pageInfo.page}
            pageInfo={pageInfo}
            color={color}
            onClick={
              typeof pageInfo.page === 'number'
                ? handleChangePage(pageInfo.page)
                : handleClickMoreButton(pageInfo.page)
            }
          />
        ))}
        <Button
          css={arrowStyle.rightArrow}
          disabled={page === maxPageNum}
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
