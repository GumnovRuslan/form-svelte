<script>
	import i18next from 'i18next';
	import ru from '$lib/locales/ru.js';
	import en from '$lib/locales/en.js';
	import pl from '$lib/locales/pl.js';
	import ua from '$lib/locales/ua.js';
	import by from '$lib/locales/by.js';
	import { onMount } from 'svelte';
	import WorkMode from '$lib/components/WorkMode.svelte'
	import Categories from '$lib/components/Categories.svelte';
	import FormControls from '../lib/components/FormControls.svelte';
	import { PUBLIC_URL } from '$env/static/public'
	import categoriesFull from '../lib/db/categories'
	import { contactsData } from '../lib/db/contacts'
	import { networkData } from '../lib/db/network'
	import workModeDate from '../lib/db/workMode'
	import languagesData from '../lib/db/languages'
	import preferencesData from '../lib/db/preferences'
	import agreementData from '../lib/db/agreement'
	import workUsData from '../lib/db/workUs'
	import calendarData from '../lib/db/calendar'
	import homeData from '../lib/db/home'
	import Header from '../lib/components/Header.svelte';
	import ProgressBar from '../lib/components/ProgressBar.svelte';
	import Contacts from '../lib/components/Contacts.svelte';
	import { arrow } from '../lib/icons';
	import Home from '../lib/components/Home.svelte';
	import WorkUs from '../lib/components/WorkUs.svelte';
	import Network from '../lib/components/Network.svelte';
	import Calendar from '../lib/components/Calendar.svelte';
	import Languages from '../lib/components/Languages.svelte';
	import Preferences from '../lib/components/Preferences.svelte';
	import Agreement from '../lib/components/Agreement.svelte';
	import Successful from '../lib/components/Successful.svelte'

	// const PUBLIC_URL = ''

	const langs = ["ru", "en", "pl", "by", "ua"]
	let selectLangId
	i18next.on('languageChanged', changeContent);

	let stepLength = 4
	let activeFormIndex
	let formMessage = ''
	let formMessageIsError = false
	let buttonIsDisabled = false
	let controlsButton = true
	let categoryValidate = true
	let subcategoryValidate = true
	let workUsRadiosValidate = true
	let agreementCheckboxValidate = true
	let formTitle = 'Registration'

	let buttonsControls = {
		prev: 'prev',
		next: 'next'
	}

	onMount(() => {
		stepLength = document.querySelectorAll('.form-stage').length
		langInit();
	});

	function langInit() {
		const browserLanguage = window.navigator.language;
		const langIndex = langs.indexOf(browserLanguage)
		selectLangId = (langIndex >= 0) ? langIndex : 1
		langs[selectLangId];

		i18next.init({
			lng: langs[selectLangId],
			resources: {
				en: en,
				ru: ru,
				pl: pl,
				ua: ua,
				by: by
			}
		});
	}

	function changeContent() {
			formTitle = i18next.t('form:title');
			home()
			contacts();
			categories()
			workUs();
			network();
			workMode();
			calendar();
			communication();
			preference();
			formConfirmation();
			document.getElementById('buttonSend').textContent = i18next.t('form:button.text');
			buttonsControls = {
				prev: i18next.t('form:button.button', {context: 'prev'}),
				next: i18next.t('form:button.button', {context: 'next'}),
			}
			function home() {
				homeData.title = i18next.t('home:title');
				homeData.subtitle[0] = i18next.t('home:subtitle.0');
				homeData.subtitle[1] = i18next.t('home:subtitle.1');
				homeData.subtitle[2] = i18next.t('home:subtitle.2');
				homeData.description = i18next.t('home:description');
				homeData.button = i18next.t('home:button');

			}
			function contacts() {
				contactsData.company.name = i18next.t(`form:contacts.text`, { context: 'company' })
				contactsData.company.placeholder = i18next.t(`form:contacts.text`, { context: 'company' })

				contactsData.description.name = i18next.t(`form:contacts.text`, { context: 'description' })
				contactsData.description.placeholder = i18next.t(`form:contacts.text`, { context: 'description' })

				contactsData.address.name = i18next.t(`form:contacts.input_address.title`)
				contactsData.address.placeholder[0] = i18next.t(`form:contacts.input_address.placeholder.0`)
				contactsData.address.placeholder[1] = i18next.t(`form:contacts.input_address.placeholder.1`)

				contactsData.phone.name = i18next.t(`form:contacts.text`, { context: 'phone' })
				contactsData.phone.placeholder = i18next.t(`form:contacts.text`, { context: 'phone' })

				contactsData.email.name = i18next.t(`form:contacts.text`, { context: 'email' })
				contactsData.email.placeholder = i18next.t(`form:contacts.text`, { context: 'email' })
			}
			function workUs() {
				workUsData.title = i18next.t('form:work.title')
				workUsData.text[0] = i18next.t(`form:work.text`, { context: 'physical' })
				workUsData.text[1] = i18next.t(`form:work.text`, { context: 'company' })
				workUsData.placeholder[0] = i18next.t(`form:work.input`, { context: 'physical' })
				workUsData.placeholder[1] = i18next.t(`form:work.input`, { context: 'company' })
			}
			function network() {
				networkData.title = i18next.t('form:network.title');
			}
			function workMode() {
				workModeDate.title = i18next.t('form:workMode.title')
				workModeDate.text_time = i18next.t('form:workMode.text_time')
				workModeDate.text_buttons = i18next.t('form:workMode.text_buttons')
				workModeDate.button_all = i18next.t('form:workMode.button_all')
				workModeDate.button_weekdays = i18next.t('form:workMode.button_weekdays')
				workModeDate.button_edit = i18next.t('form:workMode.button_edit')
				workModeDate.button_cancel = i18next.t('form:workMode.button_cancel')
				workModeDate.days[0].name = i18next.t('form:workMode.days.0')
				workModeDate.days[1].name = i18next.t('form:workMode.days.1')
				workModeDate.days[2].name = i18next.t('form:workMode.days.2')
				workModeDate.days[3].name = i18next.t('form:workMode.days.3')
				workModeDate.days[4].name = i18next.t('form:workMode.days.4')
				workModeDate.days[5].name = i18next.t('form:workMode.days.5')
				workModeDate.days[6].name = i18next.t('form:workMode.days.6')
			}
			function calendar() {
				calendarData.title = i18next.t(`form:calendar.text`);
				calendarData.placeholder = i18next.t(`form:calendar.placeholder`);
			}
			function communication() {
				languagesData.title = i18next.t(`form:communication.title`);
				languagesData.another = i18next.t(`form:communication.another`, {context: 'text'});
				languagesData.another_placeholder = i18next.t(`form:communication.another`, {context: 'placeholder'});
			}
			function preference() {
				preferencesData.title = i18next.t(`form:preference.text`);
			}
			function formConfirmation() {
				agreementData.title = i18next.t(`form:confirmation.text`);
				agreementData.subtitle = i18next.t(`form:confirmation.text`, { context: 'description' });
			}
			function categories() {
				categoriesFull.title = i18next.t(`form:category.title`)
				categoriesFull.category_default = i18next.t(`form:category.default`, { context: 'category' })
				categoriesFull.subcategory_default = i18next.t(`form:category.default`, { context: 'subcategory' })

				categoriesFull['title-category'] = i18next.t(`form:category.title-category`)
				categoriesFull['title-subcategory'] = i18next.t(`form:category.title-subcategory`)

				categoriesFull.categories[0].name = i18next.t(`form:category.categories.0.name`)
				categoriesFull.categories[0].subcategories[0].name = i18next.t(`form:category.categories.0.subcategories.0`)
				categoriesFull.categories[0].subcategories[1].name = i18next.t(`form:category.categories.0.subcategories.1`)
				categoriesFull.categories[0].subcategories[2].name = i18next.t(`form:category.categories.0.subcategories.2`)
				categoriesFull.categories[0].subcategories[3].name = i18next.t(`form:category.categories.0.subcategories.3`)
				categoriesFull.categories[0].subcategories[4].name = i18next.t(`form:category.categories.0.subcategories.4`)
				categoriesFull.categories[0].subcategories[5].name = i18next.t(`form:category.categories.0.subcategories.5`)
				categoriesFull.categories[0].subcategories[6].name = i18next.t(`form:category.categories.0.subcategories.6`)

				categoriesFull.categories[1].name = i18next.t(`form:category.categories.1.name`)
				categoriesFull.categories[1].subcategories[0].name = i18next.t(`form:category.categories.1.subcategories.0`)
				categoriesFull.categories[1].subcategories[1].name = i18next.t(`form:category.categories.1.subcategories.1`)
				categoriesFull.categories[1].subcategories[2].name = i18next.t(`form:category.categories.1.subcategories.2`)
				categoriesFull.categories[1].subcategories[3].name = i18next.t(`form:category.categories.1.subcategories.3`)
				categoriesFull.categories[1].subcategories[4].name = i18next.t(`form:category.categories.1.subcategories.4`)
				categoriesFull.categories[1].subcategories[5].name = i18next.t(`form:category.categories.1.subcategories.5`)
				categoriesFull.categories[1].subcategories[6].name = i18next.t(`form:category.categories.1.subcategories.6`)

				categoriesFull.categories[2].name = i18next.t(`form:category.categories.2.name`)
				categoriesFull.categories[2].subcategories[0].name = i18next.t(`form:category.categories.2.subcategories.0`)
				categoriesFull.categories[2].subcategories[1].name = i18next.t(`form:category.categories.2.subcategories.1`)
				categoriesFull.categories[2].subcategories[2].name = i18next.t(`form:category.categories.2.subcategories.2`)
				categoriesFull.categories[2].subcategories[3].name = i18next.t(`form:category.categories.2.subcategories.3`)
				categoriesFull.categories[2].subcategories[4].name = i18next.t(`form:category.categories.2.subcategories.4`)
				categoriesFull.categories[2].subcategories[5].name = i18next.t(`form:category.categories.2.subcategories.5`)
				categoriesFull.categories[2].subcategories[6].name = i18next.t(`form:category.categories.2.subcategories.6`)
				categoriesFull.categories[2].subcategories[7].name = i18next.t(`form:category.categories.2.subcategories.7`)
				categoriesFull.categories[2].subcategories[8].name = i18next.t(`form:category.categories.2.subcategories.8`)
				categoriesFull.categories[2].subcategories[9].name = i18next.t(`form:category.categories.2.subcategories.9`)
				categoriesFull.categories[2].subcategories[10].name = i18next.t(`form:category.categories.2.subcategories.10`)
				categoriesFull.categories[2].subcategories[11].name = i18next.t(`form:category.categories.2.subcategories.11`)
				categoriesFull.categories[2].subcategories[12].name = i18next.t(`form:category.categories.2.subcategories.12`)
				categoriesFull.categories[2].subcategories[13].name = i18next.t(`form:category.categories.2.subcategories.13`)

				categoriesFull.categories[3].name = i18next.t(`form:category.categories.3.name`)
				categoriesFull.categories[3].subcategories[0].name = i18next.t(`form:category.categories.3.subcategories.0`)
				categoriesFull.categories[3].subcategories[1].name = i18next.t(`form:category.categories.3.subcategories.1`)
				categoriesFull.categories[3].subcategories[2].name = i18next.t(`form:category.categories.3.subcategories.2`)
				categoriesFull.categories[3].subcategories[3].name = i18next.t(`form:category.categories.3.subcategories.3`)
				categoriesFull.categories[3].subcategories[4].name = i18next.t(`form:category.categories.3.subcategories.4`)
				categoriesFull.categories[3].subcategories[5].name = i18next.t(`form:category.categories.3.subcategories.5`)

				categoriesFull.categories[4].name = i18next.t(`form:category.categories.4.name`)
				categoriesFull.categories[4].subcategories[0].name = i18next.t(`form:category.categories.4.subcategories.0`)
				categoriesFull.categories[4].subcategories[1].name = i18next.t(`form:category.categories.4.subcategories.1`)
				categoriesFull.categories[4].subcategories[2].name = i18next.t(`form:category.categories.4.subcategories.2`)
				categoriesFull.categories[4].subcategories[3].name = i18next.t(`form:category.categories.4.subcategories.3`)
				categoriesFull.categories[4].subcategories[4].name = i18next.t(`form:category.categories.4.subcategories.4`)
				categoriesFull.categories[4].subcategories[5].name = i18next.t(`form:category.categories.4.subcategories.5`)
				categoriesFull.categories[4].subcategories[6].name = i18next.t(`form:category.categories.4.subcategories.6`)

				categoriesFull.categories[5].name = i18next.t(`form:category.categories.5.name`)
				categoriesFull.categories[5].subcategories[0].name = i18next.t(`form:category.categories.5.subcategories.0`)
				categoriesFull.categories[5].subcategories[1].name = i18next.t(`form:category.categories.5.subcategories.1`)
				categoriesFull.categories[5].subcategories[2].name = i18next.t(`form:category.categories.5.subcategories.2`)
				categoriesFull.categories[5].subcategories[3].name = i18next.t(`form:category.categories.5.subcategories.3`)
				categoriesFull.categories[5].subcategories[4].name = i18next.t(`form:category.categories.5.subcategories.4`)
				categoriesFull.categories[5].subcategories[5].name = i18next.t(`form:category.categories.5.subcategories.5`)
				categoriesFull.categories[5].subcategories[6].name = i18next.t(`form:category.categories.5.subcategories.6`)

				categoriesFull.categories[6].name = i18next.t(`form:category.categories.6.name`)
				categoriesFull.categories[6].subcategories[0].name = i18next.t(`form:category.categories.6.subcategories.0`)
				categoriesFull.categories[6].subcategories[1].name = i18next.t(`form:category.categories.6.subcategories.1`)
				categoriesFull.categories[6].subcategories[2].name = i18next.t(`form:category.categories.6.subcategories.2`)
				categoriesFull.categories[6].subcategories[3].name = i18next.t(`form:category.categories.6.subcategories.3`)
				categoriesFull.categories[6].subcategories[4].name = i18next.t(`form:category.categories.6.subcategories.4`)
				categoriesFull.categories[6].subcategories[5].name = i18next.t(`form:category.categories.6.subcategories.5`)

				categoriesFull.categories[7].name = i18next.t(`form:category.categories.7.name`)
				categoriesFull.categories[7].subcategories[0].name = i18next.t(`form:category.categories.7.subcategories.0`)
				categoriesFull.categories[7].subcategories[1].name = i18next.t(`form:category.categories.7.subcategories.1`)
				categoriesFull.categories[7].subcategories[2].name = i18next.t(`form:category.categories.7.subcategories.2`)
				categoriesFull.categories[7].subcategories[3].name = i18next.t(`form:category.categories.7.subcategories.3`)

				categoriesFull.categories[8].name = i18next.t(`form:category.categories.8.name`)
				categoriesFull.categories[8].subcategories[0].name = i18next.t(`form:category.categories.8.subcategories.0`)
				categoriesFull.categories[8].subcategories[1].name = i18next.t(`form:category.categories.8.subcategories.1`)
				categoriesFull.categories[8].subcategories[2].name = i18next.t(`form:category.categories.8.subcategories.2`)
				categoriesFull.categories[8].subcategories[3].name = i18next.t(`form:category.categories.8.subcategories.3`)

				categoriesFull.categories[9].name = i18next.t(`form:category.categories.9.name`)
				categoriesFull.categories[9].subcategories[0].name = i18next.t(`form:category.categories.9.subcategories.0`)
				categoriesFull.categories[9].subcategories[1].name = i18next.t(`form:category.categories.9.subcategories.1`)
				categoriesFull.categories[9].subcategories[2].name = i18next.t(`form:category.categories.9.subcategories.2`)
				categoriesFull.categories[9].subcategories[3].name = i18next.t(`form:category.categories.9.subcategories.3`)
				categoriesFull.categories[9].subcategories[4].name = i18next.t(`form:category.categories.9.subcategories.4`)

				categoriesFull.categories[10].name = i18next.t(`form:category.categories.10.name`)
				categoriesFull.categories[10].subcategories[0].name = i18next.t(`form:category.categories.10.subcategories.0`)
				categoriesFull.categories[10].subcategories[1].name = i18next.t(`form:category.categories.10.subcategories.1`)
				categoriesFull.categories[10].subcategories[2].name = i18next.t(`form:category.categories.10.subcategories.2`)
				categoriesFull.categories[10].subcategories[3].name = i18next.t(`form:category.categories.10.subcategories.3`)
				categoriesFull.categories[10].subcategories[4].name = i18next.t(`form:category.categories.10.subcategories.4`)

			}
	}

		async function sendForm(e) {
			// console.log('success');
			e.preventDefault();
			buttonIsDisabled = true
			formMessage = ''
			let formData = getFormData();
			let transformedData = transformFormData(formData);
			// console.log(formData)
			// console.log(transformedData)

			try {
				const response = await fetch(PUBLIC_URL + formData.category.name.toUpperCase(),
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(transformedData)
					}
				);

				if (response.ok) {
					formMessageIsError = false
					formMessage = i18next.t(`form:message`, { context: 'successful' });
					activeFormIndex = 4
					controlsButton = false
				} else {
					formMessageIsError = true
					formMessage = i18next.t(`form:button.message`, { context: 'error_server' }) + response.status
					buttonIsDisabled = false
				}
			} catch (error) {
				formMessageIsError = true
				formMessage = i18next.t(`form:button.message`, { context: 'error' }) + error
				buttonIsDisabled = false
			}

		function getFormData() {
				const contents = getDataFromContents('formContacts');
				const workLike = getWorkLike('workUs');
				const networkLinks = getLinkForNetwork('formNetwork');
				const workDays = getWorkMode('formWorkMode');
				const calendar = getCalendarLink('formLinkCalendar')
				const languages = getCommunicationLanguages('communicationLanguages');
				const survey = getPollResponse('formSurvey');
				const confirmation = window.formConfirmation.checked;
				const category = getCategory('formCategories')

				return {
					contents,
					workLike,
					networkLinks,
					workDays,
					calendar,
					languages,
					survey,
					confirmation,
					category
				};
				function getCalendarLink(id) {
					const container = document.querySelector(`#${id}`);
					const input = container.querySelector('input')
					return input.value
				}

				function getDataFromContents(id) {
					const container = document.querySelector(`#${id}`);
					const inputs = container.querySelectorAll('input');
					const description = container.querySelector('textarea')

					return {
						name: inputs[0].value,
						description: description.value,
						address: `${inputs[1].value} ${inputs[2].value}`,
						tell: inputs[3].value,
						mail: inputs[4].value
					};
				}

				function getWorkLike(id) {
					const container = document.querySelector(`#${id}`);
					const radios = container.querySelectorAll('input[type="radio"]');
					const inputs = container.querySelectorAll('input[data-target]');

					return radios[0].checked ? inputs[0].value
						: radios[1].checked ? inputs[1].value : null
				}

				function getLinkForNetwork(id) {
					const container = document.querySelector(`#${id}`);
					const inputs = container.querySelectorAll('input');

					return {
						instagram: inputs[0].checked ? inputs[1].value : '',
						facebook: inputs[2].checked ? inputs[3].value : '',
						telegram: inputs[4].checked ? inputs[5].value : '',
						tiktok: inputs[6].checked ? inputs[7].value : '',
						linkedin: inputs[8].checked ? inputs[9].value : ''
					};
				}

				function getWorkMode(id) {
					const container = document.querySelector(`#${id}`);
					const items = container.querySelectorAll('.work-mode__item');

					const getTime = (num) => {
						const item = items[num]
						let times = item.querySelectorAll('input.work-mode__time-input')
						return `${times[0].value || '-'}:${times[1].value || '-'} - ${times[2].value || '-'}:${times[3].value || '-'}`
					}

					return {
						Monday: getTime(0),
						Tuesday: getTime(1),
						Wednesday: getTime(2),
						Thursday: getTime(3),
						Friday: getTime(4),
						Saturday: getTime(5),
						Sunday: getTime(6)
					};
				}

				function getCommunicationLanguages(id) {
					const container = document.querySelector(`#${id}`);
					const inputs = container.querySelectorAll('input');
					const getData = (id) => inputs[id].checked ? inputs[id]
									.closest('.languages__item')
									.querySelector('.languages__item-text').textContent : '';

					return {
						polski: getData(0),
						belarusian: getData(1),
						ukrainian: getData(2),
						russian: getData(3),
						english: getData(4),
						another: inputs[5].checked
							? inputs[5]
									.closest('.languages__item-another')
									.querySelector('input[type="text"]').value
							: ''
					};
				}

				function getPollResponse(id) {
					const container = document.querySelector(`#${id}`);
					const inputs = container.querySelectorAll('input');

					return {
						ecofriendly: inputs[0].checked,
						petfriendly: inputs[1].checked,
						childefriendly: inputs[2].checked,
						inclusive: inputs[3].checked
					};
				}

				function getCategory(id) {
					const container = document.querySelector(`#${id}`);
					let category = container.querySelector('#categorySelect').dataset.selectValue
					let subcategories = container.querySelector('#subcategorySelect').dataset.subcategoriesSelect
					
					return {
						name: category,
						subcategories: subcategories.split(',')}
				}
			}
		}

		function transformFormData(formData) {
			const transformedData = {
				name: formData.contents.name,
				email: formData.contents.mail,
				address: formData.contents.address,
				phones: [formData.contents.tell],
				images: [],
				description: formData.contents.description,
				schedule: formData.workDays,
				services: '',
				subscription: 'None',
				googleSchedule: formData.calendar,
				affiliation: formData.workLike,
				socialMediaLinks: [formData.networkLinks],
				specialTags: [],
				languages: [],
				subcategories: [...formData.category.subcategories]
			};

			for (const key in formData.survey) {
				if (formData.survey.hasOwnProperty(key) && formData.survey[key]) {
					transformedData.specialTags.push(key);
				}
			}

			for (const key in formData.languages) {
				if (formData.languages.hasOwnProperty(key) && formData.languages[key]) {
					transformedData.languages.push(key);
				}
			}

			return [transformedData];
		}

	function nextStep(e) {
		e.preventDefault()
		activeFormIndex += 1
	}

	function validateFormStep4(e) {
		e.preventDefault()
		const section = window.agreement
		const checkbox = section.querySelector('input[type="checkbox"]')
		agreementCheckboxValidate = checkbox.checked

		console.log('step 4 completed')
		if(checkbox.checked) sendForm(e)
	}

	function validateFormStep2 (e) {
		e.preventDefault()
		const category = ValidateCategories()
		const radio = ValidateWorkUs()

		if(category && radio) nextStep(e)

		function ValidateCategories() {
			const categorySelect = window.categorySelect.dataset.selectValue
			const subcategorySelect = window.subcategorySelect.dataset.subcategoriesSelect
			categoryValidate = categorySelect
			if(categoryValidate) subcategoryValidate = !!subcategorySelect
			return !!categoryValidate && !!subcategoryValidate
		}

		function ValidateWorkUs() {
			const section = window.workUs 
			const radios = section.querySelectorAll('.workUs__item-radio')
			let radioIsChecked = false
			radios.forEach(radio => radioIsChecked = radio.checked ? true : radioIsChecked)
			workUsRadiosValidate = radioIsChecked
			return workUsRadiosValidate
		}
	}

	function showForm() {
		window.home.style.display = 'none'
		window.myForm.style.display = 'block'
		activeFormIndex = 0
	}
