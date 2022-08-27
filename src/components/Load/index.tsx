import { FC } from 'react';
import Image from 'next/image';
import { LoadingStyles,LoadingContainer, LoadingTitleStyles } from './css/loading.style';
import { ILoad } from '../../interfaces/Interfaces';
import loadingAnimation from './css/loading.animation';

const index:FC<ILoad> = ({complete}) => {

  const { loadStyles, loadContaienr, loadTitle } = loadingAnimation();
  return (
    <LoadingStyles
      onAnimationComplete={complete}
      initial={loadStyles.initial}
      animate={loadStyles.animate}
      transition={loadStyles.transition}
    >
      <LoadingContainer
        animate={loadContaienr.animate}
        initial={loadContaienr.initial}
        transition={loadContaienr.transition}
      >
        <Image src="/assets/shared/logo.svg" alt="logo space-tourism" priority={true}  layout="fill" objectFit="contain"/>
      </LoadingContainer>
      
      <LoadingTitleStyles
        initial={loadTitle.initial}
        transition={loadTitle.transition}
        animate={loadTitle.animate}
      >Space Tourism</LoadingTitleStyles>
    </LoadingStyles>
  );
};

export default index;