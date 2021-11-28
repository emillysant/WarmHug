import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import {
  ScreenContainer,
  RecipeImage,
  RecipeContainer,
  RecipeText,
} from "./styled";
import Typography from "@material-ui/core/Typography";
import Loading from "../../components/Loading/Loading";

const RecipeDetailPage = () => {
  //useProtectedPage();
  const params = useParams();
  const psychologist = useRequestData(
    [],
    `${BASE_URL}/profissionais/${params.id}`
  );

  return (
    <ScreenContainer>
      {psychologist ? (
        <RecipeContainer>
          <RecipeImage src={psychologist.image} />
          <RecipeText>
            <Typography
              gutterBottom
              align={""}
              variant={"h6"}
              color={"primary"}
            >
              {psychologist.name}
            </Typography>
            <Typography align={"center"} color={"primary"}>
              {psychologist.email}
            </Typography>
            <Typography align={"center"} color={"primary"}>
              {psychologist.description}
            </Typography>
          </RecipeText>
        </RecipeContainer>
      ) : (
        <Loading />
      )}
    </ScreenContainer>
  );
};

export default RecipeDetailPage;
