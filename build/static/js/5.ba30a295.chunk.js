(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{42:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",r=c(2);t.a=function(){return Object(r.jsx)("img",{src:a,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:"Error"})}},43:function(e,t,c){"use strict";var a=c(4),r=c.n(a),n=c(7),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],a=t[1];return{request:Object(i.useCallback)(function(){var e=Object(n.a)(r.a.mark((function e(t){var c,n,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),a("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){a("loading")}),[]),process:c,setProcess:a}}(),t=e.request,c=e.clearError,a=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=de18a0a550d2cdd8b954831a7153c0fb",j=210,h=function(){var e=Object(n.a)(r.a.mark((function e(){var c,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:j,e.next=3,t("".concat(l,"characters?limit=9&offset=").concat(c,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(r.a.mark((function e(c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters?name=").concat(c,"&").concat(u));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(r.a.mark((function e(c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters/").concat(c,"?").concat(u," "));case 2:return a=e.sent,e.abrupt("return",O(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(r.a.mark((function e(){var c,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:j,e.next=3,t("".concat(l,"comics?limit=8&offset=").concat(c,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(n.a)(r.a.mark((function e(c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"comics/").concat(c,"?").concat(u," "));case 2:return a=e.sent,e.abrupt("return",p(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,200),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},p=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{clearError:c,process:a,setProcess:o,getAllCharacters:h,getCharacter:b,getAllComics:m,getComic:f,getCharacterByName:d}}},46:function(e,t,c){"use strict";var a=c(23),r=c(42),n=(c(47),c(2)),s=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(n.jsx)(s,{});case"loading":return Object(n.jsx)(a.a,{});case"confirmed":return Object(n.jsx)(t,{data:c});case"error":return Object(n.jsx)(r.a,{});default:throw new Error("Unexpected process state")}}},47:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},76:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var a=c(5),r=c(0),n=c(44),s=c(43),i=c(46),o=(c(64),c.p+"static/media/mjolnir.61f31e18.png"),l=c(2),u=function(e){var t=e.data,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(r.useState)({}),t=Object(a.a)(e,2),c=t[0],n=t[1],j=Object(s.a)(),h=j.getCharacter,d=j.clearError,b=j.process,m=j.setProcess;Object(r.useEffect)((function(){O()}),[]);var f=function(e){n(e)},O=function(){d();var e=Math.floor(400*Math.random()+1011e3);h(e).then(f).then((function(){return m("confirmed")}))};return Object(l.jsxs)("div",{className:"randomchar",children:[Object(i.a)(b,u,c),Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",onClick:O,children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=c(8),d=c(88),b=c(89),m=c(23),f=c(42),O=(c(65),function(e){var t=Object(r.useState)([]),c=Object(a.a)(t,2),n=c[0],i=c[1],o=Object(r.useState)(!1),u=Object(a.a)(o,2),j=u[0],O=u[1],p=Object(r.useState)(210),x=Object(a.a)(p,2),v=x[0],_=x[1],g=Object(r.useState)(!1),N=Object(a.a)(g,2),k=N[0],w=N[1],y=Object(s.a)(),C=(y.loading,y.error,y.getAllCharacters),E=y.process,S=y.setProcess;Object(r.useEffect)((function(){F(v,!0)}),[]);var F=function(e,t){O(!t),C(e).then(T).then((function(){return S("confirmed")}))},T=function(e){var t=!1;e.length<9&&(t=!0),i((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e))})),O((function(e){return!1})),_((function(e){return e+9})),w((function(e){return t}))},P=Object(r.useRef)([]),I=function(e){P.current.forEach((function(e){return e.classList.remove("char__item_selected")})),P.current[e].classList.add("char__item_selected"),P.current[e].focus()};var M=Object(r.useMemo)((function(){return function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(m.a,{});case"loading":return c?Object(l.jsx)(t,{}):Object(l.jsx)(m.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(f.a,{});default:throw new Error("Unexpected process state")}}(E,(function(){return function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"contain"}),Object(l.jsx)(d.a,{timeout:200,classNames:"char__item",children:Object(l.jsxs)("li",{className:"char__item",ref:function(e){return P.current[c]=e},tabIndex:0,onClick:function(){e.onCharSelected(t.id),I(c)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),I(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)})}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(b.a,{component:null,children:c})})}(n)}),j)}),[E]);return Object(l.jsxs)("div",{className:"char__list",children:[M,Object(l.jsx)("button",{className:"button button__main button__long",disabled:j,style:{display:k?"none":"block"},onClick:function(){return F(v)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),p=c(12),x=(c(66),function(e){var t=e.data,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:r,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:Object(l.jsx)(p.b,{to:"/comics/".concat(e.resourceURI.substring(43)),children:e.name})},t)}))]})]})}),v=function(e){var t=Object(r.useState)(null),c=Object(a.a)(t,2),n=c[0],o=c[1],u=Object(s.a)(),j=u.getCharacter,h=u.clearError,d=u.process,b=u.setProcess;Object(r.useEffect)((function(){m()}),[e.charId]);var m=function(){var t=e.charId;t&&(h(),j(t).then(f).then((function(){return b("confirmed")})))},f=function(e){o(e)};return Object(l.jsx)("div",{className:"char__info",children:Object(i.a)(d,x,n)})},_=c(11),g=c(14),N=c(15),k=c(17),w=function(e){Object(N.a)(c,e);var t=Object(k.a)(c);function c(){var e;Object(_.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(g.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(f.a,{}):this.props.children}}]),c}(r.Component),y=c.p+"static/media/vision.067d4ae1.png",C=c(80),E=c(81),S=(c(76),function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],i=Object(s.a)(),o=i.loading,u=i.error,j=i.getCharacterByName,h=i.clearError,d=function(e){n(e)},b=u?Object(l.jsx)("div",{className:"char__search-critical-error",children:Object(l.jsx)(f.a,{})}):null,m=c?c.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(l.jsx)(p.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(C.d,{initialValues:{charName:""},validationSchema:E.a({charName:E.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,h(),j(t).then(d)},children:Object(l.jsxs)(C.c,{onChange:function(e){return e.target.value?null:n(null)},children:[Object(l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(C.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:o,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(C.a,{component:"div",className:"char__search-error",name:"charName"})]})}),m,b]})});t.default=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel information portal"})]}),Object(l.jsx)(w,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(w,{children:Object(l.jsx)(O,{onCharSelected:function(e){s(e)}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(w,{children:Object(l.jsx)(v,{charId:c})}),Object(l.jsx)(w,{children:Object(l.jsx)(S,{})})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:y,alt:"vision"})]})}}}]);
//# sourceMappingURL=5.ba30a295.chunk.js.map