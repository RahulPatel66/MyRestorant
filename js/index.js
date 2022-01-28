
// search bar 

document.getElementById("search-btn").onclick=()=>{
   
    document.getElementById("search").classList.toggle("active");
}

// navlist 
document.getElementById("menu-btn").onclick=()=>{
    document.getElementById("nav-item2").classList.toggle("active");
    // alert("hii");
}
// navlist remove 
document.getElementById("close").onclick=()=>{
    document.getElementById("nav-item2").classList.remove("active");
    // alert("hii");
}



// home swiper is here 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


//   home swiper end here 