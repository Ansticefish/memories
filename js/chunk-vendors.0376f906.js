(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{1902:function(t,e,n){"use strict";n.d(e,"a",(function(){return ge}));var r=n("589b"),i=n("e691"),o=n("1fd5"),s=n("22e5"),a=n("1d25");const c="@firebase/installations",l="0.6.0",u=1e4,h="w:"+l,d="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,_="installations",m="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},g=new o["b"](_,m,v);function y(t){return t instanceof o["c"]&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b({projectId:t}){return`${f}/projects/${t}/installations`}function w(t){return{token:t.token,requestStatus:2,expiresIn:T(t.expiresIn),creationTime:Date.now()}}async function C(t,e){const n=await e.json(),r=n.error;return g.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function I({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function E(t,{refreshToken:e}){const n=I(t);return n.append("Authorization",S(e)),n}async function k(t){const e=await t();return e.status>=500&&e.status<600?t():e}function T(t){return Number(t.replace("s","000"))}function S(t){return`${d} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=b(t),i=I(t),o=e.getImmediate({optional:!0});if(o){const t=await o.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const s={fid:n,authVersion:d,appId:t.appId,sdkVersion:h},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await k(()=>fetch(r,a));if(c.ok){const t=await c.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:w(t.authToken)};return e}throw await C("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){return new Promise(e=>{setTimeout(e,t)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=/^[cdef][\w-]{21}$/,j="";function R(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=A(t);return N.test(n)?n:j}catch(t){return j}}function A(t){const e=P(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=new Map;function L(t,e){const n=D(t);$(n,e),F(n,e)}function $(t,e){const n=M.get(t);if(n)for(const r of n)r(e)}function F(t,e){const n=U();n&&n.postMessage({key:t,fid:e}),H()}let q=null;function U(){return!q&&"BroadcastChannel"in self&&(q=new BroadcastChannel("[Firebase] FID Change"),q.onmessage=t=>{$(t.data.key,t.data.fid)}),q}function H(){0===M.size&&q&&(q.close(),q=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B="firebase-installations-database",W=1,z="firebase-installations-store";let V=null;function K(){return V||(V=Object(a["a"])(B,W,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(z)}}})),V}async function G(t,e){const n=D(t),r=await K(),i=r.transaction(z,"readwrite"),o=i.objectStore(z),s=await o.get(n);return await o.put(e,n),await i.done,s&&s.fid===e.fid||L(t,e.fid),e}async function Y(t){const e=D(t),n=await K(),r=n.transaction(z,"readwrite");await r.objectStore(z).delete(e),await r.done}async function Q(t,e){const n=D(t),r=await K(),i=r.transaction(z,"readwrite"),o=i.objectStore(z),s=await o.get(n),a=e(s);return void 0===a?await o.delete(n):await o.put(a,n),await i.done,!a||s&&s.fid===a.fid||L(t,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t){let e;const n=await Q(t.appConfig,n=>{const r=X(n),i=Z(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===j?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function X(t){const e=t||{fid:R(),registrationStatus:0};return rt(e)}function Z(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(g.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tt(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:et(t)}:{installationEntry:e}}async function tt(t,e){try{const n=await O(t,e);return G(t.appConfig,n)}catch(n){throw y(n)&&409===n.customData.serverCode?await Y(t.appConfig):await G(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function et(t){let e=await nt(t.appConfig);while(1===e.registrationStatus)await x(100),e=await nt(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await J(t);return n||e}return e}function nt(t){return Q(t,t=>{if(!t)throw g.create("installation-not-found");return rt(t)})}function rt(t){return it(t)?{fid:t.fid,registrationStatus:0}:t}function it(t){return 1===t.registrationStatus&&t.registrationTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot({appConfig:t,heartbeatServiceProvider:e},n){const r=st(t,n),i=E(t,n),o=e.getImmediate({optional:!0});if(o){const t=await o.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const s={installation:{sdkVersion:h,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await k(()=>fetch(r,a));if(c.ok){const t=await c.json(),e=w(t);return e}throw await C("Generate Auth Token",c)}function st(t,{fid:e}){return`${b(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e=!1){let n;const r=await Q(t.appConfig,r=>{if(!ht(r))throw g.create("not-registered");const i=r.authToken;if(!e&&dt(i))return r;if(1===i.requestStatus)return n=ct(t,e),r;{if(!navigator.onLine)throw g.create("app-offline");const e=pt(r);return n=ut(t,e),e}}),i=n?await n:r.authToken;return i}async function ct(t,e){let n=await lt(t.appConfig);while(1===n.authToken.requestStatus)await x(100),n=await lt(t.appConfig);const r=n.authToken;return 0===r.requestStatus?at(t,e):r}function lt(t){return Q(t,t=>{if(!ht(t))throw g.create("not-registered");const e=t.authToken;return _t(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ut(t,e){try{const n=await ot(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await G(t.appConfig,r),n}catch(n){if(!y(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await G(t.appConfig,n)}else await Y(t.appConfig);throw n}}function ht(t){return void 0!==t&&2===t.registrationStatus}function dt(t){return 2===t.requestStatus&&!ft(t)}function ft(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+p}function pt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function _t(t){return 1===t.requestStatus&&t.requestTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t){const e=t,{installationEntry:n,registrationPromise:r}=await J(e);return r?r.catch(console.error):at(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e=!1){const n=t;await gt(n);const r=await at(n,e);return r.token}async function gt(t){const{registrationPromise:e}=await J(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yt(t){if(!t||!t.options)throw bt("App Configuration");if(!t.name)throw bt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bt(t){return g.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="installations",Ct="installations-internal",It=t=>{const e=t.getProvider("app").getImmediate(),n=yt(e),i=Object(r["b"])(e,"heartbeat"),o={app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},Et=t=>{const e=t.getProvider("app").getImmediate(),n=Object(r["b"])(e,wt).getImmediate(),i={getId:()=>mt(n),getToken:t=>vt(n,t)};return i};function kt(){Object(r["c"])(new s["a"](wt,It,"PUBLIC")),Object(r["c"])(new s["a"](Ct,Et,"PRIVATE"))}kt(),Object(r["f"])(c,l),Object(r["f"])(c,l,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt="analytics",St="firebase_id",Ot="origin",xt=6e4,Pt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nt="https://www.googletagmanager.com/gtag/js",jt=new i["b"]("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rt(t){return Promise.all(t.map(t=>t.catch(t=>t)))}function At(t,e){const n=document.createElement("script");n.src=`${Nt}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Dt(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Mt(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const t=await Rt(n),r=t.find(t=>t.measurementId===i);r&&await e[r.appId]}}catch(a){jt.error(a)}t("config",i,o)}async function Lt(t,e,n,r,i){try{let o=[];if(i&&i["send_to"]){let t=i["send_to"];Array.isArray(t)||(t=[t]);const r=await Rt(n);for(const n of t){const t=r.find(t=>t.measurementId===n),i=t&&e[t.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){jt.error(o)}}function $t(t,e,n,r){async function i(i,o,s){try{"event"===i?await Lt(t,e,n,o,s):"config"===i?await Mt(t,e,n,r,o,s):"consent"===i?t("consent","update",s):t("set",o)}catch(a){jt.error(a)}}return i}function Ft(t,e,n,r,i){let o=function(...t){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=$t(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function qt(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nt)&&n.src.includes(t))return n;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ht=new o["b"]("analytics","Analytics",Ut),Bt=30,Wt=1e3;class zt{constructor(t={},e=Wt){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Vt=new zt;function Kt(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Gt(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Kt(r)},o=Pt.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let t="";try{const n=await s.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw Ht.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()}async function Yt(t,e=Vt,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw Ht.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ht.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Zt;return setTimeout(async()=>{a.abort()},void 0!==n?n:xt),Qt({appId:r,apiKey:i,measurementId:o},s,a,e)}async function Qt(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Vt){var s;const{appId:a,measurementId:c}=t;try{await Jt(r,e)}catch(l){if(c)return jt.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+c+` provided in the "measurementId" field in the local Firebase config. [${null===l||void 0===l?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const e=await Gt(t);return i.deleteThrottleMetadata(a),e}catch(l){const e=l;if(!Xt(e)){if(i.deleteThrottleMetadata(a),c)return jt.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+c+` provided in the "measurementId" field in the local Firebase config. [${null===e||void 0===e?void 0:e.message}]`),{appId:a,measurementId:c};throw l}const u=503===Number(null===(s=null===e||void 0===e?void 0:e.customData)||void 0===s?void 0:s.httpStatus)?Object(o["k"])(n,i.intervalMillis,Bt):Object(o["k"])(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,h),jt.debug(`Calling attemptFetch again in ${u} millis`),Qt(t,h,r,i)}}function Jt(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(Ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Xt(t){if(!(t instanceof o["c"])||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class Zt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let te,ee;async function ne(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function re(t){ee=t}function ie(t){te=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(){if(!Object(o["w"])())return jt.warn(Ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Object(o["I"])()}catch(t){return jt.warn(Ht.create("indexeddb-unavailable",{errorInfo:null===t||void 0===t?void 0:t.toString()}).message),!1}return!0}async function se(t,e,n,r,i,o,s){var a;const c=Yt(t);c.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&jt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>jt.error(t)),e.push(c);const l=oe().then(t=>t?r.getId():void 0),[u,h]=await Promise.all([c,l]);qt(o)||At(o,u.measurementId),ee&&(i("consent","default",ee),re(void 0)),i("js",new Date);const d=null!==(a=null===s||void 0===s?void 0:s.config)&&void 0!==a?a:{};return d[Ot]="firebase",d.update=!0,null!=h&&(d[St]=h),i("config",u.measurementId,d),te&&(i("set",te),ie(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this.app=t}_delete(){return delete ce[this.app.options.appId],Promise.resolve()}}let ce={},le=[];const ue={};let he,de,fe="dataLayer",pe="gtag",_e=!1;function me(){const t=[];if(Object(o["u"])()&&t.push("This is a browser extension environment."),Object(o["e"])()||t.push("Cookies are not available."),t.length>0){const e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=Ht.create("invalid-analytics-context",{errorInfo:e});jt.warn(n.message)}}function ve(t,e,n){me();const r=t.options.appId;if(!r)throw Ht.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Ht.create("no-api-key");jt.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+t.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=ce[r])throw Ht.create("already-exists",{id:r});if(!_e){Dt(fe);const{wrappedGtag:t,gtagCore:e}=Ft(ce,le,ue,fe,pe);de=t,he=e,_e=!0}ce[r]=se(t,le,ue,e,he,fe,n);const i=new ae(t);return i}function ge(t=Object(r["d"])()){t=Object(o["s"])(t);const e=Object(r["b"])(t,Tt);return e.isInitialized()?e.getImmediate():ye(t)}function ye(t,e={}){const n=Object(r["b"])(t,Tt);if(n.isInitialized()){const t=n.getImmediate();if(Object(o["o"])(e,n.getOptions()))return t;throw Ht.create("already-initialized")}const i=n.initialize({options:e});return i}function be(t,e,n,r){t=Object(o["s"])(t),ne(de,ce[t.app.options.appId],e,n,r).catch(t=>jt.error(t))}const we="@firebase/analytics",Ce="0.9.0";function Ie(){function t(t){try{const e=t.getProvider(Tt).getImmediate();return{logEvent:(t,n,r)=>be(e,t,n,r)}}catch(e){throw Ht.create("interop-component-reg-failed",{reason:e})}}Object(r["c"])(new s["a"](Tt,(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return ve(n,r,e)},"PUBLIC")),Object(r["c"])(new s["a"]("analytics-internal",t,"PRIVATE")),Object(r["f"])(we,Ce),Object(r["f"])(we,Ce,"esm2017")}Ie()},"1d25":function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));const r=(t,e)=>e.some(e=>t instanceof e);let i,o;function s(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap;function f(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(y(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(e=>{e instanceof IDBCursor&&c.set(e,t)}).catch(()=>{}),d.set(e,t),e}function p(t){if(l.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});l.set(t,e)}let _={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return l.get(t);if("objectStoreNames"===e)return t.objectStoreNames||u.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function m(t){_=t(_)}function v(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(t)?function(...e){return t.apply(b(this),e),y(c.get(this))}:function(...e){return y(t.apply(b(this),e))}:function(e,...n){const r=t.call(b(this),e,...n);return u.set(r,e.sort?e.sort():[e]),y(r)}}function g(t){return"function"===typeof t?v(t):(t instanceof IDBTransaction&&p(t),r(t,s())?new Proxy(t,_):t)}function y(t){if(t instanceof IDBRequest)return f(t);if(h.has(t))return h.get(t);const e=g(t);return e!==t&&(h.set(t,e),d.set(e,t)),e}const b=t=>d.get(t);function w(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=y(s);return r&&s.addEventListener("upgradeneeded",t=>{r(y(s.result),t.oldVersion,t.newVersion,y(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(t=>{o&&t.addEventListener("close",()=>o()),i&&t.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const C=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],E=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(E.get(e))return E.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return E.set(e,o),o}m(t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)}))},"1fd5":function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return M})),n.d(e,"c",(function(){return D})),n.d(e,"d",(function(){return J})),n.d(e,"e",(function(){return I})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return ot})),n.d(e,"l",(function(){return W})),n.d(e,"m",(function(){return R})),n.d(e,"n",(function(){return f})),n.d(e,"o",(function(){return G})),n.d(e,"p",(function(){return X})),n.d(e,"q",(function(){return N})),n.d(e,"r",(function(){return P})),n.d(e,"s",(function(){return st})),n.d(e,"t",(function(){return B})),n.d(e,"u",(function(){return g})),n.d(e,"v",(function(){return V})),n.d(e,"w",(function(){return w})),n.d(e,"x",(function(){return v})),n.d(e,"y",(function(){return b})),n.d(e,"z",(function(){return y})),n.d(e,"A",(function(){return H})),n.d(e,"B",(function(){return F})),n.d(e,"C",(function(){return K})),n.d(e,"D",(function(){return Q})),n.d(e,"E",(function(){return z})),n.d(e,"F",(function(){return tt})),n.d(e,"G",(function(){return Z})),n.d(e,"H",(function(){return q})),n.d(e,"I",(function(){return C}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},o=function(t,e){if(!t)throw s(e)},s=function(t){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},a=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},c=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,l=e>>2,u=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):c(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const l=i<t.length,u=l?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==u)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==u){const t=c<<6&192|u;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u=function(t){const e=a(t);return l.encodeByteArray(e,!0)},h=function(t){return u(t).replace(/\./g,"")},d=function(t){try{return l.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(t){return p(void 0,t)}function p(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&_(n)&&(t[n]=p(t[n],e[n]));return t}function _(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function g(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function w(){try{return"object"===typeof indexedDB}catch(t){return!1}}function C(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}function I(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}function E(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t)return t;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=()=>E().__FIREBASE_DEFAULTS__,T=()=>{if("undefined"===typeof r)return;const t=Object({NODE_ENV:"production",BASE_URL:"/memories/"}).__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},S=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&d(t[1]);return e&&JSON.parse(e)},O=()=>{try{return k()||T()||S()}catch(t){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+t)}},x=t=>{var e,n;return null===(n=null===(e=O())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},P=t=>{const e=x(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},N=()=>{var t;return null===(t=O())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[h(JSON.stringify(n)),h(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A="FirebaseError";class D extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=A,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?L(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new D(r,s,n);return a}}function L(t,e){return t.replace($,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const $=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return JSON.parse(t)}function q(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=F(d(o[0])||""),n=F(d(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:e,claims:n,data:r,signature:i}},H=function(t){const e=U(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},B=function(t){const e=U(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function z(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function K(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function G(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(Y(n)&&Y(o)){if(!G(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Y(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let u=0;u<16;u++)n[u]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let u=0;u<16;u++)n[u]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let u=16;u<80;u++){const t=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(t<<1|t>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):u<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const t=(o<<5|o>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<e){if(0===o)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<e)if(i[o]=t[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[r]>>e&255,++n;return t}}function X(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const e=i-55296;r++,o(r<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(r)-56320;i=65536+(e<<10)+n}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},tt=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e},et=1e3,nt=2,rt=144e5,it=.5;function ot(t,e=et,n=nt){const r=e*Math.pow(n,t),i=Math.round(it*r*(Math.random()-.5)*2);return Math.min(rt,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function st(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"),n("4362"))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return l}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},"2b0e":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Gr}));
/*!
 * Vue.js v2.7.8
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({}),i=Array.isArray;function o(t){return void 0===t||null===t}function s(t){return void 0!==t&&null!==t}function a(t){return!0===t}function c(t){return!1===t}function l(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var d=Object.prototype.toString;function f(t){return"[object Object]"===d.call(t)}function p(t){return"[object RegExp]"===d.call(t)}function _(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function m(t){return s(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===d?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var b=y("key,ref,slot,slot-scope,is");function w(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var C=Object.prototype.hasOwnProperty;function I(t,e){return C.call(t,e)}function E(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var k=/-(\w)/g,T=E((function(t){return t.replace(k,(function(t,e){return e?e.toUpperCase():""}))})),S=E((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),O=/\B([A-Z])/g,x=E((function(t){return t.replace(O,"-$1").toLowerCase()}));function P(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function N(t,e){return t.bind(e)}var j=Function.prototype.bind?N:P;function R(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function A(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&A(e,t[n]);return e}function M(t,e,n){}var L=function(t,e,n){return!1},$=function(t){return t};function F(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return F(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return F(t[n],e[n])}))}catch(c){return!1}}function q(t,e){for(var n=0;n<t.length;n++)if(F(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function H(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var B="data-server-rendered",W=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:M,parsePlatformTagName:$,mustUseProp:L,async:!0,_lifecycleHooks:z},K=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function Y(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Q=new RegExp("[^".concat(K.source,".$_\\d]"));function J(t){if(!Q.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var X="__proto__"in{},Z="undefined"!==typeof window,tt=Z&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,rt=tt&&tt.indexOf("edge/")>0;tt&&tt.indexOf("android");var it=tt&&/iphone|ipad|ipod|ios/.test(tt);tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt);var ot,st=tt&&tt.match(/firefox\/(\d+)/),at={}.watch,ct=!1;if(Z)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){ct=!0}}),window.addEventListener("test-passive",null,lt)}catch(Ys){}var ut=function(){return void 0===ot&&(ot=!Z&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),ot},ht=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function dt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ft,pt="undefined"!==typeof Symbol&&dt(Symbol)&&"undefined"!==typeof Reflect&&dt(Reflect.ownKeys);ft="undefined"!==typeof Set&&dt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var _t=null;function mt(t){void 0===t&&(t=null),t||_t&&_t._scope.off(),_t=t,t&&t._scope.on()}var vt=function(){function t(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),gt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function yt(t){return new vt(void 0,void 0,void 0,String(t))}function bt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var wt=0,Ct=function(){function t(){this.id=wt++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){w(this.subs,t)},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.slice();for(var n=0,r=e.length;n<r;n++){e[n].update()}},t}();Ct.target=null;var It=[];function Et(t){It.push(t),Ct.target=t}function kt(){It.pop(),Ct.target=It[It.length-1]}var Tt=Array.prototype,St=Object.create(Tt),Ot=["push","pop","shift","unshift","splice","sort","reverse"];Ot.forEach((function(t){var e=Tt[t];Y(St,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var xt=Object.getOwnPropertyNames(St),Pt={},Nt=!0;function jt(t){Nt=t}var Rt={notify:M,depend:M,addSub:M,removeSub:M},At=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Rt:new Ct,this.vmCount=0,Y(t,"__ob__",this),i(t)){if(!n)if(X)t.__proto__=St;else for(var r=0,o=xt.length;r<o;r++){var s=xt[r];Y(t,s,St[s])}e||this.observeArray(t)}else{var a=Object.keys(t);for(r=0;r<a.length;r++){s=a[r];Mt(t,s,Pt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Dt(t[e],!1,this.mock)},t}();function Dt(t,e,n){var r;if(!(!h(t)||Bt(t)||t instanceof vt))return I(t,"__ob__")&&t.__ob__ instanceof At?r=t.__ob__:!Nt||!n&&ut()||!i(t)&&!f(t)||!Object.isExtensible(t)||t.__v_skip||(r=new At(t,e,n)),r}function Mt(t,e,n,r,o,s){var a=new Ct,c=Object.getOwnPropertyDescriptor(t,e);if(!c||!1!==c.configurable){var l=c&&c.get,u=c&&c.set;l&&!u||n!==Pt&&2!==arguments.length||(n=t[e]);var h=!o&&Dt(n,!1,s);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=l?l.call(t):n;return Ct.target&&(a.depend(),h&&(h.dep.depend(),i(e)&&Ft(e))),Bt(e)&&!o?e.value:e},set:function(e){var r=l?l.call(t):n;if(H(r,e)){if(u)u.call(t,e);else{if(l)return;if(!o&&Bt(r)&&!Bt(e))return void(r.value=e);n=e}h=!o&&Dt(e,!1,s),a.notify()}}}),a}}function Lt(t,e,n){if(!Ht(t)){var r=t.__ob__;return i(t)&&_(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&Dt(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?(Mt(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function $t(t,e){if(i(t)&&_(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||Ht(t)||I(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ft(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),i(e)&&Ft(e)}function qt(t){return Ut(t,!0),Y(t,"__v_isShallow",!0),t}function Ut(t,e){if(!Ht(t)){Dt(t,e,ut());0}}function Ht(t){return!(!t||!t.__v_isReadonly)}function Bt(t){return!(!t||!0!==t.__v_isRef)}function Wt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Bt(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Bt(r)&&!Bt(t)?r.value=t:e[n]=t}})}var zt="watcher";"".concat(zt," callback"),"".concat(zt," getter"),"".concat(zt," cleanup");var Vt;var Kt=function(){function t(t){void 0===t&&(t=!1),this.active=!0,this.effects=[],this.cleanups=[],!t&&Vt&&(this.parent=Vt,this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Vt;try{return Vt=this,t()}finally{Vt=e}}else 0},t.prototype.on=function(){Vt=this},t.prototype.off=function(){Vt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}},t}();function Gt(t,e){void 0===e&&(e=Vt),e&&e.active&&e.effects.push(t)}function Yt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var Qt=E((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function Jt(t,e){function n(){var t=n.fns;if(!i(t))return Ke(t,null,arguments,e,"v-on handler");for(var r=t.slice(),o=0;o<r.length;o++)Ke(r[o],null,arguments,e,"v-on handler")}return n.fns=t,n}function Xt(t,e,n,r,i,s){var c,l,u,h;for(c in t)l=t[c],u=e[c],h=Qt(c),o(l)||(o(u)?(o(l.fns)&&(l=t[c]=Jt(l,s)),a(h.once)&&(l=t[c]=i(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,t[c]=u));for(c in e)o(t[c])&&(h=Qt(c),r(h.name,e[c],h.capture))}function Zt(t,e,n){var r;t instanceof vt&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function c(){n.apply(this,arguments),w(r.fns,c)}o(i)?r=Jt([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=Jt([i,c]),r.merged=!0,t[e]=r}function te(t,e,n){var r=e.options.props;if(!o(r)){var i={},a=t.attrs,c=t.props;if(s(a)||s(c))for(var l in r){var u=x(l);ee(i,c,l,u,!0)||ee(i,a,l,u,!1)}return i}}function ee(t,e,n,r,i){if(s(e)){if(I(e,n))return t[n]=e[n],i||delete e[n],!0;if(I(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ne(t){for(var e=0;e<t.length;e++)if(i(t[e]))return Array.prototype.concat.apply([],t);return t}function re(t){return l(t)?[yt(t)]:i(t)?oe(t):void 0}function ie(t){return s(t)&&s(t.text)&&c(t.isComment)}function oe(t,e){var n,r,c,u,h=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(c=h.length-1,u=h[c],i(r)?r.length>0&&(r=oe(r,"".concat(e||"","_").concat(n)),ie(r[0])&&ie(u)&&(h[c]=yt(u.text+r[0].text),r.shift()),h.push.apply(h,r)):l(r)?ie(u)?h[c]=yt(u.text+r):""!==r&&h.push(yt(r)):ie(r)&&ie(u)?h[c]=yt(u.text+r.text):(a(t._isVList)&&s(r.tag)&&o(r.key)&&s(e)&&(r.key="__vlist".concat(e,"_").concat(n,"__")),h.push(r)));return h}function se(t,e){var n,r,o,a,c=null;if(i(t)||"string"===typeof t)for(c=new Array(t.length),n=0,r=t.length;n<r;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(pt&&t[Symbol.iterator]){c=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)c.push(e(u.value,c.length)),u=l.next()}else for(o=Object.keys(t),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=e(t[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function ae(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=A(A({},r),n)),i=o(n)||(u(e)?e():e)):i=this.$slots[t]||(u(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function ce(t){return wr(this.$options,"filters",t,!0)||$}function le(t,e){return i(t)?-1===t.indexOf(e):t!==e}function ue(t,e,n,r,i){var o=V.keyCodes[e]||n;return i&&r&&!V.keyCodes[e]?le(i,r):o?le(o,t):r?x(r)!==e:void 0===t}function he(t,e,n,r,o){if(n)if(h(n)){i(n)&&(n=D(n));var s=void 0,a=function(i){if("class"===i||"style"===i||b(i))s=t;else{var a=t.attrs&&t.attrs.type;s=r||V.mustUseProp(e,a,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=T(i),l=x(i);if(!(c in s)&&!(l in s)&&(s[i]=n[i],o)){var u=t.on||(t.on={});u["update:".concat(i)]=function(t){n[i]=t}}};for(var c in n)a(c)}else;return t}function de(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),pe(r,"__static__".concat(t),!1)),r}function fe(t,e,n){return pe(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function pe(t,e,n){if(i(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&_e(t[r],"".concat(e,"_").concat(r),n);else _e(t,e,n)}function _e(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function me(t,e){if(e)if(f(e)){var n=t.on=t.on?A({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function ve(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var s=t[o];i(s)?ve(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function ge(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function ye(t,e){return"string"===typeof t?e+t:t}function be(t){t._o=fe,t._n=g,t._s=v,t._l=se,t._t=ae,t._q=F,t._i=q,t._m=de,t._f=ce,t._k=ue,t._b=he,t._v=yt,t._e=gt,t._u=ve,t._g=me,t._d=ge,t._p=ye}function we(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var l in n)n[l].every(Ce)&&delete n[l];return n}function Ce(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ie(t){return t.isComment&&t.asyncFactory}function Ee(t,e,n,i){var o,s=Object.keys(n).length>0,a=e?!!e.$stable:!s,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var l in o={},e)e[l]&&"$"!==l[0]&&(o[l]=ke(t,n,l,e[l]))}else o={};for(var u in n)u in o||(o[u]=Te(n,u));return e&&Object.isExtensible(e)&&(e._normalized=o),Y(o,"$stable",a),Y(o,"$key",c),Y(o,"$hasNormal",s),o}function ke(t,e,n,r){var o=function(){var e=_t;mt(t);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:re(n);var o=n&&n[0];return mt(e),n&&(!o||1===n.length&&o.isComment&&!Ie(o))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:o,enumerable:!0,configurable:!0}),o}function Te(t,e){return function(){return t[e]}}function Se(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=Oe(t);mt(t),Et();var i=Ke(n,null,[t._props||qt({}),r],t,"setup");if(kt(),mt(),u(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var o=t._setupProxy={};for(var s in i)"__sfc"!==s&&Wt(o,i,s)}else for(var s in i)G(s)||Wt(t,i,s);else 0}}function Oe(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};Y(e,"_v_attr_proxy",!0),xe(e,t.$attrs,r,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};xe(e,t.$listeners,r,t,"$listeners")}return t._listenersProxy},get slots(){return Ne(t)},emit:j(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Wt(t,e,n)}))}}}function xe(t,e,n,r,i){var o=!1;for(var s in e)s in t?e[s]!==n[s]&&(o=!0):(o=!0,Pe(t,s,r,i));for(var s in t)s in e||(o=!0,delete t[s]);return o}function Pe(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Ne(t){return t._slotsProxy||je(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function je(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Re(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=we(e._renderChildren,i),t.$scopedSlots=n?Ee(t.$parent,n.data.scopedSlots,t.$slots):r,t._c=function(e,n,r,i){return He(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return He(t,e,n,r,i,!0)};var o=n&&n.data;Mt(t,"$attrs",o&&o.attrs||r,null,!0),Mt(t,"$listeners",e._parentListeners||r,null,!0)}var Ae=null;function De(t){be(t.prototype),t.prototype.$nextTick=function(t){return sn(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&e._isMounted&&(e.$scopedSlots=Ee(e.$parent,o.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&je(e._slotsProxy,e.$scopedSlots)),e.$vnode=o;try{mt(e),Ae=e,t=r.call(e._renderProxy,e.$createElement)}catch(Ys){Ve(Ys,e,"render"),t=e._vnode}finally{Ae=null,mt()}return i(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=gt()),t.parent=o,t}}function Me(t,e){return(t.__esModule||pt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function Le(t,e,n,r,i){var o=gt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function $e(t,e){if(a(t.error)&&s(t.errorComp))return t.errorComp;if(s(t.resolved))return t.resolved;var n=Ae;if(n&&s(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&s(t.loadingComp))return t.loadingComp;if(n&&!s(t.owners)){var r=t.owners=[n],i=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return w(r,n)}));var u=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},d=U((function(n){t.resolved=Me(n,e),i?r.length=0:u(!0)})),f=U((function(e){s(t.errorComp)&&(t.error=!0,u(!0))})),p=t(d,f);return h(p)&&(m(p)?o(t.resolved)&&p.then(d,f):m(p.component)&&(p.component.then(d,f),s(p.error)&&(t.errorComp=Me(p.error,e)),s(p.loading)&&(t.loadingComp=Me(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout((function(){c=null,o(t.resolved)&&o(t.error)&&(t.loading=!0,u(!1))}),p.delay||200)),s(p.timeout)&&(l=setTimeout((function(){l=null,o(t.resolved)&&f(null)}),p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function Fe(t){if(i(t))for(var e=0;e<t.length;e++){var n=t[e];if(s(n)&&(s(n.componentOptions)||Ie(n)))return n}}var qe=1,Ue=2;function He(t,e,n,r,o,s){return(i(n)||l(n))&&(o=r,r=n,n=void 0),a(s)&&(o=Ue),Be(t,e,n,r,o)}function Be(t,e,n,r,o){if(s(n)&&s(n.__ob__))return gt();if(s(n)&&s(n.is)&&(e=n.is),!e)return gt();var a,c;if(i(r)&&u(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===Ue?r=re(r):o===qe&&(r=ne(r)),"string"===typeof e){var l=void 0;c=t.$vnode&&t.$vnode.ns||V.getTagNamespace(e),a=V.isReservedTag(e)?new vt(V.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!s(l=wr(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):ir(l,n,t,r,e)}else a=ir(e,n,t,r);return i(a)?a:s(a)?(s(c)&&We(a,c),s(n)&&ze(n),a):gt()}function We(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),s(t.children))for(var r=0,i=t.children.length;r<i;r++){var c=t.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&We(c,e,n)}}function ze(t){h(t.style)&&hn(t.style),h(t.class)&&hn(t.class)}function Ve(t,e,n){Et();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Ys){Ge(Ys,r,"errorCaptured hook")}}}Ge(t,e,n)}finally{kt()}}function Ke(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&m(o)&&!o._handled&&(o.catch((function(t){return Ve(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Ys){Ve(Ys,r,i)}return o}function Ge(t,e,n){if(V.errorHandler)try{return V.errorHandler.call(null,t,e,n)}catch(Ys){Ys!==t&&Ye(Ys,null,"config.errorHandler")}Ye(t,e,n)}function Ye(t,e,n){if(!Z||"undefined"===typeof console)throw t;console.error(t)}var Qe,Je=!1,Xe=[],Ze=!1;function tn(){Ze=!1;var t=Xe.slice(0);Xe.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&dt(Promise)){var en=Promise.resolve();Qe=function(){en.then(tn),it&&setTimeout(M)},Je=!0}else if(et||"undefined"===typeof MutationObserver||!dt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Qe="undefined"!==typeof setImmediate&&dt(setImmediate)?function(){setImmediate(tn)}:function(){setTimeout(tn,0)};else{var nn=1,rn=new MutationObserver(tn),on=document.createTextNode(String(nn));rn.observe(on,{characterData:!0}),Qe=function(){nn=(nn+1)%2,on.data=String(nn)},Je=!0}function sn(t,e){var n;if(Xe.push((function(){if(t)try{t.call(e)}catch(Ys){Ve(Ys,e,"nextTick")}else n&&n(e)})),Ze||(Ze=!0,Qe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function an(t){return function(e,n){if(void 0===n&&(n=_t),n)return cn(n,t,e)}}function cn(t,e,n){var r=t.$options;r[e]=fr(r[e],n)}an("beforeMount"),an("mounted"),an("beforeUpdate"),an("updated"),an("beforeDestroy"),an("destroyed"),an("errorCaptured"),an("activated"),an("deactivated"),an("serverPrefetch"),an("renderTracked"),an("renderTriggered");var ln="2.7.8";var un=new ft;function hn(t){return dn(t,un),un.clear(),t}function dn(t,e){var n,r,o=i(t);if(!(!o&&!h(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(o){n=t.length;while(n--)dn(t[n],e)}else if(Bt(t))dn(t.value,e);else{r=Object.keys(t),n=r.length;while(n--)dn(t[r[n]],e)}}}var fn,pn=0,_n=function(){function t(t,e,n,r,i){Gt(this,Vt||(t?t._scope:void 0)),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++pn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ft,this.newDepIds=new ft,this.expression="",u(e)?this.getter=e:(this.getter=J(e),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;Et(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Ys){if(!this.user)throw Ys;Ve(Ys,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&hn(t),kt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Kn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Ke(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&w(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function mn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function vn(t,e){fn.$on(t,e)}function gn(t,e){fn.$off(t,e)}function yn(t,e){var n=fn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function bn(t,e,n){fn=t,Xt(e,n||{},vn,gn,yn,t),fn=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(i(t))for(var o=0,s=t.length;o<s;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var s,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var c=a.length;while(c--)if(s=a[c],s===e||s.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?R(n):n;for(var r=R(arguments,1),i='event handler for "'.concat(t,'"'),o=0,s=n.length;o<s;o++)Ke(n[o],e,r,e,i)}return e}}var Cn=null;function In(t){var e=Cn;return Cn=t,function(){Cn=e}}function En(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=In(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Nn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||w(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Nn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Tn(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=gt),Nn(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Nn(t,"beforeUpdate")}};new _n(t,r,M,i,!0),n=!1;var o=t._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==t.$vnode&&(t._isMounted=!0,Nn(t,"mounted")),t}function Sn(t,e,n,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),l=!!(o||t.$options._renderChildren||c),u=t.$vnode;t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o;var h=i.data.attrs||r;t._attrsProxy&&xe(t._attrsProxy,h,u.data&&u.data.attrs||r,t,"$attrs")&&(l=!0),t.$attrs=h,n=n||r;var d=t.$options._parentListeners;if(t._listenersProxy&&xe(t._listenersProxy,n,d||r,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,bn(t,n,d),e&&t.$options.props){jt(!1);for(var f=t._props,p=t.$options._propKeys||[],_=0;_<p.length;_++){var m=p[_],v=t.$options.props;f[m]=Cr(m,v,e,t)}jt(!0),t.$options.propsData=e}l&&(t.$slots=we(o,i.context),t.$forceUpdate())}function On(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function xn(t,e){if(e){if(t._directInactive=!1,On(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)xn(t.$children[n]);Nn(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!On(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Nn(t,"deactivated")}}function Nn(t,e,n,r){void 0===r&&(r=!0),Et();var i=_t;r&&mt(t);var o=t.$options[e],s="".concat(e," hook");if(o)for(var a=0,c=o.length;a<c;a++)Ke(o[a],t,n||null,t,s);t._hasHookEvent&&t.$emit("hook:"+e),r&&mt(i),kt()}var jn=[],Rn=[],An={},Dn=!1,Mn=!1,Ln=0;function $n(){Ln=jn.length=Rn.length=0,An={},Dn=Mn=!1}var Fn=0,qn=Date.now;if(Z&&!et){var Un=window.performance;Un&&"function"===typeof Un.now&&qn()>document.createEvent("Event").timeStamp&&(qn=function(){return Un.now()})}var Hn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Bn(){var t,e;for(Fn=qn(),Mn=!0,jn.sort(Hn),Ln=0;Ln<jn.length;Ln++)t=jn[Ln],t.before&&t.before(),e=t.id,An[e]=null,t.run();var n=Rn.slice(),r=jn.slice();$n(),Vn(n),Wn(r),ht&&V.devtools&&ht.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Nn(r,"updated")}}function zn(t){t._inactive=!1,Rn.push(t)}function Vn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,xn(t[e],!0)}function Kn(t){var e=t.id;if(null==An[e]&&(t!==Ct.target||!t.noRecurse)){if(An[e]=!0,Mn){var n=jn.length-1;while(n>Ln&&jn[n].id>t.id)n--;jn.splice(n+1,0,t)}else jn.push(t);Dn||(Dn=!0,sn(Bn))}}function Gn(t){var e=t.$options.provide;if(e){var n=u(e)?e.call(t):e;if(!h(n))return;for(var r=Yt(t),i=pt?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Yn(t){var e=Qn(t.$options.inject,t);e&&(jt(!1),Object.keys(e).forEach((function(n){Mt(t,n,e[n])})),jt(!0))}function Qn(t,e){if(t){for(var n=Object.create(null),r=pt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from;if(s in e._provided)n[o]=e._provided[s];else if("default"in t[o]){var a=t[o].default;n[o]=u(a)?a.call(e):a}else 0}}return n}}function Jn(t,e,n,o,s){var c,l=this,u=s.options;I(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=a(u._compiled),d=!h;this.data=t,this.props=e,this.children=n,this.parent=o,this.listeners=t.on||r,this.injections=Qn(u.inject,o),this.slots=function(){return l.$slots||Ee(o,t.scopedSlots,l.$slots=we(n,o)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ee(o,t.scopedSlots,this.slots())}}),h&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Ee(o,t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var s=He(c,t,e,n,r,d);return s&&!i(s)&&(s.fnScopeId=u._scopeId,s.fnContext=o),s}:this._c=function(t,e,n,r){return He(c,t,e,n,r,d)}}function Xn(t,e,n,o,a){var c=t.options,l={},u=c.props;if(s(u))for(var h in u)l[h]=Cr(h,u,e||r);else s(n.attrs)&&tr(l,n.attrs),s(n.props)&&tr(l,n.props);var d=new Jn(n,l,a,o,t),f=c.render.call(null,d._c,d);if(f instanceof vt)return Zn(f,n,d.parent,c,d);if(i(f)){for(var p=re(f)||[],_=new Array(p.length),m=0;m<p.length;m++)_[m]=Zn(p[m],n,d.parent,c,d);return _}}function Zn(t,e,n,r,i){var o=bt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function tr(t,e){for(var n in e)t[T(n)]=e[n]}function er(t){return t.name||t.__name||t._componentTag}be(Jn.prototype);var nr={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;nr.prepatch(n,n)}else{var r=t.componentInstance=or(t,Cn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Sn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Nn(n,"mounted")),t.data.keepAlive&&(e._isMounted?zn(n):xn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},rr=Object.keys(nr);function ir(t,e,n,r,i){if(!o(t)){var c=n.$options._base;if(h(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(o(t.cid)&&(l=t,t=$e(l,c),void 0===t))return Le(l,e,n,r,i);e=e||{},Vr(t),s(e.model)&&cr(t.options,e);var u=te(e,t,i);if(a(t.options.functional))return Xn(t,u,e,n,r);var d=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}sr(e);var p=er(t.options)||i,_=new vt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:u,listeners:d,tag:i,children:r},l);return _}}}function or(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function sr(t){for(var e=t.hook||(t.hook={}),n=0;n<rr.length;n++){var r=rr[n],i=e[r],o=nr[r];i===o||i&&i._merged||(e[r]=i?ar(o,i):o)}}function ar(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function cr(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],c=e.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var lr=M,ur=V.optionMergeStrategies;function hr(t,e){if(!e)return t;for(var n,r,i,o=pt?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=t[n],i=e[n],I(t,n)?r!==i&&f(r)&&f(i)&&hr(r,i):Lt(t,n,i));return t}function dr(t,e,n){return n?function(){var r=u(e)?e.call(n,n):e,i=u(t)?t.call(n,n):t;return r?hr(r,i):i}:e?t?function(){return hr(u(e)?e.call(this,this):e,u(t)?t.call(this,this):t)}:e:t}function fr(t,e){var n=e?t?t.concat(e):i(e)?e:[e]:t;return n?pr(n):n}function pr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function _r(t,e,n,r){var i=Object.create(t||null);return e?A(i,e):i}ur.data=function(t,e,n){return n?dr(t,e,n):e&&"function"!==typeof e?t:dr(t,e)},z.forEach((function(t){ur[t]=fr})),W.forEach((function(t){ur[t+"s"]=_r})),ur.watch=function(t,e,n,r){if(t===at&&(t=void 0),e===at&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var s in A(o,t),e){var a=o[s],c=e[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},ur.props=ur.methods=ur.inject=ur.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return A(i,t),e&&A(i,e),i},ur.provide=dr;var mr=function(t,e){return void 0===e?t:e};function vr(t,e){var n=t.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=T(o),a[s]={type:null})}else if(f(n))for(var c in n)o=n[c],s=T(c),a[s]=f(o)?o:{type:o};else 0;t.props=a}}function gr(t,e){var n=t.inject;if(n){var r=t.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var s in n){var a=n[s];r[s]=f(a)?A({from:s},a):{from:a}}else 0}}function yr(t){var e=t.directives;if(e)for(var n in e){var r=e[n];u(r)&&(e[n]={bind:r,update:r})}}function br(t,e,n){if(u(e)&&(e=e.options),vr(e,n),gr(e,n),yr(e),!e._base&&(e.extends&&(t=br(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=br(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)I(t,o)||a(o);function a(r){var i=ur[r]||mr;s[r]=i(t[r],e[r],n,r)}return s}function wr(t,e,n,r){if("string"===typeof n){var i=t[e];if(I(i,n))return i[n];var o=T(n);if(I(i,o))return i[o];var s=S(o);if(I(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Cr(t,e,n,r){var i=e[t],o=!I(n,t),s=n[t],a=Sr(Boolean,i.type);if(a>-1)if(o&&!I(i,"default"))s=!1;else if(""===s||s===x(t)){var c=Sr(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Ir(r,i,t);var l=Nt;jt(!0),Dt(s),jt(l)}return s}function Ir(t,e,n){if(I(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:u(r)&&"Function"!==kr(e.type)?r.call(t):r}}var Er=/^\s*function (\w+)/;function kr(t){var e=t&&t.toString().match(Er);return e?e[1]:""}function Tr(t,e){return kr(t)===kr(e)}function Sr(t,e){if(!i(e))return Tr(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Tr(e[n],t))return n;return-1}var Or={enumerable:!0,configurable:!0,get:M,set:M};function xr(t,e,n){Or.get=function(){return this[e][n]},Or.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Or)}function Pr(t){var e=t.$options;if(e.props&&Nr(t,e.props),Se(t),e.methods&&Fr(t,e.methods),e.data)jr(t);else{var n=Dt(t._data={});n&&n.vmCount++}e.computed&&Dr(t,e.computed),e.watch&&e.watch!==at&&qr(t,e.watch)}function Nr(t,e){var n=t.$options.propsData||{},r=t._props=qt({}),i=t.$options._propKeys=[],o=!t.$parent;o||jt(!1);var s=function(o){i.push(o);var s=Cr(o,e,n,t);Mt(r,o,s),o in t||xr(t,"_props",o)};for(var a in e)s(a);jt(!0)}function jr(t){var e=t.$options.data;e=t._data=u(e)?Rr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&I(r,o)||G(o)||xr(t,"_data",o)}var s=Dt(e);s&&s.vmCount++}function Rr(t,e){Et();try{return t.call(e,e)}catch(Ys){return Ve(Ys,e,"data()"),{}}finally{kt()}}var Ar={lazy:!0};function Dr(t,e){var n=t._computedWatchers=Object.create(null),r=ut();for(var i in e){var o=e[i],s=u(o)?o:o.get;0,r||(n[i]=new _n(t,s||M,M,Ar)),i in t||Mr(t,i,o)}}function Mr(t,e,n){var r=!ut();u(n)?(Or.get=r?Lr(e):$r(n),Or.set=M):(Or.get=n.get?r&&!1!==n.cache?Lr(e):$r(n.get):M,Or.set=n.set||M),Object.defineProperty(t,e,Or)}function Lr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Ct.target&&e.depend(),e.value}}function $r(t){return function(){return t.call(this,this)}}function Fr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?M:j(e[n],t)}function qr(t,e){for(var n in e){var r=e[n];if(i(r))for(var o=0;o<r.length;o++)Ur(t,n,r[o]);else Ur(t,n,r)}}function Ur(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Hr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Lt,t.prototype.$delete=$t,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return Ur(r,t,e,n);n=n||{},n.user=!0;var i=new _n(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');Et(),Ke(e,r,[i.value],r,o),kt()}return function(){i.teardown()}}}var Br=0;function Wr(t){t.prototype._init=function(t){var e=this;e._uid=Br++,e._isVue=!0,e.__v_skip=!0,e._scope=new Kt(!0),t&&t._isComponent?zr(e,t):e.$options=br(Vr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,En(e),mn(e),Re(e),Nn(e,"beforeCreate",void 0,!1),Yn(e),Pr(e),Gn(e),Nn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function zr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Vr(t){var e=t.options;if(t.super){var n=Vr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Kr(t);i&&A(t.extendOptions,i),e=t.options=br(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Kr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Gr(t){this._init(t)}function Yr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=R(arguments,1);return n.unshift(this),u(t.install)?t.install.apply(t,n):u(t)&&t.apply(null,n),e.push(t),this}}function Qr(t){t.mixin=function(t){return this.options=br(this.options,t),this}}function Jr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=er(t)||er(n.options);var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=br(n.options,t),s["super"]=n,s.options.props&&Xr(s),s.options.computed&&Zr(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,W.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=A({},s.options),i[r]=s,s}}function Xr(t){var e=t.options.props;for(var n in e)xr(t.prototype,"_props",n)}function Zr(t){var e=t.options.computed;for(var n in e)Mr(t.prototype,n,e[n])}function ti(t){W.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&u(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function ei(t){return t&&(er(t.Ctor.options)||t.tag)}function ni(t,e){return i(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function ri(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&ii(n,o,r,i)}}}function ii(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,w(n,e)}Wr(Gr),Hr(Gr),wn(Gr),kn(Gr),De(Gr);var oi=[String,RegExp,Array],si={name:"keep-alive",abstract:!0,props:{include:oi,exclude:oi,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:ei(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&ii(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)ii(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){ri(t,(function(t){return ni(e,t)}))})),this.$watch("exclude",(function(e){ri(t,(function(t){return!ni(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Fe(t),n=e&&e.componentOptions;if(n){var r=ei(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!ni(o,r))||s&&r&&ni(s,r))return e;var a=this,c=a.cache,l=a.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,w(l,u),l.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},ai={KeepAlive:si};function ci(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:lr,extend:A,mergeOptions:br,defineReactive:Mt},t.set=Lt,t.delete=$t,t.nextTick=sn,t.observable=function(t){return Dt(t),t},t.options=Object.create(null),W.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,A(t.options.components,ai),Yr(t),Qr(t),Jr(t),ti(t)}ci(Gr),Object.defineProperty(Gr.prototype,"$isServer",{get:ut}),Object.defineProperty(Gr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Gr,"FunctionalRenderContext",{value:Jn}),Gr.version=ln;var li=y("style,class"),ui=y("input,textarea,option,select,progress"),hi=function(t,e,n){return"value"===n&&ui(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},di=y("contenteditable,draggable,spellcheck"),fi=y("events,caret,typing,plaintext-only"),pi=function(t,e){return yi(e)||"false"===e?"false":"contenteditable"===t&&fi(e)?e:"true"},_i=y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),mi="http://www.w3.org/1999/xlink",vi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},gi=function(t){return vi(t)?t.slice(6,t.length):""},yi=function(t){return null==t||!1===t};function bi(t){var e=t.data,n=t,r=t;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=wi(r.data,e));while(s(n=n.parent))n&&n.data&&(e=wi(e,n.data));return Ci(e.staticClass,e.class)}function wi(t,e){return{staticClass:Ii(t.staticClass,e.staticClass),class:s(t.class)?[t.class,e.class]:e.class}}function Ci(t,e){return s(t)||s(e)?Ii(t,Ei(e)):""}function Ii(t,e){return t?e?t+" "+e:t:e||""}function Ei(t){return Array.isArray(t)?ki(t):h(t)?Ti(t):"string"===typeof t?t:""}function ki(t){for(var e,n="",r=0,i=t.length;r<i;r++)s(e=Ei(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Ti(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Si={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Oi=y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),xi=y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Pi=function(t){return Oi(t)||xi(t)};function Ni(t){return xi(t)?"svg":"math"===t?"math":void 0}var ji=Object.create(null);function Ri(t){if(!Z)return!0;if(Pi(t))return!1;if(t=t.toLowerCase(),null!=ji[t])return ji[t];var e=document.createElement(t);return t.indexOf("-")>-1?ji[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ji[t]=/HTMLUnknownElement/.test(e.toString())}var Ai=y("text,number,password,search,email,tel,url");function Di(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Mi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Li(t,e){return document.createElementNS(Si[t],e)}function $i(t){return document.createTextNode(t)}function Fi(t){return document.createComment(t)}function qi(t,e,n){t.insertBefore(e,n)}function Ui(t,e){t.removeChild(e)}function Hi(t,e){t.appendChild(e)}function Bi(t){return t.parentNode}function Wi(t){return t.nextSibling}function zi(t){return t.tagName}function Vi(t,e){t.textContent=e}function Ki(t,e){t.setAttribute(e,"")}var Gi=Object.freeze({__proto__:null,createElement:Mi,createElementNS:Li,createTextNode:$i,createComment:Fi,insertBefore:qi,removeChild:Ui,appendChild:Hi,parentNode:Bi,nextSibling:Wi,tagName:zi,setTextContent:Vi,setStyleScope:Ki}),Yi={create:function(t,e){Qi(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Qi(t,!0),Qi(e))},destroy:function(t){Qi(t,!0)}};function Qi(t,e){var n=t.data.ref;if(s(n)){var r=t.context,o=t.componentInstance||t.elm,a=e?null:o,c=e?void 0:o;if(u(n))Ke(n,r,[a],r,"template ref function");else{var l=t.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Bt(n),f=r.$refs;if(h||d)if(l){var p=h?f[n]:n.value;e?i(p)&&w(p,o):i(p)?p.includes(o)||p.push(o):h?(f[n]=[o],Ji(r,n,f[n])):n.value=[o]}else if(h){if(e&&f[n]!==o)return;f[n]=c,Ji(r,n,a)}else if(d){if(e&&n.value!==o)return;n.value=a}else 0}}}function Ji(t,e,n){var r=t._setupState;r&&I(r,e)&&(Bt(r[e])?r[e].value=n:r[e]=n)}var Xi=new vt("",{},[]),Zi=["create","activate","update","remove","destroy"];function to(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&s(t.data)===s(e.data)&&eo(t,e)||a(t.isAsyncPlaceholder)&&o(e.asyncFactory.error))}function eo(t,e){if("input"!==t.tag)return!0;var n,r=s(n=t.data)&&s(n=n.attrs)&&n.type,i=s(n=e.data)&&s(n=n.attrs)&&n.type;return r===i||Ai(r)&&Ai(i)}function no(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,s(i)&&(o[i]=r);return o}function ro(t){var e,n,r={},c=t.modules,u=t.nodeOps;for(e=0;e<Zi.length;++e)for(r[Zi[e]]=[],n=0;n<c.length;++n)s(c[n][Zi[e]])&&r[Zi[e]].push(c[n][Zi[e]]);function h(t){return new vt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function d(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=u.parentNode(t);s(e)&&u.removeChild(e,t)}function p(t,e,n,r,i,o,c){if(s(t.elm)&&s(o)&&(t=o[c]=bt(t)),t.isRootInsert=!i,!_(t,e,n,r)){var l=t.data,h=t.children,d=t.tag;s(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),I(t),b(t,h,e),s(l)&&C(t,e),g(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),g(n,t.elm,r)):(t.elm=u.createTextNode(t.text),g(n,t.elm,r))}}function _(t,e,n,r){var i=t.data;if(s(i)){var o=s(t.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(t,!1),s(t.componentInstance))return m(t,e),g(n,t.elm,r),a(o)&&v(t,e,n,r),!0}}function m(t,e){s(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(C(t,e),I(t)):(Qi(t),e.push(t))}function v(t,e,n,i){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](Xi,a);e.push(a);break}g(n,t.elm,i)}function g(t,e,n){s(t)&&(s(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(i(e)){0;for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0,e,r)}else l(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return s(t.tag)}function C(t,n){for(var i=0;i<r.create.length;++i)r.create[i](Xi,t);e=t.data.hook,s(e)&&(s(e.create)&&e.create(Xi,t),s(e.insert)&&n.push(t))}function I(t){var e;if(s(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)s(e=n.context)&&s(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}s(e=Cn)&&e!==t.context&&e!==t.fnContext&&s(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function E(t,e,n,r,i,o){for(;r<=i;++r)p(n[r],o,t,e,!1,n,r)}function k(t){var e,n,i=t.data;if(s(i))for(s(e=i.hook)&&s(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(s(e=t.children))for(n=0;n<t.children.length;++n)k(t.children[n])}function T(t,e,n){for(;e<=n;++e){var r=t[e];s(r)&&(s(r.tag)?(S(r),k(r)):f(r.elm))}}function S(t,e){if(s(e)||s(t.data)){var n,i=r.remove.length+1;for(s(e)?e.listeners+=i:e=d(t.elm,i),s(n=t.componentInstance)&&s(n=n._vnode)&&s(n.data)&&S(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);s(n=t.data.hook)&&s(n=n.remove)?n(t,e):e()}else f(t.elm)}function O(t,e,n,r,i){var a,c,l,h,d=0,f=0,_=e.length-1,m=e[0],v=e[_],g=n.length-1,y=n[0],b=n[g],w=!i;while(d<=_&&f<=g)o(m)?m=e[++d]:o(v)?v=e[--_]:to(m,y)?(P(m,y,r,n,f),m=e[++d],y=n[++f]):to(v,b)?(P(v,b,r,n,g),v=e[--_],b=n[--g]):to(m,b)?(P(m,b,r,n,g),w&&u.insertBefore(t,m.elm,u.nextSibling(v.elm)),m=e[++d],b=n[--g]):to(v,y)?(P(v,y,r,n,f),w&&u.insertBefore(t,v.elm,m.elm),v=e[--_],y=n[++f]):(o(a)&&(a=no(e,d,_)),c=s(y.key)?a[y.key]:x(y,e,d,_),o(c)?p(y,r,t,m.elm,!1,n,f):(l=e[c],to(l,y)?(P(l,y,r,n,f),e[c]=void 0,w&&u.insertBefore(t,l.elm,m.elm)):p(y,r,t,m.elm,!1,n,f)),y=n[++f]);d>_?(h=o(n[g+1])?null:n[g+1].elm,E(t,h,n,f,g,r)):f>g&&T(e,d,_)}function x(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(s(o)&&to(t,o))return i}}function P(t,e,n,i,c,l){if(t!==e){s(e.elm)&&s(i)&&(e=i[c]=bt(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))s(e.asyncFactory.resolved)?R(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;s(f)&&s(d=f.hook)&&s(d=d.prepatch)&&d(t,e);var p=t.children,_=e.children;if(s(f)&&w(e)){for(d=0;d<r.update.length;++d)r.update[d](t,e);s(d=f.hook)&&s(d=d.update)&&d(t,e)}o(e.text)?s(p)&&s(_)?p!==_&&O(h,p,_,n,l):s(_)?(s(t.text)&&u.setTextContent(h,""),E(h,null,_,0,_.length-1,n)):s(p)?T(p,0,p.length-1):s(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),s(f)&&s(d=f.hook)&&s(d=d.postpatch)&&d(t,e)}}}function N(t,e,n){if(a(n)&&s(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var j=y("attrs,class,staticClass,staticStyle,key");function R(t,e,n,r){var i,o=e.tag,c=e.data,l=e.children;if(r=r||c&&c.pre,e.elm=t,a(e.isComment)&&s(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(e,!0),s(i=e.componentInstance)))return m(e,n),!0;if(s(o)){if(s(l))if(t.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<l.length;d++){if(!h||!R(h,l[d],n,r)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else b(e,l,n);if(s(c)){var f=!1;for(var p in c)if(!j(p)){f=!0,C(e,n);break}!f&&c["class"]&&hn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!o(e)){var c=!1,l=[];if(o(t))c=!0,p(e,l);else{var d=s(t.nodeType);if(!d&&to(t,e))P(t,e,l,null,null,i);else{if(d){if(1===t.nodeType&&t.hasAttribute(B)&&(t.removeAttribute(B),n=!0),a(n)&&R(t,e,l))return N(e,l,!0),t;t=h(t)}var f=t.elm,_=u.parentNode(f);if(p(e,l,f._leaveCb?null:_,u.nextSibling(f)),s(e.parent)){var m=e.parent,v=w(e);while(m){for(var g=0;g<r.destroy.length;++g)r.destroy[g](m);if(m.elm=e.elm,v){for(var y=0;y<r.create.length;++y)r.create[y](Xi,m);var b=m.data.hook.insert;if(b.merged)for(var C=1;C<b.fns.length;C++)b.fns[C]()}else Qi(m);m=m.parent}}s(_)?T([t],0,0):s(t.tag)&&k(t)}}return N(e,l,c),e.elm}s(t)&&k(t)}}var io={create:oo,update:oo,destroy:function(t){oo(t,Xi)}};function oo(t,e){(t.data.directives||e.data.directives)&&so(t,e)}function so(t,e){var n,r,i,o=t===Xi,s=e===Xi,a=co(t.data.directives,t.context),c=co(e.data.directives,e.context),l=[],u=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,uo(i,"update",e,t),i.def&&i.def.componentUpdated&&u.push(i)):(uo(i,"bind",e,t),i.def&&i.def.inserted&&l.push(i));if(l.length){var h=function(){for(var n=0;n<l.length;n++)uo(l[n],"inserted",e,t)};o?Zt(e,"insert",h):h()}if(u.length&&Zt(e,"postpatch",(function(){for(var n=0;n<u.length;n++)uo(u[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||uo(a[n],"unbind",t,t,s)}var ao=Object.create(null);function co(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=ao),i[lo(r)]=r,e._setupState&&e._setupState.__sfc&&(r.def=r.def||wr(e,"_setupState","v-"+r.name)),r.def=r.def||wr(e.$options,"directives",r.name,!0);return i}function lo(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function uo(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Ys){Ve(Ys,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var ho=[Yi,io];function fo(t,e){var n=e.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(t.data.attrs)||!o(e.data.attrs))){var r,i,c,l=e.elm,u=t.data.attrs||{},h=e.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=A({},h)),h)i=h[r],c=u[r],c!==i&&po(l,r,i,e.data.pre);for(r in(et||rt)&&h.value!==u.value&&po(l,"value",h.value),u)o(h[r])&&(vi(r)?l.removeAttributeNS(mi,gi(r)):di(r)||l.removeAttribute(r))}}function po(t,e,n,r){r||t.tagName.indexOf("-")>-1?_o(t,e,n):_i(e)?yi(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):di(e)?t.setAttribute(e,pi(e,n)):vi(e)?yi(n)?t.removeAttributeNS(mi,gi(e)):t.setAttributeNS(mi,e,n):_o(t,e,n)}function _o(t,e,n){if(yi(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var mo={create:fo,update:fo};function vo(t,e){var n=e.elm,r=e.data,i=t.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=bi(e),c=n._transitionClasses;s(c)&&(a=Ii(a,Ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var go,yo={create:vo,update:vo},bo="__r",wo="__c";function Co(t){if(s(t[bo])){var e=et?"change":"input";t[e]=[].concat(t[bo],t[e]||[]),delete t[bo]}s(t[wo])&&(t.change=[].concat(t[wo],t.change||[]),delete t[wo])}function Io(t,e,n){var r=go;return function i(){var o=e.apply(null,arguments);null!==o&&To(t,i,n,r)}}var Eo=Je&&!(st&&Number(st[1])<=53);function ko(t,e,n,r){if(Eo){var i=Fn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}go.addEventListener(t,e,ct?{capture:n,passive:r}:n)}function To(t,e,n,r){(r||go).removeEventListener(t,e._wrapper||e,n)}function So(t,e){if(!o(t.data.on)||!o(e.data.on)){var n=e.data.on||{},r=t.data.on||{};go=e.elm||t.elm,Co(n),Xt(n,r,ko,To,Io,e.context),go=void 0}}var Oo,xo={create:So,update:So,destroy:function(t){return So(t,Xi)}};function Po(t,e){if(!o(t.data.domProps)||!o(e.data.domProps)){var n,r,i=e.elm,c=t.data.domProps||{},l=e.data.domProps||{};for(n in(s(l.__ob__)||a(l._v_attr_proxy))&&(l=e.data.domProps=A({},l)),c)n in l||(i[n]="");for(n in l){if(r=l[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var u=o(r)?"":String(r);No(i,u)&&(i.value=u)}else if("innerHTML"===n&&xi(i.tagName)&&o(i.innerHTML)){Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>".concat(r,"</svg>");var h=Oo.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Ys){}}}}function No(t,e){return!t.composing&&("OPTION"===t.tagName||jo(t,e)||Ro(t,e))}function jo(t,e){var n=!0;try{n=document.activeElement!==t}catch(Ys){}return n&&t.value!==e}function Ro(t,e){var n=t.value,r=t._vModifiers;if(s(r)){if(r.number)return g(n)!==g(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var Ao={create:Po,update:Po},Do=E((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Mo(t){var e=Lo(t.style);return t.staticStyle?A(t.staticStyle,e):e}function Lo(t){return Array.isArray(t)?D(t):"string"===typeof t?Do(t):t}function $o(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Mo(i.data))&&A(r,n)}(n=Mo(t.data))&&A(r,n);var o=t;while(o=o.parent)o.data&&(n=Mo(o.data))&&A(r,n);return r}var Fo,qo=/^--/,Uo=/\s*!important$/,Ho=function(t,e,n){if(qo.test(e))t.style.setProperty(e,n);else if(Uo.test(n))t.style.setProperty(x(e),n.replace(Uo,""),"important");else{var r=Wo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Bo=["Webkit","Moz","ms"],Wo=E((function(t){if(Fo=Fo||document.createElement("div").style,t=T(t),"filter"!==t&&t in Fo)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Bo.length;n++){var r=Bo[n]+e;if(r in Fo)return r}}));function zo(t,e){var n=e.data,r=t.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=e.elm,l=r.staticStyle,u=r.normalizedStyle||r.style||{},h=l||u,d=Lo(e.data.style)||{};e.data.normalizedStyle=s(d.__ob__)?A({},d):d;var f=$o(e,!0);for(a in h)o(f[a])&&Ho(c,a,"");for(a in f)i=f[a],i!==h[a]&&Ho(c,a,null==i?"":i)}}var Vo={create:zo,update:zo},Ko=/\s+/;function Go(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ko).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Yo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ko).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Qo(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&A(e,Jo(t.name||"v")),A(e,t),e}return"string"===typeof t?Jo(t):void 0}}var Jo=E((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),Xo=Z&&!nt,Zo="transition",ts="animation",es="transition",ns="transitionend",rs="animation",is="animationend";Xo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(es="WebkitTransition",ns="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(rs="WebkitAnimation",is="webkitAnimationEnd"));var os=Z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function ss(t){os((function(){os(t)}))}function as(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Go(t,e))}function cs(t,e){t._transitionClasses&&w(t._transitionClasses,e),Yo(t,e)}function ls(t,e,n){var r=hs(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===Zo?ns:is,c=0,l=function(){t.removeEventListener(a,u),n()},u=function(e){e.target===t&&++c>=s&&l()};setTimeout((function(){c<s&&l()}),o+1),t.addEventListener(a,u)}var us=/\b(transform|all)(,|$)/;function hs(t,e){var n,r=window.getComputedStyle(t),i=(r[es+"Delay"]||"").split(", "),o=(r[es+"Duration"]||"").split(", "),s=ds(i,o),a=(r[rs+"Delay"]||"").split(", "),c=(r[rs+"Duration"]||"").split(", "),l=ds(a,c),u=0,h=0;e===Zo?s>0&&(n=Zo,u=s,h=o.length):e===ts?l>0&&(n=ts,u=l,h=c.length):(u=Math.max(s,l),n=u>0?s>l?Zo:ts:null,h=n?n===Zo?o.length:c.length:0);var d=n===Zo&&us.test(r[es+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function ds(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return fs(e)+fs(t[n])})))}function fs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function ps(t,e){var n=t.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Qo(t.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,l=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,_=r.appearActiveClass,m=r.beforeEnter,v=r.enter,y=r.afterEnter,b=r.enterCancelled,w=r.beforeAppear,C=r.appear,I=r.afterAppear,E=r.appearCancelled,k=r.duration,T=Cn,S=Cn.$vnode;while(S&&S.parent)T=S.context,S=S.parent;var O=!T._isMounted||!t.isRootInsert;if(!O||C||""===C){var x=O&&f?f:c,P=O&&_?_:d,N=O&&p?p:l,j=O&&w||m,R=O&&u(C)?C:v,A=O&&I||y,D=O&&E||b,M=g(h(k)?k.enter:k);0;var L=!1!==i&&!nt,$=vs(R),F=n._enterCb=U((function(){L&&(cs(n,N),cs(n,P)),F.cancelled?(L&&cs(n,x),D&&D(n)):A&&A(n),n._enterCb=null}));t.data.show||Zt(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,F)})),j&&j(n),L&&(as(n,x),as(n,P),ss((function(){cs(n,x),F.cancelled||(as(n,N),$||(ms(M)?setTimeout(F,M):ls(n,a,F)))}))),t.data.show&&(e&&e(),R&&R(n,F)),L||$||F()}}}function _s(t,e){var n=t.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Qo(t.data.transition);if(o(r)||1!==n.nodeType)return e();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,l=r.leaveToClass,u=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,_=r.leaveCancelled,m=r.delayLeave,v=r.duration,y=!1!==i&&!nt,b=vs(f),w=g(h(v)?v.leave:v);0;var C=n._leaveCb=U((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(cs(n,l),cs(n,u)),C.cancelled?(y&&cs(n,c),_&&_(n)):(e(),p&&p(n)),n._leaveCb=null}));m?m(I):I()}function I(){C.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),y&&(as(n,c),as(n,u),ss((function(){cs(n,c),C.cancelled||(as(n,l),b||(ms(w)?setTimeout(C,w):ls(n,a,C)))}))),f&&f(n,C),y||b||C())}}function ms(t){return"number"===typeof t&&!isNaN(t)}function vs(t){if(o(t))return!1;var e=t.fns;return s(e)?vs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function gs(t,e){!0!==e.data.show&&ps(e)}var ys=Z?{create:gs,activate:gs,remove:function(t,e){!0!==t.data.show?_s(t,e):e()}}:{},bs=[mo,yo,xo,Ao,Vo,ys],ws=bs.concat(ho),Cs=ro({nodeOps:Gi,modules:ws});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Ps(t,"input")}));var Is={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Zt(n,"postpatch",(function(){Is.componentUpdated(t,e,n)})):Es(t,e,n.context),t._vOptions=[].map.call(t.options,Ss)):("textarea"===n.tag||Ai(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",Os),t.addEventListener("compositionend",xs),t.addEventListener("change",xs),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Es(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,Ss);if(i.some((function(t,e){return!F(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return Ts(t,i)})):e.value!==e.oldValue&&Ts(e.value,i);o&&Ps(t,"change")}}}};function Es(t,e,n){ks(t,e,n),(et||rt)&&setTimeout((function(){ks(t,e,n)}),0)}function ks(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=q(r,Ss(s))>-1,s.selected!==o&&(s.selected=o);else if(F(Ss(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function Ts(t,e){return e.every((function(e){return!F(e,t)}))}function Ss(t){return"_value"in t?t._value:t.value}function Os(t){t.target.composing=!0}function xs(t){t.target.composing&&(t.target.composing=!1,Ps(t.target,"input"))}function Ps(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Ns(t){return!t.componentInstance||t.data&&t.data.transition?t:Ns(t.componentInstance._vnode)}var js={bind:function(t,e,n){var r=e.value;n=Ns(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,ps(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=Ns(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?ps(n,(function(){t.style.display=t.__vOriginalDisplay})):_s(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},Rs={model:Is,show:js},As={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Ds(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Ds(Fe(e.children)):t}function Ms(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[T(r)]=i[r];return e}function Ls(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function $s(t){while(t=t.parent)if(t.data.transition)return!0}function Fs(t,e){return e.key===t.key&&e.tag===t.tag}var qs=function(t){return t.tag||Ie(t)},Us=function(t){return"show"===t.name},Hs={name:"transition",props:As,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(qs),n.length)){0;var r=this.mode;0;var i=n[0];if($s(this.$vnode))return i;var o=Ds(i);if(!o)return i;if(this._leaving)return Ls(t,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:l(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=Ms(this),c=this._vnode,u=Ds(c);if(o.data.directives&&o.data.directives.some(Us)&&(o.data.show=!0),u&&u.data&&!Fs(o,u)&&!Ie(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=A({},a);if("out-in"===r)return this._leaving=!0,Zt(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Ls(t,i);if("in-out"===r){if(Ie(o))return c;var d,f=function(){d()};Zt(a,"afterEnter",f),Zt(a,"enterCancelled",f),Zt(h,"delayLeave",(function(t){d=t}))}}return i}}},Bs=A({tag:String,moveClass:String},As);delete Bs.mode;var Ws={props:Bs,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=In(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=Ms(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var l=[],u=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?l.push(c):u.push(c)}this.kept=t(e,null,l),this.removed=u}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(zs),t.forEach(Vs),t.forEach(Ks),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;as(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(ns,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ns,t),n._moveCb=null,cs(n,e))})}})))},methods:{hasMove:function(t,e){if(!Xo)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Yo(n,t)})),Go(n,e),n.style.display="none",this.$el.appendChild(n);var r=hs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function zs(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Vs(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ks(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Gs={Transition:Hs,TransitionGroup:Ws};Gr.config.mustUseProp=hi,Gr.config.isReservedTag=Pi,Gr.config.isReservedAttr=li,Gr.config.getTagNamespace=Ni,Gr.config.isUnknownElement=Ri,A(Gr.options.directives,Rs),A(Gr.options.components,Gs),Gr.prototype.__patch__=Z?Cs:M,Gr.prototype.$mount=function(t,e){return t=t&&Z?Di(t):void 0,Tn(this,t,e)},Z&&setTimeout((function(){V.devtools&&ht&&ht.emit("init",Gr)}),0)}).call(this,n("c8ba"))},"2f62":function(t,e,n){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function n(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var r="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},i=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){i.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){i.emit("vuex:action",t,e)}),{prepend:!0}))}function s(t,e){return t.filter(e)[0]}function a(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=s(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=a(t[n],e)})),r}function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}function h(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){c(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,f);var p=function(t){this.register([],t,!1)};function _(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;_(t.concat(r),e.getChild(r),n.modules[r])}}p.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},p.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},p.prototype.update=function(t){_([],this.root,t)},p.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&c(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},p.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},p.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var m;var v=function(t){var e=this;void 0===t&&(t={}),!m&&"undefined"!==typeof window&&window.Vue&&N(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new p(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new m,this._makeLocalGettersCache=Object.create(null);var i=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var l=this._modules.root.state;C(this,l,[],this._modules.root),w(this,l),n.forEach((function(t){return t(e)}));var u=void 0!==t.devtools?t.devtools:m.config.devtools;u&&o(this)},g={state:{configurable:!0}};function y(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function b(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;C(t,n,[],t._modules.root,!0),w(t,n,e)}function w(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};c(i,(function(e,n){o[n]=h(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=m.config.silent;m.config.silent=!0,t._vm=new m({data:{$$state:e},computed:o}),m.config.silent=s,t.strict&&O(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),m.nextTick((function(){return r.$destroy()})))}function C(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=x(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){m.set(a,c,r.state)}))}var l=r.context=I(t,s,n);r.forEachMutation((function(e,n){var r=s+n;k(t,r,e,l)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;T(t,r,i,l)})),r.forEachGetter((function(e,n){var r=s+n;S(t,r,e,l)})),r.forEachChild((function(r,o){C(t,e,n.concat(o),r,i)}))}function I(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=P(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,i){var o=P(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return E(t,e)}},state:{get:function(){return x(t.state,n)}}}),i}function E(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function k(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function T(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return u(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function S(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function O(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function x(t,e){return e.reduce((function(t,e){return t[e]}),t)}function P(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function N(t){m&&t===m||(m=t,n(m))}g.state.get=function(){return this._vm._data.$$state},g.state.set=function(t){0},v.prototype.commit=function(t,e,n){var r=this,i=P(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},v.prototype.dispatch=function(t,e){var n=this,r=P(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(l){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(l){0}e(t)}))}))}},v.prototype.subscribe=function(t,e){return y(t,this._subscribers,e)},v.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return y(n,this._actionSubscribers,e)},v.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},v.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},v.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),C(this,this.state,t,this._modules.get(t),n.preserveState),w(this,this.state)},v.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=x(e.state,t.slice(0,-1));m.delete(n,t[t.length-1])})),b(this)},v.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},v.prototype.hotUpdate=function(t){this._modules.update(t),b(this,!0)},v.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(v.prototype,g);var j=F((function(t,e){var n={};return L(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=q(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),R=F((function(t,e){var n={};return L(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=q(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),A=F((function(t,e){var n={};return L(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||q(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),D=F((function(t,e){var n={};return L(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=q(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),M=function(t){return{mapState:j.bind(null,t),mapGetters:A.bind(null,t),mapMutations:R.bind(null,t),mapActions:D.bind(null,t)}};function L(t){return $(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function $(t){return Array.isArray(t)||l(t)}function F(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function q(t,e,n){var r=t._modulesNamespaceMap[n];return r}function U(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var s=t.actionTransformer;void 0===s&&(s=function(t){return t});var c=t.logMutations;void 0===c&&(c=!0);var l=t.logActions;void 0===l&&(l=!0);var u=t.logger;return void 0===u&&(u=console),function(t){var h=a(t.state);"undefined"!==typeof u&&(c&&t.subscribe((function(t,o){var s=a(o);if(n(t,h,s)){var c=W(),l=i(t),d="mutation "+t.type+c;H(u,d,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",l),u.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),B(u)}h=s})),l&&t.subscribeAction((function(t,n){if(o(t,n)){var r=W(),i=s(t),a="action "+t.type+r;H(u,a,e),u.log("%c action","color: #03A9F4; font-weight: bold",i),B(u)}})))}}function H(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function B(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function W(){var t=new Date;return" @ "+V(t.getHours(),2)+":"+V(t.getMinutes(),2)+":"+V(t.getSeconds(),2)+"."+V(t.getMilliseconds(),3)}function z(t,e){return new Array(e+1).join(t)}function V(t,e){return z("0",e-t.toString().length)+t}var K={Store:v,install:N,version:"3.6.2",mapState:j,mapMutations:R,mapGetters:A,mapActions:D,createNamespacedHelpers:M,createLogger:U};e["a"]=K}).call(this,n("c8ba"))},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"51b0":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return As})),n.d(e,"b",(function(){return Ds})),n.d(e,"c",(function(){return zs})),n.d(e,"d",(function(){return Rs}));var r=n("589b"),i=n("22e5"),o=n("1fd5"),s=n("e691");const a="@firebase/database",c="0.14.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="";function u(t){l=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Object(o["H"])(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:Object(o["B"])(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return Object(o["l"])(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h(e)}}catch(e){}return new d},p=f("localStorage"),_=f("sessionStorage"),m=new s["b"]("@firebase/database"),v=function(){let t=1;return function(){return t++}}(),g=function(t){const e=Object(o["G"])(t),n=new o["d"];n.update(e);const r=n.digest();return o["h"].encodeByteArray(r)},y=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?e+=y.apply(null,r):e+="object"===typeof r?Object(o["H"])(r):r,e+=" "}return e};let b=null,w=!0;const C=function(t,e){Object(o["f"])(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(m.logLevel=s["a"].VERBOSE,b=m.log.bind(m),e&&_.set("logging_enabled",!0)):"function"===typeof t?b=t:(b=null,_.remove("logging_enabled"))},I=function(...t){if(!0===w&&(w=!1,null===b&&!0===_.get("logging_enabled")&&C(!0)),b){const e=y.apply(null,t);b(e)}},E=function(t){return function(...e){I(t,...e)}},k=function(...t){const e="FIREBASE INTERNAL ERROR: "+y(...t);m.error(e)},T=function(...t){const e="FIREBASE FATAL ERROR: "+y(...t);throw m.error(e),new Error(e)},S=function(...t){const e="FIREBASE WARNING: "+y(...t);m.warn(e)},O=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},x=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},P=function(t){if(Object(o["y"])()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},N="[MIN_NAME]",j="[MAX_NAME]",R=function(t,e){if(t===e)return 0;if(t===N||e===j)return-1;if(e===N||t===j)return 1;{const n=V(t),r=V(e);return null!==n?null!==r?n-r===0?t.length-e.length:n-r:-1:null!==r?1:t<e?-1:1}},A=function(t,e){return t===e?0:t<e?-1:1},D=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Object(o["H"])(e))},M=function(t){if("object"!==typeof t||null===t)return Object(o["H"])(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)0!==r&&(n+=","),n+=Object(o["H"])(e[r]),n+=":",n+=M(t[e[r]]);return n+="}",n},L=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function $(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const F=function(t){Object(o["f"])(!x(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,a,c,l;0===t?(s=0,a=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=c+r,a=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let t=parseInt(h.substr(l,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},U=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function H(t,e){let n="Unknown Error";"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===t?n="Client doesn't have permission to access the desired data.":"unavailable"===t&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const B=new RegExp("^-?(0*)\\d{1,10}$"),W=-2147483648,z=2147483647,V=function(t){if(B.test(t)){const e=Number(t);if(e>=W&&e<=z)return e}return null},K=function(t){try{t()}catch(e){setTimeout(()=>{const t=e.stack||"";throw S("Exception was thrown by user callback.",t),e},Math.floor(0))}},G=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(t,e){const n=setTimeout(t,e);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then(t=>this.appCheck=t)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((e,n)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then(e=>e.addTokenListener(t))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(t=>this.auth_=t)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(t=>t&&"auth/token-not-initialized"===t.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((e,n)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(e=>e.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(e=>e.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(t)}}class X{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",tt="v",et="s",nt="r",rt="f",it=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ot="ls",st="p",at="ac",ct="websocket",lt="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(t,e,n,r,i=!1,o="",s=!1){this.secure=e,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${t}${this.host}/${e}`}}function ht(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dt(t,e,n){let r;if(Object(o["f"])("string"===typeof e,"typeof type must == string"),Object(o["f"])("object"===typeof n,"typeof params must == object"),e===ct)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==lt)throw new Error("Unknown connection type: "+e);r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}ht(t)&&(n["ns"]=t.namespace);const i=[];return $(n,(t,e)=>{i.push(t+"="+e)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.counters_={}}incrementCounter(t,e=1){Object(o["l"])(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return Object(o["n"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={},_t={};function mt(t){const e=t.toString();return pt[e]||(pt[e]=new ft),pt[e]}function vt(t,e){const n=t.toString();return _t[n]||(_t[n]=e()),_t[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&K(()=>{this.onMessage_(t[e])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="start",bt="close",wt="pLPCommand",Ct="pRTLPCB",It="id",Et="pw",kt="ser",Tt="cb",St="seg",Ot="ts",xt="d",Pt="dframe",Nt=1870,jt=30,Rt=Nt-jt,At=25e3,Dt=3e4;class Mt{constructor(t,e,n,r,i,o,s){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=E(t),this.stats_=mt(e),this.urlFn=t=>(this.appCheckToken&&(t[at]=this.appCheckToken),dt(e,lt,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new gt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Dt)),P(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lt((...t)=>{const[e,n,r,i,o]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===yt)this.id=n,this.password=r;else{if(e!==bt)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)},()=>{this.onClosed_()},this.urlFn);const t={};t[yt]="t",t[kt]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[Tt]=this.scriptTagHolder.uniqueCallbackIdentifier),t[tt]=Z,this.transportSessionId&&(t[et]=this.transportSessionId),this.lastSessionId&&(t[ot]=this.lastSessionId),this.applicationId&&(t[st]=this.applicationId),this.appCheckToken&&(t[at]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(t[nt]=rt);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mt.forceAllow_=!0}static forceDisallow(){Mt.forceDisallow_=!0}static isAvailable(){return!Object(o["y"])()&&(!!Mt.forceAllow_||!Mt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!U())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=Object(o["H"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=Object(o["i"])(e),r=L(n,Rt);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if(Object(o["y"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Pt]="t",n[It]=t,n[Et]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=Object(o["H"])(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Lt{constructor(t,e,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(o["y"])())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=v(),window[wt+this.uniqueCallbackIdentifier]=t,window[Ct+this.uniqueCallbackIdentifier]=e,this.myIFrame=Lt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){I("frame writing exception"),i.stack&&I(i.stack),I(i)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||I("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[It]=this.myID,t[Et]=this.myPW,t[kt]=this.currentSerial;let e=this.urlFn(t),n="",r=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+jt+n.length<=Nt))break;{const t=this.pendingSegs.shift();n=n+"&"+St+r+"="+t.seg+"&"+Ot+r+"="+t.ts+"&"+xt+r+"="+t.d,r++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},r=setTimeout(n,Math.floor(At)),i=()=>{clearTimeout(r),n()};this.addTag(t,i)}addTag(t,e){Object(o["y"])()?this.doNodeLongPoll(t,e):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{I("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=16384,Ft=45e3;let qt=null;"undefined"!==typeof MozWebSocket?qt=MozWebSocket:"undefined"!==typeof WebSocket&&(qt=WebSocket);class Ut{constructor(t,e,n,r,i,o,s){this.connId=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=E(this.connId),this.stats_=mt(e),this.connURL=Ut.connectionURL_(e,o,s,r,n),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,r,i){const s={};return s[tt]=Z,!Object(o["y"])()&&"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(s[nt]=rt),e&&(s[et]=e),n&&(s[ot]=n),r&&(s[at]=r),i&&(s[st]=i),dt(t,ct,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let e;if(Object(o["y"])()){const n=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Z}/${l}/${t.platform}/${n}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",BASE_URL:"/memories/"}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new qt(this.connURL,[],e)}catch(r){this.log_("Error instantiating WebSocket.");const t=r.message||r.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Ut.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==qt&&!Ut.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=Object(o["B"])(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Object(o["f"])(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=Object(o["H"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=L(e,$t);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ft))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ut.responsesRequiredToBeHealthy=2,Ut.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Mt,Ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=Ut&&Ut["isAvailable"]();let n=e&&!Ut.previouslyFailed();if(t.webSocketOnly&&(e||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ut];else{const t=this.transports_=[];for(const e of Ht.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e);Ht.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ht.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt=6e4,Wt=5e3,zt=10240,Vt=102400,Kt="t",Gt="d",Yt="s",Qt="r",Jt="e",Xt="o",Zt="a",te="n",ee="p",ne="h";class re{constructor(t,e,n,r,i,o,s,a,c,l){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=E("c:"+this.id+":"),this.transportManager_=new Ht(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(e,n)},Math.floor(0));const r=t["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Vt?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zt?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Kt in t){const e=t[Kt];e===Zt?this.upgradeIfSecondaryHealthy_():e===Qt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Xt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=D("t",t),n=D("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ee,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:te,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=D("t",t),n=D("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=D(Kt,t);if(Gt in t){const n=t[Gt];if(e===ne)this.onHandshake_(n);else if(e===te){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Yt?this.onConnectionShutdown_(n):e===Qt?this.onReset_(n):e===Jt?k("Server Error: "+n):e===Xt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):k("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),Z!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Bt))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Wt))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ee,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{put(t,e,n,r){}merge(t,e,n,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t){this.allowedEvents_=t,this.listeners_={},Object(o["f"])(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const r=this.getInitialEvent(t);r&&e.apply(n,r)}off(t,e,n){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let i=0;i<r.length;i++)if(r[i].callback===e&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(t){Object(o["f"])(this.allowedEvents_.find(e=>e===t),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends oe{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(o["x"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new se}getInitialEvent(t){return Object(o["f"])("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=32,ce=768;class le{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function ue(){return new le("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function de(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function pe(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function _e(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function me(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ve(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof le)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new le(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function be(t,e){const n=he(t),r=he(e);if(null===n)return e;if(n===r)return be(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function we(t,e){if(de(t)!==de(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ce(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(de(t)>de(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Ie{constructor(t,e){this.errorPrefix_=e,this.parts_=me(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(o["F"])(this.parts_[n]);Te(this)}}function Ee(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Object(o["F"])(e),Te(t)}function ke(t){const e=t.parts_.pop();t.byteLength_-=Object(o["F"])(e),t.parts_.length>0&&(t.byteLength_-=1)}function Te(t){if(t.byteLength_>ce)throw new Error(t.errorPrefix_+"has a key path longer than "+ce+" bytes ("+t.byteLength_+").");if(t.parts_.length>ae)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ae+") or object contains a cycle "+Se(t))}function Se(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends oe{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))},!1)}static getInstance(){return new Oe}getInitialEvent(t){return Object(o["f"])("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=1e3,Pe=3e5,Ne=3e4,je=1.3,Re=3e4,Ae="server_kill",De=3;class Me extends ie{constructor(t,e,n,r,i,s,a,c){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Me.nextPersistentConnectionId_++,this.log_=E("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xe,this.maxReconnectDelay_=Pe,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(o["y"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Oe.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&se.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const r=++this.requestNumber_,i={r:r,a:t,b:e};this.log_(Object(o["H"])(i)),Object(o["f"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(t){this.initConnection_();const e=new o["a"],n={p:t._path.toString(),q:t._queryObject},r={action:"g",request:n,onComplete:t=>{const n=t["d"];"ok"===t["s"]?e.resolve(n):e.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),e.promise}listen(t,e,n,r){this.initConnection_();const i=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Object(o["f"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(o["f"])(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:e,query:t,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)})}sendListen_(t){const e=t.query,n=e._path.toString(),r=e._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";t.tag&&(i["q"]=e._queryObject,i["t"]=t.tag),i["h"]=t.hashFn(),this.sendRequest(o,i,i=>{const o=i["d"],s=i["s"];Me.warnOnListenWarnings_(o,e);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===t&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),t.onComplete&&t.onComplete(s,o))})}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&Object(o["l"])(t,"w")){const n=Object(o["E"])(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||Object(o["t"])(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ne)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=Object(o["A"])(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,e=>{const n=e["s"],r=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)})}unlisten(t,e){const n=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(o["f"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,t._queryObject,e)}sendUnlisten_(t,e,n,r){this.log_("Unlisten on "+t+" for "+e);const i={p:t},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,r){const i={p:e,d:n};this.log_("onDisconnect "+t,i),this.sendRequest(t,i,t=>{r&&setTimeout(()=>{r(t["s"],t["d"])},Math.floor(0))})}put(t,e,n,r){this.putInternal("p",t,e,n,r)}merge(t,e,n,r){this.putInternal("m",t,e,n,r)}putInternal(t,e,n,r,i){this.initConnection_();const o={p:e,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Object(o["H"])(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):k("Unrecognized action received from server: "+Object(o["H"])(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Object(o["f"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xe,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=xe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>Re&&(this.reconnectDelay_=xe),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*je)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Me.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},l=function(t){Object(o["f"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new re(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,t=>{S(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ae)},i))}catch(k){this.log_("Failed to get token: "+k),s||(this.repoInfo_.nodeAdmin&&S(k),c())}}}interrupt(t){I("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){I("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Object(o["v"])(this.interruptReasons_)&&(this.reconnectDelay_=xe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map(t=>M(t)).join("$"):"default";const r=this.removeListen_(t,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,e){const n=new le(t).toString();let r;if(this.listens.has(n)){const t=this.listens.get(n);r=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(t,e){I("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=De&&(this.reconnectDelay_=Ne,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){I("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=De&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";Object(o["y"])()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+l.replace(/\./g,"-")]=1,Object(o["x"])()?t["framework.cordova"]=1:Object(o["z"])()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=se.getInstance().currentlyOnline();return Object(o["v"])(this.interruptReasons_)&&t}}Me.nextPersistentConnectionId_=0,Me.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Le(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Le(N,t),r=new Le(N,e);return 0!==this.compare(n,r)}minPost(){return Le.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe;class qe extends $e{static get __EMPTY_NODE(){return Fe}static set __EMPTY_NODE(t){Fe=t}compare(t,e){return R(t.name,e.name)}isDefinedOn(t){throw Object(o["g"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Le.MIN}maxPost(){return new Le(j,Fe)}makePost(t,e){return Object(o["f"])("string"===typeof t,"KeyIndex indexValue must always be a string."),new Le(t,Fe)}toString(){return".key"}}const Ue=new qe;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!t.isEmpty())if(t=t,o=e?n(t.key,e):1,r&&(o*=-1),o<0)t=this.isReverse_?t.left:t.right;else{if(0===o){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Be{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Be.RED,this.left=null!=r?r:ze.EMPTY_NODE,this.right=null!=i?i:ze.EMPTY_NODE}copy(t,e,n,r,i){return new Be(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,r;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return ze.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Be.RED=!0,Be.BLACK=!1;class We{copy(t,e,n,r,i){return this}insert(t,e,n){return new Be(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(t,e=ze.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new ze(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(t){return new ze(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,r=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new He(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new He(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new He(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new He(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ve(t,e){return R(t.name,e.name)}function Ke(t,e){return R(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ge;function Ye(t){Ge=t}ze.EMPTY_NODE=new We;const Qe=function(t){return"number"===typeof t?"number:"+F(t):"string:"+t},Je=function(t){if(t.isLeafNode()){const e=t.val();Object(o["f"])("string"===typeof e||"number"===typeof e||"object"===typeof e&&Object(o["l"])(e,".sv"),"Priority must be a string or number.")}else Object(o["f"])(t===Ge||t.isEmpty(),"priority of unexpected type.");Object(o["f"])(t===Ge||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xe,Ze,tn;class en{constructor(t,e=en.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,Object(o["f"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Je(this.priorityNode_)}static set __childrenNodeConstructor(t){Xe=t}static get __childrenNodeConstructor(){return Xe}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new en(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ye(t)?this:".priority"===he(t)?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:en.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=he(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:(Object(o["f"])(".priority"!==n||1===de(t),".priority must be the last token in a path"),this.updateImmediateChild(n,en.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Qe(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?F(this.value_):this.value_,this.lazyHash_=g(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===en.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof en.__childrenNodeConstructor?-1:(Object(o["f"])(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,r=en.VALUE_TYPE_ORDER.indexOf(e),i=en.VALUE_TYPE_ORDER.indexOf(n);return Object(o["f"])(r>=0,"Unknown leaf type: "+e),Object(o["f"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function nn(t){Ze=t}function rn(t){tn=t}en.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends $e{compare(t,e){const n=t.node.getPriority(),r=e.node.getPriority(),i=n.compareTo(r);return 0===i?R(t.name,e.name):i}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Le.MIN}maxPost(){return new Le(j,new en("[PRIORITY-POST]",tn))}makePost(t,e){const n=Ze(t);return new Le(e,new en("[PRIORITY-POST]",n))}toString(){return".priority"}}const sn=new on,an=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){const e=t=>parseInt(Math.log(t)/an,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const r=n(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const ln=function(t,e,n,r){t.sort(e);const i=function(e,r){const o=r-e;let s,a;if(0===o)return null;if(1===o)return s=t[e],a=n?n(s):s,new Be(a,s.node,Be.BLACK,null,null);{const c=parseInt(o/2,10)+e,l=i(e,c),u=i(c+1,r);return s=t[c],a=n?n(s):s,new Be(a,s.node,Be.BLACK,l,u)}},o=function(e){let r=null,o=null,s=t.length;const a=function(e,r){const o=s-e,a=s;s-=e;const l=i(o+1,a),u=t[o],h=n?n(u):u;c(new Be(h,u.node,r,null,l))},c=function(t){r?(r.left=t,r=t):(o=t,r=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),r=Math.pow(2,e.count-(t+1));n?a(r,Be.BLACK):(a(r,Be.BLACK),a(r,Be.RED))}return o},s=new cn(t.length),a=o(s);return new ze(r||e,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const hn={};class dn{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return Object(o["f"])(hn&&sn,"ChildrenNode.ts has not been loaded"),un=un||new dn({".priority":hn},{".priority":sn}),un}get(t){const e=Object(o["E"])(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof ze?e:null}hasIndex(t){return Object(o["l"])(this.indexSet_,t.toString())}addIndex(t,e){Object(o["f"])(t!==Ue,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=e.getIterator(Le.Wrap);let s,a=i.getNext();while(a)r=r||t.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?ln(n,t.getCompare()):hn;const c=t.toString(),l=Object.assign({},this.indexSet_);l[c]=t;const u=Object.assign({},this.indexes_);return u[c]=s,new dn(u,l)}addToIndexes(t,e){const n=Object(o["C"])(this.indexes_,(n,r)=>{const i=Object(o["E"])(this.indexSet_,r);if(Object(o["f"])(i,"Missing index implementation for "+r),n===hn){if(i.isDefinedOn(t.node)){const n=[],r=e.getIterator(Le.Wrap);let o=r.getNext();while(o)o.name!==t.name&&n.push(o),o=r.getNext();return n.push(t),ln(n,i.getCompare())}return hn}{const r=e.get(t.name);let i=n;return r&&(i=i.remove(new Le(t.name,r))),i.insert(t,t.node)}});return new dn(n,this.indexSet_)}removeFromIndexes(t,e){const n=Object(o["C"])(this.indexes_,n=>{if(n===hn)return n;{const r=e.get(t.name);return r?n.remove(new Le(t.name,r)):n}});return new dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class pn{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Je(this.priorityNode_),this.children_.isEmpty()&&Object(o["f"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new pn(new ze(Ke),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(t){return this.children_.isEmpty()?this:new pn(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?fn:e}}getChild(t){const e=he(t);return null===e?this:this.getImmediateChild(e).getChild(fe(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if(Object(o["f"])(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Le(t,e);let r,i;e.isEmpty()?(r=this.children_.remove(t),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(t,e),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?fn:this.priorityNode_;return new pn(r,o,i)}}updateChild(t,e){const n=he(t);if(null===n)return e;{Object(o["f"])(".priority"!==he(t)||1===de(t),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(fe(t),e);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,r=0,i=!0;if(this.forEachChild(sn,(o,s)=>{e[o]=s.val(t),n++,i&&pn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!t&&i&&r<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Qe(this.getPriority().val())+":"),this.forEachChild(sn,(e,n)=>{const r=n.hash();""!==r&&(t+=":"+e+":"+r)}),this.lazyHash_=""===t?"":g(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Le(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Le(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Le(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal(t=>e(t.name,t.node)):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,t=>t);{const n=this.children_.getIteratorFrom(t.name,Le.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,t=>t);{const n=this.children_.getReverseIteratorFrom(t.name,Le.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)>0)n.getNext(),r=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===mn?-1:0}withIndex(t){if(t===Ue||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new pn(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===Ue||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(sn),n=e.getIterator(sn);let r=t.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=t.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(t){return t===Ue?null:this.indexMap_.get(t.toString())}}pn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _n extends pn{constructor(){super(new ze(Ke),pn.EMPTY_NODE,dn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return pn.EMPTY_NODE}isEmpty(){return!1}}const mn=new _n;Object.defineProperties(Le,{MIN:{value:new Le(N,pn.EMPTY_NODE)},MAX:{value:new Le(j,mn)}}),qe.__EMPTY_NODE=pn.EMPTY_NODE,en.__childrenNodeConstructor=pn,Ye(mn),rn(mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=!0;function gn(t,e=null){if(null===t)return pn.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),Object(o["f"])(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new en(n,gn(e))}if(t instanceof Array||!vn){let n=pn.EMPTY_NODE;return $(t,(e,r)=>{if(Object(o["l"])(t,e)&&"."!==e.substring(0,1)){const t=gn(r);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}}),n.updatePriority(gn(e))}{const n=[];let r=!1;const i=t;if($(i,(t,e)=>{if("."!==t.substring(0,1)){const i=gn(e);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Le(t,i)))}}),0===n.length)return pn.EMPTY_NODE;const o=ln(n,Ve,t=>t.name,Ke);if(r){const t=ln(n,sn.getCompare());return new pn(o,gn(e),new dn({".priority":t},{".priority":sn}))}return new pn(o,gn(e),dn.Default)}}nn(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends $e{constructor(t){super(),this.indexPath_=t,Object(o["f"])(!ye(t)&&".priority"!==he(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),r=this.extractChild(e.node),i=n.compareTo(r);return 0===i?R(t.name,e.name):i}makePost(t,e){const n=gn(t),r=pn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Le(e,r)}maxPost(){const t=pn.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Le(j,t)}toString(){return me(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends $e{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?R(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Le.MIN}maxPost(){return Le.MAX}makePost(t,e){const n=gn(t);return new Le(e,n)}toString(){return".value"}}const wn=new bn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){return{type:"value",snapshotNode:t}}function In(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function En(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function kn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Tn(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t){this.index_=t}updateChild(t,e,n,r,i,s){Object(o["f"])(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(e);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?t:(null!=s&&(n.isEmpty()?t.hasChild(e)?s.trackChildChange(En(e,a)):Object(o["f"])(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(In(e,n)):s.trackChildChange(kn(e,n,a))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))}updateFullNode(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(sn,(t,r)=>{e.hasChild(t)||n.trackChildChange(En(t,r))}),e.isLeafNode()||e.forEachChild(sn,(e,r)=>{if(t.hasChild(e)){const i=t.getImmediateChild(e);i.equals(r)||n.trackChildChange(kn(e,r,i))}else n.trackChildChange(In(e,r))})),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?pn.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t){this.indexedFilter_=new Sn(t.getIndex()),this.index_=t.getIndex(),this.startPost_=On.getStartPost_(t),this.endPost_=On.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const e=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,n=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return e&&n}updateChild(t,e,n,r,i,o){return this.matches(new Le(e,n))||(n=pn.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,r,i,o)}updateFullNode(t,e,n){e.isLeafNode()&&(e=pn.EMPTY_NODE);let r=e.withIndex(this.index_);r=r.updatePriority(pn.EMPTY_NODE);const i=this;return e.forEachChild(sn,(t,e)=>{i.matches(new Le(t,e))||(r=r.updateImmediateChild(t,pn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const e=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?e<=0:e<0},this.withinEndPost=t=>{const e=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?e<=0:e<0},this.rangedFilter_=new On(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,e,n,r,i,o){return this.rangedFilter_.matches(new Le(e,n))||(n=pn.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,r,i,o):this.fullLimitUpdateChild_(t,e,n,i,o)}updateFullNode(t,e,n){let r;if(e.isLeafNode()||e.isEmpty())r=pn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;r=pn.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(t.hasNext()&&n<this.limit_){const e=t.getNext();if(this.withinDirectionalStart(e)){if(!this.withinDirectionalEnd(e))break;r=r.updateImmediateChild(e.name,e.node),n++}}}else{let t;r=e.withIndex(this.index_),r=r.updatePriority(pn.EMPTY_NODE),t=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;while(t.hasNext()){const e=t.getNext(),i=n<this.limit_&&this.withinDirectionalStart(e)&&this.withinDirectionalEnd(e);i?n++:r=r.updateImmediateChild(e.name,pn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,n,r,i){let s;if(this.reverse_){const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else s=this.index_.getCompare();const a=t;Object(o["f"])(a.numChildren()===this.limit_,"");const c=new Le(e,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(e)){const t=a.getImmediateChild(e);let o=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=o&&(o.name===e||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(kn(e,n,t)),a.updateImmediateChild(e,n);{null!=i&&i.trackChildChange(En(e,t));const n=a.updateImmediateChild(e,pn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(In(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?t:u&&s(l,c)>=0?(null!=i&&(i.trackChildChange(En(l.name,l.node)),i.trackChildChange(In(e,n))),a.updateImmediateChild(e,n).updateImmediateChild(l.name,pn.EMPTY_NODE)):t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sn}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(o["f"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(o["f"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(o["f"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(o["f"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:j}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(o["f"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sn}copy(){const t=new Pn;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Nn(t){return t.loadsAllData()?new Sn(t.getIndex()):t.hasLimit()?new xn(t):new On(t)}function jn(t){const e={};if(t.isDefault())return e;let n;if(t.index_===sn?n="$priority":t.index_===wn?n="$value":t.index_===Ue?n="$key":(Object(o["f"])(t.index_ instanceof yn,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=Object(o["H"])(n),t.startSet_){const n=t.startAfterSet_?"startAfter":"startAt";e[n]=Object(o["H"])(t.indexStartValue_),t.startNameSet_&&(e[n]+=","+Object(o["H"])(t.indexStartName_))}if(t.endSet_){const n=t.endBeforeSet_?"endBefore":"endAt";e[n]=Object(o["H"])(t.indexEndValue_),t.endNameSet_&&(e[n]+=","+Object(o["H"])(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function Rn(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_),e["sin"]=!t.startAfterSet_),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_),e["ein"]=!t.endBeforeSet_),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==sn&&(e["i"]=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends ie{constructor(t,e,n,r){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=E("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:(Object(o["f"])(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,r){const i=t._path.toString();this.log_("Listen called for "+i+" "+t._queryIdentifier);const s=An.getListenId_(t,n),a={};this.listens_[s]=a;const c=jn(t._queryParams);this.restRequest_(i+".json",c,(t,e)=>{let c=e;if(404===t&&(c=null,t=null),null===t&&this.onDataUpdate_(i,c,!1,n),Object(o["E"])(this.listens_,s)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",r(e,null)}})}unlisten(t,e){const n=An.getListenId_(t,e);delete this.listens_[n]}get(t){const e=jn(t._queryParams),n=t._path.toString(),r=new o["a"];return this.restRequest_(n+".json",e,(t,e)=>{let i=e;404===t&&(i=null,t=null),null===t?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(e["auth"]=r.accessToken),i&&i.token&&(e["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Object(o["D"])(e);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=Object(o["B"])(a.responseText)}catch(t){S("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&S("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.rootNode_=pn.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return{value:null,children:new Map}}function Ln(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const r=he(e);t.children.has(r)||t.children.set(r,Mn());const i=t.children.get(r);e=fe(e),Ln(i,e,n)}}function $n(t,e,n){null!==t.value?n(e,t.value):Fn(t,(t,r)=>{const i=new le(e.toString()+"/"+t);$n(r,i,n)})}function Fn(t,e){t.children.forEach((t,n)=>{e(n,t)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&$(this.last_,(t,n)=>{e[t]=e[t]-n}),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=1e4,Hn=3e4,Bn=3e5;class Wn{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new qn(t);const n=Un+(Hn-Un)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;$(t,(t,r)=>{r>0&&Object(o["l"])(this.statsToReport_,t)&&(e[t]=r,n=!0)}),n&&this.server_.reportStats(e),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Bn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn;function Vn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(zn||(zn={}));class Yn{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=zn.ACK_USER_WRITE,this.source=Vn()}operationForChild(t){if(ye(this.path)){if(null!=this.affectedTree.value)return Object(o["f"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new le(t));return new Yn(ue(),e,this.revert)}}return Object(o["f"])(he(this.path)===t,"operationForChild called for unrelated child."),new Yn(fe(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e){this.source=t,this.path=e,this.type=zn.LISTEN_COMPLETE}operationForChild(t){return ye(this.path)?new Qn(this.source,ue()):new Qn(this.source,fe(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=zn.OVERWRITE}operationForChild(t){return ye(this.path)?new Jn(this.source,ue(),this.snap.getImmediateChild(t)):new Jn(this.source,fe(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=zn.MERGE}operationForChild(t){if(ye(this.path)){const e=this.children.subtree(new le(t));return e.isEmpty()?null:e.value?new Jn(this.source,ue(),e.value):new Xn(this.source,ue(),e)}return Object(o["f"])(he(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Xn(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ye(t))return this.isFullyInitialized()&&!this.filtered_;const e=he(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function er(t,e,n,r){const i=[],o=[];return e.forEach(e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&o.push(Tn(e.childName,e.snapshotNode))}),nr(t,i,"child_removed",e,r,n),nr(t,i,"child_added",e,r,n),nr(t,i,"child_moved",o,r,n),nr(t,i,"child_changed",e,r,n),nr(t,i,"value",e,r,n),i}function nr(t,e,n,r,i,o){const s=r.filter(t=>t.type===n);s.sort((e,n)=>ir(t,e,n)),s.forEach(n=>{const r=rr(t,n,o);i.forEach(i=>{i.respondsTo(n.type)&&e.push(i.createEvent(r,t.query_))})})}function rr(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ir(t,e,n){if(null==e.childName||null==n.childName)throw Object(o["g"])("Should only compare child_ events.");const r=new Le(e.childName,e.snapshotNode),i=new Le(n.childName,n.snapshotNode);return t.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){return{eventCache:t,serverCache:e}}function sr(t,e,n,r){return or(new Zn(e,n,r),t.serverCache)}function ar(t,e,n,r){return or(t.eventCache,new Zn(e,n,r))}function cr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function lr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;const hr=()=>(ur||(ur=new ze(A)),ur);class dr{constructor(t,e=hr()){this.value=t,this.children=e}static fromObject(t){let e=new dr(null);return $(t,(t,n)=>{e=e.set(new le(t),n)}),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:ue(),value:this.value};if(ye(t))return null;{const n=he(t),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(fe(t),e);if(null!=i){const t=ge(new le(n),i.path);return{path:t,value:i.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ye(t))return this;{const e=he(t),n=this.children.get(e);return null!==n?n.subtree(fe(t)):new dr(null)}}set(t,e){if(ye(t))return new dr(e,this.children);{const n=he(t),r=this.children.get(n)||new dr(null),i=r.set(fe(t),e),o=this.children.insert(n,i);return new dr(this.value,o)}}remove(t){if(ye(t))return this.children.isEmpty()?new dr(null):new dr(null,this.children);{const e=he(t),n=this.children.get(e);if(n){const r=n.remove(fe(t));let i;return i=r.isEmpty()?this.children.remove(e):this.children.insert(e,r),null===this.value&&i.isEmpty()?new dr(null):new dr(this.value,i)}return this}}get(t){if(ye(t))return this.value;{const e=he(t),n=this.children.get(e);return n?n.get(fe(t)):null}}setTree(t,e){if(ye(t))return e;{const n=he(t),r=this.children.get(n)||new dr(null),i=r.setTree(fe(t),e);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new dr(this.value,o)}}fold(t){return this.fold_(ue(),t)}fold_(t,e){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(ge(t,r),e)}),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,ue(),e)}findOnPath_(t,e,n){const r=!!this.value&&n(e,this.value);if(r)return r;if(ye(t))return null;{const r=he(t),i=this.children.get(r);return i?i.findOnPath_(fe(t),ge(e,r),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,ue(),e)}foreachOnPath_(t,e,n){if(ye(t))return this;{this.value&&n(e,this.value);const r=he(t),i=this.children.get(r);return i?i.foreachOnPath_(fe(t),ge(e,r),n):new dr(null)}}foreach(t){this.foreach_(ue(),t)}foreach_(t,e){this.children.inorderTraversal((n,r)=>{r.foreach_(ge(t,n),e)}),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal((e,n)=>{n.value&&t(e,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.writeTree_=t}static empty(){return new fr(new dr(null))}}function pr(t,e,n){if(ye(e))return new fr(new dr(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(null!=r){const i=r.path;let o=r.value;const s=be(i,e);return o=o.updateChild(s,n),new fr(t.writeTree_.set(i,o))}{const r=new dr(n),i=t.writeTree_.setTree(e,r);return new fr(i)}}}function _r(t,e,n){let r=t;return $(n,(t,n)=>{r=pr(r,ge(e,t),n)}),r}function mr(t,e){if(ye(e))return fr.empty();{const n=t.writeTree_.setTree(e,new dr(null));return new fr(n)}}function vr(t,e){return null!=gr(t,e)}function gr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(be(n.path,e)):null}function yr(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(sn,(t,n)=>{e.push(new Le(t,n))}):t.writeTree_.children.inorderTraversal((t,n)=>{null!=n.value&&e.push(new Le(t,n.value))}),e}function br(t,e){if(ye(e))return t;{const n=gr(t,e);return new fr(null!=n?new dr(n):t.writeTree_.subtree(e))}}function wr(t){return t.writeTree_.isEmpty()}function Cr(t,e){return Ir(ue(),t.writeTree_,e)}function Ir(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((e,i)=>{".priority"===e?(Object(o["f"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ir(ge(t,e),i,n)}),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(ge(t,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){return Vr(e,t)}function kr(t,e,n,r,i){Object(o["f"])(r>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=pr(t.visibleWrites,e,n)),t.lastWriteId=r}function Tr(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Sr(t,e){const n=t.allWrites.findIndex(t=>t.writeId===e);Object(o["f"])(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,a=t.allWrites.length-1;while(i&&a>=0){const e=t.allWrites[a];e.visible&&(a>=n&&Or(e,r.path)?i=!1:Ce(r.path,e.path)&&(s=!0)),a--}if(i){if(s)return xr(t),!0;if(r.snap)t.visibleWrites=mr(t.visibleWrites,r.path);else{const e=r.children;$(e,e=>{t.visibleWrites=mr(t.visibleWrites,ge(r.path,e))})}return!0}return!1}function Or(t,e){if(t.snap)return Ce(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ce(ge(t.path,n),e))return!0;return!1}function xr(t){t.visibleWrites=Nr(t.allWrites,Pr,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Pr(t){return t.visible}function Nr(t,e,n){let r=fr.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const t=s.path;let e;if(s.snap)Ce(n,t)?(e=be(n,t),r=pr(r,e,s.snap)):Ce(t,n)&&(e=be(t,n),r=pr(r,ue(),s.snap.getChild(e)));else{if(!s.children)throw Object(o["g"])("WriteRecord should have .snap or .children");if(Ce(n,t))e=be(n,t),r=_r(r,e,s.children);else if(Ce(t,n))if(e=be(t,n),ye(e))r=_r(r,ue(),s.children);else{const t=Object(o["E"])(s.children,he(e));if(t){const n=t.getChild(fe(e));r=pr(r,ue(),n)}}}}}return r}function jr(t,e,n,r,i){if(r||i){const o=br(t.visibleWrites,e);if(!i&&wr(o))return n;if(i||null!=n||vr(o,ue())){const o=function(t){return(t.visible||i)&&(!r||!~r.indexOf(t.writeId))&&(Ce(t.path,e)||Ce(e,t.path))},s=Nr(t.allWrites,o,e),a=n||pn.EMPTY_NODE;return Cr(s,a)}return null}{const r=gr(t.visibleWrites,e);if(null!=r)return r;{const r=br(t.visibleWrites,e);if(wr(r))return n;if(null!=n||vr(r,ue())){const t=n||pn.EMPTY_NODE;return Cr(r,t)}return null}}}function Rr(t,e,n){let r=pn.EMPTY_NODE;const i=gr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(sn,(t,e)=>{r=r.updateImmediateChild(t,e)}),r;if(n){const i=br(t.visibleWrites,e);return n.forEachChild(sn,(t,e)=>{const n=Cr(br(i,new le(t)),e);r=r.updateImmediateChild(t,n)}),yr(i).forEach(t=>{r=r.updateImmediateChild(t.name,t.node)}),r}{const n=br(t.visibleWrites,e);return yr(n).forEach(t=>{r=r.updateImmediateChild(t.name,t.node)}),r}}function Ar(t,e,n,r,i){Object(o["f"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ge(e,n);if(vr(t.visibleWrites,s))return null;{const e=br(t.visibleWrites,s);return wr(e)?i.getChild(n):Cr(e,i.getChild(n))}}function Dr(t,e,n,r){const i=ge(e,n),o=gr(t.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const e=br(t.visibleWrites,i);return Cr(e,r.getNode().getImmediateChild(n))}return null}function Mr(t,e){return gr(t.visibleWrites,e)}function Lr(t,e,n,r,i,o,s){let a;const c=br(t.visibleWrites,e),l=gr(c,ue());if(null!=l)a=l;else{if(null==n)return[];a=Cr(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&t.length<i)0!==e(c,r)&&t.push(c),c=n.getNext();return t}}function $r(){return{visibleWrites:fr.empty(),allWrites:[],lastWriteId:-1}}function Fr(t,e,n,r){return jr(t.writeTree,t.treePath,e,n,r)}function qr(t,e){return Rr(t.writeTree,t.treePath,e)}function Ur(t,e,n,r){return Ar(t.writeTree,t.treePath,e,n,r)}function Hr(t,e){return Mr(t.writeTree,ge(t.treePath,e))}function Br(t,e,n,r,i,o){return Lr(t.writeTree,t.treePath,e,n,r,i,o)}function Wr(t,e,n){return Dr(t.writeTree,t.treePath,e,n)}function zr(t,e){return Vr(ge(t.treePath,e),t.writeTree)}function Vr(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;Object(o["f"])("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),Object(o["f"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===e&&"child_removed"===i)this.changeMap.set(n,kn(n,t.snapshotNode,r.snapshotNode));else if("child_removed"===e&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===i)this.changeMap.set(n,En(n,r.oldSnap));else if("child_changed"===e&&"child_added"===i)this.changeMap.set(n,In(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==i)throw Object(o["g"])("Illegal combination of changes: "+t+" occurred after "+r);this.changeMap.set(n,kn(n,t.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const Yr=new Gr;class Qr{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new Zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wr(this.writes_,t,e)}}getChildAfterChild(t,e,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:lr(this.viewCache_),i=Br(this.writes_,r,e,1,n,t);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t){return{filter:t}}function Xr(t,e){Object(o["f"])(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Object(o["f"])(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Zr(t,e,n,r,i){const s=new Kr;let a,c;if(n.type===zn.OVERWRITE){const l=n;l.source.fromUser?a=ri(t,e,l.path,l.snap,r,i,s):(Object(o["f"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered()&&!ye(l.path),a=ni(t,e,l.path,l.snap,r,i,c,s))}else if(n.type===zn.MERGE){const l=n;l.source.fromUser?a=oi(t,e,l.path,l.children,r,i,s):(Object(o["f"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered(),a=ai(t,e,l.path,l.children,r,i,c,s))}else if(n.type===zn.ACK_USER_WRITE){const o=n;a=o.revert?ui(t,e,o.path,r,i,s):ci(t,e,o.path,o.affectedTree,r,i,s)}else{if(n.type!==zn.LISTEN_COMPLETE)throw Object(o["g"])("Unknown operation type: "+n.type);a=li(t,e,n.path,r,s)}const l=s.getChanges();return ti(e,a,l),{viewCache:a,changes:l}}function ti(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=cr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Cn(cr(e)))}}function ei(t,e,n,r,i,s){const a=e.eventCache;if(null!=Hr(r,n))return e;{let c,l;if(ye(n))if(Object(o["f"])(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=lr(e),i=n instanceof pn?n:pn.EMPTY_NODE,o=qr(r,i);c=t.filter.updateFullNode(e.eventCache.getNode(),o,s)}else{const n=Fr(r,lr(e));c=t.filter.updateFullNode(e.eventCache.getNode(),n,s)}else{const u=he(n);if(".priority"===u){Object(o["f"])(1===de(n),"Can't have a priority with additional path components");const i=a.getNode();l=e.serverCache.getNode();const s=Ur(r,n,i,l);c=null!=s?t.filter.updatePriority(i,s):a.getNode()}else{const o=fe(n);let h;if(a.isCompleteForChild(u)){l=e.serverCache.getNode();const t=Ur(r,n,a.getNode(),l);h=null!=t?a.getNode().getImmediateChild(u).updateChild(o,t):a.getNode().getImmediateChild(u)}else h=Wr(r,u,e.serverCache);c=null!=h?t.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return sr(e,c,a.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function ni(t,e,n,r,i,o,s,a){const c=e.serverCache;let l;const u=s?t.filter:t.filter.getIndexedFilter();if(ye(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const t=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),t,null)}else{const t=he(n);if(!c.isCompleteForPath(n)&&de(n)>1)return e;const i=fe(n),o=c.getNode().getImmediateChild(t),s=o.updateChild(i,r);l=".priority"===t?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),t,s,i,Yr,null)}const h=ar(e,l,c.isFullyInitialized()||ye(n),u.filtersNodes()),d=new Qr(i,h,o);return ei(t,h,n,i,d,a)}function ri(t,e,n,r,i,o,s){const a=e.eventCache;let c,l;const u=new Qr(i,e,o);if(ye(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,s),c=sr(e,l,!0,t.filter.filtersNodes());else{const i=he(n);if(".priority"===i)l=t.filter.updatePriority(e.eventCache.getNode(),r),c=sr(e,l,a.isFullyInitialized(),a.isFiltered());else{const o=fe(n),l=a.getNode().getImmediateChild(i);let h;if(ye(o))h=r;else{const t=u.getCompleteChild(i);h=null!=t?".priority"===pe(o)&&t.getChild(ve(o)).isEmpty()?t:t.updateChild(o,r):pn.EMPTY_NODE}if(l.equals(h))c=e;else{const n=t.filter.updateChild(a.getNode(),i,h,o,u,s);c=sr(e,n,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ii(t,e){return t.eventCache.isCompleteForChild(e)}function oi(t,e,n,r,i,o,s){let a=e;return r.foreach((r,c)=>{const l=ge(n,r);ii(e,he(l))&&(a=ri(t,a,l,c,i,o,s))}),r.foreach((r,c)=>{const l=ge(n,r);ii(e,he(l))||(a=ri(t,a,l,c,i,o,s))}),a}function si(t,e,n){return n.foreach((t,n)=>{e=e.updateChild(t,n)}),e}function ai(t,e,n,r,i,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c,l=e;c=ye(n)?r:new dr(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){const c=e.serverCache.getNode().getImmediateChild(n),u=si(t,c,r);l=ni(t,l,new le(n),u,i,o,s,a)}}),c.children.inorderTraversal((n,r)=>{const c=!e.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=e.serverCache.getNode().getImmediateChild(n),u=si(t,c,r);l=ni(t,l,new le(n),u,i,o,s,a)}}),l}function ci(t,e,n,r,i,o,s){if(null!=Hr(i,n))return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(null!=r.value){if(ye(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ni(t,e,n,c.getNode().getChild(n),i,o,a,s);if(ye(n)){let r=new dr(null);return c.getNode().forEachChild(Ue,(t,e)=>{r=r.set(new le(t),e)}),ai(t,e,n,r,i,o,a,s)}return e}{let l=new dr(null);return r.foreach((t,e)=>{const r=ge(n,t);c.isCompleteForPath(r)&&(l=l.set(t,c.getNode().getChild(r)))}),ai(t,e,n,l,i,o,a,s)}}function li(t,e,n,r,i){const o=e.serverCache,s=ar(e,o.getNode(),o.isFullyInitialized()||ye(n),o.isFiltered());return ei(t,s,n,r,Yr,i)}function ui(t,e,n,r,i,s){let a;if(null!=Hr(r,n))return e;{const c=new Qr(r,e,i),l=e.eventCache.getNode();let u;if(ye(n)||".priority"===he(n)){let n;if(e.serverCache.isFullyInitialized())n=Fr(r,lr(e));else{const t=e.serverCache.getNode();Object(o["f"])(t instanceof pn,"serverChildren would be complete if leaf node"),n=qr(r,t)}n=n,u=t.filter.updateFullNode(l,n,s)}else{const i=he(n);let o=Wr(r,i,e.serverCache);null==o&&e.serverCache.isCompleteForChild(i)&&(o=l.getImmediateChild(i)),u=null!=o?t.filter.updateChild(l,i,o,fe(n),c,s):e.eventCache.getNode().hasChild(i)?t.filter.updateChild(l,i,pn.EMPTY_NODE,fe(n),c,s):l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Fr(r,lr(e)),a.isLeafNode()&&(u=t.filter.updateFullNode(u,a,s)))}return a=e.serverCache.isFullyInitialized()||null!=Hr(r,ue()),sr(e,u,a,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Sn(n.getIndex()),i=Nn(n);this.processor_=Jr(i);const o=e.serverCache,s=e.eventCache,a=r.updateFullNode(pn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(pn.EMPTY_NODE,s.getNode(),null),l=new Zn(a,o.isFullyInitialized(),r.filtersNodes()),u=new Zn(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=or(u,l),this.eventGenerator_=new tr(this.query_)}get query(){return this.query_}}function di(t){return t.viewCache_.serverCache.getNode()}function fi(t){return cr(t.viewCache_)}function pi(t,e){const n=lr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function _i(t){return 0===t.eventRegistrations_.length}function mi(t,e){t.eventRegistrations_.push(e)}function vi(t,e,n){const r=[];if(n){Object(o["f"])(null==e,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(t=>{const e=t.createCancelEvent(n,i);e&&r.push(e)})}if(e){let n=[];for(let r=0;r<t.eventRegistrations_.length;++r){const i=t.eventRegistrations_[r];if(i.matches(e)){if(e.hasAnyCallback()){n=n.concat(t.eventRegistrations_.slice(r+1));break}}else n.push(i)}t.eventRegistrations_=n}else t.eventRegistrations_=[];return r}function gi(t,e,n,r){e.type===zn.MERGE&&null!==e.source.queryId&&(Object(o["f"])(lr(t.viewCache_),"We should always have a full cache before handling merges"),Object(o["f"])(cr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Zr(t.processor_,i,e,n,r);return Xr(t.processor_,s.viewCache),Object(o["f"])(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,bi(t,s.changes,s.viewCache.eventCache.getNode(),null)}function yi(t,e){const n=t.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const t=n.getNode();t.forEachChild(sn,(t,e)=>{r.push(In(t,e))})}return n.isFullyInitialized()&&r.push(Cn(n.getNode())),bi(t,r,n.getNode(),e)}function bi(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return er(t.eventGenerator_,e,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi,Ci;class Ii{constructor(){this.views=new Map}}function Ei(t){Object(o["f"])(!wi,"__referenceConstructor has already been defined"),wi=t}function ki(){return Object(o["f"])(wi,"Reference.ts has not been loaded"),wi}function Ti(t){return 0===t.views.size}function Si(t,e,n,r){const i=e.source.queryId;if(null!==i){const s=t.views.get(i);return Object(o["f"])(null!=s,"SyncTree gave us an op for an invalid query."),gi(s,e,n,r)}{let i=[];for(const o of t.views.values())i=i.concat(gi(o,e,n,r));return i}}function Oi(t,e,n,r,i){const o=e._queryIdentifier,s=t.views.get(o);if(!s){let t=Fr(n,i?r:null),o=!1;t?o=!0:r instanceof pn?(t=qr(n,r),o=!1):(t=pn.EMPTY_NODE,o=!1);const s=or(new Zn(t,o,!1),new Zn(r,i,!1));return new hi(e,s)}return s}function xi(t,e,n,r,i,o){const s=Oi(t,e,r,i,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,s),mi(s,n),yi(s,n)}function Pi(t,e,n,r){const i=e._queryIdentifier,o=[];let s=[];const a=Di(t);if("default"===i)for(const[c,l]of t.views.entries())s=s.concat(vi(l,n,r)),_i(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||o.push(l.query));else{const e=t.views.get(i);e&&(s=s.concat(vi(e,n,r)),_i(e)&&(t.views.delete(i),e.query._queryParams.loadsAllData()||o.push(e.query)))}return a&&!Di(t)&&o.push(new(ki())(e._repo,e._path)),{removed:o,events:s}}function Ni(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ji(t,e){let n=null;for(const r of t.views.values())n=n||pi(r,e);return n}function Ri(t,e){const n=e._queryParams;if(n.loadsAllData())return Mi(t);{const n=e._queryIdentifier;return t.views.get(n)}}function Ai(t,e){return null!=Ri(t,e)}function Di(t){return null!=Mi(t)}function Mi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){Object(o["f"])(!Ci,"__referenceConstructor has already been defined"),Ci=t}function $i(){return Object(o["f"])(Ci,"Reference.ts has not been loaded"),Ci}let Fi=1;class qi{constructor(t){this.listenProvider_=t,this.syncPointTree_=new dr(null),this.pendingWriteTree_=$r(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ui(t,e,n,r,i){return kr(t.pendingWriteTree_,e,n,r,i),i?Zi(t,new Jn(Vn(),e,n)):[]}function Hi(t,e,n=!1){const r=Tr(t.pendingWriteTree_,e),i=Sr(t.pendingWriteTree_,e);if(i){let e=new dr(null);return null!=r.snap?e=e.set(ue(),!0):$(r.children,t=>{e=e.set(new le(t),!0)}),Zi(t,new Yn(r.path,e,n))}return[]}function Bi(t,e,n){return Zi(t,new Jn(Kn(),e,n))}function Wi(t,e,n){const r=dr.fromObject(n);return Zi(t,new Xn(Kn(),e,r))}function zi(t,e){return Zi(t,new Qn(Kn(),e))}function Vi(t,e,n){const r=oo(t,n);if(r){const n=so(r),i=n.path,o=n.queryId,s=be(i,e),a=new Qn(Gn(o),s);return ao(t,i,a)}return[]}function Ki(t,e,n,r,i=!1){const o=e._path,s=t.syncPointTree_.get(o);let a=[];if(s&&("default"===e._queryIdentifier||Ai(s,e))){const c=Pi(s,e,n,r);Ti(s)&&(t.syncPointTree_=t.syncPointTree_.remove(o));const l=c.removed;if(a=c.events,!i){const n=-1!==l.findIndex(t=>t._queryParams.loadsAllData()),i=t.syncPointTree_.findOnPath(o,(t,e)=>Di(e));if(n&&!i){const e=t.syncPointTree_.subtree(o);if(!e.isEmpty()){const n=co(e);for(let e=0;e<n.length;++e){const r=n[e],i=r.query,o=no(t,r);t.listenProvider_.startListening(lo(i),ro(t,i),o.hashFn,o.onComplete)}}}if(!i&&l.length>0&&!r)if(n){const n=null;t.listenProvider_.stopListening(lo(e),n)}else l.forEach(e=>{const n=t.queryToTagMap.get(io(e));t.listenProvider_.stopListening(lo(e),n)})}uo(t,l)}return a}function Gi(t,e,n,r){const i=oo(t,r);if(null!=i){const r=so(i),o=r.path,s=r.queryId,a=be(o,e),c=new Jn(Gn(s),a,n);return ao(t,o,c)}return[]}function Yi(t,e,n,r){const i=oo(t,r);if(i){const r=so(i),o=r.path,s=r.queryId,a=be(o,e),c=dr.fromObject(n),l=new Xn(Gn(s),a,c);return ao(t,o,l)}return[]}function Qi(t,e,n,r=!1){const i=e._path;let s=null,a=!1;t.syncPointTree_.foreachOnPath(i,(t,e)=>{const n=be(t,i);s=s||ji(e,n),a=a||Di(e)});let c,l=t.syncPointTree_.get(i);if(l?(a=a||Di(l),s=s||ji(l,ue())):(l=new Ii,t.syncPointTree_=t.syncPointTree_.set(i,l)),null!=s)c=!0;else{c=!1,s=pn.EMPTY_NODE;const e=t.syncPointTree_.subtree(i);e.foreachChild((t,e)=>{const n=ji(e,ue());n&&(s=s.updateImmediateChild(t,n))})}const u=Ai(l,e);if(!u&&!e._queryParams.loadsAllData()){const n=io(e);Object(o["f"])(!t.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ho();t.queryToTagMap.set(n,r),t.tagToQueryMap.set(r,n)}const h=Er(t.pendingWriteTree_,i);let d=xi(l,e,n,h,s,c);if(!u&&!a&&!r){const n=Ri(l,e);d=d.concat(fo(t,e,n))}return d}function Ji(t,e,n){const r=!0,i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(t,n)=>{const r=be(t,e),i=ji(n,r);if(i)return i});return jr(i,e,o,n,r)}function Xi(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(t,e)=>{const i=be(t,n);r=r||ji(e,i)});let i=t.syncPointTree_.get(n);i?r=r||ji(i,ue()):(i=new Ii,t.syncPointTree_=t.syncPointTree_.set(n,i));const o=null!=r,s=o?new Zn(r,!0,!1):null,a=Er(t.pendingWriteTree_,e._path),c=Oi(i,e,a,o?s.getNode():pn.EMPTY_NODE,o);return fi(c)}function Zi(t,e){return to(e,t.syncPointTree_,null,Er(t.pendingWriteTree_,ue()))}function to(t,e,n,r){if(ye(t.path))return eo(t,e,n,r);{const i=e.get(ue());null==n&&null!=i&&(n=ji(i,ue()));let o=[];const s=he(t.path),a=t.operationForChild(s),c=e.children.get(s);if(c&&a){const t=n?n.getImmediateChild(s):null,e=zr(r,s);o=o.concat(to(a,c,t,e))}return i&&(o=o.concat(Si(i,t,r,n))),o}}function eo(t,e,n,r){const i=e.get(ue());null==n&&null!=i&&(n=ji(i,ue()));let o=[];return e.children.inorderTraversal((e,i)=>{const s=n?n.getImmediateChild(e):null,a=zr(r,e),c=t.operationForChild(e);c&&(o=o.concat(eo(c,i,s,a)))}),i&&(o=o.concat(Si(i,t,r,n))),o}function no(t,e){const n=e.query,r=ro(t,n);return{hashFn:()=>{const t=di(e)||pn.EMPTY_NODE;return t.hash()},onComplete:e=>{if("ok"===e)return r?Vi(t,n._path,r):zi(t,n._path);{const r=H(e,n);return Ki(t,n,null,r)}}}}function ro(t,e){const n=io(e);return t.queryToTagMap.get(n)}function io(t){return t._path.toString()+"$"+t._queryIdentifier}function oo(t,e){return t.tagToQueryMap.get(e)}function so(t){const e=t.indexOf("$");return Object(o["f"])(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function ao(t,e,n){const r=t.syncPointTree_.get(e);Object(o["f"])(r,"Missing sync point for query tag that we're tracking");const i=Er(t.pendingWriteTree_,e);return Si(r,n,i,null)}function co(t){return t.fold((t,e,n)=>{if(e&&Di(e)){const t=Mi(e);return[t]}{let t=[];return e&&(t=Ni(e)),$(n,(e,n)=>{t=t.concat(n)}),t}})}function lo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($i())(t._repo,t._path):t}function uo(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const e=io(r),n=t.queryToTagMap.get(e);t.queryToTagMap.delete(e),t.tagToQueryMap.delete(n)}}}function ho(){return Fi++}function fo(t,e,n){const r=e._path,i=ro(t,e),s=no(t,n),a=t.listenProvider_.startListening(lo(e),i,s.hashFn,s.onComplete),c=t.syncPointTree_.subtree(r);if(i)Object(o["f"])(!Di(c.value),"If we're adding a query, it shouldn't be shadowed");else{const e=c.fold((t,e,n)=>{if(!ye(t)&&e&&Di(e))return[Mi(e).query];{let t=[];return e&&(t=t.concat(Ni(e).map(t=>t.query))),$(n,(e,n)=>{t=t.concat(n)}),t}});for(let n=0;n<e.length;++n){const r=e[n];t.listenProvider_.stopListening(lo(r),ro(t,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new po(e)}node(){return this.node_}}class _o{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=ge(this.path_,t);return new _o(this.syncTree_,e)}node(){return Ji(this.syncTree_,this.path_)}}const mo=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},vo=function(t,e,n){return t&&"object"===typeof t?(Object(o["f"])(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?go(t[".sv"],e,n):"object"===typeof t[".sv"]?yo(t[".sv"],e):void Object(o["f"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},go=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:Object(o["f"])(!1,"Unexpected server value: "+t)}},yo=function(t,e,n){t.hasOwnProperty("increment")||Object(o["f"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t["increment"];"number"!==typeof r&&Object(o["f"])(!1,"Unexpected increment value: "+r);const i=e.node();if(Object(o["f"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},bo=function(t,e,n,r){return Co(e,new _o(n,t),r)},wo=function(t,e,n){return Co(t,new po(e),n)};function Co(t,e,n){const r=t.getPriority().val(),i=vo(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const r=t,o=vo(r.getValue(),e,n);return o!==r.getValue()||i!==r.getPriority().val()?new en(o,gn(i)):t}{const r=t;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new en(i))),r.forEachChild(sn,(t,r)=>{const i=Co(r,e.getImmediateChild(t),n);i!==r&&(o=o.updateImmediateChild(t,i))}),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Eo(t,e){let n=e instanceof le?e:new le(e),r=t,i=he(n);while(null!==i){const t=Object(o["E"])(r.node.children,i)||{children:{},childCount:0};r=new Io(i,r,t),n=fe(n),i=he(n)}return r}function ko(t){return t.node.value}function To(t,e){t.node.value=e,Ro(t)}function So(t){return t.node.childCount>0}function Oo(t){return void 0===ko(t)&&!So(t)}function xo(t,e){$(t.node.children,(n,r)=>{e(new Io(n,t,r))})}function Po(t,e,n,r){n&&!r&&e(t),xo(t,t=>{Po(t,e,!0,r)}),n&&r&&e(t)}function No(t,e,n){let r=n?t:t.parent;while(null!==r){if(e(r))return!0;r=r.parent}return!1}function jo(t){return new le(null===t.parent?t.name:jo(t.parent)+"/"+t.name)}function Ro(t){null!==t.parent&&Ao(t.parent,t.name,t)}function Ao(t,e,n){const r=Oo(n),i=Object(o["l"])(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ro(t)):r||i||(t.node.children[e]=n.node,t.node.childCount++,Ro(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=/[\[\].#$\/\u0000-\u001F\u007F]/,Mo=/[\[\].#$\u0000-\u001F\u007F]/,Lo=10485760,$o=function(t){return"string"===typeof t&&0!==t.length&&!Do.test(t)},Fo=function(t){return"string"===typeof t&&0!==t.length&&!Mo.test(t)},qo=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fo(t)},Uo=function(t,e,n){const r=n instanceof le?new Ie(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+Se(r));if("function"===typeof e)throw new Error(t+"contains a function "+Se(r)+" with contents = "+e.toString());if(x(e))throw new Error(t+"contains "+e.toString()+" "+Se(r));if("string"===typeof e&&e.length>Lo/3&&Object(o["F"])(e)>Lo)throw new Error(t+"contains a string greater than "+Lo+" utf8 bytes "+Se(r)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,i=!1;if($(e,(e,o)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(i=!0,!$o(e)))throw new Error(t+" contains an invalid key ("+e+") "+Se(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ee(r,e),Uo(t,o,r),ke(r)}),n&&i)throw new Error(t+' contains ".value" child '+Se(r)+" in addition to actual children.")}},Ho=function(t,e,n,r){if((!r||void 0!==n)&&!Fo(n))throw new Error(Object(o["p"])(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Bo=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ho(t,e,n,r)},Wo=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!$o(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!qo(n))throw new Error(Object(o["p"])(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vo(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],o=i.getPath();null===n||we(o,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ko(t,e,n){Vo(t,n),Go(t,t=>Ce(t,e)||Ce(e,t))}function Go(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const o=i.path;e(o)?(Yo(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Yo(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const r=n.getEventRunner();b&&I("event: "+n.toString()),K(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="repo_interrupt",Jo=25;class Xo{constructor(t,e,n,r){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mn(),this.transactionQueueTree_=new Io,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zo(t,e,n){if(t.stats_=mt(t.repoInfo_),t.forceRestClient_||G())t.server_=new An(t.repoInfo_,(e,n,r,i)=>{ns(t,e,n,r,i)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>rs(t,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(o["H"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Me(t.repoInfo_,e,(e,n,r,i)=>{ns(t,e,n,r,i)},e=>{rs(t,e)},e=>{is(t,e)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(e=>{t.server_.refreshAuthToken(e)}),t.appCheckProvider_.addTokenChangeListener(e=>{t.server_.refreshAppCheckToken(e.token)}),t.statsReporter_=vt(t.repoInfo_,()=>new Wn(t.stats_,t.server_)),t.infoData_=new Dn,t.infoSyncTree_=new qi({startListening:(e,n,r,i)=>{let o=[];const s=t.infoData_.getNode(e._path);return s.isEmpty()||(o=Bi(t.infoSyncTree_,e._path,s),setTimeout(()=>{i("ok")},0)),o},stopListening:()=>{}}),os(t,"connected",!1),t.serverSyncTree_=new qi({startListening:(e,n,r,i)=>(t.server_.listen(e,r,n,(n,r)=>{const o=i(n,r);Ko(t.eventQueue_,e._path,o)}),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function ts(t){const e=t.infoData_.getNode(new le(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function es(t){return mo({timestamp:ts(t)})}function ns(t,e,n,r,i){t.dataUpdateCount++;const s=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(i)if(r){const e=Object(o["C"])(n,t=>gn(t));a=Yi(t.serverSyncTree_,s,e,i)}else{const e=gn(n);a=Gi(t.serverSyncTree_,s,e,i)}else if(r){const e=Object(o["C"])(n,t=>gn(t));a=Wi(t.serverSyncTree_,s,e)}else{const e=gn(n);a=Bi(t.serverSyncTree_,s,e)}let c=s;a.length>0&&(c=ps(t,s)),Ko(t.eventQueue_,c,a)}function rs(t,e){os(t,"connected",e),!1===e&&cs(t)}function is(t,e){$(e,(e,n)=>{os(t,e,n)})}function os(t,e,n){const r=new le("/.info/"+e),i=gn(n);t.infoData_.updateSnapshot(r,i);const o=Bi(t.infoSyncTree_,r,i);Ko(t.eventQueue_,r,o)}function ss(t){return t.nextWriteId_++}function as(t,e,n){const r=Xi(t.serverSyncTree_,e);return null!=r?Promise.resolve(r):t.server_.get(e).then(r=>{const i=gn(r).withIndex(e._queryParams.getIndex());let o;if(Qi(t.serverSyncTree_,e,n,!0),e._queryParams.loadsAllData())o=Bi(t.serverSyncTree_,e._path,i);else{const n=ro(t.serverSyncTree_,e);o=Gi(t.serverSyncTree_,e._path,i,n)}return Ko(t.eventQueue_,e._path,o),Ki(t.serverSyncTree_,e,n,null,!0),i},n=>(us(t,"get for query "+Object(o["H"])(e)+" failed: "+n),Promise.reject(new Error(n))))}function cs(t){us(t,"onDisconnectEvents");const e=es(t),n=Mn();$n(t.onDisconnect_,ue(),(r,i)=>{const o=bo(r,i,t.serverSyncTree_,e);Ln(n,r,o)});let r=[];$n(n,ue(),(e,n)=>{r=r.concat(Bi(t.serverSyncTree_,e,n));const i=bs(t,e);ps(t,i)}),t.onDisconnect_=Mn(),Ko(t.eventQueue_,ue(),r)}function ls(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Qo)}function us(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),I(n,...e)}function hs(t,e,n){return Ji(t.serverSyncTree_,e,n)||pn.EMPTY_NODE}function ds(t,e=t.transactionQueueTree_){if(e||ys(t,e),ko(e)){const n=vs(t,e);Object(o["f"])(n.length>0,"Sending zero length transaction queue");const r=n.every(t=>0===t.status);r&&fs(t,jo(e),n)}else So(e)&&xo(e,e=>{ds(t,e)})}function fs(t,e,n){const r=n.map(t=>t.currentWriteId),i=hs(t,e,r);let s=i;const a=i.hash();for(let u=0;u<n.length;u++){const t=n[u];Object(o["f"])(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const r=be(e,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}const c=s.val(!0),l=e;t.server_.put(l.toString(),c,r=>{us(t,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let e=0;e<n.length;e++)n[e].status=2,i=i.concat(Hi(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&r.push(()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved)),n[e].unwatcher();ys(t,Eo(t.transactionQueueTree_,e)),ds(t,t.transactionQueueTree_),Ko(t.eventQueue_,e,i);for(let t=0;t<r.length;t++)K(r[t])}else{if("datastale"===r)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{S("transaction at "+l.toString()+" failed: "+r);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=r}ps(t,e)}},a)}function ps(t,e){const n=ms(t,e),r=jo(n),i=vs(t,n);return _s(t,i,r),r}function _s(t,e,n){if(0===e.length)return;const r=[];let i=[];const s=e.filter(t=>0===t.status),a=s.map(t=>t.currentWriteId);for(let c=0;c<e.length;c++){const s=e[c],l=be(n,s.path);let u,h=!1;if(Object(o["f"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,i=i.concat(Hi(t.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=Jo)h=!0,u="maxretry",i=i.concat(Hi(t.serverSyncTree_,s.currentWriteId,!0));else{const n=hs(t,s.path,a);s.currentInputSnapshot=n;const r=e[c].update(n.val());if(void 0!==r){Uo("transaction failed: Data returned ",r,s.path);let e=gn(r);const c="object"===typeof r&&null!=r&&Object(o["l"])(r,".priority");c||(e=e.updatePriority(n.getPriority()));const l=s.currentWriteId,u=es(t),h=wo(e,n,u);s.currentOutputSnapshotRaw=e,s.currentOutputSnapshotResolved=h,s.currentWriteId=ss(t),a.splice(a.indexOf(l),1),i=i.concat(Ui(t.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(Hi(t.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(Hi(t.serverSyncTree_,s.currentWriteId,!0))}Ko(t.eventQueue_,n,i),i=[],h&&(e[c].status=2,function(t){setTimeout(t,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&("nodata"===u?r.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):r.push(()=>e[c].onComplete(new Error(u),!1,null))))}ys(t,t.transactionQueueTree_);for(let o=0;o<r.length;o++)K(r[o]);ds(t,t.transactionQueueTree_)}function ms(t,e){let n,r=t.transactionQueueTree_;n=he(e);while(null!==n&&void 0===ko(r))r=Eo(r,n),e=fe(e),n=he(e);return r}function vs(t,e){const n=[];return gs(t,e,n),n.sort((t,e)=>t.order-e.order),n}function gs(t,e,n){const r=ko(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);xo(e,e=>{gs(t,e,n)})}function ys(t,e){const n=ko(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,To(e,n.length>0?n:void 0)}xo(e,e=>{ys(t,e)})}function bs(t,e){const n=jo(ms(t,e)),r=Eo(t.transactionQueueTree_,e);return No(r,e=>{ws(t,e)}),ws(t,r),Po(r,e=>{ws(t,e)}),n}function ws(t,e){const n=ko(e);if(n){const r=[];let i=[],s=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?(Object(o["f"])(s===e-1,"All SENT items should be at beginning of queue."),s=e,n[e].status=3,n[e].abortReason="set"):(Object(o["f"])(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),i=i.concat(Hi(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&r.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===s?To(e,void 0):n.length=s+1,Ko(t.eventQueue_,jo(e),i);for(let t=0;t<r.length;t++)K(r[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let t=n[i];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(r){}e+="/"+t}return e}function Is(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):S(`Invalid query segment '${n}' in query '${t}'`)}return e}const Es=function(t,e){const n=ks(t),r=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ut(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new le(n.pathString)}},ks=function(t){let e="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof t){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");-1===u&&(u=t.length);let h=t.indexOf("?");-1===h&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Cs(t.substring(u,h)));const d=Is(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");r=e.substring(0,t).toLowerCase(),n=e.substring(t+1),o=r}"ns"in d&&(o=d["ns"])}return{host:e,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}},Ts="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let t=0;const e=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(t,e,n,r){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=r}getPath(){const t=this.snapshot.ref;return"value"===this.eventType?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(o["H"])(this.snapshot.exportVal())}}class Os{constructor(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e){this.snapshotCallback=t,this.cancelCallback=e}onValue(t,e){this.snapshotCallback.call(null,t,e)}onCancel(t){return Object(o["f"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{constructor(t,e,n,r){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=r}get key(){return ye(this._path)?null:pe(this._path)}get ref(){return new Ns(this._repo,this._path)}get _queryIdentifier(){const t=Rn(this._queryParams),e=M(t);return"{}"===e?"default":e}get _queryObject(){return Rn(this._queryParams)}isEqual(t){if(t=Object(o["s"])(t),!(t instanceof Ps))return!1;const e=this._repo===t._repo,n=we(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return e&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+_e(this._path)}}class Ns extends Ps{constructor(t,e){super(t,e,new Pn,!1)}get parent(){const t=ve(this._path);return null===t?null:new Ns(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}class js{constructor(t,e,n){this._node=t,this.ref=e,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new le(t),n=As(this.ref,t);return new js(this._node.getChild(e),n,sn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,(e,n)=>t(new js(n,As(this.ref,e),sn)))}hasChild(t){const e=new le(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rs(t,e){return t=Object(o["s"])(t),t._checkNotDeleted("ref"),void 0!==e?As(t._root,e):t._root}function As(t,e){return t=Object(o["s"])(t),null===he(t._path)?Bo("child","path",e,!1):Ho("child","path",e,!1),new Ns(t._repo,ge(t._path,e))}function Ds(t){t=Object(o["s"])(t);const e=new xs(()=>{}),n=new Ms(e);return as(t._repo,t,n).then(e=>new js(e,new Ns(t._repo,t._path),t._queryParams.getIndex()))}class Ms{constructor(t){this.callbackContext=t}respondsTo(t){return"value"===t}createEvent(t,e){const n=e._queryParams.getIndex();return new Ss("value",this,new js(t.snapshotNode,new Ns(e._repo,e._path),n))}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new Os(this,t,e):null}matches(t){return t instanceof Ms&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}Ei(Ns),Li(Ns);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ls="FIREBASE_DATABASE_EMULATOR_HOST",$s={};let Fs=!1;function qs(t,e,n,r){t.repoInfo_=new ut(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function Us(e,n,r,i,o){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),I("Using default host for project ",e.options.projectId),s=e.options.projectId+"-default-rtdb.firebaseio.com");let a,c=Es(s,o),l=c.repoInfo,u=void 0;"undefined"!==typeof t&&Object({NODE_ENV:"production",BASE_URL:"/memories/"})&&(u=Object({NODE_ENV:"production",BASE_URL:"/memories/"})[Ls]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,c=Es(s,o),l=c.repoInfo):a=!c.repoInfo.secure;const h=o&&a?new X(X.OWNER):new J(e.name,e.options,n);Wo("Invalid Firebase Database URL",c),ye(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Bs(l,e,h,new Q(e.name,r));return new Ws(d,e)}function Hs(t,e){const n=$s[e];n&&n[t.key]===t||T(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ls(t),delete n[t.key]}function Bs(t,e,n,r){let i=$s[e.name];i||(i={},$s[e.name]=i);let o=i[t.toURLString()];return o&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Xo(t,Fs,n,r),i[t.toURLString()]=o,o}class Ws{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zo(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ns(this._repo,ue())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Hs(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&T("Cannot call "+t+" on a deleted database.")}}function zs(t=Object(r["d"])(),e){const n=Object(r["b"])(t,"database").getImmediate({identifier:e}),i=Object(o["r"])("database");return i&&Vs(n,...i),n}function Vs(t,e,n,r={}){t=Object(o["s"])(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new X(X.OWNER);else if(r.mockUserToken){const e="string"===typeof r.mockUserToken?r.mockUserToken:Object(o["m"])(r.mockUserToken,t.app.options.projectId);s=new X(e)}qs(i,e,n,s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ks(t){u(r["a"]),Object(r["c"])(new i["a"]("database",(t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return Us(n,r,i,e)},"PUBLIC").setMultipleInstances(!0)),Object(r["f"])(a,c,t),Object(r["f"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Me.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Ks()}).call(this,n("4362"))},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return K})),n.d(e,"b",(function(){return B})),n.d(e,"c",(function(){return H})),n.d(e,"d",(function(){return Y})),n.d(e,"e",(function(){return G})),n.d(e,"f",(function(){return Q}));var r=n("22e5"),i=n("e691"),o=n("1fd5"),s=n("1d25");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(c(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function c(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const l="@firebase/app",u="0.9.0",h=new i["b"]("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",_="@firebase/app-check-compat",m="@firebase/app-check",v="@firebase/auth",g="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",C="@firebase/functions-compat",I="@firebase/installations",E="@firebase/installations-compat",k="@firebase/messaging",T="@firebase/messaging-compat",S="@firebase/performance",O="@firebase/performance-compat",x="@firebase/remote-config",P="@firebase/remote-config-compat",N="@firebase/storage",j="@firebase/storage-compat",R="@firebase/firestore",A="@firebase/firestore-compat",D="firebase",M="9.15.0",L="[DEFAULT]",$={[l]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[_]:"fire-app-check-compat",[v]:"fire-auth",[g]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[C]:"fire-fn-compat",[I]:"fire-iid",[E]:"fire-iid-compat",[k]:"fire-fcm",[T]:"fire-fcm-compat",[S]:"fire-perf",[O]:"fire-perf-compat",[x]:"fire-rc",[P]:"fire-rc-compat",[N]:"fire-gcs",[j]:"fire-gcs-compat",[R]:"fire-fst",[A]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},F=new Map,q=new Map;function U(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function H(t){const e=t.name;if(q.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;q.set(e,t);for(const n of F.values())U(n,t);return!0}function B(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},z=new o["b"]("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=M;function G(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:L,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw z.create("bad-app-name",{appName:String(s)});if(n||(n=Object(o["q"])()),!n)throw z.create("no-options");const a=F.get(s);if(a){if(Object(o["o"])(n,a.options)&&Object(o["o"])(i,a.config))return a;throw z.create("duplicate-app",{appName:s})}const c=new r["b"](s);for(const r of q.values())c.addComponent(r);const l=new V(n,i,c);return F.set(s,l),l}function Y(t=L){const e=F.get(t);if(!e&&t===L)return G();if(!e)throw z.create("no-app",{appName:t});return e}function Q(t,e,n){var i;let o=null!==(i=$[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}H(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="firebase-heartbeat-database",X=1,Z="firebase-heartbeat-store";let tt=null;function et(){return tt||(tt=Object(s["a"])(J,X,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Z)}}}).catch(t=>{throw z.create("idb-open",{originalErrorMessage:t.message})})),tt}async function nt(t){try{const e=await et();return e.transaction(Z).objectStore(Z).get(it(t))}catch(e){if(e instanceof o["c"])h.warn(e.message);else{const t=z.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});h.warn(t.message)}}}async function rt(t,e){try{const n=await et(),r=n.transaction(Z,"readwrite"),i=r.objectStore(Z);return await i.put(e,it(t)),r.done}catch(n){if(n instanceof o["c"])h.warn(n.message);else{const t=z.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(t.message)}}}function it(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=1024,st=2592e6;class at{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ut(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=ct();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(t=>t.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=st}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ct(),{heartbeatsToSend:e,unsentEntries:n}=lt(this._heartbeatsCache.heartbeats),r=Object(o["j"])(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ct(){const t=new Date;return t.toISOString().substring(0,10)}function lt(t,e=ot){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),ht(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ht(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ut{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o["w"])()&&Object(o["I"])().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await nt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ht(t){return Object(o["j"])(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){H(new r["a"]("platform-logger",t=>new a(t),"PRIVATE")),H(new r["a"]("heartbeat",t=>new at(t),"PRIVATE")),Q(l,u,t),Q(l,u,"esm2017"),Q("fire-js","")}dt("")},"7c01":function(t,e,n){"use strict";var r=n("51b0");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]}))},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.4
  * (c) 2022 Evan You
  * @license MIT
  */function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,o).replace(s,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function l(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(u):u(s)}return r}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=_(o)}catch(a){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:g(e,i),matched:t?v(t):[]};return n&&(s.redirectedFrom=g(n,i)),Object.freeze(s)}function _(t){if(Array.isArray(t))return t.map(_);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=_(t[n]);return e}return t}var m=p(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function g(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||d;return(n||"/")+o(r)+i}function y(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&(n||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],s=r[i];if(s!==n)return!1;var a=e[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?b(o,a):String(o)===String(a)}))}function w(t,e){return 0===t.path.replace(f,"/").indexOf(e.path.replace(f,"/"))&&(!e.hash||t.hash===e.hash)&&C(t.query,e.query)}function C(t,e){for(var n in e)if(!(n in t))return!1;return!0}function I(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var E={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,o=e.parent,s=e.data;s.routerView=!0;var a=o.$createElement,c=n.name,l=o.$route,u=o._routerViewCache||(o._routerViewCache={}),h=0,d=!1;while(o&&o._routerRoot!==o){var f=o.$vnode?o.$vnode.data:{};f.routerView&&h++,f.keepAlive&&o._directInactive&&o._inactive&&(d=!0),o=o.$parent}if(s.routerViewDepth=h,d){var p=u[c],_=p&&p.component;return _?(p.configProps&&k(_,s,p.route,p.configProps),a(_,s,i)):a()}var m=l.matched[h],v=m&&m.components[c];if(!m||!v)return u[c]=null,a();u[c]={component:v},s.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),I(l)};var g=m.props&&m.props[c];return g&&(r(u[c],{route:l,configProps:g}),k(v,s,l,g)),a(v,s,i)}};function k(t,e,n,i){var o=e.props=T(n,i);if(o){o=e.props=r({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function T(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function S(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function O(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var P=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},N=Q,j=L,R=$,A=U,D=Y,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t,e){var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var c=n[0],l=n[1],u=n.index;if(s+=t.slice(o,u),o=u+c.length,l)s+=l[1];else{var h=t[o],d=n[2],f=n[3],p=n[4],_=n[5],m=n[6],v=n[7];s&&(r.push(s),s="");var g=null!=d&&null!=h&&h!==d,y="+"===m||"*"===m,b="?"===m||"*"===m,w=n[2]||a,C=p||_;r.push({name:f||i++,prefix:d||"",delimiter:w,optional:b,repeat:y,partial:g,asterisk:!!v,pattern:C?B(C):v?".*":"[^"+H(w)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function $(t,e){return U(L(t,e),e)}function F(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function q(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function U(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",z(e)));return function(e,r){for(var i="",o=e||{},s=r||{},a=s.pretty?F:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!==typeof l){var u,h=o[l.name];if(null==h){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(P(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=a(h[d]),!n[c].test(u))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(u)+"`");i+=(0===d?l.prefix:l.delimiter)+u}}else{if(u=l.asterisk?q(h):a(h),!n[c].test(u))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+u+'"');i+=l.prefix+u}}else i+=l}return i}}function H(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function B(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function W(t,e){return t.keys=e,t}function z(t){return t&&t.sensitive?"":"i"}function V(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return W(t,e)}function K(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(Q(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",z(n));return W(o,e)}function G(t,e,n){return Y(L(t,n),e,n)}function Y(t,e,n){P(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"===typeof a)o+=H(a);else{var c=H(a.prefix),l="(?:"+a.pattern+")";e.push(a),a.repeat&&(l+="(?:"+c+l+")*"),l=a.optional?a.partial?c+"("+l+")?":"(?:"+c+"("+l+"))?":c+"("+l+")",o+=l}}var u=H(n.delimiter||"/"),h=o.slice(-u.length)===u;return r||(o=(h?o.slice(0,-u.length):o)+"(?:"+u+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+u+"|$)",W(new RegExp("^"+o,z(n)),e)}function Q(t,e,n){return P(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?V(t,e):P(t)?K(t,e,n):G(t,e,n)}N.parse=j,N.compile=R,N.tokensToFunction=A,N.tokensToRegExp=D;var J=Object.create(null);function X(t,e,n){e=e||{};try{var r=J[t]||(J[t]=N.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=r({},t);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&e){o=r({},o),o._normalized=!0;var a=r(r({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=X(c,a,"path "+e.path)}else 0;return o}var u=O(o.path||""),h=e&&e.path||"/",d=u.path?S(u.path,h,n||o.append):h,f=l(u.query,o.query,i&&i.options.parseQuery),p=o.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,l={},u=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==u?"router-link-active":u,f=null==h?"router-link-exact-active":h,_=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;l[m]=y(i,v,this.exactPath),l[_]=this.exact||this.exactPath?l[m]:w(i,v);var g=l[m]?this.ariaCurrentValue:null,b=function(t){ot(t)&&(e.replace?n.replace(s,rt):n.push(s,rt))},C={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){C[t]=b})):C[this.event]=b;var I={class:l},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:l[_],isExactActive:l[m]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)I.on=C,I.attrs={href:c,"aria-current":g};else{var k=st(this.$slots.default);if(k){k.isStatic=!1;var T=k.data=r({},k.data);for(var S in T.on=T.on||{},T.on){var O=T.on[S];S in C&&(T.on[S]=Array.isArray(O)?O:[O])}for(var x in C)x in T.on?T.on[x].push(C[x]):T.on[x]=b;var P=k.data.attrs=r({},k.data.attrs);P.href=c,P["aria-current"]=g}else I.on=C}return t(this.tag,I,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",E),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function lt(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){ut(o,s,a,t,i)}));for(var c=0,l=o.length;c<l;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),l--,c--);return{pathList:o,pathMap:s,nameMap:a}}function ut(t,e,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},l=dt(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var u={path:l,regex:ht(l,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?x(o+"/"+r.path):void 0;ut(t,e,n,r,u,i)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};ut(t,e,n,p,i,u.path||"/")}a&&(n[a]||(n[a]=u))}function ht(t,e){var n=N(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}function ft(t,e){var n=lt(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t){lt(t,r,i,o)}function a(t,e){var n="object"!==typeof t?o[t]:void 0;lt([e||t],r,i,o,n),n&&n.alias.length&&lt(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function c(){return r.map((function(t){return i[t]}))}function l(t,n,s){var a=Z(t,n,!1,e),c=a.name;if(c){var l=o[c];if(!l)return d(null,a);var u=l.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&u.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=X(l.path,a.params,'named route "'+c+'"'),d(l,a,s)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],_=i[p];if(pt(_.regex,a.path,a.params))return d(_,a,s)}}return d(null,a)}function u(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var s=i,a=s.name,c=s.path,u=n.query,h=n.hash,f=n.params;if(u=s.hasOwnProperty("query")?s.query:u,h=s.hasOwnProperty("hash")?s.hash:h,f=s.hasOwnProperty("params")?s.params:f,a){o[a];return l({_normalized:!0,name:a,query:u,hash:h,params:f},void 0,n)}if(c){var _=_t(c,t),m=X(_,f,'redirect route with path "'+_+'"');return l({_normalized:!0,path:m,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var r=X(n,e.params,'aliased route with path "'+n+'"'),i=l({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return e.params=i.params,d(s,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?u(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:l,addRoute:a,getRoutes:c,addRoutes:s}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function _t(t,e){return S(t,e.parent?e.parent.path:"/",!0)}var mt=ct&&window.performance&&window.performance.now?window.performance:Date;function vt(){return mt.now().toFixed(3)}var gt=vt();function yt(){return gt}function bt(t){return gt=t}var wt=Object.create(null);function Ct(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=yt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",kt),function(){window.removeEventListener("popstate",kt)}}function It(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=Tt(),s=i.call(t,e,n,r?o:null);s&&("function"===typeof s.then?s.then((function(t){Rt(t,o)})).catch((function(t){0})):Rt(s,o))}))}}function Et(){var t=yt();t&&(wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function kt(t){Et(),t.state&&t.state.key&&bt(t.state.key)}function Tt(){var t=yt();if(t)return wt[t]}function St(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function Ot(t){return Nt(t.x)||Nt(t.y)}function xt(t){return{x:Nt(t.x)?t.x:window.pageXOffset,y:Nt(t.y)?t.y:window.pageYOffset}}function Pt(t){return{x:Nt(t.x)?t.x:0,y:Nt(t.y)?t.y:0}}function Nt(t){return"number"===typeof t}var jt=/^#\d/;function Rt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=jt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Pt(i),e=St(r,i)}else Ot(t)&&(e=xt(t))}else n&&Ot(t)&&(e=xt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var At=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Dt(t,e){Et();var n=window.history;try{if(e){var i=r({},n.state);i.key=yt(),n.replaceState(i,"",t)}else n.pushState({key:bt(vt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function Mt(t){Dt(t,!0)}function Lt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var $t={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ft(t,e){return Bt(t,e,$t.redirected,'Redirected when going from "'+t.fullPath+'" to "'+zt(e)+'" via a navigation guard.')}function qt(t,e){var n=Bt(t,e,$t.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Ut(t,e){return Bt(t,e,$t.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Ht(t,e){return Bt(t,e,$t.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Bt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var Wt=["params","query","hash"];function zt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Wt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Vt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return Vt(t)&&t._isRouter&&(null==e||t.type===e)}function Gt(t){return function(e,n,r){var i=!1,o=0,s=null;Yt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,l=Zt((function(e){Xt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,o--,o<=0&&r()})),u=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=Vt(t)?t:new Error(e),r(s))}));try{c=t(l,u)}catch(d){u(d)}if(c)if("function"===typeof c.then)c.then(l,u);else{var h=c.component;h&&"function"===typeof h.then&&h.then(l,u)}}})),i||r()}}function Yt(t,e){return Qt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Qt(t){return Array.prototype.concat.apply([],t)}var Jt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Xt(t){return t.__esModule||Jt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Yt(t,(function(t,r,i,o){var s=ie(t,e);if(s)return Array.isArray(s)?s.map((function(t){return n(t,r,i,o)})):n(s,r,i,o)}));return Qt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function oe(t){return re(t,"beforeRouteLeave",ae,!0)}function se(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return le(t,n,r)}))}function le(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach((function(t){t(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Kt(t,$t.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o=function(t){!Kt(t)&&Vt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},s=t.matched.length-1,a=i.matched.length-1;if(y(t,i)&&s===a&&t.matched[s]===i.matched[a])return this.ensureURL(),t.hash&&It(this.router,i,t,!1),o(qt(i,t));var c=ne(this.current.matched,t.matched),l=c.updated,u=c.deactivated,h=c.activated,d=[].concat(oe(u),this.router.beforeHooks,se(l),h.map((function(t){return t.beforeEnter})),Gt(h)),f=function(e,n){if(r.pending!==t)return o(Ut(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),o(Ht(i,t))):Vt(e)?(r.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(Ft(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(s){o(s)}};Lt(d,f,(function(){var n=ce(h),s=n.concat(r.router.resolveHooks);Lt(s,f,(function(){if(r.pending!==t)return o(Ut(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){I(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var ue=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=At&&n;r&&this.listeners.push(Ct());var i=function(){var n=t.current,i=he(t.base);t.current===m&&i===t._startLocation||t.transitionTo(i,(function(t){r&&It(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Dt(x(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Mt(x(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?Dt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(x(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,r){t.call(this,e,n),r&&fe(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=At&&n;r&&this.listeners.push(Ct());var i=function(){var e=t.current;pe()&&t.transitionTo(_e(),(function(n){r&&It(t.router,n,e,!0),At||ge(n.fullPath)}))},o=At?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ge(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;_e()!==e&&(t?ve(e):ge(e))},e.prototype.getCurrentLocation=function(){return _e()},e}(te);function fe(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function pe(){var t=_e();return"/"===t.charAt(0)||(ge("/"+t),!1)}function _e(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ve(t){At?Dt(me(t)):window.location.hash=t}function ge(t){At?Mt(me(t)):window.location.replace(me(t))}var ye=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Kt(t,$t.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ft(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!At&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new ye(this,t.base);break;default:0}},we={currentRoute:{configurable:!0}};function Ce(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ie(t,e,n){var r="hash"===n?"#"+e:e;return t?x(t+"/"+r):r}be.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},we.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ue||n instanceof de){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=At&&i;o&&"fullPath"in t&&It(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return Ce(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return Ce(this.resolveHooks,t)},be.prototype.afterEach=function(t){return Ce(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},be.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Ie(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,we),be.install=at,be.version="3.5.4",be.isNavigationFailure=Kt,be.NavigationFailureType=$t,be.START_LOCATION=m,ct&&window.Vue&&window.Vue.use(be),e["a"]=be},bc7b:function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["e"]}));var i="firebase",o="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(i,o,"app")},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var l=[];for(c=a;c<i.length;c++)l.push("..");return l=l.concat(o.slice(a)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function u(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...o)=>{const s=o.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:s,args:o,type:e.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.0376f906.js.map