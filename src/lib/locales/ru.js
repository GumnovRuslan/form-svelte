let ru = {
	message: {
		title: 'Скоро здесь начнёт работать платформа для предпринимателей и их клиентов - YOOHIVE.',
		title_alternative: 'Стать частью YOOHIVE',
		description:
			'Мы как пчелки ещё работаем над запуском нашего улья, жу-жу-жу. Но уже сейчас вы можете зарегистрироваться на нашем сайте, чтобы одними из первых получить максимальный эффект для вашего бизнеса.',
		button: 'Зарегистрироваться'
	},
	form: {
		title: 'Регистрация',
		contacts: {
			text_company: 'Название компании/мастера',
			text_phone: 'Телефон',
			text_email: 'Email',
			text_description: 'Описание компании',
			input_address: {
				title: 'Адрес',
				placeholder: ['Улица', 'Дом'],
			}

		},
		category: {
			title: 'Категории',
			default : 'Выберите подкатегорию',
			categories: [
				{
					name: 'Красота',
					subcategories: [
						'Волосы',
						'Парикмахер',
						'Ногти',
						'Брови',
						'Массаж',
						'Макияж',
						'Спа',
					]
				},
				{
					name: 'Здоровье',
					subcategories: [
						'Стоматология',
						'Офтальмология',
						'Семейный доктор',
						'NFZ',
						'Профильные специалисты',
						'Физиотерапия',
						'Нетрадиционная медицина',
					]
				},
				{
					name: 'Спорт',
					subcategories: [
						'Тренажерные залы',
						'Бассейны',
						'Фитнес',
						'Танцы',
						'Йога',
						'Пилатес',
						'Волейбол',
						'Футбол',
						'Теннис',
						'Сквош',
						'Бокс',
						'Единоборства',
						'Велоспорт',
						'Зимние виды спорта',
					]
				},
				{
					name: 'Образование',
					subcategories: [
						'Школы',
						'Школы полициальные',
						'Колледжи',
						'Университеты',
						'Курсы',
						'Репетиторы',
					]
				},
				{
					name: 'Развлечение',
					subcategories: [
						'Выставки',
						'Музеи',
						'Театры',
						'Концертные залы',
						'Кафе',
						'Клубы',
						'Рестораны',
					]
				},
				{
					name: 'Дети',
					subcategories: [
						'Детские сады',
						'Школы',
						'Няни',
						'Детские развлекательные центры',
						'Цирк',
						'Аквапарк',
						'Кружки',
					]
				},
				{
					name: 'Дом',
					subcategories: [
						'Клининг',
						'Сантехника',
						'Электрика',
						'Отопительная система',
						'Ремонт',
						'Сборка мебели',
					]
				},
				{
					name: 'Питомцы',
					subcategories: [
						'Ветеринарные клиники',
						'Салоны красоты для домашних животных',
						'Отели для животных',
						'Выгул собак',
					]
				},
				{
					name: 'Транспорт',
					subcategories: [
						'СТО',
						'Пассажирские перевозки',
						'Грузовые перевозки',
						'Аренда автомобилей',
					]
				},
				{
					name: 'Услуги для бизнеса',
					subcategories: [
						'Регистрация бизнеса',
						'Бизнес-инкубаторы',
						'Бухгалтерские услуги',
						'Юридические услуги для бизнеса',
						'Подбор персонала',
					]
				},
				{
					name: 'Юридические услуги',
					subcategories: [
						'Легализация',
						'Нотариусы',
						'Присяжные переводчики',
						'Юридические услуги для бизнеса',
						'Адвокаты',
					]
				},
			],
		},
		work: {
			title: 'Вы работаете как:',
			text_physical: 'Физ. лицо',
			input_physical: 'Введите 11 цифр',
			text_company: 'Компания',
			input_company: 'Введите 10 цифр'
		},
		network: {
			title: 'Соцсети',
			text_instagram: 'Instagram',
			placeholder_instagram: 'Ссылка',
			text_facebook: 'Facebook',
			placeholder_facebook: 'Ссылка',
			text_telegram: 'Telegram',
			placeholder_telegram: 'Ссылка',
			text_tiktok: 'TikTok',
			placeholder_tiktok: 'Ссылка',
			text_linkedin: 'Linkedin',
			placeholder_linkedin: 'Ссылка'
		},
		workMode: {
			title: 'Режим работы',
			time_open: 'Время открытия',
			time_close: 'Время закрытия',
			day_monday: 'Понедельник',
			day_tuesday: 'Вторник',
			day_wednesday: 'Среда',
			day_thursday: 'Четверг',
			day_friday: 'Пятница',
			day_saturday: 'Суббота',
			day_sunday: 'Воскресенье'
		},
		calendar: {
			text: 'Ссылка на календарь (Google, Yandex, Outlook)',
			placeholder: 'Ссылка'
		},
		communication: {
			title: 'Языки комуникациии',
			another_text: 'Другой',
			another_placeholder: 'Введите другие языки'
		},
		preference: {
			text: 'Выберите к какой категории соответствует ваша компания',
			text_description: '(можно выбрать несколько вариантов)',
			companies: ['ecofriendly', 'petfriendly', 'childfriendly', 'inclusive']
		},
		confirmation: {
			text: 'Даю согласие на публикацию предоставленных данных на ресурсах YOOHIVE.COM',
			text_description: '(бот, сайт, соцсети)'
		},
		button: {
			text: 'Регистрация',
			message_error: 'Произошла ошибка: ',
			message_error_server: 'Ошибка при отправке данных: ',
			message_completed: 'Данные успешно отправлены',
			button_prev: 'Назад',
			button_next: 'Вперед'
		}
	}
};

export default ru;
