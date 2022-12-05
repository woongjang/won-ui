export interface UsePaginationProps {
  defaultPage?: number;
  currentPage?: number;
  onChange?: (page: number, pageSize: number) => void;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  pagesGap?: number;
  total: number;
  hasMoreButton?: boolean;
}