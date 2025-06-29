/*
실습9 과제: 회원별 구독 상태 (관리자) 대시보드 만들기
우리 회사의 서비스에 가입한 '회원' 목록, 회사가 제공하는 '구독 상품' 목록, 
그리고 어떤 회원이 어떤 상품을 언제까지 구독하는지를 나타내는 '구독 내역' 목록이 있습니다. 
이 세 가지 데이터를 조합하여 각 회원의 현재 구독 상태를 보여주는 관리자용 대시보드를 웹페이지에 동적으로 구현해야 합니다.

* 요구 사항
1. 데이터 모델링 : 배열과 객체를 활용하여 샘플데이터로 구성하시오.
   (1) 아래 각 정보는 필수로 합니다. 
   - 회원정보 : 아이디 , 회원이름
   - 구독상품 : 상품명 , 가격 
   - 구독내역 : 구독종료일 
   (2) 각 정보별 식별 가능한 정보를 추가합니다.
   (3) 각 정보별 샘플(임의)데이터는 3개 이상씩 하여 배열 또는 객체를 선언 합니다.
2. 구현 로직
3. 최종 결과물 예시
   * 웹페이지에 다음과 같은 형식으로 각 유저의 정보가 표시되어야 합니다.
   * 단  HTML 와 CSS 구성/코드 는 달라도 됩니다. 
*/

/*  작업순서 
    1. (데이터모델링) : 저장할 자료들의 (속성명/이름) 찾기       
    2. (데이터모델링) : 저장할 자료들의 분리( 중복 배제 )        
    3. (데이터모델링) : 분리된 자료들끼리 연관관계             
            1. 모든 테이블에는 하나의 식별 정보(PK키) 추가한다. 
    4. (데이터모델링) : 표로 표현된 자료들을 JS 데이터 표현식   
            1. 테이블 내 행(가로/줄) 1개가 객체1개
            2. 여러 개 형(객체)모여서 테이블(배열) 1개
    5. (로직)
        1. 현재 회원들 중에서 구독 중인 회원 찾기
            (1) 회원테이블(배열) 조회하여 하나씩 회원정보 확인
            (2) 하나씩 조회중인 회원정보가 구독로그테이블(배열) 내 '회원코드'가 일치한 존재하는 확인
            (3) 일치한 회원코드가 있으면 (구독중인 상태) '구독 중'
                일치한 회원코드가 없으면 
            (4) 구독 내역이 있을때 구독중인 구독상품명과 가격을 찾아서 
            (5) 현재날짜(today)가 구독종료일 보다 크면 '만료' 아니면 '활성'
// * 구독로그에 회원코드가 존재 하지 않으면 구독 내역이 없다.
*/

const 회원테이블 = [{ 회원코드: 1, 아이디: 'id1', 회원이름: '김개발' },
{ 회원코드: 2, 아이디: 'id2', 회원이름: '최코딩' },
{ 회원코드: 3, 아이디: 'id3', 회원이름: '박서버' }];

const 구독상품테이블 = [{ 상품코드: 1, 상품명: '프리미엄', 가격: '월 15000원' },
{ 상품코드: 2, 상품명: '베이직', 가격: '월 9900원' },
{ 상품코드: 3, 상품명: '광고형 베이직', 가격: '월 4900원' }];

const 구독로그테이블 = [{ 구독번호: 1, 회원코드: 1, 상품코드: 1, 구독종료일: '2025-06-20' },
{ 구독번호: 2, 회원코드: 2, 상품코드: 2, 구독종료일: '2025-06-15' }]

const 만료기간 = {today:'2025-06-17'}

for (i = 0; i <= 회원테이블.length - 1; i++) {
    let 회원 = 회원테이블[i];
    let userCheck = false;
    let 구독상품코드 = -1; // 상품코드가 가질수 없는 임의값. 중복 되지 않게
    let 활성화='';
    for (j = 0; j <= 구독로그테이블.length - 1; j++) {
        let 구독 = 구독로그테이블[j];
        if (회원.회원코드 == 구독.회원코드) {
            userCheck = true;
            구독상품코드 = 구독.상품코드
            if(구독.구독종료일<만료기간){
                활성화='만료';
            }else{
                활성화='활성';
            }
        }
    }

    document.write('<hr/>') // 구분선 
    let html = `<h3> ${회원.회원이름}</h3>`;
    if (userCheck == true) {
        for (let index = 0; index <= 구독상품테이블.length - 1; index++) {
            let 상품정보 = 구독상품테이블[index];
            if (상품정보.상품코드 == 구독상품코드) {
                html += `<ul> 
                            <li> 구독상품 : ${ 상품정보.상품명 } ( ${ 상품정보.가격} )  </li> 
                            <li> 상태 : ${활성화}</li> 
                        </ul>` 
            }
        }

    } else {
        html += `<div> 구독내역이 없습니다.`
    }
    document.write(html);
}
