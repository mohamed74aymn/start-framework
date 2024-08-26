import logo from "../../assets/profile.svg";

export function Home() {
	return (
		<>
			<div className=" Home-app bg-teal-500 flex flex-col items-center p-6">
				<img src={logo} className="width-img  w-20 mb-4" alt="" />
				<h1 className="mt-2  text-white text-3xl font-bold mb-3 text-center">
					START FRAMEWORK
				</h1>
				<div className="shape  flex justify-center items-center">
					<div className="Right w-10 h-1 bg-white"></div>
					<i className=" fa-solid fa-star text-white mx-4 text-2xl"></i>
					<div className="Left w-10 h-1 bg-white"></div>
				</div>
				<div className="home-text text-white mt-4">
					<p className="text-center">
						Graphic Artist - Web Designer - Illustrator
					</p>
				</div>
			</div>
		</>
	);
}
