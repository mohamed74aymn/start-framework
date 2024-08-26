import { useState } from "react";

export function Contact() {
	const [inputName, setInputName] = useState();
	const [inputAge, setInputAge] = useState();
	const [inputEmail, setInputEmail] = useState();
	const [inputPassword, setInputPassword] = useState();
	const [showName, setShowName] = useState();
	const [showAge, setShowAge] = useState();
	const [showEmail, setShowEmail] = useState();
	const [showPassword, setShowPassword] = useState();

	function handleSubmitName(event) {
		setInputName(event.target.value);
		event.preventDefault();
		if (event.target.value.trim() !== "") {
			setShowName(true);
		} else {
			setShowName(false);
		}
	}

	function handleSubmitAge(event) {
		setInputAge(event.target.value);
		event.preventDefault();
		if (event.target.value.trim() !== "") {
			setShowAge(true);
		} else {
			setShowAge(false);
		}
	}

	function handleSubmitEmail(event) {
		setInputEmail(event.target.value);
		event.preventDefault();
		if (event.target.value.trim() !== "") {
			setShowEmail(true);
		} else {
			setShowEmail(false);
		}
	}

	function handleSubmitPassword(event) {
		setInputPassword(event.target.value);
		event.preventDefault();
		if (event.target.value.trim() !== "") {
			setShowPassword(true);
		} else {
			setShowPassword(false);
		}
	}

	return (
		<>
			<div className="Home-app">
				<h1 className=" pt-10 text-[#2C3E50] uppercase mt-16 text-4xl font-bold mb-3 text-center">
					Contact Section
				</h1>
				<div className="shape flex justify-center items-center mb-3">
					<div className="Right border-b border-[#2C3E50]"></div>
					<i className="fa-solid fa-star mx-3 text-[#2C3E50]"></i>
					<div className="Left border-b border-[#2C3E50]"></div>
				</div>
				<div className="form w-full">
					<form className="relative w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-5 p-3">
						{showName ? (
							<label
								htmlFor="userName"
								className="block left-0 absolute text-[#1abc9c]"
							>
								Username:
							</label>
						) : null}
						<input
							type="text"
							value={inputName}
							onChange={handleSubmitName}
							name="userName"
							placeholder="Username"
							className="border-0 form-control my-4 border-b py-3 w-full focus:outline-none"
						/>

						{showAge ? (
							<label htmlFor="userAge" className="block text-[#1abc9c]">
								Age:
							</label>
						) : null}
						<input
							type="number"
							value={inputAge}
							onChange={handleSubmitAge}
							name="userAge"
							placeholder="Age"
							className="border-0 form-control my-4 border-b py-3 w-full focus:outline-none"
						/>

						{showEmail ? (
							<label htmlFor="userEmail" className="block text-[#1abc9c]">
								Email:
							</label>
						) : null}
						<input
							type="email"
							value={inputEmail}
							onChange={handleSubmitEmail}
							name="userEmail"
							placeholder="Email"
							className="border-0 form-control my-4 border-b py-3 w-full focus:outline-none"
						/>

						{showPassword ? (
							<label htmlFor="userPassword" className="block text-[#1abc9c]">
								Password:
							</label>
						) : null}
						<input
							type="password"
							value={inputPassword}
							onChange={handleSubmitPassword}
							name="userPassword"
							placeholder="Password"
							className="border-0 form-control my-4 border-b py-3 w-full focus:outline-none"
						/>

						<button
							className="btn mt-4 w-full text-white bg-[#1abc9c] hover:bg-[#16a085] py-2"
							type="submit"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
