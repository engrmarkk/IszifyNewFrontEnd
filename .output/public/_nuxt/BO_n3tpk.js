import{e as f,r as u,s as i,c as b,a0 as m,B as t}from"./Dq_m8wUf.js";const p=Symbol.for("nuxt:client-only"),k=f({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(d,{slots:a,attrs:o}){const l=u(!1);return i(()=>{l.value=!0}),m(p,!0),e=>{var c;if(l.value)return(c=a.default)==null?void 0:c.call(a);const n=a.fallback||a.placeholder;if(n)return n();const r=e.fallback||e.placeholder||"",s=e.fallbackTag||e.placeholderTag||"span";return b(s,o,r)}}}),g=t("/icons/menu.svg"),h=t("/icons/close-black.svg");export{k as _,g as a,h as b};
