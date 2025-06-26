function getProduct(){
    let products=localStorage.getItem('products');
    if(products==null){
        products=[];
    }else{
        products=JSON.parse(products)
    }return products;
}

function setProduct(products){
    localStorage.setItem('products',JSON.stringify(products));
}

function productAdd(){
    const pnameInput=document.querySelector('.pnameInput');
    const ppriceInput=document.querySelector('.ppriceInput');
    const pcontentText=document.querySelector('.pcontentText');
    const pimgInput=document.querySelector('.pimgInput');

    const pname=pnameInput.value; //console.log(pname)
    const pprice=ppriceInput.value; //console.log(pprice)
    const pcontent=pcontentText.value; //console.log(pcontent)
    const pimg=pimgInput.files[0]; //console.log(pimg)

    let products=getProduct();
    let pcode=products.length==0?1:products[products.length-1].pcode+1;

    total={
        pcode:pcode,
        pname:pname,
        pprice:Number(pprice),
        pcontent:pcontent,
        pimg:pimg ? URL.createObjectURL(pimg):"#"
    }

    products.push(total);
    pnameInput.value='';
    ppriceInput.value='';
    pcontentText.value='';

    alert("제품등록성공")
    setProduct(products);
    productPrint()

}

function productPrint(){
    const tbody=document.querySelector('.tbody')
    html='';
    let products=getProduct();
    for(i=0; i<=products.length-1;i++){
        const product=products[i]
        html+=
        `
            <tr>
                <td>${product.pname}</td><td>${product.pprice}</td><td>${product.pcontent}</td>
                <td><img src="${product.pimg}"></td>
                <td><button class="deleteBtn" onclick="productDelete(${product.pcode})">삭제</button></td>
            </tr>
        `
    }
    tbody.innerHTML=html
}

function productDelete(pcode){
    let products=getProduct();
    for(i=0;i<products.length; i++){
        if(products[i].pcode==pcode){
            products.splice(i,1);
            setProduct(products);
            alert("삭제 완료");
            productPrint();
            return;
        }
    }
}