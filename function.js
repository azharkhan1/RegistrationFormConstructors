
function UserConstructor (userEmail,userName,userPassword,userGender,marks)
{
    this.userEmail = userEmail;
    this.userName = userName;
    this.userPassword = userPassword;
    this.userGender = userGender;
    this.marks  = marks;
}

UserConstructor.prototype.getAverage = function(){
    
    let sum = 0;
      for (let i = 0 ; i<marks.length ; i++)
     {
         sum += marks[i];
     }
         return sum/marks.length; 

}
