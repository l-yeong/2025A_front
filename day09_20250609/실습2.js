/*[ JS 실습2 ]
- 문제1
    손님에게 이름과 원하는 음료, 그리고 수량을 순서대로 물어본 후, 모든 정보를 조합하여 
    바리스타가 볼 수 있도록 콘솔에 주문 내역을 출력하는 프로그램을 만드세요.
- 요구사항
    1. prompt()를 사용하여 사용자로부터 다음 정보를 입력받습니다.
    손님의 이름,원하는 음료,주문 수량
    2. let 또는 const를 사용해 입력받은 값들을 각각의 변수에 저장합니다.
    3. console.log()를 사용하여 정해진 형식으로 주문 내역을 콘솔에 출력합니다.
- 출력 예시
    [주문 접수]
    이름 
    김코딩
    메뉴
    아메리카노
    수량
    3잔
*/


let dlfma = prompt ("이름 입력해주세요");
console.log(dlfma);

let apsb = prompt ("메뉴 입력해주세요");
console.log(apsb);

let tnfid = prompt ("수량 입력해주세요");
console.log(tnfid);


/*
- 문제2
    사용자에게 이름과 오늘 한 운동 종류, 그리고 **운동 시간(분)**을 순서대로 물어본 후, 
    입력된 정보를 바탕으로 콘솔에 오늘의 운동 기록을 보기 좋게 출력하는 프로그램을 만드세요.
- 요구사항
    1.prompt()를 사용하여 다음 정보를 입력받습니다.
    사용자의 이름
    운동 종류
    운동 시간 (분 단위)
    2.let 또는 const를 사용해 입력받은 값들을 각각의 변수에 저장합니다.
    3.console.log()를 사용하여 정해진 형식으로 운동 기록을 콘솔에 출력합니다.
    4.분당 소모 칼로리(예: 1분당 7칼로리)를 곱해서 총 소모 칼로리를 계산하고 콘솔에 함께 출력해 보세요.
- 출력 예시
    [운동 기록] 
    이름
    박건강
    운동종류
    달리기 운동
    운동시간
    45
    칼로리
    315
*/

let dlfma1 = prompt ("이름 입력해주세요");
console.log(dlfma1);

let whdfb = prompt (" 운동 종류 입력해주세요");
console.log(whdfb);

let tlrks = prompt ("운동 시간 입력해주세요");
console.log(tlrks);

let zkffhfl1 = prompt ("칼로리 입력해주세요");
let zkffhfl2=7;
let zkffhfl3 =zkffhfl1 * zkffhfl2;

console.log(zkffhfl3);

