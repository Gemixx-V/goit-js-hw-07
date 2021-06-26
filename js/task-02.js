const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listOfComponents = document.querySelector('#ingredients');

const itemEl = array => {

  const title = array =>
    
    array.map(item => {
      const listEl = document.createElement('li');
      listEl.textContent = item;

      return listEl;
      
    });

  listOfComponents.append(...title(array));
};

itemEl(ingredients);
