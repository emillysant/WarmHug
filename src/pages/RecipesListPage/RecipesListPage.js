import React from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import { RecipeListContainer, AddRecipeButton } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { useHistory } from "react-router-dom";
import { goToAddRecipes, goToRecipeDetail } from "../../routes/coordinator";
import Loading from "../../components/Loading/Loading";

const RecipesListPage = () => {
  //useProtectedPage()

  const history = useHistory();
  const psychologists = useRequestData([], `${BASE_URL}/profissionais`);
  console.log(psychologists);
  
  const onClickCard = (id) => {
    goToRecipeDetail(history, id);
  };

  const psychologistCards = psychologists.map((psychologist) => {
    return (
      <RecipeCard
        key={psychologist.id}
        name={psychologist.name}
        image={psychologist.image}
        field={psychologist.field}
        onClick={() => onClickCard(psychologist.id)}
      />
    );
  });

  return (
    <RecipeListContainer>
      {psychologistCards.length > 0 ? psychologistCards : <Loading />}
    </RecipeListContainer>
  );
};

export default RecipesListPage;
