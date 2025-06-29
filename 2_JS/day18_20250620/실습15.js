// 1. 목표
//     부서, 사원, 그리고 휴가 신청 정보를 하나의 웹 페이지에서 통합적으로 관리하는 대시보드를 제작합니다.
//     사용자는 부서 등록/삭제/수정, 사원 등록/삭제/수정, 휴가 신청/취소 기능을 직관적으로 사용할 수 있어야 합니다.

// 2. 화면 구성
//     페이지는 '부서 관리(왼쪽)', '사원 관리(가운데)', '휴가 관리(오른쪽)' 라는 3개의 명확한 컬럼으로 구성되어야 합니다.
//     부서 관리 영역:
//         부서 등록:  
//             새로운 부서의 이름을 텍스트로 입력할 수 있는 입력창과 "추가" 버튼이 있어야 합니다.
//         부서 목록:  
//             등록된 모든 부서 정보를 보여주는 표(테이블)가 있어야 합니다.
//             표는 "부서명"과 "관리" 열로 구성됩니다.
//             각 부서 항목마다 해당 부서를 수정하고 삭제할 수 있는 버튼이 제공되어야 합니다.

//     사원 관리 영역:
//         사원 등록:
//             사원의 이름과 직급을 입력하는 텍스트 필드가 있어야 합니다.
//             등록된 부서 목록에서 소속될 부서를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다.
//             사원의 사진을 등록할 수 있는 파일 선택 버튼이 있어야 합니다.
//         사원 목록:
//             등록된 모든 사원 정보를 보여주는 표(테이블)가 있어야 합니다.
//             표는 "사진", "이름", "부서", "직급", "관리" 순서의 열로 구성됩니다.
//             각 사원 항목마다 해당 사원의 이름과 직급을 수정하고, 사원 정보를 삭제할 수 있는 버튼이 제공되어야 합니다.

//     휴가 관리 영역:
//         휴가 신청:
//             등록된 사원 목록에서 휴가를 신청할 사원을 선택하는 드롭다운 메뉴가 있어야 합니다.
//             휴가 시작일과 종료일을 선택할 수 있는 날짜 입력 필드가 있어야 합니다.
//             휴가 사유를 텍스트로 간단히 기입할 수 있는 입력창이 있어야 합니다.
//         휴가 신청 전체 목록:
//             제출된 모든 휴가 신청 내역을 보여주는 목록이 있어야 합니다.
//             각 항목에는 신청한 사원의 이름, 휴가 기간, 사유가 표시되어야 합니다.
//             각 휴가 신청 항목마다 해당 신청을 취소할 수 있는 "신청취소" 버튼이 제공되어야 합니다.

// 3. 핵심 기능
//     초기 데이터 표시:
//         모든 데이터(부서, 사원, 휴가)는 웹 페이지가 실행되는 동안에만 유지되는 전역 배열을 통해 관리됩니다. 페이지를 새로고침하면 데이터는 초기 샘플 상태로 돌아갑니다.
//         사용자가 처음 페이지에 접속했을 때, 시스템 사용법을 쉽게 파악할 수 있도록 부서, 사원, 휴가 신청에 대한 예시 데이터가 기본적으로 화면에 표시되어 있어야 합니다.

//     부서 관리 기능:
//         등록: "추가" 버튼 클릭 시, 입력된 부서가 부서 목록과 사원 등록의 부서 선택 메뉴에 즉시 반영되어야 합니다. 이미 존재하는 부서명은 등록되지 않아야 합니다.
//         수정: "수정" 버튼 클릭 시, prompt 대화상자가 나타나 새로운 부서명을 입력받고, 입력 완료 시 목록에 즉시 반영되어야 합니다.
//         삭제: "삭제" 버튼 클릭 시, 해당 부서가 목록에서 제거되어야 합니다. 단, 해당 부서에 소속된 사원이 한 명이라도 있을 경우, 삭제할 수 없다는 경고 메시지를 표시해야 합니다.

//     사원 관리 기능:
//         등록: 사원 정보를 입력하고 "등록" 버튼 클릭 시, 사원 목록과 휴가 신청의 사원 선택 메뉴에 즉시 추가되어야 합니다. 사진을 첨부하면 해당 사진이, 첨부하지 않으면 기본 이미지가 표시되어야 합니다.
//         수정: "수정" 버튼 클릭 시, prompt 대화상자를 통해 새로운 이름과 직책을 입력받아 해당 사원의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
//         삭제: "삭제" 버튼 클릭 시, 해당 사원이 목록에서 제거되며, 관련된 모든 휴가 신청 기록도 함께 삭제되어야 합니다.

//     휴가 관리 기능:
//         신청: 휴가 정보를 입력하고 "신청" 버튼 클릭 시, 휴가 신청 목록에 즉시 추가되어야 합니다.
//         취소: "신청취소" 버튼 클릭 시, 해당 휴가 신청 내역이 목록에서 제거되어야 합니다.
/*=================================부서 관리================================================= */
let departmentList = [{ dno: 1, dname: '개발팀' }, { dno: 2, dname: '다지인팀' }, { dno: 3, dname: '기획팀' }]
let dno = 4;
function departmentAdd() {
    console.log("departmentAdd")
    const departmentInput = document.querySelector('.departmentInput');
    const dname = departmentInput.value;

    let depList = {
        dno: Number(dno),
        dname: dname
    }

    departmentList.push(depList);
    departmentInput.value='';
    console.log(departmentList);
    alert("부서등록성공");
    departmentPrint()
}
departmentPrint()
function departmentPrint() {
    let leftTbody = document.querySelector('.leftTbody');
    html = ``;
    for (i = 0; i <= departmentList.length - 1; i++) {
        const dep = departmentList[i]
        html +=
                    `<tr>
                        <td>${dep.dno}</td>
                        <td>${dep.dname}</td>
                        <td>
                            <button class="eidBtn" onclick="departmentBtnEdit(${dep.dno})">수정</button>
                            <button class="delBtn" onclick="departmentBtnDelete(${dep.dno})">삭제</button>
                        </td>
                    </tr>`
    }
    leftTbody.innerHTML=html;
    console.log(html)

}

