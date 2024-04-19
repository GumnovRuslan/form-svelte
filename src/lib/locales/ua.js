let ua = {
	message: {
		title: 'Скоро тут почне працювати платформа для підприємців та їхніх клієнтів - YOOHIVE.',
		description: `Ми як бджілки ще працюємо над запуском нашого вулика, жу-жу-жу.
Але вже зараз ви можете зареєструватися на нашому сайті, щоб одними з перших отримати максимальний ефект для вашого бізнесу.`,
		button: 'Зареєструватись'
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
				placeholder: ['Вулиця', 'Хата'],
			}
		},
		category: {
			title: 'Категорії',
			categories: [
				{
					name: 'Краса',
					subcategories: {
						default : 'Виберіть підкатегорію',
						value: [
							{
								name:'Волосся',
								value: 'hair'
							},
							{
								name:'Перукар',
								value: 'barber'
							},
							{
								name:'Нігті',
								value: 'nail'
							},
							{
								name:'Брові',
								value: 'Brows'
							},
							{
								name:'Масаж',
								value: 'massage'
							},
							{
								name:'Макіяж',
								value: 'makeup'
							},
							{
								name:'Спа',
								value: 'Spa'
							}
						]
					}
				}
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
			time_open: 'Час відкриття',
			time_close: 'Час закриття',
			day_monday: 'Понеділок',
			day_tuesday: 'Вівторок',
			day_wednesday: 'Середа',
			day_thursday: 'Четвер',
			day_friday: "П'ятниця",
			day_saturday: 'Субота',
			day_sunday: 'Неділя'
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
