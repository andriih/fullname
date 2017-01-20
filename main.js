 

document.getElementById("lname","fname").addEventListener("blur",function(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var res = document.getElementById("res");
    if(fname != "" && lname != ""){
        res.innerHTML = "Hello , "+lname+" "+fname+"<br />";

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
    }

});