</script>

<Header {langs} active={selectLangId} on:selectLang={(e) => i18next.changeLanguage(e.detail.value)}/>
<main class="main">
	<input type="checkbox" id="showForm" on:input={showForm}/>
	<Home data={homeData}/>
	<div class="form" name="myForm" id="myForm">
		<div class="form__inner"
			style:max-width='{
			activeFormIndex == 0 ? 1071
			: activeFormIndex == 1 ? 800
			: activeFormIndex == 2 ? 1150 
			: activeFormIndex == 3 ? 800 : 1400}px'
			style='display: {activeFormIndex != 4 ? 'flex' : 'none'}'
			>
			<div class='form__inner-image' id="formImage" style='display: {activeFormIndex ? 'none' : 'block'}'>
				<img src='/img/image.webp' alt=''>
			</div>
			<div class='form__content'>
				<div class="form__header">
					<h2 class="form__header-title">{formTitle}</h2>
					<ProgressBar active={activeFormIndex} {stepLength}/>
					<button type="button"
						class='form__btn-back button-second'
						style='display: {activeFormIndex ? 'block' : 'none'}'
						on:click={() => activeFormIndex -= 1}>
						<div class='form__btn-back-icon'>
							{@html arrow}
						</div>
					</button>
				</div>

				<form class='form-stage' id="formStep1" style='display: {activeFormIndex == 0 ? 'flex' : 'none'}' on:submit={nextStep}>
					<Contacts data={contactsData}/>
					<FormControls {buttonsControls}/>
				</form>

				<form class='form-stage' id="formStep2" style='display: {activeFormIndex == 1 ? 'flex' : 'none'}' on:submit={validateFormStep2}>
					<div class='form-stage__inner'>
						<Categories data={categoriesFull} {categoryValidate} {subcategoryValidate}/>
						<WorkUs data={workUsData} radioValidate={workUsRadiosValidate}/>
						<Network data={networkData}/>
					</div>
					<FormControls {buttonsControls}/>
				</form>

				<form class='form-stage' id='formStep3' style='display: {activeFormIndex == 2 ? 'flex' : 'none'}' on:submit={nextStep}>
					<div class='form-stage__inner'>
						<WorkMode data={workModeDate}/>
					</div>
					<FormControls {buttonsControls}/>
				</form>

				<form class='form-stage' id='formStep4' style='display: {activeFormIndex == 3 ? 'flex' : 'none'}' on:submit={validateFormStep4}>
					<div class='form-stage__inner'>
						<Calendar data={calendarData}/>
						<Languages data={languagesData}/>
						<Preferences data={preferencesData}/>
						<Agreement data={agreementData} valid={agreementCheckboxValidate}/>
					</div>

					<div class='form__bottom'>
						<button class="button form__bottom-btn" type="submit" id="buttonSend" class:form__bottom-btn--disabled={buttonIsDisabled}>Registration</button>
						<p class='form__bottom-message' class:form__bottom-message-error={formMessageIsError}>{formMessage}</p>
					</div>
				</form>
			</div>
		</div>
		<Successful {activeFormIndex} message={formMessage}/>
	</div>
