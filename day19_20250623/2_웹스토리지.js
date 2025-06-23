// 예제 1: localStorage에 데이터 저장하고 불러오기
// localStorage에 <input> 으로 입력받은 사용자의 아이디를 저장하고, 페이지를 새로고침해도 그 값이 유지되는 것을 확인 하시오. 

// function userAdd(){ 
//         // *함수 실행 확인 로그
//     console.log('---userAdd---');
//     // 1. input 마크업 객체 가져오기
//     const userid=document.querySelector('#userid');
//         // * 마크업 객체 확인
//         console.log(userid);
//     // 2. 마크업 객체내 value(입력받은값) 가져오기
//     const user=userid.value;
//         // * 입력 받은값 확인
//         console.log(user)
//     // 3. 웹스토리지 확인
//     localStorage.setItem('user',user);

// }

// 예제 2: localStorage에 객체 저장하기 (JSON.stringify)
// 아래 사용자의 환경 설정(객체)을 문자열로 변환하여 localStorage에 저장 하시오. 
const userSettings = { theme: 'dark', notifications: true, language: 'ko' };

// 1. 객체를 문자열로 반환
let data = JSON.stringify(userSettings); // 임의 자료 문자로 변환

// 2. 변환 한 문자열을 localStorage 저장
localStorage.setItem('data',data);      // 임의 자료(value)를 속성(key)명을 부여 하는 저장

// 예제 3: localStorage에서 객체 불러오기 (JSON.parse)
// localStorage에 문자열로 저장된 사용자 설정(userSettings) 을 다시 객체로 변환하여 사용 하시오. 

// 1. localStorage 특정 속상 값 호출
let getData = localStorage.getItem('data');

// 2. 타입변환
let jsonData = JSON.parse(getData);
console.log(jsonData);


// 예제 4: 데이터 삭제하기 (removeItem, clear)
// 스토리지에 저장된 특정 데이터(userSettings) 또는 전체 데이터를 삭제 하시오. 

// //(방법1) 특정한 속성 삭제
// localStorage.removeItem('data');
// console.log(data);

// //(방법2) 전체삭제
// localStorage.clear();


// 예제 5: 방문 횟수 카운터 만들기
// 페이지가 로드될 때마다 sessionStorage를 사용하여 방문 횟수를 1씩 증가시키시오. 
// 현재 방문 횟수를 id="visitCount"인 span 태그에 "이번 세션에서 O번째 방문입니다." 형식으로 출력하시오. 
// (페이지를 새로고침하면 숫자가 올라가고, 브라우저 탭을 닫았다 다시 열면 1로 초기화되어야 합니다.)

// 1. 기존의 웹스토리지 불러오기
let visit = sessionStorage.getItem('visit');

    //존재 하지 않은 속성명 'null', 존재하는 속성명은 '값' 변환
if(visit==null){ //속성명이 존재 하지 않을때 속성 초기화 해주기
    //2. 새로운 속성 만들기
    sessionStorage.setItem('visit',1);
    visit=1;
}else{ // 이미 존재하는 속성명 이면
    visit=Number(visit)+1; // 1증가 한다. Number() 숫자로 타입 변환
    // 3. 웹스토리지 속성값 수정: 동일한 속성명으로 새로운 값 설정
    sessionStorage.setItem('visit',visit);
}
const visitCount = document.querySelector('#visitCount');
visitCount.innerHTML=visit;
console.log(visit);
