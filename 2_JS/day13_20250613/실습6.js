// [ 실습6 ]
// 문제 1: 배열에서 최댓값 찾기
// 주어진 숫자 배열에서 가장 큰 값을 찾아 콘솔에 출력하는 프로그램을 작성하시오. (단, Math.max() 함수 사용 금지)
// let numbers = [23, 5, 67, 12, 88, 34];

// let numbers = [23, 5, 67, 12, 88, 34];
// let numMax=0; // 점수를 최저점수를 임의로 대입 시작
// for(index=0; index <= numbers.length -1; index++){
//     if(numbers[index] > numMax){
//         numMax = numbers[index];
//     }
// }
//  console.log(numMax);

// 문제 2: 별 찍기 (기본 역삼각형)
// for 중첩 반복문을 사용하여 아래와 같은 모양의 별을 출력하시오.
// *****
// ****
// ***
// **
// *

//let output = ''; // 빈 문자열 선언
// for (i = 1; i <= 5; i++) { // --- 행(i), 5번
//     // i= 1부터 5이하 까지 1씩 증가 
//     for (j = 1; j <= 5-i+1; j++) {
//         output += '*';
//     }
//     output += '\n';
// }
// console.log(output);


// 문제 3: 배열에서 특정 문자 찾기 (break 활용)
// 다음 사용자 이름 배열에서 이름에 '솔' 이라는 글자가 들어간 첫 번째 사용자를 찾으면, 해당 사용자의 이름을 출력하고 반복문을 종료하시오.
// let userNames = ['김하준', '이서아', '박솔민', '최도윤'];
// 힌트: 문자열의 .indexOf() 메소드를 사용하세요.

//(1) 모든 배열의 이름들을 하나씩 꺼낸다. <배열 순회>

// let userNames = ['김하준', '이서아', '박솔민', '최도윤'];
// let searchname=userNames[0]
// for(index=0; index <= userNames.length -1; index++){
//     let name= userNames[index];
//     if(name.indexOf("솔") != -1){
//         console.log(`${name}입니다.`)
//         break;
//     }
// }



// 문제 4: 2차원 배열의 모든 요소 출력하기
// 다음과 같은 2차원 배열(좌석표)이 있습니다. 중첩 for 반복문을 사용하여 모든 좌석의 값을 순서대로 출력하시오.
// let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']];

// console.log(seatLayout[0]); // ['A1', 'A2', 'A3']
// console.log(seatLayout[1]); // ['B1', 'B2', 'B3']
// console.log(seatLayout[2]); // ['C1', 'C2', 'C3']
// let 행1 = seatLayout[0];
//     console.log(행1[0]);
//     console.log(행1[1]);
//     console.log(행1[2]);

// let 행2 = seatLayout[1];
//     console.log(행1[0]);
//     console.log(행1[1]);
//     console.log(행1[2]);

// let 행3 = seatLayout[2];
//     console.log(행1[0]);
//     console.log(행1[1]);
//     console.log(행1[2]);


// let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']];
// for(let index =0 ; index <= seatLayout.length -1; index ++){
//     aLayout=seatLayout[index]
//     for(let dex=0; dex <= aLayout.length -1; dex++){
//         let column = aLayout[dex];
//         console.log(column);
//     }
// }



// 문제 5: 배열의 중복 요소 제거하기
// 주어진 배열에서 중복된 요소를 제거하고, 중복 없는 새로운 배열을 만들어 출력하시오.
// let numbers = [1, 5, 2, 3, 5, 1, 4, 2];
// 힌트: 새로운 배열을 만들고, for 반복문으로 기존 배열을 순회하며 새로운 배열에 해당 요소가 없을( .indexOf() == -1 ) 때만 추가(push())합니다.

// 중복 숫자 1,5,2  // 노중복 3,4
// let numList = [];
// let numbers = [1, 5, 2, 3, 5, 1, 4, 2];

// for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];
//     if (numList.indexOf(num) == -1) {
//         numList.push(num);
//     }
// }

// console.log(numList); 




