// Target the product submenu

const productLink = document.getElementById("product-link");
const subMenu = document.getElementById("sub-menu");

productLink.addEventListener("click", function (event) {
  event.preventDefault();
  subMenu.classList.toggle("hidden");
});


// Target the connect submenu

const connectLink = document.getElementById("connect-link");
const subMenu1 = document.getElementById('sub-menu1');

connectLink.addEventListener("click", function(event) {
    event.preventDefault();
    subMenu1.classList.toggle("hidden");
} )

// Connect the company sub-menu

const companyLink = document.getElementById("company-link");
const subMenu2 = document.getElementById("sub-menu2");

companyLink.addEventListener("click", function(event) {
    event.preventDefault();
    subMenu2.classList.toggle("hidden")
})

// Toggle the hamburger icon
const btn = document.getElementById('menuBtn')
const nav = document.getElementById('menu') // Give the mobile menu this ID

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

// Mobile Product Sub-menu
const mobileProd = document.getElementById('mobile-prod');
const productSub = document.getElementById('product-sub')

mobileProd.addEventListener('click', function(event){
    event.preventDefault(event);
    productSub.classList.toggle('hidden')
})