import { useEffect, useState } from 'react';

const Hook= () => {
  const [index, setIndex] = useState<number>(0);
  const [active, setActive] = useState<boolean>(true);

  const changeActive = ():void => {
    setActive(!active);
  };

  const changeIndex = (index:number):void => {
    setIndex(index);
  };

  return {
    index,
    changeIndex,
    active,
    changeActive
  };
};

export default Hook;