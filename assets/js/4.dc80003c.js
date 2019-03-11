(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("The total width of the color picker UI, measured in pixels.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("The default selected color. This option can be any "),s("router-link",{attrs:{to:"/color_api.html#supported-color-formats"}},[t._v("supported color format")]),t._v(".")],1),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("Width of the border around the controls, measured in pixels.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("Color of the border. Any valid CSS color is supported.")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("Padding around the control handles.")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("Radius of the control handles, measued in pixels.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("SVG reference for "),s("router-link",{attrs:{to:"/guide.html#custom-handles"}},[t._v("Custom Handles")]),t._v(". This should be an ID selector that matches your handle SVG.")],1),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("Origin point for "),s("router-link",{attrs:{to:"/guide.html#custom-handles"}},[t._v("Custom Handles")]),t._v(".")],1),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("Slider height, measued in pixels.")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),s("p",[t._v("Gap between the wheel and the slider controls, measured in pixels.")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),s("p",[t._v("CSS display value for the color picker root element.")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),s("p",[t._v("Component array used for "),s("router-link",{attrs:{to:"/guide.html#custom-layouts"}},[t._v("Custom Layouts")]),t._v(".")],1),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),s("p",[t._v("An "),s("router-link",{attrs:{to:"/colorPicker_api.html"}},[s("code",[t._v("iro.Color")])]),t._v(" object representing the currently selected color. Updating this color object will also update the seclected color in the picker.")],1),t._v(" "),s("p",[s("strong",[t._v("See also:")]),t._v(" "),s("router-link",{attrs:{to:"/guide.html#color-picker-options"}},[t._v("Using the Selected Color")])],1),t._v(" "),t._m(34),t._v(" "),s("p",[t._v("The HTML element being used as the color picker container.")]),t._v(" "),t._m(35),t._v(" "),s("p",[t._v("The HTML element being used as the color picker's base element.")]),t._v(" "),t._m(36),t._v(" "),s("p",[t._v("The initial configetation options passed to the color picker.")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),s("p",[t._v("Reset the color picker back to the original color value passed to the color picker config.")]),t._v(" "),t._m(39),t._v(" "),s("p",[t._v("Set the color picker to a new size. Note: height is currently ignored.")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),s("p",[t._v("Add a listener to a color picker event.")]),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._m(53),t._v(" "),s("p",[t._v("Force the color picker to rerender. This can be used to resolve a "),s("a",{attrs:{href:"https://github.com/jaames/iro.js/issues/18",target:"_blank",rel:"noopener noreferrer"}},[t._v("known issue"),s("OutboundLink")],1),t._v(" where Safari will render the color picker as black when using certain client-side routing libraries, including Angular's default router.")]),t._v(" "),t._m(54),t._v(" "),s("p",[t._v("Used internally to dispatch an event. All function parameters after the event type will be passed to the event callback.")]),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),t._m(62),t._v(" "),t._m(63),t._v(" "),t._m(64),t._v(" "),t._m(65),t._v(" "),t._m(66),t._v(" "),t._m(67),t._v(" "),t._m(68),t._v(" "),s("p",[t._v("Fired whenever the color changes -- either when the user interacts with the controls, or when it is set via code. This event's callback function gets passed the currently selected color and an object which reflects which h,s,v channels changed.")]),t._v(" "),t._m(69),t._v(" "),s("p",[t._v("Fired whenever the users starts interacting with the color picker controls. The colorPicker's color object is passed to this event's callback function.")]),t._v(" "),t._m(70),t._v(" "),s("p",[t._v("Fired whenever the user stops interacting with the color picker controls. The colorPicker's color object is passed to this event's callback function.")]),t._v(" "),t._m(71),t._v(" "),s("p",[t._v("Fired when the colorPicker's UI has been mounted to the DOM and is ready for user interaction. A reference to the colorPicker object is passed to this event's callback function.")]),t._v(" "),t._m(72),t._v(" "),s("p",[t._v("Plugin hooks are used by "),s("router-link",{attrs:{to:"/plugins.html"}},[t._v("Plugins")]),t._v(" to add extra behaviour to the color picker -- you shouldn't need these unless you are writing a color picker plugin.")],1),t._v(" "),t._m(73),t._v(" "),t._m(74),t._v(" "),t._m(75),t._v(" "),t._m(76),t._v(" "),t._m(77),t._v(" "),t._m(78),t._v(" "),t._m(79),t._v(" "),t._m(80),t._v(" "),t._m(81),t._v(" "),t._m(82),t._v(" "),s("p",[t._v("Fired when an event is registered. Callbacks for this hook will be passed the event type and callback function.")]),t._v(" "),t._m(83),t._v(" "),s("p",[t._v("Fired when an event is unregistered. Callbacks for this hook will be passed the event type and callback function.")]),t._v(" "),t._m(84),t._v(" "),s("p",[t._v("Fired after the selected color has changed, but before the color picker UI has updated.")]),t._v(" "),t._m(85),t._v(" "),s("p",[t._v("Fired after the color picker UI has reacted to the selected color update. The selected color cannot be modified at this stage, otherwise it will cause infinite update loops.")]),t._v(" "),t._m(86),t._v(" "),t._m(87),t._v(" "),t._m(88),t._v(" "),t._m(89),t._v(" "),t._m(90),t._v(" "),t._m(91),t._v(" "),t._m(92),t._v(" "),t._m(93)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The color picker API is the main feature of iro.js, and is accessible on "),e("code",[this._v("iro.ColorPicker")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"constructor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[this._v("#")]),this._v(" Constructor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Arguments:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("{String | DOM Element}")]),this._v(" CSS selector or DOM node for the color picker container")]),this._v(" "),e("li",[e("code",[this._v("{Object}")]),this._v(" "),e("a",{attrs:{href:"#options"}},[this._v("color picker options")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"width"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#width","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("width")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v("300")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#color","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("color")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v('"#ffffff"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"borderwidth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#borderwidth","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("borderWidth")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v("0")]),this._v(" (no border)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bordercolor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bordercolor","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("borderColor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v('"#ffffff"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"padding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#padding","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("padding")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v("6")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"handleradius"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handleradius","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("handleRadius")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v("8")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"handlesvg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handlesvg","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("handleSvg")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v("null")]),this._v(" (default handle is used)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"handleorigin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handleorigin","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("handleOrigin")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v("{ x: 0, y: 0 }")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"wheellightness"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wheellightness","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("wheelLightness")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If set to "),e("code",[this._v("false")]),this._v(", the color wheel will not fade to black when the lightness decreases.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v("true")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sliderheight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sliderheight","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("sliderHeight")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": By default this will be calculated automatically from "),e("code",[this._v("padding")]),this._v(" and "),e("code",[this._v("handleRadius")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"slidermargin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slidermargin","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("sliderMargin")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v("12")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"display"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("display")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v('"block"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("layout")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default value")]),this._v(": "),e("code",[this._v('"block"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"color-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#color-2","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("color")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"el"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#el","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("el")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"base"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("base")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("props")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("reset")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"resize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resize","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("resize")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Arguments:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("{Number}")]),this._v(" width")]),this._v(" "),e("li",[e("code",[this._v("{Number}")]),this._v(" height")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"on"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("on")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Arguments:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("{String}")]),this._v(" "),e("a",{attrs:{href:"#events"}},[this._v("Event Type")])]),this._v(" "),e("li",[e("code",[this._v("{Function}")]),this._v(" callback")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// make a handler function")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("colorChangeCallback")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexString"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// start listening to the color change event")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// colorChangeCallback will be called whenever the color changes")]),t._v("\nexample"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("on")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"color:change"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colorChangeCallback"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"off"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#off","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("off")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Remove event listeners that were registered with "),e("code",[this._v("on")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Arguments:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("{String}")]),this._v(" "),e("a",{attrs:{href:"#events"}},[this._v("Event Type")])]),this._v(" "),e("li",[e("code",[this._v("{Function}")]),this._v(" callback")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// make a handler function")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("colorChangeCallback")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexString"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// start listening to the color change event")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// colorChangeCallback will be called whenever the color changes")]),t._v("\nexample"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("on")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"color:change"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colorChangeCallback"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// stop listening to the color change event")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// colorChangeCallback won't be called ehen the color changes")]),t._v("\nexample"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("off")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"color:change"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colorChangeCallback"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"forceupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#forceupdate","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("forceUpdate")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"emit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emit","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("emit")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Arguments:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("{String}")]),this._v(" "),e("a",{attrs:{href:"#events"}},[this._v("Event Type")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"emithook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emithook","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("emitHook")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Used internally to dispatch a plugin hook. All function parameters after the event type will be passed to the hook callback. The callback's "),e("code",[this._v("this")]),this._v(" value will also be set to reference the color picker instance that fired this hook.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Arguments:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("{String}")]),this._v(" "),e("a",{attrs:{href:"#events"}},[this._v("Event Type")])]),this._v(" "),e("li",[e("code",[this._v("{Function}")]),this._v(" callback")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"static-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#static-methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Static Methods")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"addhook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#addhook","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("addHook")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Used by plugins to register a global "),e("a",{attrs:{href:"#plugin-hooks"}},[this._v("Plugin Hook")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Arguments:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("{String} hookType")])]),this._v(" "),e("li",[e("code",[this._v("{Function} callback")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The color picker's "),e("a",{attrs:{href:"#on"}},[this._v("on")]),this._v(" method can be used to register callbacks for color picker events, such as when the selected color changes or when the user begins interacting with the picker. These callbacks can also be removed with the "),e("a",{attrs:{href:"#off"}},[this._v("off")]),this._v(" method.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"color-change"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#color-change","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("color:change")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"input-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-start","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("input:start")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"input-end"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-end","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("input:end")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mount","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("mount")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"plugin-hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-hooks","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugin Hooks")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("They behave just like events, except they are added globally to every color picker instance with the static "),e("a",{attrs:{href:"#addhook"}},[e("code",[this._v("addHook")])]),this._v(" method. When a hook callback is called, its "),e("code",[this._v("this")]),this._v(" context is also bound to the color picker instance that triggered that hook.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"init-before"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init-before","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("init:before")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Fired as soon as the new color picker is constructed. At this point, the "),e("code",[this._v("props")]),this._v(" property is available, so this is the ideal point to parse any color picker config parameters that your plugin uses.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"init-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init-state","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("init:state")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Fired once the color picker state has been initiated. You may merge your own values into "),e("code",[this._v("this.state")]),this._v(" here. The "),e("code",[this._v("color")]),this._v(" property is also available and events can be registered at this point.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"init-after"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init-after","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("init:after")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Fired once the color picker has done initialising layout. The "),e("code",[this._v("layout")]),this._v(" param is now available.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mount-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mount-2","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("mount")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Fired when the color picker has been mounted into the DOM. When this is fired, the "),e("code",[this._v("el")]),this._v(" and "),e("code",[this._v("base")]),this._v(" properties are available.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"event-on"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-on","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("event:on")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"event-off"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-off","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("event:off")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"color-beforeupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#color-beforeupdate","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("color:beforeUpdate")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"color-afterupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#color-afterupdate","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("color:afterUpdate")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"color-change-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#color-change-2","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("color:change")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Fired at the same time as the "),e("code",[this._v("color:change")]),this._v(" event. The color can be modified here if necessary.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"input-start-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-start-2","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("input:start")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Fired at the same time as the "),e("code",[this._v("input:start")]),this._v(" event.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"input-move"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-move","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("input:move")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Fired at the same time as the "),e("code",[this._v("input:move")]),this._v(" event.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"input-end-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-end-2","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("input:end")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Fired at the same time as the "),e("code",[this._v("input:end")]),this._v(" event.")])}],!1,null,null,null);r.options.__file="colorPicker_api.md";e.default=r.exports}}]);