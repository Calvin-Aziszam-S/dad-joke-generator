const initDadJokesApp = () => {
	const container = document.querySelector(".container");
	const button = document.querySelector("button");

	const ul = document.createElement("ul");
	container.appendChild(ul);

	const getDadJoke = async () => {
		const url = "https://icanhazdadjoke.com/";

		try {
			const response = await fetch(url, {
				headers: { Accept: "application/json" },
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			return data.joke;
		} catch (err) {
			console.error("Failed to fetch dad joke:", err.message);

			return "Oops! No joke today. But why did the developer quit his job? Because he didn't get arrays! 😄";
		}
	};

	const handleClick = async () => {
		try {
			const joke = await getDadJoke();
			const li = document.createElement("li");
			li.textContent = joke;
			ul.appendChild(li);
		} catch (err) {
			console.error("Error in handleClick:", err);
		}
	};

	button.addEventListener("click", handleClick);
};

document.addEventListener("DOMContentLoaded", initDadJokesApp);
