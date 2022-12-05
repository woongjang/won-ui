import { usePagination } from '@won-ui/hooks';
import { Colors, UsePaginationProps } from '@won-ui/types';
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react';
import { useMemo } from 'react';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { arrowStyle, moreBtnStyle, pageBtnStyle } from './Pagination.style';

interface PaginationProps extends UsePaginationProps {
  color?: Colors;
  position?: 'left' | 'right' | 'center';
}

export function Pagination(props: PaginationProps) {
  const { color = 'blue', position = 'center', ...usePaginationOptions } = props;
  const {
    page,
    currentPages,
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
