const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(link => 
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);

navClose.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove('hidden');
});

const tabs = document.querySelectorAll(".tabs_warp ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");


tabs.forEach(tab => {
   tab.addEventListener("click", () => {
    tabs.forEach(tab => {
      tab.classList.remove("active");
    })
    tab.classList.add('active');
    
    const tabval = tab.getAttribute("data-tabs");

    all.forEach(item => {
      item.style.display = 'none';
    })

    if (tabval == 'food') {
      foods.forEach(item => {
      item.style.display = 'block';
    })
    } else if (tabval == 'snack') {
      snacks.forEach(item => {
      item.style.display = 'block';
    })
    }
    else if (tabval == 'beverage') {
      beverages.forEach(item => {
      item.style.display = 'block';
    })
    } else {
      all.forEach(item => {
      item.style.display = 'block';
    })
    }

   })
});
