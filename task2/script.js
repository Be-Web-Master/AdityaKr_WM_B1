const studentsMarks = [[80, 70, 55],[45, 90, 75],[70, 60, 65]];
function calculateQuizResults(studentsMarks) {
   let newarr = [];
   for (let i= 0; i<studentsMarks.length; i++) {
    let totalmarks = 0;
      for(let j= 0; j<studentsMarks[i].length; j++){
        totalmarks += studentsMarks[i][j]
        if(totalmarks >= 200){
            newarr[i] = [totalmarks , "pass"]
        }
        else{
            newarr[i]= [totalmarks , "fail"]
        }
      }
   }
   console.log(newarr)
}
calculateQuizResults(studentsMarks)