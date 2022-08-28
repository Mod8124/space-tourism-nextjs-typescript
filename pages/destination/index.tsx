import Head from 'next/head';
import type { NextPage } from 'next';
import Particles from 'react-particles';
import ParticlesTheme from '../../src/helpers/ParticlesTheme';
import ParticlesFunction from '../../src/helpers/ParticlesFunctions';
import Cta from '../../src/components/cta';
import { useGetSpacesQuery } from '../../src/features/apiSlice';
import Hook from '../../src/hooks/Hook';
import { IDestinations } from '../../src/interfaces/api/interface';
import Image from 'next/image';
import { SectionStyled, ArticleCtaStyled, ArticleImgStyled, DivImgStyled, DivsPlanetsStyled, DivPlanetStyled, DivsInfoStyled, ParaStyled } from '../../src/pagesStyles/destination/destination.styles';

const Index:NextPage = () => {

  const { data, isLoading }  = useGetSpacesQuery('destinations');
  const { index, changeIndex } = Hook();
  
  const { DestinationParticle } = ParticlesTheme();
  const { particlesInit } = ParticlesFunction();

  return (
    <main>
      <Head>
        <title>Space-tourism - Destination</title>
        <meta name="description" content="space Tourism" />
      </Head>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={ DestinationParticle }
      />
      <SectionStyled>

        <ArticleImgStyled>
          <h2><span>01</span> Pick your destination </h2>
  
          <DivImgStyled
            animate={{rotate:[0, 180, 360,720]}}
            transition={{ duration:40, repeat: Infinity }}
          >
            {data && <Image src={data && data[index].images.webp} alt={data && data[index].name + 'img'} priority={true} layout="fill" objectFit="contain"/>}
            {isLoading && <h3>loading....</h3>}
          </DivImgStyled>

        </ArticleImgStyled>

        <ArticleCtaStyled>
          <DivsPlanetsStyled>
            {data && data.map((data:IDestinations, i:number)=> (
              <DivPlanetStyled value={i} index={index} key={i + 'destinations'} onClick={()=> changeIndex(i)}>
                {data.name}
              </DivPlanetStyled>
            ))}
          </DivsPlanetsStyled>
          <Cta 
            title={isLoading && 'loading....' || data && data[index].name}
            para={isLoading && 'loading...' ||data && data[index].description}
            type="destination"></Cta>

          <DivsInfoStyled>

            <div>
              <ParaStyled value="true">avg.distance</ParaStyled>
              <ParaStyled>{data && data[index].distance}</ParaStyled>
            </div>
            <div>
              <ParaStyled value="true">est.traveltime</ParaStyled>
              <ParaStyled>{data && data[index].travel}</ParaStyled>
            </div>

          </DivsInfoStyled>
        </ArticleCtaStyled>

      </SectionStyled>
    </main>
  );
};

export default Index;