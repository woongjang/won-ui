import React from 'react';
import { render } from '@testing-library/react';

import WonSearch from './WonSearch';

describe("WonSerch", () => {
  test("render WonSearch Component", () => {
    render(<WonSearch value="testValue" />)
  })
})