(this.webpackJsonp2dbreakoutgame=this.webpackJsonp2dbreakoutgame||[]).push([[0],{18:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/ruby.20c30002.png"},37:function(e,t,a){e.exports=a(59)},42:function(e,t,a){},49:function(e,t,a){var n={"./anders.JPG":50,"./background.jpg":51,"./cat.gif":52,"./gary.JPG":53,"./hero.JPG":54,"./minray.JPG":55,"./ruby.png":27};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=49},50:function(e,t,a){e.exports=a.p+"static/media/anders.07ece49a.JPG"},51:function(e,t,a){e.exports=a.p+"static/media/background.bfa1f111.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/cat.50b1feaa.gif"},53:function(e,t,a){e.exports=a.p+"static/media/gary.ca76ff1e.JPG"},54:function(e,t,a){e.exports=a.p+"static/media/hero.faa9eaaa.JPG"},55:function(e,t,a){e.exports=a.p+"static/media/minray.85bd9229.JPG"},59:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(5),i=a.n(r),l=(a(42),a(8)),c=a(9),s=a(11),u=a(10),m=a(32),d=a(14),h=a(12),f=(a(18),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).isMobile=function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.isMobile();return o.a.createElement("div",{className:"App"},e&&"not support mobile",!e&&o.a.createElement("div",{className:"App"},o.a.createElement("p",{style:{fontSize:"20px"}},"2D breakout game home"),o.a.createElement("div",{className:"home"},o.a.createElement(h.b,{to:"/game"},o.a.createElement("button",null,o.a.createElement(m.a,null),"play")),o.a.createElement(h.b,{to:"/setting"},o.a.createElement("button",null,o.a.createElement(d.c,null),"settings")),o.a.createElement(h.b,{to:"/developer"},o.a.createElement("button",null,o.a.createElement(d.a,null),"developer")))))}}]),a}(o.a.Component)),p=a(20),g=a.n(p),b={ballX:0,ballY:0,dx:2,dy:-2,ctx:null,paddleX:0,score:0,animationX:0,animationSetTime:null,rightPressed:!1,leftPressed:!1,setTime:null},v=["anders.JPG","minray.JPG","hero.JPG","gary.JPG"],y=0,x=["anders","minray","hero","gary"],E=[],w=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).keyDownHandler=function(e){"Right"===e.key||"ArrowRight"===e.key?o.setState({rightPressed:!0}):"Left"!==e.key&&"ArrowLeft"!==e.key||o.setState({leftPressed:!0})},o.getRndInteger=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},o.initAnimation=function(){var e=document.getElementById("myCanvas"),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height);var a=setInterval(o.Transition,10);o.setState({ctx:t,animationSetTime:a,animationX:0,ballY:0,dx:2,score:0})},o.Transition=function(){var e=o.state,t=e.ctx,a=e.animationX,n=e.animationSetTime,r=document.getElementById("myCanvas");t.clearRect(0,0,r.width,r.height),t.fillStyle="black",t.fillRect(0,0,r.width,r.height),a<r.width?(t.font="80px Comic Sans MS",t.fillStyle="#a6bec0",t.fillText("level:"+(Number(y)+1),a,220),t.fillText(x[y],a,300),o.setState({animationX:a+5})):a>r.width&&a<1e3?(t.font="80px Comic Sans MS",t.fillStyle="red",t.fillText("Ready?",180,260),o.setState({animationX:a+3})):a>=r.width&&a<1400?(t.font="80px Comic Sans MS",t.fillStyle="red",t.fillText("go!",260,260),o.setState({animationX:a+3})):(clearInterval(n),o.addComponentToCanvas())},o.addComponentToCanvas=function(){for(var e=document.getElementById("myCanvas"),t=e.getContext("2d"),n=(e.width-120)/2,r=e.width/2,i=e.height-30,l=setInterval(o.draw,10),c=0;c<8;c++){E[c]=[];for(var s=0;s<3;s++){var u=new Image;u.src=a(49)("./"+v[y]),E[c][s]={x:0,y:0,img:u,status:1}}}o.setState({ballX:r,ballY:i,ctx:t,paddleX:n,setTime:l})},o.draw=function(){var e=o.state,t=e.ballX,a=e.ballY,n=e.dx,r=e.dy,i=e.ctx,l=e.paddleX,c=e.rightPressed,s=e.leftPressed,u=e.setTime,m=document.getElementById("myCanvas");i.clearRect(0,0,m.width,m.height),(t+n>m.width-10||t+n<10)&&o.setState({dx:-n}),a+r<10?o.setState({dy:-r}):a+r>m.height-10&&(t>l-3&&t<l+120?o.setState({dy:-r}):(clearInterval(u),g.a.fire({title:x[y]+" says:you are loser~~~!!",icon:"error",showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,heightAuto:!1,confirmButtonText:"play Again",confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:"go to menu",cancelButtonAriaLabel:"Thumbs down"}).then((function(e){e.value?o.initAnimation():document.location.href="https://ruby840124.github.io/2dbreakoutgame/"})))),c?(o.setState({paddleX:l+16}),l+120>m.width&&o.setState({paddleX:m.width-120})):s&&(o.setState({paddleX:l-16}),l<0&&o.setState({paddleX:0})),o.drawBall(),o.drawPaddle(),o.drawBricks(),o.drawScore(),o.collisionDetection(),o.setState({ballX:t+n,ballY:a+r,rightPressed:!1,leftPressed:!1})},o.drawScore=function(){var e=o.state,t=e.score,a=e.ctx;a.font="20px Arial",a.fillStyle="#0095DD",a.fillText("Score: "+t,8,20)},o.drawPaddle=function(){var e=o.state,t=e.ctx,a=e.paddleX,n=document.getElementById("myCanvas");t.beginPath(),t.rect(a,n.height-10,120,10),t.fillStyle="#a6bec0",t.fill(),t.closePath()},o.drawBall=function(){var e=o.state,t=e.ballX,a=e.ballY,n=e.ctx;n.beginPath(),n.arc(t,a,10,0,2*Math.PI),n.fillStyle="#a6bec0",n.fill(),n.closePath()},o.drawBricks=function(){for(var e=o.state.ctx,t=0;t<8;t++)for(var a=0;a<3;a++)if(1===E[t][a].status){var n=55*t+85,r=55*a+40;E[t][a].x=n,E[t][a].y=r,e.beginPath(),e.drawImage(E[t][a].img,n,r,45,45),e.fill(),e.closePath()}},o.collisionDetection=function(){for(var e=o.state,t=e.ballX,a=e.ballY,n=e.dy,r=e.score,i=e.setTime,l=r,c=0;c<8;c++)for(var s=0;s<3;s++){var u=E[c][s];1===u.status&&t>=u.x&&t<=u.x+45-3&&a>=u.y-3&&a<=u.y+45&&(l+=1,u.status=0,o.setState({dy:-n,score:l}),24===l&&(clearInterval(i),y<3?g.a.fire({title:x[y]+" says:ok fine= =",icon:"warning",showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,heightAuto:!1,confirmButtonText:"next level",confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:"back to home",cancelButtonAriaLabel:"Thumbs down"}).then((function(e){e.value?(y+=1,o.initAnimation()):document.location.href="https://ruby840124.github.io/2dbreakoutgame/"})):g.a.fire({heightAuto:!1,title:"Congratulations!",imageUrl:"https://lh3.googleusercontent.com/proxy/tXP2ofCdBllMR24EIPkieqasFGnAKq5MUZ-HoYyLgPv5n7MsgOAhmPsutIuALePLRxroJtoOhivHg-VHTQ",imageWidth:300,imageHeight:150,imageAlt:"Custom image"}).then((function(e){e.value&&(document.location.href="https://ruby840124.github.io/2dbreakoutgame/")}))))}},o.state=b,o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.initAnimation(),document.addEventListener("keydown",this.keyDownHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyDownHandler),clearInterval(this.state.setTime)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("p",{style:{fontSize:"20px"}},"2D breakout game"),o.a.createElement("canvas",{id:"myCanvas",className:"myCanvas",width:"600",height:"500"}))}}]),n}(o.a.Component),k=(a(28),a(29),a(36)),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onSliderChange=function(e){n.setState({speed:e})},n.state={speed:1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.speed;return o.a.createElement("div",{className:"App"},o.a.createElement("p",{style:{fontSize:"20px"}},"2D breakout game home"),o.a.createElement("div",{className:"setting"},o.a.createElement("div",{className:"wrapperStyle"},o.a.createElement("div",null,"adjust the ball speed: ",e," "),o.a.createElement(k.a,{min:1,max:15,defaultValue:1,onChange:this.onSliderChange})),o.a.createElement(h.b,{to:"/"},o.a.createElement("button",null,o.a.createElement(d.b,null),"back to home"))))}}]),a}(o.a.Component),C=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("p",{style:{fontSize:"20px"}},"2D breakout game home"),o.a.createElement("div",{className:"setting"},o.a.createElement("img",{src:a(27),style:{width:"100px",height:"100px"}}),o.a.createElement("div",{style:{fontSize:"22px",color:"white",marginBottom:"5px"}},"Ruby Feng"),o.a.createElement("div",null,"!!\u6c34\u74f6\u7cfb\u5973\u5b69!!"),o.a.createElement("div",null,"\u5916\u8868\u770b\u4f3c+9\uff0c\u4f46\u5176\u5be6\u662f\u53ef\u611b\u7684\u5de5\u7a0b\u5e2b!"),o.a.createElement(h.b,{to:"/"},o.a.createElement("button",{style:{marginTop:"10px"}},o.a.createElement(d.b,null),"back to home"))))}}]),n}(o.a.Component),P=a(15),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(h.a,{basename:"/2dbreakoutgame"},o.a.createElement(P.c,null,o.a.createElement(P.a,{exact:!0,path:"/",component:f}),o.a.createElement(P.a,{exact:!0,path:"/game",component:w}),o.a.createElement(P.a,{exact:!0,path:"/setting",component:S}),o.a.createElement(P.a,{exact:!0,path:"/developer",component:C})))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.fb881f85.chunk.js.map