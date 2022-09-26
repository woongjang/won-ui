# won-ui

## 제작 의도

- 학습을 위한 ui-library입니다.
- 많이 사용하는 ui-library들은 어떻게 구성했는가를 고민하며 작성중입니다.

<br/>

## 개발된 컴포넌트

- Layout, Header, Navigation, Sider
- Grid
- Select

<br/>

## 개발중인 컴포넌트

- Editor
- Modal
- Search (+ Modal)
- Carousel
- Pagination
- Infinite Scroll

<br/>

## Installation

```Javascript
  npm install @woongjang/won-ui
```

```Javascript
  yarn add @woongjang/won-ui
```

<br/>

## Tech

- React
- Typescript
- styled-component
- storybook
- jest
- testing-library
- lexical(editor)

<br/>

## Usage

<br/>

<details>
<summary>Select</summary>
<div>

```Typescript
import React from 'react';
import {
  WonSelect,
  WonSelectLabel,
  WonSelectOptionItem,
  WonSelectOptionList
} from '../components';

export default function ExampleComponent() {
  const items = ['OPTION1 ', 'OPTION2 ', 'OPTION3 ', 'OPTION4 ', 'OPTION5 '];
  const [selectItem, setSelectItem] = React.useState(items[0]);
  const handleChangeItem = (value: string) => {
    // ~~~~
    setSelectItem(value);
  }
  return (
    <WonSelect onChange={handleChangeItem} value={selectItem}>
      <WonSelectLabel>{selectItem}</WonSelectLabel>
      <WonSelectOptionList>
        {items.map((optionValue) => (
          <WonSelectOptionItem key={optionValue} value={optionValue}>
            {optionValue}
          </WonSelectOptionItem>
        ))}
      </WonSelectOptionList>
    </WonSelect>
  );
}

```

</div>
</details>