// 문제 6: 버블 정렬 (Bubble Sort) 구현하기
// 주어진 숫자 배열을 '버블 정렬' 알고리즘을 이용하여 오름차순으로 정렬하고, 최종 정렬된 배열을 출력하시오.
// let numbers = [5, 3, 4, 1, 2];
// 힌트: 중첩 for 반복문을 사용하며, 이웃한 두 요소를 비교하 위치를 바꿉니다.
//  let numbers = [5, 3, 4, 1, 2];

// for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = 0; j < numbers.length - 1 - i; j++) {
//         if (numbers[j] > numbers[j + 1]) {
//             console.log(numbers)

//             let temp = numbers[j];
//             numbers[j] = numbers[j + 1];
//             numbers[j + 1] = temp;
//         }
//     }
// }






// 문제 7: 재고 관리 시스템
// 두 개의 배열 products(상품 목록)와 stock(재고 수량)이 있습니다. 사용자로부터 구매할 상품명과 수량을 입력받아, 재고가 충분하면 "구매 완료!"를 출력하고 재고를 차감하세요. 재고가 부족하면 "재고가 부족합니다."를 출력합니다.
// let products = ['볼펜', '노트', '지우개'];
// let stock = [10, 5, 20];
//===================(방법1)=====================
// let products = ['볼펜', '노트', '지우개'];
// let stock = [10, 5, 20];
// let 상품명=prompt("상품:");
// let 수량=Number(prompt("수량"));
//재고가 충분(비교/논리 판단), 재고를 차감(연산/수정)
//(2) 제품목록에서 입력받은 값 찾아라, (2-1) 제품목록들의 모든 제품들을 순회(조회)

// for( index=0; index <= products.length -1; index++){
//     let product = products[index] // index 번째의 제품 1개 호출
//     if(product == 상품명 ){ // 만약에 index 제품명과 입력받은 제품명과 같으면        
//         console.log('존재 하는 제품명');
//         if(stock [index] >= 수량){ //만약에 index번째 재고가 입력받은 수량 보다 더 크면
//             stock[index] -= 수량;
//             console.log('구매 완료');
//         }else{
//             console.log('제품부족');
//         }
//     }
// }
//===================(방법2)=====================
// let products = ['볼펜', '노트', '지우개'];
// let stock = [10, 5, 20];
// let 상품명=prompt("상품:");
// let 수량=Number(prompt("수량"));
// let findIndex =products.indexOf(상품명);
// // -1 : 없다 , 0이상 : 있다.

// if(findIndex >=0){
//     if(stock [findIndex] >= 수량 ){
//         console.log("구매완료");
//         stock[findIndex] -=수량;
//     }else{ console.log("재고 부족합니다.");

//     }
// }



//반복문 없이 '볼펜' 과 5를 입력했을때
// =============if로 했을때=================
// if(product.indexOf('볼펜') != -1){
//     if(stock[] >=5;){
//         stock[] -=5;
//     }
// }



//(1) 사용자로부터 구매할 상품명 입력받아,
//(2) 사용자로부터 구매할 수량을 입력 받아,



// 문제 8: 영화 평점 시각화하기
// 주어진 영화 이름과 평점 배열을 이용하여, 각 영화의 평점을 별(★)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
// (1). 초기 데이터
// 영화 이름과 평점은 두 배열의 동일한 인덱스를 사용합니다.
// let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
// let movieRatings = [8, 4, 7, 6];
// (2). 구현 조건
// for 반복문을 사용하여 모든 영화를 순회합니다.
// 각 영화의 평점(10점 만점)만큼 꽉 찬 별(★)을, 나머지 점수만큼 빈 별(☆)을 출력합니다.
// 예시: 평점이 8점이면 ★★★★★★★★☆☆ (총 10개의 별)
// 영화 이름과 별점은 HTML에 한 줄씩 표시합니다.
// (3). HTML 출력 예시
// 히든페이스      ★★★★★★★★☆☆
// 위키드          ★★★★☆☆☆☆☆☆
// 글래디에이터2   ★★★★★★★☆☆☆
// 청설            ★★★★★★☆☆☆☆


