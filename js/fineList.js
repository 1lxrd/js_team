"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function checkInputData(searchKey) {

    let value = searchKey[0];
    let type = searchKey[1];

    if (type === 'num') {

        let a = /^[0-9][0-9]?[0-9]?$/;

        if (a.test(value)) {

            let oneDigit = /^[0-9]$/
            let twoDigit = /^[0-9][0-9]$/

            value = (oneDigit.test(value)) ? `0${value}`:value;
            value = (twoDigit.test(value)) ? `0${value}`:value;

            return [true, value];

        }

        else return false;
        

        

    }

    else {

        let result = false;
        let types = ['Перевищення швидкості', 'Невірне паркування', 'Їзда у не тверезому стані']

        for (let i in types) {

            if (types[i] === value) result = [true, value];
            
        }

        return result;
    }
}


function searchFines(searchKey){
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */

    if (checkInputData(searchKey)[0]) {
        //Переделал проверку на корректность введенных данных, TODO:
        //Код вывода результатов поиска писать внутри этого ифа, не забыть убрать хардкод из return. Передаваться в функцию будет массив. 
        //Под [0] индексом - значение, по которому искать, под [1] - по какому полю ищем, 'num' или 'type'

        return [
            {номер: '001', тип: 'Перевищення швидкості', сума: 100, дата: '2023-01-15'}
        ];
        
    }

    else {
        alert('Wrong data format');
        return DB;
    }
}

