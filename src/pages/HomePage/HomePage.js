import React from "react";
import {
  FirstContainer,
  FirstImg,
  FirstImg2,
  FirstText,
  SecondContainer,
  SecondImg,
  SecondText,
  DiversityImg,
  Footer,
  ContainerFooter,
  AFooter,
  ThirdContainer,
  FourthContainer,
} from "./styled";
import mulhernegra from "../../img/mulhernegra.jpg";
import mulheresnegras from "../../img/mulheresnegras.jpg";
import tarjaazul from "../../img/tarjaazul.png";
import maos from "../../img/maos.jpg";
import negro from "../../img/negro.png";
import pcd from "../../img/pcd.png";
import lgbt from "../../img/lgbt.png";
import { Button, Typography } from "@material-ui/core";
import facebook from "../../assets/icons8-facebook-24.png";
import instagram from "../../assets/icons8-instagram-logo-24.png";
import twitter from "../../assets/icons8-twitter-24.png";
import {
  goToHomePage,
  goToLogin,
  goTLoginPageProfissional,
  goToRecipesList,
} from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  return (
    <div style={{backgroundColor: "#D5EFEC"}}>
      <FirstContainer>
        <FirstImg src={tarjaazul} alt={""} />
        <FirstImg2 src={mulhernegra} alt={"mulher negra"} />
      </FirstContainer>

      <div style={{ textAlign: "center", marginTop: "120px" }}>
        <h1>Encontre aqui o profissional que tem a sua cara</h1>
      </div>

      <SecondContainer>
        <Button onClick={() => goToRecipesList(history)}>Psicologos</Button>
      </SecondContainer>

      <ThirdContainer>
        <SecondText>
          <h1>Quer trabalhar conosco?</h1>
          <h2>Faça login e se candidate</h2>
          <div>
            <Button onClick={() => goToLogin(history)}>Cadastre-se</Button>
          </div>
        </SecondText>
        <SecondImg src={mulheresnegras} alt={"mulheresnegras"} />
      </ThirdContainer>

      <FourthContainer>
        <SecondImg src={maos} alt={"maos"} />
        <SecondText>
          <h2>
            Uma importante iniciativa do campo da saúde mental que vai facilitar
            a vida de quem precisa de acompanhamento especializado!
          </h2>
        </SecondText>
      </FourthContainer>

      <Footer>
        <ContainerFooter>
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
