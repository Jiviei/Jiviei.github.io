import{p as w}from"./chunk-BAOP5US2-BBBBJklK.js";import{C as B,s as S,b as F,q as z,r as P,c as W,d as D,_ as l,l as x,D as v,E as T,x as E,H as _,m as A}from"../server.js";import{p as N}from"./mermaid-parser.core-Dcw1NPlv.js";import"graceful-fs";import"path";import"fs";import"assert";import"crypto";import"os";import"http";import"https";import"url";import"util";import"domain";import"stream";import"timers";import"events";import"buffer";import"zlib";import"net";import"dns";import"tls";import"child_process";import"punycode";import"./reduce-Tmod7l3H.js";import"./min-DqVDo_SI.js";import"./clone-BAMAgPku.js";var C={packet:[]},h=structuredClone(C),L=B.packet,Y=l(()=>{const t=v({...L,...T().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),H=l(()=>h.packet,"getPacket"),I=l(t=>{t.length>0&&h.packet.push(t)},"pushWord"),M=l(()=>{E(),h=structuredClone(C)},"clear"),u={pushWord:I,getPacket:H,getConfig:Y,clear:M,setAccTitle:S,getAccTitle:F,setDiagramTitle:z,getDiagramTitle:P,getAccDescription:W,setAccDescription:D},O=1e4,q=l(t=>{w(t,u);let e=-1,o=[],n=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,label:d}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${d}`);o.length<=s+1&&u.getPacket().length<O;){const[f,c]=G({start:a,end:r,label:d},n,s);if(o.push(f),f.end+1===n*s&&(u.pushWord(o),o=[],n++),!c)break;({start:a,end:r,label:d}=c)}}u.pushWord(o)},"populate"),G=l((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),K={parse:l(async t=>{const e=await N("packet",t);x.debug(e),q(e)},"parse")},R=l((t,e,o,n)=>{const s=n.db,a=s.getConfig(),{rowHeight:r,paddingY:d,bitWidth:f,bitsPerRow:c}=a,b=s.getPacket(),i=s.getDiagramTitle(),g=r+d,p=g*(b.length+1)-(i?0:r),m=f*c+2,k=_(e);k.attr("viewbox",`0 0 ${m} ${p}`),A(k,p,m,a.useMaxWidth);for(const[$,y]of b.entries())U(k,y,$,a);k.append("text").text(i).attr("x",m/2).attr("y",p-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=l((t,e,o,{rowHeight:n,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:d,showBits:f})=>{const c=t.append("g"),b=o*(n+a)+a;for(const i of e){const g=i.start%d*r+1,p=(i.end-i.start+1)*r-s;if(c.append("rect").attr("x",g).attr("y",b).attr("width",p).attr("height",n).attr("class","packetBlock"),c.append("text").attr("x",g+p/2).attr("y",b+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!f)continue;const m=i.end===i.start,k=b-2;c.append("text").attr("x",g+(m?p/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",m?"middle":"start").text(i.start),m||c.append("text").attr("x",g+p).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),X={draw:R},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=l(({packet:t}={})=>{const e=v(j,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),wt={parser:K,db:u,renderer:X,styles:J};export{wt as diagram};
