import t from"elliptic";import e from"hash.js";import{expect as r}from"chai";import o from"dotenv";import i from"is-primitive";import n from"is-plain-object";import s from"fs";import a from"os";import{dirname as c}from"path";import{fileURLToPath as f}from"url";const{deleteProperty:d}=Reflect;const u=i;const l=n;const h=t=>"object"==typeof t&&null!==t||"function"==typeof t;const y=t=>{if(!u(t))throw new TypeError("Object keys must be strings or symbols");if((t=>"__proto__"===t||"constructor"===t||"prototype"===t)(t))throw new Error(`Cannot set unsafe key: "${t}"`)};const b=(t,e)=>e&&"function"==typeof e.split?e.split(t):"symbol"==typeof t?[t]:Array.isArray(t)?t:((t,e,r)=>{const o=(t=>Array.isArray(t)?t.flat().map(String).join(","):t)(e?((t,e)=>{if("string"!=typeof t||!e)return t;let r=t+";";return void 0!==e.arrays&&(r+=`arrays=${e.arrays};`),void 0!==e.separator&&(r+=`separator=${e.separator};`),void 0!==e.split&&(r+=`split=${e.split};`),void 0!==e.merge&&(r+=`merge=${e.merge};`),void 0!==e.preservePaths&&(r+=`preservePaths=${e.preservePaths};`),r})(t,e):t);y(o);const i=m.cache.get(o)||r();return m.cache.set(o,i),i})(t,e,(()=>((t,e={})=>{const r=e.separator||".";const o="/"!==r&&e.preservePaths;if("string"==typeof t&&!1!==o&&/\//.test(t))return[t];const i=[];let n="";const s=t=>{let e;""!==t.trim()&&Number.isInteger(e=Number(t))?i.push(e):i.push(t)};for(let e=0;e<t.length;e++){const o=t[e];"\\"!==o?o!==r?n+=o:(s(n),n=""):n+=t[++e]}return n&&s(n),i})(t,e)));const p=(t,e,r,o)=>{if(y(e),void 0===r)d(t,e);else if(o&&o.merge){const i="function"===o.merge?o.merge:Object.assign;i&&l(t[e])&&l(r)?t[e]=i(t[e],r):t[e]=r}else t[e]=r;return t};const m=(t,e,r,o)=>{if(!e||!h(t))return t;const i=b(e,o);let n=t;for(let t=0;t<i.length;t++){const e=i[t];const s=i[t+1];if(y(e),void 0===s){p(n,e,r,o);break}"number"!=typeof s||Array.isArray(n[e])?(h(n[e])||(n[e]={}),n=n[e]):n=n[e]=[]}return t};m.split=b,m.cache=new Map,m.clear=()=>{m.cache=new Map};var v=m;var g=s;var w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var _=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}();var E=function t(e,r){var o=r.indexOf(".");if(!~o){if(null==e)return;return e[r]}var i=r.substring(0,o),n=r.substring(o+1);if(null!=e)return e=e[i],n?t(e,n):e},P=v,O=function(t,e){if("function"!=typeof e)return JSON.parse(g.readFileSync(t));g.readFile(t,"utf-8",(function(t,r){try{r=JSON.parse(r)}catch(e){t=t||e}e(t,r)}))},R=s,T=a;var k=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=r=r||{},r.stringify_width=r.stringify_width||2,r.stringify_fn=r.stringify_fn||null,r.stringify_eol=r.stringify_eol||!1,r.ignore_dots=r.ignore_dots||!1,this.path=e,this.data=this.read()}return _(t,[{key:"set",value:function(t,e,r){var o=this;return"object"===(void 0===t?"undefined":S(t))?function(t,e){var r=0,o=[];if(Array.isArray(t))for(;r<t.length&&!1!==e(t[r],r);++r);else if("object"===(void 0===t?"undefined":w(t))&&null!==t)for(o=Object.keys(t);r<o.length&&!1!==e(t[o[r]],o[r]);++r);}(t,(function(t,e){P(o.data,e,t,r)})):this.options.ignore_dots?this.data[t]=e:P(this.data,t,e,r),this.options.autosave&&this.save(),this}},{key:"get",value:function(t){return t?this.options.ignore_dots?this.data[t]:E(this.data,t):this.toObject()}},{key:"unset",value:function(t){return this.set(t,void 0)}},{key:"append",value:function(t,e){var r=this.get(t);if(r=void 0===r?[]:r,!Array.isArray(r))throw new Error("The data is not an array!");return r.push(e),this.set(t,r),this}},{key:"pop",value:function(t){var e=this.get(t);if(!Array.isArray(e))throw new Error("The data is not an array!");return e.pop(),this.set(t,e),this}},{key:"read",value:function(t){if(!t)try{return O(this.path)}catch(t){return{}}O(this.path,(function(e,r){t(null,r=e?{}:r)}))}},{key:"write",value:function(t,e){return e?R.writeFile(this.path,t,e):R.writeFileSync(this.path,t),this}},{key:"empty",value:function(t){return this.write("{}",t)}},{key:"save",value:function(t){var e=JSON.stringify(this.data,this.options.stringify_fn,this.options.stringify_width,this.options.stringify_eol);return this.write(this.options.stringify_eol?e+T.EOL:e,t),this}},{key:"toObject",value:function(){return this.data}}]),t}();o.config();const j=new k(`${c(f(import.meta.url))}/../../package.json`,{stringify_eol:!0});const{PORT:A,ZMQ_URL:K,CHAIN:x,NETWORK:N,BCN_ENV:U,BCN_URL:C,DEBUG_MODE:D,POSTGRES_USER:W,POSTGRES_PASSWORD:q,POSTGRES_DB:M,POSTGRES_HOST:J,POSTGRES_PORT:F,RPC_PROTOCOL:I,RPC_USER:B,RPC_PASSWORD:G,RPC_HOST:H,RPC_PORT:L,SERVER_VERSION:$,DEFAULT_WALLET:V,SYNC_HEIGHT:Y,SYNC_INTERVAL_CHECK:Q,POSTGRES_MAX_PARAM_NUM:X,DB_CONNECTION_RETRY_TIME:Z,SIGNATURE_FRESHNESS_MINUTES:z,ALLOWED_RPC_METHODS:tt,MWEB_HEIGHT:et}=process.env;const rt=C||"http://127.0.0.1:3000";$||j.get("version"),!tt||tt.split(",").map((t=>new RegExp(t)));const ot=(t,e)=>{if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++){const o=t[r];const i=Object.keys(o);let n=!1;for(let t=0;t<e.length;t++){const r=e[t];const s=Object.keys(r);if(i.length===s.length&&i.every((t=>s.includes(t)))&&i.every((t=>o[t]===r[t]))){n=!0;break}}if(!n)return!1}return!0};const{ec:nt}=t;describe("utils",(()=>{describe("auth utils",(()=>{const t=new nt("secp256k1").genKeyPair();const o=t.getPublic().encodeCompressed("hex");const i=e.sha256().update("message").digest("hex");const n=t.sign(i).toDER("hex");const s=Date.now();it("Should create Authentication header and parse it",(()=>{const a=((t,r=Date.now(),o)=>{if(!o){const i=e.sha256().update(rt+r).digest("hex");o=t.sign(i).toDER("hex")}const i=[o,t.getPublic().encodeCompressed("hex"),r];return`Bearer ${Buffer.from(i.join(":")).toString("base64")}`})(t,s,n);const c=(t=>{const e=t.split(" ");if(2!==e.length||"Bearer"!==e[0])throw new Error("Authentication header is invalid.");const r=Buffer.from(e[1],"base64").toString().split(":");if(3!==r.length)throw new Error;return{signature:r[0],publicKey:r[1],timestamp:parseInt(r[2],10)}})(a);r(c.signature).eq(n),r(c.publicKey).eq(o),r(c.timestamp).eq(s),r(t.verify(i,n)).to.be.true}))})),describe("arraysEqual utils",(()=>{it("Should work with identical arrays",(()=>{r(ot([{a:20,b:"hello",c:"world"}],[{a:20,b:"hello",c:"world"}])).eq(!0)})),it("Should work with object with different key order",(()=>{r(ot([{a:20,c:"world",b:"hello"}],[{a:20,b:"hello",c:"world"}])).eq(!0)})),it("Should work with object with different key order, different values",(()=>{r(ot([{a:20,b:"hello",c:"world"}],[{a:8,c:"world",b:"hello"}])).eq(!1)})),it("Should work with different arrays in length",(()=>{r(ot([{a:20,c:"world",b:"hello"}],[{a:20,c:"world",b:"hello"},{a:20,c:"world",b:"hello"}])).eq(!1)})),it("Should work with object arrays containing different object types",(()=>{r(ot([{a:7,c:"bye",b:"bye"},{a:20,c:"world",b:"hello"}],[{a:20,c:"world",b:"hello"},{a:7,c:"bye",b:"bye"}])).eq(!0)})),it("Should work with same utxos set, different object ordering ",(()=>{const t=[{address:"mx4WdU51jPh6KKvT5Dq27wMJJUW81vbF7y",amount:49.99976817,satoshis:4999976817,scriptPubKey:"76a914b579e625fdfdca267d3b57ccc130f501fa1a27d188ac",txid:"5c84c2b6b95a97eab570da1820e5f099f2216d980aaf7d9823f4082252206e7f",vout:5},{address:"mx4WdU51jPh6KKvT5Dq27wMJJUW81vbF7y",amount:50,satoshis:5e9,scriptPubKey:"76a914b579e625fdfdca267d3b57ccc130f501fa1a27d188ac",txid:"ac676b8137bd66513d6dbcdd7ae8721d9c7d6fc4b75ce4e939ea7e20805ed0ac",vout:0},{address:"mx4WdU51jPh6KKvT5Dq27wMJJUW81vbF7y",amount:25,satoshis:25e8,scriptPubKey:"76a914b579e625fdfdca267d3b57ccc130f501fa1a27d188ac",txid:"82dfd1af79519bad58f33608df7a01d3d2cced1b2f1864a7d91ca7b07289ad38",vout:0}];const e=[{address:"mx4WdU51jPh6KKvT5Dq27wMJJUW81vbF7y",amount:25,satoshis:25e8,scriptPubKey:"76a914b579e625fdfdca267d3b57ccc130f501fa1a27d188ac",txid:"82dfd1af79519bad58f33608df7a01d3d2cced1b2f1864a7d91ca7b07289ad38",vout:0},{address:"mx4WdU51jPh6KKvT5Dq27wMJJUW81vbF7y",amount:49.99976817,satoshis:4999976817,scriptPubKey:"76a914b579e625fdfdca267d3b57ccc130f501fa1a27d188ac",txid:"5c84c2b6b95a97eab570da1820e5f099f2216d980aaf7d9823f4082252206e7f",vout:5},{address:"mx4WdU51jPh6KKvT5Dq27wMJJUW81vbF7y",amount:50,satoshis:5e9,scriptPubKey:"76a914b579e625fdfdca267d3b57ccc130f501fa1a27d188ac",txid:"ac676b8137bd66513d6dbcdd7ae8721d9c7d6fc4b75ce4e939ea7e20805ed0ac",vout:0}];r(ot(t,e)).eq(!0),r(ot(e,t)).eq(!0)}))}))}));