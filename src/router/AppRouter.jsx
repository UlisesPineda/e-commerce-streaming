import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages";
import { UserPage } from "../pages/UserPage";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/user" element={ <UserPage /> } />
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  );
};
