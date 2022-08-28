import styled from 'styled-components';

import { IHeaderStyle } from '../../interfaces/Interfaces';

import { Colors } from '../../helpers/Colors';

const { colors } = Colors();

import { IHeaderMenuActive, IBlur } from '../../interfaces/Interfaces';




export const HeaderStyledDesktop = styled.article`
    display:none;
    grid-template-columns:15% 40% 45%;
    grid-template-rows:100%;
    height:100%;

    @media screen and (min-width:700px) {
        display:grid;
        grid-template-columns:15% 20% 65%;
    }



    @media screen and (min-width: 1025px) {
        grid-template-columns:15% 40% 45%;
    }

`;




export const HeaderStyle = styled.header`
    padding-top:30px;
    min-height:70px;
`;




export const HeaderLogoContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;


export const HeaderImgContainer = styled.div`
    position:relative;
    width:80%;
    height:80%;
    max-width:48px;
    max-height:48px;
`;




export const HeaderLine = styled.div`
    position: relative;
    display:flex;
    align-items:center;

    div {
        width:100%;
        height:4%;
        background-color:rgba(255, 255, 255, 0.2);
        position:absolute;
        right:-20px;
        z-index:4;
    }
`;


export const HeaderNav = styled.nav<IBlur>`
    position: relative;
    z-index:3;
    min-height:96px;
    height:100%;
    display:grid;
    grid-template-columns: auto auto auto auto;
    justify-content:space-around;
    align-items:center;

        background: rgba(255, 255, 255, 0.04);

        box-shadow: 0 0px 30px rgba(0, 0, 0, 0.1);

        backdrop-filter: ${(props)=>props.blur === true ? 'blur(0)' :'blur(81.5485px)'};

        -webkit-backdrop-filter: ${(props)=>props.blur === true ? 'blur(0)' :'blur(81.5485px)'}; 

    span {
        font-weight:600;
    }

`;


export const HeaderLink = styled.a<IHeaderStyle>`
        height:100%;
        display:grid;
        align-items:center;
        grid-template-columns:auto auto;
        grid-column-gap:8px;
        cursor: pointer;
        border-bottom:4px solid ${(props)=> props.path === props.value && props.mobile === false ? 'white':'transparent'};
        transition:all 0.7s ease-in-out;
        color:white;
        text-transform:uppercase;

        span {
            font-weight:600;
        }

        &:hover {
            border-bottom:4px solid rgba(255, 255, 255, 0.4);  
        }
`;


//menu mobile

export const HeaderStyledMobile = styled.article`
   display:grid;
   min-height:70px;
   grid-template-columns:20% 80%;

   @media screen and (min-width:700px) {
        display:none;
    }

`;


export const HeaderMobileContainer = styled.div`
    display:flex;
    justify-content:flex-end;
`;




export const HeaderMobileHambu = styled.div<IHeaderMenuActive>`
    height:3px;
    width:24px;
    background-color:${(props)=>props.menuActive ? colors.white.hex :colors.sub.hex};
    position:relative;
    z-index:10;
    right:5%;
    cursor: pointer;
    align-self:center;
    transition:all 0.5s ease-in-out;
    transform:${(props)=>props.menuActive ? 'rotate(140deg)' :'rotate(0deg)'};

    &::after {
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        top:${(props)=>props.menuActive ? '0%' :'250%'};
        transition:all 0.5s ease-in-out;
        opacity:${(props) => props.menuActive ? '0':1};
        background-color:${colors.sub.hex};
    }

    &::before {
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        top:${(props)=>props.menuActive ? '0%' :'-250%'};
        background-color:${(props)=>props.menuActive ? colors.white.hex :colors.sub.hex};
        transform:${(props)=>props.menuActive ? 'rotate(260deg)' :'rotate(0deg)'};
    }
`;







export const HeaderMobileNav = styled.nav<IHeaderMenuActive>`
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 0px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(81.5485px);
    -webkit-backdrop-filter: blur(81.545px); 
    position:fixed;
    top:0;
    min-height:${(props)=>props.menuActive ? '100vh':'0vh'};
    width:70%;
    z-index:6;
    transition:all 0.5s;
    opacity:${(props)=>props.menuActive ? '1':'0'};
    display:grid;
    grid-template-columns:86%;
    align-items:flex-start;
    justify-content:center;
`;



export const HeaderDivMobile = styled.div<IHeaderMenuActive>`
   height:45%;
   display:grid;
   opacity:${(props)=>props.menuActive ? '1':'0'};
   text-align:start;
   grid-template-columns:20%;
   position: relative;
   z-index:10;
   top:16%;
`; 