//Partea a doua. 


   //Activating 'strict' mode 

'use strict';//asa il activam, trebuie sa fie prima linie de cod. Are scopul de a ne ajuta in gasirea bagurilor din codul nostru. 

let hasDriversLicense = false;
const passTest = true;

if(passTest)hasDriversLicense = true; 
if(passTest)hasDriversLicense 
 console.log('I can drive ');
 //Folosind 'strinct 'in momentul in care deschis aplicatia in bowser putem vedean in consola randul care contine o greseala. In acest fel le putem conrecta. 

 //const interface = 'Audio'; 
 //const if ='23'; nu le lasa sa oferim o varibila de genul asta. 





//Function 

'use strict';

function logger(){
console.log('My name is Mihai ');
}//function body 

logger();//run de function 



function fruitProcessor(apples,oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples ans ${oranges} oranges`;
    return juice;//acesta este o instructiune care opreste orice cod care urmeza dupa el. Intoarce valoarea catre apelant. 
}
 const appleJuice = fruitProcessor(4,8);
 console.log(appleJuice);
 console.log(fruitProcessor(4,8));


 const appleOrangeJuice = fruitProcessor(3,5);
 console.log(appleOrangeJuice); 
 



      //Function Declaration vs Expressions

 //O declaratie de functie este o metoda de a declara o functie acesta poate fii aplelata oriunde in codul sursa. 
 //Se utilizeaza cuvantul cheie ,,function'' urmata de numele acesteia, paranteze care contin parametri, si un bloc de cod care contine instructiunii de functionare. 


 function calcAge1( birthYear){
    const age = 2037 - birthYear;
    return age; 
}
    
 // In acest exemplu putem sa nu avem o variabila si sa folosim astfel. 

 function calcAge1 (birthYear){
    return 2037 - birthYear
 }
 //acum vom chema/executa acesta functie. 

  const age1 = calcAge1(1991);
  



        //console Expressions 


  //Aceste functii sunt definte ca ca si functii care poate fi atribuit unei variabile stocata intr-un obiect sau trecuta ca argument in alta functie. 

  const calcAge2 = function (birthYear){
    return 2037 - birthYear;
  }
const age2 = calcAge2(1991);
console.log(age1,age2);


//In timp vei alege ce fel de functii trebuie sa folosesti. 






        //Arrow Functions 



//Aceasta este a 3 functie pe care o avem in javascript. 

const calcAge3 = birthYers => 2037 - birthYers;
const age3 = calcAge3(1991);
console.log(age3);
 

const yearsUntilRetiremnet = (birthYers, firstName)=> {
    const age = 2037 - birthYers;
    const retirement = 65 - age ;
    //return retirement ;
    return `${firstName} retires in ${retirement } years `
}

 console.log (yearsUntilRetiremnet(1991, 'Jonas'));
 console.log (yearsUntilRetiremnet(1980, 'Bob'));
 



      //Function Calling Other Functions 


 function cutFruitPieces (fruit){
    return fruit * 4 ; 
 }


 function fruitProcessor(apples,oranges){
    const applesPices = cutFruitPieces(apples);//Aici se va trimite la cealalta functie care va calcula bucatile de fructe. 
    const orangesPices = cutFruitPieces(oranges);
   
    const juice = `Juice with ${applesPices} apples ans ${orangesPices} oranges`;
    return juice;
 }
  console.log (fruitProcessor (2,3));




      //Reviewind Function 


const calcAge = function (birthYers,){//fiecare paranteze face sa sa fie o varibila noua si unica. 
    return 2037 - birthYers;

} 

const yearsUntilRetiremnet = function (birthYers, firstName) {
    const age = calcAge(birthYers);
    const retirement = 65 - age ;

    if (retirement >0 ){
        return retirement;
    }
    else{
        return -1;
    }}
   
   console.log (yearsUntilRetiremnet(1991, 'Jonas'));
    console.log (yearsUntilRetiremnet(1970, 'Mike'));


        // Structura unei functii. 

    function  calcAge  numele functiei (birthYear, firstName)  paramentri *{}
         // Function body , locul unde sa afla blocul nostru de cod, proceseaza datele de introducere 
    
      const age = 2037 -birthYear;  
       console.log ( `${firstName} is ${age} years old `);
       return age ; //Returneaza statulul afara ca si valoare finala 
       
    }
     const age = calcAge(1991,'Jonas' )// cu parantele activam functia . 

     


         //Exercitiu pentru functii JavaScript 


     //comand d, pentru a selecta toate variabilele si modifica in acelasi timp. 




   //Arrays Introduction. Primul Framework pe care in vom folosi
   
   



   const friend1 = 'MIke'; 
   const friend2= 'Stefan'; 
   const friend3 = 'Vlad'; 

   const friends=['Mike','Stefan','Vlad'];
   console.log(friends);//putem adauga mai mute elemente intr-o singura boxa de unde le vom lua mai tarziu 

   const years = new Array(1991,1984,2008,2020);

   console.log(friends[0]);//Selectam elementul dorit din boxa
   console.log(friends[2]);//Numerotarea se face de la 0 
   console.log(friends.length);
   console.log(friends[friends.length -1]);


 friends[2]= 'Jonsa';
 console.log(friends);//arrays ne permite sa modificam variabile chiar daca folosim 'const'
 


 const firstName = 'Jonas'; 
 const Jonas = [firstName,'Schmedtman', 2037-1991, 'teacher', friends];
 console.log(Jonas);
 console.log(Jonas.length);





//Exercise 


const calcAge = function(birthYear){
    return 2037 - birthYear; 
}
const  years =[1990, 1967,2010,2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[ years.length -1 ]);

console.log(age1,age2,age3);

const age =[];

//Add elements

const friends=['Mike','Stefan','Vlad'];
friends.push('Jon'); 
 //push este o functie de legare prin care adaugam alte elemente la sfarsit. 
//push trebuie sa fie aplicat doar catre unei Arramy cu asupra unei "cont"

console.log(friends);




//unshift este o metoda de a adauga elemente la inceputul arramy ului nostru, 

const friends=['Mike','Stefan','Vlad'];
friends.unshift('Jon'); 
console.log(friends);




//Remove elements 

const friends=['Mike','Stefan','Vlad'];

//friends.pop();//elimina ultimul element din Arramy. 
const popped = friends.pop();
console.log(popped);


friends.shift();//Elimina primul element 
console.log(friends);

//In consola ar trebui sa apara doar numele persoanei din mijloc pentru ca am eliminat numele Mike si Vlad.


console.log(friends.indexOf('Vlad'));//pentru a identifica unde se afla elementu; nostru.
   
console.log(friends.includes('Stefan')); 
console.log(friends.includes('Bob')); 




const bill
const calcTip = function(Bill){
    return bill >= 50 && bill <= 300 ? bill *0.15:  bill *0.2 ; 
}

const bills =[100,150,300];
const tips1 =calcTip(bills[0]);
const tips2 =calcTip(bills[1]);
const tips3 =calcTip(bills[2]);
console.log(bills.tips);






//Object 
//Introduction 


//Puteam sa oferim fiecarei valor un numar. 


//Arrays 

const jonasArrays = [
    'Jonas',
    'Muchen',
    'thacher',
    ['Mike','Peter','Stefn' ]

];
 

//Object 

const JonasObjec ={
    firstName: 'Jonas',
    lastName:'Muchen',
    job:'thacher',
    friends:['Mike','Peter','Steafn']
};
//Pentru objecte nu conteaza ordinea in care se afla. 



//DOT vs Bracket Notation. Object 


const Jonas ={
    firstName: 'Jonas',
    lastName:'Muchen',
    job:'thacher',
    friends:['Mike','Peter','Steafn']
};

console.log(Jonas);
 
console.log(Jonas.firstName);//Acesata estemetoda DOT de adauga un punct 
console.log(Jonas['firstName']);//Aceasta este metoda Breaket cu paracteze patrate. 


const nameKey = 'Name';
console.log(Jonas['first' + nameKey ]);
console.log(Jonas['last' + nameKey ]);


//Exemplu Retragera elementelor dintr-un element
 
//Ectragerea cu DOT 
const Jonas = {
    firstName: 'Jonas',
    lastName: 'Muchen',
    job: 'teacher',
    friends: ['Mike', 'Peter', 'Steafn'],
    location: 'Portugal',
    Twitter: '@Mihai2228'
};

// Extragem variabile din obiect
const firstName = Jonas.firstName;
const job = Jonas.job;
const location = Jonas.location;

console.log(firstName); // 'Jonas'
console.log(job); // 'teacher'
console.log(location); // 'Portugal'

//Extragerea cu Bracket
const Jonas = {
    firstName: 'Jonas',
    lastName: 'Muchen',
    job: 'teacher',
    friends: ['Mike', 'Peter', 'Steafn'],
    location: 'Portugal',
    Twitter: '@Mihai2228'
};

//Extragem variabile din obiect
const lastName = Jonas['lastName'];
const twitterHandle = Jonas['Twitter'];

console.log(lastName); // 'Muchen'
console.log(twitterHandle); // '@Mihai2228'


//Ex 

const Jonas = {
    firstName: 'Jonas',
    lastName: 'Muchen',
    job: 'teacher',  // Corectat
    friends: ['Mike', 'Peter', 'Steafn']
};

const insterestedIn =prompt('Ce stii despre Jonas'); 

if(Jonas[insterestedIn]){
    console.log(Jonas[insterestedIn]);
}
else {
    console.log('O intrebarea care nu se regaseste')
}



//Cum se adauga proprietati in Obiecte 


Jonas.location = 'Portugal';//se adauga folosind DOT 
Jonas['Twitter']='@Mihai2228'; //Se adauga cu Breacked 
console.log(Jonas);//Trimitem cererea  in consola. 



//Change 
//JOnas has 3 friends and his  the best friends is called Mike . 
 console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends and hi best friends is called ${Jonas.friends}`);

 



 //Object Methods