</main>

<style lang="scss">
	.successful

	.message-send {
		display: none;
		&__inner {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 30px;
		}
		&__text {
			font-size: 20px;
			color: #24c924;
		}
		&__image {
			max-width: 300px;
			max-height: 300px;
			img {
				object-fit: cover;
			}
		}
	}
	.form-stage {
		display: none;
		flex-direction: column;
		gap: 20px;

		&:nth-of-type(1) {
			display: flex;
		}

		&__inner {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
	}

	.main {
		flex: content;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	#showForm {
		display: none;
	}

	.form {
		display: none;
		justify-content: center;
		&__inner {
			display: flex;
			justify-content: center;
			gap: 34px;
			width: 100%;
			padding: 24px;
			border-radius: 40px;
			margin: 0 auto;
			background-color: var(--color-bg-fourth);
		}
		&__content {
			width: 100%;
		}
		&__header {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-bottom: 32px;
		}
		&__btn-back {
			position: absolute;
			left: 0;
			top: 0;
			padding: 10px;
			border-radius: 50%;
		}
		&__btn-back-icon {
			color: inherit;
			max-width: 20px;
			max-height: 20px;
		}
		&__header-title {
			font-weight: 400;
			margin-bottom: 12px;
			color: var(--color-text-primary);
			@media (min-width: 768px) {
                font-size: 32px;
				line-height: 40px;
            }
            @media (max-width: 768px) {
				font-size: 24px;
				line-height: 30px;
            }
		}
		&__message {
			text-align: center;
			font-size: 18px;
			color: #1db11d;
		}
		&__inner-image {
			flex: 100%;
			border-radius: 40px;
			overflow: hidden;
			max-width: 471px;
			@media (min-width: 950px) {
                max-width: 471px;
            }
            @media (max-width: 950px) {
                display: none !important;
            }

			img {
				object-fit: cover;
			}
		}
		&__bottom {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 15px;
		}
		&__bottom-btn {
			font-size: 20px;
			line-height: 25px;
			padding: 8px 24px;

			&--disabled {
				opacity: 0.5;
				pointer-events: none;
			}
		}
		&__bottom-message {

		}
		&__bottom-message-error {

		}
	}
</style>
