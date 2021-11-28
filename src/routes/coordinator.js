export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/cadastro");
};

export const goToAddRecipes = (history) => {
  history.push("/cadastrarprofissionais");
};

export const goToRecipeDetail = (history, id) => {
  history.push(`/detalhe/${id}`);
};

export const goToRecipesList = (history) => {
  history.push("/profissionais");
};

export const goToHomePage = (history) => {
  history.push("/");
};

