function add(){
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var moblen = mobile.length
    var mobile=Number(mobile)
    console.log(name,mobile,typeof name, typeof (mobile),moblen)
    
   
    if(!isNaN(name)){
        console.log("name if")
        document.getElementById("name").style.border="1px solid red"
        document.getElementById("errormsg").innerHTML="This field is required and should be string"

    }
    else{
        document.getElementById("name").style.border="1px solid black"
        document.getElementById("errormsg").innerHTML=""

    }
    if(isNaN(mobile) || moblen !=10){
        console.log("mobile if")
        document.getElementById("mobile").style.border="1px solid red"
        document.getElementById("errormob").innerHTML="This field is required and should be 10 digit number"
    }
    else{
        console.log("mobile else")
        document.getElementById("mobile").style.border="1px solid black"
        document.getElementById("errormob").innerHTML=""

    }
    if(name=="" && mobile ==""){
        document.getElementById("name").style.border="1px solid red"
        document.getElementById("errormsg").innerHTML="This field is required and should be string"
        document.getElementById("mobile").style.border="1px solid red"
        document.getElementById("errormob").innerHTML="This field is required and should be 10 digit number"
    }
   

}