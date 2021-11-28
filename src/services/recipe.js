import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createRecipe = (body, clear, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/profissionais`, body, {
      // minha requisiçao não vai precisar do header
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert(res.data.message);
      clear();
      setIsLoading(false);
    })
    .catch((err) => {
      alert(err.response.message);
      setIsLoading(false);
    });
};
