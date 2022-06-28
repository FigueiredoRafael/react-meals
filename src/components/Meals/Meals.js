import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <>
      <MealsSummary></MealsSummary>
      <main>
        <AvailableMeals />
      </main>
    </>
  );
};

export default Meals;
