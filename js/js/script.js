// из банковской системы создать 2 аккаунта 
// 2 объекта
// и сделать банкувскую систему на 2 человек
// объеденить и посмотреть ответ
// в переменую тотал сложить все прайсы и дать ответ 
let name = "Alex"
let account = 7777
let money = 10000
let imya = "Мurad"
let acc = 8888
let your_name = prompt("Как вас зовут?")
if (your_name == name || your_name == imya){
    let number = prompt("Номер счета?")
    if(number == 7777 || number == 8888){
        let how_much = prompt("Сколько обналичить?")
        if(how_much <= money){
            let allOk = alert("Все отлично")
            if(allOk = true){
                alert(`Вы сняли ${how_much} и у Вас осталось ${money - how_much}`)
            }
        }
        else{
            alert("Недостаточно средств")
        } 
    }
    else{
        alert("Пользователь не найден, досвидули")
    }
}
else {
    alert("Пользователь не найден, досвидули")
}
let total = allOk
