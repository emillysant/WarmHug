import React from "react";
import {
  FirstContainer,
  FirstImg,
  FirstImg2,
  FirstText,
  SecondContainer,
  SecondImg,
  SecondText,
  ThirdContainer,
  DiversityImg,
  Footer,
  ContainerFooter,
  AFooter,
  ButtonDiv
} from "./styled";
import mulhernegra from "../../img/mulhernegra.jpg";
import mulheresnegras from "../../img/mulheresnegras.jpg";
import tarjaazul from "../../img/tarjaazul.png";
import maos from "../../img/maos.jpg";
import Container from "@material-ui/core/Container";
import pessoas from "../../img/pessoas.png";
import negro from "../../img/negro.png";
import pcd from "../../img/pcd.png";
import lgbt from "../../img/lgbt.png";
import { Button } from "@material-ui/core";
import facebook from "../../assets/icons8-facebook-24.png";
import instagram from "../../assets/icons8-instagram-logo-24.png";
import twitter from "../../assets/icons8-twitter-24.png";
import {
  goToHomePage,
  goToLogin,
  goTLoginPageProfissional,
} from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <Container maxWidth="100vw">
       
        <FirstContainer>
          <FirstImg src={tarjaazul} alt={""} />
          <FirstImg2 src={mulhernegra} alt={"mulher negra"}/>
        </FirstContainer>  
        <SecondContainer>
         <ButtonDiv> 
          <Button>
            <DiversityImg src={negro} alt={""} />
            <legend>RACIAL</legend>
          </Button>
         </ButtonDiv>
          <Button>
            <DiversityImg src={lgbt} alt={""} />
            <legend>LGBTQIA+</legend>
          </Button>
          <Button>
            <DiversityImg src={pcd} alt={""} />
            <legend>PCD</legend>
          </Button>
        </SecondContainer>
        <ThirdContainer>
          <SecondText>
            <div>
              <h1>Quer trabalhar conosco?</h1>
              <h2>Faça o cadastro e se candidate!</h2>
            </div>
          </SecondText>
          <SecondImg src={mulheresnegras} alt={"mulheresnegras"} />
        </ThirdContainer>
        <ThirdContainer>
          <SecondImg src={maos} alt={"maos"} />
          <SecondText>
            <h2>Sua diversidade é importante para a terapia.</h2>
            <h3> e venha conhecer nossos profissionais.</h3>
          </SecondText>
        </ThirdContainer>  
      </Container>
      <Footer>
        <ContainerFooter>
          <div>
            {/* <ul>
              <li>
                <h3>Política de Privacidade</h3>
              </li>
              <li>
                <h3>Dicas de Segurança</h3>
              </li>
              <li>
                <h3>Termos de Condições de Uso</h3>
              </li>
              <li>
                <h3>Código de Condulta</h3>
              </li>
            </ul> */}
          </div>
          <div>
            <h2>Siga-nos nas redes sociais</h2>
            <AFooter href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="ícone facebok" />
            </AFooter>
            <AFooter href="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="ícone instagram" />
            </AFooter>
            <AFooter href="https://twitter.com/" target="_blank">
              <img src={twitter} alt="ícone twitter" />
            </AFooter>
          </div>
        </ContainerFooter>
      </Footer>
    </div>
  );
};

export default HomePage;
