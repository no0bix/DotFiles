!function(t,i){function e(t,i,e){return[parseInt(t[0],10)*(d.test(t[0])?i/100:1),parseInt(t[1],10)*(d.test(t[1])?e/100:1)]}function o(i,e){return parseInt(t.css(i,e),10)||0}function n(i){var e=i[0];return 9===e.nodeType?{width:i.width(),height:i.height(),offset:{top:0,left:0}}:t.isWindow(e)?{width:i.width(),height:i.height(),offset:{top:i.scrollTop(),left:i.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:i.outerWidth(),height:i.outerHeight(),offset:i.offset()}}t.ui=t.ui||{};var l,s=Math.max,f=Math.abs,h=Math.round,r=/left|center|right/,p=/top|center|bottom/,c=/[\+\-]\d+%?/,a=/^\w+/,d=/%$/,g=t.fn.position;t.position={scrollbarWidth:function(){if(l!==i)return l;var e,o,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=n.children()[0];return t("body").append(n),e=s.offsetWidth,n.css("overflow","scroll"),o=s.offsetWidth,e===o&&(o=n[0].clientWidth),n.remove(),l=e-o},getScrollInfo:function(i){var e=i.isWindow?"":i.element.css("overflow-x"),o=i.isWindow?"":i.element.css("overflow-y"),n="scroll"===e||"auto"===e&&i.width<i.element[0].scrollWidth,l="scroll"===o||"auto"===o&&i.height<i.element[0].scrollHeight;return{width:n?t.position.scrollbarWidth():0,height:l?t.position.scrollbarWidth():0}},getWithinInfo:function(i){var e=t(i||window),o=t.isWindow(e[0]);return{element:e,isWindow:o,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:o?e.width():e.outerWidth(),height:o?e.height():e.outerHeight()}}},t.fn.position=function(i){if(!i||!i.of)return g.apply(this,arguments);i=t.extend({},i);var l,d,u,m,w,W,v=t(i.of),y=t.position.getWithinInfo(i.within),b=t.position.getScrollInfo(y),H=(i.collision||"flip").split(" "),x={};return W=n(v),v[0].preventDefault&&(i.at="left top"),d=W.width,u=W.height,m=W.offset,w=t.extend({},m),t.each(["my","at"],function(){var t,e,o=(i[this]||"").split(" ");1===o.length&&(o=r.test(o[0])?o.concat(["center"]):p.test(o[0])?["center"].concat(o):["center","center"]),o[0]=r.test(o[0])?o[0]:"center",o[1]=p.test(o[1])?o[1]:"center",t=c.exec(o[0]),e=c.exec(o[1]),x[this]=[t?t[0]:0,e?e[0]:0],i[this]=[a.exec(o[0])[0],a.exec(o[1])[0]]}),1===H.length&&(H[1]=H[0]),"right"===i.at[0]?w.left+=d:"center"===i.at[0]&&(w.left+=d/2),"bottom"===i.at[1]?w.top+=u:"center"===i.at[1]&&(w.top+=u/2),l=e(x.at,d,u),w.left+=l[0],w.top+=l[1],this.each(function(){var n,r,p=t(this),c=p.outerWidth(),a=p.outerHeight(),g=o(this,"marginLeft"),W=o(this,"marginTop"),T=c+g+o(this,"marginRight")+b.width,L=a+W+o(this,"marginBottom")+b.height,I=t.extend({},w),P=e(x.my,p.outerWidth(),p.outerHeight());"right"===i.my[0]?I.left-=c:"center"===i.my[0]&&(I.left-=c/2),"bottom"===i.my[1]?I.top-=a:"center"===i.my[1]&&(I.top-=a/2),I.left+=P[0],I.top+=P[1],t.support.offsetFractions||(I.left=h(I.left),I.top=h(I.top)),n={marginLeft:g,marginTop:W},t.each(["left","top"],function(e,o){t.ui.position[H[e]]&&t.ui.position[H[e]][o](I,{targetWidth:d,targetHeight:u,elemWidth:c,elemHeight:a,collisionPosition:n,collisionWidth:T,collisionHeight:L,offset:[l[0]+P[0],l[1]+P[1]],my:i.my,at:i.at,within:y,elem:p})}),i.using&&(r=function(t){var e=m.left-I.left,o=e+d-c,n=m.top-I.top,l=n+u-a,h={target:{element:v,left:m.left,top:m.top,width:d,height:u},element:{element:p,left:I.left,top:I.top,width:c,height:a},horizontal:0>o?"left":e>0?"right":"center",vertical:0>l?"top":n>0?"bottom":"middle"};c>d&&f(e+o)<d&&(h.horizontal="center"),a>u&&f(n+l)<u&&(h.vertical="middle"),h.important=s(f(e),f(o))>s(f(n),f(l))?"horizontal":"vertical",i.using.call(this,t,h)}),p.offset(t.extend(I,{using:r}))})},t.ui.position={fit:{left:function(t,i){var e,o=i.within,n=o.isWindow?o.scrollLeft:o.offset.left,l=o.width,f=t.left-i.collisionPosition.marginLeft,h=n-f,r=f+i.collisionWidth-l-n;i.collisionWidth>l?h>0&&0>=r?(e=t.left+h+i.collisionWidth-l-n,t.left+=h-e):t.left=r>0&&0>=h?n:h>r?n+l-i.collisionWidth:n:h>0?t.left+=h:r>0?t.left-=r:t.left=s(t.left-f,t.left)},top:function(t,i){var e,o=i.within,n=o.isWindow?o.scrollTop:o.offset.top,l=i.within.height,f=t.top-i.collisionPosition.marginTop,h=n-f,r=f+i.collisionHeight-l-n;i.collisionHeight>l?h>0&&0>=r?(e=t.top+h+i.collisionHeight-l-n,t.top+=h-e):t.top=r>0&&0>=h?n:h>r?n+l-i.collisionHeight:n:h>0?t.top+=h:r>0?t.top-=r:t.top=s(t.top-f,t.top)}},flip:{left:function(t,i){var e,o,n=i.within,l=n.offset.left+n.scrollLeft,s=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,r=t.left-i.collisionPosition.marginLeft,p=r-h,c=r+i.collisionWidth-s-h,a="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,d="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,g=-2*i.offset[0];0>p?(e=t.left+a+d+g+i.collisionWidth-s-l,(0>e||e<f(p))&&(t.left+=a+d+g)):c>0&&(o=t.left-i.collisionPosition.marginLeft+a+d+g-h,(o>0||f(o)<c)&&(t.left+=a+d+g))},top:function(t,i){var e,o,n=i.within,l=n.offset.top+n.scrollTop,s=n.height,h=n.isWindow?n.scrollTop:n.offset.top,r=t.top-i.collisionPosition.marginTop,p=r-h,c=r+i.collisionHeight-s-h,a="top"===i.my[1],d=a?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,g="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,u=-2*i.offset[1];0>p?(o=t.top+d+g+u+i.collisionHeight-s-l,t.top+d+g+u>p&&(0>o||o<f(p))&&(t.top+=d+g+u)):c>0&&(e=t.top-i.collisionPosition.marginTop+d+g+u-h,t.top+d+g+u>c&&(e>0||f(e)<c)&&(t.top+=d+g+u))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var i,e,o,n,l,s=document.getElementsByTagName("body")[0],f=document.createElement("div");i=document.createElement(s?"div":"body"),o={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},s&&t.extend(o,{position:"absolute",left:"-1000px",top:"-1000px"});for(l in o)i.style[l]=o[l];i.appendChild(f),e=s||document.documentElement,e.insertBefore(i,e.firstChild),f.style.cssText="position: absolute; left: 10.7432222px;",n=t(f).offset().left,t.support.offsetFractions=n>10&&11>n,i.innerHTML="",e.removeChild(i)}()}(jQuery);