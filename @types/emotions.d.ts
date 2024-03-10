import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      bgColor: string;
      lightGray: string;
      heavyGray: string;
    };
    fontWeight: {
      regular: string;
    };
  }
}
