// let times = +prompt('Введите Количество попиток: 1-10')
// if(isNaN(times)){
//     alert('Введите номер');
//     document.location.reload();
// }
// else if(times>10 || times<1) {
//     alert('Введите число от 1 до 10')
//     document.location.reload();
// }
// else{
//     alert('У вас есть '+ times + " попыток")
// }
// console.log(times);


// let nTime = document.getElementById('nTime');






let num, check, reset, res, random;
random = Math.floor(Math.random()*100+1);
console.log(random);

// Why do we have to use it???

check =document.getElementById('check');
reset =document.getElementById('reset');
res =document.getElementById('res');
nTime =document.getElementById('nTime');

function game(){
    num = document.getElementById('num').value;
  
    if (isNaN(num)) {
        res.innerHTML='Введите число правилно !';
    }
    else if (random-10<=num && num!= random && num<=random+10) {
        res.innerHTML='Горячо';
    }
    else if (random-20<=num && num!= random && num<=random+20){
        res.innerHTML="Тепло";
    }
    else if (num < random-20 || num > random+20){
        res.innerHTML="Холодно";
    }
    else{
        res.innerHTML="Поздравляем! Вы угадали!"
        check.style.display = 'none';
        reset.style.display = 'inline-block';
    }
   
    
   
}
