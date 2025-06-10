//p.519
//1. 자동 형 변환
    // (1) 문자열형의 숫자에 곱하기 1를 하면 문자열 숫자가 숫자형 숫자로 변환 한다.
let input = prompt("숫자 입력하세요.")  //5, prompt함수는 항상 문자열 반환 한다.
console.log(typeof input)              //string
let result=input*10;                    // "5"*10,  *(곱하기 연산자)
console.log(typeof result)
    // (2) 문자열형 +숫자형 일 경우 자동으로 문자열 으로 변환된다. +(연결 연산자)
let one="20" //string
let two=10   //number
console.log(one+two)        //"20"+10=30[x] 아니고 "2010" 된다.
    //주의할점
let time=prompt('사용(분) 시간 입력하세요.');
console.log(time+1000)                          // *8**1000=>8000, ** *8*+1000 => 81000 **


// 2. 자료형 변환 함수.
    // (1) Number("문자열")
console.log(Number("10"));          //"10" --> 10변환
console.log(Number("10ABC"));       //"10ABC" --> 변환불가능, NaN(Not a Number)
    // (2) *parseInt()         :정수 숫자 변환 함수
console.log(parseInt("123"));       //123
console.log(parseInt("123.45"));    //123 , 소수점 잘림
console.log(parseInt("123ABC"));    //123 , 문자 잘림
    // (3) paseFloat()          :실수 숫자 변환 함수
console.log(parseFloat('123.45'))   //123.45
    // (4) String
console.log(String(123));

// 생각해보기1 : 국어 점수 와 수학 점수를 prompt로 입력 받아 더한 결과를 console.log 출력 하시오
    // 출력 예] 150
// (1) 입력받기, prompt
// prompt("국어점수 입력하세요")
// prompt("수학점수 입력하세요")
// (2) 저장하기 , 변수
let 국어점수=prompt("국어 점수입력하세요") //let 국어점수=Number("국어 점수입력하세요") (숫자형)
let 수학점수=prompt("수학 점수입력하세요")
// (3) 처리하기, 연산
let 합계점수=Number(국어점수)+Number(수학점수) // 두 변수를 각 변수명을 작성하여 호출한다.
//"국어점수" : 문자그자체 vs 국어점수 : 변수 호출
// (4)출력하기, console, 템플릿 리터럴(백틱)
console.log(`총합계: ${합계점수}`);

// 생각해보기2 : 이름 과 나이(숫자)를 prompt로 입력 받아 ducument.write 이용하여 <h3> 마크업 출력 하시오
    // 출력] <h3> 강호동(45) </h3>
let 이름= prompt("이름 입력해주세요")
let 나이= Number(prompt("이름 입력해주세요")); //()소괄호 중첩일때 안쪽 () 소괄호가 우선 처리 된다.
document.write(`<h3> ${이름}(${나이})</h3>`)
