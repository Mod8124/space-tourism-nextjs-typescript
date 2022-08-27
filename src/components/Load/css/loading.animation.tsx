const loadingAnimation = ( ) => {
    
  const loadStyles = {
    initial:{
      clipPath: 'inset(0 0 0 0)'
    },
    animate:{
      clipPath:' inset(50% 0 50% 0)',
      opacity:[1,0]
    },
    transition:{
      ease: 'linear',
      duration: 0.6, 
      delay:1.1, 
    }
  };

  const loadContaienr = {
    animate:{
      rotate: [0, 180, 360, 720, 720], 
      left:['20%', '-1%']
    },
    initial:{
      left:'20%', 
      rotate:0,
      opacity:1, 
      zIndex:2
    },
    transition:{
      ease: 'linear', 
      duration: 0.8
    }
  };

  const loadTitle = {
    initial:{
      opacity:0, 
      zIndex:1
    },
    transition:{
      delay:0.3, 
      duration:0.6
    },
    animate:{
      opacity:1
    }
  };

  return {
    loadStyles,
    loadContaienr,
    loadTitle
  };
};

export default loadingAnimation;