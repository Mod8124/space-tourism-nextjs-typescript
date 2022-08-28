import styled from 'styled-components';
import { ILayout } from '../interfaces/Interfaces';

export const LayoutStyled = styled.div<ILayout>`

    height: 100vh;
    width: 100%;
    background-size: cover;
    position: relative;
    z-index: 1;
    overflow-y: hidden;
    background-color:#0B0D17;
    background-image: ${(props)=>props.path === '/' ? 'url(\'/assets/home/background-home-mobile.jpg\')':
    props.path === '/crew' ? 'url(\'/assets/crew/background-crew-mobile.jpg\')':
      props.path === '/destination' ? 'url(\'/assets/destination/background-destination-mobile.jpg\')' :
        'url(\'/assets/technology/background-technology-mobile.jpg\') '
};

  @media screen  and (min-width:1025px) {
    background-image: ${(props)=>props.path === '/' ? 'url(\'/assets/home/background-home-desktop.jpg\')':
    props.path === '/crew' ? 'url(\'/assets/crew/background-crew-desktop.jpg\')':
      props.path === '/destination' ? 'url(\'/assets/destination/background-destination-desktop.jpg\')' :
        'url(\'/assets/technology/background-technology-desktop.jpg\') '
};
  }

    
`;