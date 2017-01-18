// (function(){
//     var fname = document.getElementById("fname").value;
//     var lname = document.getElementById("lname").value;
//     var res = document.getElementById("res").innerHTML;
//     if(fname != "" && lname != ""){
//         res += "Hello , "+lname;
//     }
// })();


document.getElementById("pname").addEventListener("click",function(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var res = document.getElementById("res");
    if(fname != "" && lname != ""){
        res.innerHTML = "Hello , "+lname+" "+fname+"<br />";

        fname.value = '';
        lname.value = "";
    }

});


