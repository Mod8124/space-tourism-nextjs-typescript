import styled from 'styled-components';
import { ILayout } from '../interfaces/Interfaces';

export const LayoutStyled = styled.div<ILayout>`

    height: 100vh;
    width: 100%;
    background-size: cover;
    position: relative;
    z-index: 2;
    overflow-y: hidden;
    background-color:#0B0D17;
    background-image: ${(props)=>props.path === '/' ? 'url(\'/assets/home/background-home-desktop.jpg\')':
    props.path === '/crew' ? 'url(\'/assets/crew/background-crew-desktop.jpg\')':
      props.path === 'destination' ? 'url(\'/assets/technology/background-technology-desktop.jpg\')' :
        'url(\'/assets/destination/background-destination-desktop.jpg\') '
};

    
`;