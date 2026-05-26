const $countriesContainer = document.querySelector(".countries-container");
const $themeChanger = document.querySelector(".theme-changer");

$themeChanger.addEventListener("click", (e) => {
	e.preventDefault();
	body.classList.remove("body");
	body.classList.add("body.dark");
});

async function loadAllCountries() {
	const response = await fetch(
		"https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital",
	);
	const data = await response.json();
	console.log(data);
}

function createCountries() {
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

	$img.src = loadAllCountries.flags;
	$name.textContent = loadAllCountries.name;
	$type1.textContent = loadAllCountries.population;
	$type2.textContent = loadAllCountries.region;
	$type3.textContent = loadAllCountries.capital;
	$span1.textContent = "Population:";
	$span2.textContent = "Region:";
	$span3.textContent = "Capital:";

	$countriesContainer.appendChild($div);
	$div.appendChild($div1);
	$div.appendChild($div2);
	$div.appendChild($div3);
	$div1.appendChild($img);
	$div2.appendChild($name);
	$div3.appendChild($type1);
	$div3.appendChild($type2);
	$div3.appendChild($type3);
	$type1.appendChild($span1);
	$type2.appendChild($span2);
	$type3.appendChild($span3);

	$div.classList.add("country-card");
	return $div;
}

createCountries();

fonction créerPays ( pays ) {
 const div = document . createElement ( " div " );

 div .innerHTML = `
 <img src=" ${ country .flags.png } " alt="Drapeau du pays ${ country .name.common } ">
 <div class="card-text">
 <h2> ${ country .name.common } </h2>
 <p>Population : ${ country .population } </p>
 <p>Région : ${ country .region } </p>
 <p>Capitale : ${ country .capital ? pays .capitale[ 0 ] : " Pas de majuscule " } </p>
 </div>
 ` ;

 div .classList.add ( " country-card " );

 $countries.appendChild ( div );

 renvoyer div ;
 }