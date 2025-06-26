boardPrint();
function boardPrint(){
    //1.어디에, tbody로
    let tbody=document.querySelector('.tbody');
    //2. 무엇을,
        //2-1 : localStorage 에서 배열 가져오기
    let boardList=localStorage.getItem('boardList');
        if(boardList==null){
            boardList=[];
        }else{
            boardList=JSON.parse(boardList)
        }
    let html =``;
    for(i=0; i<=boardList.length-1; i++){
        const obj=boardList[i];
        html+=`
                <tr>
                    <td>${obj.no}</td>
                    <td> <a href="view.html?no=${obj.no}">${obj.title}</a> </td>
                </tr>`      
    }
    tbody.innerHTML=html;
}


