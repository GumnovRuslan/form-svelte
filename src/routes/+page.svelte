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
	import Header from '../lib/components/Header.svelte';
	import ProgressBar from '../lib/components/ProgressBar.svelte';
	import Contacts from '../lib/components/Contacts.svelte';
	import { arrow } from '../lib/icons';
	import Home from '../lib/components/Home.svelte';
	import WorkUs from '../lib/components/WorkUs.svelte';
	import Network from '../lib/components/Network.svelte';

	const langs = ["ru", "en", "pl", "by", "ua"]
	let selectLangId
	i18next.on('languageChanged', changeContent);


	let stepLength = 4
	let activeFormIndex
	let formMessage = ''
	let formMessageIsError = false
	let buttonIsDisabled = false
	let controlsButton = true
	let timesData = {
					title: i18next.t('form:workMode.title'),
					days: [
						i18next.t(`form:workMode.day`, { context: 'monday' }),
						i18next.t(`form:workMode.day`, { context: 'tuesday' }),
						i18next.t(`form:workMode.day`, { context: 'wednesday' }),
						i18next.t(`form:workMode.day`, { context: 'thursday' }),
						i18next.t(`form:workMode.day`, { context: 'friday' }),
						i18next.t(`form:workMode.day`, { context: 'saturday' }),
						i18next.t(`form:workMode.day`, { context: 'sunday' }),
					],
					timeText: [
						i18next.t(`form:workMode.time`, { context: 'open' }),
						i18next.t(`form:workMode.time`, { context: 'close' })
					]
				}

	let buttonsControls = {
		prev: 'prev',
		next: 'next'
	}

	onMount(() => {
		stepLength = document.querySelectorAll('.form-stage').length
		const form = window.myForm;

		langInit();
		workSectionNetwork();
		workSectionCommunication();

		function workSectionNetwork() {
			let networkContainer = form.querySelector('#formNetwork');
			let networkItems = networkContainer.querySelectorAll('.form__network-item-checkbox');
			networkItems.forEach((item) =>
				item.addEventListener('input', (e) => {
					const checkbox = e.target;
					const item = checkbox.closest('.form__network-item');
					const input = item.querySelector('.form__network-item-input');
					input.disabled = !checkbox.checked;
				})
			);
		}

		function workSectionCommunication() {
			const checkboxLangAnother = window.communicationLanguages.querySelector(
				'.form__languages-item-another-checkbox'
			);
			checkboxLangAnother.addEventListener('input', (e) => {
				const checkbox = e.target;
				const item = checkbox.closest('.form__languages-another');
				const input = item.querySelector('.form__input');
				input.disabled = !checkbox.checked;
			});
		}


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
			// let messageTitle = document.getElementById('title')
			// let messageDescription = document.getElementById('description')
			// const titleVariation = [
			// 	i18next.t('message:title'),
			// 	i18next.t('message:title', {context: 'alternative'}),
			// ]
			// const descriptionVariation = [
			// 	i18next.t('message:description'),
			// 	'',
			// ]

			// messageTitle.textContent = titleVariation[messageTitle.dataset.variation ?? 0]
			// messageDescription.textContent = descriptionVariation[messageDescription.dataset.variation ?? 0]

			document.getElementById('message-button').textContent = i18next.t('message:button');
			document.querySelector('.form__header-title').textContent = i18next.t('form:title');
			contacts();
			// workLike();
			// network();
			workMode();
			calendar();
			communication();
			preference();
			formConfirmation();
			categories()
			document.getElementById('buttonSend').textContent = i18next.t('form:button.text');
			buttonsControls = {
				prev: i18next.t('form:button.button', {context: 'prev'}),
				next: i18next.t('form:button.button', {context: 'next'}),
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
			function workLike() {
				const container = document.getElementById('workLike');
				let items = container.querySelectorAll('.form__work-like-label');
				let inputs = container.querySelectorAll('.form__work-like-input');

				container.querySelector('.form__work-like-text').textContent = i18next.t('form:work.title');

				items[0].textContent = i18next.t(`form:work.text`, { context: 'physical' });
				items[1].textContent = i18next.t(`form:work.text`, { context: 'company' });

				inputs[0].placeholder = i18next.t(`form:work.input`, { context: 'physical' });
				inputs[1].placeholder = i18next.t(`form:work.input`, { context: 'company' });
			}
			function network() {
				const container = document.getElementById('formNetwork');
				let items = container.querySelectorAll('.form__network-item-text');
				let inputs = container.querySelectorAll('.form__network-item-input');

				container.querySelector('.form__network-text').textContent =
					i18next.t('form:network.title');

				items[0].textContent = i18next.t(`form:network.text`, { context: 'instagram' });
				items[1].textContent = i18next.t(`form:network.text`, { context: 'facebook' });
				items[2].textContent = i18next.t(`form:network.text`, { context: 'telegram' });
				items[3].textContent = i18next.t(`form:network.text`, { context: 'tiktok' });
				items[4].textContent = i18next.t(`form:network.text`, { context: 'linkedin' });

				inputs[0].placeholder = i18next.t(`form:network.placeholder`, { context: 'instagram' });
				inputs[1].placeholder = i18next.t(`form:network.placeholder`, { context: 'facebook' });
				inputs[2].placeholder = i18next.t(`form:network.placeholder`, { context: 'telegram' });
				inputs[3].placeholder = i18next.t(`form:network.placeholder`, { context: 'tiktok' });
				inputs[4].placeholder = i18next.t(`form:network.placeholder`, { context: 'linkedin' });
			}
			function workMode() {
				timesData = {
					title: i18next.t('form:workMode.title'),
					days: [
						i18next.t(`form:workMode.day`, { context: 'monday' }),
						i18next.t(`form:workMode.day`, { context: 'tuesday' }),
						i18next.t(`form:workMode.day`, { context: 'wednesday' }),
						i18next.t(`form:workMode.day`, { context: 'thursday' }),
						i18next.t(`form:workMode.day`, { context: 'friday' }),
						i18next.t(`form:workMode.day`, { context: 'saturday' }),
						i18next.t(`form:workMode.day`, { context: 'sunday' }),
					],
					timeText: [
						i18next.t(`form:workMode.time`, { context: 'open' }),
						i18next.t(`form:workMode.time`, { context: 'close' })
					]
				}
			}
			function calendar() {
				const container = document.getElementById('formLinkCalendar');
				let text = container.querySelector('.form__calendar-text');
				let input = container.querySelector('.form__calendar-input');

				text.textContent = i18next.t(`form:calendar.text`);
				input.placeholder = i18next.t(`form:calendar.placeholder`);
			}
			function communication() {
				const container = document.getElementById('communicationLanguages');

				container.querySelector('.form__languages-text').textContent =
					i18next.t(`form:communication.title`);

				container.querySelector('.form__languages-item-another-text').textContent = i18next.t(
					`form:communication.another`,
					{ context: 'text' }
				);

				container.querySelector('.form__languages-item-another-input').placeholder = i18next.t(
					`form:communication.another`,
					{ context: 'placeholder' }
				);
			}
			function preference() {
				const container = document.getElementById('formSurvey');
				const texts = container.querySelectorAll('.form__preferences-text');
				const companies = container.querySelectorAll('.form__preferences-item-text');

				texts[0].textContent = i18next.t(`form:preference.text`);
				texts[1].textContent = i18next.t(`form:preference.text`, { context: 'description' });

				companies.forEach(
					(company, i) => (company.textContent = i18next.t(`form:preference.companies.${i}`))
				);
			}
			function formConfirmation() {
				const container = document.getElementById('formConfirmation');
				const texts = container.querySelectorAll('.form__confirmation-text');

				texts[0].textContent = i18next.t(`form:confirmation.text`);
				texts[1].textContent = i18next.t(`form:confirmation.text`, { context: 'description' });
			}
			function categories() {
				categoriesFull.title = i18next.t(`form:category.title`)
				categoriesFull.subcategory_default = i18next.t(`form:category.default`)

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
					formMessage = i18next.t(`form:button.message`, { context: 'completed' });
					// console.log('Данные успешно отправлены на сервер');
					window.formStep4.querySelector('.form-stage__inner').style.display = 'none'
					window.formStep4.querySelector('.form__button-container').style.display = 'none'
					window.formCompleted.style.display = 'block'
					controlsButton = false
				} else {
					formMessageIsError = true
					formMessage = i18next.t(`form:button.message`, { context: 'error_server' }) + response.status
					// console.error('Ошибка при отправке данных на сервер:', response.status);
					buttonIsDisabled = false
				}
			} catch (error) {
				formMessageIsError = true
				formMessage = i18next.t(`form:button.message`, { context: 'error' }) + error
				// console.error('Произошла ошибка:', error);
				buttonIsDisabled = false
			}

		function getFormData() {
				const contents = getDataFromContents('formContacts');
				const workLike = getWorkLike('workLike');
				const networkLinks = getLinkForNetwork('formNetwork');
				const workDays = getWorkMode('formWorkMode');
				const calendar = window.inputLinkCalendar.value;
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
					const inputs = container.querySelectorAll('input');

					return inputs[0].checked
					? inputs[1].value
						: inputs[2].checked
					? inputs[3].value
						: null


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
					const inputs = container.querySelectorAll('input');
					const getData = (id) =>
						inputs[id].checked ? [inputs[id + 1].value, inputs[id + 2].value] : '';

					return {
						monday: getData(1),
						Tuesday: getData(4),
						Wednesday: getData(7),
						Thursday: getData(10),
						Friday: getData(13),
						Saturday: getData(16),
						Sunday: getData(19)
					};
				}

				function getCommunicationLanguages(id) {
					const container = document.querySelector(`#${id}`);
					const inputs = container.querySelectorAll('input');
					const getData = (id) =>
						inputs[id].checked
							? inputs[id]
									.closest('.form__languages-item')
									.querySelector('.form__languages-item-text').textContent
							: '';

					return {
						polski: getData(0),
						belarusian: getData(1),
						ukrainian: getData(2),
						russian: getData(3),
						english: getData(4),
						another: inputs[5].checked
							? inputs[5]
									.closest('.form__languages-another')
									.querySelector('.form__languages-item-another-input').value
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
					const categories = container.querySelectorAll('input[type="radio"][name="category"]')
					let categoryChecked
					categories.forEach(category => {if(category.checked) categoryChecked = category})
					return {
						name: categoryChecked.dataset.name,
						subcategories: categoryChecked.dataset.select.split(',')}
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

	function prevStep(e) {
		activeFormIndex -= 1
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
	<Home />
	<div class="form" name="myForm" id="myForm">
		<div class="form__inner"
			style:max-width='{activeFormIndex == 0
			? 1071
			: activeFormIndex == 1
			? 800
			: 1400}px'>
			<div class='form__inner-image' id="formImage" style='display: {activeFormIndex ? 'none' : 'block'}'>
						<img src='/img/image.webp' alt=''>
			</div>
			<div class='form__content'>
				<div class="form__header">
							<h2 class="form__header-title">Регистрация</h2>
							<ProgressBar active={activeFormIndex} {stepLength}/>
							<button type="button"
								class='form__btn-back button-second'
								style='display: {activeFormIndex ? 'block' : 'none'}'
								on:click={() => activeFormIndex -= 1}
							>
								<div class='form__btn-back-icon'>
									{@html arrow}
								</div>
							</button>
				</div>

				<form class='form-stage' id="formStep1" style='display: {activeFormIndex == 0 ? 'flex' : 'none'}' on:submit={nextStep}>
					<Contacts data={contactsData}/>
					<FormControls {buttonsControls}/>
				</form>

				<form class='form-stage' id="formStep2" style='display: {activeFormIndex == 1 ? 'flex' : 'none'}' on:submit={nextStep}>
					<div class='form-stage__inner'>
						<Categories categories={categoriesFull}/>
						<WorkUs />
						<Network data={networkData}/>
					</div>
					<FormControls {buttonsControls}/>
				</form>

				<form class='form-stage' id='formStep3' style='display: {activeFormIndex == 2 ? 'flex' : 'none'}' on:submit={nextStep}>
					<WorkMode data={workModeDate}/>
					<FormControls {buttonsControls}/>
				</form>

							<form class='form-stage' id='formStep4' style='display: {activeFormIndex == 3 ? 'flex' : 'none'}' on:submit={sendForm}>
								<div class='form-stage__inner'>
									<div class="form__calendar" id="formLinkCalendar">
										<p class="form__calendar-text section-name">Link to Google calendar</p>
										<input
											id="inputLinkCalendar"
											type="url"
											class="form__calendar-input form__input"
											placeholder="link to Google calendar"
											on:input={(e) => e.target.required = !!e.target.value}
										/>
									</div>
									<div class="form__languages-container" id="communicationLanguages">
										<p class="form__languages-text section-name">Языки комуникациии</p>
										<div class="form__languages-items">
											<label class="form__languages-item">
												<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
												<span class="form__languages-item-text form__text">Polski</span>
											</label>

											<label class="form__languages-item">
												<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
												<span class="form__languages-item-text form__text">Беларуская</span>
											</label>

											<label class="form__languages-item">
												<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
												<span class="form__languages-item-text form__text">Українська</span>
											</label>

											<label class="form__languages-item">
												<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
												<span class="form__languages-item-text form__text">Русский</span>
											</label>

											<label class="form__languages-item">
												<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
												<span class="form__languages-item-text form__text">English</span>
											</label>

											<div class="form__languages-another">
												<label class="form__languages-item-another">
													<input
														type="checkbox"
														class="form__languages-item-another-checkbox form__languages-item-checkbox custom-checkbox"
													/>
													<span
														class="form__languages-item-text form__text form__languages-item-another-text"
														>Another</span
													>
												</label>
												<input
													class="form__languages-item-another-input form__input"
													type="text"
													disabled
													placeholder="Enter other languages"
												/>
											</div>
										</div>

									</div>
									<div class="form__preferences" id="formSurvey">
										<div class="form__preferences-header">
											<p class="form__preferences-text form__text">
												Select which category matches your company
											</p>
											<p class="form__preferences-text form__text"></p>
										</div>

										<div class="form__preferences-items">
											<label class="form__preferences-item">
												<input
													class="form__preferences-item-checkbox custom-checkbox"
													type="checkbox"
													name="preferences"
													value="ecofriendly"
												/>
												<span class="form__preferences-item-text form__text">ecofriendly</span>
											</label>

											<label class="form__preferences-item">
												<input
													class="form__preferences-item-checkbox custom-checkbox"
													type="checkbox"
													name="preferences"
													value="ecofriendly"
												/>
												<span class="form__preferences-item-text form__text">petfriendly</span>
											</label>

											<label class="form__preferences-item">
												<input
													class="form__preferences-item-checkbox custom-checkbox"
													type="checkbox"
													name="preferences"
													value="ecofriendly"
												/>
												<span class="form__preferences-item-text form__text">childefriendly</span>
											</label>

											<label class="form__preferences-item">
												<input
													class="form__preferences-item-checkbox custom-checkbox"
													type="checkbox"
													name="preferences"
													value="ecofriendly"
												/>
												<span class="form__preferences-item-text form__text">inclusive</span>
											</label>
										</div>
									</div>
									<label class="form__confirmation" id="formConfirmation">
										<input
											class="form__confirmation-checkbox custom-checkbox"
											type="checkbox"
											required
										/>
										<div class="form__confirmation-text-container">
											<span class="form__confirmation-text">
												I agree to the publication of the provided data on YOOHIVE.COM resources
											</span>
											<span class="form__required">*</span>
											<p class="form__confirmation-text"></p>
										</div>
									</label>
								</div>
								<div class='message-send' id='formCompleted'>
									<div class='message-send__inner'>
										<div class='message-send__image'>
											<img src='/img/mark.webp' alt=''>
										</div>
										<p class='message-send__text'>{formMessage}</p>
									</div>
								</div>
								<div class='form__button-container'>
									<button class="button" type="submit" id="buttonSend" class:button__disabled={buttonIsDisabled}>Registration</button>
									<p class='form__message' class:message-error={formMessageIsError}>{formMessage}</p>
								</div>
								<FormControls next={false} {buttonsControls}/>
							</form>
					</div>

				</div>
			</div>
</main>

<style lang="scss">

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
			background: var(--color-bg-fourth);
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
			flex: 1 0 auto;
			max-width: 471px;
			@media (min-width: 1280px) {
                max-width: 471px;
            }
            @media (max-width: 1280px) {
                display: none !important;
            }

			img {
				object-fit: cover;
			}
		}
	}

	.form__button-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 15px;
	}

	/* calendar */

	.form__calendar {
	}

	.form__calendar-text {
		font-size: 20px;
		margin-bottom: 8px;
		color: var(--color-text-primary);
	}

	/* languages */

	.form__languages-text {
		font-size: 20px;
		margin-bottom: 20px;
		color: var(--color-text-primary);
	}

	.form__languages-items {
		display: grid;
		gap: 15px;
		margin-bottom: 15px;
		@media (min-width: 600px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 600px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.form__languages-item {
		width: 50%;
		display: flex;
		align-items: start;
		cursor: pointer;
	}

	.form__languages-item-checkbox {
		margin: 0 15px 0 0;
	}

	.form__languages-item-text {
		color: var(--color-text-primary);
	}

	.form__languages-another {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.form__languages-item-another {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	/* preferences */

	.form__preferences {
	}

	.form__preferences-header {
		margin-bottom: 20px;
	}
	.form__preferences-text {
		font-size: 18px;
		color: var(--color-text-primary);
	}

	.form__preferences-items {
		display: grid;
		gap: 10px;
		@media (min-width: 400px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 400px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.form__preferences-item {
		width: 50%;
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
	}

	.form__preferences-item-text {
		font-size: 20px;
		color: var(--color-text-primary);
	}
	/* confirmation */

	.form__confirmation {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
	}

	.form__confirmation-text {
		color: var(--color-text-primary);
	}
</style>
