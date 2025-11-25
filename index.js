import{a as B,S as M,i as l}from"./assets/vendor-CVuRD470.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=async(n,t)=>{const s=new URLSearchParams({key:"53358715-8970766531ccc29f18899e248",q:n,image_type:"photo",orientation:"horizontal",page:t,per_page:15,safesearch:!0});try{return(await B.get(`https://pixabay.com/api/?${s}`)).data}catch(o){console.log(o)}};let u;const y=n=>{const t=({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:i,comments:S,downloads:q})=>`<li class="gallery-item">
  <a class="gallery-link" href="${o}" target="_self" rel="noopener noreferrer">
    <img
      class="gallery-image"
      src="${s}"
      alt="${e}"
      loading="lazy"
    />
  </a>
  <ul class="stats">
    <li class="stats-item">
      <b>Likes</b>
      <span>${r}</span>
    </li>
    <li class="stats-item">
      <b>Views</b>
      <span>${i}</span>
    </li>
    <li class="stats-item">
      <b>Comments</b>
      <span>${S}</span>
    </li>
    <li class="stats-item">
      <b>Downloads</b>
      <span>${q}</span>
    </li>
  </ul>
</li>
`;a.galleryList.insertAdjacentHTML("beforeend",n.map(s=>t(s)).join("")),u?u.refresh():u=new M(".gallery a",{captionsData:"alt",captionDelay:250})},a={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},P=()=>{a.galleryList.innerHTML=""},p=()=>{a.loader.classList.remove("is-hidden")},h=()=>{a.loader.classList.add("is-hidden")},f=()=>{a.loadMoreBtn.classList.remove("is-hidden")},g=()=>{a.loadMoreBtn.classList.add("is-hidden")},L=document.querySelector(".form");let d=1,b=15,c=null,w=null;const $=async n=>{n.preventDefault();const{target:t}=n;if(c=t.elements["search-text"].value.trim(),c===""){l.warning({message:"Please enter a search query.",position:"topRight"});return}P(),p(),d=33;try{const{hits:s,totalHits:o}=await m(c,d);if(s.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),L.reset();return}o>b&&(f(),a.loadMoreBtn.addEventListener("click",v)),y(s),w=a.galleryList.querySelector("li").getBoundingClientRect().height}catch{l.error({message:err.message||"Something went wrong"})}finally{h()}};L.addEventListener("submit",$);const v=async n=>{g(),p();try{d++;const{hits:t}=await m(c,d);if(y(t),scrollBy({top:w*2,behavior:"smooth"}),t.length<=b){l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.loadMoreBtn.removeEventListener("click",v),g();return}f()}catch(t){console.log(t)}finally{h()}};
//# sourceMappingURL=index.js.map
