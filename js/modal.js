!function(){for(var o=document.querySelector(".modal"),s=document.querySelector(".modal__overlay"),e=document.querySelectorAll(".order-js"),a=document.querySelector(".add-js"),l=0;l<e.length;l++)e[l].addEventListener("click",function(e){e.preventDefault(),o.classList.contains("modal--show")?(o.classList.remove("modal--show"),s.classList.remove("modal__overlay--show")):(o.classList.add("modal--show"),s.classList.add("modal__overlay--show"))});a.addEventListener("click",function(e){e.preventDefault(),o.classList.contains("modal--show")&&(o.classList.remove("modal--show"),s.classList.remove("modal__overlay--show"))}),s.addEventListener("click",function(e){s.classList.contains("modal__overlay--show")&&(s.classList.remove("modal__overlay--show"),o.classList.remove("modal--show"))})}();