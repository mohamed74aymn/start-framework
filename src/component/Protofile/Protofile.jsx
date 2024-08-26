import { useState } from "react";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";

let ImagesUrl = [Img1, Img2, Img3, Img1, Img2, Img3];

export function Protofile() {
	const [imageUrl, setImagesUrl] = useState(null);
	//text-[#2C3E50]
	return (
		<>
			<div className="Home-app">
				<h1 className=" pt-10 text-[#2C3E50] uppercase mt-16 text-4xl font-bold mb-3 text-center">
					portfolio component
				</h1>
				<div className="shape flex justify-center items-center mb-3">
					<div className="Right border-b border-[#2C3E50]"></div>
					<i className="fa-solid fa-star mx-3 text-[#2C3E50]"></i>
					<div className="Left border-b border-[#2C3E50]"></div>
				</div>
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 mb-4">
						{ImagesUrl.map((Images, index) => (
							<div
								className="relative cursor-pointer"
								key={index}
								onClick={() => setImagesUrl(Images)}
							>
								<div className="card rounded-lg overflow-hidden relative">
									<img
										className="w-full h-auto rounded-lg"
										src={Images}
										alt="Popup Images"
									/>
									<div className="lay absolute inset-0 flex justify-center items-center bg-[#1abc9c] opacity-0 hover:opacity-100 transition-opacity duration-500">
										<i className="text-white fa-solid fa-plus fa-6x"></i>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div
					className="Popup-Image fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
					style={{ visibility: imageUrl ? "visible" : "hidden" }}
				>
					<span
						className="text-white text-4xl cursor-pointer absolute top-5 right-5"
						onClick={() => setImagesUrl(null)}
					>
						&times;
					</span>
					<img className="Popup w-1/2" src={imageUrl} alt="Popup Image" />
				</div>
			</div>
		</>
	);
}
