import{a as M,S as v,i as c}from"./assets/vendor-CVuRD470.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m=async(o,r)=>{const t=new URLSearchParams({key:"53358715-8970766531ccc29f18899e248",q:o,image_type:"photo",orientation:"horizontal",page:r,per_page:15,safesearch:!0});try{return(await M.get(`https://pixabay.com/api/?${t}`)).data}catch(a){console.log(a)}};let u;const y=o=>{const r=({webformatURL:t,largeImageURL:a,tags:e,likes:s,views:n,comments:S,downloads:q})=>`<li class="gallery-item">
  <a class="gallery-link" href="${a}" target="_self" rel="noopener noreferrer">
    <img
      class="gallery-image"
      src="${t}"
      alt="${e}"
      loading="lazy"
    />
  </a>
  <ul class="stats">
    <li class="stats-item">
      <b>Likes</b>
      <span>${s}</span>
    </li>
    <li class="stats-item">
      <b>Views</b>
      <span>${n}</span>
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
`;i.galleryList.insertAdjacentHTML("beforeend",o.map(t=>r(t)).join("")),u?u.refresh():u=new v(".gallery a",{captionsData:"alt",captionDelay:250})},i={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},B=()=>{i.galleryList.innerHTML=""},p=()=>{i.loader.classList.remove("is-hidden")},h=()=>{i.loader.classList.add("is-hidden")},f=()=>{i.loadMoreBtn.classList.remove("is-hidden")},g=()=>{i.loadMoreBtn.classList.add("is-hidden")},L=document.querySelector(".form");let l=1,b=15,d=null,w=null;const P=async o=>{o.preventDefault();const{target:r}=o;if(d=r.elements["search-text"].value.trim(),d===""){c.warning({message:"Please enter a search query.",position:"topRight"});return}B(),g(),p(),l=1;try{const{hits:t,totalHits:a}=await m(d,l);if(t.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),L.reset();return}a>b&&f(),y(t),w=i.galleryList.querySelector("li").getBoundingClientRect().height}catch(t){c.error({message:t.message||"Something went wrong"})}finally{h()}};L.addEventListener("submit",P);const $=async o=>{g(),p();try{l++;const{hits:r,totalHits:t}=await m(d,l);if(y(r),scrollBy({top:w*2,behavior:"smooth"}),l===Math.ceil(t/b)){c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),g();return}f()}catch(r){console.log(r)}finally{h()}};i.loadMoreBtn.addEventListener("click",$);
//# sourceMappingURL=index.js.map
