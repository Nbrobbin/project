// Умовні розгалуження: if, '?'

// Використовуючи конструкцію if..else, напишіть код, що запитує:
//  ‘Яка “офіційна” назва JavaScript?’

// Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, 
// в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”


// let a = prompt('Яка “офіційна” назва JavaScript?', '');
// if (a == 'ECMAScript') {
//    alert('Правильно!');
// }  else { 
//     alert('Ви не знаєте? ECMAScript!');
//   }


// Перепишіть конструкцію if, використовуючи умовний оператор '?':


// let a = 5;
// let b = 10;
// let result = (a + b < 4) ? 'Нижче' : 'Вище';
// console.log(result);




// Перепишіть if..else, використовуючи декілька тернарних операторів '?'.

// Для зручності читання рекомендується розділити код на кілька рядків.



let message;

if (login == 'Працівник') {
  message = 'Привіт';
} else if (login == 'Директор') {
  message = 'Вітаю';
} else if (login == '') {
  message = 'Немає логіну';
} else {
  message = '';
}



let messages = (login == 'Працівник') ? 'Привіт' :
  (login == 'Директор') ? 'Вітаю' :
  (login == '') ? 'Немає логіну' :
  '';