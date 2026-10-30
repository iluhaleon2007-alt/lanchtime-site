// Выбор блюда, добавление в заказ и подсчёт стоимости

const selected = {
  soup: null,
  main: null,
  salad: null,
  drink: null,
  dessert: null
};

const emptyBlock = document.querySelector('#order-empty');
const summaryBlock = document.querySelector('#order-summary');
const totalBlock = document.querySelector('#order-total');

const orderBlocks = {
  soup: document.querySelector('#order-soup'),
  main: document.querySelector('#order-main'),
  salad: document.querySelector('#order-salad'),
  drink: document.querySelector('#order-drink'),
  dessert: document.querySelector('#order-dessert')
};

const hiddenInputs = {
  soup: document.querySelector('#hidden-soup'),
  main: document.querySelector('#hidden-main'),
  salad: document.querySelector('#hidden-salad'),
  drink: document.querySelector('#hidden-drink'),
  dessert: document.querySelector('#hidden-dessert')
};

// Текст для незаполненной категории

function emptyText(category) {
  return category === 'drink' ? 'Напиток не выбран' : 'Блюдо не выбрано';
}

// Поиск блюда в массиве по data-атрибуту карточки

function findDish(keyword) {
  return dishes.find(function (dish) {
    return dish.keyword === keyword;
  });
}

// Обновляет блок "Ваш заказ" и итоговую стоимость

function updateOrder() {
  const hasSelection = selected.soup || selected.main || selected.drink;

  emptyBlock.hidden = Boolean(hasSelection);
  summaryBlock.hidden = !hasSelection;

  let total = 0;

  Object.keys(selected).forEach(function (category) {
    const dish = selected[category];

    if (dish) {
      orderBlocks[category].textContent = dish.name + ' ' + dish.price + '₽';
      total += dish.price;
    } else {
      orderBlocks[category].textContent = emptyText(category);
    }

    hiddenInputs[category].value = dish ? dish.keyword : '';
  });

  totalBlock.textContent = total + '₽';
}

// Снимает выделение со всех карточек одной категории

function clearHighlight(category) {
  document.querySelectorAll('.dish').forEach(function (card) {
    const dish = findDish(card.dataset.dish);
    if (dish && dish.category === category) {
      card.classList.remove('selected');
    }
  });
}

// Добавляет блюдо в заказ и выделяет его карточку

function selectDish(keyword) {
  const dish = findDish(keyword);
  if (!dish) {
    return;
  }

  clearHighlight(dish.category);
  selected[dish.category] = dish;

  const card = document.querySelector('.dish[data-dish="' + keyword + '"]');
  if (card) {
    card.classList.add('selected');
  }

  updateOrder();
}

document.querySelectorAll('.dish button').forEach(function (button) {
  button.addEventListener('click', function () {
    const card = button.closest('.dish');
    selectDish(card.dataset.dish);
  });
});

// Кнопка "Сбросить" очищает и выбранные блюда

document.querySelector('.order-form').addEventListener('reset', function () {
  Object.keys(selected).forEach(function (category) {
    selected[category] = null;
  });

  document.querySelectorAll('.dish.selected').forEach(function (card) {
    card.classList.remove('selected');
  });

  updateOrder();
});

updateOrder();
