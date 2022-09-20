import t from"body-parser";import e from"cors";import s from"express";import r from"http";import*as n from"zeromq";import a from"express-rate-limit";import o from"dotenv";import i from"is-primitive";import c from"is-plain-object";import l from"fs";import d from"os";import u,{dirname as p}from"path";import{fileURLToPath as y}from"url";import{createLogger as h,format as f,transports as m}from"winston";import g from"@bitcoin-computer/bitcore-lib-ltc";import w from"pg-promise";import b from"pg-monitor";import{backOff as v}from"exponential-backoff";import{Computer as $}from"@bitcoin-computer/lib";import S from"bitcoind-rpc";import E from"util";import T from"elliptic";import O from"hash.js";const{deleteProperty:R}=Reflect;const x=i;const N=c;const I=t=>"object"==typeof t&&null!==t||"function"==typeof t;const A=t=>{if(!x(t))throw new TypeError("Object keys must be strings or symbols");if((t=>"__proto__"===t||"constructor"===t||"prototype"===t)(t))throw new Error(`Cannot set unsafe key: "${t}"`)};const j=(t,e)=>e&&"function"==typeof e.split?e.split(t):"symbol"==typeof t?[t]:Array.isArray(t)?t:((t,e,s)=>{const r=(t=>Array.isArray(t)?t.flat().map(String).join(","):t)(e?((t,e)=>{if("string"!=typeof t||!e)return t;let s=t+";";return void 0!==e.arrays&&(s+=`arrays=${e.arrays};`),void 0!==e.separator&&(s+=`separator=${e.separator};`),void 0!==e.split&&(s+=`split=${e.split};`),void 0!==e.merge&&(s+=`merge=${e.merge};`),void 0!==e.preservePaths&&(s+=`preservePaths=${e.preservePaths};`),s})(t,e):t);A(r);const n=P.cache.get(r)||s();return P.cache.set(r,n),n})(t,e,(()=>((t,e={})=>{const s=e.separator||".";const r="/"!==s&&e.preservePaths;if("string"==typeof t&&!1!==r&&/\//.test(t))return[t];const n=[];let a="";const o=t=>{let e;""!==t.trim()&&Number.isInteger(e=Number(t))?n.push(e):n.push(t)};for(let e=0;e<t.length;e++){const r=t[e];"\\"!==r?r!==s?a+=r:(o(a),a=""):a+=t[++e]}return a&&o(a),n})(t,e)));const _=(t,e,s,r)=>{if(A(e),void 0===s)R(t,e);else if(r&&r.merge){const n="function"===r.merge?r.merge:Object.assign;n&&N(t[e])&&N(s)?t[e]=n(t[e],s):t[e]=s}else t[e]=s;return t};const P=(t,e,s,r)=>{if(!e||!I(t))return t;const n=j(e,r);let a=t;for(let t=0;t<n.length;t++){const e=n[t];const o=n[t+1];if(A(e),void 0===o){_(a,e,s,r);break}"number"!=typeof o||Array.isArray(a[e])?(I(a[e])||(a[e]={}),a=a[e]):a=a[e]=[]}return t};P.split=j,P.cache=new Map,P.clear=()=>{P.cache=new Map};var C=P;var M=l;var H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var B=function(){function t(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,s,r){return s&&t(e.prototype,s),r&&t(e,r),e}}();var F=function t(e,s){var r=s.indexOf(".");if(!~r){if(null==e)return;return e[s]}var n=s.substring(0,r),a=s.substring(r+1);if(null!=e)return e=e[n],a?t(e,a):e},L=C,U=function(t,e){if("function"!=typeof e)return JSON.parse(M.readFileSync(t));M.readFile(t,"utf-8",(function(t,s){try{s=JSON.parse(s)}catch(e){t=t||e}e(t,s)}))},D=l,W=d;var G=function(){function t(e,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=s=s||{},s.stringify_width=s.stringify_width||2,s.stringify_fn=s.stringify_fn||null,s.stringify_eol=s.stringify_eol||!1,s.ignore_dots=s.ignore_dots||!1,this.path=e,this.data=this.read()}return B(t,[{key:"set",value:function(t,e,s){var r=this;return"object"===(void 0===t?"undefined":k(t))?function(t,e){var s=0,r=[];if(Array.isArray(t))for(;s<t.length&&!1!==e(t[s],s);++s);else if("object"===(void 0===t?"undefined":H(t))&&null!==t)for(r=Object.keys(t);s<r.length&&!1!==e(t[r[s]],r[s]);++s);}(t,(function(t,e){L(r.data,e,t,s)})):this.options.ignore_dots?this.data[t]=e:L(this.data,t,e,s),this.options.autosave&&this.save(),this}},{key:"get",value:function(t){return t?this.options.ignore_dots?this.data[t]:F(this.data,t):this.toObject()}},{key:"unset",value:function(t){return this.set(t,void 0)}},{key:"append",value:function(t,e){var s=this.get(t);if(s=void 0===s?[]:s,!Array.isArray(s))throw new Error("The data is not an array!");return s.push(e),this.set(t,s),this}},{key:"pop",value:function(t){var e=this.get(t);if(!Array.isArray(e))throw new Error("The data is not an array!");return e.pop(),this.set(t,e),this}},{key:"read",value:function(t){if(!t)try{return U(this.path)}catch(t){return{}}U(this.path,(function(e,s){t(null,s=e?{}:s)}))}},{key:"write",value:function(t,e){return e?D.writeFile(this.path,t,e):D.writeFileSync(this.path,t),this}},{key:"empty",value:function(t){return this.write("{}",t)}},{key:"save",value:function(t){var e=JSON.stringify(this.data,this.options.stringify_fn,this.options.stringify_width,this.options.stringify_eol);return this.write(this.options.stringify_eol?e+W.EOL:e,t),this}},{key:"toObject",value:function(){return this.data}}]),t}();o.config();const K=function(t,e){return new G(t,{stringify_eol:!0})}(`${p(y(import.meta.url))}/../../package.json`);const{PORT:Y,ZMQ_URL:q,CHAIN:z,NETWORK:J,BCN_ENV:V,BCN_URL:X,DEBUG_MODE:Z,POSTGRES_USER:Q,POSTGRES_PASSWORD:tt,POSTGRES_DB:et,POSTGRES_HOST:st,POSTGRES_PORT:rt,RPC_PROTOCOL:nt,RPC_USER:at,RPC_PASSWORD:ot,RPC_HOST:it,RPC_PORT:ct,SERVER_VERSION:lt,DEFAULT_WALLET:dt,SYNC_HEIGHT:ut,SYNC_INTERVAL_CHECK:pt,POSTGRES_MAX_PARAM_NUM:yt,DB_CONNECTION_RETRY_TIME:ht,SIGNATURE_FRESHNESS_MINUTES:ft,ALLOWED_RPC_METHODS:mt,NODE_MAX_PROGRESS:gt,SYNC_MAX_PROGRESS:wt,MWEB_HEIGHT:bt,BCDB_START_HEIGHT:vt}=process.env;const $t=parseInt(Y,10)||"3000";const St=q||"tcp://node:28332";const Et=z||"LTC";const Tt=J||"regtest";const Ot=V||"dev";const Rt=X||"http://127.0.0.1:3000";const xt=parseInt(Z,10)||1;const Nt=Q||"bcn";const It=tt||"bcn";const At=et||"bcn";const jt=st||"127.0.0.1";const _t=parseInt(rt,10)||"5432";const Pt=nt||"http";const Ct=at||"bcn-admin";const Mt=ot||"kH4nU5Okm6-uyC0_mA5ztVNacJqZbYd_KGLl6mx722A=";const Ht=it||"node";const kt=parseInt(ct,10)||19332;const Bt=lt||K.get("version");const Ft=dt||"defaultwallet";const Lt=parseInt(pt,10)||3e3;const Ut=parseInt(gt,10)||wt;const Dt=parseInt(yt,10)||1e4;const Wt=parseInt(ht,10)||500;const Gt=parseInt(ft,10)||3;const Kt=mt?mt.split(",").map((t=>new RegExp(t))):[];const Yt=parseInt(bt||"",10)||432;const qt=h({level:["error","warn","info","http","verbose","debug","silly"][xt],format:f.json(),transports:[new m.Console({format:f.combine(f.colorize(),f.timestamp({format:"MM-DD-YYYY HH:mm:ss"}),f.printf((t=>`[2m${t.timestamp}[0m ${t.level} ${t.message}`)))})],exceptionHandlers:[new m.File({filename:"logs/exceptions.log"})],rejectionHandlers:[new m.File({filename:"logs/rejections.log"})]});const zt={maxFiles:1,maxSize:1e5};xt>=0&&qt.add(new m.File({filename:"error.log",level:"error"})),xt>=1&&qt.add(new m.File({filename:"logs/warn.log",level:"warn",...zt})),xt>=2&&qt.add(new m.File({filename:"logs/info.log",level:"info",...zt})),xt>=3&&qt.add(new m.File({filename:"logs/http.log",level:"http",...zt})),xt>=4&&qt.add(new m.File({filename:"logs/verbose.log",level:"verbose",...zt})),xt>=5&&qt.add(new m.File({filename:"logs/debug.log",level:"debug",...zt}));const Jt=()=>"dev"===Ot;const Vt=()=>xt>=6;const Xt=(t,e)=>{if(t.length!==e.length)return!1;for(let s=0;s<t.length;s++){const r=t[s];const n=Object.keys(r);let a=!1;for(let t=0;t<e.length;t++){const s=e[t];const o=Object.keys(s);if(n.length===o.length&&n.every((t=>o.includes(t)))&&n.every((t=>r[t]===s[t]))){a=!0;break}}if(!a)return!1}return!0};const Zt=t=>new Promise((e=>{setTimeout(e,t)}));const Qt=(t,e)=>Object.assign(new Array(e).fill(null),t);const te={error:(t,e)=>{if(e.cn){const{host:s,port:r,database:n,user:a,password:o}=e.cn;qt.debug(`Waiting for db to start { message:${t.message} host:${s}, port:${r}, database:${n}, user:${a}, password: ${o}`)}},noWarnings:!0};Jt()&&xt>0&&(b.isAttached()?b.detach():(b.attach(te),b.setTheme("matrix")));const ee=w(te)({host:jt,port:_t,database:At,user:Nt,password:It,allowExitOnIdle:!0,idleTimeoutMillis:100});const{PreparedStatement:se}=w;class re{static async select(t){const e=new se({name:`OffChain.select.${Math.random()}`,text:'SELECT "data" FROM "OffChain" WHERE "id" = $1',values:[t]});return ee.oneOrNone(e)}static async insert({id:t,data:e}){const s=new se({name:`OffChain.insert.${Math.random()}`,text:'INSERT INTO "OffChain" ("id", "data") VALUES ($1, $2) ON CONFLICT DO NOTHING',values:[t,e]});return ee.none(s)}static async delete(t){const e=new se({name:`OffChain.delete.${Math.random()}`,text:'WITH deleted AS (DELETE FROM "OffChain" WHERE "id" = $1 RETURNING *) SELECT count(*) FROM deleted;',values:[t]});return(await ee.any(e))[0].count>0}}class ne{static async select(t){return(await re.select(t))?.data||null}static async insert(t){return re.insert(t)}static async delete(t){return re.delete(t)}}const{crypto:ae}=g;const oe=s.Router();oe.get("/:id",(async({params:{id:t},url:e,method:s},r)=>{void 0===r.locals.authToken&&(qt.error(`Authorization failed at ${s} ${e}.`),r.status(403).json({error:`Authorization failed at ${s} ${e}.`}));try{const e=await ne.select(t);e?r.status(200).json(e):r.status(403).json({error:"No entry found."})}catch(t){qt.error(`GET ${e} failed with error '${t.message}'`),r.status(500).json({error:t.message})}})),oe.post("/",(async(t,e)=>{const{body:{data:s},url:r}=t;try{const r=ae.Hash.sha256(Buffer.from(s)).toString("hex");await ne.insert({id:r,data:s});const n=`${t.protocol}://${t.get("host")}/store/${r}`;e.status(201).json({_url:n})}catch(t){qt.error(`POST ${r} failed with error '${t.message}'`),e.status(500).json({error:t.message})}})),oe.delete("/:id",(async({params:{id:t},url:e,method:s},r)=>{Jt()||(qt.error(`Authorization failed at ${s} ${e}.`),r.status(403).json({error:`Authorization failed at ${s} ${e}.`}));try{await ne.delete(t)?r.status(204).send():r.status(403).json({error:"No entry found."})}catch(t){qt.error(`DELETE ${e} failed with error '${t.message}'`),r.status(500).json({error:t.message})}}));const ie=new S({protocol:Pt,user:Ct,pass:Mt,host:Ht,port:kt});const ce=E.promisify(S.prototype.createwallet.bind(ie));const le=E.promisify(S.prototype.generateToAddress.bind(ie));const de=E.promisify(S.prototype.getaddressinfo.bind(ie));const ue=E.promisify(S.prototype.getBlock.bind(ie));const pe=E.promisify(S.prototype.getBlockchainInfo.bind(ie));const ye=E.promisify(S.prototype.getBlockHash.bind(ie));const he=E.promisify(S.prototype.getRawTransaction.bind(ie));const fe=E.promisify(S.prototype.getTransaction.bind(ie));const me=E.promisify(S.prototype.getNewAddress.bind(ie));const ge={createwallet:ce,generateToAddress:le,getaddressinfo:de,getBlock:ue,getBlockchainInfo:pe,getBlockHash:ye,getRawTransaction:he,getTransaction:fe,importaddress:E.promisify(S.prototype.importaddress.bind(ie)),listunspent:E.promisify(S.prototype.listunspent.bind(ie)),sendRawTransaction:E.promisify(S.prototype.sendRawTransaction.bind(ie)),getNewAddress:me,sendToAddress:E.promisify(S.prototype.sendToAddress.bind(ie))};const{PreparedStatement:we}=w;class be{static async select(t){const e=new we({name:`Input.select.${Math.random()}`,text:'SELECT "rev" FROM "Input" WHERE "rev" = $1',values:[t]});return ee.any(e)}static async insert(t){const e=t.flatMap((t=>[t.rev]));for(;e.length;){const t=e.splice(0,Dt);const s=[];for(let e=1;e<=t.length;e+=1)s.push(`($${e})`);const r=s.join(",");const n=new we({name:`Input.insert.${Math.random()}`,text:`INSERT INTO "Input"("rev") VALUES ${r}  ON CONFLICT DO NOTHING`,values:t});await ee.none(n)}}static async count(t){const e=t.map((t=>t.rev));const s=new we({name:`Input.belong.${Math.random()}`,text:'SELECT count(*) FROM "Input" WHERE "rev" LIKE ANY ($1)',values:[[e]]});const r=await ee.oneOrNone(s);return parseInt(r?.count,10)||0}}const{Transaction:ve}=g;const{Input:$e}=ve;class Se{static getNonCoinbaseRevs=t=>t.map((t=>$e.fromObject({...t,script:t._scriptBuffer}))).filter((t=>!t.isNull())).map((({prevTxId:t,outputIndex:e})=>({rev:`${t.toString("hex")}/${e}`})));static insert=async t=>class{static async select(t){return be.select(t)}static async insert(t){return be.insert(t)}}.insert(this.getNonCoinbaseRevs(t))}const{PreparedStatement:Ee}=w;class Te{static async select(t){const e=new Ee({name:`Output.select.${Math.random()}`,text:'SELECT "address", "satoshis", "scriptPubKey", "rev" FROM "Output" WHERE "address" = $1',values:[t]});return ee.any(e)}static async insert(t){const e=t.flatMap((t=>[t.rev,t.address,t.satoshis,t.scriptPubKey]));for(;e.length;){const t=e.splice(0,Dt);const s=[];for(let e=1;e<=t.length;e+=4)s.push(`($${e}, $${e+1}, $${e+2}, $${e+3})`);const r=s.join(",");const n=new Ee({name:`Output.insert.${Math.random()}`,text:`INSERT INTO "Output"("rev", "address", "satoshis", "scriptPubKey") VALUES ${r}  ON CONFLICT DO NOTHING`,values:t});await ee.none(n)}}}const{Script:Oe}=g;const{PreparedStatement:Re}=w;class xe{static async query(t){const{publicKey:e,classHash:s}=t;if(void 0===e&&void 0===s)return[];let r='SELECT "rev"\n      FROM "NonStandard"\n      WHERE true ';const n=[];e&&(n.push(e),r+=' AND $1 = ANY ("publicKeys")'),s&&(n.push(s),r+=` AND "classHash" = $${n.length}`);const a=new Re({name:`NonStandard.query.${Math.random()}`,text:r,values:n});return(await ee.any(a)).map((t=>t.rev))}static async insert({id:t,rev:e,publicKeys:s,classHash:r}){const n=new Re({name:`NonStandard.insert.${Math.random()}`,text:'INSERT INTO "NonStandard"("id", "rev", "publicKeys", "classHash") VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING',values:[t,e,s,r]});await ee.none(n)}static async update({id:t,rev:e,publicKeys:s}){const r=new Re({name:`NonStandard.update.${Math.random()}`,text:'UPDATE "NonStandard" SET "rev"=$2, "publicKeys"=$3 WHERE "id" = $1',values:[t,e,s]});return ee.none(r)}static async getRevsByIds(t){const e=new Re({name:`NonStandard.getRevsByIds.${Math.random()}`,text:'SELECT "rev" FROM "NonStandard" WHERE "id" LIKE ANY($1)',values:[[t]]});return ee.any(e)}static async select(t){const e=new Re({name:`NonStandard.select.${Math.random()}`,text:'SELECT "id", "classHash" FROM "NonStandard" WHERE "rev" = $1',values:[t]});return ee.oneOrNone(e)}}class Ne{static async select(t){return xe.select(t)}static async query(t){return xe.query(t)}static async getRevsByIds(t){return xe.getRevsByIds(t)}static async insert(t){return xe.insert(t)}static async update(t){return xe.update(t)}}const{crypto:Ie}=g;class Ae{static add=async(t,e,s)=>{const r=Math.max(t.length,e.length);const n=Qt(t,r);const a=Qt(e,r);const o=(i=a,n.map(((t,e)=>[t,i[e]])));var i;await Promise.all(o.map((async([t,e],r)=>{const{__cls:n="",_owners:a=[]}=s[r]||{};if(null===t&&e)return/^[0-9A-Fa-f]{64}\/\d+$/.test(e),void await Ne.insert({id:e,rev:e,publicKeys:a,classHash:Ie.Hash.sha256(Buffer.from(n)).toString("hex")});if(e&&t){const{id:s,classHash:r}=await Ne.select(t)||{};await Ne.update({id:s,rev:e,publicKeys:a,classHash:r})}})))};static query=async t=>Ne.query(t);static getRevsByIds=async t=>(await Ne.getRevsByIds(t)).map((t=>t.rev))}const{PreparedStatement:je}=w;class _e{static async select(){return ee.one('SELECT "syncedHeight", "bitcoindSyncedHeight", "bitcoindSyncedProgress" FROM "SyncStatus"')}static async update({syncedHeight:t,bitcoindSyncedHeight:e,bitcoindSyncedProgress:s}){const r=new je({name:`SyncStatus.update.${Math.random()}`,text:'UPDATE "SyncStatus" SET "syncedHeight" = $1, "bitcoindSyncedHeight" = $2, "bitcoindSyncedProgress" = $3',values:[t,e,s]});await ee.any(r)}}class Pe{static async select(){return _e.select()}static async update(t){await _e.update(t)}}class Ce{static updateSync=async t=>Pe.update(t);static selectSync=async()=>Pe.select()}const Me=new $({chain:Et,network:Tt,url:Rt});class He{static syncTx=async t=>{if(await class{static insert=async t=>{const e=t.flatMap((t=>t.tx.outputs.map(((e,s)=>{const r=Oe.fromBuffer(e._scriptBuffer);let n=r.toAddress(Tt).toString("legacy");"false"===n&&(n=null);const a=r.toHex();const o=Math.round(e.satoshis);return{address:n,rev:`${t.txId}/${s}`,scriptPubKey:a,satoshis:o}}))));return class{static async select(t){return Te.select(t)}static async insert(t){return Te.insert(t)}}.insert(e)}}.insert([t]),await Se.insert(t.tx.inputs),t.isBcdbTx()){const{inRevs:e=[],outRevs:s=[],outData:r=[]}=t;await Ae.add(e,s,r)}};static rawTxSubscriber=async t=>{try{const e=t.toString("hex");qt.info(`ZMQ message { rawTx:${e} }`),"dev"===Ot&&l.appendFileSync("zmqlog.log",`${e} \r\n`);const s=await Me.db.fromTxHex(e);try{await this.syncTx(s)}catch(t){qt.error(`Error parsing transaction ${t.message} ${t.stack}`)}}catch(t){qt.error(`RawTxSubscriber failed with error '${t.message} ${t.stack}'`)}};static checkSyncEnd=async()=>{let t=-1;let e=-1;let s=0;qt.info(`Checking sync progress...syncedHeight: -1 from -1 NODE_MAX_PROGRESS ${Ut}`);do{({syncedHeight:t,bitcoindSyncedHeight:e,bitcoindSyncedProgress:s}=await Ce.selectSync()),t>0?qt.info(`Sync progress ${t}/${e} blocks [${(t/e*100).toFixed(4)}% (bitcoind progress: ${(100*s).toFixed(4)}%)]`):qt.info(`Sync progress initializing... ${t}/${e} blocks `),await Zt(Lt)}while(t<e||s<Ut);qt.info(`BCN reaches sync end...currentBlockHeight: ${t} from ${e} (chain progress: ${(100*s).toFixed(4)})`)};static createWallet=async()=>{try{await ge.createwallet(Ft)}catch(t){qt.debug(`Wallet creation failed with error '${t.message}'`)}};static sub=async t=>{try{await this.createWallet(),"regtest"!==Tt&&await this.checkSyncEnd(),await(async()=>{if("LTC"===Et&&"regtest"===Tt){qt.info(`Node is starting for chain ${Et} and network ${Tt}, Starting MWEB setup.`);const{result:t}=await ge.getBlockchainInfo();const e=t.blocks;if(e<Yt){const{result:t}=await ge.getNewAddress("","legacy");const s=Yt-e-1;s&&await ge.generateToAddress(s,t);const{result:r}=await ge.getNewAddress("mweb","mweb");await ge.sendToAddress(r,1),await ge.generateToAddress(1,t)}qt.info("MWEB setup is complete")}})(),qt.info(`Bitcoin Computer Node is ready ${Bt}`);for await(const[,e]of t)await this.rawTxSubscriber(e)}catch(t){qt.error(`ZMQ subscription failed with error '${t.message}'`)}}}const{PreparedStatement:ke}=w;class Be{static async getBalance(t){const e=new ke({name:`Utxos.getBalance.${Math.random()}`,text:'SELECT sum("satoshis") as "satoshis" FROM "Utxos" WHERE "address" = $1',values:[t]});const s=await ee.oneOrNone(e);return parseInt(s?.satoshis,10)||0}static async select(t){const e=new ke({name:`Utxos.select.${Math.random()}`,text:'SELECT "address", "satoshis", "scriptPubKey", "rev" FROM "Utxos" WHERE "address" = $1',values:[t]});return(await ee.any(e)).map((t=>({...t,satoshis:parseInt(t.satoshis,10)||0})))}}class Fe{static async getBalance(t){return Be.getBalance(t)}static async select(t){return Be.select(t)}}class Le{static getBalance=async t=>Fe.getBalance(t);static select=async t=>Fe.select(t)}class Ue{static async getTransaction(t){const{result:e}=await ge.getTransaction(t);return e}static async getBulkTransactions(t){return(await Promise.all(t.map((t=>ge.getRawTransaction(t))))).map((t=>t.result))}static async sendRawTransaction(t){const{result:e,error:s}=await ge.sendRawTransaction(t);if(s)throw qt.error(s),new Error("Error sending transaction");return e}static getUtxos=async t=>(void 0===(await ge.getaddressinfo(t)).result.timestamp&&(qt.info(`Importing address: ${t}`),await ge.importaddress(t,!1)),(await ge.listunspent(0,999999,[t])).result)}class De{static get=async t=>Ue.getTransaction(t);static getRaw=async t=>Ue.getBulkTransactions(t);static sendRaw=async t=>Ue.sendRawTransaction(t);static getUtxos=async t=>Ue.getUtxos(t)}const We=new S({protocol:Pt,user:Ct,pass:Mt,host:Ht,port:kt});const Ge={};const Ke=JSON.parse(JSON.stringify(S.callspec));Object.keys(Ke).forEach((t=>{Ke[t.toLowerCase()]=Ke[t]}));const Ye={str:t=>t.toString(),string:t=>t.toString(),int:t=>parseFloat(t),float:t=>parseFloat(t),bool:t=>!0===t||"1"===t||1===t||"true"===t||"true"===t.toString().toLowerCase(),obj:t=>"string"==typeof t?JSON.parse(t):t};try{Object.keys(S.prototype).forEach((t=>{if(t&&"function"==typeof S.prototype[t]){const e=t.toLowerCase();Ge[t]=E.promisify(S.prototype[t].bind(We)),Ge[e]=E.promisify(S.prototype[e].bind(We))}}))}catch(t){qt.error(`Error occurred while binding RPC methods: ${t.message}`)}const{ec:qe}=T;const ze=new qe("secp256k1");const Je=s();let Ve;try{Ve=r.createServer(Je)}catch(t){throw qt.error(`Starting server failed with error '${t.message}'`),t}if(qt.info(`Server listening on port ${$t}`),Je.use(e()),"dev"!==Ot){const t=a({windowMs:9e5,max:300,standardHeaders:!0,legacyHeaders:!1});Je.use(t)}Je.use(t.json({limit:"100mb"})),Je.use(t.urlencoded({limit:"100mb",extended:!0})),Je.use((async(t,e,s)=>{try{const r=t.get("Authentication");if(!r)return void s();const n=(t=>{const e=t.split(" ");if(2!==e.length||"Bearer"!==e[0])throw new Error("Authentication header is invalid.");const s=Buffer.from(e[1],"base64").toString().split(":");if(3!==s.length)throw new Error;return{signature:s[0],publicKey:s[1],timestamp:parseInt(s[2],10)}})(r);const{signature:a,publicKey:o,timestamp:i}=n;if(Date.now()-i>1e3*Gt*60)return void e.status(401).json({error:"Signature is too old."});const c=O.sha256().update(Rt+i).digest("hex");if(!ze.keyFromPublic(o,"hex").verify(c,a))return void e.status(401).json({error:"The origin and public key pair doesn't match the signature."});e.locals.authToken=n,s()}catch(t){qt.error(`Auth failed with error '${t.message}'`),e.status(401).json({error:t.message})}})),Je.use((({url:t},e,s)=>{if(void 0!==e.locals.authToken)try{let t;try{const e=Jt()?"bcn.test.config.json":"bcn.config.json";const s=p(y(import.meta.url));t=l.readFileSync(u.join(s,"..","..",e))}catch(t){if(t.message.includes("ENOENT: no such file or directory"))return void s();throw qt.error(`Access-list failed with error '${t.message}'`),t}const{blacklist:r,whitelist:n}=JSON.parse(t.toString());if(r&&n)return void e.status(403).json({error:"Cannot enforce blacklist and whitelist at the same time."});const{publicKey:a}=e.locals.authToken;if(n&&!n.includes(a)||r&&r.includes(a))return void e.status(403).json({error:`Public key ${a} is not allowed.`});s()}catch(s){qt.error(`Authorization failed at ${t} with error: '${s.message}'`),e.status(403).json({error:s.message})}else s()}));const Xe=(()=>{const t=s.Router();return t.get("/wallet/:address/utxos",(async({params:t,url:e},s)=>{try{const{address:e}=t;const r=await Le.select(e);const n=r.map((({satoshis:t,rev:e})=>{const[s,r]=e.split("/");return{amount:t/1e8,txid:s,vout:parseInt(r,10)}}));if(Vt()){let t=[];let s=!1;let r=10;do{try{t=await De.getUtxos(e)||[],s=!0}catch(t){qt.debug(`Retrying to get utxos '${t.message}'`),await Zt(1e3),r-=1}}while(!s&&r>0);const a=t.map((({amount:t,txid:e,vout:s})=>({amount:t,txid:e,vout:s})));Xt(n,a)||(qt.error(`Inconsistency on UTXO set calculation for address ${e}.`),qt.error(`db utxos ${JSON.stringify(n,null,2)} rpc utxos ${JSON.stringify(a,null,2)}`),qt.error(`db utxos length ${n.length} rpc utxos length: ${a.length}`))}s.status(200).json(r)}catch(t){qt.error(`GET ${e} failed with error '${t.message}'`),s.status(404).json({error:t.message})}})),t.get("/non-standard-utxos",(async({query:t,url:e},s)=>{try{const e=await Ae.query(t);s.status(200).json(e)}catch(t){qt.error(`GET ${e} failed with error '${t.messages}'`),s.status(404).json({error:t.message})}})),t.get("/address/:address/balance",(async({params:t,url:e},s)=>{try{const{address:r}=t;const n=await Le.select(r);const a=await Le.getBalance(r);const o=n.map((({satoshis:t,rev:e})=>{const[s,r]=e.split("/");return{amount:t/1e8,txid:s,vout:parseInt(r,10)}}));if(Vt()){let t=[];let s=!1;let n=10;do{try{t=await De.getUtxos(r)||[],s=!0}catch(t){qt.debug(`Retrying ${e} getStandardUtxosAction: ${t.message}`),await Zt(1e3),n-=1}}while(!s&&n>0);const i=1e8*t.reduce(((t,e)=>t+e.amount),0);const c=t.map((({amount:t,txid:e,vout:s})=>({amount:t,txid:e,vout:s})));a===Math.round(i)&&Xt(o,c)||(qt.error(`Inconsistency on balance calculation for address ${r}: dbBalance ${a} rpcBalance: ${i}`),qt.error(`db utxos ${o}`),qt.error(`rpc utxos: ${JSON.stringify(o)}`))}s.status(200).json(a)}catch(t){qt.error(`GET ${e} failed with error '${t.message}'`),s.status(404).json({error:t.message})}})),t.post("/tx/bulk",(async({body:{txIds:t},url:e},s)=>{try{if(void 0===t||0===t.length)return void s.status(500).json({error:"Missing input txIds."});const e=await De.getRaw(t);e?s.status(200).json(e):s.status(404).json({error:"Not found"})}catch(t){qt.error(`POST ${e} failed with error '${t.message}'`),s.status(500).json({error:t.message})}})),t.post("/tx/send",(async({body:{rawTx:t},url:e},s)=>{try{const e=await De.sendRaw(t);await He.rawTxSubscriber(t),s.status(200).json(e)}catch(t){qt.error(`POST ${e} failed with error '${t.message}'`),s.status(500).json({error:t.message})}})),t.post("/revs",(async({body:{ids:t},url:e},s)=>{try{if(void 0===t||0===t.length)return void s.status(404).json({error:"Missing input object ids."});const e=await Ae.getRevsByIds(t);s.status(200).json(e)}catch(t){qt.error(`POST ${e} failed with error '${t.message}'`),s.status(404).json({error:t.message})}})),t.post("/rpc",(async({body:t,url:e},s)=>{try{if(!t||!t.method)throw new Error("Please provide appropriate RPC method name");if(!Kt.some((e=>e.test(t.method))))throw new Error("Method is not allowed");const e=function(t,e){if(void 0===Ke[t]||null===Ke[t])throw new Error("This RPC method does not exist, or not supported");const s=e.trim().split(" ");const r=Ke[t].trim().split(" ");if(0===e.trim().length&&0!==Ke[t].trim().length)throw new Error(`Too few params provided. Expected ${r.length} Provided 0`);if(0!==e.trim().length&&0===Ke[t].trim().length)throw new Error(`Too many params provided. Expected 0 Provided ${s.length}`);if(s.length<r.length)throw new Error(`Too few params provided. Expected ${r.length} Provided ${s.length}`);if(s.length>r.length)throw new Error(`Too many params provided. Expected ${r.length} Provided ${s.length}`);return 0===e.length?[]:s.map(((t,e)=>Ye[r[e]](t)))}(t.method,t.params);const r=e.length?await Ge[t.method](...e):await Ge[t.method]();return void s.status(200).json({result:r})}catch(t){qt.error(`POST ${e} failed with error '${t.message}'`),s.status(404).json({error:t.message})}})),t.post("/non-standard-utxo",(async(t,e)=>{e.status(500).json({error:"Please upgrade to @bitcoin-computer/lib to the latest version."})})),t.get("/tx/:txId",(async({params:t},e)=>{const{txId:s}=t;const[r]=await De.getRaw([s]);r?e.status(200).json(r):e.status(404).json({error:"Not found"})})),t})();Je.use(`/v1/${Et}/${Tt}`,Xe),Je.use("/v1/store",oe),Je.get("/",((t,e)=>e.status(200).send("OK"))),Je.get("/health",((t,e)=>e.status(200).send("healthy"))),Je.get("/version",((t,e)=>e.status(200).send(Bt))),Ve.listen($t,(()=>{qt.info(`Rev ${Bt} Started web server on port ${$t}`)}));const Ze=new n.Subscriber;Ze.connect(St),Ze.subscribe("rawtx"),qt.info(`ZMQ Subscriber connected to ${St}`),(async()=>{await(async()=>{await v((()=>ee.connect()),{startingDelay:Wt})})(),await He.sub(Ze)})();
