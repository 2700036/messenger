(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{26:function(e,t,a){e.exports=a(44)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),c=a.n(r),o=a(16),l=a(7),u=a(20),d=a(21),i=a(24),m=a(23),f=(a(31),function(e){var t=e.chatHeader;return s.a.createElement("div",{className:"app-header d-flex"},s.a.createElement("h1",null,t))}),h=a(12),g=(a(32),function(e){var t=e.onSearchInput,a=Object(n.useState)(""),r=Object(h.a)(a,2),c=r[0],o=r[1];return s.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u043c...",onChange:function(e){var a=e.target;o(a.value),t(a.value)},value:c})}),p=a(25),A=(a(33),function(e){var t=e.label,a=e.date,n=e.authorName,r=e.isUsersMessage,c=e.onDeleted,o=e.onEditMessage;return s.a.createElement("li",{className:"message ".concat(r?"message_users":"")},s.a.createElement("div",{className:"message-list-item-label"},s.a.createElement("div",{className:"message__info ".concat(r?"message__info_users":"")},r?null:s.a.createElement("span",{className:"message__user-name"},n),s.a.createElement("span",{className:"message__date"},a)),s.a.createElement("span",{className:"message__text"},t)),r?s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{type:"button",className:"btn btn-sm float-right ",onClick:c},s.a.createElement("i",{className:"fa fa-trash-o"})),s.a.createElement("button",{type:"button",className:"btn btn-sm float-right",onClick:o},s.a.createElement("i",{className:"fa fa-pencil-square-o"}))):null)}),b=(a(34),function(e){var t=e.items,a=e.onDeleted,r=e.onEditMessage;Object(n.useEffect)((function(){document.querySelector(".message-list")&&(document.querySelector(".message-list").scrollTop+=1e4)}));var c=t.map((function(e){var t=e.id,n=e.authorId,c=Object(p.a)(e,["id","authorId"]),o="768fghz"===n;return s.a.createElement(A,Object.assign({},c,{isUsersMessage:o,key:t,onDeleted:function(){return a(t)},onEditMessage:function(){return r(e.label,t)}}))}));return s.a.createElement("ul",{className:"list-group message-list"},c)}),v=(a(35),a(11)),S=function(e){var t=e.name,a=e.isActive;return s.a.createElement("li",{className:"themes-list-item ".concat(a?"themes-list-item_active":null)},s.a.createElement(v.b,{to:"messenger/".concat(t)},t))},E=(a(41),function(e){var t=e.themes,a=e.currentTheme,n=void 0===a?null:a,r=t.map((function(e,t){return s.a.createElement(S,{key:e+t,name:e,isActive:n===e})}));return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:"themes-list"},s.a.createElement("img",{alt:"logo",className:"logo",src:"data:image/png;base64,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"}),r))}),y=(a(42),function(e){var t=e.messageText,a=e.onItemAdded,r=e.changeMessage,c=e.changeInputsMode,o=e.isInputSearchMode,l=Object(n.useState)(""),u=Object(h.a)(l,2),d=u[0],i=u[1];Object(n.useEffect)((function(){i(t)}),[t]);var m=function(e){e.preventDefault(),a(d),i("")},f=function(e){e.preventDefault(),g(e),r(d),i(""),c()},g=function(e){var t=e.target.value;i(t)};return s.a.createElement("form",{className:"item-add-form d-flex",onSubmit:o?m:f},s.a.createElement("input",{type:"text",className:"form-control",onChange:g,placeholder:o?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...":"",value:d,required:!0}),s.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:o?m:f,disabled:!d},o?"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"))}),I=a(1),M=0,O={"Stuff to do":[{label:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440, \u0434\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c!",id:M++,authorId:"345tgkd",authorName:"\u0410\u043b\u0451\u0448\u0430",date:"Aug 06 2020 12:28"},{label:"\u0414\u043e\u0431\u0440\u044b\u0439! \u041b\u0451\u0448, \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u0440\u043e\u0447\u043d\u043e \u0440\u0435\u0448\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u0441 \u0442\u0435\u043c \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u043c, \u043f\u043e \u043f\u0440\u0435\u0434\u043d\u0435\u043c\u0443 \u043e\u0442\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043e\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u043c \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0441 \u043d\u0430\u0448\u0435\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b?",id:M++,authorId:"768fghz",authorName:"\u0421\u0430\u0448\u0430",date:"Aug 06 2020 12:28"},{label:"\u041d\u0430\u0431\u0435\u0440\u0443, \u043f\u043e\u043e\u0431\u0449\u0430\u044e\u0441\u044c",id:M++,authorId:"345tgkd",authorName:"\u0410\u043b\u0451\u0448\u0430",date:"Aug 06 2020 12:28"},{label:"\u0415\u0441\u043b\u0438 \u043f\u043e\u0439\u0434\u0435\u0442 \u0432 \u043e\u0442\u043a\u0430\u0437, \u0431\u0443\u0434\u0435\u043c \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u043c\u0435\u0440\u044b..",id:M++,authorId:"345tgkd",authorName:"\u0410\u043b\u0451\u0448\u0430",date:"Aug 06 2020 12:28"},{label:"\u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u043b\u0438\u0447\u043d\u0430\u044f \u0443\u0436\u0435 \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e",id:M++,authorId:"345tgkd",authorName:"\u0410\u043b\u0451\u0448\u0430",date:"Aug 06 2020 12:28"},{label:"\u0414\u0430\u0432\u0430\u0439, \u0435\u0441\u043b\u0438 \u0447\u0442\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0439 \u043a\u043e\u043b\u043b\u0435\u0433 \u0438\u0437 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e, \u044f \u0441\u043e \u0441\u0432\u043e\u0435\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0442\u043e\u0436\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u044e \u043d\u0430\u0439\u0442\u0438 \u043f\u043e\u0434\u0445\u043e\u0434",id:M++,authorId:"768fghz",authorName:"\u0421\u0430\u0448\u0430",date:"Aug 06 2020 12:28"}],"Flood & fun":[{label:"\u0445\u0430\u044e-\u0445\u0430\u0439!! \u0418\u0434\u0451\u043c \u0441\u0435\u0433\u043e\u0434\u043d\u044f?",id:M++,authorId:"345tgkd",authorName:"\u0410\u043b\u0451\u0448\u0430",date:"Aug 06 2020 12:28"},{label:"\u0412\u043e\u043e\u0431\u0449\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043b, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0437\u0430\u043b\u0438\u043f\u043d\u0443 \u0441 \u0434\u043e \u0432\u0435\u0447\u0435\u0440\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435 \u0442\u043e \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0435\u043d\u044e\u0441\u044c \u043a \u0432\u0430\u043c, \u0435\u0441\u043b\u0438 \u0447\u0442\u043e \u043f\u043e\u0434\u043e\u0439\u0434\u0443 \u043f\u043e\u043f\u043e\u0437\u0436\u0435",id:M++,authorId:"768fghz",authorName:"\u0421\u0430\u0448\u0430",date:"Aug 06 2020 12:28"},{label:"\u0421\u0430\u043d\u044f \u0421\u0430\u043d\u044f... ",id:M++,authorId:"345tgkd",authorName:"\u0410\u043b\u0451\u0448\u0430",date:"Aug 06 2020 12:28"},{label:"\u043e\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0434\u043e\u0445\u043d\u0443\u0442\u044c \u043a\u043e\u043d\u0438!))",id:M++,authorId:"345tgkd",authorName:"\u0410\u043b\u0451\u0448\u0430",date:"Aug 06 2020 12:28"},{label:"\u043d\u0443 \u0430 \u044f?",id:M++,authorId:"345tgkd",authorName:"\u0410\u043b\u0451\u0448\u0430",date:"Aug 06 2020 12:28"},{label:"\u0431\u0435\u0441\u0441\u043c\u0435\u0440\u0442\u043d\u044b\u0439 \u043f\u043e\u043d\u0438! \u041d\u0443 \u0447\u0442\u043e \u044f \u043c\u043e\u0433\u0443 \u043f\u043e\u0434\u0435\u043b\u0430\u0442\u044c, \u043a\u043e\u043c\u0443 \u0442\u043e \u043d\u0443\u0436\u043d\u043e \u044d\u0442\u043e \u0434\u0435\u0440\u044c\u043c\u043e \u0442\u0430\u0449\u0438\u0442\u044c) \u0412\u044b \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043f\u0430\u0431? ",id:M++,authorId:"768fghz",authorName:"\u0421\u0430\u0448\u0430",date:"Aug 06 2020 12:28"},{label:"\u0430\u0433\u0430!",id:M++,authorId:"345tgkd",authorName:"\u0410\u043b\u0451\u0448\u0430",date:"Aug 06 2020 12:28"}]},F=(a(43),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={themes:[],searchWord:"",isInputSearchMode:!0,messageText:"",idOfEditMessage:0},e.updateLocalStorage=function(){localStorage.themes=JSON.stringify(e.state.themes)},e.deleteItem=function(t,a){e.setState((function(n){var s=n.themes,r=s[a].findIndex((function(e){return e.id===t}));return s[a]=[].concat(Object(l.a)(s[a].slice(0,r)),Object(l.a)(s[a].slice(r+1))),e.updateLocalStorage(),{themes:s}}))},e.addItem=function(t,a){var n={label:t,id:100*Math.random(),authorId:"768fghz",authorName:"\u0421\u0430\u0448\u0430",date:"".concat(new Date).slice(4,21)};e.setState((function(t){var s=t.themes;return s[a]=[].concat(Object(l.a)(s[a]),[n]),e.updateLocalStorage(),{themes:s}}))},e.onSearchInput=function(t){e.setState({searchWord:t})},e.changeInputsMode=function(){e.setState({isInputSearchMode:!e.state.isInputSearchMode})},e.onEditMessage=function(t,a){e.changeInputsMode(),e.setState({messageText:t}),e.setState({idOfEditMessage:a})},e.changeMessage=function(t,a){e.setState((function(n){var s=n.themes,r=Object(o.a)({},s),c=r[a].findIndex((function(t){return t.id===e.state.idOfEditMessage})),u=r[a].find((function(t){return t.id===e.state.idOfEditMessage}));return u.label=t,r[a]=[].concat(Object(l.a)(s[a].slice(0,c)),[u],Object(l.a)(s[a].slice(c+1))),e.updateLocalStorage(),{themes:r}}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){localStorage.length?this.setState({themes:JSON.parse(localStorage.themes)}):this.setState({themes:Object(o.a)({},O)})}},{key:"search",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().includes(t.toLowerCase())}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.themes,n=t.searchWord,r=t.isInputSearchMode,c=t.messageText;return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,null,s.a.createElement(I.a,{path:"messenger/",exact:!0},s.a.createElement(E,{themes:Object.keys(a)}),s.a.createElement("p",{className:"theme-select"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430")),s.a.createElement(I.a,{path:"messenger/:id",render:function(t){var o=t.match.params.id;return s.a.createElement(s.a.Fragment,null,s.a.createElement(E,{themes:Object.keys(a),currentTheme:o}),s.a.createElement("div",{className:"messenger-app"},s.a.createElement(f,{chatHeader:o}),s.a.createElement("div",{className:"top-panel d-flex"},s.a.createElement(g,{onSearchInput:e.onSearchInput})),e.state.themes[o]&&s.a.createElement(b,{items:e.search(a[o],n),onDeleted:function(t){return e.deleteItem(t,o)},onEditMessage:e.onEditMessage}),s.a.createElement(y,{onItemAdded:function(t){return e.addItem(t,o)},changeInputsMode:e.changeInputsMode,changeMessage:function(t){return e.changeMessage(t,o)},isInputSearchMode:r,messageText:c})))}})))}}]),a}(n.Component));c.a.render(s.a.createElement(F,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.53ebe4c0.chunk.js.map