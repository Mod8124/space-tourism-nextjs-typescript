import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IParaStyled } from '../../interfaces/Interfaces';
import { Colors } from '../../helpers/Colors';
const { colors } = Colors();
import { IDivPlanetStyled } from '../../interfaces/Interfaces';
import Fontsizes from '../../helpers/fontSizes';
const { generalFont } = Fontsizes();

export const SectionStyled = styled.section`
    display: grid;
    min-height: 90vh; 
    width:100%;
    padding-top:25px;
    padding-bottom:25px;
    margin:0 auto;
    grid-template-columns: 100%;
    position: relative;
    z-index: 5;  
    overflow:hidden;

    @media screen and (min-width:1025px) {
        grid-template-columns:50% 50%;
        width:88%;
        min-height: 80vh; 
        padding-top:0;
        padding-bottom:0;
    }
`;

export const ArticleImgStyled = styled.article`
    display:grid;
    grid-template-columns:100%;
    grid-template-rows:25% 75%;
    min-height:300px;
    padding-bottom:20px;

    h2 {
        color:white;
        display:flex;
        align-items:center;
        font-size:${generalFont.mobile.subTitle};
        letter-spacing:4.72px;
        margin:0 auto;
        padding-top:10px;
        text-align:center;
        text-transform:uppercase;
    }

    span {
        color:${colors.sub.hex};
        padding-right:0px;
        font-weight:600;
    }

    @media screen and (min-width:400px) {
        span {
        padding-right:14px;
        }
    }

    @media screen and (min-width:700px) {
        h2 {
            font-size:${generalFont.table.subTitle};
        }
    }

    @media screen and (min-width:1025px) {
        h2 {
            padding-top:0;
            margin:0;
            text-align:start;
            font-size:${generalFont.desktop.subTitle};
        }
    }
`;

export const DivImgStyled = styled(motion.div)`
    position:relative;
    border-radius:50%;
    max-width:450px;
    max-height:450px;
    margin:0 auto;
    width:100%;

    img {
        margin:0 auto;
    }
    
    @media screen and (min-width: 1025px) {
    max-width:550px;
    max-height:550px;
    margin:0;
    box-shadow: 0px 0px 40px 20px #0B0D17 !important;
    }

`;

export const ArticleCtaStyled = styled.article`
    display:grid;
    grid-template-columns:100%;
    grid-template-rows:20% 60% 20%;
    width:94%;
    max-width:700px;
    min-height:510px;
    margin:0 auto;
    text-align:center;
    justify-self:flex-end;

    @media screen and (min-width:1025px) {
    width:88%;
    max-width:none;
    margin:0;
    text-align:start;
    max-width:none;
    grid-template-rows:30% 50% 20%;
    }
`;

export const DivsPlanetsStyled = styled.div`
    display:flex;
    text-transform:uppercase;
    align-items:center;
    margin:0 auto;

    @media screen and (min-width:1025px) {
        margin:0;
        text-align:start;
    }
    
`;

export const DivPlanetStyled = styled.div<IDivPlanetStyled>`
    padding-bottom:20px;
    margin-right:20px;
    letter-spacing:2.7px;
    cursor: pointer;
    border-bottom:4px solid ${(props)=> props.value === props.index ? 'white':'transparent'};
    transition:all 0.5s ease-in-out;
    color:${colors.sub.hex};

    &:hover {
        border-bottom:4px solid #d6d4d4;
    }
`;

export const DivsInfoStyled = styled.div`
    border-top:4px solid rgba(255, 255, 255, 0.04);
    display:grid;
    padding-top:20px;
    grid-template-columns:50% 50%;
`;

export const ParaStyled = styled.p<IParaStyled>`
    padding-bottom:10px;
    text-transform:uppercase;
    margin:0;
    color:${(props) => props.value === 'true' ? colors.sub.hex : colors.white.hex  }
`;