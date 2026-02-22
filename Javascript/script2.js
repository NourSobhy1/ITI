// 1)
var student={
    name:"nour",
    age:23,
    grades:{
        math:90,
        science:85,
        literature:88

    },
    contactInfo:{
        email:"noursobhy@jkio.com",
        phone:"123-456-789"
    }
};

function display(obj){
    var keys= Object.keys(obj);

    for(var i=0; i<keys.length; i++){

        var key = keys[i];

        if(typeof obj[keys[i]]=== "object"){

            var keys2 = Object.keys(obj[key]);

            for(var j=0; j<keys2.length; j++){
                var supkey= keys2[j];
             console.log(`${key}.${supkey} =  ${obj[key][supkey]}`);
            }
        }

        else{
            console.log(`${key} =  ${obj[key]}`);
        }
            
    }
}

display(student)

console.log("<-----------------2------------------>")

// 2)
var library={books:[
        {
            title: "Code",
            author: "nkkm",
            year: 2008
        },
        {
            title: "js",
            author: "lkl",
            year: 2015
        },
]}


function logs(obj){
    for(var i=0; i<obj.books.length; i++){
        console.log(obj.books[i].title);
    }
}
logs(library)


console.log("<-----------------3------------------>")

// 3)

function processArray(arr,Callback){
    var result=[];
  for(var i=0;i<arr.length;i++){
   result.push(Callback(arr[i]));
   
  }
  console.log(result)
}

function square(num){
num*=num;
return num;
}
var array=[1,2,3,4,5]
processArray(array,square);



console.log("<-----------------4------------------>")

// 4) 
function randomName(arr){
    var n1= Math.floor(Math.random() * arr.length);
    var n2= Math.floor(Math.random() * arr.length);
    var arr2=[];
    while(n1 == n2)
        n2= Math.floor(Math.random() * arr.length);
    arr2.push(arr[n1]);
    arr2.push(arr[n2]);
    console.log(arr2);
}
var arr1=["nour","nada","naira","mohamed"];
randomName(arr1)



console.log("<-----------------5------------------>")

// 5)

function applyOperation(num1, num2, Callback) {
    return Callback(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(applyOperation(5, 3, add));       
console.log(applyOperation(5, 3, multiply)); 
console.log( applyOperation(10, 2, function(a, b) {  return a - b;}))
console.log( applyOperation(10, 2, function(a, b) {  return a / b;}))


