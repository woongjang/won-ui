import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pagination, Text } from '@won-ui/core/src';
import { useState } from 'react';

export default {
  title: 'won-ui/core/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => (
  <div
    css={css`
      margin-bottom: 10px;
    `}
  >
    <Pagination position="left" {...args} />
  </div>
);

export const Basic = () => {
  return (
    <>
      <Template total={300} color="black" />
      <Template total={300} color="red" />
      <Template total={300} color="orange" />
      <Template total={300} color="yellow" />
      <Template total={300} color="magenta" />
      <Template total={300} color="indigo" />
      <Template total={300} color="purple" />
      <Template total={300} />
      <Template total={300} color="cyan" />
      <Template total={300} color="green" />
      <Template total={300} color="teal" />
    </>
  );
};

export const DefaultPage = () => {
  return <Template total={300} defaultPage={10} color="black" />;
};
export const Position = () => {
  return (
    <>
      <Template total={300} color="black" position="left" />
      <Template total={300} color="black" position="center" />
      <Template total={300} color="black" position="right" />
    </>
  );
};

export const WithControl = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (page: number, pageSize: number) => {
    setCurrentPage(page);
  };
  return (
    <Template total={100} color="black" currentPage={currentPage} onChange={handleChangePage} />
  );
};

export const PageSizeOptions = () => {
  return (
    <>
      <Text size="lg">30, 40, 50, 60, 150</Text>
      <Template total={100} color="black" pageSizeOptions={[30, 40, 50, 60, 150]} />
    </>
  );
};

export const PagesGap = () => {
  return (
    <>
      <Text size="lg">pagesGap : 1</Text>
      <Template total={300} color="black" pagesGap={1} />
      <Text size="lg">pagesGap : 2</Text>
      <Template total={300} color="black" pagesGap={2} />
      <Text size="lg">pagesGap : 3</Text>
      <Template total={300} color="black" pagesGap={3} />
      <Text size="lg">pagesGap : 4</Text>
      <Template total={300} color="black" pagesGap={4} />
    </>
  );
};

export const HasMoreButton = () => {
  return (
    <>
      <Text size="lg">더보기 클릭 시 페이지 건너뜀</Text>
      <Template total={300} color="black" hasMoreButton={true} />
      <Text size="lg">With PagesGap</Text>
      <Template total={300} color="black" hasMoreButton={true} pagesGap={1} defaultPage={9} />
      <Template total={300} color="black" hasMoreButton={true} pagesGap={2} defaultPage={9}/>
      <Template total={300} color="black" hasMoreButton={true} pagesGap={3} defaultPage={9}/>
      <Template total={300} color="black" hasMoreButton={true} pagesGap={4} defaultPage={9}/>
    </>
  );
};

// export const Basic = () => {

//   return (
//     <>
//       <Pagination total={300} />
//       <Pagination total={300} color="red" />
//       <Text size="lg">with control</Text>
//       <Pagination
//         total={100}
//         color="cyan"
//         defaultPageSize={pageSize}
//         currentPage={currentPage}
//         onChange={handleChangePage}
//       />
//       <Text size="lg">custom pageSizeOptions</Text>
//       <Pagination total={100} color="magenta" pageSizeOptions={[30, 40, 50, 60]} />
//       <Text size="lg">pageGap : 중심을 기준으로 양옆으로 몇개씩인지</Text>
//       <Text size="lg">default값은 2 아래 지정값은 1</Text>
//       <Pagination total={400} color="orange" pagesGap={1} />
//       <Text size="lg">hasMoreButton total = 50</Text>
//       <Pagination total={50} color="black" pagesGap={2} hasMoreButton={true} />
//       <Text size="lg">hasMoreButton total = 100</Text>
//       <Pagination total={100} color="black" pagesGap={2} hasMoreButton={true} />
//       <Text size="lg">hasMoreButton total = 300</Text>
//       <Pagination total={300} color="black" pagesGap={2} hasMoreButton={true} />
//       <Text size="lg">with defaultPage</Text>
//       <Pagination defaultPage={12} total={300} color="black" pagesGap={2} hasMoreButton={true} />
//     </>
//   );
// };
