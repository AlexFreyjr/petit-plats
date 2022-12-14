function inputListening() {
  const dropdownSearch = document.querySelectorAll('.dropdown-search');
  dropdownSearch.forEach((search) => {
    search.addEventListener('input', () =>
      autoComplete(
        search.value,
        search.id,
        ingredientArray,
        appliancesArray,
        ustensilsArray
      )
    );
  });
}

function autoComplete(
  value,
  id,
  ingredientArray,
  appliancesArray,
  ustensilsArray
) {
  value = value.toLowerCase();
  const buttonBar = document.querySelector('.button-bar');
  const button = buttonBar.querySelector(`#${id}` + 'Btn');
  const options = button.querySelector('.options');
  const regex = new RegExp(`${value}`);

  switch (id) {
    case 'Ingredients':
      options.remove();
      let Imatch = ingredientArray.filter((e) => e.match(regex));
      submenuDOM(button, Imatch, id);
      return Imatch;
    case 'Appareils':
      options.remove();
      let Amatch = appliancesArray.filter((e) => e.match(regex));
      submenuDOM(button, Amatch, id);
      return Amatch;
    case 'Ustensiles':
      options.remove();
      let Umatch = ustensilsArray.filter((e) => e.match(regex));
      submenuDOM(button, Umatch, id);
      return Umatch;
  }
}
