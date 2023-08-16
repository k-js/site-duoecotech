
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import MainSection from "../../components/MainSection"
import SocialIcons from "../../components/SocialIcons"
import image1 from '../../assets/1.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';

const images = [image1, image3, image4];

export const Home = () => {
    return (
      <>
      <Header/>
      <SocialIcons/>
      <MainSection/>
      <Carousel images={images} />
      <Footer/>
      </>
    )
  }