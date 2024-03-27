document.querySelector('.menu').addEventListener('click',()=>{

  document.querySelector('.navig').classList.toggle('changenav')
  document.querySelector('.menu').classList.toggle('changenav')
})





const icons = document.querySelectorAll(".section-1-icons i");
let count = 0;

setInterval(() => {
    count++
  const icon = document.querySelector(".section-1-icons .change");

  icon.classList.remove("change");

  if (count < icons.length) {
      icon.nextElementSibling.classList.add("change");
    } else {
    icons[0].classList.add("change");
    count = 0;
  }
}, 4000);