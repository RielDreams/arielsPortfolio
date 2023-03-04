import { c as create_ssr_component, v as validate_component, a as compute_rest_props, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, i as is_void, f as add_attribute, h as each, j as escape, k as createEventDispatcher, s as setContext, o as onDestroy, l as subscribe, n as compute_slots, p as noop, q as null_to_empty } from './index2-9da31355.js';
import { w as writable } from './index-bb80ef66.js';

var classnamesExports = {};
var classnames = {
  get exports(){ return classnamesExports; },
  set exports(v){ classnamesExports = v; },
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var classNames = classnamesExports;

const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options"
  ]);
  setContext("background", true);
  let { tag = "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = void 0 } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  const bgColors = {
    gray: "bg-gray-100 dark:bg-gray-200 ",
    red: "bg-red-100 dark:bg-red-200",
    yellow: "bg-yellow-100 dark:bg-yellow-200 ",
    green: "bg-green-100 dark:bg-green-200 ",
    indigo: "bg-indigo-100 dark:bg-indigo-200 ",
    purple: "bg-purple-100 dark:bg-purple-200 ",
    pink: "bg-pink-100 dark:bg-pink-200 ",
    blue: "bg-blue-100 dark:bg-blue-200 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-100 dark:bg-gray-700",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-100 dark:bg-primary-200 ",
    none: ""
  };
  const textColors = {
    gray: "text-gray-700 dark:text-gray-800",
    red: "text-red-700 dark:text-red-800",
    yellow: "text-yellow-700 dark:text-yellow-800",
    green: "text-green-700 dark:text-green-800",
    indigo: "text-indigo-700 dark:text-indigo-800",
    purple: "text-purple-700 dark:text-purple-800",
    pink: "text-pink-700 dark:text-pink-800",
    blue: "text-blue-700 dark:text-blue-800",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-700 dark:text-primary-800",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-500 dark:bg-gray-200 ",
    red: "border-red-500 dark:bg-red-200 ",
    yellow: "border-yellow-500 dark:bg-tellow-200 ",
    green: "border-green-500 dark:bg-green-200 ",
    indigo: "border-indigo-500 dark:bg-indigo-200 ",
    purple: "border-purple-500 dark:bg-purple-200 ",
    pink: "border-pink-500 dark:bg-pink-200 ",
    blue: "border-blue-500 dark:bg-blue-200 ",
    light: "border-gray-500",
    dark: "border-gray-500",
    default: "border-gray-200 dark:border-gray-700",
    dropdown: "border-gray-100 dark:border-gray-700",
    navbar: "border-gray-100 dark:border-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700",
    form: "border-gray-300 dark:border-gray-700",
    primary: "border-primary-500 dark:bg-primary-200 ",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  {
    setContext("color", color);
  }
  divClass = classNames(bgColors[color], textColors[color], rounded && (color === "dropdown" ? "rounded" : "rounded-lg"), border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${transition ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`}`;
});
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14)
    return 1;
  else
    return 1 - v;
}
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = "Close" } = $$props;
  let { size = "md" } = $$props;
  const colors = {
    dark: "hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-300",
    red: "focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-300",
    yellow: "focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-300",
    green: "focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-300",
    indigo: "focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-300",
    purple: "focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-300",
    pink: "focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300",
    blue: "focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-300",
    default: "focus:ring-gray-300 "
  };
  const sizing = {
    xs: "m-0.5 rounded focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "rounded-lg focus:ring-2 p-1.5"
  };
  let buttonClass = "";
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  buttonClass = classNames(
    "ml-auto focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `<button type="${"button"}"${add_attribute("class", buttonClass, 0)} aria-label="${"Close"}">${slots.default ? slots.default({}) : `
    <span class="${"sr-only"}">${escape(name)}</span>
    <svg${add_attribute("class", svgSizes[size], 0)} fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>
  `}</button>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["pill", "outline", "gradient", "size", "href", "btnClass", "type", "color", "shadow"]);
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { gradient = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { btnClass = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "blue" } = $$props;
  let { shadow = null } = $$props;
  const colorClasses = {
    blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    alternative: "text-gray-900 bg-white border border-gray-200 dark:border-gray-600 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 hover:text-blue-700 focus:text-blue-700 dark:focus:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    red: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    primary: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    purple: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
  };
  const gradientClasses = {
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 ",
    green: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800",
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800",
    red: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800",
    purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800",
    cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800",
    purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800",
    pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800",
    tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700",
    redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400"
  };
  const coloredShadowClasses = {
    blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
    green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
    cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
    teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 ",
    lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
    red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 ",
    pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
    purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
  };
  const outlineClasses = {
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-400",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  function rounded(gradientOutline = false) {
    if (group) {
      return pill ? "first:rounded-l-full last:rounded-r-full" : gradientOutline ? "first:rounded-l-md last:rounded-r-md" : "first:rounded-l-lg last:rounded-r-lg";
    }
    return pill ? "rounded-full" : gradientOutline ? "rounded-md" : "rounded-lg";
  }
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  let gradientOutlineClass;
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  buttonClass = btnClass ? btnClass : classNames(
    "text-center font-medium",
    group ? "focus:ring-2" : "focus:ring-4",
    group && "focus:z-10",
    group || "focus:outline-none",
    outline && gradient ? "p-0.5" : "inline-flex items-center justify-center " + sizeClasses[size],
    gradient ? gradientClasses[color] : outline ? outlineClasses[color] : colorClasses[color],
    color === "alternative" && (group ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-800 dark:hover:border-gray-700"),
    outline && color === "dark" && (group ? "dark:text-white dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
    hasBorder() && group && "border-l-0 first:border-l",
    rounded(false),
    shadow && coloredShadowClasses[shadow],
    $$props.disabled && "cursor-not-allowed opacity-50",
    $$props.class
  );
  gradientOutlineClass = classNames("inline-flex items-center justify-center", sizeClasses[size], rounded(true), "bg-white text-gray-900 dark:bg-gray-900 dark:text-white", "transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit");
  return `${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: escape_attribute_value(buttonClass)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${outline && gradient ? `
    <span${add_attribute("class", gradientOutlineClass, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `${slots.default ? slots.default({}) : ``}`}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}`;
});
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = "" } = $$props;
  let { altTag = "" } = $$props;
  let { attr = "" } = $$props;
  let { slideClass = "" } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.altTag === void 0 && $$bindings.altTag && altTag !== void 0)
    $$bindings.altTag(altTag);
  if ($$props.attr === void 0 && $$bindings.attr && attr !== void 0)
    $$bindings.attr(attr);
  if ($$props.slideClass === void 0 && $$bindings.slideClass && slideClass !== void 0)
    $$bindings.slideClass(slideClass);
  return `<div${add_attribute("class", slideClass, 0)}><img${add_attribute("src", image, 0)}${add_attribute("alt", altTag, 0)}${add_attribute("title", attr, 0)}></div>`;
});
const css$3 = {
  code: ".active.svelte-1o2b5yq{opacity:1}",
  map: null
};
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { thumbImg = "" } = $$props;
  let { altTag = "" } = $$props;
  let { titleLink = "" } = $$props;
  let { id } = $$props;
  let { thumbWidth } = $$props;
  let { selected = false } = $$props;
  if ($$props.thumbImg === void 0 && $$bindings.thumbImg && thumbImg !== void 0)
    $$bindings.thumbImg(thumbImg);
  if ($$props.altTag === void 0 && $$bindings.altTag && altTag !== void 0)
    $$bindings.altTag(altTag);
  if ($$props.titleLink === void 0 && $$bindings.titleLink && titleLink !== void 0)
    $$bindings.titleLink(titleLink);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.thumbWidth === void 0 && $$bindings.thumbWidth && thumbWidth !== void 0)
    $$bindings.thumbWidth(thumbWidth);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css$3);
  return `
<img class="${["opacity-40 svelte-1o2b5yq", selected ? "active" : ""].join(" ").trim()}"${add_attribute("id", id.toString(), 0)}${add_attribute("src", thumbImg, 0)}${add_attribute("alt", altTag, 0)} title="${"Image from " + escape(titleLink, true)}" width="${escape(thumbWidth, true) + "%"}">`;
});
const Caption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { caption = "" } = $$props;
  let { captionClass = "" } = $$props;
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  return `<div${add_attribute("class", captionClass, 0)}><p id="${"caption"}" class="${"text-gray-900 dark:text-white"}">${escape(caption)}</p></div>`;
});
const css$2 = {
  code: ".active.svelte-1o2b5yq{opacity:1}",
  map: null
};
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { selected = false } = $$props;
  let { indicatorClass = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.indicatorClass === void 0 && $$bindings.indicatorClass && indicatorClass !== void 0)
    $$bindings.indicatorClass(indicatorClass);
  $$result.css.add(css$2);
  return `<button type="${"button"}" class="${[
    escape(null_to_empty(indicatorClass), true) + " svelte-1o2b5yq",
    selected ? "active" : ""
  ].join(" ").trim()}"${add_attribute("aria-label", name, 0)}></button>`;
});
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let image;
  let $$slots = compute_slots(slots);
  let { showIndicators: showIndicators2 = true } = $$props;
  let { showCaptions: showCaptions2 = true } = $$props;
  let { showThumbs: showThumbs2 = true } = $$props;
  let { images } = $$props;
  let { slideControls: slideControls2 = true } = $$props;
  let { loop = false } = $$props;
  let { duration = 2e3 } = $$props;
  let { divClass = "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" } = $$props;
  let { indicatorDivClass = "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2" } = $$props;
  let { captionClass = "h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center" } = $$props;
  let { indicatorClass = "w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60" } = $$props;
  let { slideClass = "" } = $$props;
  let imageShowingIndex = 0;
  const nextSlide = () => {
    if (imageShowingIndex === images.length - 1) {
      imageShowingIndex = 0;
    } else {
      imageShowingIndex += 1;
    }
  };
  let thumbWidth = 100 / images.length;
  if (loop) {
    setInterval(
      () => {
        nextSlide();
      },
      duration
    );
  }
  if ($$props.showIndicators === void 0 && $$bindings.showIndicators && showIndicators2 !== void 0)
    $$bindings.showIndicators(showIndicators2);
  if ($$props.showCaptions === void 0 && $$bindings.showCaptions && showCaptions2 !== void 0)
    $$bindings.showCaptions(showCaptions2);
  if ($$props.showThumbs === void 0 && $$bindings.showThumbs && showThumbs2 !== void 0)
    $$bindings.showThumbs(showThumbs2);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.slideControls === void 0 && $$bindings.slideControls && slideControls2 !== void 0)
    $$bindings.slideControls(slideControls2);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.indicatorDivClass === void 0 && $$bindings.indicatorDivClass && indicatorDivClass !== void 0)
    $$bindings.indicatorDivClass(indicatorDivClass);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  if ($$props.indicatorClass === void 0 && $$bindings.indicatorClass && indicatorClass !== void 0)
    $$bindings.indicatorClass(indicatorClass);
  if ($$props.slideClass === void 0 && $$bindings.slideClass && slideClass !== void 0)
    $$bindings.slideClass(slideClass);
  image = images[imageShowingIndex];
  return `<div id="${"default-carousel"}" class="${"relative"}"><div${add_attribute("class", divClass, 0)}>${validate_component(Slide, "Slide").$$render(
    $$result,
    {
      image: image.imgurl,
      altTag: image.name,
      attr: image.attribution,
      slideClass
    },
    {},
    {}
  )}</div>
  ${showIndicators2 ? `
    <div${add_attribute("class", indicatorDivClass, 0)}>${each(images, ({ id, imgurl, name, attribution }) => {
    return `${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        name,
        selected: imageShowingIndex === id,
        indicatorClass
      },
      {},
      {}
    )}`;
  })}</div>` : ``}
  ${slideControls2 ? `
    <button type="${"button"}" class="${"flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"}" data-carousel-prev><span class="${"inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"}">${$$slots.previous ? `${slots.previous ? slots.previous({}) : ``}` : `<svg aria-hidden="${"true"}" class="${"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15 19l-7-7 7-7"}"></path></svg>`}
        <span class="${"hidden"}">Previous</span></span></button>
    <button type="${"button"}" class="${"flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"}" data-carousel-next><span class="${"inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"}">${$$slots.next ? `${slots.next ? slots.next({}) : ``}` : `<svg aria-hidden="${"true"}" class="${"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 5l7 7-7 7"}"></path></svg>`}
        <span class="${"hidden"}">Next</span></span></button>` : ``}</div>

${showCaptions2 ? `${validate_component(Caption, "Caption").$$render(
    $$result,
    {
      caption: images[imageShowingIndex].name,
      captionClass
    },
    {},
    {}
  )}` : ``}

${showThumbs2 ? `<div class="${"flex flex-row justify-center bg-gray-100"}">${each(images, ({ id, imgurl, name, attribution }) => {
    return `${validate_component(Thumbnail, "Thumbnail").$$render(
      $$result,
      {
        thumbWidth,
        thumbImg: imgurl,
        altTag: name,
        titleLink: attribution,
        id,
        selected: imageShowingIndex === id
      },
      {},
      {}
    )}`;
  })}</div>` : ``}`;
});
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass"]);
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  return `${$$result.head += `<!-- HEAD_svelte-16q53hu_START --><script>if (window) {
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? window.document.documentElement.classList.add('dark')
        : window.document.documentElement.classList.remove('dark');
    }
  <\/script><!-- HEAD_svelte-16q53hu_END -->`, ""}

<button${spread(
    [
      { "aria-label": "Dark mode" },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(btnClass, $$props.class))
      }
    ],
    {}
  )}><span class="${"hidden dark:block"}">${slots.lightIcon ? slots.lightIcon({}) : `
      <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1\n  0 100-2H3a1 1 0 000 2h1z"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}"></path></svg>
    `}</span>
  <span class="${"dark:hidden"}">${slots.darkIcon ? slots.darkIcon({}) : `
      <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}"></path></svg>
    `}</span></button>`;
});
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activateClickOutside",
    "hidden",
    "position",
    "leftOffset",
    "rightOffset",
    "topOffset",
    "bottomOffset",
    "width",
    "backdrop",
    "bgColor",
    "bgOpacity",
    "placement",
    "id",
    "divClass",
    "transitionParams",
    "transitionType"
  ]);
  let { activateClickOutside = true } = $$props;
  let { hidden = true } = $$props;
  let { position = "fixed" } = $$props;
  let { leftOffset = "inset-y-0 left-0" } = $$props;
  let { rightOffset = "inset-y-0 right-0" } = $$props;
  let { topOffset = "inset-x-0 top-0" } = $$props;
  let { bottomOffset = "inset-x-0 bottom-0" } = $$props;
  let { width = "w-80" } = $$props;
  let { backdrop = true } = $$props;
  let { bgColor = "bg-gray-900" } = $$props;
  let { bgOpacity = "bg-opacity-75" } = $$props;
  let { placement = "left" } = $$props;
  let { id = "drawer-example" } = $$props;
  let { divClass = "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800" } = $$props;
  let { transitionParams = {} } = $$props;
  let { transitionType = "fly" } = $$props;
  const placements = {
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
    bottom: bottomOffset
  };
  let backdropDivClass = classNames("fixed top-0 left-0 z-50 w-full h-full", backdrop && bgColor, backdrop && bgOpacity);
  if ($$props.activateClickOutside === void 0 && $$bindings.activateClickOutside && activateClickOutside !== void 0)
    $$bindings.activateClickOutside(activateClickOutside);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.leftOffset === void 0 && $$bindings.leftOffset && leftOffset !== void 0)
    $$bindings.leftOffset(leftOffset);
  if ($$props.rightOffset === void 0 && $$bindings.rightOffset && rightOffset !== void 0)
    $$bindings.rightOffset(rightOffset);
  if ($$props.topOffset === void 0 && $$bindings.topOffset && topOffset !== void 0)
    $$bindings.topOffset(topOffset);
  if ($$props.bottomOffset === void 0 && $$bindings.bottomOffset && bottomOffset !== void 0)
    $$bindings.bottomOffset(bottomOffset);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.bgOpacity === void 0 && $$bindings.bgOpacity && bgOpacity !== void 0)
    $$bindings.bgOpacity(bgOpacity);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  return `${!hidden ? `${backdrop && activateClickOutside ? `<div role="${"presentation"}"${add_attribute("class", backdropDivClass, 0)}></div>` : `${backdrop && !activateClickOutside ? `<div role="${"presentation"}"${add_attribute("class", backdropDivClass, 0)}></div>` : ``}`}
  ${activateClickOutside ? `<div${spread(
    [
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(divClass, width, position, placements[placement], $$props.class))
      },
      { tabindex: "-1" },
      {
        "aria-controls": escape_attribute_value(id)
      },
      {
        "aria-labelledby": escape_attribute_value(id)
      }
    ],
    {}
  )}>${slots.default ? slots.default({ hidden }) : ``}</div>` : `<div${spread(
    [
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(divClass, width, position, placements[placement], $$props.class))
      },
      { tabindex: "-1" },
      {
        "aria-controls": escape_attribute_value(id)
      },
      {
        "aria-labelledby": escape_attribute_value(id)
      }
    ],
    {}
  )}>${slots.default ? slots.default({ hidden }) : ``}</div>`}` : ``}`;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["customClass", "footerType"]);
  let { customClass = "" } = $$props;
  let { footerType = "default" } = $$props;
  if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0)
    $$bindings.customClass(customClass);
  if ($$props.footerType === void 0 && $$bindings.footerType && footerType !== void 0)
    $$bindings.footerType(footerType);
  return `<footer${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(
          {
            "bg-gray-800": footerType === "sitemap",
            "p-4 bg-white sm:p-6 dark:bg-gray-800": footerType === "socialmedia",
            "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800": footerType === "logo",
            "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800": footerType === "default",
            [`${customClass}`]: footerType === "custom"
          },
          $$props.class
        ))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</footer>`;
});
const FooterCopyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["spanClass", "aClass", "year", "href", "by", "target", "copyrightMessage"]);
  let { spanClass = "block text-sm text-gray-500 sm:text-center dark:text-gray-400" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { year = new Date().getFullYear() } = $$props;
  let { href = "" } = $$props;
  let { by = "" } = $$props;
  let { target = void 0 } = $$props;
  let { copyrightMessage = "All Rights Reserved." } = $$props;
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.by === void 0 && $$bindings.by && by !== void 0)
    $$bindings.by(by);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.copyrightMessage === void 0 && $$bindings.copyrightMessage && copyrightMessage !== void 0)
    $$bindings.copyrightMessage(copyrightMessage);
  return `<span${add_attribute("class", classNames(spanClass, $$props.class), 0)}>© ${escape(year)}
  ${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aClass) }
    ],
    {}
  )}>${escape(by)}</a>` : `<span class="${"ml-1"}">${escape(by)}</span>`}
  . ${escape(copyrightMessage)}</span>`;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClass;
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  {
    {
      color = color;
    }
  }
  labelClass = classNames(defaultClass, colorClasses[color], $$props.class);
  return `${show ? `
  <label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${slots.default ? slots.default({}) : ``}`}`;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
let floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = "" } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-4" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = classNames(defaultClass, $$slots.left && leftPadding[_size], $$slots.right && rightPadding[_size], ringClasses[color], colorClasses[_color], borderClasses[_color], inputPadding[_size], textSizes[_size], group || "rounded-lg", group && "first:rounded-l-lg last:rounded-r-lg", group && "border-l-0 first:border-l last:border-r", $$props.class);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(floatClass, true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}
  ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : `
    <input${spread(
          [
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}>
  `}
  ${$$slots.right ? `<div class="${escape(floatClass, true) + " right-0 pr-2.5"}">${slots.right ? slots.right({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}`;
      }
    }
  )}`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = "" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => classNames(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = classNames(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? classNames("block w-full", "text-sm", "border-0 px-0", "bg-inherit dark:bg-inherit", "focus:outline-none focus:ring-0") : classNames(wrapperClass, "p-2.5 text-sm", "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500");
  innerWrapperClass = classNames("py-2 px-4 bg-white dark:bg-gray-800", $$slots.footer || "rounded-b-lg", $$slots.header || "rounded-t-lg");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``}
  ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${value || ""}</textarea>`;
        }
      })}
  ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })}`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "size", "placement", "autoclose", "permanent", "backdropClasses"]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { permanent = false } = $$props;
  let { backdropClasses = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let frameClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.permanent === void 0 && $$bindings.permanent && permanent !== void 0)
    $$bindings.permanent(permanent);
  if ($$props.backdropClasses === void 0 && $$bindings.backdropClasses && backdropClasses !== void 0)
    $$bindings.backdropClasses(backdropClasses);
  {
    dispatch(open ? "open" : "hide");
  }
  frameClass = classNames("relative flex flex-col mx-auto", $$props.class);
  return `${open ? `
  <div${add_attribute("class", classNames("fixed inset-0 z-40", backdropClasses), 0)}></div>
  
  <div${add_attribute("class", classNames("fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex", ...getPlacementClasses()), 0)} tabindex="${"-1"}" aria-modal="${"true"}" role="${"dialog"}"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}">
      ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
    default: () => {
      return `
        ${$$slots.header || title ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex justify-between items-center p-4 rounded-t border-b"
        },
        {},
        {
          default: () => {
            return `${slots.header ? slots.header({}) : `
              <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? "" : "text-gray-900 dark:text-white", true) + " p-0"}">${escape(title)}</h3>
            `}
            ${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
              $$result,
              {
                name: "Close modal",
                color: $$restProps.color
              },
              {},
              {}
            )}` : ``}`;
          }
        }
      )}` : `${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 right-2.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}`}
        
        <div id="${"modal"}" class="${"p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain"}">${slots.default ? slots.default({}) : ``}</div>
        
        ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex items-center p-6 space-x-2 rounded-b border-t"
        },
        {},
        {
          default: () => {
            return `${slots.footer ? slots.footer({}) : ``}`;
          }
        }
      )}` : ``}`;
    }
  })}</div></div>` : ``}`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["navClass", "navDivClass", "fluid", "color"]);
  let { navClass = "px-2 sm:px-4 py-2.5 w-full" } = $$props;
  let { navDivClass = "mx-auto flex flex-wrap justify-between items-center " } = $$props;
  let { fluid = true } = $$props;
  let { color = "navbar" } = $$props;
  let hidden = true;
  let toggle = () => {
    hidden = !hidden;
  };
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.navDivClass === void 0 && $$bindings.navDivClass && navDivClass !== void 0)
    $$bindings.navDivClass(navDivClass);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object.assign({}, { tag: "nav" }, { color }, $$restProps, {
      class: classNames(navClass, $$props.class)
    }),
    {},
    {
      default: () => {
        return `<div${add_attribute("class", classNames(navDivClass, fluid && "container"), 0)}>${slots.default ? slots.default({ hidden, toggle }) : ``}</div>`;
      }
    }
  )}`;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href"]);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames("flex items-center", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  const colors = {
    default: "hover:text-gray-900 hover:bg-gray-100 text-gray-500 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-300",
    red: "focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-300",
    yellow: "focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-300",
    green: "focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-300",
    indigo: "focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-300",
    purple: "focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-300",
    pink: "focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300",
    blue: "focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-300"
  };
  const sizing = {
    xs: "m-0.5 rounded focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "rounded-lg focus:ring-2 p-1.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  buttonClass = classNames(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="${"sr-only"}">${escape(name)}</span>` : ``}
  ${slots.default ? slots.default({}) : `
    <svg${add_attribute("class", svgSizes[size], 0)} fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>
  `}</button>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM3 17.25C3 16.8358 3.33579 16.5 3.75 16.5H20.25C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18H3.75C3.33579 18 3 17.6642 3 17.25Z" fill="${color}"/> `;
  let { ariaLabel = "bars 3" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass"]);
  let { btnClass = "ml-3 md:hidden" } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render(
    $$result,
    Object.assign({}, { name: "Open main menu" }, $$restProps, {
      class: classNames(btnClass, $$props.class)
    }),
    {},
    {
      default: () => {
        return `${validate_component(Menu, "Menu").$$render($$result, { class: "h-6 w-6 shrink-0" }, {}, {})}`;
      }
    }
  )}`;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "active", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { active = false } = $$props;
  let { activeClass = "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  let liClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  liClass = classNames("block py-2 pr-4 pl-3 md:p-0 rounded md:border-0", active ? activeClass : nonActiveClass, $$props.class);
  return `<li>${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        { class: escape_attribute_value(liClass) }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}</li>`;
});
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "ulClass", "hidden", "slideParams"]);
  let { divClass = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = true } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let _divClass;
  let _ulClass;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0)
    $$bindings.slideParams(slideParams);
  _divClass = classNames(divClass, $$props.class);
  _ulClass = classNames(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.class
  );
  return `${!hidden ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(_divClass) }], {})}>${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>` : `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { hidden: hidden || null }
    ],
    {}
  )}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`}`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"home flex flex flex-wrap mb-10 bg-blue-100 dark:bg-gray-200 pb-12 min-w-full"}" style="${"height:25rem"}" id="${"home"}">${validate_component(Navbar, "Navbar").$$render(
      $$result,
      {
        rounded: true,
        color: "none",
        class: "min-w-full",
        style: "height:5rem"
      },
      {},
      {
        default: ({ hidden, toggle }) => {
          return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
            default: () => {
              return `${validate_component(DarkMode, "DarkMode").$$render($$result, { class: "text-lg" }, {}, {
                darkIcon: () => {
                  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"2em"}" height="${"2em"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 32 32"}"><path fill="${"currentColor"}" d="${"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"}"></path></svg>
                `;
                },
                lightIcon: () => {
                  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"2em"}" height="${"2em"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 32 32"}"><path fill="${"currentColor"}" d="${"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"}"></path></svg>`;
                }
              })}`;
            }
          })}
        <div class="${"flex items-center md:order-2"}">${validate_component(NavHamburger, "NavHamburger").$$render(
            $$result,
            {
              class1: "w-full md:flex md:w-auto md:order-1"
            },
            {},
            {}
          )}</div>
        ${validate_component(NavUl, "NavUl").$$render($$result, { hidden }, {}, {
            default: () => {
              return `${validate_component(NavLi, "NavLi").$$render($$result, {}, {}, {
                default: () => {
                  return `Home`;
                }
              })}
          ${validate_component(NavLi, "NavLi").$$render($$result, {}, {}, {
                default: () => {
                  return `About`;
                }
              })} 
          ${validate_component(NavLi, "NavLi").$$render($$result, {}, {}, {
                default: () => {
                  return `Projects`;
                }
              })}
          ${validate_component(NavLi, "NavLi").$$render($$result, {}, {}, {
                default: () => {
                  return `Skills`;
                }
              })}
          ${validate_component(NavLi, "NavLi").$$render($$result, {}, {}, {
                default: () => {
                  return `Contact`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}

    <div class="${"flex flex-wrap justify-center min-w-full items-top m-4"}"><h1 class="${"text-5xl min-w-full text-center"}">Ariel Fernandez</h1>
        <h3 class="${"text-3xl min-w-full text-center -my-5"}">Software Engineer - NYC area</h3>
        <h4 class="${"text-lg min-w-full text-center -my-1"}">I have a deep interest in coding and the ability to use it to build and create</h4>
        <div class="${"min-w-full flex flex-wrap justify-center gap-1"}" style="${"height:1rem"}">${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: "https://www.linkedin.com/in/arielfernandez412/"
      },
      {},
      {
        default: () => {
          return `LinkedIn`;
        }
      }
    )}
        ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Resume`;
      }
    })}
        ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Ariels Resume",
        autoclose: true,
        open: defaultModal
      },
      {
        open: ($$value) => {
          defaultModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<img src="${"https://i.imgur.com/Iw1YXTf.jpg"}" alt="${""}">`;
        }
      }
    )}
          ${validate_component(Button, "Button").$$render($$result, { href: "https://github.com/RielDreams" }, {}, {
      default: () => {
        return `GitHub`;
      }
    })}</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Footer_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Footer, "Footer").$$render(
    $$result,
    {
      footerType: "logo",
      class: "bottom-0 left-0 z-20 w-full "
    },
    {},
    {
      default: () => {
        return `${validate_component(FooterCopyright, "FooterCopyright").$$render($$result, { href: "/", by: "RielDreams™", year: 2023 }, {}, {})}`;
      }
    }
  )}`;
});
let showThumbs = false;
let showCaptions = false;
let showIndicators = false;
let slideControls = false;
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    {
      id: 0,
      name: "Casual Business",
      imgurl: "https://i.imgur.com/HQKjQ5lm.jpg"
    },
    {
      id: 1,
      name: "OKC Balloon Fest",
      imgurl: "https://i.imgur.com/uRHQm7Zm.jpg"
    },
    {
      id: 2,
      name: "GSXR",
      imgurl: "https://i.imgur.com/boyhlkQm.jpg"
    }
  ];
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  return `<div class="${"text-center min-w-[40%] dark:text-gray-200 p-4 grid grid-cols-2"}" id="${"about"}"><div class="${"flex flex-wrap justify-center items-center p-10 text-lg max-w-xl "}"><p class="${"mb-2"}">My name is Ariel Fernandez, and I&#39;m a bilingual software engineer with a strong background in
			law enforcement. I&#39;m passionate about problem-solving and delivering high-quality solutions.
		</p>
		<p class="${"mb-2"}">In addition to my professional work, I have a variety of hobbies that keep me engaged and
			creative. I&#39;m an avid photographer, and I love capturing cars and landscapes through my camera
			lens. I&#39;m also a dedicated reef keeper and aquarium enthusiast. When I&#39;m not exploring the
			great outdoors, you can often find me learning about 3D modeling in blender, working on my
			reef tank or working on my project cars.
		</p>
		<p>My hobbies reflect my love of creating and building, and I bring that same passion to my work
			as a software engineer. Whether I&#39;m developing new applications, solving complex problems, or
			building innovative solutions, I&#39;m committed to excellence and always striving to deliver the
			best possible results. Thanks for taking the time to learn a little more about me, and I hope
			we have the opportunity to work together soon!
		</p></div>
	<div class="${"flex justify-center items-center "}">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      images,
      loop: true,
      showCaptions,
      showThumbs,
      showIndicators,
      slideControls,
      duration: "3000"
    },
    {},
    {}
  )}</div></div>`;
});
const css$1 = {
  code: "ul.svelte-da9j5z{list-style:none;padding-left:0}",
  map: null
};
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = 0.2 } = $$props;
  let { easing = "ease" } = $$props;
  let { key = null } = $$props;
  const dispatch = createEventDispatcher();
  const store = writable({ key, duration, easing });
  const unsubscribe = store.subscribe((s) => {
    key = s.key;
    dispatch("change", { key });
  });
  setContext("svelte-collapsible-accordion", store);
  onDestroy(unsubscribe);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0)
    $$bindings.easing(easing);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  $$result.css.add(css$1);
  {
    store.update((s) => Object.assign(s, { key }));
  }
  return `<ul class="${"accordion svelte-da9j5z"}">${slots.default ? slots.default({}) : ``}
