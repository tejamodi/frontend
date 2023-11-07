import React, { useContext } from "react"
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home"
import MealType from "../pages/Meal/MealType";
import { store } from "../App";
import ResDetails from "../pages/ResDetails/ResDetails";
import NewBB from "../pages/Payments/NewBB";

const AllNavigations = () => {
    const { mealName, navId } = useContext(store)
    return <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<NewBB />} />
            <Route path={`/${mealName}`} element={<MealType />} />
            <Route path={`/restaurant/${navId}`} element={<ResDetails />} />

            <Route path="*" element={<center>Page Not Found</center>} />
        </Routes>
    </div>
};

export default AllNavigations;
