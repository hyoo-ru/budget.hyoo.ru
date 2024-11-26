# Private Budget

> Веб-приложение для ведения личного бюджета.

# Особенности

- 🔒 **Безопасность**: Все данные хранятся в зашифрованном виде и подписаны цифровой подписью.
- ✈️ **Оффлайн**: Полная работоспособность даже на запись без сети.
- 🫂 **Коллаборативность**: Шаринг доступа с другими пользователями для одновременного редактирования.
- 🚀 **Реактивность**: Мгновенная синхронизация между програмными слоями и даже девайсами.
- 🔬 **Прогрессивность**: Используются самые современные технологии.
- 🪆 **Импортозамещение**: Ни строчки иноземного кода в зависимостях.

# Функциональность

- Ведение множества бюджетов.
- Классификация транзакций по категориям.
- Общая сводка по фонду и категории.
- Визуальное сравнение трат по категориям.
- Экспорт данных в виде таблицы.
- Предоставление доступа другим пользователям.

# Характеристики

- **Опрятность**: единый лаконичный дизайн.
- **Многоязычность**: английский и русский.
- **Темизация**: тёмная и светлая.
- **Адаптивность**: буклетный дизайн даёт единый UX.
- **Искренность**: автоматические индикаторы ожидания и сообщения об ошибках.
- **Непрерывная доставка**: автоматические сборка, тесты и деплой.

# Технологии

- **MAM** - фрактальная verless экосистема кода.
- **$mol** - изоморфный web-фреймворк с широким набором батареек в комплекте.
- **CRUS-DB** - децентрализованная безопасная неубиваемая база данных реального времени.
- **TypeScript** - статически типизированный JavaScript.

# Возможные улучшения

- График посуточных трат за период.
- Фильтрация по периодам: месяц, квартал, год.
- Комментарии в коде.
- Описание архитектуры.
- Компонентные тесты.
- Проверка с голосовым агентом.

# Инструкции

## Сборка под ключ

В пустой директории:

	npm exec mam@latest hyoo/budget/app

Содержимое директории `hyoo/budget/app/-` можно выложить на любой статический сервер.

## Поднятие окружения разработчика

В пустой директори:

	npm exec mam@latest

В браузере открываем `http://localhost:9080/hyoo/budget/app/-/test.html`

# Соответствие ТЗ

> Данные о доходах, расходах и категориях должны быть загружены с сервера через RESTful API.

RESTful API не используется, так как он недостаточно современен и совсем не годится для коллаборативных рилтайм приложений.

> Реализовать функции для отправки новых данных, а также обновления и удаления существующих записей на сервере.

С нашей СУБД эти функции не требуются, так как БД синхронизируется между клиентами и серверами автоматически в фоне.

> Интерфейс должен быть интуитивно понятным и адаптированным под различные устройства (мобильные, планшеты, десктопы).

Интуитивной понятности не сущетвует. Есть привычки и у всех они разные. Выбор буклетного дизайна ориентирован на повседневное удобство и формирование новых привычек, а не потакание старым не удобным интерфейсам, требующих много ресурсов для разработки.

> HTML и CSS: Использование современных стандартов для создания разметки и стилей.

В современных условиях компонентной разработки использование HTML и CSS является устаревшим. Мы используем статически типизированные языки для описания стилей и композиции компонент.

> Frontend фреймворки: Участникам рекомендуется использовать один из популярных фреймворков, таких как React, Vue.js или Angular.

Мы не любим писать говнокод, поэтому используем не популярные, а технически обоснованные решения.

> Интеграция с API: Необходимо использовать mock-серверы (например, JSON Server) или localStorage/IndexDB для симуляции взаимодействия с сервером. Данные о доходах, расходах и категориях должны быть получены и сохранены через RESTful API симуляцию.

Наша СУБД работает даже без серверов. В браузере она хранит данные в IndexedDB.

> API взаимодействие: Использование fetch или библиотеки для работы с HTTP-запросами (например, Axios) для получения, добавления, редактирования и удаления данных с mock-сервера или из localStorage/IndexDB.

