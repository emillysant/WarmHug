import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { ScreenContainer, RecipeImage, RecipeContainer } from "./styled";
import Typography from "@material-ui/core/Typography";
import Loading from "../../components/Loading/Loading";

const RecipeDetailPage = () => {
  //useProtectedPage();
  const params = useParams();
  const psychologist = useRequestData(
    [],
    `${BASE_URL}/profissionais${params.id}`
  )

  return (
    <ScreenContainer>
      {psychologist ? (
        <RecipeContainer>
          <RecipeImage src={psychologist.image} />
          <Typography
            gutterBottom
            align={"center"}
            variant={"h5"}
            color={"primary"}
          >
            {psychologist.name}
          </Typography>
          <Typography align={"center"}>{psychologist.description}</Typography>
        </RecipeContainer>
      ) : (
        <Loading />
      )}
    </ScreenContainer>
  );
};

export default RecipeDetailPage;
