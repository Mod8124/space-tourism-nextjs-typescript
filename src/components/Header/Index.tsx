import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Image from 'next/image';
import HeaderLogic from './HeaderLogic';
import { HeaderStyle, HeaderStyledDesktop, HeaderLogoContainer, HeaderLine, HeaderNav, HeaderLink, HeaderImgContainer,
  HeaderStyledMobile, HeaderMobileContainer, HeaderMobileHambu, HeaderMobileNav, HeaderDivMobile} from './Header.style';

const Index:FC = () => {

  const router = useRouter();
  const { pathname } = router;
  const { menuActive, handleMenuActive, isFirefox } = HeaderLogic();

  return (
    <HeaderStyle>

      <HeaderStyledDesktop>
        <HeaderLogoContainer>
          <HeaderImgContainer className="logoContainer">
            <Image src="/assets/shared/logo.svg" alt="logo space-tourism"  layout="fill" objectFit="contain"/>
          </HeaderImgContainer>
        </HeaderLogoContainer>

        <HeaderLine className="line">
          <div className="line__line"></div>
        </HeaderLine>

        <HeaderNav blur={isFirefox}>
          <Link href={'/'}>
            <HeaderLink  path={pathname} value="/" mobile={false}> <span>00</span> Home</HeaderLink>
          </Link>
          <Link href={'/destination'}>
            <HeaderLink  path={pathname} value="/destination" mobile={false}> <span>01</span> Destination</HeaderLink>
          </Link>
          <Link href={'/crew'}>
            <HeaderLink  path={pathname} value="/crew" mobile={false}> <span>02</span> Crew</HeaderLink>
          </Link>
          <Link href={'/technology'}>
            <HeaderLink  path={pathname} value="/technology" mobile={false}> <span>03</span> Technology</HeaderLink>
          </Link>
        </HeaderNav>

      </HeaderStyledDesktop>

      {/* start mobile */}
      <HeaderStyledMobile>

        <HeaderLogoContainer className="logo">
          <HeaderImgContainer className="logoContainer">
            <Image src="/assets/shared/logo.svg" alt="logo space-tourism" layout="fill" objectFit="contain"/>
          </HeaderImgContainer>
        </HeaderLogoContainer>

        <HeaderMobileContainer>

          <HeaderMobileHambu onClick={handleMenuActive} menuActive={menuActive}>
          </HeaderMobileHambu>

          <HeaderMobileNav menuActive={menuActive}>

            <HeaderDivMobile menuActive={menuActive}>
              <Link href={'/'}>
                <HeaderLink  path={pathname} value="/" mobile={true}> <span>00</span> Home</HeaderLink>
              </Link>
              <Link href={'/destination'}>
                <HeaderLink  path={pathname} value="/destination" mobile={true}> <span>01</span> Destination</HeaderLink>
              </Link>
              <Link href={'/crew'}>
                <HeaderLink  path={pathname} value="/crew" mobile={true}> <span>02</span> Crew</HeaderLink>
              </Link>
              <Link href={'/technology'}>
                <HeaderLink  path={pathname} value="/technology" mobile={true}> <span>03</span> Technology</HeaderLink>
              </Link>
            </HeaderDivMobile>

          </HeaderMobileNav>

        </HeaderMobileContainer>

      </HeaderStyledMobile>

    </HeaderStyle>
  ); 
};

export default Index;