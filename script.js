let arr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
console.log(arr)
// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:

// 4.1. Tik skaičius (number tipo duomenis).
for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i])) {
    console.log(arr[i])
    }
  }

  arr.map(item => {
    if(!isNaN(item)) {
      console.log(item)
    }
  })

// 4.2. Tik tekstą (string tipo duomenis).
for (let i = 0; i < arr.length; i++) {
  if(isNaN(arr[i])) {
    console.log(arr[i])
  }
}

arr.map(item => {
  if(isNaN(item)) {
    console.log(item)
  }
})

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  if (!isNaN(item)) {
    console.log(Math.pow(item, 4))
    }
  }

  arr.map(item => {
    if(!isNaN(item)) {
      console.log(Math.pow(item, 4))
    }
  })

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  if (!isNaN(item)) {
    console.log(item + 55)
    }
  }

  arr.map(item => {
    if(!isNaN(item)) {
      console.log(item + 55)
    }
  })

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  if (!isNaN(item)) {
    console.log(item / 2)
    }
  }

  arr.map(item => {
    if(!isNaN(item)) {
      console.log(item / 2)
    }
  })

// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  if (!isNaN(item)) {
    console.log('Number: '+ item)
    }
  }

  arr.map(item => {
    if(!isNaN(item)) {
      console.log('Number: '+ item)
    }
  })

// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  if (!isNaN(item)) {
    console.log(`Index: ${i}, Number: ${item}`)
    }
  }

  arr.map(function(num, index) {
    if(!isNaN(num)){
      console.log(`Index: ${index}, Number: ${num}`)
    }
  })

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  if (!isNaN(item)) {
    console.log(i * item)
    }
  }

  arr.map(function(num, index) {
    if(!isNaN(num)) {
      console.log(index * num)
    }
  })

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:

//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.
let firstSliced = arr.slice(0,5)
let secondSliced = arr.slice(6,10)
let thirdSliced = arr.slice(11, 18)
let fourthSliced = arr.slice(19)
let mergedArr = [firstSliced,secondSliced,thirdSliced,fourthSliced].flat()
for (let i = 0; i < mergedArr.length; i++) {
  if(!isNaN(mergedArr[i]) && !isNaN(mergedArr[i-1])){
    console.log(mergedArr[i] * mergedArr[i-1])
  }
}

mergedArr.map(function(num,i) {
  if(!isNaN(mergedArr[i]) && !isNaN(mergedArr[i-1])){
    console.log(mergedArr[i] * mergedArr[i-1])
  }
})


// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  if (item * 5 > 350 )
    console.log(item)
}

arr.map(function(num) {
  if(num * 5 > 350) {
    console.log(num)
  }
})

// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  if (isNaN(item)) {
    console.log(`${item} has ${item.length} symbols`)
    }
  }

  arr.map(function(num) {
    if(isNaN(num)) {
      console.log(`${num} has ${num.length} symbols`)
    }
  })

// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  if (isNaN(item)) {
    console.log(item.split('').join('-').toUpperCase())
    }
  }

  arr.map(function(num) {
    if(isNaN(num)) {
      console.log(num.split('').join('-').toUpperCase())
    }
  })

// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  if (isNaN(item)) {
    let firstChar = item.charAt(0)
    let thirdChar = item.charAt(2)
    let firstReplaced = item.replace(firstChar, '_')
    console.log(firstReplaced.replace(thirdChar, '_'))
    }
  }

  arr.map(function(num, i) {
    let item = arr[i]
    if(isNaN(num)) {
      let firstChar = num.charAt(0)
      let thirdChar = num.charAt(2)
      let firstReplaced = num.replace(firstChar, '_')
      console.log(firstReplaced.replace(thirdChar, '_'))
    }
  })

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  if (isNaN(item)) {
    console.log(item.split('').reverse().join(''))
    }
  }

  arr.map(function(num) {
    if(isNaN(num)) {
      console.log(num.split('').reverse().join(''))
    }
  })

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".
for (let i = 0; i < arr.length; i++) {
  let item = arr[i]
  let prevItem = arr[i-1]
  let secondItem = arr[i+1]
  if (isNaN(item)) {
    console.log(`Word ${item} is between ${prevItem} and ${secondItem} in the array`)
    }
  }

  arr.map(function(num, i) {
    let prevItem = arr[i-1]
    let secondItem = arr[i+1]
    if(isNaN(num)) {
      console.log(`Word ${num} is between ${prevItem} and ${secondItem} in the array`)
    }
  })



