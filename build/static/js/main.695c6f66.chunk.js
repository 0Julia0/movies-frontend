(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],{150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),a=n(42),c=n.n(a),o=(n(50),n(25)),r=n(3),l=n(5),j=(n(51),n(11)),d=n(45),u=n(0),_=["component"],m=function(e){var t=e.component,n=Object(d.a)(e,_);return Object(u.jsx)(l.b,{children:function(){return n.loggedIn?Object(u.jsx)(t,Object(j.a)({},n)):Object(u.jsx)(l.a,{to:"/"})}})},b=n.p+"static/media/logo.8f97642a.svg",h=n(4);n(58);var p=function(e){var t=e.loggedIn,n=i.a.useState(!1),s=Object(r.a)(n,2),a=s[0],c=s[1];return Object(u.jsxs)("div",{className:"header__navigation",children:[Object(u.jsxs)("div",{className:t?"header__navigation-login_invisible":"header__navigation-login",children:[Object(u.jsx)(h.b,{to:"/signup",className:"header__link header__link_type_register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(u.jsx)(h.b,{to:"/signin",className:"header__link header__link_type_register_button",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(u.jsxs)("div",{className:t?"header__navigation-movies":"header__navigation-movies_invisible",children:[Object(u.jsx)(h.b,{to:"/movies",className:"header__link header__link_type_movies",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(h.b,{to:"/saved-movies",className:"header__link header__link_type_movies",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(h.b,{to:"/profile",className:"header__link header__link_type_movies_button",children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"})]}),Object(u.jsx)("button",{className:t?"header__menu-button":"header__menu-button_invisible",onClick:function(){c(!0)}}),Object(u.jsxs)("div",{className:a?"header__menu":"header__menu_invisible",children:[Object(u.jsx)("button",{className:"header__menu-close-button",onClick:function(){c(!1)}}),Object(u.jsx)("div",{className:"header__menu-container",children:Object(u.jsxs)("div",{className:"header__menu-links",children:[Object(u.jsx)(h.b,{to:"/",className:"header__menu-link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(u.jsx)(h.b,{to:"/movies",className:"header__menu-link",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(h.b,{to:"/saved-movies",className:"header__menu-link",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(h.b,{to:"/profile",className:"header__menu-link header__menu-link_type_account",children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"})]})})]})]})};n(59);var v=function(e){var t=e.main,n=e.loggedIn;return Object(u.jsxs)("section",{className:t?"header":"header header_loggedIn",children:[Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("img",{className:"header__logo",src:b,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(u.jsx)(p,{loggedIn:n})]})},f=n.p+"static/media/promo.872d9c2d.svg";n(60);var O=function(){return Object(u.jsxs)("section",{className:"promo",children:[Object(u.jsx)("img",{className:"promo__image",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",src:f}),Object(u.jsxs)("div",{className:"promo__group",children:[Object(u.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(u.jsx)("p",{className:"promo__text",children:"\u041b\u0438\u0441\u0442\u0430\u0439\u0442\u0435 \u043d\u0438\u0436\u0435, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u043e \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442 \u0438 \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044f."}),Object(u.jsx)("a",{href:"#about-project",className:"promo__button",children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"})]})]})};n(61);var x=function(){return Object(u.jsxs)("section",{className:"about-project",id:"about-project",children:[Object(u.jsx)("h2",{className:"about-project__title",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(u.jsxs)("div",{className:"about-project__info",children:[Object(u.jsxs)("div",{className:"about-project__info_group",children:[Object(u.jsx)("h3",{className:"about-project__info-title",children:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432"}),Object(u.jsx)("p",{className:"about-project__info-text",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})]}),Object(u.jsxs)("div",{className:"about-project__info_group",children:[Object(u.jsx)("h3",{className:"about-project__info-title",children:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e 5 \u043d\u0435\u0434\u0435\u043b\u044c"}),Object(u.jsx)("p",{className:"about-project__info-text",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]})]}),Object(u.jsxs)("div",{className:"about-project__steps",children:[Object(u.jsx)("p",{className:"about-project__steps-text about-project__steps-text_type_one-week",children:"1 \u043d\u0435\u0434\u0435\u043b\u044f"}),Object(u.jsx)("p",{className:"about-project__steps-text about-project__steps-text_type_four-week",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(u.jsx)("p",{className:"about-project__description-text about-project__description-text-back",children:"Back-end"}),Object(u.jsx)("p",{className:"about-project__description-text about-project__description-text-front",children:"Front-end"})]})]})};n(62);var g=function(){return Object(u.jsxs)("section",{className:"techs",children:[Object(u.jsx)("h2",{className:"techs__heading",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(u.jsx)("h3",{className:"techs__title",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(u.jsx)("p",{className:"techs__subtitle",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(u.jsxs)("ul",{className:"techs__list",children:[Object(u.jsx)("li",{className:"techs__list-item",children:"HTML"}),Object(u.jsx)("li",{className:"techs__list-item",children:"CSS"}),Object(u.jsx)("li",{className:"techs__list-item",children:"JS"}),Object(u.jsx)("li",{className:"techs__list-item",children:"React"}),Object(u.jsx)("li",{className:"techs__list-item",children:"Git"}),Object(u.jsx)("li",{className:"techs__list-item",children:"Express.js"}),Object(u.jsx)("li",{className:"techs__list-item",children:"mongoDB"})]})]})},N=n.p+"static/media/photo.3add009c.jpg";n(63);var S=function(){return Object(u.jsxs)("section",{className:"about-me",children:[Object(u.jsx)("h2",{className:"about-me__heading",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(u.jsxs)("div",{className:"about-me__description",children:[Object(u.jsxs)("div",{className:"about-me__description-text",children:[Object(u.jsx)("h3",{className:"about-me__description-title",children:"\u042e\u043b\u044f"}),Object(u.jsx)("p",{className:"about-me__description-subtitle",children:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, 23 \u0433\u043e\u0434\u0430"}),Object(u.jsx)("p",{className:"about-me__description-paragraph",children:"\u042f \u0436\u0438\u0432\u0443 \u0432 \u041c\u0438\u043d\u0441\u043a\u0435. \u0423\u0432\u043b\u0435\u043a\u0430\u044e\u0441\u044c \u043c\u0443\u0437\u044b\u043a\u043e\u0439. \u0412 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0438\u0433\u0440\u0430\u044e \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0448\u0430\u0445 \u0432 \u0433\u0440\u0443\u043f\u043f\u0435. \u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u0441\u0432\u043e\u0438\u043c \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u043c \u0432 \u0441\u0444\u0435\u0440\u0435 \u043f\u0440\u043e\u0433\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u043e\u0441\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u042f\u043d\u0434\u0435\u043a\u0441 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430 \u0431\u0443\u0434\u0443 \u0433\u043e\u0442\u043e\u0432\u0430\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u043e\u0438\u0441\u043a\u0443 \u0440\u0430\u0431\u043e\u0442\u044b."}),Object(u.jsx)("a",{className:"about-me__description-link",href:"https://github.com/0Julia0",target:"_blank",rel:"noreferrer",children:"Github"})]}),Object(u.jsx)("img",{className:"about-me__description-photo",src:N,alt:"\u042e\u043b\u044f"})]})]})};n(64);var k=function(){return Object(u.jsxs)("section",{className:"footer",children:[Object(u.jsx)("p",{className:"footer__text",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(u.jsxs)("div",{className:"footer__nav",children:[Object(u.jsx)("p",{className:"footer__copyright",children:"\xa9 2020"}),Object(u.jsxs)("ul",{className:"footer__links",children:[Object(u.jsx)("li",{className:"footer__links-element",children:Object(u.jsx)("a",{className:"footer__link",href:"https://praktikum.yandex.ru/",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})}),Object(u.jsx)("li",{className:"footer__links-element",children:Object(u.jsx)("a",{className:"footer__link",href:"https://github.com",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(u.jsx)("li",{className:"footer__links-element",children:Object(u.jsx)("a",{className:"footer__link",href:"https://www.facebook.com",target:"_blank",rel:"noreferrer",children:"Facebook"})})]})]})]})};n(65);var C=function(){return Object(u.jsxs)("section",{className:"portfolio",children:[Object(u.jsx)("h4",{className:"portfolio__title",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(u.jsxs)("ul",{className:"portfolio__links",children:[Object(u.jsx)("li",{className:"portfolio__links-element",children:Object(u.jsx)("a",{className:"portfolio__link",href:"https://0julia0.github.io/how-to-learn/",target:"_blank",rel:"noreferrer",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(u.jsx)("li",{className:"portfolio__links-element",children:Object(u.jsx)("a",{className:"portfolio__link",href:"https://0julia0.github.io/russian-travel/index.html",target:"_blank",rel:"noreferrer",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(u.jsx)("li",{className:"portfolio__links-element",children:Object(u.jsx)("a",{className:"portfolio__link",href:"https://julia.p.nomoredomains.club/",target:"_blank",rel:"noreferrer",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})})]})]})};var y=function(e){var t=e.loggedIn;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:t,main:!0}),Object(u.jsx)(O,{}),Object(u.jsx)(x,{}),Object(u.jsx)(g,{}),Object(u.jsx)(S,{}),Object(u.jsx)(C,{}),Object(u.jsx)(k,{})]})},M=(n(66),n.p+"static/media/search_icon.9d65490b.svg");n(67);var E=function(e){var t=e.onChange,n=e.isChecked;return Object(u.jsxs)("label",{className:"search__toggle-label",children:[Object(u.jsx)("input",{className:"search__toggle",id:"short-films",type:"checkbox",onChange:t,checked:n}),Object(u.jsx)("span",{className:"search__toggle_visible"})]})};var w=function(e){var t=e.onSearchSavedMovies,n=e.onSearchMovies,s=e.saved,a=e.onShortMoviesCheck,c=e.isChecked,o=i.a.useState(""),l=Object(r.a)(o,2),j=l[0],d=l[1],_=i.a.useState(!0),m=Object(r.a)(_,2),b=m[0],h=m[1];return Object(u.jsx)("section",{className:"search",children:Object(u.jsxs)("form",{className:"search__form",onSubmit:s?function(e){e.preventDefault(),t(j.toLowerCase())}:function(e){e.preventDefault(),n(j.toLowerCase())},children:[Object(u.jsx)("img",{className:"search__form-icon",src:M,alt:"\u041f\u043e\u0438\u0441\u043a"}),Object(u.jsxs)("fieldset",{className:"search__form-field",children:[Object(u.jsx)("input",{className:"search__form-input",type:"text",name:"search",placeholder:"\u0424\u0438\u043b\u044c\u043c",value:j,onChange:function(e){d(e.target.value)}}),Object(u.jsx)("span",{className:b?"search__form-error search__form-error_invisible":"search__form-error",children:"\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"})]}),Object(u.jsx)("button",{className:"search__form-button",type:"submit",onClick:function(){h(""!==j)}}),Object(u.jsxs)("div",{className:"search__toggle-box",children:[Object(u.jsx)(E,{onChange:a,isChecked:c}),Object(u.jsx)("h3",{className:"search__toggle-text",children:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"})]})]})})};n(68),n(69);var I=function(e){var t,n,s,a,c,o=e.movie,j=e.savedMovies,d=e.onMovieSave,_=e.onMovieDelete,m=e.saved,b=i.a.useState(!1),h=Object(r.a)(b,2),p=h[0],v=h[1],f=i.a.useState(!1),O=Object(r.a)(f,2),x=O[0],g=O[1],N={country:o.country,director:o.director,duration:o.duration,year:o.year,description:o.description,image:"https://api.nomoreparties.co".concat(null===(t=o.image)||void 0===t?void 0:t.url),trailer:null===o||void 0===o?void 0:o.trailerLink,nameRU:o.nameRU,nameEN:o.nameEN,thumbnail:"https://api.nomoreparties.co".concat(null===(n=o.image)||void 0===n||null===(s=n.formats)||void 0===s||null===(a=s.thumbnail)||void 0===a?void 0:a.url),movieId:o.id},S=j.find((function(e){return e.nameRU===o.nameRU})),k=Object(l.h)();return i.a.useEffect((function(){S&&g(!0)}),[S,k]),Object(u.jsxs)("li",{className:"movies__list-item",children:[Object(u.jsx)("a",{className:"movies__list-link",href:m?o.trailer:o.trailerLink,target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{className:"movies__list-poster",alt:o.nameRU,src:m?o.image:"https://api.nomoreparties.co".concat(null===(c=o.image)||void 0===c?void 0:c.url)})}),Object(u.jsxs)("div",{className:"movies__list-description",onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)},children:[Object(u.jsx)("p",{className:"movies__list-title",children:o.nameRU}),m?Object(u.jsx)("button",{className:p?"movies__list-delete movies__list-delete_visible":"movies__list-delete",onClick:function(e){e.preventDefault(),_(o._id),g(!1)}}):Object(u.jsx)("button",{className:"movies__list-like ".concat(x?"movies__list-like_active":""),onClick:x?function(){g(!1),_(S._id)}:function(){d(N),g(!0)}})]}),Object(u.jsx)("p",{className:"movies__list-duration",children:"".concat(Math.trunc(N.duration/60),"\u0447 ").concat(N.duration%60,"\u043c")})]})},A=(n(70),function(e){var t=e.isSearching;return Object(u.jsx)("div",{className:t?"preloader":"preloader preloader__invisible",children:Object(u.jsx)("div",{className:"preloader__container",children:Object(u.jsx)("span",{className:"preloader__round"})})})});var T=function(e){var t=e.movies,n=e.isSearching,s=e.isErrorActive,a=e.notFound,c=e.saved,o=e.savedMovies,l=e.onMovieSave,j=e.onMovieDelete,d=i.a.useState((function(){var e=window.innerWidth;return e<720?5:e<920?8:e>920?12:void 0})),_=Object(r.a)(d,2),m=_[0],b=_[1],h=i.a.useState((function(){var e=window.innerWidth;return e<720||e<920?2:e>920?3:void 0})),p=Object(r.a)(h,2),v=p[0],f=p[1];function O(){var e=window.innerWidth;e<720?(b(5),f(2)):e<920?(b(8),f(2)):e>920&&(b(12),f(3))}var x=null===t||void 0===t?void 0:t.slice(0,m);return i.a.useEffect((function(){window.addEventListener("resize",O)}),[]),Object(u.jsxs)("section",{className:"movies",children:[Object(u.jsx)(A,{isSearching:n}),Object(u.jsx)("span",{className:s?"movies__error":"movies__error movies__error_invisible",children:"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"}),Object(u.jsx)("span",{className:a?"movies__error":"movies__error movies__error_invisible",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(u.jsx)("ul",{className:"movies__list",children:null===x||void 0===x?void 0:x.map((function(e){return Object(u.jsx)(I,{movie:e,saved:c,savedMovies:o,onMovieSave:l,onMovieDelete:j},c?e.movieId:e.id)}))}),Object(u.jsx)("button",{className:(null===t||void 0===t?void 0:t.length)===(null===x||void 0===x?void 0:x.length)?"movies__button movies__button_invisible":"movies__button",onClick:function(){b((function(e){return e+v}))},children:"\u0415\u0449\u0435"})]})};var D=function(e){var t=e.loggedIn,n=e.onSearchMovies,s=e.onShortMoviesCheck,i=e.isShortMoviesChecked,a=e.movies,c=e.isSearching,o=e.isErrorActive,r=e.notFound,l=e.savedMovies,j=e.onMovieSave,d=e.onMovieDelete;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:t,main:!1}),Object(u.jsx)(w,{onSearchMovies:n,saved:!1,onShortMoviesCheck:s,isChecked:i}),Object(u.jsx)(T,{movies:a,isSearching:c,isErrorActive:o,notFound:r,saved:!1,savedMovies:l,onMovieSave:j,onMovieDelete:d}),Object(u.jsx)(k,{})]})};var F=function(e){var t=e.loggedIn,n=e.onSearchSavedMovies,s=e.onShortMoviesCheck,i=e.isShortMoviesChecked,a=e.onMovieDelete,c=e.movies,o=e.savedMovies;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:t,main:!1}),Object(u.jsx)(w,{onSearchSavedMovies:n,saved:!0,onShortMoviesCheck:s,isChecked:i}),Object(u.jsx)(T,{movies:c,savedMovies:o,saved:!0,onMovieDelete:a}),Object(u.jsx)(k,{})]})},R=(n(71),i.a.createContext()),U=n(17);function L(){var e=i.a.useState({}),t=Object(r.a)(e,2),n=t[0],s=t[1],a=i.a.useState({}),c=Object(r.a)(a,2),o=c[0],l=c[1],d=i.a.useState(!1),u=Object(r.a)(d,2),_=u[0],m=u[1];return{values:n,setValues:s,handleChange:function(e){var t=e.target,i=t.name,a=t.value;s(Object(j.a)(Object(j.a)({},n),{},Object(U.a)({},i,a))),l(Object(j.a)(Object(j.a)({},o),{},Object(U.a)({},i,t.validationMessage))),m(t.closest("form").checkValidity())},errors:o,isValid:_}}var J=n(13),P=n.n(J);var q=function(e){var t=e.onUpdateUser,n=e.isUpdateSuccess,s=e.isSaving,a=e.loggedIn,c=e.message,o=e.onSignOut,l=e.inputActive,j=e.buttonActive,d=L(),_=d.values,m=d.setValues,b=d.handleChange,h=d.errors,p=d.isValid,f=i.a.useState(!0),O=Object(r.a)(f,2),x=O[0],g=O[1],N=i.a.useContext(R),S=i.a.useState(),k=Object(r.a)(S,2),C=k[0],y=k[1];return i.a.useEffect((function(){m(N)}),[N,m]),i.a.useEffect((function(){g(n)}),[n,t]),i.a.useEffect((function(){s&&g(!0)}),[s]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:a,main:!1}),Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("h2",{className:"profile__title",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",N.name,"!"]}),Object(u.jsxs)("form",{className:"profile__form",onSubmit:function(e){e.preventDefault(),P.a.isEmail?(y(!0),t(_.name,_.email)):y(!1)},children:[Object(u.jsxs)("fieldset",{className:"profile__fields",children:[Object(u.jsxs)("div",{className:"profile__input",children:[Object(u.jsx)("p",{className:"profile__input-text",children:"\u0418\u043c\u044f"}),Object(u.jsx)("input",{className:"profile__input-field",type:"text",name:"name",value:_.name,placeholder:"\u042e\u043b\u044f",onChange:b,disabled:l,required:!0})]}),Object(u.jsx)("span",{className:"profile__error",children:h.name}),Object(u.jsxs)("div",{className:"profile__input",children:[Object(u.jsx)("p",{className:"profile__input-text",children:"Email"}),Object(u.jsx)("input",{className:"profile__input-field",type:"email",name:"email",value:_.email,placeholder:"Email@email.ru",onChange:b,disabled:l,required:!0})]}),Object(u.jsx)("span",{className:C?"profile__error":"profile__error profile__error_invisible",children:"\u041f\u043e\u0447\u0442\u0430 \u043d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u0430."})]}),Object(u.jsx)("span",{className:"profile__error",children:c}),x?Object(u.jsx)("button",{className:"profile__button profile__button_type_edit",onClick:function(e){e.preventDefault(),g(!1)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}):Object(u.jsx)("button",{className:p?"profile__button profile__button_type_save":"profile__button profile__button_type_save_disabled",type:"submit",disabled:j,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(u.jsx)("button",{className:x?"profile__link":"profile__link_invisible",onClick:o,children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})]})};n(150);var B=function(e){var t=e.onRegister,n=e.onClear,s=e.isSaving,a=e.message,c=e.inputActive,o=e.buttonActive,l=L(),j=l.values,d=l.handleChange,_=l.errors,m=l.isValid,p=i.a.useState(),v=Object(r.a)(p,2),f=v[0],O=v[1];return Object(u.jsxs)("section",{className:"register",children:[Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("img",{className:"register__logo",src:b,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(u.jsx)("h2",{className:"register__title",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"}),Object(u.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),P.a.isEmail?(O(!0),t(j.name,j.email,j.password),n()):O(!1)},children:[Object(u.jsxs)("fieldset",{className:"register__fields",children:[Object(u.jsx)("p",{className:"register__text",children:"\u0418\u043c\u044f"}),Object(u.jsx)("input",{className:"register__input",type:"text",name:"name",value:j.name,onChange:d,disabled:c,required:!0}),Object(u.jsx)("span",{className:"register__error",children:_.name}),Object(u.jsx)("p",{className:"register__text",children:"E-mail"}),Object(u.jsx)("input",{className:"register__input",type:"email",name:"email",value:j.email,onChange:d,disabled:c,required:!0}),Object(u.jsx)("span",{className:f?"register__error":"register__error register__error_invisible",children:"\u041f\u043e\u0447\u0442\u0430 \u043d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u0430."}),Object(u.jsx)("p",{className:"register__text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(u.jsx)("input",{className:"register__input",type:"password",name:"password",value:j.password,onChange:d,disabled:c,required:!0,minLength:"8"}),Object(u.jsx)("span",{className:"register__error",children:_.password})]}),Object(u.jsx)("span",{className:s?"register__error register__error_invisible":"register__error",children:a}),Object(u.jsx)("button",{className:m?"register__button":"register__button register__button_disabled",type:"submit",disabled:o,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(u.jsxs)("h3",{className:"register__subtitle",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(u.jsx)(h.b,{className:"register__link",to:"/signin",onClick:n,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};n(151);var V=function(e){var t=e.onLogin,n=e.onClear,s=e.isSaving,a=e.message,c=e.inputActive,o=e.buttonActive,l=L(),j=l.values,d=l.handleChange,_=l.errors,m=l.isValid,p=i.a.useState(),v=Object(r.a)(p,2),f=v[0],O=v[1];return Object(u.jsxs)("section",{className:"login",children:[Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("img",{className:"login__logo",src:b,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(u.jsx)("h2",{className:"login__title",children:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!"}),Object(u.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),P.a.isEmail?(O(!0),t(j.email,j.password),n()):O(!1)},children:[Object(u.jsxs)("fieldset",{className:"login__fields",children:[Object(u.jsx)("p",{className:"login__text",children:"E-mail"}),Object(u.jsx)("input",{className:"login__input",type:"email",name:"email",value:j.email,onChange:d,disabled:c,required:!0}),Object(u.jsx)("span",{className:f?"login__error":"login__error login__error_invisible",children:"\u041f\u043e\u0447\u0442\u0430 \u043d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u0430."}),Object(u.jsx)("p",{className:"login__text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(u.jsx)("input",{className:"login__input",type:"password",name:"password",value:j.password,onChange:d,disabled:c,required:!0,minLength:"8"}),Object(u.jsx)("span",{className:"login__error",children:_.password})]}),Object(u.jsx)("span",{className:s?"login__error login__error_invisible":"login__error",children:a}),Object(u.jsx)("button",{className:m?"login__button":"login__button login__button_disabled",type:"submit",disabled:o,children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(u.jsxs)("h3",{className:"login__subtitle",children:["\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(u.jsx)(h.b,{className:"login__link",to:"/signup",onClick:n,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})};n(152);var G=function(){var e=Object(l.g)();return Object(u.jsxs)("section",{className:"not-found",children:[Object(u.jsx)("h2",{className:"not-found__title",children:"404"}),Object(u.jsx)("p",{className:"not-found__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(u.jsx)(h.b,{to:"/",className:"not-found__link",onClick:function(){e.goBack()},children:"\u041d\u0430\u0437\u0430\u0434"})]})},W="https://api.movies-explorer-julia.nomoredomains.club",H="\u0412\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435.";function z(){return fetch("".concat("https://api.nomoreparties.co/beatfilm-movies"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}(e)}))}var K=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},Q=function(){return fetch("".concat(W,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return K(e)}))};var X=function(){var e=i.a.useState({}),t=Object(r.a)(e,2),n=t[0],s=t[1],a=i.a.useState(!1),c=Object(r.a)(a,2),j=c[0],d=c[1],_=i.a.useState(!1),b=Object(r.a)(_,2),h=b[0],p=b[1],v=i.a.useState(!0),f=Object(r.a)(v,2),O=f[0],x=f[1],g=i.a.useState([]),N=Object(r.a)(g,2),S=N[0],k=N[1],C=i.a.useState(!1),M=Object(r.a)(C,2),E=M[0],w=M[1],I=i.a.useState(!1),A=Object(r.a)(I,2),T=A[0],U=A[1],L=i.a.useState([]),J=Object(r.a)(L,2),P=J[0],X=J[1],Y=i.a.useState(!1),Z=Object(r.a)(Y,2),$=Z[0],ee=Z[1],te=i.a.useState(!1),ne=Object(r.a)(te,2),se=ne[0],ie=ne[1],ae=i.a.useState(""),ce=Object(r.a)(ae,2),oe=ce[0],re=ce[1],le=i.a.useState(""),je=Object(r.a)(le,2),de=je[0],ue=je[1],_e=i.a.useState(""),me=Object(r.a)(_e,2),be=me[0],he=me[1],pe=i.a.useState([]),ve=Object(r.a)(pe,2),fe=ve[0],Oe=ve[1],xe=i.a.useState(!1),ge=Object(r.a)(xe,2),Ne=ge[0],Se=ge[1],ke=i.a.useState(!1),Ce=Object(r.a)(ke,2),ye=Ce[0],Me=Ce[1],Ee=Object(l.g)();function we(e){ee(e.target.checked)}function Ie(e,t){return ie(!0),Se(!0),Me(!1),function(e,t){return fetch("".concat(W,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})}).then((function(e){return K(e)}))}(e,t).then((function(e){e?(s(e),d(!0),he(""),Ee.push("/movies")):"Bad Request"===e.error?he(H):e.message&&he(e.message)})).catch((function(){he("\u041f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435.")})).finally((function(){ie(!1),Se(!1),Me(!0)}))}function Ae(){ue(""),he(""),re("")}function Te(e,t){var n=[];return e.forEach((function(e){if(e.nameRU.indexOf(t)>-1)return $?e.duration<=40?n.push(e):void 0:n.push(e)})),n}function De(e){ie(!0),function(e){return fetch("".concat(W,"/movies/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return K(e)}))}(e).then((function(){Oe((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)})).finally((function(){ie(!1)}))}i.a.useEffect((function(){j&&Promise.all([Q(),fetch("".concat(W,"/movies"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return K(e)}))]).then((function(e){var t=Object(r.a)(e,2),n=t[0],i=t[1];k(JSON.parse(localStorage.getItem("movies"))),console.log(i),s(n),Oe(i),d(!0)})).catch((function(e){console.log(e)}))}),[j]);var Fe=i.a.useCallback((function(){Q().then((function(){d(!0),Ee.push("/")})).catch((function(e){console.log(e),Ee.push("/signin")}))}),[Ee]);return i.a.useEffect((function(){Fe()}),[Fe]),Object(u.jsx)(R.Provider,{value:n,children:Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/",children:Object(u.jsx)(y,{loggedIn:j})}),Object(u.jsx)(l.b,{exact:!0,path:"/",children:j?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(l.a,{to:"/signin"})}),Object(u.jsx)(m,{exact:!0,path:"/movies",component:D,loggedIn:j,onSearchMovies:function(e){if(p(!0),k([]),w(!1),U(!1),0===P.length)z().then((function(t){X(t);var n=Te(t,e);0===n.length?(w(!0),k([])):(localStorage.setItem("movies",JSON.stringify(n)),k(JSON.parse(localStorage.getItem("movies"))))})).catch((function(){U(!0),k([])})).finally((function(){p(!1),ee(!1)}));else{var t=Te(P,e);0===t.length?(w(!0),k([]),p(!1),ee(!1)):0!==t.length?(localStorage.setItem("movies",JSON.stringify(t)),k(JSON.parse(localStorage.getItem("movies"))),p(!1),ee(!1)):(U(!0),k([]),ee(!1))}},onShortMoviesCheck:we,isShortMoviesChecked:$,movies:S,isSearching:h,isErrorActive:T,notFound:E,savedMovies:fe,onMovieSave:function(e){ie(!0),function(e){return fetch("".concat(W,"/movies"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({country:e.country,director:e.director,duration:e.duration,year:e.year,description:e.description,image:e.image,trailer:e.trailer,nameRU:e.nameRU,nameEN:e.nameEN,thumbnail:e.thumbnail,movieId:e.movieId})}).then((function(e){return K(e)}))}(e).then((function(e){var t=[e].concat(Object(o.a)(fe));Oe((function(e){return[].concat(Object(o.a)(e),[t])}))})).catch((function(e){console.log(e)})).finally((function(){ie(!1)}))},onMovieDelete:De}),Object(u.jsx)(m,{exact:!0,path:"/saved-movies",component:F,loggedIn:j,onSearchSavedMovies:function(e){var t=Te(fe,e);0===t.length?w(!0):(w(!1),Oe(t))},onShortMoviesCheck:we,isShortMoviesChecked:$,movies:fe,savedMovies:fe,onMovieDelete:De}),Object(u.jsx)(m,{exact:!0,path:"/profile",component:q,onUpdateUser:function(e,t){return ie(!0),Se(!0),Me(!1),function(e,t){return fetch("".concat(W,"/users/me"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:t})}).then((function(e){return K(e)}))}(e,t).then((function(e){e?(s(e),x(!0),re("\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d!")):"Bad Request"===e.error&&(re(H),x(!1))})).catch((function(){re("\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430."),x(!1)})).finally((function(){ie(!1),Se(!1),Me(!0)}))},isUpdateSuccess:O,isSaving:se,loggedIn:j,message:oe,onSignOut:function(){fetch("".concat(W,"/signout"),{method:"POST",credentials:"include"}).then((function(e){return K(e)})).then((function(){localStorage.removeItem("movies"),d(!1),k([]),X([]),Ee.push("/")}))},inputActive:Ne,buttonActive:ye}),Object(u.jsx)(l.b,{exact:!0,path:"/signup",children:j?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(B,{onRegister:function(e,t,n){return ie(!0),Se(!0),Me(!1),function(e,t,n){return fetch("".concat(W,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:t,password:n})}).then((function(e){return K(e)}))}(e,t,n).then((function(e){e?(ue(""),Ie(t,n)):"Bad Request"===e.error?ue(H):e.message&&ue(e.message)})).catch((function(){ue("\u041f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")})).finally((function(){ie(!1),Se(!1),Me(!0)}))},onClear:Ae,isSaving:se,message:de,inputActive:Ne,buttonActive:ye})}),Object(u.jsx)(l.b,{exact:!0,path:"/signin",children:j?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(V,{onLogin:Ie,onClear:Ae,isSaving:se,message:be,inputActive:Ne,buttonActive:ye})}),Object(u.jsx)(l.b,{path:"*",children:Object(u.jsx)(G,{})})]})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(X,{})})}),document.getElementById("root")),Y()},50:function(e,t,n){},51:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){}},[[153,1,2]]]);
//# sourceMappingURL=main.695c6f66.chunk.js.map