</ul>`;
});
const css = {
  code: ".accordion-item-header.svelte-13br4ya{user-select:none;cursor:pointer}",
  map: null
};
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let params;
  let $store, $$unsubscribe_store;
  let { key } = $$props;
  const store = getContext("svelte-collapsible-accordion");
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  $$result.css.add(css);
  params = {
    open: $store.key === key,
    duration: $store.duration,
    easing: $store.easing
  };
  $$unsubscribe_store();
  return `<li class="${"accordion-item"}"${add_attribute("aria-expanded", params.open, 0)}><div class="${"accordion-item-header svelte-13br4ya"}">${slots.header ? slots.header({}) : ``}</div>

    <div class="${"accordion-item-body"}">${slots.body ? slots.body({}) : ``}</div>

    ${slots.default ? slots.default({}) : ``}

</li>`;
});
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-wrap justify-center item-center bg-blue-100 dark:bg-gray-200 p-4 min-w-full"}" id="${"skills"}"><h1 class="${"text-4xl mb-16 mt-8"}">Experienced working with the following languages and technologies: </h1>
<div class="${"flex flex-wrap min-w-full justify-center gap-6 mt-15 text-center"}"><div><svg xmlns="${"http://www.w3.org/2000/svg"}" aria-label="${"JavaScript"}" role="${"img"}" viewBox="${"0 0 512 512"}" width="${"64px"}" height="${"64px"}" fill="${"#000000"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><rect width="${"512"}" height="${"512"}" rx="${"15%"}" fill="${"#f7df1e"}"></rect><path d="${"M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"}"></path></g></svg>
        <p>JavaScript</p></div>

    <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" fill="${"#000000"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><defs><linearGradient id="${"a"}" x1="${"-645.732"}" y1="${"839.188"}" x2="${"-654.59"}" y2="${"839.25"}" gradientTransform="${"matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0.231"}" stop-color="${"#999875"}"></stop><stop offset="${"0.563"}" stop-color="${"#9b9977"}"></stop><stop offset="${"0.683"}" stop-color="${"#a09f7e"}"></stop><stop offset="${"0.768"}" stop-color="${"#a9a889"}"></stop><stop offset="${"0.837"}" stop-color="${"#b7b69a"}"></stop><stop offset="${"0.896"}" stop-color="${"#c9c7b0"}"></stop><stop offset="${"0.948"}" stop-color="${"#deddcb"}"></stop><stop offset="${"0.994"}" stop-color="${"#f8f6eb"}"></stop><stop offset="${"1"}" stop-color="${"#fbf9ef"}"></stop></linearGradient><linearGradient id="${"b"}" x1="${"-644.287"}" y1="${"823.405"}" x2="${"-657.028"}" y2="${"845.476"}" gradientTransform="${"matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0"}" stop-color="${"#48a547"}"></stop><stop offset="${"1"}" stop-color="${"#3f9143"}"></stop></linearGradient><linearGradient id="${"c"}" x1="${"-643.386"}" y1="${"839.485"}" x2="${"-652.418"}" y2="${"833.417"}" gradientTransform="${"matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0"}" stop-color="${"#41a247"}"></stop><stop offset="${"0.352"}" stop-color="${"#4ba74b"}"></stop><stop offset="${"0.956"}" stop-color="${"#67b554"}"></stop><stop offset="${"1"}" stop-color="${"#69b655"}"></stop></linearGradient></defs><title>file_type_mongo</title><path d="${"M16.62,30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741,3.423-.149a2.712,2.712,0,0,0-1.333,1.523A14.1,14.1,0,0,0,16.62,30Z"}" style="${"fill:url(#a)"}"></path><path d="${"M17.026,26.329a13.223,13.223,0,0,0,5-13.225C20.556,6.619,17.075,4.487,16.7,3.673a9.792,9.792,0,0,1-.825-1.6l.277,18.069S15.578,25.664,17.026,26.329Z"}" style="${"fill:url(#b)"}"></path><path d="${"M15.487,26.569S9.366,22.4,9.72,15.025A15.54,15.54,0,0,1,15.239,3.377,1.725,1.725,0,0,0,15.846,2c.381.82.319,12.243.359,13.579C16.36,20.776,15.916,25.588,15.487,26.569Z"}" style="${"fill:url(#c)"}"></path></g></svg>
    <p>MongoDB</p></div>

    <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z"}" fill="${"url(#paint0_linear_87_8204)"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z"}" fill="${"url(#paint1_linear_87_8204)"}"></path><defs><linearGradient id="${"paint0_linear_87_8204"}" x1="${"12.4809"}" y1="${"2"}" x2="${"12.4809"}" y2="${"22.7407"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#327EBD"}"></stop><stop offset="${"1"}" stop-color="${"#1565A7"}"></stop></linearGradient><linearGradient id="${"paint1_linear_87_8204"}" x1="${"19.519"}" y1="${"9.25928"}" x2="${"19.519"}" y2="${"30"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#FFDA4B"}"></stop><stop offset="${"1"}" stop-color="${"#F9C600"}"></stop></linearGradient></defs></g></svg>
        <p>Python</p></div>

    <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 64 64"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" xml:space="${"preserve"}" style="${"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"}" fill="${"#000000"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><rect id="${"Icons"}" x="${"-1088"}" y="${"-64"}" width="${"1280"}" height="${"800"}" style="${"fill:none;"}"></rect><g id="${"Icons1"}"><g id="${"Strike"}"></g><g id="${"H1"}"></g><g id="${"H2"}"></g><g id="${"H3"}"></g><g id="${"list-ul"}"></g><g id="${"hamburger-1"}"></g><g id="${"hamburger-2"}"></g><g id="${"list-ol"}"></g><g id="${"list-task"}"></g><g id="${"trash"}"></g><g id="${"vertical-menu"}"></g><g id="${"horizontal-menu"}"></g><g id="${"sidebar-2"}"></g><g id="${"Pen"}"></g><g id="${"Pen1"}"></g><g id="${"clock"}"></g><g id="${"external-link"}"></g><g id="${"hr"}"></g><g id="${"info"}"></g><g id="${"warning"}"></g><g id="${"plus-circle"}"></g><g id="${"minus-circle"}"></g><g id="${"vue"}"></g><g id="${"cog"}"></g><g id="${"logo"}"></g><g id="${"radio-check"}"></g><g id="${"eye-slash"}"></g><g id="${"eye"}"></g><g id="${"toggle-off"}"></g><g id="${"shredder"}"></g><g id="${"spinner--loading--dots-"}"></g><g id="${"react"}"><circle cx="${"32.001"}" cy="${"31.955"}" r="${"4.478"}" style="${"fill:#00d8ff;"}"></circle><path d="${"M32.33,22.516c7.635,0.052 15.965,0.609 21.683,5.708c0.168,0.15 0.33,0.306 0.488,0.467c1.349,1.375 2.054,3.595 0.965,5.422c-2.234,3.751 -7.23,5.387 -12.067,6.394c-7.234,1.506 -14.798,1.518 -22.029,0.192c-4.161,-0.764 -8.416,-2.103 -11.373,-4.904c-1.151,-1.09 -2.135,-2.524 -1.981,-4.12c0.25,-2.582 2.727,-4.239 4.812,-5.361c5.791,-3.116 12.847,-3.813 19.502,-3.798Zm-0.554,1.173c-7.224,0.049 -15.043,0.51 -20.621,5.129c-0.195,0.161 -0.383,0.33 -0.564,0.507c-0.117,0.114 -0.23,0.233 -0.339,0.355c-0.979,1.1 -1.316,2.867 -0.392,4.188c0.93,1.329 2.342,2.288 3.796,3.07c5.438,2.924 11.864,3.443 18.129,3.465c6.343,0.023 12.884,-0.555 18.487,-3.452c2.232,-1.155 4.744,-2.851 4.655,-5.035c-0.082,-2.004 -2.036,-3.242 -3.499,-4.126c-0.396,-0.239 -0.803,-0.46 -1.216,-0.668c-5.562,-2.787 -12.08,-3.447 -18.436,-3.433Z"}" style="${"fill:#00d8ff;"}"></path><path d="${"M42.115,10.703c2.793,0.071 4.24,3.429 4.431,5.909c0.038,0.493 0.052,0.988 0.046,1.483c-0.006,0.536 -0.035,1.072 -0.082,1.606c-0.589,6.612 -3.608,12.909 -7.163,18.724c-3.477,5.688 -7.717,11.36 -13.485,13.996c-1.907,0.872 -4.175,1.41 -5.863,0.437c-2.314,-1.333 -2.567,-4.451 -2.524,-6.816c0.011,-0.581 0.049,-1.162 0.109,-1.741c0.889,-8.56 5.228,-16.669 10.658,-23.655c3.168,-4.076 6.937,-8.119 11.632,-9.583c0.739,-0.231 1.326,-0.371 2.241,-0.36Zm-0.134,1.172c-3.279,0.052 -6.223,2.482 -8.83,5.007c-6.854,6.637 -11.905,15.464 -13.937,24.721c-0.157,0.717 -0.289,1.439 -0.386,2.166c-0.075,0.563 -0.13,1.129 -0.159,1.697c-0.023,0.452 -0.031,0.905 -0.017,1.358c0.01,0.354 0.033,0.708 0.072,1.06c0.029,0.269 0.068,0.537 0.117,0.803c0.037,0.197 0.08,0.393 0.13,0.588c0.041,0.158 0.087,0.315 0.139,0.471c0.409,1.233 1.463,2.411 2.878,2.45c3.301,0.09 6.409,-2.317 9.096,-4.933c4.717,-4.591 8.232,-10.36 10.978,-16.424c2.216,-4.896 4.243,-10.218 3.111,-15.607c-0.043,-0.204 -0.093,-0.406 -0.15,-0.606c-0.047,-0.163 -0.1,-0.324 -0.158,-0.483c-0.44,-1.199 -1.475,-2.271 -2.884,-2.268Z"}" style="${"fill:#00d8ff;"}"></path><path d="${"M22.109,10.747c3.564,0.069 6.765,2.488 9.607,5.197c5.186,4.943 9.011,11.231 11.913,17.849c2.248,5.127 4.316,10.882 2.478,16.292c-0.579,1.705 -2.044,3.265 -3.997,3.305c-3.581,0.072 -6.9,-2.532 -9.78,-5.335c-7.225,-7.034 -12.589,-16.32 -14.427,-26.168c-0.132,-0.704 -0.237,-1.414 -0.309,-2.127c-0.059,-0.582 -0.096,-1.167 -0.106,-1.752c-0.008,-0.472 0.002,-0.944 0.035,-1.414c0.022,-0.314 0.054,-0.626 0.097,-0.937c0.041,-0.292 0.093,-0.583 0.158,-0.871c0.043,-0.191 0.091,-0.38 0.146,-0.568c0.539,-1.843 1.941,-3.485 4.185,-3.471Zm-0.135,1.173c-2.087,0.046 -3.042,2.507 -3.234,4.234c-0.039,0.354 -0.063,0.711 -0.074,1.068c-0.014,0.456 -0.008,0.913 0.015,1.369c0.328,6.599 3.278,12.979 6.838,18.821c3.352,5.5 7.4,10.978 12.968,13.794c1.608,0.813 3.562,1.452 4.951,0.684c1.742,-0.964 1.956,-3.261 2.049,-4.973c0.025,-0.466 0.028,-0.934 0.013,-1.401c-0.018,-0.586 -0.064,-1.171 -0.133,-1.753c-0.642,-5.437 -3.05,-10.582 -5.816,-15.444c-3.442,-6.048 -7.659,-12.076 -13.627,-15.225c-1.236,-0.652 -2.574,-1.185 -3.95,-1.174Z"}" style="${"fill:#00d8ff;"}"></path></g><g id="${"check-selected"}"></g><g id="${"turn-off"}"></g><g id="${"code-block"}"></g><g id="${"user"}"></g><g id="${"coffee-bean"}"></g><g id="${"coffee-beans"}"><g id="${"coffee-bean1"}"></g></g><g id="${"coffee-bean-filled"}"></g><g id="${"coffee-beans-filled"}"><g id="${"coffee-bean2"}"></g></g><g id="${"clipboard"}"></g><g id="${"clipboard-paste"}"></g><g id="${"clipboard-copy"}"></g><g id="${"Layer1"}"></g></g></g></svg>
        <p>React</p></div>

    <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"#000000"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><title>file_type_tailwind</title><path d="${"M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"}" style="${"fill:#44a8b3"}"></path></g></svg>
        <p>Tailwind</p></div>
    <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"#000000"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><title>file_type_firebase</title><path d="${"M5.8,24.6l.17-.237L13.99,9.149l.017-.161L10.472,2.348a.656.656,0,0,0-1.227.207Z"}" style="${"fill:#ffc24a"}"></path><path d="${"M5.9,24.42l.128-.25L13.965,9.114,10.439,2.448a.6.6,0,0,0-1.133.206Z"}" style="${"fill:#ffa712"}"></path><path d="${"M16.584,14.01l2.632-2.7L16.583,6.289a.678.678,0,0,0-1.195,0L13.981,8.971V9.2Z"}" style="${"fill:#f4bd62"}"></path><path d="${"M16.537,13.9l2.559-2.62L16.537,6.4a.589.589,0,0,0-1.074-.047L14.049,9.082l-.042.139Z"}" style="${"fill:#ffa50e"}"></path><polygon points="${"5.802 24.601 5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601"}" style="${"fill:#f6820c"}"></polygon><path d="${"M16.912,29.756,26.2,24.577,23.546,8.246A.635.635,0,0,0,22.471,7.9L5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0"}" style="${"fill:#fde068"}"></path><path d="${"M26.115,24.534,23.483,8.326a.557.557,0,0,0-.967-.353L5.9,24.569l9.131,5.1a1.912,1.912,0,0,0,1.863,0Z"}" style="${"fill:#fcca3f"}"></path><path d="${"M16.912,29.6a1.927,1.927,0,0,1-1.878,0L5.876,24.522,5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0L26.2,24.577l-.023-.14Z"}" style="${"fill:#eeab37"}"></path></g></svg>
        <p>Firebase</p></div>

    <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 256 256"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" preserveAspectRatio="${"xMidYMid"}" fill="${"#000000"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><g><rect fill="${"#092E20"}" x="${"0"}" y="${"0"}" width="${"256"}" height="${"256"}" rx="${"28"}"></rect><path d="${"M186.377012,94.197636 L186.377012,160.424478 C186.377012,183.243286 184.707519,194.187745 179.699037,203.649406 C175.060358,212.741266 168.937684,218.490548 156.323731,224.798721 L129.794937,212.183571 C142.410087,206.247593 148.531564,201.05481 152.427049,193.074749 C156.509231,184.91278 157.808923,175.451119 157.808923,150.593015 L157.808923,94.197636 L186.377012,94.197636 Z M140.928486,50.0787207 L140.928486,182.316986 C126.272844,185.099476 115.512688,186.212472 103.826231,186.212472 C68.9487718,186.212472 50.7686431,170.445031 50.7686431,140.205054 C50.7686431,111.079269 70.0629644,92.1583404 99.9295492,92.1583404 C104.567032,92.1583404 108.091519,92.5281423 112.359199,93.6411381 L112.359199,50.0787207 L140.928486,50.0787207 Z M102.713236,115.160254 C88.243093,115.160254 79.8944275,124.065418 79.8944275,139.647359 C79.8944275,154.860696 87.8720944,163.208164 102.527736,163.208164 C105.680028,163.208164 108.278215,163.022665 112.359199,162.467364 L112.359199,116.643052 C109.020212,115.531253 106.237722,115.160254 102.713236,115.160254 Z M186.377012,50.2307105 L186.377012,79.5419941 L157.808923,79.5419941 L157.808923,50.2307105 L186.377012,50.2307105 Z"}" fill="${"#FFFFFD"}"></path></g></g></svg>
        <p>Django</p></div>

    <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"#000000"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><title>file_type_svelte</title><path d="${"M26.47,5.7A8.973,8.973,0,0,0,14.677,3.246L7.96,7.4a7.461,7.461,0,0,0-3.481,5.009,7.686,7.686,0,0,0,.8,5.058,7.358,7.358,0,0,0-1.151,2.8,7.789,7.789,0,0,0,1.4,6.028,8.977,8.977,0,0,0,11.794,2.458L24.04,24.6a7.468,7.468,0,0,0,3.481-5.009,7.673,7.673,0,0,0-.8-5.062,7.348,7.348,0,0,0,1.152-2.8A7.785,7.785,0,0,0,26.47,5.7"}" style="${"fill:#ff3e00"}"></path><path d="${"M14.022,26.64A5.413,5.413,0,0,1,8.3,24.581a4.678,4.678,0,0,1-.848-3.625,4.307,4.307,0,0,1,.159-.61l.127-.375.344.238a8.76,8.76,0,0,0,2.628,1.274l.245.073-.025.237a1.441,1.441,0,0,0,.271.968,1.63,1.63,0,0,0,1.743.636,1.512,1.512,0,0,0,.411-.175l6.7-4.154a1.366,1.366,0,0,0,.633-.909,1.407,1.407,0,0,0-.244-1.091,1.634,1.634,0,0,0-1.726-.622,1.509,1.509,0,0,0-.413.176l-2.572,1.584a4.934,4.934,0,0,1-1.364.582,5.415,5.415,0,0,1-5.727-2.06A4.678,4.678,0,0,1,7.811,13.1,4.507,4.507,0,0,1,9.9,10.09l6.708-4.154a4.932,4.932,0,0,1,1.364-.581A5.413,5.413,0,0,1,23.7,7.414a4.679,4.679,0,0,1,.848,3.625,4.272,4.272,0,0,1-.159.61l-.127.375-.344-.237a8.713,8.713,0,0,0-2.628-1.274l-.245-.074.025-.237a1.438,1.438,0,0,0-.272-.968,1.629,1.629,0,0,0-1.725-.622,1.484,1.484,0,0,0-.411.176l-6.722,4.14a1.353,1.353,0,0,0-.631.908,1.394,1.394,0,0,0,.244,1.092,1.634,1.634,0,0,0,1.726.621,1.538,1.538,0,0,0,.413-.175l2.562-1.585a4.9,4.9,0,0,1,1.364-.581,5.417,5.417,0,0,1,5.728,2.059,4.681,4.681,0,0,1,.843,3.625A4.5,4.5,0,0,1,22.1,21.905l-6.707,4.154a4.9,4.9,0,0,1-1.364.581"}" style="${"fill:#fff"}"></path></g></svg>
        <p>Svelte</p></div>

    <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"#000000"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><title>file_type_mysql</title><path d="${"M8.785,6.865a3.055,3.055,0,0,0-.785.1V7h.038a6.461,6.461,0,0,0,.612.785c.154.306.288.611.441.917.019-.019.038-.039.038-.039a1.074,1.074,0,0,0,.4-.957,4.314,4.314,0,0,1-.23-.4c-.115-.191-.364-.287-.517-.44"}" style="${"fill:#5d87a1;fill-rule:evenodd"}"></path><path d="${"M27.78,23.553a8.849,8.849,0,0,0-3.712.536c-.287.115-.745.115-.785.478.154.153.172.4.307.613a4.467,4.467,0,0,0,.995,1.167c.4.306.8.611,1.225.879.745.461,1.588.728,2.314,1.187.422.268.842.612,1.264.9.21.153.343.4.611.5v-.058a3.844,3.844,0,0,0-.291-.613c-.191-.19-.383-.363-.575-.554a9.118,9.118,0,0,0-1.99-1.932c-.613-.422-1.953-1-2.2-1.7l-.039-.039a7.69,7.69,0,0,0,1.321-.308c.65-.172,1.243-.133,1.912-.3.307-.077.862-.268.862-.268v-.3c-.342-.34-.587-.795-.947-1.116a25.338,25.338,0,0,0-3.122-2.328c-.587-.379-1.344-.623-1.969-.946-.226-.114-.6-.17-.737-.36a7.594,7.594,0,0,1-.776-1.457c-.548-1.04-1.079-2.193-1.551-3.293a20.236,20.236,0,0,0-.965-2.157A19.078,19.078,0,0,0,11.609,5a9.07,9.07,0,0,0-2.421-.776c-.474-.02-.946-.057-1.419-.075A7.55,7.55,0,0,1,6.9,3.485C5.818,2.8,3.038,1.328,2.242,3.277,1.732,4.508,3,5.718,3.435,6.343A8.866,8.866,0,0,1,4.4,7.762c.133.322.171.663.3,1A22.556,22.556,0,0,0,5.687,11.3a8.946,8.946,0,0,0,.7,1.172c.153.209.417.3.474.645a5.421,5.421,0,0,0-.436,1.419,8.336,8.336,0,0,0,.549,6.358c.3.473,1.022,1.514,1.987,1.116.851-.34.662-1.419.908-2.364.056-.229.019-.379.132-.53V19.3s.483,1.061.723,1.6a10.813,10.813,0,0,0,2.4,2.59A3.514,3.514,0,0,1,14,24.657V25h.427A1.054,1.054,0,0,0,14,24.212a9.4,9.4,0,0,1-.959-1.16,24.992,24.992,0,0,1-2.064-3.519c-.3-.6-.553-1.258-.793-1.857-.11-.231-.11-.58-.295-.7a7.266,7.266,0,0,0-.884,1.313,11.419,11.419,0,0,0-.517,2.921c-.073.02-.037,0-.073.038-.589-.155-.792-.792-1.014-1.332a8.756,8.756,0,0,1-.166-5.164c.128-.405.683-1.681.461-2.068-.111-.369-.48-.58-.682-.871a7.767,7.767,0,0,1-.663-1.237C5.912,9.5,5.69,8.3,5.212,7.216a10.4,10.4,0,0,0-.921-1.489A9.586,9.586,0,0,1,3.276,4.22c-.092-.213-.221-.561-.074-.793a.3.3,0,0,1,.259-.252c.238-.212.921.058,1.16.174a9.2,9.2,0,0,1,1.824.967c.258.194.866.685.866.685h.18c.612.133,1.3.037,1.876.21a12.247,12.247,0,0,1,2.755,1.32,16.981,16.981,0,0,1,5.969,6.545c.23.439.327.842.537,1.3.4.94.9,1.9,1.3,2.814a12.578,12.578,0,0,0,1.36,2.564c.286.4,1.435.612,1.952.822a13.7,13.7,0,0,1,1.32.535c.651.4,1.3.861,1.913,1.3.305.23,1.262.708,1.32,1.091"}" style="${"fill:#00758f;fill-rule:evenodd"}"></path></g></svg>
        <p>MySQL</p></div>

    <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path d="${"M6 28L4 3H28L26 28L16 31L6 28Z"}" fill="${"#1172B8"}"></path><path d="${"M26 5H16V29.5L24 27L26 5Z"}" fill="${"#33AADD"}"></path><path d="${"M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"}" fill="${"white"}"></path></g></svg>
        <p>CSS</p></div>

    <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path d="${"M6 28L4 3H28L26 28L16 31L6 28Z"}" fill="${"#E44D26"}"></path><path d="${"M26 5H16V29.5L24 27L26 5Z"}" fill="${"#F16529"}"></path><path d="${"M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"}" fill="${"white"}"></path></g></svg>
        <p>HTML</p></div></div>
${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        body: () => {
          return `<div slot="${"body"}" class="${"flex flex-wrap min-w-full text-center justify-center items-center gap-6 mt-15"}"><div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" fill="${"#000000"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><defs><linearGradient id="${"a"}" x1="${"4.494"}" y1="${"-2092.086"}" x2="${"13.832"}" y2="${"-2075.914"}" gradientTransform="${"translate(0 2100)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0"}" stop-color="${"#18884f"}"></stop><stop offset="${"0.5"}" stop-color="${"#117e43"}"></stop><stop offset="${"1"}" stop-color="${"#0b6631"}"></stop></linearGradient></defs><title>file_type_excel</title><path d="${"M19.581,15.35,8.512,13.4V27.809A1.192,1.192,0,0,0,9.705,29h19.1A1.192,1.192,0,0,0,30,27.809h0V22.5Z"}" style="${"fill:#185c37"}"></path><path d="${"M19.581,3H9.705A1.192,1.192,0,0,0,8.512,4.191h0V9.5L19.581,16l5.861,1.95L30,16V9.5Z"}" style="${"fill:#21a366"}"></path><path d="${"M8.512,9.5H19.581V16H8.512Z"}" style="${"fill:#107c41"}"></path><path d="${"M16.434,8.2H8.512V24.45h7.922a1.2,1.2,0,0,0,1.194-1.191V9.391A1.2,1.2,0,0,0,16.434,8.2Z"}" style="${"opacity:0.10000000149011612;isolation:isolate"}"></path><path d="${"M15.783,8.85H8.512V25.1h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z"}" style="${"opacity:0.20000000298023224;isolation:isolate"}"></path><path d="${"M15.783,8.85H8.512V23.8h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z"}" style="${"opacity:0.20000000298023224;isolation:isolate"}"></path><path d="${"M15.132,8.85H8.512V23.8h6.62a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.132,8.85Z"}" style="${"opacity:0.20000000298023224;isolation:isolate"}"></path><path d="${"M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z"}" style="${"fill:url(#a)"}"></path><path d="${"M5.7,19.873l2.511-3.884-2.3-3.862H7.758L9.013,14.6c.116.234.2.408.238.524h.017c.082-.188.169-.369.26-.546l1.342-2.447h1.7l-2.359,3.84,2.419,3.905H10.821l-1.45-2.711A2.355,2.355,0,0,1,9.2,16.8H9.176a1.688,1.688,0,0,1-.168.351L7.515,19.873Z"}" style="${"fill:#fff"}"></path><path d="${"M28.806,3H19.581V9.5H30V4.191A1.192,1.192,0,0,0,28.806,3Z"}" style="${"fill:#33c481"}"></path><path d="${"M19.581,16H30v6.5H19.581Z"}" style="${"fill:#107c41"}"></path></g></svg>
                <p>Excel</p></div>
            <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><rect x="${"10"}" y="${"2"}" width="${"20"}" height="${"28"}" rx="${"2"}" fill="${"#1066B5"}"></rect><rect x="${"10"}" y="${"2"}" width="${"20"}" height="${"28"}" rx="${"2"}" fill="${"url(#paint0_linear_87_7742)"}"></rect><rect x="${"10"}" y="${"5"}" width="${"10"}" height="${"10"}" fill="${"#32A9E7"}"></rect><rect x="${"10"}" y="${"15"}" width="${"10"}" height="${"10"}" fill="${"#167EB4"}"></rect><rect x="${"20"}" y="${"15"}" width="${"10"}" height="${"10"}" fill="${"#32A9E7"}"></rect><rect x="${"20"}" y="${"5"}" width="${"10"}" height="${"10"}" fill="${"#58D9FD"}"></rect><mask id="${"mask0_87_7742"}" style="${"mask-type:alpha"}" maskUnits="${"userSpaceOnUse"}" x="${"8"}" y="${"14"}" width="${"24"}" height="${"16"}"><path d="${"M8 14H30C31.1046 14 32 14.8954 32 16V28C32 29.1046 31.1046 30 30 30H10C8.89543 30 8 29.1046 8 28V14Z"}" fill="${"url(#paint1_linear_87_7742)"}"></path></mask><g mask="${"url(#mask0_87_7742)"}"><path d="${"M32 14V18H30V14H32Z"}" fill="${"#135298"}"></path><path d="${"M32 30V16L7 30H32Z"}" fill="${"url(#paint2_linear_87_7742)"}"></path><path d="${"M8 30V16L33 30H8Z"}" fill="${"url(#paint3_linear_87_7742)"}"></path></g><path d="${"M8 12C8 10.3431 9.34315 9 11 9H17C18.6569 9 20 10.3431 20 12V24C20 25.6569 18.6569 27 17 27H8V12Z"}" fill="${"#000000"}" fill-opacity="${"0.3"}"></path><rect y="${"7"}" width="${"18"}" height="${"18"}" rx="${"2"}" fill="${"url(#paint4_linear_87_7742)"}"></rect><path d="${"M14 16.0693V15.903C14 13.0222 11.9272 11 9.01582 11C6.08861 11 4 13.036 4 15.9307V16.097C4 18.9778 6.07278 21 9 21C11.9114 21 14 18.964 14 16.0693ZM11.6424 16.097C11.6424 18.0083 10.5665 19.1579 9.01582 19.1579C7.46519 19.1579 6.37342 17.9806 6.37342 16.0693V15.903C6.37342 13.9917 7.44937 12.8421 9 12.8421C10.5348 12.8421 11.6424 14.0194 11.6424 15.9307V16.097Z"}" fill="${"white"}"></path><defs><linearGradient id="${"paint0_linear_87_7742"}" x1="${"10"}" y1="${"16"}" x2="${"30"}" y2="${"16"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#064484"}"></stop><stop offset="${"1"}" stop-color="${"#0F65B5"}"></stop></linearGradient><linearGradient id="${"paint1_linear_87_7742"}" x1="${"8"}" y1="${"26.7692"}" x2="${"32"}" y2="${"26.7692"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#1B366F"}"></stop><stop offset="${"1"}" stop-color="${"#2657B0"}"></stop></linearGradient><linearGradient id="${"paint2_linear_87_7742"}" x1="${"32"}" y1="${"23"}" x2="${"8"}" y2="${"23"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#44DCFD"}"></stop><stop offset="${"0.453125"}" stop-color="${"#259ED0"}"></stop></linearGradient><linearGradient id="${"paint3_linear_87_7742"}" x1="${"8"}" y1="${"23"}" x2="${"32"}" y2="${"23"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#259ED0"}"></stop><stop offset="${"1"}" stop-color="${"#44DCFD"}"></stop></linearGradient><linearGradient id="${"paint4_linear_87_7742"}" x1="${"0"}" y1="${"16"}" x2="${"18"}" y2="${"16"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#064484"}"></stop><stop offset="${"1"}" stop-color="${"#0F65B5"}"></stop></linearGradient></defs></g></svg>
                <p>Outlook</p></div>
            <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" fill="${"#000000"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><defs><linearGradient id="${"a"}" x1="${"4.494"}" y1="${"-1748.086"}" x2="${"13.832"}" y2="${"-1731.914"}" gradientTransform="${"translate(0 1756)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0"}" stop-color="${"#ca4c28"}"></stop><stop offset="${"0.5"}" stop-color="${"#c5401e"}"></stop><stop offset="${"1"}" stop-color="${"#b62f14"}"></stop></linearGradient></defs><title>file_type_powerpoint</title><path d="${"M18.93,17.3,16.977,3h-.146A12.9,12.9,0,0,0,3.953,15.854V16Z"}" style="${"fill:#ed6c47"}"></path><path d="${"M17.123,3h-.146V16l6.511,2.6L30,16v-.146A12.9,12.9,0,0,0,17.123,3Z"}" style="${"fill:#ff8f6b"}"></path><path d="${"M30,16v.143A12.905,12.905,0,0,1,17.12,29h-.287A12.907,12.907,0,0,1,3.953,16.143V16Z"}" style="${"fill:#d35230"}"></path><path d="${"M17.628,9.389V23.26a1.2,1.2,0,0,1-.742,1.1,1.16,1.16,0,0,1-.45.091H7.027c-.182-.208-.358-.429-.521-.65a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85c.143-.221.293-.442.456-.65h9.93A1.2,1.2,0,0,1,17.628,9.389Z"}" style="${"opacity:0.10000000149011612;isolation:isolate"}"></path><path d="${"M16.977,10.04V23.911a1.15,1.15,0,0,1-.091.448,1.2,1.2,0,0,1-1.1.741H7.62q-.309-.314-.593-.65c-.182-.208-.358-.429-.521-.65a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.735A1.2,1.2,0,0,1,16.977,10.04Z"}" style="${"opacity:0.20000000298023224;isolation:isolate"}"></path><path d="${"M16.977,10.04V22.611A1.2,1.2,0,0,1,15.785,23.8H6.506a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.735A1.2,1.2,0,0,1,16.977,10.04Z"}" style="${"opacity:0.20000000298023224;isolation:isolate"}"></path><path d="${"M16.326,10.04V22.611A1.2,1.2,0,0,1,15.134,23.8H6.506a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.084A1.2,1.2,0,0,1,16.326,10.04Z"}" style="${"opacity:0.20000000298023224;isolation:isolate"}"></path><path d="${"M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z"}" style="${"fill:url(#a)"}"></path><path d="${"M9.293,12.028a3.287,3.287,0,0,1,2.174.636,2.27,2.27,0,0,1,.756,1.841,2.555,2.555,0,0,1-.373,1.376,2.49,2.49,0,0,1-1.059.935A3.607,3.607,0,0,1,9.2,17.15H7.687v2.8H6.141V12.028ZM7.686,15.94H9.017a1.735,1.735,0,0,0,1.177-.351,1.3,1.3,0,0,0,.4-1.025q0-1.309-1.525-1.31H7.686V15.94Z"}" style="${"fill:#fff"}"></path></g></svg>
                <p>PowerPoint</p></div>
            <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 -24 256 256"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" preserveAspectRatio="${"xMidYMid"}" fill="${"#000000"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><g><path d="${"M100.43032,115.194555 C101.361124,98.5893536 109.492492,83.9599162 121.759794,73.5893487 C133.790003,63.4031858 149.98249,57.1773328 167.650214,57.1773328 C185.300375,57.1773328 201.492862,63.4031858 213.531852,73.5893487 C225.790373,83.9599162 233.921741,98.5893536 234.861326,115.176993 C235.792131,132.238816 228.934033,148.088836 216.903824,159.838048 C204.636522,171.789227 187.188328,179.288351 167.650214,179.288351 C148.1121,179.288351 130.62878,171.789227 118.37026,159.838048 C106.331269,148.088836 99.4907342,132.238816 100.43032,115.194555 Z"}" fill="${"#FFFFFF"}"></path><path d="${"M133.167672,116.676183 C133.645276,108.155909 137.817552,100.649417 144.112012,95.3281876 C150.284817,90.1015783 158.593324,86.9070386 167.658788,86.9070386 C176.71524,86.9070386 185.023747,90.1015783 191.201058,95.3281876 C197.491012,100.649417 201.663288,108.155909 202.145398,116.667172 C202.623002,125.421743 199.104052,133.554527 192.931246,139.58315 C186.636786,145.715405 177.683965,149.563271 167.658788,149.563271 C157.63361,149.563271 148.662766,145.715405 142.372812,139.58315 C136.195501,133.554527 132.685562,125.421743 133.167672,116.676183 Z"}" fill="${"#265787"}"></path><path d="${"M78.4107749,134.179185 C78.4694744,137.520542 79.5350962,144.01361 81.133529,149.084344 C84.4929469,159.817323 90.1913143,169.746571 98.1202631,178.497312 C106.256918,187.491883 116.276472,194.716438 127.849305,199.845871 C140.013649,205.23268 153.193946,207.978011 166.884477,207.955572 C180.552431,207.937373 193.732728,205.137858 205.897072,199.710411 C217.469906,194.531308 227.480429,187.275146 235.603538,178.27606 C243.527971,169.489196 249.217308,159.541887 252.585757,148.808908 C254.279012,143.385977 255.349149,137.881769 255.778107,132.3595 C256.198034,126.918508 256.021935,121.468484 255.249811,116.022976 C253.741685,105.411912 250.070708,95.4555722 244.417494,86.3797254 C239.247423,78.0398801 232.582771,70.7385646 224.658338,64.5931778 L224.676399,64.5796318 L144.705094,3.1754327 C144.632849,3.12124854 144.574149,3.06254903 144.497388,3.01288022 C139.250556,-1.01480899 130.427568,-1.00126295 124.656955,3.03545695 C118.823127,7.11733032 118.154856,13.8677736 123.347505,18.1257455 L123.324928,18.1483222 L156.679794,45.2720095 L55.0167639,45.3803778 L54.8813035,45.3803778 C46.4782434,45.3894085 38.4002883,50.9026468 36.8018556,57.8698267 C35.1582694,64.9679516 40.8656676,70.8559636 49.6028633,70.887571 L49.5893173,70.9191785 L101.118453,70.8198408 L9.16793408,141.399224 C9.05053507,141.485016 8.92410536,141.575323 8.81573704,141.661114 C0.14175613,148.303189 -2.66227414,159.347727 2.80129531,166.337484 C8.34614099,173.444639 20.1357111,173.458186 28.8999989,166.378122 L79.0835616,125.306529 C79.0835616,125.306529 78.3520754,130.851375 78.4107749,134.179185 Z M207.36456,152.74629 C197.024416,163.280594 182.548215,169.254398 166.884477,169.286098 C151.198163,169.313097 136.721962,163.393478 126.381818,152.877235 C121.329145,147.752317 117.61753,141.855274 115.328249,135.574427 C113.084122,129.401948 112.21266,122.85018 112.790624,116.239713 C113.336981,109.778252 115.260519,103.614804 118.330955,98.0383504 C121.347206,92.5567196 125.501325,87.6033843 130.630759,83.4131426 C140.681921,75.2223038 153.478413,70.7882334 166.8619,70.7701166 C180.258934,70.7521106 193.046396,75.1455429 203.106588,83.3092897 C208.226991,87.48147 212.376595,92.4167439 215.392846,97.889344 C218.476828,103.461282 220.38682,109.602153 220.955753,116.081676 C221.524687,122.683112 220.653225,129.22585 218.409098,135.402844 C216.115302,141.701753 212.417233,147.598795 207.36456,152.74629 Z"}" fill="${"#EA7600"}"></path></g></g></svg>
                <p>Blender</p></div>
            <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path d="${"M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z"}" fill="${"#001E36"}"></path><path d="${"M8 22.5162V10.2034C8 10.1197 8.035 10.0718 8.11667 10.0718C9.3223 10.0718 10.5274 10 11.7333 10C13.6902 10 15.809 10.6691 16.5517 12.7162C16.7267 13.2188 16.82 13.7333 16.82 14.2718C16.82 15.3009 16.5867 16.1504 16.12 16.8205C14.8164 18.6923 12.557 18.6632 10.5317 18.6632V22.5043C10.5475 22.618 10.4506 22.6718 10.3567 22.6718H8.14C8.04667 22.6718 8 22.6239 8 22.5162ZM10.5433 12.3812V16.4017C11.3464 16.4605 12.1867 16.4669 12.9583 16.2103C13.8102 15.9645 14.2767 15.2272 14.2767 14.3436C14.3003 13.5907 13.8901 12.8683 13.1917 12.5966C12.4294 12.2796 11.3662 12.2606 10.5433 12.3812Z"}" fill="${"#31A8FF"}"></path><path d="${"M24.0967 15.6074C23.7437 15.4213 23.3677 15.2852 22.979 15.2028C22.4796 15.0853 20.5098 14.6737 20.509 15.7037C20.5265 16.2787 21.4393 16.5604 21.8426 16.7247C23.2585 17.2108 24.8607 18.0797 24.8292 19.8264C24.8725 22.0008 22.7657 22.8701 20.9598 22.8703C20.0197 22.88 19.0403 22.7344 18.1799 22.3308C18.0977 22.2873 18.0449 22.1944 18.0484 22.0996V20.019C18.0391 19.9356 18.1287 19.8627 18.1987 19.9227C19.0417 20.4325 20.0409 20.6801 21.0162 20.6933C21.4467 20.6933 22.2999 20.6516 22.2935 20.019C22.2935 19.412 21.2728 19.1329 20.8659 18.9787C20.2761 18.7682 19.7169 18.4765 19.2036 18.1118C18.4862 17.6001 18.0362 16.7797 18.0484 15.8771C18.0442 13.8297 19.9835 12.9107 21.73 12.9103C22.5464 12.9035 23.4232 12.964 24.1832 13.2956C24.2925 13.3277 24.3151 13.4429 24.3147 13.546V15.4918C24.3216 15.6126 24.1875 15.6537 24.0967 15.6074Z"}" fill="${"#31A8FF"}"></path></g></svg>
                <p>Photoshop</p></div>
            <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 32 32"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path d="${"M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z"}" fill="${"#001E36"}"></path><path d="${"M16.7052 22.6201H9.30453C9.17926 22.6201 9.11665 22.5494 9.11671 22.4082V10.1749C9.10285 10.0754 9.18875 9.98729 9.28578 10.0015H11.5774C11.6528 9.99061 11.7193 10.0602 11.7088 10.1364V20.1927H17.0997C17.2123 20.1927 17.2562 20.2505 17.2311 20.3661L16.893 22.4467C16.8901 22.5515 16.8041 22.619 16.7052 22.6201Z"}" fill="${"#31A8FF"}"></path><path d="${"M18.5853 13.0319H20.6327C20.7456 13.0329 20.847 13.1129 20.8769 13.2246C21.0269 13.5663 21.0454 13.9783 21.046 14.3472C21.3971 13.9279 21.8205 13.5785 22.295 13.3166C22.804 13.0212 23.381 12.8715 23.9657 12.8831C24.0627 12.8689 24.1486 12.957 24.1347 13.0565V15.3876C24.1347 15.4776 24.0719 15.5224 23.9469 15.5224C23.0803 15.4611 21.7311 15.6711 21.1014 16.3701V22.4312C21.1014 22.5468 21.0513 22.6046 20.9511 22.6046H18.7544C18.6465 22.6204 18.5513 22.5208 18.5665 22.4119V15.8307C18.5665 14.9488 18.5852 14.0404 18.4538 13.1668C18.4336 13.0864 18.5087 13.0117 18.5853 13.0319Z"}" fill="${"#31A8FF"}"></path></g></svg>
                <p>Lightroom</p></div>
            <div><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 16 16"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path fill="${"#252F3E"}" d="${"M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.165-.315c-.415.491-.936.737-1.564.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.191-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.618.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.049-.214c0-.085.043-.133.128-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.1-.208a.365.365 0 01.214-.053h.425c.102 0 .17.016.213.053.043.032.08.107.101.208l.841 3.578.92-3.578a.458.458 0 01.107-.208.346.346 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.76.76 0 01-.038.133l-1.283 4.127c-.032.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.378.378 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.46.46 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.427 2.427 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.436 1.436 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z"}"></path><g fill="${"#F90"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}"><path d="${"M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z"}"></path><path d="${"M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.218-.1.213-.53.687-1.72.463-2.003z"}"></path></g></g></svg>
                <p>AWS</p></div></div>`;
        },
        header: () => {
          return `<div slot="${"header"}" class="${"mt-10 text-3xl flex justify-center items-center"}"><h2>Honorable mentions</h2>
            <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"}"></path></svg></div>`;
        }
      })}`;
    }
  })}</div>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hidden8 = true;
  let transitionParamsBottom = { y: 320, duration: 200, easing: sineIn };
  let name = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"flex flex-wrap justify-center item-center bg-blue-100 dark:bg-gray-200 min-w-full p-4"}"><div class="${"min-w-full text-center "}" id="${"contact"}"><h1 class="${"text-2xl"}">Reach out!</h1>
		<h2>Don&#39;t hesitate to get in touch with me via your preferred method or the provided contact form.
		</h2>
		<h2>We can connect on <a class="${"text-blue-500"}" href="${"https://www.linkedin.com/in/arielfernandez412/"}">LinkedIn</a>,
		</h2>
		<h2>we can also connect through <a class="${"text-blue-500"}" href="${"mailto:Arielf412@me.com?subject=Your%20portfolio%20is%20AWESOME!%20Lets%20Connect!&body=Hey%20Ariel!%0D%0A%0D%0A%0D%0AMy%20name%20is%20<YourName>,%20and%20I'm%20in%20the%20business%20of%20<Industry you work in>.%0D%0AI’d%20love%20to%20talk%20about%20your%20software%20engineering%20ambitions.%20"}">Email</a></h2></div>

	<div class="${"text-center"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Contact Form`;
      }
    })}
    <p class="${"text-xs"}">(yes the form actually works)</p></div>
	${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        placement: "bottom",
        width: "w-full",
        transitionType: "fly",
        transitionParams: transitionParamsBottom,
        id: "sidebar8",
        hidden: hidden8
      },
      {
        hidden: ($$value) => {
          hidden8 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form class="${"min-w-full"}" action="${"https://formspree.io/f/meqwkpyk"}" method="${"POST"}"><div class="${"flex gap-2 flex-wrap justify-center"}">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 min-w-full" }, {}, {
            default: () => {
              return `${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  placeholder: "Full Name",
                  size: "md",
                  name: "name",
                  class: "min-w-full",
                  value: name
                },
                {
                  value: ($$value) => {
                    name = $$value;
                    $$settled = false;
                  }
                },
                {
                  right: () => {
                    return `<svg slot="${"right"}" aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"w-5 h-5"}"><path d="${"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"}"></path></svg>`;
                  }
                }
              )}`;
            }
          })}
				${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 min-w-full" }, {}, {
            default: () => {
              return `${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "number",
                  name: "number",
                  placeholder: "Phone Number",
                  size: "md"
                },
                {},
                {
                  right: () => {
                    return `<svg slot="${"right"}" aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"w-5 h-5"}"><path d="${"M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"}"></path><path fill-rule="${"evenodd"}" d="${"M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z"}" clip-rule="${"evenodd"}"></path></svg>`;
                  }
                }
              )}`;
            }
          })}
				${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 min-w-full" }, {}, {
            default: () => {
              return `${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "email",
                  placeholder: "Email",
                  name: "email",
                  size: "md",
                  class: "min-w-full"
                },
                {},
                {
                  right: () => {
                    return `<svg slot="${"right"}" aria-hidden="${"true"}" class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}"></path><path d="${"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}"></path></svg>`;
                  }
                }
              )}`;
            }
          })}
        ${validate_component(Input, "Input").$$render(
            $$result,
            {
              name: "subject",
              type: "hidden",
              value: "New submission from " + name
            },
            {},
            {}
          )}
				${validate_component(Textarea, "Textarea").$$render(
            $$result,
            {
              id: "textarea-id",
              placeholder: "Your message",
              rows: "4",
              name: "message"
            },
            {},
            {}
          )}</div>

			${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
            default: () => {
              return `Submit`;
            }
          })}</form>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-wrap justify-center min-w-full text-center dark:text-gray-200 p-4"}" id="${"projects"}"><div class="${"flex flex-wrap justify-center "}" style="${"width:15rem"}"><img src="${"https://i.imgur.com/KLu5a5o.gif"}" alt="${""}">
        <h2 class="${"min-w-full"}">JavaScript | CSS | HTML </h2>
        <div class="${"flex"}"><a href="${"https://github.com/RielDreams/AnimeLookUp"}"><svg fill="${"#000000"}" width="${"64px"}" height="${"64px"}" viewBox="${"-6 0 32 32"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><title>github</title><path d="${"M18.36 9.28c0.48-1.72-0.24-3.6-0.28-3.72-0.12-0.28-0.4-0.52-0.72-0.52-0.080 0-1.92-0.16-3.76 1.24-1.44-0.28-3.080-0.36-3.16-0.36-0.040 0-0.040 0-0.080 0-0.080 0-1.72 0.080-3.16 0.36-1.84-1.4-3.68-1.24-3.76-1.24-0.32 0.040-0.6 0.24-0.72 0.52-0.040 0.080-0.8 2-0.28 3.72-0.92 1.28-1.64 2.96-1 5.96 0.6 2.72 2.84 4.24 5.16 4.76-0.2 0.56-0.28 1.24-0.36 1.96-0.96 0.040-1.56-0.52-2.4-1.4-0.72-0.76-1.52-1.64-2.84-1.92-0.44-0.12-0.88 0.16-1 0.64-0.080 0.48 0.2 0.92 0.68 1 0.76 0.16 1.28 0.72 1.92 1.4 0.84 0.88 1.8 1.96 3.52 1.96 0 0 0.040 0 0.040 0 0 0.92 0.080 1.8 0.12 2.52 0.040 0.48 0.44 0.8 0.92 0.76s0.8-0.44 0.76-0.92c-0.24-2.72-0.040-5.6 0.4-6 0.32-0.2 0.52-0.56 0.4-0.96-0.080-0.36-0.4-0.64-0.8-0.64-0.36 0-4.12-0.2-4.84-3.52-0.6-2.72 0.16-3.92 0.96-4.88 0.2-0.24 0.24-0.6 0.12-0.92-0.32-0.68-0.2-1.64-0.040-2.28 0.56 0.080 1.4 0.32 2.28 1.080 0.2 0.2 0.48 0.24 0.76 0.2 1.24-0.32 2.92-0.4 3.2-0.4 0.24 0 1.96 0.080 3.2 0.4 0.28 0.080 0.56 0 0.76-0.2 0.88-0.76 1.76-1 2.28-1.080 0.16 0.6 0.28 1.56-0.040 2.28-0.12 0.28-0.080 0.64 0.12 0.92 0.8 0.96 1.52 2.16 0.96 4.88-0.72 3.32-4.48 3.52-4.92 3.56-0.4 0-0.72 0.28-0.8 0.64s0.080 0.76 0.4 0.96c0.48 0.4 0.68 3.24 0.44 6-0.040 0.48 0.32 0.88 0.76 0.92 0.040 0 0.040 0 0.080 0 0.44 0 0.8-0.32 0.84-0.76 0.16-1.76 0.28-4.48-0.28-6.2 2.32-0.48 4.56-2.040 5.16-4.76 0.64-3-0.040-4.68-1-5.96z"}"></path></g></svg></a>
            <a href="${" https://rieldreams.github.io/AnimeLookUp/"}"><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path d="${"M7.23001 18.25C6.17025 18.2535 5.15243 17.8363 4.40001 17.09C3.63614 16.2785 3.22341 15.1983 3.2515 14.0842C3.27958 12.97 3.74622 11.912 4.55001 11.14L8.31001 7.35C9.12729 6.50634 10.2456 6.0209 11.42 6C11.9475 6.00352 12.4692 6.11135 12.9549 6.3173C13.4406 6.52325 13.8807 6.82324 14.25 7.2C15.0243 8.01629 15.4433 9.10627 15.4152 10.231C15.387 11.3557 14.9141 12.4234 14.1 13.2L12.84 14.46C12.7713 14.5337 12.6885 14.5928 12.5965 14.6338C12.5045 14.6748 12.4052 14.6968 12.3045 14.6986C12.2038 14.7004 12.1038 14.6818 12.0104 14.6441C11.917 14.6064 11.8322 14.5503 11.761 14.479C11.6897 14.4078 11.6336 14.323 11.5959 14.2296C11.5582 14.1362 11.5396 14.0362 11.5414 13.9355C11.5432 13.8348 11.5652 13.7355 11.6062 13.6435C11.6472 13.5515 11.7063 13.4687 11.78 13.4L13 12.1C13.5247 11.6076 13.8338 10.9279 13.86 10.2088C13.8862 9.4897 13.6275 8.78933 13.14 8.26C12.6071 7.7953 11.9167 7.55197 11.2102 7.57986C10.5037 7.60774 9.83461 7.90474 9.34001 8.41L5.61001 12.19C5.09513 12.6812 4.79158 13.3535 4.76359 14.0646C4.73559 14.7757 4.98535 15.4698 5.46001 16C5.72088 16.2578 6.03529 16.4551 6.38093 16.5778C6.72657 16.7005 7.09497 16.7456 7.46001 16.71C7.55727 16.7004 7.65547 16.7101 7.74895 16.7386C7.84243 16.7671 7.92934 16.8139 8.00465 16.8762C8.07996 16.9385 8.14218 17.0151 8.18773 17.1015C8.23327 17.188 8.26124 17.2827 8.27001 17.38C8.28956 17.5775 8.23003 17.7747 8.10444 17.9284C7.97885 18.0821 7.79746 18.1798 7.60001 18.2L7.23001 18.25Z"}" fill="${"#000000"}"></path><path d="${"M12.58 18C12.0525 17.9965 11.5308 17.8887 11.0451 17.6827C10.5594 17.4768 10.1193 17.1768 9.75 16.8C8.97574 15.9837 8.55674 14.8937 8.58486 13.769C8.61297 12.6443 9.08592 11.5766 9.9 10.8L11.16 9.54C11.2287 9.46632 11.3115 9.40721 11.4035 9.36622C11.4955 9.32523 11.5948 9.30319 11.6955 9.30141C11.7962 9.29964 11.8962 9.31816 11.9896 9.35588C12.083 9.3936 12.1678 9.44975 12.239 9.52097C12.3103 9.59218 12.3664 9.67702 12.4041 9.77041C12.4418 9.86379 12.4604 9.96382 12.4586 10.0645C12.4568 10.1652 12.4348 10.2645 12.3938 10.3565C12.3528 10.4485 12.2937 10.5313 12.22 10.6L11 11.9C10.4753 12.3924 10.1662 13.0721 10.14 13.7912C10.1138 14.5103 10.3726 15.2107 10.86 15.74C11.3929 16.2047 12.0833 16.448 12.7898 16.4201C13.4963 16.3923 14.1654 16.0953 14.66 15.59L18.43 11.81C18.9393 11.3134 19.2355 10.6383 19.256 9.92727C19.2766 9.21626 19.0198 8.52513 18.54 8C18.2791 7.7422 17.9647 7.54495 17.6191 7.42224C17.2734 7.29954 16.905 7.2544 16.54 7.29C16.4427 7.29964 16.3445 7.28992 16.2511 7.2614C16.1576 7.23287 16.0707 7.18612 15.9954 7.12382C15.9201 7.06153 15.8578 6.98493 15.8123 6.89846C15.7667 6.81199 15.7388 6.71735 15.73 6.62C15.7104 6.42248 15.77 6.22527 15.8956 6.07156C16.0212 5.91786 16.2025 5.82021 16.4 5.8C16.9821 5.73967 17.5704 5.80779 18.1233 5.99959C18.6762 6.19138 19.1803 6.50216 19.6 6.91C20.3639 7.72153 20.7766 8.80172 20.7485 9.91585C20.7204 11.03 20.2538 12.088 19.45 12.86L15.69 16.65C14.8727 17.4937 13.7544 17.9791 12.58 18Z"}" fill="${"#000000"}"></path></g></svg></a></div></div>
    <div class="${"flex flex-wrap justify-center "}" style="${"width:15rem"}"><img src="${"https://i.imgur.com/bVCqMTC.gif"}" alt="${""}">
        
        <h2 class="${"min-w-full"}">React | Express | JavaScript </h2>
        <div class="${"flex"}"><a href="${"https://github.com/RielDreams/BloomBoards"}"><svg fill="${"#000000"}" width="${"64px"}" height="${"64px"}" viewBox="${"-6 0 32 32"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><title>github</title><path d="${"M18.36 9.28c0.48-1.72-0.24-3.6-0.28-3.72-0.12-0.28-0.4-0.52-0.72-0.52-0.080 0-1.92-0.16-3.76 1.24-1.44-0.28-3.080-0.36-3.16-0.36-0.040 0-0.040 0-0.080 0-0.080 0-1.72 0.080-3.16 0.36-1.84-1.4-3.68-1.24-3.76-1.24-0.32 0.040-0.6 0.24-0.72 0.52-0.040 0.080-0.8 2-0.28 3.72-0.92 1.28-1.64 2.96-1 5.96 0.6 2.72 2.84 4.24 5.16 4.76-0.2 0.56-0.28 1.24-0.36 1.96-0.96 0.040-1.56-0.52-2.4-1.4-0.72-0.76-1.52-1.64-2.84-1.92-0.44-0.12-0.88 0.16-1 0.64-0.080 0.48 0.2 0.92 0.68 1 0.76 0.16 1.28 0.72 1.92 1.4 0.84 0.88 1.8 1.96 3.52 1.96 0 0 0.040 0 0.040 0 0 0.92 0.080 1.8 0.12 2.52 0.040 0.48 0.44 0.8 0.92 0.76s0.8-0.44 0.76-0.92c-0.24-2.72-0.040-5.6 0.4-6 0.32-0.2 0.52-0.56 0.4-0.96-0.080-0.36-0.4-0.64-0.8-0.64-0.36 0-4.12-0.2-4.84-3.52-0.6-2.72 0.16-3.92 0.96-4.88 0.2-0.24 0.24-0.6 0.12-0.92-0.32-0.68-0.2-1.64-0.040-2.28 0.56 0.080 1.4 0.32 2.28 1.080 0.2 0.2 0.48 0.24 0.76 0.2 1.24-0.32 2.92-0.4 3.2-0.4 0.24 0 1.96 0.080 3.2 0.4 0.28 0.080 0.56 0 0.76-0.2 0.88-0.76 1.76-1 2.28-1.080 0.16 0.6 0.28 1.56-0.040 2.28-0.12 0.28-0.080 0.64 0.12 0.92 0.8 0.96 1.52 2.16 0.96 4.88-0.72 3.32-4.48 3.52-4.92 3.56-0.4 0-0.72 0.28-0.8 0.64s0.080 0.76 0.4 0.96c0.48 0.4 0.68 3.24 0.44 6-0.040 0.48 0.32 0.88 0.76 0.92 0.040 0 0.040 0 0.080 0 0.44 0 0.8-0.32 0.84-0.76 0.16-1.76 0.28-4.48-0.28-6.2 2.32-0.48 4.56-2.040 5.16-4.76 0.64-3-0.040-4.68-1-5.96z"}"></path></g></svg></a>
            <a href="${""}"><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path d="${"M7.23001 18.25C6.17025 18.2535 5.15243 17.8363 4.40001 17.09C3.63614 16.2785 3.22341 15.1983 3.2515 14.0842C3.27958 12.97 3.74622 11.912 4.55001 11.14L8.31001 7.35C9.12729 6.50634 10.2456 6.0209 11.42 6C11.9475 6.00352 12.4692 6.11135 12.9549 6.3173C13.4406 6.52325 13.8807 6.82324 14.25 7.2C15.0243 8.01629 15.4433 9.10627 15.4152 10.231C15.387 11.3557 14.9141 12.4234 14.1 13.2L12.84 14.46C12.7713 14.5337 12.6885 14.5928 12.5965 14.6338C12.5045 14.6748 12.4052 14.6968 12.3045 14.6986C12.2038 14.7004 12.1038 14.6818 12.0104 14.6441C11.917 14.6064 11.8322 14.5503 11.761 14.479C11.6897 14.4078 11.6336 14.323 11.5959 14.2296C11.5582 14.1362 11.5396 14.0362 11.5414 13.9355C11.5432 13.8348 11.5652 13.7355 11.6062 13.6435C11.6472 13.5515 11.7063 13.4687 11.78 13.4L13 12.1C13.5247 11.6076 13.8338 10.9279 13.86 10.2088C13.8862 9.4897 13.6275 8.78933 13.14 8.26C12.6071 7.7953 11.9167 7.55197 11.2102 7.57986C10.5037 7.60774 9.83461 7.90474 9.34001 8.41L5.61001 12.19C5.09513 12.6812 4.79158 13.3535 4.76359 14.0646C4.73559 14.7757 4.98535 15.4698 5.46001 16C5.72088 16.2578 6.03529 16.4551 6.38093 16.5778C6.72657 16.7005 7.09497 16.7456 7.46001 16.71C7.55727 16.7004 7.65547 16.7101 7.74895 16.7386C7.84243 16.7671 7.92934 16.8139 8.00465 16.8762C8.07996 16.9385 8.14218 17.0151 8.18773 17.1015C8.23327 17.188 8.26124 17.2827 8.27001 17.38C8.28956 17.5775 8.23003 17.7747 8.10444 17.9284C7.97885 18.0821 7.79746 18.1798 7.60001 18.2L7.23001 18.25Z"}" fill="${"#000000"}"></path><path d="${"M12.58 18C12.0525 17.9965 11.5308 17.8887 11.0451 17.6827C10.5594 17.4768 10.1193 17.1768 9.75 16.8C8.97574 15.9837 8.55674 14.8937 8.58486 13.769C8.61297 12.6443 9.08592 11.5766 9.9 10.8L11.16 9.54C11.2287 9.46632 11.3115 9.40721 11.4035 9.36622C11.4955 9.32523 11.5948 9.30319 11.6955 9.30141C11.7962 9.29964 11.8962 9.31816 11.9896 9.35588C12.083 9.3936 12.1678 9.44975 12.239 9.52097C12.3103 9.59218 12.3664 9.67702 12.4041 9.77041C12.4418 9.86379 12.4604 9.96382 12.4586 10.0645C12.4568 10.1652 12.4348 10.2645 12.3938 10.3565C12.3528 10.4485 12.2937 10.5313 12.22 10.6L11 11.9C10.4753 12.3924 10.1662 13.0721 10.14 13.7912C10.1138 14.5103 10.3726 15.2107 10.86 15.74C11.3929 16.2047 12.0833 16.448 12.7898 16.4201C13.4963 16.3923 14.1654 16.0953 14.66 15.59L18.43 11.81C18.9393 11.3134 19.2355 10.6383 19.256 9.92727C19.2766 9.21626 19.0198 8.52513 18.54 8C18.2791 7.7422 17.9647 7.54495 17.6191 7.42224C17.2734 7.29954 16.905 7.2544 16.54 7.29C16.4427 7.29964 16.3445 7.28992 16.2511 7.2614C16.1576 7.23287 16.0707 7.18612 15.9954 7.12382C15.9201 7.06153 15.8578 6.98493 15.8123 6.89846C15.7667 6.81199 15.7388 6.71735 15.73 6.62C15.7104 6.42248 15.77 6.22527 15.8956 6.07156C16.0212 5.91786 16.2025 5.82021 16.4 5.8C16.9821 5.73967 17.5704 5.80779 18.1233 5.99959C18.6762 6.19138 19.1803 6.50216 19.6 6.91C20.3639 7.72153 20.7766 8.80172 20.7485 9.91585C20.7204 11.03 20.2538 12.088 19.45 12.86L15.69 16.65C14.8727 17.4937 13.7544 17.9791 12.58 18Z"}" fill="${"#000000"}"></path></g></svg></a></div></div>
    <div class="${"flex flex-wrap justify-center "}" style="${"width:15rem"}"><img src="${"https://i.imgur.com/Ji4acad.gif"}" alt="${""}">
        <h2 class="${"min-w-full"}">JavaScript | Firebase | React</h2>
        <div class="${"flex"}"><a href="${"https://github.com/RielDreams/techfolio-frontend"}"><svg fill="${"#000000"}" width="${"64px"}" height="${"64px"}" viewBox="${"-6 0 32 32"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><title>github</title><path d="${"M18.36 9.28c0.48-1.72-0.24-3.6-0.28-3.72-0.12-0.28-0.4-0.52-0.72-0.52-0.080 0-1.92-0.16-3.76 1.24-1.44-0.28-3.080-0.36-3.16-0.36-0.040 0-0.040 0-0.080 0-0.080 0-1.72 0.080-3.16 0.36-1.84-1.4-3.68-1.24-3.76-1.24-0.32 0.040-0.6 0.24-0.72 0.52-0.040 0.080-0.8 2-0.28 3.72-0.92 1.28-1.64 2.96-1 5.96 0.6 2.72 2.84 4.24 5.16 4.76-0.2 0.56-0.28 1.24-0.36 1.96-0.96 0.040-1.56-0.52-2.4-1.4-0.72-0.76-1.52-1.64-2.84-1.92-0.44-0.12-0.88 0.16-1 0.64-0.080 0.48 0.2 0.92 0.68 1 0.76 0.16 1.28 0.72 1.92 1.4 0.84 0.88 1.8 1.96 3.52 1.96 0 0 0.040 0 0.040 0 0 0.92 0.080 1.8 0.12 2.52 0.040 0.48 0.44 0.8 0.92 0.76s0.8-0.44 0.76-0.92c-0.24-2.72-0.040-5.6 0.4-6 0.32-0.2 0.52-0.56 0.4-0.96-0.080-0.36-0.4-0.64-0.8-0.64-0.36 0-4.12-0.2-4.84-3.52-0.6-2.72 0.16-3.92 0.96-4.88 0.2-0.24 0.24-0.6 0.12-0.92-0.32-0.68-0.2-1.64-0.040-2.28 0.56 0.080 1.4 0.32 2.28 1.080 0.2 0.2 0.48 0.24 0.76 0.2 1.24-0.32 2.92-0.4 3.2-0.4 0.24 0 1.96 0.080 3.2 0.4 0.28 0.080 0.56 0 0.76-0.2 0.88-0.76 1.76-1 2.28-1.080 0.16 0.6 0.28 1.56-0.040 2.28-0.12 0.28-0.080 0.64 0.12 0.92 0.8 0.96 1.52 2.16 0.96 4.88-0.72 3.32-4.48 3.52-4.92 3.56-0.4 0-0.72 0.28-0.8 0.64s0.080 0.76 0.4 0.96c0.48 0.4 0.68 3.24 0.44 6-0.040 0.48 0.32 0.88 0.76 0.92 0.040 0 0.040 0 0.080 0 0.44 0 0.8-0.32 0.84-0.76 0.16-1.76 0.28-4.48-0.28-6.2 2.32-0.48 4.56-2.040 5.16-4.76 0.64-3-0.040-4.68-1-5.96z"}"></path></g></svg></a>
            <a href="${""}"><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path d="${"M7.23001 18.25C6.17025 18.2535 5.15243 17.8363 4.40001 17.09C3.63614 16.2785 3.22341 15.1983 3.2515 14.0842C3.27958 12.97 3.74622 11.912 4.55001 11.14L8.31001 7.35C9.12729 6.50634 10.2456 6.0209 11.42 6C11.9475 6.00352 12.4692 6.11135 12.9549 6.3173C13.4406 6.52325 13.8807 6.82324 14.25 7.2C15.0243 8.01629 15.4433 9.10627 15.4152 10.231C15.387 11.3557 14.9141 12.4234 14.1 13.2L12.84 14.46C12.7713 14.5337 12.6885 14.5928 12.5965 14.6338C12.5045 14.6748 12.4052 14.6968 12.3045 14.6986C12.2038 14.7004 12.1038 14.6818 12.0104 14.6441C11.917 14.6064 11.8322 14.5503 11.761 14.479C11.6897 14.4078 11.6336 14.323 11.5959 14.2296C11.5582 14.1362 11.5396 14.0362 11.5414 13.9355C11.5432 13.8348 11.5652 13.7355 11.6062 13.6435C11.6472 13.5515 11.7063 13.4687 11.78 13.4L13 12.1C13.5247 11.6076 13.8338 10.9279 13.86 10.2088C13.8862 9.4897 13.6275 8.78933 13.14 8.26C12.6071 7.7953 11.9167 7.55197 11.2102 7.57986C10.5037 7.60774 9.83461 7.90474 9.34001 8.41L5.61001 12.19C5.09513 12.6812 4.79158 13.3535 4.76359 14.0646C4.73559 14.7757 4.98535 15.4698 5.46001 16C5.72088 16.2578 6.03529 16.4551 6.38093 16.5778C6.72657 16.7005 7.09497 16.7456 7.46001 16.71C7.55727 16.7004 7.65547 16.7101 7.74895 16.7386C7.84243 16.7671 7.92934 16.8139 8.00465 16.8762C8.07996 16.9385 8.14218 17.0151 8.18773 17.1015C8.23327 17.188 8.26124 17.2827 8.27001 17.38C8.28956 17.5775 8.23003 17.7747 8.10444 17.9284C7.97885 18.0821 7.79746 18.1798 7.60001 18.2L7.23001 18.25Z"}" fill="${"#000000"}"></path><path d="${"M12.58 18C12.0525 17.9965 11.5308 17.8887 11.0451 17.6827C10.5594 17.4768 10.1193 17.1768 9.75 16.8C8.97574 15.9837 8.55674 14.8937 8.58486 13.769C8.61297 12.6443 9.08592 11.5766 9.9 10.8L11.16 9.54C11.2287 9.46632 11.3115 9.40721 11.4035 9.36622C11.4955 9.32523 11.5948 9.30319 11.6955 9.30141C11.7962 9.29964 11.8962 9.31816 11.9896 9.35588C12.083 9.3936 12.1678 9.44975 12.239 9.52097C12.3103 9.59218 12.3664 9.67702 12.4041 9.77041C12.4418 9.86379 12.4604 9.96382 12.4586 10.0645C12.4568 10.1652 12.4348 10.2645 12.3938 10.3565C12.3528 10.4485 12.2937 10.5313 12.22 10.6L11 11.9C10.4753 12.3924 10.1662 13.0721 10.14 13.7912C10.1138 14.5103 10.3726 15.2107 10.86 15.74C11.3929 16.2047 12.0833 16.448 12.7898 16.4201C13.4963 16.3923 14.1654 16.0953 14.66 15.59L18.43 11.81C18.9393 11.3134 19.2355 10.6383 19.256 9.92727C19.2766 9.21626 19.0198 8.52513 18.54 8C18.2791 7.7422 17.9647 7.54495 17.6191 7.42224C17.2734 7.29954 16.905 7.2544 16.54 7.29C16.4427 7.29964 16.3445 7.28992 16.2511 7.2614C16.1576 7.23287 16.0707 7.18612 15.9954 7.12382C15.9201 7.06153 15.8578 6.98493 15.8123 6.89846C15.7667 6.81199 15.7388 6.71735 15.73 6.62C15.7104 6.42248 15.77 6.22527 15.8956 6.07156C16.0212 5.91786 16.2025 5.82021 16.4 5.8C16.9821 5.73967 17.5704 5.80779 18.1233 5.99959C18.6762 6.19138 19.1803 6.50216 19.6 6.91C20.3639 7.72153 20.7766 8.80172 20.7485 9.91585C20.7204 11.03 20.2538 12.088 19.45 12.86L15.69 16.65C14.8727 17.4937 13.7544 17.9791 12.58 18Z"}" fill="${"#000000"}"></path></g></svg></a></div></div>
    <div class="${"flex flex-wrap justify-center "}" style="${"width:15rem"}"><img src="${"https://i.imgur.com/ufV1GIQ.gif"}" alt="${""}">
        <h2 class="${"min-w-full"}">Python | Django </h2>
        <div class="${"flex"}"><a href="${"https://github.com/RielDreams/RenderRealms"}"><svg fill="${"#000000"}" width="${"64px"}" height="${"64px"}" viewBox="${"-6 0 32 32"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><title>github</title><path d="${"M18.36 9.28c0.48-1.72-0.24-3.6-0.28-3.72-0.12-0.28-0.4-0.52-0.72-0.52-0.080 0-1.92-0.16-3.76 1.24-1.44-0.28-3.080-0.36-3.16-0.36-0.040 0-0.040 0-0.080 0-0.080 0-1.72 0.080-3.16 0.36-1.84-1.4-3.68-1.24-3.76-1.24-0.32 0.040-0.6 0.24-0.72 0.52-0.040 0.080-0.8 2-0.28 3.72-0.92 1.28-1.64 2.96-1 5.96 0.6 2.72 2.84 4.24 5.16 4.76-0.2 0.56-0.28 1.24-0.36 1.96-0.96 0.040-1.56-0.52-2.4-1.4-0.72-0.76-1.52-1.64-2.84-1.92-0.44-0.12-0.88 0.16-1 0.64-0.080 0.48 0.2 0.92 0.68 1 0.76 0.16 1.28 0.72 1.92 1.4 0.84 0.88 1.8 1.96 3.52 1.96 0 0 0.040 0 0.040 0 0 0.92 0.080 1.8 0.12 2.52 0.040 0.48 0.44 0.8 0.92 0.76s0.8-0.44 0.76-0.92c-0.24-2.72-0.040-5.6 0.4-6 0.32-0.2 0.52-0.56 0.4-0.96-0.080-0.36-0.4-0.64-0.8-0.64-0.36 0-4.12-0.2-4.84-3.52-0.6-2.72 0.16-3.92 0.96-4.88 0.2-0.24 0.24-0.6 0.12-0.92-0.32-0.68-0.2-1.64-0.040-2.28 0.56 0.080 1.4 0.32 2.28 1.080 0.2 0.2 0.48 0.24 0.76 0.2 1.24-0.32 2.92-0.4 3.2-0.4 0.24 0 1.96 0.080 3.2 0.4 0.28 0.080 0.56 0 0.76-0.2 0.88-0.76 1.76-1 2.28-1.080 0.16 0.6 0.28 1.56-0.040 2.28-0.12 0.28-0.080 0.64 0.12 0.92 0.8 0.96 1.52 2.16 0.96 4.88-0.72 3.32-4.48 3.52-4.92 3.56-0.4 0-0.72 0.28-0.8 0.64s0.080 0.76 0.4 0.96c0.48 0.4 0.68 3.24 0.44 6-0.040 0.48 0.32 0.88 0.76 0.92 0.040 0 0.040 0 0.080 0 0.44 0 0.8-0.32 0.84-0.76 0.16-1.76 0.28-4.48-0.28-6.2 2.32-0.48 4.56-2.040 5.16-4.76 0.64-3-0.040-4.68-1-5.96z"}"></path></g></svg></a>
            <a href="${""}"><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path d="${"M7.23001 18.25C6.17025 18.2535 5.15243 17.8363 4.40001 17.09C3.63614 16.2785 3.22341 15.1983 3.2515 14.0842C3.27958 12.97 3.74622 11.912 4.55001 11.14L8.31001 7.35C9.12729 6.50634 10.2456 6.0209 11.42 6C11.9475 6.00352 12.4692 6.11135 12.9549 6.3173C13.4406 6.52325 13.8807 6.82324 14.25 7.2C15.0243 8.01629 15.4433 9.10627 15.4152 10.231C15.387 11.3557 14.9141 12.4234 14.1 13.2L12.84 14.46C12.7713 14.5337 12.6885 14.5928 12.5965 14.6338C12.5045 14.6748 12.4052 14.6968 12.3045 14.6986C12.2038 14.7004 12.1038 14.6818 12.0104 14.6441C11.917 14.6064 11.8322 14.5503 11.761 14.479C11.6897 14.4078 11.6336 14.323 11.5959 14.2296C11.5582 14.1362 11.5396 14.0362 11.5414 13.9355C11.5432 13.8348 11.5652 13.7355 11.6062 13.6435C11.6472 13.5515 11.7063 13.4687 11.78 13.4L13 12.1C13.5247 11.6076 13.8338 10.9279 13.86 10.2088C13.8862 9.4897 13.6275 8.78933 13.14 8.26C12.6071 7.7953 11.9167 7.55197 11.2102 7.57986C10.5037 7.60774 9.83461 7.90474 9.34001 8.41L5.61001 12.19C5.09513 12.6812 4.79158 13.3535 4.76359 14.0646C4.73559 14.7757 4.98535 15.4698 5.46001 16C5.72088 16.2578 6.03529 16.4551 6.38093 16.5778C6.72657 16.7005 7.09497 16.7456 7.46001 16.71C7.55727 16.7004 7.65547 16.7101 7.74895 16.7386C7.84243 16.7671 7.92934 16.8139 8.00465 16.8762C8.07996 16.9385 8.14218 17.0151 8.18773 17.1015C8.23327 17.188 8.26124 17.2827 8.27001 17.38C8.28956 17.5775 8.23003 17.7747 8.10444 17.9284C7.97885 18.0821 7.79746 18.1798 7.60001 18.2L7.23001 18.25Z"}" fill="${"#000000"}"></path><path d="${"M12.58 18C12.0525 17.9965 11.5308 17.8887 11.0451 17.6827C10.5594 17.4768 10.1193 17.1768 9.75 16.8C8.97574 15.9837 8.55674 14.8937 8.58486 13.769C8.61297 12.6443 9.08592 11.5766 9.9 10.8L11.16 9.54C11.2287 9.46632 11.3115 9.40721 11.4035 9.36622C11.4955 9.32523 11.5948 9.30319 11.6955 9.30141C11.7962 9.29964 11.8962 9.31816 11.9896 9.35588C12.083 9.3936 12.1678 9.44975 12.239 9.52097C12.3103 9.59218 12.3664 9.67702 12.4041 9.77041C12.4418 9.86379 12.4604 9.96382 12.4586 10.0645C12.4568 10.1652 12.4348 10.2645 12.3938 10.3565C12.3528 10.4485 12.2937 10.5313 12.22 10.6L11 11.9C10.4753 12.3924 10.1662 13.0721 10.14 13.7912C10.1138 14.5103 10.3726 15.2107 10.86 15.74C11.3929 16.2047 12.0833 16.448 12.7898 16.4201C13.4963 16.3923 14.1654 16.0953 14.66 15.59L18.43 11.81C18.9393 11.3134 19.2355 10.6383 19.256 9.92727C19.2766 9.21626 19.0198 8.52513 18.54 8C18.2791 7.7422 17.9647 7.54495 17.6191 7.42224C17.2734 7.29954 16.905 7.2544 16.54 7.29C16.4427 7.29964 16.3445 7.28992 16.2511 7.2614C16.1576 7.23287 16.0707 7.18612 15.9954 7.12382C15.9201 7.06153 15.8578 6.98493 15.8123 6.89846C15.7667 6.81199 15.7388 6.71735 15.73 6.62C15.7104 6.42248 15.77 6.22527 15.8956 6.07156C16.0212 5.91786 16.2025 5.82021 16.4 5.8C16.9821 5.73967 17.5704 5.80779 18.1233 5.99959C18.6762 6.19138 19.1803 6.50216 19.6 6.91C20.3639 7.72153 20.7766 8.80172 20.7485 9.91585C20.7204 11.03 20.2538 12.088 19.45 12.86L15.69 16.65C14.8727 17.4937 13.7544 17.9791 12.58 18Z"}" fill="${"#000000"}"></path></g></svg></a></div></div>
    <div class="${"flex flex-wrap justify-center "}" style="${"width:15rem"}"><img src="${"https://i.imgur.com/3kUXllN.gif"}" alt="${""}">
        <h2 class="${"min-w-full"}">Svelte | JavaScript </h2>
        <div class="${"flex"}"><a href="${"https://github.com/RielDreams/Sellit"}"><svg fill="${"#000000"}" width="${"64px"}" height="${"64px"}" viewBox="${"-6 0 32 32"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><title>github</title><path d="${"M18.36 9.28c0.48-1.72-0.24-3.6-0.28-3.72-0.12-0.28-0.4-0.52-0.72-0.52-0.080 0-1.92-0.16-3.76 1.24-1.44-0.28-3.080-0.36-3.16-0.36-0.040 0-0.040 0-0.080 0-0.080 0-1.72 0.080-3.16 0.36-1.84-1.4-3.68-1.24-3.76-1.24-0.32 0.040-0.6 0.24-0.72 0.52-0.040 0.080-0.8 2-0.28 3.72-0.92 1.28-1.64 2.96-1 5.96 0.6 2.72 2.84 4.24 5.16 4.76-0.2 0.56-0.28 1.24-0.36 1.96-0.96 0.040-1.56-0.52-2.4-1.4-0.72-0.76-1.52-1.64-2.84-1.92-0.44-0.12-0.88 0.16-1 0.64-0.080 0.48 0.2 0.92 0.68 1 0.76 0.16 1.28 0.72 1.92 1.4 0.84 0.88 1.8 1.96 3.52 1.96 0 0 0.040 0 0.040 0 0 0.92 0.080 1.8 0.12 2.52 0.040 0.48 0.44 0.8 0.92 0.76s0.8-0.44 0.76-0.92c-0.24-2.72-0.040-5.6 0.4-6 0.32-0.2 0.52-0.56 0.4-0.96-0.080-0.36-0.4-0.64-0.8-0.64-0.36 0-4.12-0.2-4.84-3.52-0.6-2.72 0.16-3.92 0.96-4.88 0.2-0.24 0.24-0.6 0.12-0.92-0.32-0.68-0.2-1.64-0.040-2.28 0.56 0.080 1.4 0.32 2.28 1.080 0.2 0.2 0.48 0.24 0.76 0.2 1.24-0.32 2.92-0.4 3.2-0.4 0.24 0 1.96 0.080 3.2 0.4 0.28 0.080 0.56 0 0.76-0.2 0.88-0.76 1.76-1 2.28-1.080 0.16 0.6 0.28 1.56-0.040 2.28-0.12 0.28-0.080 0.64 0.12 0.92 0.8 0.96 1.52 2.16 0.96 4.88-0.72 3.32-4.48 3.52-4.92 3.56-0.4 0-0.72 0.28-0.8 0.64s0.080 0.76 0.4 0.96c0.48 0.4 0.68 3.24 0.44 6-0.040 0.48 0.32 0.88 0.76 0.92 0.040 0 0.040 0 0.080 0 0.44 0 0.8-0.32 0.84-0.76 0.16-1.76 0.28-4.48-0.28-6.2 2.32-0.48 4.56-2.040 5.16-4.76 0.64-3-0.040-4.68-1-5.96z"}"></path></g></svg></a>
            <a href="${""}"><svg width="${"64px"}" height="${"64px"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path d="${"M7.23001 18.25C6.17025 18.2535 5.15243 17.8363 4.40001 17.09C3.63614 16.2785 3.22341 15.1983 3.2515 14.0842C3.27958 12.97 3.74622 11.912 4.55001 11.14L8.31001 7.35C9.12729 6.50634 10.2456 6.0209 11.42 6C11.9475 6.00352 12.4692 6.11135 12.9549 6.3173C13.4406 6.52325 13.8807 6.82324 14.25 7.2C15.0243 8.01629 15.4433 9.10627 15.4152 10.231C15.387 11.3557 14.9141 12.4234 14.1 13.2L12.84 14.46C12.7713 14.5337 12.6885 14.5928 12.5965 14.6338C12.5045 14.6748 12.4052 14.6968 12.3045 14.6986C12.2038 14.7004 12.1038 14.6818 12.0104 14.6441C11.917 14.6064 11.8322 14.5503 11.761 14.479C11.6897 14.4078 11.6336 14.323 11.5959 14.2296C11.5582 14.1362 11.5396 14.0362 11.5414 13.9355C11.5432 13.8348 11.5652 13.7355 11.6062 13.6435C11.6472 13.5515 11.7063 13.4687 11.78 13.4L13 12.1C13.5247 11.6076 13.8338 10.9279 13.86 10.2088C13.8862 9.4897 13.6275 8.78933 13.14 8.26C12.6071 7.7953 11.9167 7.55197 11.2102 7.57986C10.5037 7.60774 9.83461 7.90474 9.34001 8.41L5.61001 12.19C5.09513 12.6812 4.79158 13.3535 4.76359 14.0646C4.73559 14.7757 4.98535 15.4698 5.46001 16C5.72088 16.2578 6.03529 16.4551 6.38093 16.5778C6.72657 16.7005 7.09497 16.7456 7.46001 16.71C7.55727 16.7004 7.65547 16.7101 7.74895 16.7386C7.84243 16.7671 7.92934 16.8139 8.00465 16.8762C8.07996 16.9385 8.14218 17.0151 8.18773 17.1015C8.23327 17.188 8.26124 17.2827 8.27001 17.38C8.28956 17.5775 8.23003 17.7747 8.10444 17.9284C7.97885 18.0821 7.79746 18.1798 7.60001 18.2L7.23001 18.25Z"}" fill="${"#000000"}"></path><path d="${"M12.58 18C12.0525 17.9965 11.5308 17.8887 11.0451 17.6827C10.5594 17.4768 10.1193 17.1768 9.75 16.8C8.97574 15.9837 8.55674 14.8937 8.58486 13.769C8.61297 12.6443 9.08592 11.5766 9.9 10.8L11.16 9.54C11.2287 9.46632 11.3115 9.40721 11.4035 9.36622C11.4955 9.32523 11.5948 9.30319 11.6955 9.30141C11.7962 9.29964 11.8962 9.31816 11.9896 9.35588C12.083 9.3936 12.1678 9.44975 12.239 9.52097C12.3103 9.59218 12.3664 9.67702 12.4041 9.77041C12.4418 9.86379 12.4604 9.96382 12.4586 10.0645C12.4568 10.1652 12.4348 10.2645 12.3938 10.3565C12.3528 10.4485 12.2937 10.5313 12.22 10.6L11 11.9C10.4753 12.3924 10.1662 13.0721 10.14 13.7912C10.1138 14.5103 10.3726 15.2107 10.86 15.74C11.3929 16.2047 12.0833 16.448 12.7898 16.4201C13.4963 16.3923 14.1654 16.0953 14.66 15.59L18.43 11.81C18.9393 11.3134 19.2355 10.6383 19.256 9.92727C19.2766 9.21626 19.0198 8.52513 18.54 8C18.2791 7.7422 17.9647 7.54495 17.6191 7.42224C17.2734 7.29954 16.905 7.2544 16.54 7.29C16.4427 7.29964 16.3445 7.28992 16.2511 7.2614C16.1576 7.23287 16.0707 7.18612 15.9954 7.12382C15.9201 7.06153 15.8578 6.98493 15.8123 6.89846C15.7667 6.81199 15.7388 6.71735 15.73 6.62C15.7104 6.42248 15.77 6.22527 15.8956 6.07156C16.0212 5.91786 16.2025 5.82021 16.4 5.8C16.9821 5.73967 17.5704 5.80779 18.1233 5.99959C18.6762 6.19138 19.1803 6.50216 19.6 6.91C20.3639 7.72153 20.7766 8.80172 20.7485 9.91585C20.7204 11.03 20.2538 12.088 19.45 12.86L15.69 16.65C14.8727 17.4937 13.7544 17.9791 12.58 18Z"}" fill="${"#000000"}"></path></g></svg></a></div></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body class="${"bg-white dark:bg-gray-800 flex flex-wrap justify-center item-center mx-auto min-w-full"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
    ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}
    ${validate_component(About, "About").$$render($$result, {}, {}, {})}
    ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
    ${validate_component(Footer_1, "Footer").$$render($$result, {}, {}, {})}</body>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-c9f4edbc.js.map
