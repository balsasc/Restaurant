(()=>{"use strict";const e=e=>{e.style.background='linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("https://images.pexels.com/photos/5490897/pexels-photo-5490897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center center/cover';const t=document.createElement("div");t.classList.add("title-and-desc");const n=document.createElement("h1");n.innerHTML="<i>Paso Doble</i>",n.classList.add("heading-main");const a=document.createElement("p");a.innerHTML="<i>At your service since 1902.</i>",a.classList.add("desc-main"),t.append(n,a),t.style.textAlign="center";const c=document.createElement("p");return c.classList.add("about"),c.textContent="Cupcake ipsum dolor sit amet biscuit. Tart gingerbread ice cream. Tart chocolate cake sweet carrot cake marshmallow chocolate donut. Topping jujubes oat cake cake. Chupa chups pastry pie lollipop liquorice lemon drops cookie. Sweet roll ice cream soufflé cookie candy dragée sweet gummies croissant. Caramels tiramisu croissant marshmallow sweet roll cotton candy pudding cake.",e.append(t,c),e},t=document.querySelector("#content");document.body.prepend((()=>{const e=document.createElement("nav");e.classList.add("nav-bar");const t=document.createElement("ul");t.classList.add("nav-items");const n=document.createElement("li"),a=document.createElement("a");a.textContent="Home",a.classList.add("nav-item","home"),n.append(a);const c=document.createElement("li"),s=document.createElement("a");s.textContent="Menu",s.classList.add("nav-item","menu"),c.append(s);const o=document.createElement("li"),r=document.createElement("a");return r.textContent="Contact",r.classList.add("nav-item","contact"),o.append(r),t.append(n,c,o),e.append(t),e})()),e(t),document.querySelector(".home").addEventListener("click",(()=>{t.innerHTML="",t.removeAttribute("style"),e(t)})),document.querySelector(".menu").addEventListener("click",(()=>{t.innerHTML="",t.removeAttribute("style")})),document.querySelector(".contact").addEventListener("click",(()=>{t.innerHTML="",t.removeAttribute("style"),(e=>{e.style.backgroundColor="#333",e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center";const t=document.createElement("h1");t.textContent="Contact Us",t.classList.add("heading-main"),e.prepend(t);const n=document.createElement("div");n.classList.add("container");const a=document.createElement("div");a.classList.add("info");const c=document.createElement("p");c.innerHTML='<i class="fas fa-phone fa-2x"></i> : 201-340-1292';const s=document.createElement("p");s.innerHTML='<i class="fas fa-map-pin fa-2x"></i> : 7474 Vernon Circle Staten Island, NY';const o=document.createElement("p");o.innerHTML='<i class="far fa-clock fa-2x"></i> : 9AM - 11PM';const r=document.createElement("div");r.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1072.0727683791645!2d-74.20247828780508!3d40.53540937378646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24ac46f8b3baf%3A0xa6a8e240a8d3f361!2sVernon%20Ave%2C%20Staten%20Island%2C%20NY%2010309%2C%20USA!5e0!3m2!1sen!2s!4v1620916666611!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',a.append(c,s,o),n.append(a,r),e.append(n)})(t)}))})();