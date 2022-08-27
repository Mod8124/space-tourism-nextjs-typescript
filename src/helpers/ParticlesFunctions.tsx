import { useCallback } from 'react';
import { loadFull } from 'tsparticles';

const ParticlesFunction = () => {

  const particlesInit = useCallback(async (engine:any) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
    
  const particlesLoaded = useCallback(async (container:any) => {
    await console.log(container);
  }, []);

  return {
    particlesInit,
    particlesLoaded
  };
};

export default ParticlesFunction;