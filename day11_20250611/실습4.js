//8,10번 풀기

//[문제1]
/*
let 밑변 =Number(prompt("밑변 : "));
let 높이 =Number(prompt("높이 : "));
let 합산 = 밑변*높이/2;
console.log(`결과: ${합산}`);
*/

//[문제2]
/*
let 온도 =Number(prompt("온도 : "));
섭씨온도=(온도*9/5)+32;
console.log(`섭씨온도: ${섭씨온도}`);
*/

//[문제3]
/*
let 년도=Number(prompt("년도:"));
계산 = 2025-년도;
console.log(`나이: ${계산}`);
*/

//[문제4]
/*
let 키=Number(prompt(" 키: "));
let 키계산=키/100;
let 몸무게=Number(prompt("몸무게 :"));
let 계산=parseInt(몸무게/(키계산*키계산));
console.log(`계산: ${계산}`);
*/

//[문제5] 
/*
let 아이디=prompt("아이디 :");
let 이메일=prompt("이메일 :");
result= 아이디 == 'admin' || 이메일=='admin@test.com' ? "관리자" : "일반사용자"; 
console.log(result);
*/

//[문제6]
/*
let 점수=Number(prompt("점수: "));
학점= 점수 >= 90 ? "A" : 점수 >=80 ? "B" : "C";
document.write(`<h2> 학점: ${학점} </h2>`);
*/

//[문제7]
/*
let 이벤트나이=Number(prompt("나이 입력:"));
대상= 이벤트나이 >= 20 && 이벤트나이<= 29 ? "이벤트대상입니다" : "이벤트대상아닙니다.";
console.log(`발표: ${대상}`);
*/

//[문제8] 뭔말인지 잘 모름

//[문제9]
/*
let todoList =["장보기","과제하기"];
let todo =prompt("새로운 할일 입력하세요");//입력받기, 입력받고 입력받은 값으로 다음 행동이 필요 하므로 저장(기억)!
todoList.push(todo); //입력받은 값을 배열 추가
console.log(todoList); //배열 전체 요소 출력
*/

//[문제10]
/*
let waitingList=['김민준','이서연','박도윤','최지우'];
console.log(waitingList[0])
console.log(waitingList[1])
console.log(waitingList[2])
console.log(waitingList[3])
console.log(waitingList[4])

waitingList = ["최지우","박도윤"];
console.log(waitingList);
console.log(waitingList.indexOf('최지우'));

*/