import styled from '@emotion/styled';
import Header from 'components/header';

export default function PageLayout({ children }: { children?: React.ReactNode }) {
  return (
    <Page>
      <Header />
      {children}
    </Page>
  );
}

const Page = styled.div`
  position: relative;
  background: #ffffff;
  height: 100%;
`;
