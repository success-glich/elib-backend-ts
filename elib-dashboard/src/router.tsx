import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";

export const router =createBrowserRouter([
    {
        path:'/',
        element: <HomePage />
    },
    {
        path:'/login',
        element: <LoginPage />
    }
])