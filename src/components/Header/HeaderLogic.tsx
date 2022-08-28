import { useEffect, useState } from 'react';

const HeaderLogic = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [isFirefox, setIsFirefox] = useState<boolean>(false);

  useEffect(()=> {
    let userAgent = navigator.userAgent;
    if (userAgent.match(/firefox|fxios/i)) {
      setIsFirefox(true);
    }

  },[]);
 
  const handleMenuActive = ():void => {
    setMenuActive(!menuActive);
  };

  return {
    menuActive,
    handleMenuActive,
    isFirefox,
  };
};

export default HeaderLogic;