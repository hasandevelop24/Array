// const fruits = ['apple', 'jackfruit', 'watermelon', 'mango', 'guava']
// // let firstChild = fruits[2]
// console.log(fruits[0],fruits[2])
// const webtechs = [
//     'iphone',
//     'samsung',
//     247,
//     true,
//     {contry:'Bangladesh', city:'Rajshahi'},
//     {skills: ['html', 'css','tailwind','javascript']}
// ]
// console.log(webtechs)

// let js = "javascrpt";
// let charsinjs = js.split('');
// console.log(charsinjs);

// let companies ='apple, linux, facebook, whatsapp, microsoft'
// console.log(companies)
// let comSplit = companies.split(',');

// console.log(comSplit);

// let txt = 'I love teaching empowering people. I teach HTML, js, react, python'
// const words = txt.split(' ');
// console.log(words);

// let fruits1 = ['banana', 'orange', 'mango', 'lemon'];
// const firstfruit = fruits1[0];
// console.log(firstfruit);

// const secondFruit = fruits1[1];
// console.log(secondFruit);

// const thirdFruit = fruits1[2];
// console.log(thirdFruit);

// const fourthFruit = fruits1[3];
// console.log(fourthFruit);

// // to find the last index item we can use "length - 1"
// const lastIndex = fruits1.length - 1;
// const lastFruit = fruits1[lastIndex];
// console.log(lastFruit);

// const numbers = [0, 3, 84, 748, 36, 948, 200];
// // to know the size of array
// console.log(numbers.length);
// // to show the array
// console.log(numbers);

// // to identify index
// console.log(numbers[0]);
// console.log(numbers[5]);

// // to identify last index
// const lastitem = numbers.length-1
// console.log(numbers[lastitem]);

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB']
// // list of web technologies.
// console.log(webTechs);
// console.log(webTechs[0]);

// const lastWeb = webTechs.length - 1;
// console.log(lastWeb);
// console.log(webTechs[lastWeb]);

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungry',
//     'Ireland',
//     'Japan',
//     'Kenya',
// ]
// // list of countries

// console.log(countries);
// console.log(countries[0]);
// console.log(countries[9]);

// const lastCountry = countries.length-1;
// console.log(countries[lastCountry]);


// const shoppingCart = [
//     'Milk',
//     'Mango',
//     'Tomato',
//     'Potato',
//     'Avocado',
//     'Meat',
//     'Eggs',
//     'Sugar'
// ]
// // list of products
// console.log(shoppingCart);
// console.log(shoppingCart[2]);
// console.log(shoppingCart[0]);
// console.log(shoppingCart[5]);

// const lastCart = shoppingCart.length - 1;
// console.log(shoppingCart[lastCart]);

// // ---------Modifying array element----------------

// // We can modify array value....

// const numbers1 = [1,2,4,5,6,201];
// numbers1[0] = 35;
// numbers1[2] = 147;
// console.log(numbers1);


// const countries1 = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungery'

// ]

// countries1[0]= 'Afganistan';
// console.log(countries1);

// const arr = Array();
// console.log(arr);
// const emptyArr = Array(8);
// console.log(emptyArr);

// // ---------Creating static values with "fill"----------

// const emptyArray = Array();
// console.log(emptyArray);

// const eightZvalues = Array(8).fill('Mohammad');
// console.log(eightZvalues);

// const eightXvalues = Array(8).fill('Hasan');
// console.log(eightXvalues);

// const eightYvalues = Array(8).fill('Ali');
// console.log(eightYvalues);

// // -----------Use of "concat"========
// // সংযুক্তকরন = Concatenating

// const firstList = [1,2,3,4,5,6,7,8,9,10];
// const secondList = [11,12,13,14,15,16,17,18,19,20];
// const thirdList = firstList.concat(secondList);
// console.log(thirdList);

// // ======Concatenating of String Array====

// const prothomArray = ['samsung','iphone','linux', 'facebook'];
// const ditioArray = ['microsoft','spaceX','whatsapp','instagram'];
// const finalArray = prothomArray.concat(ditioArray);
// console.log(finalArray);

// // =======To know the size of Array "length"===========
// const numbers2 = [1,2,3,4,5,6,7,8,9,10];
// // to check how much items
// console.log(numbers2.length);
// // to check if an item exist in Array==get its index number with "indexOf"===
// console.log(numbers2.indexOf(10));
// console.log(numbers2.indexOf(5));
// console.log(numbers2.indexOf(8));
// console.log(numbers2.indexOf(1));



