import styled from 'styled-components';
import { Colors } from '../../helpers/Colors';
const { colors } = Colors();
import { motion } from 'framer-motion';
import { IDivNumberStyled } from '../../interfaces/Interfaces';
import Fontsizes from '../../helpers/fontSizes';
const { generalFont } = Fontsizes();
import { IMobileTitle } from '../../interfaces/Interfaces';

export const SectionStyled = styled.section`
    display: grid;
    min-height: 80vh; 
    width:100%;
    margin:0 auto;
    grid-template-columns: 100%;
    position: relative;
    z-index: 5;  

    @media screen and (min-width:1025px) {
        width:88%;
        grid-template-columns:50% 50%;
    }
`;

export const ArticleCtaStyled = styled.article`
    display:grid;
    order:1;
    grid-template-columns:90%;
    justify-content:center;
    grid-template-rows:30% 70%;

    @media screen and (min-width:1025px) {
        order:0;
    }
`;

export const TitleStyled = styled.h2<IMobileTitle>`
        color:white;
        display:${(props)=>props.mobile === true ? 'flex' :'none'};
        align-items:center;
        font-size:${generalFont.mobile.subTitle};
        letter-spacing:4.72px;
        margin:0 auto;
        text-align:center;
        text-transform:uppercase;

    span {
        color:${colors.sub.hex};
        padding-right:14px;
        font-weight:600;
    }

    @media screen and (min-width:700px) {
            font-size:${generalFont.table.subTitle};
    }

    @media screen and (min-width:1025px) {
            margin:0;
            text-align:start;
            display:${(props)=>props.mobile === true ? 'none' :'flex'};
            font-size:${generalFont.desktop.subTitle};
    }
`;

export const DivCtaContainerStyled = styled.div`
    display:grid;
    grid-template-columns:100%;  
    
    @media screen and (min-width:1025px) {
        grid-template-columns:20% 80%;     
    }
`;

export const DivsNumbersStyled = styled.div`
    display:grid;
    grid-template-rows:50px;
    padding-top:24px;
    padding-bottom:24px;
    grid-template-columns:auto auto auto;
    grid-row-gap:0px;
    grid-column-gap:30px;
    justify-content:center;

    @media screen and (min-width:1025px) {
        grid-template-rows:80px 80px 80px;   
        grid-row-gap:30px;  
        grid-column-gap:30px;
        padding-top:0px;
        padding-bottom:0px;
        justify-content:flex-start;
        grid-template-columns:auto;

    }

`;

export const DivNumberStyled = styled.div<IDivNumberStyled>`
    border-radius:50%;
    border:2px solid rgba(255, 255, 255, 0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    width:50px;
    height:50px;
    font-size:16px;
    cursor: pointer;
    transition:all 0.5s ease-in-out;
    background-color:${(props) => props.value === props.index ? colors.white.hex : 'transparent'};
    color:${(props) => props.value === props.index ? colors.back.hex : colors.white.hex};

    &:hover {
        border:2px solid rgba(255, 255, 255, 0.7);
    }

    @media screen and (min-width:1025px) {
        width:80px;
        height:80px;  
        font-size:32px; 
    }
`;

export const ArticleImgStyled = styled.article`
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
`;

export const DivImgContainerStyled = styled(motion.div)`
   position:relative;
   width:100%;
   height:100%;
   min-height:160px;
   
   @media screen and (min-width: 1025px) {
    max-width:500px;
    left:12%;
    min-height:none;
   }
`;
