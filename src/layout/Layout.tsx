import Header from '../components/Header/Index';
import { useRouter } from 'next/router';
import { LayoutStyled } from './layout.style';

const Layout = ( { children }: any ) => {

  const router = useRouter();
  const { pathname } = router;
  
  return (
    <LayoutStyled  path={pathname}>
      <Header></Header>
      {children}
    </LayoutStyled>
  );
};

export default Layout;