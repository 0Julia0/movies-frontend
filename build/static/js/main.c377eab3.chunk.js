(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],{150:function(e,t,s){},151:function(e,t,s){},152:function(e,t,s){},153:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),a=s(42),c=s.n(a),o=(s(50),s(25)),r=s(3),l=s(5),j=(s(51),s(11)),d=s(45),u=s(0),_=["component"],m=function(e){var t=e.component,s=Object(d.a)(e,_);return Object(u.jsx)(l.b,{children:function(){return s.loggedIn?Object(u.jsx)(t,Object(j.a)({},s)):Object(u.jsx)(l.a,{to:"/"})}})},h=s.p+"static/media/logo.8f97642a.svg",b=s(4);s(58);var p=function(e){var t=e.loggedIn,s=i.a.useState(!1),n=Object(r.a)(s,2),a=n[0],c=n[1];return Object(u.jsxs)("div",{className:"header__navigation",children:[Object(u.jsxs)("div",{className:t?"header__navigation-login_invisible":"header__navigation-login",children:[Object(u.jsx)(b.b,{to:"/signup",className:"header__link header__link_type_register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(u.jsx)(b.b,{to:"/signin",className:"header__link header__link_type_register_button",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(u.jsxs)("div",{className:t?"header__navigation-movies":"header__navigation-movies_invisible",children:[Object(u.jsx)(b.b,{to:"/movies",className:"header__link header__link_type_movies",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(b.b,{to:"/saved-movies",className:"header__link header__link_type_movies",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(b.b,{to:"/profile",className:"header__link header__link_type_movies_button",children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"})]}),Object(u.jsx)("button",{className:t?"header__menu-button":"header__menu-button_invisible",onClick:function(){c(!0)}}),Object(u.jsxs)("div",{className:a?"header__menu":"header__menu_invisible",children:[Object(u.jsx)("button",{className:"header__menu-close-button",onClick:function(){c(!1)}}),Object(u.jsx)("div",{className:"header__menu-container",children:Object(u.jsxs)("div",{className:"header__menu-links",children:[Object(u.jsx)(b.b,{to:"/",className:"header__menu-link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(u.jsx)(b.b,{to:"/movies",className:"header__menu-link",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(b.b,{to:"/saved-movies",className:"header__menu-link",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"}),Object(u.jsx)(b.b,{to:"/profile",className:"header__menu-link header__menu-link_type_account",children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"})]})})]})]})};s(59);var v=function(e){var t=e.main,s=e.loggedIn;return Object(u.jsxs)("section",{className:t?"header":"header header_loggedIn",children:[Object(u.jsx)(b.b,{to:"/",children:Object(u.jsx)("img",{className:"header__logo",src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(u.jsx)(p,{loggedIn:s})]})},f=s.p+"static/media/promo.872d9c2d.svg";s(60);var O=function(){return Object(u.jsxs)("section",{className:"promo",children:[Object(u.jsx)("img",{className:"promo__image",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",src:f}),Object(u.jsxs)("div",{className:"promo__group",children:[Object(u.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(u.jsx)("p",{className:"promo__text",children:"\u041b\u0438\u0441\u0442\u0430\u0439\u0442\u0435 \u043d\u0438\u0436\u0435, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u043e \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442 \u0438 \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044f."}),Object(u.jsx)("a",{href:"#about-project",className:"promo__button",children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"})]})]})};s(61);var x=function(){return Object(u.jsxs)("section",{className:"about-project",id:"about-project",children:[Object(u.jsx)("h2",{className:"about-project__title",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(u.jsxs)("div",{className:"about-project__info",children:[Object(u.jsxs)("div",{className:"about-project__info_group",children:[Object(u.jsx)("h3",{className:"about-project__info-title",children:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432"}),Object(u.jsx)("p",{className:"about-project__info-text",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})]}),Object(u.jsxs)("div",{className:"about-project__info_group",children:[Object(u.jsx)("h3",{className:"about-project__info-title",children:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e 5 \u043d\u0435\u0434\u0435\u043b\u044c"}),Object(u.jsx)("p",{className:"about-project__info-text",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]})]}),Object(u.jsxs)("div",{className:"about-project__steps",children:[Object(u.jsx)("p",{className:"about-project__steps-text about-project__steps-text_type_one-week",children:"1 \u043d\u0435\u0434\u0435\u043b\u044f"}),Object(u.jsx)("p",{className:"about-project__steps-text about-project__steps-text_type_four-week",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(u.jsx)("p",{className:"about-project__description-text about-project__description-text-back",children:"Back-end"}),Object(u.jsx)("p",{className:"about-project__description-text about-project__description-text-front",children:"Front-end"})]})]})};s(62);var g=function(){return Object(u.jsxs)("section",{className:"techs",children:[Object(u.jsx)("h2",{className:"techs__heading",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(u.jsx)("h3",{className:"techs__title",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(u.jsx)("p",{className:"techs__subtitle",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(u.jsxs)("ul",{className:"techs__list",children:[Object(u.jsx)("li",{className:"techs__list-item",children:"HTML"}),Object(u.jsx)("li",{className:"techs__list-item",children:"CSS"}),Object(u.jsx)("li",{className:"techs__list-item",children:"JS"}),Object(u.jsx)("li",{className:"techs__list-item",children:"React"}),Object(u.jsx)("li",{className:"techs__list-item",children:"Git"}),Object(u.jsx)("li",{className:"techs__list-item",children:"Express.js"}),Object(u.jsx)("li",{className:"techs__list-item",children:"mongoDB"})]})]})},N=s.p+"static/media/photo.3add009c.jpg";s(63);var S=function(){return Object(u.jsxs)("section",{className:"about-me",children:[Object(u.jsx)("h2",{className:"about-me__heading",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(u.jsxs)("div",{className:"about-me__description",children:[Object(u.jsxs)("div",{className:"about-me__description-text",children:[Object(u.jsx)("h3",{className:"about-me__description-title",children:"\u042e\u043b\u044f"}),Object(u.jsx)("p",{className:"about-me__description-subtitle",children:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, 23 \u0433\u043e\u0434\u0430"}),Object(u.jsx)("p",{className:"about-me__description-paragraph",children:"\u042f \u0436\u0438\u0432\u0443 \u0432 \u041c\u0438\u043d\u0441\u043a\u0435. \u0423\u0432\u043b\u0435\u043a\u0430\u044e\u0441\u044c \u043c\u0443\u0437\u044b\u043a\u043e\u0439. \u0412 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0438\u0433\u0440\u0430\u044e \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0448\u0430\u0445 \u0432 \u0433\u0440\u0443\u043f\u043f\u0435. \u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u0441\u0432\u043e\u0438\u043c \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u043c \u0432 \u0441\u0444\u0435\u0440\u0435 \u043f\u0440\u043e\u0433\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u043e\u0441\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u042f\u043d\u0434\u0435\u043a\u0441 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430 \u0431\u0443\u0434\u0443 \u0433\u043e\u0442\u043e\u0432\u0430\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u043e\u0438\u0441\u043a\u0443 \u0440\u0430\u0431\u043e\u0442\u044b."}),Object(u.jsx)("a",{className:"about-me__description-link",href:"https://github.com/0Julia0",target:"_blank",rel:"noreferrer",children:"Github"})]}),Object(u.jsx)("img",{className:"about-me__description-photo",src:N,alt:"\u042e\u043b\u044f"})]})]})};s(64);var k=function(){return Object(u.jsxs)("section",{className:"footer",children:[Object(u.jsx)("p",{className:"footer__text",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(u.jsxs)("div",{className:"footer__nav",children:[Object(u.jsx)("p",{className:"footer__copyright",children:"\xa9 2020"}),Object(u.jsxs)("ul",{className:"footer__links",children:[Object(u.jsx)("li",{className:"footer__links-element",children:Object(u.jsx)("a",{className:"footer__link",href:"https://praktikum.yandex.ru/",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})}),Object(u.jsx)("li",{className:"footer__links-element",children:Object(u.jsx)("a",{className:"footer__link",href:"https://github.com",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(u.jsx)("li",{className:"footer__links-element",children:Object(u.jsx)("a",{className:"footer__link",href:"https://www.facebook.com",target:"_blank",rel:"noreferrer",children:"Facebook"})})]})]})]})};s(65);var C=function(){return Object(u.jsxs)("section",{className:"portfolio",children:[Object(u.jsx)("h4",{className:"portfolio__title",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(u.jsxs)("ul",{className:"portfolio__links",children:[Object(u.jsx)("li",{className:"portfolio__links-element",children:Object(u.jsx)("a",{className:"portfolio__link",href:"https://0julia0.github.io/how-to-learn/",target:"_blank",rel:"noreferrer",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(u.jsx)("li",{className:"portfolio__links-element",children:Object(u.jsx)("a",{className:"portfolio__link",href:"https://0julia0.github.io/russian-travel/index.html",target:"_blank",rel:"noreferrer",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(u.jsx)("li",{className:"portfolio__links-element",children:Object(u.jsx)("a",{className:"portfolio__link",href:"https://julia.p.nomoredomains.club/",target:"_blank",rel:"noreferrer",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})})]})]})};var y=function(e){var t=e.loggedIn;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:t,main:!0}),Object(u.jsx)(O,{}),Object(u.jsx)(x,{}),Object(u.jsx)(g,{}),Object(u.jsx)(S,{}),Object(u.jsx)(C,{}),Object(u.jsx)(k,{})]})},M=(s(66),s.p+"static/media/search_icon.9d65490b.svg");s(67);var E=function(e){var t=e.onChange,s=e.isChecked;return Object(u.jsxs)("label",{className:"search__toggle-label",children:[Object(u.jsx)("input",{className:"search__toggle",id:"short-films",type:"checkbox",onChange:t,checked:s}),Object(u.jsx)("span",{className:"search__toggle_visible"})]})};var I=function(e){var t=e.onSearchSavedMovies,s=e.onSearchMovies,n=e.saved,a=e.onShortMoviesCheck,c=e.isChecked,o=i.a.useState(""),l=Object(r.a)(o,2),j=l[0],d=l[1],_=i.a.useState(!0),m=Object(r.a)(_,2),h=m[0],b=m[1];return Object(u.jsx)("section",{className:"search",children:Object(u.jsxs)("form",{className:"search__form",onSubmit:n?function(e){e.preventDefault(),t(j)}:function(e){e.preventDefault(),s(j)},children:[Object(u.jsx)("img",{className:"search__form-icon",src:M,alt:"\u041f\u043e\u0438\u0441\u043a"}),Object(u.jsxs)("fieldset",{className:"search__form-field",children:[Object(u.jsx)("input",{className:"search__form-input",type:"text",name:"search",placeholder:"\u0424\u0438\u043b\u044c\u043c",value:j,onChange:function(e){d(e.target.value)}}),Object(u.jsx)("span",{className:h?"search__form-error search__form-error_invisible":"search__form-error",children:"\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"})]}),Object(u.jsx)("button",{className:"search__form-button",type:"submit",onClick:function(){b(""!==j)}}),Object(u.jsxs)("div",{className:"search__toggle-box",children:[Object(u.jsx)(E,{onChange:a,isChecked:c}),Object(u.jsx)("h3",{className:"search__toggle-text",children:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"})]})]})})};s(68),s(69);var w=function(e){var t,s,n,a,c,o=e.movie,j=e.savedMovies,d=e.onMovieSave,_=e.onMovieDelete,m=e.saved,h=i.a.useState(!1),b=Object(r.a)(h,2),p=b[0],v=b[1],f=i.a.useState(!1),O=Object(r.a)(f,2),x=O[0],g=O[1],N={country:o.country,director:o.director,duration:o.duration,year:o.year,description:o.description,image:"https://api.nomoreparties.co".concat(null===(t=o.image)||void 0===t?void 0:t.url),trailer:null===o||void 0===o?void 0:o.trailerLink,nameRU:o.nameRU,nameEN:o.nameEN,thumbnail:"https://api.nomoreparties.co".concat(null===(s=o.image)||void 0===s||null===(n=s.formats)||void 0===n||null===(a=n.thumbnail)||void 0===a?void 0:a.url),movieId:o.id},S=j.find((function(e){return e.nameRU===o.nameRU})),k=Object(l.h)();return i.a.useEffect((function(){S&&g(!0)}),[S,k]),Object(u.jsxs)("li",{className:"movies__list-item",children:[Object(u.jsx)("a",{className:"movies__list-link",href:m?o.trailer:o.trailerLink,target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{className:"movies__list-poster",alt:o.nameRU,src:m?o.image:"https://api.nomoreparties.co".concat(null===(c=o.image)||void 0===c?void 0:c.url)})}),Object(u.jsxs)("div",{className:"movies__list-description",onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)},children:[Object(u.jsx)("p",{className:"movies__list-title",children:o.nameRU}),m?Object(u.jsx)("button",{className:p?"movies__list-delete movies__list-delete_visible":"movies__list-delete",onClick:function(e){e.preventDefault(),_(o._id),g(!1)}}):Object(u.jsx)("button",{className:"movies__list-like ".concat(x?"movies__list-like_active":""),onClick:x?function(){g(!1),_(S._id)}:function(){d(N),g(!0)}})]}),Object(u.jsx)("p",{className:"movies__list-duration",children:"".concat(Math.trunc(N.duration/60),"\u0447 ").concat(N.duration%60,"\u043c")})]})},D=(s(70),function(e){var t=e.isSearching;return Object(u.jsx)("div",{className:t?"preloader":"preloader preloader__invisible",children:Object(u.jsx)("div",{className:"preloader__container",children:Object(u.jsx)("span",{className:"preloader__round"})})})});var T=function(e){var t=e.movies,s=e.isSearching,n=e.isErrorActive,a=e.notFound,c=e.saved,o=e.savedMovies,l=e.onMovieSave,j=e.onMovieDelete,d=i.a.useState((function(){var e=window.innerWidth;return e<720?5:e<920?8:e>920?12:void 0})),_=Object(r.a)(d,2),m=_[0],h=_[1],b=i.a.useState((function(){var e=window.innerWidth;return e<720||e<920?2:e>920?3:void 0})),p=Object(r.a)(b,2),v=p[0],f=p[1];function O(){var e=window.innerWidth;e<720?(h(5),f(2)):e<920?(h(8),f(2)):e>920&&(h(12),f(3))}var x=null===t||void 0===t?void 0:t.slice(0,m);return i.a.useEffect((function(){window.addEventListener("resize",O)}),[]),Object(u.jsxs)("section",{className:"movies",children:[Object(u.jsx)(D,{isSearching:s}),Object(u.jsx)("span",{className:n?"movies__error":"movies__error movies__error_invisible",children:"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"}),Object(u.jsx)("span",{className:a?"movies__error":"movies__error movies__error_invisible",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(u.jsx)("ul",{className:"movies__list",children:null===x||void 0===x?void 0:x.map((function(e){return Object(u.jsx)(w,{movie:e,saved:c,savedMovies:o,onMovieSave:l,onMovieDelete:j},c?e.movieId:e.id)}))}),Object(u.jsx)("button",{className:(null===t||void 0===t?void 0:t.length)===(null===x||void 0===x?void 0:x.length)?"movies__button movies__button_invisible":"movies__button",onClick:function(){h((function(e){return e+v}))},children:"\u0415\u0449\u0435"})]})};var F=function(e){var t=e.loggedIn,s=e.onSearchMovies,n=e.onShortMoviesCheck,i=e.isShortMoviesChecked,a=e.movies,c=e.isSearching,o=e.isErrorActive,r=e.notFound,l=e.savedMovies,j=e.onMovieSave,d=e.onMovieDelete;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:t,main:!1}),Object(u.jsx)(I,{onSearchMovies:s,saved:!1,onShortMoviesCheck:n,isChecked:i}),Object(u.jsx)(T,{movies:a,isSearching:c,isErrorActive:o,notFound:r,saved:!1,savedMovies:l,onMovieSave:j,onMovieDelete:d}),Object(u.jsx)(k,{})]})};var R=function(e){var t=e.loggedIn,s=e.onSearchSavedMovies,n=e.onShortMoviesCheck,i=e.isShortMoviesChecked,a=e.onMovieDelete,c=e.movies,o=e.savedMovies;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:t,main:!1}),Object(u.jsx)(I,{onSearchSavedMovies:s,saved:!0,onShortMoviesCheck:n,isChecked:i}),Object(u.jsx)(T,{movies:c,savedMovies:o,saved:!0,onMovieDelete:a}),Object(u.jsx)(k,{})]})},U=(s(71),i.a.createContext()),A=s(17);function J(){var e=i.a.useState({}),t=Object(r.a)(e,2),s=t[0],n=t[1],a=i.a.useState({}),c=Object(r.a)(a,2),o=c[0],l=c[1],d=i.a.useState(!1),u=Object(r.a)(d,2),_=u[0],m=u[1];return{values:s,setValues:n,handleChange:function(e){var t=e.target,i=t.name,a=t.value;n(Object(j.a)(Object(j.a)({},s),{},Object(A.a)({},i,a))),l(Object(j.a)(Object(j.a)({},o),{},Object(A.a)({},i,t.validationMessage))),m(t.closest("form").checkValidity())},errors:o,isValid:_}}var L=s(13),q=s.n(L);var P=function(e){var t=e.onUpdateUser,s=e.isUpdateSuccess,n=e.isSaving,a=e.loggedIn,c=e.message,o=e.onSignOut,l=J(),j=l.values,d=l.setValues,_=l.handleChange,m=l.errors,h=l.isValid,b=i.a.useState(!0),p=Object(r.a)(b,2),f=p[0],O=p[1],x=i.a.useContext(U),g=i.a.useState(),N=Object(r.a)(g,2),S=N[0],k=N[1];return i.a.useEffect((function(){d(x)}),[x,d]),i.a.useEffect((function(){O(s)}),[s,t]),i.a.useEffect((function(){n&&O(!0)}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{loggedIn:a,main:!1}),Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("h2",{className:"profile__title",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",x.name,"!"]}),Object(u.jsxs)("form",{className:"profile__form",onSubmit:function(e){e.preventDefault(),q.a.isEmail&&h?(k(!0),t(j.name,j.email)):k(!1)},children:[Object(u.jsxs)("fieldset",{className:"profile__fields",children:[Object(u.jsxs)("div",{className:"profile__input",children:[Object(u.jsx)("p",{className:"profile__input-text",children:"\u0418\u043c\u044f"}),Object(u.jsx)("input",{className:"profile__input-field",type:"text",name:"name",value:j.name,placeholder:"\u042e\u043b\u044f",onChange:_,disabled:f,required:!0})]}),Object(u.jsx)("span",{className:"profile__error",children:m.name}),Object(u.jsxs)("div",{className:"profile__input",children:[Object(u.jsx)("p",{className:"profile__input-text",children:"Email"}),Object(u.jsx)("input",{className:"profile__input-field",type:"email",name:"email",value:j.email,placeholder:"Email@email.ru",onChange:_,disabled:f,required:!0})]}),Object(u.jsx)("span",{className:S?"profile__error":"profile__error profile__error_invisible",children:"\u041f\u043e\u0447\u0442\u0430 \u043d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u0430."})]}),Object(u.jsx)("span",{className:"profile__error",children:c}),f?Object(u.jsx)("button",{className:"profile__button profile__button_type_edit",onClick:function(e){e.preventDefault(),O(!1)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}):Object(u.jsx)("button",{className:h?"profile__button profile__button_type_save":"profile__button profile__button_type_save_disabled",type:"submit",disabled:!h,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(u.jsx)("button",{className:f?"profile__link":"profile__link_invisible",onClick:o,children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})]})};s(150);var B=function(e){var t=e.onRegister,s=e.onClear,n=e.isSaving,a=e.message,c=J(),o=c.values,l=c.handleChange,j=c.errors,d=c.isValid,_=i.a.useState(),m=Object(r.a)(_,2),p=m[0],v=m[1];return Object(u.jsxs)("section",{className:"register",children:[Object(u.jsx)(b.b,{to:"/",children:Object(u.jsx)("img",{className:"register__logo",src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(u.jsx)("h2",{className:"register__title",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"}),Object(u.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),s(),q.a.isEmail&&d?(v(!0),t(o.name,o.email,o.password)):v(!1)},children:[Object(u.jsxs)("fieldset",{className:"register__fields",children:[Object(u.jsx)("p",{className:"register__text",children:"\u0418\u043c\u044f"}),Object(u.jsx)("input",{className:"register__input",type:"text",name:"name",value:o.name,onChange:l,disabled:n,required:!0}),Object(u.jsx)("span",{className:"register__error",children:j.name}),Object(u.jsx)("p",{className:"register__text",children:"E-mail"}),Object(u.jsx)("input",{className:"register__input",type:"email",name:"email",value:o.email,onChange:l,disabled:n,required:!0}),Object(u.jsx)("span",{className:p?"register__error":"register__error register__error_invisible",children:"\u041f\u043e\u0447\u0442\u0430 \u043d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u0430."}),Object(u.jsx)("p",{className:"register__text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(u.jsx)("input",{className:"register__input",type:"password",name:"password",value:o.password,onChange:l,disabled:n,required:!0,minLength:"8"}),Object(u.jsx)("span",{className:"register__error",children:j.password})]}),Object(u.jsx)("span",{className:n?"register__error register__error_invisible":"register__error",children:a}),Object(u.jsx)("button",{className:d?"register__button":"register__button register__button_disabled",type:"submit",disabled:!d,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(u.jsxs)("h3",{className:"register__subtitle",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(u.jsx)(b.b,{className:"register__link",to:"/signin",onClick:s,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};s(151);var V=function(e){var t=e.onLogin,s=e.onClear,n=e.isSaving,a=e.message,c=J(),o=c.values,l=c.handleChange,j=c.errors,d=c.isValid,_=i.a.useState(),m=Object(r.a)(_,2),p=m[0],v=m[1];return Object(u.jsxs)("section",{className:"login",children:[Object(u.jsx)(b.b,{to:"/",children:Object(u.jsx)("img",{className:"login__logo",src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(u.jsx)("h2",{className:"login__title",children:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!"}),Object(u.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),s(),q.a.isEmail&&d?(v(!0),t(o.email,o.password)):v(!1)},children:[Object(u.jsxs)("fieldset",{className:"login__fields",children:[Object(u.jsx)("p",{className:"login__text",children:"E-mail"}),Object(u.jsx)("input",{className:"login__input",type:"email",name:"email",value:o.email,onChange:l,disabled:n,required:!0}),Object(u.jsx)("span",{className:p?"login__error":"login__error login__error_invisible",children:"\u041f\u043e\u0447\u0442\u0430 \u043d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u0430."}),Object(u.jsx)("p",{className:"login__text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(u.jsx)("input",{className:"login__input",type:"password",name:"password",value:o.password,onChange:l,disabled:n,required:!0,minLength:"8"}),Object(u.jsx)("span",{className:"login__error",children:j.password})]}),Object(u.jsx)("span",{className:n?"login__error login__error_invisible":"login__error",children:a}),Object(u.jsx)("button",{className:d?"login__button":"login__button login__button_disabled",type:"submit",disabled:!d,children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(u.jsxs)("h3",{className:"login__subtitle",children:["\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(u.jsx)(b.b,{className:"login__link",to:"/signup",onClick:s,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})};s(152);var G=function(){var e=Object(l.g)();return Object(u.jsxs)("section",{className:"not-found",children:[Object(u.jsx)("h2",{className:"not-found__title",children:"404"}),Object(u.jsx)("p",{className:"not-found__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(u.jsx)(b.b,{to:"/",className:"not-found__link",onClick:function(){e.goBack()},children:"\u041d\u0430\u0437\u0430\u0434"})]})};function W(){return fetch("".concat("https://api.nomoreparties.co/beatfilm-movies"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}(e)}))}var H="https://api.movies-explorer-julia.nomoredomains.club",z=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},K=function(){return fetch("".concat(H,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return z(e)}))};var Q=function(){var e=i.a.useState({}),t=Object(r.a)(e,2),s=t[0],n=t[1],a=i.a.useState(!1),c=Object(r.a)(a,2),j=c[0],d=c[1],_=i.a.useState(!1),h=Object(r.a)(_,2),b=h[0],p=h[1],v=i.a.useState(!0),f=Object(r.a)(v,2),O=f[0],x=f[1],g=i.a.useState([]),N=Object(r.a)(g,2),S=N[0],k=N[1],C=i.a.useState(!1),M=Object(r.a)(C,2),E=M[0],I=M[1],w=i.a.useState(!1),D=Object(r.a)(w,2),T=D[0],A=D[1],J=i.a.useState([]),L=Object(r.a)(J,2),q=L[0],Q=L[1],X=i.a.useState(!1),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=i.a.useState(!1),te=Object(r.a)(ee,2),se=te[0],ne=te[1],ie=i.a.useState(""),ae=Object(r.a)(ie,2),ce=ae[0],oe=ae[1],re=i.a.useState(""),le=Object(r.a)(re,2),je=le[0],de=le[1],ue=i.a.useState(""),_e=Object(r.a)(ue,2),me=_e[0],he=_e[1],be=i.a.useState([]),pe=Object(r.a)(be,2),ve=pe[0],fe=pe[1],Oe=Object(l.g)();function xe(e){$(e.target.checked)}function ge(e,t){return ne(!0),function(e,t){return fetch("".concat(H,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})}).then((function(e){return z(e)}))}(e,t).then((function(e){e?(n(e),d(!0),he(""),Oe.push("/movies")):"Bad Request"===e.error?he("\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c. "):e.message&&he(e.message)})).catch((function(){he("\u041f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435.")})).finally((function(){ne(!1)}))}function Ne(){de(""),he(""),oe("")}function Se(e,t){var s=[];return e.forEach((function(e){if(e.nameRU.indexOf(t)>-1)return Z?e.duration<=40?s.push(e):void 0:s.push(e)})),s}function ke(e){ne(!0),function(e){return fetch("".concat(H,"/movies/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return z(e)}))}(e).then((function(){fe((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)})).finally((function(){ne(!1)}))}i.a.useEffect((function(){j&&Promise.all([K(),fetch("".concat(H,"/movies"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return z(e)}))]).then((function(e){var t=Object(r.a)(e,2),s=t[0],i=t[1];k(JSON.parse(localStorage.getItem("movies"))),console.log(i),n(s),fe(i)})).catch((function(e){console.log(e)}))}),[j]);var Ce=i.a.useCallback((function(){K().then((function(){d(!0),Oe.push("/")})).catch((function(e){console.log(e),Oe.push("/signin")}))}),[Oe]);return i.a.useEffect((function(){Ce()}),[Ce]),Object(u.jsx)(U.Provider,{value:s,children:Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/",children:Object(u.jsx)(y,{loggedIn:j})}),Object(u.jsx)(l.b,{exact:!0,path:"/",children:j?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(l.a,{to:"/signin"})}),Object(u.jsx)(m,{exact:!0,path:"/movies",component:F,loggedIn:j,onSearchMovies:function(e){if(p(!0),k([]),I(!1),A(!1),0===q.length)W().then((function(t){Q(t);var s=Se(t,e);0===s.length?(I(!0),k([])):(localStorage.setItem("movies",JSON.stringify(s)),k(JSON.parse(localStorage.getItem("movies"))))})).catch((function(){A(!0),k([])})).finally((function(){p(!1),$(!1)}));else{var t=Se(q,e);0===t.length?(I(!0),k([]),p(!1),$(!1)):0!==t.length?(localStorage.setItem("movies",JSON.stringify(t)),k(JSON.parse(localStorage.getItem("movies"))),p(!1),$(!1)):(A(!0),k([]),$(!1))}},onShortMoviesCheck:xe,isShortMoviesChecked:Z,movies:S,isSearching:b,isErrorActive:T,notFound:E,savedMovies:ve,onMovieSave:function(e){ne(!0),function(e){return fetch("".concat(H,"/movies"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({country:e.country,director:e.director,duration:e.duration,year:e.year,description:e.description,image:e.image,trailer:e.trailer,nameRU:e.nameRU,nameEN:e.nameEN,thumbnail:e.thumbnail,movieId:e.movieId})}).then((function(e){return z(e)}))}(e).then((function(e){var t=[e].concat(Object(o.a)(ve));fe((function(e){return[].concat(Object(o.a)(e),[t])}))})).catch((function(e){console.log(e)})).finally((function(){ne(!1)}))},onMovieDelete:ke}),Object(u.jsx)(m,{exact:!0,path:"/saved-movies",component:R,loggedIn:j,onSearchSavedMovies:function(e){var t=Se(ve,e);console.log(t),fe(t)},onShortMoviesCheck:xe,isShortMoviesChecked:Z,movies:ve,savedMovies:ve,onMovieDelete:ke}),Object(u.jsx)(m,{exact:!0,path:"/profile",component:P,onUpdateUser:function(e,t){return ne(!0),function(e,t){return fetch("".concat(H,"/users/me"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:t})}).then((function(e){return z(e)}))}(e,t).then((function(e){e?(n(e),x(!0),oe("\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d!")):"Bad Request"===e.error&&(oe("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."),x(!1))})).catch((function(){oe("\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"),x(!1)})).finally((function(){ne(!1)}))},isUpdateSuccess:O,isSaving:se,loggedIn:j,message:ce,onSignOut:function(){localStorage.removeItem("movies"),d(!1),k([]),Q([]),Oe.push("/")}}),Object(u.jsx)(l.b,{exact:!0,path:"/signup",children:j?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(B,{onRegister:function(e,t,s){return ne(!0),function(e,t,s){return fetch("".concat(H,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:t,password:s})}).then((function(e){return z(e)}))}(e,t,s).then((function(e){e?(de(""),ge(t,s)):"Bad Request"===e.error?de("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."):e.message&&de(e.message)})).catch((function(){de("\u041f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")})).finally((function(){ne(!1)}))},onClear:Ne,isSaving:se,message:je})}),Object(u.jsx)(l.b,{exact:!0,path:"/signin",children:j?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(V,{onLogin:ge,onClear:Ne,isSaving:se,message:me})}),Object(u.jsx)(l.b,{path:"*",children:Object(u.jsx)(G,{})})]})})})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,154)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),i(e),a(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(Q,{})})}),document.getElementById("root")),X()},50:function(e,t,s){},51:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){}},[[153,1,2]]]);
//# sourceMappingURL=main.c377eab3.chunk.js.map