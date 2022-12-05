import { PageInfo } from '@won-ui/types';
import { DotsThree } from 'phosphor-react';
import { memo, useCallback, useMemo } from 'react';
import { Button, ButtonProps } from '../Button/Button';
import { moreBtnStyle, pageBtnStyle } from './Pagination.style';

interface PaginationItemProps extends ButtonProps {
  pageInfo: PageInfo;
}

export const PaginationItem = memo(({ pageInfo, ...buttonProps }: PaginationItemProps) => {
  const isMoreButton = useCallback((pageNumber: number | 'left' | 'right') => {
    if (pageNumber === 'left' || pageNumber === 'right') return true;
    return false;
  }, []);

  const { style, content, variant } = useMemo(() => {
    const style = isMoreButton(pageInfo.page) ? moreBtnStyle : pageBtnStyle(pageInfo.selected);
    const content = isMoreButton(pageInfo.page) ? <DotsThree size={24} /> : pageInfo.page;
    let variant: ButtonProps['variant'] = 'borderless';
    if (!isMoreButton(pageInfo.page)) variant = pageInfo.selected ? 'filled' : 'outline';
    return {
      style,
      content,
      variant,
    };
  }, [pageInfo]);

  return (
    <Button css={style} variant={variant} {...buttonProps}>
      {content}
    </Button>
  );
});
