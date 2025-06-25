// 1. 데이터 모델링
const students = [
    { studentId: 2024001, name: "김철수", major: "컴퓨터공학과" },
    { studentId: 2024002, name: "이영희", major: "인공지능학과" },
    { studentId: 2024003, name: "박지성", major: "데이터사이언스학과" }
];
const courses = [
    { courseId: "CS101", courseName: "웹 프로그래밍 기초", professorName: "이교수" },
    { courseId: "AI202", courseName: "머신러닝 입문", professorName: "최교수" },
    { courseId: "DS303", courseName: "데이터 시각화", professorName: "박교수" }
];
const enrollments = [
    { enrollmentId: 1, studentId: 2024001, courseId: "CS101", grade: "A+" },
    { enrollmentId: 2, studentId: 2024001, courseId: "AI202", grade: "B" },
    { enrollmentId: 3, studentId: 2024002, courseId: "AI202", grade: "A" },
    { enrollmentId: 4, studentId: 2024002, courseId: "DS303", grade: "F" },
    { enrollmentId: 5, studentId: 2024003, courseId: "CS101", grade: "C+" }
];


//[2 로직], 경험
    //=============1. 학생명 전체 출력 ======================
html=``;
document.write('<h1>학생별 성적 대시보드</h1> <hr />')

for(let i=0; i<= students.length -1; index++){
    const student=students[i];
    document.write(`<h3> ${student.name} (${student.major})</h3>`);
    
    //============= 2. 내가 수강중인 과목명 출력 ================
    for(let j=0; j<=enrollments.length -1; j++){
       const enrollment = enrollments[j];
       if(student.studentId == enrollment.studentId){
    
       }

       // =================.3 과목코드 찾기===================
       for(k=0; k<=courses.length-1; k++){
        const course=courses[k];
        if(course.courseId == enrollment.courseId){
            document.write(`<h4>${course.courseName}(${course.professorName})</h3>`)
            // document.write(`<h5> 성적 : ${enrollment.grade}</h5>`);
            // document.write(`<h5> 이수여부 : ${enrollment.grade == 'F' ? 'Fail' : 'Pass'} <hr /> </h5>`);
            html += `<ul>
                        <li> <h5> 성적 : ${enrollment.grade} </h5>
                        <li> <h5> 이수여부 : ${enrollment.grade == 'F' ? 'Fail':'Pass'} </h5>
                    </ul>
                    <hr />
                    `
            document.write(html);
        }
       }
    }
}