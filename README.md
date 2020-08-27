Demo https://github.com/vlzkonopatov/sberTest

Требования к задаче:

1. Первый компонент — текстовое поле с возможностью автоподсказки (autosuggest), которое работает следующим образом: при поиске компонент загружает совпадения подстроки и выводит списком для выбора. При выборе значения оно подставляется в текстовое поле. Компонент должен уметь обработать несколько URL для поиска подстроки. Если необходимое количество значений не найдено в ответе первого метода, то следует обращение ко второму и так далее. Количество требуемых значении и количество URL-адресов определите в виде конфигурационных значений. Методы обращения с сервером используют формат JSON(P) в качестве обмена данными.

2. Второй компонент — поле ввода телефонного номера. Валидацию, формат и требования к нему придумайте сами.

3. Под компонентами находятся кнопки сохранения и очистки формы. Кнопка сохранения записывает данные из компонент в локальное хранилище браузера (localStorage), после сохранения в хранилище, форма также отправляет данные для сохранения значений на сервер. Кнопка очистки формы удаляет данные из localStorage и очищает поля формы.

4. После перезагрузки страницы форма должна инициализироваться значениями из локального хранилища (если они там существуют).

5. Задание должно быть доступно на GitHub или Bitbucket.

Просьба указать сколько ушло времени на эту работу.
