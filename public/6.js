(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{300:function(t,e,n){var a=n(330);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(6)(a,i);a.locals&&(t.exports=a.locals)},317:function(t,e){t.exports="/images/no-data-icon.png?eb1f55001f33c62b55cdde776546007f"},318:function(t,e){t.exports="/images/no-data-filtered-icon.png?abbf6c2aaff76ae374f0ae7bc657b837"},319:function(t,e){t.exports="/images/no-image.png?cde74bf6643df8492c7ff3dd9271a77e"},329:function(t,e,n){"use strict";n(300)},330:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".content-width[data-v-6a5688c5] {\n  width: 84%;\n}",""])},391:function(t,e,n){"use strict";n.r(e);var a=n(29),i=n.n(a),r=n(10);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={name:"CreateMapDialog",data:function(){return{dialog:!1,loading:!1,name:"",description:"",subject:"",folders:[],showFloatingBtnCreate:!1}},computed:s(s(s({},Object(r.e)("maps",["maps"])),Object(r.c)("maps",["subjects"])),{},{getSubjectNames:function(){var t=[];return this.subjects.forEach((function(e){return t.push(e.name)})),t}}),methods:{createMap:function(){var t=this;this.$refs.form.validate()&&(this.loading=!0,this.$store.dispatch("maps/createMap",{name:this.name,subject:this.subject,description:this.description}).then((function(){t.dialog=!1,t.clearField()})).finally((function(){t.loading=!1})))},clearField:function(){this.$refs.form.reset()},onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.showFloatingBtnCreate=e>20}}}},u=n(11),v=n(12),d=n.n(v),p=n(54),f=n(83),m=n(14),b=n(269),g=n(278),_=n(272),y=n(78),h=n(17),x=n(270),w=n(65),j=n(271),O=n(260),S=n(273),C=n(26),V=n(275),k=n(24),M=n(45),I=n(299),D=n.n(I),P=n(95),T=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"400"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{large:"",color:"primary",rounded:""}},a),[n("v-icon",{staticClass:"mr-1"},[t._v("add")]),t._v("\n            Создать атлас\n        ")],1),t._v(" "),n("v-fab-transition",[n("v-btn",t._g({directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.showFloatingBtnCreate,expression:"showFloatingBtnCreate"}],attrs:{"x-large":"",fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"}},a),[n("v-icon",[t._v("add")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-toolbar",{staticClass:"pr-1",attrs:{height:"68",flat:""}},[n("v-icon",{staticClass:"mr-2",attrs:{large:"",color:"primary"}},[t._v("\n                map\n            ")]),t._v(" "),n("v-toolbar-title",[t._v(" Создание атласа ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("close")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pb-0"},[n("v-form",{ref:"form"},[n("v-container",{staticClass:"pb-0"},[n("v-row",[n("v-col",{staticClass:"pb-0 pt-3",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Название",filled:"",rules:[function(t){return!!t||"Введите название"},function(e){return null===t.maps||void 0===t.maps.find((function(t){return t.name===e}))||"Атлас с таким именем уже существует"}],required:""},model:{value:t.name,callback:function(e){t.name="string"==typeof e?e.trim():e},expression:"name"}})],1),t._v(" "),n("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",label:"Описание",rules:[function(t){return!!t||"Введите описание"}],required:""},model:{value:t.description,callback:function(e){t.description="string"==typeof e?e.trim():e},expression:"description"}})],1),t._v(" "),n("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12"}},[n("v-select",{attrs:{height:"68",filled:"",items:t.getSubjectNames,label:"Категория",rules:[function(t){return!!t||"Выберите категорию"}],required:""},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}})],1)],1)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{staticClass:"px-9 py-4"},[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.clearField()}}},[t._v("\n                Очистить\n            ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"px-7",attrs:{color:"primary",outlined:"",loading:t.loading},on:{click:function(e){return t.createMap()}}},[t._v("\n                Создать\n            ")])],1)],1)],1)}),[],!1,null,null,null),L=T.exports;d()(T,{VBtn:p.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCol:b.a,VContainer:g.a,VDialog:_.a,VDivider:y.a,VFabTransition:h.c,VForm:x.a,VIcon:w.a,VRow:j.a,VSelect:O.a,VSpacer:S.a,VTextField:C.a,VTextarea:V.a,VToolbar:k.a,VToolbarTitle:M.a}),D()(T,{Scroll:P.b});function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B={name:"CreateMapDialog",data:function(){return{createSubjectDialog:!1,processCreate:!1,name:"",icon:""}},methods:E(E({},Object(r.b)("maps",["createExternalSubject"])),{},{create:function(){var t=this;this.processCreate=!0,this.createExternalSubject({name:this.name,icon:this.icon}).then((function(){t.createSubjectDialog=!1})).finally((function(){t.loading=!1}))}})},F=Object(u.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"340"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{large:"",color:"primary",outlined:"",rounded:""}},a),[t._v("\n            Добавить категорию\n        ")])]}}]),model:{value:t.createSubjectDialog,callback:function(e){t.createSubjectDialog=e},expression:"createSubjectDialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n            Добавить категорию\n        ")]),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{label:"Название"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{label:"Ссылка на иконку"},model:{value:t.icon,callback:function(e){t.icon=e},expression:"icon"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.createSubjectDialog=!1}}},[t._v("\n                Закрыть\n            ")]),t._v(" "),n("v-btn",{attrs:{color:"primary",text:"",disabled:""===t.name,loading:t.processCreate},on:{click:t.create}},[t._v("\n                Подтвердить\n            ")])],1)],1)],1)}),[],!1,null,null,null),R=F.exports;d()(F,{VBtn:p.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDialog:_.a,VSpacer:S.a,VTextField:C.a});function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){U(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var q={name:"GridMaps",props:{maps:Array},data:function(){return{showDescriptionId:null,loadingIds:[]}},computed:G({},Object(r.c)("maps",["subjects"])),methods:G(G({},Object(r.b)("maps",{destroyMapAction:"destroyMap",duplicateMapAction:"duplicateMap"})),{},{getSubjectIcon:function(t){return this.subjects.find((function(e){return e.name===t})).icon},destroyMap:function(t){var e=this;this.loadingIds.push(t.id),this.destroyMapAction(t).finally((function(){e.loadingIds=e.loadingIds.filter((function(e){return e!==t.id}))}))},duplicateMap:function(t){var e=this;this.loadingIds.push(t.id),this.duplicateMapAction(t).finally((function(){e.loadingIds=e.loadingIds.filter((function(e){return e!==t.id}))}))}})},H=n(316),Y=n(70),z=n(79),J=n(56),K=n(80),Q=n(89),W=n(15),X=n(82),Z=n(320),tt=Object(u.a)(q,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-scale-transition",{staticClass:"d-flex justify-center flex-wrap",attrs:{group:"",origin:"center center"}},t._l(t.maps,(function(e){return a("v-hover",{key:e.id,scopedSlots:t._u([{key:"default",fn:function(i){var r=i.hover;return[a("v-card",{staticClass:"ma-5 overflow-hidden align-self-start",staticStyle:{cursor:"pointer","z-index":"4"},attrs:{"max-width":t.$vuetify.breakpoint.xl?"360":"300",elevation:r?16:4}},[a("v-list-item",[""!==t.getSubjectIcon(e.subject)?a("v-list-item-avatar",{attrs:{tile:""}},[a("img",{attrs:{src:t.getSubjectIcon(e.subject),alt:e.subject}})]):t._e(),t._v(" "),a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline"},[t._v(t._s(e.name))]),t._v(" "),e.subject?a("v-list-item-subtitle",[t._v(" "+t._s(e.subject))]):t._e()],1)],1),t._v(" "),a("v-img",{attrs:{src:n(319)},on:{click:function(n){return t.$router.push({path:"/viewer/"+e.id})}}}),t._v(" "),a("v-card-actions",[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[a("v-btn",t._g({attrs:{large:"",icon:""},on:{click:function(n){return t.$router.push({path:"/viewer/"+e.id})}}},i),[a("v-icon",[t._v("launch")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Просмотр")])]),t._v(" "),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[a("v-btn",t._g({attrs:{large:"",icon:""},on:{click:function(n){return t.$router.push({path:"/constructor/"+e.id})}}},i),[a("v-icon",[t._v("create")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Редактор")])]),t._v(" "),a("v-menu",{attrs:{top:"","offset-y":"",transition:"slide-y-reverse-transition",origin:"center center"},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on;return[a("v-btn",t._g({attrs:{loading:t.loadingIds.includes(e.id),icon:"",large:""},on:{click:function(t){}}},Object.assign({},r,i)),[a("v-icon",[t._v("settings")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Настройки")])])]}}],null,!0)},[t._v(" "),a("v-list",[a("v-list-item",{on:{click:function(t){}}},[a("v-list-item-action",{staticClass:"mr-5"},[a("v-icon",[t._v("reply")])],1),t._v(" "),a("v-list-item-title",[t._v("Поделиться")])],1),t._v(" "),a("v-list-item",{on:{click:function(n){return t.duplicateMap(e)}}},[a("v-list-item-action",{staticClass:"mr-5"},[a("v-icon",[t._v("file_copy")])],1),t._v(" "),a("v-list-item-title",[t._v("Создать копию")])],1),t._v(" "),a("v-list-item",{on:{click:function(t){}}},[a("v-list-item-action",{staticClass:"mr-5"},[a("v-icon",[t._v("folder")])],1),t._v(" "),a("v-list-item-title",[t._v("Добавить в папку")])],1),t._v(" "),a("v-list-item",{on:{click:function(n){return t.destroyMap(e)}}},[a("v-list-item-action",{staticClass:"mr-5"},[a("v-icon",[t._v("delete")])],1),t._v(" "),a("v-list-item-title",[t._v("Удалить")])],1)],1)],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[a("v-btn",t._g({attrs:{icon:""},on:{click:function(n){t.showDescriptionId===e.id?t.showDescriptionId=null:t.showDescriptionId=e.id}}},i),[a("v-icon",[t._v(t._s(t.showDescriptionId===e.id?"expand_less":"expand_more"))])],1)]}}],null,!0)},[t._v(" "),t.showDescriptionId!==e.id?a("span",[t._v("Показать описание")]):a("span",[t._v("Скрыть описание")])])],1),t._v(" "),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showDescriptionId===e.id,expression:"showDescriptionId === map.id"}]},[a("v-divider"),t._v(" "),a("v-card-text",[t._v("\n                        "+t._s(e.description)+"\n                    ")])],1)])],1)]}}],null,!0)})})),1)}),[],!1,null,null,null),et=tt.exports;d()(tt,{VBtn:p.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VDivider:y.a,VExpandTransition:h.a,VHover:H.a,VIcon:w.a,VImg:Y.a,VList:z.a,VListItem:J.a,VListItemAction:K.a,VListItemAvatar:Q.a,VListItemContent:W.a,VListItemSubtitle:W.b,VListItemTitle:W.c,VMenu:X.a,VScaleTransition:h.e,VSpacer:S.a,VTooltip:Z.a});function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function at(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(n),!0).forEach((function(e){it(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var rt={name:"ListMaps",props:{maps:Array},data:function(){return{selected:[],headers:[{text:"Название",value:"name"},{text:"Направление",value:"subject"},{text:"Дата создания",value:"created_at"},{text:"Дата обновления",value:"updated_at"},{text:"Действия",value:"actions",sortable:!1,align:"center"},{text:"",value:"data-table-expand"}],loading:!1}},methods:at(at({},Object(r.b)("maps",{destroyMapAction:"destroyMap",destroyMapsAction:"destroyMaps"})),{},{destroyMap:function(t){var e=this;this.loading=!0,this.destroyMapAction(t).then((function(){var n=e.selected.findIndex((function(e){return e.id===t.id}));-1!==n&&e.selected.splice(n,1)})).finally((function(){e.loading=!1}))},destroyMaps:function(t){var e=this;this.loading=!0,this.destroyMapsAction(t).finally((function(){e.loading=!1,e.selected=[]}))}})},ot=n(392),st=Object(u.a)(rt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"elevation-1 mt-6 mb-4",attrs:{loading:t.loading,headers:t.headers,items:t.maps,"single-expand":"","show-expand":"","item-key":"id","show-select":""},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-slide-y-reverse-transition",[n("v-container",{staticClass:"pb-2 pt-5"},[n("v-row",{staticClass:"align-center my-1 mx-2"},[n("span",{staticClass:"subtitle-1"},[t._v("Выбрано: "+t._s(t.selected.length))]),t._v(" "),n("v-divider",{staticClass:"mt-0 ml-8 mr-4",attrs:{vertical:"",inset:""}}),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"mx-1",attrs:{icon:"",disabled:0===t.selected.length}},a),[n("v-icon",[t._v(" move_to_inbox")])],1)]}}])},[t._v(" "),n("span",[t._v("Переместить в папку")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"mx-1",attrs:{icon:"",disabled:0===t.selected.length},on:{click:function(e){return t.destroyMaps(t.selected)}}},a),[n("v-icon",[t._v(" delete")])],1)]}}])},[t._v(" "),n("span",[t._v("Удалить")])])],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.$router.push({path:"/viewer/"+a.id})}}},[t._v("\n            play_circle_outline\n        ")]),t._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.$router.push({path:"/constructor/"+a.id})}}},[t._v("\n            create\n        ")]),t._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){}}},[t._v("\n            move_to_inbox\n        ")]),t._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){}}},[t._v("\n            reply\n        ")]),t._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.destroyMap(a)}}},[t._v("\n            delete\n        ")])]}},{key:"expanded-item",fn:function(e){var a=e.item;return[n("td",[t._v(t._s(a.description))])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})}),[],!1,null,null,null),ct=st.exports;function lt(t,e,n,a,i,r,o){try{var s=t[r](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,i)}function ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function vt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ut(Object(n),!0).forEach((function(e){dt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}d()(st,{VBtn:p.a,VContainer:g.a,VDataTable:ot.a,VDivider:y.a,VIcon:w.a,VRow:j.a,VSlideYReverseTransition:h.g,VTooltip:Z.a});var pt={name:"Library",components:{CreateMapDialog:L,CreateSubjectDialog:R,GridMaps:et,ListMaps:ct},data:function(){return{selectedRole:null!==localStorage.getItem("Library.selectedRole")?localStorage.getItem("Library.selectedRole"):"Все атласы",roles:[{name:"Все атласы"},{name:"Автор"},{name:"Разработчик"},{name:"Пользователь"}],search:"",selectedSubjectIndex:0,selectedViewMode:null!==localStorage.getItem("Library.selectedViewMode")?localStorage.getItem("Library.selectedViewMode"):"table",showScrollUpBtn:!1,loadingMaps:!1}},computed:vt(vt(vt({},Object(r.e)("maps",["maps"])),Object(r.c)("maps",["subjects"])),{},{minHeight:function(){return"calc(".concat("100vh"," - ").concat(this.$vuetify.application.top,"px - ").concat(this.$vuetify.application.footer,"px)")},filteredMaps:function(){var t=this,e=this.maps;return this.search&&(e=this.maps.filter((function(e){return e.name.toLowerCase().indexOf(t.search.toLowerCase())>-1}))),this.selectedSubjectIndex&&(e=e.filter((function(e){return e.subject===t.subjects[t.selectedSubjectIndex-1].name}))),e}}),watch:{selectedViewMode:function(t){localStorage.setItem("Library.selectedViewMode",t)},selectedRole:function(t){localStorage.setItem("Library.selectedRole",t)}},methods:vt(vt({},Object(r.b)("maps",["getMaps"])),{},{onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.showScrollUpBtn=e>20}}}),beforeMount:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadingMaps=!0,t.next=3,e.getMaps().finally((function(){e.loadingMaps=!1}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function o(t){lt(r,a,i,o,s,"next",t)}function s(t){lt(r,a,i,o,s,"throw",t)}o(void 0)}))})()}},ft=(n(329),n(373)),mt=n(81),bt=n(55),gt=Object(u.a)(pt,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column",style:{"min-height":t.minHeight}},[a("v-container",{staticClass:"content-width"},[a("v-row",{staticStyle:{"min-height":"144px"},attrs:{"align-content":"center"}},[a("v-col",{staticStyle:{"min-width":"230px"}},[a("h1",{staticClass:"display-1 font-weight-medium pb-2"},[t._v("\n                    Мои атласы\n                ")]),t._v(" "),a("p",{staticClass:"grey--text text--darken-2 mb-0 font-weight-light"},[t._v("\n                    Выберите атлас для редактирования, просмотра и управления.\n                ")])]),t._v(" "),a("v-col",[a("v-row",{staticClass:"align-center",class:[t.$vuetify.breakpoint.xs?"justify-center":"justify-end"],staticStyle:{height:"100%"}},[a("CreateSubjectDialog"),t._v(" "),a("CreateMapDialog")],1)],1)],1)],1),t._v(" "),a("v-container",{staticClass:"flex d-flex py-0",class:{"grey lighten-4":!t.$vuetify.theme.dark},attrs:{fluid:""}},[a("v-container",{staticClass:"pb-0 content-width d-flex flex-column"},[a("v-row",{staticClass:"my-5 align-center",staticStyle:{flex:"none"}},[t._l(t.roles,(function(e,n){return a("v-btn",{key:n,staticClass:"mx-1 my-1",class:{"v-btn--active":e.name===t.selectedRole},attrs:{text:"",rounded:"",small:""},on:{click:function(n){t.selectedRole=e.name}}},[t._v("\n                    "+t._s(e.name)+"\n                ")])})),t._v(" "),a("v-spacer"),t._v(" "),a("v-text-field",{staticClass:"my-2 mx-1",staticStyle:{"max-width":"400px"},attrs:{dense:"","single-line":"",rounded:"",filled:"",clearable:"","hide-details":"","prepend-inner-icon":"search",label:"Поиск атласа..."},model:{value:t.search,callback:function(e){t.search="string"==typeof e?e.trim():e},expression:"search"}}),t._v(" "),a("v-divider",{staticClass:"mx-3 my-auto hidden-md-and-down",staticStyle:{height:"38px"},attrs:{inset:"",vertical:""}}),t._v(" "),a("v-menu",{attrs:{transition:"slide-y-transition","offset-y":"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mr-2",staticStyle:{"text-transform":"unset !important",opacity:"0.87"},attrs:{text:""}},Object.assign({},i,n)),[a("span",{staticClass:"hidden-lg-and-down"},[t._v(" Категория:  ")]),t._v(" "),t.selectedSubjectIndex?a("span",[t._v(" "+t._s(t.subjects[t.selectedSubjectIndex-1].name)+" ")]):a("span",[t._v(" Все ")])])]}}],null,!0)},[t._v(" "),a("span",[t._v("Выбор категории")])])]}}])},[t._v(" "),a("v-list",[a("v-list-item-group",{model:{value:t.selectedSubjectIndex,callback:function(e){t.selectedSubjectIndex=e},expression:"selectedSubjectIndex"}},[a("v-list-item",[a("v-list-item-title",[t._v("Все")])],1),t._v(" "),t._l(t.subjects,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-title",[t._v(t._s(e.name))])],1)}))],2)],1)],1),t._v(" "),a("v-btn-toggle",{staticClass:"my-1 mx-1",class:{"mx-auto":t.$vuetify.breakpoint.mdAndDown},attrs:{color:"primary",dense:"",mandatory:""},model:{value:t.selectedViewMode,callback:function(e){t.selectedViewMode=e},expression:"selectedViewMode"}},[a("v-tooltip",{attrs:{top:"","open-delay":"200"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{value:"table",text:""}},n),[a("v-icon",{staticStyle:{opacity:"0.87"}},[t._v("view_module")])],1)]}}])},[t._v(" "),a("span",[t._v("Показать плитками")])]),t._v(" "),a("v-tooltip",{attrs:{top:"","open-delay":"200"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{value:"list",text:""}},n),[a("v-icon",{staticStyle:{opacity:"0.87"}},[t._v("reorder")])],1)]}}])},[t._v(" "),a("span",[t._v("Показать списком")])])],1)],2),t._v(" "),t.loadingMaps?[a("div",{staticClass:"justify-center align-center d-flex",staticStyle:{flex:"1"}},[a("v-progress-circular",{attrs:{indeterminate:"",size:64,color:"primary"}})],1)]:t.maps.length?t.filteredMaps.length?[a("keep-alive",[a("table"===t.selectedViewMode?"GridMaps":"ListMaps",{tag:"component",attrs:{maps:t.filteredMaps}})],1)]:[a("v-row",{staticClass:"flex-column my-6 mx-2",attrs:{align:"center",justify:"center"}},[a("v-img",{attrs:{"max-width":"400","max-height":"300",src:n(318),contain:""}}),t._v(" "),a("div",{staticClass:"mb-4 headline font-weight-medium"},[t._v("Ничего не найдено")])],1)]:[a("v-row",{staticClass:"flex-column my-6 mx-2",attrs:{align:"center",justify:"center"}},[a("v-img",{staticStyle:{opacity:"0.92"},attrs:{"max-width":"300","max-height":"300",src:n(317),contain:""}}),t._v(" "),a("div",{staticClass:"mb-4 headline font-weight-medium"},[t._v("У вас еще нет атласов")])],1)]],2)],1),t._v(" "),a("v-fab-transition",[a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.showScrollUpBtn,expression:"showScrollUpBtn"}],staticStyle:{bottom:"100px",right:"24px"},attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:function(e){return t.$vuetify.goTo(0)}}},[a("v-icon",[t._v("keyboard_arrow_up")])],1)],1)],1)}),[],!1,null,"6a5688c5",null);e.default=gt.exports;d()(gt,{VBtn:p.a,VBtnToggle:ft.a,VCol:b.a,VContainer:g.a,VDivider:y.a,VFabTransition:h.c,VIcon:w.a,VImg:Y.a,VList:z.a,VListItem:J.a,VListItemGroup:mt.a,VListItemTitle:W.c,VMenu:X.a,VProgressCircular:bt.a,VRow:j.a,VSpacer:S.a,VTextField:C.a,VTooltip:Z.a}),D()(gt,{Scroll:P.b})}}]);