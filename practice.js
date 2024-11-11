// ===== 1 Number (machayenge);\
const emptyArray = Array();
console.log(emptyArray);

// ==== 2 Number ===
const num = [2, 4, 5, 7, 8, 9, 24, 6, 58];
console.log(num);

// ==== 3 Number ===
const num1 = [3, 1, 43, 4, 64, 23, 12];
console.log(num1.length);

// ==== 4 Number ===
console.log(num1[0]);

console.log(num1[3]);

const indexOfnum1 = num1.length-1;
console.log(num1[indexOfnum1]);

// ==== 5 Number ===
const mixedDataTypes =  [
    'facebook',
    'twitter',
    'whatsapp',
    'instagram',
    23,
    {name1 : 'John', age : 24},
    {skills : ['HTML', 'CSS', 'JS', 'React', 'Python']}
];
console.log(mixedDataTypes);

// ------- 6 number --=======
const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'IBM', 'amazon','Oracle'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
const numIndex = itCompanies.length-1;
console.log(itCompanies[numIndex]);
// ==== number 10 =====;
console.log(itCompanies[0], itCompanies[3], itCompanies[numIndex]);
// number 11====
 const firstCompanyName = itCompanies[0].toUpperCase();
 console.log(firstCompanyName);
 const secondCompanyName = itCompanies[3].toUpperCase();
 console.log(secondCompanyName);
 const lastCompanyName = itCompanies[numIndex].toUpperCase();
 console.log(lastCompanyName);
 console.log(firstCompanyName,secondCompanyName,lastCompanyName);

//  ===== 12 Number =====
const joinCompany = itCompanies.join(' ');
console.log(joinCompany);
// ======13 NUmber =====
const existGoogle = itCompanies.includes('google');
console.log(existGoogle);
if (existGoogle === true){
    console.log("Its in the Array");

}
else {
    console.log("No Matching");
}
// 14 Number will try Later.....'''

// 15 Number ========
const sortedCompany = itCompanies.sort();
console.log(sortedCompany);
// 16 number===
const reverseCompany = sortedCompany.reverse();
console.log(reverseCompany);
// ===== 17 Number =====
const slicedCompany = itCompanies.slice(0,3);
console.log(slicedCompany);

// ===== 18 Number =====
const slicedCompany2 = itCompanies.slice(4,itCompanies.length);
console.log(slicedCompany2);
// ===== 19 Number =====
const slicedMiddleCompany = itCompanies.slice(3,5);
console.log(slicedMiddleCompany);

// ===== 20 Number ====
const removeFirstCompany = itCompanies.shift();
console.log(itCompanies);

// ==== 21 Number ====
const removeMiddleCompany = itCompanies.splice(3,1);
console.log(itCompanies);
// ==== 22 Number =====
const removeLastCompany = itCompanies.pop();
console.log(itCompanies);

// ==== 23 Number =====
const removeAllCompany = itCompanies.splice(0,itCompanies.length);
console.log(itCompanies);


