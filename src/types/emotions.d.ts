import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      bgColor: string;
      lightGray: string;
      heavyGray: string;
      red: string;
    };
    fontWeight: {
      regular: string;
      regularBold: string;
      heavy: string;
    };
  }
}
