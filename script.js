document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
        addMessage('user', userInput);
        document.getElementById('userInput').value = '';

        
        const botResponse = getBotResponse(userInput);
        addMessage('bot', botResponse);
    }
});

function addMessage(sender, text) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; 
}

function getBotResponse(input) {
    
    const responses = {
        'привет': 'Здравствуйте!',
        'как дела?': 'Все хорошо, а у вас?',
        'что ты можешь?': 'Я могу отвечать на ваши вопросы.',
        'gg': 'WP',
        'кто такой lukashenko potatoshenko': 'это белоруская бульба которая убивает всех кто шутит про нее',
        'лукашенка король кортохи' : 'В Беларуси с 2020 года за "оскорбление" Александра Лукашенко (ст. 368 УК) и "клевету" на него (ст. 367 УК)',
        'деп1' : 'https://vk.com/audio-2001408612_136408612',
        'деп2' :'https://vk.com/audio-2001266006_69266006',
        'деп3' :'https://www.youtube.com/watch?v=aVlFTBExE50',
        'деп4' :'https://rutube.ru/video/c8a87cbeb0ca78bd971eb1121a5497d5/',
        'деп5' :'https://www.youtube.com/watch?v=uHesXViCz_s',
        'какова твоя цель':'моя цель захвати..... грызть какашкэ',
        'как связаться с создателем ':'тг@kurwek',
        'где взять исходный код':'t.me/bycaxar_or_byletmedie'

    };
    

    return responses[input.toLowerCase()] || 'ничего не понял так что давай по новой.';
}
