/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
        //console.log(i, array[i]);
    }
}
let array = [1, 10, 100, 1000];
let fn = (item, i, array) => {

  return item + 1;
}

forEach(array, fn);
/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn1) {
  let newArr = [];
  
  for (let i = 0; i < array.length; i++) { 
    newArr.push(fn1(array[i], i, array));
  }
  return newArr;
}

let fn1 = (item, i, array) => {
  return item * 2 ;
  };

map(array, fn1);

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn2, initial ) {
  let curInx = initial ? 0 : 1
  let cumm = 0;
  if (typeof initial != 'number') {
    cumm = array[0];
  } else {
    cumm = initial;
  }
  for ( let i = curInx; i < array.length; i++) { 
      cumm = fn2(cumm, array[i], i, array); 
  }
  return cumm;
}
let fn2 = (cumm, item, i, array) => {
  return cumm += item;
  };

reduce(array, fn2);
/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  
  let newObj = [];
  for (let key in obj) {

    newObj.push(key.toUpperCase());
  }
  return newObj;
}

upperProps({ name: 'Сергей', lastName: 'Петров' });


/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
