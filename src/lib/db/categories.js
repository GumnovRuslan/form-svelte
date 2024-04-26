let categories = {
    title: 'Категории',
    subcategory_default: 'Выберите подкатегорию',
    categories: [
        {
            name: 'Красота',
            value: 'beauty',
            subcategories: [
                    {
                        name:'Волосы',
                        value: 'hair'
                    },
                    {
                        name:'Парикмахер',
                        value: 'barber'
                    },
                    {
                        name:'Ногти',
                        value: 'nail'
                    },
                    {
                        name:'Брови',
                        value: 'Brows'
                    },
                    {
                        name:'Массаж',
                        value: 'massage'
                    },
                    {
                        name:'Макияж',
                        value: 'makeup'
                    },
                    {
                        name:'Спа',
                        value: 'Spa'
                    }
                ]
        },
        {
            name: 'Здоровье',
            value: 'health',
            subcategories: [
                    {
                        name:'Стоматология',
                        value: 'Dentistry'
                    },
                    {
                        name:'Офтальмология',
                        value: 'Ophthalmology'
                    },
                    {
                        name:'Семейный доктор',
                        value: 'Family doctor'
                    },
                    {
                        name:'NFZ',
                        value: 'NFZ'
                    },
                    {
                        name:'Профильные специалисты',
                        value: 'Specialists'
                    },
                    {
                        name:'Физиотерапия',
                        value: 'Physiotherapy'
                    },
                    {
                        name:'Нетрадиционная медицина',
                        value: 'Alternative medicine'
                    }
                ]
        },
        {
            name: 'Спорт',
            value: 'sport',
            subcategories: [
                    {
                        name:'тренажерные залы',
                        value: "GYM's"
                    },
                    {
                        name:'бассейны',
                        value: 'swimming pools'
                    },
                    {
                        name:'фитнес',
                        value: 'fitness'
                    },
                    {
                        name:'танцы',
                        value: 'dancing'
                    },
                    {
                        name:'йога',
                        value: 'yoga'
                    },
                    {
                        name:'пилатес',
                        value: 'Pilates'
                    },
                    {
                        name:'волейбол',
                        value: 'volleyball'
                    },
                    {
                        name:'футбол',
                        value: 'football'
                    },
                    {
                        name:'теннис',
                        value: 'tennis'
                    },
                    {
                        name:'сквош',
                        value: 'squash'
                    },
                    {
                        name:'бокс',
                        value: 'boxing'
                    },
                    {
                        name:'единоборства',
                        value: 'martial arts'
                    },
                    {
                        name:'велоспорт',
                        value: 'cycling'
                    },
                    {
                        name:'зимние виды спорта',
                        value: 'winter sports'
                    },
                ]
        },
        {
            name: 'Образование',
            value: 'education',
            subcategories: [
                    {
                        name:'школы',
                        value: "schools"
                    },
                    {
                        name:'школы полициальные',
                        value: 'police schools'
                    },
                    {
                        name:'колледжи',
                        value: 'colleges'
                    },
                    {
                        name:'университеты',
                        value: 'universities'
                    },
                    {
                        name:'курсы',
                        value: 'courses'
                    },
                    {
                        name:'репетиторы',
                        value: 'tutors'
                    },
                ]
        },
        {
            name: 'Развлечение',
            value: 'entertainment',
            subcategories: [
                    {
                        name:'выставки',
                        value: "Exhibitions"
                    },
                    {
                        name:'музеи',
                        value: 'museums'
                    },
                    {
                        name:'театры',
                        value: 'theaters'
                    },
                    {
                        name:'концертные залы',
                        value: 'concert halls'
                    },
                    {
                        name:'кафе',
                        value: 'cafe'
                    },
                    {
                        name:'клубы',
                        value: 'clubs'
                    },
                    {
                        name:'рестораны',
                        value: 'restaurants'
                    },
                ]
        },
        {
            name: 'Дети',
            value: 'children',
            subcategories: [
                    {
                        name:'детские сады',
                        value: "kindergartens"
                    },
                    {
                        name:'школы',
                        value: 'schools'
                    },
                    {
                        name:'няни',
                        value: 'nannies'
                    },
                    {
                        name:'детские развлекательные центры',
                        value: 'entertainment centers'
                    },
                    {
                        name:'цирк',
                        value: 'circus'
                    },
                    {
                        name:'аквапарк',
                        value: 'aquapark'
                    },
                    {
                        name:'кружки',
                        value: 'groups'
                    },
                ]
        },
        {
            name: 'Дом',
            value: 'house',
            subcategories: [
                    {
                        name:'клининг',
                        value: "cleaning"
                    },
                    {
                        name:'сантехника',
                        value: 'plumbing'
                    },
                    {
                        name:'электрика',
                        value: 'electrician'
                    },
                    {
                        name:'отопительная система',
                        value: 'heating system'
                    },
                    {
                        name:'ремонт',
                        value: 'repair'
                    },
                    {
                        name:'сборка мебели',
                        value: 'Furniture assembly'
                    },
                ]
        },
        {
            name: 'Питомцы',
            value: 'pets',
            subcategories: [
                    {
                        name:'ветеринарные клиники',
                        value: "veterinary clinics"
                    },
                    {
                        name:'салоны красоты для домашних животных',
                        value: 'pet beauty salons'
                    },
                    {
                        name:'отели для животных',
                        value: 'hotels for animals'
                    },
                    {
                        name:'выгул собак',
                        value: 'dog walking'
                    },
                ]
        },
        {
            name: 'Транспорт',
            value: 'transport',
            subcategories: [
                    {
                        name:'СТО',
                        value: "car service"
                    },
                    {
                        name:'пассажирские перевозки',
                        value: 'Passenger Transportation'
                    },
                    {
                        name:'грузовые перевозки',
                        value: 'freight transportation'
                    },
                    {
                        name:'аренда автомобилей',
                        value: 'Car rent'
                    },
                ]
        },
        {
            name: 'Услуги для бизнеса',
            value: 'business',
            subcategories: [
                    {
                        name:'регистрация бизнеса',
                        value: "business registration"
                    },
                    {
                        name:'бизнес-инкубаторы',
                        value: 'business incubators'
                    },
                    {
                        name:'бухгалтерские услуги',
                        value: 'accounting services'
                    },
                    {
                        name:'юридические услуги для бизнеса',
                        value: 'legal services for business'
                    },
                    {
                        name:'подбор персонала',
                        value: 'personnel selection'
                    },
                ]
        },
        {
            name: 'Юридические услуги',
            value: 'legal services',
            subcategories: [
                    {
                        name:'легализация',
                        value: "legalization"
                    },
                    {
                        name:'нотариусы',
                        value: 'notaries'
                    },
                    {
                        name:'присяжные переводчики',
                        value: 'sworn translators'
                    },
                    {
                        name:'юридические услуги для бизнеса',
                        value: 'legal services for business'
                    },
                    {
                        name:'адвокаты',
                        value: 'lawyers'
                    },
                ]
        },
    ],
}

export default categories
