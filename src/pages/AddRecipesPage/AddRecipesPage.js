import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { RecipeContainer, ScreenContainer, LogoImage } from "./styled";
import AddRecipesForm from "./AddRecipesForm";
import Typography from "@material-ui/core/Typography";
import psicologo from "../../img/psicologo.png";

const AddRecipePage = () => {
  useProtectedPage();
  return (
    <ScreenContainer>
      <RecipeContainer>
        <LogoImage src={psicologo} />
        <Typography
          gutterBottom
          variant={"h6"}
          align={"center"}
          color={"textPrimary"}
        >
          Crie seu perfil
        </Typography>
        <AddRecipesForm />
      </RecipeContainer>
    </ScreenContainer>
  );
};

export default AddRecipePage;
