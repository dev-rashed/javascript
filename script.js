// // Phone number validation
// let re;
// let str;

// re = /^(\+)?(88)?01[0-9]{9}$/;
// str = "+8801890010841";

// console.log(re.test(str));
// //Email Validation
// let re1;
// let str1;

// re1 = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z]\.?)+[^\.]$/;
// str1 = "rashed.eee.brur@gmail.com";

// console.log(`Email validation ${re1.test(str1)}`);

// // JS Object
// var student = {
//     name: "rashedul",
//     age: 25,
//     religion: 'Islam',
//     data: "Js"
// }
// console.log('JS object');
// console.log(student);

// // JSON Object
// // var student_json = {
// //     'name': 'Rashedul',
// //     'age': 25,
// //     'religion': 'Islam'
// // };

// // JS to JSON convertion
// var student_json = JSON.stringify(student);
// console.log('JS to JSON conversion');
// console.log(student_json);

// // JSON to JS convertion
// var student = JSON.parse(student_json);
// console.log('JSON to JS conversion');
// console.log(student);

// // AJAX
// document.getElementById('get_data').addEventListener('click', loadData);

// function loadData() {
//     let xhr = new XMLHttpRequest();
//     // console.log(xhr);

//     xhr.open('GET', 'extra/data.txt', true);

//     xhr.onload = function() {
//         if (this.status === 200) {
//             document.getElementById('set_data').innerHTML = this.responseText;
//         }
//     };

//     xhr.send();

// }

// JSON Data

// let xmlhttp = new XMLHttpRequest();

// xmlhttp.open('GET', 'extra/data.json', true);

// xmlhttp.onload = function() {
//     if (this.status === 200) {
//         // console.log(this.responseText);
//         data = this.responseText;
//         jsonData(data);
//     }
// };

// xmlhttp.send();

// function jsonData(json_data) {
//     // console.log(typeof(json_data));
//     var js_obj = JSON.parse(json_data);
//     // console.log(typeof(js_obj));
//     for (v in js_obj) {
//         var persons = js_obj[v];
//         // console.log(persons);
//         for (y in persons) {
//             console.log(persons[y].name);
//         }
//     }
// }

// API ajax
// document.getElementById('get_data').addEventListener('click', getJokes);

// function getJokes() {
//     let number = document.getElementById('get_number').value;
//     let jokesxml = new XMLHttpRequest();
//     jokesxml.onprogress = function() {
//         document.getElementById('set_data').innerHTML = "Loading.......";
//     };
//     jokesxml.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
//     jokesxml.onload = function() {
//         if (this.status === 200) {
//             let data = JSON.parse(this.responseText);
//             let jokes = data.value;
//             // console.log(jokes);
//             let output = "<ol>"
//             jokes.forEach(function(item) {
//                 output += `<li>${item.joke}</li>`;
//             });
//             output += "</ol>";
//             document.getElementById('set_data').innerHTML = output;
//         }
//     };
//     jokesxml.send();
// }

// TimeOut Function Or Callback function

// setTimeout(function() {
//     console.log('Hello world');
// }, 4000);

// let persons = [
//     { firstName: 'Rashed', lastName: 'Islam' },
//     { firstName: 'Rakibul', lastName: 'Islam' }
// ]
// console.log(`Persons is a ${typeof(persons)}`);

// function pushPerson(person, getPerson) {
//     console.log('Adding new array to persons');
//     setTimeout(function() {
//         persons.push(person);
//         console.log('Added new person');
//         getPerson();
//     }, 4000);
// }

// function getPerson() {
//     console.log('Get Ready to see output :)');
//     setTimeout(function() {
//         let output = "<ul>";
//         persons.forEach(function(person) {
//             output += `<li> ${person.firstName} ${person.lastName} </li>`;
//         });
//         output += "</ul>";
//         document.getElementById('output').innerHTML = output;
//         console.log('Happy Coding :)');
//     }, 1000);
// }

// pushPerson({ firstName: 'Safia', lastName: 'afrin' }, getPerson);

// Promise .then

// let persons = [
//     { firstName: 'Rashedul', lastName: 'Islam' },
//     { firstName: 'Rakibul', lastName: 'Islam' }
// ]

// function createPerson(person) {
//     // console.log(`Before Pushing ${persons.length}`);
//     let prom = new Promise(function(resolve, reject) {
//         persons.push(person);

//         let error = false;
//         if (!error) {
//             resolve();
//         } else {
//             reject('Oops!! Something went wrong');
//         }
//     });
//     // console.log(`After Pushing ${persons.length}`);
//     return prom;
// }

// function getPerson() {
//     let output = "<ul>";
//     persons.forEach(function(person) {
//         output += `<li>${person.firstName} ${person.lastName}</li>`;
//     });
//     output += '</ul';
//     document.getElementById('output').innerHTML = output;
// }

// createPerson({ firstName: 'Safia', lastName: 'Arfin' })
//     .then(getPerson())
//     .catch(function(err) {
//         console.log(err);
//     });

// Fetch API

// document.getElementById('get_data').addEventListener('click', getData);

// function getData() {
//     fetch('http://api.icndb.com/jokes/random')
//         .then(res => res.json()) // Arrow Function
//         .then(data => { console.log(data); })
//         .catch(err => { console.log(err); })
// }