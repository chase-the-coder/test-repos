axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then((res) => {
	console.log(res.data);
	res.data.drinks.forEach((drink) => {
		const h2 = document.createElement('h2');
		const img = document.createElement('img');
		h2.innerText = drink.strDrink;
		img.src = drink.strDrinkThumb;
		document.body.append(img);
		document.body.append(h2);
	});
});
