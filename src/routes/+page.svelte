<script>
	import i18next from 'i18next';
	import ru from '$lib/locales/ru.js';
	import en from '$lib/locales/en.js';
	import pl from '$lib/locales/pl.js';
	import ua from '$lib/locales/ua.js';
	import by from '$lib/locales/by.js';
	import { onMount } from 'svelte';
	import WorkMoreItem from '$lib/components/WorkMoreItem.svelte'
	import Categories from '$lib/components/Categories.svelte';
	import FormControls from '../lib/components/FormControls.svelte';
	import { PUBLIC_URL } from '$env/static/public'
	import categoriesFull from '../lib/db/categories'

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
		i18next.on('languageChanged', changeContent);
		const form = window.myForm;
		const formCheckbox = window.showForm;
		const switchLanguages = window.formLanguages;

		workPageLanguage();
		formShow();
		workSectionNetwork();
		workSectionCommunication();
		workSectionWorkLike();

		function formShow() {
			formCheckbox.addEventListener('input', (e) => {
				const formHeight = form.scrollHeight;
				const message = document.querySelector('.message')
				if (e.target.checked) {
					form.style.height = `${formHeight}px`;
					setTimeout(() => form.style.height = 'max-content', 500);
					message.style.paddingTop = '10px'
					message.style.paddingBottom = '10px'
					document.getElementById('messageInner').style.display = 'none'
				}
			});
		}

		function workSectionWorkLike() {
			const radios = workLike.querySelectorAll('input[type="radio"]');
			const inputs = workLike.querySelectorAll('input[type="number"]');

			radios.forEach((radio, i) =>
				radio.addEventListener('input', (e) => {
					if (radio.checked) {
						inputs[i].setAttribute('required', true);
						inputs[i].removeAttribute('disabled');

						if (radio == radios[0]) {
							inputs[1].removeAttribute('required');
							inputs[1].classList.remove('invalid-input');
							inputs[1].setAttribute('disabled', true);
						} else {
							inputs[0].removeAttribute('required');
							inputs[0].classList.remove('invalid-input');
							inputs[0].setAttribute('disabled', true);
						}
					}
				})
			);
		}

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

		function workPageLanguage() {
			const language = startPageLanguage();
			switchLanguages.addEventListener('input', changeSelectLanguages);

			i18next.init({
				lng: language,
				resources: {
					en: en,
					ru: ru,
					pl: pl,
					ua: ua,
					by: by
				}
			});

			function changeSelectLanguages(e) {
				const select = e.target;
				const language = select.options[select.selectedIndex].value;
				i18next.changeLanguage(language);
			}

			function startPageLanguage() {
				let language = getPageLanguage();
				switchLanguages.value = language;

				function getPageLanguage() {
					const browserLanguage = window.navigator.language;
					const availableLanguages = getLanguages();
					const language = availableLanguages.find((el) => el == browserLanguage) ?? 'en';

					function getLanguages() {
						const options = switchLanguages.querySelectorAll('option');
						let optionsValue = [];
						options.forEach((el) => optionsValue.push(el.value));
						return optionsValue;
					}

					return language;
				}
				return language;
			}
		}
	});

	function changeContent() {
			let messageTitle = document.getElementById('title')
			let messageDescription = document.getElementById('description')
			const titleVariation = [
				i18next.t('message:title'),
				i18next.t('message:title', {context: 'alternative'}),
			]
			const descriptionVariation = [
				i18next.t('message:description'),
				'',
			]

			messageTitle.textContent = titleVariation[messageTitle.dataset.variation ?? 0]
			messageDescription.textContent = descriptionVariation[messageDescription.dataset.variation ?? 0]

			document.getElementById('message-button').textContent = i18next.t('message:button');
			document.querySelector('.form__header-title').textContent = i18next.t('form:title');
			contacts();
			workLike();
			network();
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
				const changeTextInLine = (line_id, textName, textPlaceholder) => {
					line_id.querySelector('.form__contacts-item-text').textContent = textName
					line_id.querySelector('input').placeholder = textPlaceholder
				}
				changeTextInLine(window.contactCompany, i18next.t(`form:contacts.text`, { context: 'company' }), i18next.t(`form:contacts.text`, { context: 'company' }))
				changeTextInLine(window.contactPhone, i18next.t(`form:contacts.text`, { context: 'phone' }), i18next.t(`form:contacts.text`, { context: 'phone' }))
				changeTextInLine(window.contactEmail, i18next.t(`form:contacts.text`, { context: 'email' }), i18next.t(`form:contacts.text`, { context: 'email' }))

				let itemDescription = window.contactDescription
				itemDescription.querySelector('.form__contacts-item-text').textContent = i18next.t(`form:contacts.text`, { context: 'description' })
				itemDescription.querySelector('textarea').placeholder = i18next.t(`form:contacts.text`, { context: 'description' })

				let itemAddress = window.contactAddress
				itemAddress.querySelector('.form__contacts-item-text').textContent = i18next.t(`form:contacts.input_address.title`)
				itemAddress.querySelectorAll('input').forEach((input, i) => {
					input.placeholder = !i
					? i18next.t(`form:contacts.input_address.placeholder.0`)
					: i18next.t(`form:contacts.input_address.placeholder.1`)
				})
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

	function changeTime(obj) {
		let {value, time} = obj
		const container = window.formWorkMode
		let items = container.querySelectorAll('.item')
		const change = (item) => {
			const checkbox = item.querySelector('input.item__checkbox')
			const inputsTime = item.querySelectorAll('input[type="time"]')
			checkbox.checked = true
			inputsTime[0].value = time[0]
			inputsTime[1].value = time[1]
		}

		if(value == 'all day') items.forEach(item => change(item))
		else if(value == 'weekdays') {
			items.forEach((item, i) => {
				if(i < 5) change(item)
			})
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
				const response = await fetch(PUBLIC_URL + formData.subcategory.toUpperCase(),
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
				const subcategory = getSubcategories('formCategories')

				return {
					contents,
					workLike,
					networkLinks,
					workDays,
					calendar,
					languages,
					survey,
					confirmation,
					subcategory
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

				function getSubcategories(id) {
					const container = document.querySelector(`#${id}`);
					const categories = container.querySelectorAll('input[type="radio"][name="category"]')
					let categoryChecked
					categories.forEach(category => {
						if(category.checked) categoryChecked = category
					})
					const subcategories = categoryChecked.closest('.item').querySelector('select.item__subcategories-select')
					let subcategoryValue = subcategories.options[subcategories.options.selectedIndex].value.replace(/ /g, '')
					// console.log(subcategoryValue)
					return subcategoryValue
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
				languages: []
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
		let progress = document.querySelectorAll('.progress__bar')
		let formTarget = e.target
		let forms = document.querySelectorAll('.form-stage')
		let index = 0
        forms.forEach((form, i)=> {if(form == formTarget) index = i})
		formTarget.style.display = 'none'
		forms[index + 1].style.display = 'flex'
		progress[index + 1].classList.add('progress__bar--completed')
	}
</script>

<div class="main-background">
	<header class="header">
		<div class="header__inner">
			<div class="header__content">
				<a href="/" class="header__logo" on:click={() => location.reload()}>YOOHIVE</a>
				<div class="header__language">
					<select class="header__language-select" name="" id="formLanguages">
						<option class="header__language-option" value="ru"> ru </option>
						<option class="header__language-option" value="en"> en </option>
						<option class="header__language-option" value="pl"> pl </option>
						<option class="header__language-option" value="by"> by </option>
						<option class="header__language-option" value="ua"> ua </option>
					</select>
				</div>
			</div>
		</div>
	</header>
	<main class="page" id='page'>
		<div class="page__content">
			<div class="message">
				<input type="checkbox" id="showForm" />
				<div class="message__inner" id='messageInner'>
					<h2 id="title" class="message__title">The service is not working right now</h2>
					<p id="description" class="message__description">
						We are like bees working to start our hive ju-ju-ju. For now you can register on our
						website to get maximum effect for your business.
					</p>
					<label id="message-button" for="showForm" class="message__button button">
						Registration
					</label>
				</div>
				<div class="form" name="myForm" id="myForm" enctype="application/json">
					<div class="form__inner">
						<div class="form__header">
							<h2 class="form__header-title">Регистрация</h2>
						</div>
						<div class='progress'>
							<div class='progress__bar progress__bar--completed'></div>
							<div class='progress__bar'></div>
							<div class='progress__bar'></div>
							<div class='progress__bar'></div>
						</div>
						<div class="form__content">

							<form class='form-stage' id="formStep1" on:submit={nextStep}>
								<div class="form__contacts" id="formContacts">
									<div class="form__contacts-item" id="contactCompany">
										<div class="form__contacts-item-header input-name">
											<p class="form__contacts-item-text">Название компании/мастера</p>
											<span class="form__required">*</span>
										</div>
										<input
											type="text"
											class="form__contacts-item-input form__input"
											placeholder="Company name"
											required
										/>
									</div>

									<div class="form__contacts-item" id="contactDescription">
										<div class="form__contacts-item-header input-name">
											<p class="form__contacts-item-text">Название компании/мастера</p>
										</div>
										<textarea class="form__contacts-item-textarea form__input" name='contactDescription' maxlength="221"></textarea>
									</div>

									<div class="form__contacts-items">
										<div class="form__contacts-item" id="contactAddress">
											<div class="form__contacts-item-header">
												<p class="form__contacts-item-text input-name">Адрес</p>
												<span class="form__required">*</span>
											</div>
											<div class='form__contacts-item-main'>
												<input
													type="text"
													class="form__contacts-item-input form__input"
													placeholder="Address"
													required
												/>
												<input
													type="text"
													class="form__contacts-item-input form__input"
													placeholder="Address"
													required
												/>
											</div>
										</div>
										<div class="form__contacts-item" id="contactPhone">
											<div class="form__contacts-item-header input-name">
												<p class="form__contacts-item-text">Телефон</p>
												<span class="form__required">*</span>
											</div>
											<input
												type="tel"
												class="form__contacts-item-input form__input"
												required
											/>
										</div>
									</div>

									<div class="form__contacts-item" id="contactEmail">
										<div class="form__contacts-item-header input-name">
											<p class="form__contacts-item-text input-name">Email</p>
											<span class="form__required">*</span>
										</div>
										<input
											type="email"
											class="form__contacts-item-input form__input"
											placeholder="Email"
											required
										/>
									</div>
								</div>
								<FormControls prev={false} {buttonsControls}/>
							</form>

							<form class='form-stage' id="formStep2" on:submit={nextStep}>
								<div class='form-stage__inner'>
									<Categories categories={categoriesFull}/>
									<div class="form__work-like" id="workLike">
										<div class="form__work-like-header">
											<p class="form__work-like-text section-name">You work like:</p>
											<span class="form__required">*</span>
										</div>
										<div class="form__work-like-content">
											<div class="form__work-like-items">
												<div class="form__work-like-item">
													<input
														class="form__work-like-radio custom-radio"
														type="radio"
														name="workLike"
														id="workLikePhysical"
														required
													/>
													<label for="workLikePhysical" class="form__work-like-label">
														<span class="form__work-like-content-text form__text"> Физ. лицо </span>
													</label>
													<div class="form__work-like-input-container" id="data">
														<p class="form__work-like-input-text">PESEL</p>
														<input
															class="form__work-like-input form__input"
															type="number"
															placeholder="Enter 11 numbers"
															disabled
															min="10000000000"
															max="99999999999"
														/>
													</div>
												</div>
												<div class="form__work-like-item">
													<input
														class="form__work-like-radio custom-radio"
														type="radio"
														name="workLike"
														id="workLikeCompany"
													/>
													<label for="workLikeCompany" class="form__work-like-label">
														<span class="form__work-like-content-text form__text"> Компания </span>
													</label>
													<div class="form__work-like-input-container" id="data">
														<p class="form__work-like-input-text">NIP</p>
														<input
															class="form__work-like-input form__input"
															type="number"
															placeholder="Enter 10 numbers"
															disabled
															min="1000000000"
															max="9999999999"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="form__network" id="formNetwork">
										<p class="form__network-text section-name">Соц. сети</p>
										<div class="form__network-items" id="networkContainer">
											<div class="form__network-item">
												<label class="form__network-item-container">
													<input class="form__network-item-checkbox custom-checkbox" type="checkbox" />
													<span class="form__network-item-text form__text">Instagram</span>
												</label>
												<input
													type="text"
													class="form__network-item-input form__input"
													disabled
													placeholder="ссылка"
												/>
											</div>

											<div class="form__network-item">
												<label class="form__network-item-container">
													<input class="form__network-item-checkbox custom-checkbox" type="checkbox" />
													<span class="form__network-item-text form__text">Facebook</span>
												</label>
												<input
													type="text"
													class="form__network-item-input form__input"
													disabled
													placeholder="ссылка"
												/>
											</div>

											<div class="form__network-item">
												<label class="form__network-item-container">
													<input class="form__network-item-checkbox custom-checkbox" type="checkbox" />
													<span class="form__network-item-text form__text">Telegram</span>
												</label>
												<input
													type="text"
													class="form__network-item-input form__input"
													disabled
													placeholder="ссылка"
												/>
											</div>

											<div class="form__network-item">
												<label class="form__network-item-container">
													<input class="form__network-item-checkbox custom-checkbox" type="checkbox" />
													<span class="form__network-item-text form__text">Tiktok</span>
												</label>
												<input
													type="text"
													class="form__network-item-input form__input"
													disabled
													placeholder="ссылка"
												/>
											</div>

											<div class="form__network-item">
												<label class="form__network-item-container">
													<input class="form__network-item-checkbox custom-checkbox" type="checkbox" />
													<span class="form__network-item-text form__text">Linkedin</span>
												</label>
												<input
													type="text"
													class="form__network-item-input form__input"
													disabled
													placeholder="ссылка"
												/>
											</div>
										</div>
									</div>
								</div>
								<FormControls {buttonsControls}/>
							</form>

							<form class='form-stage' id='formStep3' on:submit={nextStep}>
								<div class="form__work-mode work-mode" id="formWorkMode">
									<div class='work-mode__header'>
										<p class='work-mode__header-name section name'>{timesData.title}</p>
									</div>
									<div class="form__work-mode-items">
										{#each timesData.days as day}
											<WorkMoreItem
											on:select={(e) => changeTime(e.detail)}
											day={day}
											text={timesData.timeText}/>
										{/each}
									</div>
								</div>
								<FormControls {buttonsControls}/>
							</form>

							<form class='form-stage' id='formStep4' on:submit={sendForm}>
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
								<FormControls prev={controlsButton} next={false} {buttonsControls}/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
	<footer class="footer">
		<div class="footer__inner">
			<p class="footer__text">© 2024 YOOHIVE All Rights Reserved</p>
		</div>
	</footer>
</div>

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
				width: 100%;
				height: 100%;
			}
		}
	}
	.progress {
		display: flex;
		gap: 10px;
		justify-content: center;
		margin-bottom: 10px;
		&__bar {
			width: 100px;
			height: 3px;
			border-radius: 50px;
			background: #969696;

			&--completed {
				background: #00c900;
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
	.main-background {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.page {
		flex: content;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.page__content {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 800px;
	}

	.message {
		display: flex;
		flex-direction: column;
		gap: 50px;
		width: 100%;
		border-radius: 20px;
		overflow: hidden;
		background: var(--color-bg-primary);
		border: var(--border-primary);
		transition: .5s;

		@media (min-width: 600px) {
			padding: 50px 20px;
		}
		@media (max-width: 600px) {
			padding: 40px 10px;
		}
	}

	.message__inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		overflow: hidden;
	}

	.message__title {
		font-size: 30px;
		font-weight: 700;
		text-align: center;
		color: var(--color-text-primary);
	}
	.message__description {
		display: block;
		font-size: 20px;
		font-weight: 500;
		text-align: center;
		color: var(--color-text-primary);
	}

	.message__button {
	}

	#showForm {
		display: none;
	}
	#showForm:checked ~ .form {
		display: flex;
		max-height: 100%;
	}

	#showForm:checked ~ .message__inner > .message__button {
		display: none;
	}

	.form__required {
		font-size: inherit;
		color: red;
	}

	.form {
		height: 0;
		max-height: 0;
		display: none;
		flex-direction: column;
		gap: 15px;
		transition: all 0.5s;
	}

	.form__message {
		text-align: center;
		font-size: 18px;
		color: rgb(29, 177, 29);
	}
	.message-error {
		color: red;
	}

	.button__disabled {
		pointer-events: none;
		opacity: 0.4;
	}
	.form__inner {
	}

	.form__content {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	.form__button-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 15px;
	}

	/* header */

	.form__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 15px;
	}

	.form__header-title {
		font-weight: 700;
		font-size: 34px;
		text-align: center;
		color: var(--color-text-primary);
	}

	/* contacts */

	.form__contacts {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.form__contacts-items {
		display: flex;
		gap: 20px;
	}

	@media (max-width: 600px) {
		.form__contacts-items {
			flex-direction: column;
		}
	}

	.form__contacts-item {
		width: 100%;
	}
	.form__contacts-item-header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 8px;
	}
	.form__contacts-item-text {
		color: var(--color-text-primary);
	}

	.form__contacts-item-main {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.form__contacts-item-textarea {
		resize: none;
	}

	/* work-like */

	.form__work-like-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 20px;
	}

	.form__work-like-items {
		display: flex;
		gap: 10px;
		flex-direction: column;
	}

	.form__work-like-item {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 20px;

		@media (max-width: 600px) {
			flex-wrap: wrap;
		}
	}

	.form__work-like-header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 20px;
	}

	.form__work-like-text {
		font-size: 20px;
		color: var(--color-text-primary);
	}

	.form__work-like-label {
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		@media (max-width: 600px) {
			flex: 1 0 auto;
			width: 80%;
		}
	}


	.form__work-like-radio {
	}

	.form__work-like-content-text {
		font-weight: 18px;
		color: var(--color-text-primary);
	}

	.form__work-like-input-text {
		font-size: 20px;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.form__work-like-input-container {
		flex: content;
		display: flex;
		gap: 15px;

		@media (min-width: 600px) {
			align-items: center;
			justify-content: end;
		}

		@media (max-width: 600px) {
			flex-direction: column;
		}
	}

	.form__work-like-input {
		width: 300px;
	}

	/* network */

	.form__network-text {
		font-size: 20px;
		margin-bottom: 10px;
		color: var(--color-text-primary);
	}

	.form__network-items {
		row-gap: 10px;
		column-gap: 10px;
		@media (min-width: 700px) {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(48%, calc(50% - 10px)));
		}
		@media (max-width: 700px) {
			display: flex;
			flex-direction: column;
		}
	}

	.form__network-item {
		display: flex;
		column-gap: 15px;
	}
	@media (max-width: 400px) {
		.form__network-item {
			flex-direction: column;
			column-gap: 20px;
		}
	}
	@media (min-width: 500px) {
		.form__network-item {
			align-items: center;
			justify-content: space-between;
			row-gap: 10px;
		}
	}

	.form__network-item-container {
		display: flex;
		align-items: center;
		cursor: pointer;
		min-height: 50px;
	}

	.form__network-item-checkbox {
		margin-right: 15px;
	}

	.form__network-item-text {
		font-size: 18px;
		color: var(--color-text-primary);
	}

	.form__network-item-input {
		@media (min-width: 500px) {
			max-width: 65%;
		}
	}
	@media (min-width: 500px) {
		.form__network-item-input {
			max-width: 65%;
		}
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

	/* work-mode */
	.work-mode {
		display: flex;
		flex-direction: column;
		gap: 10px;
		&__header {

		}

		&__header-name {
			font-size: 18px;
		}
	}

	.form__work-mode-items {
		display: flex;
		flex-direction: column;
		gap: 5px;
		transition: all 0.5s;
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
