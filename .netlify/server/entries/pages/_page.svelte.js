import { c as create_ssr_component, d as createEventDispatcher, e as escape, f as add_attribute, h as each, v as validate_component } from "../../chunks/ssr.js";
import i18next from "i18next";
const css$4 = {
  code: ".item.svelte-1j3a75e.svelte-1j3a75e{display:flex;align-items:center;justify-content:space-between;padding:10px;border-radius:20px;background:var(--color-bg-secondary)}@media(max-width: 500px){.item.svelte-1j3a75e.svelte-1j3a75e{flex-wrap:wrap;row-gap:10px}}.item__checkbox.svelte-1j3a75e:checked~.item__content.svelte-1j3a75e,.item__checkbox.svelte-1j3a75e:checked~.item__info.svelte-1j3a75e{opacity:1;pointer-events:auto}.item__checkbox.svelte-1j3a75e.svelte-1j3a75e{width:20px;height:20px;margin:0 10px 0 0;cursor:pointer}.item__info.svelte-1j3a75e.svelte-1j3a75e{flex:content;display:inline-flex;flex-direction:column;margin-right:15px;opacity:0.3;pointer-events:none;color:var(--color-text-primary)}@media(min-width: 500px){.item__info.svelte-1j3a75e.svelte-1j3a75e{margin-right:15px}}.item__text.svelte-1j3a75e.svelte-1j3a75e{margin-bottom:5px}.item__buttons.svelte-1j3a75e.svelte-1j3a75e{display:flex;gap:10px}.item__button.svelte-1j3a75e.svelte-1j3a75e{font-size:10px;padding:0;margin:0}.item__content.svelte-1j3a75e.svelte-1j3a75e{display:flex;column-gap:15px;row-gap:10px;flex-wrap:wrap;opacity:0.3;pointer-events:none}@media(min-width: 500px){.item__content.svelte-1j3a75e.svelte-1j3a75e{justify-content:end}}@media(max-width: 500px){.item__content.svelte-1j3a75e.svelte-1j3a75e{justify-content:center}}.item__content-line.svelte-1j3a75e.svelte-1j3a75e{display:flex;gap:10px;align-items:center}.item__content-line-text.svelte-1j3a75e.svelte-1j3a75e{text-align:end;color:var(--color-text-primary)}.item__content-line-input.svelte-1j3a75e.svelte-1j3a75e{text-align:center;width:min-content;font-size:18px;border:none;padding:5px 10px;cursor:pointer}",
  map: null
};
const WorkMoreItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { day = "" } = $$props;
  let { text = ["", ""] } = $$props;
  let time = ["", ""];
  if ($$props.day === void 0 && $$bindings.day && day !== void 0)
    $$bindings.day(day);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$4);
  return `<div class="item svelte-1j3a75e"><input type="checkbox" class="item__checkbox svelte-1j3a75e"> <div class="item__info svelte-1j3a75e"><span class="item__text svelte-1j3a75e">${escape(day)}</span> <div class="item__buttons svelte-1j3a75e"><button class="item__button svelte-1j3a75e" type="button" data-svelte-h="svelte-k9juq7">Применить ко всем</button> <button class="item__button svelte-1j3a75e" type="button" data-svelte-h="svelte-1k1woiz">Применить к будням</button></div></div> <div class="item__content svelte-1j3a75e"><div class="item__content-line svelte-1j3a75e"><span class="item__content-line-text svelte-1j3a75e">${escape(text[0])}</span> <input class="item__content-line-input svelte-1j3a75e" type="time"${add_attribute("value", time[0], 0)}></div> <div class="item__content-line svelte-1j3a75e"><span class="item__content-line-text svelte-1j3a75e">${escape(text[1])}</span> <input class="item__content-line-input svelte-1j3a75e" type="time"${add_attribute("value", time[1], 0)}></div></div> </div>`;
});
const css$3 = {
  code: ".item.svelte-1lp1u14.svelte-1lp1u14{display:flex;column-gap:20px;row-gap:10px}@media(min-width: 600px){.item.svelte-1lp1u14.svelte-1lp1u14{align-items:center}}@media(max-width: 600px){.item.svelte-1lp1u14.svelte-1lp1u14{flex-direction:column;align-items:start}}.item.svelte-1lp1u14 .disabled.svelte-1lp1u14{opacity:0.5;pointer-events:none}.item__category-inner.svelte-1lp1u14.svelte-1lp1u14{max-width:250px;width:100%;display:inline-flex;align-items:center;gap:15px;cursor:pointer}.item__subcategories.svelte-1lp1u14.svelte-1lp1u14{display:inline-block;position:relative}.item__subcategories-header.svelte-1lp1u14.svelte-1lp1u14{display:flex;gap:15px;align-items:center;justify-content:space-between;padding:5px 10px;border-radius:10px;border:1px solid black;background:rgba(255, 255, 255, 0.4666666667);backdrop-filter:blur(5px);cursor:pointer}.item__subcategories-header.svelte-1lp1u14.svelte-1lp1u14:hover{outline:1px solid black}.item__subcategories-header-text.svelte-1lp1u14.svelte-1lp1u14{font-size:16px}.item__subcategories-header-icon.svelte-1lp1u14.svelte-1lp1u14{max-width:15px;max-height:15px;transition:0.1s}.item__subcategories-list.svelte-1lp1u14.svelte-1lp1u14{position:absolute;z-index:1;top:0;left:0;width:100%;overflow:hidden;height:0}.item__subcategories-list-inner.svelte-1lp1u14.svelte-1lp1u14{display:flex;flex-direction:column;justify-content:center;border-radius:10px;border:1px solid black;background:rgba(255, 250, 209, 0.8078431373);backdrop-filter:blur(3px)}.item__subcategories-item.svelte-1lp1u14.svelte-1lp1u14{display:flex;align-items:center;gap:10px;cursor:pointer;padding:5px}.item__subcategories-item.svelte-1lp1u14.svelte-1lp1u14:not(:last-child){border-bottom:1px solid #000}.item__subcategories-item.svelte-1lp1u14.svelte-1lp1u14:hover{background:rgba(255, 187, 0, 0.1215686275)}.item__subcategories-item-checkbox.svelte-1lp1u14.svelte-1lp1u14{flex:1 0 auto;width:100%;max-width:16px;height:16px;margin:0;cursor:pointer}.item__subcategories-item-text.svelte-1lp1u14.svelte-1lp1u14{font-size:14px}",
  map: null
};
const CategoriesItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { category = {} } = $$props;
  let { subcategoryDefault = "" } = $$props;
  let group = [];
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.subcategoryDefault === void 0 && $$bindings.subcategoryDefault && subcategoryDefault !== void 0)
    $$bindings.subcategoryDefault(subcategoryDefault);
  $$result.css.add(css$3);
  return `<div class="item svelte-1lp1u14"><label class="item__category-inner svelte-1lp1u14"><input type="radio" name="category" class="item__category custom-checkbox"${add_attribute("data-name", category.value, 0)}${add_attribute("data-select", group, 0)} required> <p class="form__text">${escape(category.name)}</p></label> <div class="item__subcategories disabled svelte-1lp1u14"><button type="button" class="item__subcategories-header svelte-1lp1u14"${add_attribute("name", category.name, 0)}><span class="item__subcategories-header-text svelte-1lp1u14">${escape(subcategoryDefault)}</span> <span class="item__subcategories-header-icon svelte-1lp1u14" data-svelte-h="svelte-3qb3fi"><svg fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></span></button> <div class="item__subcategories-list svelte-1lp1u14"><div class="item__subcategories-list-inner svelte-1lp1u14">${each(category.subcategories, (subcategory) => {
    return `<label class="item__subcategories-item svelte-1lp1u14"><input class="item__subcategories-item-checkbox svelte-1lp1u14" type="checkbox"${add_attribute("value", subcategory.value, 0)}${add_attribute("name", subcategory.name, 0)}${~group.indexOf(subcategory.value) ? add_attribute("checked", true, 1) : ""}> <span class="item__subcategories-item-text svelte-1lp1u14">${escape(subcategory.name)}</span> </label>`;
  })}</div></div></div> </div>`;
});
const css$2 = {
  code: ".categories__header.svelte-1ftmkfd{display:flex;align-items:center;gap:10px;margin-bottom:15px}.categories__required.svelte-1ftmkfd{font-size:20px;color:red}.categories__items.svelte-1ftmkfd{display:flex;flex-direction:column;gap:10px}",
  map: null
};
const Categories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { categories: categories2 } = $$props;
  if ($$props.categories === void 0 && $$bindings.categories && categories2 !== void 0)
    $$bindings.categories(categories2);
  $$result.css.add(css$2);
  return `<div class="categories" id="formCategories"><div class="categories__inner"><div class="categories__header svelte-1ftmkfd"><p class="categories__title section-name">${escape(categories2.title)}</p> <span class="categories__required svelte-1ftmkfd" data-svelte-h="svelte-2vdipo">*</span></div> <div class="categories__content"><div class="categories__items svelte-1ftmkfd">${each(categories2.categories, (category) => {
    return `${validate_component(CategoriesItem, "CategoriesItem").$$render(
      $$result,
      {
        category,
        subcategoryDefault: categories2.subcategory_default
      },
      {},
      {}
    )}`;
  })}</div></div></div> </div>`;
});
const css$1 = {
  code: ".hidden.svelte-44trpy{visibility:hidden}.controls.svelte-44trpy{display:flex;justify-content:space-between}.controls__button.svelte-44trpy{display:flex;align-items:center;justify-content:center;gap:10px;padding:10px 20px;border-radius:20px;border:none;background:var(--color-bg-button);color:var(--color-text-secondary);cursor:pointer}.controls__button-icon.svelte-44trpy{max-width:20px;max-height:20px}.controls__button-text.svelte-44trpy{font-size:18px;color:inherit}",
  map: null
};
const FormControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { next = true } = $$props;
  let { prev = true } = $$props;
  let { buttonsControls } = $$props;
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  if ($$props.prev === void 0 && $$bindings.prev && prev !== void 0)
    $$bindings.prev(prev);
  if ($$props.buttonsControls === void 0 && $$bindings.buttonsControls && buttonsControls !== void 0)
    $$bindings.buttonsControls(buttonsControls);
  $$result.css.add(css$1);
  return `<div class="controls svelte-44trpy"><button class="${["controls__button svelte-44trpy", !prev ? "hidden" : ""].join(" ").trim()}" type="button" id="buttonControlsPrev"><span class="controls__button-icon svelte-44trpy" data-svelte-h="svelte-1jfb6z7"><svg fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"></path></svg></span> <span class="controls__button-text svelte-44trpy">${escape(buttonsControls.prev)}</span></button> <button class="${["controls__button svelte-44trpy", !next ? "hidden" : ""].join(" ").trim()}" id="buttonControlsNext"><span class="controls__button-text svelte-44trpy">${escape(buttonsControls.next)}</span> <span class="controls__button-icon svelte-44trpy" data-svelte-h="svelte-12hxjam"><svg fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></span></button> </div>`;
});
let categories = {
  title: "Категории",
  subcategory_default: "Выберите подкатегорию",
  categories: [
    {
      name: "Красота",
      value: "beauty",
      subcategories: [
        {
          name: "Волосы",
          value: "hair"
        },
        {
          name: "Парикмахер",
          value: "barber"
        },
        {
          name: "Ногти",
          value: "nail"
        },
        {
          name: "Брови",
          value: "Brows"
        },
        {
          name: "Массаж",
          value: "massage"
        },
        {
          name: "Макияж",
          value: "makeup"
        },
        {
          name: "Спа",
          value: "Spa"
        }
      ]
    },
    {
      name: "Здоровье",
      value: "health",
      subcategories: [
        {
          name: "Стоматология",
          value: "Dentistry"
        },
        {
          name: "Офтальмология",
          value: "Ophthalmology"
        },
        {
          name: "Семейный доктор",
          value: "Family doctor"
        },
        {
          name: "NFZ",
          value: "NFZ"
        },
        {
          name: "Профильные специалисты",
          value: "Specialists"
        },
        {
          name: "Физиотерапия",
          value: "Physiotherapy"
        },
        {
          name: "Нетрадиционная медицина",
          value: "Alternative medicine"
        }
      ]
    },
    {
      name: "Спорт",
      value: "sport",
      subcategories: [
        {
          name: "тренажерные залы",
          value: "GYM's"
        },
        {
          name: "бассейны",
          value: "swimming pools"
        },
        {
          name: "фитнес",
          value: "fitness"
        },
        {
          name: "танцы",
          value: "dancing"
        },
        {
          name: "йога",
          value: "yoga"
        },
        {
          name: "пилатес",
          value: "Pilates"
        },
        {
          name: "волейбол",
          value: "volleyball"
        },
        {
          name: "футбол",
          value: "football"
        },
        {
          name: "теннис",
          value: "tennis"
        },
        {
          name: "сквош",
          value: "squash"
        },
        {
          name: "бокс",
          value: "boxing"
        },
        {
          name: "единоборства",
          value: "martial arts"
        },
        {
          name: "велоспорт",
          value: "cycling"
        },
        {
          name: "зимние виды спорта",
          value: "winter sports"
        }
      ]
    },
    {
      name: "Образование",
      value: "education",
      subcategories: [
        {
          name: "школы",
          value: "schools"
        },
        {
          name: "школы полициальные",
          value: "police schools"
        },
        {
          name: "колледжи",
          value: "colleges"
        },
        {
          name: "университеты",
          value: "universities"
        },
        {
          name: "курсы",
          value: "courses"
        },
        {
          name: "репетиторы",
          value: "tutors"
        }
      ]
    },
    {
      name: "Развлечение",
      value: "entertainment",
      subcategories: [
        {
          name: "выставки",
          value: "Exhibitions"
        },
        {
          name: "музеи",
          value: "museums"
        },
        {
          name: "театры",
          value: "theaters"
        },
        {
          name: "концертные залы",
          value: "concert halls"
        },
        {
          name: "кафе",
          value: "cafe"
        },
        {
          name: "клубы",
          value: "clubs"
        },
        {
          name: "рестораны",
          value: "restaurants"
        }
      ]
    },
    {
      name: "Дети",
      value: "children",
      subcategories: [
        {
          name: "детские сады",
          value: "kindergartens"
        },
        {
          name: "школы",
          value: "schools"
        },
        {
          name: "няни",
          value: "nannies"
        },
        {
          name: "детские развлекательные центры",
          value: "entertainment centers"
        },
        {
          name: "цирк",
          value: "circus"
        },
        {
          name: "аквапарк",
          value: "aquapark"
        },
        {
          name: "кружки",
          value: "groups"
        }
      ]
    },
    {
      name: "Дом",
      value: "house",
      subcategories: [
        {
          name: "клининг",
          value: "cleaning"
        },
        {
          name: "сантехника",
          value: "plumbing"
        },
        {
          name: "электрика",
          value: "electrician"
        },
        {
          name: "отопительная система",
          value: "heating system"
        },
        {
          name: "ремонт",
          value: "repair"
        },
        {
          name: "сборка мебели",
          value: "Furniture assembly"
        }
      ]
    },
    {
      name: "Питомцы",
      value: "pets",
      subcategories: [
        {
          name: "ветеринарные клиники",
          value: "veterinary clinics"
        },
        {
          name: "салоны красоты для домашних животных",
          value: "pet beauty salons"
        },
        {
          name: "отели для животных",
          value: "hotels for animals"
        },
        {
          name: "выгул собак",
          value: "dog walking"
        }
      ]
    },
    {
      name: "Транспорт",
      value: "transport",
      subcategories: [
        {
          name: "СТО",
          value: "car service"
        },
        {
          name: "пассажирские перевозки",
          value: "Passenger Transportation"
        },
        {
          name: "грузовые перевозки",
          value: "freight transportation"
        },
        {
          name: "аренда автомобилей",
          value: "Car rent"
        }
      ]
    },
    {
      name: "Услуги для бизнеса",
      value: "business",
      subcategories: [
        {
          name: "регистрация бизнеса",
          value: "business registration"
        },
        {
          name: "бизнес-инкубаторы",
          value: "business incubators"
        },
        {
          name: "бухгалтерские услуги",
          value: "accounting services"
        },
        {
          name: "юридические услуги для бизнеса",
          value: "legal services for business"
        },
        {
          name: "подбор персонала",
          value: "personnel selection"
        }
      ]
    },
    {
      name: "Юридические услуги",
      value: "legal services",
      subcategories: [
        {
          name: "легализация",
          value: "legalization"
        },
        {
          name: "нотариусы",
          value: "notaries"
        },
        {
          name: "присяжные переводчики",
          value: "sworn translators"
        },
        {
          name: "юридические услуги для бизнеса",
          value: "legal services for business"
        },
        {
          name: "адвокаты",
          value: "lawyers"
        }
      ]
    }
  ]
};
const css = {
  code: ".message-send.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:none}.message-send__inner.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px}.message-send__text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:20px;color:#24c924}.message-send__image.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{max-width:300px;max-height:300px}.message-send__image.svelte-13r43dj img.svelte-13r43dj.svelte-13r43dj{object-fit:cover;width:100%;height:100%}.progress.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;gap:10px;justify-content:center;margin-bottom:10px}.progress__bar.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{width:100px;height:3px;border-radius:50px;background:#969696}.progress__bar--completed.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{background:#00c900}.form-stage.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:none;flex-direction:column;gap:20px}.form-stage.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj:nth-of-type(1){display:flex}.form-stage__inner.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;gap:30px}.main-background.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{width:100%;display:flex;flex-direction:column}.page.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{flex:content;display:flex;flex-direction:column;align-items:center;justify-content:center}.page__content.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{position:relative;z-index:2;width:100%;max-width:800px}.message.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;gap:50px;width:100%;border-radius:20px;overflow:hidden;background:var(--color-bg-primary);border:var(--border-primary);transition:0.5s}@media(min-width: 600px){.message.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{padding:50px 20px}}@media(max-width: 600px){.message.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{padding:40px 10px}}.message__inner.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;align-items:center;gap:20px;overflow:hidden}.message__title.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:30px;font-weight:700;text-align:center;color:var(--color-text-primary)}.message__description.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:block;font-size:20px;font-weight:500;text-align:center;color:var(--color-text-primary)}#showForm.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:none}#showForm.svelte-13r43dj:checked~.form.svelte-13r43dj.svelte-13r43dj{display:flex;max-height:100%}#showForm.svelte-13r43dj:checked~.message__inner.svelte-13r43dj>.message__button.svelte-13r43dj{display:none}.form__required.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:inherit;color:red}.form.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{height:0;max-height:0;display:none;flex-direction:column;gap:15px;transition:all 0.5s}.form__message.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{text-align:center;font-size:18px;color:rgb(29, 177, 29)}.message-error.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{color:red}.button__disabled.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{pointer-events:none;opacity:0.4}.form__content.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;gap:40px}.form__button-container.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:15px}.form__header.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:15px}.form__header-title.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-weight:700;font-size:34px;text-align:center;color:var(--color-text-primary)}.form__contacts.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;gap:15px}.form__contacts-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;gap:20px}@media(max-width: 600px){.form__contacts-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{flex-direction:column}}.form__contacts-item.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{width:100%}.form__contacts-item-header.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;align-items:center;gap:10px;margin-bottom:8px}.form__contacts-item-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{color:var(--color-text-primary)}.form__contacts-item-main.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;gap:10px}.form__contacts-item-textarea.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{resize:none}.form__work-like-content.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;justify-content:space-between;gap:20px}.form__work-like-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;gap:10px;flex-direction:column}.form__work-like-item.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{width:100%;display:flex;align-items:center;gap:20px}@media(max-width: 600px){.form__work-like-item.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{flex-wrap:wrap}}.form__work-like-header.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;align-items:center;gap:10px;margin-bottom:20px}.form__work-like-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:20px;color:var(--color-text-primary)}.form__work-like-label.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;align-items:center;gap:8px;cursor:pointer}@media(max-width: 600px){.form__work-like-label.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{flex:1 0 auto;width:80%}}.form__work-like-content-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-weight:18px;color:var(--color-text-primary)}.form__work-like-input-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:20px;font-weight:700;color:var(--color-text-primary)}.form__work-like-input-container.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{flex:content;display:flex;gap:15px}@media(min-width: 600px){.form__work-like-input-container.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{align-items:center;justify-content:end}}@media(max-width: 600px){.form__work-like-input-container.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{flex-direction:column}}.form__work-like-input.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{width:300px}.form__network-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:20px;margin-bottom:10px;color:var(--color-text-primary)}.form__network-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{row-gap:10px;column-gap:10px}@media(min-width: 700px){.form__network-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:grid;grid-template-columns:repeat(auto-fill, minmax(48%, calc(50% - 10px)))}}@media(max-width: 700px){.form__network-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column}}.form__network-item.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;column-gap:15px}@media(max-width: 400px){.form__network-item.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{flex-direction:column;column-gap:20px}}@media(min-width: 500px){.form__network-item.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{align-items:center;justify-content:space-between;row-gap:10px}}.form__network-item-container.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;align-items:center;cursor:pointer;min-height:50px}.form__network-item-checkbox.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{margin-right:15px}.form__network-item-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:18px;color:var(--color-text-primary)}@media(min-width: 500px){.form__network-item-input.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{max-width:65%}}@media(min-width: 500px){.form__network-item-input.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{max-width:65%}}.form__calendar-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:20px;margin-bottom:8px;color:var(--color-text-primary)}.form__languages-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:20px;margin-bottom:20px;color:var(--color-text-primary)}.form__languages-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:grid;gap:15px;margin-bottom:15px}@media(min-width: 600px){.form__languages-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{grid-template-columns:repeat(2, 1fr)}}@media(max-width: 600px){.form__languages-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{grid-template-columns:repeat(1, 1fr)}}.form__languages-item.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{width:50%;display:flex;align-items:start;cursor:pointer}.form__languages-item-checkbox.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{margin:0 15px 0 0}.form__languages-item-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{color:var(--color-text-primary)}.form__languages-another.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;gap:10px}.form__languages-item-another.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;align-items:center;cursor:pointer}.form__preferences-header.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{margin-bottom:20px}.form__preferences-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:18px;color:var(--color-text-primary)}.form__preferences-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:grid;gap:10px}@media(min-width: 400px){.form__preferences-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{grid-template-columns:repeat(2, 1fr)}}@media(max-width: 400px){.form__preferences-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{grid-template-columns:repeat(1, 1fr)}}.form__preferences-item.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{width:50%;display:flex;align-items:center;gap:10px;cursor:pointer}.form__preferences-item-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:20px;color:var(--color-text-primary)}.work-mode.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;gap:10px}.work-mode__header-name.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{font-size:18px}.form__work-mode-items.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;flex-direction:column;gap:5px;transition:all 0.5s}.form__confirmation.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{display:flex;align-items:center;gap:10px;cursor:pointer}.form__confirmation-text.svelte-13r43dj.svelte-13r43dj.svelte-13r43dj{color:var(--color-text-primary)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formMessage = "";
  let controlsButton = true;
  let timesData = {
    title: i18next.t("form:workMode.title"),
    days: [
      i18next.t(`form:workMode.day`, { context: "monday" }),
      i18next.t(`form:workMode.day`, { context: "tuesday" }),
      i18next.t(`form:workMode.day`, { context: "wednesday" }),
      i18next.t(`form:workMode.day`, { context: "thursday" }),
      i18next.t(`form:workMode.day`, { context: "friday" }),
      i18next.t(`form:workMode.day`, { context: "saturday" }),
      i18next.t(`form:workMode.day`, { context: "sunday" })
    ],
    timeText: [
      i18next.t(`form:workMode.time`, { context: "open" }),
      i18next.t(`form:workMode.time`, { context: "close" })
    ]
  };
  let buttonsControls = { prev: "prev", next: "next" };
  $$result.css.add(css);
  return `<div class="main-background svelte-13r43dj"><header class="header"><div class="header__inner"><div class="header__content"><a href="/" class="header__logo" data-svelte-h="svelte-1ifajvw">YOOHIVE</a> <div class="header__language"><select class="header__language-select" name="" id="formLanguages"><option class="header__language-option" value="ru" data-svelte-h="svelte-q343ny">ru </option><option class="header__language-option" value="en" data-svelte-h="svelte-mxm9gq">en </option><option class="header__language-option" value="pl" data-svelte-h="svelte-1u5m578">pl </option><option class="header__language-option" value="by" data-svelte-h="svelte-1yh4y0u">by </option><option class="header__language-option" value="ua" data-svelte-h="svelte-n0z4d0">ua</option></select></div></div></div></header> <main class="page svelte-13r43dj" id="page"><div class="page__content svelte-13r43dj"><div class="message svelte-13r43dj"><input type="checkbox" id="showForm" class="svelte-13r43dj"> <div class="message__inner svelte-13r43dj" id="messageInner" data-svelte-h="svelte-ha3ohn"><h2 id="title" class="message__title svelte-13r43dj">The service is not working right now</h2> <p id="description" class="message__description svelte-13r43dj">We are like bees working to start our hive ju-ju-ju. For now you can register on our
						website to get maximum effect for your business.</p> <label id="message-button" for="showForm" class="message__button button svelte-13r43dj">Registration</label></div> <div class="form svelte-13r43dj" name="myForm" id="myForm" enctype="application/json"><div class="form__inner"><div class="form__header svelte-13r43dj" data-svelte-h="svelte-1hih2y7"><h2 class="form__header-title svelte-13r43dj">Регистрация</h2></div> <div class="progress svelte-13r43dj" data-svelte-h="svelte-17bh4wr"><div class="progress__bar progress__bar--completed svelte-13r43dj"></div> <div class="progress__bar svelte-13r43dj"></div> <div class="progress__bar svelte-13r43dj"></div> <div class="progress__bar svelte-13r43dj"></div></div> <div class="form__content svelte-13r43dj"><form class="form-stage svelte-13r43dj" id="formStep1"><div class="form__contacts svelte-13r43dj" id="formContacts" data-svelte-h="svelte-1y73pof"><div class="form__contacts-item svelte-13r43dj" id="contactCompany"><div class="form__contacts-item-header input-name svelte-13r43dj"><p class="form__contacts-item-text svelte-13r43dj">Название компании/мастера</p> <span class="form__required svelte-13r43dj">*</span></div> <input type="text" class="form__contacts-item-input form__input" placeholder="Company name" required></div> <div class="form__contacts-item svelte-13r43dj" id="contactDescription"><div class="form__contacts-item-header input-name svelte-13r43dj"><p class="form__contacts-item-text svelte-13r43dj">Название компании/мастера</p></div> <textarea class="form__contacts-item-textarea form__input svelte-13r43dj" name="contactDescription" maxlength="221"></textarea></div> <div class="form__contacts-items svelte-13r43dj"><div class="form__contacts-item svelte-13r43dj" id="contactAddress"><div class="form__contacts-item-header svelte-13r43dj"><p class="form__contacts-item-text input-name svelte-13r43dj">Адрес</p> <span class="form__required svelte-13r43dj">*</span></div> <div class="form__contacts-item-main svelte-13r43dj"><input type="text" class="form__contacts-item-input form__input" placeholder="Address" required> <input type="text" class="form__contacts-item-input form__input" placeholder="Address" required></div></div> <div class="form__contacts-item svelte-13r43dj" id="contactPhone"><div class="form__contacts-item-header input-name svelte-13r43dj"><p class="form__contacts-item-text svelte-13r43dj">Телефон</p> <span class="form__required svelte-13r43dj">*</span></div> <input type="tel" class="form__contacts-item-input form__input" required></div></div> <div class="form__contacts-item svelte-13r43dj" id="contactEmail"><div class="form__contacts-item-header input-name svelte-13r43dj"><p class="form__contacts-item-text input-name svelte-13r43dj">Email</p> <span class="form__required svelte-13r43dj">*</span></div> <input type="email" class="form__contacts-item-input form__input" placeholder="Email" required></div></div> ${validate_component(FormControls, "FormControls").$$render($$result, { prev: false, buttonsControls }, {}, {})}</form> <form class="form-stage svelte-13r43dj" id="formStep2"><div class="form-stage__inner svelte-13r43dj">${validate_component(Categories, "Categories").$$render($$result, { categories }, {}, {})} <div class="form__work-like" id="workLike" data-svelte-h="svelte-mgb007"><div class="form__work-like-header svelte-13r43dj"><p class="form__work-like-text section-name svelte-13r43dj">You work like:</p> <span class="form__required svelte-13r43dj">*</span></div> <div class="form__work-like-content svelte-13r43dj"><div class="form__work-like-items svelte-13r43dj"><div class="form__work-like-item svelte-13r43dj"><input class="form__work-like-radio custom-radio" type="radio" name="workLike" id="workLikePhysical" required> <label for="workLikePhysical" class="form__work-like-label svelte-13r43dj"><span class="form__work-like-content-text form__text svelte-13r43dj">Физ. лицо</span></label> <div class="form__work-like-input-container svelte-13r43dj" id="data"><p class="form__work-like-input-text svelte-13r43dj">PESEL</p> <input class="form__work-like-input form__input svelte-13r43dj" type="number" placeholder="Enter 11 numbers" disabled min="10000000000" max="99999999999"></div></div> <div class="form__work-like-item svelte-13r43dj"><input class="form__work-like-radio custom-radio" type="radio" name="workLike" id="workLikeCompany"> <label for="workLikeCompany" class="form__work-like-label svelte-13r43dj"><span class="form__work-like-content-text form__text svelte-13r43dj">Компания</span></label> <div class="form__work-like-input-container svelte-13r43dj" id="data"><p class="form__work-like-input-text svelte-13r43dj">NIP</p> <input class="form__work-like-input form__input svelte-13r43dj" type="number" placeholder="Enter 10 numbers" disabled min="1000000000" max="9999999999"></div></div></div></div></div> <div class="form__network" id="formNetwork" data-svelte-h="svelte-1jp8xna"><p class="form__network-text section-name svelte-13r43dj">Соц. сети</p> <div class="form__network-items svelte-13r43dj" id="networkContainer"><div class="form__network-item svelte-13r43dj"><label class="form__network-item-container svelte-13r43dj"><input class="form__network-item-checkbox custom-checkbox svelte-13r43dj" type="checkbox"> <span class="form__network-item-text form__text svelte-13r43dj">Instagram</span></label> <input type="text" class="form__network-item-input form__input svelte-13r43dj" disabled placeholder="ссылка"></div> <div class="form__network-item svelte-13r43dj"><label class="form__network-item-container svelte-13r43dj"><input class="form__network-item-checkbox custom-checkbox svelte-13r43dj" type="checkbox"> <span class="form__network-item-text form__text svelte-13r43dj">Facebook</span></label> <input type="text" class="form__network-item-input form__input svelte-13r43dj" disabled placeholder="ссылка"></div> <div class="form__network-item svelte-13r43dj"><label class="form__network-item-container svelte-13r43dj"><input class="form__network-item-checkbox custom-checkbox svelte-13r43dj" type="checkbox"> <span class="form__network-item-text form__text svelte-13r43dj">Telegram</span></label> <input type="text" class="form__network-item-input form__input svelte-13r43dj" disabled placeholder="ссылка"></div> <div class="form__network-item svelte-13r43dj"><label class="form__network-item-container svelte-13r43dj"><input class="form__network-item-checkbox custom-checkbox svelte-13r43dj" type="checkbox"> <span class="form__network-item-text form__text svelte-13r43dj">Tiktok</span></label> <input type="text" class="form__network-item-input form__input svelte-13r43dj" disabled placeholder="ссылка"></div> <div class="form__network-item svelte-13r43dj"><label class="form__network-item-container svelte-13r43dj"><input class="form__network-item-checkbox custom-checkbox svelte-13r43dj" type="checkbox"> <span class="form__network-item-text form__text svelte-13r43dj">Linkedin</span></label> <input type="text" class="form__network-item-input form__input svelte-13r43dj" disabled placeholder="ссылка"></div></div></div></div> ${validate_component(FormControls, "FormControls").$$render($$result, { buttonsControls }, {}, {})}</form> <form class="form-stage svelte-13r43dj" id="formStep3"><div class="form__work-mode work-mode svelte-13r43dj" id="formWorkMode"><div class="work-mode__header"><p class="work-mode__header-name section name svelte-13r43dj">${escape(timesData.title)}</p></div> <div class="form__work-mode-items svelte-13r43dj">${each(timesData.days, (day) => {
    return `${validate_component(WorkMoreItem, "WorkMoreItem").$$render($$result, { day, text: timesData.timeText }, {}, {})}`;
  })}</div></div> ${validate_component(FormControls, "FormControls").$$render($$result, { buttonsControls }, {}, {})}</form> <form class="form-stage svelte-13r43dj" id="formStep4"><div class="form-stage__inner svelte-13r43dj"><div class="form__calendar" id="formLinkCalendar"><p class="form__calendar-text section-name svelte-13r43dj" data-svelte-h="svelte-msvgbc">Link to Google calendar</p> <input id="inputLinkCalendar" type="url" class="form__calendar-input form__input" placeholder="link to Google calendar"></div> <div class="form__languages-container" id="communicationLanguages" data-svelte-h="svelte-1050ksw"><p class="form__languages-text section-name svelte-13r43dj">Языки комуникациии</p> <div class="form__languages-items svelte-13r43dj"><label class="form__languages-item svelte-13r43dj"><input type="checkbox" class="form__languages-item-checkbox custom-checkbox svelte-13r43dj"> <span class="form__languages-item-text form__text svelte-13r43dj">Polski</span></label> <label class="form__languages-item svelte-13r43dj"><input type="checkbox" class="form__languages-item-checkbox custom-checkbox svelte-13r43dj"> <span class="form__languages-item-text form__text svelte-13r43dj">Беларуская</span></label> <label class="form__languages-item svelte-13r43dj"><input type="checkbox" class="form__languages-item-checkbox custom-checkbox svelte-13r43dj"> <span class="form__languages-item-text form__text svelte-13r43dj">Українська</span></label> <label class="form__languages-item svelte-13r43dj"><input type="checkbox" class="form__languages-item-checkbox custom-checkbox svelte-13r43dj"> <span class="form__languages-item-text form__text svelte-13r43dj">Русский</span></label> <label class="form__languages-item svelte-13r43dj"><input type="checkbox" class="form__languages-item-checkbox custom-checkbox svelte-13r43dj"> <span class="form__languages-item-text form__text svelte-13r43dj">English</span></label> <div class="form__languages-another svelte-13r43dj"><label class="form__languages-item-another svelte-13r43dj"><input type="checkbox" class="form__languages-item-another-checkbox form__languages-item-checkbox custom-checkbox svelte-13r43dj"> <span class="form__languages-item-text form__text form__languages-item-another-text svelte-13r43dj">Another</span></label> <input class="form__languages-item-another-input form__input" type="text" disabled placeholder="Enter other languages"></div></div></div> <div class="form__preferences" id="formSurvey" data-svelte-h="svelte-1vn74oe"><div class="form__preferences-header svelte-13r43dj"><p class="form__preferences-text form__text svelte-13r43dj">Select which category matches your company</p> <p class="form__preferences-text form__text svelte-13r43dj"></p></div> <div class="form__preferences-items svelte-13r43dj"><label class="form__preferences-item svelte-13r43dj"><input class="form__preferences-item-checkbox custom-checkbox" type="checkbox" name="preferences" value="ecofriendly"> <span class="form__preferences-item-text form__text svelte-13r43dj">ecofriendly</span></label> <label class="form__preferences-item svelte-13r43dj"><input class="form__preferences-item-checkbox custom-checkbox" type="checkbox" name="preferences" value="ecofriendly"> <span class="form__preferences-item-text form__text svelte-13r43dj">petfriendly</span></label> <label class="form__preferences-item svelte-13r43dj"><input class="form__preferences-item-checkbox custom-checkbox" type="checkbox" name="preferences" value="ecofriendly"> <span class="form__preferences-item-text form__text svelte-13r43dj">childefriendly</span></label> <label class="form__preferences-item svelte-13r43dj"><input class="form__preferences-item-checkbox custom-checkbox" type="checkbox" name="preferences" value="ecofriendly"> <span class="form__preferences-item-text form__text svelte-13r43dj">inclusive</span></label></div></div> <label class="form__confirmation svelte-13r43dj" id="formConfirmation" data-svelte-h="svelte-1x1y7c2"><input class="form__confirmation-checkbox custom-checkbox" type="checkbox" required> <div class="form__confirmation-text-container"><span class="form__confirmation-text svelte-13r43dj">I agree to the publication of the provided data on YOOHIVE.COM resources</span> <span class="form__required svelte-13r43dj">*</span> <p class="form__confirmation-text svelte-13r43dj"></p></div></label></div> <div class="message-send svelte-13r43dj" id="formCompleted"><div class="message-send__inner svelte-13r43dj"><div class="message-send__image svelte-13r43dj" data-svelte-h="svelte-5fsgpl"><img src="/img/mark.webp" alt="" class="svelte-13r43dj"></div> <p class="message-send__text svelte-13r43dj">${escape(formMessage)}</p></div></div> <div class="form__button-container svelte-13r43dj"><button class="${["button svelte-13r43dj", ""].join(" ").trim()}" type="submit" id="buttonSend" data-svelte-h="svelte-1je311w">Registration</button> <p class="${["form__message svelte-13r43dj", ""].join(" ").trim()}">${escape(formMessage)}</p></div> ${validate_component(FormControls, "FormControls").$$render(
    $$result,
    {
      prev: controlsButton,
      next: false,
      buttonsControls
    },
    {},
    {}
  )}</form></div></div></div></div></div></main> <footer class="footer" data-svelte-h="svelte-vltwvn"><div class="footer__inner"><p class="footer__text">© 2024 YOOHIVE All Rights Reserved</p></div></footer> </div>`;
});
export {
  Page as default
};
