import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import TransmisionEvento from "./TransmisionEvento";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }
]);

const provider = () => (<RouterProvider router={router} />)

export default provider