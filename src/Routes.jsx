import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import AppliedJobs from "./pages/AppliedJobs";
import Statistics from "./pages/Statistics";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/applied-jobs',
                element: <AppliedJobs />
            },
            {
                path: '/statistics',
                element: <Statistics />
            }
        ]
    },
]);

export default routes;