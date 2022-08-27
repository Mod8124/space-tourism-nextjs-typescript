import styled from 'styled-components';
import { Colors } from '../../helpers/Colors';
const { colors } = Colors();
import Fontsizes from '../../helpers/fontSizes';
const { indexSize, crewSize, destinationSize, technologySize } = Fontsizes();
import { ICtaTypeStyle } from '../../interfaces/Interfaces';
import { motion } from 'framer-motion';

export const CtaStyle = styled(motion.article)`
  width:100%;
  height:100%;
  font-family: 'Bellefair', serif;
  font-weight:400;
`;

export const CtaTitleStyle = styled(motion.h1)<ICtaTypeStyle>`
    text-transform:uppercase;
    font-weight:400;
    color:${colors.white.hex};
    font-family: 'Bellefair', serif;
    transition:all 0.5s ease-in-out;
    cursor: pointer;
    width:90%;
    margin:0 auto;
    padding-bottom:16px;
    text-align:center;
    font-size:${(props)=>props.type === 'index' ? indexSize.mobile.title : 
    props.type === 'destination' ? destinationSize.mobile.title :
      props.type === 'crew' ? crewSize.mobile.title :
        technologySize.mobile.title
};

@media screen and (min-width:700px) {
  font-size:${(props)=>props.type === 'index' ? indexSize.table.title : 
    props.type === 'destination' ? destinationSize.table.title :
      props.type === 'crew' ? crewSize.table.title :
        technologySize.table.title
};
}

@media screen and (min-width:1025px) {
  text-align:start;
  margin:0;
  padding-bottom:0px;
  font-size:${(props)=>props.type === 'index' ? indexSize.desktop.title : 
    props.type === 'destination' ? destinationSize.desktop.title :
      props.type === 'crew' ? crewSize.desktop.title :
        technologySize.desktop.title
};
}

    span {
      transition:all 0.4s ease-in-out;
      transform:scale(1, 1);
    }

    &:hover span {
      font-size:120%;
      color:rgba(255, 255, 255, 0.4);

    }
`;

export const CtaSubTitleStyle = styled.h4<ICtaTypeStyle>`
   text-transform:uppercase;
   font-family: 'Bellefair', serif;
   color:${colors.sub.hex};
   letter-spacing:4px;
   margin:0px;
   text-align:center;
   padding-bottom:20px;
   font-size:${(props)=>props.type === 'index' ? indexSize.desktop.subTitle :
    props.type === 'crew' ? crewSize.desktop.subTitle :
      technologySize.desktop.subTitle
};

  @media screen and (min-width:1025px) {
    text-align:start;
    padding-bottom:10px;
  }

`;

export const CtaParaStyle = styled.p<ICtaTypeStyle>`
   font-family: 'Barlow Condensed', sans-serif; 
   color:${colors.sub.hex};
   line-height:32px;
   width:100%;
   margin:0 auto;
   text-align:center;
   font-size:${(props)=>props.type === 'index' ? indexSize.desktop.para : 
    props.type === 'destination' ? destinationSize.desktop.para :
      props.type === 'crew' ? crewSize.desktop.para :
        technologySize.desktop.para
};

  @media screen and (min-width:1025px) {
      text-align:start;
      margin:0;
      width:80%;
    }

`;