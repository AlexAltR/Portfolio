const { Console } = require('console'); // 
const osmosis = require('osmosis');
const colors = require('colors');
const {Client} = require('pg');
const telegramApi = require('node-telegram-bot-api'); // Подключаем необходимый пакет для взаимодействия с БОT API
const {gameOptions, againOptions} = require('./options');
const { data } = require('osmosis');

var courseBD; // Курс ЦБ в БД


const token = ''; // Токен бота

const bot = new telegramApi(token, {polling: true}) // Создаем объект bot

const chats = {};

const start = () => { // Функция старта бота
    bot.setMyCommands([ // Задаем команды бота
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Получить информацию о пользователе'},
        {command: '/game', description: 'Поиграть в игру'},
        {command: '/course_usd', description: 'Узнать курс доллара в Бийске'},
        {command: '/course_euro', description: 'Узнать курс евро в Бийске'},
        {command: '/course_yuan', description: 'Узнать курс юаня в Бийске'},
        {command: '/bd', description: 'Эксперимент с БД'},
    ]);
    
    const startGame = async (chatId) => {
        await bot.sendMessage(chatId, 'Сейчас я загадаю тебе цифру от 0 до 9, ты должен ее угадать') // Отправляем сообщение 1 параметр-ID чата, 2 параметр - сообщение
        const randonNumber = Math.floor(Math.random() * 10); // Задаем рандомное число от 0 до 9
        chats[chatId] = randonNumber; // Созадем в объекте chats свойство IDчата и присваиваем ему значение загаданного числа.
        return bot.sendMessage(chatId, `Отгадывай число`, gameOptions);// Отправляем сообщение 1 параметр-ID чата, 2 параметр - сообщение, 3 параметр - объект с кнопками
    }
    
    bot.on ('message', async msg => { //Слушатель события на обработку полученных сообщений
        const text = msg.text; // Текст, который отправил пользователь
        const chatId = msg.chat.id; // ID чата
        if (text === '/start'){ // Обработчик сообщения от пользователя
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.jpg')
            return bot.sendMessage(chatId, `Добро пожаловать на канал BTIpracticeAP`);    
        }
        else if(text === '/info'){
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
        }
        else if(text === '/game'){
            return startGame(chatId);
        }
        else if(text === '/course_usd'){

            //Работа с БД
            const db = new Client({ // Создание объекта БД с необходимыми свойствами для подключения
                user: 'postgres',
                host: 'localhost',
                database: 'botDB',
                password: '    ',
                port: 5432
            });

            db.connect(); // Подключение к БД

            osmosis
                .get('www.biysk.bankiros.ru/currency/usd')
                .find('.non-standard')
                .set({ 'Sale': ['tr[3] > .currency-value[1], tr[3] > .currency-value[2], .subtitle > th[4], tr[3] > .currency-value[3] > .conv-val']})
                .data(function (listinng) {
                    for (key in listinng) {
                        let nameSale = key;
                        let price = listinng[key];

                        let сourseDateBD = price[0];// Дата запроса дд.мм.гггг.
                        let pricePurchase = price[2].split(" ");// Данные о выгодной покупке
                        let priceSale = price[1].split(" ");// Данные о выгодной продаже
                        let courseBD = price[3];// Курс центробанка

                        //Работа с данными выгодной покупки
                        let pricePurchaseBD = pricePurchase[0]; // Цена выгодной покупки в БД                  
                        let bankPricePurchaseBD = pricePurchase[1]; // Название банка выгодной покупки в БД
                        if(pricePurchase[2] != undefined){ // Если название банка состоит из двух слов
                            bankPricePurchaseBD += " " + pricePurchase[2]; //то второе слово добавляется к названию банка
                            }

                        //Работа с данными выгодной продажи
                        let priceSaleBD = priceSale[0]; //Цена выгодной продажи в БД
                        let bankPriceSaleBD = priceSale[1]; // Название банка выгодной продажи в БД
                        if(priceSale[2] != undefined){ // Если название банка состоит из двух слов
                            bankPriceSaleBD += " " + priceSale[2]; //то второе слово добавляется к названию банка
                            }

                        // console.log(listinng);
                        // console.log(price);
                        // console.log(сourseDateBD);
                        // console.log(pricePurchase);
                        // console.log(priceSale);
                        // console.log(courseBD);

                        // console.log(pricePurchaseBD);
                        // console.log(bankPricePurchaseBD);
                        // console.log(priceSaleBD);
                        // console.log(bankPriceSaleBD);
                        // console.log( "\"" + bankPricePurchaseBD + "\"");

                        
                        db.query(`INSERT INTO "courseCB" (id_currency, course_currency, date_course)VALUES (1, ${courseBD}, \'${сourseDateBD}\')`, (err, data) =>{
                            if(err){
                                throw new Error(err);
                            }
                            // console.log(data,err);
                            // console.table(data.fields);
                            // console.table(data.rows);
                            // db.end(); //Закрыли соединение с БД
                        });
                        db.query(`INSERT INTO "courseBanks" (course_purchase, bank_purchase, course_sale, bank_sale)
                                    VALUES (${Number(pricePurchaseBD)}, ${"\'" + bankPricePurchaseBD + "\'"} , ${Number(priceSaleBD)}, ${"\'" + bankPriceSaleBD + "\'"})`, (err, data) =>{
                            if(err){
                                throw new Error(err);
                            }
                            // console.log(data,err);
                            // console.table(data.fields);
                            // console.table(data.rows);
                            db.end();
                        });
                        return bot.sendMessage(chatId, `Самый выгодный курс продажи для Вас ${String(priceSale).replace(/[,]/g,' ')} \nСамый выгодный курс покупки для Вас ${String(pricePurchase).replace(/[,]/g,' ')}\nКурс ЦБ на ${сourseDateBD} ${courseBD} рублей за 1 доллар США`);
                    }

                });
            
        }
        else if(text === '/course_euro'){
            //Работа с БД
            const db = new Client({ // Создание объекта БД с необходимыми свойствами для подключения
                user: 'postgres',
                host: 'localhost',
                database: 'botDB',
                password: '    ',
                port: 5432
            });

            db.connect(); // Подключение к БД

            osmosis
                .get('www.biysk.bankiros.ru/currency/eur')
                .find('.non-standard')
                .set({ 'Sale': ['tr[3] > .currency-value[1], tr[3] > .currency-value[2], .subtitle > th[4], tr[3] > .currency-value[3] > .conv-val']})
                .data(function (listinng) {
                    for (key in listinng) {
                        let nameSale = key;
                        let price = listinng[key];

                        let сourseDateBD = price[0];// Дата запроса дд.мм.гггг.
                        let pricePurchase = price[2].split(" ");// Данные о выгодной покупке
                        let priceSale = price[1].split(" ");// Данные о выгодной продаже
                        let courseBD = price[3];// Курс центробанка

                        //Работа с данными выгодной покупки
                        let pricePurchaseBD = pricePurchase[0]; // Цена выгодной покупки в БД                  
                        let bankPricePurchaseBD = pricePurchase[1]; // Название банка выгодной покупки в БД
                        if(pricePurchase[2] != undefined){ // Если название банка состоит из двух слов
                            bankPricePurchaseBD += " " + pricePurchase[2]; //то второе слово добавляется к названию банка
                            }

                        //Работа с данными выгодной продажи
                        let priceSaleBD = priceSale[0]; //Цена выгодной продажи в БД
                        let bankPriceSaleBD = priceSale[1]; // Название банка выгодной продажи в БД
                        if(priceSale[2] != undefined){ // Если название банка состоит из двух слов
                            bankPriceSaleBD += " " + priceSale[2]; //то второе слово добавляется к названию банка
                            }
                        
                        db.query(`INSERT INTO "courseCB" (id_currency, course_currency, date_course)VALUES (2, ${courseBD}, \'${сourseDateBD}\')`, (err, data) =>{
                            if(err){
                                throw new Error(err);
                            }
                        });
                        db.query(`INSERT INTO "courseBanks" (course_purchase, bank_purchase, course_sale, bank_sale)
                                    VALUES (${Number(pricePurchaseBD)}, ${"\'" + bankPricePurchaseBD + "\'"} , ${Number(priceSaleBD)}, ${"\'" + bankPriceSaleBD + "\'"})`, (err, data) =>{
                            if(err){
                                throw new Error(err);
                            }
                            db.end();
                        });
                        return bot.sendMessage(chatId, `Самый выгодный курс продажи для Вас ${String(priceSale).replace(/[,]/g,' ')} \nСамый выгодный курс покупки для Вас ${String(pricePurchase).replace(/[,]/g,' ')}\nКурс ЦБ на ${сourseDateBD} ${courseBD} рублей за 1 евро`);
                    }

                });
        }
        else if(text === '/course_yuan'){
            //Работа с БД
            const db = new Client({ // Создание объекта БД с необходимыми свойствами для подключения
                user: 'postgres',
                host: 'localhost',
                database: 'botDB',
                password: '    ',
                port: 5432
            });

            db.connect(); // Подключение к БД

            osmosis
                .get('www.biysk.bankiros.ru/currency/cny')
                .find('.non-standard')
                .set({ 'Sale': ['tr[3] > .currency-value[1], tr[3] > .currency-value[2], .subtitle > th[4], tr[3] > .currency-value[3] > .conv-val']})
                .data(function (listinng) {
                    for (key in listinng) {
                        let nameSale = key;
                        let price = listinng[key];

                        let сourseDateBD = price[0];// Дата запроса дд.мм.гггг.
                        let pricePurchase = price[2].split(" ");// Данные о выгодной покупке
                        let priceSale = price[1].split(" ");// Данные о выгодной продаже
                        let courseBD = price[3];// Курс центробанка

                        //Работа с данными выгодной покупки
                        let pricePurchaseBD = pricePurchase[0]; // Цена выгодной покупки в БД                  
                        let bankPricePurchaseBD = pricePurchase[1]; // Название банка выгодной покупки в БД
                        if(pricePurchase[2] != undefined){ // Если название банка состоит из двух слов
                            bankPricePurchaseBD += " " + pricePurchase[2]; //то второе слово добавляется к названию банка
                            }

                        //Работа с данными выгодной продажи
                        let priceSaleBD = priceSale[0]; //Цена выгодной продажи в БД
                        let bankPriceSaleBD = priceSale[1]; // Название банка выгодной продажи в БД
                        if(priceSale[2] != undefined){ // Если название банка состоит из двух слов
                            bankPriceSaleBD += " " + priceSale[2]; //то второе слово добавляется к названию банка
                            }
                        
                        db.query(`INSERT INTO "courseCB" (id_currency, course_currency, date_course)VALUES (3, ${courseBD}, \'${сourseDateBD}\')`, (err, data) =>{
                            if(err){
                                throw new Error(err);
                            }
                        });
                        db.query(`INSERT INTO "courseBanks" (course_purchase, bank_purchase, course_sale, bank_sale)
                                    VALUES (${Number(pricePurchaseBD)}, ${"\'" + bankPricePurchaseBD + "\'"} , ${Number(priceSaleBD)}, ${"\'" + bankPriceSaleBD + "\'"})`, (err, data) =>{
                            if(err){
                                throw new Error(err);
                            }
                            db.end();
                        });
                        return bot.sendMessage(chatId, `Самый выгодный курс продажи для Вас ${String(priceSale).replace(/[,]/g,' ')} \nСамый выгодный курс покупки для Вас ${String(pricePurchase).replace(/[,]/g,' ')}\nКурс ЦБ на ${сourseDateBD} ${courseBD} рублей за 1 юань`);
                    }

                });
        }
        else if(text === '/bd'){
            
            const db = new Client({ // Создание объекта БД с необходимыми свойствами для подключения
                user: 'postgres',
                host: 'localhost',
                database: 'botDB',
                password: '    ',
                port: 5432
            });

            db.connect(); // Подключение к БД

         
            db.query(`SELECT DISTINCT date_course FROM "courseCB";`, (err, data) =>{
                if(err){
                    throw new Error(err);
                }
                console.log(data,err);
                console.table(data.fields);
                console.table(data.rows);
                console.log(data.rows[0]);
                return bot.sendMessage(chatId, `Работа с БД ${data.rows}`); 
                db.end();
            });

            

        }
        else{
            return bot.sendMessage(chatId, `Я тебя не понимаю, попробуй еще раз`);
        }
        
    })

    bot.on('callback_query', async msg => {
        const chatId = msg.message.chat.id;
        const data = msg.data;
        if(data == '/again'){
            return startGame(chatId);
        }
        if(data == chats[chatId]){
            return bot.sendMessage(chatId, `Поздравляю, ты отгадал цифру ${data}`, againOptions);
        } else{
            return bot.sendMessage(chatId, `К сожалению ты не угадал, бот загадал цифру ${chats[chatId]}`, againOptions);
        }
    })
}

start(); //Запускаем бота