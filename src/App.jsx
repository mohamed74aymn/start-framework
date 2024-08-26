import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./component/Home/Home";
import { About } from "./component/About/About";
import { Protofile } from "./component/Protofile/Protofile";
import { Contact } from "./component/Contact/Contact";
import Layout from "./component/Layout/Layout";

export function App() {
	let router = createBrowserRouter([
		{
			path: "",
			element: <Layout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: "about", element: <About /> },
				{ path: "protofile", element: <Protofile /> },
				{ path: "contact", element: <Contact /> },
			],
		},
	]);
	return (
		<>
			<RouterProvider router={router}> </RouterProvider>
		</>
	);
}
