
//[1] 매개변수x, 반환값x
function func1(){ console.log('fun1.exe')}
//[2] 매개변수o, 반환값x            ,대표함수 : console.log( )
function func2(x,y){
    console.log(`fun2.exe ${x+y}`)
}
//[3] 매개변수o 반환값o             ,대표함수 : prompt( )
function func3(x,y){
    console.log(`func3.exe`)
    let result=x+y;
    return result;
}
//[4] 매개변수x 반환값o
function func4(){
    console.log(`func4.exe`);
    return "대한민국";
}

//[5] 호출
func1();                //매개변수x,반환값x
func2(2,3);             //매개변수o,반환값x
func3(1,5);             //매개변수o,반환값o(변수에 저장x)
let a = func3(1,5);     //매개변수o,반환값o(변수에 저장o)
func4();                //매개변수x,반환값o(변수에 저장o/x)

//[6] 지역변수: 특정한 { }안에서 선언된 변수는 선언된 { }밖에서 호출/사용 불가능
// ---> { } 종료되면 종료되는 { }내 선언 모든 메모리 자동으로 사라진다.
// ---> if(){}, for(){}, fuc1(){}
//======================대한민국===========================//
// let 전역변수 = '대한민국'
// if(true){
//     //=================인천======================//
//     let 지역변수1='인천광역시';
//     console.log(전역변수);
//     console.log(지역변수1);
//     for(i=0; i<1; i++){
//         // =============부평구===================//
//         let 지역변수2 = '부평구';
//         console.log(전역변수);
//         console.log(지역변수1);
//         console.log(지역변수2);
//     }
    // console.log(지역변수2); // fail 부평구 : 현 위치는 인천광역시 라서 부평구 호출[x]
// }
//console.log(지역변수1); // fail: 현 위치에서 인천광역시 호출[x]
//console.log(지역변수2); // fail: 현 위치에서 부평구 호출[x]

// [7] 생각해보기 : 이름을 입력받아 배열 저장.
// let nameList=[]

// function nameAdd( ){
//     let name = prompt('이름');
//     nameList.push(name);
// }

// nameAdd();
// nameAdd();
// console.log(nameList); // [입력된값1, 입력된값2]
// 현재 코드흐름이 58번째 일때 변수는 총 몇개 일까요? nameList 1개
        //vs
// let nameList2=[]
// let name1=prompt('이름:');
// nameList.push(name1);
// let name2=prompt('이름:');
// nameList.push(name2);
// 현재 코드흐름이 66번째 일때 변수는 총 몇개 일까요? nameList,name1,name2

//[8] HTML 마크업 이벤트 속성
function 이벤트함수(){
    console.log(`[[클릭]]`)
}
이벤트함수();
//1. JS에서 함수 실행 하는 방법
//2.HTML에서 JS함수 실행 하는 방법
// <마크업 이벤트 속성명="함수명"> 