// let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
// let movieRatings = [8, 4, 7, 6];
// let output = ``;
// for (let i = 0; i <= movieNames.length - 1; i++) {
//     let names = movieNames[i];
//     output += `<div> ${names}`
//     let ratings = movieRatings[i];

//     for (let star = 1; star <= 10; star++) {
//         if (star <= ratings) {
//             output += `<span>★</span>`
//         } else {
//             output += `<span>☆</span>`
//         }
//     } output += `</div>`
// }
// document.write(output);


// 문제 9: 좌석 예약 상태 표시하기
// 총 6개의 좌석 상태 정보가 담긴 배열을 이용하여, 좌석 배치도와 상태를 HTML에 출력하는 프로그램을 작성하시오.
// (1). 초기 데이터
// 좌석의 상태는 '빈좌석' 또는 '예약석'으로 구성됩니다.
// let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
// (2). 구현 조건
// for 반복문을 사용하여 6개의 좌석을 모두 출력합니다.
// 각 좌석은 하나의 <div> 태그로 표시합니다.
// 좌석 상태에 따라 <div> 태그에 CSS 색상을 다르게 적용합니다.
// '빈좌석': color: blue;
// '예약석': color: red;
// 좌석은 2칸씩 3줄 형태로 배치합니다.
// (3). 출력 예시 (HTML)
// 빈좌석 예약석
// 예약석 빈좌석
// 예약석 빈좌석

// let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
// for( index=0; index <= seatStatus.length -1; index++){
//     let seat = seatStatus[index];
//     if(seat =="빈좌석"){
//         document.write(`<div style="color:blue">빈좌석</div>`)
//     }else{
//         document.write(`<div style="color:red">예약석</div>`)
//     }
// }





// 문제 10: 주차 요금 정산하기
// 차량별 주차 시간 데이터가 주어졌을 때, 아래의 요금 규정에 따라 각 차량이 지불해야 할 최종 주차 요금을 계산하여 HTML에 출력하는 프로그램을 작성하시오.
// (1). 초기 데이터
// 차량 번호와 주차 시간(분)은 두 배열의 동일한 인덱스를 사용합니다.
// let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
// let usageMinutes = [65, 30, 140, 420];
// (2). 요금 규정
// 기본 요금: 최초 30분까지 1,000원
// 추가 요금: 30분 초과 시, 매 10분마다 500원씩 추가
// 일일 최대 요금: 20,000원 (아무리 오래 주차해도 20,000원을 초과할 수 없음)
// (3). 구현 조건
// for 반복문을 사용하여 모든 차량의 데이터를 순회합니다.
// 각 차량의 주차 시간에 맞춰 최종 요금을 계산합니다.
// 계산된 요금이 일일 최대 요금을 초과하면, 최대 요금(20,000원)으로 처리합니다.
// HTML에 차량 번호, 주차 시간, 최종 요금을 한 줄씩 출력합니다.
// (4). 출력 예시 (HTML)
// 250어7142: 65분 주차, 최종 요금: 2500원
// 142가7415: 30분 주차, 최종 요금: 1000원
// 888호8888: 140분 주차, 최종 요금: 6500원
// 931나8234: 420분 주차, 최종 요금: 20000원
// (힌트)
// 기본 시간(30분)을 초과한 시간을 계산하고, parseInt() 함수를 사용하여 10분 단위로 버림 처리하면 추가 요금 단위를 쉽게 계산할 수 있습니다.
// 추가 요금 단위 계산식:parseInt( (총 주차시간 - 30) / 10 )
// 계산 예시:65분 주차 시 parseInt( (65 - 30) / 10 )는 parseInt(3.5)가 되어 결과는 3이 됩니다. 따라서 추가 요금은 3 * 500원으로 계산됩니다.

let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];
output = ``;
for(let i=0; i<=carNumbers.length -1; i++){
    let numbers= carNumbers[i];
    let minutes= usageMinutes[i];
    let pay= parseInt((minutes-30)/10);
    pay = pay > 0 ? pay : 0;
    let pay1= pay*500+1000
    if (pay1 > 20000) {
        pay1 = 20000;
    }
    output += `<div> ${numbers}: ${minutes}분주차, 최종요금: ${pay1}원</div>` 
}
document.write(output);