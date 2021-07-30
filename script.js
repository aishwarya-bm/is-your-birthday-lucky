var checkBtn = document.getElementById("check");
var closeIcon = document.getElementById("close");
var policyBtn = document.getElementById("policy");
checkBtn.addEventListener("click", function(e){
    e.preventDefault();
    let birthdate = document.getElementById("birthdate").value;
    let luckynum = parseInt(document.getElementById("luckynum").value);
    if(birthdate && luckynum)
    {
        let dob = "";
        for(let i=0;i<birthdate.length;i++)
        {
            if(birthdate[i] !== '-')
            {
                let curr = parseInt(birthdate[i]);
                dob = dob + curr;
            }
        }
        let sum = 0;
        dob = parseInt(dob);
        while(dob > 0){
            let r = dob % 10;
            sum = sum + r;
            dob = Math.floor(dob/10);
        }
        document.getElementsByClassName("output")[0].style.display = "block";
        if(sum % luckynum === 0)
        {
            document.getElementById("oops").style.display = "none";      
            document.getElementById("happy").style.display = "block" ;
        }
        else
        {
            document.getElementById("happy").style.display = "none";
            document.getElementById("oops").style.display = "block";
        }
    }
    
})

closeIcon.addEventListener("click", function(){
    document.getElementById("notice").style.display = "none";
})

policyBtn.addEventListener("click",function(){
    document.getElementById("notice").style.display = "flex"
})