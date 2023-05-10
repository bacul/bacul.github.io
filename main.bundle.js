(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var r=i.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{const e=[{topLeftX:205,topLeftY:190,points:[{x:220,y:190},{x:220,y:235},{x:265,y:235},{x:265,y:250},{x:220,y:250},{x:220,y:295},{x:205,y:295},{x:205,y:190}]},{topLeftX:250,topLeftY:190,points:[{x:355,y:190},{x:355,y:205},{x:310,y:205},{x:310,y:250},{x:295,y:250},{x:295,y:205},{x:250,y:205},{x:250,y:190}]},{topLeftX:340,topLeftY:235,points:[{x:385,y:235},{x:385,y:190},{x:400,y:190},{x:400,y:295},{x:385,y:295},{x:385,y:250},{x:340,y:250},{x:340,y:235}]},{topLeftX:250,topLeftY:370,points:[{x:355,y:370},{x:355,y:385},{x:310,y:385},{x:310,y:430},{x:295,y:430},{x:295,y:385},{x:250,y:385},{x:250,y:370}]},{topLeftX:130,topLeftY:415,points:[{x:175,y:415},{x:175,y:475},{x:160,y:475},{x:160,y:430},{x:130,y:430},{x:130,y:415}]},{topLeftX:430,topLeftY:415,points:[{x:475,y:415},{x:475,y:430},{x:445,y:430},{x:445,y:475},{x:430,y:475},{x:430,y:415}]},{topLeftX:130,topLeftY:505,points:[{x:205,y:505},{x:205,y:460},{x:220,y:460},{x:220,y:505},{x:265,y:505},{x:265,y:520},{x:130,y:520},{x:130,y:505}]},{topLeftX:250,topLeftY:460,points:[{x:355,y:460},{x:355,y:475},{x:310,y:475},{x:310,y:520},{x:295,y:520},{x:295,y:475},{x:250,y:475},{x:250,y:460}]},{topLeftX:340,topLeftY:505,points:[{x:385,y:505},{x:385,y:460},{x:400,y:460},{x:400,y:505},{x:475,y:505},{x:475,y:520},{x:340,y:520},{x:340,y:505}]}],t=[{topLeftX:130,topLeftY:130,width:45,height:30},{topLeftX:205,topLeftY:130,width:60,height:30},{topLeftX:295,topLeftY:100,width:15,height:60,invisible:!0},{topLeftX:340,topLeftY:130,width:60,height:30},{topLeftX:430,topLeftY:130,width:45,height:30},{topLeftX:130,topLeftY:190,width:45,height:15},{topLeftX:430,topLeftY:190,width:45,height:15},{topLeftX:75,topLeftY:235,width:100,height:60,invisible:!0},{topLeftX:430,topLeftY:235,width:100,height:60,invisible:!0},{topLeftX:250,topLeftY:280,width:105,height:60},{topLeftX:75,topLeftY:325,width:100,height:60,invisible:!0},{topLeftX:430,topLeftY:325,width:100,height:60,invisible:!0},{topLeftX:205,topLeftY:325,width:15,height:60},{topLeftX:385,topLeftY:325,width:15,height:60},{topLeftX:205,topLeftY:415,width:60,height:15},{topLeftX:340,topLeftY:415,width:60,height:15},{topLeftX:100,topLeftY:460,width:30,height:15,invisible:!0},{topLeftX:475,topLeftY:460,width:30,height:15,invisible:!0},{topLeftX:95,topLeftY:95,width:5,height:135,invisible:!0},{topLeftX:95,topLeftY:385,width:5,height:165,invisible:!0},{topLeftX:505,topLeftY:95,width:5,height:135,invisible:!0},{topLeftX:505,topLeftY:385,width:5,height:165,invisible:!0}],i=[{topLeftX:90,topLeftY:295,points:[{x:90,y:295},{x:175,y:295},{x:175,y:235},{x:100,y:235},{x:100,y:100},{x:295,y:100},{x:295,y:160},{x:310,y:160},{x:310,y:100},{x:505,y:100},{x:505,y:235},{x:430,y:235},{x:430,y:295},{x:505,y:295},{x:515,y:295}]},{topLeftX:90,topLeftY:290,points:[{x:90,y:290},{x:170,y:290},{x:170,y:240},{x:95,y:240},{x:95,y:95},{x:510,y:95},{x:510,y:240},{x:435,y:240},{x:435,y:290},{x:515,y:290}]},{topLeftX:90,topLeftY:325,points:[{x:90,y:325},{x:175,y:325},{x:175,y:385},{x:100,y:385},{x:100,y:460},{x:130,y:460},{x:130,y:475},{x:100,y:475},{x:100,y:550},{x:505,y:550},{x:505,y:475},{x:475,y:475},{x:475,y:460},{x:505,y:460},{x:505,y:385},{x:430,y:385},{x:430,y:325},{x:515,y:325}]},{topLeftX:90,topLeftY:330,points:[{x:90,y:330},{x:170,y:330},{x:170,y:380},{x:95,y:380},{x:95,y:555},{x:510,y:555},{x:510,y:380},{x:435,y:380},{x:435,y:330},{x:515,y:330}]}];class r{constructor(){r._paths=this.convertCoordinatesToPath(e),r._rectangles=t}static get paths(){return r._paths}static get rectangles(){return r._rectangles}convertCoordinatesToPath(e){return e.map((e=>Object.assign(Object.assign({},e),{maxX:Math.max(...e.points.map((e=>e.x))),minX:Math.min(...e.points.map((e=>e.x))),maxY:Math.max(...e.points.map((e=>e.y))),minY:Math.min(...e.points.map((e=>e.y)))})))}}new r;const o="#007300",n=5,s={width:605,height:650,shiftXY:100},c=3,a="#ffb04b",h=7,u="#ffe04b";var l,d;!function(e){e[e.up=1]="up",e[e.down=2]="down",e[e.left=3]="left",e[e.right=4]="right"}(l||(l={})),function(e){e[e.default=0]="default",e[e.start=1]="start",e[e.end=2]="end"}(d||(d={}));class m{constructor(){this.animationTick=0,this.animationChangeEveryTick=10}setLeftView(e){e.texture.direction=l.left,this.setView(e)}setRightView(e){e.texture.direction=l.right,this.setView(e)}setDownView(e){e.texture.direction=l.down,this.setView(e)}setUpView(e){e.texture.direction=l.up,this.setView(e)}setView(e){this.setAnimationState(e),this.setTexture(e)}setAnimationState(e){if(this.animationChangeEveryTick!==this.animationTick)this.animationTick++;else{if(this.animationTick=0,e.texture.state===d.end||e.texture.state===d.start)return e.texture.state=d.default,void(this.animationForwardDirection=!this.animationForwardDirection);this.animationForwardDirection?e.texture.state=d.end:e.texture.state=d.start}}setTexture(e){switch(e.texture.direction){case l.up:this.setUpTexture(e);break;case l.down:this.setDownTexture(e);break;case l.left:this.setLeftTexture(e);break;case l.right:this.setRightTexture(e)}}setUpTexture(e){switch(e.texture.state){case d.default:e.texture.spriteCoordinate.x=16,e.texture.spriteCoordinate.y=0;break;case d.start:e.texture.spriteCoordinate.x=16,e.texture.spriteCoordinate.y=16;break;case d.end:e.texture.spriteCoordinate.x=16,e.texture.spriteCoordinate.y=32}}setDownTexture(e){switch(e.texture.state){case d.default:e.texture.spriteCoordinate.x=0,e.texture.spriteCoordinate.y=0;break;case d.start:e.texture.spriteCoordinate.x=0,e.texture.spriteCoordinate.y=16;break;case d.end:e.texture.spriteCoordinate.x=0,e.texture.spriteCoordinate.y=32}}setRightTexture(e){switch(e.texture.state){case d.default:e.texture.spriteCoordinate.x=32,e.texture.spriteCoordinate.y=0;break;case d.start:e.texture.spriteCoordinate.x=32,e.texture.spriteCoordinate.y=16;break;case d.end:e.texture.spriteCoordinate.x=32,e.texture.spriteCoordinate.y=32}}setLeftTexture(e){switch(e.texture.state){case d.default:e.texture.spriteCoordinate.x=48,e.texture.spriteCoordinate.y=0;break;case d.start:e.texture.spriteCoordinate.x=48,e.texture.spriteCoordinate.y=16;break;case d.end:e.texture.spriteCoordinate.x=48,e.texture.spriteCoordinate.y=32}}}const y={width:30,height:30,currentX:288,currentY:430,startPositionX:288,startPositionY:430,stepSize:1,direction:{moveDirection:null,changeToDirection:null},texture:{direction:l.down,state:d.default,spriteCoordinate:{x:0,y:0},size:16}},g=y.direction;class p{constructor(){const e=document.querySelector("#character-layer");p._context=e.getContext("2d"),p._image=document.getElementById("character")}static get context(){return p._context}static get image(){return p._image}}new p;const f={score:"Score:",howToStart:"Press Any Key",win:"You Win!",defeat:"Defeat",restart:"restart",aboutButton:"about",aboutModalHeader:"about",aboutModalDeveloper:"developer:",aboutModalAsset:"asset pack author:"},x={score:"Счет:",howToStart:"Нажмите Любую Клавишу",win:"Победа!",defeat:"Поражение",restart:"перезапуск",aboutButton:"об игре",aboutModalHeader:"об игре",aboutModalDeveloper:"разработчик:",aboutModalAsset:"ресурсы:"};var w,v,L;!function(e){e.game=".game",e.gameWrapper=".game-wrapper",e.score=".score-header",e.howToStart=".how-to-start",e.win=".win-text",e.defeat=".defeat-text",e.overlay=".ui-layer-overlay",e.restart=".restart-button",e.powerUp=".power-up",e.modal=".modal",e.aboutButton=".about-button",e.aboutModal=".about-modal",e.aboutModalHeader=".about-modal-header",e.aboutModalDeveloper=".about-modal-developer",e.aboutModalAsset=".about-modal-asset"}(w||(w={})),function(e){e.active="active",e.disabled="disabled"}(v||(v={}));class T{constructor(){"ru"===navigator.language||"ru-RU"===navigator.language?this.language=x:this.language=f,document.addEventListener("keydown",T.onKeyDownHandler,!1),document.addEventListener("keydown",this.hideModal,!1),document.querySelector(w.aboutButton).addEventListener("click",this.toggleAboutModal)}setGameSize(){const e=2*s.shiftXY-12;document.querySelectorAll(".game-field").forEach((t=>{"CANVAS"===t.nodeName?(t.setAttribute("width",`${s.width}px`),t.setAttribute("height",`${s.height}px`)):t.setAttribute("style",`width: ${s.width-e}px ;height: ${s.height-e}px`)})),document.querySelector(".ui-layer").setAttribute("style",`width: ${s.width-e}px`),document.querySelector(".ui-layer-overlay").setAttribute("style",`height: ${s.height-e}px`),document.querySelector(".modal").setAttribute("style",`width: ${s.width-e}px ;height: ${s.height-e}px`),this.setScale()}setScale(){const e=document.querySelector(w.gameWrapper).getBoundingClientRect().height,t=document.querySelector(w.game),i=t.getBoundingClientRect().height,r=e-i;if(i<e){const e=Math.floor(r/i*100);t.setAttribute("style",`transform: scale(1.${e})`)}}setLanguage(){document.querySelector(w.score).innerHTML=this.language.score,document.querySelector(w.howToStart).innerHTML=this.language.howToStart,document.querySelector(w.win).innerHTML=this.language.win,document.querySelector(w.defeat).innerHTML=this.language.defeat,document.querySelector(w.restart).innerHTML=this.language.restart,document.querySelector(w.aboutButton).innerHTML=this.language.aboutButton,document.querySelector(w.aboutModalHeader).innerHTML=this.language.aboutModalHeader,document.querySelector(w.aboutModalDeveloper).innerHTML=this.language.aboutModalDeveloper,document.querySelector(w.aboutModalAsset).innerHTML=this.language.aboutModalAsset}setGameLoaded(){document.querySelector(w.howToStart).classList.add(v.active),document.querySelector(w.overlay).classList.add(v.active)}setGameWin(){document.querySelector(w.overlay).classList.add(v.active),document.querySelector(w.win).classList.add(v.active),document.querySelector(w.restart).classList.add(v.active),A.powerUp.cancelPowerUp()}setGameDefeat(){document.querySelector(w.overlay).classList.add(v.active),document.querySelector(w.defeat).classList.add(v.active),document.querySelector(w.restart).classList.add(v.active)}restart(){document.querySelector(w.restart).setAttribute(v.disabled,"true"),document.querySelector(w.defeat).classList.remove(v.active),document.querySelector(w.win).classList.remove(v.active),document.querySelector(w.restart).classList.remove(v.active),document.addEventListener("keydown",T.onKeyDownHandler,!1),this.setGameLoaded()}toggleAboutModal(){document.querySelector(w.aboutModal).classList.toggle(v.active)}hideModal(e){"Escape"===e.code&&document.querySelector(w.modal).classList.remove(v.active)}static onKeyDownHandler(){document.querySelector(w.aboutModal).classList.contains(v.active)||(T.setGameStart(),document.removeEventListener("keydown",T.onKeyDownHandler,!1),document.dispatchEvent(new CustomEvent(A.gameStartEventName)),document.querySelector(w.restart).removeAttribute(v.disabled))}static setGameStart(){document.querySelector(w.howToStart).classList.remove(v.active),document.querySelector(w.overlay).classList.remove(v.active)}}class Y{constructor(){this.durationSeconds=8}activatePowerUp(){this.cancelPowerUp(),setTimeout((()=>{Y.active=!0,A.enemyLayer.enemiesHandicapTick=2,Y.powerUpElement.classList.add(v.active)}),100),Y.timeoutId=setTimeout((()=>{Y.active=!1,Y.timeoutId=null,A.enemyLayer.enemiesHandicapTick=1,Y.powerUpElement.classList.remove(v.active)}),1e3*this.durationSeconds)}cancelPowerUp(){Y.timeoutId&&(Y.powerUpElement.classList.remove(v.active),clearTimeout(Y.timeoutId))}}function X(){return{width:30,height:30,currentX:288,currentY:250,startPositionX:288,startPositionY:250,stepSize:1,direction:{moveDirection:null,changeToDirection:null},blockDirections:[],texture:{direction:l.down,state:d.default,spriteCoordinate:{x:0,y:0},size:16}}}Y.powerUpElement=document.querySelector(w.powerUp),function(e){e.arrowUp="ArrowUp",e.arrowDown="ArrowDown",e.arrowLeft="ArrowLeft",e.arrowRight="ArrowRight",e.w="KeyW",e.s="KeyS",e.a="KeyA",e.d="KeyD"}(L||(L={}));const b=[X()];class k{stuckRight(e){return this.stuckRightPath(e)||this.stuckRightRectangle(e)}stuckLeft(e){return this.stuckLeftPath(e)||this.stuckLeftRectangle(e)}stuckBottom(e){return e.currentY+e.height>=s.height-s.shiftXY||this.stuckBottomRectangle(e)||this.stuckBottomPath(e)}stuckTop(e){return e.currentY<=s.shiftXY||this.stuckTopPath(e)||this.stuckTopRectangle(e)}isInLeftTunnel(e){return e.currentY===k.tunnelY&&e.currentX<70}setWalkThroughLeftTunnel(e){e.currentX=505}isInRightTunnel(e){return e.currentY===k.tunnelY&&e.currentX>505}setWalkThroughRightTunnel(e){e.currentX=70}stuckRightRectangle(e){return r.rectangles.some((t=>!(t.topLeftX+t.width<=e.currentX+e.width)&&(!!(e.currentX+e.width>=t.topLeftX)&&this.rectangleOnWayX(e,t))))}stuckRightPath(e){return r.paths.some((t=>{if(t.maxX<e.currentX)return!1;if(!(e.currentX+e.width>=t.minX))return!1;if(!this.pathOnWayX(e,t))return!1;const i=e.currentX+e.width;return this.getVerticalLines(t,!1).some((t=>{if(i>t.x)return!1;const r=e.currentY+e.height>t.end,o=e.currentY<t.start,n=r&&o;return i>=t.x&&n}))}))}stuckLeftRectangle(e){return r.rectangles.some((t=>!(t.topLeftX>=e.currentX+e.width)&&(!!(e.currentX<=t.topLeftX+t.width)&&this.rectangleOnWayX(e,t))))}stuckLeftPath(e){return r.paths.some((t=>{if(t.minX>e.currentX)return!1;if(!(e.currentX<=t.maxX))return!1;if(!this.pathOnWayX(e,t))return!1;const i=e.currentX;return this.getVerticalLines(t,!0).some((t=>{if(i>t.x)return!1;const r=e.currentY+e.height>t.start,o=e.currentY<t.end,n=r&&o;return i>=t.x&&n}))}))}stuckBottomRectangle(e){return r.rectangles.some((t=>!(t.topLeftY<e.currentY+e.height)&&(!!(e.currentY+e.height>=t.topLeftY)&&this.rectangleOnWayY(e,t))))}stuckBottomPath(e){return r.paths.some((t=>{if(t.maxY<e.currentY+e.height)return!1;if(!(e.currentY+e.height>=t.minY))return!1;if(!this.pathOnWayY(e,t))return!1;const i=e.currentY+e.height;return this.getHorizontalLines(t,!0).some((t=>{if(i>t.y)return!1;const r=e.currentX<t.end,o=e.currentX+e.width>t.start,n=r&&o;return i>=t.y&&n}))}))}stuckTopRectangle(e){return r.rectangles.some((t=>!(t.topLeftY+t.height>e.currentY)&&(!!(e.currentY<=t.topLeftY+t.height)&&this.rectangleOnWayY(e,t))))}stuckTopPath(e){return r.paths.some((t=>{if(t.minY>e.currentY+e.height)return!1;if(!(e.currentY<=t.maxY))return!1;if(!this.pathOnWayY(e,t))return!1;const i=e.currentY;return this.getHorizontalLines(t,!1).some((t=>{if(i<t.y)return!1;const r=e.currentX<t.start,o=e.currentX+e.width>t.end,n=r&&o;return i<=t.y&&n}))}))}rectangleOnWayX(e,t){const i=e.currentY<t.topLeftY+t.height,r=e.currentY+e.height>t.topLeftY;return i&&r}rectangleOnWayY(e,t){const i=e.currentX<t.topLeftX+t.width,r=e.currentX+e.width>t.topLeftX;return i&&r}pathOnWayY(e,t){const i=e.currentX<t.maxX,r=e.currentX+e.width>t.minX;return i&&r}pathOnWayX(e,t){const i=e.currentY+e.height>t.minY,r=e.currentY<t.maxY;return i&&r}getHorizontalLines(e,t){return e.points.map(((t,i)=>{if(0===i)return{start:e.topLeftX,end:t.x,y:t.y};const r=e.points[i+1];return r&&t.y===r.y?{start:t.x,end:r.x,y:t.y}:null})).filter((e=>e?t?e.start<e.end:e.start>e.end:null))}getVerticalLines(e,t){return e.points.map(((t,i)=>{const r=e.points[i+1];return r&&t.x===r.x?{start:t.y,end:r.y,x:t.x}:null})).filter((e=>e?t?e.start<e.end:e.start>e.end:null))}}k.tunnelY=295;class D{constructor(){const e=document.querySelector("#enemy-layer");D._context=e.getContext("2d"),D._image=document.getElementById("enemy")}static get context(){return D._context}static get image(){return D._image}}new D;class C{constructor(){this._enemiesHandicapTick=1,this.enemiesHandicap=0,this.defaultEnemyCount=1,this._activeEnemies=this.defaultEnemyCount,this.arriveEnemiesByTime=this.defaultEnemyCount,this.defaultDefeatedEnemyDelayMs=5e3,this.defeatedEnemyDelayMs=this.defaultDefeatedEnemyDelayMs,this.enemyArriveTimeoutIds=[],C.enemies.forEach((e=>{e.direction.moveDirection=this.getClosestToMove(e)}))}restart(){C.enemies=[X()],this.defeatedEnemyDelayMs=this.defaultDefeatedEnemyDelayMs,this.activeEnemies=this.defaultEnemyCount,this.arriveEnemiesByTime=this.defaultEnemyCount,this.enemyArriveTimeoutIds.forEach((e=>{clearTimeout(e)})),this.enemyArriveTimeoutIds=[]}get activeEnemies(){return this._activeEnemies}set activeEnemies(e){this._activeEnemies=e}addNewEnemies(){this.enemyArriveTimeoutIds.push(this.addNewEnemyWithDelay(15e3)),this.enemyArriveTimeoutIds.push(this.addNewEnemyWithDelay(2e4)),this.enemyArriveTimeoutIds.push(this.addNewEnemyWithDelay(3e4))}addNewEnemyWithDelay(e){return setTimeout((()=>{const e=X();e.direction.moveDirection=this.getClosestToMove(e),C.enemies.push(e),this.activeEnemies+=1,this.arriveEnemiesByTime+=1}),e)}set enemiesHandicapTick(e){this.enemiesHandicap=0,this._enemiesHandicapTick=e}get enemiesHandicapTick(){return this._enemiesHandicapTick}draw(){D.context.clearRect(0,0,s.width,s.height),A.enemyTexture.draw(C.enemies)}move(){this.enemiesHandicap===this.enemiesHandicapTick?(this.enemiesHandicap=0,this.moveAction()):this.enemiesHandicap++}defeatEnemyById(e){~e&&(C.enemies.splice(e,1),D.context.clearRect(0,0,s.width,s.height),A.enemyLayer.activeEnemies=A.enemyLayer.activeEnemies-1,this._activeEnemies<this.arriveEnemiesByTime&&(this._activeEnemies+=1,this.defeatedEnemyDelayMs+=1500,this.enemyArriveTimeoutIds.push(this.addNewEnemyWithDelay(this.defeatedEnemyDelayMs))))}setGameOver(e){e&&(document.dispatchEvent(new CustomEvent(A.gameOverEventName)),A.uiLayer.setGameDefeat())}setFarestMoveDirection(e){let t=this.getFarestToMove(e);if(2===e.blockDirections.length)return void this.setDirectionWhenTwoBlocked(e);if(1===e.blockDirections.length)return void this.setDirectionWhenOneBlocked(e,!1);let i=e.blockDirections;if(this.canMove(e,t))return(e.currentX<175||e.currentX>400)&&e.currentY===k.tunnelY?void 0:(i=[],void(e.direction.moveDirection=t));e.direction.changeToDirection=t,i.push(t);const r=this.getFarestToMove(e,t);this.canMove(e,r)?(e.direction.changeToDirection=r,this.setDirectionWhenOneBlocked(e)):(e.blockDirections.push(r),this.setDirectionWhenTwoBlocked(e))}setClosestMoveDirection(e){let t=this.getClosestToMove(e);if(2===e.blockDirections.length)return void this.setDirectionWhenTwoBlocked(e);if(1===e.blockDirections.length)return void this.setDirectionWhenOneBlocked(e);let i=e.blockDirections;if(this.canMove(e,t))return i=[],void(e.direction.moveDirection=t);e.direction.changeToDirection=t,i.push(t);const r=this.getClosestToMove(e,t);this.canMove(e,r)?this.setDirectionWhenOneBlocked(e):(e.blockDirections.push(r),this.setDirectionWhenTwoBlocked(e))}setDirectionWhenOneBlocked(e,t=!0){const i=this.canMove(e,e.direction.changeToDirection);if(i)return e.direction.moveDirection=e.direction.changeToDirection,e.direction.changeToDirection=null,void(e.blockDirections=[]);if(this.canMove(e,e.direction.moveDirection))if(i)e.direction.moveDirection=e.direction.changeToDirection,e.direction.changeToDirection=null,e.blockDirections=[];else{const i=t?this.getClosestToMove(e,e.direction.moveDirection):this.getFarestToMove(e,e.direction.moveDirection);this.canMove(e,i)?(e.direction.changeToDirection=e.direction.moveDirection,e.direction.moveDirection=i):(e.blockDirections.push(i),this.setDirectionWhenTwoBlocked(e))}else{const i=this.getExtrimeState(e);if(i)e.blockDirections.push(i),this.setDirectionWhenTwoBlocked(e);else{const i=t?this.getClosestToMove(e,e.direction.moveDirection):this.getFarestToMove(e,e.direction.moveDirection);e.direction.moveDirection=i}}}setDirectionWhenTwoBlocked(e){const t=this.canMove(e,e.direction.moveDirection),i=this.canMove(e,e.direction.changeToDirection);if(t)return void(i&&(e.direction.moveDirection=e.direction.changeToDirection,e.blockDirections=[]));if(i)return e.direction.moveDirection=e.direction.changeToDirection,e.direction.changeToDirection=null,void(e.blockDirections=[]);let r=[...e.blockDirections].filter((t=>t!==e.direction.moveDirection));e.direction.moveDirection=this.getCounterMoveDirection(r[0])}getFarestToMove(e,t){const i=e.currentX-y.currentX,r=e.currentY-y.currentY,o=i,n=r;if(t){if(t===l.left||t===l.right){const e=this.getFarestYToMove(n);return e===t?this.getCounterMoveDirection(e):e}{const e=this.getFarestXToMove(o);return e===t?this.getCounterMoveDirection(e):e}}return 0===i?this.getFarestYToMove(n):0===r||o>n?this.getFarestXToMove(o):this.getFarestYToMove(n)}getClosestToMove(e,t){const i=e.currentX-y.currentX,r=e.currentY-y.currentY,o=i,n=r;if(t){if(t===l.left||t===l.right){const e=this.getClosestYToMove(n);return e===t?this.getCounterMoveDirection(e):e}{const e=this.getClosestXToMove(o);return e===t?this.getCounterMoveDirection(e):e}}return 0===i?this.getClosestYToMove(n):0===r||o>n?this.getClosestXToMove(o):this.getClosestYToMove(n)}moveAction(){C.enemies.forEach((e=>{switch(Y.active?this.setFarestMoveDirection(e):this.setClosestMoveDirection(e),e.direction.moveDirection){case l.up:A.figureCollision.stuckTop(e)||(e.currentY-=e.stepSize,A.enemyTexture.setUpView(e),Y.active||this.setGameOver(this.isGameOver(e,l.up)));break;case l.down:A.figureCollision.stuckBottom(e)||(e.currentY+=e.stepSize,A.enemyTexture.setDownView(e),Y.active||this.setGameOver(this.isGameOver(e,l.down)));break;case l.left:A.figureCollision.stuckLeft(e)||(e.currentX-=e.stepSize,A.enemyTexture.setLeftView(e),Y.active||this.setGameOver(this.isGameOver(e,l.left)),A.figureCollision.isInLeftTunnel(e)&&A.figureCollision.setWalkThroughLeftTunnel(e));break;case l.right:A.figureCollision.stuckRight(e)||(e.currentX+=e.stepSize,A.enemyTexture.setRightView(e),Y.active||this.setGameOver(this.isGameOver(e,l.right)),A.figureCollision.isInRightTunnel(e)&&A.figureCollision.setWalkThroughRightTunnel(e))}}))}canMove(e,t){switch(t){case l.up:return!A.figureCollision.stuckTop(e);case l.down:return!A.figureCollision.stuckBottom(e);case l.left:return!A.figureCollision.stuckLeft(e);case l.right:return!A.figureCollision.stuckRight(e)}}getCounterMoveDirection(e){switch(e){case l.up:return l.down;case l.down:return l.up;case l.left:return l.right;case l.right:return l.left}}getExtrimeState(e){return e.currentX===s.shiftXY?l.left:e.currentX+e.width===s.width-s.shiftXY?l.right:e.currentY===s.shiftXY?l.up:e.currentY+e.height===s.height-s.shiftXY?l.down:null}getClosestYToMove(e){return e>0?l.up:l.down}getClosestXToMove(e){return e>0?l.left:l.right}getFarestYToMove(e){return e>0?l.down:l.up}getFarestXToMove(e){return e>0?l.right:l.left}isGameOver(e,t){switch(t){case l.up:const t=e.currentY-y.currentY-y.height;return e.currentX===y.currentX&&(0===t||t<0&&t>=-y.height||t>0&&t<=-y.height);case l.down:const i=e.currentY+e.height-y.currentY;return e.currentX===y.currentX&&(0===i||i<0&&i>=y.height||i>0&&i<=y.height);case l.left:const r=e.currentX-y.currentX-y.width;return e.currentY===y.currentY&&(0===r||r<0&&r>=-y.width||r>0&&r<=-y.width);case l.right:const o=e.currentX-y.currentX;return e.currentY===y.currentY&&(0===o||o<0&&o>=-y.width||o>0&&o<=-y.width)}}}C.enemies=[...b];const M=[E(1,1),E(1,2),E(1,3),E(1,4),E(1,5),E(1,6),E(1,7),E(1,8),E(1,9),E(1,10),E(1,11),E(1,12),E(1,15),E(1,16),E(1,17),E(1,18),E(1,19),E(1,20),E(1,21),E(1,22),E(1,23),E(1,24),E(1,25),E(1,26),E(2,1),E(2,6),E(2,12),E(2,15),E(2,21),E(2,26),E(3,6),E(3,12),E(3,15),E(3,21),E(4,1),E(4,6),E(4,12),E(4,15),E(4,21),E(4,26),E(5,1),E(5,2),E(5,3),E(5,4),E(5,5),E(5,6),E(5,7),E(5,8),E(5,9),E(5,10),E(5,11),E(5,12),E(5,13),E(5,14),E(5,15),E(5,16),E(5,17),E(5,18),E(5,19),E(5,20),E(5,21),E(5,22),E(5,23),E(5,24),E(5,25),E(5,26),E(6,1),E(6,6),E(6,9),E(6,18),E(6,21),E(6,26),E(7,1),E(7,6),E(7,9),E(7,18),E(7,21),E(7,26),E(8,1),E(8,2),E(8,3),E(8,4),E(8,5),E(8,6),E(8,9),E(8,10),E(8,11),E(8,12),E(8,15),E(8,16),E(8,17),E(8,18),E(8,21),E(8,22),E(8,23),E(8,24),E(8,25),E(8,26),E(9,6),E(9,21),E(10,6),E(10,21),E(11,6),E(11,21),E(12,6),E(12,21),E(13,6),E(13,21),E(14,6),E(14,21),E(15,6),E(15,21),E(16,6),E(16,21),E(17,6),E(17,21),E(18,6),E(18,21),E(19,6),E(19,21),E(20,1),E(20,2),E(20,3),E(20,4),E(20,5),E(20,6),E(20,7),E(20,8),E(20,9),E(20,10),E(20,11),E(20,12),E(20,15),E(20,16),E(20,17),E(20,18),E(20,19),E(20,20),E(20,21),E(20,22),E(20,23),E(20,24),E(20,25),E(20,26),E(21,1),E(21,6),E(21,12),E(21,15),E(21,21),E(21,26),E(22,1),E(22,6),E(22,12),E(22,15),E(22,21),E(22,26),E(23,2),E(23,3),E(23,6),E(23,7),E(23,8),E(23,9),E(23,10),E(23,11),E(23,12),E(23,15),E(23,16),E(23,17),E(23,18),E(23,19),E(23,20),E(23,21),E(23,24),E(23,25),E(24,3),E(24,6),E(24,9),E(24,18),E(24,21),E(24,24),E(25,3),E(25,6),E(25,9),E(25,18),E(25,21),E(25,24),E(26,1),E(26,2),E(26,3),E(26,4),E(26,5),E(26,6),E(26,9),E(26,10),E(26,11),E(26,12),E(26,15),E(26,16),E(26,17),E(26,18),E(26,21),E(26,22),E(26,23),E(26,24),E(26,25),E(26,26),E(27,1),E(27,12),E(27,15),E(27,26),E(28,1),E(28,12),E(28,15),E(28,26),E(29,1),E(29,2),E(29,3),E(29,4),E(29,5),E(29,6),E(29,7),E(29,8),E(29,9),E(29,10),E(29,11),E(29,12),E(29,13),E(29,14),E(29,15),E(29,16),E(29,17),E(29,18),E(29,19),E(29,20),E(29,21),E(29,22),E(29,23),E(29,24),E(29,25),E(29,26)],S=[E(3,1),E(3,26),E(23,1),E(23,26)];function E(e,t){return{centerX:15*t+s.shiftXY,centerY:15*e+s.shiftXY}}class P{constructor(){this.canvas=document.querySelector("#mission-layer"),this.scoreElement=document.querySelector(".score-value"),this.context=this.canvas.getContext("2d"),P.collectibles=M.slice(),P.powerUps=[...S]}restart(){A.missionLayer.drawCollectibles(),A.missionLayer.drawPowerUps(),A.missionLayer.setScore(0)}drawCollectibles(){this.context.clearRect(0,0,s.width,s.height),P.collectibles=M.slice(),this.collectibles.forEach((e=>{this.context.beginPath(),this.context.arc(e.centerX,e.centerY,c,0,2*Math.PI),this.context.fillStyle=a,this.context.fill(),this.context.closePath()}))}eraseCollectible(e,t){const i=e.centerX-t,r=e.centerY-t,o=2*t;this.context.clearRect(i,r,o,o),this.isMissionCollectible(t)&&this.setScore(P.score+1)}setScore(e){P.score=e,this.scoreElement.innerHTML=`${P.score}`}drawPowerUps(){P.powerUps=[...S],this.powerUps.forEach((e=>{this.context.beginPath(),this.context.arc(e.centerX,e.centerY,h,0,2*Math.PI),this.context.fillStyle=u,this.context.fill(),this.context.closePath()}))}setMissionComplete(){document.dispatchEvent(new CustomEvent(A.gameOverEventName)),A.uiLayer.setGameWin()}isMissionCollectible(e){return e===c}static set score(e){P._score=e}static get score(){return P._score}static set collectibles(e){this._collectibles=e}get collectibles(){return P._collectibles}get powerUps(){return P._powerUps}static set powerUps(e){P._powerUps=e}}P._score=0;class A{}A.characterTexture=new class extends m{constructor(){super(),this.image=p.image}draw(e){p.context.drawImage(this.image,e.texture.spriteCoordinate.x,e.texture.spriteCoordinate.y,e.texture.size,e.texture.size,e.currentX,e.currentY,30,30)}},A.backgroundLayer=new class{constructor(){this.canvas=document.querySelector("#background-layer"),this.textShiftX=0,this.textShiftY=0,this.drawTip=!1,this.context=this.canvas.getContext("2d",{alpha:!1})}draw(){this.drawBackground(),this.drawRectangles(),this.drawPaths(),this.drawBackgroundPaths()}drawBackgroundPaths(){i.forEach((e=>this.drawPath(e)))}drawBackground(){this.context.fillStyle="#000",this.context.fillRect(0,0,this.canvas.width,this.canvas.height)}drawPaths(){r.paths.forEach((e=>{this.drawPath(e)}))}drawRectangles(){r.rectangles.forEach((e=>{this.context.beginPath(),this.context.lineWidth=2,this.context.roundRect(e.topLeftX,e.topLeftY,e.width,e.height,n),this.drawTip&&(this.figureTip(e.topLeftX,e.topLeftY),this.figureTip(e.topLeftX+e.width,e.topLeftY),this.figureTip(e.topLeftX+e.width,e.topLeftY+e.height),this.figureTip(e.topLeftX,e.topLeftY+e.height)),this.context.strokeStyle=o,e.invisible&&(this.context.strokeStyle="#000"),this.context.stroke(),this.context.strokeStyle=o,this.context.closePath()}))}drawPath(e){this.context.beginPath(),this.context.moveTo(e.topLeftX+n,e.topLeftY),e.points.forEach(((t,i)=>{0===i?(this.context.arcTo(t.x,t.y,e.points[i+1].x,e.points[i+1].y,n),this.drawTip&&this.figureTip(t.x,t.y)):i===e.points.length-1?(this.context.arcTo(t.x,t.y,e.points[0].x,e.points[0].y,n),this.drawTip&&this.figureTip(t.x,t.y)):(this.context.arcTo(t.x,t.y,e.points[i+1].x,e.points[i+1].y,n),this.drawTip&&this.figureTip(t.x,t.y))})),this.context.stroke(),this.context.closePath()}figureTip(e,t){this.context.font="9px serif",this.context.fillStyle="#fff",this.context.fillText(`${e}.${t}`,e-this.textShiftX,t-this.textShiftY),0===this.textShiftX?this.textShiftX=20:this.textShiftX=0,0===this.textShiftY?this.textShiftY=10:this.textShiftY=0}},A.characterLayer=new class{constructor(){A.characterTexture.setDownView(y)}restart(){y.currentX=y.startPositionX,y.currentY=y.startPositionY,y.texture.direction=l.down,y.texture.state=d.default,y.texture.spriteCoordinate={x:0,y:0}}draw(){p.context.clearRect(0,0,s.width,s.height),A.characterTexture.draw(y)}move(){let e;if(A.characterMovement.keyPressed&&g.moveDirection!==g.changeToDirection){switch(g.changeToDirection){case l.up:e=!A.figureCollision.stuckTop(y);break;case l.down:e=!A.figureCollision.stuckBottom(y);break;case l.left:e=!A.figureCollision.stuckLeft(y);break;case l.right:e=!A.figureCollision.stuckRight(y)}e&&(g.moveDirection=g.changeToDirection)}switch(g.moveDirection){case l.up:!e&&A.figureCollision.stuckTop(y)||(y.currentY-=y.stepSize,A.characterTexture.setUpView(y),A.collectibleCollision.collectTop(),Y.active&&A.enemyLayer.defeatEnemyById(A.collectibleCollision.getIntersectEnemyId()));break;case l.down:!e&&A.figureCollision.stuckBottom(y)||(y.currentY+=y.stepSize,A.characterTexture.setDownView(y),A.collectibleCollision.collectBottom(),Y.active&&A.enemyLayer.defeatEnemyById(A.collectibleCollision.getIntersectEnemyId()));break;case l.left:!e&&A.figureCollision.stuckLeft(y)||(y.currentX-=y.stepSize,A.characterTexture.setLeftView(y),A.collectibleCollision.collectLeft(),A.figureCollision.isInLeftTunnel(y)&&A.figureCollision.setWalkThroughLeftTunnel(y),Y.active&&A.enemyLayer.defeatEnemyById(A.collectibleCollision.getIntersectEnemyId()));break;case l.right:!e&&A.figureCollision.stuckRight(y)||(y.currentX+=y.stepSize,A.characterTexture.setRightView(y),A.collectibleCollision.collectRight(),A.figureCollision.isInRightTunnel(y)&&A.figureCollision.setWalkThroughRightTunnel(y),Y.active&&A.enemyLayer.defeatEnemyById(A.collectibleCollision.getIntersectEnemyId()))}}},A.missionLayer=new P,A.enemyLayer=new C,A.uiLayer=new T,A.powerUp=new Y,A.enemyTexture=new class extends m{constructor(){super(),this.animationTick=0,this.image=D.image}draw(e){e.forEach((e=>{D.context.drawImage(this.image,e.texture.spriteCoordinate.x,e.texture.spriteCoordinate.y,e.texture.size,e.texture.size,e.currentX,e.currentY,30,30)}))}},A.figureCollision=new k,A.characterMovement=new class{constructor(){this.intentionDurationMs=800,document.addEventListener("keydown",this.onKeyPressed.bind(this),!1),document.addEventListener("keyup",(()=>{clearTimeout(this.keyPressTimeoutId),this.keyPressTimeoutId=setTimeout((()=>this._keyPressed=!1),this.intentionDurationMs)}),!1)}get keyPressed(){return this._keyPressed}onKeyPressed(e){if(this._keyPressed=!0,!e.repeat){if(e.code===L.w||e.code===L.arrowUp)return void(g.changeToDirection!==l.up&&this.setChangeDirection(l.up));if(e.code===L.s||e.code===L.arrowDown)return void(g.changeToDirection!==l.down&&this.setChangeDirection(l.down));if(e.code===L.a||e.code===L.arrowLeft)return void(g.changeToDirection!==l.left&&this.setChangeDirection(l.left));if(e.code===L.d||e.code===L.arrowRight)return void(g.changeToDirection!==l.right&&this.setChangeDirection(l.right))}}setChangeDirection(e){g.changeToDirection=e}},A.collectibleCollision=new class{collectRight(){this.collectRightAction(A.missionLayer.collectibles,c),this.collectRightAction(A.missionLayer.powerUps,h)}collectLeft(){this.collectLeftAction(A.missionLayer.collectibles,c),this.collectLeftAction(A.missionLayer.powerUps,h)}collectBottom(){this.collectBottomAction(A.missionLayer.collectibles,c),this.collectBottomAction(A.missionLayer.powerUps,h)}collectTop(){this.collectTopAction(A.missionLayer.collectibles,c),this.collectTopAction(A.missionLayer.powerUps,h)}getIntersectEnemyId(){return C.enemies.findIndex((e=>{const t=y.currentX-e.currentX,i=t>=0&&t<=e.width,r=e.currentX-y.currentX,o=r>=0&&r<=e.width,n=y.currentY-e.currentY,s=n>=0&&n<=e.height,c=e.currentY-y.currentY,a=c>=0&&c<=e.height;return i||o?a||s:a||s?i||o:void 0}))}getCollectibleOnWayX(e){return e.filter((e=>e.centerY===y.height/2+y.currentY))}getCollectibleOnWayY(e){return e.filter((e=>e.centerX===y.width/2+y.currentX))}removeCollected(e,t,i){A.missionLayer.eraseCollectible(t,i);const r=e.findIndex((e=>t.centerX===e.centerX&&t.centerY===e.centerY));e.splice(r,1),A.missionLayer.isMissionCollectible(i)?0===e.length&&A.missionLayer.setMissionComplete():A.powerUp.activatePowerUp()}collectTopAction(e,t){const i=this.getCollectibleOnWayY(e);if(i.length){const r=i.find((e=>e.centerY-t>y.currentY?null:e.centerY+t>=y.currentY));r&&this.removeCollected(e,r,t)}}collectBottomAction(e,t){const i=this.getCollectibleOnWayY(e);if(i.length){const r=y.currentY+y.height,o=i.find((e=>e.centerY+t<r?null:e.centerY-t<=r));o&&this.removeCollected(e,o,t)}}collectLeftAction(e,t){const i=this.getCollectibleOnWayX(e);if(i.length){const r=y.currentX+y.width,o=i.find((e=>e.centerX+t>r?null:e.centerX+t>=y.currentX));o&&this.removeCollected(e,o,t)}}collectRightAction(e,t){const i=this.getCollectibleOnWayX(e);if(i.length){const r=y.currentX+y.width,o=i.find((e=>e.centerX-t<y.currentX?null:e.centerX-t<=r));o&&this.removeCollected(e,o,t)}}},A.gameOverEventName="game-over",A.gameStartEventName="game-start",new class{constructor(){this.applicationTickMs=14,new A,A.uiLayer.setLanguage(),A.uiLayer.setGameSize(),A.backgroundLayer.draw(),A.missionLayer.drawCollectibles(),A.missionLayer.drawPowerUps(),this.main(),A.uiLayer.setGameLoaded(),document.addEventListener(A.gameOverEventName,(()=>A.gameOver=!0)),document.addEventListener(A.gameStartEventName,(()=>{A.enemyLayer.addNewEnemies(),this.setMovablePosition()})),document.querySelector(w.restart).addEventListener("click",this.restart.bind(this))}setMovablePosition(){A.gameOver||setTimeout((()=>{A.characterLayer.move(),A.enemyLayer.move(),this.setMovablePosition()}),this.applicationTickMs)}restart(){A.uiLayer.restart(),A.characterLayer.restart(),A.enemyLayer.restart(),A.missionLayer.restart(),this.setMovablePosition(),A.gameOver=!1}main(){window.requestAnimationFrame(this.main.bind(this)),A.characterLayer.draw(),A.enemyLayer.draw()}}})(),e.p})();