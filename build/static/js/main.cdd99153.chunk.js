(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],Array(28).concat([function(e,t,s){},function(e,t,s){},,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),a=s(20),c=s.n(a),o=(s(28),s(15)),r=s(2),l=s(4),j=(s(29),s(9)),d=s(23),u=s(0),m=["component"],_=function(e){var t=e.component,s=Object(d.a)(e,m);return Object(u.jsx)(l.b,{children:function(){return s.loggedIn?Object(u.jsx)(t,Object(j.a)({},s)):Object(u.jsx)(l.a,{to:"/"})}})},h=s.p+"static/media/logo.8f97642a.svg",b=s(3);s(36);var p=function(e){var t=e.loggedIn,s=i.a.useState(!1),n=Object(r.a)(s,2),a=n[0],c=n[1];return Object(u.jsxs)("div",{className:"header__navigation",children:[Object(u.jsxs)("div",{className:t?"header__navigation-login_invisible":"header__navigation-login",children:[Object(u.jsx)(b.b,{to:"/signup",className:"header__link header__link_type_register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(u.jsx)(b.b,{to:"/signin",className:"header__link header__link_type_register_button",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(u.jsxs)("div",{className:t?"header__navigation-movies":"header__navigation-movies_invisible",children:[Object(u.jsx)(b.b,{to:"/movies",className:"header__link header__link_type_movies",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(b.b,{to:"/saved-movies",className:"header__link header__link_type_movies",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(b.b,{to:"/profile",className:"header__link header__link_type_movies_button",children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"})]}),Object(u.jsx)("button",{className:t?"header__menu-button":"header__menu-button_invisible",onClick:function(){c(!0)}}),Object(u.jsxs)("div",{className:a?"header__menu":"header__menu_invisible",children:[Object(u.jsx)("button",{className:"header__menu-close-button",onClick:function(){c(!1)}}),Object(u.jsx)("div",{className:"header__menu-container",children:Object(u.jsxs)("div",{className:"header__menu-links",children:[Object(u.jsx)(b.b,{to:"/",className:"header__menu-link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(u.jsx)(b.b,{to:"/movies",className:"header__menu-link",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(b.b,{to:"/saved-movies",className:"header__menu-link",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(b.b,{to:"/profile",className:"header__menu-link header__menu-link_type_account",children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"})]})})]})]})};s(37);var v=function(e){var t=e.main,s=e.loggedIn;return Object(u.jsxs)("section",{className:t?"header":"header header_loggedIn",children:[Object(u.jsx)(b.b,{to:"/",children:Object(u.jsx)("img",{className:"header__logo",src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(u.jsx)(p,{loggedIn:s})]})},f=s.p+"static/media/promo.872d9c2d.svg";s(38);var O=function(){return Object(u.jsxs)("section",{className:"promo",children:[Object(u.jsx)("img",{className:"promo__image",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",src:f}),Object(u.jsxs)("div",{className:"promo__group",children:[Object(u.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(u.jsx)("p",{className:"promo__text",children:"\u041b\u0438\u0441\u0442\u0430\u0439\u0442\u0435 \u043d\u0438\u0436\u0435, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u043e \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442 \u0438 \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044f."}),Object(u.jsx)("a",{href:"#about-project",className:"promo__button",children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"})]})]})};s(39);var x=function(){return Object(u.jsxs)("section",{className:"about-project",id:"about-project",children:[Object(u.jsx)("h2",{className:"about-project__title",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(u.jsxs)("div",{className:"about-project__info",children:[Object(u.jsxs)("div",{className:"about-project__info_group",children:[Object(u.jsx)("h3",{className:"about-project__info-title",children:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432"}),Object(u.jsx)("p",{className:"about-project__info-text",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})]}),Object(u.jsxs)("div",{className:"about-project__info_group",children:[Object(u.jsx)("h3",{className:"about-project__info-title",children:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e 5 \u043d\u0435\u0434\u0435\u043b\u044c"}),Object(u.jsx)("p",{className:"about-project__info-text",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]})]}),Object(u.jsxs)("div",{className:"about-project__steps",children:[Object(u.jsx)("p",{className:"about-project__steps-text about-project__steps-text_type_one-week",children:"1 \u043d\u0435\u0434\u0435\u043b\u044f"}),Object(u.jsx)("p",{className:"about-project__steps-text about-project__steps-text_type_four-week",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(u.jsx)("p",{className:"about-project__description-text about-project__description-text-back",children:"Back-end"}),Object(u.jsx)("p",{className:"about-project__description-text about-project__description-text-front",children:"Front-end"})]})]})};s(40);var g=function(){return Object(u.jsxs)("section",{className:"techs",children:[Object(u.jsx)("h2",{className:"techs__heading",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(u.jsx)("h3",{className:"techs__title",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(u.jsx)("p",{className:"techs__subtitle",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(u.jsxs)("ul",{className:"techs__list",children:[Object(u.jsx)("li",{className:"techs__list-item",children:"HTML"}),Object(u.jsx)("li",{className:"techs__list-item",children:"CSS"}),Object(u.jsx)("li",{className:"techs__list-item",children:"JS"}),Object(u.jsx)("li",{className:"techs__list-item",children:"React"}),Object(u.jsx)("li",{className:"techs__list-item",children:"Git"}),Object(u.jsx)("li",{className:"techs__list-item",children:"Express.js"}),Object(u.jsx)("li",{className:"techs__list-item",children:"mongoDB"})]})]})},N=s.p+"static/media/photo.3add009c.jpg";s(41);var S=function(){return Object(u.jsxs)("section",{className:"about-me",children:[Object(u.jsx)("h2",{className:"about-me__heading",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(u.jsxs)("div",{className:"about-me__description",children:[Object(u.jsxs)("div",{className:"about-me__description-text",children:[Object(u.jsx)("h3",{className:"about-me__description-title",children:"\u042e\u043b\u044f"}),Object(u.jsx)("p",{className:"about-me__description-subtitle",children:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, 23 \u0433\u043e\u0434\u0430"}),Object(u.jsx)("p",{className:"about-me__description-paragraph",children:"\u042f \u0436\u0438\u0432\u0443 \u0432 \u041c\u0438\u043d\u0441\u043a\u0435. \u0423\u0432\u043b\u0435\u043a\u0430\u044e\u0441\u044c \u043c\u0443\u0437\u044b\u043a\u043e\u0439. \u0412 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0438\u0433\u0440\u0430\u044e \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0448\u0430\u0445 \u0432 \u0433\u0440\u0443\u043f\u043f\u0435. \u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u0441\u0432\u043e\u0438\u043c \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u043c \u0432 \u0441\u0444\u0435\u0440\u0435 \u043f\u0440\u043e\u0433\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u043e\u0441\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u042f\u043d\u0434\u0435\u043a\u0441 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430 \u0431\u0443\u0434\u0443 \u0433\u043e\u0442\u043e\u0432\u0430\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u043e\u0438\u0441\u043a\u0443 \u0440\u0430\u0431\u043e\u0442\u044b."}),Object(u.jsx)("a",{className:"about-me__description-link",href:"https://github.com/0Julia0",target:"_blank",rel:"noreferrer",children:"Github"})]}),Object(u.jsx)("img",{className:"about-me__description-photo",src:N,alt:"\u042e\u043b\u044f"})]})]})};s(42);var k=function(){return Object(u.jsxs)("section",{className:"footer",children:[Object(u.jsx)("p",{className:"footer__text",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(u.jsxs)("div",{className:"footer__nav",children:[Object(u.jsx)("p",{className:"footer__copyright",children:"\xa9 2020"}),Object(u.jsxs)("ul",{className:"footer__links",children:[Object(u.jsx)("li",{className:"footer__links-element",children:Object(u.jsx)("a",{className:"footer__link",href:"https://praktikum.yandex.ru/",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})}),Object(u.jsx)("li",{className:"footer__links-element",children:Object(u.jsx)("a",{className:"footer__link",href:"https://github.com",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(u.jsx)("li",{className:"footer__links-element",children:Object(u.jsx)("a",{className:"footer__link",href:"https://www.facebook.com",target:"_blank",rel:"noreferrer",children:"Facebook"})})]})]})]})};s(43);var y=function(){return Object(u.jsxs)("section",{className:"portfolio",children:[Object(u.jsx)("h4",{className:"portfolio__title",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(u.jsxs)("ul",{className:"portfolio__links",children:[Object(u.jsx)("li",{className:"portfolio__links-element",children:Object(u.jsx)("a",{className:"portfolio__link",href:"https://0julia0.github.io/how-to-learn/",target:"_blank",rel:"noreferrer",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(u.jsx)("li",{className:"portfolio__links-element",children:Object(u.jsx)("a",{className:"portfolio__link",href:"https://0julia0.github.io/russian-travel/index.html",target:"_blank",rel:"noreferrer",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(u.jsx)("li",{className:"portfolio__links-element",children:Object(u.jsx)("a",{className:"portfolio__link",href:"https://julia.p.nomoredomains.club/",target:"_blank",rel:"noreferrer",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})})]})]})};var C=function(e){var t=e.loggedIn;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:t,main:!0}),Object(u.jsx)(O,{}),Object(u.jsx)(x,{}),Object(u.jsx)(g,{}),Object(u.jsx)(S,{}),Object(u.jsx)(y,{}),Object(u.jsx)(k,{})]})},M=(s(44),s.p+"static/media/search_icon.9d65490b.svg");s(45);var I=function(e){var t=e.onChange,s=e.isChecked;return Object(u.jsxs)("label",{className:"search__toggle-label",children:[Object(u.jsx)("input",{className:"search__toggle",id:"short-films",type:"checkbox",onChange:t,checked:s}),Object(u.jsx)("span",{className:"search__toggle_visible"})]})};var E=function(e){var t=e.onSearchSavedMovies,s=e.onSearchMovies,n=e.saved,a=e.onShortMoviesCheck,c=e.isChecked,o=i.a.useState(""),l=Object(r.a)(o,2),j=l[0],d=l[1],m=i.a.useState(!0),_=Object(r.a)(m,2),h=_[0],b=_[1];return Object(u.jsx)("section",{className:"search",children:Object(u.jsxs)("form",{className:"search__form",onSubmit:n?function(e){e.preventDefault(),t(j)}:function(e){e.preventDefault(),s(j)},children:[Object(u.jsx)("img",{className:"search__form-icon",src:M,alt:"\u041f\u043e\u0438\u0441\u043a"}),Object(u.jsxs)("fieldset",{className:"search__form-field",children:[Object(u.jsx)("input",{className:"search__form-input",type:"text",name:"search",placeholder:"\u0424\u0438\u043b\u044c\u043c",value:j,onChange:function(e){d(e.target.value),b(e.target.checkValidity())},required:!0}),Object(u.jsx)("span",{className:h?"search__form-error search__form-error_invisible":"search__form-error",children:"\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"})]}),Object(u.jsx)("button",{className:"search__form-button",type:"submit"}),Object(u.jsxs)("div",{className:"search__toggle-box",children:[Object(u.jsx)(I,{onChange:a,isChecked:c}),Object(u.jsx)("h3",{className:"search__toggle-text",children:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"})]})]})})};s(46),s(47);var w=function(e){var t,s,n,a,c,o=e.movie,j=(e.savedMovies,e.onMovieSave),d=e.onMovieDelete,m=e.saved,_=i.a.useState(!1),h=Object(r.a)(_,2),b=h[0],p=h[1],v=i.a.useState(!1),f=Object(r.a)(v,2),O=f[0],x=f[1],g={country:o.country,director:o.director,duration:o.duration,year:o.year,description:o.description,image:"https://api.nomoreparties.co".concat(null===(t=o.image)||void 0===t?void 0:t.url),trailer:null===o||void 0===o?void 0:o.trailerLink,nameRU:o.nameRU,nameEN:o.nameEN,thumbnail:"https://api.nomoreparties.co".concat(null===(s=o.image)||void 0===s||null===(n=s.formats)||void 0===n||null===(a=n.thumbnail)||void 0===a?void 0:a.url),movieId:o.id},N=JSON.parse(localStorage.getItem("savedMovies")).find((function(e){return e.nameRU===o.nameRU})),S=Object(l.h)();return i.a.useEffect((function(){N&&x(!0)}),[N,S]),Object(u.jsxs)("li",{className:"movies__list-item",children:[Object(u.jsx)("a",{className:"movies__list-link",href:m?o.trailer:o.trailerLink,target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{className:"movies__list-poster",alt:o.nameRU,src:m?o.image:"https://api.nomoreparties.co".concat(null===(c=o.image)||void 0===c?void 0:c.url)})}),Object(u.jsxs)("div",{className:"movies__list-description",onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)},children:[Object(u.jsx)("p",{className:"movies__list-title",children:o.nameRU}),m?Object(u.jsx)("button",{className:b?"movies__list-delete movies__list-delete_visible":"movies__list-delete",onClick:function(e){e.preventDefault(),d(o._id),x(!1)}}):Object(u.jsx)("button",{className:"movies__list-like ".concat(O?"movies__list-like_active":""),onClick:O?function(){x(!1),d(N._id)}:function(){j(g),x(!0)}})]}),Object(u.jsx)("p",{className:"movies__list-duration",children:"".concat(Math.trunc(g.duration/60),"\u0447 ").concat(g.duration%60,"\u043c")})]})},D=(s(48),function(e){var t=e.isSearching;return Object(u.jsx)("div",{className:t?"preloader":"preloader preloader__invisible",children:Object(u.jsx)("div",{className:"preloader__container",children:Object(u.jsx)("span",{className:"preloader__round"})})})});var T=function(e){var t=e.movies,s=e.isSearching,n=e.isErrorActive,a=e.notFound,c=e.saved,o=e.savedMovies,l=e.onMovieSave,j=e.onMovieDelete,d=i.a.useState((function(){var e=window.innerWidth;return e<720?5:e<920?8:e>920?12:void 0})),m=Object(r.a)(d,2),_=m[0],h=m[1],b=i.a.useState((function(){var e=window.innerWidth;return e<720||e<920?2:e>920?3:void 0})),p=Object(r.a)(b,2),v=p[0],f=p[1];function O(){var e=window.innerWidth;e<720?(h(5),f(2)):e<920?(h(8),f(2)):e>920&&(h(12),f(3))}var x=null===t||void 0===t?void 0:t.slice(0,_);return i.a.useEffect((function(){window.addEventListener("resize",O)}),[]),Object(u.jsxs)("section",{className:"movies",children:[Object(u.jsx)(D,{isSearching:s}),Object(u.jsx)("span",{className:n?"movies__error":"movies__error movies__error_invisible",children:"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"}),Object(u.jsx)("span",{className:a?"movies__error":"movies__error movies__error_invisible",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(u.jsx)("ul",{className:"movies__list",children:x.map((function(e){return Object(u.jsx)(w,{movie:e,saved:c,savedMovies:o,onMovieSave:l,onMovieDelete:j},c?e.movieId:e.id)}))}),Object(u.jsx)("button",{className:(null===t||void 0===t?void 0:t.length)===(null===x||void 0===x?void 0:x.length)?"movies__button movies__button_invisible":"movies__button",onClick:function(){h((function(e){return e+v}))},children:"\u0415\u0449\u0435"})]})};var J=function(e){var t=e.loggedIn,s=e.onSearchMovies,n=e.onShortMoviesCheck,i=e.isShortMoviesChecked,a=e.movies,c=e.isSearching,o=e.isErrorActive,r=e.notFound,l=e.savedMovies,j=e.onMovieSave,d=e.onMovieDelete;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:t,main:!1}),Object(u.jsx)(E,{onSearchMovies:s,saved:!1,onShortMoviesCheck:n,isChecked:i}),Object(u.jsx)(T,{movies:a,isSearching:c,isErrorActive:o,notFound:r,saved:!1,savedMovies:l,onMovieSave:j,onMovieDelete:d}),Object(u.jsx)(k,{})]})};var F=function(e){var t=e.loggedIn,s=e.onSearchSavedMovies,n=e.onShortMoviesCheck,i=e.isShortMoviesChecked,a=e.onMovieDelete,c=e.movies,o=e.savedMovies;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:t,main:!1}),Object(u.jsx)(E,{onSearchSavedMovies:s,saved:!0,onShortMoviesCheck:n,isChecked:i}),Object(u.jsx)(T,{movies:c,savedMovies:o,saved:!0,onMovieDelete:a}),Object(u.jsx)(k,{})]})},R=(s(49),i.a.createContext()),U=s(13);function A(){var e=i.a.useState({}),t=Object(r.a)(e,2),s=t[0],n=t[1],a=i.a.useState({}),c=Object(r.a)(a,2),o=c[0],l=c[1],d=i.a.useState(!1),u=Object(r.a)(d,2),m=u[0],_=u[1];return{values:s,setValues:n,handleChange:function(e){var t=e.target,i=t.name,a=t.value;n(Object(j.a)(Object(j.a)({},s),{},Object(U.a)({},i,a))),l(Object(j.a)(Object(j.a)({},o),{},Object(U.a)({},i,t.validationMessage))),_(t.closest("form").checkValidity())},errors:o,isValid:m}}var L=function(e){var t=e.onUpdateUser,s=e.isUpdateSuccess,n=e.isSaving,a=e.loggedIn,c=e.message,o=e.onSignOut,l=A(),j=l.values,d=l.setValues,m=l.handleChange,_=l.errors,h=l.isValid,b=i.a.useState(!0),p=Object(r.a)(b,2),f=p[0],O=p[1],x=i.a.useContext(R);return i.a.useEffect((function(){d(x)}),[x,d]),i.a.useEffect((function(){O(s)}),[s,t]),i.a.useEffect((function(){n&&O(!0)}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:a,main:!1}),Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("h2",{className:"profile__title",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",x.name,"!"]}),Object(u.jsxs)("form",{className:"profile__form",onSubmit:function(e){e.preventDefault(),t(j.name,j.email)},children:[Object(u.jsxs)("fieldset",{className:"profile__fields",children:[Object(u.jsxs)("div",{className:"profile__input",children:[Object(u.jsx)("p",{className:"profile__input-text",children:"\u0418\u043c\u044f"}),Object(u.jsx)("input",{className:"profile__input-field",type:"text",name:"name",value:j.name,placeholder:"\u042e\u043b\u044f",onChange:m,disabled:f,required:!0})]}),Object(u.jsx)("span",{className:"profile__error",children:_.name}),Object(u.jsxs)("div",{className:"profile__input",children:[Object(u.jsx)("p",{className:"profile__input-text",children:"Email"}),Object(u.jsx)("input",{className:"profile__input-field",type:"email",name:"email",value:j.email,placeholder:"Email@email.ru",onChange:m,disabled:f,required:!0})]}),Object(u.jsx)("span",{className:"profile__error",children:_.email})]}),Object(u.jsx)("span",{className:s?"profile__error profile__error_invisible":"profile__error",children:c}),f?Object(u.jsx)("button",{className:"profile__button profile__button_type_edit",onClick:function(e){e.preventDefault(),O(!1)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}):Object(u.jsx)("button",{className:h?"profile__button profile__button_type_save":"profile__button profile__button_type_save_disabled",type:"submit",disabled:!h,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(u.jsx)("button",{className:f?"profile__link":"profile__link_invisible",onClick:o,children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})]})};s(50);var q=function(e){var t=e.onRegister,s=e.onClear,n=e.isSaving,i=e.message,a=A(),c=a.values,o=a.handleChange,r=a.errors,l=a.isValid;return Object(u.jsxs)("section",{className:"register",children:[Object(u.jsx)(b.b,{to:"/",children:Object(u.jsx)("img",{className:"register__logo",src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(u.jsx)("h2",{className:"register__title",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"}),Object(u.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),t(c.name,c.email,c.password),s()},children:[Object(u.jsxs)("fieldset",{className:"register__fields",children:[Object(u.jsx)("p",{className:"register__text",children:"\u0418\u043c\u044f"}),Object(u.jsx)("input",{className:"register__input",type:"text",name:"name",value:c.name,onChange:o,disabled:n,required:!0}),Object(u.jsx)("span",{className:"register__error",children:r.name}),Object(u.jsx)("p",{className:"register__text",children:"E-mail"}),Object(u.jsx)("input",{className:"register__input",type:"email",name:"email",value:c.email,onChange:o,disabled:n,required:!0}),Object(u.jsx)("span",{className:"register__error",children:r.email}),Object(u.jsx)("p",{className:"register__text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(u.jsx)("input",{className:"register__input",type:"password",name:"password",value:c.password,onChange:o,disabled:n,required:!0,minLength:"8"}),Object(u.jsx)("span",{className:"register__error",children:r.password})]}),Object(u.jsx)("span",{className:n?"register__error register__error_invisible":"register__error",children:i}),Object(u.jsx)("button",{className:l?"register__button":"register__button register__button_disabled",type:"submit",disabled:!l,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(u.jsxs)("h3",{className:"register__subtitle",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(u.jsx)(b.b,{className:"register__link",to:"/signin",onClick:s,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};s(51);var P=function(e){var t=e.onLogin,s=e.onClear,n=e.isSaving,i=e.message,a=A(),c=a.values,o=a.handleChange,r=a.errors,l=a.isValid;return Object(u.jsxs)("section",{className:"login",children:[Object(u.jsx)(b.b,{to:"/",children:Object(u.jsx)("img",{className:"login__logo",src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(u.jsx)("h2",{className:"login__title",children:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!"}),Object(u.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t(c.email,c.password),s()},children:[Object(u.jsxs)("fieldset",{className:"login__fields",children:[Object(u.jsx)("p",{className:"login__text",children:"E-mail"}),Object(u.jsx)("input",{className:"login__input",type:"email",name:"email",value:c.email,onChange:o,disabled:n,required:!0}),Object(u.jsx)("span",{className:"login__error",children:r.email}),Object(u.jsx)("p",{className:"login__text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(u.jsx)("input",{className:"login__input",type:"password",name:"password",value:c.password,onChange:o,disabled:n,required:!0,minLength:"8"}),Object(u.jsx)("span",{className:"login__error",children:r.password})]}),Object(u.jsx)("span",{className:n?"login__error login__error_invisible":"login__error",children:i}),Object(u.jsx)("button",{className:l?"login__button":"login__button login__button_disabled",type:"submit",disabled:!l,children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(u.jsxs)("h3",{className:"login__subtitle",children:["\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(u.jsx)(b.b,{className:"login__link",to:"/signup",onClick:s,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})};s(52);var B=function(){var e=Object(l.g)();return Object(u.jsxs)("section",{className:"not-found",children:[Object(u.jsx)("h2",{className:"not-found__title",children:"404"}),Object(u.jsx)("p",{className:"not-found__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(u.jsx)(b.b,{to:"/",className:"not-found__link",onClick:function(){e.goBack()},children:"\u041d\u0430\u0437\u0430\u0434"})]})};function V(){return fetch("".concat("https://api.nomoreparties.co/beatfilm-movies"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}(e)}))}var G="https://api.movies-explorer-julia.nomoredomains.club",W=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},H=function(){return fetch("".concat(G,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return W(e)}))};var z=function(){var e=i.a.useState({}),t=Object(r.a)(e,2),s=t[0],n=t[1],a=i.a.useState(!1),c=Object(r.a)(a,2),j=c[0],d=c[1],m=i.a.useState(!1),h=Object(r.a)(m,2),b=h[0],p=h[1],v=i.a.useState(!0),f=Object(r.a)(v,2),O=f[0],x=f[1],g=i.a.useState([]),N=Object(r.a)(g,2),S=N[0],k=N[1],y=i.a.useState(!1),M=Object(r.a)(y,2),I=M[0],E=M[1],w=i.a.useState(!1),D=Object(r.a)(w,2),T=D[0],U=D[1],A=i.a.useState([]),z=Object(r.a)(A,2),K=z[0],Q=z[1],X=i.a.useState(!1),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=i.a.useState(!1),te=Object(r.a)(ee,2),se=te[0],ne=te[1],ie=i.a.useState(""),ae=Object(r.a)(ie,2),ce=ae[0],oe=ae[1],re=i.a.useState(""),le=Object(r.a)(re,2),je=le[0],de=le[1],ue=i.a.useState(""),me=Object(r.a)(ue,2),_e=me[0],he=me[1],be=i.a.useState([]),pe=Object(r.a)(be,2),ve=pe[0],fe=pe[1],Oe=Object(l.g)();function xe(e){$(e.target.checked)}function ge(e,t){return ne(!0),function(e,t){return fetch("".concat(G,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})}).then((function(e){return W(e)}))}(e,t).then((function(e){e?(n(e),d(!0),he(""),Oe.push("/movies")):"Bad Request"===e.error?he("\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c. "):e.message&&he(e.message)})).catch((function(){he("\u041f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435.")})).finally((function(){ne(!1)}))}function Ne(){de(""),he(""),oe("")}function Se(e,t){var s=[];return e.forEach((function(e){if(e.nameRU.indexOf(t)>-1)return Z?e.duration<=40?s.push(e):void 0:s.push(e)})),s}function ke(e){ne(!0),function(e){return fetch("".concat(G,"/movies/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return W(e)}))}(e).then((function(){var t=ve.filter((function(t){return t._id!==e._id}));fe(t),localStorage.setItem("savedMovies",JSON.stringify(t))})).catch((function(e){console.log(e)})).finally((function(){ne(!1)}))}i.a.useEffect((function(){j&&Promise.all([H(),fetch("".concat(G,"/movies"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return W(e)}))]).then((function(e){var t=Object(r.a)(e,2),s=t[0],i=t[1];k(JSON.parse(localStorage.getItem("movies")));var a=[].concat(Object(o.a)(ve),[i]);localStorage.setItem("savedMovies",JSON.stringify(a)),n(s),fe(i)})).catch((function(e){console.log(e)}))}),[j,ve]);var ye=i.a.useCallback((function(){H().then((function(){d(!0),Oe.push("/")})).catch((function(e){console.log(e),Oe.push("/signin")}))}),[Oe]);return i.a.useEffect((function(){ye()}),[ye]),Object(u.jsx)(R.Provider,{value:s,children:Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/",children:Object(u.jsx)(C,{loggedIn:j})}),Object(u.jsx)(l.b,{exact:!0,path:"/",children:j?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(l.a,{to:"/signin"})}),Object(u.jsx)(_,{exact:!0,path:"/movies",component:J,loggedIn:j,onSearchMovies:function(e){if(p(!0),k([]),E(!1),U(!1),0===K.length)V().then((function(t){Q(t);var s=Se(t,e);0===s.length?(E(!0),k([])):(localStorage.setItem("movies",JSON.stringify(s)),k(JSON.parse(localStorage.getItem("movies"))))})).catch((function(){U(!0),k([])})).finally((function(){p(!1),$(!1)}));else{var t=Se(K,e);0===t.length?(E(!0),k([]),p(!1),$(!1)):0!==t.length?(localStorage.setItem("movies",JSON.stringify(t)),k(JSON.parse(localStorage.getItem("movies"))),p(!1),$(!1)):(U(!0),k([]),$(!1))}},onShortMoviesCheck:xe,isShortMoviesChecked:Z,movies:S,isSearching:b,isErrorActive:T,notFound:I,savedMovies:ve,onMovieSave:function(e){ne(!0),function(e){return fetch("".concat(G,"/movies"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({country:e.country,director:e.director,duration:e.duration,year:e.year,description:e.description,image:e.image,trailer:e.trailer,nameRU:e.nameRU,nameEN:e.nameEN,thumbnail:e.thumbnail,movieId:e.movieId})}).then((function(e){return W(e)}))}(e).then((function(e){var t=[e].concat(Object(o.a)(ve));localStorage.setItem("savedMovies",JSON.stringify(t)),fe((function(e){return[].concat(Object(o.a)(e),[ve])}))})).catch((function(e){console.log(e)})).finally((function(){ne(!1)}))},onMovieDelete:ke}),Object(u.jsx)(_,{exact:!0,path:"/saved-movies",component:F,loggedIn:j,onSearchSavedMovies:function(e){var t=Se(JSON.parse(localStorage.getItem("savedMovies")),e);console.log(t),fe(t)},onShortMoviesCheck:xe,isShortMoviesChecked:Z,movies:ve,savedMovies:ve,onMovieDelete:ke}),Object(u.jsx)(_,{exact:!0,path:"/profile",component:L,onUpdateUser:function(e,t){return ne(!0),function(e,t){return fetch("".concat(G,"/users/me"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:t})}).then((function(e){return W(e)}))}(e,t).then((function(e){e?(n(e),x(!0)):"Bad Request"===e.error&&(oe("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."),x(!1))})).catch((function(){oe("\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"),x(!1)})).finally((function(){ne(!1)}))},isUpdateSuccess:O,isSaving:se,loggedIn:j,message:ce,onSignOut:function(){localStorage.removeItem("movies"),d(!1),k([]),Q([]),Oe.push("/")}}),Object(u.jsx)(l.b,{exact:!0,path:"/signup",children:j?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(q,{onRegister:function(e,t,s){return ne(!0),function(e,t,s){return fetch("".concat(G,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:t,password:s})}).then((function(e){return W(e)}))}(e,t,s).then((function(e){e?(de(""),ge(t,s)):"Bad Request"===e.error?de("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."):e.message&&de(e.message)})).catch((function(){de("\u041f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")})).finally((function(){ne(!1)}))},onClear:Ne,isSaving:se,message:je})}),Object(u.jsx)(l.b,{exact:!0,path:"/signin",children:j?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(P,{onLogin:ge,onClear:Ne,isSaving:se,message:_e})}),Object(u.jsx)(l.b,{path:"*",children:Object(u.jsx)(B,{})})]})})})},K=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,54)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),i(e),a(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(z,{})})}),document.getElementById("root")),K()}]),[[53,1,2]]]);
//# sourceMappingURL=main.cdd99153.chunk.js.map