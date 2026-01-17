const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab)=> {
  tab.addEventListener("click", ()=> {
    tabs.forEach((e)=>{
      e.classList.remove("tabhover");
    });
    tab.classList.add("tabhover");
  });
});
