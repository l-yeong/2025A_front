
const productArray = [
    { no : 1 , id : 1, cname : "입고" , number : 3 , etc : "asad" , 변동날짜 : "" },
    { no : 2 , id : 2, cname : "출고" , number : 7 , etc : "asda" , 변동날짜 : "" },
    { no : 3 , id : 3, cname : "입고" , number : 2 , etc : "dsad" , 변동날짜 : "" }
]
let no = 3;
// 재고 입고 (Inventory Inflow / Stock In)
// 기능: 특정 제품의 재고를 증가시키기 위한 입고 내역 기록.
// 입력 필드: 재고ID(자동), 제품 ID, 변동 유형 ('입고/출고') , 변동 수량, 입출사유 ,  변동날짜(오늘날짜 자동).
// 동작:  성공/실패 메시지 출력
function stockIn(){
    console.log( "stockIn exe" )
    let idInput = document.querySelector("#idInput").value;
    console.log( idInput );
    let found = false;
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].pcode == idInput) {
            found = true;
            break;
        }
    }
    if (!found) {
        alert("제품 아이디가 존재하지 않습니다");
        return;
    }
    let select = document.querySelector("#select2").value;
    console.log( select );
    let number = document.querySelector("#numberInput").value;
    console.log( number );
    let textarea = document.querySelector("#textarea2").value;
    console.log( textarea );
    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
    month = month < 9 ? `0${month}` : month ; // 만약에 월이 한자리수 이면 앞에 '0' 붙인다.
    let day = new Date().getDate();      // 현재 일 반환 함수 
        day = day < 9 ? `0${day}` : day;    // 만약에 일 이 한자리수 이면 앞에 '0' 붙인다.
    let date = `${year}-${month}-${day}`;                          
    console.log( date );
    if( idInput == "" || select == "" || number == "" ||  textarea == "" ){
        alert("빈 항목이 있습니다.")
        return;
    }
    const obj = {
        no : ++no,
        id : idInput,
        cname : select,
        number : number,
        etc : textarea,
        변동날짜 : date
    }
    console.log( obj );
    productArray.push( obj );
    alert( "재고 입고 성공" );
    console.log( productArray );
    ViewAllInventoryLogs();
}



function ViewAllInventoryLogs(){ //console.log('----productcontent---')
    const tbody=document.querySelector('.ttbody'); //console.log(tbody);
    html='';
    for(i=0; i<=productArray.length-1; i++){
        let productA=productArray[i];
        html+=  `<tr>
                    <td>${productA.id}</td>
                    <td>${productA.cname}</td>
                    <td>${productA.number}</td>
                    <td>${productA.etc.toLocaleString()}</td>
                    <td>${productA.변동날짜}</td>
                    <td><button onclick="modifyReason(${productA.no})" class="btnEdit">입출사유변경</button></td>
                 </tr>`
    }                                                                       
   
    tbody.innerHTML=html; console.log(html);
}



// 입출사유 수정 함수

function modifyReason( no ){ console.log( '>>modifyReason exe'); console.log( no ) ;
    for( let i=0; i<=productArray.length-1; i++){
        if( productArray[i].no == no ){
            const reason = prompt('수정 할 입출사유: '); // 수정할 값 입력
            productArray[i].etc = reason;                // 입력값으로 수정
            alert('[성공] 입출사유 수정'); 
            ViewAllInventoryLogs();// <--새로고침
            return;
        } // if end
       } // for end
    } // func end