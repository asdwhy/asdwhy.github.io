(self.webpackChunkjecs=self.webpackChunkjecs||[]).push([[765],{4765:function(t,e,o){"use strict";o.d(e,{tE:function(){return T},X6:function(){return f},yG:function(){return w}});var s=o(8583),i=o(7716),n=o(6215),r=o(9765),u=o(5917),c=o(6461),h=o(7393);class d{constructor(t){this.total=t}call(t,e){return e.subscribe(new l(t,this.total))}}class l extends h.L{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){++this.count>this.total&&this.destination.next(t)}}o(5257);var a=o(7519),_=o(6782),m=o(9490),g=o(521);function f(t){return 0===t.offsetX&&0===t.offsetY}function w(t){const e=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!(!e||-1!==e.identifier||null!=e.radiusX&&1!==e.radiusX||null!=e.radiusY&&1!==e.radiusY)}o(9578),"undefined"!=typeof Element&&Element;const L=new i.OlP("cdk-input-modality-detector-options"),p={ignoreKeys:[c.zL,c.jx,c.b2,c.MW,c.JU]},F=(0,g.i$)({passive:!0,capture:!0});let y=(()=>{class t{constructor(t,e,o,s){this._platform=t,this._mostRecentTarget=null,this._modality=new n.X(null),this._lastTouchMs=0,this._onKeydown=t=>{var e,o;(null===(o=null===(e=this._options)||void 0===e?void 0:e.ignoreKeys)||void 0===o?void 0:o.some(e=>e===t.keyCode))||(this._modality.next("keyboard"),this._mostRecentTarget=(0,g.sA)(t))},this._onMousedown=t=>{Date.now()-this._lastTouchMs<650||(this._modality.next(f(t)?"keyboard":"mouse"),this._mostRecentTarget=(0,g.sA)(t))},this._onTouchstart=t=>{w(t)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,g.sA)(t))},this._options=Object.assign(Object.assign({},p),s),this.modalityDetected=this._modality.pipe(t=>t.lift(new d(1))),this.modalityChanged=this.modalityDetected.pipe((0,a.x)()),t.isBrowser&&e.runOutsideAngular(()=>{o.addEventListener("keydown",this._onKeydown,F),o.addEventListener("mousedown",this._onMousedown,F),o.addEventListener("touchstart",this._onTouchstart,F)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,F),document.removeEventListener("mousedown",this._onMousedown,F),document.removeEventListener("touchstart",this._onTouchstart,F))}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(g.t4),i.LFG(i.R0b),i.LFG(s.K0),i.LFG(L,8))},t.\u0275prov=i.Yz7({factory:function(){return new t(i.LFG(g.t4),i.LFG(i.R0b),i.LFG(s.K0),i.LFG(L,8))},token:t,providedIn:"root"}),t})();const v=new i.OlP("cdk-focus-monitor-default-options"),C=(0,g.i$)({passive:!0,capture:!0});let T=(()=>{class t{constructor(t,e,o,s,i){this._ngZone=t,this._platform=e,this._inputModalityDetector=o,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new r.xQ,this._rootNodeFocusAndBlurListener=t=>{const e=(0,g.sA)(t),o="focus"===t.type?this._onFocus:this._onBlur;for(let s=e;s;s=s.parentElement)o.call(this,t,s)},this._document=s,this._detectionMode=(null==i?void 0:i.detectionMode)||0}monitor(t,e=!1){const o=(0,m.fI)(t);if(!this._platform.isBrowser||1!==o.nodeType)return(0,u.of)(null);const s=(0,g.kV)(o)||this._getDocument(),i=this._elementInfo.get(o);if(i)return e&&(i.checkChildren=!0),i.subject;const n={checkChildren:e,subject:new r.xQ,rootNode:s};return this._elementInfo.set(o,n),this._registerGlobalListeners(n),n.subject}stopMonitoring(t){const e=(0,m.fI)(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){const s=(0,m.fI)(t);s===this._getDocument().activeElement?this._getClosestElementsInfo(s).forEach(([t,o])=>this._originChanged(t,e,o)):(this._setOrigin(e),"function"==typeof s.focus&&s.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_toggleClass(t,e,o){o?t.classList.add(e):t.classList.remove(e)}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:"program"}_shouldBeAttributedToTouch(t){return 1===this._detectionMode||!!(null==t?void 0:t.contains(this._inputModalityDetector._mostRecentTarget))}_setClasses(t,e){this._toggleClass(t,"cdk-focused",!!e),this._toggleClass(t,"cdk-touch-focused","touch"===e),this._toggleClass(t,"cdk-keyboard-focused","keyboard"===e),this._toggleClass(t,"cdk-mouse-focused","mouse"===e),this._toggleClass(t,"cdk-program-focused","program"===e)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{this._origin=t,this._originFromTouchInteraction="touch"===t&&e,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(t,e){const o=this._elementInfo.get(e),s=(0,g.sA)(t);o&&(o.checkChildren||e===s)&&this._originChanged(e,this._getFocusOrigin(s),o)}_onBlur(t,e){const o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o.subject,null))}_emitOrigin(t,e){this._ngZone.run(()=>t.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;const e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,C),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,C)}),this._rootNodeFocusListenerCount.set(e,o+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,_.R)(this._stopInputModalityDetector)).subscribe(t=>{this._setOrigin(t,!0)}))}_removeGlobalListeners(t){const e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){const t=this._rootNodeFocusListenerCount.get(e);t>1?this._rootNodeFocusListenerCount.set(e,t-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,C),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,C),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o.subject,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){const e=[];return this._elementInfo.forEach((o,s)=>{(s===t||o.checkChildren&&s.contains(t))&&e.push([s,o])}),e}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(i.R0b),i.LFG(g.t4),i.LFG(y),i.LFG(s.K0,8),i.LFG(v,8))},t.\u0275prov=i.Yz7({factory:function(){return new t(i.LFG(i.R0b),i.LFG(g.t4),i.LFG(y),i.LFG(s.K0,8),i.LFG(v,8))},token:t,providedIn:"root"}),t})()}}]);