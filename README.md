# SAGYZ
Блокчейн для создания полностью прозрачной цепочки поставок, где каждый участник (от производителя до конечного потребителя) может отслеживать происхождение, перемещение и состояние товаров в реальном времени.

## Использовано в разработке
* Next.js - для создания мультистраничного сайта
* Semantic-ui-react, react - для создания переносимых интерфейсов, который поможет повторно использовать элементы UI в своих проектах
* Solidity (blockchain, web3) - для создания смарт-контрактов в web3

## Установка
Клонируйте репозиторий и запустите команду `npm install`, чтобы установить все нужные модули
После запустите команду `npm run dev` чтобы запустить сайт.

**ВАЖНО** для взаимодействия с контрактами в сайте - иметь скачанным metamask ([скачать](https://chromewebstore.google.com/detail/nkbihfbeogaeaoehlefnkodbefgpgknn)) в браузере и иметь некоторое количество тестовой валюты (sepoliaETH). Для того, чтобы ее получить введите адрес своего кошелька на [сайте](https://www.infura.io/faucet/sepolia)

[**Доказательство нахождения контракта на блокчейне ethereum'а**](https://sepolia.etherscan.io/address/0xcd65FC3E6CB920c1394686eE997Af71D8CeF4aea)

## Скриншоты сайта
Главная страница
![home page](img/home.png)


Страница создания поставки
![supplycreate](img/supplycreate.png)


Страница данных поставки
![supply](img/supply.png)


Страница запросов вывода денег
![requests](img/requests.png)


Страница создания запроса
![(requestcreate](img/requestcreate.png)