Наша СУБД предоставляет высокоуровневое реактивное статически типизированное API, не требующее ручкой работы с сетевыми запросами.

> Проверку обязательных полей (например, нельзя оставить сумму транзакции пустой).

Блокировка сохранения до полного заполнения не совместимо с совместным редактированием с нескольких девайсов. Кроме того для разных процессов может быть необходима разная степень заполненности (например, для баланса даты не нужны, а для графиков по дням - нужны). Обычно дефолтного состояния достаточно. А где не достаточно - там и стоит это проверять (например, игнорировать недозаполненные сущности).

> суммы не должны быть отрицательными

Логично и удобно отрицательным значением задаватьь расходы, а положительным доходы.

> Обработка ошибок валидации: Пользователь должен получать понятные и информативные сообщения об ошибках, если данные не прошли валидацию. Сообщения об ошибках должны быть видимы в контексте соответствующих полей ввода.

Мы просто не допускаем некорректный ввод, поэтому наши пользователи никогда не ошибаются при вводе.

> Redux: Для глобального состояния приложения, когда требуется управление сложными данными, которые должны быть доступны во многих компонентах.

Redux имеет [следующие проблемы](https://youtu.be/FODOkNLJdiQ):

- Много бойлерплейта с кишками наружу.
- Врут про undo/redo.
- Утечки памяти by design.
- Тормоза на больших проектах.
- Сложно переиспользовать свой код.
- Требует кучи тяжёлых костылей.

Поэтому мы используем свой мелкозернистый реактивный менеджер состояний [$mol_wire](https://mol.hyoo.ru/#!section=docs/=yj0h42_ixzv4p).

> React Query: Для работы с асинхронными данными и кэшированием запросов к API, минимизируя количество повторных вызовов.	React Hook Form: Для управления и валидации форм, с акцентом на производительность и удобство работы с большими объемами данных.

React и его экосистема имеет [следующие проблемы](https://youtu.be/JRmKxTLdNo8):

- Не умеет в реактивность.
- Ререндеры по любому чиху.
- Смешивает инициализацию и обновление, логику и шаблон.
- Путается между пересозданиями и перемещением.
- Все компоненты либо неуправляемые, либо неполноценные, либо ожиревшие.
- Кривая эмуляция объектов через функции  с хуками.
- Не типизируемый VDOM на выходе.
- Разобщённая экосистема со слабой поддержкой TS.
- Горы бойлерплейта по мере приближения к проду.

Поэтому мы используем свой реактивный микромодульный фреймворк [$mol](https://mol.hyoo.ru/) в комплекте с которым идут все необходимые для создания веб-приложений модули: от сетевых запросов и серверов, до компонент рисования графиков и 3D графики.

> Feature Sliced Design: Применение архитектурного подхода для разделения приложения на логические слои (features, entities, shared и т.д.). Это помогает упростить поддержку, тестирование и масштабирование проекта.

FSD имеет [следующие проблемы](https://youtu.be/tNx05dfFHRU):

- Распыление каждой бизнес-фичи по всему проекту.
- Нечёткие сомнительные правила.
- Тонны бойерплейта на синглтонах.
- Ограниченная масштабируемость и гибкость.

Поэтому мы используем свой фрактальный подход [МАМ](https://mol.hyoo.ru/#!section=docs/=icaxzk_7m3n3b), позволяющий писать лаконичный, но легко масштабируемый на множество команд и репозиториев код. 

> Полнота тестирования: Оценивается, насколько хорошо участник протестировал свой код. Это включает в себя написание юнит-тестов, проверяющих основные функции и компоненты интерфейса, а также интеграционные тесты для проверки взаимодействия компонентов между собой и с сервером.

Модульные тесты не слишком полезны. Более прогрессивно использование [фрактального тестирования](https://page.hyoo.ru/#!=2jggfw_at1ily), основанного на компонентных тестах.
