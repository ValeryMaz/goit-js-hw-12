import{a as v,S as w,i}from"./assets/vendor-B-D547pe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const S="49320414-34c235123b434a4e0d748057d";async function m(t,r=1,a=15){try{return await v.get("https://pixabay.com/api/",{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:a}})}catch(o){throw console.error("Error fetching data from Pixabay API:",o),o}}const y=document.querySelector(".gallery");let u;function q(){y.innerHTML=""}function f(t){const r=t.map(({webformatURL:a,largeImageURL:o,tags:e,likes:s,views:n,comments:g,downloads:L})=>`<li class="gallery-item">
	<a class="gallery-link" href="${o}">
		<img
		  class="gallery-image"
		  src="${a}"
		  alt="${e}"
          width="360"
          height="152"

		/>
        <div class='desc-container'>
        <div class='desc'>
            <p class='desc-text'>Likes:</p>
            <span class='desc-n'>${s}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Views:</p>
            <span class='desc-n'>${n}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Comments:</p>
             <span class='desc-n'>${g}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Downloads:</p>
             <span class='desc-n'>${L}</span>
        </div>

        </div>
	</a>
</li>`).join("");y.insertAdjacentHTML("beforeend",r),u?u.refresh():u=new w(".gallery a",{captionsData:"alt",captionDelay:250})}const b=document.querySelector(".form"),d=document.querySelector(".loader"),l=document.querySelector(".load-more");document.querySelector(".gallery");let c=1,p="",h=0;l.classList.add("hidden");b.addEventListener("submit",x);l.addEventListener("click",P);async function x(t){t.preventDefault();const r=document.querySelector('input[name="search-text"]').value.trim();if(r===""){i.show({title:"Error",message:"Please enter a search query!"});return}p=r,c=1,q(),l.classList.add("hidden"),d.classList.remove("hidden");try{const a=await m(p,c);h=a.data.totalHits,a.data.hits.length===0?i.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(f(a.data.hits),a.data.hits.length<h&&l.classList.remove("hidden"))}catch(a){console.error(a),i.show({title:"Error",message:"Sorry, there was an error processing your request. Please try again!"})}finally{d.classList.add("hidden")}}async function P(){c+=1,d.classList.remove("hidden");try{const t=await m(p,c);f(t.data.hits),c*15>=h&&(l.classList.add("hidden"),i.show({title:"Info",message:"We're sorry, but you've reached the end of search results."})),E()}catch(t){console.error(t),i.show({title:"Error",message:"Sorry, there was an error processing your request. Please try again!"})}finally{d.classList.add("hidden")}}function E(){const t=document.querySelector(".gallery-item");if(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
