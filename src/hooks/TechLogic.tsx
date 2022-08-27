import { useEffect, useState } from 'react';

const TechLogic = () => {
  const [mediaQuery, setMediaQuery] = useState<boolean>(false);

  useEffect(()=> {
    const mediaQuery = window.matchMedia('(min-width: 1025px)');
    const { matches } = mediaQuery;

    if (matches) {
      setMediaQuery(true);
    }
  },[]);

  return {
    mediaQuery
  };
};

export default TechLogic;