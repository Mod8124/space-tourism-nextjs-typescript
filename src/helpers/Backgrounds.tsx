const Background = () => {

  const homeBackground = {
    desktop:'/assets/home/background-home-desktop.jpg',
    tablet:'/assets/home/background-home-tablet.jpg',
    mobile:'/assets/home/background-home-mobile.jpg'
  };

  const crewBackground = {
    desktop:'/assets/home/background-crew-desktop.jpg',
    tablet:'/assets/home/background-crew-tablet.jpg',
    mobile:'/assets/home/background-crew-mobile.jpg'
  };

  const technologyBackground = {
    desktop:'/assets/home/background-technology-desktop.jpg',
    tablet:'/assets/home/background-technology-tablet.jpg',
    mobile:'/assets/home/background-technology-mobile.jpg'
  };

  const destinationBackground = {
    desktop:'/assets/home/background-destination-desktop.jpg',
    tablet:'/assets/home/background-destination-tablet.jpg',
    mobile:'/assets/home/background-destination-mobile.jpg'
  };

  return {
    homeBackground,
    crewBackground,
    technologyBackground,
    destinationBackground
  };
};

export default Background;