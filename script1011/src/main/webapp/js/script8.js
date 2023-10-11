/**
 * 
 * 
 */
//입력 2개

var input = 0;
var weight = 0;

//2개를 입력받음
var input = Number(prompt("키를 입력하세요","숫자입력"));
var weight = Number(prompt("몸무게를 입력하세요","숫자입력"));


var height = input/100;
var result = weight / (height*height);

//result출력
document.write("나의 BMI : "+result+"<br>");


//if비교 if else if, else if, else if ////////BMI가 18.5 이하면 저체중 ／ 18.5 ~ 22.9 사이면 정상 ／ 23.0 ~ 24.9 사이면 과체중 ／ 25.0 이상부터는 비만으로 판정.

if(result>=25){
	document.write("결과 : ",result,"<br>비만입니다.","<br>");
}else if(result>=23.0){
	document.write("결과 : ",result,"<br>과체중입니다.","<br>");
}else if(result>=18.5){
	document.write("결과 : ",result,"<br>정상입니다.","<br>");
}else{
	document.write("결과 : ",result,"<br>저체중입니다.","<br>");
}