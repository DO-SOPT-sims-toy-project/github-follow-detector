import { Global, css } from '@emotion/react';
import resetStyle from './resetStyle';

const style = css`
  ${resetStyle}

  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    background-color: #000;
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
