let rerender = () => {
    console.log("State updated")
}

let portfolio = [
    {
        id: 1,
        title: "Hotel Russ",
        desc: "РУСЬ – комфортабельная и недорогая гостиница в Петербурге!",
        link: "https://hotelruss.spb.ru",
        imageSrc: "https://hotelruss.spb.ru/images/logo.png"
    },
    {
        id: 2,
        title: "Accanto",
        desc: "Accanto Invest Group - Мы строим будущее",
        link: "https://accantoinvestgroup.com/",
        imageSrc: "https://accantoinvestgroup.com/images/logo.png"
    },
    {
        id: 3,
        title: "Фарту-Масти",
        desc: "Фарту-Масти - бесплатные прогнозы для братвы",
        link: "https://fartumasti.ru",
        imageSrc: "https://fartumasti.ru/images/fartumasti_cover_md.png"
    }
]

let technologies = [
    {
        id: 1,
        name: "HTML",
        desc: "HTML — стандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML. Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства.",
        img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/80px-HTML5_logo_and_wordmark.svg.png",
        icon_type: "fab",
        icon: "html5",
        level: 8
    },
    {
        id: 2,
        name: "CSS",
        desc: "CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.",
        img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/57px-CSS3_logo_and_wordmark.svg.png",
        icon_type: "fab",
        icon: "css3-alt",
        level: 8
    },
    {
        id: 3,
        name: "JavaScript",
        desc: "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.",
        img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/80px-Unofficial_JavaScript_logo_2.svg.png",
        icon_type: "fab",
        icon: "js",
        level: 4
    },
    {
        id: 4,
        name: "PHP",
        desc: "PHP — скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений. В настоящее время поддерживается подавляющим большинством хостинг-провайдеров и является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов.",
        img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/149px-PHP-logo.svg.png",
        icon_type: "fab",
        icon: "php",
        level: 2
    },
    {
        id: 5,
        name: "Joomla",
        desc: "Joomla! — система управления содержимым, написанная на языках PHP и JavaScript, использующая в качестве хранилища базы данных СУБД MySQL или другие стандартные промышленные реляционные СУБД. Является свободным программным обеспечением, распространяемым под лицензией GNU GPL.",
        img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Joomla%21-Logo.svg/220px-Joomla%21-Logo.svg.png",
        icon_type: "fab",
        icon: "joomla",
        level: 7
    },
    {
        id: 6,
        name: "WordPress",
        desc: "WordPress — система управления содержимым сайта с открытым исходным кодом; написана на PHP; сервер базы данных — MySQL; выпущена под лицензией GNU GPL версии 2. Сфера применения — от блогов до достаточно сложных новостных ресурсов.",
        img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/WordPress_logo.svg/220px-WordPress_logo.svg.png",
        icon_type: "fab",
        icon: "wordpress",
        level: 5
    },
    {
        id: 7,
        name: "React",
        desc: "React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.",
        img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png",
        icon_type: "fab",
        icon: "react",
        level: "..."
    }
]

let state = {
    menus: {
        /* mainMenu: [
            { id: 1, alias: "", text: "Главная", sr_text: "Home page" },
            {id: 2, alias: "portfolio", text: "Портфолио", sr_text: "Portfolio", icon_type: "fas", icon: "briefcase"},
            {id: 3, alias: "technologies", text: "Технологии", sr_text: "Technologies", icon_type: "fas", icon: "cogs"},
            {id: 4, alias: "about", text: "Обо мне", sr_text: "About", icon_type: "fas", icon: "address-card"}
        ] */
    },
    pages: [
        {id: 1, alias: "", menu_text: "Главная", sr_text: "Home page", icon_type: "fas", icon: "home", header: "Sexy-Engine", data: "Сайт создан при помощи технологий React, JavaScript, HTML, CSS и многих других"},
        {id: 2, alias: "portfolio", menu_text: "Портфолио", sr_text: "Portfolio", icon_type: "fas", icon: "briefcase", header: "\"Это Мами сама своими чёрными ручками сделала..\"", data: portfolio},
        {id: 3, alias: "technologies", menu_text: "Технологии", sr_text: "Technologies", icon_type: "fas", icon: "cogs", header: "Могу, умею, практикую", data: technologies},
        {id: 4, alias: "about", menu_text: "Обо мне", sr_text: "About", icon_type: "fas", icon: "address-card", header: "Немного о себе любимом", data: "Молодой крАкодил завёл себе прекрасную, любящую жену."},
        {id: 5, alias: "contacts", menu_text: "Контакты", sr_text: "Contacts", icon_type: "fas", icon: "user-edit", header: "Всегда у аппарата", data: "Перечень контактов и форма обратной связи"}
    ],
    messages: [
        {id:1, author: "The author", text: "Text text text"}
    ],
    newMessageText: "Введите сообщение",
    authorNameText: "Введите Ваше имя",
    languageConstants: [
        {yourNameText: "Ваше имя"}
    ]
}

export const addMessage = () => {
    let newMessage = {
        id: 2,
        author: state.authorNameText,
        text: state.newMessageText
    }
    state.messages.push(newMessage)
    state.authorNameText = ''
    state.newMessageText = ''
    rerender(state)
}
export const updateMessageText = (author, text) => {
    state.authorNameText = author
    state.newMessageText = text
    rerender(state)
}

export const subscriber = (observer) => {
    rerender = observer
}

export default state;