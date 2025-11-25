import{a as b,S as v,i as c}from"./assets/vendor-CVuRD470.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m=async(n,r)=>{const t=new URLSearchParams({key:"53358715-8970766531ccc29f18899e248",q:n,image_type:"photo",orientation:"horizontal",page:r,per_page:15,safesearch:!0});try{return(await b.get(`https://pixabay.com/api/?${t}`)).data}catch(o){console.log(o)}};let u;const g=n=>{const r=({webformatURL:t,largeImageURL:o,tags:e,likes:s,views:l,comments:f,downloads:L})=>`<li class="gallery-item">
  <a class="gallery-link" href="${o}" target="_self" rel="noopener noreferrer">
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
      <span>${l}</span>
    </li>
    <li class="stats-item">
      <b>Comments</b>
      <span>${f}</span>
    </li>
    <li class="stats-item">
      <b>Downloads</b>
      <span>${L}</span>
    </li>
  </ul>
</li>
`;a.galleryList.insertAdjacentHTML("beforeend",n.map(t=>r(t)).join("")),u?u.refresh():u=new v(".gallery a",{captionsData:"alt",captionDelay:250})},a={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},w=()=>{a.galleryList.innerHTML=""},S=()=>{a.loader.classList.remove("is-hidden")},q=()=>{a.loader.classList.add("is-hidden")},B=()=>{a.loadMoreBtn.classList.remove("is-hidden")},M=()=>{a.loadMoreBtn.classList.add("is-hidden")},p=document.querySelector(".form");let i=1,P=15,d=null,y=null;const $=n=>{n.preventDefault();const{target:r}=n;if(d=r.elements["search-text"].value.trim(),d===""){c.warning({message:"Please enter a search query.",position:"topRight"});return}w(),S(),i=1,m(d,i).finally(()=>{q()}).then(({hits:t,totalHits:o})=>{if(t.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p.reset();return}o>P&&(B(),a.loadMoreBtn.addEventListener("click",h)),g(t),y=a.galleryList.querySelector("li").getBoundingClientRect().height}).catch(t=>{c.error({message:t.message||"Something went wrong"})})};p.addEventListener("submit",$);const h=async n=>{try{i++;const{hits:r,totalHits:t}=await m(d,i);g(r),scrollBy({top:y*2,behavior:"smooth"}),i*15>=t&&(M(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.loadMoreBtn.removeEventListener("click",h))}catch(r){console.log(r)}};
//# sourceMappingURL=index.js.map
