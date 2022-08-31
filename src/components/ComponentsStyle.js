import styled from "styled-components";

// Navbar styles

export const Navigation = styled.div`
  height: 70px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  font-size: 2.3rem;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 26%;

  .logo {
    width: 90%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 14%;
  }

  @media (min-width: 1024px) {
    width: 13%;
  }
`;

export const List = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  margin: 30px 20px 20px 20px;
  flex-direction: row;
  justify-content: space-around;
  color: black;
`;

export const ListElement = styled.li`
  display: none;
  padding: 0 14px 14px 10px;
  margin: -6px 14px 14px 0;

  @media (min-width: 768px) {
    display: inline;
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    display: inline;
    font-size: 1.6rem;
    color: black;
  }
`;

export const DropdownButton = styled.div`
  display: inline;
  width: 100%;
  .mobile-menu-button {
    position: absolute;
    right: 0;
    padding: 13px;
  }

  @media (max-width: 480px) and (min-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
export const MobileMenu = styled.div``;
export const DropdownMenu = styled.div`
  display: none;
`;

// Hero section styles

export const HeroSection = styled.div`
  position: sticky;
`;

export const HeroContainer = styled.div`
  width: 100%;

  .image-container {
    height: 600px;
    width: 100vw;
    filter: blur(2px);
  }

  @media (min-width: 768px) {
    .image-container {
      filter: blur(2px);
      width: 100vw;
    }
  }

  @media (min-width: 1024px) {
    .image-container {
      filter: blur(2px);
      width: 100vw;
    }
  }
`;

export const HeroLogo = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  color: whitesmoke;
  margin: 20px 0 0 0;

  h1,
  p {
    border: 4px solid white;
    padding: 10px 50px;
    position: relative;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 20px;
    margin: 20px 20px 20px 20px;
  }
  h1:hover {
    background: -webkit-linear-gradient(gray, gainsboro);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 480px) {
    font-size: 2.3rem;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

export const HeroButton = styled.button`
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: blanchedalmond;
    color: gray;
  }
`;

export const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100px;
  width: 100%;

  .info-image {
    height: 2.727rem;
    margin-left: 20px;
  }
`;
export const ExtraInfoSpan = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  hr {
    height: 60%;
    border-right: solid gainsboro 1px;
  }
  .info-text {
    padding: 13px;
    line-height: 25px;
  }
`;

// Footer styles

export const FooterContainer = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  border: 2px solid red;
  background-color: #070617;

  @media only screen and (min-width: 1280px) {
    .footer-column-container {
      width: 1200px;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 1139px) {
    .footer-column-container .social {
      width: 1000px;
      display: block;
    }
    .social h1 {
      margin: 0px;
    }
  }
  @media only screen and (max-width: 950px) {
    width: 33%;
    font-size: 14px;
    font-size: 13px;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
    font-size: 14px;
    font-size: 13px;
  }

  @media only screen and (max-width: 340px) {
    width: 100%;
  }
`;

export const FooterColumn = styled.div`
  width: 190px;
  height: auto;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0px 20px 20px 20px;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: 17px;
    padding: 20px 0px 5px 0px;
    color: rgba(255, 255, 255, 0.2);
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.25em;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    color: #999999;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
  }
  @media only screen and (max-width: 950px) {
    width: 33%;
  }
  h1 {
    font-size: 14px;
  }
  ul li {
    font-size: 13px;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
    h1 {
      font-size: 14px;
    }
    ul li {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 340px) {
    width: 100%;
  }
`;
