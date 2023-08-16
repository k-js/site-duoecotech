import React from 'react';
import './style.css'; // Importar o arquivo de estilos CSS

const ServicesProducts = () => {
  return (
    <div className="services-products-container">
      <div className="service-item">
        <h2>Vodcast DuoEcoTech</h2>
        <p>Destacamos o vodcast "DuoEcoTech" como nosso carro-chefe.</p>
      </div>
      <div className="service-item">
        <h2>E-books</h2>
        <p>Aprenda com nossos E-books informativos.</p>
      </div>
      <div className="service-item">
        <h2>Cursos Online</h2>
        <p>Expanda seu conhecimento com nossos cursos online.</p>
      </div>
      <div className="service-item">
        <h2>Consultoria</h2>
        <p>Potencialize sua estratégia com nossa consultoria especializada, onde a expertise encontra a inovação para o sucesso do seu negócio.</p>
      </div>
      <div className="service-item">
        <h2>Eventos</h2>
        <p>Junte-se a nós em eventos extraordinários, onde o conhecimento se encontra com a inspiração. Descubra oportunidades únicas para aprender, conectar e prosperar.</p>
      </div>
      <div className="service-item">
        <h2>Webinars</h2>
        <p>Explore o futuro do interativo com nossos webinars envolventes. Participe e adquira insights valiosos dos principais especialistas da indústria.</p>
      </div>
    </div>
  );
};

export default ServicesProducts;