// ==========Day 02===============

// const fruits2 = ['banana', 'orange', 'mango', 'lemon'];
// let index2 = fruits2.indexOf('banana');
// console.log(index2);

// if(index2 === -1){
//     console.log('This fruit does not exist in the array')
// }
// else{
//     console.log('This fruit does exist in the array')
// };

// // lets check 'Avocado' exist in the array
// let indexofAvocado = fruits2.indexOf('avocado');
// console.log(indexofAvocado);

// if (indexofAvocado === -1){
//     console.log('This Fruit Does Not Exist');
// }
// else{
//     console.log('How many do you need?')
// };
// // Getting last index of an element in array===========
// const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// console.log(numbers.lastIndexOf(2));
// console.log(numbers.lastIndexOf(3));
// console.log(numbers.lastIndexOf(0));

// // =======To check if an item exist in an Array.If it exist it returns the true else it return false.
// const numbers1 = [1, 2, 3, 4, 5];
// console.log(numbers1.includes(2));
// console.log(numbers1.includes(4));
// console.log(numbers1.includes(3));
// console.log(numbers1.includes(6));
// console.log(numbers1.includes(10));

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ];
// console.log(webTechs);
// console.log(webTechs.includes('HTML'));
// console.log(webTechs.includes('Redux'));
// console.log(webTechs.includes('Python'));

// // =======For checking Array , we use "isArray"=======
// const numbers2 = [1, 2, 3, 4, 5, 6];
// console.log(numbers2);
// console.log(Array.isArray(numbers2));
// const name1 = "hasan";
// console.log(name1);
// console.log(Array.isArray(name1));

// // ========Converting array to string =========
// const numbers3 = [1, 2, 3, 4, 5, 6,7];
// console.log(numbers3);
// console.log(numbers3.toString());

// const team = ['Argentina', 'Brazil', 'Chili', 'Portugal', 'Spain'];
// console.log(team);
// console.log(team.toString());

// // ======= Its used to join the elements of the3 array, the argument we passed in the join method will be joined in the array and return as a string.

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// console.log(names.join());
// console.log(names.join(''));
// console.log(names.join(', '));
// console.log(names.join(' # '));

// const webs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]
// console.log(webs.join());
// console.log(webs.join(''));
// console.log(webs.join(' '));
// console.log(webs.join(', '));
// console.log(webs.join(' # '));

// // Slice method ; to cut out multiple items in range. It takes two parameter: starting and ending position.
// const numbers4 = [1, 2, 3, 4, 5];
// console.log(numbers4.slice());
// console.log(numbers4.slice(2,4));
// // console.log(numbers4.slice(0, numbers4.length));
// // console.log(numbers4.slice(0, numbers4.length-1));
// // console.log(numbers4.slice(2));

// // ====== Splice method in array======
// const numbers5 = [1, 2, 3, 4, 5, 6, 7 ,8, 9 ,10];
// console.log(numbers5);
// numbers5.splice(2, 3, 73, 85, 82);
// console.log(numbers5);

// // Adding item to an array using push

// const arr = ['I','You','He','She'];
// arr.push('they');
// console.log(arr);

// const num = [1, 2, 3, 4, 5,6];
// num.push(10);
// console.log(num);

// const num1 = [8, 3, 9, 4, 5];
// num1.pop();
// console.log(num1);

// // Push and pop used to add and remove from end...

// // =====Add and Removing element from beginning====
// const num2 = [3, 5, 0, 47, 23, 47];
// num2.shift();
// console.log(num2);

// num2.unshift(24,23);
// console.log(num2);

// // ====Reversing array order.=====
// const numb = [3, 5, 7, 8, 9,18];
// console.log(numb);
// numb.reverse();
// console.log(numb);

// // ==== Sorting elements in array =======
// const webT = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ];
// webT.sort();
// console.log(webT);
// webT.reverse();
// console.log(webT);

// // ===========
// // =============Array of Arrays===========
// const arrayOfArray = [[1,3,5], [2, 4, 6]];
// console.log(arrayOfArray);
// console.log(arrayOfArray[0]);
// console.log(arrayOfArray[1]);

// const frontEnd = ['HTML','CSS','JS','React','Redux'];
// const backEnd = ['Node', 'Express', 'MongoDB'];
// const fullStack = [frontEnd,backEnd];
// console.log(fullStack);






















