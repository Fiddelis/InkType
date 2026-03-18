import { createHashRouter } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import Home from "../pages/Home";
import Study from "../pages/Study";

export const router = createHashRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "study", element: <Study /> },
		],
	},
]);
