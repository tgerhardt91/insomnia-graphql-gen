
import { css } from '@emotion/core';

export const buttonStyle = css`
  background-color: #f9f9f9;
  border: 1px solid #eee;
  padding: 7px;
  border-radius: 3px;
  margin: 5px 0;
  color: #333333;
  align-self: end;

  &:hover {
    background-color: #fff;
  }

  &:active {
    background-color: rgba(198, 198, 198, 0.5);
  }
`;