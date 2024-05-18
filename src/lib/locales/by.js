let by = {
	home: {
		title: 'Хутка тут адчыніцца платформа для прадпрымальнікаў і іх кліентаў.',
		subtitle: ["Мы як пчолы", 'усё яшчэ працуем над запускам нашага вулля.', 'buh-buh-buh'],
		description: 'Зарэгіструйцеся зараз, каб быць у ліку першых, хто максымізуе ўплыў на ваш бізнэс.',
		button: 'Рэгістрацыя'
	},
	form: {
		title: 'Рэгістрацыя',
		contacts: {
			text_company: 'Назва кампаніі/майстры',
			text_description: 'Апісанне кампаніі',
			text_phone: 'Тэлефон',
			text_email: 'Email',
			input_address: {
				title: 'Адрас',
				placeholder: ['Улица Дом', 'Горад Рэгіён'],
			}
		},
		category: {
			title: 'Сфера дзейнасці',
			default_category: 'Абярыце катэгорыю',
			default_subcategory: 'Абярыце падкатэгорыю',
			'title-category': 'Катэгорыі',
			'title-subcategory': 'Падкатэгорыі',
			categories: [
				{
					name: 'Прыгажосць',
					subcategories: [
						'Валасы',
						'Цырульнік',
						'Пазногці',
						'Бровы',
						'Масаж',
						'Макіяж',
						'Спа',
					]
				},
				{
					name: 'Здароўе',
					subcategories: [
						'Стаматалогія',
						'Афтальмалогія',
						'Сямейны доктар',
						'NFZ',
						'Профільныя спецыялісты',
						'Фізіятэрапія',
						'Нетрадыцыйная медыцына',
					]
				},
				{
					name: 'Спорт',
					subcategories: [
						'Трэнажорныя залы',
						'Басейны',
						'Фитнес',
						'Танцы',
						'Ёга',
						'Пілатэс',
						'Валейбол',
						'Футбол',
						'Тэніс',
						'Сквош',
						'Бокс',
						'Адзінаборствы',
						'Веласпорт',
						'Зімовыя віды спорту',
					]
				},
				{
					name: 'Адукацыя',
					subcategories: [
						'Школы',
						'Школы паліцэяльныя',
						'Каледжы',
						'Універсітэты',
						'Курсы',
						'Рэпетытары',
					]
				},
				{
					name: 'Забава',
					subcategories: [
						'Выставы',
						'Музеі',
						'Тэатры',
						'Канцэртныя залы',
						'Кафэ',
						'Клубы',
						'Рэстараны',
					]
				},
				{
					name: 'Дзеці',
					subcategories: [
						'Дзіцячыя сады',
						'Школы',
						'Няні',
						'Дзіцячыя забаўляльныя цэнтры',
						'Цырк',
						'Аквапарк',
						'Гурткі',
					]
				},
				{
					name: 'Дом',
					subcategories: [
						'Клінінг',
						'Сантэхніка',
						'Электрыка',
						'Ацяпляльная сістэма',
						'Рамонт',
						'Зборка мэблі',
					]
				},
				{
					name: 'Гадаванцы',
					subcategories: [
						'Ветэрынарныя клінікі',
						'Салоны прыгажосці для хатніх жывёл',
						'Гатэлі для жывёл',
						'Выгул сабак',
					]
				},
				{
					name: 'Транспарт',
					subcategories: [
						'Станцыя тэхнічнага абслугоўвання',
						'Пасажырскія перавозкі',
						'Грузавыя перавозкі',
						'Арэнда аўтамабіляў',
					]
				},
				{
					name: 'Паслугі для бізнесу',
					subcategories: [
						'Рэгістрацыя бізнесу',
						'Бізнес-інкубатары',
						'Бухгалтарскія паслугі',
						'Юрыдычныя паслугі для бізнесу',
						'Падбор персаналу',
					]
				},
				{
					name: 'Юрыдычныя паслугі',
					subcategories: [
						'Легалізацыя',
						'Натарыусы',
						'Прысяжныя перакладчыкі',
						'Юрыдычныя паслугі для бізнесу',
						'Адвакаты',
					]
				},
			],
		},
		work: {
			title: 'Вы працуеце як:',
			text_physical: 'Фіз. асоба',
			input_physical: 'Увядзіце 11 лічбаў',
			text_company: 'Кампанія',
			input_company: 'Увядзіце 10 лічбаў'
		},
		network: {
			title: 'Сацсеткі',
			text_instagram: 'Instagram',
			placeholder_instagram: 'Спасылка',
			text_facebook: 'Facebook',
			placeholder_facebook: 'Спасылка',
			text_telegram: 'Telegram',
			placeholder_telegram: 'Спасылка',
			text_tiktok: 'TikTok',
			placeholder_tiktok: 'Спасылка',
			text_linkedin: 'Linkedin',
			placeholder_linkedin: 'Спасылка'
		},
		workMode: {
			title: 'Рэжым працы',
			text_time: 'Час працы',
			text_buttons: 'Ужыць да',
			button_all: 'Усім дням',
			button_weekdays: 'Будням',
			button_edit: 'Рэдагаванне',
			button_cancel: 'Закрыць',
			days: ['Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота', 'Нядзеля']
		},
		calendar: {
			text: 'Спасылка на каляндар (Google, Yandex, Outlook)',
			placeholder: 'Спасылка'
		},
		communication: {
			title: 'Мовы камунікацыі',
			another_text: 'Іншы',
			another_placeholder: 'Увядзіце іншыя мовы'
		},
		preference: {
			text: 'Абярыце да якой катэгорыі адпавядае ваша кампанія',
			text_description: '(можна выбраць некалькі варыянтаў):',
			companies: ['ecofriendly', 'petfriendly', 'childfriendly', 'inclusive']
		},
		confirmation: {
			text: 'Даю згоду на публікацыю прадстаўленых дадзеных на рэсурсах YOOHIVE.COM',
			text_description: '(бот, сайт, сацсеткі)'
		},
		button: {
			text: 'Рэгістрацыя',
			message_error: 'Адбылася памылка: ',
			message_error_server: 'Памылка пры адпраўцы дадзеных: ',
			message_completed: 'Дадзеныя паспяхова адпраўлены',
			button_prev: 'Назад',
			button_next: 'Наперад'
		}
	}
};

export default by;
