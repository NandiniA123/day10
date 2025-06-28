function add()
{
var num1,num2,sum;
num1=parseInt(document.getElementById("textFirstNumber").value);
num2=parseInt(document.getElementById("textSecondNumber").value);
sum=num1+num2;
document.getElementById("textAnswer").value=sum;
}
function sub()
{
var num1,num2,sub;
num1=parseInt(document.getElementById("textFirstNumber").value);
num2=parseInt(document.getElementById("textSecondNumber").value);
sub=num1-num2;
document.getElementById("textAnswer").value=sub;
}
function mul()
{
var num1,num2,mul;
num1=parseInt(document.getElementById("textFirstNumber").value);
num2=parseInt(document.getElementById("textSecondNumber").value);
mul=num1*num2;
document.getElementById("textAnswer").value=mul;
}
function div()
{
var num1,num2,div;
num1=parseInt(document.getElementById("textFirstNumber").value);
num2=parseInt(document.getElementById("textSecondNumber").value);
div=num1/num2;
document.getElementById("textAnswer").value=div;
}
function per()
{
var num1,num2,per;
num1=parseInt(document.getElementById("textFirstNumber").value);
num2=parseInt(document.getElementById("textSecondNumber").value);
per=num1/num2*100;
document.getElementById("textAnswer").value=per;
}
function clearScreen()
{
document.getElementById("textFirstNumber").value="";
document.getElementById("textSecondNumber").value="";
document.getElementById('textAnswer').value =""; 
}

function showGreeting(){
var name=document.getElementById("nameInput").value;
var temp="Hello " + name + " ! ";
document.getElementById("greeting").textContent=temp;
}
