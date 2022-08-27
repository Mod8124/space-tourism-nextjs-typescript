import { useEffect, useState } from 'react';

const IndexLogic = () => {
    
  const [animate, setAnimate] = useState<boolean>(true);

  const animationComplete  = () => {
    sessionStorage.setItem('load', JSON.stringify(true));
  };

  useEffect(()=> {
    
    const load = sessionStorage.getItem('load') || null;
    if (load) {
      setAnimate(false);
    } 
  },[ animate ]);

  return {
    animate,
    animationComplete
  };
};

export default IndexLogic;