import Header from "../../components/Header"
import image1 from '../../assets/1.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import image6 from '../../assets/6.png';
import image7 from '../../assets/7.png';
import image8 from '../../assets/8.png';
import image9 from '../../assets/9.png';
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import SocialIcons from "../../components/SocialIcons";

const images = [image1, image3, image4, image5, image6,image7,image8,image9];

export const About = () => {
    return (
      <>
      <Header/>
      <SocialIcons/>
      <Carousel images={images} />
      <Footer/>
      </>
    )
  }