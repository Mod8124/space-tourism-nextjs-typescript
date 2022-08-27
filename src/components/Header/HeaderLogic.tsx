import { useState } from 'react';

const HeaderLogic = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
 
  const handleMenuActive = ():void => {
    setMenuActive(!menuActive);
  };

  return {
    menuActive,
    handleMenuActive
  };
};

export default HeaderLogic;