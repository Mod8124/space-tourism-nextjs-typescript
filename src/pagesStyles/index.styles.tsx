import styled from 'styled-components';

export const SectionStyled = styled.section`
    display: grid;
    min-height: 80vh; 
    width:90%;
    margin:0 auto;
    position: relative;
    z-index: 5;  
    grid-template-columns:100%;
    transition:all 0.5s;

    @media screen and (min-width:1025px) {
        grid-template-columns: 50% 50%;
        width:88%;
    }
`;

export const ArticleCtaStyled = styled.article`
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const ArticleCtaContainerStyled = styled.div`
    width:80%;
`;

export const ArticleStyled = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ParaExploreStyled = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width:80%;
    height: 80%;
    max-width: 200px;
    max-height: 200px;
    padding:40px;
    font-size: 32px;
    letter-spacing: 2px;
    background-color:white;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    position: relative;
    z-index: 2;

    @media screen and (min-width:700px) {
        max-width: 230px;
        max-height: 250px;
    }

    @media screen and (min-width:1025px) {
        max-width: 260px;
        max-height: 260px;
    }

    &:hover {
     box-shadow: 0px 0px 1px 90px rgba(255, 255, 255, 0.1);
    }
`;