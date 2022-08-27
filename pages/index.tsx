import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Particles from 'react-particles';
import ParticlesTheme from '../src/helpers/ParticlesTheme';
import ParticlesFunction from '../src/helpers/ParticlesFunctions';
import Cta from '../src/components/cta';
import { IndexText } from '../src/helpers/IndexText';
import Load from '../src/components/Load';
import IndexLogic from '../src/hooks/IndexLogic';
import { ParaExploreStyled, SectionStyled, ArticleStyled, ArticleCtaStyled, ArticleCtaContainerStyled } from '../src/pagesStyles/index.styles';

const Home: NextPage = () => {

  const {  HomeParticle } = ParticlesTheme();
  const { particlesInit , particlesLoaded } = ParticlesFunction();
  const { text } = IndexText();
  const { animate, animationComplete } = IndexLogic();

  return (
    <main>
      <Head>
        <title>Space-tourism - Home</title>
        <meta name="description" content="space Tourism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
        id="tsparticles"
        init={ particlesInit }
        loaded={ particlesLoaded }
        className={ styles.adios }
        options={ HomeParticle }
      />
      <SectionStyled>

        <ArticleCtaStyled>
          <ArticleCtaContainerStyled>
            <Cta 
              subTitle={text.subTitle}
              title={text.title} 
              para={text.para}
              type="index"></Cta>
          </ArticleCtaContainerStyled>
        </ArticleCtaStyled>

        <ArticleStyled>
          <ParaExploreStyled>Explore</ParaExploreStyled>
        </ArticleStyled>

      </SectionStyled>
      {animate && <Load complete={animationComplete}></Load> }
    </main>
  );
};

export default Home;
