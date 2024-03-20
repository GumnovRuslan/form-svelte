import { c as create_ssr_component } from "../../chunks/ssr.js";
import "i18next";
const css = {
  code: ".main-background.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{width:100%;display:flex;flex-direction:column}.page.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{flex:content;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10vw 0}.page__content.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{position:relative;z-index:2}.message.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;flex-direction:column;gap:50px;width:100%;max-width:800px;border-radius:20px;overflow:hidden;background:var(--color-bg-primary);border:var(--border-primary)}@media(min-width: 600px){.message.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{padding:60px 20px}}@media(max-width: 600px){.message.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{padding:50px 10px}}.message__inner.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;flex-direction:column;align-items:center;gap:20px}.message__title.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-size:30px;font-weight:700;text-align:center;color:var(--color-text-primary)}.message__description.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:block;font-size:20px;font-weight:500;text-align:center;color:var(--color-text-primary)}#showForm.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:none}#showForm.svelte-gk78nw:checked~.form.svelte-gk78nw.svelte-gk78nw{display:flex;max-height:100%}#showForm.svelte-gk78nw:checked~.message__inner.svelte-gk78nw>.message__button.svelte-gk78nw{display:none}.form__required.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-size:inherit;color:red}.form.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{height:0;max-height:0;display:none;flex-direction:column;gap:15px;max-width:800px;transition:all 0.5s}.form__content.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;flex-direction:column;gap:40px}.form__header.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:30px}.form__header-title.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-weight:700;font-size:34px;text-align:center;color:var(--color-text-primary)}.form__contacts.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;flex-direction:column;gap:15px}.form__contacts-items.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;gap:20px}@media(max-width: 600px){.form__contacts-items.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{flex-direction:column}}.form__contacts-item.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{width:100%}.form__contacts-item-header.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;align-items:center;gap:10px;margin-bottom:8px}.form__contacts-item-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{color:var(--color-text-primary)}.form__work-like-content.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;flex-direction:column;justify-content:space-between;gap:20px}.form__work-like-items.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;gap:10px;flex-direction:column}.form__work-like-item.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{width:100%;display:flex;align-items:center;gap:20px}@media(max-width: 600px){.form__work-like-item.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{flex-wrap:wrap}}.form__work-like-header.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;align-items:center;gap:10px;margin-bottom:20px}.form__work-like-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-size:20px;color:var(--color-text-primary)}.form__work-like-label.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;align-items:center;gap:8px;cursor:pointer}@media(max-width: 600px){.form__work-like-label.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{flex:1 0 auto;width:80%}}.form__work-like-content-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-weight:18px;color:var(--color-text-primary)}.form__work-like-input-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-size:20px;font-weight:700;color:var(--color-text-primary)}.form__work-like-input-container.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{flex:content;display:flex;gap:15px}@media(min-width: 600px){.form__work-like-input-container.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{align-items:center;justify-content:end}}@media(max-width: 600px){.form__work-like-input-container.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{flex-direction:column}}.form__work-like-input.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{width:300px}.form__network-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-size:20px;margin-bottom:10px;color:var(--color-text-primary)}.form__network-items.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;flex-direction:column;gap:10px}.form__network-item.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex}@media(max-width: 500px){.form__network-item.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{flex-direction:column;column-gap:20px}}@media(min-width: 500px){.form__network-item.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{align-items:center;justify-content:space-between;row-gap:10px}}.form__network-item-container.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;align-items:center;cursor:pointer;min-height:50px}.form__network-item-checkbox.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{margin-right:15px}.form__network-item-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-size:18px;color:var(--color-text-primary)}@media(min-width: 500px){.form__network-item-input.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{max-width:65%}}.form__calendar-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-size:20px;margin-bottom:8px;color:var(--color-text-primary)}.form__languages-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-size:20px;margin-bottom:20px;color:var(--color-text-primary)}.form__languages-items.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:inline-flex;flex-direction:column;justify-content:center;gap:15px;margin-bottom:15px}.form__languages-item.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;align-items:center;cursor:pointer}.form__languages-item-checkbox.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{margin:0 15px 0 0}.form__languages-item-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{color:var(--color-text-primary)}.form__languages-another.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;flex-direction:column;gap:10px}.form__languages-item-another.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;align-items:center;cursor:pointer}.form__preferences-header.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{margin-bottom:20px}.form__preferences-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-size:18px;color:var(--color-text-primary)}.form__preferences-items.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;flex-direction:column;gap:10px}.form__preferences-item.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;align-items:center;gap:10px;cursor:pointer}.form__preferences-item-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-size:20px;color:var(--color-text-primary)}.form__work-mode.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;flex-direction:column;gap:10px;overflow:hidden}#workModeShow.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:none}#workModeShow.svelte-gk78nw:checked~.form__work-mode-items.svelte-gk78nw.svelte-gk78nw{height:100%}#workModeShow.svelte-gk78nw:checked~.form__work-mode-header.svelte-gk78nw>.form__work-mode-header-icon.svelte-gk78nw{transform:rotate(180deg)}.form__work-mode-header.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;align-items:center;justify-content:space-between;min-height:50px;background:var(--color-bg-secondary);padding:10px;border-radius:20px;cursor:pointer}.form__work-mode-header-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{font-size:20px;color:var(--color-text-primary)}.form__work-mode-header-icon.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:inline-block;max-width:24px;max-height:24px}.form__work-mode-items.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;flex-direction:column;gap:5px;overflow:hidden;height:0;max-height:0;transition:all 0.5s}.form__work-mode-item.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;align-items:center;justify-content:space-between;padding:20px 10px;border-radius:20px;background:var(--color-bg-secondary)}@media(max-width: 500px){.form__work-mode-item.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{flex-wrap:wrap;row-gap:10px}}.form__work-mode-item-checkbox.svelte-gk78nw:checked~.form__work-mode-item-content.svelte-gk78nw.svelte-gk78nw,.form__work-mode-item-checkbox.svelte-gk78nw:checked~.form__work-mode-item-info.svelte-gk78nw.svelte-gk78nw{opacity:1;pointer-events:auto}.form__work-mode-item-checkbox.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{width:20px;height:20px;margin:0 10px 0 0;cursor:pointer}.form__work-mode-item-info.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{flex:content;display:inline-flex;align-items:center;margin-right:15px;opacity:0.3;pointer-events:none}@media(min-width: 500px){.form__work-mode-item-info.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{margin-right:15px}}.form__work-mode-item-info.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{color:var(--color-text-primary)}.form__work-mode-item-content.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;column-gap:15px;row-gap:10px;flex-wrap:wrap;opacity:0.3;pointer-events:none}@media(min-width: 500px){.form__work-mode-item-content.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{justify-content:end}}@media(max-width: 500px){.form__work-mode-item-content.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{justify-content:center}}.form__work-mode-item-content-line.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;gap:10px;align-items:center}.form__work-mode-item-content-line-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{text-align:end;color:var(--color-text-primary)}.form__work-mode-item-content-line-input.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{text-align:center;width:min-content;font-size:18px;border:none;padding:5px 10px;cursor:pointer}.form__confirmation.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{display:flex;align-items:center;gap:10px;cursor:pointer}.form__confirmation-text.svelte-gk78nw.svelte-gk78nw.svelte-gk78nw{color:var(--color-text-primary)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="main-background svelte-gk78nw"><header class="header"><div class="header__inner"><div class="header__content"><div class="header__logo" data-svelte-h="svelte-ndd5l4">YOOHIVE</div> <div class="header__language"><select class="header__language-select" name="" id="formLanguages"><option class="header__language-option" value="ru" data-svelte-h="svelte-q343ny">ru </option><option class="header__language-option" value="en" data-svelte-h="svelte-mxm9gq">en </option><option class="header__language-option" value="pl" data-svelte-h="svelte-1u5m578">pl </option><option class="header__language-option" value="by" data-svelte-h="svelte-1yh4y0u">by </option><option class="header__language-option" value="ua" data-svelte-h="svelte-n0z4d0">ua</option></select></div></div></div></header> <main class="page svelte-gk78nw" data-svelte-h="svelte-uokv0s"><div class="page__content svelte-gk78nw"><div class="message svelte-gk78nw"><input type="checkbox" id="showForm" class="svelte-gk78nw"> <div class="message__inner svelte-gk78nw"><h2 id="title" class="message__title svelte-gk78nw">The service is not working right now</h2> <p id="description" class="message__description svelte-gk78nw">We are like bees working to start our hive ju-ju-ju. For now you can register on our
						website to get maximum effect for your business.</p> <label id="message-button" for="showForm" class="message__button button svelte-gk78nw">Registration</label></div> <form class="form svelte-gk78nw" name="myForm" enctype="application/json"><div class="form__inner svelte-gk78nw"><div class="form__header svelte-gk78nw"><h2 class="form__header-title svelte-gk78nw">Регистрация</h2></div> <div class="form__content svelte-gk78nw"><div class="form__contacts svelte-gk78nw" id="formContacts"><div class="form__contacts-item svelte-gk78nw"><div class="form__contacts-item-header input-name svelte-gk78nw"><p class="form__contacts-item-text svelte-gk78nw">Название компании/мастера</p> <span class="form__required svelte-gk78nw">*</span></div> <input type="text" class="form__contacts-item-input form__input" placeholder="Company name" required></div> <div class="form__contacts-items svelte-gk78nw"><div class="form__contacts-item svelte-gk78nw"><div class="form__contacts-item-header svelte-gk78nw"><p class="form__contacts-item-text input-name svelte-gk78nw">Адрес</p></div> <input type="text" class="form__contacts-item-input form__input" placeholder="Address"></div> <div class="form__contacts-item svelte-gk78nw"><div class="form__contacts-item-header input-name svelte-gk78nw"><p class="form__contacts-item-text svelte-gk78nw">Телефон</p> <span class="form__required svelte-gk78nw">*</span></div> <input type="tel" class="form__contacts-item-input form__input" placeholder="Phone number" required></div></div> <div class="form__contacts-item svelte-gk78nw"><div class="form__contacts-item-header input-name svelte-gk78nw"><p class="form__contacts-item-text input-name svelte-gk78nw">Email</p> <span class="form__required svelte-gk78nw">*</span></div> <input type="email" class="form__contacts-item-input form__input" placeholder="Email" required></div></div> <div class="form__work-like" id="workLike"><div class="form__work-like-header svelte-gk78nw"><p class="form__work-like-text section-name svelte-gk78nw">You work like:</p> <span class="form__required svelte-gk78nw">*</span></div> <div class="form__work-like-content svelte-gk78nw"><div class="form__work-like-items svelte-gk78nw"><div class="form__work-like-item svelte-gk78nw"><input class="form__work-like-radio custom-radio svelte-gk78nw" type="radio" name="workLike" id="workLikePhysical" required> <label for="workLikePhysical" class="form__work-like-label svelte-gk78nw"><span class="form__work-like-content-text form__text svelte-gk78nw">Физ. лицо</span></label> <div class="form__work-like-input-container svelte-gk78nw" id="data"><p class="form__work-like-input-text svelte-gk78nw">PESEL</p> <input class="form__work-like-input form__input svelte-gk78nw" type="number" placeholder="Enter 11 numbers" disabled></div></div> <div class="form__work-like-item svelte-gk78nw"><input class="form__work-like-radio custom-radio svelte-gk78nw" type="radio" name="workLike" id="workLikeCompany"> <label for="workLikeCompany" class="form__work-like-label svelte-gk78nw"><span class="form__work-like-content-text form__text svelte-gk78nw">Компания</span></label> <div class="form__work-like-input-container svelte-gk78nw" id="data"><p class="form__work-like-input-text svelte-gk78nw">NIP</p> <input class="form__work-like-input form__input svelte-gk78nw" type="number" placeholder="Enter 10 numbers" disabled></div></div></div></div></div> <div class="form__network" id="formNetwork"><p class="form__network-text section-name svelte-gk78nw">Соц. сети</p> <div class="form__network-items svelte-gk78nw" id="networkContainer"><div class="form__network-item svelte-gk78nw"><label class="form__network-item-container svelte-gk78nw"><input class="form__network-item-checkbox custom-checkbox svelte-gk78nw" type="checkbox"> <span class="form__network-item-text form__text svelte-gk78nw">Instagram</span></label> <input type="text" class="form__network-item-input form__input svelte-gk78nw" disabled placeholder="ссылка"></div> <div class="form__network-item svelte-gk78nw"><label class="form__network-item-container svelte-gk78nw"><input class="form__network-item-checkbox custom-checkbox svelte-gk78nw" type="checkbox"> <span class="form__network-item-text form__text svelte-gk78nw">Facebook</span></label> <input type="text" class="form__network-item-input form__input svelte-gk78nw" disabled placeholder="ссылка"></div> <div class="form__network-item svelte-gk78nw"><label class="form__network-item-container svelte-gk78nw"><input class="form__network-item-checkbox custom-checkbox svelte-gk78nw" type="checkbox"> <span class="form__network-item-text form__text svelte-gk78nw">Telegram</span></label> <input type="text" class="form__network-item-input form__input svelte-gk78nw" disabled placeholder="ссылка"></div> <div class="form__network-item svelte-gk78nw"><label class="form__network-item-container svelte-gk78nw"><input class="form__network-item-checkbox custom-checkbox svelte-gk78nw" type="checkbox"> <span class="form__network-item-text form__text svelte-gk78nw">Tiktok</span></label> <input type="text" class="form__network-item-input form__input svelte-gk78nw" disabled placeholder="ссылка"></div> <div class="form__network-item svelte-gk78nw"><label class="form__network-item-container svelte-gk78nw"><input class="form__network-item-checkbox custom-checkbox svelte-gk78nw" type="checkbox"> <span class="form__network-item-text form__text svelte-gk78nw">Linkedin</span></label> <input type="text" class="form__network-item-input form__input svelte-gk78nw" disabled placeholder="ссылка"></div></div></div> <div class="form__work-mode svelte-gk78nw" id="formWorkMode"><input type="checkbox" class="form__checkbox svelte-gk78nw" id="workModeShow"> <label for="workModeShow" class="form__work-mode-header svelte-gk78nw"><span class="form__work-mode-header-text svelte-gk78nw">Оperating mode</span> <span class="form__work-mode-header-icon svelte-gk78nw"><svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 14.0303C16.2374 14.3232 15.7626 14.3232 15.4697 14.0303L12 10.5607L8.53033 14.0303C8.23744 14.3232 7.76256 14.3232 7.46967 14.0303C7.17678 13.7374 7.17678 13.2626 7.46967 12.9697L11.4697 8.96967C11.7626 8.67678 12.2374 8.67678 12.5303 8.96967L16.5303 12.9697C16.8232 13.2626 16.8232 13.7374 16.5303 14.0303Z" fill="black"></path></svg></span></label> <div class="form__work-mode-items svelte-gk78nw"><div class="form__work-mode-item svelte-gk78nw"><input type="checkbox" class="form__work-mode-item-checkbox svelte-gk78nw"> <div class="form__work-mode-item-info svelte-gk78nw"><span class="form__work-mode-item-text">Monday</span></div> <div class="form__work-mode-item-content svelte-gk78nw"><div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Open Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div> <div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Close Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div></div></div> <div class="form__work-mode-item svelte-gk78nw"><input type="checkbox" class="form__work-mode-item-checkbox svelte-gk78nw"> <div for="workModeMonday" class="form__work-mode-item-info svelte-gk78nw"><span class="form__work-mode-item-text">Tuesday</span></div> <div class="form__work-mode-item-content svelte-gk78nw"><div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Open Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div> <div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Close Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div></div></div> <div class="form__work-mode-item svelte-gk78nw"><input type="checkbox" class="form__work-mode-item-checkbox svelte-gk78nw"> <div class="form__work-mode-item-info svelte-gk78nw"><span class="form__work-mode-item-text">Wednesday</span></div> <div class="form__work-mode-item-content svelte-gk78nw"><div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Open Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div> <div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Close Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div></div></div> <div class="form__work-mode-item svelte-gk78nw"><input type="checkbox" class="form__work-mode-item-checkbox svelte-gk78nw"> <div class="form__work-mode-item-info svelte-gk78nw"><span class="form__work-mode-item-text">Thursday</span></div> <div class="form__work-mode-item-content svelte-gk78nw"><div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Open Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div> <div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Close Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div></div></div> <div class="form__work-mode-item svelte-gk78nw"><input type="checkbox" class="form__work-mode-item-checkbox svelte-gk78nw"> <div class="form__work-mode-item-info svelte-gk78nw"><span class="form__work-mode-item-text">Friday</span></div> <div class="form__work-mode-item-content svelte-gk78nw"><div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Open Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div> <div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Close Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div></div></div> <div class="form__work-mode-item svelte-gk78nw"><input type="checkbox" class="form__work-mode-item-checkbox svelte-gk78nw"> <div class="form__work-mode-item-info svelte-gk78nw"><span class="form__work-mode-item-text">Saturday</span></div> <div class="form__work-mode-item-content svelte-gk78nw"><div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Open Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div> <div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Close Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div></div></div> <div class="form__work-mode-item svelte-gk78nw"><input type="checkbox" class="form__work-mode-item-checkbox svelte-gk78nw"> <div class="form__work-mode-item-info svelte-gk78nw"><span class="form__work-mode-item-text">Sunday</span></div> <div class="form__work-mode-item-content svelte-gk78nw"><div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Open Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div> <div class="form__work-mode-item-content-line svelte-gk78nw"><span class="form__work-mode-item-content-line-text svelte-gk78nw">Close Time</span> <input class="form__work-mode-item-content-line-input svelte-gk78nw" type="time"></div></div></div></div></div> <div class="form__calendar svelte-gk78nw" id="formLinkCalendar"><p class="form__calendar-text section-name svelte-gk78nw">Link to Google calendar</p> <input id="inputLinkCalendar" type="url" class="form__calendar-input form__input" placeholder="link to Google calendar"></div> <div class="form__languages-container" id="communicationLanguages"><p class="form__languages-text section-name svelte-gk78nw">Языки комуникациии</p> <div class="form__languages-items svelte-gk78nw"><label class="form__languages-item svelte-gk78nw"><input type="checkbox" class="form__languages-item-checkbox custom-checkbox svelte-gk78nw"> <span class="form__languages-item-text form__text svelte-gk78nw">Polski</span></label> <label class="form__languages-item svelte-gk78nw"><input type="checkbox" class="form__languages-item-checkbox custom-checkbox svelte-gk78nw"> <span class="form__languages-item-text form__text svelte-gk78nw">Беларуская</span></label> <label class="form__languages-item svelte-gk78nw"><input type="checkbox" class="form__languages-item-checkbox custom-checkbox svelte-gk78nw"> <span class="form__languages-item-text form__text svelte-gk78nw">Українська</span></label> <label class="form__languages-item svelte-gk78nw"><input type="checkbox" class="form__languages-item-checkbox custom-checkbox svelte-gk78nw"> <span class="form__languages-item-text form__text svelte-gk78nw">Русский</span></label> <label class="form__languages-item svelte-gk78nw"><input type="checkbox" class="form__languages-item-checkbox custom-checkbox svelte-gk78nw"> <span class="form__languages-item-text form__text svelte-gk78nw">English</span></label></div> <div class="form__languages-another svelte-gk78nw"><label class="form__languages-item-another svelte-gk78nw"><input type="checkbox" class="form__languages-item-another-checkbox form__languages-item-checkbox custom-checkbox svelte-gk78nw"> <span class="form__languages-item-text form__text form__languages-item-another-text svelte-gk78nw">Another</span></label> <input class="form__languages-item-another-input form__input" type="text" disabled placeholder="Enter other languages"></div></div> <div class="form__preferences svelte-gk78nw" id="formSurvey"><div class="form__preferences-header svelte-gk78nw"><p class="form__preferences-text form__text svelte-gk78nw">Select which category matches your company</p> <p class="form__preferences-text form__text svelte-gk78nw"></p></div> <div class="form__preferences-items svelte-gk78nw"><label class="form__preferences-item svelte-gk78nw"><input class="form__preferences-item-checkbox custom-checkbox svelte-gk78nw" type="checkbox" name="preferences" value="ecofriendly"> <span class="form__preferences-item-text form__text svelte-gk78nw">ecofriendly</span></label> <label class="form__preferences-item svelte-gk78nw"><input class="form__preferences-item-checkbox custom-checkbox svelte-gk78nw" type="checkbox" name="preferences" value="ecofriendly"> <span class="form__preferences-item-text form__text svelte-gk78nw">petfriendly</span></label> <label class="form__preferences-item svelte-gk78nw"><input class="form__preferences-item-checkbox custom-checkbox svelte-gk78nw" type="checkbox" name="preferences" value="ecofriendly"> <span class="form__preferences-item-text form__text svelte-gk78nw">childefriendly</span></label> <label class="form__preferences-item svelte-gk78nw"><input class="form__preferences-item-checkbox custom-checkbox svelte-gk78nw" type="checkbox" name="preferences" value="ecofriendly"> <span class="form__preferences-item-text form__text svelte-gk78nw">inclusive</span></label></div></div> <label class="form__confirmation svelte-gk78nw" id="formConfirmation"><input class="form__confirmation-checkbox custom-checkbox svelte-gk78nw" type="checkbox" required> <div class="form__confirmation-text-container svelte-gk78nw"><span class="form__confirmation-text svelte-gk78nw">I agree to the publication of the provided data on YOOHIVE.COM resources</span> <span class="form__required svelte-gk78nw">*</span> <p class="form__confirmation-text svelte-gk78nw"></p></div></label> <button class="button" type="submit" id="buttonSend">Registration</button></div></div></form></div></div></main> <footer class="footer" data-svelte-h="svelte-vltwvn"><div class="footer__inner"><p class="footer__text">© 2024 YOOHIVE All Rights Reserved</p></div></footer> </div>`;
});
export {
  Page as default
};
