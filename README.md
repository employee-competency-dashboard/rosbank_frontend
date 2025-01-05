# Frontend для ХАКАТОН+ Росбанк

Дашборд аналитики по навыкам в команде, который позволит руководителю увидеть состояние навыков в команде и поможет в ее развитии.

Даты проведения: 4 сентября - 16 октября 2024 года.

Организатор: АНО ДПО «Образовательные технологии Яндекса»

Соорганизатор: ПАО РОСБАНК

[Подробная информация о хакатоне](https://norikov.notion.site/ec7ad9d3121d49d19354777c02454541)

### Опубликованное приложение

[Ссылка на сайт](https://maxrmnk.ru/)

[Фронтенд приложения](https://github.com/employee-competency-dashboard/rosbank_frontend)

[Бэкенд приложения](https://github.com/employee-competency-dashboard/rosbank_backend)

[Макет в Figma](https://www.figma.com/design/a6iIJ0lx8hw9e2FC66UoCi/%D0%A0%D0%BE%D1%81%D0%B1%D0%B0%D0%BD%D0%BA_%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD?node-id=279-7680&node-type=canvas&t=PJmbfuKvFB80lSea-0)

## Команда #6. Состав

- [Никита](https://t.me/nikfromrus) - Product-менеджер
- [Анна](https://t.me/yudina_a) - Дизайнер
- [Мария](https://t.me/madam_entu) - Дизайнер
- [Борис](https://t.me/barudenko) - DA (аналитик данных)
- [Макс](https://t.me/MaxRMNK) - Frontend-разработчик
- [Адель](https://t.me/AIG3c) - Backend-разработчик
- [Сергей](https://t.me/serhiihabl) - Backend-разработчик
- [Дмитрий](https://t.me/d_strelen) - SA (системный аналитик)
- [Басанг](https://t.me/basang13) - BA (бизнес-аналитик)

## Начало работы

### Установка

Клонировать проект и перейти в каталог `/rosbank_hackaton_frontend`

```bash
git clone git@github.com:MaxRMNK/rosbank_hackaton_frontend.git
cd rosbank_hackaton_frontend
```

Установить проект и его зависимости

```bash
npm install
```

### Запуск в режиме разработки

После любого сохранения исходного кода в приложении страница в браузере будет автоматически обновляться.

```bash
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть результат.

`Ctrl + C` - выход из режима разработки.

### Сборка и запуск готового проекта

- Сборка проекта. После выполнения команды в директории `/dist` генерируется оптимизированный проект.

  ```bash
  npm run build
  ```

- Запуск собранного проекта.

  ```bash
  npm run start
  # or
  npm start
  ```

  Открыть [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть результат.

  `Ctrl + C` - остановка локального сервера.

## Технологии

[![Next][nextjs-domain]](https://nextjs.org/)
[![TypeScript][shields-typescript-domain]](https://www.typescriptlang.org/)
[![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=ffffff)](https://sass-lang.com/)
[![Feature-Sliced Design][shields-fsd-domain]](https://feature-sliced.design/)

- [class.js](https://www.npmjs.com/package/classes) - наследование классов
- [Classnames](https://www.npmjs.com/package/classnames) - динамическое управление классами
- [ESLint](https://www.npmjs.com/package/eslint) — линтер, поиск проблемных паттернов проектирования и кода
- [Prettier](https://www.npmjs.com/package/prettier) — форматирование кода
- [Husky](https://www.npmjs.com/package/husky) - проверка кода и исправление ошибок

[nextjs-domain]: https://img.shields.io/badge/Next.js_v.14-000000?style=for-the-badge&logo=nextdotjs&logoColor=ffffff
[shields-fsd-domain]: https://img.shields.io/badge/Feature--Sliced-Design?style=for-the-badge&color=F0F0F0&labelColor=262224&logoWidth=10&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAALFAAACxQGJ1n/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABISURBVHgB7dKxCQAgDETR0w2cws0cys2cwhEUBbsggikCuVekDHwSQFlYo7Q+8KnmtHdFWMdk2cl5wSsbxGSZw8dm8pX9ZHUTMBUgGU2F718AAAAASUVORK5CYII=
[shields-typescript-domain]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white

- HTML5
- Sass / SCSS
- TypeScript v.5
- React v.18
- Next.js v.14

Структура веб-приложения основана на архитектурном подходе **Feature-Sliced Design (FSD)**, который направлен на облегчение сопровождения приложения, его тестирования и масштабирования.

### Ссылки на фреймворки, библиотеки, иконки и шрифты

- [class.js](https://www.npmjs.com/package/classes) - наследование классов
- [Classnames](https://www.npmjs.com/package/classnames) - динамическое управление классами
- [ESLint](https://www.npmjs.com/package/eslint) — линтер, поиск проблемных паттернов проектирования и кода
- [Prettier](https://www.npmjs.com/package/prettier) — форматирование кода
- [Husky](https://www.npmjs.com/package/husky) - проверка кода и исправление ошибок
