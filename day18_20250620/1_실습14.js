/*
    [작업순서]
        1. 화면 스케치 (프로토타입)
        2. HTML 과 CSS 표현
        3. 데이터모델링
        4.
*/

/*
[실습14: 제품 관리 페이지]
1. 목표
    사용자가 카테고리, 제품명, 가격, 이미지를 포함한 제품 정보를 등록하고, 등록된 모든 제품을 표 형태로 한눈에 확인하며 관리할 수 있는 웹 페이지를 제작합니다.
2. 화면 구성
    페이지는 사용자가 정보를 입력하는 **'제품 등록 영역'**과 등록된 결과를 보여주는 **'제품 목록 영역'**으로 명확히 구분되어야 합니다.
    제품 등록 영역 (<div id="header">):
        카테고리 선택: 미리 정의된 카테고리 목록에서 제품의 분류를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다. (예: '음료', '과자')
        제품명 입력: 등록할 제품의 이름을 텍스트로 입력할 수 있어야 합니다. (예: "코카콜라")
        제품 가격 입력: 제품의 가격을 숫자로 입력할 수 있어야 합니다. (예: 1000)
        제품 이미지 입력: 제품의 사진을 사용자의 컴퓨터에서 파일 형태로 선택하여 첨부할 수 있어야 합니다.
        등록 버튼: 모든 정보를 입력한 후, 목록에 제품을 추가하기 위한 "등록" 버튼이 있어야 합니다.
    제품 목록 영역 (<div id="main">):
        등록된 모든 제품 정보를 보여주는 표(테이블)가 있어야 합니다.
        표는 "이미지", "카테고리명", "상품명", "가격", "등록일", "비고" 순서의 열로 구성되어야 합니다.
        각 제품 항목(행)마다 해당 제품을 관리할 수 있는 "삭제" 버튼과 "수정" 버튼이 포함되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        사용자가 페이지에 처음 방문했을 때, 카테고리 선택 메뉴에는 두 개의 예시 카테고리('음료', '과자')가 기본적으로 표시되어 있어야 합니다.
        제품 목록 표에는 사용법을 쉽게 이해할 수 있도록 네 개의 예시 제품이 기본적으로 표시되어 있어야 합니다.

    제품 등록 기능:
        사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 제품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.
        제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.
        첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 이미지를 첨부하지 않은 경우 기본 이미지가 대신 표시되어야 합니다.

    제품 관리 기능:
        삭제: 각 제품의 "삭제" 버튼을 클릭하면 해당 제품이 목록에서 즉시 제거되어야 합니다.
        수정: "수정" 버튼을 클릭하면, prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
*/
//===============================[1] 데이터 모델링 샘플==========================================//
// 1.카테고리 목록
const categoryList =[{cno:1,cname:'음료류'},{cno:2,cname:'과자류'}]; 
let currentCno =2; //* 코드를 자동대입 하기 위한 현재 코드번호, 샘플의 마지막 코드의 번호 초기화
// 2. 제품 목록, 이미지 등록시 없을경우 : https://placehold.co/100x100 경로 샘플
const productList=[
    {pno:1, cno:1,pname:'코카콜라',pprice:1000,pimg:'https://placehold.co/100x100',pdate:'2025-06-17'},
    {pno:2, cno:2,pname:'새우깡',pprice:1200,pimg:'https://placehold.co/100x100',pdate:'2025-06-18'},
    {pno:3, cno:1,pname:'칠성사이다',pprice:1100,pimg:'https://placehold.co/100x100',pdate:'2025-06-20'}
]; console.log(productList);
let currentPno =1;
//===============================[2] 데이터 모델링==========================================//
// 1. 카테고리 출력함수: 실행조건: 페이지가 (JS)열렸을때 실행
categoryPrin()
function categoryPrin(){ console.log('>>categori.exe')
    //1.어디에, <select id=categoryInput">
    const categoryInput=document.querySelector('#categoryInput')
    //2.무엇을, 카테고리목록(배열)내 객체정보를 하나씩 HTML 형식으로
    let html='<option value="" disabled selected> 카테고리 선택하세요</option>';
    for( i=0; i<=categoryList.length -1; i++){
        const category=categoryList[i]
        html+=`<option value="${category.cno}"> ${category.cname} </option>`
        
    }//for end
    console.log(html)
    //3.출력
    categoryInput.innerHTML=html;
    productAdd();
}//func end
// 2. 제품등록함수: 
//productAdd();
function productAdd(){ console.log('---등록버튼----')
    // (1) 입력 마크 객체 가져오기
    const categoryInput =document.querySelector('#categoryInput'); //console.log(categoryInput);
    const pnameInput= document.querySelector('#panmeInput'); //console.log(pnameInput);
    const ppriceInput= document.querySelector('#ppriceInput'); //console.log(ppriceInput);
    const pimgInput= document.querySelector('#pimgInput'); //console.log(pimgInput);
    // 입력값
    const cno=categoryInput.value;  //console.log(cno);
    const pname=pnameInput.value;  //console.log(pname);
    const price=ppriceInput.value;  //console.log(price);
    const pimg=pimgInput.files[0];  //console.log(pimg);
    //* 현재 날짜 구하기 == new Date()
    let year= new Date().getFullYear(); //현재 연도 반환 함수.
    let month= new Date().getMonth()+1; //현재 월 반환 함수 *1월달이 0부터 시작 이므로 +1
        month= month < 9 ? `0${month}`:month ; //만약에 1 이 한자리 수 이면 앞에 '0' 붙인다.
    let day= new Date().getDate();      //현재 일 반환 함수
    let pdate=`${year}-${month}-${day}`;
    //(*)유효성 검사
        //*입력한 값이 없으면 등록 실패
        if(cno =='' || pname =='' || price== ''){
            alert('비어있는 항목이 있습니다.[실패]');
            return; // 반환값 없는 함수 종료 : 아래코드는 실행되지 않는다.
        }
    const obj={ 
        pno : ++currentPno,
        cno: Number(cno),
        pname : pname, 
        pprice: Number(price),
        pimg: pimg ? URL.createObjectURL(pimg) :'https://placehold.co/100x100',
        pdate : pdate
    }; console.log(obj);
    //(4) 구성한 객체를 배열에 저장
    productList.push(obj);
    //(*) 기타 등등
    categoryInput.value='';
    pnameInput.value='';
    ppriceInput.value='';
    alert('[성공] 제품등록');
    productPrint(); //[다시 제품 출력함으로써 새로고침] / 렌더링
} //func end
// 3. 제품목록 출력함수, 실행조건 : (1)페이지(HTML/JS)가 열렸을때 함수실행, (2) 등록/삭제/수정 처리 했을때
productPrint();
function productPrint(){ console.log('productPrint.exe')
    const 기록=document.querySelector('.기록');
    html=``;
    for(i=0; i<=productList.length -1; i++){
        let product=productList[i]; console.log(product);
        html+=
            `<tr>
                        <td>${productList.pimg}</td><td>음료</td><td>코카콜라</td>
                        <td>1000</td><td>2025-06-17</td>
                        <td><button class="btnDelete"> 삭제 </button></td>
                        <td><button class="btnEdit"> 수정 </button></td>
                    </tr>`
    }

}

// 4. 제품 삭제 함수:

// 5. 제품 수정 함수:
