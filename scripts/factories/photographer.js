function photographerFactory(data) {
  const { name, portrait, price, tagline, city, country, id } = data;

  const picture = `assets/photographers/avatar/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    //Link//
    const link = document.createElement("a");
    link.setAttribute("href", "photographer.html?id=" + id);
    link.setAttribute("aria-label", `Link to ${name} personal page`);
    //Avatar Elements//
    const avatar = document.createElement("img");
    avatar.setAttribute("src", picture);
    avatar.setAttribute("alt", name + " avatar");
    avatar.classList.add("avatar");
    //Names Elements//
    const names = document.createElement("h2");
    names.textContent = name;
    names.classList.add("names");
    //CitiesAndCountrie Elements//
    const citiesAndCountrie = document.createElement("p");
    citiesAndCountrie.textContent = city + ", " + country;
    citiesAndCountrie.classList.add("citiesAndCountries");
    //Summary Elements//
    const summary = document.createElement("p");
    summary.textContent = tagline;
    summary.classList.add("summary");
    //Prices Elements//
    const prices = document.createElement("p");
    prices.textContent = price + "€/jour";
    prices.classList.add("prices");
    //child Elements//
    article.appendChild(link);
    link.appendChild(avatar);
    article.appendChild(names);
    article.appendChild(citiesAndCountrie);
    article.appendChild(summary);
    article.appendChild(prices);
    return article;
  }
  return { name, picture, price, tagline, city, country, id, getUserCardDOM };
}
