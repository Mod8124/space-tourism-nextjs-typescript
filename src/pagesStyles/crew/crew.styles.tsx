import styled from 'styled-components';
import { Colors } from '../../helpers/Colors';
const { colors } = Colors();
import { motion } from 'framer-motion';
import { ISpanIndexStyled, IDivImgContainerStyled } from '../../interfaces/Interfaces';
import Fontsizes from '../../helpers/fontSizes';
const { generalFont } = Fontsizes();
import { IMobileTitle } from '../../interfaces/Interfaces';

export const SectionStyled  = styled.section`
     display: grid;
     min-height: 80vh; 
     width:88%;
     margin:0 auto;
     grid-template-columns: 100%;
     position: relative;
     z-index: 1;  
     
     @media screen and (min-width:1025px) {
      grid-template-columns: 50% 50%;     
    }
`;

export const ArticleStyled = styled.article`
        height:100%;
        display:grid;
        order:1;
        grid-template-columns:100%;
        grid-template-rows:20 80%;

        @media screen and (min-width:1025px) {
            order:0;
            grid-template-rows:30% 50% 20%;
        }
`;

export const CrewTitleStyled = styled.h2<IMobileTitle>`
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

export const DivTitleStyled = styled.div`
    display:flex;
    align-items:center;
    letter-spacing:4.72px;
`;

export const DivSpanStyled = styled.div`
   display:grid;
   grid-template-columns:15px 15px 15px 15px;
   grid-column-gap:15px;
   justify-content:center;

   @media screen and (min-width:1025px){
    justify-content:flex-start;
   }
`;

export const SpanIndexStyled = styled.span<ISpanIndexStyled>`
    height:15px;
    border-radius:50%;
    background-color:${(props)=> props.value === props.index ? colors.white.hex : '#979797'};
    transition:all 0.6s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color:#eae8e8;
    }
`;

export const ArticleImgStyled = styled.article`
    display:flex;
    align-items:flex-end;
    justify-content:center;
    border-bottom:2px solid rgba(255, 255, 255, 0.2);
    padding-top:20px;

    @media screen and (min-width: 1025px) {
        border-bottom:2px solid transparent;   
        padding-top:0px;
    }
`;

export const DivImgContainerStyled = styled(motion.div)<IDivImgContainerStyled>`
    position:relative;
    width:90%;
    height:90%;
    max-width:514px;

    @media screen and (min-width:1025px) {
        width:100%;
        height:100%;
        max-width:700px;
        top:${(props)=>props.value === 'true' ? '10%':'10%'};
    }
`;