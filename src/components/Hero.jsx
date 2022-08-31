import {
  HeroContainer,
  HeroLogo,
  HeroButton,
  HeroSection,
} from "./ComponentsStyle";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <img
          className="image-container"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20191213145442/img40.png"
        />
        <HeroLogo>
          <h1>Sur home</h1>
          <p>Hace de tu hogar un lugar mejor</p>
          <HeroButton>Unite</HeroButton>
        </HeroLogo>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
