let en = {
	message: {
		title:
			'YOOHIVE, a platform for entrepreneurs and their customers, will be launching here soon.',
		title_alternative: 'Become a part of YOOHIVE',
		description: `We're like bees still working on the launch of our hive, buh buh buh buh buh. But already now you can register on our website to be among the first to maximize the impact for your business.`,
		button: 'Registration'
	},
	form: {
		title: 'Registration',
		contacts: {
			text_company: 'Company/Master Name',
			text_description: 'Company Description',
			text_phone: 'Phone',
			text_email: 'Email',
			input_address: {
				title: 'Address',
				placeholder: ['Street', 'House'],
			}
		},
		category: {
			title: 'Categories',
			categories: [
				{
					name: 'Beauty',
					subcategories: {
						default : 'Select subcategory',
						value: [
							{
								name:'Hair',
								value: 'hair'
							},
							{
								name:'Barber',
								value: 'barber'
							},
							{
								name:'Nail',
								value: 'nail'
							},
							{
								name:'Brows',
								value: 'brows'
							},
							{
								name:'Massage',
								value: 'massage'
							},
							{
								name:'Makeup',
								value: 'makeup'
							},
							{
								name:'Spa',
								value: 'spa'
							}
						]
					}
				}
			],
		},
		work: {
			title: 'You work as:',
			text_physical: 'Physical person',
			input_physical: 'Enter 11 numbers',
			text_company: 'Company',
			input_company: 'Enter 10 numbers'
		},
		network: {
			title: 'Social network',
			text_instagram: 'Instagram',
			placeholder_instagram: 'Link',
			text_facebook: 'Facebook',
			placeholder_facebook: 'Link',
			text_telegram: 'Telegram',
			placeholder_telegram: 'Link',
			text_tiktok: 'TikTok',
			placeholder_tiktok: 'Link',
			text_linkedin: 'Linkedin',
			placeholder_linkedin: 'Link'
		},
		workMode: {
			title: 'Mode of operation',
			time_open: 'Open Time',
			time_close: 'Close Time',
			day_monday: 'Monday',
			day_tuesday: 'Tuesday',
			day_wednesday: 'Wednesday',
			day_thursday: 'Thursday',
			day_friday: 'Friday',
			day_saturday: 'Saturday',
			day_sunday: 'Sunday'
		},
		calendar: {
			text: 'Link to calendar (Google, Yandex, Outlook)',
			placeholder: 'Link'
		},
		communication: {
			title: 'Communication languages',
			another: 'Other',
			another_placeholder: 'Enter other languages'
		},
		preference: {
			text: 'Choose to which category your company corresponds',
			text_description: '(you can choose several options)',
			companies: ['ecofriendly', 'petfriendly', 'childfriendly', 'inclusive']
		},
		confirmation: {
			text: 'I agree to publish the provided data on YOOHIVE.COM resources',
			text_description: '(bot, website, social network)'
		},
		button: {
			text: 'Registration',
			message_error: 'An error has occurred: ',
			message_error_server: 'Error sending data: ',
			message_completed: 'Data sent successfully',
			button_prev: 'Back',
			button_next: 'Forward'
		}
	}
};

export default en;
