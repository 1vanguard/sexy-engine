import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

let mainMenu = [
  { id: 1, alias: "", text: "Главная", sr_text: "Home page" },
  { id: 2, alias: "portfolio", text: "Портфолио", sr_text: "Home page" },
  { id: 3, alias: "technologies", text: "Технологии", sr_text: "Technologies" },
  { id: 4, alias: "about", text: "Обо мне", sr_text: "About" },
]

let technologies = [
  {
    id: 1,
    name: "HTML",
    desc: "HTML — стандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML. Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства.",
    img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/80px-HTML5_logo_and_wordmark.svg.png"
  },
  {
    id: 2,
    name: "CSS",
    desc: "CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.",
    img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/57px-CSS3_logo_and_wordmark.svg.png"
  },
  {
    id: 3,
    name: "JavaScript",
    desc: "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.",
    img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/80px-Unofficial_JavaScript_logo_2.svg.png"
  },
  {
    id: 4,
    name: "PHP",
    desc: "PHP — скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений. В настоящее время поддерживается подавляющим большинством хостинг-провайдеров и является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов.",
    img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/149px-PHP-logo.svg.png"
  },
  {
    id: 5,
    name: "Joomla",
    desc: "Joomla! — система управления содержимым, написанная на языках PHP и JavaScript, использующая в качестве хранилища базы данных СУБД MySQL или другие стандартные промышленные реляционные СУБД. Является свободным программным обеспечением, распространяемым под лицензией GNU GPL.",
    img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Joomla%21-Logo.svg/220px-Joomla%21-Logo.svg.png"
  },
  {
    id: 6,
    name: "WordPress",
    desc: "WordPress — система управления содержимым сайта с открытым исходным кодом; написана на PHP; сервер базы данных — MySQL; выпущена под лицензией GNU GPL версии 2. Сфера применения — от блогов до достаточно сложных новостных ресурсов.",
    img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/WordPress_logo.svg/220px-WordPress_logo.svg.png"
  },
  {
    id: 7,
    name: "React",
    desc: "React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.",
    img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png"
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App mainMenu={mainMenu} technologies={technologies} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
