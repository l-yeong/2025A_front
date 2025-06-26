getBoard();
function getBoard(){
    //1. URL(웹주소) 상의 웹주소 가져오기
    let url = new URLSearchParams(location.search);
    //2. 웹주소에서 선택된 게시물번호(쿼리스트링값) 가져오기
    let selectNo=url.get('no');
    //3. localStorage 에서 배열 가져오기
    
    let boardList=localStorage.getItem('boardList');
    if(boardList==null){
        boardList=[];
    }
    else{
        boardList=JSON.parse(boardList);
    }
    //4. 선택된 게시물번호와 일치한 게시물 찾기<for>
    for(i=0; i<=boardList.length-1; i++){
        const obj= boardList[i];
        if(obj.no== selectNo){
            //5. 찾았으면 출력
            document.querySelector('#title').innerHTML=obj.title
            document.querySelector('#content').innerHTML=obj.content;
            return;
        }
    } 
}

//(2) 삭제
function boardDelete(){
    //1. URL(웹주소) 상의 경로 가져오기
    const url = new URLSearchParams(location.search);
    //2. 경로 상의 선택된 게시물 번호(쿼리스트링)가져오기
    const selectNo = url.get('no');
    //3. localStorage 에서 배열 가져오기
    let boardList=localStorage.getItem('boardList');
    if(boardList==null){
        boardList=[]
    }else{
        boardList=JSON.parse(boardList);
    }
    //4. 배열 내 선택된 게시물번호가 존재하면
    for(i=0; i<=boardList.length-1; i++){
        let obj=boardList[i]
        if(obj.no == selectNo){ //만약에 선택된 게시물번호를 찾았으면
        //5. 확인용 비밀번호를 입력받아  기존 비밀번호 일치하면 삭제, 아니면 실패
        }const confirm = prompt("비밀번호 입력");
        if(obj.pw==confirm){
            boardList.splice(i,1);
            localStorage.setItem('boardList',JSON.stringify(boardList));
            alert('삭제성공');
            location.href='list.html';   //6. (성공) list.html 이동           
        }else{
            alert('삭제 실패 : 비밀번호 불일치');
        }
    }
}

//(3) 수정 이동 함수
function boardUpteView(){
    //1. URL(웹주소) 상의 웹주소 가져오기
    let url = new URLSearchParams(location.search);
    //2. 웹주소에서 선택된 게시물번호(쿼리스트링값) 가져오기
    let selectNo = url.get('no');
    //3. localStorage 에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){
        boardList=[];
    }else{
        boardList=JSON.parse(boardList);
    }
    //4. 선택된 게시물번호와 일치한 게시물 찾기<for>
    for(i=0; i<=boardList.length-1; i++){
        let obj=boardList[i];
        if(obj.no==selectNo){
            const confirm = prompt("비밀번호 입력")
            if(obj.pw==confirm){
                //5. 확인용 비밀번호를 입력받아  기존 비밀번호 일치하면 수정페이지 이동
                location.href=`update.html?no=${selectNo}`
            }else{
                alert("수정불가 : 비밀번호 불일치");
            }
        }
    }
    
    
}