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
    const pimgInput=document.querySelector('.pimgInput');
    const pcontentText=document.querySelector('.pcontentTextInput');

    const pname=pnameInput.value;
    const pprice=ppriceInput.value;
    const pimg=pimgInput.files[0];
    const pcontent=pcontentText.value;

    let products=getProduct();
    let pcode= products.length==0?1:products[products.length-1].pcode+1;

    total={
        pcode:pcode,
        pname:pname,
        pprice:pprice,
        pcontent:pcontent,
        pimg : pimg?URL.createObjectURL(pimg):"#"
    }
    products.push(total);
    
    pnameInput.value='';
    ppriceInput.value='';
    pcontentText.value='';

    setProduct(products);
    alert("등록성공");
    productPrint()
}

function productPrint(){
    const tbody=document.querySelector('.tbody');
    let products=getProduct();
    html='';
    for(i=0; i<=products.length-1;i++){
        const product=products[i]
        html+=`
        <tr>
            <td>${product.pname}</td><td>${product.pprice}</td><td>${product.pcontent}</td>
            <td><img src="${product.img}"></td>
            <td><button class="deleteBtn" onclick="productDelete(${product.pcode})">삭제</button></td>
        </tr>
        `
    }
    tbody.innerHTML=html
}

function productDelete(pcode){
    let products=getProduct();
    for(i=0; i<products.length; i++){
        if(products[i].pcode==pcode){
            products.splice(i,1);
            
        }
    }
}