/*================삭제 버튼=========================== */
function departmentBtnDelete(dno) { console.log("delete");
    for (let i = 0; i <= departmentList.length - 1; i++) {
        if (departmentList[i].dno == dno) {
            departmentList.splice(i, 1);
            alert('사원정보가 삭제 되었습니다.');
            departmentPrint();
            return;
        }
    }
}
/*===============수정 버튼========================== */
function departmentBtnEdit(dno) {
    console.log("edit")
    for (let i = 0; i <= departmentList.length - 1; i++) {
        let dep = departmentList[i]
        if (dep.dno == dno) {
            const dnames = prompt('수정할 이름:');
            dep.dname = dnames;
            alert('정보 수정 완료')
            departmentPrint();
            return;
        }
    }
}


//==============================사원관리=============================================//
let categoryStaff = [{ cno: 1, cname: '개발팀' }, { cno: 2, cname: '디자인팀' }, { cno: 3, cname: '기획팀' }]; //console.log(categoryStaff);
let staffInfo = [{ sno: 1, cno: 3, names: '유재석', rank: '부장', staffImg: 'https://placehold.co/100x100' }];                        //console.log(staffInfo);
let cno = 2;
let sno = 2;


/*=============================스태프 등록 =========================================*/
function staffManagement() {
    console.log('----staffManageMent.exe----')
    const namesInput = document.querySelector('.namesInput');         //console.log(namesInput);
    const rankInput = document.querySelector('.rankInput');           //console.log(rankInput);
    const staffImage = document.querySelector('.staffImage');         //console.log(staffImg); 
    const categoryRank = document.querySelector('.categoryRank');    //console.log(categoryRank); 

    const cno = categoryRank.value;
    const names = namesInput.value;       //console.log(names);
    const rank = rankInput.value;         //console.log(rank);
    const staffImg = staffImage.files[0]; //console.log(staffImg);

    if (names == '' || rank == '') {
        return alert('항목이 비어있습니다.');
    }

    let staffList = {
        sno: Number(sno), cno: Number(cno),
        names: names, rank: rank,
        staffImg: staffImg ? URL.createObjectURL(staffImg) : 'https://placehold.co/100x100'
    }
    //console.log(staffList)
    staffInfo.push(staffList);      //console.log(staffList);
    categoryRank.value = '';          //console.log(categoryRank); 
    namesInput.value = '';            //console.log(namesInput);
    rankInput.value = '';             //console.log(rankInput);
    alert("부서 등록 완료")
    staffPrint();
};
/*=============================카테고리 부분 =========================================*/
categoryInfo();
function categoryInfo() { //console.log('----category Info----')
    html = ``;
    const categoryRank = document.querySelector('.categoryRank');
    for (let i = 0; i <= categoryStaff.length - 1; i++) {
        let category = categoryStaff[i];          //console.log(category);
        html += `<option value=${category.cno}>${category.cname}</option>`

    }
    categoryRank.innerHTML = html;
    //console.log(html);
}

/*=============================스태프 테이블 추가 =========================================*/
staffPrint()
function staffPrint() {
    let html = ``;
    const centerTbody = document.querySelector('.centerTbody')
    for (let i = 0; i <= staffInfo.length - 1; i++) {
        const staff = staffInfo[i];
        const category = getCategory(staff.cno);
        // console.log(staff);
        // console.log(category);
        html += `
        <tr>
            <td><img src="${staff.staffImg}" /></td>
            <td>${staff.names}</td> <td>${category.cno}</td>
            <td>${staff.rank}</td> 
            <td>
                <button class="editBtn" onclick="staffBtnEdit(${staff.sno})">수정</button> 
                <button class="deleteBtn" onclick="staffBtnDelete(${staff.sno})">삭제</button>
            </td>
        </tr>
        `
    }
    centerTbody.innerHTML = html;
    // console.log(html);

}
/*===================카테고리 번호=========================*/
function getCategory(cno) {
    for (let i = 0; i <= categoryStaff.length - 1; i++) {
        if (categoryStaff[i].cno == cno) {
            return categoryStaff[i];
        }
    }
}

/*================삭제 버튼=========================== */
function staffBtnDelete(sno) { //console.log("delete");
    for (let i = 0; i <= staffInfo.length - 1; i++) {
        if (staffInfo[i].sno == sno) {
            staffInfo.splice(i, 1);
            alert('사원정보가 삭제 되었습니다.');
            staffPrint();
            return;
        }
    }
}
/*===============수정 버튼========================== */
function staffBtnEdit(sno) {
    console.log("edit")
    for (let i = 0; i <= staffInfo.length - 1; i++) {
        let staff = staffInfo[i]
        if (staff.sno == sno) {
            const names = prompt('수정할 이름:');
            const rank = prompt('수정할 직급:');
            const cname = Number(prompt('수정할 부서:'));
            staff.names = names;
            staff.rank = rank;
            staff.cno = cname
            alert('정보 수정 완료')
            staffPrint();
            return;
        }
    }
}
