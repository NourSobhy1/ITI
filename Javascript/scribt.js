// var name= "nour";
// var age= 23;
// var city= "Egypt";
// document.writeln(`<h1>My name is ${name}, I am ${age} years old and I live in ${city}</h1>`);

// var num1 = Number(prompt("enter number1 "));
// while(Number.isNaN(num1)){
//   num1= Number(prompt("please enter number")); 
// }

// var num2 = Number(prompt("enter number2 "));
// while(Number.isNaN(num2)){
//   num2= Number(prompt("please enter number")); 
// }

// document.writeln(`<h3>'+': ${num1}+${num2} = ${num1+num2} <h3>`);
// document.writeln(`<h3>'-': ${num1}-${num2} = ${num1-num2} <h3>`);
// document.writeln(`<h3>'*': ${num1}*${num2} = ${num1*num2} <h3>`);
// document.writeln(`<h3>'/': ${num1}/${num2} = ${num1/num2} <h3>`);









// var confirm1= confirm("Do you Fly");
// if(confirm1==true)
// {
//  var confirm2= confirm("Are you Wild");
//  if(confirm1==true)
//  {
//     document.writeln("<h4>Eagle<h4>")
//  }
//  else{
//     document.writeln("<h4>parrot<h4>")
//  }
// }
// else{
//     confirm3= confirm("Are you Live Undersea");
//     if(confirm3==true){
//        confirm4= confirm("Are you  Wild"); 
//        if(confirm4==true){
//         document.writeln("<h4>Shark<h4>")
//        }
//        else{
//         document.writeln("<h4>Dolphin<h4>")
//        }
//     }
//     else{
//         confirm5= confirm("Are you Wild"); 
//        if(confirm4==true){
//         document.writeln("<h4>Lion<h4>")
//        }
//        else{
//         document.writeln("<h4>cat<h4>")
//        }
//     }
// }





// var message= prompt("enter message ");
// for(var i=1 ;i<=6;i++){
//     document.writeln(`<h${i}>${message}<h${i}>`)
// }



// var sum = 0;
// var num;
// var lastNumber = null;

// while (true) {
//     num = prompt("Enter a number:");
//     if (isNaN(num)) {
//         alert("Please enter a numeric value");
//         continue;
//     }
//     num = Number(num);
//     if (num === 0) {
//         break;
//     }
//     if (sum + num >= 100) {
//         document.writeln(`<h4>Last valid number: ${lastNumber}</h4>`);
//         document.writeln(`<h4>Last valid sum: ${sum}</h4>`);
//         break;
//     }
//     sum += num;
//     lastNumber = num;

//     document.writeln(`<h4>Number = ${num}</h4>`);
// }

// document.writeln(`<h3>Final Sum = ${sum}</h3>`);



var num;
while(true){
    num = prompt("Enter a number:");
    if (isNaN(num)) {
        alert("Please enter a numeric value");
        continue;
    }
    else
        break;
}
if(num % 3 ==0 && num % 5 ==0){
    document.writeln(`<h3>fizz bizz</h3>`);
}
else if(num % 3 ==0){
    document.writeln(`<h3>fizz</h3>`);
}
else if(num % 5 ==0){
    document.writeln(`<h3>bizz</h3>`);
}
else
     document.writeln(`<h3>none</h3>`);



