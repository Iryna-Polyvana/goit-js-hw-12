import{a as f,S as g,i as n}from"./assets/vendor-CVuRD470.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p=o=>{const s=new URLSearchParams({key:"53358715-8970766531ccc29f18899e248",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get(`https://pixabay.com/api/?${s}`).then(r=>r.data.hits)};let c;const y=o=>{const s=({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`<li class="gallery-item">
  <a class="gallery-link" href="${a}" target="_self" rel="noopener noreferrer">
    <img
      class="gallery-image"
      src="${r}"
      alt="${e}"
      loading="lazy"
    />
  </a>
  <ul class="stats">
    <li class="stats-item">
      <b>Likes</b>
      <span>${t}</span>
    </li>
    <li class="stats-item">
      <b>Views</b>
      <span>${i}</span>
    </li>
    <li class="stats-item">
      <b>Comments</b>
      <span>${u}</span>
    </li>
    <li class="stats-item">
      <b>Downloads</b>
      <span>${d}</span>
    </li>
  </ul>
</li>
`;l.galleryList.innerHTML=o.map(r=>s(r)).join(""),c?c.refresh():c=new g(".gallery a",{captionsData:"alt",captionDelay:250})},l={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")},h=()=>{l.galleryList.innerHTML=""},L=()=>{l.loader.classList.remove("is-hidden")},b=()=>{l.loader.classList.add("is-hidden")},m=document.querySelector(".form"),S=o=>{o.preventDefault();const{target:s}=o,r=s.elements["search-text"].value.trim();if(r===""){n.warning({message:"Please enter a search query.",position:"topRight"});return}h(),L(),p(r).finally(()=>{b(),m.reset()}).then(a=>{if(a.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(a)}).catch(a=>{n.error({message:a.message||"Something went wrong"})})};m.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
