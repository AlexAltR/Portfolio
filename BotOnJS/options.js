module.exports={
    gameOptions: { // Объект с кнопками
        reply_markup: JSON.stringify({ // Преобразуем объект в строку с помощью JSON.stringify
                inline_keyboard: [ // Массив из массивов, в котором каждый массив это строка с кнопками
                    [{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'}, {text: '3', callback_data: '3'}], //Строка с 3-мя кнопками
                    [{text: '4', callback_data: '4'}, {text: '5', callback_data: '5'}, {text: '6', callback_data: '6'}],
                    [{text: '7', callback_data: '7'}, {text: '8', callback_data: '8'}, {text: '9', callback_data: '9'}],
                    [{text: '0', callback_data: '0'}],
                ]
            }) 
    },
    againOptions: {
        reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{text: 'Играть снова', callback_data: '/again'}],
                ]
            }) 
    }
}

