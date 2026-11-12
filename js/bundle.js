(()=>{var Po="160";var du=0,ol=1,fu=2;var Hr=1,pu=2,Rn=3,Jn=0,Xe=1,fn=2;var qn=0,Gi=1,ll=2,cl=3,hl=4,mu=5,hi=100,gu=101,xu=102,ul=103,dl=104,_u=200,vu=201,yu=202,Mu=203,qa=204,Ya=205,bu=206,wu=207,Su=208,Eu=209,Tu=210,Au=211,Ru=212,Cu=213,Pu=214,Lu=0,Iu=1,Du=2,ur=3,Uu=4,Nu=5,ku=6,Ou=7,Lo=0,zu=1,Fu=2,Yn=0,Bu=1,Hu=2,Vu=3,Gu=4,Wu=5,Xu=6;var Oc=300,qi=301,Yi=302,Za=303,Ja=304,Vr=306,Ms=1e3,pn=1001,$a=1002,Me=1003,fl=1004;var da=1005;var rn=1006,qu=1007;var bs=1008;var Zn=1009,Yu=1010,Zu=1011,Io=1012,zc=1013,Wn=1014,Xn=1015,ws=1016,Fc=1017,Bc=1018,di=1020,Ju=1021,mn=1023,$u=1024,Ku=1025,fi=1026,Zi=1027,ju=1028,Hc=1029,Qu=1030,Vc=1031,Gc=1033,fa=33776,pa=33777,ma=33778,ga=33779,pl=35840,ml=35841,gl=35842,xl=35843,Wc=36196,_l=37492,vl=37496,yl=37808,Ml=37809,bl=37810,wl=37811,Sl=37812,El=37813,Tl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Ll=37819,Il=37820,Dl=37821,xa=36492,Ul=36494,Nl=36495,td=36283,kl=36284,Ol=36285,zl=36286;var dr=2300,fr=2301,_a=2302,Fl=2400,Bl=2401,Hl=2402;var Xc=3e3,pi=3001,ed=3200,nd=3201,qc=0,id=1,an="",_e="srgb",Ln="srgb-linear",Do="display-p3",Gr="display-p3-linear",pr="linear",ue="srgb",mr="rec709",gr="p3";var wi=7680;var Vl=519,sd=512,rd=513,ad=514,Yc=515,od=516,ld=517,cd=518,hd=519,Gl=35044,Zc=35048;var Wl="300 es",Ka=1035,Pn=2e3,xr=2001,$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var va=Math.PI/180,_r=180/Math.PI;function Cs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function We(n,t,e){return Math.max(t,Math.min(e,n))}function ud(n,t){return(n%t+t)%t}function ya(n,t,e){return(1-e)*n+e*t}function Xl(n){return(n&n-1)===0&&n!==0}function ja(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function us(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Qt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class n{constructor(t,e,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],b=s[1],_=s[4],A=s[7],C=s[2],T=s[5],R=s[8];return r[0]=a*x+o*b+l*C,r[3]=a*m+o*_+l*T,r[6]=a*f+o*A+l*R,r[1]=c*x+h*b+u*C,r[4]=c*m+h*_+u*T,r[7]=c*f+h*A+u*R,r[2]=d*x+p*b+g*C,r[5]=d*m+p*_+g*T,r[8]=d*f+p*A+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ma=new jt;function Jc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dd(){let n=vr("canvas");return n.style.display="block",n}var ql={};function vs(n){n in ql||(ql[n]=!0,console.warn(n))}var Yl=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zl=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bs={[Ln]:{transfer:pr,primaries:mr,toReference:n=>n,fromReference:n=>n},[_e]:{transfer:ue,primaries:mr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Gr]:{transfer:pr,primaries:gr,toReference:n=>n.applyMatrix3(Zl),fromReference:n=>n.applyMatrix3(Yl)},[Do]:{transfer:ue,primaries:gr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zl),fromReference:n=>n.applyMatrix3(Yl).convertLinearToSRGB()}},fd=new Set([Ln,Gr]),ae={enabled:!0,_workingColorSpace:Ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Bs[t].toReference,s=Bs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Bs[n].primaries},getTransfer:function(n){return n===an?pr:Bs[n].transfer}};function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ba(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Si,yr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=vr("canvas")),Si.width=t.width,Si.height=t.height;let i=Si.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=vr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Wi(e[i]/255)*255):e[i]=Wi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pd=0,Mr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Cs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wa(s[a].image)):r.push(wa(s[a]))}else r=wa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var md=0,on=class n extends $n{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=pn,s=pn,r=rn,a=bs,o=mn,l=Zn,c=n.DEFAULT_ANISOTROPY,h=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Cs(),this.name="",this.source=new Mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===pi?_e:an),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_e?pi:Xc}set encoding(t){vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===pi?_e:an}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Oc;on.DEFAULT_ANISOTROPY=1;var fe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,A=(p+1)/2,C=(f+1)/2,T=(h+d)/4,R=(u+x)/4,N=(g+m)/4;return _>A&&_>C?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=R/i):A>C?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=T/s,r=N/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=N/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qa=class extends $n{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(vs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===pi?_e:an),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Mr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Qa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},br=class extends on{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var to=class extends on{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ln=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*x,b=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let C=Math.sqrt(_),T=Math.atan2(C,f*b);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}let A=o*b;if(l=l*m+d*A,c=c*m+p*A,h=h*m+g*A,u=u*m+x*A,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sa=new D,Jl=new ln,Dn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hs.copy(i.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Vs.subVectors(this.max,ds),Ei.subVectors(t.a,ds),Ti.subVectors(t.b,ds),Ai.subVectors(t.c,ds),Fn.subVectors(Ti,Ei),Bn.subVectors(Ai,Ti),ri.subVectors(Ei,Ai);let e=[0,-Fn.z,Fn.y,0,-Bn.z,Bn.y,0,-ri.z,ri.y,Fn.z,0,-Fn.x,Bn.z,0,-Bn.x,ri.z,0,-ri.x,-Fn.y,Fn.x,0,-Bn.y,Bn.x,0,-ri.y,ri.x,0];return!Ea(e,Ei,Ti,Ai,Vs)||(e=[1,0,0,0,1,0,0,0,1],!Ea(e,Ei,Ti,Ai,Vs))?!1:(Gs.crossVectors(Fn,Bn),e=[Gs.x,Gs.y,Gs.z],Ea(e,Ei,Ti,Ai,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wn=[new D,new D,new D,new D,new D,new D,new D,new D],hn=new D,Hs=new Dn,Ei=new D,Ti=new D,Ai=new D,Fn=new D,Bn=new D,ri=new D,ds=new D,Vs=new D,Gs=new D,ai=new D;function Ea(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ai.fromArray(n,r);let o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),h=i.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var gd=new Dn,fs=new D,Ta=new D,Kn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):gd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(fs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(Ta)),this.expandByPoint(fs.copy(t.center).sub(Ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new D,Aa=new D,Ws=new D,Hn=new D,Ra=new D,Xs=new D,Ca=new D,wr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Aa.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Aa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ws),o=Hn.dot(this.direction),l=-Hn.dot(Ws),c=Hn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Aa).addScaledVector(Ws,d),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);let i=Sn.dot(this.direction),s=Sn.dot(Sn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,i,s,r){Ra.subVectors(e,t),Xs.subVectors(i,t),Ca.crossVectors(Ra,Xs);let a=this.direction.dot(Ca),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);let l=o*this.direction.dot(Xs.crossVectors(Hn,Xs));if(l<0)return null;let c=o*this.direction.dot(Ra.cross(Hn));if(c<0||l+c>a)return null;let h=-o*Hn.dot(Ca);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class n{constructor(t,e,i,s,r,a,o,l,c,h,u,d,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,d,p,g,x,m)}set(t,e,i,s,r,a,o,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,_d)}lookAt(t,e,i){let s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Vn.crossVectors(i,Ke),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Vn.crossVectors(i,Ke)),Vn.normalize(),qs.crossVectors(Ke,Vn),s[0]=Vn.x,s[4]=qs.x,s[8]=Ke.x,s[1]=Vn.y,s[5]=qs.y,s[9]=Ke.y,s[2]=Vn.z,s[6]=qs.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],b=i[3],_=i[7],A=i[11],C=i[15],T=s[0],R=s[4],N=s[8],y=s[12],S=s[1],F=s[5],Y=s[9],ht=s[13],U=s[2],O=s[6],Z=s[10],tt=s[14],K=s[3],$=s[7],rt=s[11],ct=s[15];return r[0]=a*T+o*S+l*U+c*K,r[4]=a*R+o*F+l*O+c*$,r[8]=a*N+o*Y+l*Z+c*rt,r[12]=a*y+o*ht+l*tt+c*ct,r[1]=h*T+u*S+d*U+p*K,r[5]=h*R+u*F+d*O+p*$,r[9]=h*N+u*Y+d*Z+p*rt,r[13]=h*y+u*ht+d*tt+p*ct,r[2]=g*T+x*S+m*U+f*K,r[6]=g*R+x*F+m*O+f*$,r[10]=g*N+x*Y+m*Z+f*rt,r[14]=g*y+x*ht+m*tt+f*ct,r[3]=b*T+_*S+A*U+C*K,r[7]=b*R+_*F+A*O+C*$,r[11]=b*N+_*Y+A*Z+C*rt,r[15]=b*y+_*ht+A*tt+C*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*p-i*l*p)+x*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],b=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,_=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,A=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,C=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,T=e*b+i*_+s*A+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=b*R,t[1]=(x*d*r-u*m*r-x*s*p+i*m*p+u*s*f-i*d*f)*R,t[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*f+i*l*f)*R,t[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*p-i*l*p)*R,t[4]=_*R,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*R,t[8]=A*R,t[9]=(g*u*r-h*x*r-g*i*p+e*x*p+h*i*f-e*u*f)*R,t[10]=(a*x*r-g*o*r+g*i*c-e*x*c-a*i*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*p-e*o*p)*R,t[12]=C*R,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*m+e*u*m)*R,t[14]=(g*o*s-a*x*s-g*i*l+e*x*l+a*i*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*d+e*o*d)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,b=l*c,_=l*h,A=l*u,C=i.x,T=i.y,R=i.z;return s[0]=(1-(x+f))*C,s[1]=(p+A)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(p-A)*T,s[5]=(1-(d+f))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+_)*R,s[9]=(m-b)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ri.set(s[0],s[1],s[2]).length(),a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);let c=1/r,h=1/a,u=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Pn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),p,g;if(o===Pn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Pn){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(a-r),d=(e+t)*c,p=(i+s)*h,g,x;if(o===Pn)g=(a+r)*u,x=-2*u;else if(o===xr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ri=new D,un=new le,xd=new D(0,0,0),_d=new D(1,1,1),Vn=new D,qs=new D,Ke=new D,$l=new le,Kl=new ln,Ji=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $l.makeRotationFromQuaternion(t),this.setFromRotationMatrix($l,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vd=0,jl=new D,Ci=new ln,En=new le,Ys=new D,ps=new D,yd=new D,Md=new ln,Ql=new D(1,0,0),tc=new D(0,1,0),ec=new D(0,0,1),bd={type:"added"},wd={type:"removed"},Le=class n extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new Ji,i=new ln,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new jt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(Ql,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ql,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ys.copy(t):Ys.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ps,Ys,this.up):En.lookAt(Ys,ps,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(En),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Le.DEFAULT_UP=new D(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new D,Tn=new D,Pa=new D,An=new D,Pi=new D,Li=new D,nc=new D,La=new D,Ia=new D,Da=new D,Zs=!1,Bi=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),dn.subVectors(t,e),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){dn.subVectors(s,e),Tn.subVectors(i,e),Pa.subVectors(t,e);let a=dn.dot(dn),o=dn.dot(Tn),l=dn.dot(Pa),c=Tn.dot(Tn),h=Tn.dot(Pa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(t,e,i,s,r,a,o,l){return Zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zs=!0),this.getInterpolation(t,e,i,s,r,a,o,l)}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static isFrontFacing(t,e,i,s){return dn.subVectors(i,e),Tn.subVectors(t,e),dn.cross(Tn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),dn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zs=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Pi.subVectors(s,i),Li.subVectors(r,i),La.subVectors(t,i);let l=Pi.dot(La),c=Li.dot(La);if(l<=0&&c<=0)return e.copy(i);Ia.subVectors(t,s);let h=Pi.dot(Ia),u=Li.dot(Ia);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Pi,a);Da.subVectors(t,r);let p=Pi.dot(Da),g=Li.dot(Da);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Li,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return nc.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(nc,o);let f=1/(m+x+d);return a=x*f,o=d*f,e.copy(i).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Ua(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=ud(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ua(a,r,t+1/3),this.g=Ua(a,r,t),this.b=Ua(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=_e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let i=$c[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return ae.fromWorkingColorSpace(Oe.copy(this),t),Math.round(We(Oe.r*255,0,255))*65536+Math.round(We(Oe.g*255,0,255))*256+Math.round(We(Oe.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Oe.copy(this),e);let i=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=_e){ae.fromWorkingColorSpace(Oe.copy(this),t);let e=Oe.r,i=Oe.g,s=Oe.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Js);let i=ya(Gn.h,Js.h,e),s=ya(Gn.s,Js.s,e),r=ya(Gn.l,Js.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Ot;Ot.NAMES=$c;var Sd=0,jn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=Gi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$i=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new D,$s=new Qt,Qe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=us(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}};var Er=class extends Qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Tr=class extends Qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var be=class extends Qe{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Ed=0,sn=new le,Na=new Le,Ii=new D,je=new Dn,ms=new Dn,Pe=new D,qe=class n extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jc(t)?Tr:Er)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(je.min,ms.min),je.expandByPoint(Pe),Pe.addVectors(je.max,ms.max),je.expandByPoint(Pe)):(je.expandByPoint(ms.min),je.expandByPoint(ms.max))}je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(t,c),Pe.add(Ii)),s=Math.max(s,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<o;S++)c[S]=new D,h[S]=new D;let u=new D,d=new D,p=new D,g=new Qt,x=new Qt,m=new Qt,f=new D,b=new D;function _(S,F,Y){u.fromArray(s,S*3),d.fromArray(s,F*3),p.fromArray(s,Y*3),g.fromArray(a,S*2),x.fromArray(a,F*2),m.fromArray(a,Y*2),d.sub(u),p.sub(u),x.sub(g),m.sub(g);let ht=1/(x.x*m.y-m.x*x.y);isFinite(ht)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(ht),b.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(ht),c[S].add(f),c[F].add(f),c[Y].add(f),h[S].add(b),h[F].add(b),h[Y].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let S=0,F=A.length;S<F;++S){let Y=A[S],ht=Y.start,U=Y.count;for(let O=ht,Z=ht+U;O<Z;O+=3)_(i[O+0],i[O+1],i[O+2])}let C=new D,T=new D,R=new D,N=new D;function y(S){R.fromArray(r,S*3),N.copy(R);let F=c[S];C.copy(F),C.sub(R.multiplyScalar(R.dot(F))).normalize(),T.crossVectors(N,F);let ht=T.dot(h[S])<0?-1:1;l[S*4]=C.x,l[S*4+1]=C.y,l[S*4+2]=C.z,l[S*4+3]=ht}for(let S=0,F=A.length;S<F;++S){let Y=A[S],ht=Y.start,U=Y.count;for(let O=ht,Z=ht+U;O<Z;O+=3)y(i[O+0]),y(i[O+1]),y(i[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ic=new le,oi=new wr,Ks=new Kn,sc=new D,Di=new D,Ui=new D,Ni=new D,ka=new D,js=new D,Qs=new Qt,tr=new Qt,er=new Qt,rc=new D,ac=new D,oc=new D,nr=new D,ir=new D,te=class extends Le{constructor(t=new qe,e=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ka.fromBufferAttribute(u,t),a?js.addScaledVector(ka,h):js.addScaledVector(ka.sub(e),h))}e.add(js)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(Ks.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Ks,sc)===null||oi.origin.distanceToSquared(sc)>(t.far-t.near)**2))&&(ic.copy(r).invert(),oi.copy(t.ray).applyMatrix4(ic),!(i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=b,C=_;A<C;A+=3){let T=o.getX(A),R=o.getX(A+1),N=o.getX(A+2);s=sr(this,f,t,i,c,h,u,T,R,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let b=o.getX(m),_=o.getX(m+1),A=o.getX(m+2);s=sr(this,a,t,i,c,h,u,b,_,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=b,C=_;A<C;A+=3){let T=A,R=A+1,N=A+2;s=sr(this,f,t,i,c,h,u,T,R,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let b=m,_=m+1,A=m+2;s=sr(this,a,t,i,c,h,u,b,_,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Td(n,t,e,i,s,r,a,o){let l;if(t.side===Xe?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Jn,o),l===null)return null;ir.copy(o),ir.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ir);return c<e.near||c>e.far?null:{distance:c,point:ir.clone(),object:n}}function sr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Di),n.getVertexPosition(l,Ui),n.getVertexPosition(c,Ni);let h=Td(n,t,e,i,Di,Ui,Ni,nr);if(h){s&&(Qs.fromBufferAttribute(s,o),tr.fromBufferAttribute(s,l),er.fromBufferAttribute(s,c),h.uv=Bi.getInterpolation(nr,Di,Ui,Ni,Qs,tr,er,new Qt)),r&&(Qs.fromBufferAttribute(r,o),tr.fromBufferAttribute(r,l),er.fromBufferAttribute(r,c),h.uv1=Bi.getInterpolation(nr,Di,Ui,Ni,Qs,tr,er,new Qt),h.uv2=h.uv1),a&&(rc.fromBufferAttribute(a,o),ac.fromBufferAttribute(a,l),oc.fromBufferAttribute(a,c),h.normal=Bi.getInterpolation(nr,Di,Ui,Ni,rc,ac,oc,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Bi.getNormal(Di,Ui,Ni,u.normal),h.face=u}return h}var ge=class n extends qe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(u,2));function g(x,m,f,b,_,A,C,T,R,N,y){let S=A/R,F=C/N,Y=A/2,ht=C/2,U=T/2,O=R+1,Z=N+1,tt=0,K=0,$=new D;for(let rt=0;rt<Z;rt++){let ct=rt*F-ht;for(let pt=0;pt<O;pt++){let X=pt*S-Y;$[x]=X*b,$[m]=ct*_,$[f]=U,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[f]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(pt/R),u.push(1-rt/N),tt+=1}}for(let rt=0;rt<N;rt++)for(let ct=0;ct<R;ct++){let pt=d+ct+O*rt,X=d+ct+O*(rt+1),et=d+(ct+1)+O*(rt+1),gt=d+(ct+1)+O*rt;l.push(pt,X,gt),l.push(X,et,gt),K+=6}o.addGroup(p,K,y),p+=K,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ki(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Be(n){let t={};for(let e=0;e<n.length;e++){let i=Ki(n[e]);for(let s in i)t[s]=i[s]}return t}function Ad(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Kc(n){return n.getRenderTarget()===null?n.outputColorSpace:ae.workingColorSpace}var Rd={clone:Ki,merge:Be},Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=Ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ar=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},De=class extends Ar{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(va*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ki=-90,Oi=1,eo=class extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(ki,Oi,t,e);s.layers=this.layers,this.add(s);let r=new De(ki,Oi,t,e);r.layers=this.layers,this.add(r);let a=new De(ki,Oi,t,e);a.layers=this.layers,this.add(a);let o=new De(ki,Oi,t,e);o.layers=this.layers,this.add(o);let l=new De(ki,Oi,t,e);l.layers=this.layers,this.add(l);let c=new De(ki,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Rr=class extends on{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},no=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(vs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===pi?_e:an),this.texture=new Rr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ge(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xe,blending:qn});r.uniforms.tEquirect.value=e;let a=new te(s,r),o=e.minFilter;return e.minFilter===bs&&(e.minFilter=rn),new eo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Oa=new D,Ld=new D,Id=new jt,Cn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Oa.subVectors(i,e).cross(Ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Oa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Id.getNormalMatrix(t),s=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new Kn,rr=new D,Ss=class{constructor(t=new Cn,e=new Cn,i=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pn){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],b=s[13],_=s[14],A=s[15];if(i[0].setComponents(l-r,d-c,m-p,A-f).normalize(),i[1].setComponents(l+r,d+c,m+p,A+f).normalize(),i[2].setComponents(l+a,d+h,m+g,A+b).normalize(),i[3].setComponents(l-a,d-h,m-g,A-b).normalize(),i[4].setComponents(l-o,d-u,m-x,A-_).normalize(),e===Pn)i[5].setComponents(l+o,d+u,m+x,A+_).normalize();else if(e===xr)i[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(rr.x=s.normal.x>0?t.max.x:t.min.x,rr.y=s.normal.y>0?t.max.y:t.min.y,rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jc(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Dd(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];e?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Nn=class n extends qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let b=f*d-a;for(let _=0;_<c;_++){let A=_*u-r;g.push(A,-b,0),x.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let _=b+c*f,A=b+c*(f+1),C=b+1+c*(f+1),T=b+1+c*f;p.push(_,A,T),p.push(A,C,T)}this.setIndex(p),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(x,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,af=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$f=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Np=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:Ud,alphahash_pars_fragment:Nd,alphamap_fragment:kd,alphamap_pars_fragment:Od,alphatest_fragment:zd,alphatest_pars_fragment:Fd,aomap_fragment:Bd,aomap_pars_fragment:Hd,batching_pars_vertex:Vd,batching_vertex:Gd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:qd,iridescence_fragment:Yd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:jd,color_fragment:Qd,color_pars_fragment:tf,color_pars_vertex:ef,color_vertex:nf,common:sf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:af,displacementmap_pars_vertex:of,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Rf,envmap_vertex:xf,fog_vertex:_f,fog_pars_vertex:vf,fog_fragment:yf,fog_pars_fragment:Mf,gradientmap_pars_fragment:bf,lightmap_fragment:wf,lightmap_pars_fragment:Sf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:Tf,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:Pf,lights_phong_fragment:Lf,lights_phong_pars_fragment:If,lights_physical_fragment:Df,lights_physical_pars_fragment:Uf,lights_fragment_begin:Nf,lights_fragment_maps:kf,lights_fragment_end:Of,logdepthbuf_fragment:zf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:Hf,map_fragment:Vf,map_pars_fragment:Gf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphcolor_vertex:Zf,morphnormal_vertex:Jf,morphtarget_pars_vertex:$f,morphtarget_vertex:Kf,normal_fragment_begin:jf,normal_fragment_maps:Qf,normal_pars_fragment:tp,normal_pars_vertex:ep,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:op,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:dp,dithering_pars_fragment:fp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:xp,shadowmap_vertex:_p,shadowmask_pars_fragment:vp,skinbase_vertex:yp,skinning_pars_vertex:Mp,skinning_vertex:bp,skinnormal_vertex:wp,specularmap_fragment:Sp,specularmap_pars_fragment:Ep,tonemapping_fragment:Tp,tonemapping_pars_fragment:Ap,transmission_fragment:Rp,transmission_pars_fragment:Cp,uv_pars_fragment:Pp,uv_pars_vertex:Lp,uv_vertex:Ip,worldpos_vertex:Dp,background_vert:Up,background_frag:Np,backgroundCube_vert:kp,backgroundCube_frag:Op,cube_vert:zp,cube_frag:Fp,depth_vert:Bp,depth_frag:Hp,distanceRGBA_vert:Vp,distanceRGBA_frag:Gp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:qp,linedashed_frag:Yp,meshbasic_vert:Zp,meshbasic_frag:Jp,meshlambert_vert:$p,meshlambert_frag:Kp,meshmatcap_vert:jp,meshmatcap_frag:Qp,meshnormal_vert:tm,meshnormal_frag:em,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:sm,meshphysical_frag:rm,meshtoon_vert:am,meshtoon_frag:om,points_vert:lm,points_frag:cm,shadow_vert:hm,shadow_frag:um,sprite_vert:dm,sprite_frag:fm},ft={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},vn={basic:{uniforms:Be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Be([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Be([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Be([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Be([ft.points,ft.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Be([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Be([ft.common,ft.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Be([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Be([ft.sprite,ft.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Be([ft.common,ft.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Be([ft.lights,ft.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};vn.physical={uniforms:Be([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var ar={r:0,b:0,g:0};function pm(n,t,e,i,s,r,a){let o=new Ot(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let b=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),b=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Vr)?(h===void 0&&(h=new te(new ge(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ki(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ae.getTransfer(_.colorSpace)!==ue,(u!==_||d!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new te(new Nn(2,2),new Un({name:"BackgroundMaterial",uniforms:Ki(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ae.getTransfer(_.colorSpace)!==ue,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(ar,Kc(n)),i.buffers.color.setClear(ar.r,ar.g,ar.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function mm(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(U,O,Z,tt,K){let $=!1;if(a){let rt=x(tt,Z,O);c!==rt&&(c=rt,p(c.object)),$=f(U,tt,Z,K),$&&b(U,tt,Z,K)}else{let rt=O.wireframe===!0;(c.geometry!==tt.id||c.program!==Z.id||c.wireframe!==rt)&&(c.geometry=tt.id,c.program=Z.id,c.wireframe=rt,$=!0)}K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,N(U,O,Z,tt),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(U){return i.isWebGL2?n.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function x(U,O,Z){let tt=Z.wireframe===!0,K=o[U.id];K===void 0&&(K={},o[U.id]=K);let $=K[O.id];$===void 0&&($={},K[O.id]=$);let rt=$[tt];return rt===void 0&&(rt=m(d()),$[tt]=rt),rt}function m(U){let O=[],Z=[],tt=[];for(let K=0;K<s;K++)O[K]=0,Z[K]=0,tt[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:tt,object:U,attributes:{},index:null}}function f(U,O,Z,tt){let K=c.attributes,$=O.attributes,rt=0,ct=Z.getAttributes();for(let pt in ct)if(ct[pt].location>=0){let et=K[pt],gt=$[pt];if(gt===void 0&&(pt==="instanceMatrix"&&U.instanceMatrix&&(gt=U.instanceMatrix),pt==="instanceColor"&&U.instanceColor&&(gt=U.instanceColor)),et===void 0||et.attribute!==gt||gt&&et.data!==gt.data)return!0;rt++}return c.attributesNum!==rt||c.index!==tt}function b(U,O,Z,tt){let K={},$=O.attributes,rt=0,ct=Z.getAttributes();for(let pt in ct)if(ct[pt].location>=0){let et=$[pt];et===void 0&&(pt==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),pt==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));let gt={};gt.attribute=et,et&&et.data&&(gt.data=et.data),K[pt]=gt,rt++}c.attributes=K,c.attributesNum=rt,c.index=tt}function _(){let U=c.newAttributes;for(let O=0,Z=U.length;O<Z;O++)U[O]=0}function A(U){C(U,0)}function C(U,O){let Z=c.newAttributes,tt=c.enabledAttributes,K=c.attributeDivisors;Z[U]=1,tt[U]===0&&(n.enableVertexAttribArray(U),tt[U]=1),K[U]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,O),K[U]=O)}function T(){let U=c.newAttributes,O=c.enabledAttributes;for(let Z=0,tt=O.length;Z<tt;Z++)O[Z]!==U[Z]&&(n.disableVertexAttribArray(Z),O[Z]=0)}function R(U,O,Z,tt,K,$,rt){rt===!0?n.vertexAttribIPointer(U,O,Z,K,$):n.vertexAttribPointer(U,O,Z,tt,K,$)}function N(U,O,Z,tt){if(i.isWebGL2===!1&&(U.isInstancedMesh||tt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let K=tt.attributes,$=Z.getAttributes(),rt=O.defaultAttributeValues;for(let ct in $){let pt=$[ct];if(pt.location>=0){let X=K[ct];if(X===void 0&&(ct==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),ct==="instanceColor"&&U.instanceColor&&(X=U.instanceColor)),X!==void 0){let et=X.normalized,gt=X.itemSize,At=e.get(X);if(At===void 0)continue;let Et=At.buffer,Ft=At.type,Nt=At.bytesPerElement,Dt=i.isWebGL2===!0&&(Ft===n.INT||Ft===n.UNSIGNED_INT||X.gpuType===zc);if(X.isInterleavedBufferAttribute){let Zt=X.data,z=Zt.stride,Ie=X.offset;if(Zt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<pt.locationSize;Rt++)C(pt.location+Rt,Zt.meshPerAttribute);U.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Zt.meshPerAttribute*Zt.count)}else for(let Rt=0;Rt<pt.locationSize;Rt++)A(pt.location+Rt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let Rt=0;Rt<pt.locationSize;Rt++)R(pt.location+Rt,gt/pt.locationSize,Ft,et,z*Nt,(Ie+gt/pt.locationSize*Rt)*Nt,Dt)}else{if(X.isInstancedBufferAttribute){for(let Zt=0;Zt<pt.locationSize;Zt++)C(pt.location+Zt,X.meshPerAttribute);U.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Zt=0;Zt<pt.locationSize;Zt++)A(pt.location+Zt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let Zt=0;Zt<pt.locationSize;Zt++)R(pt.location+Zt,gt/pt.locationSize,Ft,et,gt*Nt,gt/pt.locationSize*Zt*Nt,Dt)}}else if(rt!==void 0){let et=rt[ct];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(pt.location,et);break;case 3:n.vertexAttrib3fv(pt.location,et);break;case 4:n.vertexAttrib4fv(pt.location,et);break;default:n.vertexAttrib1fv(pt.location,et)}}}}T()}function y(){Y();for(let U in o){let O=o[U];for(let Z in O){let tt=O[Z];for(let K in tt)g(tt[K].object),delete tt[K];delete O[Z]}delete o[U]}}function S(U){if(o[U.id]===void 0)return;let O=o[U.id];for(let Z in O){let tt=O[Z];for(let K in tt)g(tt[K].object),delete tt[K];delete O[Z]}delete o[U.id]}function F(U){for(let O in o){let Z=o[O];if(Z[U.id]===void 0)continue;let tt=Z[U.id];for(let K in tt)g(tt[K].object),delete tt[K];delete Z[U.id]}}function Y(){ht(),h=!0,c!==l&&(c=l,p(c.object))}function ht(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:ht,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:A,disableUnusedAttributes:T}}function gm(n,t,e,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function xm(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,A=a||t.has("OES_texture_float"),C=_&&A,T=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:A,floatVertexTextures:C,maxSamples:T}}function _m(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Cn,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,_=b*4,A=f.clippingState||null;l.value=A,A=h(g,d,_,p);for(let C=0;C!==_;++C)A[C]=e[C];f.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,A=p;_!==x;++_,A+=4)a.copy(u[_]).applyMatrix4(b,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function vm(n){let t=new WeakMap;function e(a,o){return o===Za?a.mapping=qi:o===Ja&&(a.mapping=Yi),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Za||o===Ja)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new no(l.height/2);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Cr=class extends Ar{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hi=4,lc=[.125,.215,.35,.446,.526,.582],ui=20,za=new Cr,cc=new Ot,Fa=null,Ba=0,Ha=0,ci=(1+Math.sqrt(5))/2,zi=1/ci,hc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,ci,zi),new D(0,ci,-zi),new D(zi,0,ci),new D(-zi,0,ci),new D(ci,zi,0),new D(-ci,zi,0)],Pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,Ba,Ha),t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:ws,format:mn,colorSpace:Ln,depthBuffer:!1},s=uc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ym(r)),this._blurMaterial=Mm(r,t,e)}return s}_compileMaterial(t){let e=new te(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,i,s){let o=new De(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cc),h.toneMapping=Yn,h.autoClear=!1;let p=new $i({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new te(new ge,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(cc),x=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let _=this._cubeSize;or(s,b*_,f>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===qi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;or(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,za)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hc[(s-1)%hc.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new te(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ui-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);let f=[],b=0;for(let R=0;R<ui;++R){let N=R/x,y=Math.exp(-N*N/2);f.push(y),R===0?b+=y:R<m&&(b+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let A=this._sizeLods[s],C=3*A*(s>_-Hi?s-_+Hi:0),T=4*(this._cubeSize-A);or(e,C,T,3*A,2*A),l.setRenderTarget(e),l.render(u,za)}};function ym(n){let t=[],e=[],i=[],s=n,r=n-Hi+1+lc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Hi?l=lc[a-n+Hi-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,b=new Float32Array(x*g*p),_=new Float32Array(m*g*p),A=new Float32Array(f*g*p);for(let T=0;T<p;T++){let R=T%3*2/3-1,N=T>2?0:-1,y=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];b.set(y,x*g*T),_.set(d,m*g*T);let S=[T,T,T,T,T,T];A.set(S,f*g*T)}let C=new qe;C.setAttribute("position",new Qe(b,x)),C.setAttribute("uv",new Qe(_,m)),C.setAttribute("faceIndex",new Qe(A,f)),t.push(C),s>Hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function uc(n,t,e){let i=new In(n,t,e);return i.texture.mapping=Vr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Mm(n,t,e){let i=new Float32Array(ui),s=new D(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function dc(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function fc(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bm(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Za||l===Ja,h=l===qi||l===Yi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Pr(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Pr(n));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function wm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Sm(n,t,e,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let _=0,A=b.length;_<A;_+=3){let C=b[_+0],T=b[_+1],R=b[_+2];d.push(C,T,T,R,R,C)}}else if(g!==void 0){let b=g.array;x=g.version;for(let _=0,A=b.length/3-1;_<A;_+=3){let C=_+0,T=_+1,R=_+2;d.push(C,T,T,R,R,C)}}else return;let m=new(Jc(d)?Tr:Er)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Em(n,t,e,i){let s=i.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,x),e.update(g,r,x)}function d(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let f=0;for(let b=0;b<x;b++)f+=g[b];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Tm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Am(n,t){return n[0]-t[0]}function Rm(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Cm(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,a=new fe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let U=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",U)};x!==void 0&&x.texture.dispose();let b=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],N=0;b===!0&&(N=1),_===!0&&(N=2),A===!0&&(N=3);let y=h.attributes.position.count*N,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let F=new Float32Array(y*S*4*g),Y=new br(F,y,S,g);Y.type=Xn,Y.needsUpdate=!0;let ht=N*4;for(let O=0;O<g;O++){let Z=C[O],tt=T[O],K=R[O],$=y*S*4*O;for(let rt=0;rt<Z.count;rt++){let ct=rt*ht;b===!0&&(a.fromBufferAttribute(Z,rt),F[$+ct+0]=a.x,F[$+ct+1]=a.y,F[$+ct+2]=a.z,F[$+ct+3]=0),_===!0&&(a.fromBufferAttribute(tt,rt),F[$+ct+4]=a.x,F[$+ct+5]=a.y,F[$+ct+6]=a.z,F[$+ct+7]=0),A===!0&&(a.fromBufferAttribute(K,rt),F[$+ct+8]=a.x,F[$+ct+9]=a.y,F[$+ct+10]=a.z,F[$+ct+11]=K.itemSize===4?a.w:1)}}x={count:g,texture:Y,size:new Qt(y,S)},r.set(h,x),h.addEventListener("dispose",U)}let m=0;for(let b=0;b<d.length;b++)m+=d[b];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<p;_++){let A=g[_];A[0]=_,A[1]=d[_]}g.sort(Rm);for(let _=0;_<8;_++)_<p&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Am);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let A=o[_],C=A[0],T=A[1];C!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+_)!==x[C]&&h.setAttribute("morphTarget"+_,x[C]),m&&h.getAttribute("morphNormal"+_)!==m[C]&&h.setAttribute("morphNormal"+_,m[C]),s[_]=T,f+=T):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let b=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",b),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Pm(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Lr=class extends on{constructor(t,e,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:fi,h!==fi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fi&&(i=Wn),i===void 0&&h===Zi&&(i=di),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qc=new on,th=new Lr(1,1);th.compareFunction=Yc;var eh=new br,nh=new to,ih=new Rr,pc=[],mc=[],gc=new Float32Array(16),xc=new Float32Array(9),_c=new Float32Array(4);function es(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=pc[s];if(r===void 0&&(r=new Float32Array(s),pc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Wr(n,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Lm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Im(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function Dm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function Um(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function Nm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;_c.set(i),n.uniformMatrix2fv(this.addr,!1,_c),Te(e,i)}}function km(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;xc.set(i),n.uniformMatrix3fv(this.addr,!1,xc),Te(e,i)}}function Om(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;gc.set(i),n.uniformMatrix4fv(this.addr,!1,gc),Te(e,i)}}function zm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function Bm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function Hm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function Vm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function Wm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function Xm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function qm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?th:Qc;e.setTexture2D(t||r,s)}function Ym(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||nh,s)}function Zm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ih,s)}function Jm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||eh,s)}function $m(n){switch(n){case 5126:return Lm;case 35664:return Im;case 35665:return Dm;case 35666:return Um;case 35674:return Nm;case 35675:return km;case 35676:return Om;case 5124:case 35670:return zm;case 35667:case 35671:return Fm;case 35668:case 35672:return Bm;case 35669:case 35673:return Hm;case 5125:return Vm;case 36294:return Gm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}function Km(n,t){n.uniform1fv(this.addr,t)}function jm(n,t){let e=es(t,this.size,2);n.uniform2fv(this.addr,e)}function Qm(n,t){let e=es(t,this.size,3);n.uniform3fv(this.addr,e)}function t0(n,t){let e=es(t,this.size,4);n.uniform4fv(this.addr,e)}function e0(n,t){let e=es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function n0(n,t){let e=es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function i0(n,t){let e=es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function s0(n,t){n.uniform1iv(this.addr,t)}function r0(n,t){n.uniform2iv(this.addr,t)}function a0(n,t){n.uniform3iv(this.addr,t)}function o0(n,t){n.uniform4iv(this.addr,t)}function l0(n,t){n.uniform1uiv(this.addr,t)}function c0(n,t){n.uniform2uiv(this.addr,t)}function h0(n,t){n.uniform3uiv(this.addr,t)}function u0(n,t){n.uniform4uiv(this.addr,t)}function d0(n,t,e){let i=this.cache,s=t.length,r=Wr(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Qc,r[a])}function f0(n,t,e){let i=this.cache,s=t.length,r=Wr(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nh,r[a])}function p0(n,t,e){let i=this.cache,s=t.length,r=Wr(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ih,r[a])}function m0(n,t,e){let i=this.cache,s=t.length,r=Wr(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||eh,r[a])}function g0(n){switch(n){case 5126:return Km;case 35664:return jm;case 35665:return Qm;case 35666:return t0;case 35674:return e0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return s0;case 35667:case 35671:return r0;case 35668:case 35672:return a0;case 35669:case 35673:return o0;case 5125:return l0;case 36294:return c0;case 36295:return h0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}var io=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$m(e.type)}},so=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g0(e.type)}},ro=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Va=/(\w+)(\])?(\[|\.)?/g;function vc(n,t){n.seq.push(t),n.map[t.id]=t}function x0(n,t,e){let i=n.name,s=i.length;for(Va.lastIndex=0;;){let r=Va.exec(i),a=Va.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vc(e,c===void 0?new io(o,n,t):new so(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new ro(o),vc(e,u)),e=u}}}var Xi=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);x0(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function yc(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var _0=37297,v0=0;function y0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function M0(n){let t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(n),i;switch(t===e?i="":t===gr&&e===mr?i="LinearDisplayP3ToLinearSRGB":t===mr&&e===gr&&(i="LinearSRGBToLinearDisplayP3"),n){case Ln:case Gr:return[i,"LinearTransferOETF"];case _e:case Do:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Mc(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+y0(n.getShaderSource(t),a)}else return s}function b0(n,t){let e=M0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function w0(n,t){let e;switch(t){case Bu:e="Linear";break;case Hu:e="Reinhard";break;case Vu:e="OptimizedCineon";break;case Gu:e="ACESFilmic";break;case Xu:e="AgX";break;case Wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function S0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vi).join(`
`)}function E0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vi).join(`
`)}function T0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function A0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Vi(n){return n!==""}function bc(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var R0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(n){return n.replace(R0,P0)}var C0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function P0(n,t){let e=Yt[t];if(e===void 0){let i=C0.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ao(e)}var L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(n){return n.replace(L0,I0)}function I0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ec(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function D0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hr?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function U0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function k0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lo:t="ENVMAP_BLENDING_MULTIPLY";break;case zu:t="ENVMAP_BLENDING_MIX";break;case Fu:t="ENVMAP_BLENDING_ADD";break}return t}function O0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function z0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=D0(e),c=U0(e),h=N0(e),u=k0(e),d=O0(e),p=e.isWebGL2?"":S0(e),g=E0(e),x=T0(r),m=s.createProgram(),f,b,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Vi).join(`
`),f.length>0&&(f+=`
`),b=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Vi).join(`
`),b.length>0&&(b+=`
`)):(f=[Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),b=[p,Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?w0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vi).join(`
`)),a=ao(a),a=bc(a,e),a=wc(a,e),o=ao(o),o=bc(o,e),o=wc(o,e),a=Sc(a),o=Sc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let A=_+f+a,C=_+b+o,T=yc(s,s.VERTEX_SHADER,A),R=yc(s,s.FRAGMENT_SHADER,C);s.attachShader(m,T),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(Y){if(n.debug.checkShaderErrors){let ht=s.getProgramInfoLog(m).trim(),U=s.getShaderInfoLog(T).trim(),O=s.getShaderInfoLog(R).trim(),Z=!0,tt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,T,R);else{let K=Mc(s,T,"vertex"),$=Mc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ht+`
`+K+`
`+$)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(U===""||O==="")&&(tt=!1);tt&&(Y.diagnostics={runnable:Z,programLog:ht,vertexShader:{log:U,prefix:f},fragmentShader:{log:O,prefix:b}})}s.deleteShader(T),s.deleteShader(R),y=new Xi(s,m),S=A0(s,m)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,_0)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}var F0=0,oo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new lo(t),e.set(t,i)),i}},lo=class{constructor(t){this.id=F0++,this.code=t,this.usedTimes=0}};function B0(n,t,e,i,s,r,a){let o=new Sr,l=new oo,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,S,F,Y,ht){let U=Y.fog,O=ht.geometry,Z=y.isMeshStandardMaterial?Y.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||Z),K=tt&&tt.mapping===Vr?tt.image.height:null,$=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let rt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ct=rt!==void 0?rt.length:0,pt=0;O.morphAttributes.position!==void 0&&(pt=1),O.morphAttributes.normal!==void 0&&(pt=2),O.morphAttributes.color!==void 0&&(pt=3);let X,et,gt,At;if($){let ze=vn[$];X=ze.vertexShader,et=ze.fragmentShader}else X=y.vertexShader,et=y.fragmentShader,l.update(y),gt=l.getVertexShaderID(y),At=l.getFragmentShaderID(y);let Et=n.getRenderTarget(),Ft=ht.isInstancedMesh===!0,Nt=ht.isBatchedMesh===!0,Dt=!!y.map,Zt=!!y.matcap,z=!!tt,Ie=!!y.aoMap,Rt=!!y.lightMap,Lt=!!y.bumpMap,bt=!!y.normalMap,oe=!!y.displacementMap,Ht=!!y.emissiveMap,E=!!y.metalnessMap,M=!!y.roughnessMap,B=y.anisotropy>0,ot=y.clearcoat>0,nt=y.iridescence>0,lt=y.sheen>0,St=y.transmission>0,mt=B&&!!y.anisotropyMap,_t=ot&&!!y.clearcoatMap,It=ot&&!!y.clearcoatNormalMap,Wt=ot&&!!y.clearcoatRoughnessMap,st=nt&&!!y.iridescenceMap,re=nt&&!!y.iridescenceThicknessMap,Jt=lt&&!!y.sheenColorMap,kt=lt&&!!y.sheenRoughnessMap,q=!!y.specularMap,j=!!y.specularColorMap,ut=!!y.specularIntensityMap,I=St&&!!y.transmissionMap,V=St&&!!y.thicknessMap,Q=!!y.gradientMap,J=!!y.alphaMap,L=y.alphaTest>0,at=!!y.alphaHash,it=!!y.extensions,Ct=!!O.attributes.uv1,Mt=!!O.attributes.uv2,ie=!!O.attributes.uv3,ce=Yn;return y.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(ce=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:et,defines:y.defines,customVertexShaderID:gt,customFragmentShaderID:At,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Nt,instancing:Ft,instancingColor:Ft&&ht.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Et===null?n.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Ln,map:Dt,matcap:Zt,envMap:z,envMapMode:z&&tt.mapping,envMapCubeUVHeight:K,aoMap:Ie,lightMap:Rt,bumpMap:Lt,normalMap:bt,displacementMap:d&&oe,emissiveMap:Ht,normalMapObjectSpace:bt&&y.normalMapType===id,normalMapTangentSpace:bt&&y.normalMapType===qc,metalnessMap:E,roughnessMap:M,anisotropy:B,anisotropyMap:mt,clearcoat:ot,clearcoatMap:_t,clearcoatNormalMap:It,clearcoatRoughnessMap:Wt,iridescence:nt,iridescenceMap:st,iridescenceThicknessMap:re,sheen:lt,sheenColorMap:Jt,sheenRoughnessMap:kt,specularMap:q,specularColorMap:j,specularIntensityMap:ut,transmission:St,transmissionMap:I,thicknessMap:V,gradientMap:Q,opaque:y.transparent===!1&&y.blending===Gi,alphaMap:J,alphaTest:L,alphaHash:at,combine:y.combine,mapUv:Dt&&x(y.map.channel),aoMapUv:Ie&&x(y.aoMap.channel),lightMapUv:Rt&&x(y.lightMap.channel),bumpMapUv:Lt&&x(y.bumpMap.channel),normalMapUv:bt&&x(y.normalMap.channel),displacementMapUv:oe&&x(y.displacementMap.channel),emissiveMapUv:Ht&&x(y.emissiveMap.channel),metalnessMapUv:E&&x(y.metalnessMap.channel),roughnessMapUv:M&&x(y.roughnessMap.channel),anisotropyMapUv:mt&&x(y.anisotropyMap.channel),clearcoatMapUv:_t&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:It&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(y.sheenRoughnessMap.channel),specularMapUv:q&&x(y.specularMap.channel),specularColorMapUv:j&&x(y.specularColorMap.channel),specularIntensityMapUv:ut&&x(y.specularIntensityMap.channel),transmissionMapUv:I&&x(y.transmissionMap.channel),thicknessMapUv:V&&x(y.thicknessMap.channel),alphaMapUv:J&&x(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(bt||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Mt,vertexUv3s:ie,pointsUvs:ht.isPoints===!0&&!!O.attributes.uv&&(Dt||J),fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ht.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Dt&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===ue,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===Xe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:it&&y.extensions.derivatives===!0,extensionFragDepth:it&&y.extensions.fragDepth===!0,extensionDrawBuffers:it&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:it&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:it&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let F in y.defines)S.push(F),S.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(b(S,y),_(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function _(y,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function A(y){let S=g[y.type],F;if(S){let Y=vn[S];F=Rd.clone(Y.uniforms)}else F=y.uniforms;return F}function C(y,S){let F;for(let Y=0,ht=c.length;Y<ht;Y++){let U=c[Y];if(U.cacheKey===S){F=U,++F.usedTimes;break}}return F===void 0&&(F=new z0(n,S,y,r),c.push(F)),F}function T(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:N}}function H0(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function V0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Tc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ac(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,p,g,x,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||V0),i.length>1&&i.sort(d||Tc),s.length>1&&s.sort(d||Tc)}function h(){for(let u=t,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function G0(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Ac,n.set(i,[a])):s>=r.length?(a=new Ac,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function W0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ot};break;case"SpotLight":e={position:new D,direction:new D,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function X0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var q0=0;function Y0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Z0(n,t){let e=new W0,i=X0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,a=new le,o=new le;function l(h,u){let d=0,p=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let x=0,m=0,f=0,b=0,_=0,A=0,C=0,T=0,R=0,N=0,y=0;h.sort(Y0);let S=u===!0?Math.PI:1;for(let Y=0,ht=h.length;Y<ht;Y++){let U=h[Y],O=U.color,Z=U.intensity,tt=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=O.r*Z*S,p+=O.g*Z*S,g+=O.b*Z*S;else if(U.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(U.sh.coefficients[$],Z);y++}else if(U.isDirectionalLight){let $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity*S),U.castShadow){let rt=U.shadow,ct=i.get(U);ct.shadowBias=rt.bias,ct.shadowNormalBias=rt.normalBias,ct.shadowRadius=rt.radius,ct.shadowMapSize=rt.mapSize,s.directionalShadow[x]=ct,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=U.shadow.matrix,A++}s.directional[x]=$,x++}else if(U.isSpotLight){let $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(O).multiplyScalar(Z*S),$.distance=tt,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,s.spot[f]=$;let rt=U.shadow;if(U.map&&(s.spotLightMap[R]=U.map,R++,rt.updateMatrices(U),U.castShadow&&N++),s.spotLightMatrix[f]=rt.matrix,U.castShadow){let ct=i.get(U);ct.shadowBias=rt.bias,ct.shadowNormalBias=rt.normalBias,ct.shadowRadius=rt.radius,ct.shadowMapSize=rt.mapSize,s.spotShadow[f]=ct,s.spotShadowMap[f]=K,T++}f++}else if(U.isRectAreaLight){let $=e.get(U);$.color.copy(O).multiplyScalar(Z),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),s.rectArea[b]=$,b++}else if(U.isPointLight){let $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity*S),$.distance=U.distance,$.decay=U.decay,U.castShadow){let rt=U.shadow,ct=i.get(U);ct.shadowBias=rt.bias,ct.shadowNormalBias=rt.normalBias,ct.shadowRadius=rt.radius,ct.shadowMapSize=rt.mapSize,ct.shadowCameraNear=rt.camera.near,ct.shadowCameraFar=rt.camera.far,s.pointShadow[m]=ct,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=U.shadow.matrix,C++}s.point[m]=$,m++}else if(U.isHemisphereLight){let $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(Z*S),$.groundColor.copy(U.groundColor).multiplyScalar(Z*S),s.hemi[_]=$,_++}}b>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==x||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==b||F.hemiLength!==_||F.numDirectionalShadows!==A||F.numPointShadows!==C||F.numSpotShadows!==T||F.numSpotMaps!==R||F.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=b,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+R-N,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=y,F.directionalLength=x,F.pointLength=m,F.spotLength=f,F.rectAreaLength=b,F.hemiLength=_,F.numDirectionalShadows=A,F.numPointShadows=C,F.numSpotShadows=T,F.numSpotMaps=R,F.numLightProbes=y,s.version=q0++)}function c(h,u){let d=0,p=0,g=0,x=0,m=0,f=u.matrixWorldInverse;for(let b=0,_=h.length;b<_;b++){let A=h[b];if(A.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(A.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(A.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(f),o.identity(),a.copy(A.matrixWorld),a.premultiply(f),o.extractRotation(a),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){let C=s.point[p];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(f),p++}else if(A.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Rc(n,t){let e=new Z0(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function J0(n,t){let e=new WeakMap;function i(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Rc(n,t),e.set(r,[l])):a>=o.length?(l=new Rc(n,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var co=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ho=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},$0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function j0(n,t,e){let i=new Ss,s=new Qt,r=new Qt,a=new fe,o=new co({depthPacking:nd}),l=new ho,c={},h=e.maxTextureSize,u={[Jn]:Xe,[Xe]:Jn,[fn]:fn},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:$0,fragmentShader:K0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new qe;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let f=this.type;this.render=function(T,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let y=n.getRenderTarget(),S=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(qn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let ht=f!==Rn&&this.type===Rn,U=f===Rn&&this.type!==Rn;for(let O=0,Z=T.length;O<Z;O++){let tt=T[O],K=tt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let $=K.getFrameExtents();if(s.multiply($),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,K.mapSize.y=r.y)),K.map===null||ht===!0||U===!0){let ct=this.type!==Rn?{minFilter:Me,magFilter:Me}:{};K.map!==null&&K.map.dispose(),K.map=new In(s.x,s.y,ct),K.map.texture.name=tt.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();let rt=K.getViewportCount();for(let ct=0;ct<rt;ct++){let pt=K.getViewport(ct);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),Y.viewport(a),K.updateMatrices(tt,ct),i=K.getFrustum(),A(R,N,K.camera,tt,this.type)}K.isPointLightShadow!==!0&&this.type===Rn&&b(K,N),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,S,F)};function b(T,R){let N=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new In(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,N,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,N,p,x,null)}function _(T,R,N,y){let S=null,F=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)S=F;else if(S=N.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let Y=S.uuid,ht=R.uuid,U=c[Y];U===void 0&&(U={},c[Y]=U);let O=U[ht];O===void 0&&(O=S.clone(),U[ht]=O,R.addEventListener("dispose",C)),S=O}if(S.visible=R.visible,S.wireframe=R.wireframe,y===Rn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Y=n.properties.get(S);Y.light=N}return S}function A(T,R,N,y,S){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Rn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);let ht=t.update(T),U=T.material;if(Array.isArray(U)){let O=ht.groups;for(let Z=0,tt=O.length;Z<tt;Z++){let K=O[Z],$=U[K.materialIndex];if($&&$.visible){let rt=_(T,$,y,S);T.onBeforeShadow(n,T,R,N,ht,rt,K),n.renderBufferDirect(N,null,ht,rt,T,K),T.onAfterShadow(n,T,R,N,ht,rt,K)}}}else if(U.visible){let O=_(T,U,y,S);T.onBeforeShadow(n,T,R,N,ht,O,null),n.renderBufferDirect(N,null,ht,O,T,null),T.onAfterShadow(n,T,R,N,ht,O,null)}}let Y=T.children;for(let ht=0,U=Y.length;ht<U;ht++)A(Y[ht],R,N,y,S)}function C(T){T.target.removeEventListener("dispose",C);for(let N in c){let y=c[N],S=T.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function Q0(n,t,e){let i=e.isWebGL2;function s(){let L=!1,at=new fe,it=null,Ct=new fe(0,0,0,0);return{setMask:function(Mt){it!==Mt&&!L&&(n.colorMask(Mt,Mt,Mt,Mt),it=Mt)},setLocked:function(Mt){L=Mt},setClear:function(Mt,ie,ce,Re,ze){ze===!0&&(Mt*=Re,ie*=Re,ce*=Re),at.set(Mt,ie,ce,Re),Ct.equals(at)===!1&&(n.clearColor(Mt,ie,ce,Re),Ct.copy(at))},reset:function(){L=!1,it=null,Ct.set(-1,0,0,0)}}}function r(){let L=!1,at=null,it=null,Ct=null;return{setTest:function(Mt){Mt?Nt(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(Mt){at!==Mt&&!L&&(n.depthMask(Mt),at=Mt)},setFunc:function(Mt){if(it!==Mt){switch(Mt){case Lu:n.depthFunc(n.NEVER);break;case Iu:n.depthFunc(n.ALWAYS);break;case Du:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case Uu:n.depthFunc(n.EQUAL);break;case Nu:n.depthFunc(n.GEQUAL);break;case ku:n.depthFunc(n.GREATER);break;case Ou:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=Mt}},setLocked:function(Mt){L=Mt},setClear:function(Mt){Ct!==Mt&&(n.clearDepth(Mt),Ct=Mt)},reset:function(){L=!1,at=null,it=null,Ct=null}}}function a(){let L=!1,at=null,it=null,Ct=null,Mt=null,ie=null,ce=null,Re=null,ze=null;return{setTest:function(he){L||(he?Nt(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(he){at!==he&&!L&&(n.stencilMask(he),at=he)},setFunc:function(he,Fe,_n){(it!==he||Ct!==Fe||Mt!==_n)&&(n.stencilFunc(he,Fe,_n),it=he,Ct=Fe,Mt=_n)},setOp:function(he,Fe,_n){(ie!==he||ce!==Fe||Re!==_n)&&(n.stencilOp(he,Fe,_n),ie=he,ce=Fe,Re=_n)},setLocked:function(he){L=he},setClear:function(he){ze!==he&&(n.clearStencil(he),ze=he)},reset:function(){L=!1,at=null,it=null,Ct=null,Mt=null,ie=null,ce=null,Re=null,ze=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],m=null,f=!1,b=null,_=null,A=null,C=null,T=null,R=null,N=null,y=new Ot(0,0,0),S=0,F=!1,Y=null,ht=null,U=null,O=null,Z=null,tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,$=0,rt=n.getParameter(n.VERSION);rt.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(rt)[1]),K=$>=1):rt.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),K=$>=2);let ct=null,pt={},X=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),gt=new fe().fromArray(X),At=new fe().fromArray(et);function Et(L,at,it,Ct){let Mt=new Uint8Array(4),ie=n.createTexture();n.bindTexture(L,ie),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ce=0;ce<it;ce++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(at,0,n.RGBA,1,1,Ct,0,n.RGBA,n.UNSIGNED_BYTE,Mt):n.texImage2D(at+ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Mt);return ie}let Ft={};Ft[n.TEXTURE_2D]=Et(n.TEXTURE_2D,n.TEXTURE_2D,1),Ft[n.TEXTURE_CUBE_MAP]=Et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ft[n.TEXTURE_2D_ARRAY]=Et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ft[n.TEXTURE_3D]=Et(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Nt(n.DEPTH_TEST),l.setFunc(ur),Ht(!1),E(ol),Nt(n.CULL_FACE),bt(qn);function Nt(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Dt(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Zt(L,at){return p[L]!==at?(n.bindFramebuffer(L,at),p[L]=at,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=at),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=at)),!0):!1}function z(L,at){let it=x,Ct=!1;if(L)if(it=g.get(at),it===void 0&&(it=[],g.set(at,it)),L.isWebGLMultipleRenderTargets){let Mt=L.texture;if(it.length!==Mt.length||it[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,ce=Mt.length;ie<ce;ie++)it[ie]=n.COLOR_ATTACHMENT0+ie;it.length=Mt.length,Ct=!0}}else it[0]!==n.COLOR_ATTACHMENT0&&(it[0]=n.COLOR_ATTACHMENT0,Ct=!0);else it[0]!==n.BACK&&(it[0]=n.BACK,Ct=!0);Ct&&(e.isWebGL2?n.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function Ie(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let Rt={[hi]:n.FUNC_ADD,[gu]:n.FUNC_SUBTRACT,[xu]:n.FUNC_REVERSE_SUBTRACT};if(i)Rt[ul]=n.MIN,Rt[dl]=n.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(Rt[ul]=L.MIN_EXT,Rt[dl]=L.MAX_EXT)}let Lt={[_u]:n.ZERO,[vu]:n.ONE,[yu]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[Tu]:n.SRC_ALPHA_SATURATE,[Su]:n.DST_COLOR,[bu]:n.DST_ALPHA,[Mu]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[Eu]:n.ONE_MINUS_DST_COLOR,[wu]:n.ONE_MINUS_DST_ALPHA,[Au]:n.CONSTANT_COLOR,[Ru]:n.ONE_MINUS_CONSTANT_COLOR,[Cu]:n.CONSTANT_ALPHA,[Pu]:n.ONE_MINUS_CONSTANT_ALPHA};function bt(L,at,it,Ct,Mt,ie,ce,Re,ze,he){if(L===qn){f===!0&&(Dt(n.BLEND),f=!1);return}if(f===!1&&(Nt(n.BLEND),f=!0),L!==mu){if(L!==b||he!==F){if((_!==hi||T!==hi)&&(n.blendEquation(n.FUNC_ADD),_=hi,T=hi),he)switch(L){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ll:n.blendFunc(n.ONE,n.ONE);break;case cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ll:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,C=null,R=null,N=null,y.set(0,0,0),S=0,b=L,F=he}return}Mt=Mt||at,ie=ie||it,ce=ce||Ct,(at!==_||Mt!==T)&&(n.blendEquationSeparate(Rt[at],Rt[Mt]),_=at,T=Mt),(it!==A||Ct!==C||ie!==R||ce!==N)&&(n.blendFuncSeparate(Lt[it],Lt[Ct],Lt[ie],Lt[ce]),A=it,C=Ct,R=ie,N=ce),(Re.equals(y)===!1||ze!==S)&&(n.blendColor(Re.r,Re.g,Re.b,ze),y.copy(Re),S=ze),b=L,F=!1}function oe(L,at){L.side===fn?Dt(n.CULL_FACE):Nt(n.CULL_FACE);let it=L.side===Xe;at&&(it=!it),Ht(it),L.blending===Gi&&L.transparent===!1?bt(qn):bt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);let Ct=L.stencilWrite;c.setTest(Ct),Ct&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Nt(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){Y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),Y=L)}function E(L){L!==du?(Nt(n.CULL_FACE),L!==ht&&(L===ol?n.cullFace(n.BACK):L===fu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),ht=L}function M(L){L!==U&&(K&&n.lineWidth(L),U=L)}function B(L,at,it){L?(Nt(n.POLYGON_OFFSET_FILL),(O!==at||Z!==it)&&(n.polygonOffset(at,it),O=at,Z=it)):Dt(n.POLYGON_OFFSET_FILL)}function ot(L){L?Nt(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function nt(L){L===void 0&&(L=n.TEXTURE0+tt-1),ct!==L&&(n.activeTexture(L),ct=L)}function lt(L,at,it){it===void 0&&(ct===null?it=n.TEXTURE0+tt-1:it=ct);let Ct=pt[it];Ct===void 0&&(Ct={type:void 0,texture:void 0},pt[it]=Ct),(Ct.type!==L||Ct.texture!==at)&&(ct!==it&&(n.activeTexture(it),ct=it),n.bindTexture(L,at||Ft[L]),Ct.type=L,Ct.texture=at)}function St(){let L=pt[ct];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function mt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Jt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(L){gt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),gt.copy(L))}function I(L){At.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),At.copy(L))}function V(L,at){let it=u.get(at);it===void 0&&(it=new WeakMap,u.set(at,it));let Ct=it.get(L);Ct===void 0&&(Ct=n.getUniformBlockIndex(at,L.name),it.set(L,Ct))}function Q(L,at){let Ct=u.get(at).get(L);h.get(at)!==Ct&&(n.uniformBlockBinding(at,Ct,L.__bindingPointIndex),h.set(at,Ct))}function J(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ct=null,pt={},p={},g=new WeakMap,x=[],m=null,f=!1,b=null,_=null,A=null,C=null,T=null,R=null,N=null,y=new Ot(0,0,0),S=0,F=!1,Y=null,ht=null,U=null,O=null,Z=null,gt.set(0,0,n.canvas.width,n.canvas.height),At.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Nt,disable:Dt,bindFramebuffer:Zt,drawBuffers:z,useProgram:Ie,setBlending:bt,setMaterial:oe,setFlipSided:Ht,setCullFace:E,setLineWidth:M,setPolygonOffset:B,setScissorTest:ot,activeTexture:nt,bindTexture:lt,unbindTexture:St,compressedTexImage2D:mt,compressedTexImage3D:_t,texImage2D:q,texImage3D:j,updateUBOMapping:V,uniformBlockBinding:Q,texStorage2D:Jt,texStorage3D:kt,texSubImage2D:It,texSubImage3D:Wt,compressedTexSubImage2D:st,compressedTexSubImage3D:re,scissor:ut,viewport:I,reset:J}}function tg(n,t,e,i,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return p?new OffscreenCanvas(E,M):vr("canvas")}function x(E,M,B,ot){let nt=1;if((E.width>ot||E.height>ot)&&(nt=ot/Math.max(E.width,E.height)),nt<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let lt=M?ja:Math.floor,St=lt(nt*E.width),mt=lt(nt*E.height);u===void 0&&(u=g(St,mt));let _t=B?g(St,mt):u;return _t.width=St,_t.height=mt,_t.getContext("2d").drawImage(E,0,0,St,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+St+"x"+mt+")."),_t}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Xl(E.width)&&Xl(E.height)}function f(E){return o?!1:E.wrapS!==pn||E.wrapT!==pn||E.minFilter!==Me&&E.minFilter!==rn}function b(E,M){return E.generateMipmaps&&M&&E.minFilter!==Me&&E.minFilter!==rn}function _(E){n.generateMipmap(E)}function A(E,M,B,ot,nt=!1){if(o===!1)return M;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let lt=M;if(M===n.RED&&(B===n.FLOAT&&(lt=n.R32F),B===n.HALF_FLOAT&&(lt=n.R16F),B===n.UNSIGNED_BYTE&&(lt=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(lt=n.R8UI),B===n.UNSIGNED_SHORT&&(lt=n.R16UI),B===n.UNSIGNED_INT&&(lt=n.R32UI),B===n.BYTE&&(lt=n.R8I),B===n.SHORT&&(lt=n.R16I),B===n.INT&&(lt=n.R32I)),M===n.RG&&(B===n.FLOAT&&(lt=n.RG32F),B===n.HALF_FLOAT&&(lt=n.RG16F),B===n.UNSIGNED_BYTE&&(lt=n.RG8)),M===n.RGBA){let St=nt?pr:ae.getTransfer(ot);B===n.FLOAT&&(lt=n.RGBA32F),B===n.HALF_FLOAT&&(lt=n.RGBA16F),B===n.UNSIGNED_BYTE&&(lt=St===ue?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function C(E,M,B){return b(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==Me&&E.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){return E===Me||E===fl||E===da?n.NEAREST:n.LINEAR}function R(E){let M=E.target;M.removeEventListener("dispose",R),y(M),M.isVideoTexture&&h.delete(M)}function N(E){let M=E.target;M.removeEventListener("dispose",N),F(M)}function y(E){let M=i.get(E);if(M.__webglInit===void 0)return;let B=E.source,ot=d.get(B);if(ot){let nt=ot[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(E),Object.keys(ot).length===0&&d.delete(B)}i.remove(E)}function S(E){let M=i.get(E);n.deleteTexture(M.__webglTexture);let B=E.source,ot=d.get(B);delete ot[M.__cacheKey],a.memory.textures--}function F(E){let M=E.texture,B=i.get(E),ot=i.get(M);if(ot.__webglTexture!==void 0&&(n.deleteTexture(ot.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(B.__webglFramebuffer[nt]))for(let lt=0;lt<B.__webglFramebuffer[nt].length;lt++)n.deleteFramebuffer(B.__webglFramebuffer[nt][lt]);else n.deleteFramebuffer(B.__webglFramebuffer[nt]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[nt])}else{if(Array.isArray(B.__webglFramebuffer))for(let nt=0;nt<B.__webglFramebuffer.length;nt++)n.deleteFramebuffer(B.__webglFramebuffer[nt]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let nt=0;nt<B.__webglColorRenderbuffer.length;nt++)B.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[nt]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let nt=0,lt=M.length;nt<lt;nt++){let St=i.get(M[nt]);St.__webglTexture&&(n.deleteTexture(St.__webglTexture),a.memory.textures--),i.remove(M[nt])}i.remove(M),i.remove(E)}let Y=0;function ht(){Y=0}function U(){let E=Y;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),Y+=1,E}function O(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function Z(E,M){let B=i.get(E);if(E.isVideoTexture&&oe(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){let ot=E.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(B,E,M);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function tt(E,M){let B=i.get(E);if(E.version>0&&B.__version!==E.version){gt(B,E,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function K(E,M){let B=i.get(E);if(E.version>0&&B.__version!==E.version){gt(B,E,M);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function $(E,M){let B=i.get(E);if(E.version>0&&B.__version!==E.version){At(B,E,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}let rt={[Ms]:n.REPEAT,[pn]:n.CLAMP_TO_EDGE,[$a]:n.MIRRORED_REPEAT},ct={[Me]:n.NEAREST,[fl]:n.NEAREST_MIPMAP_NEAREST,[da]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[qu]:n.LINEAR_MIPMAP_NEAREST,[bs]:n.LINEAR_MIPMAP_LINEAR},pt={[sd]:n.NEVER,[hd]:n.ALWAYS,[rd]:n.LESS,[Yc]:n.LEQUAL,[ad]:n.EQUAL,[cd]:n.GEQUAL,[od]:n.GREATER,[ld]:n.NOTEQUAL};function X(E,M,B){if(B?(n.texParameteri(E,n.TEXTURE_WRAP_S,rt[M.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,rt[M.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,rt[M.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ct[M.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ct[M.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==pn||M.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,T(M.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Me&&M.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ot=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Me||M.minFilter!==da&&M.minFilter!==bs||M.type===Xn&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===ws&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(E,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function et(E,M){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",R));let ot=M.source,nt=d.get(ot);nt===void 0&&(nt={},d.set(ot,nt));let lt=O(M);if(lt!==E.__cacheKey){nt[lt]===void 0&&(nt[lt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),nt[lt].usedTimes++;let St=nt[E.__cacheKey];St!==void 0&&(nt[E.__cacheKey].usedTimes--,St.usedTimes===0&&S(M)),E.__cacheKey=lt,E.__webglTexture=nt[lt].texture}return B}function gt(E,M,B){let ot=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ot=n.TEXTURE_3D);let nt=et(E,M),lt=M.source;e.bindTexture(ot,E.__webglTexture,n.TEXTURE0+B);let St=i.get(lt);if(lt.version!==St.__version||nt===!0){e.activeTexture(n.TEXTURE0+B);let mt=ae.getPrimaries(ae.workingColorSpace),_t=M.colorSpace===an?null:ae.getPrimaries(M.colorSpace),It=M.colorSpace===an||mt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Wt=f(M)&&m(M.image)===!1,st=x(M.image,Wt,!1,s.maxTextureSize);st=Ht(M,st);let re=m(st)||o,Jt=r.convert(M.format,M.colorSpace),kt=r.convert(M.type),q=A(M.internalFormat,Jt,kt,M.colorSpace,M.isVideoTexture);X(ot,M,re);let j,ut=M.mipmaps,I=o&&M.isVideoTexture!==!0&&q!==Wc,V=St.__version===void 0||nt===!0,Q=C(M,st,re);if(M.isDepthTexture)q=n.DEPTH_COMPONENT,o?M.type===Xn?q=n.DEPTH_COMPONENT32F:M.type===Wn?q=n.DEPTH_COMPONENT24:M.type===di?q=n.DEPTH24_STENCIL8:q=n.DEPTH_COMPONENT16:M.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===fi&&q===n.DEPTH_COMPONENT&&M.type!==Io&&M.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Wn,kt=r.convert(M.type)),M.format===Zi&&q===n.DEPTH_COMPONENT&&(q=n.DEPTH_STENCIL,M.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=di,kt=r.convert(M.type))),V&&(I?e.texStorage2D(n.TEXTURE_2D,1,q,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,q,st.width,st.height,0,Jt,kt,null));else if(M.isDataTexture)if(ut.length>0&&re){I&&V&&e.texStorage2D(n.TEXTURE_2D,Q,q,ut[0].width,ut[0].height);for(let J=0,L=ut.length;J<L;J++)j=ut[J],I?e.texSubImage2D(n.TEXTURE_2D,J,0,0,j.width,j.height,Jt,kt,j.data):e.texImage2D(n.TEXTURE_2D,J,q,j.width,j.height,0,Jt,kt,j.data);M.generateMipmaps=!1}else I?(V&&e.texStorage2D(n.TEXTURE_2D,Q,q,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,Jt,kt,st.data)):e.texImage2D(n.TEXTURE_2D,0,q,st.width,st.height,0,Jt,kt,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&V&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Q,q,ut[0].width,ut[0].height,st.depth);for(let J=0,L=ut.length;J<L;J++)j=ut[J],M.format!==mn?Jt!==null?I?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,j.width,j.height,st.depth,Jt,j.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,q,j.width,j.height,st.depth,0,j.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,j.width,j.height,st.depth,Jt,kt,j.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,q,j.width,j.height,st.depth,0,Jt,kt,j.data)}else{I&&V&&e.texStorage2D(n.TEXTURE_2D,Q,q,ut[0].width,ut[0].height);for(let J=0,L=ut.length;J<L;J++)j=ut[J],M.format!==mn?Jt!==null?I?e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,j.width,j.height,Jt,j.data):e.compressedTexImage2D(n.TEXTURE_2D,J,q,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?e.texSubImage2D(n.TEXTURE_2D,J,0,0,j.width,j.height,Jt,kt,j.data):e.texImage2D(n.TEXTURE_2D,J,q,j.width,j.height,0,Jt,kt,j.data)}else if(M.isDataArrayTexture)I?(V&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Q,q,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Jt,kt,st.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,q,st.width,st.height,st.depth,0,Jt,kt,st.data);else if(M.isData3DTexture)I?(V&&e.texStorage3D(n.TEXTURE_3D,Q,q,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Jt,kt,st.data)):e.texImage3D(n.TEXTURE_3D,0,q,st.width,st.height,st.depth,0,Jt,kt,st.data);else if(M.isFramebufferTexture){if(V)if(I)e.texStorage2D(n.TEXTURE_2D,Q,q,st.width,st.height);else{let J=st.width,L=st.height;for(let at=0;at<Q;at++)e.texImage2D(n.TEXTURE_2D,at,q,J,L,0,Jt,kt,null),J>>=1,L>>=1}}else if(ut.length>0&&re){I&&V&&e.texStorage2D(n.TEXTURE_2D,Q,q,ut[0].width,ut[0].height);for(let J=0,L=ut.length;J<L;J++)j=ut[J],I?e.texSubImage2D(n.TEXTURE_2D,J,0,0,Jt,kt,j):e.texImage2D(n.TEXTURE_2D,J,q,Jt,kt,j);M.generateMipmaps=!1}else I?(V&&e.texStorage2D(n.TEXTURE_2D,Q,q,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Jt,kt,st)):e.texImage2D(n.TEXTURE_2D,0,q,Jt,kt,st);b(M,re)&&_(ot),St.__version=lt.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function At(E,M,B){if(M.image.length!==6)return;let ot=et(E,M),nt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);let lt=i.get(nt);if(nt.version!==lt.__version||ot===!0){e.activeTexture(n.TEXTURE0+B);let St=ae.getPrimaries(ae.workingColorSpace),mt=M.colorSpace===an?null:ae.getPrimaries(M.colorSpace),_t=M.colorSpace===an||St===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let It=M.isCompressedTexture||M.image[0].isCompressedTexture,Wt=M.image[0]&&M.image[0].isDataTexture,st=[];for(let J=0;J<6;J++)!It&&!Wt?st[J]=x(M.image[J],!1,!0,s.maxCubemapSize):st[J]=Wt?M.image[J].image:M.image[J],st[J]=Ht(M,st[J]);let re=st[0],Jt=m(re)||o,kt=r.convert(M.format,M.colorSpace),q=r.convert(M.type),j=A(M.internalFormat,kt,q,M.colorSpace),ut=o&&M.isVideoTexture!==!0,I=lt.__version===void 0||ot===!0,V=C(M,re,Jt);X(n.TEXTURE_CUBE_MAP,M,Jt);let Q;if(It){ut&&I&&e.texStorage2D(n.TEXTURE_CUBE_MAP,V,j,re.width,re.height);for(let J=0;J<6;J++){Q=st[J].mipmaps;for(let L=0;L<Q.length;L++){let at=Q[L];M.format!==mn?kt!==null?ut?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,L,0,0,at.width,at.height,kt,at.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,L,j,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,L,0,0,at.width,at.height,kt,q,at.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,L,j,at.width,at.height,0,kt,q,at.data)}}}else{Q=M.mipmaps,ut&&I&&(Q.length>0&&V++,e.texStorage2D(n.TEXTURE_CUBE_MAP,V,j,st[0].width,st[0].height));for(let J=0;J<6;J++)if(Wt){ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,st[J].width,st[J].height,kt,q,st[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,j,st[J].width,st[J].height,0,kt,q,st[J].data);for(let L=0;L<Q.length;L++){let it=Q[L].image[J].image;ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,L+1,0,0,it.width,it.height,kt,q,it.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,L+1,j,it.width,it.height,0,kt,q,it.data)}}else{ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,kt,q,st[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,j,kt,q,st[J]);for(let L=0;L<Q.length;L++){let at=Q[L];ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,L+1,0,0,kt,q,at.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,L+1,j,kt,q,at.image[J])}}}b(M,Jt)&&_(n.TEXTURE_CUBE_MAP),lt.__version=nt.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Et(E,M,B,ot,nt,lt){let St=r.convert(B.format,B.colorSpace),mt=r.convert(B.type),_t=A(B.internalFormat,St,mt,B.colorSpace);if(!i.get(M).__hasExternalTextures){let Wt=Math.max(1,M.width>>lt),st=Math.max(1,M.height>>lt);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,lt,_t,Wt,st,M.depth,0,St,mt,null):e.texImage2D(nt,lt,_t,Wt,st,0,St,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),bt(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,nt,i.get(B).__webglTexture,0,Lt(M)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,nt,i.get(B).__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(E,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let ot=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||bt(M)){let nt=M.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Xn?ot=n.DEPTH_COMPONENT32F:nt.type===Wn&&(ot=n.DEPTH_COMPONENT24));let lt=Lt(M);bt(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,ot,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,ot,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ot,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){let ot=Lt(M);B&&bt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,n.DEPTH24_STENCIL8,M.width,M.height):bt(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{let ot=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let nt=0;nt<ot.length;nt++){let lt=ot[nt],St=r.convert(lt.format,lt.colorSpace),mt=r.convert(lt.type),_t=A(lt.internalFormat,St,mt,lt.colorSpace),It=Lt(M);B&&bt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,_t,M.width,M.height):bt(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,_t,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,_t,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);let ot=i.get(M.depthTexture).__webglTexture,nt=Lt(M);if(M.depthTexture.format===fi)bt(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(M.depthTexture.format===Zi)bt(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Dt(E){let M=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Nt(M.__webglFramebuffer,E)}else if(B){M.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ot]),M.__webglDepthbuffer[ot]=n.createRenderbuffer(),Ft(M.__webglDepthbuffer[ot],E,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Ft(M.__webglDepthbuffer,E,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(E,M,B){let ot=i.get(E);M!==void 0&&Et(ot.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Dt(E)}function z(E){let M=E.texture,B=i.get(E),ot=i.get(M);E.addEventListener("dispose",N),E.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=M.version,a.memory.textures++);let nt=E.isWebGLCubeRenderTarget===!0,lt=E.isWebGLMultipleRenderTargets===!0,St=m(E)||o;if(nt){B.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[mt]=[];for(let _t=0;_t<M.mipmaps.length;_t++)B.__webglFramebuffer[mt][_t]=n.createFramebuffer()}else B.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)B.__webglFramebuffer[mt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(lt)if(s.drawBuffers){let mt=E.texture;for(let _t=0,It=mt.length;_t<It;_t++){let Wt=i.get(mt[_t]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&bt(E)===!1){let mt=lt?M:[M];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _t=0;_t<mt.length;_t++){let It=mt[_t];B.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[_t]);let Wt=r.convert(It.format,It.colorSpace),st=r.convert(It.type),re=A(It.internalFormat,Wt,st,It.colorSpace,E.isXRRenderTarget===!0),Jt=Lt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Jt,re,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,B.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),X(n.TEXTURE_CUBE_MAP,M,St);for(let mt=0;mt<6;mt++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Et(B.__webglFramebuffer[mt][_t],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,_t);else Et(B.__webglFramebuffer[mt],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);b(M,St)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){let mt=E.texture;for(let _t=0,It=mt.length;_t<It;_t++){let Wt=mt[_t],st=i.get(Wt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),X(n.TEXTURE_2D,Wt,St),Et(B.__webglFramebuffer,E,Wt,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),b(Wt,St)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?mt=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,ot.__webglTexture),X(mt,M,St),o&&M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Et(B.__webglFramebuffer[_t],E,M,n.COLOR_ATTACHMENT0,mt,_t);else Et(B.__webglFramebuffer,E,M,n.COLOR_ATTACHMENT0,mt,0);b(M,St)&&_(mt),e.unbindTexture()}E.depthBuffer&&Dt(E)}function Ie(E){let M=m(E)||o,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ot=0,nt=B.length;ot<nt;ot++){let lt=B[ot];if(b(lt,M)){let St=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,mt=i.get(lt).__webglTexture;e.bindTexture(St,mt),_(St),e.unbindTexture()}}}function Rt(E){if(o&&E.samples>0&&bt(E)===!1){let M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,ot=E.height,nt=n.COLOR_BUFFER_BIT,lt=[],St=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(E),_t=E.isWebGLMultipleRenderTargets===!0;if(_t)for(let It=0;It<M.length;It++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let It=0;It<M.length;It++){lt.push(n.COLOR_ATTACHMENT0+It),E.depthBuffer&&lt.push(St);let Wt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(Wt===!1&&(E.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),_t&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[It]),Wt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[St]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[St])),_t){let st=i.get(M[It]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,B,ot,0,0,B,ot,nt,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let It=0;It<M.length;It++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,mt.__webglColorRenderbuffer[It]);let Wt=i.get(M[It]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,Wt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function Lt(E){return Math.min(s.maxSamples,E.samples)}function bt(E){let M=i.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function oe(E){let M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function Ht(E,M){let B=E.colorSpace,ot=E.format,nt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ka||B!==Ln&&B!==an&&(ae.getTransfer(B)===ue?o===!1?t.has("EXT_sRGB")===!0&&ot===mn?(E.format=Ka,E.minFilter=rn,E.generateMipmaps=!1):M=yr.sRGBToLinear(M):(ot!==mn||nt!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=U,this.resetTextureUnits=ht,this.setTexture2D=Z,this.setTexture2DArray=tt,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=Zt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=bt}function eg(n,t,e){let i=e.isWebGL2;function s(r,a=an){let o,l=ae.getTransfer(a);if(r===Zn)return n.UNSIGNED_BYTE;if(r===Fc)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Bc)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Yu)return n.BYTE;if(r===Zu)return n.SHORT;if(r===Io)return n.UNSIGNED_SHORT;if(r===zc)return n.INT;if(r===Wn)return n.UNSIGNED_INT;if(r===Xn)return n.FLOAT;if(r===ws)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ju)return n.ALPHA;if(r===mn)return n.RGBA;if(r===$u)return n.LUMINANCE;if(r===Ku)return n.LUMINANCE_ALPHA;if(r===fi)return n.DEPTH_COMPONENT;if(r===Zi)return n.DEPTH_STENCIL;if(r===Ka)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ju)return n.RED;if(r===Hc)return n.RED_INTEGER;if(r===Qu)return n.RG;if(r===Vc)return n.RG_INTEGER;if(r===Gc)return n.RGBA_INTEGER;if(r===fa||r===pa||r===ma||r===ga)if(l===ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===fa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===fa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ma)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pl||r===ml||r===gl||r===xl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ml)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===_l||r===vl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===_l)return l===ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===vl)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yl||r===Ml||r===bl||r===wl||r===Sl||r===El||r===Tl||r===Al||r===Rl||r===Cl||r===Pl||r===Ll||r===Il||r===Dl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===yl)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ml)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bl)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wl)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sl)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===El)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Tl)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Al)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rl)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cl)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pl)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ll)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Il)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dl)return l===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xa||r===Ul||r===Nl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===xa)return l===ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ul)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===td||r===kl||r===Ol||r===zl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===xa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===kl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ol)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===di?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var uo=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},He=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},ng={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ng)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new He;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},fo=class extends $n{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=e.getContextAttributes(),m=null,f=null,b=[],_=[],A=new Qt,C=null,T=new De;T.layers.enable(1),T.viewport=new fe;let R=new De;R.layers.enable(2),R.viewport=new fe;let N=[T,R],y=new uo;y.layers.enable(1),y.layers.enable(2);let S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=b[X];return et===void 0&&(et=new ys,b[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=b[X];return et===void 0&&(et=new ys,b[X]=et),et.getGripSpace()},this.getHand=function(X){let et=b[X];return et===void 0&&(et=new ys,b[X]=et),et.getHandSpace()};function Y(X){let et=_.indexOf(X.inputSource);if(et===-1)return;let gt=b[et];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||a),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function ht(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",ht),s.removeEventListener("inputsourceschange",U);for(let X=0;X<b.length;X++){let et=_[X];et!==null&&(_[X]=null,b[X].disconnect(et))}S=null,F=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,pt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",ht),s.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let et={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new In(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let et=null,gt=null,At=null;x.depth&&(At=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=x.stencil?Zi:fi,gt=x.stencil?di:Wn);let Et={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new In(d.textureWidth,d.textureHeight,{format:mn,type:Zn,depthTexture:new Lr(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Ft=t.properties.get(f);Ft.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pt.setContext(s),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(X){for(let et=0;et<X.removed.length;et++){let gt=X.removed[et],At=_.indexOf(gt);At>=0&&(_[At]=null,b[At].disconnect(gt))}for(let et=0;et<X.added.length;et++){let gt=X.added[et],At=_.indexOf(gt);if(At===-1){for(let Ft=0;Ft<b.length;Ft++)if(Ft>=_.length){_.push(gt),At=Ft;break}else if(_[Ft]===null){_[Ft]=gt,At=Ft;break}if(At===-1)break}let Et=b[At];Et&&Et.connect(gt)}}let O=new D,Z=new D;function tt(X,et,gt){O.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(gt.matrixWorld);let At=O.distanceTo(Z),Et=et.projectionMatrix.elements,Ft=gt.projectionMatrix.elements,Nt=Et[14]/(Et[10]-1),Dt=Et[14]/(Et[10]+1),Zt=(Et[9]+1)/Et[5],z=(Et[9]-1)/Et[5],Ie=(Et[8]-1)/Et[0],Rt=(Ft[8]+1)/Ft[0],Lt=Nt*Ie,bt=Nt*Rt,oe=At/(-Ie+Rt),Ht=oe*-Ie;et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ht),X.translateZ(oe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let E=Nt+oe,M=Dt+oe,B=Lt-Ht,ot=bt+(At-Ht),nt=Zt*Dt/M*E,lt=z*Dt/M*E;X.projectionMatrix.makePerspective(B,ot,nt,lt,E,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function K(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;y.near=R.near=T.near=X.near,y.far=R.far=T.far=X.far,(S!==y.near||F!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,F=y.far);let et=X.parent,gt=y.cameras;K(y,et);for(let At=0;At<gt.length;At++)K(gt[At],et);gt.length===2?tt(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),$(X,y,et)};function $(X,et,gt){gt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=_r*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let rt=null;function ct(X,et){if(h=et.getViewerPose(c||a),g=et,h!==null){let gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let At=!1;gt.length!==y.cameras.length&&(y.cameras.length=0,At=!0);for(let Et=0;Et<gt.length;Et++){let Ft=gt[Et],Nt=null;if(p!==null)Nt=p.getViewport(Ft);else{let Zt=u.getViewSubImage(d,Ft);Nt=Zt.viewport,Et===0&&(t.setRenderTargetTextures(f,Zt.colorTexture,d.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(f))}let Dt=N[Et];Dt===void 0&&(Dt=new De,Dt.layers.enable(Et),Dt.viewport=new fe,N[Et]=Dt),Dt.matrix.fromArray(Ft.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Ft.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Et===0&&(y.matrix.copy(Dt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),At===!0&&y.cameras.push(Dt)}}for(let gt=0;gt<b.length;gt++){let At=_[gt],Et=b[gt];At!==null&&Et!==void 0&&Et.update(At,et,c||a)}rt&&rt(X,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let pt=new jc;pt.setAnimationLoop(ct),this.setAnimationLoop=function(X){rt=X},this.dispose=function(){}}};function ig(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Kc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,_,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Xe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Xe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xe&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sg(n,t,e,i){let s={},r={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,_){let A=_.program;i.uniformBlockBinding(b,A)}function c(b,_){let A=s[b.id];A===void 0&&(g(b),A=h(b),s[b.id]=A,b.addEventListener("dispose",m));let C=_.program;i.updateUBOMapping(b,C);let T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){let _=u();b.__bindingPointIndex=_;let A=n.createBuffer(),C=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,A),A}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],A=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,R=A.length;T<R;T++){let N=Array.isArray(A[T])?A[T]:[A[T]];for(let y=0,S=N.length;y<S;y++){let F=N[y];if(p(F,T,y,C)===!0){let Y=F.__offset,ht=Array.isArray(F.value)?F.value:[F.value],U=0;for(let O=0;O<ht.length;O++){let Z=ht[O],tt=x(Z);typeof Z=="number"||typeof Z=="boolean"?(F.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,Y+U,F.__data)):Z.isMatrix3?(F.__data[0]=Z.elements[0],F.__data[1]=Z.elements[1],F.__data[2]=Z.elements[2],F.__data[3]=0,F.__data[4]=Z.elements[3],F.__data[5]=Z.elements[4],F.__data[6]=Z.elements[5],F.__data[7]=0,F.__data[8]=Z.elements[6],F.__data[9]=Z.elements[7],F.__data[10]=Z.elements[8],F.__data[11]=0):(Z.toArray(F.__data,U),U+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,_,A,C){let T=b.value,R=_+"_"+A;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let N=C[R];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return C[R]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function g(b){let _=b.uniforms,A=0,C=16;for(let R=0,N=_.length;R<N;R++){let y=Array.isArray(_[R])?_[R]:[_[R]];for(let S=0,F=y.length;S<F;S++){let Y=y[S],ht=Array.isArray(Y.value)?Y.value:[Y.value];for(let U=0,O=ht.length;U<O;U++){let Z=ht[U],tt=x(Z),K=A%C;K!==0&&C-K<tt.boundary&&(A+=C-K),Y.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=tt.storage}}}let T=A%C;return T>0&&(A+=C-T),b.__size=A,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let A=a.indexOf(_.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Es=class{constructor(t={}){let{canvas:e=dd(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this._useLegacyLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;let _=this,A=!1,C=0,T=0,R=null,N=-1,y=null,S=new fe,F=new fe,Y=null,ht=new Ot(0),U=0,O=e.width,Z=e.height,tt=1,K=null,$=null,rt=new fe(0,0,O,Z),ct=new fe(0,0,O,Z),pt=!1,X=new Ss,et=!1,gt=!1,At=null,Et=new le,Ft=new Qt,Nt=new D,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Zt(){return R===null?tt:1}let z=i;function Ie(w,k){for(let G=0;G<w.length;G++){let W=w[G],H=e.getContext(W,k);if(H!==null)return H}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",at,!1),z===null){let k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),z=Ie(k,w),z===null)throw Ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Rt,Lt,bt,oe,Ht,E,M,B,ot,nt,lt,St,mt,_t,It,Wt,st,re,Jt,kt,q,j,ut,I;function V(){Rt=new wm(z),Lt=new xm(z,Rt,t),Rt.init(Lt),j=new eg(z,Rt,Lt),bt=new Q0(z,Rt,Lt),oe=new Tm(z),Ht=new H0,E=new tg(z,Rt,bt,Ht,Lt,j,oe),M=new vm(_),B=new bm(_),ot=new Dd(z,Lt),ut=new mm(z,Rt,ot,Lt),nt=new Sm(z,ot,oe,ut),lt=new Pm(z,nt,ot,oe),Jt=new Cm(z,Lt,E),Wt=new _m(Ht),St=new B0(_,M,B,Rt,Lt,ut,Wt),mt=new ig(_,Ht),_t=new G0,It=new J0(Rt,Lt),re=new pm(_,M,B,bt,lt,d,l),st=new j0(_,lt,Lt),I=new sg(z,oe,Lt,bt),kt=new gm(z,Rt,oe,Lt),q=new Em(z,Rt,oe,Lt),oe.programs=St.programs,_.capabilities=Lt,_.extensions=Rt,_.properties=Ht,_.renderLists=_t,_.shadowMap=st,_.state=bt,_.info=oe}V();let Q=new fo(_,z);this.xr=Q,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=Rt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Rt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(w){w!==void 0&&(tt=w,this.setSize(O,Z,!1))},this.getSize=function(w){return w.set(O,Z)},this.setSize=function(w,k,G=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,Z=k,e.width=Math.floor(w*tt),e.height=Math.floor(k*tt),G===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(O*tt,Z*tt).floor()},this.setDrawingBufferSize=function(w,k,G){O=w,Z=k,tt=G,e.width=Math.floor(w*G),e.height=Math.floor(k*G),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(rt)},this.setViewport=function(w,k,G,W){w.isVector4?rt.set(w.x,w.y,w.z,w.w):rt.set(w,k,G,W),bt.viewport(S.copy(rt).multiplyScalar(tt).floor())},this.getScissor=function(w){return w.copy(ct)},this.setScissor=function(w,k,G,W){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,k,G,W),bt.scissor(F.copy(ct).multiplyScalar(tt).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(w){bt.setScissorTest(pt=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(w=!0,k=!0,G=!0){let W=0;if(w){let H=!1;if(R!==null){let xt=R.texture.format;H=xt===Gc||xt===Vc||xt===Hc}if(H){let xt=R.texture.type,Pt=xt===Zn||xt===Wn||xt===Io||xt===di||xt===Fc||xt===Bc,Ut=re.getClearColor(),Bt=re.getClearAlpha(),$t=Ut.r,Gt=Ut.g,Xt=Ut.b;Pt?(p[0]=$t,p[1]=Gt,p[2]=Xt,p[3]=Bt,z.clearBufferuiv(z.COLOR,0,p)):(g[0]=$t,g[1]=Gt,g[2]=Xt,g[3]=Bt,z.clearBufferiv(z.COLOR,0,g))}else W|=z.COLOR_BUFFER_BIT}k&&(W|=z.DEPTH_BUFFER_BIT),G&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",at,!1),_t.dispose(),It.dispose(),Ht.dispose(),M.dispose(),B.dispose(),lt.dispose(),ut.dispose(),I.dispose(),St.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ze),Q.removeEventListener("sessionend",he),At&&(At.dispose(),At=null),Fe.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=oe.autoReset,k=st.enabled,G=st.autoUpdate,W=st.needsUpdate,H=st.type;V(),oe.autoReset=w,st.enabled=k,st.autoUpdate=G,st.needsUpdate=W,st.type=H}function at(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function it(w){let k=w.target;k.removeEventListener("dispose",it),Ct(k)}function Ct(w){Mt(w),Ht.remove(w)}function Mt(w){let k=Ht.get(w).programs;k!==void 0&&(k.forEach(function(G){St.releaseProgram(G)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,G,W,H,xt){k===null&&(k=Dt);let Pt=H.isMesh&&H.matrixWorld.determinant()<0,Ut=lu(w,k,G,W,H);bt.setMaterial(W,Pt);let Bt=G.index,$t=1;if(W.wireframe===!0){if(Bt=nt.getWireframeAttribute(G),Bt===void 0)return;$t=2}let Gt=G.drawRange,Xt=G.attributes.position,xe=Gt.start*$t,$e=(Gt.start+Gt.count)*$t;xt!==null&&(xe=Math.max(xe,xt.start*$t),$e=Math.min($e,(xt.start+xt.count)*$t)),Bt!==null?(xe=Math.max(xe,0),$e=Math.min($e,Bt.count)):Xt!=null&&(xe=Math.max(xe,0),$e=Math.min($e,Xt.count));let Ce=$e-xe;if(Ce<0||Ce===1/0)return;ut.setup(H,W,Ut,G,Bt);let bn,pe=kt;if(Bt!==null&&(bn=ot.get(Bt),pe=q,pe.setIndex(bn)),H.isMesh)W.wireframe===!0?(bt.setLineWidth(W.wireframeLinewidth*Zt()),pe.setMode(z.LINES)):pe.setMode(z.TRIANGLES);else if(H.isLine){let Kt=W.linewidth;Kt===void 0&&(Kt=1),bt.setLineWidth(Kt*Zt()),H.isLineSegments?pe.setMode(z.LINES):H.isLineLoop?pe.setMode(z.LINE_LOOP):pe.setMode(z.LINE_STRIP)}else H.isPoints?pe.setMode(z.POINTS):H.isSprite&&pe.setMode(z.TRIANGLES);if(H.isBatchedMesh)pe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)pe.renderInstances(xe,Ce,H.count);else if(G.isInstancedBufferGeometry){let Kt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,la=Math.min(G.instanceCount,Kt);pe.renderInstances(xe,Ce,la)}else pe.render(xe,Ce)};function ie(w,k,G){w.transparent===!0&&w.side===fn&&w.forceSinglePass===!1?(w.side=Xe,w.needsUpdate=!0,Fs(w,k,G),w.side=Jn,w.needsUpdate=!0,Fs(w,k,G),w.side=fn):Fs(w,k,G)}this.compile=function(w,k,G=null){G===null&&(G=w),m=It.get(G),m.init(),b.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),w!==G&&w.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);let W=new Set;return w.traverse(function(H){let xt=H.material;if(xt)if(Array.isArray(xt))for(let Pt=0;Pt<xt.length;Pt++){let Ut=xt[Pt];ie(Ut,G,H),W.add(Ut)}else ie(xt,G,H),W.add(xt)}),b.pop(),m=null,W},this.compileAsync=function(w,k,G=null){let W=this.compile(w,k,G);return new Promise(H=>{function xt(){if(W.forEach(function(Pt){Ht.get(Pt).currentProgram.isReady()&&W.delete(Pt)}),W.size===0){H(w);return}setTimeout(xt,10)}Rt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ce=null;function Re(w){ce&&ce(w)}function ze(){Fe.stop()}function he(){Fe.start()}let Fe=new jc;Fe.setAnimationLoop(Re),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(w){ce=w,Q.setAnimationLoop(w),w===null?Fe.stop():Fe.start()},Q.addEventListener("sessionstart",ze),Q.addEventListener("sessionend",he),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,k,R),m=It.get(w,b.length),m.init(),b.push(m),Et.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),X.setFromProjectionMatrix(Et),gt=this.localClippingEnabled,et=Wt.init(this.clippingPlanes,gt),x=_t.get(w,f.length),x.init(),f.push(x),_n(w,k,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(K,$),this.info.render.frame++,et===!0&&Wt.beginShadows();let G=m.state.shadowsArray;if(st.render(G,w,k),et===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(x,w),m.setupLights(_._useLegacyLights),k.isArrayCamera){let W=k.cameras;for(let H=0,xt=W.length;H<xt;H++){let Pt=W[H];el(x,w,Pt,Pt.viewport)}}else el(x,w,k);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,k),ut.resetDefaultState(),N=-1,y=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function _n(w,k,G,W){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){W&&Nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Et);let Pt=lt.update(w),Ut=w.material;Ut.visible&&x.push(w,Pt,Ut,G,Nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){let Pt=lt.update(w),Ut=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Nt.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Nt.copy(Pt.boundingSphere.center)),Nt.applyMatrix4(w.matrixWorld).applyMatrix4(Et)),Array.isArray(Ut)){let Bt=Pt.groups;for(let $t=0,Gt=Bt.length;$t<Gt;$t++){let Xt=Bt[$t],xe=Ut[Xt.materialIndex];xe&&xe.visible&&x.push(w,Pt,xe,G,Nt.z,Xt)}}else Ut.visible&&x.push(w,Pt,Ut,G,Nt.z,null)}}let xt=w.children;for(let Pt=0,Ut=xt.length;Pt<Ut;Pt++)_n(xt[Pt],k,G,W)}function el(w,k,G,W){let H=w.opaque,xt=w.transmissive,Pt=w.transparent;m.setupLightsView(G),et===!0&&Wt.setGlobalState(_.clippingPlanes,G),xt.length>0&&ou(H,xt,k,G),W&&bt.viewport(S.copy(W)),H.length>0&&zs(H,k,G),xt.length>0&&zs(xt,k,G),Pt.length>0&&zs(Pt,k,G),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ou(w,k,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let xt=Lt.isWebGL2;At===null&&(At=new In(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")?ws:Zn,minFilter:bs,samples:xt?4:0})),_.getDrawingBufferSize(Ft),xt?At.setSize(Ft.x,Ft.y):At.setSize(ja(Ft.x),ja(Ft.y));let Pt=_.getRenderTarget();_.setRenderTarget(At),_.getClearColor(ht),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear();let Ut=_.toneMapping;_.toneMapping=Yn,zs(w,G,W),E.updateMultisampleRenderTarget(At),E.updateRenderTargetMipmap(At);let Bt=!1;for(let $t=0,Gt=k.length;$t<Gt;$t++){let Xt=k[$t],xe=Xt.object,$e=Xt.geometry,Ce=Xt.material,bn=Xt.group;if(Ce.side===fn&&xe.layers.test(W.layers)){let pe=Ce.side;Ce.side=Xe,Ce.needsUpdate=!0,nl(xe,G,W,$e,Ce,bn),Ce.side=pe,Ce.needsUpdate=!0,Bt=!0}}Bt===!0&&(E.updateMultisampleRenderTarget(At),E.updateRenderTargetMipmap(At)),_.setRenderTarget(Pt),_.setClearColor(ht,U),_.toneMapping=Ut}function zs(w,k,G){let W=k.isScene===!0?k.overrideMaterial:null;for(let H=0,xt=w.length;H<xt;H++){let Pt=w[H],Ut=Pt.object,Bt=Pt.geometry,$t=W===null?Pt.material:W,Gt=Pt.group;Ut.layers.test(G.layers)&&nl(Ut,k,G,Bt,$t,Gt)}}function nl(w,k,G,W,H,xt){w.onBeforeRender(_,k,G,W,H,xt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(_,k,G,W,w,xt),H.transparent===!0&&H.side===fn&&H.forceSinglePass===!1?(H.side=Xe,H.needsUpdate=!0,_.renderBufferDirect(G,k,W,H,w,xt),H.side=Jn,H.needsUpdate=!0,_.renderBufferDirect(G,k,W,H,w,xt),H.side=fn):_.renderBufferDirect(G,k,W,H,w,xt),w.onAfterRender(_,k,G,W,H,xt)}function Fs(w,k,G){k.isScene!==!0&&(k=Dt);let W=Ht.get(w),H=m.state.lights,xt=m.state.shadowsArray,Pt=H.state.version,Ut=St.getParameters(w,H.state,xt,k,G),Bt=St.getProgramCacheKey(Ut),$t=W.programs;W.environment=w.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(w.isMeshStandardMaterial?B:M).get(w.envMap||W.environment),$t===void 0&&(w.addEventListener("dispose",it),$t=new Map,W.programs=$t);let Gt=$t.get(Bt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===Pt)return sl(w,Ut),Gt}else Ut.uniforms=St.getUniforms(w),w.onBuild(G,Ut,_),w.onBeforeCompile(Ut,_),Gt=St.acquireProgram(Ut,Bt),$t.set(Bt,Gt),W.uniforms=Ut.uniforms;let Xt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xt.clippingPlanes=Wt.uniform),sl(w,Ut),W.needsLights=hu(w),W.lightsStateVersion=Pt,W.needsLights&&(Xt.ambientLightColor.value=H.state.ambient,Xt.lightProbe.value=H.state.probe,Xt.directionalLights.value=H.state.directional,Xt.directionalLightShadows.value=H.state.directionalShadow,Xt.spotLights.value=H.state.spot,Xt.spotLightShadows.value=H.state.spotShadow,Xt.rectAreaLights.value=H.state.rectArea,Xt.ltc_1.value=H.state.rectAreaLTC1,Xt.ltc_2.value=H.state.rectAreaLTC2,Xt.pointLights.value=H.state.point,Xt.pointLightShadows.value=H.state.pointShadow,Xt.hemisphereLights.value=H.state.hemi,Xt.directionalShadowMap.value=H.state.directionalShadowMap,Xt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Xt.spotShadowMap.value=H.state.spotShadowMap,Xt.spotLightMatrix.value=H.state.spotLightMatrix,Xt.spotLightMap.value=H.state.spotLightMap,Xt.pointShadowMap.value=H.state.pointShadowMap,Xt.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function il(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=Xi.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function sl(w,k){let G=Ht.get(w);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function lu(w,k,G,W,H){k.isScene!==!0&&(k=Dt),E.resetTextureUnits();let xt=k.fog,Pt=W.isMeshStandardMaterial?k.environment:null,Ut=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ln,Bt=(W.isMeshStandardMaterial?B:M).get(W.envMap||Pt),$t=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xt=!!G.morphAttributes.position,xe=!!G.morphAttributes.normal,$e=!!G.morphAttributes.color,Ce=Yn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ce=_.toneMapping);let bn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=bn!==void 0?bn.length:0,Kt=Ht.get(W),la=m.state.lights;if(et===!0&&(gt===!0||w!==y)){let nn=w===y&&W.id===N;Wt.setState(W,w,nn)}let me=!1;W.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==la.state.version||Kt.outputColorSpace!==Ut||H.isBatchedMesh&&Kt.batching===!1||!H.isBatchedMesh&&Kt.batching===!0||H.isInstancedMesh&&Kt.instancing===!1||!H.isInstancedMesh&&Kt.instancing===!0||H.isSkinnedMesh&&Kt.skinning===!1||!H.isSkinnedMesh&&Kt.skinning===!0||H.isInstancedMesh&&Kt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Kt.instancingColor===!1&&H.instanceColor!==null||Kt.envMap!==Bt||W.fog===!0&&Kt.fog!==xt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Wt.numPlanes||Kt.numIntersection!==Wt.numIntersection)||Kt.vertexAlphas!==$t||Kt.vertexTangents!==Gt||Kt.morphTargets!==Xt||Kt.morphNormals!==xe||Kt.morphColors!==$e||Kt.toneMapping!==Ce||Lt.isWebGL2===!0&&Kt.morphTargetsCount!==pe)&&(me=!0):(me=!0,Kt.__version=W.version);let ii=Kt.currentProgram;me===!0&&(ii=Fs(W,k,H));let rl=!1,hs=!1,ca=!1,Ne=ii.getUniforms(),si=Kt.uniforms;if(bt.useProgram(ii.program)&&(rl=!0,hs=!0,ca=!0),W.id!==N&&(N=W.id,hs=!0),rl||y!==w){Ne.setValue(z,"projectionMatrix",w.projectionMatrix),Ne.setValue(z,"viewMatrix",w.matrixWorldInverse);let nn=Ne.map.cameraPosition;nn!==void 0&&nn.setValue(z,Nt.setFromMatrixPosition(w.matrixWorld)),Lt.logarithmicDepthBuffer&&Ne.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ne.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,hs=!0,ca=!0)}if(H.isSkinnedMesh){Ne.setOptional(z,H,"bindMatrix"),Ne.setOptional(z,H,"bindMatrixInverse");let nn=H.skeleton;nn&&(Lt.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ne.setValue(z,"boneTexture",nn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ne.setOptional(z,H,"batchingTexture"),Ne.setValue(z,"batchingTexture",H._matricesTexture,E));let ha=G.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0&&Lt.isWebGL2===!0)&&Jt.update(H,G,ii),(hs||Kt.receiveShadow!==H.receiveShadow)&&(Kt.receiveShadow=H.receiveShadow,Ne.setValue(z,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(si.envMap.value=Bt,si.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),hs&&(Ne.setValue(z,"toneMappingExposure",_.toneMappingExposure),Kt.needsLights&&cu(si,ca),xt&&W.fog===!0&&mt.refreshFogUniforms(si,xt),mt.refreshMaterialUniforms(si,W,tt,Z,At),Xi.upload(z,il(Kt),si,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Xi.upload(z,il(Kt),si,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ne.setValue(z,"center",H.center),Ne.setValue(z,"modelViewMatrix",H.modelViewMatrix),Ne.setValue(z,"normalMatrix",H.normalMatrix),Ne.setValue(z,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let nn=W.uniformsGroups;for(let ua=0,uu=nn.length;ua<uu;ua++)if(Lt.isWebGL2){let al=nn[ua];I.update(al,ii),I.bind(al,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function cu(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function hu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,k,G){Ht.get(w.texture).__webglTexture=k,Ht.get(w.depthTexture).__webglTexture=G;let W=Ht.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){let G=Ht.get(w);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,G=0){R=w,C=k,T=G;let W=!0,H=null,xt=!1,Pt=!1;if(w){let Bt=Ht.get(w);Bt.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Bt.__webglFramebuffer===void 0?E.setupRenderTarget(w):Bt.__hasExternalTextures&&E.rebindTextures(w,Ht.get(w.texture).__webglTexture,Ht.get(w.depthTexture).__webglTexture);let $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Pt=!0);let Gt=Ht.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[k])?H=Gt[k][G]:H=Gt[k],xt=!0):Lt.isWebGL2&&w.samples>0&&E.useMultisampledRTT(w)===!1?H=Ht.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?H=Gt[G]:H=Gt,S.copy(w.viewport),F.copy(w.scissor),Y=w.scissorTest}else S.copy(rt).multiplyScalar(tt).floor(),F.copy(ct).multiplyScalar(tt).floor(),Y=pt;if(bt.bindFramebuffer(z.FRAMEBUFFER,H)&&Lt.drawBuffers&&W&&bt.drawBuffers(w,H),bt.viewport(S),bt.scissor(F),bt.setScissorTest(Y),xt){let Bt=Ht.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Bt.__webglTexture,G)}else if(Pt){let Bt=Ht.get(w.texture),$t=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,G||0,$t)}N=-1},this.readRenderTargetPixels=function(w,k,G,W,H,xt,Pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Ht.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut){bt.bindFramebuffer(z.FRAMEBUFFER,Ut);try{let Bt=w.texture,$t=Bt.format,Gt=Bt.type;if($t!==mn&&j.convert($t)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xt=Gt===ws&&(Rt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&Rt.has("EXT_color_buffer_float"));if(Gt!==Zn&&j.convert(Gt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===Xn&&(Lt.isWebGL2||Rt.has("OES_texture_float")||Rt.has("WEBGL_color_buffer_float")))&&!Xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-W&&G>=0&&G<=w.height-H&&z.readPixels(k,G,W,H,j.convert($t),j.convert(Gt),xt)}finally{let Bt=R!==null?Ht.get(R).__webglFramebuffer:null;bt.bindFramebuffer(z.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(w,k,G=0){let W=Math.pow(2,-G),H=Math.floor(k.image.width*W),xt=Math.floor(k.image.height*W);E.setTexture2D(k,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,w.x,w.y,H,xt),bt.unbindTexture()},this.copyTextureToTexture=function(w,k,G,W=0){let H=k.image.width,xt=k.image.height,Pt=j.convert(G.format),Ut=j.convert(G.type);E.setTexture2D(G,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment),k.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,w.x,w.y,H,xt,Pt,Ut,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Pt,k.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,w.x,w.y,Pt,Ut,k.image),W===0&&G.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,G,W,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xt=w.max.x-w.min.x+1,Pt=w.max.y-w.min.y+1,Ut=w.max.z-w.min.z+1,Bt=j.convert(W.format),$t=j.convert(W.type),Gt;if(W.isData3DTexture)E.setTexture3D(W,0),Gt=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),Gt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);let Xt=z.getParameter(z.UNPACK_ROW_LENGTH),xe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),$e=z.getParameter(z.UNPACK_SKIP_PIXELS),Ce=z.getParameter(z.UNPACK_SKIP_ROWS),bn=z.getParameter(z.UNPACK_SKIP_IMAGES),pe=G.isCompressedTexture?G.mipmaps[H]:G.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,pe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,w.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,w.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,w.min.z),G.isDataTexture||G.isData3DTexture?z.texSubImage3D(Gt,H,k.x,k.y,k.z,xt,Pt,Ut,Bt,$t,pe.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Gt,H,k.x,k.y,k.z,xt,Pt,Ut,Bt,pe.data)):z.texSubImage3D(Gt,H,k.x,k.y,k.z,xt,Pt,Ut,Bt,$t,pe),z.pixelStorei(z.UNPACK_ROW_LENGTH,Xt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$e),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ce),z.pixelStorei(z.UNPACK_SKIP_IMAGES,bn),H===0&&W.generateMipmaps&&z.generateMipmap(Gt),bt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),bt.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,bt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Do?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===Gr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_e?pi:Xc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===pi?_e:Ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},po=class extends Es{};po.prototype.isWebGL1Renderer=!0;var Ir=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ur=class extends Qe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fi=new le,Cc=new le,lr=[],Pc=new Dn,rg=new le,gs=new te,xs=new Kn,kn=class extends te{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,rg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fi),Pc.copy(t.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Pc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fi),xs.copy(t.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,s=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(i),t.ray.intersectsSphere(xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fi),Cc.multiplyMatrices(i,Fi),gs.matrixWorld=Cc,gs.raycast(t,lr);for(let a=0,o=lr.length;a<o;a++){let l=lr[a];l.instanceId=r,l.object=this,e.push(l)}lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ts=class extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Lc=new D,Ic=new D,Dc=new le,Ga=new wr,cr=new Kn,Nr=class extends Le{constructor(t=new qe,e=new Ts){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Lc.fromBufferAttribute(e,s-1),Ic.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Lc.distanceTo(Ic);t.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,t.ray.intersectsSphere(cr)===!1)return;Dc.copy(s).invert(),Ga.copy(t.ray).applyMatrix4(Dc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,h=new D,u=new D,d=new D,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let f=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let _=f,A=b-1;_<A;_+=p){let C=g.getX(_),T=g.getX(_+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,T),Ga.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let N=t.ray.origin.distanceTo(d);N<t.near||N>t.far||e.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),b=Math.min(m.count,a.start+a.count);for(let _=f,A=b-1;_<A;_+=p){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),Ga.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};var ji=class extends on{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var mo=class n extends qe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=i/2,f=0;b(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(p,2));function b(){let A=new D,C=new D,T=0,R=(e-t)/i;for(let N=0;N<=r;N++){let y=[],S=N/r,F=S*(e-t)+t;for(let Y=0;Y<=s;Y++){let ht=Y/s,U=ht*l+o,O=Math.sin(U),Z=Math.cos(U);C.x=F*O,C.y=-S*i+m,C.z=F*Z,u.push(C.x,C.y,C.z),A.set(O,R,Z).normalize(),d.push(A.x,A.y,A.z),p.push(ht,1-S),y.push(g++)}x.push(y)}for(let N=0;N<s;N++)for(let y=0;y<r;y++){let S=x[y][N],F=x[y+1][N],Y=x[y+1][N+1],ht=x[y][N+1];h.push(S,F,ht),h.push(F,Y,ht),T+=6}c.addGroup(f,T,0),f+=T}function _(A){let C=g,T=new Qt,R=new D,N=0,y=A===!0?t:e,S=A===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;let F=g;for(let Y=0;Y<=s;Y++){let U=Y/s*l+o,O=Math.cos(U),Z=Math.sin(U);R.x=y*Z,R.y=m*S,R.z=y*O,u.push(R.x,R.y,R.z),d.push(0,S,0),T.x=O*.5+.5,T.y=Z*.5*S+.5,p.push(T.x,T.y),g++}for(let Y=0;Y<s;Y++){let ht=C+Y,U=F+Y;A===!0?h.push(U,U+1,ht):h.push(U+1,U,ht),N+=3}c.addGroup(f,N,A===!0?1:2),f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},kr=class n extends mo{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},go=class n extends qe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(r.slice(),3)),this.setAttribute("uv",new be(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let _=new D,A=new D,C=new D;for(let T=0;T<e.length;T+=3)p(e[T+0],_),p(e[T+1],A),p(e[T+2],C),l(_,A,C,b)}function l(b,_,A,C){let T=C+1,R=[];for(let N=0;N<=T;N++){R[N]=[];let y=b.clone().lerp(A,N/T),S=_.clone().lerp(A,N/T),F=T-N;for(let Y=0;Y<=F;Y++)Y===0&&N===T?R[N][Y]=y:R[N][Y]=y.clone().lerp(S,Y/F)}for(let N=0;N<T;N++)for(let y=0;y<2*(T-N)-1;y++){let S=Math.floor(y/2);y%2===0?(d(R[N][S+1]),d(R[N+1][S]),d(R[N][S])):(d(R[N][S+1]),d(R[N+1][S+1]),d(R[N+1][S]))}}function c(b){let _=new D;for(let A=0;A<r.length;A+=3)_.x=r[A+0],_.y=r[A+1],_.z=r[A+2],_.normalize().multiplyScalar(b),r[A+0]=_.x,r[A+1]=_.y,r[A+2]=_.z}function h(){let b=new D;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let A=m(b)/2/Math.PI+.5,C=f(b)/Math.PI+.5;a.push(A,1-C)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){let _=a[b+0],A=a[b+2],C=a[b+4],T=Math.max(_,A,C),R=Math.min(_,A,C);T>.9&&R<.1&&(_<.2&&(a[b+0]+=1),A<.2&&(a[b+2]+=1),C<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,_){let A=b*3;_.x=t[A+0],_.y=t[A+1],_.z=t[A+2]}function g(){let b=new D,_=new D,A=new D,C=new D,T=new Qt,R=new Qt,N=new Qt;for(let y=0,S=0;y<r.length;y+=9,S+=6){b.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),A.set(r[y+6],r[y+7],r[y+8]),T.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),N.set(a[S+4],a[S+5]),C.copy(b).add(_).add(A).divideScalar(3);let F=m(C);x(T,S+0,b,F),x(R,S+2,_,F),x(N,S+4,A,F)}}function x(b,_,A,C){C<0&&b.x===1&&(a[_]=b.x-1),A.x===0&&A.z===0&&(a[_]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Qi=class n extends go{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var we=class extends jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function hr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ag(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ts=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xo=class extends ts{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fl,endingEnd:Fl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bl:r=t,o=2*e-i;break;case Hl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bl:a=t,l=2*i-e;break;case Hl:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,A=p*m-p*x;for(let C=0;C!==o;++C)r[C]=f*a[h+C]+b*a[c+C]+_*a[l+C]+A*a[u+C];return r}},_o=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},vo=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hr(e,this.TimeBufferType),this.values=hr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:hr(t.times,Array),values:hr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case fr:e=this.InterpolantFactoryMethodLinear;break;case _a:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ag(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===_a,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=fr;var mi=class extends gn{};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=dr;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends gn{};yo.prototype.ValueTypeName="color";var Mo=class extends gn{};Mo.prototype.ValueTypeName="number";var bo=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},As=class extends gn{InterpolantFactoryMethodLinear(t){return new bo(this.times,this.values,this.getValueSize(),t)}};As.prototype.ValueTypeName="quaternion";As.prototype.DefaultInterpolation=fr;As.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends gn{};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=dr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends gn{};wo.prototype.ValueTypeName="vector";var So=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},og=new So,Eo=class{constructor(t){this.manager=t!==void 0?t:og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var xi=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Or=class extends xi{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Wa=new le,Uc=new D,Nc=new D,Rs=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uc),Nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nc),e.updateMatrixWorld(),Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},To=class extends Rs{constructor(){super(new De(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=_r*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},zr=class extends xi{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new To}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},kc=new le,_s=new D,Xa=new D,Ao=class extends Rs{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),i.position.copy(_s),Xa.copy(i.position),Xa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Xa),i.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),kc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc)}},_i=class extends xi{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ao}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ro=class extends Rs{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fr=class extends xi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Ro}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Br=class extends xi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var No="\\[\\]\\.:\\/",lg=new RegExp("["+No+"]","g"),ko="[^"+No+"]",cg="[^"+No.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",ko),ug=/(WCOD+)?/.source.replace("WCOD",cg),dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ko),fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ko),pg=new RegExp("^"+hg+ug+dg+fg+"$"),mg=["material","materials","bones","map"],Co=class{constructor(t,e,i){let s=i||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},de=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lg,"")}static parseTrackName(t){let e=pg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);mg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Co;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);var sh=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function rh(n){let t=!1,e={w:window.innerWidth,h:window.innerHeight};function i(){let r=window.innerWidth,a=window.innerHeight;t=sh()&&a>r,e.w=t?a:r,e.h=t?r:a;let o=document.body,l=document.documentElement.style;o.classList.toggle("force-landscape",t),o.classList.toggle("compact",e.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",e.w+"px"),l.setProperty("--app-h",e.h+"px"),n&&n(e.w,e.h)}async function s(){if(!sh())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}i()}return window.addEventListener("resize",i),window.addEventListener("orientationchange",()=>setTimeout(i,200)),document.addEventListener("fullscreenchange",()=>setTimeout(i,100)),i(),{view:e,goLandscape:s,refresh:i,get rotated(){return t}}}var Vt=(n,t,e,i,s,r,a=0,o)=>Object.assign({x:n,z:t,w:e,d:i,h:s,c:r,y:a},o||{});function yn(){return{solids:[],deco:[],pickups:[]}}function Tt(n,t){return n.solids.push(...t.solids),n.deco.push(...t.deco),n.pickups.push(...t.pickups),n}function ns(n,t,e,i,s=5911840,r=3809296){let a=yn(),o=i?e:.9,l=i?.9:e;a.solids.push(Vt(n,t,o,l,1.05,s)),a.deco.push(Vt(n,t,o+.1,l+.1,.06,r,1.05));let c=Math.floor(e/.9);for(let h=0;h<c;h++){let u=-e/2+.45+h*.9,d=i?n+u:n,p=i?t:t+u;a.pickups.push({w:h%3===1?"mug":"bottle",x:d,z:p,y:1.11})}return a}function Oo(n,t,e,i){let s=yn(),r=i?e:.4,a=i?.4:e;s.solids.push(Vt(n,t,r,a,2.4,3810324));for(let c of[.9,1.5,2.1])s.deco.push(Vt(n,t,r+.04,a+.04,.04,2758668,c));let o=Math.floor(e/.22),l=[3107626,9062930,6953498,13214266,2767466,14540253];for(let c of[.94,1.54,2.14])for(let h=0;h<o;h++){let u=-e/2+.11+h*.22;s.deco.push(Vt(i?n+u:n,i?t:t+u,.09,.09,.28,l[(h*7+c*10)%l.length|0],c))}return s}function Qn(n,t,e=!1,i=7029795){let s=yn();return s.solids.push(Vt(n,t,e?1:1.3,e?1:.9,.78,i,0,{hp:70})),s.pickups.push({w:"bottle",x:n+.2,z:t,y:.84}),s.pickups.push({w:"chair",x:n-(e?.95:1.1),z:t,y:0}),s.pickups.push({w:"chair",x:n+(e?.95:1.1),z:t+.1,y:0}),s}function ah(n,t){let e=yn();return e.solids.push(Vt(n,t,2.5,1.4,.85,3809296)),e.deco.push(Vt(n,t,2.2,1.1,.04,2059061,.85)),e.pickups.push({w:"cue",x:n,z:t+1,y:0},{w:"cue",x:n+.4,z:t-1,y:0}),e}function is(n,t,e,i,s=.9){let r=yn();for(let a=0;a<e;a++){let o=-((e-1)*s)/2+a*s;r.pickups.push({w:"stool",x:i?n+o:n,z:i?t:t+o,y:0})}return r}function zo(n,t,e=1,i=9136954){let s=yn();return s.solids.push(Vt(n,t,e,e,e,i,0,{hp:50})),s}function Ue(n,t){let e=yn();return e.solids.push(Vt(n,t,.75,.75,1,12589080,0,{hp:12,explosive:!0,glow:4194304})),e}function ti(n,t,e=7029795){let i=yn();return i.solids.push(Vt(n,t,.8,.8,1.1,e,0,{barrel:!0,hp:50})),i}var gg=[15843965,14724201,13010498,9262372,16767916,6044193];function xg(){let n={id:"biker",name:"Biker Bar",blurb:"Leather, beer and broken bottles. The Hellhounds want you out.",w:24,d:18,h:4.2,floor:{c1:4861984,c2:4073498,kind:"planks"},wall:5909022,trim:2757128,ceil:1708556,light:16756832,ambient:5914672,fog:1708042,lamps:[[-6,-3],[0,0],[6,3],[-6,5],[6,-5]],player:[0,7,0],musician:[10.6,6.6,0],solids:[],deco:[],pickups:[],enemies:{count:18,maxActive:9,outfits:"biker",weapons:{fists:4,bottle:3,chain:2,knuckles:2,bat:1,knife:1,wrench:1}},boss:{name:"BIG MIKE",outfit:"bikerBoss",weapon:"sledge",scale:1.35,hp:3.2}};return Tt(n,ns(-4,-6,9,!0)),Tt(n,Oo(-4,-8.4,9,!0)),Tt(n,is(-4,-5,8,!0,1.05)),Tt(n,ah(5,-4)),Tt(n,ah(5,2)),Tt(n,Qn(-6,1)),Tt(n,Qn(-2,3,!0)),Tt(n,Qn(-7,5,!0)),n.solids.push(Vt(10.6,7.6,1.2,1.2,1.9,11542560,0,{glow:16732208})),Tt(n,Ue(11,3.5)),Tt(n,Ue(-11.2,-7.5)),n.pickups.push({w:"molotov",x:-11,z:3,y:0}),n.pickups.push({w:"bat",x:9.5,z:-8,y:0},{w:"crowbar",x:-10.5,z:7,y:0},{w:"pan",x:-1,z:-6,y:1.11},{w:"knife",x:-7,z:-6,y:1.11},{w:"axe",x:11,z:-1,y:0},{w:"spikedbat",x:-11,z:-2,y:0},{w:"shotgun",x:-8.1,z:-6,y:1.11},{w:"dynamite",x:2,z:8,y:0}),n}function _g(){let n={id:"disco",name:"Disco",blurb:"Saturday night fever. Everyone on the floor wants a piece of you.",w:22,d:22,h:5,floor:{c1:16722554,c2:2788095,c3:16765503,c4:3203184,kind:"disco"},wall:2756672,trim:6955168,ceil:656408,light:16736464,ambient:4202592,fog:656408,lamps:[[-5,-5],[5,-5],[-5,5],[5,5]],discoBall:!0,player:[0,8,0],musician:[0,-8.6,Math.PI],solids:[],deco:[],pickups:[],enemies:{count:20,maxActive:10,outfits:"disco",weapons:{fists:5,bottle:2,mug:1,micstand:1,knife:1,guitar:1}},boss:{name:"DISCO KING",outfit:"discoBoss",weapon:"katana",scale:1.25,hp:3}};n.solids.push(Vt(0,-9.6,8,2,.6,1710634)),n.solids.push(Vt(0,-9.6,2.4,1,1.4,3355460,.6,{glow:4259839})),n.pickups.push({w:"guitar",x:-3,z:-9.6,y:.6},{w:"micstand",x:2.5,z:-9.6,y:.6},{w:"micstand",x:-1.5,z:-9.2,y:.6}),Tt(n,ns(9.6,0,10,!1,3153994,8405184)),Tt(n,is(8.6,0,8,!1,1.15));for(let[t,e]of[[-8,-4],[-8,1],[-8,6]])Tt(n,Qn(t,e,!0,4202602));return Tt(n,Ue(-10.2,10)),n.pickups.push({w:"molotov",x:3.5,z:-9.6,y:.6}),n.pickups.push({w:"bat",x:-10,z:-9,y:0},{w:"knuckles",x:9.6,z:4,y:1.11},{w:"pan",x:9.6,z:-4,y:1.11},{w:"tommy",x:-10,z:9,y:0},{w:"tknives",x:10,z:9.5,y:0}),n}function vg(){let n={id:"prison",name:"Prison",blurb:"Riot in cell block C. Inmates and guards \u2014 nobody is on your side.",w:26,d:20,h:5,floor:{c1:9079428,c2:8289912,kind:"concrete"},wall:10133658,trim:5922906,ceil:4869706,light:15266047,ambient:5265504,fog:2106408,bright:.55,lamps:[[-8,0],[0,0],[8,0],[0,-6],[0,6]],player:[0,0,0],solids:[],deco:[],pickups:[],enemies:{count:22,maxActive:10,outfits:"prison",weapons:{fists:4,shiv:3,baton:2,weight:1,dumbbell:1,knife:1,pan:1}},boss:{name:"THE WARDEN",outfit:"warden",weapon:"shotgun",scale:1.3,hp:3}};for(let t of[-1,1])for(let e=0;e<5;e++){let i=-10+e*5,s=t*8.2;n.solids.push(Vt(i-2.4,s,.25,3.6,3,10133658)),n.deco.push(Vt(i,s-t*1.8,4.6,.06,.06,3355443,2.9));for(let r=-2;r<=2;r++)r!==0&&n.deco.push(Vt(i+r*.9,s-t*1.8,.06,.06,2.9,3355443));n.solids.push(Vt(i+1.2,s+t*.9,1.8,.8,.6,6974058)),n.pickups.push({w:e%2?"shiv":"dumbbell",x:i-1,z:s+t*.6,y:0})}for(let t of[-7,7])n.solids.push(Vt(t,0,1.6,.6,.5,3355443)),n.pickups.push({w:"weight",x:t-1.3,z:.6,y:0},{w:"weight",x:t+1.3,z:-.6,y:0},{w:"dumbbell",x:t,z:1.1,y:0});return n.solids.push(Vt(0,-3,4,1,.78,7829367)),n.solids.push(Vt(0,3,4,1,.78,7829367)),Tt(n,Ue(12.2,-5.2)),Tt(n,Ue(-12.2,5.2)),n.pickups.push({w:"molotov",x:-12,z:-1,y:0}),n.pickups.push({w:"pan",x:-1,z:-3,y:.84},{w:"mug",x:1,z:3,y:.84},{w:"knife",x:1.2,z:-3,y:.84},{w:"baton",x:12,z:0,y:0},{w:"shovel",x:-12,z:.5,y:0},{w:"revolver",x:.4,z:3,y:.84}),n}function yg(){let n={id:"saloon",name:"Western Saloon",blurb:"This town ain't big enough. Draw, partner.",w:24,d:20,h:4.6,floor:{c1:10119738,c2:9067568,kind:"planks"},wall:8014374,trim:4860434,ceil:3810322,light:16760944,ambient:6965802,fog:2759182,lamps:[[-6,-4],[6,-4],[0,2],[-6,6],[6,6]],player:[0,8,0],musician:[9.6,6.6,0],solids:[],deco:[],pickups:[],enemies:{count:18,maxActive:9,outfits:"cowboy",weapons:{fists:4,bottle:3,revolver:2,knife:1,pitchfork:1,shovel:1,rifle:1}},boss:{name:"THE SHERIFF",outfit:"sheriff",weapon:"rifle",scale:1.25,hp:3}};Tt(n,ns(-9.6,-1,12,!1,6961690,4858896)),Tt(n,Oo(-11.6,-1,12,!1)),Tt(n,is(-8.5,-1,9,!1,1.2));for(let[t,e]of[[-2,-5],[3,-5],[-2,2],[3,2],[8,-2]])Tt(n,Qn(t,e,!0,5913114));return n.solids.push(Vt(9.6,7.6,2.4,1,1.4,2759182)),n.deco.push(Vt(9.6,7,2.2,.3,.06,15790304,.9)),Tt(n,ti(-10.8,8.6)),Tt(n,ti(-9.8,8.8)),Tt(n,zo(11,-8.6)),Tt(n,Ue(11,8.8)),Tt(n,Ue(-11,-9)),n.pickups.push({w:"molotov",x:5,z:9,y:0}),n.pickups.push({w:"revolver",x:-9.6,z:-6,y:1.11},{w:"shotgun",x:11,z:-8.6,y:1},{w:"pitchfork",x:-11,z:6,y:0},{w:"shovel",x:11,z:3,y:0},{w:"dynamite",x:-10,z:7.6,y:0},{w:"tknives",x:0,z:-9,y:0},{w:"axe",x:8,z:9,y:0}),n}function Mg(){let n={id:"pirate",name:"Pirate Cove",blurb:"A tavern built into a shipwreck. Yo ho, here come the cutlasses.",w:24,d:22,h:5.5,floor:{c1:9071172,c2:8019e3,kind:"deck"},wall:4864038,trim:2760210,ceil:2760212,light:16752720,ambient:3820122,fog:924196,lamps:[[-6,-5],[6,-5],[0,0],[-6,6],[6,6]],player:[0,9,0],solids:[],deco:[],pickups:[],enemies:{count:20,maxActive:10,outfits:"pirate",weapons:{fists:3,cutlass:3,bottle:2,flintlock:2,knife:1,mug:1,spear:1}},boss:{name:"CAPTAIN REDBEARD",outfit:"captain",weapon:"anchor",scale:1.4,hp:3.5}};n.solids.push(Vt(0,0,.7,.7,5.5,5913118)),Tt(n,ns(8,-8.6,8,!0,5913118,3810320)),Tt(n,is(8,-7.5,6,!0,1.2));for(let[t,e]of[[-6,-4],[-6,3],[5,3],[-1,6]])Tt(n,Qn(t,e,!1,6965802));for(let t of[-6,0,6])n.solids.push(Vt(-11,t,1.6,.9,.9,2236962)),n.pickups.push({w:"cannonball",x:-10,z:t+1.2,y:0});return Tt(n,ti(10.8,9.6)),Tt(n,ti(9.8,9.8)),Tt(n,ti(10.8,8.6)),Tt(n,zo(-10.5,9.8,1.2)),Tt(n,Ue(-8.6,9.9)),Tt(n,Ue(11,-4)),Tt(n,Ue(3,-10)),n.pickups.push({w:"molotov",x:-3,z:9.5,y:0}),n.pickups.push({w:"cutlass",x:10,z:-8.6,y:1.11},{w:"flintlock",x:6,z:-8.6,y:1.11},{w:"spear",x:11,z:0,y:0},{w:"axe",x:-9,z:-9.5,y:0},{w:"knife",x:.4,z:-1,y:0}),n}function bg(){let n={id:"arena",name:"Arena",blurb:"Endless waves. Every weapon in the game on the rack. How long can you last?",w:30,d:30,h:7,floor:{c1:13150312,c2:12360796,kind:"sand"},wall:9075296,trim:5917236,ceil:null,light:16773328,ambient:8425632,fog:3818576,bright:.8,lamps:[[0,0],[-9,-9],[9,-9],[-9,9],[9,9]],player:[0,0,0],solids:[],deco:[],pickups:[],waves:!0,enemies:{count:1/0,maxActive:6,outfits:"mixed",weapons:{fists:3,bottle:2,bat:2,knife:2,machete:1,cutlass:1,axe:1,spear:1,revolver:1}},boss:{name:"THE CHAMPION",outfit:"champion",weapon:"axe",scale:1.4,hp:4}};for(let[e,i]of[[-8,-8],[8,-8],[-8,8],[8,8]])n.solids.push(Vt(e,i,1.4,1.4,3,11049080));let t=["katana","axe","sledge","machete","spear","spikedbat","cleaver","cutlass","pitchfork","crowbar","bat","shovel","knuckles","wrench","chain","anchor","battleaxe","warhammer","longsword","flail","naginata","nunchucks"];t.forEach((e,i)=>{let s=i/t.length*Math.PI*2;n.pickups.push({w:e,x:Math.cos(s)*12.5,z:Math.sin(s)*12.5,y:0})});for(let[e,i]of[[-13.5,0],[13.5,0],[0,-13.5],[0,13.5]])Tt(n,Ue(e,i));return n.pickups.push({w:"molotov",x:-2,z:-2,y:0},{w:"molotov",x:5,z:0,y:0}),n.pickups.push({w:"shotgun",x:2,z:2,y:0},{w:"revolver",x:-2,z:2,y:0},{w:"dynamite",x:0,z:-2.5,y:0},{w:"tknives",x:2,z:-2,y:0}),n}function oh(n,t,e,i,s=7029795,r=["horn","mug"]){let a=yn(),o=i?e:1.1,l=i?1.1:e;a.solids.push(Vt(n,t,o,l,.8,s));for(let h of[-1,1])a.solids.push(Vt(i?n:n+h*.95,i?t+h*.95:t,i?e:.4,i?.4:e,.42,4860434));let c=Math.floor(e/1.4);for(let h=0;h<c;h++){let u=-e/2+.7+h*1.4;a.pickups.push({w:r[h%r.length],x:i?n+u:n+(h%2?.25:-.25),z:i?t+(h%2?.25:-.25):t+u,y:.86})}return a}function wg(n,t,e=13156528){let i=yn();return i.solids.push(Vt(n,t,1.6,.8,.75,e)),i.deco.push(Vt(n,t-.25,1.6,.05,.5,9079450,.75)),i.pickups.push({w:"monitor",x:n-.3,z:t-.05,y:.81},{w:"keyboard",x:n+.35,z:t+.15,y:.81},{w:"officechair",x:n,z:t+.85,y:0}),i}function Sg(){let n={id:"viking",name:"Mead Hall",blurb:"Feast night in the longhouse. The jarl's men are drunk and armed.",w:28,d:16,h:6,floor:{c1:6965802,c2:6176804,kind:"planks"},wall:5913118,trim:2759180,ceil:2759182,light:16748608,ambient:4861984,fog:1707526,lamps:[[-9,0],[0,0],[9,0],[-4,-5],[4,5]],player:[-12,0,-Math.PI/2],solids:[],deco:[],pickups:[],enemies:{count:20,maxActive:10,outfits:"viking",weapons:{fists:3,horn:2,battleaxe:1,longsword:1,mace:1,throwaxe:1,spear:1,knife:1}},boss:{name:"JARL BLOODAXE",outfit:"jarl",weapon:"battleaxe",scale:1.4,hp:3.5}};Tt(n,oh(0,-4.2,14,!0)),Tt(n,oh(0,4.2,14,!0)),n.solids.push(Vt(0,0,3,1.6,.4,3815994,0,{glow:16732176})),n.solids.push(Vt(12.6,0,1.2,3,1.4,4860434)),n.deco.push(Vt(12.6,0,1.4,1.4,1.2,13214266,1.4));for(let t of[-7.4,7.4])for(let e of[-10,-3,3,10])n.solids.push(Vt(e,t,.5,.5,6,4860434));return n.fires=[[0,0,1.25]],Tt(n,Ue(-13,3.5)),n.pickups.push({w:"molotov",x:-13,z:-3,y:0}),n.pickups.push({w:"battleaxe",x:11,z:-2.5,y:0},{w:"warhammer",x:11,z:2.5,y:0},{w:"throwaxe",x:-12.6,z:-6.5,y:0},{w:"longsword",x:-12.6,z:6.5,y:0},{w:"spear",x:6,z:0,y:0},{w:"mace",x:-6,z:0,y:0}),n}function Eg(){let n={id:"medieval",name:"Medieval Tavern",blurb:"The Prancing Boar. Peasants, knights and one very angry innkeeper.",w:22,d:20,h:4.8,floor:{c1:6971480,c2:6181964,kind:"stone"},wall:9075298,trim:3811864,ceil:3811864,light:16752720,ambient:4864554,fog:1708554,lamps:[[-5,-4],[5,-4],[0,3],[-6,6],[6,6]],player:[0,8,0],solids:[],deco:[],pickups:[],enemies:{count:18,maxActive:9,outfits:"medieval",weapons:{fists:3,goblet:2,mug:2,mace:1,longsword:1,flail:1,pitchfork:1,knife:1}},boss:{name:"THE BLACK KNIGHT",outfit:"blackKnight",weapon:"warhammer",scale:1.35,hp:4}};Tt(n,ns(-8.6,-2,10,!1,5913118,3810320)),Tt(n,is(-7.5,-2,7,!1,1.2)),n.solids.push(Vt(0,-9.4,4,1,2.2,5918792,0,{glow:16736288}));for(let[t,e]of[[-2,-4],[3,-4],[-2,2],[3,2],[7,-1]])Tt(n,Qn(t,e,!1,5913118));return Tt(n,ti(9.8,8.6)),Tt(n,ti(8.8,8.8)),Tt(n,ti(9.8,7.6)),Tt(n,zo(-9.6,8.6)),n.fires=[[0,-8.5,.9]],Tt(n,Ue(-9.8,-9)),n.pickups.push({w:"molotov",x:6,z:8.8,y:0}),n.pickups.push({w:"longsword",x:9.5,z:-8.5,y:0},{w:"mace",x:-3,z:-9,y:0},{w:"flail",x:9.6,z:0,y:0},{w:"crossbow",x:-8.6,z:2,y:1.11},{w:"goblet",x:-8.6,z:-5,y:1.11},{w:"throwaxe",x:0,z:-8.6,y:0}),n}function Tg(){let n={id:"dojo",name:"Dojo",blurb:"Paper walls, polished mats and a room full of black belts.",w:22,d:22,h:5,floor:{c1:13154424,c2:12364908,kind:"tatami"},wall:15656656,trim:3810324,ceil:5913118,bright:.55,light:16773336,ambient:6971472,fog:2761752,lamps:[[-5,-5],[5,-5],[-5,5],[5,5]],player:[0,9,0],solids:[],deco:[],pickups:[],enemies:{count:20,maxActive:9,outfits:"ninja",weapons:{fists:5,nunchucks:2,bostaff:2,katana:1,kunai:1,naginata:1}},boss:{name:"THE SENSEI",outfit:"sensei",weapon:"katana",scale:1.2,hp:3.5}};for(let t=-4;t<=4;t++){for(let e of[-10.95,10.95])n.deco.push(Vt(t*2.4,e,.08,.06,4.6,3810324));for(let e of[-10.95,10.95])n.deco.push(Vt(e,t*2.4,.06,.08,4.6,3810324))}for(let t of[-10.4,10.4])n.solids.push(Vt(t,0,.5,6,1.6,3810324));n.solids.push(Vt(0,-10.4,5,.8,1.2,3810324)),n.deco.push(Vt(0,-10.6,1,.3,1.4,13637656,1.2));for(let t of[-2,0,2])n.pickups.push({w:t?"bostaff":"naginata",x:-9.9,z:t,y:0},{w:t?"nunchucks":"katana",x:9.9,z:t,y:0});return Tt(n,Ue(-9.6,-9.8)),Tt(n,Ue(9.6,9.8)),n.pickups.push({w:"kunai",x:-1.5,z:-9.6,y:0},{w:"kunai",x:1.5,z:-9.6,y:0},{w:"katana",x:0,z:-10.4,y:1.2}),n}function Ag(){let n={id:"speakeasy",name:"Speakeasy",blurb:"1928. Bootleg gin, a jazz band, and the Moretti family owes you nothing.",w:22,d:18,h:4.4,floor:{c1:1710618,c2:15261904,kind:"checker"},wall:3807776,trim:13214266,ceil:1706510,light:16760944,ambient:3809320,fog:919048,lamps:[[-6,-3],[0,0],[6,-3],[-5,5],[5,5]],player:[0,7.5,0],musician:[8.6,6.4,0],solids:[],deco:[],pickups:[],enemies:{count:18,maxActive:9,outfits:"gangster",weapons:{fists:4,bottle:3,revolver:2,knife:1,bat:1,tommy:1,knuckles:1}},boss:{name:"BIG TONY",outfit:"mobBoss",weapon:"tommy",scale:1.35,hp:3.2}};Tt(n,ns(-1,-7.4,11,!0,3807760,13214266)),Tt(n,Oo(-1,-8.6,11,!0)),Tt(n,is(-1,-6.4,9,!0,1.15)),n.solids.push(Vt(8.6,7.6,2.4,1,1.4,1118481));for(let[t,e]of[[-6,0],[-6,4.5],[0,2],[5,-1],[5,3]])Tt(n,Qn(t,e,!0,2759184));return Tt(n,Ue(10.2,-8)),n.pickups.push({w:"molotov",x:-10,z:2,y:0},{w:"molotov",x:1,z:-7.4,y:1.11}),n.pickups.push({w:"tommy",x:-6,z:-7.4,y:1.11},{w:"revolver",x:3,z:-7.4,y:1.11},{w:"golfclub",x:-10,z:7.5,y:0},{w:"bat",x:10,z:-1,y:0},{w:"dynamite",x:-10.2,z:-3,y:0}),n}function Rg(){let n={id:"office",name:"Office Party",blurb:"Friday, 4:59 pm. Performance reviews came back. Someone snapped.",w:26,d:20,h:3.6,floor:{c1:4870754,c2:4212824,kind:"carpet"},wall:14210248,trim:9079434,ceil:15263968,bright:.7,light:15791359,ambient:6318200,fog:2764342,lamps:[[-8,-5],[0,-5],[8,-5],[-8,5],[0,5],[8,5]],player:[0,8.5,0],solids:[],deco:[],pickups:[],enemies:{count:22,maxActive:10,outfits:"office",weapons:{fists:5,keyboard:2,golfclub:1,extinguisher:1,mug:2,knife:1,officechair:1}},boss:{name:"THE CEO",outfit:"ceo",weapon:"golfclub",scale:1.3,hp:3.5}};for(let t of[-8,-3,3,8])for(let e of[-5,0])Tt(n,wg(t,e));return n.solids.push(Vt(10.5,6.5,3,1.6,.76,3811866)),n.solids.push(Vt(-11.6,6,1.2,2.4,1,14737632)),n.solids.push(Vt(-12.4,-8.6,.9,.9,1.6,3828384,0,{glow:6988031})),Tt(n,Ue(12.2,2)),n.pickups.push({w:"molotov",x:-10,z:8.8,y:0}),n.pickups.push({w:"extinguisher",x:12.4,z:-8.8,y:0},{w:"extinguisher",x:-12.4,z:8.8,y:0},{w:"golfclub",x:10.5,z:6.5,y:.76},{w:"mug",x:-11.6,z:5.4,y:1},{w:"mug",x:-11.6,z:6.6,y:1},{w:"knife",x:-11.6,z:6,y:1}),n}var Xr=[xg,_g,vg,yg,Mg,Sg,Eg,Tg,Ag,Rg,bg];function lh(n){return(Xr.find(e=>e().id===n)||Xr[0])()}function ch(n,t=16){let e=[];for(let s=0;s<t*6&&e.length<t;s++){let r=s/(t*6)*Math.PI*2*3.7,a=Math.cos(r)*(n.w/2-1.2-s%3),o=Math.sin(r)*(n.d/2-1.2-s%2*1.5);Fo(n,a,o,.5)||Math.hypot(a-n.player[0],o-n.player[1])<5||e.push([a,o])}return e}function Fo(n,t,e,i){if(Math.abs(t)>n.w/2-i||Math.abs(e)>n.d/2-i)return!0;for(let s of n.solids)if(t+i>s.x-s.w/2&&t-i<s.x+s.w/2&&e+i>s.z-s.d/2&&e-i<s.z+s.d/2&&s.y<1.6)return!0;return!1}function Ve(n,t,e,i=99){let s=0;for(let r of n.solids){let a=r.y+r.h;a<=i+.05&&a>s&&Math.abs(t-r.x)<=r.w/2&&Math.abs(e-r.z)<=r.d/2&&(s=a)}return s}function qr(n,t){let e=s=>s[t()*s.length|0],i=e(gg);switch(n){case"biker":return{skin:i,shirt:e([2236962,4473924,6974058,11546672,16777215]),vest:1710618,pants:e([2767450,1714756,2236962]),hair:e([null,2236962,5913114,8947848]),beard:e([null,2236962,6965802,10066329]),hat:e([null,null,"bandana"]),hatC:e([11542560,2105440,2236962]),shoe:1710618};case"bikerBoss":return{skin:14724201,shirt:1118481,vest:657930,pants:1714756,hair:null,beard:7829367,hat:"bandana",hatC:11542560,shoe:1118481};case"disco":return{skin:i,shirt:e([16722554,2818e3,16765503,10502399,16742954,16777215]),pants:e([16777215,2236962,9054858,13672512]),hair:e([2236962,4860432,13672512,11546656]),afro:t()<.4,beard:e([null,null,2236962]),shoe:e([16777215,2236962])};case"discoBoss":return{skin:9262372,shirt:16766720,pants:16777215,hair:1118481,afro:!0,beard:1118481,shoe:16777215,shades:!0};case"prison":return t()<.22?{skin:i,shirt:2767466,pants:1714762,hair:e([2236962,5913114]),hat:"cap",hatC:1714762,shoe:1118481,guard:!0}:{skin:i,shirt:16742938,pants:16742938,hair:e([null,2236962,5913114,11184810]),beard:e([null,2236962,5913114]),shoe:14540253};case"warden":return{skin:16767916,shirt:1714762,pants:1120810,hair:8947848,beard:8947848,hat:"cap",hatC:1120810,shoe:1118481};case"cowboy":return{skin:i,shirt:e([12623984,9062954,6974090,13684928,9054762]),vest:e([null,4860434,2236962]),pants:e([4864554,2767450,6969920]),hair:e([4860432,2236962,12619856]),beard:e([null,4860432,2236962,8947848]),hat:"cowboy",hatC:e([5913114,2236962,12623984]),shoe:3809296};case"sheriff":return{skin:14724201,shirt:13680800,vest:3809296,pants:2763322,hair:8947848,beard:8947848,hat:"cowboy",hatC:15788240,shoe:3809296,badge:!0};case"pirate":return{skin:i,shirt:e([16777215,13684928]),stripes:e([11542560,2105440,2236962]),pants:e([3811866,2763322,6969920]),hair:e([2236962,5913114,11550752]),beard:e([null,2236962,11550752]),hat:e(["bandana","bandana","tricorn"]),hatC:e([11542560,2105440,2236962]),shoe:2759182,eyepatch:t()<.3};case"captain":return{skin:16767916,shirt:9050650,vest:13214266,pants:2236962,hair:11546640,beard:11546640,hat:"tricorn",hatC:1118481,shoe:1118481,eyepatch:!0};case"viking":return{skin:i,shirt:e([6969920,4864554,8006170,3820090]),vest:e([9071168,5917232,null]),pants:e([3811866,4868666]),hair:e([13668416,11550752,5913114,14729344]),beard:e([13668416,11550752,5913114,14729344]),hat:e(["horns","horns",null]),hatC:7829367,shoe:3811866};case"jarl":return{skin:16767916,shirt:5904922,vest:9071168,pants:2763306,hair:11550752,beard:11550752,hat:"horns",hatC:13214266,shoe:2759182};case"medieval":return t()<.25?{skin:i,shirt:9079440,pants:6974064,hair:null,hat:"knight",hatC:10132128,shoe:5921376}:{skin:i,shirt:e([6967344,4872752,8010282,9075290]),vest:e([null,4861976]),pants:e([4864554,5917242]),hair:e([5913114,2236962,11567168,null]),beard:e([null,5913114,8947848]),shoe:3811866,belt:2759178};case"blackKnight":return{skin:16767916,shirt:2236966,pants:1710622,hair:null,hat:"knight",hatC:2500138,shoe:1118481};case"ninja":return t()<.4?{skin:i,shirt:1710622,pants:1710622,hair:1118481,hat:"headband",hatC:1710622,shoe:1118481,belt:1118481}:{skin:i,shirt:15790314,pants:15790314,hair:e([1118481,3811866]),hat:e(["headband",null]),hatC:15790314,shoe:i,belt:e([1118481,9067050,13637656,2779856])};case"sensei":return{skin:14724201,shirt:9050650,pants:1118481,hair:14540253,beard:14540253,shoe:14724201,belt:1118481};case"gangster":return{skin:i,shirt:e([2763312,3813926,1710626,4864570]),vest:e([null,1118481]),pants:e([2763312,1710626]),hair:e([1118481,3811866]),beard:e([null,null,1118481]),hat:"fedora",hatC:e([2763306,4864554,3815994]),shoe:1118481,tie:e([10489872,1710698,13684944])};case"mobBoss":return{skin:14724201,shirt:15261904,vest:3811866,pants:2763306,hair:2236962,beard:null,hat:"fedora",hatC:15261904,shoe:2759182,tie:9048080,shades:!0};case"office":return{skin:i,shirt:e([16777215,13162736,14737632,15786192,13691088]),pants:e([2763322,3816e3,5918792,1710634]),hair:e([2236962,5913114,11567168,8947848,null]),beard:e([null,null,5913114]),shoe:1710618,tie:e([null,10489872,1718922,2779690])};case"ceo":return{skin:16767916,shirt:1710634,vest:1710634,pants:1710634,hair:12303291,shoe:1118481,tie:13672480};case"champion":return{skin:13010498,shirt:null,pants:9050650,hair:2236962,beard:2236962,hat:"helmet",hatC:13214266,shoe:7029795};default:return qr(e(["biker","disco","prison","cowboy","pirate","viking","medieval","ninja","gangster","office"]),t)}}function hh(n,t){let e=0;for(let s in n)e+=n[s];let i=t()*e;for(let s in n)if(i-=n[s],i<0)return s;return Object.keys(n)[0]}var wt=(n,t,e,i,s,r)=>Object.assign({len:n,w:t,hc:e,head:i,headC:s},r||{}),Bo={fists:{name:"Fists",kind:"melee",dmg:9,reach:1.5,rate:.38,knock:2.5,sever:0,sharp:!1,dur:1/0},knuckles:{name:"Brass Knuckles",kind:"melee",dmg:17,reach:1.5,rate:.36,knock:3.5,sever:0,sharp:!1,dur:1/0,model:wt(.02,.1,13214266,[.12,.05,.04],14201930)},bottle:{name:"Beer Bottle",kind:"melee",dmg:16,reach:1.7,rate:.5,knock:3,sever:0,sharp:!1,dur:1,breaksInto:"brokenbottle",shatter:!0,model:wt(.22,.05,3107626,[.08,.1,.08],3107626,{glass:!0})},brokenbottle:{name:"Broken Bottle",kind:"melee",dmg:20,reach:1.6,rate:.34,knock:1.5,sever:.12,sharp:!0,dur:8,model:wt(.14,.05,3107626,[.08,.06,.08],8372087,{glass:!0})},mug:{name:"Beer Mug",kind:"melee",dmg:18,reach:1.6,rate:.5,knock:4,sever:0,sharp:!1,dur:3,shatter:!0,model:wt(.04,.06,14270576,[.14,.18,.14],15784080,{glass:!0})},cue:{name:"Pool Cue",kind:"melee",dmg:20,reach:2.4,rate:.6,knock:4,sever:0,sharp:!1,dur:4,breaksInto:"brokencue",model:wt(1.3,.035,13146970,[.04,.06,.04],2829099)},brokencue:{name:"Broken Cue",kind:"melee",dmg:19,reach:1.8,rate:.42,knock:2,sever:.08,sharp:!0,dur:10,model:wt(.7,.035,13146970,[.03,.08,.03],14729354)},stool:{name:"Bar Stool",kind:"melee",dmg:30,reach:2,rate:.95,knock:8,sever:.05,sharp:!1,dur:3,breaksInto:"stoolleg",heavy:!0,model:wt(.6,.05,7029795,[.38,.08,.38],9116186)},stoolleg:{name:"Stool Leg",kind:"melee",dmg:16,reach:1.8,rate:.45,knock:3,sever:0,sharp:!1,dur:8,model:wt(.6,.05,7029795,[.06,.06,.06],7029795)},chair:{name:"Chair",kind:"melee",dmg:32,reach:2,rate:1,knock:9,sever:.05,sharp:!1,dur:3,breaksInto:"stoolleg",heavy:!0,model:wt(.5,.05,8016432,[.45,.45,.08],8016432)},bat:{name:"Baseball Bat",kind:"melee",dmg:28,reach:2,rate:.6,knock:7,sever:.08,sharp:!1,dur:30,model:wt(.55,.05,14268810,[.09,.4,.09],13213808)},spikedbat:{name:"Spiked Bat",kind:"melee",dmg:36,reach:2,rate:.65,knock:7,sever:.25,sharp:!1,dur:25,model:wt(.55,.05,9136970,[.1,.4,.1],10132122)},pan:{name:"Frying Pan",kind:"melee",dmg:26,reach:1.8,rate:.55,knock:8,sever:0,sharp:!1,dur:1/0,model:wt(.3,.04,2236962,[.32,.03,.32],3355443)},knife:{name:"Knife",kind:"melee",dmg:24,reach:1.5,rate:.28,knock:1,sever:.3,sharp:!0,dur:1/0,model:wt(.12,.035,3811866,[.03,.22,.015],14606046)},shiv:{name:"Shiv",kind:"melee",dmg:22,reach:1.4,rate:.25,knock:1,sever:.2,sharp:!0,dur:12,model:wt(.1,.035,7829367,[.025,.16,.015],13619151)},cleaver:{name:"Meat Cleaver",kind:"melee",dmg:34,reach:1.6,rate:.5,knock:3,sever:.6,sharp:!0,dur:1/0,model:wt(.14,.04,2759184,[.02,.16,.14],13684944)},machete:{name:"Machete",kind:"melee",dmg:38,reach:1.9,rate:.48,knock:3,sever:.6,sharp:!0,dur:1/0,model:wt(.14,.04,2759184,[.02,.55,.07],13158600)},axe:{name:"Fire Axe",kind:"melee",dmg:50,reach:2.1,rate:.85,knock:6,sever:.8,sharp:!0,heavy:!0,dur:1/0,model:wt(.8,.045,11540504,[.05,.18,.22],13619151)},sledge:{name:"Sledgehammer",kind:"melee",dmg:65,reach:2.1,rate:1.15,knock:14,sever:.35,sharp:!1,heavy:!0,crush:!0,dur:1/0,model:wt(.9,.045,9136970,[.16,.16,.3],5592405)},crowbar:{name:"Crowbar",kind:"melee",dmg:27,reach:1.9,rate:.55,knock:5,sever:.05,sharp:!1,dur:1/0,model:wt(.7,.03,11542560,[.03,.03,.12],11542560)},wrench:{name:"Pipe Wrench",kind:"melee",dmg:29,reach:1.8,rate:.6,knock:6,sever:0,sharp:!1,dur:1/0,model:wt(.45,.04,11542560,[.12,.1,.06],7829367)},chain:{name:"Bike Chain",kind:"melee",dmg:24,reach:2.3,rate:.5,knock:4,sever:.05,sharp:!1,dur:1/0,model:wt(.7,.03,8947848,[.05,.05,.05],10066329)},guitar:{name:"Guitar",kind:"melee",dmg:30,reach:2.1,rate:.85,knock:9,sever:0,sharp:!1,heavy:!0,dur:2,breaksInto:"stoolleg",model:wt(.55,.05,5913114,[.34,.42,.1],12599338)},micstand:{name:"Mic Stand",kind:"melee",dmg:22,reach:2.3,rate:.6,knock:5,sever:0,sharp:!1,dur:1/0,model:wt(1.1,.025,2236962,[.06,.1,.06],4473924)},katana:{name:"Katana",kind:"melee",dmg:46,reach:2.2,rate:.42,knock:3,sever:.85,sharp:!0,dur:1/0,model:wt(.22,.035,1710618,[.02,.75,.04],15263976)},cutlass:{name:"Cutlass",kind:"melee",dmg:40,reach:2,rate:.45,knock:3,sever:.65,sharp:!0,dur:1/0,model:wt(.14,.04,13214266,[.02,.6,.06],14211288)},spear:{name:"Spear",kind:"melee",dmg:35,reach:2.8,rate:.6,knock:5,sever:.3,sharp:!0,dur:1/0,model:wt(1.5,.035,9136970,[.05,.22,.02],12566463)},pitchfork:{name:"Pitchfork",kind:"melee",dmg:33,reach:2.6,rate:.65,knock:6,sever:.25,sharp:!0,dur:1/0,model:wt(1.3,.035,9136970,[.22,.22,.02],9079434)},shovel:{name:"Shovel",kind:"melee",dmg:31,reach:2.1,rate:.7,knock:8,sever:.3,sharp:!1,dur:1/0,model:wt(.9,.04,9136970,[.22,.26,.02],6974058)},weight:{name:"Weight Plate",kind:"melee",dmg:34,reach:1.6,rate:.8,knock:9,sever:0,sharp:!1,heavy:!0,dur:1/0,model:wt(.02,.04,2236962,[.32,.32,.05],2500134)},dumbbell:{name:"Dumbbell",kind:"melee",dmg:30,reach:1.6,rate:.7,knock:7,sever:0,sharp:!1,heavy:!0,dur:1/0,model:wt(.3,.04,5592405,[.14,.14,.14],2236962)},baton:{name:"Guard Baton",kind:"melee",dmg:22,reach:1.8,rate:.42,knock:5,sever:0,sharp:!1,dur:1/0,model:wt(.55,.04,1118481,[.05,.05,.05],1118481)},anchor:{name:"Anchor",kind:"melee",dmg:80,reach:2.2,rate:1.5,knock:18,sever:.5,sharp:!1,heavy:!0,crush:!0,dur:1/0,model:wt(.9,.06,3815994,[.6,.2,.08],3815994)},battleaxe:{name:"Battle Axe",kind:"melee",dmg:58,reach:2.2,rate:.95,knock:7,sever:.85,sharp:!0,heavy:!0,dur:1/0,model:wt(.9,.05,7029795,[.05,.3,.34],12566463)},warhammer:{name:"War Hammer",kind:"melee",dmg:62,reach:2.1,rate:1.05,knock:13,sever:.3,sharp:!1,heavy:!0,crush:!0,dur:1/0,model:wt(.85,.045,5913114,[.14,.14,.26],6974058)},longsword:{name:"Longsword",kind:"melee",dmg:44,reach:2.3,rate:.5,knock:3,sever:.7,sharp:!0,dur:1/0,model:wt(.24,.04,3809296,[.025,.85,.06],14211288)},mace:{name:"Mace",kind:"melee",dmg:38,reach:1.9,rate:.7,knock:8,sever:.1,sharp:!1,dur:1/0,model:wt(.55,.045,5913114,[.16,.16,.16],7829367)},flail:{name:"Flail",kind:"melee",dmg:42,reach:2.3,rate:.8,knock:9,sever:.15,sharp:!1,dur:1/0,model:wt(.45,.04,5913114,[.15,.15,.15],5592405)},horn:{name:"Mead Horn",kind:"melee",dmg:15,reach:1.6,rate:.45,knock:3,sever:0,sharp:!1,dur:4,model:wt(.05,.05,15260864,[.07,.24,.07],14207136)},goblet:{name:"Goblet",kind:"melee",dmg:16,reach:1.6,rate:.45,knock:3,sever:0,sharp:!1,dur:1/0,model:wt(.1,.03,13214266,[.1,.1,.1],14201930)},nunchucks:{name:"Nunchucks",kind:"melee",dmg:22,reach:1.9,rate:.26,knock:3,sever:0,sharp:!1,dur:1/0,model:wt(.3,.04,2759184,[.04,.3,.04],2759184)},bostaff:{name:"Bo Staff",kind:"melee",dmg:26,reach:2.7,rate:.45,knock:7,sever:0,sharp:!1,dur:1/0,model:wt(1.6,.04,9136970,[.05,.06,.05],7029795)},naginata:{name:"Naginata",kind:"melee",dmg:42,reach:2.9,rate:.6,knock:5,sever:.7,sharp:!0,dur:1/0,model:wt(1.4,.04,2759184,[.02,.4,.06],14211288)},golfclub:{name:"Golf Club",kind:"melee",dmg:30,reach:2.1,rate:.6,knock:8,sever:.05,sharp:!1,dur:1/0,model:wt(.9,.025,8947848,[.06,.05,.14],12566463)},keyboard:{name:"Keyboard",kind:"melee",dmg:18,reach:1.8,rate:.5,knock:4,sever:0,sharp:!1,dur:3,breaksInto:"stoolleg",model:wt(.02,.04,2236962,[.45,.04,.15],2763306)},monitor:{name:"Monitor",kind:"melee",dmg:34,reach:1.7,rate:.95,knock:9,sever:0,sharp:!1,heavy:!0,shatter:!0,dur:2,model:wt(.02,.04,2236962,[.5,.32,.08],1710618,{glass:!1})},extinguisher:{name:"Fire Extinguisher",kind:"melee",dmg:36,reach:1.8,rate:.85,knock:10,sever:0,sharp:!1,heavy:!0,dur:1/0,model:wt(.08,.04,2236962,[.14,.45,.14],13637656)},officechair:{name:"Office Chair",kind:"melee",dmg:30,reach:2,rate:1,knock:10,sever:0,sharp:!1,heavy:!0,dur:3,breaksInto:"stoolleg",model:wt(.5,.05,3355443,[.45,.5,.1],2236996)},revolver:{name:"Revolver",kind:"gun",dmg:55,rate:.45,knock:6,sever:.4,ammo:6,pellets:1,spread:.01,range:60,model:wt(.12,.04,4860436,[.04,.06,.26],8026746)},shotgun:{name:"Double Barrel",kind:"gun",dmg:16,rate:.9,knock:4,sever:.35,ammo:2,pellets:9,spread:.12,range:25,model:wt(.3,.05,7029795,[.07,.06,.7],4473924)},flintlock:{name:"Flintlock Pistol",kind:"gun",dmg:70,rate:1.4,knock:9,sever:.5,ammo:1,pellets:1,spread:.03,range:40,model:wt(.14,.05,7029795,[.04,.05,.34],9075280)},rifle:{name:"Lever Rifle",kind:"gun",dmg:60,rate:.75,knock:7,sever:.45,ammo:8,pellets:1,spread:.005,range:80,model:wt(.35,.05,7029795,[.04,.05,.8],5592405)},crossbow:{name:"Crossbow",kind:"gun",dmg:65,rate:1.2,knock:8,sever:.6,ammo:5,pellets:1,spread:.01,range:50,model:wt(.3,.05,7029795,[.4,.06,.5],5913114)},tommy:{name:"Tommy Gun",kind:"gun",dmg:20,rate:.09,knock:2,sever:.15,ammo:40,pellets:1,spread:.05,range:45,model:wt(.3,.06,5913114,[.08,.12,.6],3355443)},dynamite:{name:"Dynamite",kind:"throw",dmg:0,rate:.8,knock:0,sever:0,tdmg:90,explode:4.5,fuse:1.6,count:3,model:wt(.02,.04,11542560,[.05,.2,.05],13642282)},molotov:{name:"Molotov",kind:"throw",dmg:0,rate:.7,knock:0,sever:0,tdmg:10,shatter:!0,fire:!0,count:3,model:wt(.2,.07,6965786,[.03,.09,.03],16752672,{glass:!0})},tknives:{name:"Throwing Knives",kind:"throw",dmg:0,rate:.35,knock:0,sever:0,tdmg:34,tsever:.4,count:6,model:wt(.08,.03,2236962,[.02,.16,.015],14606046)},kunai:{name:"Kunai",kind:"throw",dmg:0,rate:.3,knock:0,sever:0,tdmg:36,tsever:.45,count:8,model:wt(.08,.025,2236962,[.025,.18,.012],10132122)},throwaxe:{name:"Throwing Axe",kind:"throw",dmg:0,rate:.6,knock:0,sever:0,tdmg:55,tsever:.6,tknock:6,count:3,model:wt(.35,.035,7029795,[.04,.14,.16],12566463)},cannonball:{name:"Cannonball",kind:"throw",dmg:0,rate:1,knock:0,sever:0,tdmg:70,tknock:16,count:1,model:wt(.01,.01,2236962,[.22,.22,.22],1710618)}},ex=Object.keys(Bo),Se=n=>Bo[n]||Bo.fists;function Ho(n){return n.kind==="throw"?n.tdmg:Math.round(n.dmg*(n.heavy?1.2:.8)+(n.shatter?6:0))}function uh(n,t,e,i=1){let s=Math.round((n.kind==="throw"?Ho(n):n.dmg)*i),r=n.kind==="throw"?n.tsever||0:n.sever,a=s>=t,o=a||r>0&&e()<r,l=!!n.crush&&a,c=Math.min(40,Math.round(s/3)+(o?18:0)+(l?30:0));return{dmg:s,sever:o,crush:l,gibs:c}}function Yr(n,t){let e=Se(n);return!isFinite(e.dur)||(t.used=(t.used||0)+1,t.used<e.dur)?n:(t.used=0,e.breaksInto||null)}function Cg(n){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),i=a=>"#"+a.toString(16).padStart(6,"0"),s=(a,o)=>{let l=(a>>16&255)*o,c=(a>>8&255)*o,h=(a&255)*o;return`rgb(${l|0},${c|0},${h|0})`};switch(n.kind){case"planks":case"deck":for(let a=0;a<8;a++){e.fillStyle=i(a%2?n.c1:n.c2),e.fillRect(0,a*16,128,16),e.fillStyle="rgba(0,0,0,.35)",e.fillRect(0,a*16,128,1);let o=a*37%128;e.fillRect(o,a*16,1,16),n.kind==="deck"&&(e.fillStyle="rgba(0,0,0,.5)",e.fillRect((o+20)%128,a*16+7,2,2),e.fillRect((o+84)%128,a*16+7,2,2))}break;case"disco":{let a=[n.c1,n.c2,n.c3,n.c4];for(let o=0;o<4;o++)for(let l=0;l<4;l++)e.fillStyle=i(a[(o+l*3)%4]),e.fillRect(o*32+1,l*32+1,30,30);break}case"concrete":e.fillStyle=i(n.c1),e.fillRect(0,0,128,128);for(let a=0;a<400;a++)e.fillStyle=s(n.c2,.8+Math.random()*.4),e.fillRect(Math.random()*128,Math.random()*128,2,2);e.fillStyle="rgba(0,0,0,.25)",e.fillRect(0,0,128,1),e.fillRect(0,0,1,128);break;case"tatami":for(let a=0;a<2;a++)for(let o=0;o<4;o++)e.fillStyle=i((a+o)%2?n.c1:n.c2),e.fillRect(a*64,o*32,64,32),e.fillStyle="rgba(40,30,10,.5)",e.fillRect(a*64,o*32,64,2),e.fillRect(a*64,o*32,2,32);for(let a=0;a<300;a++)e.fillStyle="rgba(0,0,0,.06)",e.fillRect(Math.random()*128,Math.random()*128,1,3);break;case"carpet":e.fillStyle=i(n.c1),e.fillRect(0,0,128,128);for(let a=0;a<900;a++)e.fillStyle=s(n.c2,.8+Math.random()*.4),e.fillRect(Math.random()*128,Math.random()*128,1,1);e.fillStyle="rgba(0,0,0,.18)",e.fillRect(0,0,128,1),e.fillRect(0,0,1,128);break;case"stone":for(let a=0;a<4;a++)for(let o=0;o<4;o++)e.fillStyle=s((o+a)%2?n.c1:n.c2,.9+Math.random()*.2),e.fillRect(o*32+a%2*16,a*32,31,31);e.fillStyle="rgba(0,0,0,.35)";for(let a=0;a<4;a++)e.fillRect(0,a*32,128,1);break;case"checker":for(let a=0;a<4;a++)for(let o=0;o<4;o++)e.fillStyle=i((a+o)%2?n.c1:n.c2),e.fillRect(a*32,o*32,32,32);break;case"sand":e.fillStyle=i(n.c1),e.fillRect(0,0,128,128);for(let a=0;a<700;a++)e.fillStyle=s(n.c2,.85+Math.random()*.3),e.fillRect(Math.random()*128,Math.random()*128,2,2);break}let r=new ji(t);return r.wrapS=r.wrapT=Ms,r.magFilter=Me,r.colorSpace=_e,r}function dh(n,t,e=1){let i=new He;n.add(i),n.background=new Ot(t.fog),n.fog=new Ir(t.fog,14,Math.max(t.w,t.d)*1.6);let s=C=>new we({color:C}),r=Cg(t.floor);r.repeat.set(t.w/(t.floor.kind==="disco"?4:3),t.d/(t.floor.kind==="disco"?4:3));let a=new we({map:r});t.floor.kind==="disco"&&(a.emissive=new Ot(16777215),a.emissiveMap=r,a.emissiveIntensity=.35);let o=new te(new Nn(t.w,t.d).rotateX(-Math.PI/2),a);o.receiveShadow=!0,i.add(o);let l=s(t.wall),c=s(t.trim),h=t.h;for(let[C,T,R,N]of[[0,-t.d/2,t.w,.2],[0,t.d/2,t.w,.2],[-t.w/2,0,.2,t.d],[t.w/2,0,.2,t.d]]){let y=new te(new ge(R+.2,h,N+.2),l);y.position.set(C+Math.sign(C)*.1,h/2,T+Math.sign(T)*.1),y.receiveShadow=!0,i.add(y);let S=new te(new ge(R+.25,1,N+.25),c);S.position.set(C+Math.sign(C)*.1,.5,T+Math.sign(T)*.1),i.add(S)}if(t.ceil!=null){let C=new te(new Nn(t.w,t.d).rotateX(Math.PI/2),s(t.ceil));C.position.y=h,i.add(C);for(let T=-t.w/2+2;T<t.w/2;T+=4){let R=new te(new ge(.3,.3,t.d),c);R.position.set(T,h-.15,0),i.add(R)}}else{let C=new kn(new ge(.5,.8,.5),new we,400),T=new Ot,R=new le,N=0;for(let y=0;y<400;y++){let S=y%4,F=(y>>2)/100*2-1,Y=(y>>2)%3,ht=S<2?F*t.w/2:(S===2?-1:1)*(t.w/2+1+Y),U=S<2?(S===0?-1:1)*(t.d/2+1+Y):F*t.d/2;R.makeTranslation(ht,h+.4+Y*.7,U),C.setMatrixAt(N,R),C.setColorAt(N++,T.setHSL(Math.random(),.5,.45))}C.count=N,i.add(C),i.userData.crowd=C}let u=new ge(1,1,1).translate(0,.5,0),d=new Map,p=(C,T)=>{let R=C+":"+(T||0),N=d.get(R);return N||(N=s(C),T&&(N.emissive=new Ot(T),N.emissiveIntensity=.6),d.set(R,N)),N};for(let C of t.solids.concat(t.deco)){let T=new te(u,p(C.c,C.glow));T.position.set(C.x,C.y,C.z),T.scale.set(C.w,C.h,C.d),T.castShadow=C.h>.3,T.receiveShadow=!0,i.add(T),C.mesh=T}let g=t.bright??1;i.add(new Or(16774376,t.ambient,1.6*g)),i.add(new Br(16777215,.35*g));let x=new Fr(t.light,1.1);x.position.set(6,12,4),x.castShadow=e>0,x.shadow.mapSize.set(1024,1024),Object.assign(x.shadow.camera,{left:-t.w/2,right:t.w/2,top:t.d/2,bottom:-t.d/2,near:1,far:40}),i.add(x,x.target);let m=e>0?4:2,f=[];t.lamps.forEach(([C,T],R)=>{let N=new te(new kr(.35,.3,4,1,!0),new we({color:2236962,emissive:t.light,emissiveIntensity:.5,side:fn}));N.position.set(C,h-(t.ceil==null?-1:.9),T),i.add(N);let y=new te(new ge(.02,.9,.02),s(1118481));if(y.position.set(C,h-.45,T),t.ceil!=null&&i.add(y),R<m){let S=new _i(t.light,30,16,1.2);S.position.set(C,h-1.2,T),i.add(S),f.push(S)}});let b=null,_=[];if(t.discoBall){b=new te(new Qi(.6,1),new we({color:14540253,emissive:7829367,flatShading:!0})),b.position.set(0,h-1,0),i.add(b);for(let C of[16722554,2818e3,16765503]){let T=new zr(C,40,22,.45,.4,1);T.position.set(0,h-1.1,0),i.add(T,T.target),_.push(T)}}let A=0;return{root:i,update(C){if(A+=C,b&&(b.rotation.y+=C*.8,_.forEach((T,R)=>{let N=A*(.7+R*.25)+R*2.1;T.target.position.set(Math.cos(N)*6,0,Math.sin(N*1.3)*6)}),a.emissiveIntensity=.25+.2*Math.max(0,Math.sin(A*8))),i.userData.crowd&&(A*10|0)%2===0){let T=i.userData.crowd;T.position.y=Math.abs(Math.sin(A*6))*.06}f.forEach((T,R)=>{T.intensity=30+Math.sin(A*3+R)*1.2})},dispose(){n.remove(i)}}}var qt=.075;function rs(n,t=0,e=0,i=0,s=qt){let r=[],a=[],o=[],l=new Ot,c=[[1,0,0,[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]],[-1,0,0,[[0,0,1],[0,1,1],[0,1,0],[0,0,0]]],[0,1,0,[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]],[0,-1,0,[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]],[0,0,1,[[1,0,1],[1,1,1],[0,1,1],[0,0,1]]],[0,0,-1,[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]]];for(let[u,d]of n){let[p,g,x]=u.split(",").map(Number);l.setHex(d);let m=.92+((p*73856093^g*19349663^x*83492791)&15)/100;for(let[f,b,_,A]of c){if(n.has(p+f+","+(g+b)+","+(x+_)))continue;let C=A.map(([T,R,N])=>[(p+T+t)*s,(g+R+e)*s,(x+N+i)*s]);for(let T of[0,1,2,0,2,3])r.push(...C[T]),o.push(f,b,_),a.push(l.r*m,l.g*m,l.b*m)}}let h=new qe;return h.setAttribute("position",new be(r,3)),h.setAttribute("normal",new be(o,3)),h.setAttribute("color",new be(a,3)),h.computeBoundingSphere(),h}var se=(n,t,e)=>n+","+t+","+e;function ne(n,t,e,i,s,r,a,o){for(let l=t;l<t+s;l++)for(let c=e;c<e+r;c++)for(let h=i;h<i+a;h++){let u=typeof o=="function"?o(l-t,c-e,h-i):o;u!=null&&n.set(se(l,c,h),u)}}var ss=1708048,fh=16053492,Vo=6953498;function ph(n){let t=new Map;if(ne(t,0,0,0,6,6,6,n.skin),n.shades)for(let e=1;e<=4;e++)t.set(se(e,3,5),ss);else t.set(se(1,3,5),fh),t.set(se(4,3,5),fh),t.set(se(1,3,5),ss),t.set(se(4,3,5),ss),t.set(se(2,3,5),n.skin);if(n.eyepatch){t.set(se(4,3,5),ss),t.set(se(4,4,5),ss);for(let e=0;e<6;e++)t.set(se(e,4,5),e===4?ss:t.get(se(e,4,5)))}if(t.set(se(2,1,5),Vo),t.set(se(3,1,5),Vo),n.hair!=null){ne(t,0,5,0,6,1,6,n.hair),ne(t,0,2,0,6,3,1,n.hair);for(let e of[0,5])ne(t,e,4,1,1,1,3,n.hair)}if(n.afro&&ne(t,-1,5,-1,8,3,7,n.hair||2236962),n.beard!=null){ne(t,0,0,5,6,2,1,(e,i)=>i===1&&(e===2||e===3)?Vo:n.beard);for(let e of[0,5])ne(t,e,0,3,1,3,2,n.beard);ne(t,1,-1,4,4,1,2,n.beard)}switch(n.hat){case"bandana":ne(t,0,5,0,6,1,6,n.hatC),ne(t,0,4,0,6,1,6,(e,i,s)=>s===5||s===0||e===0||e===5?n.hatC:null),t.set(se(2,4,-1),n.hatC),t.set(se(3,3,-1),n.hatC);break;case"cap":ne(t,0,6,0,6,1,6,n.hatC),ne(t,1,5,6,4,1,2,n.hatC);break;case"cowboy":ne(t,-2,6,-2,10,1,10,n.hatC),ne(t,0,7,0,6,2,6,n.hatC),ne(t,0,7,0,6,1,6,(e,i,s)=>e===0||e===5||s===0||s===5?2759182:n.hatC);break;case"tricorn":ne(t,-1,6,-1,8,1,8,n.hatC),ne(t,0,7,0,6,2,6,n.hatC),t.set(se(2,8,6),15790320),t.set(se(3,8,6),15790320);break;case"horns":ne(t,-1,4,-1,8,3,8,(e,i,s)=>s===7&&i<6&&e>0&&e<7?null:i===4?9071152:n.hatC);for(let e of[-2,7])t.set(se(e,6,3),15788240),t.set(se(e,7,3),15788240),t.set(se(e+(e<0,0),8,3),15788240);break;case"fedora":ne(t,-1,6,-1,8,1,8,n.hatC),ne(t,0,7,0,6,2,6,(e,i,s)=>i===7?2236962:n.hatC),ne(t,0,7,0,6,1,6,1710618),ne(t,0,8,0,6,1,6,n.hatC);break;case"headband":ne(t,0,4,0,6,1,6,(e,i,s)=>s===5||s===0||e===0||e===5?n.hatC:null),t.set(se(2,4,-1),n.hatC),t.set(se(3,3,-1),n.hatC),t.set(se(3,4,6),13637656);break;case"knight":ne(t,-1,-1,-1,8,8,8,(e,i,s)=>s===7&&i===3&&e>0&&e<7?1118481:n.hatC),ne(t,3,7,-1,2,2,8,11542560);break;case"helmet":ne(t,-1,3,-1,8,4,8,(e,i,s)=>s===7&&i<3&&e>0&&e<7?null:n.hatC),ne(t,3,7,-1,2,2,7,11542560);break}return t}function mh(n){let t=new Map,e=n.shirt==null?n.skin:n.shirt;if(ne(t,0,0,0,8,9,4,(i,s,r)=>s===0?2759184:n.stripes&&s%2===0?n.stripes:n.vest!=null&&(r===0||i<=1||i>=6)&&s>=1?n.vest:n.shirt==null&&s>=1?((i===3||i===4)&&s>4,n.skin):e),n.badge&&t.set(se(5,6,3),16765503),n.tie!=null)for(let i=2;i<9;i++)t.set(se(3,i,3),n.tie),i>3&&t.set(se(4,i,3),n.tie);if(n.belt!=null)for(let i=0;i<8;i++)t.set(se(i,1,3),n.belt);return n.guard&&t.set(se(2,7,3),16765503),t}function gh(n){let t=new Map,e=n.shirt==null?n.skin:n.vest!=null&&n.vest===n.shirt?n.vest:n.shirt;return ne(t,0,0,0,3,9,3,(i,s)=>s>=6?n.stripes&&s===7?n.stripes:e:n.skin),t}function xh(n){let t=new Map;return ne(t,0,0,0,4,10,4,(e,i,s)=>i<2?n.shoe:n.pants),t.set(se(1,0,4),n.shoe),t.set(se(2,0,4),n.shoe),t}var _h=new Map;function Zr(n,t){let e=_h.get(n);return e||(e=t(),_h.set(n,e)),e}var yh=new we({vertexColors:!0}),Go={head:[-3,0,-3],torso:[-4,0,-2],armL:[-1.5,-9,-1.5],armR:[-1.5,-9,-1.5],legL:[-2,-10,-2],legR:[-2,-10,-2]},vh=new Map;function Jr(n,t){let e=vh.get(n);return e||(e=t(),vh.set(n,e)),e}var Pg=[9046538,10489872,7341574];function Mh(n,t,e,i,s,r=Math.random){let a=[],o=s*s,l=(s+1.3)*(s+1.3);for(let[c,h]of n){let[u,d,p]=c.split(",").map(Number);(u+.5-t)**2+(d+.5-e)**2+(p+.5-i)**2<=o*(.75+r()*.5)&&(a.push([u,d,p,h]),n.delete(c))}if(a.length)for(let[c]of n){let[h,u,d]=c.split(",").map(Number);(h+.5-t)**2+(u+.5-e)**2+(d+.5-i)**2<=l&&r()<.85&&n.set(c,Pg[r()*3|0])}return a}function bh(n){let t=JSON.stringify(n),e={head:Jr(t+"H",()=>ph(n)),torso:Jr(t+"T",()=>mh(n)),arm:Jr(t+"A",()=>gh(n)),leg:Jr(t+"L",()=>xh(n))},i={head:Zr(t+"h",()=>rs(ph(n),-3,0,-3)),torso:Zr(t+"t",()=>rs(mh(n),-4,0,-2)),arm:Zr(t+"a",()=>rs(gh(n),-1.5,-9,-1.5)),leg:Zr(t+"l",()=>rs(xh(n),-2,-10,-2))},s=new He,r=(c,h,u,d)=>{let p=new He;p.position.set(h*qt,u*qt,d*qt);let g=new te(c,yh);return g.castShadow=!0,p.add(g),s.add(p),p},a={legL:r(i.leg,-2,10,0),legR:r(i.leg,2,10,0),torso:r(i.torso,0,10,0),head:r(i.head,0,19,0),armL:r(i.arm,-5.5,18.6,0),armR:r(i.arm,5.5,18.6,0)},o={head:[n.skin,n.skin,n.hair??n.skin,n.beard??n.skin],torso:[n.shirt??n.skin,n.vest??n.shirt??n.skin,n.stripes??n.shirt??n.skin],armL:[n.skin,n.shirt??n.skin],armR:[n.skin,n.shirt??n.skin],legL:[n.pants,n.pants,n.shoe],legR:[n.pants,n.pants,n.shoe]},l={head:e.head,torso:e.torso,armL:e.arm,armR:e.arm,legL:e.leg,legR:e.leg};return{group:s,pivots:a,palette:o,vox:l,owned:{}}}function Wo(n,t){let e=n.pivots[t].children[0],i=Go[t],s=rs(n.vox[t],i[0],i[1],i[2]);n.owned[t]&&e.geometry.dispose(),e.geometry=s,n.owned[t]=!0}function Xo(n=15843965,t=2763306){let e=new Map;ne(e,0,0,0,4,4,5,n);for(let i=0;i<4;i++)e.set(se(i,3,4),n);return ne(e,0,0,-6,4,4,6,t),new te(rs(e,-2,-2,-2.5,.05),yh)}var $r=new Map,wh=n=>{let t=$r.get(n);return t||(t=new we({color:n}),$r.set(n,t)),t},Lg=n=>{let t="g"+n,e=$r.get(t);return e||(e=new we({color:n,transparent:!0,opacity:.75}),$r.set(t,e)),e};function ve(n,t,e,i,s,r,a,o,l){let c=new te(new ge(t,e,i),l?Lg(s):wh(s));return c.position.set(r,a,o),c.castShadow=!0,n.add(c),c}function Ls(n,t){let e=new He,i=t.model;if(!i)return e;switch(n){case"stool":ve(e,.4,.08,.4,9116186,0,.62,0);for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])ve(e,.05,.6,.05,7029795,s*.15,.3,r*.15);e.userData.upright=!0;break;case"chair":ve(e,.45,.06,.45,8016432,0,.46,0),ve(e,.45,.5,.06,8016432,0,.74,-.2);for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])ve(e,.05,.46,.05,5913120,s*.19,.23,r*.19);e.userData.upright=!0;break;case"bottle":case"brokenbottle":if(ve(e,.08,n==="bottle"?.2:.12,.08,3107626,0,.1,0,!0),n==="bottle")ve(e,.035,.1,.035,3107626,0,-.05,0,!0);else for(let s of[-1,1])ve(e,.02,.07,.02,8372087,s*.025,.19,0,!0);break;case"mug":ve(e,.13,.17,.13,15784080,0,.08,0,!0),ve(e,.1,.03,.1,16777215,0,.17,0),ve(e,.03,.1,.06,15784080,.08,.08,0,!0);break;case"guitar":ve(e,.06,.55,.04,5913114,0,.27,0),ve(e,.34,.4,.09,12599338,0,.7,0),ve(e,.1,.1,.1,2236962,0,.7,.03);break;case"dynamite":for(let s of[-1,0,1])ve(e,.05,.2,.05,13642282,s*.05,.1,0);ve(e,.01,.08,.01,14540253,0,.24,0);break;case"cannonball":{let s=new te(new Qi(.12,0),wh(1710618));s.position.y=.12,e.add(s);break}case"shotgun":case"revolver":case"flintlock":case"rifle":case"tommy":ve(e,i.w,i.len*.6,i.w*1.4,i.hc,0,i.len*.3-.05,.03),ve(e,i.head[0],i.head[1],i.head[2],i.headC,0,i.len*.55,-i.head[2]/2+.06),n==="tommy"&&ve(e,.09,.09,.09,2236962,0,i.len*.35,-.12),e.userData.gun=!0;break;default:ve(e,i.w,i.len,i.w,i.hc,0,i.len/2-.06,0,i.glass),ve(e,i.head[0],i.head[1],i.head[2],i.headC,0,i.len+i.head[1]/2-.06,i.head[2]>.1&&n!=="pan"&&n!=="weight"?i.head[2]/3:0,i.glass)}return e}var qo=18;function Sh(n){qo=n}function Eh(n,t){let i=new kn(new ge(qt,qt,qt),new we,2600);i.instanceMatrix.setUsage(Zc),i.count=0,i.frustumCulled=!1,i.castShadow=!1,i.setColorAt(0,new Ot(1,1,1)),n.add(i);let s=new Float32Array(2600),r=new Float32Array(2600),a=new Float32Array(2600),o=new Float32Array(2600),l=new Float32Array(2600),c=new Float32Array(2600),h=new Float32Array(2600),u=new Float32Array(2600),d=new Uint8Array(2600),p=new Uint8Array(2600),g=0,x=0,m=new le,f=new ln,b=new Ji,_=new D,A=new D,C=new Ot;function T(q,j,ut,I,V,Q,J,L,at=1){let it=g;g=(g+1)%2600,x=Math.max(x,g===0?2600:g),s[it]=q,r[it]=j,a[it]=ut,o[it]=I,l[it]=V,c[it]=Q,h[it]=Math.random()*6.28,u[it]=at*(L?.7+Math.random()*.5:.9+Math.random()*.3),d[it]=1,p[it]=L===2?2:L?1:0,i.setColorAt(it,C.setHex(J)),i.instanceColor.needsUpdate=!0,i.count=x}let R=[10095114,11538448,7996934,13113368];function N(q,j,ut,I,V,Q=0,J=0,L=1){I=Math.round(I*(kt.gore??1));for(let at=0;at<I;at++){let it=at%2===0||!V,Ct=it?R[at&3]:V[Math.random()*V.length|0],Mt=(1.5+Math.random()*3.5)*L;T(q+(Math.random()-.5)*.2,j+(Math.random()-.5)*.2,ut+(Math.random()-.5)*.2,Q*Mt*.8+(Math.random()-.5)*Mt,1.5+Math.random()*3*L,J*Mt*.8+(Math.random()-.5)*Mt,Ct,it)}}function y(q,j,ut,I=0,V=0,Q=0){T(q,j,ut,I,V,Q,R[Math.random()*4|0],2,.75)}function S(q,j,ut,I,V,Q,J,L=26){for(let at=0;at<L;at++)T(q+(Math.random()-.5)*I,j+Math.random()*V,ut+(Math.random()-.5)*Q,(Math.random()-.5)*6,1+Math.random()*4,(Math.random()-.5)*6,J,!1,1.2+Math.random()*1.2)}function F(q,j,ut,I=8372087,V=14){for(let Q=0;Q<V;Q++)T(q,j,ut,(Math.random()-.5)*5,1+Math.random()*3,(Math.random()-.5)*5,Q%4?I:14745568,!1,.5)}let Y=4200,ht=(()=>{let q=document.createElement("canvas");q.width=q.height=64;let j=q.getContext("2d");j.fillStyle="#fff";for(let I=0;I<26;I++){let V=Math.random()*6.28,Q=Math.random()*22,J=3+Math.random()*7;j.fillRect(32+Math.cos(V)*Q-J/2,32+Math.sin(V)*Q-J/2,J,J)}j.fillRect(20,20,24,24);let ut=new ji(q);return ut.magFilter=Me,ut.minFilter=Me,ut})(),U=new kn(new Nn(1,1),new we({alphaMap:ht,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Y);U.count=0,U.frustumCulled=!1,U.setColorAt(0,C.setHex(9437184)),n.add(U);let O=0,Z=0,tt=0,K=new D,$=new D(0,0,1),rt=new ln;function ct(q,j,ut,I,V,Q,J,L,at,it){K.set(V,Q,J),f.setFromUnitVectors($,K),b.set(0,0,it),rt.setFromEuler(b),f.multiply(rt),_.set(j+V*.01,ut+Q*.012,I+J*.01),A.set(L,at,1),m.compose(_,f,A),U.setMatrixAt(q,m),U.instanceMatrix.needsUpdate=!0}function pt(q,j,ut,I,V,Q,J,L=Math.random()*6.28,at=J,it=!1){let Ct=O;if(ct(Ct,q,j,ut,I,V,Q,J,at,L),U.setColorAt(Ct,C.setHex(R[Math.random()*4|0])),O=(O+1)%Y,Z=Math.max(Z,O===0?Y:O),U.count=Z,U.instanceColor.needsUpdate=!0,tt++,V===0&&!it&&j>.4){let Mt=1+(Math.random()*3|0);for(let ie=0;ie<Mt;ie++)Ie(q+Q*(Math.random()-.5)*J*.7,j-Math.random()*J*.3,ut+I*(Math.random()-.5)*J*.7,I,Q)}return Ct}let X=[],et=[];function gt(q,j,ut,I=0){let V=Ve(t,q,j,2),Q=Math.random()*6.28,J=pt(q,V,j,0,1,0,ut,Q);et.push({x:q,z:j,r:Math.max(ut,I)*.45,y:V}),et.length>90&&et.shift(),I>ut&&X.push({i:J,x:q,y:V,z:j,s:ut,max:I,rot:Q})}function At(q,j,ut){for(let I of et)if(Math.abs(I.y-j)<.3&&(I.x-q)**2+(I.z-ut)**2<I.r*I.r)return!0;return!1}function Et(q,j,ut,I,V){let Q=Math.cos(I)*.13*V,J=-Math.sin(I)*.13*V;pt(q+Q,j,ut+J,0,1,0,.13,-I,.3,!0)}let Ft=500,Nt=new kn(new Nn(1,1),new we({color:9045510,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Ft);Nt.count=0,Nt.frustumCulled=!1,n.add(Nt);let Dt=[],Zt=0,z=0;function Ie(q,j,ut,I,V){let Q={i:Zt,x:q,y:j,z:ut,nx:I,nz:V,len:.02,max:Math.min(j-.03,.25+Math.random()*1.3),sp:.25+Math.random()*.5,w:.025+Math.random()*.035};Zt=(Zt+1)%Ft,z=Math.max(z,Zt===0?Ft:Zt),Nt.count=z,Dt.push(Q),Dt.length>140&&Dt.shift()}let Rt=700,Lt=new kn(new ge(qt*1.6,qt*1.6,qt*1.6),new $i({transparent:!0,opacity:.9}),Rt);Lt.count=Rt,Lt.frustumCulled=!1,n.add(Lt);let bt=[];for(let q=0;q<Rt;q++)bt.push({life:0,max:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,kind:0}),m.makeScale(0,0,0),Lt.setMatrixAt(q,m),Lt.setColorAt(q,C.setHex(16744480));let oe=0,Ht=0;function E(q,j,ut,I=1,V=.25,Q=0){for(let J=0;J<I;J++){let L=bt[oe];oe=(oe+1)%Rt,L.x=q+(Math.random()-.5)*V*2,L.y=j+Math.random()*.15,L.z=ut+(Math.random()-.5)*V*2,L.vx=(Math.random()-.5)*.6,L.vz=(Math.random()-.5)*.6,L.vy=Q?(Math.random()-.3)*4:1.2+Math.random()*1.8,Q&&(L.vx*=10,L.vz*=10),L.max=L.life=Q?.25+Math.random()*.25:.35+Math.random()*.5,L.kind=Q}Ht=1}let M=[],B=46;function ot(q,j,ut,I=.15,V=!0,Q=null){q.updateMatrixWorld(!0);let J=new D,L=new ln,at=new D;q.matrixWorld.decompose(J,L,at),q.parent&&q.parent.remove(q),q.position.copy(J),q.quaternion.copy(L),q.scale.copy(at);let it=q.children[0];if(it&&it.geometry){it.geometry.boundingSphere||it.geometry.computeBoundingSphere();let Mt=it.geometry.boundingSphere.center.clone();for(let ie of q.children)ie.position.sub(Mt);q.position.add(Mt.multiply(at).applyQuaternion(L))}n.add(q);let Ct={obj:q,vel:j.clone(),ang:ut.clone(),half:I,bleed:V?3:0,palette:Q,rest:0,kick:null};if(M.push(Ct),M.length>B){let Mt=M.shift();n.remove(Mt.obj)}return Ct}let nt=[],lt=new Ts({color:16769162,transparent:!0});function St(q,j,ut,I=.08){let V=new qe().setFromPoints([q.clone(),j.clone()]),Q=lt.clone();ut!=null&&Q.color.setHex(ut);let J=new Nr(V,Q);n.add(J),nt.push({l:J,t:I,d:I})}function mt(q,j){for(let ut=0;ut<3;ut++){let I=q.clone();for(let V=1;V<=7;V++){let Q=q.clone().lerp(j,V/7);V<7&&(Q.x+=(Math.random()-.5)*.9,Q.z+=(Math.random()-.5)*.9),St(I,Q,ut?10146047:16777215,.28),I=Q}}}let _t=t.w/2,It=t.d/2,Wt=[3806216,12593160,16738832,16756768,16773280],st=[6324479,10537215,16777215];function re(q){for(let I=X.length-1;I>=0;I--){let V=X[I];V.s=Math.min(V.max,V.s+q*.22),ct(V.i,V.x,V.y,V.z,0,1,0,V.s,V.s,V.rot),V.s>=V.max&&X.splice(I,1)}for(let I of Dt)I.len>=I.max||(I.len=Math.min(I.max,I.len+I.sp*q),I.sp*=1-.35*q,K.set(I.nx,0,I.nz),f.setFromUnitVectors($,K),_.set(I.x+I.nx*.014,I.y-I.len/2,I.z+I.nz*.014),A.set(I.w,I.len,1),m.compose(_,f,A),Nt.setMatrixAt(I.i,m),Nt.instanceMatrix.needsUpdate=!0);if(Ht){Ht=0;for(let I=0;I<Rt;I++){let V=bt[I];if(V.life<=0)continue;if(V.life-=q,Ht=1,V.life<=0){m.makeScale(0,0,0),Lt.setMatrixAt(I,m);continue}V.x+=V.vx*q,V.y+=V.vy*q,V.z+=V.vz*q;let Q=V.life/V.max,J=.4+Q*.9;_.set(V.x,V.y,V.z),b.set(V.life*5,V.life*3,0),f.setFromEuler(b),A.set(J,J,J),m.compose(_,f,A),Lt.setMatrixAt(I,m),Lt.setColorAt(I,C.setHex(V.kind?st[Math.min(2,Q*3|0)]:Wt[Math.min(4,Q*5|0)]))}Lt.instanceMatrix.needsUpdate=!0,Lt.instanceColor.needsUpdate=!0}let j=!1,ut=I=>{d[I]===0?A.set(0,0,0):A.set(u[I],u[I],u[I]),b.set(h[I],h[I]*.7,0),f.setFromEuler(b),_.set(s[I],r[I],a[I]),m.compose(_,f,A),i.setMatrixAt(I,m),j=!0};for(let I=0;I<x;I++){if(d[I]!==1)continue;if(l[I]-=qo*q,s[I]+=o[I]*q,r[I]+=l[I]*q,a[I]+=c[I]*q,Math.abs(s[I])>_t-.04){let Q=Math.sign(s[I]);if(s[I]=Q*(_t-.04),p[I]&&Math.random()<.35&&r[I]<t.h){pt(s[I],r[I],a[I],-Q,0,0,.18+Math.random()*.25),d[I]=0,ut(I);continue}o[I]*=-.35}if(Math.abs(a[I])>It-.04){let Q=Math.sign(a[I]);if(a[I]=Q*(It-.04),p[I]&&Math.random()<.35&&r[I]<t.h){pt(s[I],r[I],a[I],0,0,-Q,.18+Math.random()*.25),d[I]=0,ut(I);continue}c[I]*=-.35}t.h&&r[I]>t.h-.05&&(r[I]=t.h-.05,l[I]=-Math.abs(l[I])*.3);let V=Ve(t,s[I],a[I],r[I]+.2)+qt*.5*u[I];r[I]<=V&&(r[I]=V,p[I]?(p[I]===2?pt(s[I],V-qt*.5*u[I],a[I],0,1,0,.07+Math.random()*.1):Math.random()<.5&&pt(s[I],V-qt*.5*u[I],a[I],0,1,0,.16+Math.random()*.3),d[I]=0):Math.abs(l[I])>1.2?(l[I]*=-.3,o[I]*=.55,c[I]*=.55):(l[I]=0,o[I]*=.82,c[I]*=.82,o[I]*o[I]+c[I]*c[I]<.02&&(d[I]=2))),ut(I)}j&&(i.instanceMatrix.needsUpdate=!0);for(let I of M){if(I.rest>1.5)continue;let V=I.obj;I.vel.y-=qo*q,V.position.addScaledVector(I.vel,q);let Q=I.ang.length();Q>.01&&(f.setFromAxisAngle(_.copy(I.ang).divideScalar(Q),Q*q),V.quaternion.premultiply(f)),Math.abs(V.position.x)>_t-I.half&&(V.position.x=Math.sign(V.position.x)*(_t-I.half),I.vel.x*=-.4,I.bleed&&pt(V.position.x+Math.sign(V.position.x)*I.half,V.position.y,V.position.z,-Math.sign(V.position.x),0,0,.5)),Math.abs(V.position.z)>It-I.half&&(V.position.z=Math.sign(V.position.z)*(It-I.half),I.vel.z*=-.4,I.bleed&&pt(V.position.x,V.position.y,V.position.z+Math.sign(V.position.z)*I.half,0,0,-Math.sign(V.position.z),.5));let J=Ve(t,V.position.x,V.position.z,V.position.y+.3)+I.half;V.position.y<J?(V.position.y=J,I.vel.y<-2.5&&I.bleed&&(gt(V.position.x,V.position.z,.4+Math.random()*.4),I.bleed--),I.vel.y=Math.abs(I.vel.y)>2?-I.vel.y*.3:0,I.vel.x*=.7,I.vel.z*=.7,I.ang.multiplyScalar(.7),I.vel.lengthSq()<.05&&(I.rest+=q,I.ang.lengthSq()<.5&&I.ang.set(0,0,0))):I.bleed&&Math.random()<.3&&T(V.position.x,V.position.y,V.position.z,I.vel.x*.3,0,I.vel.z*.3,R[Math.random()*4|0],!0)}for(let I=nt.length-1;I>=0;I--){let V=nt[I];V.t-=q,V.l.material.opacity=Math.max(0,V.t/V.d),V.t<=0&&(n.remove(V.l),V.l.geometry.dispose(),nt.splice(I,1))}}function Jt(q,j,ut,I,V){for(let Q of M){let J=Q.obj,L=J.position.x-q,at=J.position.z-j;L*L+at*at<ut*ut&&(Q.vel.x+=I,Q.vel.z+=V,Q.vel.y+=1.5,Q.ang.set(Math.random()*6-3,0,Math.random()*6-3),Q.rest=0)}}let kt={gib:T,burst:N,glass:F,splat:pt,pool:gt,addDebris:ot,tracer:St,update:re,nudge:Jt,drop:y,chunks:S,flame:E,bolt:mt,isWet:At,footprint:Et,gore:1,get splats(){return tt}};return kt}var jr=18;function Rh(n){jr=n}var Ig=[1709072,2759698,920072],Th={head:40,armL:45,armR:45,legL:50,legR:50},Ah=["armL","armR","legL","legR"],vi=new D,Kr=new D;function Qr(n,t,e=1,i={}){let s=n/e,r=t/e,a;return s>1.43?a="head":s<.76?a=r<0?"legL":"legR":Math.abs(r)>.3?a=r<0?"armL":"armR":a="torso",i[a]&&(a=i.torso?"head":"torso"),a}var ei=class{constructor(t,e,i,s,r,a={}){this.W=t,this.id=e,this.w=Se(e),this.mesh=Ls(e,this.w),this.pos=new D(i,s,r),this.vel=new D,this.spin=new D,this.thrown=!1,this.owner=null,this.held=!1,this.alive=!0,this.state={used:a.used||0,ammo:a.ammo??this.w.ammo,count:a.count??this.w.count},this.fuse=a.fuse??null,this.mesh.userData.upright||this.mesh.rotation.set(Math.PI/2,Math.random()*6,0,"YXZ"),this.mesh.rotation.y=Math.random()*6,this.mesh.position.copy(this.pos),t.scene.add(this.mesh)}get resting(){return!this.thrown&&this.vel.lengthSq()<.5}remove(){this.alive=!1,this.W.scene.remove(this.mesh),this.lit&&(this.lit=!1,this.W.fx.glass(this.pos.x,this.pos.y+.1,this.pos.z,6965786),this.W.audio.glass(),this.W.ignite(this.pos,2.4,7,this.owner))}update(t){let e=this.W,i=e.L;if(this.lit&&(e.fx.flame(this.pos.x,this.pos.y+.2,this.pos.z,1,.05),!this.thrown)){this.remove();return}if(this.fuse!=null&&(this.fuse-=t,Math.random()<.6&&e.fx.gib(this.pos.x,this.pos.y+.25,this.pos.z,Math.random()-.5,1.5,Math.random()-.5,16764992,!1,.4),this.fuse<=0)){e.explode(this.pos,this.w.explode,this.w.tdmg,this.owner),this.remove();return}let s=Ve(i,this.pos.x,this.pos.z,this.pos.y+.1);if(this.thrown||this.pos.y>s+.01||this.vel.lengthSq()>.01){this.vel.y-=jr*t,this.pos.addScaledVector(this.vel,t),this.mesh.rotation.x+=this.spin.x*t,this.mesh.rotation.z+=this.spin.z*t;let r=i.w/2-.15,a=i.d/2-.15,o=!1;Math.abs(this.pos.x)>r&&(this.pos.x=Math.sign(this.pos.x)*r,this.vel.x*=-.35,o=!0),Math.abs(this.pos.z)>a&&(this.pos.z=Math.sign(this.pos.z)*a,this.vel.z*=-.35,o=!0);for(let c of i.solids)if(!(this.pos.y>c.y+c.h-.02||this.pos.y<c.y)&&Math.abs(this.pos.x-c.x)<c.w/2&&Math.abs(this.pos.z-c.z)<c.d/2){let h=c.w/2-Math.abs(this.pos.x-c.x),u=c.d/2-Math.abs(this.pos.z-c.z);h<u?(this.pos.x+=Math.sign(this.pos.x-c.x)*h,this.vel.x*=-.35):(this.pos.z+=Math.sign(this.pos.z-c.z)*u,this.vel.z*=-.35),o=!0}if(this.thrown){for(let c of e.targets()){if(c===this.owner||!c.alive&&!c.corpse)continue;let h=this.pos.x-c.pos.x,u=this.pos.z-c.pos.z,d=c.radius+.25,p=this.pos.y-c.pos.y;if(h*h+u*u<d*d&&p>-.2&&p<c.height+.1){let g=vi.copy(this.vel).setY(0).normalize(),x=c.lateralOf?c.lateralOf(this.pos):0;if(c.isPlayer?e.hurtPlayer(Ho(this.w)*.6,g,3,this.owner):e.hit(c,Qr(p,x,c.scale,c.missing),this.w,g,this.owner,{thrown:!0,knock:this.w.tknock||(this.w.heavy?7:4)}),this.thrown=!1,this.vel.multiplyScalar(-.2),this.w.shatter||this.w.kind==="throw"&&this.id!=="dynamite"&&this.id!=="cannonball"){this.w.shatter&&(e.fx.glass(this.pos.x,this.pos.y,this.pos.z),e.audio.glass()),this.remove();return}break}}if(o&&this.w.shatter){e.fx.glass(this.pos.x,this.pos.y,this.pos.z),e.audio.glass(),this.remove();return}}let l=Ve(i,this.pos.x,this.pos.z,this.pos.y+.1);if(this.pos.y<=l){if(this.pos.y=l,this.thrown&&this.w.shatter&&this.vel.y<-3){e.fx.glass(this.pos.x,this.pos.y+.05,this.pos.z),e.audio.glass(),this.remove();return}this.thrown=!1,this.vel.y<-2?this.vel.y*=-.25:this.vel.y=0,this.vel.x*=.6,this.vel.z*=.6,this.spin.multiplyScalar(.5),this.vel.lengthSq()<.05&&(this.vel.set(0,0,0),this.mesh.userData.upright?(this.mesh.rotation.x=0,this.mesh.rotation.z=0):(this.mesh.rotation.x=Math.PI/2,this.mesh.rotation.z=0))}this.mesh.position.copy(this.pos)}}},Dg=0,Is=class{constructor(t,e,i,s,r,a={}){this.W=t,this.id=++Dg,this.scale=a.scale||1,this.boss=!!a.boss,this.name=a.name||null;let o=a.hp||1,l=bh(e);this.group=l.group,this.pivots=l.pivots,this.palette=l.palette,this.outfit=e,this.person=l,this.voxStart={};for(let c in l.vox)this.voxStart[c]=l.vox[c].size;this.coward=Math.random()<.3,this.fleeT=0,this.bleeds=[],this.burn=0,this.burnT=0,this.slamCd=4+Math.random()*2,t.mut.bigheads&&l.pivots.head.scale.setScalar(1.75),this.group.scale.setScalar(this.scale),t.scene.add(this.group),this.pos=new D(s,0,r),this.vel=new D,this.yaw=Math.random()*6,this.radius=.36*this.scale,this.height=1.88*this.scale,this.maxHp=100*o,this.hp=this.maxHp,this.partHp={};for(let c in Th)this.partHp[c]=Th[c]*o*(this.boss?1.4:1);this.missing={},this.alive=!0,this.corpse=!1,this.state="idle",this.t=0,this.cool=.5+Math.random(),this.think=0,this.target=null,this.goal=null,this.down=0,this.tilt=0,this.spinY=0,this.walk=Math.random()*6,this.stun=0,this.lastHitBy=null,this.weapon=null,this.wstate={used:0},this.heldMesh=null,this.calm=!a.hostile,this.activity=a.activity||"idle",this.home=new D(s,0,r),this.wander=null,this.idleT=Math.random()*4,this.joinT=null,this.joinBy=null,this.aggro=a.aggro??.22+Math.random()*.25,this.team=e.guard?"guard":t.L.id==="prison"?"inmate":null,this.speed=(2.6+Math.random()*1)*(this.boss?.85:1),this.giveWeapon(i),this.wounds=0,this.sync()}get isPlayer(){return!1}giveWeapon(t,e){this.heldMesh&&(this.heldMesh.parent&&this.heldMesh.parent.remove(this.heldMesh),this.heldMesh=null),this.weapon=t&&t!=="fists"&&!this.missing.armR?t:null;let i=Se(this.weapon);if(this.wstate=e||{used:0,ammo:i.ammo,count:i.count},this.weapon){let s=Ls(this.weapon,i);s.position.set(0,-8.5*qt,.5*qt),s.rotation.x=s.userData.gun?-Math.PI/2:-Math.PI/2*0+Math.PI/2,s.userData.upright&&(s.rotation.set(Math.PI,0,0),s.position.y=-8*qt),this.pivots.armR.add(s),this.heldMesh=s}}dropWeapon(t){if(!this.weapon)return;let e=new ei(this.W,this.weapon,this.pos.x+Math.sin(this.yaw)*.4,1*this.scale,this.pos.z+Math.cos(this.yaw)*.4,this.wstate);t&&(e.vel.set((Math.random()-.5)*4,2.5,(Math.random()-.5)*4),e.spin.set(8,0,6)),this.W.items.push(e),this.giveWeapon(null)}get w(){return Se(this.weapon)}lateralOf(t){let e=t.x-this.pos.x,i=t.z-this.pos.z;return e*Math.cos(this.yaw)-i*Math.sin(this.yaw)}partWorld(t,e){return this.pivots[t].getWorldPosition(e),t==="head"?e.y+=.2*this.scale:t!=="torso"?e.y-=.35*this.scale:e.y+=.35*this.scale,e}get crawling(){return this.missing.legL&&this.missing.legR}provoke(t,e=0){if(!(!this.calm||!this.alive)){if(e>0){(this.joinT==null||e<this.joinT)&&(this.joinT=e,this.joinBy=t);return}this.calm=!1,this.joinT=null,this.wander=null,this.target=t&&t!==this&&(t.isPlayer,t.alive)?t:this.pickTarget(),this.cool=Math.min(this.cool,.3+Math.random()*.5),this.W.onBrawl(this)}}calmStep(t){if(this.joinT!=null)return this.joinT-=t,this.joinT<=0&&this.provoke(this.joinBy),[0,0];if(this.activity==="dance")return this.yaw+=Math.sin(this.walk*.3)*t*.6,[0,0];if(this.wander){let e=this.wander.x-this.pos.x,i=this.wander.z-this.pos.z,s=Math.hypot(e,i);return s<.3?(this.wander=null,this.idleT=3+Math.random()*7,[0,0]):(this.yaw+=(Math.atan2(e,i)-this.yaw+Math.PI*3)%(Math.PI*2)-Math.PI>0?t*3:-t*3,[e/s*.32,i/s*.32])}if(this.idleT-=t,this.idleT<=0&&this.activity!=="music"){let e=Math.random()*Math.PI*2,i=.8+Math.random()*2.2;this.wander={x:this.home.x+Math.cos(e)*i,z:this.home.z+Math.sin(e)*i},(Math.abs(this.wander.x)>this.W.L.w/2-.6||Math.abs(this.wander.z)>this.W.L.d/2-.6)&&(this.wander=null),this.idleT=2+Math.random()*5}return[0,0]}takeHit(t,e,i,s,r,a){let o=this.W;if(this.calm&&this.alive&&(this.provoke(r),o.alarm(this.pos,r)),this.lastHitBy=r||this.lastHitBy,r&&!r.isPlayer&&r!==this&&r.alive&&Math.random()<.85?this.target=r:r&&r.isPlayer&&(this.target=r),this.alive&&this.state==="block"&&r){let u=Math.sin(this.yaw),d=Math.cos(this.yaw),p=(r.pos.x-this.pos.x)*u+(r.pos.z-this.pos.z)*d>0;if(p&&!(a&&(a.heavy||a.charged))){o.audio.clang(),this.hp-=e.dmg*.2,this.state="stagger",this.t=.25,this.vel.x+=i.x*s*.3,this.vel.z+=i.z*s*.3,r.isPlayer&&o.feed("\u{1F6E1} BLOCKED");return}p&&r.isPlayer&&o.feed("\u{1F4A2} GUARD BREAK")}let l=this.partWorld(this.missing[t]?"torso":t,Kr);o.fx.burst(l.x,l.y,l.z,Math.max(3,(e.gibs>>1)*o.gore),null,i.x,i.z,1),Math.random()<.6&&o.fx.pool(this.pos.x+i.x*.6,this.pos.z+i.z*.6,.3+e.dmg/80);let c=this.carve(this.missing[t]?"torso":t,i,e);this.bleeds.length<6&&e.dmg>8&&this.bleeds.push({part:this.missing[t]?"torso":t,t:5+Math.random()*7,rate:3+e.dmg/8,acc:0}),c&&t!=="torso"&&!this.missing[t]&&(e.sever=!0,e.crush=!0);let h=t==="head"?1.7:t==="torso"?1:.45;if(this.hp-=e.dmg*h,t!=="torso"&&(this.partHp[t]-=e.dmg,(this.partHp[t]<=0||e.sever)&&this.sever(t,i,e.crush)),!this.alive&&this.corpse){e.crush||o.rage&&e.dmg>20||t==="torso"&&e.dmg>45&&Math.random()<.5?this.obliterate(i):(this.vel.x+=i.x*s*.5,this.vel.z+=i.z*s*.5);return}this.alive&&this.hp<=0?this.die(i,e.crush||a&&a.crush||o.rage,r):this.alive&&(s>6.5||a&&a.heavy&&Math.random()<.6?this.knockDown(i,s):(this.state="stagger",this.t=.28+s*.03,this.vel.x+=i.x*s,this.vel.z+=i.z*s),this.weapon&&Math.random()<.12*(s/4)&&this.dropWeapon(!0))}carve(t,e,i){if(this.missing[t]||this.gone)return!1;let s=this.person,r=this.W;!s.owned[t]&&!s.voxOwned?.[t]&&(s.vox[t]=new Map(s.vox[t]),(s.voxOwned||={})[t]=!0);let a=this.pivots[t].children[0],o=this.partWorld(t,new D),l=(t==="head"?.2:t==="torso"?.13:.1)*this.scale;o.x-=e.x*l,o.z-=e.z*l,o.y+=(Math.random()-.5)*(t==="head"?.25:.35)*this.scale,a.updateMatrixWorld(!0);let c=a.worldToLocal(o.clone()),h=Go[t],u=c.x/qt-h[0],d=c.y/qt-h[1],p=c.z/qt-h[2],g=Math.min(3.4,(1+i.dmg/22)*(i.crush?1.5:1)*(r.gore>1?1.2:1)),x=Mh(s.vox[t],u,d,p,g);if(!x.length)return!1;Wo(s,t);let m=new D,f=Math.min(x.length,Math.round(28*r.gore));for(let _=0;_<f;_++){let[A,C,T,R]=x[_];m.set((A+.5+h[0])*qt,(C+.5+h[1])*qt,(T+.5+h[2])*qt),a.localToWorld(m);let N=1.5+Math.random()*3;r.fx.gib(m.x,m.y,m.z,e.x*N+(Math.random()-.5)*2,1+Math.random()*3,e.z*N+(Math.random()-.5)*2,R,!1)}let b=s.vox[t].size/this.voxStart[t];return t==="head"&&b<.45&&this.alive?(this.sever("head",e,!0),!0):t==="torso"&&b<.4?(this.alive?(this.hp=0,this.die(e,!0,this.lastHitBy)):this.obliterate(e),!0):b<.35}bleedStep(t){let e=this.W;for(let i=this.bleeds.length-1;i>=0;i--){let s=this.bleeds[i];if(s.t-=t,s.t<=0||s.part&&this.missing[s.part]){this.bleeds.splice(i,1);continue}if(s.acc+=t*s.rate*e.gore*Math.min(1,s.t/3),!(s.acc<1))if(s.stump){let r=this.group.localToWorld(Kr.set(s.stump[0]*qt,s.stump[1]*qt,s.stump[2]*qt)),a=vi.set(s.out[0],s.out[1],s.out[2]).applyQuaternion(this.group.quaternion),o=Math.max(0,Math.sin(e.stats.t*(this.alive?11:6)+this.id))*Math.min(1,s.t/4);for(;s.acc>=1;){s.acc-=1;let l=.6+o*3.2;e.fx.drop(r.x,r.y,r.z,a.x*l+(Math.random()-.5)*.5+this.vel.x,a.y*l+.6+o*1.2,a.z*l+(Math.random()-.5)*.5+this.vel.z)}}else{let r=this.partWorld(s.part,Kr);for(;s.acc>=1;)s.acc-=1,e.fx.drop(r.x+(Math.random()-.5)*.2,r.y-Math.random()*.2,r.z+(Math.random()-.5)*.2,this.vel.x*.4,0,this.vel.z*.4)}}}ignite(t){this.gone||this.burn>0||this.charred||(this.burn=5+Math.random()*3,this.burnBy=t||this.burnBy,this.alive&&(this.provoke(t),this.lastHitBy=t||this.lastHitBy))}burnStep(t){let e=this.W;if(this.burn-=t,e.fx.flame(this.pos.x,this.pos.y+(this.alive&&this.state!=="down"?.5+Math.random()*1.1:.2)*this.scale,this.pos.z,2,.25),this.burnT-=t,this.burnT<=0){this.burnT=.3;for(let i of e.fighters)i!==this&&!i.gone&&i.burn<=0&&i.pos.distanceToSquared(this.pos)<.9&&Math.random()<.3&&i.ignite(this.burnBy)}this.alive?(this.hp-=t*11,this.fleeT=Math.max(this.fleeT,.4),this.hp<=0&&(this.char(),e.ctx={burned:!0},this.die(vi.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),!1,this.burnBy),e.ctx=null)):this.burn<=0&&this.char()}char(){if(this.charred||this.gone)return;this.charred=!0;let t=this.person;for(let e in t.vox){if(this.missing[e])continue;let i=new Map;for(let[s]of t.vox[e])i.set(s,Ig[Math.random()*3|0]);t.vox[e]=i,(t.voxOwned||={})[e]=!0,Wo(t,e)}}wound(t){if(this.wounds>40||this.missing[t])return;this.wounds++;let e=this.pivots[t],i=e.children[0],s=new te(this.W.woundGeo,this.W.woundMat),r=t==="head"?[6,6,6,-3,0,-3]:t==="torso"?[8,9,4,-4,0,-2]:t.startsWith("arm")?[3,9,3,-1.5,-9,-1.5]:[4,10,4,-2,-10,-2],a=Math.random()*3|0,o=[r[3]+Math.random()*r[0],r[4]+Math.random()*r[1],r[5]+Math.random()*r[2]];a===0?o[2]=r[5]+r[2]-.4:a===1?o[0]=Math.random()<.5?r[3]+.4:r[3]+r[0]-.4:o[2]=r[5]+.4,s.position.set(o[0]*qt,o[1]*qt,o[2]*qt),s.scale.setScalar(.8+Math.random()*1.2),i.add(s)}sever(t,e,i){if(this.missing[t])return;let s=this.W;this.missing[t]=!0,s.stats.limbs++;let r=this.pivots[t],a=this.partWorld(t,new D);if(t==="armR"&&this.weapon&&this.dropWeapon(!0),i)r.visible=!1,s.fx.burst(a.x,a.y,a.z,40,this.palette[t],e.x,e.z,1.4);else{let c=new D(e.x*4+(Math.random()-.5)*3,3+Math.random()*3,e.z*4+(Math.random()-.5)*3),h=new D((Math.random()-.5)*16,(Math.random()-.5)*8,(Math.random()-.5)*16);s.fx.addDebris(r,c,h,t==="head"?.22*this.scale:.14*this.scale,!0,this.palette[t]),s.fx.burst(a.x,a.y,a.z,26,this.palette[t],e.x,e.z,1.2)}let o=new te(s.stumpGeo,s.woundMat),l={head:[0,19,0],armL:[-5.5,18.6,0],armR:[5.5,18.6,0],legL:[-2,10,0],legR:[2,10,0]}[t];if(o.position.set(l[0]*qt,l[1]*qt,l[2]*qt),this.group.add(o),this.bleeds=this.bleeds.filter(c=>c.part!==t),this.bleeds.push({stump:l,out:{head:[0,1,0],armL:[-1,.3,0],armR:[1,.3,0],legL:[-.3,-.2,.4],legR:[.3,-.2,.4]}[t],t:9+Math.random()*5,rate:t==="head"?26:16,acc:0}),s.fx.pool(this.pos.x,this.pos.z,.6),t==="head"){s.stats.heads++,s.announce(this.alive?i?"HEAD POPPED":"DECAPITATED":""),this.alive&&(this.hp=0,this.die(e,!1,this.lastHitBy));for(let c=0;c<30;c++)s.fx.gib(a.x,a.y-.1,a.z,(Math.random()-.5)*2,3+Math.random()*4,(Math.random()-.5)*2,11538448,!0)}}knockDown(t,e){this.state="down",this.down=1.4+Math.random()*.8,this.t=0,this.vel.set(t.x*e,2.5+e*.25,t.z*e),this.flying=e,this.spinY=(Math.random()-.5)*6,this.weapon&&Math.random()<.5&&this.dropWeapon(!0)}obliterate(t){this.gone||(this.alive=!0,this.noCredit=!0,this.die(t,!0,null))}die(t,e,i){let s=this.W;if(this.alive){if(s.mut.explosive&&i&&i.isPlayer&&(e=!0),this.alive=!1,this.state="dead",this.noCredit||s.onKill(this,i,e),this.weapon&&this.dropWeapon(!0),e){for(let r of["head","torso",...Ah]){if(this.missing[r])continue;this.missing[r]=!0;let a=this.pivots[r],o=this.partWorld(r,new D),l=new D(t.x*6+(Math.random()-.5)*7,3+Math.random()*5,t.z*6+(Math.random()-.5)*7);s.fx.addDebris(a,l,new D((Math.random()-.5)*20,(Math.random()-.5)*10,(Math.random()-.5)*20),(r==="torso"?.25:.15)*this.scale,!0,this.palette[r]),s.fx.burst(o.x,o.y,o.z,22,this.palette[r],t.x,t.z,1.8)}for(let r=0;r<6;r++)s.fx.pool(this.pos.x+(Math.random()-.5)*2.5,this.pos.z+(Math.random()-.5)*2.5,.6+Math.random()*.8);s.scene.remove(this.group),this.corpse=!1,this.gone=!0;return}this.corpse=!0,this.vel.x+=t.x*4,this.vel.z+=t.z*4,this.vel.y=Math.max(this.vel.y,1.5),this.fallDir=Math.random()<.5?1:-1,this.spinY=(Math.random()-.5)*4,s.fx.pool(this.pos.x+t.x*.5,this.pos.z+t.z*.5,.5,1.7+Math.random()*1.1)}}pickTarget(){let t=this.W,e=this;if(this.calm)return null;let i=t.fighters.filter(c=>c!==e&&c.alive),s=t.fighters.filter(c=>c!==e&&c.alive&&!c.calm&&c.target===t.player).length,r=t.L.waves?4:3;if(t.player.alive&&(this.boss||!i.length||s<r&&Math.random()<this.aggro))return t.player;let a=i;if(this.team){let c=i.filter(h=>h.team&&h.team!==this.team);c.length&&Math.random()<.8&&(a=c)}let o=a.filter(c=>!c.calm);o.length&&Math.random()<.8&&(a=o);let l=a.map(c=>[c.pos.distanceToSquared(this.pos),c]).sort((c,h)=>c[0]-h[0]).slice(0,3);return l.length?l[Math.random()*l.length|0][1]:t.player.alive?t.player:null}update(t){let e=this.W;if(this.gone)return;this.cool-=t,this.t-=t,this.think-=t;let i=this.pos.y<=Ve(e.L,this.pos.x,this.pos.z,this.pos.y+.3)+.01,s=0,r=0;if(this.alive)if(this.state==="down")this.down-=t,this.tilt=Math.min(1,this.tilt+t*5),this.down<=0&&i&&(this.state="idle");else if(this.calm){this.tilt=Math.max(0,this.tilt-t*3);let h=this.calmStep(t);s=h[0],r=h[1]}else{if(this.tilt=Math.max(0,this.tilt-t*3),this.think<=0&&(this.think=.35+Math.random()*.4,(!this.target||!this.target.alive||Math.random()<.08)&&(this.target=this.pickTarget()),this.goal=null,!this.weapon&&!this.missing.armR&&Math.random()<.6)){let h=null,u=25;for(let d of e.items){if(!d.alive||d.held||!d.resting||d.fuse!=null)continue;let p=d.pos.distanceToSquared(this.pos);p<u&&d.pos.y<1.3&&(u=p,h=d)}this.goal=h}if(this.coward&&!this.boss&&this.hp<this.maxHp*.3&&this.fleeT<=0&&!this.fled&&(this.fled=!0,this.fleeT=3+Math.random()*3,Math.random()<.5&&this.dropWeapon(!0)),this.fleeT>0&&(this.fleeT-=t),this.state==="block"?(this.t-=0,this.t<=0&&(this.state="idle")):this.state==="idle"&&e.playerThreat&&this.target===e.player&&!this.boss&&Math.random()<t*1.5&&this.pos.distanceTo(e.player.pos)<3&&!this.missing.armL&&!this.missing.armR&&(this.state="block",this.t=.6+Math.random()*.5),this.boss&&this.state==="idle"&&(this.slamCd-=t)<=0&&this.target&&this.pos.distanceTo(this.target.pos)<4.5&&(this.state="slam",this.t=.9,this.slamCd=6+Math.random()*3,e.audio.rage(),this.target.isPlayer&&e.feed("\u26A0 "+this.name+" is winding up a slam \u2014 JUMP or hit him!")),this.state==="slam")this.t<=0&&(e.slam(this),this.state="recover",this.t=.8);else if(this.state==="stagger"||this.state==="block")this.t<=0&&(this.state="idle");else if(this.state==="windup")this.faceTarget(t,10),this.t<=0&&this.strike();else if(this.state==="recover")this.t<=0&&(this.state="idle");else{let h=this.goal&&this.goal.alive&&!this.goal.held?this.goal:this.target;if(this.fleeT>0&&h){let u=this.pos.x-h.pos.x,d=this.pos.z-h.pos.z,p=Math.hypot(u,d)||1;s=u/p*1.3,r=d/p*1.3,this.yaw=Math.atan2(s,r)}else if(h){let u=h.pos.x-this.pos.x,d=h.pos.z-this.pos.z,p=Math.hypot(u,d)||1,g=this.w,x=this.weapon&&!this.missing.armR;if(h===this.goal)p<.8?(this.giveWeapon(h.id,h.state),h.held=!0,h.remove(),this.goal=null):(s=u/p,r=d/p);else if(x&&g.kind==="gun")p>11?(s=u/p,r=d/p):p<4?(s=-u/p,r=-d/p):(s=-d/p*.5,r=u/p*.5),this.cool<=0&&p<g.range&&(this.state="windup",this.t=.55+Math.random()*.4);else if(x&&(g.shatter||g.kind==="throw")&&p>3.5&&p<10&&this.cool<=0&&Math.random()<.02)this.state="windup",this.t=.45,this.throwing=!0;else{let m=(x?g.reach:1.4)+h.radius+.1;p>m*.85&&(s=u/p,r=d/p),p<m&&this.cool<=0&&(this.state="windup",this.t=(x?Math.min(.75,g.rate*.8):.42)+Math.random()*.2,this.throwing=!1)}this.faceTarget(t,6,h)}}}let a=this.crawling?.6:this.missing.legL||this.missing.legR?1.1:this.speed;if(this.alive&&this.state!=="down"&&i){let h=1-Math.exp(-10*t);this.vel.x+=(s*a-this.vel.x)*h,this.vel.z+=(r*a-this.vel.z)*h}else if(i){let h=Math.exp(-(this.corpse?5:3)*t);this.vel.x*=h,this.vel.z*=h}this.vel.y-=jr*t;let o=Math.hypot(this.vel.x,this.vel.z);this.pos.addScaledVector(this.vel,t);let l=this.collideWorld();if(l&&o>6&&(this.state==="down"||this.corpse)){if(e.fx.splat(l.x,this.pos.y+1+Math.random()*.6,l.z,l.nx,0,l.nz,.5+o*.06),e.audio.thud(.8),l.s&&e.damageSolid(l.s,o*7,vi.set(-l.nx,0,-l.nz)),this.alive){let h={dmg:Math.round(o*2.2),sever:!1,crush:!1,gibs:8};e.ctx={slam:!0},this.takeHit("torso",h,vi.set(-l.nx,0,-l.nz),0,this.lastHitBy,null),e.ctx=null}this.vel.x*=.3,this.vel.z*=.3}let c=Ve(e.L,this.pos.x,this.pos.z,this.pos.y+.3);if(this.pos.y<c&&(this.pos.y=c,this.vel.y<-6&&this.flying&&e.fx.pool(this.pos.x,this.pos.z,.6),this.vel.y=0,this.flying=0),this.state==="down"&&this.flying&&(this.yaw+=this.spinY*t),this.corpse&&(this.yaw+=this.spinY*t,this.spinY*=Math.exp(-3*t),this.tilt=Math.min(1,this.tilt+t*3.5)),this.bleeds.length&&this.bleedStep(t),this.burn>0&&this.burnStep(t),this.alive&&!this.gone){let h=(this.missing.armL?1:0)+(this.missing.armR?1:0)+(this.missing.legL?1:0)+(this.missing.legR?1:0);h&&(this.hp-=t*3*h,this.hp<=0&&(e.ctx={bled:!0},this.die(vi.set(0,0,0),!1,this.lastHitBy),e.ctx=null))}this.gone||(this.animate(t,Math.hypot(this.vel.x,this.vel.z)),this.sync())}faceTarget(t,e,i=this.target){if(!i)return;let r=Math.atan2(i.pos.x-this.pos.x,i.pos.z-this.pos.z)-this.yaw;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;this.yaw+=r*Math.min(1,e*t)}strike(){let t=this.W,e=this.target,i=this.w,s=this.weapon&&!this.missing.armR;if(this.state="recover",this.t=.25,this.cool=(s?i.rate:.6)+.35+Math.random()*.5,this.swing=.25,!e||!e.alive)return;let r=Math.sin(this.yaw),a=Math.cos(this.yaw);if(s&&this.throwing){this.throwing=!1;let u=new ei(t,this.weapon,this.pos.x+r*.5,1.6*this.scale,this.pos.z+a*.5,this.wstate),d=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z),p=d/14;u.vel.set((e.pos.x-this.pos.x)/p,.5*jr*p*.9,(e.pos.z-this.pos.z)/p),u.spin.set(12,0,4),u.thrown=!0,u.owner=this,this.weapon==="dynamite"&&(u.fuse=1.4),this.w.fire&&(u.lit=!0),t.items.push(u),this.giveWeapon(null);return}if(s&&i.kind==="gun"){let u=new D(this.pos.x+r*.4,1.45*this.scale,this.pos.z+a*.4),p=new D(e.pos.x,e.pos.y+(e.isPlayer?1.3:1.2*e.scale),e.pos.z).sub(u).normalize();t.shoot(u,p,i,this,.07),this.wstate.ammo--,this.wstate.ammo<=0&&this.dropWeapon(!0);return}let o=s?i.reach:1.4,l=[];for(let u of t.targets()){if(u===this||u.gone||!u.alive&&!u.corpse||u.isPlayer&&!u.alive)continue;let d=u.pos.x-this.pos.x,p=u.pos.z-this.pos.z,g=Math.hypot(d,p);g>o+u.radius+.25||g<.01||Math.abs(Math.atan2(r*p-a*d,r*d+a*p))>.9||l.push([u===e?-1:g,u,d/g,p/g])}if(!l.length){t.audio.whoosh();return}l.sort((u,d)=>u[0]-d[0]);let c=s?i:this.missing.armR&&this.missing.armL?{dmg:6,knock:3,sever:0,kind:"melee"}:Se("fists"),h=c.dmg*(this.boss?1.4:.75);for(let[,u,d,p]of l.slice(0,c.heavy?2:1)){let g=vi.set(d,0,p);if(u.isPlayer)t.hurtPlayer(h,g,(c.knock||2)*(this.boss?1.5:1),this);else{let x=Math.random(),m=x<.2?"head":x<.6?"torso":Ah[Math.random()*4|0];t.hit(u,u.missing[m]?"torso":m,c,g,this,{})}}if(s){let u=Yr(this.weapon,this.wstate);if(u!==this.weapon){if(i.shatter){let d=this.partWorld("armR",Kr);t.fx.glass(d.x,d.y,d.z),t.audio.glass()}this.giveWeapon(u)}}}collideWorld(){let t=this.W.L,e=this.radius,i=null,s=t.w/2-e,r=t.d/2-e;this.pos.x>s&&(this.pos.x=s,i={x:t.w/2,z:this.pos.z,nx:-1,nz:0},this.vel.x=Math.min(0,this.vel.x)*-.3),this.pos.x<-s&&(this.pos.x=-s,i={x:-t.w/2,z:this.pos.z,nx:1,nz:0},this.vel.x=Math.max(0,this.vel.x)*-.3),this.pos.z>r&&(this.pos.z=r,i={x:this.pos.x,z:t.d/2,nx:0,nz:-1},this.vel.z=Math.min(0,this.vel.z)*-.3),this.pos.z<-r&&(this.pos.z=-r,i={x:this.pos.x,z:-t.d/2,nx:0,nz:1},this.vel.z=Math.max(0,this.vel.z)*-.3);for(let a of t.solids){if(a.y>this.pos.y+1.2||a.y+a.h<=this.pos.y+.35)continue;let o=Math.max(a.x-a.w/2,Math.min(this.pos.x,a.x+a.w/2)),l=Math.max(a.z-a.d/2,Math.min(this.pos.z,a.z+a.d/2)),c=this.pos.x-o,h=this.pos.z-l,u=c*c+h*h;if(u<e*e){let d=Math.sqrt(u)||.001,p=u?c/d:1,g=u?h/d:0;this.pos.x=o+p*e,this.pos.z=l+g*e;let x=this.vel.x*p+this.vel.z*g;x<0&&(this.vel.x-=x*p*1.3,this.vel.z-=x*g*1.3),i||(i={x:o,z:l,nx:p,nz:g,s:a})}}return i}animate(t,e){let i=this.pivots;this.walk+=e*t*3.2;let s=this.alive&&this.state!=="down"?Math.sin(this.walk)*Math.min(1,e/2.5)*.7:0;this.missing.legL||(i.legL.rotation.x=s),this.missing.legR||(i.legR.rotation.x=-s),this.missing.armL||(i.armL.rotation.x=-s*.8+(this.state==="stagger"?-1:0));let r=s*.8;this.state==="windup"&&(r=this.w.kind==="gun"?-1.5:-2.6),this.swing>0&&(this.swing-=t,r=-2.6+(1-this.swing/.25)*3.3),this.alive&&this.w.kind==="gun"&&this.state!=="down"&&!this.calm&&(r=Math.min(r,-1.4));let a=0;if(this.alive&&this.calm){let l=performance.now()/1e3+this.id;this.activity==="dance"?(a=Math.abs(Math.sin(l*4))*.06,r=-2.4+Math.sin(l*4)*.5,this.missing.armL||(i.armL.rotation.x=-2.4-Math.sin(l*4)*.5),i.legL.rotation.x=Math.sin(l*4)*.25,i.legR.rotation.x=-Math.sin(l*4)*.25):this.activity==="music"?(r=-.9+Math.sin(l*8)*.25,this.missing.armL||(i.armL.rotation.x=-.9-Math.sin(l*8)*.25)):this.activity==="drink"&&Math.sin(l*.7)>.75&&(r=-2.3)}this.danceY=a,this.missing.armR||(i.armR.rotation.x=r),this.state==="slam"&&this.alive&&(this.missing.armR||(i.armR.rotation.x=-3),this.missing.armL||(i.armL.rotation.x=-3)),this.state==="block"&&this.alive?(this.missing.armR||i.armR.rotation.set(-1.9,0,-.5),this.missing.armL||i.armL.rotation.set(-1.9,0,.5)):(this.missing.armR||(i.armR.rotation.z=0),this.missing.armL||(i.armL.rotation.z=0)),this.fleeT>0&&this.alive&&!this.missing.armL&&(i.armL.rotation.x=-2.8,this.missing.armR||(i.armR.rotation.x=-2.8)),i.torso.rotation.x=this.state==="stagger"?-.3:this.state==="windup"?-.15:0,i.head.rotation.x=i.torso.rotation.x;let o=this.crawling?-.7:0;for(let l of["torso","head","armL","armR"])i[l].position.y=(l==="torso"?10:l==="head"?19:18.6)*qt+o;this.crawling&&(i.torso.rotation.x=1.2)}sync(){if(this.gone)return;let t=this.group;if(t.position.copy(this.pos),this.danceY&&(t.position.y+=this.danceY),t.rotation.set(0,this.yaw,0),this.tilt>0){let e=this.tilt*Math.PI/2;t.rotateX(this.corpse?-e*.98*(this.fallDir||1):-e),t.position.y+=Math.sin(e)*.18*this.scale}}};function Ch(){let n=null,t=null,e=null,i=null;function s(){if(n){n.state==="suspended"&&n.resume();return}try{n=new(window.AudioContext||window.webkitAudioContext)}catch{return}t=n.createGain(),t.gain.value=.55,t.connect(n.destination),e=n.createBuffer(1,n.sampleRate,n.sampleRate);let o=e.getChannelData(0);for(let l=0;l<o.length;l++)o[l]=Math.random()*2-1}function r(o,l,c,h,u,d=0,p){if(!n)return;let g=n.currentTime+d,x=n.createBufferSource();x.buffer=e,x.playbackRate.value=.7+Math.random()*.6;let m=n.createBiquadFilter();m.type=l,m.frequency.setValueAtTime(c,g),m.Q.value=h,p&&m.frequency.exponentialRampToValueAtTime(p,g+o);let f=n.createGain();f.gain.setValueAtTime(u,g),f.gain.exponentialRampToValueAtTime(.001,g+o),x.connect(m),m.connect(f),f.connect(t),x.start(g,Math.random()*.5),x.stop(g+o+.02)}function a(o,l,c,h,u=0,d){if(!n)return;let p=n.currentTime+u,g=n.createOscillator();g.type=c,g.frequency.setValueAtTime(o,p),d&&g.frequency.exponentialRampToValueAtTime(d,p+l);let x=n.createGain();x.gain.setValueAtTime(h,p),x.gain.exponentialRampToValueAtTime(.001,p+l),g.connect(x),x.connect(t),g.start(p),g.stop(p+l+.02)}return{unlock:s,thud(o=1){r(.12,"lowpass",500+Math.random()*300,1,.9*o),a(110+Math.random()*40,.12,"sine",.6*o,0,50)},squish(){r(.18,"bandpass",900,2,.6,0,300),r(.12,"lowpass",300,1,.5,.05)},slash(){r(.14,"highpass",2500,1,.5,0,6e3),r(.16,"bandpass",700,2,.5,.03,250)},whoosh(){r(.18,"bandpass",600,1.5,.25,0,2e3)},glass(){r(.25,"highpass",4e3,1,.6);for(let o=0;o<4;o++)a(2500+Math.random()*3e3,.12,"triangle",.08,o*.03)},clang(){a(900,.25,"square",.12),a(1340,.2,"triangle",.12),r(.06,"highpass",3e3,1,.3)},shot(o){r(o?.45:.3,"lowpass",o?1200:2200,1,1.1,0,200),a(o?70:120,.2,"sine",.7,0,40)},click(){a(1800,.03,"square",.1)},boom(){r(1.1,"lowpass",900,.7,1.4,0,60),a(55,.9,"sine",1,0,25)},crunch(){r(.3,"lowpass",1400,1,.9,0,200),r(.2,"bandpass",400,3,.7,.04),a(70,.25,"sine",.8,0,35)},zap(){r(.5,"highpass",1800,1,1.2,0,300),a(1400,.25,"sawtooth",.4,0,90),r(.9,"lowpass",500,.7,.9,.05,60)},gulp(){for(let o=0;o<3;o++)a(180-o*20,.09,"sine",.3,o*.14,90)},hurt(){a(220,.15,"sawtooth",.15,0,120)},rage(){a(80,1.2,"sawtooth",.35,0,160),r(.8,"bandpass",300,1,.5,0,1200)},bell(){for(let o=0;o<3;o++)a(660,.6,"triangle",.25,o*.25)},music(o,l="rock"){if(!n||(this._mus&&(clearInterval(this._mus),this._mus=null),!o))return;let c=l==="disco"?120:l==="piano"?100:96,h=60/c,u=l==="disco"?[55,55,82.4,55,73.4,55,82.4,98]:l==="piano"?[130.8,164.8,196,164.8,146.8,174.6,220,174.6]:[41.2,41.2,55,41.2,49,49,55,61.7],d=0,p=()=>{let g=d++%8;l!=="piano"&&(a(60,.18,"sine",g%2===0?.5:.15,0,35),g%4===2&&r(.12,"bandpass",1800,1,.18),r(.03,"highpass",7e3,1,l==="disco"?.12:.05)),a(u[g],h*.9,l==="piano"?"triangle":"sawtooth",l==="piano"?.12:.07),l==="piano"&&g%2===0&&a(u[g]*2,h*.5,"triangle",.06,h*.25)};p(),this._mus=setInterval(p,h*500)},crowd(o){if(n)if(o&&!i){let l=n.createBufferSource();l.buffer=e,l.loop=!0;let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=420,c.Q.value=.8;let h=n.createGain();h.gain.value=.06;let u=n.createOscillator();u.frequency.value=.3;let d=n.createGain();d.gain.value=.03,u.connect(d),d.connect(h.gain),u.start(),l.connect(c),c.connect(h),h.connect(t),l.start(),i={s:l,lfo:u}}else!o&&i&&(i.s.stop(),i.lfo.stop(),i=null)}}}var yt=n=>document.getElementById(n),Ze="ontouchstart"in window||(navigator.maxTouchPoints||0)>0;Ze&&document.body.classList.add("touch");var Ph="citydriver_save_v1",ea="citydriver_brawl_best",Oh="citypainter_settings",ee=Object.assign({sens:1,fov:78,gore:1,quality:Ze?0:1},(()=>{try{return JSON.parse(localStorage.getItem(Oh))||{}}catch{return{}}})());ee.mut||(ee.mut={});var zh=[["bigheads","\u{1F388} BIG HEADS",1],["lowgrav","\u{1F319} LOW GRAVITY",1],["explosive","\u{1F4A5} EXPLODING KILLS",.6],["onepunch","\u{1F44A} ONE PUNCH",.3],["hardcore","\u2620 HARDCORE",2]],Fh=()=>zh.reduce((n,[t,,e])=>ee.mut[t]?n*e:n,1),na=18;function Ds(){try{localStorage.setItem(Oh,JSON.stringify(ee))}catch{}}var Bh=1.62,Jo=.34,Je=new Es({antialias:!Ze,powerPreference:"high-performance"});Je.setPixelRatio(Math.min(window.devicePixelRatio||1,ee.quality?Ze?1.5:1.75:1));Je.shadowMap.enabled=!0;Je.shadowMap.type=Hr;Je.outputColorSpace=_e;yt("game").appendChild(Je.domElement);var Ae=new De(ee.fov,16/9,.05,120),ni=null,ra=rh((n,t)=>{Je.setSize(n,t,!1),Je.domElement.style.width=n+"px",Je.domElement.style.height=t+"px",Ae.aspect=n/t,Ae.updateProjectionMatrix()});ra.refresh();var zt=Ch(),P=null,$o=null,cn=!1,On=!1,Ko="biker",v={isPlayer:!0,pos:new D,vel:new D,yaw:0,pitch:0,hp:100,alive:!0,radius:Jo,height:1.8,scale:1,missing:{},weapon:null,wstate:{used:0},cool:0,kickCool:0,block:!1,rage:0,raging:0,punchSide:0,onGround:!0,pending:null,dashCd:0,dashT:0,iframes:0,bloodSteps:0,stepAcc:0,stepSide:1,fireT:0},vt={dash:!1,shock:!1,smite:!1,mx:0,my:0,attack:!1,attackHeld:!1,block:!1,kick:!1,grab:!1,throw:!1,jump:!1,rage:!1,sprint:!1};function Hh(n){let t=lh(n);ni=new Dr,na=ee.mut.lowgrav?6.5:18,Rh(na),Sh(na);for(let i of[dt.hR,dt.hL])for(let s of[...i.children])s.userData.blood&&i.remove(s);dt.drip=0,$o=dh(ni,t,ee.quality),Je.shadowMap.enabled=!!ee.quality,ni.add(Ae);let e=Eh(ni,t);e.gore=ee.gore,P={L:t,scene:ni,fx:e,audio:zt,player:v,fighters:[],items:[],rage:!1,stats:{kills:0,limbs:0,heads:0,exploded:0,t:0,wave:0,spawned:0,score:0,bestCombo:0,parries:0},gore:ee.gore,playerThreat:!1,ctx:null,combo:{n:0,t:9},feed:en,woundGeo:new ge(qt*1.05,qt*1.05,qt*1.05),stumpGeo:new ge(qt*3.2,qt*1.2,qt*3.2),woundMat:new we({color:10094600}),spawnPts:ch(t,18),spawnT:1.2,bossSpawned:!1,boss:null,done:!1,hitstop:0,shake:0,targets(){return this.fighters.concat([v])},hit:zn,hurtPlayer:aa,shoot:Zh,explode:Qo,onKill:Hg,announce:xn,alarm:os,onBrawl:Vh,brawl:!1,spreadT:1,mut:ee.mut,mult:Fh(),fires:(t.fires||[]).map(i=>({x:i[0],z:i[1],y:Ve(t,i[0],i[1],2),r:i[2],t:1/0,tick:0,by:null})),slowmo:0,ignite:jo,slam:kg,damageSolid:bi};for(let i of t.pickups){let s=new ei(P,i.w,i.x,i.y||0,i.z);P.items.push(s)}if(v.pos.set(t.player[0],0,t.player[1]),v.vel.set(0,0,0),v.yaw=t.player[2],v.pitch=0,v.hp=100,v.alive=!0,v.weapon=null,v.wstate={used:0},v.rage=0,v.raging=0,v.cool=0,v.pending=null,v.dashT=0,v.iframes=0,v.bloodSteps=0,v.charge=null,ls(null),t.waves&&(P.stats.wave=0,P.brawl=!0,Gh()),P.remaining=t.waves?0:t.enemies.count,!t.waves){let i=Math.min(P.remaining,t.enemies.maxActive+4);for(let s=0;s<i;s++){let r=Ug(t,3.5),a=t.id==="disco"&&Math.hypot(r[0],r[1])<6?"dance":Math.random()<.5?"drink":"idle";sa(!1,r,a)}if(t.musician){let s=P.fighters[0];s&&(s.pos.set(t.musician[0],0,t.musician[1]),s.home.copy(s.pos),s.activity="music",s.yaw=t.musician[2]||0,s.role="music",P.musician=s,P.musicOn=!0)}}}function Ug(n,t){for(let e=0;e<60;e++){let i=(Math.random()-.5)*(n.w-2.4),s=(Math.random()-.5)*(n.d-2.4);if(!Fo(n,i,s,.55)&&!(Math.hypot(i-n.player[0],s-n.player[1])<t)&&!(P&&P.fighters.some(r=>Math.hypot(r.pos.x-i,r.pos.z-s)<1)))return[i,s]}return P.spawnPts[Math.random()*P.spawnPts.length|0]}function os(n,t,e=7){for(let i of P.fighters){if(!i.calm||!i.alive)continue;let s=Math.hypot(i.pos.x-n.x,i.pos.z-n.z);s<e&&i.provoke(Math.random()<(s<2.5?.45:.2)?t:null,.25+Math.random()*1.4+s*.08)}Vh()}function Vh(n){P.brawl||(P.brawl=!0,P.spawnT=3,xn("BAR FIGHT!",1.4),zt.bell())}var Yo=Math.random;function sa(n,t,e){let i=P.L,s=t||null;for(let c=0;c<10&&!s;c++){let h=P.spawnPts[Math.random()*P.spawnPts.length|0];if(Math.hypot(h[0]-v.pos.x,h[1]-v.pos.z)>(n?5:6)){s=h;break}}s||(s=P.spawnPts[0]);let r=qr(i.enemies.outfits,Yo),a=hh(i.enemies.weapons,Yo),o=!e,l=new Is(P,r,a==="fists"?null:a,s[0],s[1],{hp:i.waves?1+P.stats.wave*.06:1,hostile:o,activity:e});return l.yaw=o?Math.atan2(v.pos.x-l.pos.x,v.pos.z-l.pos.z):Math.random()*6.28,P.fighters.push(l),P.stats.spawned++,i.waves||P.remaining--,l}function Lh(){let n=P.L,t=n.boss,e=P.spawnPts.reduce((s,r)=>Math.hypot(r[0]-v.pos.x,r[1]-v.pos.z)>Math.hypot(s[0]-v.pos.x,s[1]-v.pos.z)?r:s),i=new Is(P,qr(t.outfit,Yo),t.weapon,e[0],e[1],{scale:t.scale,hp:t.hp,boss:!0,name:t.name,aggro:1,hostile:!0});P.fighters.push(i),P.boss=i,P.bossSpawned=!0,xn(t.name+"!",1.8),zt.bell()}function Gh(){P.stats.wave++,P.waveLeft=3+P.stats.wave*2,P.L.enemies.maxActive=Math.min(11,4+P.stats.wave),P.bossWave=P.stats.wave%5===0,P.bossSpawned=!1,xn("WAVE "+P.stats.wave,1.4),zt.bell()}function jo(n,t,e,i){P.fires.push({x:n.x,z:n.z,y:Ve(P.L,n.x,n.z,n.y+.3),r:t,t:e,tick:0,by:i}),P.fires.length>10&&P.fires.splice(P.fires.findIndex(s=>isFinite(s.t)),1),os(n,i,8)}function Ng(n){for(let t=P.fires.length-1;t>=0;t--){let e=P.fires[t];if(e.t-=n,e.t<=0){P.fires.splice(t,1);continue}let i=Math.ceil(e.r*2.2*Math.min(1,e.t/1.5));for(let s=0;s<i;s++){let r=Math.random()*6.28,a=Math.sqrt(Math.random())*e.r;P.fx.flame(e.x+Math.cos(r)*a,e.y+.05,e.z+Math.sin(r)*a,1,.05)}if(e.tick-=n,!(e.tick>0)){e.tick=.25;for(let s of P.fighters)!s.gone&&s.burn<=0&&Math.abs(s.pos.y-e.y)<1&&Math.hypot(s.pos.x-e.x,s.pos.z-e.z)<e.r+.2&&s.ignite(e.by||s.lastHitBy);v.alive&&Math.abs(v.pos.y-e.y)<.8&&Math.hypot(v.pos.x-e.x,v.pos.z-e.z)<e.r&&(v.hp-=5*(P.mut.hardcore?2:1),eu(.35),zt.hurt(),nu("\u{1F525} You're standing in fire!"),v.hp<=0&&(v.hp=0,tu(null)))}}}function bi(n,t,e,i){if(!n||!n.hp||n.dead)return;if(n.hp-=t,P.fx.chunks(n.x,n.y+n.h*.5,n.z,n.w*.6,n.h*.3,n.d*.6,n.c,5),n.hp>0){zt.thud(.9);return}n.dead=!0;let s=P.L.solids.indexOf(n);if(s>=0&&P.L.solids.splice(s,1),n.mesh&&n.mesh.parent&&n.mesh.parent.remove(n.mesh),P.fx.chunks(n.x,n.y,n.z,n.w,n.h,n.d,n.c,34),zt.crunch(),P.shake=Math.max(P.shake,.2),i===v&&Ns(25,"SMASHED"),n.explosive){let r=new D(n.x,n.y+.3,n.z);Qo(r,4.8,100,i||v),jo(r,1.6,4,i||v)}}function Wh(n,t,e,i){for(let s=0;s<60;s++){let r=s/60*6.28;P.fx.flame(n+Math.cos(r)*.6,t+.2,e+Math.sin(r)*.6,1,.1,1)}for(let s=0;s<24;s++){let r=Math.random()*6.28;P.fx.gib(n+Math.cos(r)*i*.4,t+.1,e+Math.sin(r)*i*.4,Math.cos(r)*5,2+Math.random()*3,Math.sin(r)*5,9079424,!1,.8)}}function kg(n){zt.boom(),P.shake=Math.max(P.shake,.6),Wh(n.pos.x,n.pos.y,n.pos.z,4.2);for(let s of P.fighters){if(s===n||s.gone||!s.alive)continue;let r=s.pos.x-n.pos.x,a=s.pos.z-n.pos.z,o=Math.hypot(r,a)||1;o<4.2&&(s.lastHitBy=n,s.provoke(n),zn(s,"torso",{dmg:22,knock:11,sever:0,kind:"melee",heavy:!0},new D(r/o,0,a/o),n,{knock:11}))}for(let s of[...P.L.solids])Math.hypot(s.x-n.pos.x,s.z-n.pos.z)<4&&bi(s,80,null,n);let t=v.pos.x-n.pos.x,e=v.pos.z-n.pos.z,i=Math.hypot(t,e)||1;i<4.2&&v.alive&&(v.onGround?aa(30,new D(t/i,0,e/i),14,n):Ns(100,"SLAM DODGED"))}function Xh(){if(v.rage<.5||!v.alive)return;v.rage-=.5,zt.boom(),P.shake=.6,xn("SHOCKWAVE",.8);let n=7,t=v.pos;Wh(t.x,t.y,t.z,n),os(t,v,10);for(let e of P.fighters){if(e.gone||!e.alive&&!e.corpse)continue;let i=e.pos.x-t.x,s=e.pos.z-t.z,r=Math.hypot(i,s)||1;if(r>n)continue;let a=1-r/n,o=new D(i/r,0,s/r);e.alive?zn(e,"torso",{dmg:18+30*a,knock:8+12*a,sever:0,kind:"melee",heavy:!0},o,v,{knock:8+12*a}):(e.vel.x+=o.x*9*a,e.vel.z+=o.z*9*a,e.vel.y+=4*a)}for(let e of P.items){let i=e.pos.x-t.x,s=e.pos.z-t.z,r=Math.hypot(i,s)||1;r<n&&e.alive&&!e.held&&(e.vel.set(i/r*9,4,s/r*9),e.spin.set(10,0,8),e.thrown=!0,e.owner=v)}for(let e of[...P.L.solids])Math.hypot(e.x-t.x,e.z-t.z)<n*.7&&bi(e,75,null,v);P.fx.nudge(t.x,t.z,n,0,0)}function qh(){if(v.rage<.34||!v.alive)return;let n=Ae.getWorldPosition(new D);ks(Ye);let t=null,e=.3;for(let a of P.fighters){if(!a.alive||a.gone)continue;Mn.set(a.pos.x,a.pos.y+1.1*a.scale,a.pos.z).sub(n);let o=Mn.length();if(o>32)continue;let l=Math.acos(Math.max(-1,Math.min(1,Mn.dot(Ye)/o)));l<e&&(e=l,t=a)}if(!t){en("\u26A1 No target \u2014 look at someone");return}v.rage-=.34,zt.zap(),P.shake=.5,P.hitstop=.1;let i=new D(t.pos.x+(Math.random()-.5)*2,(P.L.h||7)+(P.L.ceil==null?6:0),t.pos.z+(Math.random()-.5)*2);P.fx.bolt(i,t.pos.clone().setY(t.pos.y+.2)),P.fx.flame(t.pos.x,t.pos.y+.8,t.pos.z,40,.4,1);let s=new _i(10537215,120,22,1.3);s.position.set(t.pos.x,t.pos.y+2,t.pos.z),P.scene.add(s),setTimeout(()=>P.scene.remove(s),160),os(t.pos,v,9);let r=new D(t.pos.x-v.pos.x,0,t.pos.z-v.pos.z).normalize();for(let a of P.fighters)a!==t&&a.alive&&a.pos.distanceTo(t.pos)<2.2&&(a.ignite(v),a.knockDown(new D(a.pos.x-t.pos.x,0,a.pos.z-t.pos.z).normalize(),7));t.boss?(zn(t,"torso",{dmg:170,knock:10,sever:0,kind:"melee",heavy:!0,charged:!0},r,v,{knock:10}),t.ignite(v)):(t.char(),t.lastHitBy=v,P.ctx={smite:!0},t.hp=0,t.die(r,!0,v),P.ctx=null)}function Og(){let n=dt.held?dt.held.children[Math.random()*dt.held.children.length|0]:dt.side?dt.hR:dt.hL;if(!n)return;dt.drip=3.5,dt.dripObj=dt.held||n;let t=dt.held||n;if(t.userData.bloodN=(t.userData.bloodN||0)+1,t.userData.bloodN>16)return;let e=n.geometry;if(!e)return;e.boundingBox||e.computeBoundingBox();let i=e.boundingBox,s=new te(P.woundGeo,P.woundMat);s.userData.blood=!0;let r=()=>Math.random();s.position.set(i.min.x+r()*(i.max.x-i.min.x),i.min.y+(dt.held?.3+r()*.7:r())*(i.max.y-i.min.y),dt.held?i.min.z+r()*(i.max.z-i.min.z):i.max.z-.02),r()<.5?s.position.x=r()<.5?i.min.x:i.max.x:dt.held&&(s.position.z=r()<.5?i.min.z:i.max.z),s.scale.setScalar(dt.held?.22+r()*.25:1.2+r()),n.add(s)}var zg=new D,Yh=new D,Mn=new D;function zn(n,t,e,i,s,r={}){let a=s===v,o=(a&&v.raging?2.5:1)*(r.mult||1)*(a&&P.mut.onepunch?25:1),l=uh(e,n.partHp[t]??n.hp,Math.random,o);a&&v.raging&&t!=="torso"&&(l.sever=!0);let c=(r.knock??e.knock??3)*(a&&v.raging?2:1);P.rage=a&&v.raging>0;let h=n.alive;a&&(P.ctx=Object.assign(P.ctx||{},{thrown:!!r.thrown,charged:!!e.charged,part:t,gun:e.kind==="gun"})),n.takeHit(t,l,i,c,s,e),a&&(P.ctx=null,n.pos.distanceTo(v.pos)<1.9&&(l.sever||!n.alive)&&Yg(l.crush?7:3)),P.rage=!1,e.sharp||e.kind==="gun"?zt.slash():zt.thud(e.heavy?1.2:.8),(l.sever||l.crush)&&zt.squish(),a&&(P.hitstop=e.heavy||l.sever?.07:.035,P.shake=Math.max(P.shake,e.heavy?.25:.12),yt("crosshair").classList.add("hot"),setTimeout(()=>yt("crosshair").classList.remove("hot"),90),!r.thrown&&e.kind!=="gun"&&n.pos.distanceTo(v.pos)<3.2&&Og(),l.sever&&t!=="head"&&t!=="torso"&&h&&en("\u2702 "+{armL:"LEFT ARM",armR:"RIGHT ARM",legL:"LEFT LEG",legR:"RIGHT LEG"}[t]+" OFF"),v.rage=Math.min(1,v.rage+(l.sever?.06:.015)))}function aa(n,t,e,i){if(!v.alive||P.done)return;if(v.iframes>0){v.dodged||(v.dodged=!0,Ns(50,"DODGED"));return}P.mut.hardcore&&(n*=2);{let o=Math.cos(v.yaw),l=-Math.sin(v.yaw),c=-Math.sin(v.yaw),h=-Math.cos(v.yaw),u=yt("dmg-dir");u.style.transform=`rotate(${Math.atan2(-t.x*o-t.z*l,-t.x*c-t.z*h)}rad)`,u.classList.remove("on"),u.offsetWidth,u.classList.add("on")}let s=Math.sin(v.yaw+Math.PI),r=Math.cos(v.yaw+Math.PI),a=-(t.x*s+t.z*r)>.2;if(v.block&&a&&v.blockT<.25&&i&&!i.isPlayer&&i.alive){zt.clang(),zt.clang(),P.shake=.15,P.hitstop=.12,i.state="stagger",i.t=1.2,i.cool=1.5,i.weapon&&Math.random()<.4&&i.dropWeapon(!0),P.stats.parries++,Ns(75,"PARRY");return}v.block&&a?(n*=.18,e*=.35,zt.clang(),P.shake=.1):(zt.thud(.7),zt.hurt(),P.shake=.22,eu(.5+n/60)),v.raging&&(n*=.5),v.hp-=n,v.vel.x+=t.x*e*.7,v.vel.z+=t.z*e*.7,v.hp<=0&&(v.hp=0,tu(i))}function Ih(n,t,e,i){let s=e.corpse?.75*e.scale:e.radius+.06,r=e.pos.y,a=e.pos.y+(e.corpse?.45:e.height)*(e.crawling?.5:1),o=t.x,l=t.z,c=o*o+l*l;if(c<1e-6)return null;let h=((e.pos.x-n.x)*o+(e.pos.z-n.z)*l)/c;if(h<0||h>i)return null;let u=n.x+o*h-e.pos.x,d=n.z+l*h-e.pos.z;if(u*u+d*d>s*s)return null;let p=Math.sqrt(Math.max(0,s*s-u*u-d*d)/c),g=Math.max(0,h-p),x=n.y+t.y*g;return x<r-.05||x>a+.05?null:g}function Fg(n,t,e){let i=0,s=1e9;for(let[r,a,o,l]of[[n.x,t.x,e.x-e.w/2,e.x+e.w/2],[n.y,t.y,e.y,e.y+e.h],[n.z,t.z,e.z-e.d/2,e.z+e.d/2]]){if(Math.abs(a)<1e-8){if(r<o||r>l)return null;continue}let c=(o-r)/a,h=(l-r)/a;if(c>h){let u=c;c=h,h=u}if(i=Math.max(i,c),s=Math.min(s,h),i>s)return null}return i}function Mi(n,t,e){let i=P.L,s=e;Mi.solid=null;for(let a of i.solids){let o=Fg(n,t,a);o!=null&&o<s&&(s=o,Mi.solid=a)}let r=s;for(let[a,o]of[["x",i.w/2],["z",i.d/2]])if(Math.abs(t[a])>1e-6){let l=(Math.sign(t[a])*o-n[a])/t[a];l>0&&l<s&&(s=l)}if(t.y<0){let a=-n.y/t.y;a<s&&(s=a)}if(i.ceil!=null&&t.y>0){let a=(i.h-n.y)/t.y;a<s&&(s=a)}return s<r&&(Mi.solid=null),s}function Zh(n,t,e,i,s=0){zt.shot(e.pellets>1||e.dmg>60);for(let r=0;r<(e.pellets||1);r++){let a=(e.spread||0)+s,o=zg.copy(t).add(Mn.set((Math.random()-.5)*a*2,(Math.random()-.5)*a*2,(Math.random()-.5)*a*2)).normalize(),l=Mi(n,o,e.range||50),c=Mi.solid,h=l,u=null;for(let p of P.targets()){if(p===i||p.gone||!p.alive&&!p.corpse)continue;if(p.isPlayer){if(!v.alive)continue;let x=Ih(n,o,{pos:v.pos,radius:Jo,height:1.8,scale:1},h);x!=null&&x<h&&(h=x,u=p);continue}let g=Ih(n,o,p,h);g!=null&&g<h&&(h=g,u=p)}let d=Yh.copy(n).addScaledVector(o,h);if(r<3&&P.fx.tracer(new D(n.x,n.y-(i===v?.15:0),n.z),d),u===v)aa(e.dmg*.55,new D(o.x,0,o.z).normalize(),e.knock*.5,i);else if(u){let p=d.y-u.pos.y,g=u.lateralOf(d),x=u.corpse?["armL","armR","legL","legR","head","torso"].find(m=>!u.missing[m])||"torso":Qr(p,g,u.scale,u.missing);zn(u,x,e,new D(o.x,0,o.z).normalize(),i,{knock:e.knock})}else{c&&bi(c,e.dmg,o,i);for(let p=0;p<4;p++)P.fx.gib(d.x-o.x*.05,d.y-o.y*.05,d.z-o.z*.05,-o.x*2+(Math.random()-.5)*2,1+Math.random()*2,-o.z*2+(Math.random()-.5)*2,7829350,!1,.5)}}}function Qo(n,t,e,i){zt.boom(),P.shake=.7,os(n,i,12);let s=P.fx;for(let o=0;o<70;o++){let l=Math.random()*6.28,c=3+Math.random()*7;s.gib(n.x,n.y+.3,n.z,Math.cos(l)*c,2+Math.random()*6,Math.sin(l)*c,[16747034,16764992,3355443,2236962][o&3],!1,1.2)}for(let o=0;o<5;o++)s.splat(n.x+(Math.random()-.5)*2,Ve(P.L,n.x,n.z,n.y+.5),n.z+(Math.random()-.5)*2,0,1,0,1+Math.random());let r=new _i(16752704,60,16,1.5);r.position.copy(n).setY(n.y+1),P.scene.add(r),setTimeout(()=>P.scene.remove(r),140);for(let o of P.fighters){if(o.gone||!o.alive&&!o.corpse)continue;let l=o.pos.x-n.x,c=o.pos.z-n.z,h=Math.hypot(l,c);if(h>t)continue;let u=1-h/t,d=new D(l/(h||1),0,c/(h||1)),p=e*u;p>o.hp*.6||!o.alive?(o.alive&&(o.hp=0),o.lastHitBy=i,o.alive?o.die(d,!0,i):Bg(o,d)):zn(o,"torso",{dmg:p,knock:12*u+4,sever:.5,kind:"throw",tdmg:p,heavy:!0},d,i,{knock:12*u+4})}let a=Math.hypot(v.pos.x-n.x,v.pos.z-n.z);a<t&&aa(e*.6*(1-a/t),new D(v.pos.x-n.x,0,v.pos.z-n.z).normalize(),10*(1-a/t),i);for(let o of P.items){let l=o.pos.x-n.x,c=o.pos.z-n.z,h=Math.hypot(l,c);h<t&&o.alive&&(o.vel.set(l/(h||1)*8,5,c/(h||1)*8),o.spin.set(10,0,10))}s.nudge(n.x,n.z,t,0,0);for(let o of[...P.L.solids]){let l=Math.hypot(o.x-n.x,o.z-n.z);l<t&&!o.dead&&bi(o,e*(1-l/t)*1.6,null,i)}}function Bg(n,t){n.obliterate(t)}var Dh=["","","DOUBLE KILL","TRIPLE KILL","MASSACRE","BLOODBATH","PAINTED RED"];function Ns(n,t){n=Math.round(n*P.mult),P.stats.score+=n,t&&en("+"+n+" "+t)}function Hg(n,t,e){let i=P.ctx||{};if(t===v){P.stats.kills++;let s=P.combo;s.n=s.t<3.5?s.n+1:1,s.t=0,P.stats.bestCombo=Math.max(P.stats.bestCombo,s.n);let r=100,a=[];n.missing.head&&(r+=150,a.push("HEADS OFF")),e&&(r+=200,a.push("OBLITERATED")),i.thrown&&(r+=150,a.push("THROWN")),i.slam&&(r+=150,a.push("WALL SPLAT")),i.charged&&(r+=75,a.push("POWER")),i.burned&&(r+=150,a.push("ROASTED")),i.bled&&(r+=100,a.push("BLED OUT")),i.smite&&(r+=100,a.push("SMITE")),v.raging&&(r+=50),n.boss&&(r+=1e3,a.push("BOSS")),r*=s.n,Ns(r,a.join(" \xB7 ")||"KILL"),s.n>=2&&xn(Dh[Math.min(s.n,Dh.length-1)]+(s.n>6?" \xD7"+s.n:""),1.2),v.rage=Math.min(1,v.rage+(n.boss?.5:.18)),e&&P.stats.exploded++,n.boss?P.slowmo=1.6:(s.n>=3||n.missing.head&&Math.random()<.5||e&&Math.random()<.3)&&(P.slowmo=Math.max(P.slowmo,.45))}else t&&en("\u{1F37A} brawler down");n.boss&&(xn(n.name+" IS DOWN",1.6),zt.bell())}var Ye=new D;function ks(n){return n.set(-Math.sin(v.yaw)*Math.cos(v.pitch),Math.sin(v.pitch),-Math.cos(v.yaw)*Math.cos(v.pitch))}function Jh(n){let t=null,e=1e9,i=-Math.sin(v.yaw),s=-Math.cos(v.yaw);for(let r of P.fighters){if(r.gone||!r.alive&&!r.corpse)continue;let a=r.pos.x-v.pos.x,o=r.pos.z-v.pos.z,l=Math.hypot(a,o);if(l>n+r.radius+(r.corpse?.6:0))continue;let c=Math.acos(Math.max(-1,Math.min(1,(a*i+o*s)/(l||1))));if(c>(l<1?1.1:.62))continue;let h=c*2+l*.3+(r.corpse?1.5:0);h<e&&(e=h,t={f:r,d:l})}return t}function Vg(n){let t=n||Se(v.weapon),e=Jh(t.reach);if(!e){$h(t.reach+.4,t.dmg*(t.heavy?2.2:1.2)*(v.raging?2:1))||zt.whoosh();return}let i=e.f,s=e.d,r=v.pos.y+Bh,a=Math.max(.1,r+Math.tan(v.pitch)*s-i.pos.y),o=Mn.set(v.pos.x-Math.sin(v.yaw)*s,0,v.pos.z-Math.cos(v.yaw)*s),l=i.corpse?["head","armL","armR","legL","legR","torso"].sort(()=>Math.random()-.5).find(h=>!i.missing[h])||"torso":Qr(a,i.lateralOf(o),i.scale,i.missing),c=new D(i.pos.x-v.pos.x,0,i.pos.z-v.pos.z).normalize();if(zn(i,l,t,c,v,{}),v.weapon){let h=Yr(v.weapon,v.wstate);if(h!==v.weapon){if(t.shatter){let u=Ae.localToWorld(new D(.3,-.2,-.6));P.fx.glass(u.x,u.y,u.z),zt.glass()}else zt.crunch();en("\u{1F494} "+t.name+" broke"),ls(h),v.wstate={used:0,ammo:Se(h).ammo}}}}function $h(n,t){let e=Ae.getWorldPosition(new D);ks(Ye),Mi(e,Ye,n);let i=Mi.solid;return!i||!i.hp?!1:(bi(i,t,Ye,v),P.shake=Math.max(P.shake,.1),!0)}function Zo(n=0){if(v.cool>0||v.block||!v.alive)return;let t=Se(v.weapon);if(t.kind==="gun"){if((v.wstate.ammo??0)<=0){zt.click(),v.cool=.3,nu("Out of ammo \u2014 throw it (Q)");return}v.cool=t.rate,v.wstate.ammo--;let r=Ae.getWorldPosition(new D);ks(Ye),Zh(r,Ye,t,v,v.vel.lengthSq()>2?.03:0),os(v.pos,v,14),dt.recoil=1,P.shake=Math.max(P.shake,.15);return}if(t.kind==="throw"){jh();return}let e=Math.min(1,n/.6),i=n>=.3;v.cool=t.rate*(v.raging?.7:1)*(i?1.3:1),dt.swing=1,dt.swingDur=Math.max(.22,t.rate*.8)*(i?.8:1),dt.side=v.weapon?1:v.punchSide^=1,dt.heavy=i;let s=i?Object.assign({},t,{dmg:t.dmg*(1.5+e*.9),knock:(t.knock||3)*(1.4+e*.8)+2,sever:Math.min(1,(t.sever||0)+.3*e),charged:!0}):t;i&&(zt.whoosh(),P.shake=Math.max(P.shake,.08)),v.pending={t:Math.min(.14,t.rate*.35)*(i?.6:1),fn:()=>Vg(s)}}function Kh(){v.kickCool>0||!v.alive||(v.kickCool=.75,dt.kick=1,v.pending={t:.12,fn:()=>{let n=Jh(1.7);P.fx.nudge(v.pos.x-Math.sin(v.yaw)*1.2,v.pos.z-Math.cos(v.yaw)*1.2,1.2,-Math.sin(v.yaw)*6,-Math.cos(v.yaw)*6);for(let e of P.items){let i=e.pos.x-v.pos.x,s=e.pos.z-v.pos.z;e.alive&&i*i+s*s<2.2&&e.pos.y<1&&(e.vel.set(-Math.sin(v.yaw)*7,3,-Math.cos(v.yaw)*7),e.spin.set(10,0,8))}if(!n){$h(1.9,35)||zt.whoosh();return}let t=new D(n.f.pos.x-v.pos.x,0,n.f.pos.z-v.pos.z).normalize();zn(n.f,"torso",{dmg:11,knock:11.5,sever:0,kind:"melee",heavy:!1},t,v,{knock:11.5})}})}function jh(){if(!v.weapon||!v.alive)return;let n=Se(v.weapon),t=Ae.getWorldPosition(new D);ks(Ye);let e=new ei(P,v.weapon,t.x+Ye.x*.6,t.y-.1+Ye.y*.6,t.z+Ye.z*.6,v.wstate),i=n.kind==="throw"?17:n.heavy?12:16;if(e.vel.copy(Ye).multiplyScalar(i).add(v.vel.clone().setY(0)),e.vel.y+=2.2,e.spin.set(n.kind==="throw"&&v.weapon==="tknives"?20:10,0,6),e.thrown=!0,e.owner=v,v.weapon==="dynamite"&&(e.fuse=n.fuse),n.fire&&(e.lit=!0),P.items.push(e),zt.whoosh(),dt.swing=1,dt.swingDur=.3,dt.side=1,v.cool=n.kind==="throw"?n.rate:.35,n.kind==="throw"&&(v.wstate.count||1)>1){let s={count:v.wstate.count-1};e.state={count:1},v.wstate=s}else ls(null)}function Qh(){let n=Ae.getWorldPosition(Yh);ks(Ye);let t=null,e=.42;for(let i of P.items){if(!i.alive||i.held||i.thrown||i.fuse!=null)continue;Mn.copy(i.pos).y+=.12,Mn.sub(n);let s=Mn.length();if(s>2.7)continue;let r=Math.acos(Math.max(-1,Math.min(1,Mn.dot(Ye)/s)));r<e&&(e=r,t=i)}return t}function Gg(){let n=Qh();n&&(v.weapon&&Wg(),ls(n.id),v.wstate=n.state,n.held=!0,n.remove(),zt.click(),en("\u270B "+Se(n.id).name))}function Wg(){let n=new ei(P,v.weapon,v.pos.x-Math.sin(v.yaw)*.5,1,v.pos.z-Math.cos(v.yaw)*.5,v.wstate);P.items.push(n),ls(null)}function Xg(){let n=Se(v.weapon);!(v.weapon==="bottle"||v.weapon==="mug")||v.wstate.drunk||!v.alive||(v.wstate.drunk=!0,v.hp=Math.min(100,v.hp+25),dt.drink=1,zt.gulp(),en("\u{1F37A} +25 health"),P.wobble=2.5)}function tu(n){v.alive=!1,xn("YOU GOT PAINTED",2.5),setTimeout(()=>ru(!1),2200)}var dt={root:new He,hR:null,hL:null,leg:null,held:null,swing:0,swingDur:.3,side:1,kick:0,recoil:0,bob:0};Ae.add(dt.root);dt.hR=Xo(15251594,3815994);dt.hL=Xo(15251594,3815994);dt.hR.scale.setScalar(.55);dt.hL.scale.setScalar(.55);dt.root.add(dt.hR,dt.hL);{let n=new He,t=new te(new ge(.22,.7,.22),new we({color:2767450}));t.position.y=.35;let e=new te(new ge(.26,.18,.36),new we({color:1710618}));e.position.set(0,.75,-.05),n.add(t,e),n.visible=!1,dt.leg=n,dt.root.add(n)}function ls(n){if(v.weapon=n||null,dt.held&&(dt.hR.remove(dt.held),dt.held=null),v.weapon){let t=Se(v.weapon),e=Ls(v.weapon,t);e.userData.gun?(e.position.set(0,.02,-.04),e.rotation.set(0,0,0)):e.userData.upright?(e.position.set(0,-.05,-.15),e.rotation.set(-1.9,0,.3),e.scale.setScalar(.9)):(e.position.set(0,0,-.02),e.rotation.set(-.7,0,0)),e.traverse(i=>{i.isMesh&&(i.castShadow=!1)}),dt.hR.add(e),dt.held=e,t.kind==="gun"&&v.wstate.ammo==null&&(v.wstate.ammo=t.ammo)}}function qg(n,t){dt.bob+=n*(t?9:2);let e=Math.sin(dt.bob)*(t?.02:.005),i=Math.abs(Math.cos(dt.bob))*(t?.02:.004),s=Se(v.weapon),r=s.kind==="gun",a=.26+e,o=-.27+i,l=-.5,c=0,h=0,u=-.28+e,d=-.3+i,p=-.52,g=0;if(r&&(a=.2+e,o=-.25+i,l=-.5,u=-.4,d=-.6),v.block&&(a=.14,o=-.12,l=-.38,u=-.14,d=-.12,p=-.38,h=.5,g=.3),dt.swing>0){dt.swing=Math.max(0,dt.swing-n/dt.swingDur);let x=1-dt.swing;if(v.weapon&&!r){let m=x<.3?x/.3:1-(x-.3)/.7,f=x<.3?0:(x-.3)/.7;a=.38-f*.55,o=-.1+m*.18-f*.25,l=-.5-f*.2,c=.9*m-f*1.6,h=-.6+f*1.3}else if(!r){let m=Math.sin(Math.min(1,x*1.6)*Math.PI);dt.side?(l-=m*.45,a-=m*.15,o+=m*.12):(p-=m*.45,u+=m*.15,d+=m*.12)}}if(v.charge!=null){let x=Math.min(1,v.charge/.6),m=x>=1?(Math.random()-.5)*.01:0;v.weapon?(a=.32+m,o=-.16+x*.06+m,l=-.5+x*.04,c=.7+x*.5,h=-.6):(l=-.42+x*.14,o=-.24,a=.3+m,p=-.5)}if(dt.drink>0){dt.drink=Math.max(0,dt.drink-n*1.2);let x=Math.sin((1-dt.drink)*Math.PI);a=.26-x*.24,o=-.27+x*.22,l=-.5+x*.25,c=x*1.9}if(dt.recoil>0&&(dt.recoil=Math.max(0,dt.recoil-n*6),l+=dt.recoil*.08,c+=dt.recoil*.35),dt.hR.position.set(a,o,l),dt.hR.rotation.set(c,0,h),dt.hL.position.set(u,d,p),dt.hL.rotation.set(g,0,0),dt.hL.visible=!v.weapon||v.block||!s.heavy,dt.kick>0){dt.kick=Math.max(0,dt.kick-n*3.2);let x=Math.sin((1-dt.kick)*Math.PI);dt.leg.visible=!0,dt.leg.position.set(.05,-1.25+x*.55,-.35-x*.55),dt.leg.rotation.set(-1.1*x-.3,0,0)}else dt.leg.visible=!1}var ia=0;function xn(n,t=1.1){if(!n)return;let e=yt("announce");e.textContent=n,e.classList.add("on"),ia=t}function en(n){let t=yt("feed"),e=document.createElement("div");for(e.textContent=n,t.prepend(e);t.children.length>5;)t.lastChild.remove();setTimeout(()=>e.remove(),2600)}function Yg(n){if(ee.gore<1)return;let t=yt("screen-blood");for(let e=0;e<n;e++){let i=document.createElement("i"),s=40+Math.random()*140;i.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${s}px;height:${s*(.6+Math.random()*.8)}px;transform:translate(-50%,-50%) rotate(${Math.random()*360}deg)`,t.appendChild(i),setTimeout(()=>i.classList.add("fade"),60),setTimeout(()=>i.remove(),3200)}for(;t.children.length>30;)t.firstChild.remove()}var Us=0;function eu(n){Us=Math.min(1,Us+n)}var Uh=new Set;function nu(n){Uh.has(n)||(Uh.add(n),en(n))}function Zg(){yt("score").textContent=P.stats.score.toLocaleString();let n=yt("combo");P.combo.n>=2&&P.combo.t<3.5?(n.textContent="\xD7"+P.combo.n+" COMBO",n.classList.remove("hidden"),n.style.opacity=(1-P.combo.t/3.5).toFixed(2)):n.classList.add("hidden");let t=yt("crosshair");if(v.charge!=null){let l=Math.min(1,v.charge/.6);t.style.boxShadow=`0 0 0 ${2+l*9}px rgba(255,${(1-l)*200|0},40,${.35+l*.5})`}else t.style.boxShadow="";yt("b-drink").classList.toggle("hidden",!((v.weapon==="bottle"||v.weapon==="mug")&&!v.wstate.drunk)),yt("hp-fill").style.width=v.hp+"%",yt("rage-fill").style.width=(v.raging>0?v.raging/7:v.rage)*100+"%",document.querySelector(".bar.rage").classList.toggle("full",v.rage>=1&&!v.raging),yt("b-rage").classList.toggle("hidden",!(v.rage>=1&&!v.raging)),yt("b-shock").classList.toggle("hidden",v.rage<.5),yt("b-smite").classList.toggle("hidden",v.rage<.34),yt("powers").innerHTML=Ze?"":`<span class="${v.rage>=.34?"on":""}">[X] \u26A1 SMITE</span><span class="${v.rage>=.5?"on":""}">[Z] \u{1F4A5} SHOCKWAVE</span><span class="${v.rage>=1?"on":""}">[R] \u{1F525} BERSERK</span>`,document.body.classList.toggle("raging",v.raging>0);let e=Se(v.weapon);yt("weapon-name").textContent=e.name.toUpperCase();let i="";e.kind==="gun"?i=(v.wstate.ammo??0)+" / "+e.ammo+" rounds":e.kind==="throw"?i="\xD7"+(v.wstate.count||1)+" \xB7 tap attack to throw":isFinite(e.dur)&&(i=Math.max(0,e.dur-(v.wstate.used||0))+" hits left"),yt("weapon-info").textContent=i;let s=P.L,r=P.fighters.filter(l=>l.alive).length;yt("count").textContent=s.waves?`WAVE ${P.stats.wave} \xB7 \u2620 ${P.stats.kills}`:`\u2620 ${P.stats.kills}   \u{1F44A} ${r+P.remaining+(P.bossSpawned?0:1)} LEFT`;let a=v.alive?Qh():null,o=yt("hint");a?(o.textContent=(Ze?"\u270B ":"[E] ")+Se(a.id).name,o.classList.remove("hidden")):o.classList.add("hidden")}var Nh=performance.now();function iu(n){requestAnimationFrame(iu);let t=Math.min(.05,(n-Nh)/1e3||.016);if(Nh=n,!cn||!P)return;if(On){Je.render(ni,Ae);return}P.hitstop>0&&(P.hitstop-=t,t*=.15),P.slowmo>0&&(P.slowmo-=t,t*=.28),document.body.classList.toggle("slowmo",P.slowmo>0),P.stats.t+=t,P.combo.t+=t,P.wobble>0&&(P.wobble=Math.max(0,P.wobble-t)),Jg(t);let e=P.L;P.spawnT-=t;let i=P.fighters.filter(l=>l.alive).length;if(!P.done&&P.spawnT<=0){if(P.spawnT=.7+Math.random()*.8,e.waves)P.waveLeft>0&&i<e.enemies.maxActive?(sa(),P.waveLeft--):P.waveLeft<=0&&P.bossWave&&!P.bossSpawned?Lh():P.waveLeft<=0&&i===0&&(Gh(),P.spawnT=2.5,v.hp=Math.min(100,v.hp+25));else if(P.brawl){if(P.spreadT-=1,P.spreadT<=0){P.spreadT=1;for(let c of P.fighters)c.calm&&c.alive&&Math.random()<.12&&c.provoke(null,.2+Math.random())}let l=P.fighters.filter(c=>c.alive&&!c.calm).length;P.remaining>0&&l<e.enemies.maxActive?sa():P.remaining<=0&&i===0&&!P.bossSpawned?Lh():P.bossSpawned&&!P.boss.alive&&i===0&&(P.done=!0,xn("TOWN PAINTED RED",2.5),zt.bell(),setTimeout(()=>ru(!0),2600))}}P.musicOn&&P.musician&&(!P.musician.alive||!P.musician.calm)&&(P.musicOn=!1,zt.music(!1),en("\u{1F3B5} \u2026the music stopped"));for(let l of P.fighters)l.update(t);$g();for(let l of P.items)l.alive&&l.update(t);(P.items.length>120||(P.stats.t|0)%5===0)&&(P.items=P.items.filter(l=>l.alive));let s=P.fighters.filter(l=>l.corpse);if(s.length>16){let l=s[0];P.scene.remove(l.group),l.gone=!0,l.corpse=!1}P.fighters=P.fighters.filter(l=>!l.gone||l.alive),Ng(t),P.fx.update(t),$o.update(t),P.shake=Math.max(0,P.shake-t*1.8);let r=P.shake*P.shake*.25;Ae.position.set(v.pos.x+(Math.random()-.5)*r,v.pos.y+(v.alive?Bh:.35),v.pos.z+(Math.random()-.5)*r);let a=P.wobble?Math.sin(P.stats.t*2.2)*.04*P.wobble:0,o=(tn.KeyD?-1:0)+(tn.KeyA?1:0)-yi.x;dt.tilt=(dt.tilt||0)+(o*.02-(dt.tilt||0))*Math.min(1,t*8),Ae.rotation.set(v.pitch+(Math.random()-.5)*r,v.yaw+a*.5,(v.alive?0:.9)+dt.tilt+a,"YXZ"),qg(t,Math.hypot(v.vel.x,v.vel.z)>.5),dt.root.visible=v.alive,Us=Math.max(0,Us-t*1.5),yt("flash").style.opacity=Us.toFixed(2),ia>0&&(ia-=t,ia<=0&&yt("announce").classList.remove("on")),(P.stats.t*20|0)%2===0&&Zg(),Je.render(ni,Ae)}function Jg(n){let t=P.L;if(v.cool-=n,v.kickCool-=n,v.pending&&(v.pending.t-=n,v.pending.t<=0)){let _=v.pending.fn;v.pending=null,_()}if(v.raging>0&&(v.raging-=n,v.raging<=0&&(v.raging=0,en("\u{1F525} rage over"))),!v.alive){v.vel.multiplyScalar(.9);return}let e=(Ze?.0055:.0024)*ee.sens;v.yaw-=vt.mx*e,v.pitch-=vt.my*e,vt.mx=vt.my=0,v.pitch=Math.max(-1.35,Math.min(1.35,v.pitch));let i=v.block;if(v.block=vt.block,v.block&&!i&&(v.blockT=0),Se(v.weapon).kind==="melee"){if(vt.attack&&v.charge==null&&(v.charge=0),v.charge!=null)if(vt.attackHeld)v.charge+=n;else{let _=v.charge;v.charge=null,Zo(_)}}else v.charge=null,(vt.attack||vt.attackHeld&&(v.weapon==="tommy"||v.weapon==="revolver"))&&Zo();vt.attack=!1,P.playerThreat=v.charge!=null&&v.charge>.12,v.blockT=(v.blockT??9)+n,vt.kick&&(vt.kick=!1,Kh()),vt.drink&&(vt.drink=!1,Xg()),vt.grab&&(vt.grab=!1,Gg()),vt.throw&&(vt.throw=!1,jh()),vt.shock&&(vt.shock=!1,Xh()),vt.smite&&(vt.smite=!1,qh()),v.dashCd-=n,v.iframes-=n,vt.rage&&(vt.rage=!1,v.rage>=1&&!v.raging&&(v.raging=7,v.rage=0,xn("RAGE",1.2),zt.rage()));let r=0,a=0;(tn.KeyW||tn.ArrowUp)&&(a-=1),(tn.KeyS||tn.ArrowDown)&&(a+=1),(tn.KeyA||tn.ArrowLeft)&&(r-=1),(tn.KeyD||tn.ArrowRight)&&(r+=1),r+=yi.x,a+=yi.y;let o=Math.hypot(r,a);o>1&&(r/=o,a/=o);let l=(vt.sprint||tn.ShiftLeft?6.2:4.4)*(v.block?.5:1)*(v.raging?1.3:1),c=Math.sin(v.yaw),h=Math.cos(v.yaw),u=(r*h+a*c)*l,d=(-r*c+a*h)*l,p=Ve(t,v.pos.x,v.pos.z,v.pos.y+.45);v.onGround=v.pos.y<=p+.02;let g=1-Math.exp(-(v.onGround?12:2)*n);if(v.vel.x+=(u-v.vel.x)*g,v.vel.z+=(d-v.vel.z)*g,vt.dash&&(vt.dash=!1,v.dashCd<=0)){let _=r*h+a*c,A=-r*c+a*h,C=Math.hypot(_,A);C<.2?(_=c,A=h):(_/=C,A/=C),v.dashX=_,v.dashZ=A,v.dashT=.17,v.dashCd=.9,v.iframes=.3,v.dodged=!1,zt.whoosh()}if(v.dashT>0&&(v.dashT-=n,v.vel.x=v.dashX*15,v.vel.z=v.dashZ*15),v.onGround){let _=Math.hypot(v.vel.x,v.vel.z);_>.5&&P.fx.isWet(v.pos.x,v.pos.y,v.pos.z)&&(v.bloodSteps=16),v.stepAcc+=_*n,v.stepAcc>.7&&(v.stepAcc=0,v.stepSide*=-1,v.bloodSteps>0&&!P.fx.isWet(v.pos.x,v.pos.y,v.pos.z)&&(v.bloodSteps--,P.fx.footprint(v.pos.x,v.pos.y,v.pos.z,v.yaw,v.stepSide)))}if(dt.drip>0&&dt.dripObj&&(dt.drip-=n,Math.random()<n*9*ee.gore)){let _=dt.dripObj.getWorldPosition(Mn);P.fx.drop(_.x-Math.sin(v.yaw)*.25,_.y,_.z-Math.cos(v.yaw)*.25,v.vel.x*.5,0,v.vel.z*.5)}vt.jump&&(vt.jump=!1,v.onGround&&(v.vel.y=6.2)),v.vel.y-=na*n,v.pos.addScaledVector(v.vel,n);let x=Jo,m=t.w/2-x,f=t.d/2-x;v.pos.x=Math.max(-m,Math.min(m,v.pos.x)),v.pos.z=Math.max(-f,Math.min(f,v.pos.z));for(let _ of t.solids){if(_.y>v.pos.y+1.7||_.y+_.h<=v.pos.y+.45)continue;let A=Math.max(_.x-_.w/2,Math.min(v.pos.x,_.x+_.w/2)),C=Math.max(_.z-_.d/2,Math.min(v.pos.z,_.z+_.d/2)),T=v.pos.x-A,R=v.pos.z-C,N=T*T+R*R;if(N<x*x){let y=Math.sqrt(N)||.001;v.pos.x=A+T/y*x,v.pos.z=C+R/y*x}}let b=Ve(t,v.pos.x,v.pos.z,v.pos.y+.45);v.pos.y<b&&(v.pos.y=b,v.vel.y=Math.max(0,v.vel.y)),Math.hypot(v.vel.x,v.vel.z)>1&&P.fx.nudge(v.pos.x,v.pos.z,.45,v.vel.x*.5,v.vel.z*.5)}function $g(){let n=P.fighters.filter(t=>t.alive&&!t.gone);n.push(v);for(let t=0;t<n.length;t++)for(let e=t+1;e<n.length;e++){let i=n[t],s=n[e],r=s.pos.x-i.pos.x,a=s.pos.z-i.pos.z,o=i.radius+s.radius,l=r*r+a*a;if(l>=o*o||l<1e-6)continue;let c=Math.sqrt(l),h=(o-c)/2,u=r/c,d=a/c;i.pos.x-=u*h,i.pos.z-=d*h,s.pos.x+=u*h,s.pos.z+=d*h;for(let[p,g,x]of[[i,s,1],[s,i,-1]]){if(p.isPlayer||!p.flying||g.isPlayer)continue;let m=Math.hypot(p.vel.x,p.vel.z);m>5&&g.state!=="down"&&(g.provoke(p.lastHitBy),g.knockDown({x:u*x,z:d*x},m*.7),P.audio.thud(1),p.vel.multiplyScalar(.5))}}}var tn={},yi={x:0,y:0};window.addEventListener("keydown",n=>{tn[n.code]=!0,zt.unlock(),cn&&(n.code==="Space"&&(vt.jump=!0,n.preventDefault()),n.code==="KeyF"&&(vt.kick=!0),n.code==="KeyE"&&(vt.grab=!0),(n.code==="KeyQ"||n.code==="KeyG")&&(vt.throw=!0),n.code==="KeyR"&&(vt.rage=!0),n.code==="KeyZ"&&(vt.shock=!0),n.code==="KeyX"&&(vt.smite=!0),(n.code==="KeyV"||n.code==="ControlLeft"||n.code==="AltLeft")&&(vt.dash=!0,n.preventDefault()),(n.code==="KeyH"||n.code==="KeyC")&&(vt.drink=!0),(n.code==="Escape"||n.code==="KeyP")&&cs())});window.addEventListener("keyup",n=>{tn[n.code]=!1});var as=Je.domElement;as.addEventListener("mousedown",n=>{if(zt.unlock(),!(!cn||On||Ze)){if(document.pointerLockElement!==as){tl();return}n.button===0&&(vt.attack=!0,vt.attackHeld=!0),n.button===2&&(vt.block=!0)}});window.addEventListener("mouseup",n=>{n.button===0&&(vt.attackHeld=!1),n.button===2&&(vt.block=!1)});window.addEventListener("mousemove",n=>{document.pointerLockElement===as&&(vt.mx+=n.movementX,vt.my+=n.movementY)});function tl(){try{let n=as.requestPointerLock&&as.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}document.addEventListener("contextmenu",n=>n.preventDefault());document.addEventListener("pointerlockchange",()=>{cn&&!On&&!Ze&&document.pointerLockElement!==as&&v.alive&&!P.done&&cs(!0)});var ta=(n,t)=>ra.rotated?{x:t,y:window.innerWidth-n}:{x:n,y:t};function Kg(){let n=yt("look-zone"),t=yt("stick-zone"),e=yt("stick-knob"),i=yt("stick-base"),s=null,r=null,a=null,o=null;n.addEventListener("pointerdown",d=>{zt.unlock(),s=d.pointerId,r=ta(d.clientX,d.clientY),n.setPointerCapture(d.pointerId)}),n.addEventListener("pointermove",d=>{if(d.pointerId!==s)return;let p=ta(d.clientX,d.clientY);vt.mx+=p.x-r.x,vt.my+=p.y-r.y,r=p});let l=d=>{d.pointerId===s&&(s=null)};n.addEventListener("pointerup",l),n.addEventListener("pointercancel",l),t.addEventListener("pointerdown",d=>{zt.unlock(),a=d.pointerId,t.setPointerCapture(d.pointerId);let p=i.getBoundingClientRect();o=ta(p.left+p.width/2,p.top+p.height/2),c(d)});let c=d=>{if(d.pointerId!==a)return;let p=ta(d.clientX,d.clientY),g=p.x-o.x,x=p.y-o.y,m=Math.hypot(g,x),f=55;m>f&&(g*=f/m,x*=f/m),yi.x=g/f,yi.y=x/f,e.style.transform=`translate(${g}px,${x}px)`,vt.sprint=m>f*1.4};t.addEventListener("pointermove",c);let h=d=>{d.pointerId===a&&(a=null,yi.x=yi.y=0,e.style.transform="",vt.sprint=!1)};t.addEventListener("pointerup",h),t.addEventListener("pointercancel",h);let u=(d,p,g)=>{let x=yt(d);x.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),zt.unlock(),x.classList.add("on"),p()});let m=f=>{x.classList.remove("on"),g&&g()};x.addEventListener("pointerup",m),x.addEventListener("pointercancel",m),x.addEventListener("pointerleave",m)};u("b-attack",()=>{vt.attack=!0,vt.attackHeld=!0},()=>{vt.attackHeld=!1}),u("b-block",()=>{vt.block=!0},()=>{vt.block=!1}),u("b-kick",()=>{vt.kick=!0}),u("b-grab",()=>{vt.grab=!0}),u("b-throw",()=>{vt.throw=!0}),u("b-jump",()=>{vt.jump=!0}),u("b-rage",()=>{vt.rage=!0}),u("b-drink",()=>{vt.drink=!0}),u("b-dash",()=>{vt.dash=!0}),u("b-shock",()=>{vt.shock=!0}),u("b-smite",()=>{vt.smite=!0})}Kg();function su(){try{return JSON.parse(localStorage.getItem(ea))||{}}catch{return{}}}function oa(){let n=yt("scen-list");n.innerHTML="";let t=su();for(let i of Xr){let s=i(),r=document.createElement("button");r.className="scen";let a=t[s.id],o=a&&a.stars||0,l=[1,2,4].map(c=>o&c?"\u2605":"\u2606").join("");r.innerHTML=`<em class="stars">${l}</em><b>${s.name.toUpperCase()}</b><small>${s.blurb}</small><i>${a?(s.waves?"BEST: WAVE "+(a.wave||0):a.time?"\u2714 CLEARED \xB7 "+a.time+"s":"NOT CLEARED YET")+(a.score?" \xB7 \u{1F3C6} "+a.score.toLocaleString():""):s.waves?"SURVIVE THE WAVES":s.enemies.count+" BRAWLERS + "+s.boss.name}</i>`,r.onclick=()=>Os(s.id),n.appendChild(r)}let e=yt("mut-list");e.innerHTML="";for(let[i,s,r]of zh){let a=document.createElement("button");a.className="mut"+(ee.mut[i]?" on":""),a.textContent=s+(r!==1?" \xD7"+r:""),a.onclick=()=>{ee.mut[i]=!ee.mut[i],Ds(),oa()},e.appendChild(a)}yt("mut-mult").textContent="SCORE \xD7"+Fh().toFixed(2).replace(/\.?0+$/,"")}function Os(n){zt.unlock(),ra.goLandscape(),Ko=n,Hh(n),["menu","pause","result"].forEach(t=>yt(t).classList.add("hidden")),yt("hud").classList.remove("hidden"),yt("touch").classList.toggle("hidden",!Ze),cn=!0,On=!1,xn(P.L.name.toUpperCase(),1.6),en(Ze?"\u270B grab anything \xB7 \u{1F3AF} throw it \xB7 \u{1F9B5} kick":"E grab \xB7 Q throw \xB7 F kick \xB7 RMB block"),P.L.waves||setTimeout(()=>{P&&!P.brawl&&en("\u{1F37A} Everyone's calm\u2026 throw the first punch")},1500),zt.crowd(!0),zt.music(P.musicOn,P.L.id==="disco"?"disco":P.L.id==="saloon"||P.L.id==="speakeasy"?"piano":"rock"),Ze||tl()}function cs(n){cn&&(On=n===!0?!0:!On,yt("pause").classList.toggle("hidden",!On),!On&&!Ze&&tl())}function ru(n){if(!cn)return;cn=!1,zt.crowd(!1),zt.music(!1),document.exitPointerLock&&document.exitPointerLock();let t=P.stats,e=P.L,i=Math.round(t.score*.5)+t.kills*60+t.limbs*30+t.heads*60+t.exploded*80+(n?2500:0)+(e.waves?t.wave*400:0);try{let h=localStorage.getItem(Ph);if(h){let u=JSON.parse(h);u.cash=Math.max(0,Math.floor((+u.cash||0)+i)),localStorage.setItem(Ph,JSON.stringify(u))}}catch{}let s=su(),r=Math.round(t.t);e.waves?(!s[e.id]||!(s[e.id].wave>=t.wave))&&(s[e.id]=Object.assign(s[e.id]||{},{wave:t.wave})):n&&(!s[e.id]||!(s[e.id].time<=r))&&(s[e.id]=Object.assign(s[e.id]||{},{time:r}));try{localStorage.setItem(ea,JSON.stringify(s))}catch{}yt("r-title").textContent=e.waves?"SURVIVED "+(t.wave-1)+" WAVES":n?"TOWN PAINTED RED":"YOU GOT PAINTED";let a=s[e.id]&&s[e.id].score||0;if(t.score>a){s[e.id]=Object.assign(s[e.id]||{},{score:t.score});try{localStorage.setItem(ea,JSON.stringify(s))}catch{}}let o=e.waves?[["Reach wave 3",t.wave>=3],["Reach wave 6",t.wave>=6],["Score 20,000",t.score>=2e4]]:[["Clear the bar",!!n],["Score 12,000",t.score>=12e3],["\xD74 combo",t.bestCombo>=4]],l=s[e.id]&&s[e.id].stars||0;o.forEach(([,h],u)=>{h&&(l|=1<<u)}),s[e.id]=Object.assign(s[e.id]||{},{stars:l});try{localStorage.setItem(ea,JSON.stringify(s))}catch{}yt("r-stars").innerHTML=o.map(([h,u])=>`<span class="${u?"got":""}">${u?"\u2605":"\u2606"} ${h}</span>`).join("");let c=[["SCORE",t.score.toLocaleString()+(t.score>a?" \u{1F3C6} NEW BEST":"")],["Best combo","\xD7"+t.bestCombo],["Parries",t.parries],["Kills",t.kills],["Limbs removed",t.limbs],["Heads taken",t.heads],["Obliterated",t.exploded],["Blood splats",P.fx.splats],["Time",r+"s"],["City Driver cash","+$"+i.toLocaleString()]];yt("r-stats").innerHTML=c.map(([h,u])=>`<span>${h}</span><span>${u}</span>`).join(""),yt("result").classList.remove("hidden"),yt("hud").classList.add("hidden"),yt("touch").classList.add("hidden")}yt("p-resume").onclick=()=>cs();yt("p-restart").onclick=()=>{cs(),Os(Ko)};yt("p-menu").onclick=()=>{cn=!1,zt.crowd(!1),zt.music(!1),yt("pause").classList.add("hidden"),yt("hud").classList.add("hidden"),yt("touch").classList.add("hidden"),oa(),yt("menu").classList.remove("hidden")};yt("pause-btn").addEventListener("pointerdown",n=>{n.stopPropagation(),cs()});yt("r-again").onclick=()=>Os(Ko);yt("r-menu").onclick=()=>{yt("result").classList.add("hidden"),oa(),yt("menu").classList.remove("hidden")};document.addEventListener("visibilitychange",()=>{document.hidden&&cn&&!On&&cs(!0)});requestAnimationFrame(iu);function au(){let n=yt("settings");n.classList.remove("hidden");let t=()=>{yt("s-sens-v").textContent=ee.sens.toFixed(1)+"\xD7",yt("s-fov-v").textContent=ee.fov+"\xB0",document.querySelectorAll("#s-gore button").forEach(e=>e.classList.toggle("on",+e.dataset.v===ee.gore)),document.querySelectorAll("#s-qual button").forEach(e=>e.classList.toggle("on",+e.dataset.v===ee.quality))};yt("s-sens").value=ee.sens,yt("s-fov").value=ee.fov,t(),yt("s-sens").oninput=e=>{ee.sens=+e.target.value,t(),Ds()},yt("s-fov").oninput=e=>{ee.fov=+e.target.value,Ae.fov=ee.fov,Ae.updateProjectionMatrix(),t(),Ds()},document.querySelectorAll("#s-gore button").forEach(e=>e.onclick=()=>{ee.gore=+e.dataset.v,P&&(P.gore=ee.gore,P.fx.gore=ee.gore),t(),Ds()}),document.querySelectorAll("#s-qual button").forEach(e=>e.onclick=()=>{ee.quality=+e.dataset.v,Je.setPixelRatio(Math.min(window.devicePixelRatio||1,ee.quality?Ze?1.5:1.75:1)),ra.refresh(),t(),Ds()}),yt("s-close").onclick=()=>n.classList.add("hidden")}yt("m-settings").onclick=au;yt("p-settings").onclick=au;oa();var kh=new URLSearchParams(location.search).get("map");kh?Os(kh):(Hh("biker"),cn=!1,function n(){if(!cn){requestAnimationFrame(n),Ae.position.set(Math.sin(performance.now()/6e3)*6,2.2,Math.cos(performance.now()/6e3)*6),Ae.lookAt(0,1.2,0);for(let t of P.fighters)t.animate(.016,0),t.sync();P.fx.update(.016),$o.update(.016),Je.render(ni,Ae)}}());new URLSearchParams(location.search).has("debug")&&(window.__brawl={shockwave:Xh,smite:qh,ignite:jo,damageSolid:bi,settings:ee,W:()=>P,player:v,start:Os,hit:zn,spawnEnemy:sa,explode:Qo,input:vt,attack:Zo,kick:Kh,wdef:Se,give:n=>{ls(n);let t=Se(n);v.wstate={used:0,ammo:t.ammo,count:t.count}}});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
