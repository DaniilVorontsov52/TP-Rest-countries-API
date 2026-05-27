const $countriesContainer = document.querySelector(".countries-container");
const $themeChanger = document.querySelector(".theme-changer");
const $searchInput = document.querySelector(".search-container input");
const $regionFilter = document.querySelector(".filter-by-region");

let allCountries = [];

$themeChanger.addEventListener("click", (e) => {
	e.preventDefault();
	document.body.classList.toggle("dark");
});

function createCountries(country) {
	const $div = document.createElement("div");
	const $div1 = document.createElement("div");
	const $div2 = document.createElement("div");
	const $div3 = document.createElement("div");
	const $img = document.createElement("img");
	const $name = document.createElement("h2");
	const $type1 = document.createElement("p");
	const $type2 = document.createElement("p");
	const $type3 = document.createElement("p");
	const $span1 = document.createElement("span");
	const $span2 = document.createElement("span");
	const $span3 = document.createElement("span");

	$img.src = country.flags.png;
	$name.textContent = country.name.common;
	$span1.textContent = "Population: ";
	$span2.textContent = "Region: ";
	$span3.textContent = "Capital: ";
	$type1.appendChild($span1);
	$type1.append(country.population);
	$type2.appendChild($span2);
	$type2.append(country.region);
	$type3.appendChild($span3);
	$type3.append(country.capital);

	$div.appendChild($div1);
	$div.appendChild($div2);
	$div.appendChild($div3);
	$div1.appendChild($img);
	$div2.appendChild($name);
	$div3.appendChild($type1);
	$div3.appendChild($type2);
	$div3.appendChild($type3);

	$div.classList.add("country-card");

	$div.addEventListener("click", () => {
		const name = encodeURIComponent(country.name.common);
		window.location.href = "country.html?name=" + name;
	});

	return $div;
}

function renderCountries(countries) {
	$countriesContainer.innerHTML = "";
	countries.forEach((country) => {
		$countriesContainer.appendChild(createCountries(country));
	});
}

function filterCountries() {
	const query = $searchInput.value.toLowerCase();
	const region = $regionFilter.value;

	const filtered = allCountries.filter((country) => {
		const matchesName = country.name.common.toLowerCase().includes(query);
		const matchesRegion =
			region === "Filter by Region" || country.region === region;
		return matchesName && matchesRegion;
	});

	renderCountries(filtered);
}

async function loadAllCountries() {
	const response = await fetch(
		"https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital",
	);
	allCountries = await response.json();
	allCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
	renderCountries(allCountries);
}

$searchInput.addEventListener("input", filterCountries);
$regionFilter.addEventListener("change", filterCountries);

loadAllCountries();
