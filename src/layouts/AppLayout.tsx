import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

export function AppLayout() {
	return (
		<div className="h-screen w-screen">
			<Navbar />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
