import React from "react";

import classes from "./Header.module.css";

import mealsImg from "../..//assets/img/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt='A table full of delicious food'></img>
      </div>
    </>
  );
};

export default Header;
