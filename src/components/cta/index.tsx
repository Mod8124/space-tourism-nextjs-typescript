import { FC } from 'react';
import { CtaStyle, CtaSubTitleStyle, CtaTitleStyle, CtaParaStyle } from './cta.style';
import { ICtaStyle } from '../../interfaces/Interfaces';
import { CtaStyleAnimate, CtaTitleStyleAnimate } from './cta.animate';

const Index:FC<ICtaStyle> = ({subTitle, title, para, type}) => {
  return (
    <CtaStyle
      initial={CtaStyleAnimate.initial}
      animate={CtaStyleAnimate.animate}
      transition={CtaStyleAnimate.transition}
    >
      {subTitle && <CtaSubTitleStyle type={type}>{subTitle}</CtaSubTitleStyle>}

      <CtaTitleStyle 
        initial={CtaTitleStyleAnimate.initial} 
        animate={CtaTitleStyleAnimate.animate} 
        type={type}>{title && title.split('').map((str, index)=>{
          if (index % 2 !== 0) {
            return <span key={`str${index}`}>{str}</span>;
          } else {
            return str;
          }
        })}</CtaTitleStyle>
      
      <CtaParaStyle type={type}>{para && para}</CtaParaStyle>
    </CtaStyle>
  );
};

export default Index;