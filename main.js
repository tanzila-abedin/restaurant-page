(()=>{"use strict";const e=()=>{const e=document.createElement("div"),n=document.createElement("div");n.classname="about";const t=document.createElement("h3");t.innerText="About",n.appendChild(t),e.appendChild(n);const a=document.createElement("p");a.className="about-paragraph",a.innerHTML="Welcome to the home of traditional homemade pies.The Tanzila's Cafe </br> \n  in Johannesburg  has been our home since 2010 and has been at the centre of the community ever since.</br> In that time, we've found a way of doing things that has won the hearts of thousands of pie-eaters.</br> \n  That’s why we stick to what we’re good at, with our secret recipes and cooking methods,</br>\n   our prime cuts of meat and our specially-blended pastry.",n.appendChild(a);const d=document.createElement("div");n.classname="hours";const s=document.createElement("h3");s.innerText="Hours",d.appendChild(s),e.appendChild(d);const i=document.createElement("p");i.className="about-paragraph",i.innerHTML="\n                          Sunday: 8am - 8pm</br>\n                          Monday: 6am - 6pm</br>\n                          Tuesday: 6am - 6pm</br>\n                          Wednesday: 6am - 6pm</br>\n                          Thursday: 6am - 10pm</br>\n                          Friday: 6am - 10pm</br>\n                          Saturday: 8am - 10pm</br>",d.appendChild(i);const c=document.createElement("div");c.classname="location";const o=document.createElement("h3");o.innerText="Location",c.appendChild(o),e.appendChild(c);const r=document.createElement("p");return r.className="about-paragraph",r.innerText="No 6 Fish River Street, Lenasia,Johannesburg, South Africa 1828",c.appendChild(r),e},n=(e,n,t)=>{const a=document.createElement("div");a.classList.add("menu-item","col-6","p-0");const d=document.createElement("h2");d.textContent=e;const s=document.createElement("p");s.textContent=n;const i=document.createElement("img");return i.src=t,i.alt=`${e}`,i.className="pieImage",a.appendChild(i),a.appendChild(d),a.appendChild(s),a},t=document.createElement("div");t.id="content",t.className="container-fluid",document.body.appendChild(t);const a=document.createElement("header"),d=new Image;d.src="../dist/assets/logo.jpeg",d.id="logo-main";const s=document.createElement("nav");s.classList.add("navbar","navbar-dark","d-flex","flex-column","justify-content-center"),s.id="navBar",t.appendChild(a),a.appendChild(s),s.appendChild(d),s.appendChild((()=>{const e=document.createElement("ul");e.classList.add("d-flex","justify-content-around","list-unstyled","p-3");const n=document.createElement("li"),t=document.createElement("button");t.innerHTML="HOME",t.className="nav-link",t.id="home",e.append(n),n.append(t);const a=document.createElement("li"),d=document.createElement("button");d.innerHTML="MENU",d.className="nav-link",d.id="menu",e.append(a),a.append(d);const s=document.createElement("li"),i=document.createElement("button");return i.innerHTML="CONTACT",i.className="nav-link",i.id="contact",e.append(s),s.append(i),e})());const i=document.createElement("div");i.classList.add("main","text-center"),t.appendChild(i),i.appendChild(e()),(()=>{const t=document.getElementById("home"),a=document.getElementById("menu"),d=document.getElementById("contact");t.addEventListener("click",(()=>{i.innerText="",i.appendChild(e())})),a.addEventListener("click",(()=>{i.innerText="",i.appendChild((()=>{const e=document.createElement("div");return e.textContent="",e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("h3");return t.innerText="Freshly Baked Homemade Pies",e.appendChild(t),e.classList.add("menu","row"),e.appendChild(n("Chicken & Mushroom","price: R 25.00","./assets/meatpie3.jpg")),e.appendChild(n("Cornish","Price: R 25.00","./assets/meatpie2.jpeg")),e.appendChild(n("Spinach Cheese & Corn","Price: R 25.00","./assets/meatpie5.jpeg")),e.appendChild(n("Pepper Steak","Price: R 25.00","./assets/meat pie 6.jpeg")),e.appendChild(n("Cheese & Salami","Price: R 25.00","../dist/assets/meatpie7.jpeg")),e.appendChild(n("Sausage Roll","Price: R25.00","./assets/meatpiwe4.jpeg")),e})()),e})())})),d.addEventListener("click",(()=>{i.innerText="",i.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("div");return n.setAttribute("id","contact"),n.setAttribute("data-tab-content",""),n.innerHTML='\n    <div class="hero">\n    <h1>Contact us</h1>\n  </div>\n  <div class="contact-container">\n    <div class="info">\n      <div class="address">\n        <p>\n          <i class="fi-xnsuxl-map-marker-solid"></i>No 6 Fish River Street, Lenasia,<br />Johannesburg, South Africa 1827\n        </p>\n      </div>\n      <div class="hours">\n        <p>\n          <i class="fi-cnsuhl-clock-solid"></i\n          ><span>Mon-Fri:</span>9am-5pm<br /><span>Sat-Sun:</span\n          >9am-12pm\n        </p>\n      </div>\n      <div class="phone">\n        <p><i class="fi-xnsrxl-phone-solid"></i>(277)-888 5555</p>\n      </div>\n      <div class="contact-form pb-5">\n        <form onsubmit="return false">\n          <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>\n          <div class="input-box p-3">\n            <input type="text" placeholder="Full name" class="text-center" required/>\n       \n          </div>\n          <div class="input-box text-center pb-3">\n            <input type="text" placeholder="email" class="text-center" required/>\n\n          </div>\n          <div class="input-box text-center pb-3">\n            <textarea placeholder="message" class="text-center" required></textarea>\n          </div>\n          <div class=\'submit\'>\n          <input type="submit" value="Send" />\n          </div>\n        </form>\n      </div>\n    </div>\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.5272280991567!2d27.855745014744457!3d-26.341804175978364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a9961e41864d%3A0xf07d0a6683223795!2sDelhi%20Delicious%20Headoffice!5e0!3m2!1sen!2sza!4v1627508384711!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>\n  </div>',e.appendChild(n),e})())}))})()})();