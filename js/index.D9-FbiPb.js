import{g as e,i as a,k as l,s as n,c as t,a as o,e as u,o as s,p as r}from"../s/index.BKteVi2W.js";const v=e({setup(){const e=a(null),t=a([]),o=a(null),u=a([]),s=e=>{const a=[e.lnglat.lng,e.lnglat.lat];t.value.push(a),t.value.length>=2&&r()},r=()=>{o.value&&e.value.remove(o.value),u.value.forEach((a=>e.value.remove(a))),u.value=[];const a=t.value.map((e=>new AMap.LngLat(e[0],e[1])));o.value=new AMap.Polyline({path:a,strokeColor:"#80d8ff",isOutline:!0,outlineColor:"white"}),e.value.add(o.value);for(let l=0;l<a.length-1;l++){const n=AMap.GeometryUtil.distance(a[l],a[l+1]),o=t.value[l],s=t.value[l+1],r=[(o[0]+s[0])/2,(o[1]+s[1])/2],v=new AMap.Marker({position:r,map:e.value,content:`<div style="background-color: rgba(255, 51, 255, 0.7); border-radius: 5px; padding: 2px 5px;">${n.toFixed(2)}m</div>`,anchor:"middle",offset:new AMap.Pixel(-6*n.toString().length,-10),zIndex:100});u.value.push(v)}};return l((()=>{e.value=new AMap.Map("mapContainer",{zoom:10,center:[116.397428,39.90923]}),AMap.event.addListener(e.value,"click",s)})),n((()=>{var a;e.value&&e.value.destroy(),o.value&&(null==(a=e.value)||a.remove(o.value)),u.value.forEach((e=>null==e?void 0:e.setMap(null)))})),{}}},[["render",function(e,a,l,n,v,i){const d=r;return s(),t("div",null,[a[0]||(a[0]=o("h3",{id:"C111",class:"titleName"},"1.高德地图",-1)),u(d,{infos:"实现点击划线并计算距离"}),a[1]||(a[1]=o("div",{id:"mapContainer",style:{width:"100%",height:"300px"}},null,-1))])}],["__scopeId","data-v-23dd99ac"]]);export{v as default};