
/**
 * 
 */

// 2개의 숫자를 입력받아 두수를 사칙연산 결과값을 출력하시오.
// prompt(input1,"0");

function scoreIn(){

var a = Number(prompt("숫자를 입력하세요","0"));
var b = Number(prompt("숫자를 입력하세요","0"));
document.write("<h1> 1번째 입력받은 숫자: "+a+"</h1>");
document.write("<h1> 2번째 입력받은 숫자: "+b+"</h1>");
document.write("<h1> 더하기 : "+(a+b)+"</h1>");
document.write("<h1> 빼기 : "+(a-b)+"</h1>");
document.write("<h1> 곱하기 : "+(a*b)+"</h1>");
document.write("<h1> 나누기 : "+(a/b)+"</h1>");

}