let pl = {
	home: {
		title: 'Już wkrótce zostanie tu otwarta platforma dla przedsiębiorców i ich klientów.',
		subtitle: ["Jesteśmy jak pszczoły", 'wciąż pracujemy nad tym, żeby nasz ul zaczął działać.', 'buh-buh-buh'],
		description: 'Zarejestruj się już teraz, aby być jednym z pierwszych, którzy zmaksymalizują wpływ na Twój biznes.',
		button: 'Rejestracja'
	},
	form: {
		title: 'Rejestracja',
		contacts: {
			text_company: 'Firma/Nazwa główna',
			text_description: 'Opis Firmy',
			text_phone: 'Telefon',
			text_email: 'Email',
			input_address: {
				title: 'Adres',
				placeholder: ['Uliczny Dom', 'Region Miejski'],
			}
		},
		category: {
			title: 'Pole aktywności',
			default_category: 'Wybierz kategorię',
			default_subcategory: 'Wybierz podkategorię',
			'title-category': 'Kategorie',
			'title-subcategory': 'Podkategorie',
			categories: [
				{
					name: 'Uroda',
					subcategories: [
						'Włosy',
						'Fryzjer',
						'Paznokcie',
						'Brwi',
						'Masaż',
						'Makijaż',
						'Spa',
					]
				},
				{
					name: 'Zdrowie',
					subcategories: [
						'Stomatologia',
						'Okulistyka',
						'Lekarz rodzinny',
						'NFZ',
						'Specjaliści',
						'Fizjoterapia',
						'Medycyna alternatywna',
					]
				},
				{
					name: 'Sport',
					subcategories: [
						'SIŁOWNIE',
						'Baseny',
						'Zdatność',
						'Taniec',
						'Joga',
						'Pilates',
						'Siatkówka',
						'Piłka nożna',
						'Tenis',
						'Zdusić',
						'Boks',
						'Sztuki walki',
						'Kolarstwo',
						'Sporty zimowe',
					]
				},
				{
					name: 'Edukacja',
					subcategories: [
						'Szkoły',
						'Szkoła Policealna',
						'Uczelnie',
						'Uniwersytety',
						'Kursy',
						'Korepetytorzy',
					]
				},
				{
					name: 'Rozrywka',
					subcategories: [
						'Wystawy',
						'Muzea',
						'Teatry',
						'Sale koncertowe',
						'Kawiarnia',
						'Kluby',
						'Restauracje',
					]
				},
				{
					name: 'Dzieci',
					subcategories: [
						'Przedszkola',
						'Szkoły',
						'Nianie',
						'Centra rozrywki dla dzieci',
						'Cyrk',
						'Park wodny',
						'Zainteresowane grupy',
					]
				},
				{
					name: 'Dom',
					subcategories: [
						'Czyszczenie',
						'Instalacja wodociągowa',
						'Elektryczne',
						'System grzewczy',
						'Naprawa',
						'Montaż mebli',
					]
				},
				{
					name: 'Zwierzęta',
					subcategories: [
						'Kliniki weterynaryjne',
						'Salony piękności dla zwierząt',
						'Hotele dla zwierząt',
						'Spacer z psem',
					]
				},
				{
					name: 'Transport',
					subcategories: [
						'Stacja serwisowa',
						'Transport Pasażerski',
						'Transport towarowy',
						'Wynajem samochodu',
					]
				},
				{
					name: 'Usługi biznesowe',
					subcategories: [
						'Rejestracji działalności gospodarczej',
						'Inkubatory przedsiębiorczości',
						'Usługi księgowe',
						'Obsługa prawna biznesu',
						'Rekrutacja',
					]
				},
				{
					name: 'Usługi prawne',
					subcategories: [
						'Legalizacja',
						'Notariusze',
						'Tłumacze przysięgli',
						'Obsługa prawna biznesu',
						'Prawnicy',
					]
				},
			],
		},
		work: {
			title: 'Pracujesz jako:',
			text_physical: 'Osoba fizyczna',
			input_physical: 'Wprowadź 11 cyfr',
			text_company: 'Firma',
			input_company: 'Wprowadź 10 cyfr'
		},
		network: {
			title: 'Portale społecznościowe',
			text_instagram: 'Instagram',
			placeholder_instagram: 'Połączyć',
			text_facebook: 'Facebook',
			placeholder_facebook: 'Połączyć',
			text_telegram: 'Telegram',
			placeholder_telegram: 'Połączyć',
			text_tiktok: 'TikTok',
			placeholder_tiktok: 'Połączyć',
			text_linkedin: 'Linkedin',
			placeholder_linkedin: 'Połączyć'
		},
		workMode: {
			title: 'Tryb pracy',
			text_time: 'Godziny pracy',
			text_buttons: 'Zastosuj do',
			button_all: 'Wszystkie dni',
			button_weekdays: 'Życie codzienne',
			button_edit: 'Redagowanie',
			button_cancel: 'Zamknąć',
			days: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']
		},
		calendar: {
			text: 'Link do kalendarza (Google, Yandex, Outlook)',
			placeholder: 'Połączyć'
		},
		communication: {
			title: 'Języki komunikacji',
			another_text: 'Inne',
			another_placeholder: 'Wprowadź inne języki'
		},
		preference: {
			text: 'Wybierz kategorię, do której należy Twoja firma',
			text_description: '(możesz wybrać kilka opcji)',
			companies: ['ecofriendly', 'petfriendly', 'childfriendly', 'włącznie']
		},
		confirmation: {
			text: 'Wyrażam zgodę na publikację udostępnionych danych w zasobach  YOOHIVE.COM',
			text_description: '(bot, strona internetowa, sieci społecznościowe)'
		},
		button: {
			text: 'Rejestracja',
			message_error: 'Wystąpił błąd: ',
			message_error_server: 'Błąd podczas wysyłania danych: ',
			message_completed: 'Dane przesłane pomyślnie',
			button_prev: 'Z powrotem',
			button_next: 'Do przodu'
		},
		message_successful: 'Rejestracja zakończona'
	}
};

export default pl;
