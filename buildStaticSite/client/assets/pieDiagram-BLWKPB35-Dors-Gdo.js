import{p as H}from"./chunk-BAOP5US2-C6vr1h8c.js";import{ab as x,a3 as z,aH as U,C as j,q,r as Z,s as J,b as K,d as Q,c as X,_ as p,l as F,x as Y,e as tt,D as et,H as at,P as rt,m as nt}from"./index-0HVRGJtC.js";import{p as it}from"./gitGraph-YCYPL57B-CuOgYUNX.js";import{d as O}from"./arc-Bhdorz0r.js";import{o as st}from"./ordinal-Cboi1Yqb.js";import"./reduce-ClRFGedE.js";import"./min-BST-Bqwj.js";import"./clone-D_Pf2eUB.js";import"./init-Gi6I4Gst.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,a=ot,m=null,s=x(0),d=x(z),y=x(0);function i(e){var r,l=(e=U(e)).length,c,A,h=0,u=new Array(l),n=new Array(l),v=+s.apply(this,arguments),w=Math.min(z,Math.max(-z,d.apply(this,arguments)-v)),f,T=Math.min(Math.abs(w)/l,y.apply(this,arguments)),$=T*(w<0?-1:1),g;for(r=0;r<l;++r)(g=n[u[r]=r]=+t(e[r],r,e))>0&&(h+=g);for(a!=null?u.sort(function(S,C){return a(n[S],n[C])}):m!=null&&u.sort(function(S,C){return m(e[S],e[C])}),r=0,A=h?(w-l*$)/h:0;r<l;++r,v=f)c=u[r],g=n[c],f=v+(g>0?g*A:0)+$,n[c]={data:e[c],index:r,value:g,startAngle:v,endAngle:f,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:x(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,m=null,i):a},i.sort=function(e){return arguments.length?(m=e,a=null,i):m},i.startAngle=function(e){return arguments.length?(s=typeof e=="function"?e:x(+e),i):s},i.endAngle=function(e){return arguments.length?(d=typeof e=="function"?e:x(+e),i):d},i.padAngle=function(e){return arguments.length?(y=typeof e=="function"?e:x(+e),i):y},i}var R=j.pie,G={sections:new Map,showData:!1,config:R},E=G.sections,P=G.showData,ut=structuredClone(R),pt=p(()=>structuredClone(ut),"getConfig"),dt=p(()=>{E=new Map,P=G.showData,Y()},"clear"),gt=p(({label:t,value:a})=>{E.has(t)||(E.set(t,a),F.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=p(()=>E,"getSections"),mt=p(t=>{P=t},"setShowData"),ht=p(()=>P,"getShowData"),I={getConfig:pt,clear:dt,setDiagramTitle:q,getDiagramTitle:Z,setAccTitle:J,getAccTitle:K,setAccDescription:Q,getAccDescription:X,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},vt=p((t,a)=>{H(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),St={parse:p(async t=>{const a=await it("pie",t);F.debug(a),vt(a,I)},"parse")},xt=p(t=>`
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
`,"getStyles"),yt=xt,At=p(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,d)=>d.value-s.value);return ct().value(s=>s.value)(a)},"createPieArcs"),wt=p((t,a,m,s)=>{F.debug(`rendering pie chart
`+t);const d=s.db,y=tt(),i=et(d.getConfig(),y.pie),e=40,r=18,l=4,c=450,A=c,h=at(a),u=h.append("g");u.attr("transform","translate("+A/2+","+c/2+")");const{themeVariables:n}=y;let[v]=rt(n.pieOuterStrokeWidth);v??=2;const w=i.textPosition,f=Math.min(A,c)/2-e,T=O().innerRadius(0).outerRadius(f),$=O().innerRadius(f*w).outerRadius(f*w);u.append("circle").attr("cx",0).attr("cy",0).attr("r",f+v/2).attr("class","pieOuterCircle");const g=d.getSections(),S=At(g),C=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],D=st(C);u.selectAll("mySlices").data(S).enter().append("path").attr("d",T).attr("fill",o=>D(o.data.label)).attr("class","pieCircle");let W=0;g.forEach(o=>{W+=o}),u.selectAll("mySlices").data(S).enter().append("text").text(o=>(o.data.value/W*100).toFixed(0)+"%").attr("transform",o=>"translate("+$.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const M=u.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(o,b)=>{const k=r+l,_=k*D.domain().length/2,B=12*r,V=b*k-_;return"translate("+B+","+V+")"});M.append("rect").attr("width",r).attr("height",r).style("fill",D).style("stroke",D),M.data(S).append("text").attr("x",r+l).attr("y",r-l).text(o=>{const{label:b,value:k}=o.data;return d.getShowData()?`${b} [${k}]`:b});const L=Math.max(...M.selectAll("text").nodes().map(o=>o?.getBoundingClientRect().width??0)),N=A+e+r+l+L;h.attr("viewBox",`0 0 ${N} ${c}`),nt(h,c,N,i.useMaxWidth)},"draw"),Ct={draw:wt},Gt={parser:St,db:I,renderer:Ct,styles:yt};export{Gt as diagram};
