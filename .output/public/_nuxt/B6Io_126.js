import{e as w,l as p,r as m,M as y,u as k,c,o as v,a as e,g as C,h as a,v as i,d as r,ab as V,j as N,b as U}from"./Dq_m8wUf.js";import{L}from"./lrz6IDt1.js";const h={class:"bg-white pt-16 md:pt-20 px-5"},q={class:"max-w-full w-full md:w-[60%] mx-auto py-10 md:py-20"},M={class:"mt-5 md:mt-10"},T={class:"mt-5 md:mt-10"},j={class:"mt-10 md:mt-20"},B={class:"flex items-center gap-1 mt-4"},R={class:"mt-10 md:mt-20 flex justify-end gap-5 items-center"},D={key:0},A=w({__name:"new",setup(Q){const{$axiosHelper:f}=p(),{$auth:x}=p(),_=x.session.value.access_token,n=m(!1),b=y(),u=k(),s=m({original_url:"",title:"",custom_url:"",want_qr_code:!1}),g=async()=>{var t,o;n.value=!0;const l=await f.post("url_shortener/short_url/create",s.value,_);l!=null&&l.error?l!=null&&l.error&&(u.error((o=l==null?void 0:l.error)==null?void 0:o.message),n.value=!1):(n.value=!1,u.success((t=l==null?void 0:l.data)==null?void 0:t.message),d(),b.push("/user/links"))},d=()=>{s.value.original_url="",s.value.title="",s.value.custom_url="",s.value.want_qr_code=!1};return(l,t)=>(v(),c("section",h,[e("div",q,[t[11]||(t[11]=e("div",null,[e("h2",{class:"text-accent font-bold text-3xl"},"Create New Link")],-1)),e("form",{onSubmit:t[4]||(t[4]=C(()=>{},["prevent"])),class:"mt-5 md:mt-10"},[e("div",null,[t[5]||(t[5]=e("p",{class:"font-bold text-info"},"Url Destination",-1)),a(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.value.original_url=o),type:"text",class:"v-input",placeholder:"hpps://example,com/my-long-url"},null,512),[[i,s.value.original_url]])]),e("div",M,[t[6]||(t[6]=e("p",null,[e("span",{class:"font-bold text-info"},"Title "),r(" (optional)")],-1)),a(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.value.title=o),type:"text",class:"v-input"},null,512),[[i,s.value.title]])]),e("div",T,[t[7]||(t[7]=e("p",{class:"font-bold text-info"},"Custom Url",-1)),a(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>s.value.custom_url=o),type:"text",class:"v-input",placeholder:""},null,512),[[i,s.value.custom_url]])]),e("div",j,[t[9]||(t[9]=e("p",null,[e("span",{class:"font-bold text-info text-lg md:text-xl"},"QR Code "),r(" (optional) ")],-1)),e("div",B,[e("p",null,[a(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>s.value.want_qr_code=o),type:"checkbox",class:"toggle"},null,512),[[V,s.value.want_qr_code]])]),t[8]||(t[8]=e("p",{class:"text-base"}," Generate a QR Code to share anywhere people can see it ",-1))])]),e("div",R,[e("div",null,[e("button",{onClick:d,class:"font-semibold text-info border px-5 py-2 rounded-md hover:bg-accent-tint"}," Cancel ")]),e("div",null,[e("button",{onClick:g,class:"btn-green-sm flex justify-center items-center"},[n.value?(v(),c("span",D,[U(L)])):N("",!0),t[10]||(t[10]=r(" Create "))])])])],32)])]))}});export{A as default};
