
//상품코드 : pcode , 상품명 : pname , 가격 : pprice , 간단한설명 : pcontent , 이미지 : pimg

//배열

// const productList = [
//     { pcode : 1 , pname : "아메리카노" , pprice : 1500 , pcontent : "뉴크롭원두와 스페셜티 커피 원두를 블랜딩한 빽다방 아메리카노" , pimg :"https://placehold.co/100x100" },
//     { pcode : 2 , pname : "바닐라라떼" , pprice : 3000 , pcontent : "바닐라시럽" , pimg : "https://placehold.co/100x100" },
//     { pcode : 3 , pname : "헤이즐넛라떼" , pprice : 3500, pcontent : "헤이즐넛시럽", pimg : "https://placehold.co/100x100" }
// ]

// let pcode = 3;
//상품코드 : pcode , 상품명 : pname , 가격 : pprice , 간단한설명 : pcontent , 이미지 : pimg
// ===========================================================local 수정자리
// function getLocalProduct(){
//     let productList=localStorage.getItem('productList');
//     if(productList==null){
//         productList=[];
//     }else{
//         productList=JSON.parse(productList);
//     }
//     return productList;

// }
// function setLocalProduct(productList){
//     localStorage.setItem("productList",JSON.stringify(productList));
// }
// ===========================================================local 수정자리

// 1. 제품 등록 함수 : 실행조건 : 등록버튼 onclick 클릭했을때

function productAdd(){ console.log( '>> productAdd exe');
    //(1) 입력 마크업객체 가져오기
    //const productInput = document.querySelector('#productInput');  console.log(productInput);   
    const pnameInput = document.querySelector('#pnameInput');  console.log(pnameInput);
    const ppriceInput = document.querySelector('#ppriceInput');  console.log(ppriceInput);
    const pcontentInput = document.querySelector('#pcontentInput');  console.log(pcontentInput);
    const pimgInput = document.querySelector('#pimgInput');  console.log(pimgInput);
    //(2) 입력 마크업객체에서 입력값 가져오기
    //const pcode = productInput.value;                   console.log(pcode);
    const pname = pnameInput.value;                     console.log(pname);
    const pprice = ppriceInput.value;                   console.log(pprice);
    const pcontent = pcontentInput.value;               console.log(pcontent);
    // 첨부파일은 value 대신 files[0] ; 선택된 첨부파일의 첫번째 파일객체 가져오기

    const pimg = pimgInput.files[0];                    console.log(pimg);
    // 유효성 검사
        // 입력한 값이 없으면 등록 실패
        if ( pname == '' || pprice == '' || pcontent == ''){
            alert('비어있는 항목이 있습니다. [실패]');
            return ; 
        } // if end
    //(3) 여러 데이터 객체로 구성하기.

    let productList=getLocalProduct(); // ===========================================================local 수정자리
        let pcode=productList.length == 0 ? 1 : productList[productList.length-1].pcode+1 // ===========================================================local 수정자리

    const obj = {
        pcode : pcode,
        pname : pname,
        pprice : Number(pprice),
        pcontent : pcontent,
        pimg : pimg ? URL.createObjectURL( pimg ) : 'https://placehold.co/100x100' 
        // URL.creatObjerURL() : 선택한 파일객체의 url 주소 생성함수.
    };                                        console.log( obj);
    // (4) 구성한 객체를 배열에 저장
    productList.push( obj );                  console.log( productList); 
    setLocalProduct(productList); // ===========================================================local 수정자리
    // .value='';
    pnameInput.value='';
    ppriceInput.value='';
    pcontentInput.value='';
    pimgInput.value='';
    alert('[성공] 제품 등록'); 
    viewAllProduct();
    
} // func end


function viewAllProduct(){
    console.log( "viewAllProduct exe" );
    const tbody = document.querySelector(".tbody");
    console.log( tbody );
    let html = "";
    let productList=getLocalProduct(); // ===========================================================local 수정자리
    for( let i = 0 ; i <= productList.length-1 ; i++){
        const product = productList[ i ];
        console.log( product );
        html += `<tr>
                    <td>${product.pcode}</td>
                    <td>${product.pname}</td>
                    <td>${product.pprice}</td>
                    <td>${product.pcontent}</td>
                    <td><img src="${product.pimg}"</img></td>
                    <td><button onclick="DeleteProduct(${product.pcode})" class="btnDelete">삭제</button></td>
                </tr>`
    }
    tbody.innerHTML = html;
    console.log( html );
}
viewAllProduct();
function DeleteProduct(pcode){ console.log('---exe----')
    let productList=getLocalProduct(); // ===========================================================local 수정자리
    for(i=0; i<=productList.length-1 ; i++){
        let product=productList[i]; console.log(product);
        if(product.pcode==pcode){
            productList.splice(i,1);
            setLocalProduct(productList); // ===========================================================local 수정자리
            alert("제품 삭제 완료");
            viewAllProduct();
            return;
        }
    }
    

}