//active link
 let navMenu = document.getElementsByClassName('menu-link');
 let links = navMenu[0].getElementsByClassName('link');
 for (let i = 0; i < links.length; i++) {
     links[i].addEventListener("click",  () => {
         let current = document.getElementsByClassName('active');
         current[0].className = current[0].className.replace('active', '');
         links[i].classList.add('active')
     })
     
 }
 console.log(links);