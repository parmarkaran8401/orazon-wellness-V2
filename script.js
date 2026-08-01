/*=========================================
        ORAZON WELLNESS
=========================================*/

// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

}

// Close Menu After Click

const navLinks=document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

});

});
