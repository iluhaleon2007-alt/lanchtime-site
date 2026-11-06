// Проверка состава ланча при отправке формы

const comboVariants = [
  ['soup', 'main', 'salad', 'drink'],
  ['soup', 'main', 'drink'],
  ['soup', 'salad', 'drink'],
  ['main', 'salad', 'drink'],
  ['main', 'drink']
];

const orderForm = document.querySelector('.order-form');

// Какие категории выбраны - читаем значения скрытых полей формы

function getChosenCategories() {
  return ['soup', 'main', 'salad', 'drink', 'dessert'].filter(function (category) {
    return document.getElementById('hidden-' + category).value !== '';
  });
}

// Совпадает ли набор блюд с одним из вариантов комбо

function isVariant(categories) {
  return comboVariants.some(function (variant) {
    const sameLength = variant.length === categories.length;
    const everyItem = variant.every(function (item) {
      return categories.includes(item);
    });
    return sameLength && everyItem;
  });
}

// Текст уведомления зависит от того, чего не хватает

function getNotificationText(chosen) {
  const hasSoup = chosen.includes('soup');
  const hasMain = chosen.includes('main');
  const hasSalad = chosen.includes('salad');
  const hasDrink = chosen.includes('drink');

  if (chosen.length === 0) {
    return 'Ничего не выбрано. Выберите блюда для заказа';
  }

  const withoutDessert = chosen.filter(function (category) {
    return category !== 'dessert';
  });

  if (!hasDrink && isVariant(withoutDessert.concat('drink'))) {
    return 'Выберите напиток';
  }

  if (hasSoup && !hasMain && !hasSalad) {
    return 'Выберите главное блюдо/салат/стартер';
  }

  if (hasSalad && !hasSoup && !hasMain) {
    return 'Выберите суп или главное блюдо';
  }

  return 'Выберите главное блюдо';
}

// Создаёт уведомление заново и удаляет его по кнопке "Окей"

function showNotification(text) {
  const oldNotification = document.querySelector('.notification');
  if (oldNotification) {
    oldNotification.remove();
  }

  const box = document.createElement('div');
  box.className = 'notification';

  const message = document.createElement('p');
  message.className = 'notification-text';
  message.textContent = text;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'notification-button';
  button.textContent = 'Окей 👋';

  button.addEventListener('click', function () {
    box.remove();
  });

  box.append(message, button);
  document.body.append(box);
}

// Проверка запускается при отправке формы

orderForm.addEventListener('submit', function (event) {
  const chosen = getChosenCategories();
  const withoutDessert = chosen.filter(function (category) {
    return category !== 'dessert';
  });

  if (isVariant(withoutDessert)) {
    return;
  }

  event.preventDefault();
  showNotification(getNotificationText(chosen));
});
