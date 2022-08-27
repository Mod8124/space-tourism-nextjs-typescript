const Fontsizes = () => {

  const indexSize = {
    desktop:{
      subTitle:'28px',
      title:'150px',
      para:'18px',
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
      subTitle:'32px',
      title:'56px',
      para:'18px',
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
      subTitle:'16px',
      title:'56px',
      para:'18px',
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
      title:'100px',
      para:'18px',
      links:'16px',
      distance:'14px',
      travel:'28px'
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