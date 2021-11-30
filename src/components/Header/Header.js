import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { StyledToolbar, ImgLogo } from "./styled";
import Button from "@material-ui/core/Button";
import {
  goToHomePage,
  goToLogin,
  goToAddRecipes,
} from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../assets/logo.png"

const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Button onClick={() => goToHomePage(history)} color="inherit">
          <ImgLogo src={logo} alt={"Logo"}/>
        </Button>
        <div>
          {token && (
            <Button color="inherit" onClick={() => goToAddRecipes(history)}>
              Profissional
            </Button>
          )}
          <Button onClick={rightButtonAction} color="inherit">
            {rightButtonText}
          </Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
