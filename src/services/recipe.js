import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createRecipe = (body, clear, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/cadastrarprofissionais`, body, {
      // minha requisiçao não vai precisar do header
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert("Profissional adicionado com sucesso!!");
      clear();
      setIsLoading(false);
    })
    .catch((err) => {
      alert(err.response.message);
      setIsLoading(false);
    });
};
