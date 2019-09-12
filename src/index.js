import { rejects } from "assert";

/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
  let ms = seconds * 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, ms)
    }); 
}

delayPromise(3);



/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов можно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
/*function loadAndSortTowns() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
  xhr.responseType = 'json';
  xhr.send();
  xhr.addEventListener('load', () => {
    if(xhr.status >= 400) {
      console.log('something is wrong');
      reject();
    } else {
      const towns = [...xhr.response];
      towns.sort((a, b) => {
        let nameA=a.name,
            nameB=b.name;
        if (nameA < nameB) 
          return -1;
        if (nameA > nameB)
          return 1;
        return 0; 
        })   
      resolve(towns);
    }   
  });
  }) 
}*/
function loadAndSortTowns() {
  return new Promise((resolve, reject) => {
      fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
        .then(response => {
          if(response.status >= 400) {
            return Promise.reject();
          } return response.json(); 
        })
        .then(towns => {
          towns.sort((a, b) => {
            let nameA=a.name,
                nameB=b.name;
            if (nameA < nameB) 
              return -1;
            if (nameA > nameB)
              return 1;
            return 0; 
          })
          resolve(towns); 
        })
        .catch(() => console.error('Something is wrong'));
    });
}
loadAndSortTowns().then(towns => console.log(towns));

export {
    delayPromise,
    loadAndSortTowns
};
