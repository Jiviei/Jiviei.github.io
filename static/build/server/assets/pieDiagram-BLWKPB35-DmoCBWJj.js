import{p as U}from"./chunk-BAOP5US2-BBBBJklK.js";import{ab as x,a3 as z,aG as j,C as q,q as H,r as Z,s as J,b as K,d as Q,c as X,_ as u,l as G,x as Y,e as tt,D as et,H as rt,P as at,m as nt}from"../server.js";import{p as it}from"./mermaid-parser.core-Dcw1NPlv.js";import{d as O}from"./arc-DrtAnk7B.js";import{o as ot}from"./ordinal-Cboi1Yqb.js";import"graceful-fs";import"path";import"fs";import"assert";import"crypto";import"os";import"http";import"https";import"url";import"util";import"domain";import"stream";import"timers";import"events";import"buffer";import"zlib";import"net";import"dns";import"tls";import"child_process";import"punycode";import"./reduce-Tmod7l3H.js";import"./min-DqVDo_SI.js";import"./clone-BAMAgPku.js";import"./init-Gi6I4Gst.js";function st(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,r=st,f=null,o=x(0),d=x(z),y=x(0);function i(e){var a,l=(e=j(e)).length,c,A,h=0,p=new Array(l),n=new Array(l),v=+o.apply(this,arguments),w=Math.min(z,Math.max(-z,d.apply(this,arguments)-v)),m,T=Math.min(Math.abs(w)/l,y.apply(this,arguments)),$=T*(w<0?-1:1),g;for(a=0;a<l;++a)(g=n[p[a]=a]=+t(e[a],a,e))>0&&(h+=g);for(r!=null?p.sort(function(S,C){return r(n[S],n[C])}):f!=null&&p.sort(function(S,C){return f(e[S],e[C])}),a=0,A=h?(w-l*$)/h:0;a<l;++a,v=m)c=p[a],g=n[c],m=v+(g>0?g*A:0)+$,n[c]={data:e[c],index:a,value:g,startAngle:v,endAngle:m,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:x(+e),i):t},i.sortValues=function(e){return arguments.length?(r=e,f=null,i):r},i.sort=function(e){return arguments.length?(f=e,r=null,i):f},i.startAngle=function(e){return arguments.length?(o=typeof e=="function"?e:x(+e),i):o},i.endAngle=function(e){return arguments.length?(d=typeof e=="function"?e:x(+e),i):d},i.padAngle=function(e){return arguments.length?(y=typeof e=="function"?e:x(+e),i):y},i}var R=q.pie,F={sections:new Map,showData:!1,config:R},E=F.sections,P=F.showData,pt=structuredClone(R),ut=u(()=>structuredClone(pt),"getConfig"),dt=u(()=>{E=new Map,P=F.showData,Y()},"clear"),gt=u(({label:t,value:r})=>{E.has(t)||(E.set(t,r),G.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),mt=u(()=>E,"getSections"),ft=u(t=>{P=t},"setShowData"),ht=u(()=>P,"getShowData"),I={getConfig:ut,clear:dt,setDiagramTitle:H,getDiagramTitle:Z,setAccTitle:J,getAccTitle:K,setAccDescription:Q,getAccDescription:X,addSection:gt,getSections:mt,setShowData:ft,getShowData:ht},vt=u((t,r)=>{U(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),St={parse:u(async t=>{const r=await it("pie",t);G.debug(r),vt(r,I)},"parse")},xt=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),yt=xt,At=u(t=>{const r=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,d)=>d.value-o.value);return ct().value(o=>o.value)(r)},"createPieArcs"),wt=u((t,r,f,o)=>{G.debug(`rendering pie chart
`+t);const d=o.db,y=tt(),i=et(d.getConfig(),y.pie),e=40,a=18,l=4,c=450,A=c,h=rt(r),p=h.append("g");p.attr("transform","translate("+A/2+","+c/2+")");const{themeVariables:n}=y;let[v]=at(n.pieOuterStrokeWidth);v??=2;const w=i.textPosition,m=Math.min(A,c)/2-e,T=O().innerRadius(0).outerRadius(m),$=O().innerRadius(m*w).outerRadius(m*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const g=d.getSections(),S=At(g),C=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],D=ot(C);p.selectAll("mySlices").data(S).enter().append("path").attr("d",T).attr("fill",s=>D(s.data.label)).attr("class","pieCircle");let W=0;g.forEach(s=>{W+=s}),p.selectAll("mySlices").data(S).enter().append("text").text(s=>(s.data.value/W*100).toFixed(0)+"%").attr("transform",s=>"translate("+$.centroid(s)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const M=p.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(s,b)=>{const k=a+l,_=k*D.domain().length/2,B=12*a,V=b*k-_;return"translate("+B+","+V+")"});M.append("rect").attr("width",a).attr("height",a).style("fill",D).style("stroke",D),M.data(S).append("text").attr("x",a+l).attr("y",a-l).text(s=>{const{label:b,value:k}=s.data;return d.getShowData()?`${b} [${k}]`:b});const L=Math.max(...M.selectAll("text").nodes().map(s=>s?.getBoundingClientRect().width??0)),N=A+e+a+l+L;h.attr("viewBox",`0 0 ${N} ${c}`),nt(h,c,N,i.useMaxWidth)},"draw"),Ct={draw:wt},te={parser:St,db:I,renderer:Ct,styles:yt};export{te as diagram};
