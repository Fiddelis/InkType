import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="flex items-center justify-center p-2 gap-10 bg-backgrouns border-b text-primary font-bold">
			<Link to={"/"}>Home</Link>
			<Link to={"/study"}>study</Link>
		</nav>
	);
}

export default Navbar;
