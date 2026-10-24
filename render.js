// Динамическое отображение блюд на странице

const sections = {
  soup: document.querySelector('#soups .dishes'),
  main: document.querySelector('#mains .dishes'),
  drink: document.querySelector('#drinks .dishes')
};

// Создаёт карточку одного блюда

function createDishCard(dish) {
  const card = document.createElement('div');
  card.className = 'dish';
  card.dataset.dish = dish.keyword;

  const image = document.createElement('img');
  image.src = dish.image + '.jpg';
  image.alt = dish.name;

  const price = document.createElement('p');
  price.className = 'price';
  price.textContent = dish.price + '₽';

  const name = document.createElement('p');
  name.className = 'name';
  name.textContent = dish.name;

  const count = document.createElement('p');
  count.className = 'weight';
  count.textContent = dish.count;

  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Добавить';

  card.append(image, price, name, count, button);
  return card;
}

// Сортировка по алфавиту до отображения

dishes.sort(function (a, b) {
  return a.name.localeCompare(b.name, 'ru');
});

// Перебор массива и добавление карточек в нужные секции

dishes.forEach(function (dish) {
  const section = sections[dish.category];
  if (section) {
    section.appendChild(createDishCard(dish));
  }
});
