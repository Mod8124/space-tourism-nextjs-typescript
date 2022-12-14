import Head from 'next/head';
import type { NextPage } from 'next';
import Image from 'next/image';
import Particles from 'react-particles';
import ParticlesTheme from '../../src/helpers/ParticlesTheme';
import ParticlesFunction from '../../src/helpers/ParticlesFunctions';
import { useGetSpacesQuery } from '../../src/features/apiSlice';
import Cta from '../../src/components/cta';
import Hook from '../../src/hooks/Hook';
import { ITechnology } from '../../src/interfaces/api/interface';
import { SectionStyled, ArticleCtaStyled, ArticleImgStyled, DivCtaContainerStyled, DivNumberStyled, DivsNumbersStyled,
  DivImgContainerStyled, TitleStyled
} from '../../src/pagesStyles/technology/technology.styles';
import TechLogic from '../../src/hooks/TechLogic';

const Index:NextPage = () => {

  const { data, isLoading } = useGetSpacesQuery('technology');
  const { index, changeIndex, active, changeActive } = Hook();
  const {  HomeParticle } = ParticlesTheme();
  const { mediaQuery } = TechLogic();
  const { particlesInit , particlesLoaded } = ParticlesFunction();
  
  return (
    <main>
      <Head>
        <title>Space-tourism - Technologies</title>
        <meta name="description" content="space Tourism" />
      </Head>
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={
          HomeParticle
        }
      />

      <SectionStyled>

        <TitleStyled mobile={true}><span>03</span> Space lauch 101</TitleStyled>

        <ArticleCtaStyled>

          <TitleStyled mobile={false}><span>03</span> Space lauch 101</TitleStyled>

          <DivCtaContainerStyled>

            <DivsNumbersStyled>
              {data && data.map((tech:ITechnology, i:number)=> (
                <DivNumberStyled value={i} index={index} key={`${tech.name+index}`} onClick={()=>{
                  changeIndex(i);
                  changeActive();
                }}>{i+1}</DivNumberStyled>
              ))}
            </DivsNumbersStyled>

            <div>
              <Cta 
                subTitle="The terminology"
                title={isLoading && 'LAUNCH VEHICLE' || data && data[index].name}
                para={isLoading && 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!' || data && data[index].description}
                type="technology"></Cta>
            </div>

          </DivCtaContainerStyled>

        </ArticleCtaStyled>

        <ArticleImgStyled>
          <DivImgContainerStyled
            initial={{opacity:0,y:'100%'}}
            animate={{opacity:active ? [0.2,1]:[0.1,1], y:active?'0%':'4%'}}
          >
            {data && <Image src={data && mediaQuery === false && data[index].images.landscape || data && mediaQuery === true && data[index].images.portrait} priority={true} alt={data && data[index].portrait + 'img'}  layout="fill" objectFit={mediaQuery ? 'contain':'cover'}/>}
            {isLoading && <Image src={mediaQuery ? '/assets/technology/image-launch-vehicle-portrait.jpg' : '/assets/technology/image-launch-vehicle-landscape.jpg'} priority={true} alt="lauch vehicle img"  layout="fill" objectFit={mediaQuery ? 'contain':'cover'}/>}
          </DivImgContainerStyled>
        </ArticleImgStyled>

      </SectionStyled>
     
    </main>
  );
};

export default Index;