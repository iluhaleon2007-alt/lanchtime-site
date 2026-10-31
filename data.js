// Массив всех блюд сайта

const dishes = [
  // Супы

  {
    keyword: 'gazpacho',
    name: 'Гаспачо',
    price: 195,
    category: 'soup',
    kind: 'veg',
    count: '350 г',
    image: 'soups/gazpacho'
  },
  {
    keyword: 'mushroom_soup',
    name: 'Грибной суп-пюре',
    price: 185,
    category: 'soup',
    kind: 'veg',
    count: '330 г',
    image: 'soups/mushroom_soup'
  },
  {
    keyword: 'norwegian_soup',
    name: 'Норвежский суп',
    price: 270,
    category: 'soup',
    kind: 'fish',
    count: '330 г',
    image: 'soups/norwegian_soup'
  },
  {
    keyword: 'ramen',
    name: 'Рамен',
    price: 375,
    category: 'soup',
    kind: 'meat',
    count: '425 г',
    image: 'soups/ramen'
  },
  {
    keyword: 'tomyum',
    name: 'Том ям с креветками',
    price: 650,
    category: 'soup',
    kind: 'fish',
    count: '500 г',
    image: 'soups/tomyum'
  },
  {
    keyword: 'chicken',
    name: 'Куриный суп',
    price: 330,
    category: 'soup',
    kind: 'meat',
    count: '350 г',
    image: 'soups/chicken'
  },

  // Главные блюда

  {
    keyword: 'friedpotatoeswithmushrooms1',
    name: 'Жареная картошка с грибами',
    price: 150,
    category: 'main',
    kind: 'veg',
    count: '250 г',
    image: 'mains/friedpotatoeswithmushrooms1'
  },
  {
    keyword: 'lasagna',
    name: 'Лазанья',
    price: 385,
    category: 'main',
    kind: 'meat',
    count: '310 г',
    image: 'mains/lasagna'
  },
  {
    keyword: 'chickencutletsandmashedpotatoes',
    name: 'Котлеты из курицы с картофельным пюре',
    price: 225,
    category: 'main',
    kind: 'meat',
    count: '280 г',
    image: 'mains/chickencutletsandmashedpotatoes'
  },
  {
    keyword: 'fishrice',
    name: 'Рыбная котлета с рисом и спаржей',
    price: 320,
    category: 'main',
    kind: 'fish',
    count: '270 г',
    image: 'mains/fishrice'
  },
  {
    keyword: 'pizza',
    name: 'Пицца Маргарита',
    price: 450,
    category: 'main',
    kind: 'veg',
    count: '470 г',
    image: 'mains/pizza'
  },
  {
    keyword: 'shrimppasta',
    name: 'Паста с креветками',
    price: 340,
    category: 'main',
    kind: 'fish',
    count: '280 г',
    image: 'mains/shrimppasta'
  },

  // Салаты и стартеры

  {
    keyword: 'saladwithegg',
    name: 'Корейский салат с овощами и яйцом',
    price: 330,
    category: 'salad',
    kind: 'veg',
    count: '250 г',
    image: 'salads/saladwithegg'
  },
  {
    keyword: 'caesar',
    name: 'Цезарь с цыпленком',
    price: 370,
    category: 'salad',
    kind: 'meat',
    count: '220 г',
    image: 'salads/caesar'
  },
  {
    keyword: 'caprese',
    name: 'Капрезе с моцареллой',
    price: 350,
    category: 'salad',
    kind: 'veg',
    count: '235 г',
    image: 'salads/caprese'
  },
  {
    keyword: 'tunasalad',
    name: 'Салат с тунцом',
    price: 480,
    category: 'salad',
    kind: 'fish',
    count: '250 г',
    image: 'salads/tunasalad'
  },
  {
    keyword: 'frenchfries1',
    name: 'Картофель фри с соусом Цезарь',
    price: 280,
    category: 'salad',
    kind: 'veg',
    count: '235 г',
    image: 'salads/frenchfries1'
  },
  {
    keyword: 'frenchfries2',
    name: 'Картофель фри с кетчупом',
    price: 260,
    category: 'salad',
    kind: 'veg',
    count: '235 г',
    image: 'salads/frenchfries2'
  },

  // Напитки

  {
    keyword: 'orangejuice',
    name: 'Апельсиновый сок',
    price: 120,
    category: 'drink',
    kind: 'cold',
    count: '300 мл',
    image: 'drinks/orangejuice'
  },
  {
    keyword: 'applejuice',
    name: 'Яблочный сок',
    price: 90,
    category: 'drink',
    kind: 'cold',
    count: '300 мл',
    image: 'drinks/applejuice'
  },
  {
    keyword: 'carrotjuice',
    name: 'Морковный сок',
    price: 110,
    category: 'drink',
    kind: 'cold',
    count: '300 мл',
    image: 'drinks/carrotjuice'
  },
  {
    keyword: 'cappuccino',
    name: 'Капучино',
    price: 180,
    category: 'drink',
    kind: 'hot',
    count: '300 мл',
    image: 'drinks/cappuccino'
  },
  {
    keyword: 'greentea',
    name: 'Зеленый чай',
    price: 100,
    category: 'drink',
    kind: 'hot',
    count: '300 мл',
    image: 'drinks/greentea'
  },
  {
    keyword: 'tea',
    name: 'Черный чай',
    price: 90,
    category: 'drink',
    kind: 'hot',
    count: '300 мл',
    image: 'drinks/tea'
  },

  // Десерты

  {
    keyword: 'baklava',
    name: 'Пахлава',
    price: 220,
    category: 'dessert',
    kind: 'medium',
    count: '300 гр',
    image: 'desserts/baklava'
  },
  {
    keyword: 'checheesecake',
    name: 'Чизкейк',
    price: 240,
    category: 'dessert',
    kind: 'small',
    count: '125 гр',
    image: 'desserts/checheesecake'
  },
  {
    keyword: 'chocolatecheesecake',
    name: 'Шоколадный чизкейк',
    price: 260,
    category: 'dessert',
    kind: 'small',
    count: '125 гр',
    image: 'desserts/chocolatecheesecake'
  },
  {
    keyword: 'chocolatecake',
    name: 'Шоколадный торт',
    price: 270,
    category: 'dessert',
    kind: 'small',
    count: '140 гр',
    image: 'desserts/chocolatecake'
  },
  {
    keyword: 'donuts',
    name: 'Пончики (3 штуки)',
    price: 410,
    category: 'dessert',
    kind: 'medium',
    count: '350 гр',
    image: 'desserts/donuts2'
  },
  {
    keyword: 'donuts2',
    name: 'Пончики (6 штук)',
    price: 650,
    category: 'dessert',
    kind: 'large',
    count: '700 гр',
    image: 'desserts/donuts'
  }
];
