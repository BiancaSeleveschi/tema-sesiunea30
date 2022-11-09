//SETS
//1. Calculeaza intersectia a doua set-uri.
let chars1 = new Set([1, 2, 3, 4]);
let chars2 = new Set([6, 2, 5, 1]);
let chars3 = new Set();

for (let num of chars1) {
    if (chars1.has(num) && chars2.has(num)) {
        chars3.add(num)
    }
}
console.log(chars3)


//2. Calculeaza diferenta a doua set-uri
let diff = new Set();
for (let num of chars1) {
    if (chars1.has(num) && !chars2.has(num)) {
        diff.add(num)
    }
}
console.log(diff)


//MAPS
//Ai un array de angajati. Caculeaza cati angajati sunt pe fiecare job in parte.
let employees = [
    {job: "programator", salary: 12000, name: "John"},
    {job: "tester", salary: 9000, name: "A"},
    {job: "programator", salary: 7000, name: "B"},
    {job: "tester", salary: 5000, name: "C"},
    {job: "programator", salary: 5000, name: "D"},
]


//Creaza o functie care returneaza o mapa cu toti angajatii care au un anumit job
function getEmployeesWithCertainJob() {
    let employeesCount = new Map();
    for (let e of employees) {
        if (employeesCount.has(e.job)) {
            employeesCount.get(e.job).push(e.name)
        } else {
            employeesCount.set(e.job, [e.name])
        }
    }
    return employeesCount;
}

console.log(getEmployeesWithCertainJob())


function getEmployeesJobNum() {
    let employeeMap = new Map();
    for (let e of employees) {
        if (!employeeMap.has(e.job)) {
            employeeMap.set(e.job, 1)
        } else {
            employeeMap.set(e.job, employeeMap.get(e.job) + 1)
        }
    }
    return employeeMap;
}

console.log(getEmployeesJobNum());


//2. Ai un array de conturi. Caculeaza cate conturi sunt pentru fiecare status de cont in parte.
let accounts = [
    {balance: 2000, number: 23423, status: "ACTIVE"},
    {balance: 2000, number: 23324, status: "ACTIVE"},
    {balance: 2000, number: 234234, status: "BOCKED"},
    {balance: 2000, number: 23432, status: "REMOVED"},
    {balance: 2000, number: 234, status: "REMOVED"},
]

function getNoOfAccountsForEveryStatus() {
    let accountsMap = new Map();
    for (let account of accounts) {
        if (!accountsMap.has(account.status)) {
            accountsMap.set(account.status, 1)
        } else {
            accountsMap.set(account.status, accountsMap.get(account.status) + 1)
        }
    }
    return accountsMap
}

console.log(getNoOfAccountsForEveryStatus())


//Returneaza numerele pentru fiecare status
function getAllNumOfCertainStatus() {
    let accMap = new Map();
    for (let a of accounts) {
        if (accMap.has(a.status)) {
            accMap.get(a.status).push(a.number)
        } else {
            accMap.set(a.status, [a.number])
        }
    }
    return accMap;
}

console.log(getAllNumOfCertainStatus())


//3. Ai un array de persoane. O persoana are ca si proprietati nume si tara.
let people = [
    {name: "Ana", country: "Romania"},
    {name: "Louis", country: "Spania"},
    {name: "Kate", country: "UK"},
    {name: "Santiago", country: "Spania"},
    {name: "Ioana", country: "Romania"},
]

//Genereaza o mapa ca sa vezi cate persoane sunt din fiecare tara (cheia este tara, iar valoarea este numarul de persoane din acea tara)
function getNoOfPersonForEveryCountry() {
    let personMap = new Map();
    for (let person of people) {
        if (!personMap.has(person.country)) {
            personMap.set(person.country, 1)
        } else {
            personMap.set(person.country, personMap.get(person.country) + 1)
        }
    }
    return personMap;
}

console.log(getNoOfPersonForEveryCountry())


//Returneaza numele persoanelor care apartin fiecarei tari.
function getNameOfPeopleForEveryCountry() {
    let peopleMap = new Map();
    for (let p of people) {
        if (peopleMap.has(p.country)) {
            peopleMap.get(p.country).push(p.name)
        } else {
            peopleMap.set(p.country, [p.name])
        }
    }
    return peopleMap;
}

console.log(getNameOfPeopleForEveryCountry())


//4.  Compune tu o problema asemanatoare. Ai un array de “ceva” si vrei sa generezi o mapa din el.
let hobbies = [
    {name: "Maria", hobbie: 'tennis'},
    {name: "Marian", hobbie: 'tennis'},
    {name: "Andrei", hobbie: 'dance'},
    {name: "Octavian", hobbie: 'fishing'},
    {name: "Cristi", hobbie: 'dance'},
    {name: "Marius", hobbie: 'dance'},
]

//Returneaza numarul de persoane pentru fiecare hobby
function getNumOfPersonForEveryHobbie() {
    let hobbiesChars = new Map();
    for (let p of hobbies) {
        if (!hobbiesChars.has(p.hobbie)) {
            hobbiesChars.set(p.hobbie, 1)
        } else {
            hobbiesChars.set(p.hobbie, hobbiesChars.get(p.hobbie) + 1)
        }
    }
    return hobbiesChars;
}

console.log(getNumOfPersonForEveryHobbie())

//Returneaza numele persoanelor pentru fiecare hobby
function getNameOfPeopleForEveryHobby() {
    let hobbiesChars = new Map();
    for (let p of hobbies) {
        if (hobbiesChars.has(p.hobbie)) {
            hobbiesChars.get(p.hobbie).push(p.name)
        } else {
            hobbiesChars.set(p.hobbie, [p.name])
        }
    }
    return hobbiesChars;
}

console.log(getNameOfPeopleForEveryHobby())


//Cum aflii daca un array contine duplicate folosindu-te de un set
let a = [1, 2, 3, 4, 5, 4]
let c = new Set([1, 2, 3, 4, 5, 4])
let verify = a.size === c.size ? true : false
console.log(verify)



