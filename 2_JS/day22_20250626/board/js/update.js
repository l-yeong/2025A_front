
getBoard();
//기존데이터 조회

function getBoard(){
    const url= new URLSearchParams(location.search)
    const selectNo =url.get('no');

    let boardList=localStorage.getItem('boardList');
    if(boardList==null){
        boardList=[];
    }else{
        boardList=JSON.parse(boardList);
    }
    for(i=0; i<boardList.length; i++){
        const obj=boardList[i]
        if(obj.no==selectNo){
            //기존 게시물정보를 Input 마크업에 넣어주기.
            document.querySelector('.titleInput').value=obj.title
            document.querySelector('.contentInput').value=obj.content
        }
    }
}

//(2)수정처리 함수
function boardUpdate(){
    //1.URL 경로 가져오기
    const url=new URLSearchParams(location.search)
    //2.URL 경로에서 내가 선택한 게시물번호(no) 가져오기
    let selectNo=url.get('no');
    //3.localStorage 에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){
        boardList=[];
    }else{
        boardList=JSON.parse(boardList);
    }
    //4. 반복문 이용하여 선택한 게시물 찾기
    for(i=0; i<boardList.length; i++){
        const obj=boardList[i]
        if(obj.no==selectNo){
            //5. 찾은 게시물에 새롭게 입력받은 값 으로 수정처리
            obj.title = document.querySelector('.titleInput').value;
            obj.content = document.querySelector('.contentInput').value;
            obj.pwd = document.querySelector('.pwdInput').value;
            //6. localStorage 에서 배열 저장
            localStorage.setItem('boardList',JSON.stringify(boardList));
            //7. (성공) view.html 이동하기
            location.href=`view.html?no=${selectNo}`;
        }
    }
}