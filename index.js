
let btn=document.querySelectorAll(".btn");
let btnArr=Array.from(btn);
let work=document.querySelectorAll(".works>div");
let workArr=Array.from(work);
btnArr.forEach(el=>{
    el.addEventListener("click",function(e){
       
        btnArr.forEach(el=>{ el.classList.remove("active")});
             e.currentTarget.classList.add("active");
        workArr.forEach(el=>{ el.style.display="none"});
      document.querySelectorAll(e.currentTarget.dataset.content).forEach(el=>{
          el.style.display="block";
      });
    });
});

