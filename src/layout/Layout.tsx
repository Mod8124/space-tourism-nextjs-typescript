import Header from '../components/Header/Index';
import Styles from '../../styles/Layout.module.css';
import { useRouter } from 'next/router';
import 'normalize.css/normalize.css';

const Layout = ( { children }: any ) => {

  const router = useRouter();
  const { pathname } = router;
  
  return (
    <div className={
      pathname === '/' ? `${Styles.layout} ${Styles.layoutHome}` : 
        pathname === '/crew' ? `${Styles.layout} ${Styles.layoutCrew}`: 
          pathname === '/destination' ? `${Styles.layout} ${Styles.layoutDestination}` :
            pathname === '/technology' ? `${Styles.layout} ${Styles.layoutTechnology}` : ''
    }>
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;