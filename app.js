function documentActions(e){let t=e.target,o=document.querySelector(".search-form");t.classList.contains("search-form__icon")?o.classList.toggle("_active"):!t.closest(".search-form")&&document.querySelector(".search-form._active")&&o.classList.remove("_active")}window.addEventListener("DOMContentLoaded",(()=>{})),document.addEventListener("click",documentActions);let bodyContentPath,burgerPath,burger=document.querySelector(".burger-header"),menuBody=document.querySelector(".js-menu-body"),menuBodyContent=document.querySelector(".js-menu-body-content"),documentBody=document.querySelector("body");burger.addEventListener("click",(function(e){documentBody.classList.toggle("_stop-scroll"),this.classList.toggle("_active"),menuBody.classList.toggle("_active"),clickOutside(),closeSubList()}));let menuItems=document.querySelectorAll(".menu__item"),spollers=document.querySelectorAll(".menu__spoller"),contentItems=document.querySelectorAll(".menu__sub-list"),windowWidth=window.innerWidth;function clickOutside(){document.addEventListener("click",(e=>{let t=e.composedPath().includes(menuBodyContent);if(burgerPath=e.composedPath().includes(burger),!t){if(burgerPath)return!1;burger.classList.remove("_active"),menuBody.classList.remove("_active"),documentBody.classList.remove("_stop-scroll"),closeSubList()}}))}function closeSubList(){contentItems.forEach((e=>e.style.maxHeight=null)),spollers.forEach((e=>e.classList.remove("_active")))}menuItems.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault()})),windowWidth<=768&&spollers.forEach((e=>{e.addEventListener("click",(t=>{let o=e.nextElementSibling;o.style.maxHeight?(contentItems.forEach((e=>e.style.maxHeight=null)),spollers.forEach((e=>e.classList.remove("_active")))):(contentItems.forEach((e=>e.style.maxHeight=null)),o.style.maxHeight=o.scrollHeight+"px",spollers.forEach((e=>e.classList.remove("_active"))),e.classList.add("_active"))}))}))}));let header=document.querySelector(".js-header"),headerHeight=header.clientHeight,headerBackground=document.querySelector(".js-header-row"),scrollPos=window.pageYOffset;window.addEventListener("scroll",(()=>{scrollPos=window.pageYOffset,scrollPos>headerHeight?(header.classList.add("_fixed"),headerBackground.classList.add("_fixed")):0==scrollPos&&(header.classList.remove("_fixed"),headerBackground.classList.remove("_fixed"))}));let defaultPosition=document.querySelector(".header__row"),changedPosition=document.querySelector(".menu__list"),moveItem=document.querySelector("._move-item");function movingBlock(){Math.max(document.documentElement.clientWidth,window.innerWidth||0)<=480?moveItem.classList.contains("done")||(changedPosition.insertBefore(moveItem,changedPosition.children[0]),moveItem.classList.add("done")):moveItem.classList.contains("done")&&(defaultPosition.insertBefore(moveItem,defaultPosition.children[3]),moveItem.classList.remove("done"))}function changeAdaptIntro(){let e=document.querySelector(".js-intro-slider-content"),t=document.querySelector(".js-intro-slider"),o=document.querySelector(".js-intro-slider-btn");function r(){Math.max(document.documentElement.clientWidth,window.innerWidth||0)<=992?o.classList.contains("done")||(t.insertBefore(o,t.children[0]),o.classList.add("done")):o.classList.contains("done")&&(e.insertBefore(o,e.children[3]),o.classList.remove("done"))}window.addEventListener("resize",r),r()}function openFooter(){let e=document.querySelectorAll("._spoller-item"),t=document.querySelectorAll("._spoller"),o=document.querySelectorAll("._spoller-content"),r=window.innerWidth;e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault()})),r<=768&&t.forEach((e=>{e.addEventListener("click",(r=>{let i=e.nextElementSibling;i.style.maxHeight?(o.forEach((e=>e.style.maxHeight=null)),t.forEach((e=>e.classList.remove("_active")))):(o.forEach((e=>e.style.maxHeight=null)),i.style.maxHeight=i.scrollHeight+"px",t.forEach((e=>e.classList.remove("_active"))),e.classList.add("_active"))}))}))}))}if(window.addEventListener("resize",movingBlock),movingBlock(),changeAdaptIntro(),openFooter(),document.querySelector(".slider-intro__container")){new Swiper(".slider-intro__container",{slidesPerView:1,spaceBetween:32,watchOverflow:!0,speed:800,loop:!0,loopAdditionalSlides:5,preloadImages:!1,parallax:!0,navigation:{prevEl:".slider-intro .slider-arrows__prev",nextEl:".slider-intro .slider-arrows__next"},pagination:{el:".controlls-slider-intro__dots",clickable:!0}})}if(document.querySelector(".slider-rooms__container")){new Swiper(".slider-rooms__container",{observer:!0,observeParents:!0,slidesPerView:"auto",spaceBetween:24,watchOverflow:!0,speed:800,loop:!0,loopAdditionalSlides:5,preloadImages:!1,parallax:!0,navigation:{prevEl:".slider-rooms .slider-arrows__prev",nextEl:".slider-rooms .slider-arrows__next"},pagination:{el:".slider-rooms__dots",clickable:!0}})}if(document.querySelector(".slider-tips__container")){new Swiper(".slider-tips__container",{observer:!0,observeParents:!0,slidesPerView:3,spaceBetween:32,watchOverflow:!0,speed:800,loop:!0,watchOverflow:!0,navigation:{prevEl:".slider-tips .slider-arrows__prev",nextEl:".slider-tips .slider-arrows__next"},pagination:{el:".slider-tips__dots",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:15},480:{slidesPerView:1.5,spaceBetween:15},768:{slidesPerView:2.3,spaceBetween:20},992:{slidesPerView:3,spaceBetween:32}}})}let productsBtn=document.querySelector(".products__more");async function getProducts(){if(!productsBtn.classList.contains("_hold")){productsBtn.classList.add("_hold");let e="json/products.json",t=await fetch(e,{method:"GET"});if(t.ok){uploadProducts(await t.json()),productsBtn.classList.remove("_hold"),productsBtn.remove()}else alert("Error")}}function uploadProducts(e){let t=document.querySelector(".products__items");e.products.forEach((e=>{let o,r,i,s,n,c,l,d,a=e.id,u=e.url,m=e.labels,_=e.image,p=e.title,v=e.text,h=e.price,f=e.oldPrice,g=e.shareUrl,y=e.favoriteUrl;if(r=`<article class="products__column" data-pid="${a}">\n            <div class="products__item item-product">`,i="",m){let e='<div class="item-product__labels">',t="",o="</div>";m.forEach((e=>{t+=`\n                    <div class="item-product__label item-product__label_${e.type}">${e.value}\n                    </div>`})),i+=e,i+=t,i+=o}s=`\n            <a href="${u}" class="item-product__img" style="background-image: url(Images/products/${_});">\n            </a>`;c='<div class="item-product__prices">',c+=`<div class="item-product__price">${h}</div>`,f&&(c+=`<div class="item-product__price item-product__price_old">${f}</div>`),c+="</div>",l=`\n            <div class="item-product__hover hover-product">\n                <div class="hover-product__body">\n                    <div class="hover-product__item">\n                        <a href="" class="hover-product__btn btn btn_white">Add to cart</a>\n                    </div>\n                    <div class="hover-product__item hover-product__item_links">\n                        <a href="${g}" class="hover-product__share _icon-share">Share</a>\n                        <a href="${y}" class="hover-product__like _icon-favorite">Like</a>\n                    </div>\n                </div>\n            </div>`;n='<div class="item-product__body">',n+=`\n                <div class="item-product__content">\n                    <h5 class="item-product__title">${p}</h5>\n                    <div class="item-product__text">${v}</div>\n                </div>\n            `,n+=c,n+=l,n+="</div>",d="</div></article>",o=r,o+=i,o+=s,o+=n,o+="</div></article>",t.insertAdjacentHTML("beforeend",o)}))}function addToCart(e,t){if(!e.classList.contains("_hold")){e.classList.add("_hold"),e.classList.add("_fly");let o=document.querySelector(".js-cart"),r=document.querySelector(".js-burder"),i=document.querySelector(`[data-pid="${t}"]`).querySelector(".item-product__img"),s=i.getAttribute("style"),n=Math.max(document.documentElement.clientWidth,window.innerWidth||0),c=i.cloneNode(!0),l=i.offsetWidth,d=i.offsetHeight,a=i.getBoundingClientRect().top,u=i.getBoundingClientRect().left;c.setAttribute("class","_fly-image item-product__img"),c.style.cssText=`\n            ${s};\n            width: ${l}px;\n            height: ${d}px;\n            top: ${a}px;\n            left: ${u}px;\n        `,document.body.append(c);let m=o.getBoundingClientRect().left,_=o.getBoundingClientRect().top,p=r.getBoundingClientRect().left,v=r.getBoundingClientRect().top;n<=480?c.style.cssText=`\n                ${s};\n                width: 0px;\n                height: 0px;\n                top: ${v}px;\n                left: ${p}px;\n                opacity: 0;\n            `:n>480&&(c.style.cssText=`\n                ${s};\n                width: 0px;\n                height: 0px;\n                top: ${_}px;\n                left: ${m}px;\n                opacity: 0;\n            `),c.addEventListener("transitionend",(o=>{e.classList.contains("_fly")&&(c.remove(),function(e,t,o=!0){let r=document.querySelector(".js-cart-actions").querySelector(".js-cart"),i=r.querySelector("span"),s=document.querySelector(".cart-actions__list"),n=document.querySelector(`[data-cart-pid="${t}"]`);if(o&&(i?i.innerHTML=++i.innerHTML:r.insertAdjacentHTML("beforeend","<span>1</span>"),!n)){let e,o=document.querySelector(`[data-pid="${t}"]`);e=`\n                        <div class="cart-actions__item item-cart" data-cart-pid="${t}">\n                            <div class="item-cart__body">\n                                <a href="${t}" class="item-cart__img js-product-img" style="${o.querySelector(".item-product__img").getAttribute("style")}"></a>\n                                <div class="item-cart__content">\n                                    <h5 class="item-cart__title">${o.querySelector(".item-product__title").innerHTML}</h5>\n                                    <div class="item-cart__text">${o.querySelector(".item-product__text").innerHTML}</div>\n            \n                                    <div class="item-cart__prices">\n                                        <div class="item-cart__price">${o.querySelector(".item-product__price").innerHTML}</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="item-cart__buttons">\n                                <a href="" class="item-cart__btn btn btn_cart">Buy Now</a>\n                                <a href="" class="item-cart__btn btn btn_delete">Delete</a>\n                            </div>\n                        </div>\n                    `,s.insertAdjacentHTML("beforeend",e)}}(0,t),e.classList.remove("_fly"))}))}}productsBtn.addEventListener("click",(e=>{e.preventDefault(),getProducts()})),document.addEventListener("click",(e=>{if(e.preventDefault(),e.target.classList.contains("hover-product__btn")){let t=e.target,o=t.closest(".products__column").dataset.pid;addToCart(t,o)}e.target.classList.contains("js-cart")||e.target.closest(".js-cart")?document.querySelector(".cart-actions").classList.toggle("_active"):e.target.closest(".js-cart")||e.target.classList.contains("hover-product__btn")||document.querySelector(".cart-actions").classList.remove("_active")}));let furniture=document.querySelector(".js-furniture-body"),isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);if(furniture&&!isMobile){let e=document.querySelector(".js-furniture-items"),t=document.querySelectorAll(".js-furniture-column"),o=furniture.dataset.speed,r=0,i=0;function setMouseMoveGallery(){let s=0;t.forEach((e=>{s+=e.offsetWidth}));let n=s-furniture.offsetWidth,c=Math.floor(i-r);r+=c*o;let l=n/200*r;e.style.cssText=`transform: translate3d(${-l}px, 0, 0)`,Math.abs(c)>0?requestAnimationFrame(setMouseMoveGallery):furniture.classList.remove("_init")}furniture.addEventListener("mousemove",(e=>{let t=furniture.offsetWidth,o=e.pageX-t/2;i=o/t*200,furniture.classList.contains("_init")||(requestAnimationFrame(setMouseMoveGallery),furniture.classList.add("_init"))}))}