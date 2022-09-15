module.exports = {
  async up(queryInterface) {
    const foods = [{
      title: 'Кани маки',
      description: 'Рис, краб',
      photo: '/роллы/классик/капа маки.jpg',
      weight: 170,
      old_price: 120,
      new_price: 109,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Каппа маки',
      description: 'Рис, огурец',
      photo: '/роллы/классик/капа маки.jpg',
      weight: 170,
      old_price: 110,
      new_price: 89,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: true,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Сяке маки',
      description: 'Рис, лосось',
      photo: '/роллы/классик/сяке маки.jpg',
      weight: 170,
      old_price: 180,
      new_price: 139,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: false,
      is_spicy: false,
      is_hit: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Тай маки',
      description: 'Рис, окунь',
      photo: '/роллы/классик/тай маки.jpg',
      weight: 170,
      old_price: 110,
      new_price: 99,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Унаги маки',
      description: 'Рис, угорь',
      photo: '/роллы/классик/унаги маки.jpg',
      weight: 170,
      old_price: 180,
      new_price: 149,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Чука маки',
      description: 'Рис, чука, кунжут',
      photo: '/роллы/классик/чука маки.jpg',
      weight: 170,
      old_price: 109,
      new_price: 89,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: true,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Эби маки',
      description: 'Рис, креветка',
      photo: '/роллы/классик/унаги маки.jpg',
      weight: 170,
      old_price: 189,
      new_price: 139,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Ясай ролл',
      description: 'Огурец, болгарский перец, салат, морковь',
      photo: '/роллы/классик/сяке маки.jpg',
      weight: 175,
      old_price: 210,
      new_price: 199,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: true,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Ролл царский',
      description: 'Жареная семга, сливочный сыр, тобико, помидор, огурец',
      photo: '/роллы/классик/сяке маки.jpg',
      weight: 220,
      old_price: 280,
      new_price: 269,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Ролл Тейшоку',
      description: 'Маринованный лосось, маринованный огурец, сливочный сыр',
      photo: '/роллы/классик/сяке маки.jpg',
      weight: 220,
      old_price: 270,
      new_price: 259,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Сяке спайси кунсей',
      description: 'Маринованный лосось, спайси соус, огурец, омлет',
      photo: '/роллы/классик/сяке маки.jpg',
      weight: 220,
      old_price: 280,
      new_price: 269,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Ролл Красная леди',
      description: 'Лосось, икра лосося',
      photo: '/роллы/классик/сяке маки.jpg',
      weight: 220,
      old_price: 270,
      new_price: 250,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Ролл Инь Янь',
      description: 'Лосось, угорь, рис',
      photo: '/роллы/классик/инь янь.jpg',
      weight: 220,
      old_price: 270,
      new_price: 259,
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // жареные роллы
    {
      title: 'Эби темпура',
      description: 'Креветка, сливочный сыр, икра масаго, огурец, салат',
      photo: '/роллы/жареные/эби темпура.jpg',
      weight: 320,
      old_price: 350,
      new_price: 320,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      is_hit: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Унаги темпура',
      description: 'Угорь, сливочный сыр, огурец, омлет, кунжут, соус унаги',
      photo: '/роллы/жареные/эби темпура.jpg',
      weight: 320,
      old_price: 330,
      new_price: 290,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Темпура спайси',
      description: 'Лосось, огурец, спайси соус, омлет',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 320,
      new_price: 290,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Сяке темпура',
      description: 'Лосось, сыр, омлет, огурец',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 300,
      new_price: 290,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Лотос',
      description: 'Угорь, сыр, огурец, имбирь, соус унаги',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 310,
      new_price: 290,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Каисо',
      description: 'Угорь, огурец, чука, кунжут',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 305,
      new_price: 290,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Итальянский',
      description: 'Краб, сливочный сыр, помидор, салат, огурец',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 300,
      new_price: 275,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Европа',
      description: 'Лосось, сливочный сыр, огурец, салат',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 310,
      new_price: 285,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      is_hit: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Гурман',
      description: 'Маринованный лосось, угорь, сливочный сыр, огурец',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 350,
      new_price: 320,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Гейша',
      description: 'Кальмар, омлет, спайси соус, огурец',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 290,
      new_price: 260,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Асимури',
      description: 'Краб, угорь, майонез, кунжут',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 320,
      new_price: 295,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Аризона',
      description: 'Креветка, сливочный сыр, салат, огурец',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 320,
      new_price: 290,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Американский',
      description: 'Лосось, угорь, огурец, икра тобико, сливочный сыр',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 350,
      new_price: 320,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Сяке Харумаки',
      description: 'Рисовая бумага, лосось, икра масаго, зеленый лук, сыр творожный',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 300,
      new_price: 269,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Токио',
      description: 'Сыр творожный, краб, лосось, салат, омлет, икра масаго, соус спайси',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 320,
      old_price: 310,
      new_price: 289,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Теплый с угрем',
      description: 'Угорь, икра масаго, огурец, сыр творожный, омлет',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 180,
      old_price: 310,
      new_price: 275,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Кани с угрем',
      description: 'Угорь, краб, сыр творожный, огурец, омлет',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 180,
      old_price: 310,
      new_price: 295,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Жареный ролл Кани Хот',
      description: 'Снежный краб, соус спайси, икра масаго, огурец',
      photo: '/роллы/жареные/темпура спайси.jpg',
      weight: 180,
      old_price: 310,
      new_price: 260,
      type_id: 1, // роллы
      subtype_id: 2, // жареные
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Перевертыши
    {
      title: 'Ролл Филадельфия',
      description: 'Лосось, огурец, сливочный сыр',
      photo: '/роллы/перевертыши/филадельфия.jpg',
      weight: 230,
      old_price: 380,
      new_price: 369,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      is_hit: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Нью-Йорк',
      description: 'Лосось, сливочный сыр, икра лосося',
      photo: '/роллы/перевертыши/Нью-Йорк.jpg',
      weight: 250,
      old_price: 380,
      new_price: 369,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Морское чудо',
      description: 'Сливочный сыр, креветка, угорь, огурец, омлет',
      photo: '/роллы/перевертыши/Канадский.jpg',
      weight: 250,
      old_price: 380,
      new_price: 369,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Канадский',
      description: 'Семга, угорь, авакадо, огурец, сливочный сыр, кунжут',
      photo: '/роллы/перевертыши/Канадский.jpg',
      weight: 250,
      old_price: 399,
      new_price: 389,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      is_hit: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Калифорния',
      description: 'Лосось, тобико, огурец, омлет, майонез',
      photo: '/роллы/перевертыши/Калифорния.jpg',
      weight: 240,
      old_price: 300,
      new_price: 289,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      is_hit: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Калифорния',
      description: 'Лосось, тобико, огурец, омлет, майонез',
      photo: '/роллы/перевертыши/Калифорния.jpg',
      weight: 240,
      old_price: 300,
      new_price: 289,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Калифорния креветка',
      description: 'Креветка, тобико, огуерец, авакадо, омлет, майонез',
      photo: '/роллы/перевертыши/Калифорния.jpg',
      weight: 240,
      old_price: 320,
      new_price: 299,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Спешл',
      description: 'Сыр, огурец, лосось, кунжут, нори',
      photo: '/роллы/перевертыши/Спешл.jpg',
      weight: 240,
      old_price: 300,
      new_price: 289,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Самурай',
      description: 'Сыр, огурец, креветка, кунжут, икра лосося, нори',
      photo: '/роллы/перевертыши/Нью-Йорк.jpg',
      weight: 250,
      old_price: 300,
      new_price: 289,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Филадельфия в угре',
      description: 'Угорь, огурец, сыр, кунжут, нори',
      photo: '/роллы/перевертыши/Канадский.jpg',
      weight: 250,
      old_price: 380,
      new_price: 349,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Фиджи',
      description: 'Лосось, омлет, огурец, спайси соус, масаго, нори',
      photo: '/роллы/перевертыши/Калифорния.jpg',
      weight: 250,
      old_price: 320,
      new_price: 289,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Нежный',
      description: 'Лосось, краб, спайси соус, майонез, омлет, масаго',
      photo: '/роллы/перевертыши/Нью-Йорк.jpg',
      weight: 250,
      old_price: 350,
      new_price: 329,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Спринг Ролл',
      description: 'Рисовая бумага, сыр творожный, лук зеленый, лосось, краб, омлет, огурец, масаго, лист салата',
      photo: '/роллы/перевертыши/Нью-Йорк.jpg',
      weight: 250,
      old_price: 310,
      new_price: 289,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Сяке Спайси Ролл',
      description: 'Лосось, тунец(стружка тунца), спайси соус, огурец',
      photo: '/роллы/перевертыши/Сяке спайси.jpg',
      weight: 250,
      old_price: 310,
      new_price: 289,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Бонито',
      description: 'Тунец, стружка тунца, сыр творожный, огурец',
      photo: '/роллы/перевертыши/Сяке спайси.jpg',
      weight: 250,
      old_price: 310,
      new_price: 289,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Калифорния с угрем',
      description: 'Угорь, сыр творожный, омлет, огурец, икра тобико',
      photo: '/роллы/перевертыши/Нью-Йорк.jpg',
      weight: 250,
      old_price: 320,
      new_price: 299,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Камчатский',
      description: 'Угорь, омлет, сыр творожный, масаго, огурец',
      photo: '/роллы/перевертыши/Канадский.jpg',
      weight: 250,
      old_price: 380,
      new_price: 365,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Белый дракон',
      description: 'Краб, сыр творожный, огурец, омлет',
      photo: '/роллы/перевертыши/Канадский.jpg',
      weight: 250,
      old_price: 380,
      new_price: 269,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Сенсей',
      description: 'Лосось, снежный краб, майонез, омлет, масаго',
      photo: '/роллы/перевертыши/Калифорния.jpg',
      weight: 250,
      old_price: 320,
      new_price: 289,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ролл Эби Спайси',
      description: 'Креветка, стружка тунца, спайси соус, омлет, огурец, сыр',
      photo: '/роллы/перевертыши/Калифорния.jpg',
      weight: 250,
      old_price: 320,
      new_price: 295,
      type_id: 1, // роллы
      subtype_id: 3, // Перевертыши
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // СУШИ
    {
      title: 'Эби суши',
      description: 'Креветка, рис',
      photo: '/суши/эби суши.jpg',
      weight: 55,
      old_price: 110,
      new_price: 89,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Унаги суши',
      description: 'Угорь, рис',
      photo: '/суши/унаги суши.jpg',
      weight: 45,
      old_price: 110,
      new_price: 89,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Тай суши',
      description: 'Окунь, рис',
      photo: '/суши/тай суши.jpg',
      weight: 55,
      old_price: 90,
      new_price: 69,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Сяке суши',
      description: 'Лосось, рис',
      photo: '/суши/сяке суши.jpg',
      weight: 55,
      old_price: 100,
      new_price: 89,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Суши Сяке спайси',
      description: 'Лосось, спайси соус, рис',
      photo: '/суши/сяке суши.jpg',
      weight: 55,
      old_price: 100,
      new_price: 89,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Суши Унаги спайси',
      description: 'Угорь, спайси соус, рис',
      photo: '/суши/унаги суши.jpg',
      weight: 55,
      old_price: 100,
      new_price: 89,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Суши Эби спайси',
      description: 'Креветка, спайси соус, рис',
      photo: '/суши/эби суши.jpg',
      weight: 55,
      old_price: 100,
      new_price: 89,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Суши Кани спайси',
      description: 'Краб, спайси соус, рис',
      photo: '/суши/кани суши.jpg',
      weight: 55,
      old_price: 100,
      new_price: 69,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Суши Ика спайси',
      description: 'Кальмар, спайси соус, рис',
      photo: '/суши/тай суши.jpg',
      weight: 55,
      old_price: 100,
      new_price: 69,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Суши Тай спайси',
      description: 'Окунь, спайси соус, рис',
      photo: '/суши/тай_спайси суши.jpg',
      weight: 55,
      old_price: 100,
      new_price: 69,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Суши Магуро спайси',
      description: 'Тунец, спайси соус, рис',
      photo: '/суши/магуро_спайси суши.jpg',
      weight: 55,
      old_price: 100,
      new_price: 89,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Суши Чука',
      description: 'Маринованная чука, кунжут, рис',
      photo: '/суши/чука суши.jpg',
      weight: 55,
      old_price: 100,
      new_price: 69,
      type_id: 2, // СУШИ
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Наборы/Сеты
    {
      title: 'Япона Мама Сет',
      description: 'Филадельфия, калифорния, сяке маки, спешл',
      photo: '/сеты/япона мама сет.jpg',
      weight: 980,
      old_price: 1400,
      new_price: 1299,
      type_id: 3, // Наборы/Сеты
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Темпура Сет',
      description: 'Американский, унаги темпура, эби темпура, итальянский',
      photo: '/сеты/темпура сет.jpg',
      weight: 960,
      old_price: 1350,
      new_price: 1199,
      type_id: 3, // Наборы/Сеты
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Студенческий Сет',
      description: 'Сяке маки, унаги маки, эби маки, кани маки',
      photo: '/сеты/студент сет.jpg',
      weight: 440,
      old_price: 700,
      new_price: 499,
      type_id: 3, // Наборы/Сеты
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Салаты и вок
    {
      title: 'Удон с овощами',
      description: 'Перец болгарский, морковь, лук репчатый, чеснок, кунжут',
      photo: '/вок/удон с овощами.jpg',
      weight: 250,
      old_price: 280,
      new_price: 230,
      type_id: 4, // Салаты и вок
      is_vegan: true,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Удон с курицей',
      description: 'Куриное филе(курица), перец болгарский, морковь, лук репчатый, кунжут',
      photo: '/вок/удон с курицей.jpg',
      weight: 250,
      old_price: 310,
      new_price: 289,
      type_id: 4, // Салаты и вок
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Фунчоза с курицей',
      description: 'Перец болгарский, морковь, лук репчатый, куриная грудка(курица)',
      photo: '/вок/удон с курицей.jpg',
      weight: 250,
      old_price: 310,
      new_price: 289,
      type_id: 4, // Салаты и вок
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Тяхан с курицей',
      description: 'Куриное филе (курица), перец болгарский, морковь, лук репчатый, кунжут, соус унаги',
      photo: '/вок/удон с говядиной.jpg',
      weight: 250,
      old_price: 300,
      new_price: 279,
      type_id: 4, // Салаты и вок
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Тяхан с креветкой',
      description: 'Креветка, перец болгарский, лук, морковь, кунжут, соус унаги',
      photo: '/вок/удон с говядиной.jpg',
      weight: 250,
      old_price: 350,
      new_price: 320,
      type_id: 4, // Салаты и вок
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Паста с курицей и грибами',
      description: 'Феттучини, шампиньоны, филе куриное (курица), сливки, пармезан',
      photo: '/вок/паста с курицей.jpg',
      weight: 250,
      old_price: 340,
      new_price: 310,
      type_id: 4, // Салаты и вок
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Паста с лососем и креветками',
      description: 'Лосось, креветка, феттучини, сливки, помидоры черри, пармезан',
      photo: '/вок/паста с курицей.jpg',
      weight: 250,
      old_price: 390,
      new_price: 340,
      type_id: 4, // Салаты и вок
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Салат по-гречески',
      description: 'Салат, помидор, огурец, перец болгарский, маслины, сыр фета, соус греческий',
      photo: '/вок/греческий.jpg',
      weight: 250,
      old_price: 300,
      new_price: 269,
      type_id: 4, // Салаты и вок
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Салат Чука',
      description: 'Маринованные чука, кунжут',
      photo: '/вок/чука.jpg',
      weight: 200,
      old_price: 320,
      new_price: 300,
      type_id: 4, // Салаты и вок
      is_vegan: true,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Закуски
    {
      title: 'Эби Фурай',
      description: 'Креветка в панировке',
      photo: '/закуски/эби темпур.jpg',
      weight: 150,
      old_price: 390,
      new_price: 380,
      type_id: 5, // Закуски
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ика Фурай',
      description: 'Кальмар в панировке',
      photo: '/закуски/эби темпур.jpg',
      weight: 200,
      old_price: 290,
      new_price: 280,
      type_id: 5, // Закуски
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Наггетсы',
      description: 'Сочные куриные наггетсы в панировке (курица)',
      photo: '/закуски/нагетсы.jpg',
      weight: 200,
      old_price: 270,
      new_price: 245,
      type_id: 5, // Закуски
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Куриные крылья',
      description: 'Сочные куриные крылья в соусе терияки (курица)',
      photo: '/закуски/куриные крылья.jpg',
      weight: 220,
      old_price: 290,
      new_price: 280,
      type_id: 5, // Закуски
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Картофельные дольки',
      description: 'молодой картофель, соль',
      photo: '/закуски/карт дольки.jpg',
      weight: 150,
      old_price: 150,
      new_price: 130,
      type_id: 5, // Закуски
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Картофель фри',
      description: 'молодой картофель, соль',
      photo: '/закуски/фри.jpg',
      weight: 150,
      old_price: 150,
      new_price: 130,
      type_id: 5, // Закуски
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Супы
    {
      title: 'Сяке суп',
      description: 'Лосось, рисом, водорослей вакаме и кунжутом',
      photo: '/супы/сяке суп.jpg',
      weight: 350,
      old_price: 290,
      new_price: 260,
      type_id: 6, // Супы
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Том Ям',
      description: 'Кокосовое молоко, креветка, грибы.',
      photo: '/супы/том ям.jpg',
      weight: 250,
      old_price: 560,
      new_price: 500,
      type_id: 6, // Супы
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Соусы и добавки
    {
      title: 'Имбирь',
      description: '',
      photo: '/соусы/imbir.jpg',
      weight: 30,
      old_price: 30,
      new_price: 20,
      type_id: 7, // Соусы
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Соевый соус',
      description: '',
      photo: '/соусы/соевый.jpg',
      weight: 50,
      old_price: 40,
      new_price: 30,
      type_id: 7, // Соусы
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Спайси соус',
      description: '',
      photo: '/соусы/spicy.jpg',
      weight: 50,
      old_price: 60,
      new_price: 50,
      type_id: 7, // Соусы
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ореховый соус',
      description: '',
      photo: '/соусы/ореховый.jpg',
      weight: 50,
      old_price: 60,
      new_price: 50,
      type_id: 7, // Соусы
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Сырный соус',
      description: '',
      photo: '/соусы/sauce_cheesy.jpg',
      weight: 50,
      old_price: 60,
      new_price: 50,
      type_id: 7, // Соусы
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Кисло-сладкий соус',
      description: '',
      photo: '/соусы/кисло-сладкий.jpg',
      weight: 50,
      old_price: 60,
      new_price: 50,
      type_id: 7, // Соусы
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Десерты
    {
      title: 'Чизкейк',
      description: '',
      photo: '/десерты/чизкейк.jpg',
      weight: 180,
      old_price: 230,
      new_price: 210,
      type_id: 8, // Десерты
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Напитки
    {
      title: 'Американо',
      description: 'Зерновой кофе',
      photo: '/напитки/кофе.jpeg',
      weight: 200,
      old_price: 200,
      new_price: 180,
      type_id: 9, // Напитки
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Adrenalin Rush',
      description: '',
      photo: '/напитки/adrenalin_new.jpg',
      weight: 450,
      old_price: 290,
      new_price: 280,
      type_id: 9, // Напитки
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Морс',
      description: '',
      photo: '/напитки/Морс_клюквенный (1).jpg',
      weight: 500,
      old_price: 120,
      new_price: 110,
      type_id: 9, // Напитки
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ];
    await queryInterface.bulkInsert('Foods', foods, {});
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
