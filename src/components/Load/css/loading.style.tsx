import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Colors } from '../../../helpers/Colors';
const { colors } = Colors();

export const LoadingTitleStyles = styled(motion.h1)`
    font-size:300%;
    color:white;
    text-align:center;
    font-family: 'Barlow Condensed', sans-serif; 
`;

export const LoadingContainer = styled(motion.div)`
    width:80px;
    height:80px;
    position:relative;   
`;

export const LoadingStyles = styled(motion.section)`
   width:100%;
   height:100%;
   position:fixed;
   top:0;
   left:0;
   background-color:${colors.back.hex};
   display:flex;
   align-items:center;
   justify-content:center;
   z-index:200;
`;