//Diferentele dintre o Expresie si o Delcaratie. 

//O expresie este o linie de cod care produce o valoare, 
//O declaratie este o linie de cod sau o putem denumi o instructiune care produc o actiune. Cand cream o variabila este o declaratie,
//Functiile pot fii atat declaratii cat si expresii. In functine de cum se construim. 


const Jonas ={
    firstName: 'Jonas',
    lastName:'Muchen',
    birthYeah: 1991,
    job:'thacher',
    friends:['Mike','Peter','Steafn'],
    hasDriveLicence:true, 
    

  //varinata normala
   // calcAge: function(birthYearh){
   //    return 2037-birthYeah;
   //
   // }



 //varinata nou folosind cuvantul "this "  
   //calcAge: function(){
    //console.log(this);
       // return 2037-this.birthYeah;
  //  }



  //A treia varinta,folosind tot "this "
 //calcAge: function(){
  //  this.age = 2037-this.birthYeah;
   // return this.age;
};


console.group(Jonas.calcAge()); 





//Loop 



//Loop sau bulcele face parte din structuri de control. Aceste structuri de control sunt elemente care permit executia unor anuite comnezi intr-o ordine alesa de noi. 
//Printre aceste functii de control avem structurile ,if,else if,else. 
//Mai avem si "swith" care este folosit pentru variante multiple 
//Structurile de date repetitive sau loop/bulce permit repetare unei cod de un numar de ori pana ce indeplineste o conditie. 
//For este folosit pentru a repeta un cod  de un anumit numar de ori pe baza unei conditii 
//While executa un cod atat timp cat conditia este adevarata. 
//Cand intalnim "break" se va iesi din bucla 
//Continue sare si trece la urmatoarea iretatie a buclei


