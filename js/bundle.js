(()=>{var xo="160";var Jh=0,Jo=1,$h=2;var Lr=1,Kh=2,wn=3,Gn=0,Ge=1,un=2;var Bn=0,Ui=1,$o=2,Ko=3,Qo=4,Qh=5,ii=100,jh=101,tu=102,jo=103,tl=104,eu=200,nu=201,iu=202,su=203,Da=204,Ua=205,ru=206,au=207,ou=208,lu=209,cu=210,hu=211,uu=212,du=213,fu=214,pu=0,mu=1,gu=2,tr=3,xu=4,_u=5,vu=6,yu=7,_o=0,Mu=1,bu=2,Hn=0,Su=1,wu=2,Eu=3,Tu=4,Au=5,Ru=6;var Ec=300,Fi=301,zi=302,Na=303,Oa=304,Ir=306,ds=1e3,dn=1001,Fa=1002,be=1003,el=1004;var jr=1005;var en=1006,Cu=1007;var fs=1008;var Vn=1009,Pu=1010,Lu=1011,vo=1012,Tc=1013,zn=1014,kn=1015,ps=1016,Ac=1017,Rc=1018,ri=1020,Iu=1021,fn=1023,Du=1024,Uu=1025,ai=1026,ki=1027,Nu=1028,Cc=1029,Ou=1030,Pc=1031,Lc=1033,ta=33776,ea=33777,na=33778,ia=33779,nl=35840,il=35841,sl=35842,rl=35843,Ic=36196,al=37492,ol=37496,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,xl=37817,_l=37818,vl=37819,yl=37820,Ml=37821,sa=36492,bl=36494,Sl=36495,Fu=36283,wl=36284,El=36285,Tl=36286;var er=2300,nr=2301,ra=2302,Al=2400,Rl=2401,Cl=2402;var Dc=3e3,oi=3001,zu=3200,ku=3201,Uc=0,Bu=1,nn="",_e="srgb",An="srgb-linear",yo="display-p3",Dr="display-p3-linear",ir="linear",ae="srgb",sr="rec709",rr="p3";var pi=7680;var Pl=519,Hu=512,Vu=513,Gu=514,Nc=515,Wu=516,Xu=517,qu=518,Yu=519,Ll=35044,Oc=35048;var Il="300 es",za=1035,Tn=2e3,ar=2001,Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var aa=Math.PI/180,or=180/Math.PI;function ys(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function Zu(i,t){return(i%t+t)%t}function oa(i,t,e){return(1-e)*i+e*t}function Dl(i){return(i&i-1)===0&&i!==0}function ka(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var $t=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],x=n[8],g=s[0],m=s[3],f=s[6],M=s[1],_=s[4],A=s[7],C=s[2],T=s[5],R=s[8];return r[0]=o*g+a*M+l*C,r[3]=o*m+a*_+l*T,r[6]=o*f+a*A+l*R,r[1]=c*g+h*M+d*C,r[4]=c*m+h*_+d*T,r[7]=c*f+h*A+d*R,r[2]=u*g+p*M+x*C,r[5]=u*m+p*_+x*T,r[8]=u*f+p*A+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,x=e*d+n*u+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return t[0]=d*g,t[1]=(s*c-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=u*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(la.makeScale(t,e)),this}rotate(t){return this.premultiply(la.makeRotation(-t)),this}translate(t,e){return this.premultiply(la.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},la=new Zt;function Fc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){let i=lr("canvas");return i.style.display="block",i}var Ul={};function hs(i){i in Ul||(Ul[i]=!0,console.warn(i))}var Nl=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ol=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cs={[An]:{transfer:ir,primaries:sr,toReference:i=>i,fromReference:i=>i},[_e]:{transfer:ae,primaries:sr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Dr]:{transfer:ir,primaries:rr,toReference:i=>i.applyMatrix3(Ol),fromReference:i=>i.applyMatrix3(Nl)},[yo]:{transfer:ae,primaries:rr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ol),fromReference:i=>i.applyMatrix3(Nl).convertLinearToSRGB()}},$u=new Set([An,Dr]),ee={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$u.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Cs[t].toReference,s=Cs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Cs[i].primaries},getTransfer:function(i){return i===nn?ir:Cs[i].transfer}};function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mi,cr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mi===void 0&&(mi=lr("canvas")),mi.width=t.width,mi.height=t.height;let n=mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ku=0,hr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=ys(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ha(s[o].image)):r.push(ha(s[o]))}else r=ha(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qu=0,sn=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=dn,s=dn,r=en,o=fs,a=fn,l=Vn,c=i.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ys(),this.name="",this.source=new hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===oi?_e:nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_e?oi:Dc}set encoding(t){hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===oi?_e:nn}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Ec;sn.DEFAULT_ANISOTROPY=1;var he=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,A=(p+1)/2,C=(f+1)/2,T=(h+u)/4,R=(d+g)/4,N=(x+m)/4;return _>A&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=R/n):A>C?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=T/s,r=N/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=N/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(d-g)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ba=class extends Wn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(hs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===oi?_e:nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new hr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Ba{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ur=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ha=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],x=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=x,t[e+3]=g;return}if(d!==g||l!==u||c!==p||h!==x){let m=1-a,f=l*u+c*p+h*x+d*g,M=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let C=Math.sqrt(_),T=Math.atan2(C,f*M);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let A=a*M;if(l=l*m+u*A,c=c*m+p*A,h=h*m+x*A,d=d*m+g*A,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*d+l*p-c*u,t[e+1]=l*x+h*u+c*d-a*p,t[e+2]=c*x+h*p+a*u-l*d,t[e+3]=h*x-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*x,this._y=c*p*d-u*h*x,this._z=c*h*x+u*p*d,this._w=c*h*d-u*p*x;break;case"YXZ":this._x=u*h*d+c*p*x,this._y=c*p*d-u*h*x,this._z=c*h*x-u*p*d,this._w=c*h*d+u*p*x;break;case"ZXY":this._x=u*h*d-c*p*x,this._y=c*p*d+u*h*x,this._z=c*h*x+u*p*d,this._w=c*h*d-u*p*x;break;case"ZYX":this._x=u*h*d-c*p*x,this._y=c*p*d+u*h*x,this._z=c*h*x-u*p*d,this._w=c*h*d+u*p*x;break;case"YZX":this._x=u*h*d+c*p*x,this._y=c*p*d+u*h*x,this._z=c*h*x-u*p*d,this._w=c*h*d-u*p*x;break;case"XZY":this._x=u*h*d-c*p*x,this._y=c*p*d-u*h*x,this._z=c*h*x+u*p*d,this._w=c*h*d+u*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ua=new P,Fl=new rn,Cn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Ls.subVectors(this.max,is),gi.subVectors(t.a,is),xi.subVectors(t.b,is),_i.subVectors(t.c,is),Dn.subVectors(xi,gi),Un.subVectors(_i,xi),Qn.subVectors(gi,_i);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-Qn.z,Qn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,Qn.z,0,-Qn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-Qn.y,Qn.x,0];return!da(e,gi,xi,_i,Ls)||(e=[1,0,0,0,1,0,0,0,1],!da(e,gi,xi,_i,Ls))?!1:(Is.crossVectors(Dn,Un),e=[Is.x,Is.y,Is.z],da(e,gi,xi,_i,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},vn=[new P,new P,new P,new P,new P,new P,new P,new P],ln=new P,Ps=new Cn,gi=new P,xi=new P,_i=new P,Dn=new P,Un=new P,Qn=new P,is=new P,Ls=new P,Is=new P,jn=new P;function da(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){jn.fromArray(i,r);let a=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ju=new Cn,ss=new P,fa=new P,Xn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ju.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);let e=ss.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(fa)),this.expandByPoint(ss.copy(t.center).sub(fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},yn=new P,pa=new P,Ds=new P,Nn=new P,ma=new P,Us=new P,ga=new P,dr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pa.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(pa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ds),a=Nn.dot(this.direction),l=-Nn.dot(Ds),c=Nn.lengthSq(),h=Math.abs(1-o*o),d,u,p,x;if(h>0)if(d=o*l-a,u=o*a-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let g=1/h;d*=g,u*=g,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(pa).addScaledVector(Ds,u),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);let n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){ma.subVectors(e,t),Us.subVectors(n,t),ga.crossVectors(ma,Us);let o=this.direction.dot(ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,t);let l=a*this.direction.dot(Us.crossVectors(Nn,Us));if(l<0)return null;let c=a*this.direction.dot(ma.cross(Nn));if(c<0||l+c>o)return null;let h=-a*Nn.dot(ga);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,u,p,x,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,p,x,g,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,p,x,g,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),o=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,x=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+x*c,e[5]=u-g*c,e[9]=-a*l,e[2]=g-u*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,x=c*h,g=c*d;e[0]=u+g*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=g+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,x=c*h,g=c*d;e[0]=u-g*a,e[4]=-o*d,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*d,x=a*h,g=a*d;e[0]=l*h,e[4]=x*c-p,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,x=a*l,g=a*c;e[0]=l*h,e[4]=g-u*d,e[8]=x*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+x,e[10]=u-g*d}else if(t.order==="XZY"){let u=o*l,p=o*c,x=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=o*h,e[9]=p*d-x,e[2]=x*d-p,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(td,t,ed)}lookAt(t,e,n){let s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),On.crossVectors(n,Ye),On.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),On.crossVectors(n,Ye)),On.normalize(),Ns.crossVectors(Ye,On),s[0]=On.x,s[4]=Ns.x,s[8]=Ye.x,s[1]=On.y,s[5]=Ns.y,s[9]=Ye.y,s[2]=On.z,s[6]=Ns.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],x=n[2],g=n[6],m=n[10],f=n[14],M=n[3],_=n[7],A=n[11],C=n[15],T=s[0],R=s[4],N=s[8],y=s[12],w=s[1],B=s[5],W=s[9],nt=s[13],I=s[2],k=s[6],q=s[10],J=s[14],Y=s[3],Z=s[7],Q=s[11],it=s[15];return r[0]=o*T+a*w+l*I+c*Y,r[4]=o*R+a*B+l*k+c*Z,r[8]=o*N+a*W+l*q+c*Q,r[12]=o*y+a*nt+l*J+c*it,r[1]=h*T+d*w+u*I+p*Y,r[5]=h*R+d*B+u*k+p*Z,r[9]=h*N+d*W+u*q+p*Q,r[13]=h*y+d*nt+u*J+p*it,r[2]=x*T+g*w+m*I+f*Y,r[6]=x*R+g*B+m*k+f*Z,r[10]=x*N+g*W+m*q+f*Q,r[14]=x*y+g*nt+m*J+f*it,r[3]=M*T+_*w+A*I+C*Y,r[7]=M*R+_*B+A*k+C*Z,r[11]=M*N+_*W+A*q+C*Q,r[15]=M*y+_*nt+A*J+C*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],x=t[3],g=t[7],m=t[11],f=t[15];return x*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*p-n*l*p)+g*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],x=t[12],g=t[13],m=t[14],f=t[15],M=d*m*c-g*u*c+g*l*p-a*m*p-d*l*f+a*u*f,_=x*u*c-h*m*c-x*l*p+o*m*p+h*l*f-o*u*f,A=h*g*c-x*d*c+x*a*p-o*g*p-h*a*f+o*d*f,C=x*d*l-h*g*l-x*a*u+o*g*u+h*a*m-o*d*m,T=e*M+n*_+s*A+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=M*R,t[1]=(g*u*r-d*m*r-g*s*p+n*m*p+d*s*f-n*u*f)*R,t[2]=(a*m*r-g*l*r+g*s*c-n*m*c-a*s*f+n*l*f)*R,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*p-n*l*p)*R,t[4]=_*R,t[5]=(h*m*r-x*u*r+x*s*p-e*m*p-h*s*f+e*u*f)*R,t[6]=(x*l*r-o*m*r-x*s*c+e*m*c+o*s*f-e*l*f)*R,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*R,t[8]=A*R,t[9]=(x*d*r-h*g*r-x*n*p+e*g*p+h*n*f-e*d*f)*R,t[10]=(o*g*r-x*a*r+x*n*c-e*g*c-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*R,t[12]=C*R,t[13]=(h*g*s-x*d*s+x*n*u-e*g*u-h*n*m+e*d*m)*R,t[14]=(x*a*s-o*g*s-x*n*l+e*g*l+o*n*m-e*a*m)*R,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,x=r*d,g=o*h,m=o*d,f=a*d,M=l*c,_=l*h,A=l*d,C=n.x,T=n.y,R=n.z;return s[0]=(1-(g+f))*C,s[1]=(p+A)*C,s[2]=(x-_)*C,s[3]=0,s[4]=(p-A)*T,s[5]=(1-(u+f))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(x+_)*R,s[9]=(m-M)*R,s[10]=(1-(u+g))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=vi.set(s[0],s[1],s[2]).length(),o=vi.set(s[4],s[5],s[6]).length(),a=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);let c=1/r,h=1/o,d=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Tn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),p,x;if(a===Tn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ar)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,p=(n+s)*h,x,g;if(a===Tn)x=(o+r)*d,g=-2*d;else if(a===ar)x=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vi=new P,cn=new ne,td=new P(0,0,0),ed=new P(1,1,1),On=new P,Ns=new P,Ye=new P,zl=new ne,kl=new rn,Bi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kl.setFromEuler(this),this.setFromQuaternion(kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nd=0,Bl=new P,yi=new rn,Mn=new ne,Os=new P,rs=new P,id=new P,sd=new rn,Hl=new P(1,0,0),Vl=new P(0,1,0),Gl=new P(0,0,1),rd={type:"added"},ad={type:"removed"},Le=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Bi,n=new rn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Zt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(rs,Os,this.up):Mn.lookAt(Os,rs,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(Mn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(rd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ad)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Le.DEFAULT_UP=new P(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new P,bn=new P,xa=new P,Sn=new P,Mi=new P,bi=new P,Wl=new P,_a=new P,va=new P,ya=new P,Fs=!1,Li=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),bn.subVectors(n,e),xa.subVectors(t,e);let o=hn.dot(hn),a=hn.dot(bn),l=hn.dot(xa),c=bn.dot(bn),h=bn.dot(xa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,x=(o*h-a*l)*u;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,n,s,r,o,a,l){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),bn.subVectors(t,e),hn.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),hn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Mi.subVectors(s,n),bi.subVectors(r,n),_a.subVectors(t,n);let l=Mi.dot(_a),c=bi.dot(_a);if(l<=0&&c<=0)return e.copy(n);va.subVectors(t,s);let h=Mi.dot(va),d=bi.dot(va);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Mi,o);ya.subVectors(t,r);let p=Mi.dot(ya),x=bi.dot(ya);if(x>=0&&p<=x)return e.copy(r);let g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(bi,a);let m=h*x-p*d;if(m<=0&&d-h>=0&&p-x>=0)return Wl.subVectors(r,s),a=(d-h)/(d-h+(p-x)),e.copy(s).addScaledVector(Wl,a);let f=1/(m+g+u);return o=g*f,a=u*f,e.copy(n).addScaledVector(Mi,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Zu(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ma(o,r,t+1/3),this.g=Ma(o,r,t),this.b=Ma(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let n=zc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return ee.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Ve(Oe.r*255,0,255))*65536+Math.round(Ve(Oe.g*255,0,255))*256+Math.round(Ve(Oe.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Oe.copy(this),e);let n=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=_e){ee.fromWorkingColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,s=Oe.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(zs);let n=oa(Fn.h,zs.h,e),s=oa(Fn.s,zs.s,e),r=oa(Fn.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Lt;Lt.NAMES=zc;var od=0,qn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Ui,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ua,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},pr=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new P,ks=new $t,Je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ll&&(t.usage=this.usage),t}};var mr=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var gr=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Se=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}};var ld=0,tn=new ne,ba=new Le,Si=new P,Ze=new Cn,as=new Cn,Pe=new P,We=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fc(t)?gr:mr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];as.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(Ze.min,as.min),Ze.expandByPoint(Pe),Pe.addVectors(Ze.max,as.max),Ze.expandByPoint(Pe)):(Ze.expandByPoint(as.min),Ze.expandByPoint(as.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(t,c),Pe.add(Si)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new P,h[w]=new P;let d=new P,u=new P,p=new P,x=new $t,g=new $t,m=new $t,f=new P,M=new P;function _(w,B,W){d.fromArray(s,w*3),u.fromArray(s,B*3),p.fromArray(s,W*3),x.fromArray(o,w*2),g.fromArray(o,B*2),m.fromArray(o,W*2),u.sub(d),p.sub(d),g.sub(x),m.sub(x);let nt=1/(g.x*m.y-m.x*g.y);isFinite(nt)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(nt),M.copy(p).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(nt),c[w].add(f),c[B].add(f),c[W].add(f),h[w].add(M),h[B].add(M),h[W].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let w=0,B=A.length;w<B;++w){let W=A[w],nt=W.start,I=W.count;for(let k=nt,q=nt+I;k<q;k+=3)_(n[k+0],n[k+1],n[k+2])}let C=new P,T=new P,R=new P,N=new P;function y(w){R.fromArray(r,w*3),N.copy(R);let B=c[w];C.copy(B),C.sub(R.multiplyScalar(R.dot(B))).normalize(),T.crossVectors(N,B);let nt=T.dot(h[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=nt}for(let w=0,B=A.length;w<B;++w){let W=A[w],nt=W.start,I=W.count;for(let k=nt,q=nt+I;k<q;k+=3)y(n[k+0]),y(n[k+1]),y(n[k+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,p=t.count;u<p;u+=3){let x=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let f=0;f<h;f++)u[x++]=c[p++]}return new Je(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xl=new ne,ti=new dr,Bs=new Xn,ql=new P,wi=new P,Ei=new P,Ti=new P,Sa=new P,Hs=new P,Vs=new $t,Gs=new $t,Ws=new $t,Yl=new P,Zl=new P,Jl=new P,Xs=new P,qs=new P,Qt=class extends Le{constructor(t=new We,e=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Sa.fromBufferAttribute(d,t),o?Hs.addScaledVector(Sa,h):Hs.addScaledVector(Sa.sub(e),h))}e.add(Hs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Bs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Bs,ql)===null||ti.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let m=u[x],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let A=M,C=_;A<C;A+=3){let T=a.getX(A),R=a.getX(A+1),N=a.getX(A+2);s=Ys(this,f,t,n,c,h,d,T,R,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){let M=a.getX(m),_=a.getX(m+1),A=a.getX(m+2);s=Ys(this,o,t,n,c,h,d,M,_,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let m=u[x],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=M,C=_;A<C;A+=3){let T=A,R=A+1,N=A+2;s=Ys(this,f,t,n,c,h,d,T,R,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){let M=m,_=m+1,A=m+2;s=Ys(this,o,t,n,c,h,d,M,_,A),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function cd(i,t,e,n,s,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gn,a),l===null)return null;qs.copy(a),qs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:i}}function Ys(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,wi),i.getVertexPosition(l,Ei),i.getVertexPosition(c,Ti);let h=cd(i,t,e,n,wi,Ei,Ti,Xs);if(h){s&&(Vs.fromBufferAttribute(s,a),Gs.fromBufferAttribute(s,l),Ws.fromBufferAttribute(s,c),h.uv=Li.getInterpolation(Xs,wi,Ei,Ti,Vs,Gs,Ws,new $t)),r&&(Vs.fromBufferAttribute(r,a),Gs.fromBufferAttribute(r,l),Ws.fromBufferAttribute(r,c),h.uv1=Li.getInterpolation(Xs,wi,Ei,Ti,Vs,Gs,Ws,new $t),h.uv2=h.uv1),o&&(Yl.fromBufferAttribute(o,a),Zl.fromBufferAttribute(o,l),Jl.fromBufferAttribute(o,c),h.normal=Li.getInterpolation(Xs,wi,Ei,Ti,Yl,Zl,Jl,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};Li.getNormal(wi,Ei,Ti,d.normal),h.face=d}return h}var ve=class i extends We{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function x(g,m,f,M,_,A,C,T,R,N,y){let w=A/R,B=C/N,W=A/2,nt=C/2,I=T/2,k=R+1,q=N+1,J=0,Y=0,Z=new P;for(let Q=0;Q<q;Q++){let it=Q*B-nt;for(let ft=0;ft<k;ft++){let X=ft*w-W;Z[g]=X*M,Z[m]=it*_,Z[f]=I,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[f]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(ft/R),d.push(1-Q/N),J+=1}}for(let Q=0;Q<N;Q++)for(let it=0;it<R;it++){let ft=u+it+k*Q,X=u+it+k*(Q+1),j=u+(it+1)+k*(Q+1),dt=u+(it+1)+k*Q;l.push(ft,X,dt),l.push(X,j,dt),Y+=6}a.addGroup(p,Y,y),p+=Y,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=Hi(i[e]);for(let s in n)t[s]=n[s]}return t}function hd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kc(i){return i.getRenderTarget()===null?i.outputColorSpace:ee.workingColorSpace}var ud={clone:Hi,merge:ke},dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dd,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},xr=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ie=class extends xr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(aa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ai=-90,Ri=1,Va=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(Ai,Ri,t,e);s.layers=this.layers,this.add(s);let r=new Ie(Ai,Ri,t,e);r.layers=this.layers,this.add(r);let o=new Ie(Ai,Ri,t,e);o.layers=this.layers,this.add(o);let a=new Ie(Ai,Ri,t,e);a.layers=this.layers,this.add(a);let l=new Ie(Ai,Ri,t,e);l.layers=this.layers,this.add(l);let c=new Ie(Ai,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},_r=class extends sn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ga=class extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(hs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===oi?_e:nn),this.texture=new _r(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ve(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Bn});r.uniforms.tEquirect.value=e;let o=new Qt(s,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=en),new Va(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},wa=new P,pd=new P,md=new Zt,En=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=wa.subVectors(n,e).cross(pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||md.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ei=new Xn,Zs=new P,ms=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],x=s[9],g=s[10],m=s[11],f=s[12],M=s[13],_=s[14],A=s[15];if(n[0].setComponents(l-r,u-c,m-p,A-f).normalize(),n[1].setComponents(l+r,u+c,m+p,A+f).normalize(),n[2].setComponents(l+o,u+h,m+x,A+M).normalize(),n[3].setComponents(l-o,u-h,m-x,A-M).normalize(),n[4].setComponents(l-a,u-d,m-g,A-_).normalize(),e===Tn)n[5].setComponents(l+a,u+d,m+g,A+_).normalize();else if(e===ar)n[5].setComponents(a,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gd(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,u=c.usage,p=d.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,d){let u=h.array,p=h._updateRange,x=h.updateRanges;if(i.bindBuffer(d,c),p.count===-1&&x.length===0&&i.bufferSubData(d,0,u),x.length!==0){for(let g=0,m=x.length;g<m;g++){let f=x[g];e?i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):i.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var Yn=class i extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],x=[],g=[],m=[];for(let f=0;f<h;f++){let M=f*u-o;for(let _=0;_<c;_++){let A=_*d-r;x.push(A,-M,0),g.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let _=M+c*f,A=M+c*(f+1),C=M+1+c*(f+1),T=M+1+c*f;p.push(_,A,T),p.push(A,C,T)}this.setIndex(p),this.setAttribute("position",new Se(x,3)),this.setAttribute("normal",new Se(g,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
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
#endif`,wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ld=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bd=`#define PI 3.141592653589793
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
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`
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
}`,Jd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
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
}`,af=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hf=`uniform bool receiveShadow;
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
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
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
#endif`,xf=`struct PhysicalMaterial {
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
}`,_f=`
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rf=`#if defined( USE_POINTS_UV )
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
#endif`,Cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,If=`#ifdef USE_MORPHNORMALS
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
#endif`,Df=`#ifdef USE_MORPHTARGETS
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
#endif`,Uf=`#ifdef USE_MORPHTARGETS
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
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bf=`#ifdef USE_NORMALMAP
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
#endif`,Hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,np=`float getShadowMask() {
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
}`,ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,up=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`#include <common>
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
}`,wp=`#if DEPTH_PACKING == 3200
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
}`,Ep=`#define DISTANCE
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
}`,Tp=`#define DISTANCE
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Lp=`#include <common>
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Dp=`#define LAMBERT
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
}`,Up=`#define LAMBERT
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
}`,Np=`#define MATCAP
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
}`,Op=`#define MATCAP
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
}`,Fp=`#define NORMAL
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
}`,zp=`#define NORMAL
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
}`,kp=`#define PHONG
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
}`,Bp=`#define PHONG
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
}`,Hp=`#define STANDARD
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
}`,Vp=`#define STANDARD
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
}`,Gp=`#define TOON
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
}`,Wp=`#define TOON
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
}`,Xp=`uniform float size;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,Zp=`uniform vec3 color;
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
}`,Jp=`uniform float rotation;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:xd,alphahash_pars_fragment:_d,alphamap_fragment:vd,alphamap_pars_fragment:yd,alphatest_fragment:Md,alphatest_pars_fragment:bd,aomap_fragment:Sd,aomap_pars_fragment:wd,batching_pars_vertex:Ed,batching_vertex:Td,begin_vertex:Ad,beginnormal_vertex:Rd,bsdfs:Cd,iridescence_fragment:Pd,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Nd,color_fragment:Od,color_pars_fragment:Fd,color_pars_vertex:zd,color_vertex:kd,common:Bd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Yd,colorspace_pars_fragment:Zd,envmap_fragment:Jd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Kd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:uf,envmap_vertex:jd,fog_vertex:tf,fog_pars_vertex:ef,fog_fragment:nf,fog_pars_fragment:sf,gradientmap_pars_fragment:rf,lightmap_fragment:af,lightmap_pars_fragment:of,lights_lambert_fragment:lf,lights_lambert_pars_fragment:cf,lights_pars_begin:hf,lights_toon_fragment:df,lights_toon_pars_fragment:ff,lights_phong_fragment:pf,lights_phong_pars_fragment:mf,lights_physical_fragment:gf,lights_physical_pars_fragment:xf,lights_fragment_begin:_f,lights_fragment_maps:vf,lights_fragment_end:yf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Sf,logdepthbuf_vertex:wf,map_fragment:Ef,map_pars_fragment:Tf,map_particle_fragment:Af,map_particle_pars_fragment:Rf,metalnessmap_fragment:Cf,metalnessmap_pars_fragment:Pf,morphcolor_vertex:Lf,morphnormal_vertex:If,morphtarget_pars_vertex:Df,morphtarget_vertex:Uf,normal_fragment_begin:Nf,normal_fragment_maps:Of,normal_pars_fragment:Ff,normal_pars_vertex:zf,normal_vertex:kf,normalmap_pars_fragment:Bf,clearcoat_normal_fragment_begin:Hf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:Wf,opaque_fragment:Xf,packing:qf,premultiplied_alpha_fragment:Yf,project_vertex:Zf,dithering_fragment:Jf,dithering_pars_fragment:$f,roughnessmap_fragment:Kf,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:tp,shadowmap_vertex:ep,shadowmask_pars_fragment:np,skinbase_vertex:ip,skinning_pars_vertex:sp,skinning_vertex:rp,skinnormal_vertex:ap,specularmap_fragment:op,specularmap_pars_fragment:lp,tonemapping_fragment:cp,tonemapping_pars_fragment:hp,transmission_fragment:up,transmission_pars_fragment:dp,uv_pars_fragment:fp,uv_pars_vertex:pp,uv_vertex:mp,worldpos_vertex:gp,background_vert:xp,background_frag:_p,backgroundCube_vert:vp,backgroundCube_frag:yp,cube_vert:Mp,cube_frag:bp,depth_vert:Sp,depth_frag:wp,distanceRGBA_vert:Ep,distanceRGBA_frag:Tp,equirect_vert:Ap,equirect_frag:Rp,linedashed_vert:Cp,linedashed_frag:Pp,meshbasic_vert:Lp,meshbasic_frag:Ip,meshlambert_vert:Dp,meshlambert_frag:Up,meshmatcap_vert:Np,meshmatcap_frag:Op,meshnormal_vert:Fp,meshnormal_frag:zp,meshphong_vert:kp,meshphong_frag:Bp,meshphysical_vert:Hp,meshphysical_frag:Vp,meshtoon_vert:Gp,meshtoon_frag:Wp,points_vert:Xp,points_frag:qp,shadow_vert:Yp,shadow_frag:Zp,sprite_vert:Jp,sprite_frag:$p},ot={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},gn={basic:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:ke([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:ke([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:ke([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:ke([ot.points,ot.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:ke([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:ke([ot.common,ot.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:ke([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:ke([ot.sprite,ot.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:ke([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:ke([ot.lights,ot.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};gn.physical={uniforms:ke([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Js={r:0,b:0,g:0};function Kp(i,t,e,n,s,r,o){let a=new Lt(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function x(m,f){let M=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?e:t).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),M=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ir)?(h===void 0&&(h=new Qt(new ve(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Hi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ee.getTransfer(_.colorSpace)!==ae,(d!==_||u!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Qt(new Yn(2,2),new Pn({name:"BackgroundMaterial",uniforms:Hi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ee.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Js,kc(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:x}}function Qp(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function d(I,k,q,J,Y){let Z=!1;if(o){let Q=g(J,q,k);c!==Q&&(c=Q,p(c.object)),Z=f(I,J,q,Y),Z&&M(I,J,q,Y)}else{let Q=k.wireframe===!0;(c.geometry!==J.id||c.program!==q.id||c.wireframe!==Q)&&(c.geometry=J.id,c.program=q.id,c.wireframe=Q,Z=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,N(I,k,q,J),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function x(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function g(I,k,q){let J=q.wireframe===!0,Y=a[I.id];Y===void 0&&(Y={},a[I.id]=Y);let Z=Y[k.id];Z===void 0&&(Z={},Y[k.id]=Z);let Q=Z[J];return Q===void 0&&(Q=m(u()),Z[J]=Q),Q}function m(I){let k=[],q=[],J=[];for(let Y=0;Y<s;Y++)k[Y]=0,q[Y]=0,J[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:J,object:I,attributes:{},index:null}}function f(I,k,q,J){let Y=c.attributes,Z=k.attributes,Q=0,it=q.getAttributes();for(let ft in it)if(it[ft].location>=0){let j=Y[ft],dt=Z[ft];if(dt===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(dt=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(dt=I.instanceColor)),j===void 0||j.attribute!==dt||dt&&j.data!==dt.data)return!0;Q++}return c.attributesNum!==Q||c.index!==J}function M(I,k,q,J){let Y={},Z=k.attributes,Q=0,it=q.getAttributes();for(let ft in it)if(it[ft].location>=0){let j=Z[ft];j===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let dt={};dt.attribute=j,j&&j.data&&(dt.data=j.data),Y[ft]=dt,Q++}c.attributes=Y,c.attributesNum=Q,c.index=J}function _(){let I=c.newAttributes;for(let k=0,q=I.length;k<q;k++)I[k]=0}function A(I){C(I,0)}function C(I,k){let q=c.newAttributes,J=c.enabledAttributes,Y=c.attributeDivisors;q[I]=1,J[I]===0&&(i.enableVertexAttribArray(I),J[I]=1),Y[I]!==k&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),Y[I]=k)}function T(){let I=c.newAttributes,k=c.enabledAttributes;for(let q=0,J=k.length;q<J;q++)k[q]!==I[q]&&(i.disableVertexAttribArray(q),k[q]=0)}function R(I,k,q,J,Y,Z,Q){Q===!0?i.vertexAttribIPointer(I,k,q,Y,Z):i.vertexAttribPointer(I,k,q,J,Y,Z)}function N(I,k,q,J){if(n.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let Y=J.attributes,Z=q.getAttributes(),Q=k.defaultAttributeValues;for(let it in Z){let ft=Z[it];if(ft.location>=0){let X=Y[it];if(X===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){let j=X.normalized,dt=X.itemSize,vt=e.get(X);if(vt===void 0)continue;let _t=vt.buffer,Ut=vt.type,Ot=vt.bytesPerElement,Tt=n.isWebGL2===!0&&(Ut===i.INT||Ut===i.UNSIGNED_INT||X.gpuType===Tc);if(X.isInterleavedBufferAttribute){let lt=X.data,O=lt.stride,kt=X.offset;if(lt.isInstancedInterleavedBuffer){for(let D=0;D<ft.locationSize;D++)C(ft.location+D,lt.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let D=0;D<ft.locationSize;D++)A(ft.location+D);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let D=0;D<ft.locationSize;D++)R(ft.location+D,dt/ft.locationSize,Ut,j,O*Ot,(kt+dt/ft.locationSize*D)*Ot,Tt)}else{if(X.isInstancedBufferAttribute){for(let lt=0;lt<ft.locationSize;lt++)C(ft.location+lt,X.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let lt=0;lt<ft.locationSize;lt++)A(ft.location+lt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let lt=0;lt<ft.locationSize;lt++)R(ft.location+lt,dt/ft.locationSize,Ut,j,dt*Ot,dt/ft.locationSize*lt*Ot,Tt)}}else if(Q!==void 0){let j=Q[it];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(ft.location,j);break;case 3:i.vertexAttrib3fv(ft.location,j);break;case 4:i.vertexAttrib4fv(ft.location,j);break;default:i.vertexAttrib1fv(ft.location,j)}}}}T()}function y(){W();for(let I in a){let k=a[I];for(let q in k){let J=k[q];for(let Y in J)x(J[Y].object),delete J[Y];delete k[q]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;let k=a[I.id];for(let q in k){let J=k[q];for(let Y in J)x(J[Y].object),delete J[Y];delete k[q]}delete a[I.id]}function B(I){for(let k in a){let q=a[k];if(q[I.id]===void 0)continue;let J=q[I.id];for(let Y in J)x(J[Y].object),delete J[Y];delete q[I.id]}}function W(){nt(),h=!0,c!==l&&(c=l,p(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:nt,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:A,disableUnusedAttributes:T}}function jp(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,u){if(u===0)return;let p,x;if(s)p=i,x="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](r,h,d,u),e.update(d,r,u)}function c(h,d,u){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<u;x++)this.render(h[x],d[x]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,u);let x=0;for(let g=0;g<u;g++)x+=d[g];e.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function tm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,A=o||t.has("OES_texture_float"),C=_&&A,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:A,floatVertexTextures:C,maxSamples:T}}function em(i){let t=this,e=null,n=0,s=!1,r=!1,o=new En,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,_=M*4,A=f.clippingState||null;l.value=A,A=h(x,u,_,p);for(let C=0;C!==_;++C)A[C]=e[C];f.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,x){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,x!==!0||m===null){let f=p+g*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,A=p;_!==g;++_,A+=4)o.copy(d[_]).applyMatrix4(M,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function nm(i){let t=new WeakMap;function e(o,a){return a===Na?o.mapping=Fi:a===Oa&&(o.mapping=zi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Na||a===Oa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ga(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var vr=class extends xr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ii=4,$l=[.125,.215,.35,.446,.526,.582],si=20,Ea=new vr,Kl=new Lt,Ta=null,Aa=0,Ra=0,ni=(1+Math.sqrt(5))/2,Ci=1/ni,Ql=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ni,Ci),new P(0,ni,-Ci),new P(Ci,0,ni),new P(-Ci,0,ni),new P(ni,Ci,0),new P(-ni,Ci,0)],yr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ta,Aa,Ra),t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ps,format:fn,colorSpace:An,depthBuffer:!1},s=jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=im(r)),this._blurMaterial=sm(r,t,e)}return s}_compileMaterial(t){let e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Ea)}_sceneToCubeUV(t,e,n,s){let a=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Kl),h.toneMapping=Hn,h.autoClear=!1;let p=new pr({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),x=new Qt(new ve,p),g=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Kl),g=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;$s(s,M*_,f>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Fi||t.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;$s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ea)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ql[(s-1)%Ql.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Qt(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*si-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):si;m>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);let f=[],M=0;for(let R=0;R<si;++R){let N=R/g,y=Math.exp(-N*N/2);f.push(y),R===0?M+=y:R<m&&(M+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=x,u.mipInt.value=_-n;let A=this._sizeLods[s],C=3*A*(s>_-Ii?s-_+Ii:0),T=4*(this._cubeSize-A);$s(e,C,T,3*A,2*A),l.setRenderTarget(e),l.render(d,Ea)}};function im(i){let t=[],e=[],n=[],s=i,r=i-Ii+1+$l.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ii?l=$l[o-i+Ii-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,x=6,g=3,m=2,f=1,M=new Float32Array(g*x*p),_=new Float32Array(m*x*p),A=new Float32Array(f*x*p);for(let T=0;T<p;T++){let R=T%3*2/3-1,N=T>2?0:-1,y=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];M.set(y,g*x*T),_.set(u,m*x*T);let w=[T,T,T,T,T,T];A.set(w,f*x*T)}let C=new We;C.setAttribute("position",new Je(M,g)),C.setAttribute("uv",new Je(_,m)),C.setAttribute("faceIndex",new Je(A,f)),t.push(C),s>Ii&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jl(i,t,e){let n=new Rn(i,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sm(i,t,e){let n=new Float32Array(si),s=new P(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function tc(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ec(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function rm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Na||l===Oa,h=l===Fi||l===zi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new yr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new yr(i));let u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function am(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function om(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);for(let x in u.morphAttributes){let g=u.morphAttributes[x];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let x in u)t.update(u[x],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let x in p){let g=p[x];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,x=d.attributes.position,g=0;if(p!==null){let M=p.array;g=p.version;for(let _=0,A=M.length;_<A;_+=3){let C=M[_+0],T=M[_+1],R=M[_+2];u.push(C,T,T,R,R,C)}}else if(x!==void 0){let M=x.array;g=x.version;for(let _=0,A=M.length/3-1;_<A;_+=3){let C=_+0,T=_+1,R=_+2;u.push(C,T,T,R,R,C)}}else return;let m=new(Fc(u)?gr:mr)(u,1);m.version=g;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function lm(i,t,e,n){let s=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,x){i.drawElements(r,x,a,p*l),e.update(x,r,1)}function d(p,x,g){if(g===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,x,a,p*l,g),e.update(x,r,g)}function u(p,x,g){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,x[f]);else{m.multiDrawElementsWEBGL(r,x,0,a,p,0,g);let f=0;for(let M=0;M<g;M++)f+=x[M];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function cm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hm(i,t){return i[0]-t[0]}function um(i,t){return Math.abs(t[1])-Math.abs(i[1])}function dm(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new he,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=p!==void 0?p.length:0,g=r.get(h);if(g===void 0||g.count!==x){let I=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],N=0;M===!0&&(N=1),_===!0&&(N=2),A===!0&&(N=3);let y=h.attributes.position.count*N,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let B=new Float32Array(y*w*4*x),W=new ur(B,y,w,x);W.type=kn,W.needsUpdate=!0;let nt=N*4;for(let k=0;k<x;k++){let q=C[k],J=T[k],Y=R[k],Z=y*w*4*k;for(let Q=0;Q<q.count;Q++){let it=Q*nt;M===!0&&(o.fromBufferAttribute(q,Q),B[Z+it+0]=o.x,B[Z+it+1]=o.y,B[Z+it+2]=o.z,B[Z+it+3]=0),_===!0&&(o.fromBufferAttribute(J,Q),B[Z+it+4]=o.x,B[Z+it+5]=o.y,B[Z+it+6]=o.z,B[Z+it+7]=0),A===!0&&(o.fromBufferAttribute(Y,Q),B[Z+it+8]=o.x,B[Z+it+9]=o.y,B[Z+it+10]=o.z,B[Z+it+11]=Y.itemSize===4?o.w:1)}}g={count:x,texture:W,size:new $t(y,w)},r.set(h,g),h.addEventListener("dispose",I)}let m=0;for(let M=0;M<u.length;M++)m+=u[M];let f=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",f),d.getUniforms().setValue(i,"morphTargetInfluences",u),d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{let p=u===void 0?0:u.length,x=n[h.id];if(x===void 0||x.length!==p){x=[];for(let _=0;_<p;_++)x[_]=[_,0];n[h.id]=x}for(let _=0;_<p;_++){let A=x[_];A[0]=_,A[1]=u[_]}x.sort(um);for(let _=0;_<8;_++)_<p&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(hm);let g=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let A=a[_],C=A[0],T=A[1];C!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+_)!==g[C]&&h.setAttribute("morphTarget"+_,g[C]),m&&h.getAttribute("morphNormal"+_)!==m[C]&&h.setAttribute("morphNormal"+_,m[C]),s[_]=T,f+=T):(g&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function fm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Mr=class extends sn{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:ai,h!==ai&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ai&&(n=zn),n===void 0&&h===ki&&(n=ri),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Hc=new sn,Vc=new Mr(1,1);Vc.compareFunction=Nc;var Gc=new ur,Wc=new Ha,Xc=new _r,nc=[],ic=[],sc=new Float32Array(16),rc=new Float32Array(9),ac=new Float32Array(4);function qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nc[s];if(r===void 0&&(r=new Float32Array(s),nc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ur(i,t){let e=ic[t];e===void 0&&(e=new Int32Array(t),ic[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function pm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function _m(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),Te(e,n)}}function vm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;rc.set(n),i.uniformMatrix3fv(this.addr,!1,rc),Te(e,n)}}function ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),Te(e,n)}}function Mm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Em(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Cm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Vc:Hc;e.setTexture2D(t||r,s)}function Pm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wc,s)}function Lm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xc,s)}function Im(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gc,s)}function Dm(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return xm;case 35674:return _m;case 35675:return vm;case 35676:return ym;case 5124:case 35670:return Mm;case 35667:case 35671:return bm;case 35668:case 35672:return Sm;case 35669:case 35673:return wm;case 5125:return Em;case 36294:return Tm;case 36295:return Am;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Im}}function Um(i,t){i.uniform1fv(this.addr,t)}function Nm(i,t){let e=qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Om(i,t){let e=qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Fm(i,t){let e=qi(t,this.size,4);i.uniform4fv(this.addr,e)}function zm(i,t){let e=qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function km(i,t){let e=qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bm(i,t){let e=qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hm(i,t){i.uniform1iv(this.addr,t)}function Vm(i,t){i.uniform2iv(this.addr,t)}function Gm(i,t){i.uniform3iv(this.addr,t)}function Wm(i,t){i.uniform4iv(this.addr,t)}function Xm(i,t){i.uniform1uiv(this.addr,t)}function qm(i,t){i.uniform2uiv(this.addr,t)}function Ym(i,t){i.uniform3uiv(this.addr,t)}function Zm(i,t){i.uniform4uiv(this.addr,t)}function Jm(i,t,e){let n=this.cache,s=t.length,r=Ur(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Hc,r[o])}function $m(i,t,e){let n=this.cache,s=t.length,r=Ur(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wc,r[o])}function Km(i,t,e){let n=this.cache,s=t.length,r=Ur(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xc,r[o])}function Qm(i,t,e){let n=this.cache,s=t.length,r=Ur(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gc,r[o])}function jm(i){switch(i){case 5126:return Um;case 35664:return Nm;case 35665:return Om;case 35666:return Fm;case 35674:return zm;case 35675:return km;case 35676:return Bm;case 5124:case 35670:return Hm;case 35667:case 35671:return Vm;case 35668:case 35672:return Gm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Qm}}var Wa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dm(e.type)}},Xa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jm(e.type)}},qa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ca=/(\w+)(\])?(\[|\.)?/g;function oc(i,t){i.seq.push(t),i.map[t.id]=t}function t0(i,t,e){let n=i.name,s=n.length;for(Ca.lastIndex=0;;){let r=Ca.exec(n),o=Ca.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){oc(e,c===void 0?new Wa(a,i,t):new Xa(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new qa(a),oc(e,d)),e=d}}}var Oi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);t0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function lc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var e0=37297,n0=0;function i0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function s0(i){let t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(i),n;switch(t===e?n="":t===rr&&e===sr?n="LinearDisplayP3ToLinearSRGB":t===sr&&e===rr&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case Dr:return[n,"LinearTransferOETF"];case _e:case yo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function cc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+i0(i.getShaderSource(t),o)}else return s}function r0(i,t){let e=s0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function a0(i,t){let e;switch(t){case Su:e="Linear";break;case wu:e="Reinhard";break;case Eu:e="OptimizedCineon";break;case Tu:e="ACESFilmic";break;case Ru:e="AgX";break;case Au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function o0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Di).join(`
`)}function l0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Di).join(`
`)}function c0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Di(i){return i!==""}function hc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var u0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(u0,f0)}var d0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function f0(i,t){let e=Ht[t];if(e===void 0){let n=d0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}var p0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(i){return i.replace(p0,m0)}function m0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function g0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lr?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function x0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case zi:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function v0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _o:t="ENVMAP_BLENDING_MULTIPLY";break;case Mu:t="ENVMAP_BLENDING_MIX";break;case bu:t="ENVMAP_BLENDING_ADD";break}return t}function y0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function M0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=g0(e),c=x0(e),h=_0(e),d=v0(e),u=y0(e),p=e.isWebGL2?"":o0(e),x=l0(e),g=c0(r),m=s.createProgram(),f,M,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Di).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Di).join(`
`),M.length>0&&(M+=`
`)):(f=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),M=[p,fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Hn?a0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,r0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Di).join(`
`)),o=Ya(o),o=hc(o,e),o=uc(o,e),a=Ya(a),a=hc(a,e),a=uc(a,e),o=dc(o),a=dc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let A=_+f+o,C=_+M+a,T=lc(s,s.VERTEX_SHADER,A),R=lc(s,s.FRAGMENT_SHADER,C);s.attachShader(m,T),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(W){if(i.debug.checkShaderErrors){let nt=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(T).trim(),k=s.getShaderInfoLog(R).trim(),q=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,R);else{let Y=cc(s,T,"vertex"),Z=cc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+Y+`
`+Z)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(I===""||k==="")&&(J=!1);J&&(W.diagnostics={runnable:q,programLog:nt,vertexShader:{log:I,prefix:f},fragmentShader:{log:k,prefix:M}})}s.deleteShader(T),s.deleteShader(R),y=new Oi(s,m),w=h0(s,m)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,e0)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=n0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}var b0=0,Za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ja(t),e.set(t,n)),n}},Ja=class{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}};function S0(i,t,e,n,s,r,o){let a=new fr,l=new Za,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,w,B,W,nt){let I=W.fog,k=nt.geometry,q=y.isMeshStandardMaterial?W.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),Y=J&&J.mapping===Ir?J.image.height:null,Z=x[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=Q!==void 0?Q.length:0,ft=0;k.morphAttributes.position!==void 0&&(ft=1),k.morphAttributes.normal!==void 0&&(ft=2),k.morphAttributes.color!==void 0&&(ft=3);let X,j,dt,vt;if(Z){let Fe=gn[Z];X=Fe.vertexShader,j=Fe.fragmentShader}else X=y.vertexShader,j=y.fragmentShader,l.update(y),dt=l.getVertexShaderID(y),vt=l.getFragmentShaderID(y);let _t=i.getRenderTarget(),Ut=nt.isInstancedMesh===!0,Ot=nt.isBatchedMesh===!0,Tt=!!y.map,lt=!!y.matcap,O=!!J,kt=!!y.aoMap,D=!!y.lightMap,$=!!y.bumpMap,st=!!y.normalMap,Dt=!!y.displacementMap,St=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,z=y.anisotropy>0,K=y.clearcoat>0,tt=y.iridescence>0,rt=y.sheen>0,Mt=y.transmission>0,ut=z&&!!y.anisotropyMap,gt=K&&!!y.clearcoatMap,Ct=K&&!!y.clearcoatNormalMap,Gt=K&&!!y.clearcoatRoughnessMap,et=tt&&!!y.iridescenceMap,te=tt&&!!y.iridescenceThicknessMap,Jt=rt&&!!y.sheenColorMap,Nt=rt&&!!y.sheenRoughnessMap,Et=!!y.specularMap,xt=!!y.specularColorMap,Bt=!!y.specularIntensityMap,jt=Mt&&!!y.transmissionMap,pe=Mt&&!!y.thicknessMap,qt=!!y.gradientMap,at=!!y.alphaMap,L=y.alphaTest>0,ct=!!y.alphaHash,ht=!!y.extensions,Pt=!!k.attributes.uv1,At=!!k.attributes.uv2,ie=!!k.attributes.uv3,se=Hn;return y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(se=i.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:j,defines:y.defines,customVertexShaderID:dt,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ot,instancing:Ut,instancingColor:Ut&&nt.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:An,map:Tt,matcap:lt,envMap:O,envMapMode:O&&J.mapping,envMapCubeUVHeight:Y,aoMap:kt,lightMap:D,bumpMap:$,normalMap:st,displacementMap:u&&Dt,emissiveMap:St,normalMapObjectSpace:st&&y.normalMapType===Bu,normalMapTangentSpace:st&&y.normalMapType===Uc,metalnessMap:S,roughnessMap:v,anisotropy:z,anisotropyMap:ut,clearcoat:K,clearcoatMap:gt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Gt,iridescence:tt,iridescenceMap:et,iridescenceThicknessMap:te,sheen:rt,sheenColorMap:Jt,sheenRoughnessMap:Nt,specularMap:Et,specularColorMap:xt,specularIntensityMap:Bt,transmission:Mt,transmissionMap:jt,thicknessMap:pe,gradientMap:qt,opaque:y.transparent===!1&&y.blending===Ui,alphaMap:at,alphaTest:L,alphaHash:ct,combine:y.combine,mapUv:Tt&&g(y.map.channel),aoMapUv:kt&&g(y.aoMap.channel),lightMapUv:D&&g(y.lightMap.channel),bumpMapUv:$&&g(y.bumpMap.channel),normalMapUv:st&&g(y.normalMap.channel),displacementMapUv:Dt&&g(y.displacementMap.channel),emissiveMapUv:St&&g(y.emissiveMap.channel),metalnessMapUv:S&&g(y.metalnessMap.channel),roughnessMapUv:v&&g(y.roughnessMap.channel),anisotropyMapUv:ut&&g(y.anisotropyMap.channel),clearcoatMapUv:gt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&g(y.sheenRoughnessMap.channel),specularMapUv:Et&&g(y.specularMap.channel),specularColorMapUv:xt&&g(y.specularColorMap.channel),specularIntensityMapUv:Bt&&g(y.specularIntensityMap.channel),transmissionMapUv:jt&&g(y.transmissionMap.channel),thicknessMapUv:pe&&g(y.thicknessMap.channel),alphaMapUv:at&&g(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(st||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:At,vertexUv3s:ie,pointsUvs:nt.isPoints===!0&&!!k.attributes.uv&&(Tt||at),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:nt.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ft,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&ee.getTransfer(y.map.colorSpace)===ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===un,flipSided:y.side===Ge,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ht&&y.extensions.derivatives===!0,extensionFragDepth:ht&&y.extensions.fragDepth===!0,extensionDrawBuffers:ht&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ht&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let B in y.defines)w.push(B),w.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(M(w,y),_(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function M(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function A(y){let w=x[y.type],B;if(w){let W=gn[w];B=ud.clone(W.uniforms)}else B=y.uniforms;return B}function C(y,w){let B;for(let W=0,nt=c.length;W<nt;W++){let I=c[W];if(I.cacheKey===w){B=I,++B.usedTimes;break}}return B===void 0&&(B=new M0(i,w,y,r),c.push(B)),B}function T(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:N}}function w0(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function E0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,p,x,g,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=g,f.group=m),t++,f}function a(d,u,p,x,g,m){let f=o(d,u,p,x,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,x,g,m){let f=o(d,u,p,x,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||E0),n.length>1&&n.sort(u||pc),s.length>1&&s.sort(u||pc)}function h(){for(let d=t,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function T0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new mc,i.set(n,[o])):s>=r.length?(o=new mc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function A0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Lt};break;case"SpotLight":e={position:new P,direction:new P,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function R0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var C0=0;function P0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function L0(i,t){let e=new A0,n=R0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new ne,a=new ne;function l(h,d){let u=0,p=0,x=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let g=0,m=0,f=0,M=0,_=0,A=0,C=0,T=0,R=0,N=0,y=0;h.sort(P0);let w=d===!0?Math.PI:1;for(let W=0,nt=h.length;W<nt;W++){let I=h[W],k=I.color,q=I.intensity,J=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=k.r*q*w,p+=k.g*q*w,x+=k.b*q*w;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(I.sh.coefficients[Z],q);y++}else if(I.isDirectionalLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){let Q=I.shadow,it=n.get(I);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,s.directionalShadow[g]=it,s.directionalShadowMap[g]=Y,s.directionalShadowMatrix[g]=I.shadow.matrix,A++}s.directional[g]=Z,g++}else if(I.isSpotLight){let Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(k).multiplyScalar(q*w),Z.distance=J,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,s.spot[f]=Z;let Q=I.shadow;if(I.map&&(s.spotLightMap[R]=I.map,R++,Q.updateMatrices(I),I.castShadow&&N++),s.spotLightMatrix[f]=Q.matrix,I.castShadow){let it=n.get(I);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,s.spotShadow[f]=it,s.spotShadowMap[f]=Y,T++}f++}else if(I.isRectAreaLight){let Z=e.get(I);Z.color.copy(k).multiplyScalar(q),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=Z,M++}else if(I.isPointLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*w),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let Q=I.shadow,it=n.get(I);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,it.shadowCameraNear=Q.camera.near,it.shadowCameraFar=Q.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=I.shadow.matrix,C++}s.point[m]=Z,m++}else if(I.isHemisphereLight){let Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(q*w),Z.groundColor.copy(I.groundColor).multiplyScalar(q*w),s.hemi[_]=Z,_++}}M>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=p,s.ambient[2]=x;let B=s.hash;(B.directionalLength!==g||B.pointLength!==m||B.spotLength!==f||B.rectAreaLength!==M||B.hemiLength!==_||B.numDirectionalShadows!==A||B.numPointShadows!==C||B.numSpotShadows!==T||B.numSpotMaps!==R||B.numLightProbes!==y)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+R-N,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=y,B.directionalLength=g,B.pointLength=m,B.spotLength=f,B.rectAreaLength=M,B.hemiLength=_,B.numDirectionalShadows=A,B.numPointShadows=C,B.numSpotShadows=T,B.numSpotMaps=R,B.numLightProbes=y,s.version=C0++)}function c(h,d){let u=0,p=0,x=0,g=0,m=0,f=d.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let A=h[M];if(A.isDirectionalLight){let C=s.directional[u];C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),u++}else if(A.isSpotLight){let C=s.spot[x];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),x++}else if(A.isRectAreaLight){let C=s.rectArea[g];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(A.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){let C=s.point[p];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(f),p++}else if(A.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function gc(i,t){let e=new L0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function I0(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new gc(i,t),e.set(r,[l])):o>=a.length?(l=new gc(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var $a=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ka=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U0=`uniform sampler2D shadow_pass;
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
}`;function N0(i,t,e){let n=new ms,s=new $t,r=new $t,o=new he,a=new $a({depthPacking:ku}),l=new Ka,c={},h=e.maxTextureSize,d={[Gn]:Ge,[Ge]:Gn,[un]:un},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:D0,fragmentShader:U0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new We;x.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Qt(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let f=this.type;this.render=function(T,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let y=i.getRenderTarget(),w=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Bn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let nt=f!==wn&&this.type===wn,I=f===wn&&this.type!==wn;for(let k=0,q=T.length;k<q;k++){let J=T[k],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let Z=Y.getFrameExtents();if(s.multiply(Z),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,Y.mapSize.y=r.y)),Y.map===null||nt===!0||I===!0){let it=this.type!==wn?{minFilter:be,magFilter:be}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Rn(s.x,s.y,it),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let Q=Y.getViewportCount();for(let it=0;it<Q;it++){let ft=Y.getViewport(it);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),W.viewport(o),Y.updateMatrices(J,it),n=Y.getFrustum(),A(R,N,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===wn&&M(Y,N),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,w,B)};function M(T,R){let N=t.update(g);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Rn(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,N,u,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,N,p,g,null)}function _(T,R,N,y){let w=null,B=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)w=B;else if(w=N.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=w.uuid,nt=R.uuid,I=c[W];I===void 0&&(I={},c[W]=I);let k=I[nt];k===void 0&&(k=w.clone(),I[nt]=k,R.addEventListener("dispose",C)),w=k}if(w.visible=R.visible,w.wireframe=R.wireframe,y===wn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:d[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let W=i.properties.get(w);W.light=N}return w}function A(T,R,N,y,w){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===wn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);let nt=t.update(T),I=T.material;if(Array.isArray(I)){let k=nt.groups;for(let q=0,J=k.length;q<J;q++){let Y=k[q],Z=I[Y.materialIndex];if(Z&&Z.visible){let Q=_(T,Z,y,w);T.onBeforeShadow(i,T,R,N,nt,Q,Y),i.renderBufferDirect(N,null,nt,Q,T,Y),T.onAfterShadow(i,T,R,N,nt,Q,Y)}}}else if(I.visible){let k=_(T,I,y,w);T.onBeforeShadow(i,T,R,N,nt,k,null),i.renderBufferDirect(N,null,nt,k,T,null),T.onAfterShadow(i,T,R,N,nt,k,null)}}let W=T.children;for(let nt=0,I=W.length;nt<I;nt++)A(W[nt],R,N,y,w)}function C(T){T.target.removeEventListener("dispose",C);for(let N in c){let y=c[N],w=T.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function O0(i,t,e){let n=e.isWebGL2;function s(){let L=!1,ct=new he,ht=null,Pt=new he(0,0,0,0);return{setMask:function(At){ht!==At&&!L&&(i.colorMask(At,At,At,At),ht=At)},setLocked:function(At){L=At},setClear:function(At,ie,se,Re,Fe){Fe===!0&&(At*=Re,ie*=Re,se*=Re),ct.set(At,ie,se,Re),Pt.equals(ct)===!1&&(i.clearColor(At,ie,se,Re),Pt.copy(ct))},reset:function(){L=!1,ht=null,Pt.set(-1,0,0,0)}}}function r(){let L=!1,ct=null,ht=null,Pt=null;return{setTest:function(At){At?Ot(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(At){ct!==At&&!L&&(i.depthMask(At),ct=At)},setFunc:function(At){if(ht!==At){switch(At){case pu:i.depthFunc(i.NEVER);break;case mu:i.depthFunc(i.ALWAYS);break;case gu:i.depthFunc(i.LESS);break;case tr:i.depthFunc(i.LEQUAL);break;case xu:i.depthFunc(i.EQUAL);break;case _u:i.depthFunc(i.GEQUAL);break;case vu:i.depthFunc(i.GREATER);break;case yu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=At}},setLocked:function(At){L=At},setClear:function(At){Pt!==At&&(i.clearDepth(At),Pt=At)},reset:function(){L=!1,ct=null,ht=null,Pt=null}}}function o(){let L=!1,ct=null,ht=null,Pt=null,At=null,ie=null,se=null,Re=null,Fe=null;return{setTest:function(re){L||(re?Ot(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(re){ct!==re&&!L&&(i.stencilMask(re),ct=re)},setFunc:function(re,ze,mn){(ht!==re||Pt!==ze||At!==mn)&&(i.stencilFunc(re,ze,mn),ht=re,Pt=ze,At=mn)},setOp:function(re,ze,mn){(ie!==re||se!==ze||Re!==mn)&&(i.stencilOp(re,ze,mn),ie=re,se=ze,Re=mn)},setLocked:function(re){L=re},setClear:function(re){Fe!==re&&(i.clearStencil(re),Fe=re)},reset:function(){L=!1,ct=null,ht=null,Pt=null,At=null,ie=null,se=null,Re=null,Fe=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,u={},p={},x=new WeakMap,g=[],m=null,f=!1,M=null,_=null,A=null,C=null,T=null,R=null,N=null,y=new Lt(0,0,0),w=0,B=!1,W=null,nt=null,I=null,k=null,q=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,Z=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=Z>=2);let it=null,ft={},X=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),dt=new he().fromArray(X),vt=new he().fromArray(j);function _t(L,ct,ht,Pt){let At=new Uint8Array(4),ie=i.createTexture();i.bindTexture(L,ie),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<ht;se++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(ct,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(ct+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ie}let Ut={};Ut[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ot(i.DEPTH_TEST),l.setFunc(tr),St(!1),S(Jo),Ot(i.CULL_FACE),st(Bn);function Ot(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Tt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function lt(L,ct){return p[L]!==ct?(i.bindFramebuffer(L,ct),p[L]=ct,n&&(L===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ct),L===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ct)),!0):!1}function O(L,ct){let ht=g,Pt=!1;if(L)if(ht=x.get(ct),ht===void 0&&(ht=[],x.set(ct,ht)),L.isWebGLMultipleRenderTargets){let At=L.texture;if(ht.length!==At.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,se=At.length;ie<se;ie++)ht[ie]=i.COLOR_ATTACHMENT0+ie;ht.length=At.length,Pt=!0}}else ht[0]!==i.COLOR_ATTACHMENT0&&(ht[0]=i.COLOR_ATTACHMENT0,Pt=!0);else ht[0]!==i.BACK&&(ht[0]=i.BACK,Pt=!0);Pt&&(e.isWebGL2?i.drawBuffers(ht):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ht))}function kt(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let D={[ii]:i.FUNC_ADD,[jh]:i.FUNC_SUBTRACT,[tu]:i.FUNC_REVERSE_SUBTRACT};if(n)D[jo]=i.MIN,D[tl]=i.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(D[jo]=L.MIN_EXT,D[tl]=L.MAX_EXT)}let $={[eu]:i.ZERO,[nu]:i.ONE,[iu]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[cu]:i.SRC_ALPHA_SATURATE,[ou]:i.DST_COLOR,[ru]:i.DST_ALPHA,[su]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[lu]:i.ONE_MINUS_DST_COLOR,[au]:i.ONE_MINUS_DST_ALPHA,[hu]:i.CONSTANT_COLOR,[uu]:i.ONE_MINUS_CONSTANT_COLOR,[du]:i.CONSTANT_ALPHA,[fu]:i.ONE_MINUS_CONSTANT_ALPHA};function st(L,ct,ht,Pt,At,ie,se,Re,Fe,re){if(L===Bn){f===!0&&(Tt(i.BLEND),f=!1);return}if(f===!1&&(Ot(i.BLEND),f=!0),L!==Qh){if(L!==M||re!==B){if((_!==ii||T!==ii)&&(i.blendEquation(i.FUNC_ADD),_=ii,T=ii),re)switch(L){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,C=null,R=null,N=null,y.set(0,0,0),w=0,M=L,B=re}return}At=At||ct,ie=ie||ht,se=se||Pt,(ct!==_||At!==T)&&(i.blendEquationSeparate(D[ct],D[At]),_=ct,T=At),(ht!==A||Pt!==C||ie!==R||se!==N)&&(i.blendFuncSeparate($[ht],$[Pt],$[ie],$[se]),A=ht,C=Pt,R=ie,N=se),(Re.equals(y)===!1||Fe!==w)&&(i.blendColor(Re.r,Re.g,Re.b,Fe),y.copy(Re),w=Fe),M=L,B=!1}function Dt(L,ct){L.side===un?Tt(i.CULL_FACE):Ot(i.CULL_FACE);let ht=L.side===Ge;ct&&(ht=!ht),St(ht),L.blending===Ui&&L.transparent===!1?st(Bn):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let Pt=L.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ot(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(L){W!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),W=L)}function S(L){L!==Jh?(Ot(i.CULL_FACE),L!==nt&&(L===Jo?i.cullFace(i.BACK):L===$h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),nt=L}function v(L){L!==I&&(Y&&i.lineWidth(L),I=L)}function z(L,ct,ht){L?(Ot(i.POLYGON_OFFSET_FILL),(k!==ct||q!==ht)&&(i.polygonOffset(ct,ht),k=ct,q=ht)):Tt(i.POLYGON_OFFSET_FILL)}function K(L){L?Ot(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function tt(L){L===void 0&&(L=i.TEXTURE0+J-1),it!==L&&(i.activeTexture(L),it=L)}function rt(L,ct,ht){ht===void 0&&(it===null?ht=i.TEXTURE0+J-1:ht=it);let Pt=ft[ht];Pt===void 0&&(Pt={type:void 0,texture:void 0},ft[ht]=Pt),(Pt.type!==L||Pt.texture!==ct)&&(it!==ht&&(i.activeTexture(ht),it=ht),i.bindTexture(L,ct||Ut[L]),Pt.type=L,Pt.texture=ct)}function Mt(){let L=ft[it];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ut(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(L){dt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),dt.copy(L))}function jt(L){vt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),vt.copy(L))}function pe(L,ct){let ht=d.get(ct);ht===void 0&&(ht=new WeakMap,d.set(ct,ht));let Pt=ht.get(L);Pt===void 0&&(Pt=i.getUniformBlockIndex(ct,L.name),ht.set(L,Pt))}function qt(L,ct){let Pt=d.get(ct).get(L);h.get(ct)!==Pt&&(i.uniformBlockBinding(ct,Pt,L.__bindingPointIndex),h.set(ct,Pt))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},it=null,ft={},p={},x=new WeakMap,g=[],m=null,f=!1,M=null,_=null,A=null,C=null,T=null,R=null,N=null,y=new Lt(0,0,0),w=0,B=!1,W=null,nt=null,I=null,k=null,q=null,dt.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ot,disable:Tt,bindFramebuffer:lt,drawBuffers:O,useProgram:kt,setBlending:st,setMaterial:Dt,setFlipSided:St,setCullFace:S,setLineWidth:v,setPolygonOffset:z,setScissorTest:K,activeTexture:tt,bindTexture:rt,unbindTexture:Mt,compressedTexImage2D:ut,compressedTexImage3D:gt,texImage2D:Et,texImage3D:xt,updateUBOMapping:pe,uniformBlockBinding:qt,texStorage2D:Jt,texStorage3D:Nt,texSubImage2D:Ct,texSubImage3D:Gt,compressedTexSubImage2D:et,compressedTexSubImage3D:te,scissor:Bt,viewport:jt,reset:at}}function F0(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,v){return p?new OffscreenCanvas(S,v):lr("canvas")}function g(S,v,z,K){let tt=1;if((S.width>K||S.height>K)&&(tt=K/Math.max(S.width,S.height)),tt<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let rt=v?ka:Math.floor,Mt=rt(tt*S.width),ut=rt(tt*S.height);d===void 0&&(d=x(Mt,ut));let gt=z?x(Mt,ut):d;return gt.width=Mt,gt.height=ut,gt.getContext("2d").drawImage(S,0,0,Mt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Mt+"x"+ut+")."),gt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Dl(S.width)&&Dl(S.height)}function f(S){return a?!1:S.wrapS!==dn||S.wrapT!==dn||S.minFilter!==be&&S.minFilter!==en}function M(S,v){return S.generateMipmaps&&v&&S.minFilter!==be&&S.minFilter!==en}function _(S){i.generateMipmap(S)}function A(S,v,z,K,tt=!1){if(a===!1)return v;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let rt=v;if(v===i.RED&&(z===i.FLOAT&&(rt=i.R32F),z===i.HALF_FLOAT&&(rt=i.R16F),z===i.UNSIGNED_BYTE&&(rt=i.R8)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.R8UI),z===i.UNSIGNED_SHORT&&(rt=i.R16UI),z===i.UNSIGNED_INT&&(rt=i.R32UI),z===i.BYTE&&(rt=i.R8I),z===i.SHORT&&(rt=i.R16I),z===i.INT&&(rt=i.R32I)),v===i.RG&&(z===i.FLOAT&&(rt=i.RG32F),z===i.HALF_FLOAT&&(rt=i.RG16F),z===i.UNSIGNED_BYTE&&(rt=i.RG8)),v===i.RGBA){let Mt=tt?ir:ee.getTransfer(K);z===i.FLOAT&&(rt=i.RGBA32F),z===i.HALF_FLOAT&&(rt=i.RGBA16F),z===i.UNSIGNED_BYTE&&(rt=Mt===ae?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function C(S,v,z){return M(S,z)===!0||S.isFramebufferTexture&&S.minFilter!==be&&S.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function T(S){return S===be||S===el||S===jr?i.NEAREST:i.LINEAR}function R(S){let v=S.target;v.removeEventListener("dispose",R),y(v),v.isVideoTexture&&h.delete(v)}function N(S){let v=S.target;v.removeEventListener("dispose",N),B(v)}function y(S){let v=n.get(S);if(v.__webglInit===void 0)return;let z=S.source,K=u.get(z);if(K){let tt=K[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(S),Object.keys(K).length===0&&u.delete(z)}n.remove(S)}function w(S){let v=n.get(S);i.deleteTexture(v.__webglTexture);let z=S.source,K=u.get(z);delete K[v.__cacheKey],o.memory.textures--}function B(S){let v=S.texture,z=n.get(S),K=n.get(v);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(z.__webglFramebuffer[tt]))for(let rt=0;rt<z.__webglFramebuffer[tt].length;rt++)i.deleteFramebuffer(z.__webglFramebuffer[tt][rt]);else i.deleteFramebuffer(z.__webglFramebuffer[tt]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[tt])}else{if(Array.isArray(z.__webglFramebuffer))for(let tt=0;tt<z.__webglFramebuffer.length;tt++)i.deleteFramebuffer(z.__webglFramebuffer[tt]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let tt=0;tt<z.__webglColorRenderbuffer.length;tt++)z.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[tt]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let tt=0,rt=v.length;tt<rt;tt++){let Mt=n.get(v[tt]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(v[tt])}n.remove(v),n.remove(S)}let W=0;function nt(){W=0}function I(){let S=W;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),W+=1,S}function k(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function q(S,v){let z=n.get(S);if(S.isVideoTexture&&Dt(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){let K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(z,S,v);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function J(S,v){let z=n.get(S);if(S.version>0&&z.__version!==S.version){dt(z,S,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function Y(S,v){let z=n.get(S);if(S.version>0&&z.__version!==S.version){dt(z,S,v);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function Z(S,v){let z=n.get(S);if(S.version>0&&z.__version!==S.version){vt(z,S,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}let Q={[ds]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},it={[be]:i.NEAREST,[el]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Cu]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},ft={[Hu]:i.NEVER,[Yu]:i.ALWAYS,[Vu]:i.LESS,[Nc]:i.LEQUAL,[Gu]:i.EQUAL,[qu]:i.GEQUAL,[Wu]:i.GREATER,[Xu]:i.NOTEQUAL};function X(S,v,z){if(z?(i.texParameteri(S,i.TEXTURE_WRAP_S,Q[v.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Q[v.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Q[v.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,it[v.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,it[v.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==dn||v.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,T(v.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==be&&v.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ft[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let K=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===be||v.minFilter!==jr&&v.minFilter!==fs||v.type===kn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===ps&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(S,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function j(S,v){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",R));let K=v.source,tt=u.get(K);tt===void 0&&(tt={},u.set(K,tt));let rt=k(v);if(rt!==S.__cacheKey){tt[rt]===void 0&&(tt[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),tt[rt].usedTimes++;let Mt=tt[S.__cacheKey];Mt!==void 0&&(tt[S.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(v)),S.__cacheKey=rt,S.__webglTexture=tt[rt].texture}return z}function dt(S,v,z){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);let tt=j(S,v),rt=v.source;e.bindTexture(K,S.__webglTexture,i.TEXTURE0+z);let Mt=n.get(rt);if(rt.version!==Mt.__version||tt===!0){e.activeTexture(i.TEXTURE0+z);let ut=ee.getPrimaries(ee.workingColorSpace),gt=v.colorSpace===nn?null:ee.getPrimaries(v.colorSpace),Ct=v.colorSpace===nn||ut===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Gt=f(v)&&m(v.image)===!1,et=g(v.image,Gt,!1,s.maxTextureSize);et=St(v,et);let te=m(et)||a,Jt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),Et=A(v.internalFormat,Jt,Nt,v.colorSpace,v.isVideoTexture);X(K,v,te);let xt,Bt=v.mipmaps,jt=a&&v.isVideoTexture!==!0&&Et!==Ic,pe=Mt.__version===void 0||tt===!0,qt=C(v,et,te);if(v.isDepthTexture)Et=i.DEPTH_COMPONENT,a?v.type===kn?Et=i.DEPTH_COMPONENT32F:v.type===zn?Et=i.DEPTH_COMPONENT24:v.type===ri?Et=i.DEPTH24_STENCIL8:Et=i.DEPTH_COMPONENT16:v.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ai&&Et===i.DEPTH_COMPONENT&&v.type!==vo&&v.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=zn,Nt=r.convert(v.type)),v.format===ki&&Et===i.DEPTH_COMPONENT&&(Et=i.DEPTH_STENCIL,v.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ri,Nt=r.convert(v.type))),pe&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Et,et.width,et.height,0,Jt,Nt,null));else if(v.isDataTexture)if(Bt.length>0&&te){jt&&pe&&e.texStorage2D(i.TEXTURE_2D,qt,Et,Bt[0].width,Bt[0].height);for(let at=0,L=Bt.length;at<L;at++)xt=Bt[at],jt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,Jt,Nt,xt.data):e.texImage2D(i.TEXTURE_2D,at,Et,xt.width,xt.height,0,Jt,Nt,xt.data);v.generateMipmaps=!1}else jt?(pe&&e.texStorage2D(i.TEXTURE_2D,qt,Et,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,Jt,Nt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Et,et.width,et.height,0,Jt,Nt,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){jt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Et,Bt[0].width,Bt[0].height,et.depth);for(let at=0,L=Bt.length;at<L;at++)xt=Bt[at],v.format!==fn?Jt!==null?jt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,et.depth,Jt,xt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Et,xt.width,xt.height,et.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,et.depth,Jt,Nt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Et,xt.width,xt.height,et.depth,0,Jt,Nt,xt.data)}else{jt&&pe&&e.texStorage2D(i.TEXTURE_2D,qt,Et,Bt[0].width,Bt[0].height);for(let at=0,L=Bt.length;at<L;at++)xt=Bt[at],v.format!==fn?Jt!==null?jt?e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,Jt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Et,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,Jt,Nt,xt.data):e.texImage2D(i.TEXTURE_2D,at,Et,xt.width,xt.height,0,Jt,Nt,xt.data)}else if(v.isDataArrayTexture)jt?(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Et,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Jt,Nt,et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,Jt,Nt,et.data);else if(v.isData3DTexture)jt?(pe&&e.texStorage3D(i.TEXTURE_3D,qt,Et,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Jt,Nt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,Jt,Nt,et.data);else if(v.isFramebufferTexture){if(pe)if(jt)e.texStorage2D(i.TEXTURE_2D,qt,Et,et.width,et.height);else{let at=et.width,L=et.height;for(let ct=0;ct<qt;ct++)e.texImage2D(i.TEXTURE_2D,ct,Et,at,L,0,Jt,Nt,null),at>>=1,L>>=1}}else if(Bt.length>0&&te){jt&&pe&&e.texStorage2D(i.TEXTURE_2D,qt,Et,Bt[0].width,Bt[0].height);for(let at=0,L=Bt.length;at<L;at++)xt=Bt[at],jt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,Jt,Nt,xt):e.texImage2D(i.TEXTURE_2D,at,Et,Jt,Nt,xt);v.generateMipmaps=!1}else jt?(pe&&e.texStorage2D(i.TEXTURE_2D,qt,Et,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Jt,Nt,et)):e.texImage2D(i.TEXTURE_2D,0,Et,Jt,Nt,et);M(v,te)&&_(K),Mt.__version=rt.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function vt(S,v,z){if(v.image.length!==6)return;let K=j(S,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+z);let rt=n.get(tt);if(tt.version!==rt.__version||K===!0){e.activeTexture(i.TEXTURE0+z);let Mt=ee.getPrimaries(ee.workingColorSpace),ut=v.colorSpace===nn?null:ee.getPrimaries(v.colorSpace),gt=v.colorSpace===nn||Mt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ct=v.isCompressedTexture||v.image[0].isCompressedTexture,Gt=v.image[0]&&v.image[0].isDataTexture,et=[];for(let at=0;at<6;at++)!Ct&&!Gt?et[at]=g(v.image[at],!1,!0,s.maxCubemapSize):et[at]=Gt?v.image[at].image:v.image[at],et[at]=St(v,et[at]);let te=et[0],Jt=m(te)||a,Nt=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),xt=A(v.internalFormat,Nt,Et,v.colorSpace),Bt=a&&v.isVideoTexture!==!0,jt=rt.__version===void 0||K===!0,pe=C(v,te,Jt);X(i.TEXTURE_CUBE_MAP,v,Jt);let qt;if(Ct){Bt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pe,xt,te.width,te.height);for(let at=0;at<6;at++){qt=et[at].mipmaps;for(let L=0;L<qt.length;L++){let ct=qt[L];v.format!==fn?Nt!==null?Bt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,0,0,ct.width,ct.height,Nt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,xt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,0,0,ct.width,ct.height,Nt,Et,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,xt,ct.width,ct.height,0,Nt,Et,ct.data)}}}else{qt=v.mipmaps,Bt&&jt&&(qt.length>0&&pe++,e.texStorage2D(i.TEXTURE_CUBE_MAP,pe,xt,et[0].width,et[0].height));for(let at=0;at<6;at++)if(Gt){Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,et[at].width,et[at].height,Nt,Et,et[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,xt,et[at].width,et[at].height,0,Nt,Et,et[at].data);for(let L=0;L<qt.length;L++){let ht=qt[L].image[at].image;Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,0,0,ht.width,ht.height,Nt,Et,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,xt,ht.width,ht.height,0,Nt,Et,ht.data)}}else{Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Nt,Et,et[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,xt,Nt,Et,et[at]);for(let L=0;L<qt.length;L++){let ct=qt[L];Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,0,0,Nt,Et,ct.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,xt,Nt,Et,ct.image[at])}}}M(v,Jt)&&_(i.TEXTURE_CUBE_MAP),rt.__version=tt.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function _t(S,v,z,K,tt,rt){let Mt=r.convert(z.format,z.colorSpace),ut=r.convert(z.type),gt=A(z.internalFormat,Mt,ut,z.colorSpace);if(!n.get(v).__hasExternalTextures){let Gt=Math.max(1,v.width>>rt),et=Math.max(1,v.height>>rt);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,rt,gt,Gt,et,v.depth,0,Mt,ut,null):e.texImage2D(tt,rt,gt,Gt,et,0,Mt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),st(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,n.get(z).__webglTexture,0,$(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,n.get(z).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(S,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let K=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||st(v)){let tt=v.depthTexture;tt&&tt.isDepthTexture&&(tt.type===kn?K=i.DEPTH_COMPONENT32F:tt.type===zn&&(K=i.DEPTH_COMPONENT24));let rt=$(v);st(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,K,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,K,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){let K=$(v);z&&st(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,v.width,v.height):st(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let tt=0;tt<K.length;tt++){let rt=K[tt],Mt=r.convert(rt.format,rt.colorSpace),ut=r.convert(rt.type),gt=A(rt.internalFormat,Mt,ut,rt.colorSpace),Ct=$(v);z&&st(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,gt,v.width,v.height):st(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);let K=n.get(v.depthTexture).__webglTexture,tt=$(v);if(v.depthTexture.format===ai)st(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===ki)st(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Tt(S){let v=n.get(S),z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ot(v.__webglFramebuffer,S)}else if(z){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=i.createRenderbuffer(),Ut(v.__webglDepthbuffer[K],S,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Ut(v.__webglDepthbuffer,S,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(S,v,z){let K=n.get(S);v!==void 0&&_t(K.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Tt(S)}function O(S){let v=S.texture,z=n.get(S),K=n.get(v);S.addEventListener("dispose",N),S.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++);let tt=S.isWebGLCubeRenderTarget===!0,rt=S.isWebGLMultipleRenderTargets===!0,Mt=m(S)||a;if(tt){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let gt=0;gt<v.mipmaps.length;gt++)z.__webglFramebuffer[ut][gt]=i.createFramebuffer()}else z.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)z.__webglFramebuffer[ut]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(rt)if(s.drawBuffers){let ut=S.texture;for(let gt=0,Ct=ut.length;gt<Ct;gt++){let Gt=n.get(ut[gt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&st(S)===!1){let ut=rt?v:[v];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let gt=0;gt<ut.length;gt++){let Ct=ut[gt];z.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[gt]);let Gt=r.convert(Ct.format,Ct.colorSpace),et=r.convert(Ct.type),te=A(Ct.internalFormat,Gt,et,Ct.colorSpace,S.isXRRenderTarget===!0),Jt=$(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,te,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,z.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(z.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),X(i.TEXTURE_CUBE_MAP,v,Mt);for(let ut=0;ut<6;ut++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)_t(z.__webglFramebuffer[ut][gt],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else _t(z.__webglFramebuffer[ut],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);M(v,Mt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){let ut=S.texture;for(let gt=0,Ct=ut.length;gt<Ct;gt++){let Gt=ut[gt],et=n.get(Gt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),X(i.TEXTURE_2D,Gt,Mt),_t(z.__webglFramebuffer,S,Gt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),M(Gt,Mt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ut=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,K.__webglTexture),X(ut,v,Mt),a&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)_t(z.__webglFramebuffer[gt],S,v,i.COLOR_ATTACHMENT0,ut,gt);else _t(z.__webglFramebuffer,S,v,i.COLOR_ATTACHMENT0,ut,0);M(v,Mt)&&_(ut),e.unbindTexture()}S.depthBuffer&&Tt(S)}function kt(S){let v=m(S)||a,z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0,tt=z.length;K<tt;K++){let rt=z[K];if(M(rt,v)){let Mt=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ut=n.get(rt).__webglTexture;e.bindTexture(Mt,ut),_(Mt),e.unbindTexture()}}}function D(S){if(a&&S.samples>0&&st(S)===!1){let v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],z=S.width,K=S.height,tt=i.COLOR_BUFFER_BIT,rt=[],Mt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(S),gt=S.isWebGLMultipleRenderTargets===!0;if(gt)for(let Ct=0;Ct<v.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Ct=0;Ct<v.length;Ct++){rt.push(i.COLOR_ATTACHMENT0+Ct),S.depthBuffer&&rt.push(Mt);let Gt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Gt===!1&&(S.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),gt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[Ct]),Gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Mt])),gt){let et=n.get(v[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,tt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Ct=0;Ct<v.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,ut.__webglColorRenderbuffer[Ct]);let Gt=n.get(v[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function $(S){return Math.min(s.maxSamples,S.samples)}function st(S){let v=n.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Dt(S){let v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function St(S,v){let z=S.colorSpace,K=S.format,tt=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===za||z!==An&&z!==nn&&(ee.getTransfer(z)===ae?a===!1?t.has("EXT_sRGB")===!0&&K===fn?(S.format=za,S.minFilter=en,S.generateMipmaps=!1):v=cr.sRGBToLinear(v):(K!==fn||tt!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}this.allocateTextureUnit=I,this.resetTextureUnits=nt,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=lt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=st}function z0(i,t,e){let n=e.isWebGL2;function s(r,o=nn){let a,l=ee.getTransfer(o);if(r===Vn)return i.UNSIGNED_BYTE;if(r===Ac)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Rc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Pu)return i.BYTE;if(r===Lu)return i.SHORT;if(r===vo)return i.UNSIGNED_SHORT;if(r===Tc)return i.INT;if(r===zn)return i.UNSIGNED_INT;if(r===kn)return i.FLOAT;if(r===ps)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Iu)return i.ALPHA;if(r===fn)return i.RGBA;if(r===Du)return i.LUMINANCE;if(r===Uu)return i.LUMINANCE_ALPHA;if(r===ai)return i.DEPTH_COMPONENT;if(r===ki)return i.DEPTH_STENCIL;if(r===za)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nu)return i.RED;if(r===Cc)return i.RED_INTEGER;if(r===Ou)return i.RG;if(r===Pc)return i.RG_INTEGER;if(r===Lc)return i.RGBA_INTEGER;if(r===ta||r===ea||r===na||r===ia)if(l===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ta)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ta)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ea)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ia)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nl||r===il||r===sl||r===rl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===nl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===il)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ic)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===al||r===ol)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===al)return l===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ol)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ll||r===cl||r===hl||r===ul||r===dl||r===fl||r===pl||r===ml||r===gl||r===xl||r===_l||r===vl||r===yl||r===Ml)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ll)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ul)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ml)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_l)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ml)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sa||r===bl||r===Sl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===sa)return l===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fu||r===wl||r===El||r===Tl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===sa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===El)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ri?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Qa=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Be=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},k0={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&u>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ja=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,x=null,g=e.getContextAttributes(),m=null,f=null,M=[],_=[],A=new $t,C=null,T=new Ie;T.layers.enable(1),T.viewport=new he;let R=new Ie;R.layers.enable(2),R.viewport=new he;let N=[T,R],y=new Qa;y.layers.enable(1),y.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=M[X];return j===void 0&&(j=new us,M[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=M[X];return j===void 0&&(j=new us,M[X]=j),j.getGripSpace()},this.getHand=function(X){let j=M[X];return j===void 0&&(j=new us,M[X]=j),j.getHandSpace()};function W(X){let j=_.indexOf(X.inputSource);if(j===-1)return;let dt=M[j];dt!==void 0&&(dt.update(X.inputSource,X.frame,c||o),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function nt(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",I);for(let X=0;X<M.length;X++){let j=_[X];j!==null&&(_[X]=null,M[X].disconnect(j))}w=null,B=null,t.setRenderTarget(m),p=null,u=null,d=null,s=null,f=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Rn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,dt=null,vt=null;g.depth&&(vt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=g.stencil?ki:ai,dt=g.stencil?ri:zn);let _t={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(_t),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),f=new Rn(u.textureWidth,u.textureHeight,{format:fn,type:Vn,depthTexture:new Mr(u.textureWidth,u.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let Ut=t.properties.get(f);Ut.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(X){for(let j=0;j<X.removed.length;j++){let dt=X.removed[j],vt=_.indexOf(dt);vt>=0&&(_[vt]=null,M[vt].disconnect(dt))}for(let j=0;j<X.added.length;j++){let dt=X.added[j],vt=_.indexOf(dt);if(vt===-1){for(let Ut=0;Ut<M.length;Ut++)if(Ut>=_.length){_.push(dt),vt=Ut;break}else if(_[Ut]===null){_[Ut]=dt,vt=Ut;break}if(vt===-1)break}let _t=M[vt];_t&&_t.connect(dt)}}let k=new P,q=new P;function J(X,j,dt){k.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(dt.matrixWorld);let vt=k.distanceTo(q),_t=j.projectionMatrix.elements,Ut=dt.projectionMatrix.elements,Ot=_t[14]/(_t[10]-1),Tt=_t[14]/(_t[10]+1),lt=(_t[9]+1)/_t[5],O=(_t[9]-1)/_t[5],kt=(_t[8]-1)/_t[0],D=(Ut[8]+1)/Ut[0],$=Ot*kt,st=Ot*D,Dt=vt/(-kt+D),St=Dt*-kt;j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(St),X.translateZ(Dt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let S=Ot+Dt,v=Tt+Dt,z=$-St,K=st+(vt-St),tt=lt*Tt/v*S,rt=O*Tt/v*S;X.projectionMatrix.makePerspective(z,K,tt,rt,S,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;y.near=R.near=T.near=X.near,y.far=R.far=T.far=X.far,(w!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,B=y.far);let j=X.parent,dt=y.cameras;Y(y,j);for(let vt=0;vt<dt.length;vt++)Y(dt[vt],j);dt.length===2?J(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),Z(X,y,j)};function Z(X,j,dt){dt===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=or*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let Q=null;function it(X,j){if(h=j.getViewerPose(c||o),x=j,h!==null){let dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let vt=!1;dt.length!==y.cameras.length&&(y.cameras.length=0,vt=!0);for(let _t=0;_t<dt.length;_t++){let Ut=dt[_t],Ot=null;if(p!==null)Ot=p.getViewport(Ut);else{let lt=d.getViewSubImage(u,Ut);Ot=lt.viewport,_t===0&&(t.setRenderTargetTextures(f,lt.colorTexture,u.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(f))}let Tt=N[_t];Tt===void 0&&(Tt=new Ie,Tt.layers.enable(_t),Tt.viewport=new he,N[_t]=Tt),Tt.matrix.fromArray(Ut.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Ut.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),_t===0&&(y.matrix.copy(Tt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),vt===!0&&y.cameras.push(Tt)}}for(let dt=0;dt<M.length;dt++){let vt=_[dt],_t=M[dt];vt!==null&&_t!==void 0&&_t.update(vt,j,c||o)}Q&&Q(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}let ft=new Bc;ft.setAnimationLoop(it),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}};function B0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,kc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,_,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ge&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ge&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ge&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H0(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let A=_.program;n.uniformBlockBinding(M,A)}function c(M,_){let A=s[M.id];A===void 0&&(x(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",m));let C=_.program;n.updateUBOMapping(M,C);let T=t.render.frame;r[M.id]!==T&&(u(M),r[M.id]=T)}function h(M){let _=d();M.__bindingPointIndex=_;let A=i.createBuffer(),C=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,A),A}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let _=s[M.id],A=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,R=A.length;T<R;T++){let N=Array.isArray(A[T])?A[T]:[A[T]];for(let y=0,w=N.length;y<w;y++){let B=N[y];if(p(B,T,y,C)===!0){let W=B.__offset,nt=Array.isArray(B.value)?B.value:[B.value],I=0;for(let k=0;k<nt.length;k++){let q=nt[k],J=g(q);typeof q=="number"||typeof q=="boolean"?(B.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,W+I,B.__data)):q.isMatrix3?(B.__data[0]=q.elements[0],B.__data[1]=q.elements[1],B.__data[2]=q.elements[2],B.__data[3]=0,B.__data[4]=q.elements[3],B.__data[5]=q.elements[4],B.__data[6]=q.elements[5],B.__data[7]=0,B.__data[8]=q.elements[6],B.__data[9]=q.elements[7],B.__data[10]=q.elements[8],B.__data[11]=0):(q.toArray(B.__data,I),I+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,_,A,C){let T=M.value,R=_+"_"+A;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let N=C[R];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return C[R]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function x(M){let _=M.uniforms,A=0,C=16;for(let R=0,N=_.length;R<N;R++){let y=Array.isArray(_[R])?_[R]:[_[R]];for(let w=0,B=y.length;w<B;w++){let W=y[w],nt=Array.isArray(W.value)?W.value:[W.value];for(let I=0,k=nt.length;I<k;I++){let q=nt[I],J=g(q),Y=A%C;Y!==0&&C-Y<J.boundary&&(A+=C-Y),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=J.storage}}}let T=A%C;return T>0&&(A+=C-T),M.__size=A,M.__cache={},this}function g(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let A=o.indexOf(_.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var gs=class{constructor(t={}){let{canvas:e=Ju(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,f=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this._useLegacyLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1;let _=this,A=!1,C=0,T=0,R=null,N=-1,y=null,w=new he,B=new he,W=null,nt=new Lt(0),I=0,k=e.width,q=e.height,J=1,Y=null,Z=null,Q=new he(0,0,k,q),it=new he(0,0,k,q),ft=!1,X=new ms,j=!1,dt=!1,vt=null,_t=new ne,Ut=new $t,Ot=new P,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return R===null?J:1}let O=n;function kt(b,F){for(let V=0;V<b.length;V++){let G=b[V],H=e.getContext(G,F);if(H!==null)return H}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xo}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ct,!1),O===null){let F=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&F.shift(),O=kt(F,b),O===null)throw kt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let D,$,st,Dt,St,S,v,z,K,tt,rt,Mt,ut,gt,Ct,Gt,et,te,Jt,Nt,Et,xt,Bt,jt;function pe(){D=new am(O),$=new tm(O,D,t),D.init($),xt=new z0(O,D,$),st=new O0(O,D,$),Dt=new cm(O),St=new w0,S=new F0(O,D,st,St,$,xt,Dt),v=new nm(_),z=new rm(_),K=new gd(O,$),Bt=new Qp(O,D,K,$),tt=new om(O,K,Dt,Bt),rt=new fm(O,tt,K,Dt),Jt=new dm(O,$,S),Gt=new em(St),Mt=new S0(_,v,z,D,$,Bt,Gt),ut=new B0(_,St),gt=new T0,Ct=new I0(D,$),te=new Kp(_,v,z,st,rt,u,l),et=new N0(_,rt,$),jt=new H0(O,Dt,$,st),Nt=new jp(O,D,Dt,$),Et=new lm(O,D,Dt,$),Dt.programs=Mt.programs,_.capabilities=$,_.extensions=D,_.properties=St,_.renderLists=gt,_.shadowMap=et,_.state=st,_.info=Dt}pe();let qt=new ja(_,O);this.xr=qt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=D.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=D.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(k,q,!1))},this.getSize=function(b){return b.set(k,q)},this.setSize=function(b,F,V=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,q=F,e.width=Math.floor(b*J),e.height=Math.floor(F*J),V===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(k*J,q*J).floor()},this.setDrawingBufferSize=function(b,F,V){k=b,q=F,J=V,e.width=Math.floor(b*V),e.height=Math.floor(F*V),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(Q)},this.setViewport=function(b,F,V,G){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,F,V,G),st.viewport(w.copy(Q).multiplyScalar(J).floor())},this.getScissor=function(b){return b.copy(it)},this.setScissor=function(b,F,V,G){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,F,V,G),st.scissor(B.copy(it).multiplyScalar(J).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(b){st.setScissorTest(ft=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(b=!0,F=!0,V=!0){let G=0;if(b){let H=!1;if(R!==null){let pt=R.texture.format;H=pt===Lc||pt===Pc||pt===Cc}if(H){let pt=R.texture.type,bt=pt===Vn||pt===zn||pt===vo||pt===ri||pt===Ac||pt===Rc,Rt=te.getClearColor(),It=te.getClearAlpha(),Wt=Rt.r,Ft=Rt.g,zt=Rt.b;bt?(p[0]=Wt,p[1]=Ft,p[2]=zt,p[3]=It,O.clearBufferuiv(O.COLOR,0,p)):(x[0]=Wt,x[1]=Ft,x[2]=zt,x[3]=It,O.clearBufferiv(O.COLOR,0,x))}else G|=O.COLOR_BUFFER_BIT}F&&(G|=O.DEPTH_BUFFER_BIT),V&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),gt.dispose(),Ct.dispose(),St.dispose(),v.dispose(),z.dispose(),rt.dispose(),Bt.dispose(),jt.dispose(),Mt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Fe),qt.removeEventListener("sessionend",re),vt&&(vt.dispose(),vt=null),ze.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=Dt.autoReset,F=et.enabled,V=et.autoUpdate,G=et.needsUpdate,H=et.type;pe(),Dt.autoReset=b,et.enabled=F,et.autoUpdate=V,et.needsUpdate=G,et.type=H}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){let F=b.target;F.removeEventListener("dispose",ht),Pt(F)}function Pt(b){At(b),St.remove(b)}function At(b){let F=St.get(b).programs;F!==void 0&&(F.forEach(function(V){Mt.releaseProgram(V)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,V,G,H,pt){F===null&&(F=Tt);let bt=H.isMesh&&H.matrixWorld.determinant()<0,Rt=Xh(b,F,V,G,H);st.setMaterial(G,bt);let It=V.index,Wt=1;if(G.wireframe===!0){if(It=tt.getWireframeAttribute(V),It===void 0)return;Wt=2}let Ft=V.drawRange,zt=V.attributes.position,xe=Ft.start*Wt,qe=(Ft.start+Ft.count)*Wt;pt!==null&&(xe=Math.max(xe,pt.start*Wt),qe=Math.min(qe,(pt.start+pt.count)*Wt)),It!==null?(xe=Math.max(xe,0),qe=Math.min(qe,It.count)):zt!=null&&(xe=Math.max(xe,0),qe=Math.min(qe,zt.count));let Ce=qe-xe;if(Ce<0||Ce===1/0)return;Bt.setup(H,G,Rt,V,It);let _n,de=Nt;if(It!==null&&(_n=K.get(It),de=Et,de.setIndex(_n)),H.isMesh)G.wireframe===!0?(st.setLineWidth(G.wireframeLinewidth*lt()),de.setMode(O.LINES)):de.setMode(O.TRIANGLES);else if(H.isLine){let Yt=G.linewidth;Yt===void 0&&(Yt=1),st.setLineWidth(Yt*lt()),H.isLineSegments?de.setMode(O.LINES):H.isLineLoop?de.setMode(O.LINE_LOOP):de.setMode(O.LINE_STRIP)}else H.isPoints?de.setMode(O.POINTS):H.isSprite&&de.setMode(O.TRIANGLES);if(H.isBatchedMesh)de.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)de.renderInstances(xe,Ce,H.count);else if(V.isInstancedBufferGeometry){let Yt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Jr=Math.min(V.instanceCount,Yt);de.renderInstances(xe,Ce,Jr)}else de.render(xe,Ce)};function ie(b,F,V){b.transparent===!0&&b.side===un&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,Rs(b,F,V),b.side=Gn,b.needsUpdate=!0,Rs(b,F,V),b.side=un):Rs(b,F,V)}this.compile=function(b,F,V=null){V===null&&(V=b),m=Ct.get(V),m.init(),M.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),b!==V&&b.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);let G=new Set;return b.traverse(function(H){let pt=H.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){let Rt=pt[bt];ie(Rt,V,H),G.add(Rt)}else ie(pt,V,H),G.add(pt)}),M.pop(),m=null,G},this.compileAsync=function(b,F,V=null){let G=this.compile(b,F,V);return new Promise(H=>{function pt(){if(G.forEach(function(bt){St.get(bt).currentProgram.isReady()&&G.delete(bt)}),G.size===0){H(b);return}setTimeout(pt,10)}D.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let se=null;function Re(b){se&&se(b)}function Fe(){ze.stop()}function re(){ze.start()}let ze=new Bc;ze.setAnimationLoop(Re),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(b){se=b,qt.setAnimationLoop(b),b===null?ze.stop():ze.start()},qt.addEventListener("sessionstart",Fe),qt.addEventListener("sessionend",re),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(F),F=qt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,F,R),m=Ct.get(b,M.length),m.init(),M.push(m),_t.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(_t),dt=this.localClippingEnabled,j=Gt.init(this.clippingPlanes,dt),g=gt.get(b,f.length),g.init(),f.push(g),mn(b,F,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Y,Z),this.info.render.frame++,j===!0&&Gt.beginShadows();let V=m.state.shadowsArray;if(et.render(V,b,F),j===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(g,b),m.setupLights(_._useLegacyLights),F.isArrayCamera){let G=F.cameras;for(let H=0,pt=G.length;H<pt;H++){let bt=G[H];Go(g,b,bt,bt.viewport)}}else Go(g,b,F);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(_,b,F),Bt.resetDefaultState(),N=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function mn(b,F,V,G){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){G&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);let bt=rt.update(b),Rt=b.material;Rt.visible&&g.push(b,bt,Rt,V,Ot.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){let bt=rt.update(b),Rt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ot.copy(bt.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(Rt)){let It=bt.groups;for(let Wt=0,Ft=It.length;Wt<Ft;Wt++){let zt=It[Wt],xe=Rt[zt.materialIndex];xe&&xe.visible&&g.push(b,bt,xe,V,Ot.z,zt)}}else Rt.visible&&g.push(b,bt,Rt,V,Ot.z,null)}}let pt=b.children;for(let bt=0,Rt=pt.length;bt<Rt;bt++)mn(pt[bt],F,V,G)}function Go(b,F,V,G){let H=b.opaque,pt=b.transmissive,bt=b.transparent;m.setupLightsView(V),j===!0&&Gt.setGlobalState(_.clippingPlanes,V),pt.length>0&&Wh(H,pt,F,V),G&&st.viewport(w.copy(G)),H.length>0&&As(H,F,V),pt.length>0&&As(pt,F,V),bt.length>0&&As(bt,F,V),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Wh(b,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let pt=$.isWebGL2;vt===null&&(vt=new Rn(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")?ps:Vn,minFilter:fs,samples:pt?4:0})),_.getDrawingBufferSize(Ut),pt?vt.setSize(Ut.x,Ut.y):vt.setSize(ka(Ut.x),ka(Ut.y));let bt=_.getRenderTarget();_.setRenderTarget(vt),_.getClearColor(nt),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let Rt=_.toneMapping;_.toneMapping=Hn,As(b,V,G),S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt);let It=!1;for(let Wt=0,Ft=F.length;Wt<Ft;Wt++){let zt=F[Wt],xe=zt.object,qe=zt.geometry,Ce=zt.material,_n=zt.group;if(Ce.side===un&&xe.layers.test(G.layers)){let de=Ce.side;Ce.side=Ge,Ce.needsUpdate=!0,Wo(xe,V,G,qe,Ce,_n),Ce.side=de,Ce.needsUpdate=!0,It=!0}}It===!0&&(S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt)),_.setRenderTarget(bt),_.setClearColor(nt,I),_.toneMapping=Rt}function As(b,F,V){let G=F.isScene===!0?F.overrideMaterial:null;for(let H=0,pt=b.length;H<pt;H++){let bt=b[H],Rt=bt.object,It=bt.geometry,Wt=G===null?bt.material:G,Ft=bt.group;Rt.layers.test(V.layers)&&Wo(Rt,F,V,It,Wt,Ft)}}function Wo(b,F,V,G,H,pt){b.onBeforeRender(_,F,V,G,H,pt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(_,F,V,G,b,pt),H.transparent===!0&&H.side===un&&H.forceSinglePass===!1?(H.side=Ge,H.needsUpdate=!0,_.renderBufferDirect(V,F,G,H,b,pt),H.side=Gn,H.needsUpdate=!0,_.renderBufferDirect(V,F,G,H,b,pt),H.side=un):_.renderBufferDirect(V,F,G,H,b,pt),b.onAfterRender(_,F,V,G,H,pt)}function Rs(b,F,V){F.isScene!==!0&&(F=Tt);let G=St.get(b),H=m.state.lights,pt=m.state.shadowsArray,bt=H.state.version,Rt=Mt.getParameters(b,H.state,pt,F,V),It=Mt.getProgramCacheKey(Rt),Wt=G.programs;G.environment=b.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(b.isMeshStandardMaterial?z:v).get(b.envMap||G.environment),Wt===void 0&&(b.addEventListener("dispose",ht),Wt=new Map,G.programs=Wt);let Ft=Wt.get(It);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===bt)return qo(b,Rt),Ft}else Rt.uniforms=Mt.getUniforms(b),b.onBuild(V,Rt,_),b.onBeforeCompile(Rt,_),Ft=Mt.acquireProgram(Rt,It),Wt.set(It,Ft),G.uniforms=Rt.uniforms;let zt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(zt.clippingPlanes=Gt.uniform),qo(b,Rt),G.needsLights=Yh(b),G.lightsStateVersion=bt,G.needsLights&&(zt.ambientLightColor.value=H.state.ambient,zt.lightProbe.value=H.state.probe,zt.directionalLights.value=H.state.directional,zt.directionalLightShadows.value=H.state.directionalShadow,zt.spotLights.value=H.state.spot,zt.spotLightShadows.value=H.state.spotShadow,zt.rectAreaLights.value=H.state.rectArea,zt.ltc_1.value=H.state.rectAreaLTC1,zt.ltc_2.value=H.state.rectAreaLTC2,zt.pointLights.value=H.state.point,zt.pointLightShadows.value=H.state.pointShadow,zt.hemisphereLights.value=H.state.hemi,zt.directionalShadowMap.value=H.state.directionalShadowMap,zt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,zt.spotShadowMap.value=H.state.spotShadowMap,zt.spotLightMatrix.value=H.state.spotLightMatrix,zt.spotLightMap.value=H.state.spotLightMap,zt.pointShadowMap.value=H.state.pointShadowMap,zt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function Xo(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Oi.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function qo(b,F){let V=St.get(b);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Xh(b,F,V,G,H){F.isScene!==!0&&(F=Tt),S.resetTextureUnits();let pt=F.fog,bt=G.isMeshStandardMaterial?F.environment:null,Rt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:An,It=(G.isMeshStandardMaterial?z:v).get(G.envMap||bt),Wt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ft=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),zt=!!V.morphAttributes.position,xe=!!V.morphAttributes.normal,qe=!!V.morphAttributes.color,Ce=Hn;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ce=_.toneMapping);let _n=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=_n!==void 0?_n.length:0,Yt=St.get(G),Jr=m.state.lights;if(j===!0&&(dt===!0||b!==y)){let je=b===y&&G.id===N;Gt.setState(G,b,je)}let me=!1;G.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Jr.state.version||Yt.outputColorSpace!==Rt||H.isBatchedMesh&&Yt.batching===!1||!H.isBatchedMesh&&Yt.batching===!0||H.isInstancedMesh&&Yt.instancing===!1||!H.isInstancedMesh&&Yt.instancing===!0||H.isSkinnedMesh&&Yt.skinning===!1||!H.isSkinnedMesh&&Yt.skinning===!0||H.isInstancedMesh&&Yt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Yt.instancingColor===!1&&H.instanceColor!==null||Yt.envMap!==It||G.fog===!0&&Yt.fog!==pt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Gt.numPlanes||Yt.numIntersection!==Gt.numIntersection)||Yt.vertexAlphas!==Wt||Yt.vertexTangents!==Ft||Yt.morphTargets!==zt||Yt.morphNormals!==xe||Yt.morphColors!==qe||Yt.toneMapping!==Ce||$.isWebGL2===!0&&Yt.morphTargetsCount!==de)&&(me=!0):(me=!0,Yt.__version=G.version);let $n=Yt.currentProgram;me===!0&&($n=Rs(G,F,H));let Yo=!1,es=!1,$r=!1,Ue=$n.getUniforms(),Kn=Yt.uniforms;if(st.useProgram($n.program)&&(Yo=!0,es=!0,$r=!0),G.id!==N&&(N=G.id,es=!0),Yo||y!==b){Ue.setValue(O,"projectionMatrix",b.projectionMatrix),Ue.setValue(O,"viewMatrix",b.matrixWorldInverse);let je=Ue.map.cameraPosition;je!==void 0&&je.setValue(O,Ot.setFromMatrixPosition(b.matrixWorld)),$.logarithmicDepthBuffer&&Ue.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ue.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,es=!0,$r=!0)}if(H.isSkinnedMesh){Ue.setOptional(O,H,"bindMatrix"),Ue.setOptional(O,H,"bindMatrixInverse");let je=H.skeleton;je&&($.floatVertexTextures?(je.boneTexture===null&&je.computeBoneTexture(),Ue.setValue(O,"boneTexture",je.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ue.setOptional(O,H,"batchingTexture"),Ue.setValue(O,"batchingTexture",H._matricesTexture,S));let Kr=V.morphAttributes;if((Kr.position!==void 0||Kr.normal!==void 0||Kr.color!==void 0&&$.isWebGL2===!0)&&Jt.update(H,V,$n),(es||Yt.receiveShadow!==H.receiveShadow)&&(Yt.receiveShadow=H.receiveShadow,Ue.setValue(O,"receiveShadow",H.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Kn.envMap.value=It,Kn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),es&&(Ue.setValue(O,"toneMappingExposure",_.toneMappingExposure),Yt.needsLights&&qh(Kn,$r),pt&&G.fog===!0&&ut.refreshFogUniforms(Kn,pt),ut.refreshMaterialUniforms(Kn,G,J,q,vt),Oi.upload(O,Xo(Yt),Kn,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Oi.upload(O,Xo(Yt),Kn,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ue.setValue(O,"center",H.center),Ue.setValue(O,"modelViewMatrix",H.modelViewMatrix),Ue.setValue(O,"normalMatrix",H.normalMatrix),Ue.setValue(O,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let je=G.uniformsGroups;for(let Qr=0,Zh=je.length;Qr<Zh;Qr++)if($.isWebGL2){let Zo=je[Qr];jt.update(Zo,$n),jt.bind(Zo,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function qh(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Yh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,F,V){St.get(b.texture).__webglTexture=F,St.get(b.depthTexture).__webglTexture=V;let G=St.get(b);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){let V=St.get(b);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,V=0){R=b,C=F,T=V;let G=!0,H=null,pt=!1,bt=!1;if(b){let It=St.get(b);It.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(O.FRAMEBUFFER,null),G=!1):It.__webglFramebuffer===void 0?S.setupRenderTarget(b):It.__hasExternalTextures&&S.rebindTextures(b,St.get(b.texture).__webglTexture,St.get(b.depthTexture).__webglTexture);let Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(bt=!0);let Ft=St.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?H=Ft[F][V]:H=Ft[F],pt=!0):$.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?H=St.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?H=Ft[V]:H=Ft,w.copy(b.viewport),B.copy(b.scissor),W=b.scissorTest}else w.copy(Q).multiplyScalar(J).floor(),B.copy(it).multiplyScalar(J).floor(),W=ft;if(st.bindFramebuffer(O.FRAMEBUFFER,H)&&$.drawBuffers&&G&&st.drawBuffers(b,H),st.viewport(w),st.scissor(B),st.setScissorTest(W),pt){let It=St.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,It.__webglTexture,V)}else if(bt){let It=St.get(b.texture),Wt=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,V||0,Wt)}N=-1},this.readRenderTargetPixels=function(b,F,V,G,H,pt,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){st.bindFramebuffer(O.FRAMEBUFFER,Rt);try{let It=b.texture,Wt=It.format,Ft=It.type;if(Wt!==fn&&xt.convert(Wt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let zt=Ft===ps&&(D.has("EXT_color_buffer_half_float")||$.isWebGL2&&D.has("EXT_color_buffer_float"));if(Ft!==Vn&&xt.convert(Ft)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===kn&&($.isWebGL2||D.has("OES_texture_float")||D.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-G&&V>=0&&V<=b.height-H&&O.readPixels(F,V,G,H,xt.convert(Wt),xt.convert(Ft),pt)}finally{let It=R!==null?St.get(R).__webglFramebuffer:null;st.bindFramebuffer(O.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(b,F,V=0){let G=Math.pow(2,-V),H=Math.floor(F.image.width*G),pt=Math.floor(F.image.height*G);S.setTexture2D(F,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,b.x,b.y,H,pt),st.unbindTexture()},this.copyTextureToTexture=function(b,F,V,G=0){let H=F.image.width,pt=F.image.height,bt=xt.convert(V.format),Rt=xt.convert(V.type);S.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,b.x,b.y,H,pt,bt,Rt,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,bt,F.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,G,b.x,b.y,bt,Rt,F.image),G===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(b,F,V,G,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pt=b.max.x-b.min.x+1,bt=b.max.y-b.min.y+1,Rt=b.max.z-b.min.z+1,It=xt.convert(G.format),Wt=xt.convert(G.type),Ft;if(G.isData3DTexture)S.setTexture3D(G,0),Ft=O.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)S.setTexture2DArray(G,0),Ft=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);let zt=O.getParameter(O.UNPACK_ROW_LENGTH),xe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),qe=O.getParameter(O.UNPACK_SKIP_PIXELS),Ce=O.getParameter(O.UNPACK_SKIP_ROWS),_n=O.getParameter(O.UNPACK_SKIP_IMAGES),de=V.isCompressedTexture?V.mipmaps[H]:V.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,de.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,b.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,b.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?O.texSubImage3D(Ft,H,F.x,F.y,F.z,pt,bt,Rt,It,Wt,de.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ft,H,F.x,F.y,F.z,pt,bt,Rt,It,de.data)):O.texSubImage3D(Ft,H,F.x,F.y,F.z,pt,bt,Rt,It,Wt,de),O.pixelStorei(O.UNPACK_ROW_LENGTH,zt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ce),O.pixelStorei(O.UNPACK_SKIP_IMAGES,_n),H===0&&G.generateMipmaps&&O.generateMipmap(Ft),st.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),st.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,st.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===yo?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===Dr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_e?oi:Dc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===oi?_e:An}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},to=class extends gs{};to.prototype.isWebGL1Renderer=!0;var br=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var wr=class extends Je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Pi=new ne,xc=new ne,Ks=[],_c=new Cn,V0=new ne,os=new Qt,ls=new Xn,li=class extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,V0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),_c.copy(t.boundingBox).applyMatrix4(Pi),this.boundingBox.union(_c)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),ls.copy(t.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(n),t.ray.intersectsSphere(ls)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pi),xc.multiplyMatrices(n,Pi),os.matrixWorld=xc,os.raycast(t,Ks);for(let o=0,a=Ks.length;o<a;o++){let l=Ks[o];l.instanceId=r,l.object=this,e.push(l)}Ks.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var xs=class extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},vc=new P,yc=new P,Mc=new ne,Pa=new dr,Qs=new Xn,Er=class extends Le{constructor(t=new We,e=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)vc.fromBufferAttribute(e,s-1),yc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=vc.distanceTo(yc);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,t.ray.intersectsSphere(Qs)===!1)return;Mc.copy(s).invert(),Pa.copy(t.ray).applyMatrix4(Mc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,d=new P,u=new P,p=this.isLineSegments?2:1,x=n.index,m=n.attributes.position;if(x!==null){let f=Math.max(0,o.start),M=Math.min(x.count,o.start+o.count);for(let _=f,A=M-1;_<A;_+=p){let C=x.getX(_),T=x.getX(_+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,T),Pa.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let N=t.ray.origin.distanceTo(u);N<t.near||N>t.far||e.push({distance:N,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let _=f,A=M-1;_<A;_+=p){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),Pa.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(u);T<t.near||T>t.far||e.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var Vi=class extends sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var eo=class i extends We{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],x=0,g=[],m=n/2,f=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(p,2));function M(){let A=new P,C=new P,T=0,R=(e-t)/n;for(let N=0;N<=r;N++){let y=[],w=N/r,B=w*(e-t)+t;for(let W=0;W<=s;W++){let nt=W/s,I=nt*l+a,k=Math.sin(I),q=Math.cos(I);C.x=B*k,C.y=-w*n+m,C.z=B*q,d.push(C.x,C.y,C.z),A.set(k,R,q).normalize(),u.push(A.x,A.y,A.z),p.push(nt,1-w),y.push(x++)}g.push(y)}for(let N=0;N<s;N++)for(let y=0;y<r;y++){let w=g[y][N],B=g[y+1][N],W=g[y+1][N+1],nt=g[y][N+1];h.push(w,B,nt),h.push(B,W,nt),T+=6}c.addGroup(f,T,0),f+=T}function _(A){let C=x,T=new $t,R=new P,N=0,y=A===!0?t:e,w=A===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,m*w,0),u.push(0,w,0),p.push(.5,.5),x++;let B=x;for(let W=0;W<=s;W++){let I=W/s*l+a,k=Math.cos(I),q=Math.sin(I);R.x=y*q,R.y=m*w,R.z=y*k,d.push(R.x,R.y,R.z),u.push(0,w,0),T.x=k*.5+.5,T.y=q*.5*w+.5,p.push(T.x,T.y),x++}for(let W=0;W<s;W++){let nt=C+W,I=B+W;A===!0?h.push(I,I+1,nt):h.push(I+1,I,nt),N+=3}c.addGroup(f,N,A===!0?1:2),f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tr=class i extends eo{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},no=class i extends We{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new P,A=new P,C=new P;for(let T=0;T<e.length;T+=3)p(e[T+0],_),p(e[T+1],A),p(e[T+2],C),l(_,A,C,M)}function l(M,_,A,C){let T=C+1,R=[];for(let N=0;N<=T;N++){R[N]=[];let y=M.clone().lerp(A,N/T),w=_.clone().lerp(A,N/T),B=T-N;for(let W=0;W<=B;W++)W===0&&N===T?R[N][W]=y:R[N][W]=y.clone().lerp(w,W/B)}for(let N=0;N<T;N++)for(let y=0;y<2*(T-N)-1;y++){let w=Math.floor(y/2);y%2===0?(u(R[N][w+1]),u(R[N+1][w]),u(R[N][w])):(u(R[N][w+1]),u(R[N+1][w+1]),u(R[N+1][w]))}}function c(M){let _=new P;for(let A=0;A<r.length;A+=3)_.x=r[A+0],_.y=r[A+1],_.z=r[A+2],_.normalize().multiplyScalar(M),r[A+0]=_.x,r[A+1]=_.y,r[A+2]=_.z}function h(){let M=new P;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let A=m(M)/2/Math.PI+.5,C=f(M)/Math.PI+.5;o.push(A,1-C)}x(),d()}function d(){for(let M=0;M<o.length;M+=6){let _=o[M+0],A=o[M+2],C=o[M+4],T=Math.max(_,A,C),R=Math.min(_,A,C);T>.9&&R<.1&&(_<.2&&(o[M+0]+=1),A<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,_){let A=M*3;_.x=t[A+0],_.y=t[A+1],_.z=t[A+2]}function x(){let M=new P,_=new P,A=new P,C=new P,T=new $t,R=new $t,N=new $t;for(let y=0,w=0;y<r.length;y+=9,w+=6){M.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),A.set(r[y+6],r[y+7],r[y+8]),T.set(o[w+0],o[w+1]),R.set(o[w+2],o[w+3]),N.set(o[w+4],o[w+5]),C.copy(M).add(_).add(A).divideScalar(3);let B=m(C);g(T,w+0,M,B),g(R,w+2,_,B),g(N,w+4,A,B)}}function g(M,_,A,C){C<0&&M.x===1&&(o[_]=M.x-1),A.x===0&&A.z===0&&(o[_]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Gi=class i extends no{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ae=class extends qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function js(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function G0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},io=class extends Wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rl:r=t,a=2*e-n;break;case Cl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rl:o=t,l=2*n-e;break;case Cl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),g=x*x,m=g*x,f=-u*m+2*u*g-u*x,M=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*x+1,_=(-1-p)*m+(1.5+p)*g+.5*x,A=p*m-p*g;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+M*o[c+C]+_*o[l+C]+A*o[d+C];return r}},so=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ro=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new io(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case er:e=this.InterpolantFactoryMethodDiscrete;break;case nr:e=this.InterpolantFactoryMethodLinear;break;case ra:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&G0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,p=d+n;for(let x=0;x!==n;++x){let g=e[d+x];if(g!==e[u+x]||g!==e[p+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=nr;var ci=class extends pn{};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=er;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends pn{};ao.prototype.ValueTypeName="color";var oo=class extends pn{};oo.prototype.ValueTypeName="number";var lo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},_s=class extends pn{InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}};_s.prototype.ValueTypeName="quaternion";_s.prototype.DefaultInterpolation=nr;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends pn{};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=er;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends pn{};co.prototype.ValueTypeName="vector";var ho=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},W0=new ho,uo=class{constructor(t){this.manager=t!==void 0?t:W0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ui=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ar=class extends ui{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},La=new ne,bc=new P,Sc=new P,vs=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),Sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sc),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fo=class extends vs{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=or*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Rr=class extends ui{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fo}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},wc=new ne,cs=new P,Ia=new P,po=class extends vs{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $t(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(cs),Ia.copy(n.position),Ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ia),n.updateMatrixWorld(),s.makeTranslation(-cs.x,-cs.y,-cs.z),wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}},Xi=class extends ui{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new po}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},mo=class extends vs{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cr=class extends ui{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new mo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Pr=class extends ui{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var bo="\\[\\]\\.:\\/",X0=new RegExp("["+bo+"]","g"),So="[^"+bo+"]",q0="[^"+bo.replace("\\.","")+"]",Y0=/((?:WC+[\/:])*)/.source.replace("WC",So),Z0=/(WCOD+)?/.source.replace("WCOD",q0),J0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",So),$0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",So),K0=new RegExp("^"+Y0+Z0+J0+$0+"$"),Q0=["material","materials","bones","map"],go=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(X0,"")}static parseTrackName(t){let e=K0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Q0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=go;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);var qc=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function Yc(i){let t=!1,e={w:window.innerWidth,h:window.innerHeight};function n(){let r=window.innerWidth,o=window.innerHeight;t=qc()&&o>r,e.w=t?o:r,e.h=t?r:o;let a=document.body,l=document.documentElement.style;a.classList.toggle("force-landscape",t),a.classList.toggle("compact",e.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",e.w+"px"),l.setProperty("--app-h",e.h+"px"),i&&i(e.w,e.h)}async function s(){if(!qc())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}n()}return window.addEventListener("resize",n),window.addEventListener("orientationchange",()=>setTimeout(n,200)),document.addEventListener("fullscreenchange",()=>setTimeout(n,100)),n(),{view:e,goLandscape:s,refresh:n,get rotated(){return t}}}var le=(i,t,e,n,s,r,o=0,a)=>Object.assign({x:i,z:t,w:e,d:n,h:s,c:r,y:o},a||{});function di(){return{solids:[],deco:[],pickups:[]}}function oe(i,t){return i.solids.push(...t.solids),i.deco.push(...t.deco),i.pickups.push(...t.pickups),i}function Or(i,t,e,n,s=5911840,r=3809296){let o=di(),a=n?e:.9,l=n?.9:e;o.solids.push(le(i,t,a,l,1.05,s)),o.deco.push(le(i,t,a+.1,l+.1,.06,r,1.05));let c=Math.floor(e/.9);for(let h=0;h<c;h++){let d=-e/2+.45+h*.9,u=n?i+d:i,p=n?t:t+d;o.pickups.push({w:h%3===1?"mug":"bottle",x:u,z:p,y:1.11})}return o}function Jc(i,t,e,n){let s=di(),r=n?e:.4,o=n?.4:e;s.solids.push(le(i,t,r,o,2.4,3810324));for(let c of[.9,1.5,2.1])s.deco.push(le(i,t,r+.04,o+.04,.04,2758668,c));let a=Math.floor(e/.22),l=[3107626,9062930,6953498,13214266,2767466,14540253];for(let c of[.94,1.54,2.14])for(let h=0;h<a;h++){let d=-e/2+.11+h*.22;s.deco.push(le(n?i+d:i,n?t:t+d,.09,.09,.28,l[(h*7+c*10)%l.length|0],c))}return s}function Yi(i,t,e=!1,n=7029795){let s=di();return s.solids.push(le(i,t,e?1:1.3,e?1:.9,.78,n)),s.pickups.push({w:"bottle",x:i+.2,z:t,y:.84}),s.pickups.push({w:"chair",x:i-(e?.95:1.1),z:t,y:0}),s.pickups.push({w:"chair",x:i+(e?.95:1.1),z:t+.1,y:0}),s}function Zc(i,t){let e=di();return e.solids.push(le(i,t,2.5,1.4,.85,3809296)),e.deco.push(le(i,t,2.2,1.1,.04,2059061,.85)),e.pickups.push({w:"cue",x:i,z:t+1,y:0},{w:"cue",x:i+.4,z:t-1,y:0}),e}function Fr(i,t,e,n,s=.9){let r=di();for(let o=0;o<e;o++){let a=-((e-1)*s)/2+o*s;r.pickups.push({w:"stool",x:n?i+a:i,z:n?t:t+a,y:0})}return r}function $c(i,t,e=1,n=9136954){let s=di();return s.solids.push(le(i,t,e,e,e,n)),s}function bs(i,t,e=7029795){let n=di();return n.solids.push(le(i,t,.8,.8,1.1,e,0,{barrel:!0})),n}var j0=[15843965,14724201,13010498,9262372,16767916,6044193];function tg(){let i={id:"biker",name:"Biker Bar",blurb:"Leather, beer and broken bottles. The Hellhounds want you out.",w:24,d:18,h:4.2,floor:{c1:4861984,c2:4073498,kind:"planks"},wall:5909022,trim:2757128,ceil:1708556,light:16756832,ambient:5914672,fog:1708042,lamps:[[-6,-3],[0,0],[6,3],[-6,5],[6,-5]],player:[0,7,0],musician:[10.6,6.6,0],solids:[],deco:[],pickups:[],enemies:{count:18,maxActive:9,outfits:"biker",weapons:{fists:4,bottle:3,chain:2,knuckles:2,bat:1,knife:1,wrench:1}},boss:{name:"BIG MIKE",outfit:"bikerBoss",weapon:"sledge",scale:1.35,hp:3.2}};return oe(i,Or(-4,-6,9,!0)),oe(i,Jc(-4,-8.4,9,!0)),oe(i,Fr(-4,-5,8,!0,1.05)),oe(i,Zc(5,-4)),oe(i,Zc(5,2)),oe(i,Yi(-6,1)),oe(i,Yi(-2,3,!0)),oe(i,Yi(-7,5,!0)),i.solids.push(le(10.6,7.6,1.2,1.2,1.9,11542560,0,{glow:16732208})),i.pickups.push({w:"bat",x:9.5,z:-8,y:0},{w:"crowbar",x:-10.5,z:7,y:0},{w:"pan",x:-1,z:-6,y:1.11},{w:"knife",x:-7,z:-6,y:1.11},{w:"axe",x:11,z:-1,y:0},{w:"spikedbat",x:-11,z:-2,y:0},{w:"shotgun",x:-8.1,z:-6,y:1.11},{w:"dynamite",x:2,z:8,y:0}),i}function eg(){let i={id:"disco",name:"Disco",blurb:"Saturday night fever. Everyone on the floor wants a piece of you.",w:22,d:22,h:5,floor:{c1:16722554,c2:2788095,c3:16765503,c4:3203184,kind:"disco"},wall:2756672,trim:6955168,ceil:656408,light:16736464,ambient:4202592,fog:656408,lamps:[[-5,-5],[5,-5],[-5,5],[5,5]],discoBall:!0,player:[0,8,0],musician:[0,-8.6,Math.PI],solids:[],deco:[],pickups:[],enemies:{count:20,maxActive:10,outfits:"disco",weapons:{fists:5,bottle:2,mug:1,micstand:1,knife:1,guitar:1}},boss:{name:"DISCO KING",outfit:"discoBoss",weapon:"katana",scale:1.25,hp:3}};i.solids.push(le(0,-9.6,8,2,.6,1710634)),i.solids.push(le(0,-9.6,2.4,1,1.4,3355460,.6,{glow:4259839})),i.pickups.push({w:"guitar",x:-3,z:-9.6,y:.6},{w:"micstand",x:2.5,z:-9.6,y:.6},{w:"micstand",x:-1.5,z:-9.2,y:.6}),oe(i,Or(9.6,0,10,!1,3153994,8405184)),oe(i,Fr(8.6,0,8,!1,1.15));for(let[t,e]of[[-8,-4],[-8,1],[-8,6]])oe(i,Yi(t,e,!0,4202602));return i.pickups.push({w:"bat",x:-10,z:-9,y:0},{w:"knuckles",x:9.6,z:4,y:1.11},{w:"pan",x:9.6,z:-4,y:1.11},{w:"tommy",x:-10,z:9,y:0},{w:"tknives",x:10,z:9.5,y:0}),i}function ng(){let i={id:"prison",name:"Prison",blurb:"Riot in cell block C. Inmates and guards \u2014 nobody is on your side.",w:26,d:20,h:5,floor:{c1:9079428,c2:8289912,kind:"concrete"},wall:10133658,trim:5922906,ceil:4869706,light:15266047,ambient:5265504,fog:2106408,bright:.55,lamps:[[-8,0],[0,0],[8,0],[0,-6],[0,6]],player:[0,0,0],solids:[],deco:[],pickups:[],enemies:{count:22,maxActive:10,outfits:"prison",weapons:{fists:4,shiv:3,baton:2,weight:1,dumbbell:1,knife:1,pan:1}},boss:{name:"THE WARDEN",outfit:"warden",weapon:"shotgun",scale:1.3,hp:3}};for(let t of[-1,1])for(let e=0;e<5;e++){let n=-10+e*5,s=t*8.2;i.solids.push(le(n-2.4,s,.25,3.6,3,10133658)),i.deco.push(le(n,s-t*1.8,4.6,.06,.06,3355443,2.9));for(let r=-2;r<=2;r++)r!==0&&i.deco.push(le(n+r*.9,s-t*1.8,.06,.06,2.9,3355443));i.solids.push(le(n+1.2,s+t*.9,1.8,.8,.6,6974058)),i.pickups.push({w:e%2?"shiv":"dumbbell",x:n-1,z:s+t*.6,y:0})}for(let t of[-7,7])i.solids.push(le(t,0,1.6,.6,.5,3355443)),i.pickups.push({w:"weight",x:t-1.3,z:.6,y:0},{w:"weight",x:t+1.3,z:-.6,y:0},{w:"dumbbell",x:t,z:1.1,y:0});return i.solids.push(le(0,-3,4,1,.78,7829367)),i.solids.push(le(0,3,4,1,.78,7829367)),i.pickups.push({w:"pan",x:-1,z:-3,y:.84},{w:"mug",x:1,z:3,y:.84},{w:"knife",x:1.2,z:-3,y:.84},{w:"baton",x:12,z:0,y:0},{w:"shovel",x:-12,z:.5,y:0},{w:"revolver",x:.4,z:3,y:.84}),i}function ig(){let i={id:"saloon",name:"Western Saloon",blurb:"This town ain't big enough. Draw, partner.",w:24,d:20,h:4.6,floor:{c1:10119738,c2:9067568,kind:"planks"},wall:8014374,trim:4860434,ceil:3810322,light:16760944,ambient:6965802,fog:2759182,lamps:[[-6,-4],[6,-4],[0,2],[-6,6],[6,6]],player:[0,8,0],musician:[9.6,6.6,0],solids:[],deco:[],pickups:[],enemies:{count:18,maxActive:9,outfits:"cowboy",weapons:{fists:4,bottle:3,revolver:2,knife:1,pitchfork:1,shovel:1,rifle:1}},boss:{name:"THE SHERIFF",outfit:"sheriff",weapon:"rifle",scale:1.25,hp:3}};oe(i,Or(-9.6,-1,12,!1,6961690,4858896)),oe(i,Jc(-11.6,-1,12,!1)),oe(i,Fr(-8.5,-1,9,!1,1.2));for(let[t,e]of[[-2,-5],[3,-5],[-2,2],[3,2],[8,-2]])oe(i,Yi(t,e,!0,5913114));return i.solids.push(le(9.6,7.6,2.4,1,1.4,2759182)),i.deco.push(le(9.6,7,2.2,.3,.06,15790304,.9)),oe(i,bs(-10.8,8.6)),oe(i,bs(-9.8,8.8)),oe(i,$c(11,-8.6)),i.pickups.push({w:"revolver",x:-9.6,z:-6,y:1.11},{w:"shotgun",x:11,z:-8.6,y:1},{w:"pitchfork",x:-11,z:6,y:0},{w:"shovel",x:11,z:3,y:0},{w:"dynamite",x:-10,z:7.6,y:0},{w:"tknives",x:0,z:-9,y:0},{w:"axe",x:8,z:9,y:0}),i}function sg(){let i={id:"pirate",name:"Pirate Cove",blurb:"A tavern built into a shipwreck. Yo ho, here come the cutlasses.",w:24,d:22,h:5.5,floor:{c1:9071172,c2:8019e3,kind:"deck"},wall:4864038,trim:2760210,ceil:2760212,light:16752720,ambient:3820122,fog:924196,lamps:[[-6,-5],[6,-5],[0,0],[-6,6],[6,6]],player:[0,9,0],solids:[],deco:[],pickups:[],enemies:{count:20,maxActive:10,outfits:"pirate",weapons:{fists:3,cutlass:3,bottle:2,flintlock:2,knife:1,mug:1,spear:1}},boss:{name:"CAPTAIN REDBEARD",outfit:"captain",weapon:"anchor",scale:1.4,hp:3.5}};i.solids.push(le(0,0,.7,.7,5.5,5913118)),oe(i,Or(8,-8.6,8,!0,5913118,3810320)),oe(i,Fr(8,-7.5,6,!0,1.2));for(let[t,e]of[[-6,-4],[-6,3],[5,3],[-1,6]])oe(i,Yi(t,e,!1,6965802));for(let t of[-6,0,6])i.solids.push(le(-11,t,1.6,.9,.9,2236962)),i.pickups.push({w:"cannonball",x:-10,z:t+1.2,y:0});return oe(i,bs(10.8,9.6)),oe(i,bs(9.8,9.8)),oe(i,bs(10.8,8.6)),oe(i,$c(-10.5,9.8,1.2)),i.pickups.push({w:"cutlass",x:10,z:-8.6,y:1.11},{w:"flintlock",x:6,z:-8.6,y:1.11},{w:"spear",x:11,z:0,y:0},{w:"axe",x:-9,z:-9.5,y:0},{w:"knife",x:.4,z:-1,y:0}),i}function rg(){let i={id:"arena",name:"Arena",blurb:"Endless waves. Every weapon in the game on the rack. How long can you last?",w:30,d:30,h:7,floor:{c1:13150312,c2:12360796,kind:"sand"},wall:9075296,trim:5917236,ceil:null,light:16773328,ambient:8425632,fog:3818576,bright:.8,lamps:[[0,0],[-9,-9],[9,-9],[-9,9],[9,9]],player:[0,0,0],solids:[],deco:[],pickups:[],waves:!0,enemies:{count:1/0,maxActive:6,outfits:"mixed",weapons:{fists:3,bottle:2,bat:2,knife:2,machete:1,cutlass:1,axe:1,spear:1,revolver:1}},boss:{name:"THE CHAMPION",outfit:"champion",weapon:"axe",scale:1.4,hp:4}};for(let[e,n]of[[-8,-8],[8,-8],[-8,8],[8,8]])i.solids.push(le(e,n,1.4,1.4,3,11049080));let t=["katana","axe","sledge","machete","spear","spikedbat","cleaver","cutlass","pitchfork","crowbar","bat","shovel","knuckles","wrench","chain","anchor"];return t.forEach((e,n)=>{let s=n/t.length*Math.PI*2;i.pickups.push({w:e,x:Math.cos(s)*12.5,z:Math.sin(s)*12.5,y:0})}),i.pickups.push({w:"shotgun",x:2,z:2,y:0},{w:"revolver",x:-2,z:2,y:0},{w:"dynamite",x:0,z:-2.5,y:0},{w:"tknives",x:2,z:-2,y:0}),i}var Nr=[tg,eg,ng,ig,sg,rg];function Kc(i){return(Nr.find(e=>e().id===i)||Nr[0])()}function Qc(i,t=16){let e=[];for(let s=0;s<t*6&&e.length<t;s++){let r=s/(t*6)*Math.PI*2*3.7,o=Math.cos(r)*(i.w/2-1.2-s%3),a=Math.sin(r)*(i.d/2-1.2-s%2*1.5);wo(i,o,a,.5)||Math.hypot(o-i.player[0],a-i.player[1])<5||e.push([o,a])}return e}function wo(i,t,e,n){if(Math.abs(t)>i.w/2-n||Math.abs(e)>i.d/2-n)return!0;for(let s of i.solids)if(t+n>s.x-s.w/2&&t-n<s.x+s.w/2&&e+n>s.z-s.d/2&&e-n<s.z+s.d/2&&s.y<1.6)return!0;return!1}function $e(i,t,e,n=99){let s=0;for(let r of i.solids){let o=r.y+r.h;o<=n+.05&&o>s&&Math.abs(t-r.x)<=r.w/2&&Math.abs(e-r.z)<=r.d/2&&(s=o)}return s}function zr(i,t){let e=s=>s[t()*s.length|0],n=e(j0);switch(i){case"biker":return{skin:n,shirt:e([2236962,4473924,6974058,11546672,16777215]),vest:1710618,pants:e([2767450,1714756,2236962]),hair:e([null,2236962,5913114,8947848]),beard:e([null,2236962,6965802,10066329]),hat:e([null,null,"bandana"]),hatC:e([11542560,2105440,2236962]),shoe:1710618};case"bikerBoss":return{skin:14724201,shirt:1118481,vest:657930,pants:1714756,hair:null,beard:7829367,hat:"bandana",hatC:11542560,shoe:1118481};case"disco":return{skin:n,shirt:e([16722554,2818e3,16765503,10502399,16742954,16777215]),pants:e([16777215,2236962,9054858,13672512]),hair:e([2236962,4860432,13672512,11546656]),afro:t()<.4,beard:e([null,null,2236962]),shoe:e([16777215,2236962])};case"discoBoss":return{skin:9262372,shirt:16766720,pants:16777215,hair:1118481,afro:!0,beard:1118481,shoe:16777215,shades:!0};case"prison":return t()<.22?{skin:n,shirt:2767466,pants:1714762,hair:e([2236962,5913114]),hat:"cap",hatC:1714762,shoe:1118481,guard:!0}:{skin:n,shirt:16742938,pants:16742938,hair:e([null,2236962,5913114,11184810]),beard:e([null,2236962,5913114]),shoe:14540253};case"warden":return{skin:16767916,shirt:1714762,pants:1120810,hair:8947848,beard:8947848,hat:"cap",hatC:1120810,shoe:1118481};case"cowboy":return{skin:n,shirt:e([12623984,9062954,6974090,13684928,9054762]),vest:e([null,4860434,2236962]),pants:e([4864554,2767450,6969920]),hair:e([4860432,2236962,12619856]),beard:e([null,4860432,2236962,8947848]),hat:"cowboy",hatC:e([5913114,2236962,12623984]),shoe:3809296};case"sheriff":return{skin:14724201,shirt:13680800,vest:3809296,pants:2763322,hair:8947848,beard:8947848,hat:"cowboy",hatC:15788240,shoe:3809296,badge:!0};case"pirate":return{skin:n,shirt:e([16777215,13684928]),stripes:e([11542560,2105440,2236962]),pants:e([3811866,2763322,6969920]),hair:e([2236962,5913114,11550752]),beard:e([null,2236962,11550752]),hat:e(["bandana","bandana","tricorn"]),hatC:e([11542560,2105440,2236962]),shoe:2759182,eyepatch:t()<.3};case"captain":return{skin:16767916,shirt:9050650,vest:13214266,pants:2236962,hair:11546640,beard:11546640,hat:"tricorn",hatC:1118481,shoe:1118481,eyepatch:!0};case"champion":return{skin:13010498,shirt:null,pants:9050650,hair:2236962,beard:2236962,hat:"helmet",hatC:13214266,shoe:7029795};default:return zr(e(["biker","disco","prison","cowboy","pirate"]),t)}}function jc(i,t){let e=0;for(let s in i)e+=i[s];let n=t()*e;for(let s in i)if(n-=i[s],n<0)return s;return Object.keys(i)[0]}var Vt=(i,t,e,n,s,r)=>Object.assign({len:i,w:t,hc:e,head:n,headC:s},r||{}),Eo={fists:{name:"Fists",kind:"melee",dmg:9,reach:1.5,rate:.38,knock:2.5,sever:0,sharp:!1,dur:1/0},knuckles:{name:"Brass Knuckles",kind:"melee",dmg:17,reach:1.5,rate:.36,knock:3.5,sever:0,sharp:!1,dur:1/0,model:Vt(.02,.1,13214266,[.12,.05,.04],14201930)},bottle:{name:"Beer Bottle",kind:"melee",dmg:16,reach:1.7,rate:.5,knock:3,sever:0,sharp:!1,dur:1,breaksInto:"brokenbottle",shatter:!0,model:Vt(.22,.05,3107626,[.08,.1,.08],3107626,{glass:!0})},brokenbottle:{name:"Broken Bottle",kind:"melee",dmg:20,reach:1.6,rate:.34,knock:1.5,sever:.12,sharp:!0,dur:8,model:Vt(.14,.05,3107626,[.08,.06,.08],8372087,{glass:!0})},mug:{name:"Beer Mug",kind:"melee",dmg:18,reach:1.6,rate:.5,knock:4,sever:0,sharp:!1,dur:3,shatter:!0,model:Vt(.04,.06,14270576,[.14,.18,.14],15784080,{glass:!0})},cue:{name:"Pool Cue",kind:"melee",dmg:20,reach:2.4,rate:.6,knock:4,sever:0,sharp:!1,dur:4,breaksInto:"brokencue",model:Vt(1.3,.035,13146970,[.04,.06,.04],2829099)},brokencue:{name:"Broken Cue",kind:"melee",dmg:19,reach:1.8,rate:.42,knock:2,sever:.08,sharp:!0,dur:10,model:Vt(.7,.035,13146970,[.03,.08,.03],14729354)},stool:{name:"Bar Stool",kind:"melee",dmg:30,reach:2,rate:.95,knock:8,sever:.05,sharp:!1,dur:3,breaksInto:"stoolleg",heavy:!0,model:Vt(.6,.05,7029795,[.38,.08,.38],9116186)},stoolleg:{name:"Stool Leg",kind:"melee",dmg:16,reach:1.8,rate:.45,knock:3,sever:0,sharp:!1,dur:8,model:Vt(.6,.05,7029795,[.06,.06,.06],7029795)},chair:{name:"Chair",kind:"melee",dmg:32,reach:2,rate:1,knock:9,sever:.05,sharp:!1,dur:3,breaksInto:"stoolleg",heavy:!0,model:Vt(.5,.05,8016432,[.45,.45,.08],8016432)},bat:{name:"Baseball Bat",kind:"melee",dmg:28,reach:2,rate:.6,knock:7,sever:.08,sharp:!1,dur:30,model:Vt(.55,.05,14268810,[.09,.4,.09],13213808)},spikedbat:{name:"Spiked Bat",kind:"melee",dmg:36,reach:2,rate:.65,knock:7,sever:.25,sharp:!1,dur:25,model:Vt(.55,.05,9136970,[.1,.4,.1],10132122)},pan:{name:"Frying Pan",kind:"melee",dmg:26,reach:1.8,rate:.55,knock:8,sever:0,sharp:!1,dur:1/0,model:Vt(.3,.04,2236962,[.32,.03,.32],3355443)},knife:{name:"Knife",kind:"melee",dmg:24,reach:1.5,rate:.28,knock:1,sever:.3,sharp:!0,dur:1/0,model:Vt(.12,.035,3811866,[.03,.22,.015],14606046)},shiv:{name:"Shiv",kind:"melee",dmg:22,reach:1.4,rate:.25,knock:1,sever:.2,sharp:!0,dur:12,model:Vt(.1,.035,7829367,[.025,.16,.015],13619151)},cleaver:{name:"Meat Cleaver",kind:"melee",dmg:34,reach:1.6,rate:.5,knock:3,sever:.6,sharp:!0,dur:1/0,model:Vt(.14,.04,2759184,[.02,.16,.14],13684944)},machete:{name:"Machete",kind:"melee",dmg:38,reach:1.9,rate:.48,knock:3,sever:.6,sharp:!0,dur:1/0,model:Vt(.14,.04,2759184,[.02,.55,.07],13158600)},axe:{name:"Fire Axe",kind:"melee",dmg:50,reach:2.1,rate:.85,knock:6,sever:.8,sharp:!0,heavy:!0,dur:1/0,model:Vt(.8,.045,11540504,[.05,.18,.22],13619151)},sledge:{name:"Sledgehammer",kind:"melee",dmg:65,reach:2.1,rate:1.15,knock:14,sever:.35,sharp:!1,heavy:!0,crush:!0,dur:1/0,model:Vt(.9,.045,9136970,[.16,.16,.3],5592405)},crowbar:{name:"Crowbar",kind:"melee",dmg:27,reach:1.9,rate:.55,knock:5,sever:.05,sharp:!1,dur:1/0,model:Vt(.7,.03,11542560,[.03,.03,.12],11542560)},wrench:{name:"Pipe Wrench",kind:"melee",dmg:29,reach:1.8,rate:.6,knock:6,sever:0,sharp:!1,dur:1/0,model:Vt(.45,.04,11542560,[.12,.1,.06],7829367)},chain:{name:"Bike Chain",kind:"melee",dmg:24,reach:2.3,rate:.5,knock:4,sever:.05,sharp:!1,dur:1/0,model:Vt(.7,.03,8947848,[.05,.05,.05],10066329)},guitar:{name:"Guitar",kind:"melee",dmg:30,reach:2.1,rate:.85,knock:9,sever:0,sharp:!1,heavy:!0,dur:2,breaksInto:"stoolleg",model:Vt(.55,.05,5913114,[.34,.42,.1],12599338)},micstand:{name:"Mic Stand",kind:"melee",dmg:22,reach:2.3,rate:.6,knock:5,sever:0,sharp:!1,dur:1/0,model:Vt(1.1,.025,2236962,[.06,.1,.06],4473924)},katana:{name:"Katana",kind:"melee",dmg:46,reach:2.2,rate:.42,knock:3,sever:.85,sharp:!0,dur:1/0,model:Vt(.22,.035,1710618,[.02,.75,.04],15263976)},cutlass:{name:"Cutlass",kind:"melee",dmg:40,reach:2,rate:.45,knock:3,sever:.65,sharp:!0,dur:1/0,model:Vt(.14,.04,13214266,[.02,.6,.06],14211288)},spear:{name:"Spear",kind:"melee",dmg:35,reach:2.8,rate:.6,knock:5,sever:.3,sharp:!0,dur:1/0,model:Vt(1.5,.035,9136970,[.05,.22,.02],12566463)},pitchfork:{name:"Pitchfork",kind:"melee",dmg:33,reach:2.6,rate:.65,knock:6,sever:.25,sharp:!0,dur:1/0,model:Vt(1.3,.035,9136970,[.22,.22,.02],9079434)},shovel:{name:"Shovel",kind:"melee",dmg:31,reach:2.1,rate:.7,knock:8,sever:.3,sharp:!1,dur:1/0,model:Vt(.9,.04,9136970,[.22,.26,.02],6974058)},weight:{name:"Weight Plate",kind:"melee",dmg:34,reach:1.6,rate:.8,knock:9,sever:0,sharp:!1,heavy:!0,dur:1/0,model:Vt(.02,.04,2236962,[.32,.32,.05],2500134)},dumbbell:{name:"Dumbbell",kind:"melee",dmg:30,reach:1.6,rate:.7,knock:7,sever:0,sharp:!1,heavy:!0,dur:1/0,model:Vt(.3,.04,5592405,[.14,.14,.14],2236962)},baton:{name:"Guard Baton",kind:"melee",dmg:22,reach:1.8,rate:.42,knock:5,sever:0,sharp:!1,dur:1/0,model:Vt(.55,.04,1118481,[.05,.05,.05],1118481)},anchor:{name:"Anchor",kind:"melee",dmg:80,reach:2.2,rate:1.5,knock:18,sever:.5,sharp:!1,heavy:!0,crush:!0,dur:1/0,model:Vt(.9,.06,3815994,[.6,.2,.08],3815994)},revolver:{name:"Revolver",kind:"gun",dmg:55,rate:.45,knock:6,sever:.4,ammo:6,pellets:1,spread:.01,range:60,model:Vt(.12,.04,4860436,[.04,.06,.26],8026746)},shotgun:{name:"Double Barrel",kind:"gun",dmg:16,rate:.9,knock:4,sever:.35,ammo:2,pellets:9,spread:.12,range:25,model:Vt(.3,.05,7029795,[.07,.06,.7],4473924)},flintlock:{name:"Flintlock Pistol",kind:"gun",dmg:70,rate:1.4,knock:9,sever:.5,ammo:1,pellets:1,spread:.03,range:40,model:Vt(.14,.05,7029795,[.04,.05,.34],9075280)},rifle:{name:"Lever Rifle",kind:"gun",dmg:60,rate:.75,knock:7,sever:.45,ammo:8,pellets:1,spread:.005,range:80,model:Vt(.35,.05,7029795,[.04,.05,.8],5592405)},tommy:{name:"Tommy Gun",kind:"gun",dmg:20,rate:.09,knock:2,sever:.15,ammo:40,pellets:1,spread:.05,range:45,model:Vt(.3,.06,5913114,[.08,.12,.6],3355443)},dynamite:{name:"Dynamite",kind:"throw",dmg:0,rate:.8,knock:0,sever:0,tdmg:90,explode:4.5,fuse:1.6,count:3,model:Vt(.02,.04,11542560,[.05,.2,.05],13642282)},tknives:{name:"Throwing Knives",kind:"throw",dmg:0,rate:.35,knock:0,sever:0,tdmg:34,tsever:.4,count:6,model:Vt(.08,.03,2236962,[.02,.16,.015],14606046)},cannonball:{name:"Cannonball",kind:"throw",dmg:0,rate:1,knock:0,sever:0,tdmg:70,tknock:16,count:1,model:Vt(.01,.01,2236962,[.22,.22,.22],1710618)}},Ig=Object.keys(Eo),we=i=>Eo[i]||Eo.fists;function To(i){return i.kind==="throw"?i.tdmg:Math.round(i.dmg*(i.heavy?1.2:.8)+(i.shatter?6:0))}function th(i,t,e,n=1){let s=Math.round((i.kind==="throw"?To(i):i.dmg)*n),r=i.kind==="throw"?i.tsever||0:i.sever,o=s>=t,a=o||r>0&&e()<r,l=!!i.crush&&o,c=Math.min(40,Math.round(s/3)+(a?18:0)+(l?30:0));return{dmg:s,sever:a,crush:l,gibs:c}}function kr(i,t){let e=we(i);return!isFinite(e.dur)||(t.used=(t.used||0)+1,t.used<e.dur)?i:(t.used=0,e.breaksInto||null)}function ag(i){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=o=>"#"+o.toString(16).padStart(6,"0"),s=(o,a)=>{let l=(o>>16&255)*a,c=(o>>8&255)*a,h=(o&255)*a;return`rgb(${l|0},${c|0},${h|0})`};switch(i.kind){case"planks":case"deck":for(let o=0;o<8;o++){e.fillStyle=n(o%2?i.c1:i.c2),e.fillRect(0,o*16,128,16),e.fillStyle="rgba(0,0,0,.35)",e.fillRect(0,o*16,128,1);let a=o*37%128;e.fillRect(a,o*16,1,16),i.kind==="deck"&&(e.fillStyle="rgba(0,0,0,.5)",e.fillRect((a+20)%128,o*16+7,2,2),e.fillRect((a+84)%128,o*16+7,2,2))}break;case"disco":{let o=[i.c1,i.c2,i.c3,i.c4];for(let a=0;a<4;a++)for(let l=0;l<4;l++)e.fillStyle=n(o[(a+l*3)%4]),e.fillRect(a*32+1,l*32+1,30,30);break}case"concrete":e.fillStyle=n(i.c1),e.fillRect(0,0,128,128);for(let o=0;o<400;o++)e.fillStyle=s(i.c2,.8+Math.random()*.4),e.fillRect(Math.random()*128,Math.random()*128,2,2);e.fillStyle="rgba(0,0,0,.25)",e.fillRect(0,0,128,1),e.fillRect(0,0,1,128);break;case"sand":e.fillStyle=n(i.c1),e.fillRect(0,0,128,128);for(let o=0;o<700;o++)e.fillStyle=s(i.c2,.85+Math.random()*.3),e.fillRect(Math.random()*128,Math.random()*128,2,2);break}let r=new Vi(t);return r.wrapS=r.wrapT=ds,r.magFilter=be,r.colorSpace=_e,r}function eh(i,t,e=1){let n=new Be;i.add(n),i.background=new Lt(t.fog),i.fog=new br(t.fog,14,Math.max(t.w,t.d)*1.6);let s=C=>new Ae({color:C}),r=ag(t.floor);r.repeat.set(t.w/(t.floor.kind==="disco"?4:3),t.d/(t.floor.kind==="disco"?4:3));let o=new Ae({map:r});t.floor.kind==="disco"&&(o.emissive=new Lt(16777215),o.emissiveMap=r,o.emissiveIntensity=.35);let a=new Qt(new Yn(t.w,t.d).rotateX(-Math.PI/2),o);a.receiveShadow=!0,n.add(a);let l=s(t.wall),c=s(t.trim),h=t.h;for(let[C,T,R,N]of[[0,-t.d/2,t.w,.2],[0,t.d/2,t.w,.2],[-t.w/2,0,.2,t.d],[t.w/2,0,.2,t.d]]){let y=new Qt(new ve(R+.2,h,N+.2),l);y.position.set(C+Math.sign(C)*.1,h/2,T+Math.sign(T)*.1),y.receiveShadow=!0,n.add(y);let w=new Qt(new ve(R+.25,1,N+.25),c);w.position.set(C+Math.sign(C)*.1,.5,T+Math.sign(T)*.1),n.add(w)}if(t.ceil!=null){let C=new Qt(new Yn(t.w,t.d).rotateX(Math.PI/2),s(t.ceil));C.position.y=h,n.add(C);for(let T=-t.w/2+2;T<t.w/2;T+=4){let R=new Qt(new ve(.3,.3,t.d),c);R.position.set(T,h-.15,0),n.add(R)}}else{let C=new li(new ve(.5,.8,.5),new Ae,400),T=new Lt,R=new ne,N=0;for(let y=0;y<400;y++){let w=y%4,B=(y>>2)/100*2-1,W=(y>>2)%3,nt=w<2?B*t.w/2:(w===2?-1:1)*(t.w/2+1+W),I=w<2?(w===0?-1:1)*(t.d/2+1+W):B*t.d/2;R.makeTranslation(nt,h+.4+W*.7,I),C.setMatrixAt(N,R),C.setColorAt(N++,T.setHSL(Math.random(),.5,.45))}C.count=N,n.add(C),n.userData.crowd=C}let d=new ve(1,1,1).translate(0,.5,0),u=new Map,p=(C,T)=>{let R=C+":"+(T||0),N=u.get(R);return N||(N=s(C),T&&(N.emissive=new Lt(T),N.emissiveIntensity=.6),u.set(R,N)),N};for(let C of t.solids.concat(t.deco)){let T=new Qt(d,p(C.c,C.glow));T.position.set(C.x,C.y,C.z),T.scale.set(C.w,C.h,C.d),T.castShadow=C.h>.3,T.receiveShadow=!0,n.add(T)}let x=t.bright??1;n.add(new Ar(16774376,t.ambient,1.6*x)),n.add(new Pr(16777215,.35*x));let g=new Cr(t.light,1.1);g.position.set(6,12,4),g.castShadow=e>0,g.shadow.mapSize.set(1024,1024),Object.assign(g.shadow.camera,{left:-t.w/2,right:t.w/2,top:t.d/2,bottom:-t.d/2,near:1,far:40}),n.add(g,g.target);let m=e>0?4:2,f=[];t.lamps.forEach(([C,T],R)=>{let N=new Qt(new Tr(.35,.3,4,1,!0),new Ae({color:2236962,emissive:t.light,emissiveIntensity:.5,side:un}));N.position.set(C,h-(t.ceil==null?-1:.9),T),n.add(N);let y=new Qt(new ve(.02,.9,.02),s(1118481));if(y.position.set(C,h-.45,T),t.ceil!=null&&n.add(y),R<m){let w=new Xi(t.light,30,16,1.2);w.position.set(C,h-1.2,T),n.add(w),f.push(w)}});let M=null,_=[];if(t.discoBall){M=new Qt(new Gi(.6,1),new Ae({color:14540253,emissive:7829367,flatShading:!0})),M.position.set(0,h-1,0),n.add(M);for(let C of[16722554,2818e3,16765503]){let T=new Rr(C,40,22,.45,.4,1);T.position.set(0,h-1.1,0),n.add(T,T.target),_.push(T)}}let A=0;return{root:n,update(C){if(A+=C,M&&(M.rotation.y+=C*.8,_.forEach((T,R)=>{let N=A*(.7+R*.25)+R*2.1;T.target.position.set(Math.cos(N)*6,0,Math.sin(N*1.3)*6)}),o.emissiveIntensity=.25+.2*Math.max(0,Math.sin(A*8))),n.userData.crowd&&(A*10|0)%2===0){let T=n.userData.crowd;T.position.y=Math.abs(Math.sin(A*6))*.06}f.forEach((T,R)=>{T.intensity=30+Math.sin(A*3+R)*1.2})},dispose(){i.remove(n)}}}var Kt=.075;function Ji(i,t=0,e=0,n=0,s=Kt){let r=[],o=[],a=[],l=new Lt,c=[[1,0,0,[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]],[-1,0,0,[[0,0,1],[0,1,1],[0,1,0],[0,0,0]]],[0,1,0,[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]],[0,-1,0,[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]],[0,0,1,[[1,0,1],[1,1,1],[0,1,1],[0,0,1]]],[0,0,-1,[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]]];for(let[d,u]of i){let[p,x,g]=d.split(",").map(Number);l.setHex(u);let m=.92+((p*73856093^x*19349663^g*83492791)&15)/100;for(let[f,M,_,A]of c){if(i.has(p+f+","+(x+M)+","+(g+_)))continue;let C=A.map(([T,R,N])=>[(p+T+t)*s,(x+R+e)*s,(g+N+n)*s]);for(let T of[0,1,2,0,2,3])r.push(...C[T]),a.push(f,M,_),o.push(l.r*m,l.g*m,l.b*m)}}let h=new We;return h.setAttribute("position",new Se(r,3)),h.setAttribute("normal",new Se(a,3)),h.setAttribute("color",new Se(o,3)),h.computeBoundingSphere(),h}var ge=(i,t,e)=>i+","+t+","+e;function ue(i,t,e,n,s,r,o,a){for(let l=t;l<t+s;l++)for(let c=e;c<e+r;c++)for(let h=n;h<n+o;h++){let d=typeof a=="function"?a(l-t,c-e,h-n):a;d!=null&&i.set(ge(l,c,h),d)}}var Zi=1708048,nh=16053492,Ao=6953498;function ih(i){let t=new Map;if(ue(t,0,0,0,6,6,6,i.skin),i.shades)for(let e=1;e<=4;e++)t.set(ge(e,3,5),Zi);else t.set(ge(1,3,5),nh),t.set(ge(4,3,5),nh),t.set(ge(1,3,5),Zi),t.set(ge(4,3,5),Zi),t.set(ge(2,3,5),i.skin);if(i.eyepatch){t.set(ge(4,3,5),Zi),t.set(ge(4,4,5),Zi);for(let e=0;e<6;e++)t.set(ge(e,4,5),e===4?Zi:t.get(ge(e,4,5)))}if(t.set(ge(2,1,5),Ao),t.set(ge(3,1,5),Ao),i.hair!=null){ue(t,0,5,0,6,1,6,i.hair),ue(t,0,2,0,6,3,1,i.hair);for(let e of[0,5])ue(t,e,4,1,1,1,3,i.hair)}if(i.afro&&ue(t,-1,5,-1,8,3,7,i.hair||2236962),i.beard!=null){ue(t,0,0,5,6,2,1,(e,n)=>n===1&&(e===2||e===3)?Ao:i.beard);for(let e of[0,5])ue(t,e,0,3,1,3,2,i.beard);ue(t,1,-1,4,4,1,2,i.beard)}switch(i.hat){case"bandana":ue(t,0,5,0,6,1,6,i.hatC),ue(t,0,4,0,6,1,6,(e,n,s)=>s===5||s===0||e===0||e===5?i.hatC:null),t.set(ge(2,4,-1),i.hatC),t.set(ge(3,3,-1),i.hatC);break;case"cap":ue(t,0,6,0,6,1,6,i.hatC),ue(t,1,5,6,4,1,2,i.hatC);break;case"cowboy":ue(t,-2,6,-2,10,1,10,i.hatC),ue(t,0,7,0,6,2,6,i.hatC),ue(t,0,7,0,6,1,6,(e,n,s)=>e===0||e===5||s===0||s===5?2759182:i.hatC);break;case"tricorn":ue(t,-1,6,-1,8,1,8,i.hatC),ue(t,0,7,0,6,2,6,i.hatC),t.set(ge(2,8,6),15790320),t.set(ge(3,8,6),15790320);break;case"helmet":ue(t,-1,3,-1,8,4,8,(e,n,s)=>s===7&&n<3&&e>0&&e<7?null:i.hatC),ue(t,3,7,-1,2,2,7,11542560);break}return t}function sh(i){let t=new Map,e=i.shirt==null?i.skin:i.shirt;return ue(t,0,0,0,8,9,4,(n,s,r)=>s===0?2759184:i.stripes&&s%2===0?i.stripes:i.vest!=null&&(r===0||n<=1||n>=6)&&s>=1?i.vest:i.shirt==null&&s>=1?((n===3||n===4)&&s>4,i.skin):e),i.badge&&t.set(ge(5,6,3),16765503),i.guard&&t.set(ge(2,7,3),16765503),t}function rh(i){let t=new Map,e=i.shirt==null?i.skin:i.vest!=null&&i.vest===i.shirt?i.vest:i.shirt;return ue(t,0,0,0,3,9,3,(n,s)=>s>=6?i.stripes&&s===7?i.stripes:e:i.skin),t}function ah(i){let t=new Map;return ue(t,0,0,0,4,10,4,(e,n,s)=>n<2?i.shoe:i.pants),t.set(ge(1,0,4),i.shoe),t.set(ge(2,0,4),i.shoe),t}var oh=new Map;function Br(i,t){let e=oh.get(i);return e||(e=t(),oh.set(i,e)),e}var ch=new Ae({vertexColors:!0}),Ro={head:[-3,0,-3],torso:[-4,0,-2],armL:[-1.5,-9,-1.5],armR:[-1.5,-9,-1.5],legL:[-2,-10,-2],legR:[-2,-10,-2]},lh=new Map;function Hr(i,t){let e=lh.get(i);return e||(e=t(),lh.set(i,e)),e}var og=[9046538,10489872,7341574];function hh(i,t,e,n,s,r=Math.random){let o=[],a=s*s,l=(s+1.3)*(s+1.3);for(let[c,h]of i){let[d,u,p]=c.split(",").map(Number);(d+.5-t)**2+(u+.5-e)**2+(p+.5-n)**2<=a*(.75+r()*.5)&&(o.push([d,u,p,h]),i.delete(c))}if(o.length)for(let[c]of i){let[h,d,u]=c.split(",").map(Number);(h+.5-t)**2+(d+.5-e)**2+(u+.5-n)**2<=l&&r()<.85&&i.set(c,og[r()*3|0])}return o}function uh(i){let t=JSON.stringify(i),e={head:Hr(t+"H",()=>ih(i)),torso:Hr(t+"T",()=>sh(i)),arm:Hr(t+"A",()=>rh(i)),leg:Hr(t+"L",()=>ah(i))},n={head:Br(t+"h",()=>Ji(ih(i),-3,0,-3)),torso:Br(t+"t",()=>Ji(sh(i),-4,0,-2)),arm:Br(t+"a",()=>Ji(rh(i),-1.5,-9,-1.5)),leg:Br(t+"l",()=>Ji(ah(i),-2,-10,-2))},s=new Be,r=(c,h,d,u)=>{let p=new Be;p.position.set(h*Kt,d*Kt,u*Kt);let x=new Qt(c,ch);return x.castShadow=!0,p.add(x),s.add(p),p},o={legL:r(n.leg,-2,10,0),legR:r(n.leg,2,10,0),torso:r(n.torso,0,10,0),head:r(n.head,0,19,0),armL:r(n.arm,-5.5,18.6,0),armR:r(n.arm,5.5,18.6,0)},a={head:[i.skin,i.skin,i.hair??i.skin,i.beard??i.skin],torso:[i.shirt??i.skin,i.vest??i.shirt??i.skin,i.stripes??i.shirt??i.skin],armL:[i.skin,i.shirt??i.skin],armR:[i.skin,i.shirt??i.skin],legL:[i.pants,i.pants,i.shoe],legR:[i.pants,i.pants,i.shoe]},l={head:e.head,torso:e.torso,armL:e.arm,armR:e.arm,legL:e.leg,legR:e.leg};return{group:s,pivots:o,palette:a,vox:l,owned:{}}}function dh(i,t){let e=i.pivots[t].children[0],n=Ro[t],s=Ji(i.vox[t],n[0],n[1],n[2]);i.owned[t]&&e.geometry.dispose(),e.geometry=s,i.owned[t]=!0}function Co(i=15843965,t=2763306){let e=new Map;ue(e,0,0,0,4,4,5,i);for(let n=0;n<4;n++)e.set(ge(n,3,4),i);return ue(e,0,0,-6,4,4,6,t),new Qt(Ji(e,-2,-2,-2.5,.05),ch)}var Vr=new Map,fh=i=>{let t=Vr.get(i);return t||(t=new Ae({color:i}),Vr.set(i,t)),t},lg=i=>{let t="g"+i,e=Vr.get(t);return e||(e=new Ae({color:i,transparent:!0,opacity:.75}),Vr.set(t,e)),e};function ye(i,t,e,n,s,r,o,a,l){let c=new Qt(new ve(t,e,n),l?lg(s):fh(s));return c.position.set(r,o,a),c.castShadow=!0,i.add(c),c}function Ss(i,t){let e=new Be,n=t.model;if(!n)return e;switch(i){case"stool":ye(e,.4,.08,.4,9116186,0,.62,0);for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])ye(e,.05,.6,.05,7029795,s*.15,.3,r*.15);e.userData.upright=!0;break;case"chair":ye(e,.45,.06,.45,8016432,0,.46,0),ye(e,.45,.5,.06,8016432,0,.74,-.2);for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])ye(e,.05,.46,.05,5913120,s*.19,.23,r*.19);e.userData.upright=!0;break;case"bottle":case"brokenbottle":if(ye(e,.08,i==="bottle"?.2:.12,.08,3107626,0,.1,0,!0),i==="bottle")ye(e,.035,.1,.035,3107626,0,-.05,0,!0);else for(let s of[-1,1])ye(e,.02,.07,.02,8372087,s*.025,.19,0,!0);break;case"mug":ye(e,.13,.17,.13,15784080,0,.08,0,!0),ye(e,.1,.03,.1,16777215,0,.17,0),ye(e,.03,.1,.06,15784080,.08,.08,0,!0);break;case"guitar":ye(e,.06,.55,.04,5913114,0,.27,0),ye(e,.34,.4,.09,12599338,0,.7,0),ye(e,.1,.1,.1,2236962,0,.7,.03);break;case"dynamite":for(let s of[-1,0,1])ye(e,.05,.2,.05,13642282,s*.05,.1,0);ye(e,.01,.08,.01,14540253,0,.24,0);break;case"cannonball":{let s=new Qt(new Gi(.12,0),fh(1710618));s.position.y=.12,e.add(s);break}case"shotgun":case"revolver":case"flintlock":case"rifle":case"tommy":ye(e,n.w,n.len*.6,n.w*1.4,n.hc,0,n.len*.3-.05,.03),ye(e,n.head[0],n.head[1],n.head[2],n.headC,0,n.len*.55,-n.head[2]/2+.06),i==="tommy"&&ye(e,.09,.09,.09,2236962,0,n.len*.35,-.12),e.userData.gun=!0;break;default:ye(e,n.w,n.len,n.w,n.hc,0,n.len/2-.06,0,n.glass),ye(e,n.head[0],n.head[1],n.head[2],n.headC,0,n.len+n.head[1]/2-.06,n.head[2]>.1&&i!=="pan"&&i!=="weight"?n.head[2]/3:0,n.glass)}return e}var ph=18;function mh(i,t){let n=new li(new ve(Kt,Kt,Kt),new Ae,2600);n.instanceMatrix.setUsage(Oc),n.count=0,n.frustumCulled=!1,n.castShadow=!1,n.setColorAt(0,new Lt(1,1,1)),i.add(n);let s=new Float32Array(2600),r=new Float32Array(2600),o=new Float32Array(2600),a=new Float32Array(2600),l=new Float32Array(2600),c=new Float32Array(2600),h=new Float32Array(2600),d=new Float32Array(2600),u=new Uint8Array(2600),p=new Uint8Array(2600),x=0,g=0,m=new ne,f=new rn,M=new Bi,_=new P,A=new P,C=new Lt;function T(lt,O,kt,D,$,st,Dt,St,S=1){let v=x;x=(x+1)%2600,g=Math.max(g,x===0?2600:x),s[v]=lt,r[v]=O,o[v]=kt,a[v]=D,l[v]=$,c[v]=st,h[v]=Math.random()*6.28,d[v]=S*(St?.7+Math.random()*.5:.9+Math.random()*.3),u[v]=1,p[v]=St?1:0,n.setColorAt(v,C.setHex(Dt)),n.instanceColor.needsUpdate=!0,n.count=g}let R=[10095114,11538448,7996934,13113368];function N(lt,O,kt,D,$,st=0,Dt=0,St=1){D=Math.round(D*(Tt.gore??1));for(let S=0;S<D;S++){let v=S%2===0||!$,z=v?R[S&3]:$[Math.random()*$.length|0],K=(1.5+Math.random()*3.5)*St;T(lt+(Math.random()-.5)*.2,O+(Math.random()-.5)*.2,kt+(Math.random()-.5)*.2,st*K*.8+(Math.random()-.5)*K,1.5+Math.random()*3*St,Dt*K*.8+(Math.random()-.5)*K,z,v)}}function y(lt,O,kt,D=8372087,$=14){for(let st=0;st<$;st++)T(lt,O,kt,(Math.random()-.5)*5,1+Math.random()*3,(Math.random()-.5)*5,st%4?D:14745568,!1,.5)}let w=2400,B=(()=>{let lt=document.createElement("canvas");lt.width=lt.height=64;let O=lt.getContext("2d");O.fillStyle="#fff";for(let D=0;D<26;D++){let $=Math.random()*6.28,st=Math.random()*22,Dt=3+Math.random()*7;O.fillRect(32+Math.cos($)*st-Dt/2,32+Math.sin($)*st-Dt/2,Dt,Dt)}O.fillRect(20,20,24,24);let kt=new Vi(lt);return kt.magFilter=be,kt.minFilter=be,kt})(),W=new li(new Yn(1,1),new Ae({alphaMap:B,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),w);W.count=0,W.frustumCulled=!1,W.setColorAt(0,C.setHex(9437184)),i.add(W);let nt=0,I=0,k=0,q=new P,J=new P(0,0,1);function Y(lt,O,kt,D,$,st,Dt){q.set(D,$,st),f.setFromUnitVectors(J,q),M.set(0,0,Math.random()*6.28);let St=new rn().setFromEuler(M);f.multiply(St),_.set(lt+D*.01,O+$*.012,kt+st*.01),A.set(Dt,Dt,1),m.compose(_,f,A),W.setMatrixAt(nt,m),W.setColorAt(nt,C.setHex(R[Math.random()*4|0])),nt=(nt+1)%w,I=Math.max(I,nt===0?w:nt),W.count=I,W.instanceMatrix.needsUpdate=!0,W.instanceColor.needsUpdate=!0,k++}function Z(lt,O,kt){Y(lt,$e(t,lt,O,2),O,0,1,0,kt)}let Q=[],it=46;function ft(lt,O,kt,D=.15,$=!0,st=null){lt.updateMatrixWorld(!0);let Dt=new P,St=new rn,S=new P;lt.matrixWorld.decompose(Dt,St,S),lt.parent&&lt.parent.remove(lt),lt.position.copy(Dt),lt.quaternion.copy(St),lt.scale.copy(S);let v=lt.children[0];if(v&&v.geometry){v.geometry.boundingSphere||v.geometry.computeBoundingSphere();let K=v.geometry.boundingSphere.center.clone();for(let tt of lt.children)tt.position.sub(K);lt.position.add(K.multiply(S).applyQuaternion(St))}i.add(lt);let z={obj:lt,vel:O.clone(),ang:kt.clone(),half:D,bleed:$?3:0,palette:st,rest:0,kick:null};if(Q.push(z),Q.length>it){let K=Q.shift();i.remove(K.obj)}return z}let X=[],j=new xs({color:16769162,transparent:!0});function dt(lt,O){let kt=new We().setFromPoints([lt.clone(),O.clone()]),D=new Er(kt,j.clone());i.add(D),X.push({l:D,t:.08})}let vt=t.w/2,_t=t.d/2;function Ut(lt){let O=!1,kt=D=>{u[D]===0?A.set(0,0,0):A.set(d[D],d[D],d[D]),M.set(h[D],h[D]*.7,0),f.setFromEuler(M),_.set(s[D],r[D],o[D]),m.compose(_,f,A),n.setMatrixAt(D,m),O=!0};for(let D=0;D<g;D++){if(u[D]!==1)continue;if(l[D]-=ph*lt,s[D]+=a[D]*lt,r[D]+=l[D]*lt,o[D]+=c[D]*lt,Math.abs(s[D])>vt-.04){let st=Math.sign(s[D]);if(s[D]=st*(vt-.04),p[D]&&Math.random()<.35&&r[D]<t.h){Y(s[D],r[D],o[D],-st,0,0,.18+Math.random()*.25),u[D]=0,kt(D);continue}a[D]*=-.35}if(Math.abs(o[D])>_t-.04){let st=Math.sign(o[D]);if(o[D]=st*(_t-.04),p[D]&&Math.random()<.35&&r[D]<t.h){Y(s[D],r[D],o[D],0,0,-st,.18+Math.random()*.25),u[D]=0,kt(D);continue}c[D]*=-.35}t.h&&r[D]>t.h-.05&&(r[D]=t.h-.05,l[D]=-Math.abs(l[D])*.3);let $=$e(t,s[D],o[D],r[D]+.2)+Kt*.5*d[D];r[D]<=$&&(r[D]=$,p[D]?(Math.random()<.5&&Y(s[D],$-Kt*.5*d[D],o[D],0,1,0,.16+Math.random()*.3),u[D]=0):Math.abs(l[D])>1.2?(l[D]*=-.3,a[D]*=.55,c[D]*=.55):(l[D]=0,a[D]*=.82,c[D]*=.82,a[D]*a[D]+c[D]*c[D]<.02&&(u[D]=2))),kt(D)}O&&(n.instanceMatrix.needsUpdate=!0);for(let D of Q){if(D.rest>1.5)continue;let $=D.obj;D.vel.y-=ph*lt,$.position.addScaledVector(D.vel,lt);let st=D.ang.length();st>.01&&(f.setFromAxisAngle(_.copy(D.ang).divideScalar(st),st*lt),$.quaternion.premultiply(f)),Math.abs($.position.x)>vt-D.half&&($.position.x=Math.sign($.position.x)*(vt-D.half),D.vel.x*=-.4,D.bleed&&Y($.position.x+Math.sign($.position.x)*D.half,$.position.y,$.position.z,-Math.sign($.position.x),0,0,.5)),Math.abs($.position.z)>_t-D.half&&($.position.z=Math.sign($.position.z)*(_t-D.half),D.vel.z*=-.4,D.bleed&&Y($.position.x,$.position.y,$.position.z+Math.sign($.position.z)*D.half,0,0,-Math.sign($.position.z),.5));let Dt=$e(t,$.position.x,$.position.z,$.position.y+.3)+D.half;$.position.y<Dt?($.position.y=Dt,D.vel.y<-2.5&&D.bleed&&(Z($.position.x,$.position.z,.4+Math.random()*.4),D.bleed--),D.vel.y=Math.abs(D.vel.y)>2?-D.vel.y*.3:0,D.vel.x*=.7,D.vel.z*=.7,D.ang.multiplyScalar(.7),D.vel.lengthSq()<.05&&(D.rest+=lt,D.ang.lengthSq()<.5&&D.ang.set(0,0,0))):D.bleed&&Math.random()<.3&&T($.position.x,$.position.y,$.position.z,D.vel.x*.3,0,D.vel.z*.3,R[Math.random()*4|0],!0)}for(let D=X.length-1;D>=0;D--){let $=X[D];$.t-=lt,$.l.material.opacity=Math.max(0,$.t/.08),$.t<=0&&(i.remove($.l),$.l.geometry.dispose(),X.splice(D,1))}}function Ot(lt,O,kt,D,$){for(let st of Q){let Dt=st.obj,St=Dt.position.x-lt,S=Dt.position.z-O;St*St+S*S<kt*kt&&(st.vel.x+=D,st.vel.z+=$,st.vel.y+=1.5,st.ang.set(Math.random()*6-3,0,Math.random()*6-3),st.rest=0)}}let Tt={gib:T,burst:N,glass:y,splat:Y,pool:Z,addDebris:ft,tracer:dt,update:Ut,nudge:Ot,gore:1,get splats(){return k}};return Tt}var Po=18,gh={head:40,armL:45,armR:45,legL:50,legR:50},xh=["armL","armR","legL","legR"],Lo=new P,_h=new P;function Gr(i,t,e=1,n={}){let s=i/e,r=t/e,o;return s>1.43?o="head":s<.76?o=r<0?"legL":"legR":Math.abs(r)>.3?o=r<0?"armL":"armR":o="torso",n[o]&&(o=n.torso?"head":"torso"),o}var Zn=class{constructor(t,e,n,s,r,o={}){this.W=t,this.id=e,this.w=we(e),this.mesh=Ss(e,this.w),this.pos=new P(n,s,r),this.vel=new P,this.spin=new P,this.thrown=!1,this.owner=null,this.held=!1,this.alive=!0,this.state={used:o.used||0,ammo:o.ammo??this.w.ammo,count:o.count??this.w.count},this.fuse=o.fuse??null,this.mesh.userData.upright||this.mesh.rotation.set(Math.PI/2,Math.random()*6,0,"YXZ"),this.mesh.rotation.y=Math.random()*6,this.mesh.position.copy(this.pos),t.scene.add(this.mesh)}get resting(){return!this.thrown&&this.vel.lengthSq()<.5}remove(){this.alive=!1,this.W.scene.remove(this.mesh)}update(t){let e=this.W,n=e.L;if(this.fuse!=null&&(this.fuse-=t,Math.random()<.6&&e.fx.gib(this.pos.x,this.pos.y+.25,this.pos.z,Math.random()-.5,1.5,Math.random()-.5,16764992,!1,.4),this.fuse<=0)){e.explode(this.pos,this.w.explode,this.w.tdmg,this.owner),this.remove();return}let s=$e(n,this.pos.x,this.pos.z,this.pos.y+.1);if(this.thrown||this.pos.y>s+.01||this.vel.lengthSq()>.01){this.vel.y-=Po*t,this.pos.addScaledVector(this.vel,t),this.mesh.rotation.x+=this.spin.x*t,this.mesh.rotation.z+=this.spin.z*t;let r=n.w/2-.15,o=n.d/2-.15,a=!1;Math.abs(this.pos.x)>r&&(this.pos.x=Math.sign(this.pos.x)*r,this.vel.x*=-.35,a=!0),Math.abs(this.pos.z)>o&&(this.pos.z=Math.sign(this.pos.z)*o,this.vel.z*=-.35,a=!0);for(let c of n.solids)if(!(this.pos.y>c.y+c.h-.02||this.pos.y<c.y)&&Math.abs(this.pos.x-c.x)<c.w/2&&Math.abs(this.pos.z-c.z)<c.d/2){let h=c.w/2-Math.abs(this.pos.x-c.x),d=c.d/2-Math.abs(this.pos.z-c.z);h<d?(this.pos.x+=Math.sign(this.pos.x-c.x)*h,this.vel.x*=-.35):(this.pos.z+=Math.sign(this.pos.z-c.z)*d,this.vel.z*=-.35),a=!0}if(this.thrown){for(let c of e.targets()){if(c===this.owner||!c.alive&&!c.corpse)continue;let h=this.pos.x-c.pos.x,d=this.pos.z-c.pos.z,u=c.radius+.25,p=this.pos.y-c.pos.y;if(h*h+d*d<u*u&&p>-.2&&p<c.height+.1){let x=Lo.copy(this.vel).setY(0).normalize(),g=c.lateralOf?c.lateralOf(this.pos):0;if(c.isPlayer?e.hurtPlayer(To(this.w)*.6,x,3,this.owner):e.hit(c,Gr(p,g,c.scale,c.missing),this.w,x,this.owner,{thrown:!0,knock:this.w.tknock||(this.w.heavy?7:4)}),this.thrown=!1,this.vel.multiplyScalar(-.2),this.w.shatter||this.w.kind==="throw"&&this.id!=="dynamite"&&this.id!=="cannonball"){this.w.shatter&&(e.fx.glass(this.pos.x,this.pos.y,this.pos.z),e.audio.glass()),this.remove();return}break}}if(a&&this.w.shatter){e.fx.glass(this.pos.x,this.pos.y,this.pos.z),e.audio.glass(),this.remove();return}}let l=$e(n,this.pos.x,this.pos.z,this.pos.y+.1);if(this.pos.y<=l){if(this.pos.y=l,this.thrown&&this.w.shatter&&this.vel.y<-3){e.fx.glass(this.pos.x,this.pos.y+.05,this.pos.z),e.audio.glass(),this.remove();return}this.thrown=!1,this.vel.y<-2?this.vel.y*=-.25:this.vel.y=0,this.vel.x*=.6,this.vel.z*=.6,this.spin.multiplyScalar(.5),this.vel.lengthSq()<.05&&(this.vel.set(0,0,0),this.mesh.userData.upright?(this.mesh.rotation.x=0,this.mesh.rotation.z=0):(this.mesh.rotation.x=Math.PI/2,this.mesh.rotation.z=0))}this.mesh.position.copy(this.pos)}}},cg=0,ws=class{constructor(t,e,n,s,r,o={}){this.W=t,this.id=++cg,this.scale=o.scale||1,this.boss=!!o.boss,this.name=o.name||null;let a=o.hp||1,l=uh(e);this.group=l.group,this.pivots=l.pivots,this.palette=l.palette,this.outfit=e,this.person=l,this.voxStart={};for(let c in l.vox)this.voxStart[c]=l.vox[c].size;this.coward=Math.random()<.3,this.fleeT=0,this.group.scale.setScalar(this.scale),t.scene.add(this.group),this.pos=new P(s,0,r),this.vel=new P,this.yaw=Math.random()*6,this.radius=.36*this.scale,this.height=1.88*this.scale,this.maxHp=100*a,this.hp=this.maxHp,this.partHp={};for(let c in gh)this.partHp[c]=gh[c]*a*(this.boss?1.4:1);this.missing={},this.alive=!0,this.corpse=!1,this.state="idle",this.t=0,this.cool=.5+Math.random(),this.think=0,this.target=null,this.goal=null,this.down=0,this.tilt=0,this.spinY=0,this.walk=Math.random()*6,this.stun=0,this.lastHitBy=null,this.weapon=null,this.wstate={used:0},this.heldMesh=null,this.calm=!o.hostile,this.activity=o.activity||"idle",this.home=new P(s,0,r),this.wander=null,this.idleT=Math.random()*4,this.joinT=null,this.joinBy=null,this.aggro=o.aggro??.65+Math.random()*.3,this.speed=(2.6+Math.random()*1)*(this.boss?.85:1),this.giveWeapon(n),this.wounds=0,this.sync()}get isPlayer(){return!1}giveWeapon(t,e){this.heldMesh&&(this.heldMesh.parent&&this.heldMesh.parent.remove(this.heldMesh),this.heldMesh=null),this.weapon=t&&t!=="fists"&&!this.missing.armR?t:null;let n=we(this.weapon);if(this.wstate=e||{used:0,ammo:n.ammo,count:n.count},this.weapon){let s=Ss(this.weapon,n);s.position.set(0,-8.5*Kt,.5*Kt),s.rotation.x=s.userData.gun?-Math.PI/2:-Math.PI/2*0+Math.PI/2,s.userData.upright&&(s.rotation.set(Math.PI,0,0),s.position.y=-8*Kt),this.pivots.armR.add(s),this.heldMesh=s}}dropWeapon(t){if(!this.weapon)return;let e=new Zn(this.W,this.weapon,this.pos.x+Math.sin(this.yaw)*.4,1*this.scale,this.pos.z+Math.cos(this.yaw)*.4,this.wstate);t&&(e.vel.set((Math.random()-.5)*4,2.5,(Math.random()-.5)*4),e.spin.set(8,0,6)),this.W.items.push(e),this.giveWeapon(null)}get w(){return we(this.weapon)}lateralOf(t){let e=t.x-this.pos.x,n=t.z-this.pos.z;return e*Math.cos(this.yaw)-n*Math.sin(this.yaw)}partWorld(t,e){return this.pivots[t].getWorldPosition(e),t==="head"?e.y+=.2*this.scale:t!=="torso"?e.y-=.35*this.scale:e.y+=.35*this.scale,e}get crawling(){return this.missing.legL&&this.missing.legR}provoke(t,e=0){if(!(!this.calm||!this.alive)){if(e>0){(this.joinT==null||e<this.joinT)&&(this.joinT=e,this.joinBy=t);return}this.calm=!1,this.joinT=null,this.wander=null,this.target=t&&t!==this&&(t.isPlayer,t.alive)?t:this.pickTarget(),this.cool=Math.min(this.cool,.3+Math.random()*.5),this.W.onBrawl(this)}}calmStep(t){if(this.joinT!=null)return this.joinT-=t,this.joinT<=0&&this.provoke(this.joinBy),[0,0];if(this.activity==="dance")return this.yaw+=Math.sin(this.walk*.3)*t*.6,[0,0];if(this.wander){let e=this.wander.x-this.pos.x,n=this.wander.z-this.pos.z,s=Math.hypot(e,n);return s<.3?(this.wander=null,this.idleT=3+Math.random()*7,[0,0]):(this.yaw+=(Math.atan2(e,n)-this.yaw+Math.PI*3)%(Math.PI*2)-Math.PI>0?t*3:-t*3,[e/s*.32,n/s*.32])}if(this.idleT-=t,this.idleT<=0&&this.activity!=="music"){let e=Math.random()*Math.PI*2,n=.8+Math.random()*2.2;this.wander={x:this.home.x+Math.cos(e)*n,z:this.home.z+Math.sin(e)*n},(Math.abs(this.wander.x)>this.W.L.w/2-.6||Math.abs(this.wander.z)>this.W.L.d/2-.6)&&(this.wander=null),this.idleT=2+Math.random()*5}return[0,0]}takeHit(t,e,n,s,r,o){let a=this.W;if(this.calm&&this.alive&&(this.provoke(r),a.alarm(this.pos,r)),this.lastHitBy=r||this.lastHitBy,r&&!r.isPlayer&&r!==this&&Math.random()<.7?this.target=r:r&&r.isPlayer&&(this.target=r),this.alive&&this.state==="block"&&r){let d=Math.sin(this.yaw),u=Math.cos(this.yaw),p=(r.pos.x-this.pos.x)*d+(r.pos.z-this.pos.z)*u>0;if(p&&!(o&&(o.heavy||o.charged))){a.audio.clang(),this.hp-=e.dmg*.2,this.state="stagger",this.t=.25,this.vel.x+=n.x*s*.3,this.vel.z+=n.z*s*.3,r.isPlayer&&a.feed("\u{1F6E1} BLOCKED");return}p&&r.isPlayer&&a.feed("\u{1F4A2} GUARD BREAK")}let l=this.partWorld(this.missing[t]?"torso":t,_h);a.fx.burst(l.x,l.y,l.z,Math.max(3,(e.gibs>>1)*a.gore),null,n.x,n.z,1),Math.random()<.6&&a.fx.pool(this.pos.x+n.x*.6,this.pos.z+n.z*.6,.3+e.dmg/80),this.carve(this.missing[t]?"torso":t,n,e)&&t!=="torso"&&!this.missing[t]&&(e.sever=!0,e.crush=!0);let h=t==="head"?1.7:t==="torso"?1:.45;if(this.hp-=e.dmg*h,t!=="torso"&&(this.partHp[t]-=e.dmg,(this.partHp[t]<=0||e.sever)&&this.sever(t,n,e.crush)),!this.alive&&this.corpse){e.crush||a.rage&&e.dmg>20||t==="torso"&&e.dmg>45&&Math.random()<.5?this.obliterate(n):(this.vel.x+=n.x*s*.5,this.vel.z+=n.z*s*.5);return}this.alive&&this.hp<=0?this.die(n,e.crush||o&&o.crush||a.rage,r):this.alive&&(s>6.5||o&&o.heavy&&Math.random()<.6?this.knockDown(n,s):(this.state="stagger",this.t=.28+s*.03,this.vel.x+=n.x*s,this.vel.z+=n.z*s),this.weapon&&Math.random()<.12*(s/4)&&this.dropWeapon(!0))}carve(t,e,n){if(this.missing[t]||this.gone)return!1;let s=this.person,r=this.W;!s.owned[t]&&!s.voxOwned?.[t]&&(s.vox[t]=new Map(s.vox[t]),(s.voxOwned||={})[t]=!0);let o=this.pivots[t].children[0],a=this.partWorld(t,new P),l=(t==="head"?.2:t==="torso"?.13:.1)*this.scale;a.x-=e.x*l,a.z-=e.z*l,a.y+=(Math.random()-.5)*(t==="head"?.25:.35)*this.scale,o.updateMatrixWorld(!0);let c=o.worldToLocal(a.clone()),h=Ro[t],d=c.x/Kt-h[0],u=c.y/Kt-h[1],p=c.z/Kt-h[2],x=Math.min(3.4,(1+n.dmg/22)*(n.crush?1.5:1)*(r.gore>1?1.2:1)),g=hh(s.vox[t],d,u,p,x);if(!g.length)return!1;dh(s,t);let m=new P,f=Math.min(g.length,Math.round(28*r.gore));for(let _=0;_<f;_++){let[A,C,T,R]=g[_];m.set((A+.5+h[0])*Kt,(C+.5+h[1])*Kt,(T+.5+h[2])*Kt),o.localToWorld(m);let N=1.5+Math.random()*3;r.fx.gib(m.x,m.y,m.z,e.x*N+(Math.random()-.5)*2,1+Math.random()*3,e.z*N+(Math.random()-.5)*2,R,!1)}let M=s.vox[t].size/this.voxStart[t];return t==="head"&&M<.45&&this.alive?(this.sever("head",e,!0),!0):t==="torso"&&M<.4?(this.alive?(this.hp=0,this.die(e,!0,this.lastHitBy)):this.obliterate(e),!0):M<.35}wound(t){if(this.wounds>40||this.missing[t])return;this.wounds++;let e=this.pivots[t],n=e.children[0],s=new Qt(this.W.woundGeo,this.W.woundMat),r=t==="head"?[6,6,6,-3,0,-3]:t==="torso"?[8,9,4,-4,0,-2]:t.startsWith("arm")?[3,9,3,-1.5,-9,-1.5]:[4,10,4,-2,-10,-2],o=Math.random()*3|0,a=[r[3]+Math.random()*r[0],r[4]+Math.random()*r[1],r[5]+Math.random()*r[2]];o===0?a[2]=r[5]+r[2]-.4:o===1?a[0]=Math.random()<.5?r[3]+.4:r[3]+r[0]-.4:a[2]=r[5]+.4,s.position.set(a[0]*Kt,a[1]*Kt,a[2]*Kt),s.scale.setScalar(.8+Math.random()*1.2),n.add(s)}sever(t,e,n){if(this.missing[t])return;let s=this.W;this.missing[t]=!0,s.stats.limbs++;let r=this.pivots[t],o=this.partWorld(t,new P);if(t==="armR"&&this.weapon&&this.dropWeapon(!0),n)r.visible=!1,s.fx.burst(o.x,o.y,o.z,40,this.palette[t],e.x,e.z,1.4);else{let c=new P(e.x*4+(Math.random()-.5)*3,3+Math.random()*3,e.z*4+(Math.random()-.5)*3),h=new P((Math.random()-.5)*16,(Math.random()-.5)*8,(Math.random()-.5)*16);s.fx.addDebris(r,c,h,t==="head"?.22*this.scale:.14*this.scale,!0,this.palette[t]),s.fx.burst(o.x,o.y,o.z,26,this.palette[t],e.x,e.z,1.2)}let a=new Qt(s.stumpGeo,s.woundMat),l={head:[0,19,0],armL:[-5.5,18.6,0],armR:[5.5,18.6,0],legL:[-2,10,0],legR:[2,10,0]}[t];if(a.position.set(l[0]*Kt,l[1]*Kt,l[2]*Kt),this.group.add(a),s.fx.pool(this.pos.x,this.pos.z,.6),t==="head"){s.stats.heads++,s.announce(this.alive?n?"HEAD POPPED":"DECAPITATED":""),this.alive&&(this.hp=0,this.die(e,!1,this.lastHitBy));for(let c=0;c<30;c++)s.fx.gib(o.x,o.y-.1,o.z,(Math.random()-.5)*2,3+Math.random()*4,(Math.random()-.5)*2,11538448,!0)}}knockDown(t,e){this.state="down",this.down=1.4+Math.random()*.8,this.t=0,this.vel.set(t.x*e,2.5+e*.25,t.z*e),this.flying=e,this.spinY=(Math.random()-.5)*6,this.weapon&&Math.random()<.5&&this.dropWeapon(!0)}obliterate(t){this.gone||(this.alive=!0,this.noCredit=!0,this.die(t,!0,null))}die(t,e,n){let s=this.W;if(this.alive){if(this.alive=!1,this.state="dead",this.noCredit||s.onKill(this,n,e),this.weapon&&this.dropWeapon(!0),e){for(let r of["head","torso",...xh]){if(this.missing[r])continue;this.missing[r]=!0;let o=this.pivots[r],a=this.partWorld(r,new P),l=new P(t.x*6+(Math.random()-.5)*7,3+Math.random()*5,t.z*6+(Math.random()-.5)*7);s.fx.addDebris(o,l,new P((Math.random()-.5)*20,(Math.random()-.5)*10,(Math.random()-.5)*20),(r==="torso"?.25:.15)*this.scale,!0,this.palette[r]),s.fx.burst(a.x,a.y,a.z,22,this.palette[r],t.x,t.z,1.8)}for(let r=0;r<6;r++)s.fx.pool(this.pos.x+(Math.random()-.5)*2.5,this.pos.z+(Math.random()-.5)*2.5,.6+Math.random()*.8);s.scene.remove(this.group),this.corpse=!1,this.gone=!0;return}this.corpse=!0,this.vel.x+=t.x*4,this.vel.z+=t.z*4,this.vel.y=Math.max(this.vel.y,1.5),this.fallDir=Math.random()<.5?1:-1,this.spinY=(Math.random()-.5)*4,s.fx.pool(this.pos.x,this.pos.z,1+Math.random()*.6)}}pickTarget(){let t=this.W,e=this;if(this.calm)return null;let n=t.fighters.filter(o=>o!==e&&o.alive);if(t.player.alive&&(Math.random()<this.aggro||!n.length||this.boss))return t.player;let s=null,r=1e9;for(let o of n){let a=o.pos.distanceToSquared(this.pos);a<r&&(r=a,s=o)}return s||(t.player.alive?t.player:null)}update(t){let e=this.W;if(this.gone)return;this.cool-=t,this.t-=t,this.think-=t;let n=this.pos.y<=$e(e.L,this.pos.x,this.pos.z,this.pos.y+.3)+.01,s=0,r=0;if(this.alive)if(this.state==="down")this.down-=t,this.tilt=Math.min(1,this.tilt+t*5),this.down<=0&&n&&(this.state="idle");else if(this.calm){this.tilt=Math.max(0,this.tilt-t*3);let h=this.calmStep(t);s=h[0],r=h[1]}else{if(this.tilt=Math.max(0,this.tilt-t*3),this.think<=0&&(this.think=.35+Math.random()*.4,(!this.target||!this.target.alive||Math.random()<.08)&&(this.target=this.pickTarget()),this.goal=null,!this.weapon&&!this.missing.armR&&Math.random()<.6)){let h=null,d=25;for(let u of e.items){if(!u.alive||u.held||!u.resting||u.fuse!=null)continue;let p=u.pos.distanceToSquared(this.pos);p<d&&u.pos.y<1.3&&(d=p,h=u)}this.goal=h}if(this.coward&&!this.boss&&this.hp<this.maxHp*.3&&this.fleeT<=0&&!this.fled&&(this.fled=!0,this.fleeT=3+Math.random()*3,Math.random()<.5&&this.dropWeapon(!0)),this.fleeT>0&&(this.fleeT-=t),this.state==="block"?(this.t-=0,this.t<=0&&(this.state="idle")):this.state==="idle"&&e.playerThreat&&this.target===e.player&&!this.boss&&Math.random()<t*1.5&&this.pos.distanceTo(e.player.pos)<3&&!this.missing.armL&&!this.missing.armR&&(this.state="block",this.t=.6+Math.random()*.5),this.state==="stagger"||this.state==="block")this.t<=0&&(this.state="idle");else if(this.state==="windup")this.faceTarget(t,10),this.t<=0&&this.strike();else if(this.state==="recover")this.t<=0&&(this.state="idle");else{let h=this.goal&&this.goal.alive&&!this.goal.held?this.goal:this.target;if(this.fleeT>0&&h){let d=this.pos.x-h.pos.x,u=this.pos.z-h.pos.z,p=Math.hypot(d,u)||1;s=d/p*1.3,r=u/p*1.3,this.yaw=Math.atan2(s,r)}else if(h){let d=h.pos.x-this.pos.x,u=h.pos.z-this.pos.z,p=Math.hypot(d,u)||1,x=this.w,g=this.weapon&&!this.missing.armR;if(h===this.goal)p<.8?(this.giveWeapon(h.id,h.state),h.held=!0,h.remove(),this.goal=null):(s=d/p,r=u/p);else if(g&&x.kind==="gun")p>11?(s=d/p,r=u/p):p<4?(s=-d/p,r=-u/p):(s=-u/p*.5,r=d/p*.5),this.cool<=0&&p<x.range&&(this.state="windup",this.t=.55+Math.random()*.4);else if(g&&(x.shatter||x.kind==="throw")&&p>3.5&&p<10&&this.cool<=0&&Math.random()<.02)this.state="windup",this.t=.45,this.throwing=!0;else{let m=(g?x.reach:1.4)+h.radius+.1;p>m*.85&&(s=d/p,r=u/p),p<m&&this.cool<=0&&(this.state="windup",this.t=(g?Math.min(.75,x.rate*.8):.42)+Math.random()*.2,this.throwing=!1)}this.faceTarget(t,6,h)}}}let o=this.crawling?.6:this.missing.legL||this.missing.legR?1.1:this.speed;if(this.alive&&this.state!=="down"&&n){let h=1-Math.exp(-10*t);this.vel.x+=(s*o-this.vel.x)*h,this.vel.z+=(r*o-this.vel.z)*h}else if(n){let h=Math.exp(-(this.corpse?5:3)*t);this.vel.x*=h,this.vel.z*=h}this.vel.y-=Po*t;let a=Math.hypot(this.vel.x,this.vel.z);this.pos.addScaledVector(this.vel,t);let l=this.collideWorld();if(l&&a>6&&(this.state==="down"||this.corpse)){if(e.fx.splat(l.x,this.pos.y+1+Math.random()*.6,l.z,l.nx,0,l.nz,.5+a*.06),e.audio.thud(.8),this.alive){let h={dmg:Math.round(a*2.2),sever:!1,crush:!1,gibs:8};e.ctx={slam:!0},this.takeHit("torso",h,Lo.set(-l.nx,0,-l.nz),0,this.lastHitBy,null),e.ctx=null}this.vel.x*=.3,this.vel.z*=.3}let c=$e(e.L,this.pos.x,this.pos.z,this.pos.y+.3);this.pos.y<c&&(this.pos.y=c,this.vel.y<-6&&this.flying&&e.fx.pool(this.pos.x,this.pos.z,.6),this.vel.y=0,this.flying=0),this.state==="down"&&this.flying&&(this.yaw+=this.spinY*t),this.corpse&&(this.yaw+=this.spinY*t,this.spinY*=Math.exp(-3*t),this.tilt=Math.min(1,this.tilt+t*3.5)),this.animate(t,Math.hypot(this.vel.x,this.vel.z)),this.sync()}faceTarget(t,e,n=this.target){if(!n)return;let r=Math.atan2(n.pos.x-this.pos.x,n.pos.z-this.pos.z)-this.yaw;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;this.yaw+=r*Math.min(1,e*t)}strike(){let t=this.W,e=this.target,n=this.w,s=this.weapon&&!this.missing.armR;if(this.state="recover",this.t=.25,this.cool=(s?n.rate:.6)+.35+Math.random()*.5,this.swing=.25,!e||!e.alive)return;let r=Math.sin(this.yaw),o=Math.cos(this.yaw);if(s&&this.throwing){this.throwing=!1;let g=new Zn(t,this.weapon,this.pos.x+r*.5,1.6*this.scale,this.pos.z+o*.5,this.wstate),m=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z),f=m/14;g.vel.set((e.pos.x-this.pos.x)/f,.5*Po*f*.9,(e.pos.z-this.pos.z)/f),g.spin.set(12,0,4),g.thrown=!0,g.owner=this,this.weapon==="dynamite"&&(g.fuse=1.4),t.items.push(g),this.giveWeapon(null);return}if(s&&n.kind==="gun"){let g=new P(this.pos.x+r*.4,1.45*this.scale,this.pos.z+o*.4),f=new P(e.pos.x,e.pos.y+(e.isPlayer?1.3:1.2*e.scale),e.pos.z).sub(g).normalize();t.shoot(g,f,n,this,.07),this.wstate.ammo--,this.wstate.ammo<=0&&this.dropWeapon(!0);return}let a=e.pos.x-this.pos.x,l=e.pos.z-this.pos.z,c=Math.hypot(a,l),h=(s?n.reach:1.4)+e.radius+.25,d=Math.abs(Math.atan2(r*l-o*a,r*a+o*l));if(c>h||d>.9){t.audio.whoosh();return}let u=Lo.set(a/c,0,l/c),p=s?n:this.missing.armR&&this.missing.armL?{dmg:6,knock:3,sever:0,kind:"melee"}:we("fists"),x=p.dmg*(this.boss?1.4:.75);if(e.isPlayer)t.hurtPlayer(x,u,(p.knock||2)*(this.boss?1.5:1),this);else{let g=Math.random(),m=g<.2?"head":g<.6?"torso":xh[Math.random()*4|0];t.hit(e,e.missing[m]?"torso":m,p,u,this,{})}if(s){let g=kr(this.weapon,this.wstate);if(g!==this.weapon){if(n.shatter){let m=this.partWorld("armR",_h);t.fx.glass(m.x,m.y,m.z),t.audio.glass()}this.giveWeapon(g)}}}collideWorld(){let t=this.W.L,e=this.radius,n=null,s=t.w/2-e,r=t.d/2-e;this.pos.x>s&&(this.pos.x=s,n={x:t.w/2,z:this.pos.z,nx:-1,nz:0},this.vel.x=Math.min(0,this.vel.x)*-.3),this.pos.x<-s&&(this.pos.x=-s,n={x:-t.w/2,z:this.pos.z,nx:1,nz:0},this.vel.x=Math.max(0,this.vel.x)*-.3),this.pos.z>r&&(this.pos.z=r,n={x:this.pos.x,z:t.d/2,nx:0,nz:-1},this.vel.z=Math.min(0,this.vel.z)*-.3),this.pos.z<-r&&(this.pos.z=-r,n={x:this.pos.x,z:-t.d/2,nx:0,nz:1},this.vel.z=Math.max(0,this.vel.z)*-.3);for(let o of t.solids){if(o.y>this.pos.y+1.2||o.y+o.h<=this.pos.y+.35)continue;let a=Math.max(o.x-o.w/2,Math.min(this.pos.x,o.x+o.w/2)),l=Math.max(o.z-o.d/2,Math.min(this.pos.z,o.z+o.d/2)),c=this.pos.x-a,h=this.pos.z-l,d=c*c+h*h;if(d<e*e){let u=Math.sqrt(d)||.001,p=d?c/u:1,x=d?h/u:0;this.pos.x=a+p*e,this.pos.z=l+x*e;let g=this.vel.x*p+this.vel.z*x;g<0&&(this.vel.x-=g*p*1.3,this.vel.z-=g*x*1.3),n||(n={x:a,z:l,nx:p,nz:x})}}return n}animate(t,e){let n=this.pivots;this.walk+=e*t*3.2;let s=this.alive&&this.state!=="down"?Math.sin(this.walk)*Math.min(1,e/2.5)*.7:0;this.missing.legL||(n.legL.rotation.x=s),this.missing.legR||(n.legR.rotation.x=-s),this.missing.armL||(n.armL.rotation.x=-s*.8+(this.state==="stagger"?-1:0));let r=s*.8;this.state==="windup"&&(r=this.w.kind==="gun"?-1.5:-2.6),this.swing>0&&(this.swing-=t,r=-2.6+(1-this.swing/.25)*3.3),this.alive&&this.w.kind==="gun"&&this.state!=="down"&&!this.calm&&(r=Math.min(r,-1.4));let o=0;if(this.alive&&this.calm){let l=performance.now()/1e3+this.id;this.activity==="dance"?(o=Math.abs(Math.sin(l*4))*.06,r=-2.4+Math.sin(l*4)*.5,this.missing.armL||(n.armL.rotation.x=-2.4-Math.sin(l*4)*.5),n.legL.rotation.x=Math.sin(l*4)*.25,n.legR.rotation.x=-Math.sin(l*4)*.25):this.activity==="music"?(r=-.9+Math.sin(l*8)*.25,this.missing.armL||(n.armL.rotation.x=-.9-Math.sin(l*8)*.25)):this.activity==="drink"&&Math.sin(l*.7)>.75&&(r=-2.3)}this.danceY=o,this.missing.armR||(n.armR.rotation.x=r),this.state==="block"&&this.alive?(this.missing.armR||n.armR.rotation.set(-1.9,0,-.5),this.missing.armL||n.armL.rotation.set(-1.9,0,.5)):(this.missing.armR||(n.armR.rotation.z=0),this.missing.armL||(n.armL.rotation.z=0)),this.fleeT>0&&this.alive&&!this.missing.armL&&(n.armL.rotation.x=-2.8,this.missing.armR||(n.armR.rotation.x=-2.8)),n.torso.rotation.x=this.state==="stagger"?-.3:this.state==="windup"?-.15:0,n.head.rotation.x=n.torso.rotation.x;let a=this.crawling?-.7:0;for(let l of["torso","head","armL","armR"])n[l].position.y=(l==="torso"?10:l==="head"?19:18.6)*Kt+a;this.crawling&&(n.torso.rotation.x=1.2)}sync(){if(this.gone)return;let t=this.group;if(t.position.copy(this.pos),this.danceY&&(t.position.y+=this.danceY),t.rotation.set(0,this.yaw,0),this.tilt>0){let e=this.tilt*Math.PI/2;t.rotateX(this.corpse?-e*.98*(this.fallDir||1):-e),t.position.y+=Math.sin(e)*.18*this.scale}}};function vh(){let i=null,t=null,e=null,n=null;function s(){if(i){i.state==="suspended"&&i.resume();return}try{i=new(window.AudioContext||window.webkitAudioContext)}catch{return}t=i.createGain(),t.gain.value=.55,t.connect(i.destination),e=i.createBuffer(1,i.sampleRate,i.sampleRate);let a=e.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1}function r(a,l,c,h,d,u=0,p){if(!i)return;let x=i.currentTime+u,g=i.createBufferSource();g.buffer=e,g.playbackRate.value=.7+Math.random()*.6;let m=i.createBiquadFilter();m.type=l,m.frequency.setValueAtTime(c,x),m.Q.value=h,p&&m.frequency.exponentialRampToValueAtTime(p,x+a);let f=i.createGain();f.gain.setValueAtTime(d,x),f.gain.exponentialRampToValueAtTime(.001,x+a),g.connect(m),m.connect(f),f.connect(t),g.start(x,Math.random()*.5),g.stop(x+a+.02)}function o(a,l,c,h,d=0,u){if(!i)return;let p=i.currentTime+d,x=i.createOscillator();x.type=c,x.frequency.setValueAtTime(a,p),u&&x.frequency.exponentialRampToValueAtTime(u,p+l);let g=i.createGain();g.gain.setValueAtTime(h,p),g.gain.exponentialRampToValueAtTime(.001,p+l),x.connect(g),g.connect(t),x.start(p),x.stop(p+l+.02)}return{unlock:s,thud(a=1){r(.12,"lowpass",500+Math.random()*300,1,.9*a),o(110+Math.random()*40,.12,"sine",.6*a,0,50)},squish(){r(.18,"bandpass",900,2,.6,0,300),r(.12,"lowpass",300,1,.5,.05)},slash(){r(.14,"highpass",2500,1,.5,0,6e3),r(.16,"bandpass",700,2,.5,.03,250)},whoosh(){r(.18,"bandpass",600,1.5,.25,0,2e3)},glass(){r(.25,"highpass",4e3,1,.6);for(let a=0;a<4;a++)o(2500+Math.random()*3e3,.12,"triangle",.08,a*.03)},clang(){o(900,.25,"square",.12),o(1340,.2,"triangle",.12),r(.06,"highpass",3e3,1,.3)},shot(a){r(a?.45:.3,"lowpass",a?1200:2200,1,1.1,0,200),o(a?70:120,.2,"sine",.7,0,40)},click(){o(1800,.03,"square",.1)},boom(){r(1.1,"lowpass",900,.7,1.4,0,60),o(55,.9,"sine",1,0,25)},crunch(){r(.3,"lowpass",1400,1,.9,0,200),r(.2,"bandpass",400,3,.7,.04),o(70,.25,"sine",.8,0,35)},gulp(){for(let a=0;a<3;a++)o(180-a*20,.09,"sine",.3,a*.14,90)},hurt(){o(220,.15,"sawtooth",.15,0,120)},rage(){o(80,1.2,"sawtooth",.35,0,160),r(.8,"bandpass",300,1,.5,0,1200)},bell(){for(let a=0;a<3;a++)o(660,.6,"triangle",.25,a*.25)},music(a,l="rock"){if(!i||(this._mus&&(clearInterval(this._mus),this._mus=null),!a))return;let c=l==="disco"?120:l==="piano"?100:96,h=60/c,d=l==="disco"?[55,55,82.4,55,73.4,55,82.4,98]:l==="piano"?[130.8,164.8,196,164.8,146.8,174.6,220,174.6]:[41.2,41.2,55,41.2,49,49,55,61.7],u=0,p=()=>{let x=u++%8;l!=="piano"&&(o(60,.18,"sine",x%2===0?.5:.15,0,35),x%4===2&&r(.12,"bandpass",1800,1,.18),r(.03,"highpass",7e3,1,l==="disco"?.12:.05)),o(d[x],h*.9,l==="piano"?"triangle":"sawtooth",l==="piano"?.12:.07),l==="piano"&&x%2===0&&o(d[x]*2,h*.5,"triangle",.06,h*.25)};p(),this._mus=setInterval(p,h*500)},crowd(a){if(i)if(a&&!n){let l=i.createBufferSource();l.buffer=e,l.loop=!0;let c=i.createBiquadFilter();c.type="bandpass",c.frequency.value=420,c.Q.value=.8;let h=i.createGain();h.gain.value=.06;let d=i.createOscillator();d.frequency.value=.3;let u=i.createGain();u.gain.value=.03,d.connect(u),u.connect(h.gain),d.start(),l.connect(c),c.connect(h),h.connect(t),l.start(),n={s:l,lfo:d}}else!a&&n&&(n.s.stop(),n.lfo.stop(),n=null)}}}var yt=i=>document.getElementById(i),Qe="ontouchstart"in window||(navigator.maxTouchPoints||0)>0;Qe&&document.body.classList.add("touch");var yh="citydriver_save_v1",Io="citydriver_brawl_best",Ah="citypainter_settings",fe=Object.assign({sens:1,fov:78,gore:1,quality:Qe?0:1},(()=>{try{return JSON.parse(localStorage.getItem(Ah))||{}}catch{return{}}})());function Wr(){try{localStorage.setItem(Ah,JSON.stringify(fe))}catch{}}var Rh=1.62,No=.34,Xe=new gs({antialias:!Qe,powerPreference:"high-performance"});Xe.setPixelRatio(Math.min(window.devicePixelRatio||1,fe.quality?Qe?1.5:1.75:1));Xe.shadowMap.enabled=!0;Xe.shadowMap.type=Lr;Xe.outputColorSpace=_e;yt("game").appendChild(Xe.domElement);var De=new Ie(fe.fov,16/9,.05,120),Jn=null,Zr=Yc((i,t)=>{Xe.setSize(i,t,!1),Xe.domElement.style.width=i+"px",Xe.domElement.style.height=t+"px",De.aspect=i/t,De.updateProjectionMatrix()});Zr.refresh();var Xt=vh(),U=null,Oo=null,an=!1,In=!1,Fo="biker",E={isPlayer:!0,pos:new P,vel:new P,yaw:0,pitch:0,hp:100,alive:!0,radius:No,height:1.8,scale:1,missing:{},weapon:null,wstate:{used:0},cool:0,kickCool:0,block:!1,rage:0,raging:0,punchSide:0,onGround:!0,pending:null},wt={mx:0,my:0,attack:!1,attackHeld:!1,block:!1,kick:!1,grab:!1,throw:!1,jump:!1,rage:!1,sprint:!1};function Ch(i){let t=Kc(i);Jn=new Sr,Oo=eh(Jn,t,fe.quality),Xe.shadowMap.enabled=!!fe.quality,Jn.add(De);let e=mh(Jn,t);e.gore=fe.gore,U={L:t,scene:Jn,fx:e,audio:Xt,player:E,fighters:[],items:[],rage:!1,stats:{kills:0,limbs:0,heads:0,exploded:0,t:0,wave:0,spawned:0,score:0,bestCombo:0,parries:0},gore:fe.gore,playerThreat:!1,ctx:null,combo:{n:0,t:9},feed:on,woundGeo:new ve(Kt*1.05,Kt*1.05,Kt*1.05),stumpGeo:new ve(Kt*3.2,Kt*1.2,Kt*3.2),woundMat:new Ae({color:10094600}),spawnPts:Qc(t,18),spawnT:1.2,bossSpawned:!1,boss:null,done:!1,hitstop:0,shake:0,targets(){return this.fighters.concat([E])},hit:Qi,hurtPlayer:ko,shoot:Dh,explode:Uh,onKill:mg,announce:xn,alarm:zo,onBrawl:Ph,brawl:!1,spreadT:1};for(let n of t.pickups){let s=new Zn(U,n.w,n.x,n.y||0,n.z);U.items.push(s)}if(E.pos.set(t.player[0],0,t.player[1]),E.vel.set(0,0,0),E.yaw=t.player[2],E.pitch=0,E.hp=100,E.alive=!0,E.weapon=null,E.wstate={used:0},E.rage=0,E.raging=0,E.cool=0,E.pending=null,ji(null),t.waves&&(U.stats.wave=0,U.brawl=!0,Lh()),U.remaining=t.waves?0:t.enemies.count,!t.waves){let n=Math.min(U.remaining,t.enemies.maxActive+4);for(let s=0;s<n;s++){let r=hg(t,3.5),o=t.id==="disco"&&Math.hypot(r[0],r[1])<6?"dance":Math.random()<.5?"drink":"idle";Yr(!1,r,o)}if(t.musician){let s=U.fighters[0];s&&(s.pos.set(t.musician[0],0,t.musician[1]),s.home.copy(s.pos),s.activity="music",s.yaw=t.musician[2]||0,s.role="music",U.musician=s,U.musicOn=!0)}}}function hg(i,t){for(let e=0;e<60;e++){let n=(Math.random()-.5)*(i.w-2.4),s=(Math.random()-.5)*(i.d-2.4);if(!wo(i,n,s,.55)&&!(Math.hypot(n-i.player[0],s-i.player[1])<t)&&!(U&&U.fighters.some(r=>Math.hypot(r.pos.x-n,r.pos.z-s)<1)))return[n,s]}return U.spawnPts[Math.random()*U.spawnPts.length|0]}function zo(i,t,e=7){for(let n of U.fighters){if(!n.calm||!n.alive)continue;let s=Math.hypot(n.pos.x-i.x,n.pos.z-i.z);s<e&&n.provoke(Math.random()<.6?t:null,.25+Math.random()*1.4+s*.08)}Ph()}function Ph(i){U.brawl||(U.brawl=!0,U.spawnT=3,xn("BAR FIGHT!",1.4),Xt.bell())}var Do=Math.random;function Yr(i,t,e){let n=U.L,s=t||null;for(let c=0;c<10&&!s;c++){let h=U.spawnPts[Math.random()*U.spawnPts.length|0];if(Math.hypot(h[0]-E.pos.x,h[1]-E.pos.z)>(i?5:6)){s=h;break}}s||(s=U.spawnPts[0]);let r=zr(n.enemies.outfits,Do),o=jc(n.enemies.weapons,Do),a=!e,l=new ws(U,r,o==="fists"?null:o,s[0],s[1],{hp:n.waves?1+U.stats.wave*.06:1,hostile:a,activity:e});return l.yaw=a?Math.atan2(E.pos.x-l.pos.x,E.pos.z-l.pos.z):Math.random()*6.28,U.fighters.push(l),U.stats.spawned++,n.waves||U.remaining--,l}function Mh(){let i=U.L,t=i.boss,e=U.spawnPts.reduce((s,r)=>Math.hypot(r[0]-E.pos.x,r[1]-E.pos.z)>Math.hypot(s[0]-E.pos.x,s[1]-E.pos.z)?r:s),n=new ws(U,zr(t.outfit,Do),t.weapon,e[0],e[1],{scale:t.scale,hp:t.hp,boss:!0,name:t.name,aggro:1,hostile:!0});U.fighters.push(n),U.boss=n,U.bossSpawned=!0,xn(t.name+"!",1.8),Xt.bell()}function Lh(){U.stats.wave++,U.waveLeft=3+U.stats.wave*2,U.L.enemies.maxActive=Math.min(11,4+U.stats.wave),U.bossWave=U.stats.wave%5===0,U.bossSpawned=!1,xn("WAVE "+U.stats.wave,1.4),Xt.bell()}var ug=new P,Ih=new P,$i=new P;function Qi(i,t,e,n,s,r={}){let o=s===E,a=(o&&E.raging?2.5:1)*(r.mult||1),l=th(e,i.partHp[t]??i.hp,Math.random,a);o&&E.raging&&t!=="torso"&&(l.sever=!0);let c=(r.knock??e.knock??3)*(o&&E.raging?2:1);U.rage=o&&E.raging>0;let h=i.alive;o&&(U.ctx=Object.assign(U.ctx||{},{thrown:!!r.thrown,charged:!!e.charged,part:t,gun:e.kind==="gun"})),i.takeHit(t,l,n,c,s,e),o&&(U.ctx=null,i.pos.distanceTo(E.pos)<1.9&&(l.sever||!i.alive)&&bg(l.crush?7:3)),U.rage=!1,e.sharp||e.kind==="gun"?Xt.slash():Xt.thud(e.heavy?1.2:.8),(l.sever||l.crush)&&Xt.squish(),o&&(U.hitstop=e.heavy||l.sever?.07:.035,U.shake=Math.max(U.shake,e.heavy?.25:.12),yt("crosshair").classList.add("hot"),setTimeout(()=>yt("crosshair").classList.remove("hot"),90),l.sever&&t!=="head"&&h&&on("\u2702 "+{armL:"LEFT ARM",armR:"RIGHT ARM",legL:"LEFT LEG",legR:"RIGHT LEG"}[t]+" OFF"),E.rage=Math.min(1,E.rage+(l.sever?.06:.015)))}function ko(i,t,e,n){if(!E.alive||U.done)return;let s=Math.sin(E.yaw+Math.PI),r=Math.cos(E.yaw+Math.PI),o=-(t.x*s+t.z*r)>.2;if(E.block&&o&&E.blockT<.25&&n&&!n.isPlayer&&n.alive){Xt.clang(),Xt.clang(),U.shake=.15,U.hitstop=.12,n.state="stagger",n.t=1.2,n.cool=1.5,n.weapon&&Math.random()<.4&&n.dropWeapon(!0),U.stats.parries++,Nh(75,"PARRY");return}E.block&&o?(i*=.18,e*=.35,Xt.clang(),U.shake=.1):(Xt.thud(.7),Xt.hurt(),U.shake=.22,Sg(.5+i/60)),E.raging&&(i*=.5),E.hp-=i,E.vel.x+=t.x*e*.7,E.vel.z+=t.z*e*.7,E.hp<=0&&(E.hp=0,yg(n))}function bh(i,t,e,n){let s=e.corpse?.75*e.scale:e.radius+.06,r=e.pos.y,o=e.pos.y+(e.corpse?.45:e.height)*(e.crawling?.5:1),a=t.x,l=t.z,c=a*a+l*l;if(c<1e-6)return null;let h=((e.pos.x-i.x)*a+(e.pos.z-i.z)*l)/c;if(h<0||h>n)return null;let d=i.x+a*h-e.pos.x,u=i.z+l*h-e.pos.z;if(d*d+u*u>s*s)return null;let p=Math.sqrt(Math.max(0,s*s-d*d-u*u)/c),x=Math.max(0,h-p),g=i.y+t.y*x;return g<r-.05||g>o+.05?null:x}function dg(i,t,e){let n=0,s=1e9;for(let[r,o,a,l]of[[i.x,t.x,e.x-e.w/2,e.x+e.w/2],[i.y,t.y,e.y,e.y+e.h],[i.z,t.z,e.z-e.d/2,e.z+e.d/2]]){if(Math.abs(o)<1e-8){if(r<a||r>l)return null;continue}let c=(a-r)/o,h=(l-r)/o;if(c>h){let d=c;c=h,h=d}if(n=Math.max(n,c),s=Math.min(s,h),n>s)return null}return n}function fg(i,t,e){let n=U.L,s=e;for(let r of n.solids){let o=dg(i,t,r);o!=null&&o<s&&(s=o)}for(let[r,o]of[["x",n.w/2],["z",n.d/2]])if(Math.abs(t[r])>1e-6){let a=(Math.sign(t[r])*o-i[r])/t[r];a>0&&a<s&&(s=a)}if(t.y<0){let r=-i.y/t.y;r<s&&(s=r)}if(n.ceil!=null&&t.y>0){let r=(n.h-i.y)/t.y;r<s&&(s=r)}return s}function Dh(i,t,e,n,s=0){Xt.shot(e.pellets>1||e.dmg>60);for(let r=0;r<(e.pellets||1);r++){let o=(e.spread||0)+s,a=ug.copy(t).add($i.set((Math.random()-.5)*o*2,(Math.random()-.5)*o*2,(Math.random()-.5)*o*2)).normalize(),c=fg(i,a,e.range||50),h=null;for(let u of U.targets()){if(u===n||u.gone||!u.alive&&!u.corpse)continue;if(u.isPlayer){if(!E.alive)continue;let x=bh(i,a,{pos:E.pos,radius:No,height:1.8,scale:1},c);x!=null&&x<c&&(c=x,h=u);continue}let p=bh(i,a,u,c);p!=null&&p<c&&(c=p,h=u)}let d=Ih.copy(i).addScaledVector(a,c);if(r<3&&U.fx.tracer(new P(i.x,i.y-(n===E?.15:0),i.z),d),h===E)ko(e.dmg*.55,new P(a.x,0,a.z).normalize(),e.knock*.5,n);else if(h){let u=d.y-h.pos.y,p=h.lateralOf(d),x=h.corpse?["armL","armR","legL","legR","head","torso"].find(g=>!h.missing[g])||"torso":Gr(u,p,h.scale,h.missing);Qi(h,x,e,new P(a.x,0,a.z).normalize(),n,{knock:e.knock})}else for(let u=0;u<4;u++)U.fx.gib(d.x-a.x*.05,d.y-a.y*.05,d.z-a.z*.05,-a.x*2+(Math.random()-.5)*2,1+Math.random()*2,-a.z*2+(Math.random()-.5)*2,7829350,!1,.5)}}function Uh(i,t,e,n){Xt.boom(),U.shake=.7,zo(i,n,12);let s=U.fx;for(let a=0;a<70;a++){let l=Math.random()*6.28,c=3+Math.random()*7;s.gib(i.x,i.y+.3,i.z,Math.cos(l)*c,2+Math.random()*6,Math.sin(l)*c,[16747034,16764992,3355443,2236962][a&3],!1,1.2)}for(let a=0;a<5;a++)s.splat(i.x+(Math.random()-.5)*2,$e(U.L,i.x,i.z,i.y+.5),i.z+(Math.random()-.5)*2,0,1,0,1+Math.random());let r=new Xi(16752704,60,16,1.5);r.position.copy(i).setY(i.y+1),U.scene.add(r),setTimeout(()=>U.scene.remove(r),140);for(let a of U.fighters){if(a.gone||!a.alive&&!a.corpse)continue;let l=a.pos.x-i.x,c=a.pos.z-i.z,h=Math.hypot(l,c);if(h>t)continue;let d=1-h/t,u=new P(l/(h||1),0,c/(h||1)),p=e*d;p>a.hp*.6||!a.alive?(a.alive&&(a.hp=0),a.lastHitBy=n,a.alive?a.die(u,!0,n):pg(a,u)):Qi(a,"torso",{dmg:p,knock:12*d+4,sever:.5,kind:"throw",tdmg:p,heavy:!0},u,n,{knock:12*d+4})}let o=Math.hypot(E.pos.x-i.x,E.pos.z-i.z);o<t&&ko(e*.6*(1-o/t),new P(E.pos.x-i.x,0,E.pos.z-i.z).normalize(),10*(1-o/t),n);for(let a of U.items){let l=a.pos.x-i.x,c=a.pos.z-i.z,h=Math.hypot(l,c);h<t&&a.alive&&(a.vel.set(l/(h||1)*8,5,c/(h||1)*8),a.spin.set(10,0,10))}s.nudge(i.x,i.z,t,0,0)}function pg(i,t){i.obliterate(t)}var Sh=["","","DOUBLE KILL","TRIPLE KILL","MASSACRE","BLOODBATH","PAINTED RED"];function Nh(i,t){U.stats.score+=Math.round(i),t&&on("+"+Math.round(i)+" "+t)}function mg(i,t,e){let n=U.ctx||{};if(t===E){U.stats.kills++;let s=U.combo;s.n=s.t<3.5?s.n+1:1,s.t=0,U.stats.bestCombo=Math.max(U.stats.bestCombo,s.n);let r=100,o=[];i.missing.head&&(r+=150,o.push("HEADS OFF")),e&&(r+=200,o.push("OBLITERATED")),n.thrown&&(r+=150,o.push("THROWN")),n.slam&&(r+=150,o.push("WALL SPLAT")),n.charged&&(r+=75,o.push("POWER")),E.raging&&(r+=50),i.boss&&(r+=1e3,o.push("BOSS")),r*=s.n,Nh(r,o.join(" \xB7 ")||"KILL"),s.n>=2&&xn(Sh[Math.min(s.n,Sh.length-1)]+(s.n>6?" \xD7"+s.n:""),1.2),E.rage=Math.min(1,E.rage+(i.boss?.5:.18)),e&&U.stats.exploded++}else t&&on("\u{1F37A} brawler down");i.boss&&(xn(i.name+" IS DOWN",1.6),Xt.bell())}var Ln=new P;function Bo(i){return i.set(-Math.sin(E.yaw)*Math.cos(E.pitch),Math.sin(E.pitch),-Math.cos(E.yaw)*Math.cos(E.pitch))}function Oh(i){let t=null,e=1e9,n=-Math.sin(E.yaw),s=-Math.cos(E.yaw);for(let r of U.fighters){if(r.gone||!r.alive&&!r.corpse)continue;let o=r.pos.x-E.pos.x,a=r.pos.z-E.pos.z,l=Math.hypot(o,a);if(l>i+r.radius+(r.corpse?.6:0))continue;let c=Math.acos(Math.max(-1,Math.min(1,(o*n+a*s)/(l||1))));if(c>(l<1?1.1:.62))continue;let h=c*2+l*.3+(r.corpse?1.5:0);h<e&&(e=h,t={f:r,d:l})}return t}function gg(i){let t=i||we(E.weapon),e=Oh(t.reach);if(!e){Xt.whoosh();return}let n=e.f,s=e.d,r=E.pos.y+Rh,o=Math.max(.1,r+Math.tan(E.pitch)*s-n.pos.y),a=$i.set(E.pos.x-Math.sin(E.yaw)*s,0,E.pos.z-Math.cos(E.yaw)*s),l=n.corpse?["head","armL","armR","legL","legR","torso"].sort(()=>Math.random()-.5).find(h=>!n.missing[h])||"torso":Gr(o,n.lateralOf(a),n.scale,n.missing),c=new P(n.pos.x-E.pos.x,0,n.pos.z-E.pos.z).normalize();if(Qi(n,l,t,c,E,{}),E.weapon){let h=kr(E.weapon,E.wstate);if(h!==E.weapon){if(t.shatter){let d=De.localToWorld(new P(.3,-.2,-.6));U.fx.glass(d.x,d.y,d.z),Xt.glass()}else Xt.crunch();on("\u{1F494} "+t.name+" broke"),ji(h),E.wstate={used:0,ammo:we(h).ammo}}}}function Uo(i=0){if(E.cool>0||E.block||!E.alive)return;let t=we(E.weapon);if(t.kind==="gun"){if((E.wstate.ammo??0)<=0){Xt.click(),E.cool=.3,wg("Out of ammo \u2014 throw it (Q)");return}E.cool=t.rate,E.wstate.ammo--;let r=De.getWorldPosition(new P);Bo(Ln),Dh(r,Ln,t,E,E.vel.lengthSq()>2?.03:0),zo(E.pos,E,14),mt.recoil=1,U.shake=Math.max(U.shake,.15);return}if(t.kind==="throw"){zh();return}let e=Math.min(1,i/.6),n=i>=.3;E.cool=t.rate*(E.raging?.7:1)*(n?1.3:1),mt.swing=1,mt.swingDur=Math.max(.22,t.rate*.8)*(n?.8:1),mt.side=E.weapon?1:E.punchSide^=1,mt.heavy=n;let s=n?Object.assign({},t,{dmg:t.dmg*(1.5+e*.9),knock:(t.knock||3)*(1.4+e*.8)+2,sever:Math.min(1,(t.sever||0)+.3*e),charged:!0}):t;n&&(Xt.whoosh(),U.shake=Math.max(U.shake,.08)),E.pending={t:Math.min(.14,t.rate*.35)*(n?.6:1),fn:()=>gg(s)}}function Fh(){E.kickCool>0||!E.alive||(E.kickCool=.75,mt.kick=1,E.pending={t:.12,fn:()=>{let i=Oh(1.7);U.fx.nudge(E.pos.x-Math.sin(E.yaw)*1.2,E.pos.z-Math.cos(E.yaw)*1.2,1.2,-Math.sin(E.yaw)*6,-Math.cos(E.yaw)*6);for(let e of U.items){let n=e.pos.x-E.pos.x,s=e.pos.z-E.pos.z;e.alive&&n*n+s*s<2.2&&e.pos.y<1&&(e.vel.set(-Math.sin(E.yaw)*7,3,-Math.cos(E.yaw)*7),e.spin.set(10,0,8))}if(!i){Xt.whoosh();return}let t=new P(i.f.pos.x-E.pos.x,0,i.f.pos.z-E.pos.z).normalize();Qi(i.f,"torso",{dmg:11,knock:11.5,sever:0,kind:"melee",heavy:!1},t,E,{knock:11.5})}})}function zh(){if(!E.weapon||!E.alive)return;let i=we(E.weapon),t=De.getWorldPosition(new P);Bo(Ln);let e=new Zn(U,E.weapon,t.x+Ln.x*.6,t.y-.1+Ln.y*.6,t.z+Ln.z*.6,E.wstate),n=i.kind==="throw"?17:i.heavy?12:16;if(e.vel.copy(Ln).multiplyScalar(n).add(E.vel.clone().setY(0)),e.vel.y+=2.2,e.spin.set(i.kind==="throw"&&E.weapon==="tknives"?20:10,0,6),e.thrown=!0,e.owner=E,E.weapon==="dynamite"&&(e.fuse=i.fuse),U.items.push(e),Xt.whoosh(),mt.swing=1,mt.swingDur=.3,mt.side=1,E.cool=i.kind==="throw"?i.rate:.35,i.kind==="throw"&&(E.wstate.count||1)>1){let s={count:E.wstate.count-1};e.state={count:1},E.wstate=s}else ji(null)}function kh(){let i=De.getWorldPosition(Ih);Bo(Ln);let t=null,e=.42;for(let n of U.items){if(!n.alive||n.held||n.thrown||n.fuse!=null)continue;$i.copy(n.pos).y+=.12,$i.sub(i);let s=$i.length();if(s>2.7)continue;let r=Math.acos(Math.max(-1,Math.min(1,$i.dot(Ln)/s)));r<e&&(e=r,t=n)}return t}function xg(){let i=kh();i&&(E.weapon&&_g(),ji(i.id),E.wstate=i.state,i.held=!0,i.remove(),Xt.click(),on("\u270B "+we(i.id).name))}function _g(){let i=new Zn(U,E.weapon,E.pos.x-Math.sin(E.yaw)*.5,1,E.pos.z-Math.cos(E.yaw)*.5,E.wstate);U.items.push(i),ji(null)}function vg(){let i=we(E.weapon);!(E.weapon==="bottle"||E.weapon==="mug")||E.wstate.drunk||!E.alive||(E.wstate.drunk=!0,E.hp=Math.min(100,E.hp+25),mt.drink=1,Xt.gulp(),on("\u{1F37A} +25 health"),U.wobble=2.5)}function yg(i){E.alive=!1,xn("YOU GOT PAINTED",2.5),setTimeout(()=>Vh(!1),2200)}var mt={root:new Be,hR:null,hL:null,leg:null,held:null,swing:0,swingDur:.3,side:1,kick:0,recoil:0,bob:0};De.add(mt.root);mt.hR=Co(15251594,3815994);mt.hL=Co(15251594,3815994);mt.hR.scale.setScalar(.55);mt.hL.scale.setScalar(.55);mt.root.add(mt.hR,mt.hL);{let i=new Be,t=new Qt(new ve(.22,.7,.22),new Ae({color:2767450}));t.position.y=.35;let e=new Qt(new ve(.26,.18,.36),new Ae({color:1710618}));e.position.set(0,.75,-.05),i.add(t,e),i.visible=!1,mt.leg=i,mt.root.add(i)}function ji(i){if(E.weapon=i||null,mt.held&&(mt.hR.remove(mt.held),mt.held=null),E.weapon){let t=we(E.weapon),e=Ss(E.weapon,t);e.userData.gun?(e.position.set(0,.02,-.04),e.rotation.set(0,0,0)):e.userData.upright?(e.position.set(0,-.05,-.15),e.rotation.set(-1.9,0,.3),e.scale.setScalar(.9)):(e.position.set(0,0,-.02),e.rotation.set(-.7,0,0)),e.traverse(n=>{n.isMesh&&(n.castShadow=!1)}),mt.hR.add(e),mt.held=e,t.kind==="gun"&&E.wstate.ammo==null&&(E.wstate.ammo=t.ammo)}}function Mg(i,t){mt.bob+=i*(t?9:2);let e=Math.sin(mt.bob)*(t?.02:.005),n=Math.abs(Math.cos(mt.bob))*(t?.02:.004),s=we(E.weapon),r=s.kind==="gun",o=.26+e,a=-.27+n,l=-.5,c=0,h=0,d=-.28+e,u=-.3+n,p=-.52,x=0;if(r&&(o=.2+e,a=-.25+n,l=-.5,d=-.4,u=-.6),E.block&&(o=.14,a=-.12,l=-.38,d=-.14,u=-.12,p=-.38,h=.5,x=.3),mt.swing>0){mt.swing=Math.max(0,mt.swing-i/mt.swingDur);let g=1-mt.swing;if(E.weapon&&!r){let m=g<.3?g/.3:1-(g-.3)/.7,f=g<.3?0:(g-.3)/.7;o=.38-f*.55,a=-.1+m*.18-f*.25,l=-.5-f*.2,c=.9*m-f*1.6,h=-.6+f*1.3}else if(!r){let m=Math.sin(Math.min(1,g*1.6)*Math.PI);mt.side?(l-=m*.45,o-=m*.15,a+=m*.12):(p-=m*.45,d+=m*.15,u+=m*.12)}}if(E.charge!=null){let g=Math.min(1,E.charge/.6),m=g>=1?(Math.random()-.5)*.01:0;E.weapon?(o=.32+m,a=-.16+g*.06+m,l=-.5+g*.04,c=.7+g*.5,h=-.6):(l=-.42+g*.14,a=-.24,o=.3+m,p=-.5)}if(mt.drink>0){mt.drink=Math.max(0,mt.drink-i*1.2);let g=Math.sin((1-mt.drink)*Math.PI);o=.26-g*.24,a=-.27+g*.22,l=-.5+g*.25,c=g*1.9}if(mt.recoil>0&&(mt.recoil=Math.max(0,mt.recoil-i*6),l+=mt.recoil*.08,c+=mt.recoil*.35),mt.hR.position.set(o,a,l),mt.hR.rotation.set(c,0,h),mt.hL.position.set(d,u,p),mt.hL.rotation.set(x,0,0),mt.hL.visible=!E.weapon||E.block||!s.heavy,mt.kick>0){mt.kick=Math.max(0,mt.kick-i*3.2);let g=Math.sin((1-mt.kick)*Math.PI);mt.leg.visible=!0,mt.leg.position.set(.05,-1.25+g*.55,-.35-g*.55),mt.leg.rotation.set(-1.1*g-.3,0,0)}else mt.leg.visible=!1}var qr=0;function xn(i,t=1.1){if(!i)return;let e=yt("announce");e.textContent=i,e.classList.add("on"),qr=t}function on(i){let t=yt("feed"),e=document.createElement("div");for(e.textContent=i,t.prepend(e);t.children.length>5;)t.lastChild.remove();setTimeout(()=>e.remove(),2600)}function bg(i){if(fe.gore<1)return;let t=yt("screen-blood");for(let e=0;e<i;e++){let n=document.createElement("i"),s=40+Math.random()*140;n.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${s}px;height:${s*(.6+Math.random()*.8)}px;transform:translate(-50%,-50%) rotate(${Math.random()*360}deg)`,t.appendChild(n),setTimeout(()=>n.classList.add("fade"),60),setTimeout(()=>n.remove(),3200)}for(;t.children.length>30;)t.firstChild.remove()}var Es=0;function Sg(i){Es=Math.min(1,Es+i)}var wh=new Set;function wg(i){wh.has(i)||(wh.add(i),on(i))}function Eg(){yt("score").textContent=U.stats.score.toLocaleString();let i=yt("combo");U.combo.n>=2&&U.combo.t<3.5?(i.textContent="\xD7"+U.combo.n+" COMBO",i.classList.remove("hidden"),i.style.opacity=(1-U.combo.t/3.5).toFixed(2)):i.classList.add("hidden");let t=yt("crosshair");if(E.charge!=null){let l=Math.min(1,E.charge/.6);t.style.boxShadow=`0 0 0 ${2+l*9}px rgba(255,${(1-l)*200|0},40,${.35+l*.5})`}else t.style.boxShadow="";yt("b-drink").classList.toggle("hidden",!((E.weapon==="bottle"||E.weapon==="mug")&&!E.wstate.drunk)),yt("hp-fill").style.width=E.hp+"%",yt("rage-fill").style.width=(E.raging>0?E.raging/7:E.rage)*100+"%",document.querySelector(".bar.rage").classList.toggle("full",E.rage>=1&&!E.raging),yt("b-rage").classList.toggle("hidden",!(E.rage>=1&&!E.raging)),document.body.classList.toggle("raging",E.raging>0);let e=we(E.weapon);yt("weapon-name").textContent=e.name.toUpperCase();let n="";e.kind==="gun"?n=(E.wstate.ammo??0)+" / "+e.ammo+" rounds":e.kind==="throw"?n="\xD7"+(E.wstate.count||1)+" \xB7 tap attack to throw":isFinite(e.dur)&&(n=Math.max(0,e.dur-(E.wstate.used||0))+" hits left"),yt("weapon-info").textContent=n;let s=U.L,r=U.fighters.filter(l=>l.alive).length;yt("count").textContent=s.waves?`WAVE ${U.stats.wave} \xB7 \u2620 ${U.stats.kills}`:`\u2620 ${U.stats.kills}   \u{1F44A} ${r+U.remaining+(U.bossSpawned?0:1)} LEFT`;let o=E.alive?kh():null,a=yt("hint");o?(a.textContent=(Qe?"\u270B ":"[E] ")+we(o.id).name,a.classList.remove("hidden")):a.classList.add("hidden")}var Eh=performance.now();function Bh(i){requestAnimationFrame(Bh);let t=Math.min(.05,(i-Eh)/1e3||.016);if(Eh=i,!an||!U)return;if(In){Xe.render(Jn,De);return}U.hitstop>0&&(U.hitstop-=t,t*=.15),U.stats.t+=t,U.combo.t+=t,U.wobble>0&&(U.wobble=Math.max(0,U.wobble-t)),Tg(t);let e=U.L;U.spawnT-=t;let n=U.fighters.filter(l=>l.alive).length;if(!U.done&&U.spawnT<=0){if(U.spawnT=.7+Math.random()*.8,e.waves)U.waveLeft>0&&n<e.enemies.maxActive?(Yr(),U.waveLeft--):U.waveLeft<=0&&U.bossWave&&!U.bossSpawned?Mh():U.waveLeft<=0&&n===0&&(Lh(),U.spawnT=2.5,E.hp=Math.min(100,E.hp+25));else if(U.brawl){if(U.spreadT-=1,U.spreadT<=0){U.spreadT=1;for(let c of U.fighters)c.calm&&c.alive&&Math.random()<.12&&c.provoke(null,.2+Math.random())}let l=U.fighters.filter(c=>c.alive&&!c.calm).length;U.remaining>0&&l<e.enemies.maxActive?Yr():U.remaining<=0&&n===0&&!U.bossSpawned?Mh():U.bossSpawned&&!U.boss.alive&&n===0&&(U.done=!0,xn("TOWN PAINTED RED",2.5),Xt.bell(),setTimeout(()=>Vh(!0),2600))}}U.musicOn&&U.musician&&(!U.musician.alive||!U.musician.calm)&&(U.musicOn=!1,Xt.music(!1),on("\u{1F3B5} \u2026the music stopped"));for(let l of U.fighters)l.update(t);Ag();for(let l of U.items)l.alive&&l.update(t);(U.items.length>120||(U.stats.t|0)%5===0)&&(U.items=U.items.filter(l=>l.alive));let s=U.fighters.filter(l=>l.corpse);if(s.length>16){let l=s[0];U.scene.remove(l.group),l.gone=!0,l.corpse=!1}U.fighters=U.fighters.filter(l=>!l.gone||l.alive),U.fx.update(t),Oo.update(t),U.shake=Math.max(0,U.shake-t*1.8);let r=U.shake*U.shake*.25;De.position.set(E.pos.x+(Math.random()-.5)*r,E.pos.y+(E.alive?Rh:.35),E.pos.z+(Math.random()-.5)*r);let o=U.wobble?Math.sin(U.stats.t*2.2)*.04*U.wobble:0,a=(Ke.KeyD?-1:0)+(Ke.KeyA?1:0)-fi.x;mt.tilt=(mt.tilt||0)+(a*.02-(mt.tilt||0))*Math.min(1,t*8),De.rotation.set(E.pitch+(Math.random()-.5)*r,E.yaw+o*.5,(E.alive?0:.9)+mt.tilt+o,"YXZ"),Mg(t,Math.hypot(E.vel.x,E.vel.z)>.5),mt.root.visible=E.alive,Es=Math.max(0,Es-t*1.5),yt("flash").style.opacity=Es.toFixed(2),qr>0&&(qr-=t,qr<=0&&yt("announce").classList.remove("on")),(U.stats.t*20|0)%2===0&&Eg(),Xe.render(Jn,De)}function Tg(i){let t=U.L;if(E.cool-=i,E.kickCool-=i,E.pending&&(E.pending.t-=i,E.pending.t<=0)){let _=E.pending.fn;E.pending=null,_()}if(E.raging>0&&(E.raging-=i,E.raging<=0&&(E.raging=0,on("\u{1F525} rage over"))),!E.alive){E.vel.multiplyScalar(.9);return}let e=(Qe?.0055:.0024)*fe.sens;E.yaw-=wt.mx*e,E.pitch-=wt.my*e,wt.mx=wt.my=0,E.pitch=Math.max(-1.35,Math.min(1.35,E.pitch));let n=E.block;if(E.block=wt.block,E.block&&!n&&(E.blockT=0),we(E.weapon).kind==="melee"){if(wt.attack&&E.charge==null&&(E.charge=0),E.charge!=null)if(wt.attackHeld)E.charge+=i;else{let _=E.charge;E.charge=null,Uo(_)}}else E.charge=null,(wt.attack||wt.attackHeld&&(E.weapon==="tommy"||E.weapon==="revolver"))&&Uo();wt.attack=!1,U.playerThreat=E.charge!=null&&E.charge>.12,E.blockT=(E.blockT??9)+i,wt.kick&&(wt.kick=!1,Fh()),wt.drink&&(wt.drink=!1,vg()),wt.grab&&(wt.grab=!1,xg()),wt.throw&&(wt.throw=!1,zh()),wt.rage&&(wt.rage=!1,E.rage>=1&&!E.raging&&(E.raging=7,E.rage=0,xn("RAGE",1.2),Xt.rage()));let r=0,o=0;(Ke.KeyW||Ke.ArrowUp)&&(o-=1),(Ke.KeyS||Ke.ArrowDown)&&(o+=1),(Ke.KeyA||Ke.ArrowLeft)&&(r-=1),(Ke.KeyD||Ke.ArrowRight)&&(r+=1),r+=fi.x,o+=fi.y;let a=Math.hypot(r,o);a>1&&(r/=a,o/=a);let l=(wt.sprint||Ke.ShiftLeft?6.2:4.4)*(E.block?.5:1)*(E.raging?1.3:1),c=Math.sin(E.yaw),h=Math.cos(E.yaw),d=(r*h+o*c)*l,u=(-r*c+o*h)*l,p=$e(t,E.pos.x,E.pos.z,E.pos.y+.45);E.onGround=E.pos.y<=p+.02;let x=1-Math.exp(-(E.onGround?12:2)*i);E.vel.x+=(d-E.vel.x)*x,E.vel.z+=(u-E.vel.z)*x,wt.jump&&(wt.jump=!1,E.onGround&&(E.vel.y=6.2)),E.vel.y-=18*i,E.pos.addScaledVector(E.vel,i);let g=No,m=t.w/2-g,f=t.d/2-g;E.pos.x=Math.max(-m,Math.min(m,E.pos.x)),E.pos.z=Math.max(-f,Math.min(f,E.pos.z));for(let _ of t.solids){if(_.y>E.pos.y+1.7||_.y+_.h<=E.pos.y+.45)continue;let A=Math.max(_.x-_.w/2,Math.min(E.pos.x,_.x+_.w/2)),C=Math.max(_.z-_.d/2,Math.min(E.pos.z,_.z+_.d/2)),T=E.pos.x-A,R=E.pos.z-C,N=T*T+R*R;if(N<g*g){let y=Math.sqrt(N)||.001;E.pos.x=A+T/y*g,E.pos.z=C+R/y*g}}let M=$e(t,E.pos.x,E.pos.z,E.pos.y+.45);E.pos.y<M&&(E.pos.y=M,E.vel.y=Math.max(0,E.vel.y)),Math.hypot(E.vel.x,E.vel.z)>1&&U.fx.nudge(E.pos.x,E.pos.z,.45,E.vel.x*.5,E.vel.z*.5)}function Ag(){let i=U.fighters.filter(t=>t.alive&&!t.gone);i.push(E);for(let t=0;t<i.length;t++)for(let e=t+1;e<i.length;e++){let n=i[t],s=i[e],r=s.pos.x-n.pos.x,o=s.pos.z-n.pos.z,a=n.radius+s.radius,l=r*r+o*o;if(l>=a*a||l<1e-6)continue;let c=Math.sqrt(l),h=(a-c)/2,d=r/c,u=o/c;n.pos.x-=d*h,n.pos.z-=u*h,s.pos.x+=d*h,s.pos.z+=u*h;for(let[p,x,g]of[[n,s,1],[s,n,-1]]){if(p.isPlayer||!p.flying||x.isPlayer)continue;let m=Math.hypot(p.vel.x,p.vel.z);m>5&&x.state!=="down"&&(x.provoke(p.lastHitBy),x.knockDown({x:d*g,z:u*g},m*.7),U.audio.thud(1),p.vel.multiplyScalar(.5))}}}var Ke={},fi={x:0,y:0};window.addEventListener("keydown",i=>{Ke[i.code]=!0,Xt.unlock(),an&&(i.code==="Space"&&(wt.jump=!0,i.preventDefault()),i.code==="KeyF"&&(wt.kick=!0),i.code==="KeyE"&&(wt.grab=!0),(i.code==="KeyQ"||i.code==="KeyG")&&(wt.throw=!0),i.code==="KeyR"&&(wt.rage=!0),(i.code==="KeyH"||i.code==="KeyC")&&(wt.drink=!0),(i.code==="Escape"||i.code==="KeyP")&&ts())});window.addEventListener("keyup",i=>{Ke[i.code]=!1});var Ki=Xe.domElement;Ki.addEventListener("mousedown",i=>{if(Xt.unlock(),!(!an||In||Qe)){if(document.pointerLockElement!==Ki){Ho();return}i.button===0&&(wt.attack=!0,wt.attackHeld=!0),i.button===2&&(wt.block=!0)}});window.addEventListener("mouseup",i=>{i.button===0&&(wt.attackHeld=!1),i.button===2&&(wt.block=!1)});window.addEventListener("mousemove",i=>{document.pointerLockElement===Ki&&(wt.mx+=i.movementX,wt.my+=i.movementY)});function Ho(){try{let i=Ki.requestPointerLock&&Ki.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}document.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{an&&!In&&!Qe&&document.pointerLockElement!==Ki&&E.alive&&!U.done&&ts(!0)});var Xr=(i,t)=>Zr.rotated?{x:t,y:window.innerWidth-i}:{x:i,y:t};function Rg(){let i=yt("look-zone"),t=yt("stick-zone"),e=yt("stick-knob"),n=yt("stick-base"),s=null,r=null,o=null,a=null;i.addEventListener("pointerdown",u=>{Xt.unlock(),s=u.pointerId,r=Xr(u.clientX,u.clientY),i.setPointerCapture(u.pointerId)}),i.addEventListener("pointermove",u=>{if(u.pointerId!==s)return;let p=Xr(u.clientX,u.clientY);wt.mx+=p.x-r.x,wt.my+=p.y-r.y,r=p});let l=u=>{u.pointerId===s&&(s=null)};i.addEventListener("pointerup",l),i.addEventListener("pointercancel",l),t.addEventListener("pointerdown",u=>{Xt.unlock(),o=u.pointerId,t.setPointerCapture(u.pointerId);let p=n.getBoundingClientRect();a=Xr(p.left+p.width/2,p.top+p.height/2),c(u)});let c=u=>{if(u.pointerId!==o)return;let p=Xr(u.clientX,u.clientY),x=p.x-a.x,g=p.y-a.y,m=Math.hypot(x,g),f=55;m>f&&(x*=f/m,g*=f/m),fi.x=x/f,fi.y=g/f,e.style.transform=`translate(${x}px,${g}px)`,wt.sprint=m>f*1.4};t.addEventListener("pointermove",c);let h=u=>{u.pointerId===o&&(o=null,fi.x=fi.y=0,e.style.transform="",wt.sprint=!1)};t.addEventListener("pointerup",h),t.addEventListener("pointercancel",h);let d=(u,p,x)=>{let g=yt(u);g.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),Xt.unlock(),g.classList.add("on"),p()});let m=f=>{g.classList.remove("on"),x&&x()};g.addEventListener("pointerup",m),g.addEventListener("pointercancel",m),g.addEventListener("pointerleave",m)};d("b-attack",()=>{wt.attack=!0,wt.attackHeld=!0},()=>{wt.attackHeld=!1}),d("b-block",()=>{wt.block=!0},()=>{wt.block=!1}),d("b-kick",()=>{wt.kick=!0}),d("b-grab",()=>{wt.grab=!0}),d("b-throw",()=>{wt.throw=!0}),d("b-jump",()=>{wt.jump=!0}),d("b-rage",()=>{wt.rage=!0}),d("b-drink",()=>{wt.drink=!0})}Rg();function Hh(){try{return JSON.parse(localStorage.getItem(Io))||{}}catch{return{}}}function Vo(){let i=yt("scen-list");i.innerHTML="";let t=Hh();for(let e of Nr){let n=e(),s=document.createElement("button");s.className="scen";let r=t[n.id];s.innerHTML=`<b>${n.name.toUpperCase()}</b><small>${n.blurb}</small><i>${r?(n.waves?"BEST: WAVE "+(r.wave||0):r.time?"\u2714 CLEARED \xB7 "+r.time+"s":"NOT CLEARED YET")+(r.score?" \xB7 \u{1F3C6} "+r.score.toLocaleString():""):n.waves?"SURVIVE THE WAVES":n.enemies.count+" BRAWLERS + "+n.boss.name}</i>`,s.onclick=()=>Ts(n.id),i.appendChild(s)}}function Ts(i){Xt.unlock(),Zr.goLandscape(),Fo=i,Ch(i),["menu","pause","result"].forEach(t=>yt(t).classList.add("hidden")),yt("hud").classList.remove("hidden"),yt("touch").classList.toggle("hidden",!Qe),an=!0,In=!1,xn(U.L.name.toUpperCase(),1.6),on(Qe?"\u270B grab anything \xB7 \u{1F3AF} throw it \xB7 \u{1F9B5} kick":"E grab \xB7 Q throw \xB7 F kick \xB7 RMB block"),U.L.waves||setTimeout(()=>{U&&!U.brawl&&on("\u{1F37A} Everyone's calm\u2026 throw the first punch")},1500),Xt.crowd(!0),Xt.music(U.musicOn,U.L.id==="disco"?"disco":U.L.id==="saloon"?"piano":"rock"),Qe||Ho()}function ts(i){an&&(In=i===!0?!0:!In,yt("pause").classList.toggle("hidden",!In),!In&&!Qe&&Ho())}function Vh(i){if(!an)return;an=!1,Xt.crowd(!1),Xt.music(!1),document.exitPointerLock&&document.exitPointerLock();let t=U.stats,e=U.L,n=Math.round(t.score*.5)+t.kills*60+t.limbs*30+t.heads*60+t.exploded*80+(i?2500:0)+(e.waves?t.wave*400:0);try{let l=localStorage.getItem(yh);if(l){let c=JSON.parse(l);c.cash=Math.max(0,Math.floor((+c.cash||0)+n)),localStorage.setItem(yh,JSON.stringify(c))}}catch{}let s=Hh(),r=Math.round(t.t);e.waves?(!s[e.id]||!(s[e.id].wave>=t.wave))&&(s[e.id]=Object.assign(s[e.id]||{},{wave:t.wave})):i&&(!s[e.id]||!(s[e.id].time<=r))&&(s[e.id]=Object.assign(s[e.id]||{},{time:r}));try{localStorage.setItem(Io,JSON.stringify(s))}catch{}yt("r-title").textContent=e.waves?"SURVIVED "+(t.wave-1)+" WAVES":i?"TOWN PAINTED RED":"YOU GOT PAINTED";let o=s[e.id]&&s[e.id].score||0;if(t.score>o){s[e.id]=Object.assign(s[e.id]||{},{score:t.score});try{localStorage.setItem(Io,JSON.stringify(s))}catch{}}let a=[["SCORE",t.score.toLocaleString()+(t.score>o?" \u{1F3C6} NEW BEST":"")],["Best combo","\xD7"+t.bestCombo],["Parries",t.parries],["Kills",t.kills],["Limbs removed",t.limbs],["Heads taken",t.heads],["Obliterated",t.exploded],["Blood splats",U.fx.splats],["Time",r+"s"],["City Driver cash","+$"+n.toLocaleString()]];yt("r-stats").innerHTML=a.map(([l,c])=>`<span>${l}</span><span>${c}</span>`).join(""),yt("result").classList.remove("hidden"),yt("hud").classList.add("hidden"),yt("touch").classList.add("hidden")}yt("p-resume").onclick=()=>ts();yt("p-restart").onclick=()=>{ts(),Ts(Fo)};yt("p-menu").onclick=()=>{an=!1,Xt.crowd(!1),Xt.music(!1),yt("pause").classList.add("hidden"),yt("hud").classList.add("hidden"),yt("touch").classList.add("hidden"),Vo(),yt("menu").classList.remove("hidden")};yt("pause-btn").addEventListener("pointerdown",i=>{i.stopPropagation(),ts()});yt("r-again").onclick=()=>Ts(Fo);yt("r-menu").onclick=()=>{yt("result").classList.add("hidden"),Vo(),yt("menu").classList.remove("hidden")};document.addEventListener("visibilitychange",()=>{document.hidden&&an&&!In&&ts(!0)});requestAnimationFrame(Bh);function Gh(){let i=yt("settings");i.classList.remove("hidden");let t=()=>{yt("s-sens-v").textContent=fe.sens.toFixed(1)+"\xD7",yt("s-fov-v").textContent=fe.fov+"\xB0",document.querySelectorAll("#s-gore button").forEach(e=>e.classList.toggle("on",+e.dataset.v===fe.gore)),document.querySelectorAll("#s-qual button").forEach(e=>e.classList.toggle("on",+e.dataset.v===fe.quality))};yt("s-sens").value=fe.sens,yt("s-fov").value=fe.fov,t(),yt("s-sens").oninput=e=>{fe.sens=+e.target.value,t(),Wr()},yt("s-fov").oninput=e=>{fe.fov=+e.target.value,De.fov=fe.fov,De.updateProjectionMatrix(),t(),Wr()},document.querySelectorAll("#s-gore button").forEach(e=>e.onclick=()=>{fe.gore=+e.dataset.v,U&&(U.gore=fe.gore,U.fx.gore=fe.gore),t(),Wr()}),document.querySelectorAll("#s-qual button").forEach(e=>e.onclick=()=>{fe.quality=+e.dataset.v,Xe.setPixelRatio(Math.min(window.devicePixelRatio||1,fe.quality?Qe?1.5:1.75:1)),Zr.refresh(),t(),Wr()}),yt("s-close").onclick=()=>i.classList.add("hidden")}yt("m-settings").onclick=Gh;yt("p-settings").onclick=Gh;Vo();var Th=new URLSearchParams(location.search).get("map");Th?Ts(Th):(Ch("biker"),an=!1,function i(){if(!an){requestAnimationFrame(i),De.position.set(Math.sin(performance.now()/6e3)*6,2.2,Math.cos(performance.now()/6e3)*6),De.lookAt(0,1.2,0);for(let t of U.fighters)t.animate(.016,0),t.sync();U.fx.update(.016),Oo.update(.016),Xe.render(Jn,De)}}());new URLSearchParams(location.search).has("debug")&&(window.__brawl={W:()=>U,player:E,start:Ts,hit:Qi,spawnEnemy:Yr,explode:Uh,input:wt,attack:Uo,kick:Fh,wdef:we,give:i=>{ji(i);let t=we(i);E.wstate={used:0,ammo:t.ammo,count:t.count}}});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
