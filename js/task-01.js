const totalCategories = document.querySelectorAll('.item');

const countCategory = selector =>
  console.log(`В списке ${totalCategories.length} категории.`);

const consoleCategoryItems = () => {
  
  totalCategories.forEach(item => {

    console.log(`Категория: ${item.querySelector('h2').textContent},
Количество элементов: ${item.querySelectorAll('ul li').length}`);
  });
};

countCategory();
consoleCategoryItems();