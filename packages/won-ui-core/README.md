
# won-ui
학습을 위한 ui library 입니다.

<br/> 

## 제작 의도

- 많이 사용하는 ui-library들은 어떻게 구성했는가를 고민하며 작성중입니다.
- turborepo를 통해서 모노레포 형태의 패키지로 이전했으며, 현재 이전 버전의 won-ui 컴포넌트들을 이전 중입니다. (select, layout ...)

<br/>

## Installation

```Javascript
  npm install @won-ui/core
```

```Javascript
  yarn add @won-ui/core
```

<br/>

## 개발된 컴포넌트

- Button
- Checkbox
- Heading
- IconActivator
- Input
- InputBox
- Stack
- Switch
- Tag
- Text
- TextInput

<br/>

## 개발중인 컴포넌트

- Select
- Table
- Modal
- Carousel
- Pagination
- Infinite Scroll

<br/>


## Tech

- turborepo
- React
- Typescript
- emotion
- storybook
- jest
- testing-library
- phosphor(icon library)

<br/>

~~아래 Usage는 이전 버전의 won-ui 입니다.~~

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