for(let rep = 1; rep <=10; rep++){
    console.log(`Repetari au avut loc${rep}`)
}
//ca sa apara repetitiv de 10 ori 
for(let rep = 1; rep <=10; rep++){
    console.log("Repetari au avut loc rep")
}
//ca sa apara o singura data dar cu o valoare de 10 ori 


//Looping arrays. Breaking and continuing 


const jonasArrays = [
    'Jonas',
    'Muchen',
    'thacher',
    ['Mike','Peter','Stefn' ],
    true
    
];
const types=[];

for(let i = 0; i < jonasArrays.length; i++){
console.log(jonasArrays[i], typeof jonasArrays[i]);

types[i]= typeof jonasArrays[i];

}




const years = [1991,2007,1969,2020];
const ages = [];

for (let i = 0; i< years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);



//constinue and Break 


console.log('--- ONLY STRINGS ---')
for(let i = 0; i < jonasArrays.length; i++){
    if(typeof jonasArrays[i] !=='string')continue;

    console.log(jonasArrays[i], typeof jonasArrays[i]);
}



console.log('--- Break with number ---')
for(let i = 0; i < jonasArrays.length; i++){
    if(typeof jonasArrays[i] ==='number')break;

    console.log(jonasArrays[i], typeof jonasArrays[i]);
}



//Looping blackwards and loops in loops 


const Jonas = [
    'Jonas',
    'Muchen',
    'thacher',
    ['Mike','Peter','Stefn' ]
];
//realizam o bucla intr-o bulca 
for(let i =Jonas.length -1; i>=0; i--){
    console.log(Jonas[i]);
}
for(let exercise =1;exercise < 4;exercise ++){
    console.log(`------Strating exercise ${exercise}`);
//acesta bulca se repeta de 5 ori dupa care se introce la prim bucal ca sa se repede din nou, dupa care se intoarce aici timp de 3 ori 
    for(let rep =1; rep <6; rep++){
        console.log(`Lifting weight repetition$(rep)`);
    }
}



//The while loop


for(let rep=1;rep<=10;rep++){
    console.log(`Lifting weighs repetitions${rep}`);

}

let rep =1;
while(rep<=10){
    console.log(`Lifting weighs repetitions${rep}`);
    rep++;
}