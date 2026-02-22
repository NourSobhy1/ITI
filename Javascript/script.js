// 1-Temperature Converter

function temperatureConverter(Celsius){
    console.log("temperature in Fahrenheit= ",(Celsius * 9/5) + 32)
}

temperatureConverter(25);

// 2-Message Sender (Callback Function)

function sendMessage(message , Callback){
 console.log(message);
 Callback();

}

function message2(){
 console.log("called function");

}
sendMessage("hello nour",message2)


// 3-Capitalize Words (Array)
var arr1=["nour","nada","naira","mohammed"]
var result = [];
function capitalizeWords(arr){
    for(var i=0;i<arr.length;i++){
       result[i]= arr[i][0].toUpperCase()+ arr[i].slice(1);
    }
    return result;
}

console.log(capitalizeWords(arr1));


// 4)


function countE(stri){
    var counter=0;
    for(var i=0;i<stri.length ; i++){
       if(stri[i]==='e')
        counter++;
    }
    return counter;
}
var str=prompt("enter string: ");
console.log(countE(str));




var str2=prompt("Enter string to be chicked: ");
var confirm1= confirm("is it case sensitivity? ");
function chick(_str,_confirm){
    if(!_confirm){
    _str=_str.toUpperCase();
     var reversed= _str.split("").reverse().join("");
     if(_str===reversed)
        console.log("palindrome");
     else
        console.log("not palindrome");
    }

    else{
        var reversed= _str.split("").reverse().join("");
     if(_str===reversed)
        console.log("palindrome");
     else
        console.log("not palindrome");
    }
}
chick(str2,confirm1);


