function setLocalStorage(){
let product = localStorage.getItem('productList'); //productList 이름의 속성값 가져오기

localStorage.setItem('productList', JSON.stringify(product)); //로컬 스토리지에 저장
}
// localStorage 불러오기 함수 구현
// localStorage 에서 제품 데이터를 불러와 products / inventoryLogs  배열에 파싱.
let products = [];
let inventoryLogs = [];
function getLocalStorage() {

    let data1 = localStorage.getItem("productList");
    let data2 = localStorage.getItem("productArray");
    if (data1 == null) {
        products = []; // localStorage에 데이터가 없으면 빈 배열로 초기화
    } else {
        products = JSON.parse(data1); // 문자열 → 객체 배열로 파싱
    }

    if (data2 == null) {
        inventoryLogs = [];
    } else {
        inventoryLogs = JSON.parse(data2);
    }
    console.log(products);
    console.log(inventoryLogs);

    // List
    function setLocalStorage(productList) {
        localStorage.setItem('productList', JSON.stringify(productList));
    }   // func end

    function getLocalStorage() {
        let productList = localStorage.getItem('productList');
        if (productList == null) {
            productList = []
        } else {
            productList = JSON.parse(productList)
        }
        return productList; // 웹스토리지에서 조회된 배열을 반환하는 함수 , 없으면 []빈배열 , 있으면 [{},{}]
    }
}