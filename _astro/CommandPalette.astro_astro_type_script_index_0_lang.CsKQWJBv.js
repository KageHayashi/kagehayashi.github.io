const L="modulepreload",_=function(g){return"/"+g},x={},b=function(f,p,m){let i=Promise.resolve();if(p&&p.length>0){let t=function(r){return Promise.all(r.map(l=>Promise.resolve(l).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),h=n?.nonce||n?.getAttribute("nonce");i=t(p.map(r=>{if(r=_(r),r in x)return;x[r]=!0;const l=r.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const o=document.createElement("link");if(o.rel=l?"stylesheet":L,l||(o.as="script"),o.crossOrigin="",o.href=r,h&&o.setAttribute("nonce",h),document.head.appendChild(o),l)return new Promise((u,e)=>{o.addEventListener("load",u),o.addEventListener("error",()=>e(new Error(`Unable to preload CSS for ${r}`)))})}))}function d(t){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t}return i.then(t=>{for(const n of t||[])n.status==="rejected"&&d(n.reason);return f().catch(d)})};async function w(){const g=(await b(async()=>{const{default:e}=await import("./fuse.D6p4KMCL.js");return{default:e}},[])).default,f=window.__paletteData||[],p=new g(f,{keys:[{name:"title",weight:.7},{name:"description",weight:.4},{name:"category",weight:.2}],includeScore:!0,threshold:.4}),m=document.getElementById("command-palette");document.getElementById("cmd-backdrop");const i=document.getElementById("cmd-input"),d=document.getElementById("cmd-results");let t=0,n=[];const h={navigation:"nav",tool:"tool",post:"post",cheatsheet:"cheat"},r={navigation:"text-primary/50",tool:"text-green-500/70",post:"text-blue-400/70",cheatsheet:"text-orange-400/70"};function l(){m.classList.remove("hidden"),i.value="",t=0,u(f),requestAnimationFrame(()=>i.focus())}function c(){m.classList.add("hidden"),i.value=""}function o(e){c(),window.location.href=e}function u(e){if(n=e,t>=e.length&&(t=Math.max(0,e.length-1)),e.length===0){d.innerHTML=`
          <div class="px-4 py-8 text-center font-mono text-[11px] text-muted-foreground/30 tracking-wider uppercase">
            no_signal_found
          </div>
        `;return}d.innerHTML=e.map((s,v)=>{const y=v===t,E=h[s.category]||s.category,k=r[s.category]||"text-muted-foreground/50";return`
            <div
              class="cmd-result flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors ${y?"bg-primary/10":"hover:bg-card/50"}"
              data-index="${v}"
              data-url="${s.url}"
            >
              <span class="font-mono text-[9px] tracking-[0.2em] uppercase shrink-0 w-12 ${k}">
                ${E}
              </span>
              <span class="font-display text-sm tracking-wider uppercase ${y?"text-primary":"text-foreground/80"} truncate flex-1">
                ${s.title}
              </span>
              <span class="font-mono text-[10px] text-muted-foreground/25 truncate max-w-[200px] hidden sm:block">
                ${s.description}
              </span>
            </div>
          `}).join(""),d.querySelector(`[data-index="${t}"]`)?.scrollIntoView({block:"nearest"})}i.addEventListener("input",()=>{const e=i.value.trim();if(t=0,!e){u(f);return}const a=p.search(e).map(s=>s.item);u(a)}),i.addEventListener("keydown",e=>{e.key==="ArrowDown"?(e.preventDefault(),t=Math.min(t+1,n.length-1),u(n)):e.key==="ArrowUp"?(e.preventDefault(),t=Math.max(t-1,0),u(n)):e.key==="Enter"?(e.preventDefault(),n[t]&&o(n[t].url)):e.key==="Escape"&&(e.preventDefault(),c())}),d.addEventListener("click",e=>{const a=e.target.closest(".cmd-result");a?.dataset.url&&o(a.dataset.url)}),d.addEventListener("mousemove",e=>{const a=e.target.closest(".cmd-result");if(a?.dataset.index!=null){const s=parseInt(a.dataset.index,10);s!==t&&(t=s,u(n))}}),m.addEventListener("click",e=>{const a=m.querySelector(".w-full.max-w-lg");a&&!a.contains(e.target)&&c()}),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="k"&&(e.preventDefault(),m.classList.contains("hidden")?l():c())}),document.addEventListener("open-command-palette",l)}w();document.addEventListener("astro:after-swap",w);
