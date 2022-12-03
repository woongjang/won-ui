import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Pagination, Stack, Text } from '@won-ui/core/src';
import { useState } from 'react';

export default {
  title: 'won-ui/core/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Basic = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const handleChangePage = (page: number, pageSize: number) => {
    setPageSize(pageSize);
    setCurrentPage(page);
  };

  return (
    <Stack
      direction="column"
      align="flex-start"
      css={css`
        width: 100%;
        > * {
          margin-bottom: 10px;
        }
      `}
    >
      <Pagination total={300} />
      <Pagination total={300} color="red" />
      <Text size="lg">with control</Text>
      <Pagination
        total={100}
        color="cyan"
        defaultPageSize={pageSize}
        currentPage={currentPage}
        onChange={handleChangePage}
      />
      <Text size="lg">custom pageSizeOptions</Text>
      <Pagination total={100} color="magenta" pageSizeOptions={[30, 40, 50, 60]} />
      <Text size="lg">pageGap : 중심을 기준으로 양옆으로 몇개씩인지</Text>
      <Text size="lg">
        default값은 2
      </Text>
      <Pagination total={400} color="orange" pagesGap={4} />
      <Text size="lg">
        hasMoreButton total = 50
      </Text>
      <Pagination total={50} color="black" pagesGap={2} hasMoreButton={true} />
      <Text size="lg">
        hasMoreButton total = 100
      </Text>
      <Pagination total={100} color="black" pagesGap={2} hasMoreButton={true} />
      <Text size="lg">
        hasMoreButton total = 300
      </Text>
      <Pagination total={300} color="black" pagesGap={2} hasMoreButton={true} />
    </Stack>
  );
};
