import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { InputsContainer, AddRecipeFormContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { createRecipe } from "../../services/recipe";
import CircularProgress from "@material-ui/core/CircularProgress";

const AddRecipeForm = () => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    description: "",
    image: "",
    field: ",",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    createRecipe(form, clear, setIsLoading);
    //console.log(form)
  };

  return (
    <form onSubmit={onSubmitForm}>
      <AddRecipeFormContainer>
        <InputsContainer>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"nome"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"Email para contato com clientes"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            name={"description"}
            value={form.description}
            onChange={onChange}
            label={"descrição"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            name={"image"}
            value={form.image}
            onChange={onChange}
            label={"foto"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            name={"field"}
            value={form.field}
            onChange={onChange}
            label={"Abordagem Terapêutica"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
        </InputsContainer>
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Adicionar</>
          )}
        </Button>
      </AddRecipeFormContainer>
    </form>
  );
};

export default AddRecipeForm;
