import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Root from "../RootLayout/Root";
import CategoryById from "../Components/CategoryById";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/category/:id',
                element: <CategoryById />,
                loader: () => fetch('/data.json')
            },
            {
                path: '/donation',
                element: <Donation/>
            },
            {
                path: '/statistics',
                element: <Statistics/>
            }
        ]
    }
]);