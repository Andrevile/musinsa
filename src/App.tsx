import PageLayout from '@components/PageLayout';
import { css, Global, ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    bgColor: '#FFFFFF',
    lightGray: '#F9F9F9',
    heavyGray: '#F1F1F1',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <PageLayout></PageLayout>
    </ThemeProvider>
  );
}

const reset = css`
  body {
    margin: 0;
    font-family: Apple SD Gothic Neo;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: #f5f5f5;
    height: 100vh;
    overflow: hidden;
    // -ms-overflow-style: none;
  }
  // ::-webkit-scrollbar {
  //   display: none;
  // }

  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #cccccc;
    margin: 1em 0;
    padding: 0;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  nav ul {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

  button,
  input {
    border: none;
  }

  input {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  #root {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
`;
