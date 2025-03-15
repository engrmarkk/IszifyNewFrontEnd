import{_ as I}from"./DpAIBldb.js";import{e as N,k as V,u as B,l as P,r as i,c as _,o as x,a as t,b as n,w as d,g as D,h as y,v as R,m as T,n as j,d as v,t as A}from"./Dq_m8wUf.js";import{_ as C}from"./DWSRSFXG.js";import{u as E}from"./BLm3UM3d.js";import{B as U}from"./Cg5pebkw.js";const F={class:"min-h-screen bg-white flex"},M={class:"w-full md:w-[60%] px-10 sm:px-20 pt-20 md:pt-5 md:p-10"},Y={class:"flex flex-col justify-between h-full w-full mx-auto"},$={class:"w-full self-center h-full"},q={class:"mx-auto mt-10 md:mt-20 md:w-[400px]"},z={class:"flex relative w-full"},G=["src"],O=["type"],Z=["disabled"],H={key:1,class:"text-sm md:text-base"},J={class:"pt-5 text-center text-sm"},K={class:"w-full"},Q={class:"text-center"},W={class:"bg-primary hidden md:flex w-[40%]"},X={class:"flex justify-center h-full items-center w-[400px] text-center mx-auto"},tt={class:"mt-5"},nt=N({__name:"login",setup(et){const u=V(),r=B(),b=E(),{$auth:h}=P(),c=i("olajideseyi8181@gmail.com"),m=i("Lamide@1234"),a=i(!1),f=i("password"),p=i("eye-close.svg"),k=()=>{f.value=f.value==="password"?"text":"password",p.value=p.value==="eye-close.svg"?"eye-open.svg":"eye-close.svg"},L=async()=>{var e,o,l,g;a.value=!0;const s=await $fetch("/api/auth/login",{method:"POST",body:{email:c.value.toLowerCase(),password:m.value}});if(s!=null&&s.error)s!=null&&s.error&&(((l=s==null?void 0:s.error)==null?void 0:l.email_verified)===!1?S(s==null?void 0:s.error):(r.error(((g=s==null?void 0:s.error)==null?void 0:g.message)||"Network Error"),a.value=!1));else{h.setSession({access_token:(e=s==null?void 0:s.data)==null?void 0:e.access_token}),b.setAdminProfile({access_token:(o=s==null?void 0:s.data)==null?void 0:o.access_token}),r.success("Login successful");const w=localStorage.getItem("lastVisitedRoute");w==="/"?u.replace("/user"):u.replace(w),a.value=!1}},S=s=>{(s==null?void 0:s.email_verified)===!1?u.push("/auths/otp-verify"):r.error((s==null?void 0:s.message)||"Login failed")};return(s,e)=>{const o=I;return x(),_("section",F,[t("section",M,[t("div",Y,[n(o,{to:"/"},{default:d(()=>e[2]||(e[2]=[t("div",{class:"md:flex gap-2 w-full items-center hidden"},[t("img",{src:C,alt:"Logo"}),t("h1",{class:"text-xl font-extrabold text-black"},"ISZIFY")],-1)])),_:1}),t("div",$,[t("div",q,[e[6]||(e[6]=t("h2",{class:"text-info text-2xl md:text-3xl font-bold text-center"}," Login ",-1)),t("form",{onSubmit:D(L,["prevent"]),class:"flex flex-col gap-8 mt-10"},[t("div",null,[e[3]||(e[3]=t("p",{class:"text-accent font-bold text-sm"},"Email",-1)),y(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>c.value=l),class:"v-input",type:"email",required:""},null,512),[[R,c.value,void 0,{trim:!0}]])]),t("div",null,[e[5]||(e[5]=t("p",{class:"text-accent font-bold text-sm"},"Password",-1)),t("div",z,[t("img",{onClick:k,src:`/icons/${p.value}`,alt:"Toggle Password",class:"absolute right-2 cursor-pointer top-5"},null,8,G),y(t("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>m.value=l),class:"v-input",type:f.value,required:""},null,8,O),[[T,m.value,void 0,{trim:!0}]])]),n(o,{to:"/auths/forgot-password"},{default:d(()=>e[4]||(e[4]=[t("p",{class:"capitalize text-end mt-4 text-xs text-accent cursor-pointer hover:text-primary"}," Forgot password? ",-1)])),_:1})]),t("div",null,[t("button",{type:"submit",class:"btn-full flex gap-2 justify-center items-center",disabled:a.value},[a.value?(x(),j(U,{key:0,color:"success"})):(x(),_("span",H,"Login"))],8,Z)])],32)]),t("p",J,[e[8]||(e[8]=v(" Don't have an account? ")),n(o,{to:"/auths/signup"},{default:d(()=>e[7]||(e[7]=[t("span",{class:"font-bold text-primary underline cursor-pointer"}," SIGNUP ",-1)])),_:1})])]),t("div",K,[t("p",Q,[v(" © "+A(new Date().getFullYear())+". ",1),e[9]||(e[9]=t("span",{class:"text-info font-bold"},"Iszify.com.",-1)),e[10]||(e[10]=v(" All Rights Reserved "))])])])]),t("section",W,[t("div",X,[t("div",null,[e[12]||(e[12]=t("h2",{class:"text-white text-xl md:text-2xl font-bold"}," You don't have an account? ",-1)),e[13]||(e[13]=t("p",{class:"py-2 text-sm md:text-base text-white"}," Initiate your marketing campaign today and actively connect with your customers. ",-1)),t("div",tt,[n(o,{to:"/auths/signup"},{default:d(()=>e[11]||(e[11]=[t("button",{class:"btnn-sm"},"Sign Up",-1)])),_:1})])])])])])}}});export{nt as default};
