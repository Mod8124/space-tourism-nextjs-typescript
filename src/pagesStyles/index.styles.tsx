import styled from 'styled-components';

export const SectionStyled = styled.section`
    display: grid;
    padding-top:40px;
    padding-bottom:25px;
    min-height: 80vh; 
    height:100%;
    width:100%;
    margin:0 auto;
    z-index:5;
    position: relative;
    grid-template-columns:100%;
    transition:all 0.5s;
    overflow:hidden;

    @media screen and (min-width:1025px) {
        grid-template-columns: 50% 50%;
        width:98%;
        padding-top:0px;
        padding-bottom:0;
    }

    @media screen and (min-width: 1500px) {
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
    min-height:290px;
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

    @media screen and (min-width:700px) {
        max-width: 230px;
        max-height: 250px;
    }

    @media screen and (min-width:1025px) {
        max-width: 320px;
        max-height: 320px;
    }

    &:hover {
     box-shadow: 0px 0px 1px 90px rgba(255, 255, 255, 0.1);
    }
`;