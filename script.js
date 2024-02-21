document.addEventListener("DOMContentLoaded", function () {
    const profession = document.getElementById("profession");
    const newprofession = document.getElementById("new-profession"); 
    const jobs = ["Creator"];
    const writing_speed = 250;
    let jobIndex = 0;
    let charIndex = 0;
    
    function writing() {
        if (jobIndex < jobs.length) {
            if (charIndex < jobs[jobIndex].length) {
                profession.innerHTML += jobs[jobIndex][charIndex];
                
                charIndex++;
                setTimeout(writing, writing_speed);
            } else {
                jobIndex++;
                charIndex = 0;
                setTimeout(writing, writing_speed);
            }
        }

        else{
            
            profession.style.textDecoration = "line-through";
            newprofession.style.opacity = "1";
        }
        
    }
    
    writing();

    
    
    
});
