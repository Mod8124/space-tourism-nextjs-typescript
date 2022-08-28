import Head from 'next/head';
import type { NextPage } from 'next';
import Particles from 'react-particles';
import ParticlesTheme from '../../src/helpers/ParticlesTheme';
import ParticlesFunction from '../../src/helpers/ParticlesFunctions';
import Cta from '../../src/components/cta';
import { ICrew } from '../../src/interfaces/api/interface';
import { useGetSpacesQuery } from '../../src/features/apiSlice';
import Hook from '../../src/hooks/Hook';
import Image from 'next/image';
import { SectionStyled, ArticleStyled, DivTitleStyled, DivSpanStyled, SpanIndexStyled, ArticleImgStyled, DivImgContainerStyled, CrewTitleStyled } from '../../src/pagesStyles/crew/crew.styles';

const Index:NextPage = () => {

  const { data, isLoading } = useGetSpacesQuery('crew');
  const { index, changeIndex, active, changeActive } = Hook();
  const { CrewParticle } = ParticlesTheme();
  const { particlesInit , particlesLoaded } = ParticlesFunction();

  return (

    <main>
      <Head>
        <title>Space-tourism - Crew</title>
        <meta name="description" content="space Tourism" />
      </Head>
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={ CrewParticle}
      />

      <SectionStyled>

        <CrewTitleStyled mobile={true}><span className='padding'>02</span> meet your crew</CrewTitleStyled>

        <ArticleStyled>

          <DivTitleStyled>
            <CrewTitleStyled mobile={false}><span className='padding'>02</span> meet your crew</CrewTitleStyled>
          </DivTitleStyled>

          <Cta 
            subTitle={isLoading && 'COMMANDER' ||data && data[index].role}
            title={isLoading && 'DOUGLAS HURLEY' ||data && data[index].name}
            para={isLoading && 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.' || data && data[index].bio}
            type="crew"></Cta>

          <DivSpanStyled>
            {data && data.map((data:ICrew, i:number)=> (
              <SpanIndexStyled value={i} index={index} key={`crew${i}`} onClick={()=> {
                changeActive();
                changeIndex(i);
              }}></SpanIndexStyled>
            ))}
          </DivSpanStyled>

        </ArticleStyled>

        <ArticleImgStyled>
          <DivImgContainerStyled
            initial={{ x: '100%', opacity: 0.8, scale:0.2, }} 
            animate={{ x: active ? '0%':'11%', opacity: active ? [0.2, 1] :[0.4, 1], scale:1, }} 
            value={index === 3 ? 'true' : ''}>
            {data && <Image src={data && data[index].images.png} alt={data && data[index].name + 'img'} priority={true} layout="fill" objectFit="contain"></Image>}
            {isLoading && <Image src="/assets/crew/image-douglas-hurley.png" alt="crew" priority={true} layout="fill" objectFit="contain"></Image>}
          </DivImgContainerStyled>
        </ArticleImgStyled>

      </SectionStyled>
    </main>
  );
};

export default Index;