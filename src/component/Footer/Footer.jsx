export function Footer() {
	return (
		<>
			<div className="footer  bg-gray-800 p-8">
				<div className="flex flex-wrap justify-center text-white">
					<div className="w-full lg:w-1/3 md:w-1/2 p-4">
						<div className="text-center">
							<h3 className="text-xl mb-2">LOCATION</h3>
							<p>2215 John Daniel Drive</p>
							<p>Clark, MO 65243</p>
						</div>
					</div>
					<div className="w-full lg:w-1/3 md:w-1/2 p-4">
						<div className="text-center">
							<h3 className="text-xl mb-2">AROUND THE WEB</h3>
							<div className="space-x-2">
								<i className="fa-brands fa-facebook p-2 border border-white rounded-full"></i>
								<i className="fa-brands fa-twitter p-2 border border-white rounded-full"></i>
								<i className="fa-brands fa-linkedin-in p-2 border border-white rounded-full"></i>
								<i className="fa-solid fa-globe p-2 border border-white rounded-full"></i>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/3 md:w-1/2 p-4">
						<div className="text-center">
							<h3 className="text-xl mb-2">ABOUT FREELANCER</h3>
							<p>
								Freelance is a free to use, licensed Bootstrap theme created by
								Route
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-900 text-center p-4 text-white">
				<p>Copyright © mohamed ayman Website 2024</p>
			</div>
		</>
	);
}
