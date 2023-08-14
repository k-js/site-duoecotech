import React from 'react';
import imgHome from '../../assets/logotipo.svg';
import './style.css'; // Importe seus estilos CSS aqui

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="image-section">
      <img src={imgHome} alt="" />
      </div>
      <div className="text-section">
        <h2>DuoEcoTech: Navegando a Confluência de Economia, Ecologia e Tecnologia</h2>
        <p>
        Você está pronto para explorar um mundo onde as fronteiras entre economia, ecologia e tecnologia se desvanecem, dando origem a inovações impressionantes e soluções sustentáveis? Apresentamos a você o podcast que desvendará os segredos dessa convergência inspiradora - "DuoEcoTech".

        Embarque conosco em uma jornada auditiva que explora como as forças da natureza e o poder da tecnologia podem trabalhar em harmonia, transformando desafios globais em oportunidades empolgantes. A cada episódio, mergulhamos nas histórias de visionários que estão moldando o futuro, combinando seus conhecimentos em economia, ecologia e tecnologia para criar soluções que reverberam além das fronteiras convencionais.

        Desvendamos os segredos dos drones que monitoram os cantos mais remotos da Terra, da bioengenharia que se inspira na natureza para criar avanços incríveis e das cidades inteligentes que se adaptam às necessidades da natureza e das pessoas. Além disso, descobrimos como a tecnologia está revolucionando nossa compreensão da ecologia, permitindo-nos tomar decisões informadas para um planeta mais saudável.

        "DuoEcoTech" não é apenas um podcast - é uma jornada de descoberta, inspiração e ação. Junte-se a nós enquanto exploramos um futuro onde a ecologia e a tecnologia se entrelaçam de maneira harmoniosa e colaborativa. Está na hora de desvendar o potencial transformador da convergência entre esses dois mundos. Prepare-se para desafiar suas perspectivas, alimentar sua curiosidade e ser parte da mudança.

        Sintonize-se com "DuoEcoTech" e abrace o futuro onde a economia, ecologia e a tecnologia se unem para moldar um mundo mais verde, mais inteligente e mais inspirador. O futuro está chamando - você está pronto para atender?
        </p>
      </div>
    </section>
  );
};

export default MainSection;
