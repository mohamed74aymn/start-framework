import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<nav className="navbar fixed z-10 w-full bg-gray-800 py-4 shadow-md">
				<div className="container mx-auto flex items-center justify-between px-4">
					<Link className="text-white text-2xl font-bold" to="/">
						START FRAMEWORK
					</Link>
					<button
						className="text-white lg:hidden focus:outline-none"
						onClick={toggleMobileMenu}
						aria-label="Toggle navigation"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
					<div
						className={`${
							isMobileMenuOpen ? "block" : "hidden"
						} lg:flex lg:items-center lg:space-x-6 bg-gray-800 w-full lg:w-auto absolute lg:relative top-16 left-0 lg:top-auto lg:left-auto lg:bg-transparent text-center lg:text-left`}
					>
						<ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 py-4 lg:py-0 text-white text-lg">
							<li>
								<Link
									className="block py-2 lg:py-0 hover:text-gray-300"
									to="/about"
								>
									ABOUT
								</Link>
							</li>
							<li>
								<Link
									className="block py-2 lg:py-0 hover:text-gray-300"
									to="/protofile"
								>
									PORTFOLIO
								</Link>
							</li>
							<li>
								<Link
									className="block py-2 lg:py-0 hover:text-gray-300"
									to="/contact"
								>
									CONTACT
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
