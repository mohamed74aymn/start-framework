export function About() {
	return (
		<div className="Home-app bg-teal-500">
			<h1 className=" mt-2  text-white text-3xl font-bold mb-3 text-center">
				ABOUT COMPONENT
			</h1>
			<div className="flex justify-center items-center">
				<div className="Right h-1 w-16 bg-white"></div>
				<i className="fa-solid fa-star text-white mx-3 text-3xl"></i>
				<div className="Left h-1 w-16 bg-white"></div>
			</div>
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap text-white mt-3">
					<div className="w-full lg:w-1/2 px-5">
						<p className="m-0">
							Freelancer is a free bootstrap theme created by Route. The
							download includes the complete source files including HTML, CSS,
							and JavaScript as well as optional SASS stylesheets for easy
							customization.
						</p>
					</div>
					<div className="w-full lg:w-1/2 px-5">
						<p className="m-0">
							Freelancer is a free bootstrap theme created by Route. The
							download includes the complete source files including HTML, CSS,
							and JavaScript as well as optional SASS stylesheets for easy
							customization.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
