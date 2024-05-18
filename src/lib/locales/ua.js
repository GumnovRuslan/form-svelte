let ua = {
	home: {
		title: 'Незабаром тут відкриється платформа для підприємців та їхніх клієнтів.',
		subtitle: ["Ми як бджоли", 'все ще працюємо над запуском нашого вулика.', 'buh-buh-buh'],
		description: 'Зареєструйтесь зараз, щоб бути серед перших, хто максимізує вплив на ваш бізнес.',
		button: 'Реєстрація'
	},
	form: {
		title: 'Реєстрація',
		contacts: {
			text_company: 'Назва компанії/майстра',
			text_phone: 'Телефон',
			text_description: 'Опис компанії',
			text_email: 'Email',
			input_address: {
				title: 'Адреса',
				placeholder: ['Вулиця Будинок', 'Місто Регіон'],
			}
		},
		category: {
			title: 'Сфера діяльності',
			default_category: 'Оберіть категорію',
			default_subcategory: 'Виберіть підкатегорію',
			'title-category': 'Категорії',
			'title-subcategory': 'Підкатегорії',
			categories: [
				{
					name: 'Краса',
					subcategories: [
						'Волосся',
						'Перукар',
						'Нігті',
						'Брові',
						'Масаж',
						'Макіяж',
						'Спа',
					]
				},
				{
					name: "Здоров'я",
					subcategories: [
						'Стоматологія',
						'Офтальмологія',
						'Сімейний лікар',
						'NFZ',
						'Профільні спеціалісти',
						'Фізіотерапія',
						'Нетрадиційна медицина',
					]
				},
				{
					name: 'Спорт',
					subcategories: [
						'Тренажерні зали',
						'Басейни',
						'Фітнес',
						'Танці',
						'Йога',
						'Пілатес',
						'Волейбол',
						'Футбол',
						'Теніс',
						'Сквош',
						'Бокс',
						'Єдиноборства',
						'Велоспорт',
						'Зимні види спорту',
					]
				},
				{
					name: 'Освіта',
					subcategories: [
						'Школи',
						'Школи поліціальні',
						'Коледжі',
						'Університети',
						'Курси',
						'Репетитори',
					]
				},
				{
					name: 'Розвага',
					subcategories: [
						'Виставки',
						'Музеї',
						'Театри',
						'Концертні зали',
						'Кафе',
						'Клуби',
						'Ресторани',
					]
				},
				{
					name: 'Діти',
					subcategories: [
						'Дитячі садки',
						'Школи',
						'Няні',
						'Дитячі розважальні центри',
						'Цирк',
						'Аквапарк',
						'Гуртки',
					]
				},
				{
					name: 'Хата',
					subcategories: [
						'Клінінг',
						'Сантехніка',
						'Електрика',
						'Опалювальна система',
						'Ремонт',
						'Складання меблів',
					]
				},
				{
					name: 'Вихованці',
					subcategories: [
						'Ветеринарні клініки',
						'Салони краси для домашніх тварин',
						'Готелі для тварин',
						'Вигул собак',
					]
				},
				{
					name: 'Транспорт',
					subcategories: [
						'СТО',
						'Пасажирські перевезення',
						'Вантажні перевезення',
						'Оренда автомобілів',
					]
				},
				{
					name: 'Послуги для бізнесу',
					subcategories: [
						'Реєстрація бізнесу',
						'Бізнес-інкубатори',
						'Бугалтерські послуги',
						'Юридичні послуги для бізнесу',
						'Підбір персоналу',
					]
				},
				{
					name: 'Юридичні послуги',
					subcategories: [
						'Легалізація',
						'Нотаріуси',
						'Присяжні перекладачі',
						'Юридичні послуги для бізнесу',
						'Адвокати',
					]
				},
			],
		},
		work: {
			title: 'Ви працюєте як:',
			text_physical: 'Фіз. особа',
			input_physical: 'Введіть 11 цифр',
			text_company: 'Компанія',
			input_company: 'Введіть 10 цифр'
		},
		network: {
			title: 'Соцмережі',
			text_instagram: 'Instagram',
			placeholder_instagram: 'Посилання',
			text_facebook: 'Facebook',
			placeholder_facebook: 'Посилання',
			text_telegram: 'Telegram',
			placeholder_telegram: 'Посилання',
			text_tiktok: 'TikTok',
			placeholder_tiktok: 'Посилання',
			text_linkedin: 'Linkedin',
			placeholder_linkedin: 'Посилання'
		},
		workMode: {
			title: 'Режим роботи',
			text_time: 'Час роботи',
			text_buttons: 'Застосувати до',
			button_all: 'Всім дням',
			button_weekdays: 'Будням',
			button_edit: 'Редагування',
			button_cancel: 'Закрити',
			days: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя']
		},
		calendar: {
			text: 'Посилання на календар (Google, Яндекс, Outlook)',
			placeholder: 'Посилання'
		},
		communication: {
			title: 'Мови комунікації',
			another_text: 'Інший',
			another_placeholder: 'Введіть інші мови'
		},
		preference: {
			text: 'Виберіть до якої категорії відповідає ваша компанія',
			text_description: '(можна вибрати кілька варіантів)',
			companies: ['ecofriendly', 'petfriendly', 'childfriendly', 'inclusive']
		},
		confirmation: {
			text: 'Даю згоду на публікацію наданих даних на ресурсах YOOHIVE.COM',
			text_description: '(бот, сайт, соцмережі)'
		},
		button: {
			text: 'Реєстрація',
			message_error: 'Виникла помилка: ',
			message_error_server: 'Помилка при надсиланні даних: ',
			message_completed: 'Дані успішно надіслані:',
			button_prev: 'Назад',
			button_next: 'Вперед'
		}
	}
};

export default ua;
