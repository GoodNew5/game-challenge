(()=>{let e={rating:[{id:"123",name:"Владимир",lastName:"Ларионов",img:"./male.png",points:"463"},{id:"9",name:"Владимир",lastName:"Сергеев",img:"./male.png",points:"521"},{id:"231",name:"Вениамин",lastName:"Васильев",img:"./male.png",points:"865"},{id:"321",name:"Мария",lastName:"Логинова",img:"./female.png",points:"865"},{id:"492",name:"Борис",lastName:"Казанцев",img:"./male.png",points:"784"},{id:"452",name:"Полина",lastName:"Калинина",img:"./female.png",points:"225"},{id:"796",name:"Даниил",lastName:"Воробьёв",img:"./male.png",points:"642"},{id:"4",name:"Эрик",lastName:"Аксёнов",img:"./male.png",points:"150"},{id:"1155",name:"Иван",lastName:"Иванов",img:"./male.png",points:"100"},{id:"12145",name:"Артем",lastName:"Алексеев",img:"./male.png",points:"1000"}],friends:[{id:"9",name:"Владимир",lastName:"Сергеев",img:"./male.png"},{id:"4",name:"Эрик",lastName:"Аксёнов",img:"./male.png"},{id:"15411",name:"Ирина",lastName:"Чеснокова",img:"./female.png"},{id:"15564",name:"Дарина",lastName:"Боброва",img:"./female.png"}]};!function(){let e=document.querySelector(".game-menu__go-to-button--js"),t=document.querySelector(".game__character-icon--js"),n=document.querySelector(".game__map--js"),a=[...document.querySelectorAll(".game__map-button--js")];function i(e){let t=e.getBoundingClientRect(),a=n.getBoundingClientRect();return{x:t.left-a.left,y:t.top-a.top}}let l=0,m=!1;e.addEventListener("click",()=>{m=!m,function n(){if(m||(t.removeAttribute("style"),l=0),l>=a.length){t.classList.remove("walking"),e.removeAttribute("disabled");return}let o={x:i(a[l]).x,y:i(a[l]).y},r=t.getBoundingClientRect().height,s=t.getBoundingClientRect().width,d=a[l].getBoundingClientRect().height,g=a[l].getBoundingClientRect().width,{x:c,y:u}=i(t),p=o.x-c-s/2+g,_=o.y-u-r+d,f=0;t.classList.add("walking"),e.setAttribute("disabled","true"),m=!0,function e(){if(f>=50){l++,n();return}t.style.left=c+p*f/50+"px",t.style.top=u+_*f/50+"px",f++,requestAnimationFrame(e)}()}()})}(),function(){let e=document.querySelector(".game-menu-slider__tape-wrapper--js"),t=document.querySelector(".game-menu-slider__tape--js"),n=document.querySelector(".game-menu-slider__nav-prev-button--js"),a=document.querySelector(".game-menu-slider__nav-next-button--js"),i=[...e.children],l=s(),m=t.offsetWidth,o=l*i.length;e.style.gap="10px";let r=0;function s(){return i[0].offsetWidth+10}let d=()=>{e.style.transform=`translateX(-${r}px)`},g=()=>{a.removeAttribute("disabled"),l=s(),r-l<0||(r-=l,n.toggleAttribute("disabled",0===r),d())},c=()=>{l=s(),m=t.offsetWidth,o=l*i.length,n.removeAttribute("disabled"),r+m>=o||(r+=l,a.toggleAttribute("disabled",r+m>=o),d())};a.toggleAttribute("disabled",r+m>=o),n.toggleAttribute("disabled",0===r),n.addEventListener("click",e=>{g()}),a.addEventListener("click",e=>{c()})}(),function(){let t=document.querySelector(".game-menu__rating-button--js"),n=document.querySelector(".game__rating-modal--js"),a=document.querySelector(".game__rating-modal-close-button--js"),i=document.querySelector(".game__rating-modal-content-inner--js");(function(){let{friends:t,rating:n}=e,a=[...n].sort((e,t)=>Number(t.points)-Number(e.points)),i=1;return a.map((e,n)=>(n>0&&e.points!==a[n-1].points&&(i=n+1),{place:i,...e,isFriend:!!t.find(t=>e.id===t.id)}))})().forEach(e=>{let t=document.createElement("div");t.classList.add("game__rating-modal-row"),e.isFriend&&t.classList.add("game__rating-modal-row--friend"),t.innerHTML=function(e){let{place:t,lastName:n,name:a,points:i}=e;return`<span class="game__rating-modal-row-cell game__rating-modal-row-cell--place">
            ${t}
          </span>
          <span class="game__rating-modal-row-cell game__rating-modal-row-cell--full-name">
            ${a} ${n}
          </span>
          <span class="game__rating-modal-row-cell game__rating-modal-row-cell--points">
            ${i}
          </span>
        `}(e),i.appendChild(t)}),t.addEventListener("click",e=>{n.showModal()}),a.addEventListener("click",e=>{n.close()}),n.addEventListener("click",e=>{"DIALOG"===e.target.nodeName&&n.close()})}()})();
//# sourceMappingURL=index.js.map
