import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import TransmisionEvento from "./TransmisionEvento";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/prueba-chat",
        element: <TransmisionEvento enabled />
    }
]);

const provider = () => (<RouterProvider router={router} />)

export default provider