import styled from '@emotion/styled';

export function PageLayout({ children }: { children?: React.ReactNode }) {
  return <Page>{children}</Page>;
}

const Page = styled.div`
  position: relative;
  background: #ffffff;
  height: 100%;
`;
