const Fontsizes = () => {

  const indexSize = {
    desktop:{
      subTitle:'32px',
      title:'150px',
      para:'20px',
      explore:'32px'
    },
    table:{
      subTitle:'20px',
      title:'150px',
      para:'16px',
      explore:'32px',
    },
    mobile:{
      subTitle:'16px',
      title:'80px',
      para:'15px',
      explore:'20px'
    }
  };

  const crewSize ={
    desktop:{
      subTitle:'36px',
      title:'66px',
      para:'20px',
    },
    table:{
      subTitle:'24px',
      title:'40px',
      para:'16px',
    },
    mobile:{
      subTitle:'16px',
      title:'24px',
      para:'15px',
    }
  };

  const technologySize = {
    desktop:{
      subTitle:'20px',
      title:'56px',
      para:'20px',
    },
    table:{
      subTitle:'16px',
      title:'40px',
      para:'16px',
    },
    mobile:{
      subTitle:'14px',
      title:'24px',
      para:'15px',
    }
  };

  const destinationSize = {
    desktop:{
      title:'120px',
      para:'22px',
      links:'18px',
      distance:'16px',
      travel:'32px'
    },
    table:{
      title:'80px',
      para:'16px',
      links:'16px',
    },
    mobile:{
      title:'56px',
      para:'15px',
      links:'14px',
    }
  };

  const generalFont =  {
    desktop:{
      subTitle:'28px'
    },
    table:{
      subTitle:'20px'
    },
    mobile:{
      subTitle:'16px'
    }

  };

  return {
    indexSize,
    crewSize,
    technologySize,
    destinationSize,
    generalFont

  };
};

export default Fontsizes;