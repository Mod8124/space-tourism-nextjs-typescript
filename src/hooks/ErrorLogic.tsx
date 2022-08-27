import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ErrorLogic = () => {
  const router = useRouter();
  useEffect(()=> {
        
    setTimeout(()=>{
      router.push('/');
    },1940);
  },[router]);

  const ovni = {
    animate:{
      x:'0%',
    },
    transition:{
      duration:0.2,
      delay:0.3,
    },
    initial:{
      x:'-200%'
    }
  };
    
  const particles = {
    initial : {
      opacity:0
    },
        
    transition :{
      delay:0.7,
      duration:0.5
    },
        
    animate : {
      opacity:1
    }
  };

  const alien = {
    initial:{
      y:'0%'
    },
    animate:{
      y:'-47%', 
      opacity:[1, 1, 1, 0]
    },
    transition:{
      delay:0.8,
      duration:0.5
    }
  };

  const background = {
    transition:{
      delay:1.6
    },
    animate:{
      y:'-100%'
    }
  };

  return {
    particles,
    ovni,
    alien,
    background
  };
        
};

export default ErrorLogic;