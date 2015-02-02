!function (t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
		if (!t.document)throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
	function n(t) {
		var e = t.length, n = ie.type(t);
		return "function" === n || ie.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}

	function r(t, e, n) {
		if (ie.isFunction(e))return ie.grep(t, function (t, r) {
			return !!e.call(t, r, t) !== n
		});
		if (e.nodeType)return ie.grep(t, function (t) {
			return t === e !== n
		});
		if ("string" == typeof e) {
			if (de.test(e))return ie.filter(e, t, n);
			e = ie.filter(e, t)
		}
		return ie.grep(t, function (t) {
			return ie.inArray(t, e) >= 0 !== n
		})
	}

	function i(t, e) {
		do t = t[e]; while (t && 1 !== t.nodeType);
		return t
	}

	function o(t) {
		var e = be[t] = {};
		return ie.each(t.match(ye) || [], function (t, n) {
			e[n] = !0
		}), e
	}

	function a() {
		pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (pe.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
	}

	function s() {
		(pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (a(), ie.ready())
	}

	function u(t, e, n) {
		if (void 0 === n && 1 === t.nodeType) {
			var r = "data-" + e.replace(Se, "-$1").toLowerCase();
			if (n = t.getAttribute(r), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Te.test(n) ? ie.parseJSON(n) : n
				} catch (i) {
				}
				ie.data(t, e, n)
			} else n = void 0
		}
		return n
	}

	function l(t) {
		var e;
		for (e in t)if (("data" !== e || !ie.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
		return !0
	}

	function c(t, e, n, r) {
		if (ie.acceptData(t)) {
			var i, o, a = ie.expando, s = t.nodeType, u = s ? ie.cache : t, l = s ? t[a] : t[a] && a;
			if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof e)return l || (l = s ? t[a] = G.pop() || ie.guid++ : a), u[l] || (u[l] = s ? {} : {toJSON: ie.noop}), ("object" == typeof e || "function" == typeof e) && (r ? u[l] = ie.extend(u[l], e) : u[l].data = ie.extend(u[l].data, e)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(e)] = n), "string" == typeof e ? (i = o[e], null == i && (i = o[ie.camelCase(e)])) : i = o, i
		}
	}

	function f(t, e, n) {
		if (ie.acceptData(t)) {
			var r, i, o = t.nodeType, a = o ? ie.cache : t, s = o ? t[ie.expando] : ie.expando;
			if (a[s]) {
				if (e && (r = n ? a[s] : a[s].data)) {
					ie.isArray(e) ? e = e.concat(ie.map(e, ie.camelCase)) : e in r ? e = [e] : (e = ie.camelCase(e), e = e in r ? [e] : e.split(" ")), i = e.length;
					for (; i--;)delete r[e[i]];
					if (n ? !l(r) : !ie.isEmptyObject(r))return
				}
				(n || (delete a[s].data, l(a[s]))) && (o ? ie.cleanData([t], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}

	function d() {
		return !0
	}

	function h() {
		return !1
	}

	function p() {
		try {
			return pe.activeElement
		} catch (t) {
		}
	}

	function m(t) {
		var e = Pe.split("|"), n = t.createDocumentFragment();
		if (n.createElement)for (; e.length;)n.createElement(e.pop());
		return n
	}

	function v(t, e) {
		var n, r, i = 0, o = typeof t.getElementsByTagName !== Ce ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ce ? t.querySelectorAll(e || "*") : void 0;
		if (!o)for (o = [], n = t.childNodes || t; null != (r = n[i]); i++)!e || ie.nodeName(r, e) ? o.push(r) : ie.merge(o, v(r, e));
		return void 0 === e || e && ie.nodeName(t, e) ? ie.merge([t], o) : o
	}

	function g(t) {
		Ne.test(t.type) && (t.defaultChecked = t.checked)
	}

	function $(t, e) {
		return ie.nodeName(t, "table") && ie.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}

	function y(t) {
		return t.type = (null !== ie.find.attr(t, "type")) + "/" + t.type, t
	}

	function b(t) {
		var e = Xe.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function w(t, e) {
		for (var n, r = 0; null != (n = t[r]); r++)ie._data(n, "globalEval", !e || ie._data(e[r], "globalEval"))
	}

	function x(t, e) {
		if (1 === e.nodeType && ie.hasData(t)) {
			var n, r, i, o = ie._data(t), a = ie._data(e, o), s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)for (r = 0, i = s[n].length; i > r; r++)ie.event.add(e, n, s[n][r])
			}
			a.data && (a.data = ie.extend({}, a.data))
		}
	}

	function C(t, e) {
		var n, r, i;
		if (1 === e.nodeType) {
			if (n = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[ie.expando]) {
				i = ie._data(e);
				for (r in i.events)ie.removeEvent(e, r, i.handle);
				e.removeAttribute(ie.expando)
			}
			"script" === n && e.text !== t.text ? (y(e).text = t.text, b(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !ie.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ne.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
		}
	}

	function T(e, n) {
		var r, i = ie(n.createElement(e)).appendTo(n.body), o = t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0])) ? r.display : ie.css(i[0], "display");
		return i.detach(), o
	}

	function S(t) {
		var e = pe, n = Ze[t];
		return n || (n = T(t, e), "none" !== n && n || (Ke = (Ke || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ke[0].contentWindow || Ke[0].contentDocument).document, e.write(), e.close(), n = T(t, e), Ke.detach()), Ze[t] = n), n
	}

	function E(t, e) {
		return {
			get: function () {
				var n = t();
				if (null != n)return n ? void delete this.get : (this.get = e).apply(this, arguments)
			}
		}
	}

	function k(t, e) {
		if (e in t)return e;
		for (var n = e.charAt(0).toUpperCase() + e.slice(1), r = e, i = hn.length; i--;)if (e = hn[i] + n, e in t)return e;
		return r
	}

	function A(t, e) {
		for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++)r = t[a], r.style && (o[a] = ie._data(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ae(r) && (o[a] = ie._data(r, "olddisplay", S(r.nodeName)))) : (i = Ae(r), (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
		for (a = 0; s > a; a++)r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
		return t
	}

	function _(t, e, n) {
		var r = ln.exec(e);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
	}

	function N(t, e, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ie.css(t, n + ke[o], !0, i)), r ? ("content" === n && (a -= ie.css(t, "padding" + ke[o], !0, i)), "margin" !== n && (a -= ie.css(t, "border" + ke[o] + "Width", !0, i))) : (a += ie.css(t, "padding" + ke[o], !0, i), "padding" !== n && (a += ie.css(t, "border" + ke[o] + "Width", !0, i)));
		return a
	}

	function D(t, e, n) {
		var r = !0, i = "width" === e ? t.offsetWidth : t.offsetHeight, o = tn(t), a = ne.boxSizing && "border-box" === ie.css(t, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = en(t, e, o), (0 > i || null == i) && (i = t.style[e]), rn.test(i))return i;
			r = a && (ne.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
		}
		return i + N(t, e, n || (a ? "border" : "content"), r, o) + "px"
	}

	function O(t, e, n, r, i) {
		return new O.prototype.init(t, e, n, r, i)
	}

	function j() {
		return setTimeout(function () {
			pn = void 0
		}), pn = ie.now()
	}

	function R(t, e) {
		var n, r = {height: t}, i = 0;
		for (e = e ? 1 : 0; 4 > i; i += 2 - e)n = ke[i], r["margin" + n] = r["padding" + n] = t;
		return e && (r.opacity = r.width = t), r
	}

	function F(t, e, n) {
		for (var r, i = (bn[e] || []).concat(bn["*"]), o = 0, a = i.length; a > o; o++)if (r = i[o].call(n, e, t))return r
	}

	function P(t, e, n) {
		var r, i, o, a, s, u, l, c, f = this, d = {}, h = t.style, p = t.nodeType && Ae(t), m = ie._data(t, "fxshow");
		n.queue || (s = ie._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
			s.unqueued || u()
		}), s.unqueued++, f.always(function () {
			f.always(function () {
				s.unqueued--, ie.queue(t, "fx").length || s.empty.fire()
			})
		})), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = ie.css(t, "display"), c = "none" === l ? ie._data(t, "olddisplay") || S(t.nodeName) : l, "inline" === c && "none" === ie.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ne.shrinkWrapBlocks() || f.always(function () {
			h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
		}));
		for (r in e)if (i = e[r], vn.exec(i)) {
			if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
				if ("show" !== i || !m || void 0 === m[r])continue;
				p = !0
			}
			d[r] = m && m[r] || ie.style(t, r)
		} else l = void 0;
		if (ie.isEmptyObject(d))"inline" === ("none" === l ? S(t.nodeName) : l) && (h.display = l); else {
			m ? "hidden"in m && (p = m.hidden) : m = ie._data(t, "fxshow", {}), o && (m.hidden = !p), p ? ie(t).show() : f.done(function () {
				ie(t).hide()
			}), f.done(function () {
				var e;
				ie._removeData(t, "fxshow");
				for (e in d)ie.style(t, e, d[e])
			});
			for (r in d)a = F(p ? m[r] : 0, r, f), r in m || (m[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function H(t, e) {
		var n, r, i, o, a;
		for (n in t)if (r = ie.camelCase(n), i = e[r], o = t[n], ie.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = ie.cssHooks[r], a && "expand"in a) {
			o = a.expand(o), delete t[r];
			for (n in o)n in t || (t[n] = o[n], e[n] = i)
		} else e[r] = i
	}

	function I(t, e, n) {
		var r, i, o = 0, a = yn.length, s = ie.Deferred().always(function () {
			delete u.elem
		}), u = function () {
			if (i)return !1;
			for (var e = pn || j(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)l.tweens[a].run(o);
			return s.notifyWith(t, [l, o, n]), 1 > o && u ? n : (s.resolveWith(t, [l]), !1)
		}, l = s.promise({
			elem: t,
			props: ie.extend({}, e),
			opts: ie.extend(!0, {specialEasing: {}}, n),
			originalProperties: e,
			originalOptions: n,
			startTime: pn || j(),
			duration: n.duration,
			tweens: [],
			createTween: function (e, n) {
				var r = ie.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
				return l.tweens.push(r), r
			},
			stop: function (e) {
				var n = 0, r = e ? l.tweens.length : 0;
				if (i)return this;
				for (i = !0; r > n; n++)l.tweens[n].run(1);
				return e ? s.resolveWith(t, [l, e]) : s.rejectWith(t, [l, e]), this
			}
		}), c = l.props;
		for (H(c, l.opts.specialEasing); a > o; o++)if (r = yn[o].call(l, t, c, l.opts))return r;
		return ie.map(c, F, l), ie.isFunction(l.opts.start) && l.opts.start.call(t, l), ie.fx.timer(ie.extend(u, {
			elem: t,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}

	function M(t) {
		return function (e, n) {
			"string" != typeof e && (n = e, e = "*");
			var r, i = 0, o = e.toLowerCase().match(ye) || [];
			if (ie.isFunction(n))for (; r = o[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
		}
	}

	function L(t, e, n, r) {
		function i(s) {
			var u;
			return o[s] = !0, ie.each(t[s] || [], function (t, s) {
				var l = s(e, n, r);
				return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1)
			}), u
		}

		var o = {}, a = t === Bn;
		return i(e.dataTypes[0]) || !o["*"] && i("*")
	}

	function q(t, e) {
		var n, r, i = ie.ajaxSettings.flatOptions || {};
		for (r in e)void 0 !== e[r] && ((i[r] ? t : n || (n = {}))[r] = e[r]);
		return n && ie.extend(!0, t, n), t
	}

	function U(t, e, n) {
		for (var r, i, o, a, s = t.contents, u = t.dataTypes; "*" === u[0];)u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
		if (i)for (a in s)if (s[a] && s[a].test(i)) {
			u.unshift(a);
			break
		}
		if (u[0]in n)o = u[0]; else {
			for (a in n) {
				if (!u[0] || t.converters[a + " " + u[0]]) {
					o = a;
					break
				}
				r || (r = a)
			}
			o = o || r
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
	}

	function V(t, e, n, r) {
		var i, o, a, s, u, l = {}, c = t.dataTypes.slice();
		if (c[1])for (a in t.converters)l[a.toLowerCase()] = t.converters[a];
		for (o = c.shift(); o;)if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())if ("*" === o)o = u; else if ("*" !== u && u !== o) {
			if (a = l[u + " " + o] || l["* " + o], !a)for (i in l)if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
				a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
				break
			}
			if (a !== !0)if (a && t["throws"])e = a(e); else try {
				e = a(e)
			} catch (f) {
				return {state: "parsererror", error: a ? f : "No conversion from " + u + " to " + o}
			}
		}
		return {state: "success", data: e}
	}

	function B(t, e, n, r) {
		var i;
		if (ie.isArray(e))ie.each(e, function (e, i) {
			n || Gn.test(t) ? r(t, i) : B(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
		}); else if (n || "object" !== ie.type(e))r(t, e); else for (i in e)B(t + "[" + i + "]", e[i], n, r)
	}

	function W() {
		try {
			return new t.XMLHttpRequest
		} catch (e) {
		}
	}

	function z() {
		try {
			return new t.ActiveXObject("Microsoft.XMLHTTP")
		} catch (e) {
		}
	}

	function X(t) {
		return ie.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
	}

	var G = [], Y = G.slice, J = G.concat, Q = G.push, K = G.indexOf, Z = {}, te = Z.toString, ee = Z.hasOwnProperty, ne = {}, re = "1.11.2", ie = function (t, e) {
		return new ie.fn.init(t, e)
	}, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, se = /-([\da-z])/gi, ue = function (t, e) {
		return e.toUpperCase()
	};
	ie.fn = ie.prototype = {
		jquery: re, constructor: ie, selector: "", length: 0, toArray: function () {
			return Y.call(this)
		}, get: function (t) {
			return null != t ? 0 > t ? this[t + this.length] : this[t] : Y.call(this)
		}, pushStack: function (t) {
			var e = ie.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		}, each: function (t, e) {
			return ie.each(this, t, e)
		}, map: function (t) {
			return this.pushStack(ie.map(this, function (e, n) {
				return t.call(e, n, e)
			}))
		}, slice: function () {
			return this.pushStack(Y.apply(this, arguments))
		}, first: function () {
			return this.eq(0)
		}, last: function () {
			return this.eq(-1)
		}, eq: function (t) {
			var e = this.length, n = +t + (0 > t ? e : 0);
			return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
		}, end: function () {
			return this.prevObject || this.constructor(null)
		}, push: Q, sort: G.sort, splice: G.splice
	}, ie.extend = ie.fn.extend = function () {
		var t, e, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)if (null != (i = arguments[s]))for (r in i)t = a[r], n = i[r], a !== n && (l && n && (ie.isPlainObject(n) || (e = ie.isArray(n))) ? (e ? (e = !1, o = t && ie.isArray(t) ? t : []) : o = t && ie.isPlainObject(t) ? t : {}, a[r] = ie.extend(l, o, n)) : void 0 !== n && (a[r] = n));
		return a
	}, ie.extend({
		expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
			throw new Error(t)
		}, noop: function () {
		}, isFunction: function (t) {
			return "function" === ie.type(t)
		}, isArray: Array.isArray || function (t) {
			return "array" === ie.type(t)
		}, isWindow: function (t) {
			return null != t && t == t.window
		}, isNumeric: function (t) {
			return !ie.isArray(t) && t - parseFloat(t) + 1 >= 0
		}, isEmptyObject: function (t) {
			var e;
			for (e in t)return !1;
			return !0
		}, isPlainObject: function (t) {
			var e;
			if (!t || "object" !== ie.type(t) || t.nodeType || ie.isWindow(t))return !1;
			try {
				if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))return !1
			} catch (n) {
				return !1
			}
			if (ne.ownLast)for (e in t)return ee.call(t, e);
			for (e in t);
			return void 0 === e || ee.call(t, e)
		}, type: function (t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
		}, globalEval: function (e) {
			e && ie.trim(e) && (t.execScript || function (e) {
				t.eval.call(t, e)
			})(e)
		}, camelCase: function (t) {
			return t.replace(ae, "ms-").replace(se, ue)
		}, nodeName: function (t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		}, each: function (t, e, r) {
			var i, o = 0, a = t.length, s = n(t);
			if (r) {
				if (s)for (; a > o && (i = e.apply(t[o], r), i !== !1); o++); else for (o in t)if (i = e.apply(t[o], r), i === !1)break
			} else if (s)for (; a > o && (i = e.call(t[o], o, t[o]), i !== !1); o++); else for (o in t)if (i = e.call(t[o], o, t[o]), i === !1)break;
			return t
		}, trim: function (t) {
			return null == t ? "" : (t + "").replace(oe, "")
		}, makeArray: function (t, e) {
			var r = e || [];
			return null != t && (n(Object(t)) ? ie.merge(r, "string" == typeof t ? [t] : t) : Q.call(r, t)), r
		}, inArray: function (t, e, n) {
			var r;
			if (e) {
				if (K)return K.call(e, t, n);
				for (r = e.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in e && e[n] === t)return n
			}
			return -1
		}, merge: function (t, e) {
			for (var n = +e.length, r = 0, i = t.length; n > r;)t[i++] = e[r++];
			if (n !== n)for (; void 0 !== e[r];)t[i++] = e[r++];
			return t.length = i, t
		}, grep: function (t, e, n) {
			for (var r, i = [], o = 0, a = t.length, s = !n; a > o; o++)r = !e(t[o], o), r !== s && i.push(t[o]);
			return i
		}, map: function (t, e, r) {
			var i, o = 0, a = t.length, s = n(t), u = [];
			if (s)for (; a > o; o++)i = e(t[o], o, r), null != i && u.push(i); else for (o in t)i = e(t[o], o, r), null != i && u.push(i);
			return J.apply([], u)
		}, guid: 1, proxy: function (t, e) {
			var n, r, i;
			return "string" == typeof e && (i = t[e], e = t, t = i), ie.isFunction(t) ? (n = Y.call(arguments, 2), r = function () {
				return t.apply(e || this, n.concat(Y.call(arguments)))
			}, r.guid = t.guid = t.guid || ie.guid++, r) : void 0
		}, now: function () {
			return +new Date
		}, support: ne
	}), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
		Z["[object " + e + "]"] = e.toLowerCase()
	});
	var le = function (t) {
		function e(t, e, n, r) {
			var i, o, a, s, u, l, f, h, p, m;
			if ((e ? e.ownerDocument || e : L) !== O && D(e), e = e || O, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s)return n;
			if (!r && R) {
				if (11 !== s && (i = $e.exec(t)))if (a = i[1]) {
					if (9 === s) {
						if (o = e.getElementById(a), !o || !o.parentNode)return n;
						if (o.id === a)return n.push(o), n
					} else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && I(e, o) && o.id === a)return n.push(o), n
				} else {
					if (i[2])return K.apply(n, e.getElementsByTagName(t)), n;
					if ((a = i[3]) && w.getElementsByClassName)return K.apply(n, e.getElementsByClassName(a)), n
				}
				if (w.qsa && (!F || !F.test(t))) {
					if (h = f = M, p = e, m = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
						for (l = S(t), (f = e.getAttribute("id")) ? h = f.replace(be, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;)l[u] = h + d(l[u]);
						p = ye.test(t) && c(e.parentNode) || e, m = l.join(",")
					}
					if (m)try {
						return K.apply(n, p.querySelectorAll(m)), n
					} catch (v) {
					} finally {
						f || e.removeAttribute("id")
					}
				}
			}
			return k(t.replace(ue, "$1"), e, n, r)
		}

		function n() {
			function t(n, r) {
				return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = r
			}

			var e = [];
			return t
		}

		function r(t) {
			return t[M] = !0, t
		}

		function i(t) {
			var e = O.createElement("div");
			try {
				return !!t(e)
			} catch (n) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function o(t, e) {
			for (var n = t.split("|"), r = t.length; r--;)x.attrHandle[n[r]] = e
		}

		function a(t, e) {
			var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
			if (r)return r;
			if (n)for (; n = n.nextSibling;)if (n === e)return -1;
			return t ? 1 : -1
		}

		function s(t) {
			return function (e) {
				var n = e.nodeName.toLowerCase();
				return "input" === n && e.type === t
			}
		}

		function u(t) {
			return function (e) {
				var n = e.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && e.type === t
			}
		}

		function l(t) {
			return r(function (e) {
				return e = +e, r(function (n, r) {
					for (var i, o = t([], n.length, e), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function c(t) {
			return t && "undefined" != typeof t.getElementsByTagName && t
		}

		function f() {
		}

		function d(t) {
			for (var e = 0, n = t.length, r = ""; n > e; e++)r += t[e].value;
			return r
		}

		function h(t, e, n) {
			var r = e.dir, i = n && "parentNode" === r, o = U++;
			return e.first ? function (e, n, o) {
				for (; e = e[r];)if (1 === e.nodeType || i)return t(e, n, o)
			} : function (e, n, a) {
				var s, u, l = [q, o];
				if (a) {
					for (; e = e[r];)if ((1 === e.nodeType || i) && t(e, n, a))return !0
				} else for (; e = e[r];)if (1 === e.nodeType || i) {
					if (u = e[M] || (e[M] = {}), (s = u[r]) && s[0] === q && s[1] === o)return l[2] = s[2];
					if (u[r] = l, l[2] = t(e, n, a))return !0
				}
			}
		}

		function p(t) {
			return t.length > 1 ? function (e, n, r) {
				for (var i = t.length; i--;)if (!t[i](e, n, r))return !1;
				return !0
			} : t[0]
		}

		function m(t, n, r) {
			for (var i = 0, o = n.length; o > i; i++)e(t, n[i], r);
			return r
		}

		function v(t, e, n, r, i) {
			for (var o, a = [], s = 0, u = t.length, l = null != e; u > s; s++)(o = t[s]) && (!n || n(o, r, i)) && (a.push(o), l && e.push(s));
			return a
		}

		function g(t, e, n, i, o, a) {
			return i && !i[M] && (i = g(i)), o && !o[M] && (o = g(o, a)), r(function (r, a, s, u) {
				var l, c, f, d = [], h = [], p = a.length, g = r || m(e || "*", s.nodeType ? [s] : s, []), $ = !t || !r && e ? g : v(g, d, t, s, u), y = n ? o || (r ? t : p || i) ? [] : a : $;
				if (n && n($, y, s, u), i)for (l = v(y, h), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[h[c]] = !($[h[c]] = f));
				if (r) {
					if (o || t) {
						if (o) {
							for (l = [], c = y.length; c--;)(f = y[c]) && l.push($[c] = f);
							o(null, y = [], l, u)
						}
						for (c = y.length; c--;)(f = y[c]) && (l = o ? te(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
					}
				} else y = v(y === a ? y.splice(p, y.length) : y), o ? o(null, a, y, u) : K.apply(a, y)
			})
		}

		function $(t) {
			for (var e, n, r, i = t.length, o = x.relative[t[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = h(function (t) {
				return t === e
			}, a, !0), l = h(function (t) {
				return te(e, t) > -1
			}, a, !0), c = [function (t, n, r) {
				var i = !o && (r || n !== A) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
				return e = null, i
			}]; i > s; s++)if (n = x.relative[t[s].type])c = [h(p(c), n)]; else {
				if (n = x.filter[t[s].type].apply(null, t[s].matches), n[M]) {
					for (r = ++s; i > r && !x.relative[t[r].type]; r++);
					return g(s > 1 && p(c), s > 1 && d(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(ue, "$1"), n, r > s && $(t.slice(s, r)), i > r && $(t = t.slice(r)), i > r && d(t))
				}
				c.push(n)
			}
			return p(c)
		}

		function y(t, n) {
			var i = n.length > 0, o = t.length > 0, a = function (r, a, s, u, l) {
				var c, f, d, h = 0, p = "0", m = r && [], g = [], $ = A, y = r || o && x.find.TAG("*", l), b = q += null == $ ? 1 : Math.random() || .1, w = y.length;
				for (l && (A = a !== O && a); p !== w && null != (c = y[p]); p++) {
					if (o && c) {
						for (f = 0; d = t[f++];)if (d(c, a, s)) {
							u.push(c);
							break
						}
						l && (q = b)
					}
					i && ((c = !d && c) && h--, r && m.push(c))
				}
				if (h += p, i && p !== h) {
					for (f = 0; d = n[f++];)d(m, g, a, s);
					if (r) {
						if (h > 0)for (; p--;)m[p] || g[p] || (g[p] = J.call(u));
						g = v(g)
					}
					K.apply(u, g), l && !r && g.length > 0 && h + n.length > 1 && e.uniqueSort(u)
				}
				return l && (q = b, A = $), m
			};
			return i ? r(a) : a
		}

		var b, w, x, C, T, S, E, k, A, _, N, D, O, j, R, F, P, H, I, M = "sizzle" + 1 * new Date, L = t.document, q = 0, U = 0, V = n(), B = n(), W = n(), z = function (t, e) {
			return t === e && (N = !0), 0
		}, X = 1 << 31, G = {}.hasOwnProperty, Y = [], J = Y.pop, Q = Y.push, K = Y.push, Z = Y.slice, te = function (t, e) {
			for (var n = 0, r = t.length; r > n; n++)if (t[n] === e)return n;
			return -1
		}, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = re.replace("w", "w#"), oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(ae), he = new RegExp("^" + ie + "$"), pe = {
			ID: new RegExp("^#(" + re + ")"),
			CLASS: new RegExp("^\\.(" + re + ")"),
			TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
			ATTR: new RegExp("^" + oe),
			PSEUDO: new RegExp("^" + ae),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
			bool: new RegExp("^(?:" + ee + ")$", "i"),
			needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
		}, me = /^(?:input|select|textarea|button)$/i, ve = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, $e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), xe = function (t, e, n) {
			var r = "0x" + e - 65536;
			return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
		}, Ce = function () {
			D()
		};
		try {
			K.apply(Y = Z.call(L.childNodes), L.childNodes), Y[L.childNodes.length].nodeType
		} catch (Te) {
			K = {
				apply: Y.length ? function (t, e) {
					Q.apply(t, Z.call(e))
				} : function (t, e) {
					for (var n = t.length, r = 0; t[n++] = e[r++];);
					t.length = n - 1
				}
			}
		}
		w = e.support = {}, T = e.isXML = function (t) {
			var e = t && (t.ownerDocument || t).documentElement;
			return e ? "HTML" !== e.nodeName : !1
		}, D = e.setDocument = function (t) {
			var e, n, r = t ? t.ownerDocument || t : L;
			return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, j = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), R = !T(r), w.attributes = i(function (t) {
				return t.className = "i", !t.getAttribute("className")
			}), w.getElementsByTagName = i(function (t) {
				return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length
			}), w.getElementsByClassName = ge.test(r.getElementsByClassName), w.getById = i(function (t) {
				return j.appendChild(t).id = M, !r.getElementsByName || !r.getElementsByName(M).length
			}), w.getById ? (x.find.ID = function (t, e) {
				if ("undefined" != typeof e.getElementById && R) {
					var n = e.getElementById(t);
					return n && n.parentNode ? [n] : []
				}
			}, x.filter.ID = function (t) {
				var e = t.replace(we, xe);
				return function (t) {
					return t.getAttribute("id") === e
				}
			}) : (delete x.find.ID, x.filter.ID = function (t) {
				var e = t.replace(we, xe);
				return function (t) {
					var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
					return n && n.value === e
				}
			}), x.find.TAG = w.getElementsByTagName ? function (t, e) {
				return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
			} : function (t, e) {
				var n, r = [], i = 0, o = e.getElementsByTagName(t);
				if ("*" === t) {
					for (; n = o[i++];)1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, x.find.CLASS = w.getElementsByClassName && function (t, e) {
				return R ? e.getElementsByClassName(t) : void 0
			}, P = [], F = [], (w.qsa = ge.test(r.querySelectorAll)) && (i(function (t) {
				j.appendChild(t).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + M + "-]").length || F.push("~="), t.querySelectorAll(":checked").length || F.push(":checked"), t.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]")
			}), i(function (t) {
				var e = r.createElement("input");
				e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
			})), (w.matchesSelector = ge.test(H = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function (t) {
				w.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), P.push("!=", ae)
			}), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), e = ge.test(j.compareDocumentPosition), I = e || ge.test(j.contains) ? function (t, e) {
				var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
				return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
			} : function (t, e) {
				if (e)for (; e = e.parentNode;)if (e === t)return !0;
				return !1
			}, z = e ? function (t, e) {
				if (t === e)return N = !0, 0;
				var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
				return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === L && I(L, t) ? -1 : e === r || e.ownerDocument === L && I(L, e) ? 1 : _ ? te(_, t) - te(_, e) : 0 : 4 & n ? -1 : 1)
			} : function (t, e) {
				if (t === e)return N = !0, 0;
				var n, i = 0, o = t.parentNode, s = e.parentNode, u = [t], l = [e];
				if (!o || !s)return t === r ? -1 : e === r ? 1 : o ? -1 : s ? 1 : _ ? te(_, t) - te(_, e) : 0;
				if (o === s)return a(t, e);
				for (n = t; n = n.parentNode;)u.unshift(n);
				for (n = e; n = n.parentNode;)l.unshift(n);
				for (; u[i] === l[i];)i++;
				return i ? a(u[i], l[i]) : u[i] === L ? -1 : l[i] === L ? 1 : 0
			}, r) : O
		}, e.matches = function (t, n) {
			return e(t, null, null, n)
		}, e.matchesSelector = function (t, n) {
			if ((t.ownerDocument || t) !== O && D(t), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !R || P && P.test(n) || F && F.test(n)))try {
				var r = H.call(t, n);
				if (r || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)return r
			} catch (i) {
			}
			return e(n, O, null, [t]).length > 0
		}, e.contains = function (t, e) {
			return (t.ownerDocument || t) !== O && D(t), I(t, e)
		}, e.attr = function (t, e) {
			(t.ownerDocument || t) !== O && D(t);
			var n = x.attrHandle[e.toLowerCase()], r = n && G.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !R) : void 0;
			return void 0 !== r ? r : w.attributes || !R ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
		}, e.error = function (t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		}, e.uniqueSort = function (t) {
			var e, n = [], r = 0, i = 0;
			if (N = !w.detectDuplicates, _ = !w.sortStable && t.slice(0), t.sort(z), N) {
				for (; e = t[i++];)e === t[i] && (r = n.push(i));
				for (; r--;)t.splice(n[r], 1)
			}
			return _ = null, t
		}, C = e.getText = function (t) {
			var e, n = "", r = 0, i = t.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof t.textContent)return t.textContent;
					for (t = t.firstChild; t; t = t.nextSibling)n += C(t)
				} else if (3 === i || 4 === i)return t.nodeValue
			} else for (; e = t[r++];)n += C(e);
			return n
		}, x = e.selectors = {
			cacheLength: 50,
			createPseudo: r,
			match: pe,
			attrHandle: {},
			find: {},
			relative: {
				">": {dir: "parentNode", first: !0},
				" ": {dir: "parentNode"},
				"+": {dir: "previousSibling", first: !0},
				"~": {dir: "previousSibling"}
			},
			preFilter: {
				ATTR: function (t) {
					return t[1] = t[1].replace(we, xe), t[3] = (t[3] || t[4] || t[5] || "").replace(we, xe), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
				}, CHILD: function (t) {
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
				}, PSEUDO: function (t) {
					var e, n = !t[6] && t[2];
					return pe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && de.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function (t) {
					var e = t.replace(we, xe).toLowerCase();
					return "*" === t ? function () {
						return !0
					} : function (t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					}
				}, CLASS: function (t) {
					var e = V[t + " "];
					return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && V(t, function (t) {
								return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
							})
				}, ATTR: function (t, n, r) {
					return function (i) {
						var o = e.attr(i, t);
						return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
					}
				}, CHILD: function (t, e, n, r, i) {
					var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
					return 1 === r && 0 === i ? function (t) {
						return !!t.parentNode
					} : function (e, n, u) {
						var l, c, f, d, h, p, m = o !== a ? "nextSibling" : "previousSibling", v = e.parentNode, g = s && e.nodeName.toLowerCase(), $ = !u && !s;
						if (v) {
							if (o) {
								for (; m;) {
									for (f = e; f = f[m];)if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType)return !1;
									p = m = "only" === t && !p && "nextSibling"
								}
								return !0
							}
							if (p = [a ? v.firstChild : v.lastChild], a && $) {
								for (c = v[M] || (v[M] = {}), l = c[t] || [], h = l[0] === q && l[1], d = l[0] === q && l[2], f = h && v.childNodes[h]; f = ++h && f && f[m] || (d = h = 0) || p.pop();)if (1 === f.nodeType && ++d && f === e) {
									c[t] = [q, h, d];
									break
								}
							} else if ($ && (l = (e[M] || (e[M] = {}))[t]) && l[0] === q)d = l[1]; else for (; (f = ++h && f && f[m] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++d || ($ && ((f[M] || (f[M] = {}))[t] = [q, d]), f !== e)););
							return d -= i, d === r || d % r === 0 && d / r >= 0
						}
					}
				}, PSEUDO: function (t, n) {
					var i, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
					return o[M] ? o(n) : o.length > 1 ? (i = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
						for (var r, i = o(t, n), a = i.length; a--;)r = te(t, i[a]), t[r] = !(e[r] = i[a])
					}) : function (t) {
						return o(t, 0, i)
					}) : o
				}
			},
			pseudos: {
				not: r(function (t) {
					var e = [], n = [], i = E(t.replace(ue, "$1"));
					return i[M] ? r(function (t, e, n, r) {
						for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
					}) : function (t, r, o) {
						return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
					}
				}), has: r(function (t) {
					return function (n) {
						return e(t, n).length > 0
					}
				}), contains: r(function (t) {
					return t = t.replace(we, xe), function (e) {
						return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
					}
				}), lang: r(function (t) {
					return he.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, xe).toLowerCase(), function (e) {
						var n;
						do if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
						return !1
					}
				}), target: function (e) {
					var n = t.location && t.location.hash;
					return n && n.slice(1) === e.id
				}, root: function (t) {
					return t === j
				}, focus: function (t) {
					return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
				}, enabled: function (t) {
					return t.disabled === !1
				}, disabled: function (t) {
					return t.disabled === !0
				}, checked: function (t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && !!t.checked || "option" === e && !!t.selected
				}, selected: function (t) {
					return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
				}, empty: function (t) {
					for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
					return !0
				}, parent: function (t) {
					return !x.pseudos.empty(t)
				}, header: function (t) {
					return ve.test(t.nodeName)
				}, input: function (t) {
					return me.test(t.nodeName)
				}, button: function (t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && "button" === t.type || "button" === e
				}, text: function (t) {
					var e;
					return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
				}, first: l(function () {
					return [0]
				}), last: l(function (t, e) {
					return [e - 1]
				}), eq: l(function (t, e, n) {
					return [0 > n ? n + e : n]
				}), even: l(function (t, e) {
					for (var n = 0; e > n; n += 2)t.push(n);
					return t
				}), odd: l(function (t, e) {
					for (var n = 1; e > n; n += 2)t.push(n);
					return t
				}), lt: l(function (t, e, n) {
					for (var r = 0 > n ? n + e : n; --r >= 0;)t.push(r);
					return t
				}), gt: l(function (t, e, n) {
					for (var r = 0 > n ? n + e : n; ++r < e;)t.push(r);
					return t
				})
			}
		}, x.pseudos.nth = x.pseudos.eq;
		for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})x.pseudos[b] = s(b);
		for (b in{submit: !0, reset: !0})x.pseudos[b] = u(b);
		return f.prototype = x.filters = x.pseudos, x.setFilters = new f, S = e.tokenize = function (t, n) {
			var r, i, o, a, s, u, l, c = B[t + " "];
			if (c)return n ? 0 : c.slice(0);
			for (s = t, u = [], l = x.preFilter; s;) {
				(!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
					value: r,
					type: i[0].replace(ue, " ")
				}), s = s.slice(r.length));
				for (a in x.filter)!(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
					value: r,
					type: a,
					matches: i
				}), s = s.slice(r.length));
				if (!r)break
			}
			return n ? s.length : s ? e.error(t) : B(t, u).slice(0)
		}, E = e.compile = function (t, e) {
			var n, r = [], i = [], o = W[t + " "];
			if (!o) {
				for (e || (e = S(t)), n = e.length; n--;)o = $(e[n]), o[M] ? r.push(o) : i.push(o);
				o = W(t, y(i, r)), o.selector = t
			}
			return o
		}, k = e.select = function (t, e, n, r) {
			var i, o, a, s, u, l = "function" == typeof t && t, f = !r && S(t = l.selector || t);
			if (n = n || [], 1 === f.length) {
				if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && R && x.relative[o[1].type]) {
					if (e = (x.find.ID(a.matches[0].replace(we, xe), e) || [])[0], !e)return n;
					l && (e = e.parentNode), t = t.slice(o.shift().value.length)
				}
				for (i = pe.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)if ((u = x.find[s]) && (r = u(a.matches[0].replace(we, xe), ye.test(o[0].type) && c(e.parentNode) || e))) {
					if (o.splice(i, 1), t = r.length && d(o), !t)return K.apply(n, r), n;
					break
				}
			}
			return (l || E(t, f))(r, e, !R, n, ye.test(t) && c(e.parentNode) || e), n
		}, w.sortStable = M.split("").sort(z).join("") === M, w.detectDuplicates = !!N, D(), w.sortDetached = i(function (t) {
			return 1 & t.compareDocumentPosition(O.createElement("div"))
		}), i(function (t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function (t, e, n) {
			return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), w.attributes && i(function (t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || o("value", function (t, e, n) {
			return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}), i(function (t) {
			return null == t.getAttribute("disabled")
		}) || o(ee, function (t, e, n) {
			var r;
			return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
		}), e
	}(t);
	ie.find = le, ie.expr = le.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = le.uniqueSort, ie.text = le.getText, ie.isXMLDoc = le.isXML, ie.contains = le.contains;
	var ce = ie.expr.match.needsContext, fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, de = /^.[^:#\[\.,]*$/;
	ie.filter = function (t, e, n) {
		var r = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? ie.find.matchesSelector(r, t) ? [r] : [] : ie.find.matches(t, ie.grep(e, function (t) {
			return 1 === t.nodeType
		}))
	}, ie.fn.extend({
		find: function (t) {
			var e, n = [], r = this, i = r.length;
			if ("string" != typeof t)return this.pushStack(ie(t).filter(function () {
				for (e = 0; i > e; e++)if (ie.contains(r[e], this))return !0
			}));
			for (e = 0; i > e; e++)ie.find(t, r[e], n);
			return n = this.pushStack(i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
		}, filter: function (t) {
			return this.pushStack(r(this, t || [], !1))
		}, not: function (t) {
			return this.pushStack(r(this, t || [], !0))
		}, is: function (t) {
			return !!r(this, "string" == typeof t && ce.test(t) ? ie(t) : t || [], !1).length
		}
	});
	var he, pe = t.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ve = ie.fn.init = function (t, e) {
		var n, r;
		if (!t)return this;
		if ("string" == typeof t) {
			if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !n || !n[1] && e)return !e || e.jquery ? (e || he).find(t) : this.constructor(e).find(t);
			if (n[1]) {
				if (e = e instanceof ie ? e[0] : e, ie.merge(this, ie.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : pe, !0)), fe.test(n[1]) && ie.isPlainObject(e))for (n in e)ie.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
				return this
			}
			if (r = pe.getElementById(n[2]), r && r.parentNode) {
				if (r.id !== n[2])return he.find(t);
				this.length = 1, this[0] = r
			}
			return this.context = pe, this.selector = t, this
		}
		return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ie.isFunction(t) ? "undefined" != typeof he.ready ? he.ready(t) : t(ie) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ie.makeArray(t, this))
	};
	ve.prototype = ie.fn, he = ie(pe);
	var ge = /^(?:parents|prev(?:Until|All))/, $e = {children: !0, contents: !0, next: !0, prev: !0};
	ie.extend({
		dir: function (t, e, n) {
			for (var r = [], i = t[e]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));)1 === i.nodeType && r.push(i), i = i[e];
			return r
		}, sibling: function (t, e) {
			for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
			return n
		}
	}), ie.fn.extend({
		has: function (t) {
			var e, n = ie(t, this), r = n.length;
			return this.filter(function () {
				for (e = 0; r > e; e++)if (ie.contains(this, n[e]))return !0
			})
		}, closest: function (t, e) {
			for (var n, r = 0, i = this.length, o = [], a = ce.test(t) || "string" != typeof t ? ie(t, e || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, t))) {
				o.push(n);
				break
			}
			return this.pushStack(o.length > 1 ? ie.unique(o) : o)
		}, index: function (t) {
			return t ? "string" == typeof t ? ie.inArray(this[0], ie(t)) : ie.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		}, add: function (t, e) {
			return this.pushStack(ie.unique(ie.merge(this.get(), ie(t, e))))
		}, addBack: function (t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), ie.each({
		parent: function (t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		}, parents: function (t) {
			return ie.dir(t, "parentNode")
		}, parentsUntil: function (t, e, n) {
			return ie.dir(t, "parentNode", n)
		}, next: function (t) {
			return i(t, "nextSibling")
		}, prev: function (t) {
			return i(t, "previousSibling")
		}, nextAll: function (t) {
			return ie.dir(t, "nextSibling")
		}, prevAll: function (t) {
			return ie.dir(t, "previousSibling")
		}, nextUntil: function (t, e, n) {
			return ie.dir(t, "nextSibling", n)
		}, prevUntil: function (t, e, n) {
			return ie.dir(t, "previousSibling", n)
		}, siblings: function (t) {
			return ie.sibling((t.parentNode || {}).firstChild, t)
		}, children: function (t) {
			return ie.sibling(t.firstChild)
		}, contents: function (t) {
			return ie.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ie.merge([], t.childNodes)
		}
	}, function (t, e) {
		ie.fn[t] = function (n, r) {
			var i = ie.map(this, e, n);
			return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && ($e[t] || (i = ie.unique(i)), ge.test(t) && (i = i.reverse())), this.pushStack(i)
		}
	});
	var ye = /\S+/g, be = {};
	ie.Callbacks = function (t) {
		t = "string" == typeof t ? be[t] || o(t) : ie.extend({}, t);
		var e, n, r, i, a, s, u = [], l = !t.once && [], c = function (o) {
			for (n = t.memory && o, r = !0, a = s || 0, s = 0, i = u.length, e = !0; u && i > a; a++)if (u[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
				n = !1;
				break
			}
			e = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : f.disable())
		}, f = {
			add: function () {
				if (u) {
					var r = u.length;
					!function o(e) {
						ie.each(e, function (e, n) {
							var r = ie.type(n);
							"function" === r ? t.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
						})
					}(arguments), e ? i = u.length : n && (s = r, c(n))
				}
				return this
			}, remove: function () {
				return u && ie.each(arguments, function (t, n) {
					for (var r; (r = ie.inArray(n, u, r)) > -1;)u.splice(r, 1), e && (i >= r && i--, a >= r && a--)
				}), this
			}, has: function (t) {
				return t ? ie.inArray(t, u) > -1 : !(!u || !u.length)
			}, empty: function () {
				return u = [], i = 0, this
			}, disable: function () {
				return u = l = n = void 0, this
			}, disabled: function () {
				return !u
			}, lock: function () {
				return l = void 0, n || f.disable(), this
			}, locked: function () {
				return !l
			}, fireWith: function (t, n) {
				return !u || r && !l || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? l.push(n) : c(n)), this
			}, fire: function () {
				return f.fireWith(this, arguments), this
			}, fired: function () {
				return !!r
			}
		};
		return f
	}, ie.extend({
		Deferred: function (t) {
			var e = [["resolve", "done", ie.Callbacks("once memory"), "resolved"], ["reject", "fail", ie.Callbacks("once memory"), "rejected"], ["notify", "progress", ie.Callbacks("memory")]], n = "pending", r = {
				state: function () {
					return n
				}, always: function () {
					return i.done(arguments).fail(arguments), this
				}, then: function () {
					var t = arguments;
					return ie.Deferred(function (n) {
						ie.each(e, function (e, o) {
							var a = ie.isFunction(t[e]) && t[e];
							i[o[1]](function () {
								var t = a && a.apply(this, arguments);
								t && ie.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
							})
						}), t = null
					}).promise()
				}, promise: function (t) {
					return null != t ? ie.extend(t, r) : r
				}
			}, i = {};
			return r.pipe = r.then, ie.each(e, function (t, o) {
				var a = o[2], s = o[3];
				r[o[1]] = a.add, s && a.add(function () {
					n = s
				}, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function () {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), t && t.call(i, i), i
		}, when: function (t) {
			var e, n, r, i = 0, o = Y.call(arguments), a = o.length, s = 1 !== a || t && ie.isFunction(t.promise) ? a : 0, u = 1 === s ? t : ie.Deferred(), l = function (t, n, r) {
				return function (i) {
					n[t] = this, r[t] = arguments.length > 1 ? Y.call(arguments) : i, r === e ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
				}
			};
			if (a > 1)for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, e)) : --s;
			return s || u.resolveWith(r, o), u.promise()
		}
	});
	var we;
	ie.fn.ready = function (t) {
		return ie.ready.promise().done(t), this
	}, ie.extend({
		isReady: !1, readyWait: 1, holdReady: function (t) {
			t ? ie.readyWait++ : ie.ready(!0)
		}, ready: function (t) {
			if (t === !0 ? !--ie.readyWait : !ie.isReady) {
				if (!pe.body)return setTimeout(ie.ready);
				ie.isReady = !0, t !== !0 && --ie.readyWait > 0 || (we.resolveWith(pe, [ie]), ie.fn.triggerHandler && (ie(pe).triggerHandler("ready"), ie(pe).off("ready")))
			}
		}
	}), ie.ready.promise = function (e) {
		if (!we)if (we = ie.Deferred(), "complete" === pe.readyState)setTimeout(ie.ready); else if (pe.addEventListener)pe.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1); else {
			pe.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
			var n = !1;
			try {
				n = null == t.frameElement && pe.documentElement
			} catch (r) {
			}
			n && n.doScroll && !function i() {
				if (!ie.isReady) {
					try {
						n.doScroll("left")
					} catch (t) {
						return setTimeout(i, 50)
					}
					a(), ie.ready()
				}
			}()
		}
		return we.promise(e)
	};
	var xe, Ce = "undefined";
	for (xe in ie(ne))break;
	ne.ownLast = "0" !== xe, ne.inlineBlockNeedsLayout = !1, ie(function () {
		var t, e, n, r;
		n = pe.getElementsByTagName("body")[0], n && n.style && (e = pe.createElement("div"), r = pe.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(r))
	}), function () {
		var t = pe.createElement("div");
		if (null == ne.deleteExpando) {
			ne.deleteExpando = !0;
			try {
				delete t.test
			} catch (e) {
				ne.deleteExpando = !1
			}
		}
		t = null
	}(), ie.acceptData = function (t) {
		var e = ie.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
		return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
	};
	var Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Se = /([A-Z])/g;
	ie.extend({
		cache: {},
		noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
		hasData: function (t) {
			return t = t.nodeType ? ie.cache[t[ie.expando]] : t[ie.expando], !!t && !l(t)
		},
		data: function (t, e, n) {
			return c(t, e, n)
		},
		removeData: function (t, e) {
			return f(t, e)
		},
		_data: function (t, e, n) {
			return c(t, e, n, !0)
		},
		_removeData: function (t, e) {
			return f(t, e, !0)
		}
	}), ie.fn.extend({
		data: function (t, e) {
			var n, r, i, o = this[0], a = o && o.attributes;
			if (void 0 === t) {
				if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
					for (n = a.length; n--;)a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), u(o, r, i[r])));
					ie._data(o, "parsedAttrs", !0)
				}
				return i
			}
			return "object" == typeof t ? this.each(function () {
				ie.data(this, t)
			}) : arguments.length > 1 ? this.each(function () {
				ie.data(this, t, e)
			}) : o ? u(o, t, ie.data(o, t)) : void 0
		}, removeData: function (t) {
			return this.each(function () {
				ie.removeData(this, t)
			})
		}
	}), ie.extend({
		queue: function (t, e, n) {
			var r;
			return t ? (e = (e || "fx") + "queue", r = ie._data(t, e), n && (!r || ie.isArray(n) ? r = ie._data(t, e, ie.makeArray(n)) : r.push(n)), r || []) : void 0
		}, dequeue: function (t, e) {
			e = e || "fx";
			var n = ie.queue(t, e), r = n.length, i = n.shift(), o = ie._queueHooks(t, e), a = function () {
				ie.dequeue(t, e)
			};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
		}, _queueHooks: function (t, e) {
			var n = e + "queueHooks";
			return ie._data(t, n) || ie._data(t, n, {
						empty: ie.Callbacks("once memory").add(function () {
							ie._removeData(t, e + "queue"), ie._removeData(t, n)
						})
					})
		}
	}), ie.fn.extend({
		queue: function (t, e) {
			var n = 2;
			return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ie.queue(this[0], t) : void 0 === e ? this : this.each(function () {
				var n = ie.queue(this, t, e);
				ie._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ie.dequeue(this, t)
			})
		}, dequeue: function (t) {
			return this.each(function () {
				ie.dequeue(this, t)
			})
		}, clearQueue: function (t) {
			return this.queue(t || "fx", [])
		}, promise: function (t, e) {
			var n, r = 1, i = ie.Deferred(), o = this, a = this.length, s = function () {
				--r || i.resolveWith(o, [o])
			};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)n = ie._data(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(e)
		}
	});
	var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ke = ["Top", "Right", "Bottom", "Left"], Ae = function (t, e) {
		return t = e || t, "none" === ie.css(t, "display") || !ie.contains(t.ownerDocument, t)
	}, _e = ie.access = function (t, e, n, r, i, o, a) {
		var s = 0, u = t.length, l = null == n;
		if ("object" === ie.type(n)) {
			i = !0;
			for (s in n)ie.access(t, e, s, n[s], !0, o, a)
		} else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), l && (a ? (e.call(t, r), e = null) : (l = e, e = function (t, e, n) {
					return l.call(ie(t), n)
				})), e))for (; u > s; s++)e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
		return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
	}, Ne = /^(?:checkbox|radio)$/i;
	!function () {
		var t = pe.createElement("input"), e = pe.createElement("div"), n = pe.createDocumentFragment();
		if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
					ne.noCloneEvent = !1
				}), e.cloneNode(!0).click()), null == ne.deleteExpando) {
			ne.deleteExpando = !0;
			try {
				delete e.test
			} catch (r) {
				ne.deleteExpando = !1
			}
		}
	}(), function () {
		var e, n, r = pe.createElement("div");
		for (e in{
			submit: !0,
			change: !0,
			focusin: !0
		})n = "on" + e, (ne[e + "Bubbles"] = n in t) || (r.setAttribute(n, "t"), ne[e + "Bubbles"] = r.attributes[n].expando === !1);
		r = null
	}();
	var De = /^(?:input|select|textarea)$/i, Oe = /^key/, je = /^(?:mouse|pointer|contextmenu)|click/, Re = /^(?:focusinfocus|focusoutblur)$/, Fe = /^([^.]*)(?:\.(.+)|)$/;
	ie.event = {
		global: {},
		add: function (t, e, n, r, i) {
			var o, a, s, u, l, c, f, d, h, p, m, v = ie._data(t);
			if (v) {
				for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ie.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || (c = v.handle = function (t) {
					return typeof ie === Ce || t && ie.event.triggered === t.type ? void 0 : ie.event.dispatch.apply(c.elem, arguments)
				}, c.elem = t), e = (e || "").match(ye) || [""], s = e.length; s--;)o = Fe.exec(e[s]) || [], h = m = o[1], p = (o[2] || "").split(".").sort(), h && (l = ie.event.special[h] || {}, h = (i ? l.delegateType : l.bindType) || h, l = ie.event.special[h] || {}, f = ie.extend({
					type: h,
					origType: m,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && ie.expr.match.needsContext.test(i),
					namespace: p.join(".")
				}, u), (d = a[h]) || (d = a[h] = [], d.delegateCount = 0, l.setup && l.setup.call(t, r, p, c) !== !1 || (t.addEventListener ? t.addEventListener(h, c, !1) : t.attachEvent && t.attachEvent("on" + h, c))), l.add && (l.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), ie.event.global[h] = !0);
				t = null
			}
		},
		remove: function (t, e, n, r, i) {
			var o, a, s, u, l, c, f, d, h, p, m, v = ie.hasData(t) && ie._data(t);
			if (v && (c = v.events)) {
				for (e = (e || "").match(ye) || [""], l = e.length; l--;)if (s = Fe.exec(e[l]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
					for (f = ie.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;)a = d[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(t, a));
					u && !d.length && (f.teardown && f.teardown.call(t, p, v.handle) !== !1 || ie.removeEvent(t, h, v.handle), delete c[h])
				} else for (h in c)ie.event.remove(t, h + e[l], n, r, !0);
				ie.isEmptyObject(c) && (delete v.handle, ie._removeData(t, "events"))
			}
		},
		trigger: function (e, n, r, i) {
			var o, a, s, u, l, c, f, d = [r || pe], h = ee.call(e, "type") ? e.type : e, p = ee.call(e, "namespace") ? e.namespace.split(".") : [];
			if (s = c = r = r || pe, 3 !== r.nodeType && 8 !== r.nodeType && !Re.test(h + ie.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, e = e[ie.expando] ? e : new ie.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : ie.makeArray(n, [e]), l = ie.event.special[h] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
				if (!i && !l.noBubble && !ie.isWindow(r)) {
					for (u = l.delegateType || h, Re.test(u + h) || (s = s.parentNode); s; s = s.parentNode)d.push(s), c = s;
					c === (r.ownerDocument || pe) && d.push(c.defaultView || c.parentWindow || t)
				}
				for (f = 0; (s = d[f++]) && !e.isPropagationStopped();)e.type = f > 1 ? u : l.bindType || h, o = (ie._data(s, "events") || {})[e.type] && ie._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ie.acceptData(s) && (e.result = o.apply(s, n), e.result === !1 && e.preventDefault());
				if (e.type = h, !i && !e.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && ie.acceptData(r) && a && r[h] && !ie.isWindow(r)) {
					c = r[a], c && (r[a] = null), ie.event.triggered = h;
					try {
						r[h]()
					} catch (m) {
					}
					ie.event.triggered = void 0, c && (r[a] = c)
				}
				return e.result
			}
		},
		dispatch: function (t) {
			t = ie.event.fix(t);
			var e, n, r, i, o, a = [], s = Y.call(arguments), u = (ie._data(this, "events") || {})[t.type] || [], l = ie.event.special[t.type] || {};
			if (s[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
				for (a = ie.event.handlers.call(this, t, u), e = 0; (i = a[e++]) && !t.isPropagationStopped();)for (t.currentTarget = i.elem, o = 0; (r = i.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, t), t.result
			}
		},
		handlers: function (t, e) {
			var n, r, i, o, a = [], s = e.delegateCount, u = t.target;
			if (s && u.nodeType && (!t.button || "click" !== t.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
				for (i = [], o = 0; s > o; o++)r = e[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(u) >= 0 : ie.find(n, this, null, [u]).length), i[n] && i.push(r);
				i.length && a.push({elem: u, handlers: i})
			}
			return s < e.length && a.push({elem: this, handlers: e.slice(s)}), a
		},
		fix: function (t) {
			if (t[ie.expando])return t;
			var e, n, r, i = t.type, o = t, a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = je.test(i) ? this.mouseHooks : Oe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new ie.Event(o), e = r.length; e--;)n = r[e], t[n] = o[n];
			return t.target || (t.target = o.srcElement || pe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "), filter: function (t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (t, e) {
				var n, r, i, o = e.button, a = e.fromElement;
				return null == t.pageX && null != e.clientX && (r = t.target.ownerDocument || pe, i = r.documentElement, n = r.body, t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
			}
		},
		special: {
			load: {noBubble: !0}, focus: {
				trigger: function () {
					if (this !== p() && this.focus)try {
						return this.focus(), !1
					} catch (t) {
					}
				}, delegateType: "focusin"
			}, blur: {
				trigger: function () {
					return this === p() && this.blur ? (this.blur(), !1) : void 0
				}, delegateType: "focusout"
			}, click: {
				trigger: function () {
					return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				}, _default: function (t) {
					return ie.nodeName(t.target, "a")
				}
			}, beforeunload: {
				postDispatch: function (t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function (t, e, n, r) {
			var i = ie.extend(new ie.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
			r ? ie.event.trigger(i, null, e) : ie.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, ie.removeEvent = pe.removeEventListener ? function (t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n, !1)
	} : function (t, e, n) {
		var r = "on" + e;
		t.detachEvent && (typeof t[r] === Ce && (t[r] = null), t.detachEvent(r, n))
	}, ie.Event = function (t, e) {
		return this instanceof ie.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : h) : this.type = t, e && ie.extend(this, e), this.timeStamp = t && t.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(t, e)
	}, ie.Event.prototype = {
		isDefaultPrevented: h,
		isPropagationStopped: h,
		isImmediatePropagationStopped: h,
		preventDefault: function () {
			var t = this.originalEvent;
			this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
		},
		stopPropagation: function () {
			var t = this.originalEvent;
			this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, ie.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (t, e) {
		ie.event.special[t] = {
			delegateType: e, bindType: e, handle: function (t) {
				var n, r = this, i = t.relatedTarget, o = t.handleObj;
				return (!i || i !== r && !ie.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
			}
		}
	}), ne.submitBubbles || (ie.event.special.submit = {
		setup: function () {
			return ie.nodeName(this, "form") ? !1 : void ie.event.add(this, "click._submit keypress._submit", function (t) {
				var e = t.target, n = ie.nodeName(e, "input") || ie.nodeName(e, "button") ? e.form : void 0;
				n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function (t) {
					t._submit_bubble = !0
				}), ie._data(n, "submitBubbles", !0))
			})
		}, postDispatch: function (t) {
			t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ie.event.simulate("submit", this.parentNode, t, !0))
		}, teardown: function () {
			return ie.nodeName(this, "form") ? !1 : void ie.event.remove(this, "._submit")
		}
	}), ne.changeBubbles || (ie.event.special.change = {
		setup: function () {
			return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function (t) {
				"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
			}), ie.event.add(this, "click._change", function (t) {
				this._just_changed && !t.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, t, !0)
			})), !1) : void ie.event.add(this, "beforeactivate._change", function (t) {
				var e = t.target;
				De.test(e.nodeName) && !ie._data(e, "changeBubbles") && (ie.event.add(e, "change._change", function (t) {
					!this.parentNode || t.isSimulated || t.isTrigger || ie.event.simulate("change", this.parentNode, t, !0)
				}), ie._data(e, "changeBubbles", !0))
			})
		}, handle: function (t) {
			var e = t.target;
			return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
		}, teardown: function () {
			return ie.event.remove(this, "._change"), !De.test(this.nodeName)
		}
	}), ne.focusinBubbles || ie.each({focus: "focusin", blur: "focusout"}, function (t, e) {
		var n = function (t) {
			ie.event.simulate(e, t.target, ie.event.fix(t), !0)
		};
		ie.event.special[e] = {
			setup: function () {
				var r = this.ownerDocument || this, i = ie._data(r, e);
				i || r.addEventListener(t, n, !0), ie._data(r, e, (i || 0) + 1)
			}, teardown: function () {
				var r = this.ownerDocument || this, i = ie._data(r, e) - 1;
				i ? ie._data(r, e, i) : (r.removeEventListener(t, n, !0), ie._removeData(r, e))
			}
		}
	}), ie.fn.extend({
		on: function (t, e, n, r, i) {
			var o, a;
			if ("object" == typeof t) {
				"string" != typeof e && (n = n || e, e = void 0);
				for (o in t)this.on(o, e, n, t[o], i);
				return this
			}
			if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1)r = h; else if (!r)return this;
			return 1 === i && (a = r, r = function (t) {
				return ie().off(t), a.apply(this, arguments)
			}, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function () {
				ie.event.add(this, t, r, n, e)
			})
		}, one: function (t, e, n, r) {
			return this.on(t, e, n, r, 1)
		}, off: function (t, e, n) {
			var r, i;
			if (t && t.preventDefault && t.handleObj)return r = t.handleObj, ie(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof t) {
				for (i in t)this.off(i, e, t[i]);
				return this
			}
			return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = h), this.each(function () {
				ie.event.remove(this, t, n, e)
			})
		}, trigger: function (t, e) {
			return this.each(function () {
				ie.event.trigger(t, e, this)
			})
		}, triggerHandler: function (t, e) {
			var n = this[0];
			return n ? ie.event.trigger(t, e, n, !0) : void 0
		}
	});
	var Pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", He = / jQuery\d+="(?:null|\d+)"/g, Ie = new RegExp("<(?:" + Pe + ")[\\s/>]", "i"), Me = /^\s+/, Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, qe = /<([\w:]+)/, Ue = /<tbody/i, Ve = /<|&#?\w+;/, Be = /<(?:script|style|link)/i, We = /checked\s*(?:[^=]|=\s*.checked.)/i, ze = /^$|\/(?:java|ecma)script/i, Xe = /^true\/(.*)/, Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ye = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	}, Je = m(pe), Qe = Je.appendChild(pe.createElement("div"));
	Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td, ie.extend({
		clone: function (t, e, n) {
			var r, i, o, a, s, u = ie.contains(t.ownerDocument, t);
			if (ne.html5Clone || ie.isXMLDoc(t) || !Ie.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Qe.innerHTML = t.outerHTML, Qe.removeChild(o = Qe.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ie.isXMLDoc(t)))for (r = v(o), s = v(t), a = 0; null != (i = s[a]); ++a)r[a] && C(i, r[a]);
			if (e)if (n)for (s = s || v(t), r = r || v(o), a = 0; null != (i = s[a]); a++)x(i, r[a]); else x(t, o);
			return r = v(o, "script"), r.length > 0 && w(r, !u && v(t, "script")), r = s = i = null, o
		}, buildFragment: function (t, e, n, r) {
			for (var i, o, a, s, u, l, c, f = t.length, d = m(e), h = [], p = 0; f > p; p++)if (o = t[p], o || 0 === o)if ("object" === ie.type(o))ie.merge(h, o.nodeType ? [o] : o); else if (Ve.test(o)) {
				for (s = s || d.appendChild(e.createElement("div")), u = (qe.exec(o) || ["", ""])[1].toLowerCase(), c = Ye[u] || Ye._default, s.innerHTML = c[1] + o.replace(Le, "<$1></$2>") + c[2], i = c[0]; i--;)s = s.lastChild;
				if (!ne.leadingWhitespace && Me.test(o) && h.push(e.createTextNode(Me.exec(o)[0])), !ne.tbody)for (o = "table" !== u || Ue.test(o) ? "<table>" !== c[1] || Ue.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;)ie.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
				for (ie.merge(h, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
				s = d.lastChild
			} else h.push(e.createTextNode(o));
			for (s && d.removeChild(s), ne.appendChecked || ie.grep(v(h, "input"), g), p = 0; o = h[p++];)if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), s = v(d.appendChild(o), "script"), a && w(s), n))for (i = 0; o = s[i++];)ze.test(o.type || "") && n.push(o);
			return s = null, d
		}, cleanData: function (t, e) {
			for (var n, r, i, o, a = 0, s = ie.expando, u = ie.cache, l = ne.deleteExpando, c = ie.event.special; null != (n = t[a]); a++)if ((e || ie.acceptData(n)) && (i = n[s], o = i && u[i])) {
				if (o.events)for (r in o.events)c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
				u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, G.push(i))
			}
		}
	}), ie.fn.extend({
		text: function (t) {
			return _e(this, function (t) {
				return void 0 === t ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(t))
			}, null, t, arguments.length)
		}, append: function () {
			return this.domManip(arguments, function (t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = $(this, t);
					e.appendChild(t)
				}
			})
		}, prepend: function () {
			return this.domManip(arguments, function (t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = $(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		}, before: function () {
			return this.domManip(arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		}, after: function () {
			return this.domManip(arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		}, remove: function (t, e) {
			for (var n, r = t ? ie.filter(t, this) : this, i = 0; null != (n = r[i]); i++)e || 1 !== n.nodeType || ie.cleanData(v(n)), n.parentNode && (e && ie.contains(n.ownerDocument, n) && w(v(n, "script")), n.parentNode.removeChild(n));
			return this
		}, empty: function () {
			for (var t, e = 0; null != (t = this[e]); e++) {
				for (1 === t.nodeType && ie.cleanData(v(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
				t.options && ie.nodeName(t, "select") && (t.options.length = 0)
			}
			return this
		}, clone: function (t, e) {
			return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
				return ie.clone(this, t, e)
			})
		}, html: function (t) {
			return _e(this, function (t) {
				var e = this[0] || {}, n = 0, r = this.length;
				if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(He, "") : void 0;
				if (!("string" != typeof t || Be.test(t) || !ne.htmlSerialize && Ie.test(t) || !ne.leadingWhitespace && Me.test(t) || Ye[(qe.exec(t) || ["", ""])[1].toLowerCase()])) {
					t = t.replace(Le, "<$1></$2>");
					try {
						for (; r > n; n++)e = this[n] || {}, 1 === e.nodeType && (ie.cleanData(v(e, !1)), e.innerHTML = t);
						e = 0
					} catch (i) {
					}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		}, replaceWith: function () {
			var t = arguments[0];
			return this.domManip(arguments, function (e) {
				t = this.parentNode, ie.cleanData(v(this)), t && t.replaceChild(e, this)
			}), t && (t.length || t.nodeType) ? this : this.remove()
		}, detach: function (t) {
			return this.remove(t, !0)
		}, domManip: function (t, e) {
			t = J.apply([], t);
			var n, r, i, o, a, s, u = 0, l = this.length, c = this, f = l - 1, d = t[0], h = ie.isFunction(d);
			if (h || l > 1 && "string" == typeof d && !ne.checkClone && We.test(d))return this.each(function (n) {
				var r = c.eq(n);
				h && (t[0] = d.call(this, n, r.html())), r.domManip(t, e)
			});
			if (l && (s = ie.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
				for (o = ie.map(v(s, "script"), y), i = o.length; l > u; u++)r = s, u !== f && (r = ie.clone(r, !0, !0), i && ie.merge(o, v(r, "script"))), e.call(this[u], r, u);
				if (i)for (a = o[o.length - 1].ownerDocument, ie.map(o, b), u = 0; i > u; u++)r = o[u], ze.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Ge, "")));
				s = n = null
			}
			return this
		}
	}), ie.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (t, e) {
		ie.fn[t] = function (t) {
			for (var n, r = 0, i = [], o = ie(t), a = o.length - 1; a >= r; r++)n = r === a ? this : this.clone(!0), ie(o[r])[e](n), Q.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var Ke, Ze = {};
	!function () {
		var t;
		ne.shrinkWrapBlocks = function () {
			if (null != t)return t;
			t = !1;
			var e, n, r;
			return n = pe.getElementsByTagName("body")[0], n && n.style ? (e = pe.createElement("div"), r = pe.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(r), t) : void 0
		}
	}();
	var tn, en, nn = /^margin/, rn = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"), on = /^(top|right|bottom|left)$/;
	t.getComputedStyle ? (tn = function (e) {
		return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
	}, en = function (t, e, n) {
		var r, i, o, a, s = t.style;
		return n = n || tn(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || ie.contains(t.ownerDocument, t) || (a = ie.style(t, e)), rn.test(a) && nn.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
	}) : pe.documentElement.currentStyle && (tn = function (t) {
		return t.currentStyle
	}, en = function (t, e, n) {
		var r, i, o, a, s = t.style;
		return n = n || tn(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), rn.test(a) && !on.test(e) && (r = s.left, i = t.runtimeStyle, o = i && i.left, o && (i.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
	}), function () {
		function e() {
			var e, n, r, i;
			n = pe.getElementsByTagName("body")[0], n && n.style && (e = pe.createElement("div"), r = pe.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, i = e.appendChild(pe.createElement("div")), i.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", e.style.width = "1px", u = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight), e.removeChild(i)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = e.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
		}

		var n, r, i, o, a, s, u;
		n = pe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ie.extend(ne, {
			reliableHiddenOffsets: function () {
				return null == s && e(), s
			}, boxSizingReliable: function () {
				return null == a && e(), a
			}, pixelPosition: function () {
				return null == o && e(), o
			}, reliableMarginRight: function () {
				return null == u && e(), u
			}
		}))
	}(), ie.swap = function (t, e, n, r) {
		var i, o, a = {};
		for (o in e)a[o] = t.style[o], t.style[o] = e[o];
		i = n.apply(t, r || []);
		for (o in e)t.style[o] = a[o];
		return i
	};
	var an = /alpha\([^)]*\)/i, sn = /opacity\s*=\s*([^)]*)/, un = /^(none|table(?!-c[ea]).+)/, ln = new RegExp("^(" + Ee + ")(.*)$", "i"), cn = new RegExp("^([+-])=(" + Ee + ")", "i"), fn = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	}, dn = {letterSpacing: "0", fontWeight: "400"}, hn = ["Webkit", "O", "Moz", "ms"];
	ie.extend({
		cssHooks: {
			opacity: {
				get: function (t, e) {
					if (e) {
						var n = en(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {"float": ne.cssFloat ? "cssFloat" : "styleFloat"},
		style: function (t, e, n, r) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var i, o, a, s = ie.camelCase(e), u = t.style;
				if (e = ie.cssProps[s] || (ie.cssProps[s] = k(u, s)), a = ie.cssHooks[e] || ie.cssHooks[s], void 0 === n)return a && "get"in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e];
				if (o = typeof n, "string" === o && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), !(a && "set"in a && void 0 === (n = a.set(t, n, r)))))try {
					u[e] = n
				} catch (l) {
				}
			}
		},
		css: function (t, e, n, r) {
			var i, o, a, s = ie.camelCase(e);
			return e = ie.cssProps[s] || (ie.cssProps[s] = k(t.style, s)), a = ie.cssHooks[e] || ie.cssHooks[s], a && "get"in a && (o = a.get(t, !0, n)), void 0 === o && (o = en(t, e, r)), "normal" === o && e in dn && (o = dn[e]), "" === n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 : o) : o
		}
	}), ie.each(["height", "width"], function (t, e) {
		ie.cssHooks[e] = {
			get: function (t, n, r) {
				return n ? un.test(ie.css(t, "display")) && 0 === t.offsetWidth ? ie.swap(t, fn, function () {
					return D(t, e, r)
				}) : D(t, e, r) : void 0
			}, set: function (t, n, r) {
				var i = r && tn(t);
				return _(t, n, r ? N(t, e, r, ne.boxSizing && "border-box" === ie.css(t, "boxSizing", !1, i), i) : 0)
			}
		}
	}), ne.opacity || (ie.cssHooks.opacity = {
		get: function (t, e) {
			return sn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
		}, set: function (t, e) {
			var n = t.style, r = t.currentStyle, i = ie.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = r && r.filter || n.filter || "";
			n.zoom = 1, (e >= 1 || "" === e) && "" === ie.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i)
		}
	}), ie.cssHooks.marginRight = E(ne.reliableMarginRight, function (t, e) {
		return e ? ie.swap(t, {display: "inline-block"}, en, [t, "marginRight"]) : void 0
	}), ie.each({margin: "", padding: "", border: "Width"}, function (t, e) {
		ie.cssHooks[t + e] = {
			expand: function (n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[t + ke[r] + e] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, nn.test(t) || (ie.cssHooks[t + e].set = _)
	}), ie.fn.extend({
		css: function (t, e) {
			return _e(this, function (t, e, n) {
				var r, i, o = {}, a = 0;
				if (ie.isArray(e)) {
					for (r = tn(t), i = e.length; i > a; a++)o[e[a]] = ie.css(t, e[a], !1, r);
					return o
				}
				return void 0 !== n ? ie.style(t, e, n) : ie.css(t, e)
			}, t, e, arguments.length > 1)
		}, show: function () {
			return A(this, !0)
		}, hide: function () {
			return A(this)
		}, toggle: function (t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
				Ae(this) ? ie(this).show() : ie(this).hide()
			})
		}
	}), ie.Tween = O, O.prototype = {
		constructor: O, init: function (t, e, n, r, i, o) {
			this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px")
		}, cur: function () {
			var t = O.propHooks[this.prop];
			return t && t.get ? t.get(this) : O.propHooks._default.get(this)
		}, run: function (t) {
			var e, n = O.propHooks[this.prop];
			return this.pos = e = this.options.duration ? ie.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
		}
	}, O.prototype.init.prototype = O.prototype, O.propHooks = {
		_default: {
			get: function (t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ie.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
			}, set: function (t) {
				ie.fx.step[t.prop] ? ie.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ie.cssProps[t.prop]] || ie.cssHooks[t.prop]) ? ie.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
		set: function (t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, ie.easing = {
		linear: function (t) {
			return t
		}, swing: function (t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}
	}, ie.fx = O.prototype.init, ie.fx.step = {};
	var pn, mn, vn = /^(?:toggle|show|hide)$/, gn = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"), $n = /queueHooks$/, yn = [P], bn = {
		"*": [function (t, e) {
			var n = this.createTween(t, e), r = n.cur(), i = gn.exec(e), o = i && i[3] || (ie.cssNumber[t] ? "" : "px"), a = (ie.cssNumber[t] || "px" !== o && +r) && gn.exec(ie.css(n.elem, t)), s = 1, u = 20;
			if (a && a[3] !== o) {
				o = o || a[3], i = i || [], a = +r || 1;
				do s = s || ".5", a /= s, ie.style(n.elem, t, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
			}
			return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
		}]
	};
	ie.Animation = ie.extend(I, {
		tweener: function (t, e) {
			ie.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
			for (var n, r = 0, i = t.length; i > r; r++)n = t[r], bn[n] = bn[n] || [], bn[n].unshift(e)
		}, prefilter: function (t, e) {
			e ? yn.unshift(t) : yn.push(t)
		}
	}), ie.speed = function (t, e, n) {
		var r = t && "object" == typeof t ? ie.extend({}, t) : {
			complete: n || !n && e || ie.isFunction(t) && t,
			duration: t,
			easing: n && e || e && !ie.isFunction(e) && e
		};
		return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
			ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
		}, r
	}, ie.fn.extend({
		fadeTo: function (t, e, n, r) {
			return this.filter(Ae).css("opacity", 0).show().end().animate({opacity: e}, t, n, r)
		}, animate: function (t, e, n, r) {
			var i = ie.isEmptyObject(t), o = ie.speed(e, n, r), a = function () {
				var e = I(this, ie.extend({}, t), o);
				(i || ie._data(this, "finish")) && e.stop(!0)
			};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		}, stop: function (t, e, n) {
			var r = function (t) {
				var e = t.stop;
				delete t.stop, e(n)
			};
			return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
				var e = !0, i = null != t && t + "queueHooks", o = ie.timers, a = ie._data(this);
				if (i)a[i] && a[i].stop && r(a[i]); else for (i in a)a[i] && a[i].stop && $n.test(i) && r(a[i]);
				for (i = o.length; i--;)o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
				(e || !n) && ie.dequeue(this, t)
			})
		}, finish: function (t) {
			return t !== !1 && (t = t || "fx"), this.each(function () {
				var e, n = ie._data(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = ie.timers, a = r ? r.length : 0;
				for (n.finish = !0, ie.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
				for (e = 0; a > e; e++)r[e] && r[e].finish && r[e].finish.call(this);
				delete n.finish
			})
		}
	}), ie.each(["toggle", "show", "hide"], function (t, e) {
		var n = ie.fn[e];
		ie.fn[e] = function (t, r, i) {
			return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(R(e, !0), t, r, i)
		}
	}), ie.each({
		slideDown: R("show"),
		slideUp: R("hide"),
		slideToggle: R("toggle"),
		fadeIn: {opacity: "show"},
		fadeOut: {opacity: "hide"},
		fadeToggle: {opacity: "toggle"}
	}, function (t, e) {
		ie.fn[t] = function (t, n, r) {
			return this.animate(e, t, n, r)
		}
	}), ie.timers = [], ie.fx.tick = function () {
		var t, e = ie.timers, n = 0;
		for (pn = ie.now(); n < e.length; n++)t = e[n], t() || e[n] !== t || e.splice(n--, 1);
		e.length || ie.fx.stop(), pn = void 0
	}, ie.fx.timer = function (t) {
		ie.timers.push(t), t() ? ie.fx.start() : ie.timers.pop()
	}, ie.fx.interval = 13, ie.fx.start = function () {
		mn || (mn = setInterval(ie.fx.tick, ie.fx.interval))
	}, ie.fx.stop = function () {
		clearInterval(mn), mn = null
	}, ie.fx.speeds = {slow: 600, fast: 200, _default: 400}, ie.fn.delay = function (t, e) {
		return t = ie.fx ? ie.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
			var r = setTimeout(e, t);
			n.stop = function () {
				clearTimeout(r)
			}
		})
	}, function () {
		var t, e, n, r, i;
		e = pe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = e.getElementsByTagName("a")[0], n = pe.createElement("select"), i = n.appendChild(pe.createElement("option")), t = e.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = i.selected, ne.enctype = !!pe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !i.disabled, t = pe.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
	}();
	var wn = /\r/g;
	ie.fn.extend({
		val: function (t) {
			var e, n, r, i = this[0];
			{
				if (arguments.length)return r = ie.isFunction(t), this.each(function (n) {
					var i;
					1 === this.nodeType && (i = r ? t.call(this, n, ie(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function (t) {
						return null == t ? "" : t + ""
					})), e = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, i, "value") || (this.value = i))
				});
				if (i)return e = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
			}
		}
	}), ie.extend({
		valHooks: {
			option: {
				get: function (t) {
					var e = ie.find.attr(t, "value");
					return null != e ? e : ie.trim(ie.text(t))
				}
			}, select: {
				get: function (t) {
					for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)if (n = r[u], !(!n.selected && u !== i || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ie.nodeName(n.parentNode, "optgroup"))) {
						if (e = ie(n).val(), o)return e;
						a.push(e)
					}
					return a
				}, set: function (t, e) {
					for (var n, r, i = t.options, o = ie.makeArray(e), a = i.length; a--;)if (r = i[a], ie.inArray(ie.valHooks.option.get(r), o) >= 0)try {
						r.selected = n = !0
					} catch (s) {
						r.scrollHeight
					} else r.selected = !1;
					return n || (t.selectedIndex = -1), i
				}
			}
		}
	}), ie.each(["radio", "checkbox"], function () {
		ie.valHooks[this] = {
			set: function (t, e) {
				return ie.isArray(e) ? t.checked = ie.inArray(ie(t).val(), e) >= 0 : void 0
			}
		}, ne.checkOn || (ie.valHooks[this].get = function (t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	});
	var xn, Cn, Tn = ie.expr.attrHandle, Sn = /^(?:checked|selected)$/i, En = ne.getSetAttribute, kn = ne.input;
	ie.fn.extend({
		attr: function (t, e) {
			return _e(this, ie.attr, t, e, arguments.length > 1)
		}, removeAttr: function (t) {
			return this.each(function () {
				ie.removeAttr(this, t)
			})
		}
	}), ie.extend({
		attr: function (t, e, n) {
			var r, i, o = t.nodeType;
			if (t && 3 !== o && 8 !== o && 2 !== o)return typeof t.getAttribute === Ce ? ie.prop(t, e, n) : (1 === o && ie.isXMLDoc(t) || (e = e.toLowerCase(), r = ie.attrHooks[e] || (ie.expr.match.bool.test(e) ? Cn : xn)), void 0 === n ? r && "get"in r && null !== (i = r.get(t, e)) ? i : (i = ie.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void ie.removeAttr(t, e))
		}, removeAttr: function (t, e) {
			var n, r, i = 0, o = e && e.match(ye);
			if (o && 1 === t.nodeType)for (; n = o[i++];)r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? kn && En || !Sn.test(n) ? t[r] = !1 : t[ie.camelCase("default-" + n)] = t[r] = !1 : ie.attr(t, n, ""), t.removeAttribute(En ? n : r)
		}, attrHooks: {
			type: {
				set: function (t, e) {
					if (!ne.radioValue && "radio" === e && ie.nodeName(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		}
	}), Cn = {
		set: function (t, e, n) {
			return e === !1 ? ie.removeAttr(t, n) : kn && En || !Sn.test(n) ? t.setAttribute(!En && ie.propFix[n] || n, n) : t[ie.camelCase("default-" + n)] = t[n] = !0, n
		}
	}, ie.each(ie.expr.match.bool.source.match(/\w+/g), function (t, e) {
		var n = Tn[e] || ie.find.attr;
		Tn[e] = kn && En || !Sn.test(e) ? function (t, e, r) {
			var i, o;
			return r || (o = Tn[e], Tn[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, Tn[e] = o), i
		} : function (t, e, n) {
			return n ? void 0 : t[ie.camelCase("default-" + e)] ? e.toLowerCase() : null
		}
	}), kn && En || (ie.attrHooks.value = {
		set: function (t, e, n) {
			return ie.nodeName(t, "input") ? void(t.defaultValue = e) : xn && xn.set(t, e, n)
		}
	}), En || (xn = {
		set: function (t, e, n) {
			var r = t.getAttributeNode(n);
			return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
		}
	}, Tn.id = Tn.name = Tn.coords = function (t, e, n) {
		var r;
		return n ? void 0 : (r = t.getAttributeNode(e)) && "" !== r.value ? r.value : null
	}, ie.valHooks.button = {
		get: function (t, e) {
			var n = t.getAttributeNode(e);
			return n && n.specified ? n.value : void 0
		}, set: xn.set
	}, ie.attrHooks.contenteditable = {
		set: function (t, e, n) {
			xn.set(t, "" === e ? !1 : e, n)
		}
	}, ie.each(["width", "height"], function (t, e) {
		ie.attrHooks[e] = {
			set: function (t, n) {
				return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
			}
		}
	})), ne.style || (ie.attrHooks.style = {
		get: function (t) {
			return t.style.cssText || void 0
		}, set: function (t, e) {
			return t.style.cssText = e + ""
		}
	});
	var An = /^(?:input|select|textarea|button|object)$/i, _n = /^(?:a|area)$/i;
	ie.fn.extend({
		prop: function (t, e) {
			return _e(this, ie.prop, t, e, arguments.length > 1)
		}, removeProp: function (t) {
			return t = ie.propFix[t] || t, this.each(function () {
				try {
					this[t] = void 0, delete this[t]
				} catch (e) {
				}
			})
		}
	}), ie.extend({
		propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
			var r, i, o, a = t.nodeType;
			if (t && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a || !ie.isXMLDoc(t), o && (e = ie.propFix[e] || e, i = ie.propHooks[e]), void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get"in i && null !== (r = i.get(t, e)) ? r : t[e]
		}, propHooks: {
			tabIndex: {
				get: function (t) {
					var e = ie.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : An.test(t.nodeName) || _n.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		}
	}), ne.hrefNormalized || ie.each(["href", "src"], function (t, e) {
		ie.propHooks[e] = {
			get: function (t) {
				return t.getAttribute(e, 4)
			}
		}
	}), ne.optSelected || (ie.propHooks.selected = {
		get: function (t) {
			var e = t.parentNode;
			return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
		}
	}), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		ie.propFix[this.toLowerCase()] = this
	}), ne.enctype || (ie.propFix.enctype = "encoding");
	var Nn = /[\t\r\n\f]/g;
	ie.fn.extend({
		addClass: function (t) {
			var e, n, r, i, o, a, s = 0, u = this.length, l = "string" == typeof t && t;
			if (ie.isFunction(t))return this.each(function (e) {
				ie(this).addClass(t.call(this, e, this.className))
			});
			if (l)for (e = (t || "").match(ye) || []; u > s; s++)if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nn, " ") : " ")) {
				for (o = 0; i = e[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
				a = ie.trim(r), n.className !== a && (n.className = a)
			}
			return this
		}, removeClass: function (t) {
			var e, n, r, i, o, a, s = 0, u = this.length, l = 0 === arguments.length || "string" == typeof t && t;
			if (ie.isFunction(t))return this.each(function (e) {
				ie(this).removeClass(t.call(this, e, this.className))
			});
			if (l)for (e = (t || "").match(ye) || []; u > s; s++)if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nn, " ") : "")) {
				for (o = 0; i = e[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
				a = t ? ie.trim(r) : "", n.className !== a && (n.className = a)
			}
			return this
		}, toggleClass: function (t, e) {
			var n = typeof t;
			return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(ie.isFunction(t) ? function (n) {
				ie(this).toggleClass(t.call(this, n, this.className, e), e)
			} : function () {
				if ("string" === n)for (var e, r = 0, i = ie(this), o = t.match(ye) || []; e = o[r++];)i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else(n === Ce || "boolean" === n) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ie._data(this, "__className__") || "")
			})
		}, hasClass: function (t) {
			for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Nn, " ").indexOf(e) >= 0)return !0;
			return !1
		}
	}), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
		ie.fn[e] = function (t, n) {
			return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
		}
	}), ie.fn.extend({
		hover: function (t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		}, bind: function (t, e, n) {
			return this.on(t, null, e, n)
		}, unbind: function (t, e) {
			return this.off(t, null, e)
		}, delegate: function (t, e, n, r) {
			return this.on(e, t, n, r)
		}, undelegate: function (t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		}
	});
	var Dn = ie.now(), On = /\?/, jn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	ie.parseJSON = function (e) {
		if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
		var n, r = null, i = ie.trim(e + "");
		return i && !ie.trim(i.replace(jn, function (t, e, i, o) {
			return n && e && (r = 0), 0 === r ? t : (n = i || e, r += !o - !i, "")
		})) ? Function("return " + i)() : ie.error("Invalid JSON: " + e)
	}, ie.parseXML = function (e) {
		var n, r;
		if (!e || "string" != typeof e)return null;
		try {
			t.DOMParser ? (r = new DOMParser, n = r.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
		} catch (i) {
			n = void 0
		}
		return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + e), n
	};
	var Rn, Fn, Pn = /#.*$/, Hn = /([?&])_=[^&]*/, In = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ln = /^(?:GET|HEAD)$/, qn = /^\/\//, Un = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Vn = {}, Bn = {}, Wn = "*/".concat("*");
	try {
		Fn = location.href
	} catch (zn) {
		Fn = pe.createElement("a"), Fn.href = "", Fn = Fn.href
	}
	Rn = Un.exec(Fn.toLowerCase()) || [], ie.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Fn,
			type: "GET",
			isLocal: Mn.test(Rn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Wn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {xml: /xml/, html: /html/, json: /json/},
			responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
			converters: {"* text": String, "text html": !0, "text json": ie.parseJSON, "text xml": ie.parseXML},
			flatOptions: {url: !0, context: !0}
		},
		ajaxSetup: function (t, e) {
			return e ? q(q(t, ie.ajaxSettings), e) : q(ie.ajaxSettings, t)
		},
		ajaxPrefilter: M(Vn),
		ajaxTransport: M(Bn),
		ajax: function (t, e) {
			function n(t, e, n, r) {
				var i, c, g, $, b, x = e;
				2 !== y && (y = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = t > 0 ? 4 : 0, i = t >= 200 && 300 > t || 304 === t, n && ($ = U(f, w, n)), $ = V(f, $, w, i), i ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (ie.lastModified[o] = b), b = w.getResponseHeader("etag"), b && (ie.etag[o] = b)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = $.state, c = $.data, g = $.error, i = !g)) : (g = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", i ? p.resolveWith(d, [c, x, w]) : p.rejectWith(d, [w, x, g]), w.statusCode(v), v = void 0, u && h.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? c : g]), m.fireWith(d, [w, x]), u && (h.trigger("ajaxComplete", [w, f]), --ie.active || ie.event.trigger("ajaxStop")))
			}

			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var r, i, o, a, s, u, l, c, f = ie.ajaxSetup({}, e), d = f.context || f, h = f.context && (d.nodeType || d.jquery) ? ie(d) : ie.event, p = ie.Deferred(), m = ie.Callbacks("once memory"), v = f.statusCode || {}, g = {}, $ = {}, y = 0, b = "canceled", w = {
				readyState: 0,
				getResponseHeader: function (t) {
					var e;
					if (2 === y) {
						if (!c)for (c = {}; e = In.exec(a);)c[e[1].toLowerCase()] = e[2];
						e = c[t.toLowerCase()]
					}
					return null == e ? null : e
				},
				getAllResponseHeaders: function () {
					return 2 === y ? a : null
				},
				setRequestHeader: function (t, e) {
					var n = t.toLowerCase();
					return y || (t = $[n] = $[n] || t, g[t] = e), this
				},
				overrideMimeType: function (t) {
					return y || (f.mimeType = t), this
				},
				statusCode: function (t) {
					var e;
					if (t)if (2 > y)for (e in t)v[e] = [v[e], t[e]]; else w.always(t[w.status]);
					return this
				},
				abort: function (t) {
					var e = t || b;
					return l && l.abort(e), n(0, e), this
				}
			};
			if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, f.url = ((t || f.url || Fn) + "").replace(Pn, "").replace(qn, Rn[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = ie.trim(f.dataType || "*").toLowerCase().match(ye) || [""], null == f.crossDomain && (r = Un.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === Rn[1] && r[2] === Rn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Rn[3] || ("http:" === Rn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ie.param(f.data, f.traditional)), L(Vn, f, e, w), 2 === y)return w;
			u = ie.event && f.global, u && 0 === ie.active++ && ie.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ln.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (On.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Hn.test(o) ? o.replace(Hn, "$1_=" + Dn++) : o + (On.test(o) ? "&" : "?") + "_=" + Dn++)), f.ifModified && (ie.lastModified[o] && w.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && w.setRequestHeader("If-None-Match", ie.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Wn + "; q=0.01" : "") : f.accepts["*"]);
			for (i in f.headers)w.setRequestHeader(i, f.headers[i]);
			if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === y))return w.abort();
			b = "abort";
			for (i in{success: 1, error: 1, complete: 1})w[i](f[i]);
			if (l = L(Bn, f, e, w)) {
				w.readyState = 1, u && h.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function () {
					w.abort("timeout")
				}, f.timeout));
				try {
					y = 1, l.send(g, n)
				} catch (x) {
					if (!(2 > y))throw x;
					n(-1, x)
				}
			} else n(-1, "No Transport");
			return w
		},
		getJSON: function (t, e, n) {
			return ie.get(t, e, n, "json")
		},
		getScript: function (t, e) {
			return ie.get(t, void 0, e, "script")
		}
	}), ie.each(["get", "post"], function (t, e) {
		ie[e] = function (t, n, r, i) {
			return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({
				url: t,
				type: e,
				dataType: i,
				data: n,
				success: r
			})
		}
	}), ie._evalUrl = function (t) {
		return ie.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
	}, ie.fn.extend({
		wrapAll: function (t) {
			if (ie.isFunction(t))return this.each(function (e) {
				ie(this).wrapAll(t.call(this, e))
			});
			if (this[0]) {
				var e = ie(t, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
					return t
				}).append(this)
			}
			return this
		}, wrapInner: function (t) {
			return this.each(ie.isFunction(t) ? function (e) {
				ie(this).wrapInner(t.call(this, e))
			} : function () {
				var e = ie(this), n = e.contents();
				n.length ? n.wrapAll(t) : e.append(t)
			})
		}, wrap: function (t) {
			var e = ie.isFunction(t);
			return this.each(function (n) {
				ie(this).wrapAll(e ? t.call(this, n) : t)
			})
		}, unwrap: function () {
			return this.parent().each(function () {
				ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
			}).end()
		}
	}), ie.expr.filters.hidden = function (t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || ie.css(t, "display"))
	}, ie.expr.filters.visible = function (t) {
		return !ie.expr.filters.hidden(t)
	};
	var Xn = /%20/g, Gn = /\[\]$/, Yn = /\r?\n/g, Jn = /^(?:submit|button|image|reset|file)$/i, Qn = /^(?:input|select|textarea|keygen)/i;
	ie.param = function (t, e) {
		var n, r = [], i = function (t, e) {
			e = ie.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
		};
		if (void 0 === e && (e = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(t) || t.jquery && !ie.isPlainObject(t))ie.each(t, function () {
			i(this.name, this.value)
		}); else for (n in t)B(n, t[n], e, i);
		return r.join("&").replace(Xn, "+")
	}, ie.fn.extend({
		serialize: function () {
			return ie.param(this.serializeArray())
		}, serializeArray: function () {
			return this.map(function () {
				var t = ie.prop(this, "elements");
				return t ? ie.makeArray(t) : this
			}).filter(function () {
				var t = this.type;
				return this.name && !ie(this).is(":disabled") && Qn.test(this.nodeName) && !Jn.test(t) && (this.checked || !Ne.test(t))
			}).map(function (t, e) {
				var n = ie(this).val();
				return null == n ? null : ie.isArray(n) ? ie.map(n, function (t) {
					return {name: e.name, value: t.replace(Yn, "\r\n")}
				}) : {name: e.name, value: n.replace(Yn, "\r\n")}
			}).get()
		}
	}), ie.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || z()
	} : W;
	var Kn = 0, Zn = {}, tr = ie.ajaxSettings.xhr();
	t.attachEvent && t.attachEvent("onunload", function () {
		for (var t in Zn)Zn[t](void 0, !0)
	}), ne.cors = !!tr && "withCredentials"in tr, tr = ne.ajax = !!tr, tr && ie.ajaxTransport(function (t) {
		if (!t.crossDomain || ne.cors) {
			var e;
			return {
				send: function (n, r) {
					var i, o = t.xhr(), a = ++Kn;
					if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (i in t.xhrFields)o[i] = t.xhrFields[i];
					t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (i in n)void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
					o.send(t.hasContent && t.data || null), e = function (n, i) {
						var s, u, l;
						if (e && (i || 4 === o.readyState))if (delete Zn[a], e = void 0, o.onreadystatechange = ie.noop, i)4 !== o.readyState && o.abort(); else {
							l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
							try {
								u = o.statusText
							} catch (c) {
								u = ""
							}
							s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
						}
						l && r(s, u, l, o.getAllResponseHeaders())
					}, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Zn[a] = e : e()
				}, abort: function () {
					e && e(void 0, !0)
				}
			}
		}
	}), ie.ajaxSetup({
		accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
		contents: {script: /(?:java|ecma)script/},
		converters: {
			"text script": function (t) {
				return ie.globalEval(t), t
			}
		}
	}), ie.ajaxPrefilter("script", function (t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
	}), ie.ajaxTransport("script", function (t) {
		if (t.crossDomain) {
			var e, n = pe.head || ie("head")[0] || pe.documentElement;
			return {
				send: function (r, i) {
					e = pe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
						(n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || i(200, "success"))
					}, n.insertBefore(e, n.firstChild)
				}, abort: function () {
					e && e.onload(void 0, !0)
				}
			}
		}
	});
	var er = [], nr = /(=)\?(?=&|$)|\?\?/;
	ie.ajaxSetup({
		jsonp: "callback", jsonpCallback: function () {
			var t = er.pop() || ie.expando + "_" + Dn++;
			return this[t] = !0, t
		}
	}), ie.ajaxPrefilter("json jsonp", function (e, n, r) {
		var i, o, a, s = e.jsonp !== !1 && (nr.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(e.data) && "data");
		return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ie.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(nr, "$1" + i) : e.jsonp !== !1 && (e.url += (On.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
			return a || ie.error(i + " was not called"), a[0]
		}, e.dataTypes[0] = "json", o = t[i], t[i] = function () {
			a = arguments
		}, r.always(function () {
			t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, er.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), ie.parseHTML = function (t, e, n) {
		if (!t || "string" != typeof t)return null;
		"boolean" == typeof e && (n = e, e = !1), e = e || pe;
		var r = fe.exec(t), i = !n && [];
		return r ? [e.createElement(r[1])] : (r = ie.buildFragment([t], e, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes))
	};
	var rr = ie.fn.load;
	ie.fn.load = function (t, e, n) {
		if ("string" != typeof t && rr)return rr.apply(this, arguments);
		var r, i, o, a = this, s = t.indexOf(" ");
		return s >= 0 && (r = ie.trim(t.slice(s, t.length)), t = t.slice(0, s)), ie.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && ie.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function (t) {
			i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(t)).find(r) : t)
		}).complete(n && function (t, e) {
			a.each(n, i || [t.responseText, e, t])
		}), this
	}, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
		ie.fn[e] = function (t) {
			return this.on(e, t)
		}
	}), ie.expr.filters.animated = function (t) {
		return ie.grep(ie.timers, function (e) {
			return t === e.elem
		}).length
	};
	var ir = t.document.documentElement;
	ie.offset = {
		setOffset: function (t, e, n) {
			var r, i, o, a, s, u, l, c = ie.css(t, "position"), f = ie(t), d = {};
			"static" === c && (t.style.position = "relative"), s = f.offset(), o = ie.css(t, "top"), u = ie.css(t, "left"), l = ("absolute" === c || "fixed" === c) && ie.inArray("auto", [o, u]) > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ie.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + i), "using"in e ? e.using.call(t, d) : f.css(d)
		}
	}, ie.fn.extend({
		offset: function (t) {
			if (arguments.length)return void 0 === t ? this : this.each(function (e) {
				ie.offset.setOffset(this, t, e)
			});
			var e, n, r = {top: 0, left: 0}, i = this[0], o = i && i.ownerDocument;
			if (o)return e = o.documentElement, ie.contains(e, i) ? (typeof i.getBoundingClientRect !== Ce && (r = i.getBoundingClientRect()), n = X(o), {
				top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
				left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
			}) : r
		}, position: function () {
			if (this[0]) {
				var t, e, n = {top: 0, left: 0}, r = this[0];
				return "fixed" === ie.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ie.nodeName(t[0], "html") || (n = t.offset()), n.top += ie.css(t[0], "borderTopWidth", !0), n.left += ie.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - n.top - ie.css(r, "marginTop", !0),
					left: e.left - n.left - ie.css(r, "marginLeft", !0)
				}
			}
		}, offsetParent: function () {
			return this.map(function () {
				for (var t = this.offsetParent || ir; t && !ie.nodeName(t, "html") && "static" === ie.css(t, "position");)t = t.offsetParent;
				return t || ir
			})
		}
	}), ie.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
		var n = /Y/.test(e);
		ie.fn[t] = function (r) {
			return _e(this, function (t, r, i) {
				var o = X(t);
				return void 0 === i ? o ? e in o ? o[e] : o.document.documentElement[r] : t[r] : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i, n ? i : ie(o).scrollTop()) : t[r] = i)
			}, t, r, arguments.length, null)
		}
	}), ie.each(["top", "left"], function (t, e) {
		ie.cssHooks[e] = E(ne.pixelPosition, function (t, n) {
			return n ? (n = en(t, e), rn.test(n) ? ie(t).position()[e] + "px" : n) : void 0
		})
	}), ie.each({Height: "height", Width: "width"}, function (t, e) {
		ie.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, r) {
			ie.fn[r] = function (r, i) {
				var o = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || i === !0 ? "margin" : "border");
				return _e(this, function (e, n, r) {
					var i;
					return ie.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? ie.css(e, n, a) : ie.style(e, n, r, a)
				}, e, o ? r : void 0, o, null)
			}
		})
	}), ie.fn.size = function () {
		return this.length
	}, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return ie
	});
	var or = t.jQuery, ar = t.$;
	return ie.noConflict = function (e) {
		return t.$ === ie && (t.$ = ar), e && t.jQuery === ie && (t.jQuery = or), ie
	}, typeof e === Ce && (t.jQuery = t.$ = ie), ie
}), function (t, e) {
	t.rails !== e && t.error("jquery-ujs has already been loaded!");
	var n, r = t(document);
	t.rails = n = {
		linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
		buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
		inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
		formSubmitSelector: "form",
		formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
		disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
		enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
		requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
		fileInputSelector: "input[type=file]",
		linkDisableSelector: "a[data-disable-with], a[data-disable]",
		buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
		CSRFProtection: function (e) {
			var n = t('meta[name="csrf-token"]').attr("content");
			n && e.setRequestHeader("X-CSRF-Token", n)
		},
		refreshCSRFTokens: function () {
			var e = t("meta[name=csrf-token]").attr("content"), n = t("meta[name=csrf-param]").attr("content");
			t('form input[name="' + n + '"]').val(e)
		},
		fire: function (e, n, r) {
			var i = t.Event(n);
			return e.trigger(i, r), i.result !== !1
		},
		confirm: function (t) {
			return confirm(t)
		},
		ajax: function (e) {
			return t.ajax(e)
		},
		href: function (t) {
			return t.attr("href")
		},
		handleRemote: function (r) {
			var i, o, a, s, u, l, c, f;
			if (n.fire(r, "ajax:before")) {
				if (s = r.data("cross-domain"), u = s === e ? null : s, l = r.data("with-credentials") || null, c = r.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, r.is("form")) {
					i = r.attr("method"), o = r.attr("action"), a = r.serializeArray();
					var d = r.data("ujs:submit-button");
					d && (a.push(d), r.data("ujs:submit-button", null))
				} else r.is(n.inputChangeSelector) ? (i = r.data("method"), o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : (i = r.data("method"), o = n.href(r), a = r.data("params") || null);
				return f = {
					type: i || "GET", data: a, dataType: c, beforeSend: function (t, i) {
						return i.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), n.fire(r, "ajax:beforeSend", [t, i]) ? void r.trigger("ajax:send", t) : !1
					}, success: function (t, e, n) {
						r.trigger("ajax:success", [t, e, n])
					}, complete: function (t, e) {
						r.trigger("ajax:complete", [t, e])
					}, error: function (t, e, n) {
						r.trigger("ajax:error", [t, e, n])
					}, crossDomain: u
				}, l && (f.xhrFields = {withCredentials: l}), o && (f.url = o), n.ajax(f)
			}
			return !1
		},
		handleMethod: function (r) {
			var i = n.href(r), o = r.data("method"), a = r.attr("target"), s = t("meta[name=csrf-token]").attr("content"), u = t("meta[name=csrf-param]").attr("content"), l = t('<form method="post" action="' + i + '"></form>'), c = '<input name="_method" value="' + o + '" type="hidden" />';
			u !== e && s !== e && (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'), a && l.attr("target", a), l.hide().append(c).appendTo("body"), l.submit()
		},
		formElements: function (e, n) {
			return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
		},
		disableFormElements: function (e) {
			n.formElements(e, n.disableSelector).each(function () {
				n.disableFormElement(t(this))
			})
		},
		disableFormElement: function (t) {
			var n, r;
			n = t.is("button") ? "html" : "val", r = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), r !== e && t[n](r), t.prop("disabled", !0)
		},
		enableFormElements: function (e) {
			n.formElements(e, n.enableSelector).each(function () {
				n.enableFormElement(t(this))
			})
		},
		enableFormElement: function (t) {
			var e = t.is("button") ? "html" : "val";
			t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
		},
		allowAction: function (t) {
			var e, r = t.data("confirm"), i = !1;
			return r ? (n.fire(t, "confirm") && (i = n.confirm(r), e = n.fire(t, "confirm:complete", [i])), i && e) : !0
		},
		blankInputs: function (e, n, r) {
			var i, o, a = t(), s = n || "input,textarea", u = e.find(s);
			return u.each(function () {
				if (i = t(this), o = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : i.val(), !o == !r) {
					if (i.is("input[type=radio]") && u.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length)return !0;
					a = a.add(i)
				}
			}), a.length ? a : !1
		},
		nonBlankInputs: function (t, e) {
			return n.blankInputs(t, e, !0)
		},
		stopEverything: function (e) {
			return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
		},
		disableElement: function (t) {
			var r = t.data("disable-with");
			t.data("ujs:enable-with", t.html()), r !== e && t.html(r), t.bind("click.railsDisable", function (t) {
				return n.stopEverything(t)
			})
		},
		enableElement: function (t) {
			t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
		}
	}, n.fire(r, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, r) {
		t.crossDomain || n.CSRFProtection(r)
	}), t(window).on("pageshow.rails", function () {
		t(t.rails.enableSelector).each(function () {
			var e = t(this);
			e.data("ujs:enable-with") && t.rails.enableFormElement(e)
		}), t(t.rails.linkDisableSelector).each(function () {
			var e = t(this);
			e.data("ujs:enable-with") && t.rails.enableElement(e)
		})
	}), r.delegate(n.linkDisableSelector, "ajax:complete", function () {
		n.enableElement(t(this))
	}), r.delegate(n.buttonDisableSelector, "ajax:complete", function () {
		n.enableFormElement(t(this))
	}), r.delegate(n.linkClickSelector, "click.rails", function (r) {
		var i = t(this), o = i.data("method"), a = i.data("params"), s = r.metaKey || r.ctrlKey;
		if (!n.allowAction(i))return n.stopEverything(r);
		if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), i.data("remote") !== e) {
			if (s && (!o || "GET" === o) && !a)return !0;
			var u = n.handleRemote(i);
			return u === !1 ? n.enableElement(i) : u.fail(function () {
				n.enableElement(i)
			}), !1
		}
		return o ? (n.handleMethod(i), !1) : void 0
	}), r.delegate(n.buttonClickSelector, "click.rails", function (e) {
		var r = t(this);
		if (!n.allowAction(r))return n.stopEverything(e);
		r.is(n.buttonDisableSelector) && n.disableFormElement(r);
		var i = n.handleRemote(r);
		return i === !1 ? n.enableFormElement(r) : i.fail(function () {
			n.enableFormElement(r)
		}), !1
	}), r.delegate(n.inputChangeSelector, "change.rails", function (e) {
		var r = t(this);
		return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(e)
	}), r.delegate(n.formSubmitSelector, "submit.rails", function (r) {
		var i, o, a = t(this), s = a.data("remote") !== e;
		if (!n.allowAction(a))return n.stopEverything(r);
		if (a.attr("novalidate") == e && (i = n.blankInputs(a, n.requiredInputSelector), i && n.fire(a, "ajax:aborted:required", [i])))return n.stopEverything(r);
		if (s) {
			if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
				setTimeout(function () {
					n.disableFormElements(a)
				}, 13);
				var u = n.fire(a, "ajax:aborted:file", [o]);
				return u || setTimeout(function () {
					n.enableFormElements(a)
				}, 13), u
			}
			return n.handleRemote(a), !1
		}
		setTimeout(function () {
			n.disableFormElements(a)
		}, 13)
	}), r.delegate(n.formInputClickSelector, "click.rails", function (e) {
		var r = t(this);
		if (!n.allowAction(r))return n.stopEverything(e);
		var i = r.attr("name"), o = i ? {name: i, value: r.val()} : null;
		r.closest("form").data("ujs:submit-button", o)
	}), r.delegate(n.formSubmitSelector, "ajax:send.rails", function (e) {
		this == e.target && n.disableFormElements(t(this))
	}), r.delegate(n.formSubmitSelector, "ajax:complete.rails", function (e) {
		this == e.target && n.enableFormElements(t(this))
	}), t(function () {
		n.refreshCSRFTokens()
	}))
}(jQuery), function () {
	var t, e, n, r, i, o, a, s, u, l, c, f, d, h, p, m, v, g, $, y, b, w, x, C, T, S, E, k, A, _, N, D, O, j, R, F, P, H, I, M, L, q, U, V, B, W, z, X, G, Y, J, Q, K, Z, te, ee, ne = [].indexOf || function (t) {
				for (var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t)return e;
				return -1
			}, re = function (t, e) {
		function n() {
			this.constructor = t
		}

		for (var r in e)ie.call(e, r) && (t[r] = e[r]);
		return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
	}, ie = {}.hasOwnProperty, oe = [].slice, ae = function (t, e) {
		return function () {
			return t.apply(e, arguments)
		}
	};
	j = {}, d = 10, J = !1, I = null, $ = null, D = null, L = null, te = null, r = {
		BEFORE_CHANGE: "page:before-change",
		FETCH: "page:fetch",
		RECEIVE: "page:receive",
		CHANGE: "page:change",
		UPDATE: "page:update",
		LOAD: "page:load",
		RESTORE: "page:restore",
		BEFORE_UNLOAD: "page:before-unload",
		EXPIRE: "page:expire"
	}, C = function (t) {
		var e;
		return t = new n(t), W(), f(), null != I && I.start(), J && (e = Q(t.absolute)) ? (T(e), S(t, null, !1)) : S(t, G)
	}, Q = function (t) {
		var e;
		return e = j[t], e && !e.transitionCacheDisabled ? e : void 0
	}, b = function (t) {
		return null == t && (t = !0), J = t
	}, y = function (t) {
		return null == t && (t = !0), l ? t ? null != I ? I : I = new o("html") : (null != I && I.uninstall(), I = null) : void 0
	}, S = function (t, e, n) {
		return null == n && (n = !0), K(r.FETCH, {url: t.absolute}), null != te && te.abort(), te = new XMLHttpRequest, te.open("GET", t.withoutHashForIE10compatibility(), !0), te.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), te.setRequestHeader("X-XHR-Referer", L), te.onload = function () {
			var n;
			return K(r.RECEIVE, {url: t.absolute}), (n = H()) ? (q(t), U(), h.apply(null, x(n)), O(), "function" == typeof e && e(), K(r.LOAD)) : document.location.href = g() || t.absolute
		}, I && n && (te.onprogress = function () {
			return function (t) {
				var e;
				return e = t.lengthComputable ? t.loaded / t.total * 100 : I.value + (100 - I.value) / 10, I.advanceTo(e)
			}
		}(this)), te.onloadend = function () {
			return te = null
		}, te.onerror = function () {
			return document.location.href = t.absolute
		}, te.send()
	}, T = function (t) {
		return null != te && te.abort(), h(t.title, t.body), M(t), K(r.RESTORE)
	}, f = function () {
		var t;
		return t = new n($.url), j[t.absolute] = {
			url: t.relative,
			body: document.body,
			title: document.title,
			positionY: window.pageYOffset,
			positionX: window.pageXOffset,
			cachedAt: (new Date).getTime(),
			transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
		}, m(d)
	}, F = function (t) {
		return null == t && (t = d), /^[\d]+$/.test(t) ? d = parseInt(t) : void 0
	}, m = function (t) {
		var e, n, i, o, a, s;
		for (i = Object.keys(j), e = i.map(function (t) {
			return j[t].cachedAt
		}).sort(function (t, e) {
			return e - t
		}), s = [], o = 0, a = i.length; a > o; o++)n = i[o], j[n].cachedAt <= e[t] && (K(r.EXPIRE, j[n]), s.push(delete j[n]));
		return s
	}, h = function (e, n, i, o) {
		return K(r.BEFORE_UNLOAD), document.title = e, document.documentElement.replaceChild(n, document.body), null != i && t.update(i), Y(), o && w(), $ = window.history.state, null != I && I.done(), K(r.CHANGE), K(r.UPDATE)
	}, w = function () {
		var t, e, n, r, i, o, a, s, u, l, c, f;
		for (o = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), a = 0, u = o.length; u > a; a++)if (i = o[a], "" === (c = i.type) || "text/javascript" === c) {
			for (e = document.createElement("script"), f = i.attributes, s = 0, l = f.length; l > s; s++)t = f[s], e.setAttribute(t.name, t.value);
			i.hasAttribute("async") || (e.async = !1), e.appendChild(document.createTextNode(i.innerHTML)), r = i.parentNode, n = i.nextSibling, r.removeChild(i), r.insertBefore(e, n)
		}
	}, z = function (t) {
		return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
	}, Y = function () {
		var t, e;
		return t = (e = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length - 1], t && document.activeElement !== t ? t.focus() : void 0
	}, q = function (t) {
		return (t = new n(t)).absolute !== L ? window.history.pushState({
			turbolinks: !0,
			url: t.absolute
		}, "", t.absolute) : void 0
	}, U = function () {
		var t, e;
		return (t = te.getResponseHeader("X-XHR-Redirected-To")) ? (t = new n(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", t.href + e)) : void 0
	}, g = function () {
		var t;
		return null != (t = te.getResponseHeader("Location")) && new n(t).crossOrigin() ? t : void 0
	}, W = function () {
		return L = document.location.href
	}, B = function () {
		return window.history.replaceState({turbolinks: !0, url: document.location.href}, "", document.location.href)
	}, V = function () {
		return $ = window.history.state
	}, O = function () {
		var t;
		return navigator.userAgent.match(/Firefox/) && !(t = new n).hasNoHash() ? (window.history.replaceState($, "", t.withoutHash()), document.location.hash = t.hash) : void 0
	}, M = function (t) {
		return window.scrollTo(t.positionX, t.positionY)
	}, G = function () {
		return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
	}, p = function (t) {
		var e, n, r;
		if (null == t || "object" != typeof t)return t;
		e = new t.constructor;
		for (n in t)r = t[n], e[n] = p(r);
		return e
	}, P = function (t) {
		var e, n;
		return e = (null != (n = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? n[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", e
	}, K = function (t, e) {
		var n;
		return "undefined" != typeof Prototype && Event.fire(document, t, e, !0), n = document.createEvent("Events"), e && (n.data = e), n.initEvent(t, !0, !0), document.dispatchEvent(n)
	}, R = function (t) {
		return !K(r.BEFORE_CHANGE, {url: t})
	}, H = function () {
		var t, e, n, r, i, o;
		return e = function () {
			var t;
			return 400 <= (t = te.status) && 600 > t
		}, o = function () {
			var t;
			return null != (t = te.getResponseHeader("Content-Type")) && t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
		}, r = function (t) {
			var e, n, r, i, o;
			for (i = t.querySelector("head").childNodes, o = [], n = 0, r = i.length; r > n; n++)e = i[n], null != ("function" == typeof e.getAttribute ? e.getAttribute("data-turbolinks-track") : void 0) && o.push(e.getAttribute("src") || e.getAttribute("href"));
			return o
		}, t = function (t) {
			var e;
			return D || (D = r(document)), e = r(t), e.length !== D.length || i(e, D).length !== D.length
		}, i = function (t, e) {
			var n, r, i, o, a;
			for (t.length > e.length && (o = [e, t], t = o[0], e = o[1]), a = [], r = 0, i = t.length; i > r; r++)n = t[r], ne.call(e, n) >= 0 && a.push(n);
			return a
		}, !e() && o() && (n = v(te.responseText), n && !t(n)) ? n : void 0
	}, x = function (e) {
		var n;
		return n = e.querySelector("title"), [null != n ? n.textContent : void 0, z(e.querySelector("body")), t.get(e).token, "runScripts"]
	}, t = {
		get: function (t) {
			var e;
			return null == t && (t = document), {
				node: e = t.querySelector('meta[name="csrf-token"]'),
				token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0
			}
		}, update: function (t) {
			var e;
			return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
		}
	}, v = function (t) {
		var e;
		return e = document.documentElement.cloneNode(), e.innerHTML = t, e.head = e.querySelector("head"), e.body = e.querySelector("body"), e
	}, n = function () {
		function t(e) {
			return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
		}

		return t.prototype.withoutHash = function () {
			return this.href.replace(this.hash, "").replace("#", "")
		}, t.prototype.withoutHashForIE10compatibility = function () {
			return this.withoutHash()
		}, t.prototype.hasNoHash = function () {
			return 0 === this.hash.length
		}, t.prototype.crossOrigin = function () {
			return this.origin !== (new t).origin
		}, t.prototype._parse = function () {
			var t;
			return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
		}, t
	}(), i = function (t) {
		function e(t) {
			return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void e.__super__.constructor.apply(this, arguments))
		}

		return re(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function () {
			var t, n, r, i;
			for (n = 1 <= arguments.length ? oe.call(arguments, 0) : [], r = 0, i = n.length; i > r; r++)t = n[r], e.HTML_EXTENSIONS.push(t);
			return e.HTML_EXTENSIONS
		}, e.prototype.shouldIgnore = function () {
			return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
		}, e.prototype._anchored = function () {
			return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new n).withoutHash()
		}, e.prototype._nonHtml = function () {
			return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
		}, e.prototype._optOut = function () {
			var t, e;
			for (e = this.originalElement; !t && e !== document;)t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
			return t
		}, e.prototype._target = function () {
			return 0 !== this.link.target.length
		}, e
	}(n), e = function () {
		function t(t) {
			this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (R(this.link.absolute) || Z(this.link.href), this.event.preventDefault()))
		}

		return t.installHandlerLast = function (e) {
			return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
		}, t.handle = function (e) {
			return new t(e)
		}, t.prototype._extractLink = function () {
			var t;
			for (t = this.event.target; t.parentNode && "A" !== t.nodeName;)t = t.parentNode;
			return "A" === t.nodeName && 0 !== t.href.length ? this.link = new i(t) : void 0
		}, t.prototype._validForTurbolinks = function () {
			return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
		}, t.prototype._nonStandardClick = function () {
			return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
		}, t
	}(), o = function () {
		function t(t) {
			this.elementSelector = t, this._trickle = ae(this._trickle, this), this.value = 0, this.content = "", this.speed = 300, this.opacity = .99, this.install()
		}

		var e;
		return e = "turbolinks-progress-bar", t.prototype.install = function () {
			return this.element = document.querySelector(this.elementSelector), this.element.classList.add(e), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
		}, t.prototype.uninstall = function () {
			return this.element.classList.remove(e), document.head.removeChild(this.styleElement)
		}, t.prototype.start = function () {
			return this.advanceTo(5)
		}, t.prototype.advanceTo = function (t) {
			var e;
			if (t > (e = this.value) && 100 >= e) {
				if (this.value = t, this._updateStyle(), 100 === this.value)return this._stopTrickle();
				if (this.value > 0)return this._startTrickle()
			}
		}, t.prototype.done = function () {
			return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
		}, t.prototype._reset = function () {
			var t;
			return t = this.opacity, setTimeout(function (t) {
				return function () {
					return t.opacity = 0, t._updateStyle()
				}
			}(this), this.speed / 2), setTimeout(function (e) {
				return function () {
					return e.value = 0, e.opacity = t, e._withSpeed(0, function () {
						return e._updateStyle(!0)
					})
				}
			}(this), this.speed)
		}, t.prototype._startTrickle = function () {
			return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
		}, t.prototype._stopTrickle = function () {
			return delete this.trickling
		}, t.prototype._trickle = function () {
			return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
		}, t.prototype._withSpeed = function (t, e) {
			var n, r;
			return n = this.speed, this.speed = t, r = e(), this.speed = n, r
		}, t.prototype._updateStyle = function (t) {
			return null == t && (t = !1), t && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
		}, t.prototype._changeContentToForceRepaint = function () {
			return this.content = "" === this.content ? " " : ""
		}, t.prototype._createCSSRule = function () {
			return this.elementSelector + "." + e + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
		}, t
	}(), c = function (t) {
		return setTimeout(t, 500)
	}, A = function () {
		return document.addEventListener("DOMContentLoaded", function () {
			return K(r.CHANGE), K(r.UPDATE)
		}, !0)
	}, N = function () {
		return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function (t, e) {
			return jQuery.trim(e.responseText) ? K(r.UPDATE) : void 0
		}) : void 0
	}, _ = function (t) {
		var e, r;
		return (null != (r = t.state) ? r.turbolinks : void 0) ? (e = j[new n(t.state.url).absolute]) ? (f(), T(e)) : Z(t.target.location.href) : void 0
	}, k = function () {
		return B(), V(), document.addEventListener("click", e.installHandlerLast, !0), window.addEventListener("hashchange", function () {
			return B(), V()
		}, !1), c(function () {
			return window.addEventListener("popstate", _, !1)
		})
	}, E = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), u = window.history && window.history.pushState && window.history.replaceState && E, a = !navigator.userAgent.match(/CriOS\//), X = "GET" === (ee = P("request_method")) || "" === ee, l = u && a && X, s = document.addEventListener && document.createEvent, s && (A(), N()), l ? (Z = C, k()) : Z = function (t) {
		return document.location.href = t
	}, this.Turbolinks = {
		visit: Z,
		pagesCached: F,
		enableTransitionCache: b,
		enableProgressBar: y,
		allowLinkExtensions: i.allowExtensions,
		supported: l,
		EVENTS: p(r)
	}
}.call(this), function () {
	function t(t) {
		if (!t.__listeners) {
			t.upload || (t.upload = {}), t.__listeners = [];
			var e = t.upload.addEventListener;
			t.upload.addEventListener = function (n, r) {
				t.__listeners[n] = r, e && e.apply(this, arguments)
			}
		}
	}

	var e = function () {
		try {
			var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			if (t)return !0
		} catch (e) {
			if (void 0 != navigator.mimeTypes["application/x-shockwave-flash"])return !0
		}
		return !1
	}, n = function (t, e) {
		window.XMLHttpRequest.prototype[t] = e(window.XMLHttpRequest.prototype[t])
	};
	if (window.XMLHttpRequest && (!window.FormData || window.FileAPI && FileAPI.forceLoad ? (n("open", function (e) {
				return function (n, r, i) {
					t(this), this.__url = r;
					try {
						e.apply(this, [n, r, i])
					} catch (o) {
						o.message.indexOf("Access is denied") > -1 && e.apply(this, [n, "_fix_for_ie_crossdomain__", i])
					}
				}
			}), n("getResponseHeader", function (t) {
				return function (e) {
					return this.__fileApiXHR ? this.__fileApiXHR.getResponseHeader(e) : t.apply(this, [e])
				}
			}), n("getAllResponseHeaders", function (t) {
				return function () {
					return this.__fileApiXHR ? this.__fileApiXHR.abort() : null == t ? null : t.apply(this)
				}
			}), n("abort", function (t) {
				return function () {
					return this.__fileApiXHR ? this.__fileApiXHR.abort() : null == t ? null : t.apply(this)
				}
			}), n("setRequestHeader", function (e) {
				return function (n, r) {
					if ("__setXHR_" === n) {
						t(this);
						var i = r(this);
						i instanceof Function && i(this)
					} else this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[n] = r, e.apply(this, arguments)
				}
			}), n("send", function (t) {
				return function () {
					var n = this;
					if (arguments[0] && arguments[0].__isShim) {
						var r = arguments[0], i = {
							url: n.__url, complete: function (t, e) {
								!t && n.__listeners.load && n.__listeners.load({
									type: "load",
									loaded: n.__loaded,
									total: n.__total,
									target: n,
									lengthComputable: !0
								}), !t && n.__listeners.loadend && n.__listeners.loadend({
									type: "loadend",
									loaded: n.__loaded,
									total: n.__total,
									target: n,
									lengthComputable: !0
								}), "abort" === t && n.__listeners.abort && n.__listeners.abort({
									type: "abort",
									loaded: n.__loaded,
									total: n.__total,
									target: n,
									lengthComputable: !0
								}), void 0 !== e.status && Object.defineProperty(n, "status", {
									get: function () {
										return e.status
									}
								}), void 0 !== e.statusText && Object.defineProperty(n, "statusText", {
									get: function () {
										return e.statusText
									}
								}), Object.defineProperty(n, "readyState", {
									get: function () {
										return 4
									}
								}), void 0 !== e.response && Object.defineProperty(n, "response", {
									get: function () {
										return e.response
									}
								}), Object.defineProperty(n, "responseText", {
									get: function () {
										return e.responseText
									}
								}), Object.defineProperty(n, "response", {
									get: function () {
										return e.responseText
									}
								}), n.__fileApiXHR = e, n.onreadystatechange()
							}, fileprogress: function (t) {
								t.target = n, n.__listeners.progress && n.__listeners.progress(t), n.__total = t.total, n.__loaded = t.loaded
							}, headers: n.__requestHeaders
						};
						i.data = {}, i.files = {};
						for (var o = 0; o < r.data.length; o++) {
							var a = r.data[o];
							null != a.val && null != a.val.name && null != a.val.size && null != a.val.type ? i.files[a.key] = a.val : i.data[a.key] = a.val
						}
						setTimeout(function () {
							if (!e())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
							n.__fileApiXHR = FileAPI.upload(i)
						}, 1)
					} else t.apply(n, arguments)
				}
			})) : n("setRequestHeader", function (t) {
				return function (e, n) {
					if ("__setXHR_" === e) {
						var r = n(this);
						r instanceof Function && r(this)
					} else t.apply(this, arguments)
				}
			}), window.XMLHttpRequest.__isShim = !0), !window.FormData || window.FileAPI && FileAPI.forceLoad) {
		var r = function (t) {
			if (!e())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
			var n = angular.element(t);
			n.hasClass("js-fileapi-wrapper") || null == t.getAttribute("ng-file-select") && null == t.getAttribute("data-ng-file-select") || n.addClass("js-fileapi-wrapper")
		}, i = function (t) {
			return function (e) {
				for (var n = FileAPI.getFiles(e), r = 0; r < n.length; r++)void 0 === n[r].size && (n[r].size = 0), void 0 === n[r].name && (n[r].name = "file"), void 0 === n[r].type && (n[r].type = "undefined");
				e.target || (e.target = {}), e.target.files = n, e.target.files != n && (e.__files_ = n), (e.__files_ || e.target.files).item = function (t) {
					return (e.__files_ || e.target.files)[t] || null
				}, t(e)
			}
		}, o = function (t, e) {
			return ("change" === e.toLowerCase() || "onchange" === e.toLowerCase()) && "file" == t.getAttribute("type")
		};
		HTMLInputElement.prototype.addEventListener && (HTMLInputElement.prototype.addEventListener = function (t) {
			return function (e, n, a, s) {
				o(this, e) ? (r(this), t.apply(this, [e, i(n), a, s])) : t.apply(this, [e, n, a, s])
			}
		}(HTMLInputElement.prototype.addEventListener)), HTMLInputElement.prototype.attachEvent && (HTMLInputElement.prototype.attachEvent = function (t) {
			return function (e, n) {
				o(this, e) ? (r(this), t.apply(this, [e, i(n)])) : t.apply(this, [e, n])
			}
		}(HTMLInputElement.prototype.attachEvent)), window.FormData = FormData = function () {
			return {
				append: function (t, e, n) {
					this.data.push({key: t, val: e, name: n})
				}, data: [], __isShim: !0
			}
		}, function () {
			if (window.FileAPI || (window.FileAPI = {}), FileAPI.forceLoad && (FileAPI.html5 = !1), !FileAPI.upload) {
				var t, n, r, i, o, a = document.createElement("script"), s = document.getElementsByTagName("script");
				if (window.FileAPI.jsUrl)t = window.FileAPI.jsUrl; else if (window.FileAPI.jsPath)n = window.FileAPI.jsPath; else for (r = 0; r < s.length; r++)if (o = s[r].src, i = o.indexOf("angular-file-upload-shim.js"), -1 == i && (i = o.indexOf("angular-file-upload-shim.min.js")), i > -1) {
					n = o.substring(0, i);
					break
				}
				null == FileAPI.staticPath && (FileAPI.staticPath = n), a.setAttribute("src", t || n + "FileAPI.min.js"), document.getElementsByTagName("head")[0].appendChild(a), FileAPI.hasFlash = e()
			}
		}()
	}
	window.FileReader || (window.FileReader = function () {
		function t(t, n) {
			var r = {type: t, target: e, loaded: n.loaded, total: n.total, error: n.error};
			return null != n.result && (r.target.result = n.result), r
		}

		var e = this, n = !1;
		this.listeners = {}, this.addEventListener = function (t, n) {
			e.listeners[t] = e.listeners[t] || [], e.listeners[t].push(n)
		}, this.removeEventListener = function (t, n) {
			e.listeners[t] && e.listeners[t].splice(e.listeners[t].indexOf(n), 1)
		}, this.dispatchEvent = function (t) {
			var n = e.listeners[t.type];
			if (n)for (var r = 0; r < n.length; r++)n[r].call(e, t)
		}, this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;
		var r = function (r) {
			if (n || (n = !0, e.onloadstart && this.onloadstart(t("loadstart", r))), "load" === r.type) {
				e.onloadend && e.onloadend(t("loadend", r));
				var i = t("load", r);
				e.onload && e.onload(i), e.dispatchEvent(i)
			} else if ("progress" === r.type) {
				var i = t("progress", r);
				e.onprogress && e.onprogress(i), e.dispatchEvent(i)
			} else {
				var i = t("error", r);
				e.onerror && e.onerror(i), e.dispatchEvent(i)
			}
		};
		this.readAsArrayBuffer = function (t) {
			FileAPI.readAsBinaryString(t, r)
		}, this.readAsBinaryString = function (t) {
			FileAPI.readAsBinaryString(t, r)
		}, this.readAsDataURL = function (t) {
			FileAPI.readAsDataURL(t, r)
		}, this.readAsText = function (t) {
			FileAPI.readAsText(t, r)
		}
	})
}(), function (t, e, n) {
	"use strict";
	function r(t, e) {
		return e = e || Error, function () {
			var n, r, i = arguments[0], o = "[" + (t ? t + ":" : "") + i + "] ", a = arguments[1], s = arguments;
			for (n = o + a.replace(/\{\d+\}/g, function (t) {
				var e = +t.slice(1, -1);
				return e + 2 < s.length ? de(s[e + 2]) : t
			}), n = n + "\nhttp://errors.angularjs.org/1.3.10/" + (t ? t + "/" : "") + i, r = 2; r < arguments.length; r++)n = n + (2 == r ? "?" : "&") + "p" + (r - 2) + "=" + encodeURIComponent(de(arguments[r]));
			return new e(n)
		}
	}

	function i(t) {
		if (null == t || S(t))return !1;
		var e = t.length;
		return t.nodeType === gi && e ? !0 : b(t) || ci(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}

	function o(t, e, n) {
		var r, a;
		if (t)if (C(t))for (r in t)"prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r, t); else if (ci(t) || i(t)) {
			var s = "object" != typeof t;
			for (r = 0, a = t.length; a > r; r++)(s || r in t) && e.call(n, t[r], r, t)
		} else if (t.forEach && t.forEach !== o)t.forEach(e, n, t); else for (r in t)t.hasOwnProperty(r) && e.call(n, t[r], r, t);
		return t
	}

	function a(t) {
		return Object.keys(t).sort()
	}

	function s(t, e, n) {
		for (var r = a(t), i = 0; i < r.length; i++)e.call(n, t[r[i]], r[i]);
		return r
	}

	function u(t) {
		return function (e, n) {
			t(n, e)
		}
	}

	function l() {
		return ++ui
	}

	function c(t, e) {
		e ? t.$$hashKey = e : delete t.$$hashKey
	}

	function f(t) {
		for (var e = t.$$hashKey, n = 1, r = arguments.length; r > n; n++) {
			var i = arguments[n];
			if (i)for (var o = Object.keys(i), a = 0, s = o.length; s > a; a++) {
				var u = o[a];
				t[u] = i[u]
			}
		}
		return c(t, e), t
	}

	function d(t) {
		return parseInt(t, 10)
	}

	function h(t, e) {
		return f(Object.create(t), e)
	}

	function p() {
	}

	function m(t) {
		return t
	}

	function v(t) {
		return function () {
			return t
		}
	}

	function g(t) {
		return "undefined" == typeof t
	}

	function $(t) {
		return "undefined" != typeof t
	}

	function y(t) {
		return null !== t && "object" == typeof t
	}

	function b(t) {
		return "string" == typeof t
	}

	function w(t) {
		return "number" == typeof t
	}

	function x(t) {
		return "[object Date]" === oi.call(t)
	}

	function C(t) {
		return "function" == typeof t
	}

	function T(t) {
		return "[object RegExp]" === oi.call(t)
	}

	function S(t) {
		return t && t.window === t
	}

	function E(t) {
		return t && t.$evalAsync && t.$watch
	}

	function k(t) {
		return "[object File]" === oi.call(t)
	}

	function A(t) {
		return "[object FormData]" === oi.call(t)
	}

	function _(t) {
		return "[object Blob]" === oi.call(t)
	}

	function N(t) {
		return "boolean" == typeof t
	}

	function D(t) {
		return t && C(t.then)
	}

	function O(t) {
		return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
	}

	function j(t) {
		var e, n = {}, r = t.split(",");
		for (e = 0; e < r.length; e++)n[r[e]] = !0;
		return n
	}

	function R(t) {
		return Xr(t.nodeName || t[0] && t[0].nodeName)
	}

	function F(t, e) {
		var n = t.indexOf(e);
		return n >= 0 && t.splice(n, 1), e
	}

	function P(t, e, n, r) {
		if (S(t) || E(t))throw ai("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
		if (e) {
			if (t === e)throw ai("cpi", "Can't copy! Source and destination are identical.");
			if (n = n || [], r = r || [], y(t)) {
				var i = n.indexOf(t);
				if (-1 !== i)return r[i];
				n.push(t), r.push(e)
			}
			var a;
			if (ci(t)) {
				e.length = 0;
				for (var s = 0; s < t.length; s++)a = P(t[s], null, n, r), y(t[s]) && (n.push(t[s]), r.push(a)), e.push(a)
			} else {
				var u = e.$$hashKey;
				ci(e) ? e.length = 0 : o(e, function (t, n) {
					delete e[n]
				});
				for (var l in t)t.hasOwnProperty(l) && (a = P(t[l], null, n, r), y(t[l]) && (n.push(t[l]), r.push(a)), e[l] = a);
				c(e, u)
			}
		} else if (e = t, t)if (ci(t))e = P(t, [], n, r); else if (x(t))e = new Date(t.getTime()); else if (T(t))e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex; else if (y(t)) {
			var f = Object.create(Object.getPrototypeOf(t));
			e = P(t, f, n, r)
		}
		return e
	}

	function H(t, e) {
		if (ci(t)) {
			e = e || [];
			for (var n = 0, r = t.length; r > n; n++)e[n] = t[n]
		} else if (y(t)) {
			e = e || {};
			for (var i in t)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (e[i] = t[i])
		}
		return e || t
	}

	function I(t, e) {
		if (t === e)return !0;
		if (null === t || null === e)return !1;
		if (t !== t && e !== e)return !0;
		var r, i, o, a = typeof t, s = typeof e;
		if (a == s && "object" == a) {
			if (!ci(t)) {
				if (x(t))return x(e) ? I(t.getTime(), e.getTime()) : !1;
				if (T(t) && T(e))return t.toString() == e.toString();
				if (E(t) || E(e) || S(t) || S(e) || ci(e))return !1;
				o = {};
				for (i in t)if ("$" !== i.charAt(0) && !C(t[i])) {
					if (!I(t[i], e[i]))return !1;
					o[i] = !0
				}
				for (i in e)if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !C(e[i]))return !1;
				return !0
			}
			if (!ci(e))return !1;
			if ((r = t.length) == e.length) {
				for (i = 0; r > i; i++)if (!I(t[i], e[i]))return !1;
				return !0
			}
		}
		return !1
	}

	function M(t, e, n) {
		return t.concat(ni.call(e, n))
	}

	function L(t, e) {
		return ni.call(t, e || 0)
	}

	function q(t, e) {
		var n = arguments.length > 2 ? L(arguments, 2) : [];
		return !C(e) || e instanceof RegExp ? e : n.length ? function () {
			return arguments.length ? e.apply(t, M(n, arguments, 0)) : e.apply(t, n)
		} : function () {
			return arguments.length ? e.apply(t, arguments) : e.call(t)
		}
	}

	function U(t, r) {
		var i = r;
		return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? i = n : S(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : E(r) && (i = "$SCOPE"), i
	}

	function V(t, e) {
		return "undefined" == typeof t ? n : (w(e) || (e = e ? 2 : null), JSON.stringify(t, U, e))
	}

	function B(t) {
		return b(t) ? JSON.parse(t) : t
	}

	function W(t) {
		t = Zr(t).clone();
		try {
			t.empty()
		} catch (e) {
		}
		var n = Zr("<div>").append(t).html();
		try {
			return t[0].nodeType === $i ? Xr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (t, e) {
				return "<" + Xr(e)
			})
		} catch (e) {
			return Xr(n)
		}
	}

	function z(t) {
		try {
			return decodeURIComponent(t)
		} catch (e) {
		}
	}

	function X(t) {
		var e, n, r = {};
		return o((t || "").split("&"), function (t) {
			if (t && (e = t.replace(/\+/g, "%20").split("="), n = z(e[0]), $(n))) {
				var i = $(e[1]) ? z(e[1]) : !0;
				Gr.call(r, n) ? ci(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
			}
		}), r
	}

	function G(t) {
		var e = [];
		return o(t, function (t, n) {
			ci(t) ? o(t, function (t) {
				e.push(J(n, !0) + (t === !0 ? "" : "=" + J(t, !0)))
			}) : e.push(J(n, !0) + (t === !0 ? "" : "=" + J(t, !0)))
		}), e.length ? e.join("&") : ""
	}

	function Y(t) {
		return J(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
	}

	function J(t, e) {
		return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
	}

	function Q(t, e) {
		var n, r, i = pi.length;
		for (t = Zr(t), r = 0; i > r; ++r)if (n = pi[r] + e, b(n = t.attr(n)))return n;
		return null
	}

	function K(t, e) {
		var n, r, i = {};
		o(pi, function (e) {
			var i = e + "app";
			!n && t.hasAttribute && t.hasAttribute(i) && (n = t, r = t.getAttribute(i))
		}), o(pi, function (e) {
			var i, o = e + "app";
			!n && (i = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
		}), n && (i.strictDi = null !== Q(n, "strict-di"), e(n, r ? [r] : [], i))
	}

	function Z(n, r, i) {
		y(i) || (i = {});
		var a = {strictDi: !1};
		i = f(a, i);
		var s = function () {
			if (n = Zr(n), n.injector()) {
				var t = n[0] === e ? "document" : W(n);
				throw ai("btstrpd", "App Already Bootstrapped with this Element '{0}'", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
			}
			r = r || [], r.unshift(["$provide", function (t) {
				t.value("$rootElement", n)
			}]), i.debugInfoEnabled && r.push(["$compileProvider", function (t) {
				t.debugInfoEnabled(!0)
			}]), r.unshift("ng");
			var o = Be(r, i.strictDi);
			return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (t, e, n, r) {
				t.$apply(function () {
					e.data("$injector", r), n(e)(t)
				})
			}]), o
		}, u = /^NG_ENABLE_DEBUG_INFO!/, l = /^NG_DEFER_BOOTSTRAP!/;
		return t && u.test(t.name) && (i.debugInfoEnabled = !0, t.name = t.name.replace(u, "")), t && !l.test(t.name) ? s() : (t.name = t.name.replace(l, ""), void(si.resumeBootstrap = function (t) {
			o(t, function (t) {
				r.push(t)
			}), s()
		}))
	}

	function te() {
		t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
	}

	function ee(t) {
		var e = si.element(t).injector();
		if (!e)throw ai("test", "no injector found for element argument to getTestability");
		return e.get("$$testability")
	}

	function ne(t, e) {
		return e = e || "_", t.replace(mi, function (t, n) {
			return (n ? e : "") + t.toLowerCase()
		})
	}

	function re() {
		var e;
		vi || (ti = t.jQuery, ti && ti.fn.on ? (Zr = ti, f(ti.fn, {
			scope: Pi.scope,
			isolateScope: Pi.isolateScope,
			controller: Pi.controller,
			injector: Pi.injector,
			inheritedData: Pi.inheritedData
		}), e = ti.cleanData, ti.cleanData = function (t) {
			var n;
			if (li)li = !1; else for (var r, i = 0; null != (r = t[i]); i++)n = ti._data(r, "events"), n && n.$destroy && ti(r).triggerHandler("$destroy");
			e(t)
		}) : Zr = be, si.element = Zr, vi = !0)
	}

	function ie(t, e, n) {
		if (!t)throw ai("areq", "Argument '{0}' is {1}", e || "?", n || "required");
		return t
	}

	function oe(t, e, n) {
		return n && ci(t) && (t = t[t.length - 1]), ie(C(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
	}

	function ae(t, e) {
		if ("hasOwnProperty" === t)throw ai("badname", "hasOwnProperty is not a valid {0} name", e)
	}

	function se(t, e, n) {
		if (!e)return t;
		for (var r, i = e.split("."), o = t, a = i.length, s = 0; a > s; s++)r = i[s], t && (t = (o = t)[r]);
		return !n && C(t) ? q(o, t) : t
	}

	function ue(t) {
		var e = t[0], n = t[t.length - 1], r = [e];
		do {
			if (e = e.nextSibling, !e)break;
			r.push(e)
		} while (e !== n);
		return Zr(r)
	}

	function le() {
		return Object.create(null)
	}

	function ce(t) {
		function e(t, e, n) {
			return t[e] || (t[e] = n())
		}

		var n = r("$injector"), i = r("ng"), o = e(t, "angular", Object);
		return o.$$minErr = o.$$minErr || r, e(o, "module", function () {
			var t = {};
			return function (r, o, a) {
				var s = function (t, e) {
					if ("hasOwnProperty" === t)throw i("badname", "hasOwnProperty is not a valid {0} name", e)
				};
				return s(r, "module"), o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function () {
					function t(t, n, r, i) {
						return i || (i = e), function () {
							return i[r || "push"]([t, n, arguments]), l
						}
					}

					if (!o)throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
					var e = [], i = [], s = [], u = t("$injector", "invoke", "push", i), l = {
						_invokeQueue: e,
						_configBlocks: i,
						_runBlocks: s,
						requires: o,
						name: r,
						provider: t("$provide", "provider"),
						factory: t("$provide", "factory"),
						service: t("$provide", "service"),
						value: t("$provide", "value"),
						constant: t("$provide", "constant", "unshift"),
						animation: t("$animateProvider", "register"),
						filter: t("$filterProvider", "register"),
						controller: t("$controllerProvider", "register"),
						directive: t("$compileProvider", "directive"),
						config: u,
						run: function (t) {
							return s.push(t), this
						}
					};
					return a && u(a), l
				})
			}
		})
	}

	function fe(t) {
		var e = [];
		return JSON.stringify(t, function (t, n) {
			if (n = U(t, n), y(n)) {
				if (e.indexOf(n) >= 0)return "<<already seen>>";
				e.push(n)
			}
			return n
		})
	}

	function de(t) {
		return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? fe(t) : t
	}

	function he(e) {
		f(e, {
			bootstrap: Z,
			copy: P,
			extend: f,
			equals: I,
			element: Zr,
			forEach: o,
			injector: Be,
			noop: p,
			bind: q,
			toJson: V,
			fromJson: B,
			identity: m,
			isUndefined: g,
			isDefined: $,
			isString: b,
			isFunction: C,
			isObject: y,
			isNumber: w,
			isElement: O,
			isArray: ci,
			version: xi,
			isDate: x,
			lowercase: Xr,
			uppercase: Yr,
			callbacks: {counter: 0},
			getTestability: ee,
			$$minErr: r,
			$$csp: hi,
			reloadWithDebugInfo: te
		}), ei = ce(t);
		try {
			ei("ngLocale")
		} catch (n) {
			ei("ngLocale", []).provider("$locale", gn)
		}
		ei("ng", ["ngLocale"], ["$provide", function (t) {
			t.provider({$$sanitizeUri: Yn}), t.provider("$compile", Qe).directive({
				a: Ao,
				input: Wo,
				textarea: Wo,
				form: jo,
				script: Ra,
				select: Ha,
				style: Ma,
				option: Ia,
				ngBind: Go,
				ngBindHtml: Jo,
				ngBindTemplate: Yo,
				ngClass: Ko,
				ngClassEven: ta,
				ngClassOdd: Zo,
				ngCloak: ea,
				ngController: na,
				ngForm: Ro,
				ngHide: Aa,
				ngIf: oa,
				ngInclude: aa,
				ngInit: ua,
				ngNonBindable: xa,
				ngPluralize: Ca,
				ngRepeat: Ta,
				ngShow: ka,
				ngStyle: _a,
				ngSwitch: Na,
				ngSwitchWhen: Da,
				ngSwitchDefault: Oa,
				ngOptions: Pa,
				ngTransclude: ja,
				ngModel: ya,
				ngList: la,
				ngChange: Qo,
				pattern: qa,
				ngPattern: qa,
				required: La,
				ngRequired: La,
				minlength: Va,
				ngMinlength: Va,
				maxlength: Ua,
				ngMaxlength: Ua,
				ngValue: Xo,
				ngModelOptions: wa
			}).directive({ngInclude: sa}).directive(_o).directive(ra), t.provider({
				$anchorScroll: We,
				$animate: zi,
				$browser: Ge,
				$cacheFactory: Ye,
				$controller: en,
				$document: nn,
				$exceptionHandler: rn,
				$filter: sr,
				$interpolate: mn,
				$interval: vn,
				$http: fn,
				$httpBackend: hn,
				$location: Dn,
				$log: On,
				$parse: Vn,
				$rootScope: Gn,
				$q: Bn,
				$$q: Wn,
				$sce: Zn,
				$sceDelegate: Kn,
				$sniffer: tr,
				$templateCache: Je,
				$templateRequest: er,
				$$testability: nr,
				$timeout: rr,
				$window: ar,
				$$rAF: Xn,
				$$asyncCallback: ze,
				$$jqLite: Me
			})
		}])
	}

	function pe() {
		return ++Ti
	}

	function me(t) {
		return t.replace(ki, function (t, e, n, r) {
			return r ? n.toUpperCase() : n
		}).replace(Ai, "Moz$1")
	}

	function ve(t) {
		return !Oi.test(t)
	}

	function ge(t) {
		var e = t.nodeType;
		return e === gi || !e || e === bi
	}

	function $e(t, e) {
		var n, r, i, a, s = e.createDocumentFragment(), u = [];
		if (ve(t))u.push(e.createTextNode(t)); else {
			for (n = n || s.appendChild(e.createElement("div")), r = (ji.exec(t) || ["", ""])[1].toLowerCase(), i = Fi[r] || Fi._default, n.innerHTML = i[1] + t.replace(Ri, "<$1></$2>") + i[2], a = i[0]; a--;)n = n.lastChild;
			u = M(u, n.childNodes), n = s.firstChild, n.textContent = ""
		}
		return s.textContent = "", s.innerHTML = "", o(u, function (t) {
			s.appendChild(t)
		}), s
	}

	function ye(t, n) {
		n = n || e;
		var r;
		return (r = Di.exec(t)) ? [n.createElement(r[1])] : (r = $e(t, n)) ? r.childNodes : []
	}

	function be(t) {
		if (t instanceof be)return t;
		var e;
		if (b(t) && (t = fi(t), e = !0), !(this instanceof be)) {
			if (e && "<" != t.charAt(0))throw Ni("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
			return new be(t)
		}
		e ? Ne(this, ye(t)) : Ne(this, t)
	}

	function we(t) {
		return t.cloneNode(!0)
	}

	function xe(t, e) {
		if (e || Te(t), t.querySelectorAll)for (var n = t.querySelectorAll("*"), r = 0, i = n.length; i > r; r++)Te(n[r])
	}

	function Ce(t, e, n, r) {
		if ($(r))throw Ni("offargs", "jqLite#off() does not support the `selector` argument");
		var i = Se(t), a = i && i.events, s = i && i.handle;
		if (s)if (e)o(e.split(" "), function (e) {
			if ($(n)) {
				var r = a[e];
				if (F(r || [], n), r && r.length > 0)return
			}
			Ei(t, e, s), delete a[e]
		}); else for (e in a)"$destroy" !== e && Ei(t, e, s), delete a[e]
	}

	function Te(t, e) {
		var r = t.ng339, i = r && Ci[r];
		if (i) {
			if (e)return void delete i.data[e];
			i.handle && (i.events.$destroy && i.handle({}, "$destroy"), Ce(t)), delete Ci[r], t.ng339 = n
		}
	}

	function Se(t, e) {
		var r = t.ng339, i = r && Ci[r];
		return e && !i && (t.ng339 = r = pe(), i = Ci[r] = {events: {}, data: {}, handle: n}), i
	}

	function Ee(t, e, n) {
		if (ge(t)) {
			var r = $(n), i = !r && e && !y(e), o = !e, a = Se(t, !i), s = a && a.data;
			if (r)s[e] = n; else {
				if (o)return s;
				if (i)return s && s[e];
				f(s, e)
			}
		}
	}

	function ke(t, e) {
		return t.getAttribute ? (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1 : !1
	}

	function Ae(t, e) {
		e && t.setAttribute && o(e.split(" "), function (e) {
			t.setAttribute("class", fi((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + fi(e) + " ", " ")))
		})
	}

	function _e(t, e) {
		if (e && t.setAttribute) {
			var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
			o(e.split(" "), function (t) {
				t = fi(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
			}), t.setAttribute("class", fi(n))
		}
	}

	function Ne(t, e) {
		if (e)if (e.nodeType)t[t.length++] = e; else {
			var n = e.length;
			if ("number" == typeof n && e.window !== e) {
				if (n)for (var r = 0; n > r; r++)t[t.length++] = e[r]
			} else t[t.length++] = e
		}
	}

	function De(t, e) {
		return Oe(t, "$" + (e || "ngController") + "Controller")
	}

	function Oe(t, e, r) {
		t.nodeType == bi && (t = t.documentElement);
		for (var i = ci(e) ? e : [e]; t;) {
			for (var o = 0, a = i.length; a > o; o++)if ((r = Zr.data(t, i[o])) !== n)return r;
			t = t.parentNode || t.nodeType === wi && t.host
		}
	}

	function je(t) {
		for (xe(t, !0); t.firstChild;)t.removeChild(t.firstChild)
	}

	function Re(t, e) {
		e || xe(t);
		var n = t.parentNode;
		n && n.removeChild(t)
	}

	function Fe(e, n) {
		n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : Zr(n).on("load", e)
	}

	function Pe(t, e) {
		var n = Hi[e.toLowerCase()];
		return n && Ii[R(t)] && n
	}

	function He(t, e) {
		var n = t.nodeName;
		return ("INPUT" === n || "TEXTAREA" === n) && Mi[e]
	}

	function Ie(t, e) {
		var n = function (n, r) {
			n.isDefaultPrevented = function () {
				return n.defaultPrevented
			};
			var i = e[r || n.type], o = i ? i.length : 0;
			if (o) {
				if (g(n.immediatePropagationStopped)) {
					var a = n.stopImmediatePropagation;
					n.stopImmediatePropagation = function () {
						n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
					}
				}
				n.isImmediatePropagationStopped = function () {
					return n.immediatePropagationStopped === !0
				}, o > 1 && (i = H(i));
				for (var s = 0; o > s; s++)n.isImmediatePropagationStopped() || i[s].call(t, n)
			}
		};
		return n.elem = t, n
	}

	function Me() {
		this.$get = function () {
			return f(be, {
				hasClass: function (t, e) {
					return t.attr && (t = t[0]), ke(t, e)
				}, addClass: function (t, e) {
					return t.attr && (t = t[0]), _e(t, e)
				}, removeClass: function (t, e) {
					return t.attr && (t = t[0]), Ae(t, e)
				}
			})
		}
	}

	function Le(t, e) {
		var n = t && t.$$hashKey;
		if (n)return "function" == typeof n && (n = t.$$hashKey()), n;
		var r = typeof t;
		return n = "function" == r || "object" == r && null !== t ? t.$$hashKey = r + ":" + (e || l)() : r + ":" + t
	}

	function qe(t, e) {
		if (e) {
			var n = 0;
			this.nextUid = function () {
				return ++n
			}
		}
		o(t, this.put, this)
	}

	function Ue(t) {
		var e = t.toString().replace(Vi, ""), n = e.match(Li);
		return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
	}

	function Ve(t, e, n) {
		var r, i, a, s;
		if ("function" == typeof t) {
			if (!(r = t.$inject)) {
				if (r = [], t.length) {
					if (e)throw b(n) && n || (n = t.name || Ue(t)), Bi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
					i = t.toString().replace(Vi, ""), a = i.match(Li), o(a[1].split(qi), function (t) {
						t.replace(Ui, function (t, e, n) {
							r.push(n)
						})
					})
				}
				t.$inject = r
			}
		} else ci(t) ? (s = t.length - 1, oe(t[s], "fn"), r = t.slice(0, s)) : oe(t, "fn", !0);
		return r
	}

	function Be(t, e) {
		function r(t) {
			return function (e, n) {
				return y(e) ? void o(e, u(t)) : t(e, n)
			}
		}

		function i(t, e) {
			if (ae(t, "service"), (C(e) || ci(e)) && (e = E.instantiate(e)), !e.$get)throw Bi("pget", "Provider '{0}' must define $get factory method.", t);
			return S[t + w] = e
		}

		function a(t, e) {
			return function () {
				var n = A.invoke(e, this);
				if (g(n))throw Bi("undef", "Provider '{0}' must return a value from $get factory method.", t);
				return n
			}
		}

		function s(t, e, n) {
			return i(t, {$get: n !== !1 ? a(t, e) : e})
		}

		function l(t, e) {
			return s(t, ["$injector", function (t) {
				return t.instantiate(e)
			}])
		}

		function c(t, e) {
			return s(t, v(e), !1)
		}

		function f(t, e) {
			ae(t, "constant"), S[t] = e, k[t] = e
		}

		function d(t, e) {
			var n = E.get(t + w), r = n.$get;
			n.$get = function () {
				var t = A.invoke(r, n);
				return A.invoke(e, null, {$delegate: t})
			}
		}

		function h(t) {
			var e, n = [];
			return o(t, function (t) {
				function r(t) {
					var e, n;
					for (e = 0, n = t.length; n > e; e++) {
						var r = t[e], i = E.get(r[0]);
						i[r[1]].apply(i, r[2])
					}
				}

				if (!T.get(t)) {
					T.put(t, !0);
					try {
						b(t) ? (e = ei(t), n = n.concat(h(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : C(t) ? n.push(E.invoke(t)) : ci(t) ? n.push(E.invoke(t)) : oe(t, "module")
					} catch (i) {
						throw ci(t) && (t = t[t.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Bi("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, i.stack || i.message || i)
					}
				}
			}), n
		}

		function m(t, n) {
			function r(e, r) {
				if (t.hasOwnProperty(e)) {
					if (t[e] === $)throw Bi("cdep", "Circular dependency found: {0}", e + " <- " + x.join(" <- "));
					return t[e]
				}
				try {
					return x.unshift(e), t[e] = $, t[e] = n(e, r)
				} catch (i) {
					throw t[e] === $ && delete t[e], i
				} finally {
					x.shift()
				}
			}

			function i(t, n, i, o) {
				"string" == typeof i && (o = i, i = null);
				var a, s, u, l = [], c = Ve(t, e, o);
				for (s = 0, a = c.length; a > s; s++) {
					if (u = c[s], "string" != typeof u)throw Bi("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
					l.push(i && i.hasOwnProperty(u) ? i[u] : r(u, o))
				}
				return ci(t) && (t = t[a]), t.apply(n, l)
			}

			function o(t, e, n) {
				var r = Object.create((ci(t) ? t[t.length - 1] : t).prototype || null), o = i(t, r, e, n);
				return y(o) || C(o) ? o : r
			}

			return {
				invoke: i, instantiate: o, get: r, annotate: Ve, has: function (e) {
					return S.hasOwnProperty(e + w) || t.hasOwnProperty(e)
				}
			}
		}

		e = e === !0;
		var $ = {}, w = "Provider", x = [], T = new qe([], !0), S = {
			$provide: {
				provider: r(i),
				factory: r(s),
				service: r(l),
				value: r(c),
				constant: r(f),
				decorator: d
			}
		}, E = S.$injector = m(S, function (t, e) {
			throw si.isString(e) && x.push(e), Bi("unpr", "Unknown provider: {0}", x.join(" <- "))
		}), k = {}, A = k.$injector = m(k, function (t, e) {
			var r = E.get(t + w, e);
			return A.invoke(r.$get, r, n, t)
		});
		return o(h(t), function (t) {
			A.invoke(t || p)
		}), A
	}

	function We() {
		var t = !0;
		this.disableAutoScrolling = function () {
			t = !1
		}, this.$get = ["$window", "$location", "$rootScope", function (e, n, r) {
			function i(t) {
				var e = null;
				return Array.prototype.some.call(t, function (t) {
					return "a" === R(t) ? (e = t, !0) : void 0
				}), e
			}

			function o() {
				var t = s.yOffset;
				if (C(t))t = t(); else if (O(t)) {
					var n = t[0], r = e.getComputedStyle(n);
					t = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
				} else w(t) || (t = 0);
				return t
			}

			function a(t) {
				if (t) {
					t.scrollIntoView();
					var n = o();
					if (n) {
						var r = t.getBoundingClientRect().top;
						e.scrollBy(0, r - n)
					}
				} else e.scrollTo(0, 0)
			}

			function s() {
				var t, e = n.hash();
				e ? (t = u.getElementById(e)) ? a(t) : (t = i(u.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
			}

			var u = e.document;
			return t && r.$watch(function () {
				return n.hash()
			}, function (t, e) {
				(t !== e || "" !== t) && Fe(function () {
					r.$evalAsync(s)
				})
			}), s
		}]
	}

	function ze() {
		this.$get = ["$$rAF", "$timeout", function (t, e) {
			return t.supported ? function (e) {
				return t(e)
			} : function (t) {
				return e(t, 0, !1)
			}
		}]
	}

	function Xe(t, e, r, i) {
		function a(t) {
			try {
				t.apply(null, L(arguments, 1))
			} finally {
				if (C--, 0 === C)for (; T.length;)try {
					T.pop()()
				} catch (e) {
					r.error(e)
				}
			}
		}

		function s(t) {
			var e = t.indexOf("#");
			return -1 === e ? "" : t.substr(e + 1)
		}

		function u(t, e) {
			!function n() {
				o(E, function (t) {
					t()
				}), S = e(n, t)
			}()
		}

		function l() {
			c(), f()
		}

		function c() {
			k = t.history.state, k = g(k) ? null : k, I(k, R) && (k = R), R = k
		}

		function f() {
			(_ !== h.url() || A !== k) && (_ = h.url(), A = k, o(O, function (t) {
				t(h.url(), k)
			}))
		}

		function d(t) {
			try {
				return decodeURIComponent(t)
			} catch (e) {
				return t
			}
		}

		var h = this, m = e[0], v = t.location, $ = t.history, y = t.setTimeout, w = t.clearTimeout, x = {};
		h.isMock = !1;
		var C = 0, T = [];
		h.$$completeOutstandingRequest = a, h.$$incOutstandingRequestCount = function () {
			C++
		}, h.notifyWhenNoOutstandingRequests = function (t) {
			o(E, function (t) {
				t()
			}), 0 === C ? t() : T.push(t)
		};
		var S, E = [];
		h.addPollFn = function (t) {
			return g(S) && u(100, y), E.push(t), t
		};
		var k, A, _ = v.href, N = e.find("base"), D = null;
		c(), A = k, h.url = function (e, n, r) {
			if (g(r) && (r = null), v !== t.location && (v = t.location), $ !== t.history && ($ = t.history), e) {
				var o = A === r;
				if (_ === e && (!i.history || o))return h;
				var a = _ && xn(_) === xn(e);
				return _ = e, A = r, !i.history || a && o ? (a || (D = e), n ? v.replace(e) : a ? v.hash = s(e) : v.href = e) : ($[n ? "replaceState" : "pushState"](r, "", e), c(), A = k), h
			}
			return D || v.href.replace(/%27/g, "'")
		}, h.state = function () {
			return k
		};
		var O = [], j = !1, R = null;
		h.onUrlChange = function (e) {
			return j || (i.history && Zr(t).on("popstate", l), Zr(t).on("hashchange", l), j = !0), O.push(e), e
		}, h.$$checkUrlChange = f, h.baseHref = function () {
			var t = N.attr("href");
			return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
		};
		var F = {}, P = "", H = h.baseHref();
		h.cookies = function (t, e) {
			var i, o, a, s, u;
			if (!t) {
				if (m.cookie !== P)for (P = m.cookie, o = P.split("; "), F = {}, s = 0; s < o.length; s++)a = o[s], u = a.indexOf("="), u > 0 && (t = d(a.substring(0, u)), F[t] === n && (F[t] = d(a.substring(u + 1))));
				return F
			}
			e === n ? m.cookie = encodeURIComponent(t) + "=;path=" + H + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : b(e) && (i = (m.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + ";path=" + H).length + 1, i > 4096 && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
		}, h.defer = function (t, e) {
			var n;
			return C++, n = y(function () {
				delete x[n], a(t)
			}, e || 0), x[n] = !0, n
		}, h.defer.cancel = function (t) {
			return x[t] ? (delete x[t], w(t), a(p), !0) : !1
		}
	}

	function Ge() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function (t, e, n, r) {
			return new Xe(t, r, e, n)
		}]
	}

	function Ye() {
		this.$get = function () {
			function t(t, n) {
				function i(t) {
					t != d && (h ? h == t && (h = t.n) : h = t, o(t.n, t.p), o(t, d), d = t, d.n = null)
				}

				function o(t, e) {
					t != e && (t && (t.p = e), e && (e.n = t))
				}

				if (t in e)throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
				var a = 0, s = f({}, n, {id: t}), u = {}, l = n && n.capacity || Number.MAX_VALUE, c = {}, d = null, h = null;
				return e[t] = {
					put: function (t, e) {
						if (l < Number.MAX_VALUE) {
							var n = c[t] || (c[t] = {key: t});
							i(n)
						}
						if (!g(e))return t in u || a++, u[t] = e, a > l && this.remove(h.key), e
					}, get: function (t) {
						if (l < Number.MAX_VALUE) {
							var e = c[t];
							if (!e)return;
							i(e)
						}
						return u[t]
					}, remove: function (t) {
						if (l < Number.MAX_VALUE) {
							var e = c[t];
							if (!e)return;
							e == d && (d = e.p), e == h && (h = e.n), o(e.n, e.p), delete c[t]
						}
						delete u[t], a--
					}, removeAll: function () {
						u = {}, a = 0, c = {}, d = h = null
					}, destroy: function () {
						u = null, s = null, c = null, delete e[t]
					}, info: function () {
						return f({}, s, {size: a})
					}
				}
			}

			var e = {};
			return t.info = function () {
				var t = {};
				return o(e, function (e, n) {
					t[n] = e.info()
				}), t
			}, t.get = function (t) {
				return e[t]
			}, t
		}
	}

	function Je() {
		this.$get = ["$cacheFactory", function (t) {
			return t("templates")
		}]
	}

	function Qe(t, r) {
		function i(t, e) {
			var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, r = {};
			return o(t, function (t, i) {
				var o = t.match(n);
				if (!o)throw Xi("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, i, t);
				r[i] = {mode: o[1][0], collection: "*" === o[2], optional: "?" === o[3], attrName: o[4] || i}
			}), r
		}

		var a = {}, s = "Directive", l = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, c = /(([\w\-]+)(?:\:([^;]+))?;?)/, d = j("ngSrc,ngSrcset,src,srcset"), g = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, w = /^(on[a-z]+|formaction)$/;
		this.directive = function T(e, n) {
			return ae(e, "directive"), b(e) ? (ie(n, "directiveFactory"), a.hasOwnProperty(e) || (a[e] = [], t.factory(e + s, ["$injector", "$exceptionHandler", function (t, n) {
				var r = [];
				return o(a[e], function (o, a) {
					try {
						var s = t.invoke(o);
						C(s) ? s = {compile: v(s)} : !s.compile && s.link && (s.compile = v(s.link)), s.priority = s.priority || 0, s.index = a, s.name = s.name || e, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA", y(s.scope) && (s.$$isolateBindings = i(s.scope, s.name)), r.push(s)
					} catch (u) {
						n(u)
					}
				}), r
			}])), a[e].push(n)) : o(e, u(T)), this
		}, this.aHrefSanitizationWhitelist = function (t) {
			return $(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
		}, this.imgSrcSanitizationWhitelist = function (t) {
			return $(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
		};
		var x = !0;
		this.debugInfoEnabled = function (t) {
			return $(t) ? (x = t, this) : x
		}, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (t, r, i, u, v, $, T, S, k, A, _) {
			function N(t, e) {
				try {
					t.addClass(e)
				} catch (n) {
				}
			}

			function D(t, e, n, r, i) {
				t instanceof Zr || (t = Zr(t)), o(t, function (e, n) {
					e.nodeType == $i && e.nodeValue.match(/\S+/) && (t[n] = Zr(e).wrap("<span></span>").parent()[0])
				});
				var a = j(t, e, t, n, r, i);
				D.$$addScopeClass(t);
				var s = null;
				return function (e, n, r) {
					ie(e, "scope"), r = r || {};
					var i = r.parentBoundTranscludeFn, o = r.transcludeControllers, u = r.futureParentElement;
					i && i.$$boundTransclude && (i = i.$$boundTransclude), s || (s = O(u));
					var l;
					if (l = "html" !== s ? Zr(K(s, Zr("<div>").append(t).html())) : n ? Pi.clone.call(t) : t, o)for (var c in o)l.data("$" + c + "Controller", o[c].instance);
					return D.$$addScopeInfo(l, e), n && n(l, e), a && a(e, l, l, i), l
				}
			}

			function O(t) {
				var e = t && t[0];
				return e && "foreignobject" !== R(e) && e.toString().match(/SVG/) ? "svg" : "html"
			}

			function j(t, e, r, i, o, a) {
				function s(t, r, i, o) {
					var a, s, u, l, c, f, d, h, v;
					if (p) {
						var g = r.length;
						for (v = new Array(g), c = 0; c < m.length; c += 3)d = m[c], v[d] = r[d]
					} else v = r;
					for (c = 0, f = m.length; f > c;)u = v[m[c++]], a = m[c++], s = m[c++], a ? (a.scope ? (l = t.$new(), D.$$addScopeInfo(Zr(u), l)) : l = t, h = a.transcludeOnThisElement ? P(t, a.transclude, o, a.elementTranscludeOnThisElement) : !a.templateOnThisElement && o ? o : !o && e ? P(t, e) : null, a(s, l, u, i, h)) : s && s(t, u.childNodes, n, o)
				}

				for (var u, l, c, f, d, h, p, m = [], v = 0; v < t.length; v++)u = new ae, l = H(t[v], [], u, 0 === v ? i : n, o), c = l.length ? U(l, t[v], u, e, r, null, [], [], a) : null, c && c.scope && D.$$addScopeClass(u.$$element), d = c && c.terminal || !(f = t[v].childNodes) || !f.length ? null : j(f, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : e), (c || d) && (m.push(v, c, d), h = !0, p = p || c), a = null;
				return h ? s : null
			}

			function P(t, e, n) {
				var r = function (r, i, o, a, s) {
					return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {
						parentBoundTranscludeFn: n,
						transcludeControllers: o,
						futureParentElement: a
					})
				};
				return r
			}

			function H(t, e, n, r, i) {
				var o, a, s = t.nodeType, u = n.$attr;
				switch (s) {
					case gi:
						B(e, Ke(R(t)), "E", r, i);
						for (var f, d, h, p, m, v, g = t.attributes, $ = 0, w = g && g.length; w > $; $++) {
							var x = !1, C = !1;
							f = g[$], d = f.name, m = fi(f.value), p = Ke(d), (v = fe.test(p)) && (d = d.replace(Gi, "").substr(8).replace(/_(.)/g, function (t, e) {
								return e.toUpperCase()
							}));
							var T = p.replace(/(Start|End)$/, "");
							z(T) && p === T + "Start" && (x = d, C = d.substr(0, d.length - 5) + "end", d = d.substr(0, d.length - 6)), h = Ke(d.toLowerCase()), u[h] = d, (v || !n.hasOwnProperty(h)) && (n[h] = m, Pe(t, h) && (n[h] = !0)), te(t, e, m, h, v), B(e, h, "A", r, i, x, C)
						}
						if (a = t.className, y(a) && (a = a.animVal), b(a) && "" !== a)for (; o = c.exec(a);)h = Ke(o[2]), B(e, h, "C", r, i) && (n[h] = fi(o[3])), a = a.substr(o.index + o[0].length);
						break;
					case $i:
						Q(e, t.nodeValue);
						break;
					case yi:
						try {
							o = l.exec(t.nodeValue), o && (h = Ke(o[1]), B(e, h, "M", r, i) && (n[h] = fi(o[2])))
						} catch (S) {
						}
				}
				return e.sort(Y), e
			}

			function M(t, e, n) {
				var r = [], i = 0;
				if (e && t.hasAttribute && t.hasAttribute(e)) {
					do {
						if (!t)throw Xi("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
						t.nodeType == gi && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
					} while (i > 0)
				} else r.push(t);
				return Zr(r)
			}

			function q(t, e, n) {
				return function (r, i, o, a, s) {
					return i = M(i[0], e, n), t(r, i, o, a, s)
				}
			}

			function U(t, a, s, u, l, c, f, d, h) {
				function p(t, e, n, r) {
					t && (n && (t = q(t, n, r)), t.require = S.require, t.directiveName = k, (R === S || S.$$isolateScope) && (t = re(t, {isolateScope: !0})), f.push(t)), e && (n && (e = q(e, n, r)), e.require = S.require, e.directiveName = k, (R === S || S.$$isolateScope) && (e = re(e, {isolateScope: !0})), d.push(e))
				}

				function m(t, e, n, r) {
					var i, a, s = "data", u = !1, l = n;
					if (b(e)) {
						if (a = e.match(g), e = e.substring(a[0].length), a[3] && (a[1] ? a[3] = null : a[1] = a[3]), "^" === a[1] ? s = "inheritedData" : "^^" === a[1] && (s = "inheritedData", l = n.parent()), "?" === a[2] && (u = !0), i = null, r && "data" === s && (i = r[e]) && (i = i.instance), i = i || l[s]("$" + e + "Controller"), !i && !u)throw Xi("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", e, t);
						return i || null
					}
					return ci(e) && (i = [], o(e, function (e) {
						i.push(m(t, e, n, r))
					})), i
				}

				function w(t, e, i, u, l) {
					function c(t, e, r) {
						var i;
						return E(t) || (r = e, e = t, t = n), z && (i = w), r || (r = z ? C.parent() : C), l(t, e, i, r, _)
					}

					var h, p, g, y, b, w, x, C, S;
					if (a === i ? (S = s, C = s.$$element) : (C = Zr(i), S = new ae(C, s)), R && (b = e.$new(!0)), l && (x = c, x.$$boundTransclude = l), j && (T = {}, w = {}, o(j, function (t) {
								var n, r = {
									$scope: t === R || t.$$isolateScope ? b : e,
									$element: C,
									$attrs: S,
									$transclude: x
								};
								y = t.controller, "@" == y && (y = S[t.name]), n = $(y, r, !0, t.controllerAs), w[t.name] = n, z || C.data("$" + t.name + "Controller", n.instance), T[t.name] = n
							})), R) {
						D.$$addScopeInfo(C, b, !0, !(F && (F === R || F === R.$$originalDirective))), D.$$addScopeClass(C, !0);
						var k = T && T[R.name], A = b;
						k && k.identifier && R.bindToController === !0 && (A = k.instance), o(b.$$isolateBindings = R.$$isolateBindings, function (t, n) {
							var i, o, a, s, u = t.attrName, l = t.optional, c = t.mode;
							switch (c) {
								case"@":
									S.$observe(u, function (t) {
										A[n] = t
									}), S.$$observers[u].$$scope = e, S[u] && (A[n] = r(S[u])(e));
									break;
								case"=":
									if (l && !S[u])return;
									o = v(S[u]), s = o.literal ? I : function (t, e) {
										return t === e || t !== t && e !== e
									}, a = o.assign || function () {
										throw i = A[n] = o(e), Xi("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", S[u], R.name)
									}, i = A[n] = o(e);
									var f = function (t) {
										return s(t, A[n]) || (s(t, i) ? a(e, t = A[n]) : A[n] = t), i = t
									};
									f.$stateful = !0;
									var d;
									d = t.collection ? e.$watchCollection(S[u], f) : e.$watch(v(S[u], f), null, o.literal), b.$on("$destroy", d);
									break;
								case"&":
									o = v(S[u]), A[n] = function (t) {
										return o(e, t)
									}
							}
						})
					}
					for (T && (o(T, function (t) {
						t()
					}), T = null), h = 0, p = f.length; p > h; h++)g = f[h], oe(g, g.isolateScope ? b : e, C, S, g.require && m(g.directiveName, g.require, C, w), x);
					var _ = e;
					for (R && (R.template || null === R.templateUrl) && (_ = b), t && t(_, i.childNodes, n, l), h = d.length - 1; h >= 0; h--)g = d[h], oe(g, g.isolateScope ? b : e, C, S, g.require && m(g.directiveName, g.require, C, w), x)
				}

				h = h || {};
				for (var x, T, S, k, A, _, N, O = -Number.MAX_VALUE, j = h.controllerDirectives, R = h.newIsolateScopeDirective, F = h.templateDirective, P = h.nonTlbTranscludeDirective, U = !1, B = !1, z = h.hasElementTranscludeDirective, Y = s.$$element = Zr(a), Q = c, Z = u, te = 0, ne = t.length; ne > te; te++) {
					S = t[te];
					var ie = S.$$start, se = S.$$end;
					if (ie && (Y = M(a, ie, se)), A = n, O > S.priority)break;
					if ((N = S.scope) && (S.templateUrl || (y(N) ? (J("new/isolated scope", R || x, S, Y), R = S) : J("new/isolated scope", R, S, Y)), x = x || S), k = S.name, !S.templateUrl && S.controller && (N = S.controller, j = j || {}, J("'" + k + "' controller", j[k], S, Y), j[k] = S), (N = S.transclude) && (U = !0, S.$$tlb || (J("transclusion", P, S, Y), P = S), "element" == N ? (z = !0, O = S.priority, A = Y, Y = s.$$element = Zr(e.createComment(" " + k + ": " + s[k] + " ")), a = Y[0], ee(l, L(A), a), Z = D(A, u, O, Q && Q.name, {nonTlbTranscludeDirective: P})) : (A = Zr(we(a)).contents(), Y.empty(), Z = D(A, u))), S.template)if (B = !0, J("template", F, S, Y), F = S, N = C(S.template) ? S.template(Y, s) : S.template, N = ce(N), S.replace) {
						if (Q = S, A = ve(N) ? [] : tn(K(S.templateNamespace, fi(N))), a = A[0], 1 != A.length || a.nodeType !== gi)throw Xi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", k, "");
						ee(l, Y, a);
						var ue = {$attr: {}}, le = H(a, [], ue), fe = t.splice(te + 1, t.length - (te + 1));
						R && V(le), t = t.concat(le).concat(fe), X(s, ue), ne = t.length
					} else Y.html(N);
					if (S.templateUrl)B = !0, J("template", F, S, Y), F = S, S.replace && (Q = S), w = G(t.splice(te, t.length - te), Y, s, l, U && Z, f, d, {
						controllerDirectives: j,
						newIsolateScopeDirective: R,
						templateDirective: F,
						nonTlbTranscludeDirective: P
					}), ne = t.length; else if (S.compile)try {
						_ = S.compile(Y, s, Z), C(_) ? p(null, _, ie, se) : _ && p(_.pre, _.post, ie, se)
					} catch (de) {
						i(de, W(Y))
					}
					S.terminal && (w.terminal = !0, O = Math.max(O, S.priority))
				}
				return w.scope = x && x.scope === !0, w.transcludeOnThisElement = U, w.elementTranscludeOnThisElement = z, w.templateOnThisElement = B, w.transclude = Z, h.hasElementTranscludeDirective = z, w
			}

			function V(t) {
				for (var e = 0, n = t.length; n > e; e++)t[e] = h(t[e], {$$isolateScope: !0})
			}

			function B(e, r, o, u, l, c, f) {
				if (r === l)return null;
				var d = null;
				if (a.hasOwnProperty(r))for (var p, m = t.get(r + s), v = 0, g = m.length; g > v; v++)try {
					p = m[v], (u === n || u > p.priority) && -1 != p.restrict.indexOf(o) && (c && (p = h(p, {
						$$start: c,
						$$end: f
					})), e.push(p), d = p)
				} catch ($) {
					i($)
				}
				return d
			}

			function z(e) {
				if (a.hasOwnProperty(e))for (var n, r = t.get(e + s), i = 0, o = r.length; o > i; i++)if (n = r[i], n.multiElement)return !0;
				return !1
			}

			function X(t, e) {
				var n = e.$attr, r = t.$attr, i = t.$$element;
				o(t, function (r, i) {
					"$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
				}), o(e, function (e, o) {
					"class" == o ? (N(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
				})
			}

			function G(t, e, n, r, i, a, s, l) {
				var c, d, h = [], p = e[0], m = t.shift(), v = f({}, m, {
					templateUrl: null,
					transclude: null,
					replace: null,
					$$originalDirective: m
				}), g = C(m.templateUrl) ? m.templateUrl(e, n) : m.templateUrl, $ = m.templateNamespace;
				return e.empty(), u(k.getTrustedResourceUrl(g)).then(function (u) {
					var f, b, w, x;
					if (u = ce(u), m.replace) {
						if (w = ve(u) ? [] : tn(K($, fi(u))), f = w[0], 1 != w.length || f.nodeType !== gi)throw Xi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", m.name, g);
						b = {$attr: {}}, ee(r, e, f);
						var C = H(f, [], b);
						y(m.scope) && V(C), t = C.concat(t), X(n, b)
					} else f = p, e.html(u);
					for (t.unshift(v), c = U(t, f, n, i, e, m, a, s, l), o(r, function (t, n) {
						t == f && (r[n] = e[0])
					}), d = j(e[0].childNodes, i); h.length;) {
						var T = h.shift(), S = h.shift(), E = h.shift(), k = h.shift(), A = e[0];
						if (!T.$$destroyed) {
							if (S !== p) {
								var _ = S.className;
								l.hasElementTranscludeDirective && m.replace || (A = we(f)), ee(E, Zr(S), A), N(Zr(A), _)
							}
							x = c.transcludeOnThisElement ? P(T, c.transclude, k) : k, c(d, T, A, r, x)
						}
					}
					h = null
				}), function (t, e, n, r, i) {
					var o = i;
					e.$$destroyed || (h ? h.push(e, n, r, o) : (c.transcludeOnThisElement && (o = P(e, c.transclude, i)), c(d, e, n, r, o)))
				}
			}

			function Y(t, e) {
				var n = e.priority - t.priority;
				return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
			}

			function J(t, e, n, r) {
				if (e)throw Xi("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", e.name, n.name, t, W(r))
			}

			function Q(t, e) {
				var n = r(e, !0);
				n && t.push({
					priority: 0, compile: function (t) {
						var e = t.parent(), r = !!e.length;
						return r && D.$$addBindingClass(e), function (t, e) {
							var i = e.parent();
							r || D.$$addBindingClass(i), D.$$addBindingInfo(i, n.expressions), t.$watch(n, function (t) {
								e[0].nodeValue = t
							})
						}
					}
				})
			}

			function K(t, n) {
				switch (t = Xr(t || "html")) {
					case"svg":
					case"math":
						var r = e.createElement("div");
						return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
					default:
						return n
				}
			}

			function Z(t, e) {
				if ("srcdoc" == e)return k.HTML;
				var n = R(t);
				return "xlinkHref" == e || "form" == n && "action" == e || "img" != n && ("src" == e || "ngSrc" == e) ? k.RESOURCE_URL : void 0
			}

			function te(t, e, n, i, o) {
				var a = Z(t, i);
				o = d[i] || o;
				var s = r(n, !0, a, o);
				if (s) {
					if ("multiple" === i && "select" === R(t))throw Xi("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", W(t));
					e.push({
						priority: 100, compile: function () {
							return {
								pre: function (t, e, u) {
									var l = u.$$observers || (u.$$observers = {});
									if (w.test(i))throw Xi("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
									var c = u[i];
									c !== n && (s = c && r(c, !0, a, o), n = c), s && (u[i] = s(t), (l[i] || (l[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || t).$watch(s, function (t, e) {
										"class" === i && t != e ? u.$updateClass(t, e) : u.$set(i, t)
									}))
								}
							}
						}
					})
				}
			}

			function ee(t, n, r) {
				var i, o, a = n[0], s = n.length, u = a.parentNode;
				if (t)for (i = 0, o = t.length; o > i; i++)if (t[i] == a) {
					t[i++] = r;
					for (var l = i, c = l + s - 1, f = t.length; f > l; l++, c++)f > c ? t[l] = t[c] : delete t[l];
					t.length -= s - 1, t.context === a && (t.context = r);
					break
				}
				u && u.replaceChild(r, a);
				var d = e.createDocumentFragment();
				d.appendChild(a), Zr(r).data(Zr(a).data()), ti ? (li = !0, ti.cleanData([a])) : delete Zr.cache[a[Zr.expando]];
				for (var h = 1, p = n.length; p > h; h++) {
					var m = n[h];
					Zr(m).remove(), d.appendChild(m), delete n[h]
				}
				n[0] = r, n.length = 1
			}

			function re(t, e) {
				return f(function () {
					return t.apply(null, arguments)
				}, t, e)
			}

			function oe(t, e, n, r, o, a) {
				try {
					t(e, n, r, o, a)
				} catch (s) {
					i(s, W(n))
				}
			}

			var ae = function (t, e) {
				if (e) {
					var n, r, i, o = Object.keys(e);
					for (n = 0, r = o.length; r > n; n++)i = o[n], this[i] = e[i]
				} else this.$attr = {};
				this.$$element = t
			};
			ae.prototype = {
				$normalize: Ke, $addClass: function (t) {
					t && t.length > 0 && A.addClass(this.$$element, t)
				}, $removeClass: function (t) {
					t && t.length > 0 && A.removeClass(this.$$element, t)
				}, $updateClass: function (t, e) {
					var n = Ze(t, e);
					n && n.length && A.addClass(this.$$element, n);
					var r = Ze(e, t);
					r && r.length && A.removeClass(this.$$element, r)
				}, $set: function (t, e, r, a) {
					var s, u = this.$$element[0], l = Pe(u, t), c = He(u, t), f = t;
					if (l ? (this.$$element.prop(t, e), a = l) : c && (this[c] = e, f = c), this[t] = e, a ? this.$attr[t] = a : (a = this.$attr[t], a || (this.$attr[t] = a = ne(t, "-"))), s = R(this.$$element), "a" === s && "href" === t || "img" === s && "src" === t)this[t] = e = _(e, "src" === t); else if ("img" === s && "srcset" === t) {
						for (var d = "", h = fi(e), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, m = /\s/.test(h) ? p : /(,)/, v = h.split(m), g = Math.floor(v.length / 2), $ = 0; g > $; $++) {
							var y = 2 * $;
							d += _(fi(v[y]), !0), d += " " + fi(v[y + 1])
						}
						var b = fi(v[2 * $]).split(/\s/);
						d += _(fi(b[0]), !0), 2 === b.length && (d += " " + fi(b[1])), this[t] = e = d
					}
					r !== !1 && (null === e || e === n ? this.$$element.removeAttr(a) : this.$$element.attr(a, e));
					var w = this.$$observers;
					w && o(w[f], function (t) {
						try {
							t(e)
						} catch (n) {
							i(n)
						}
					})
				}, $observe: function (t, e) {
					var n = this, r = n.$$observers || (n.$$observers = le()), i = r[t] || (r[t] = []);
					return i.push(e), T.$evalAsync(function () {
						!i.$$inter && n.hasOwnProperty(t) && e(n[t])
					}), function () {
						F(i, e)
					}
				}
			};
			var se = r.startSymbol(), ue = r.endSymbol(), ce = "{{" == se || "}}" == ue ? m : function (t) {
				return t.replace(/\{\{/g, se).replace(/}}/g, ue)
			}, fe = /^ngAttr[A-Z]/;
			return D.$$addBindingInfo = x ? function (t, e) {
				var n = t.data("$binding") || [];
				ci(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
			} : p, D.$$addBindingClass = x ? function (t) {
				N(t, "ng-binding")
			} : p, D.$$addScopeInfo = x ? function (t, e, n, r) {
				var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
				t.data(i, e)
			} : p, D.$$addScopeClass = x ? function (t, e) {
				N(t, e ? "ng-isolate-scope" : "ng-scope")
			} : p, D
		}]
	}

	function Ke(t) {
		return me(t.replace(Gi, ""))
	}

	function Ze(t, e) {
		var n = "", r = t.split(/\s+/), i = e.split(/\s+/);
		t:for (var o = 0; o < r.length; o++) {
			for (var a = r[o], s = 0; s < i.length; s++)if (a == i[s])continue t;
			n += (n.length > 0 ? " " : "") + a
		}
		return n
	}

	function tn(t) {
		t = Zr(t);
		var e = t.length;
		if (1 >= e)return t;
		for (; e--;) {
			var n = t[e];
			n.nodeType === yi && ri.call(t, e, 1)
		}
		return t
	}

	function en() {
		var t = {}, e = !1, i = /^(\S+)(\s+as\s+(\w+))?$/;
		this.register = function (e, n) {
			ae(e, "controller"), y(e) ? f(t, e) : t[e] = n
		}, this.allowGlobals = function () {
			e = !0
		}, this.$get = ["$injector", "$window", function (o, a) {
			function s(t, e, n, i) {
				if (!t || !y(t.$scope))throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, e);
				t.$scope[e] = n
			}

			return function (r, u, l, c) {
				var d, h, p, m;
				if (l = l === !0, c && b(c) && (m = c), b(r) && (h = r.match(i), p = h[1], m = m || h[3], r = t.hasOwnProperty(p) ? t[p] : se(u.$scope, p, !0) || (e ? se(a, p, !0) : n), oe(r, p, !0)), l) {
					var v = (ci(r) ? r[r.length - 1] : r).prototype;
					return d = Object.create(v || null), m && s(u, m, d, p || r.name), f(function () {
						return o.invoke(r, d, u, p), d
					}, {instance: d, identifier: m})
				}
				return d = o.instantiate(r, u, p), m && s(u, m, d, p || r.name), d
			}
		}]
	}

	function nn() {
		this.$get = ["$window", function (t) {
			return Zr(t.document)
		}]
	}

	function rn() {
		this.$get = ["$log", function (t) {
			return function () {
				t.error.apply(t, arguments)
			}
		}]
	}

	function on(t, e) {
		if (b(t)) {
			var n = t.replace(Zi, "").trim();
			if (n) {
				var r = e("Content-Type");
				(r && 0 === r.indexOf(Yi) || an(n)) && (t = B(n))
			}
		}
		return t
	}

	function an(t) {
		var e = t.match(Qi);
		return e && Ki[e[0]].test(t)
	}

	function sn(t) {
		var e, n, r, i = le();
		return t ? (o(t.split("\n"), function (t) {
			r = t.indexOf(":"), e = Xr(fi(t.substr(0, r))), n = fi(t.substr(r + 1)), e && (i[e] = i[e] ? i[e] + ", " + n : n)
		}), i) : i
	}

	function un(t) {
		var e = y(t) ? t : n;
		return function (n) {
			if (e || (e = sn(t)), n) {
				var r = e[Xr(n)];
				return void 0 === r && (r = null), r
			}
			return e
		}
	}

	function ln(t, e, n, r) {
		return C(r) ? r(t, e, n) : (o(r, function (r) {
			t = r(t, e, n)
		}), t)
	}

	function cn(t) {
		return t >= 200 && 300 > t
	}

	function fn() {
		var t = this.defaults = {
			transformResponse: [on],
			transformRequest: [function (t) {
				return !y(t) || k(t) || _(t) || A(t) ? t : V(t)
			}],
			headers: {common: {Accept: "application/json, text/plain, */*"}, post: H(Ji), put: H(Ji), patch: H(Ji)},
			xsrfCookieName: "XSRF-TOKEN",
			xsrfHeaderName: "X-XSRF-TOKEN"
		}, e = !1;
		this.useApplyAsync = function (t) {
			return $(t) ? (e = !!t, this) : e
		};
		var i = this.interceptors = [];
		this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, u, l, c, d, h) {
			function p(e) {
				function i(t) {
					var e = f({}, t);
					return e.data = t.data ? ln(t.data, t.headers, t.status, u.transformResponse) : t.data, cn(t.status) ? e : d.reject(e)
				}

				function a(t) {
					var e, n = {};
					return o(t, function (t, r) {
						C(t) ? (e = t(), null != e && (n[r] = e)) : n[r] = t
					}), n
				}

				function s(e) {
					var n, r, i, o = t.headers, s = f({}, e.headers);
					o = f({}, o.common, o[Xr(e.method)]);
					t:for (n in o) {
						r = Xr(n);
						for (i in s)if (Xr(i) === r)continue t;
						s[n] = o[n]
					}
					return a(s)
				}

				if (!si.isObject(e))throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
				var u = f({
					method: "get",
					transformRequest: t.transformRequest,
					transformResponse: t.transformResponse
				}, e);
				u.headers = s(e), u.method = Yr(u.method);
				var l = function (e) {
					var r = e.headers, a = ln(e.data, un(r), n, e.transformRequest);
					return g(a) && o(r, function (t, e) {
						"content-type" === Xr(e) && delete r[e]
					}), g(e.withCredentials) && !g(t.withCredentials) && (e.withCredentials = t.withCredentials), w(e, a).then(i, i)
				}, c = [l, n], h = d.when(u);
				for (o(E, function (t) {
					(t.request || t.requestError) && c.unshift(t.request, t.requestError), (t.response || t.responseError) && c.push(t.response, t.responseError)
				}); c.length;) {
					var p = c.shift(), m = c.shift();
					h = h.then(p, m)
				}
				return h.success = function (t) {
					return h.then(function (e) {
						t(e.data, e.status, e.headers, u)
					}), h
				}, h.error = function (t) {
					return h.then(null, function (e) {
						t(e.data, e.status, e.headers, u)
					}), h
				}, h
			}

			function m() {
				o(arguments, function (t) {
					p[t] = function (e, n) {
						return p(f(n || {}, {method: t, url: e}))
					}
				})
			}

			function v() {
				o(arguments, function (t) {
					p[t] = function (e, n, r) {
						return p(f(r || {}, {method: t, url: e, data: n}))
					}
				})
			}

			function w(r, i) {
				function o(t, n, r, i) {
					function o() {
						s(n, t, r, i)
					}

					h && (cn(t) ? h.put(x, [t, n, sn(r), i]) : h.remove(x)), e ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
				}

				function s(t, e, n, i) {
					e = Math.max(e, 0), (cn(e) ? v.resolve : v.reject)({
						data: t,
						status: e,
						headers: un(n),
						config: r,
						statusText: i
					})
				}

				function l(t) {
					s(t.data, t.status, H(t.headers()), t.statusText)
				}

				function f() {
					var t = p.pendingRequests.indexOf(r);
					-1 !== t && p.pendingRequests.splice(t, 1)
				}

				var h, m, v = d.defer(), b = v.promise, w = r.headers, x = T(r.url, r.params);
				if (p.pendingRequests.push(r), b.then(f, f), !r.cache && !t.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (h = y(r.cache) ? r.cache : y(t.cache) ? t.cache : S), h && (m = h.get(x), $(m) ? D(m) ? m.then(l, l) : ci(m) ? s(m[1], m[0], H(m[2]), m[3]) : s(m, 200, {}, "OK") : h.put(x, b)), g(m)) {
					var C = or(r.url) ? u.cookies()[r.xsrfCookieName || t.xsrfCookieName] : n;
					C && (w[r.xsrfHeaderName || t.xsrfHeaderName] = C), a(r.method, x, i, o, w, r.timeout, r.withCredentials, r.responseType)
				}
				return b
			}

			function T(t, e) {
				if (!e)return t;
				var n = [];
				return s(e, function (t, e) {
					null === t || g(t) || (ci(t) || (t = [t]), o(t, function (t) {
						y(t) && (t = x(t) ? t.toISOString() : V(t)), n.push(J(e) + "=" + J(t))
					}))
				}), n.length > 0 && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&")), t
			}

			var S = l("$http"), E = [];
			return o(i, function (t) {
				E.unshift(b(t) ? h.get(t) : h.invoke(t))
			}), p.pendingRequests = [], m("get", "delete", "head", "jsonp"), v("post", "put", "patch"), p.defaults = t, p
		}]
	}

	function dn() {
		return new t.XMLHttpRequest
	}

	function hn() {
		this.$get = ["$browser", "$window", "$document", function (t, e, n) {
			return pn(t, dn, t.defer, e.angular.callbacks, n[0])
		}]
	}

	function pn(t, e, r, i, a) {
		function s(t, e, n) {
			var r = a.createElement("script"), o = null;
			return r.type = "text/javascript", r.src = t, r.async = !0, o = function (t) {
				Ei(r, "load", o), Ei(r, "error", o), a.body.removeChild(r), r = null;
				var s = -1, u = "unknown";
				t && ("load" !== t.type || i[e].called || (t = {type: "error"}), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u)
			}, Si(r, "load", o), Si(r, "error", o), a.body.appendChild(r), o
		}

		return function (a, u, l, c, f, d, h, m) {
			function v() {
				b && b(), w && w.abort()
			}

			function g(e, i, o, a, s) {
				T !== n && r.cancel(T), b = w = null, e(i, o, a, s), t.$$completeOutstandingRequest(p)
			}

			if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == Xr(a)) {
				var y = "_" + (i.counter++).toString(36);
				i[y] = function (t) {
					i[y].data = t, i[y].called = !0
				};
				var b = s(u.replace("JSON_CALLBACK", "angular.callbacks." + y), y, function (t, e) {
					g(c, t, i[y].data, "", e), i[y] = p
				})
			} else {
				var w = e();
				w.open(a, u, !0), o(f, function (t, e) {
					$(t) && w.setRequestHeader(e, t)
				}), w.onload = function () {
					var t = w.statusText || "", e = "response"in w ? w.response : w.responseText, n = 1223 === w.status ? 204 : w.status;
					0 === n && (n = e ? 200 : "file" == ir(u).protocol ? 404 : 0), g(c, n, e, w.getAllResponseHeaders(), t)
				};
				var x = function () {
					g(c, -1, null, null, "")
				};
				if (w.onerror = x, w.onabort = x, h && (w.withCredentials = !0), m)try {
					w.responseType = m
				} catch (C) {
					if ("json" !== m)throw C
				}
				w.send(l || null)
			}
			if (d > 0)var T = r(v, d); else D(d) && d.then(v)
		}
	}

	function mn() {
		var t = "{{", e = "}}";
		this.startSymbol = function (e) {
			return e ? (t = e, this) : t
		}, this.endSymbol = function (t) {
			return t ? (e = t, this) : e
		}, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
			function o(t) {
				return "\\\\\\" + t
			}

			function a(o, a, d, h) {
				function p(n) {
					return n.replace(l, t).replace(c, e)
				}

				function m(t) {
					try {
						return t = _(t), h && !$(t) ? t : N(t)
					} catch (e) {
						var n = to("interr", "Can't interpolate: {0}\n{1}", o, e.toString());
						r(n)
					}
				}

				h = !!h;
				for (var v, y, b, w = 0, x = [], T = [], S = o.length, E = [], k = []; S > w;) {
					if (-1 == (v = o.indexOf(t, w)) || -1 == (y = o.indexOf(e, v + s))) {
						w !== S && E.push(p(o.substring(w)));
						break
					}
					w !== v && E.push(p(o.substring(w, v))), b = o.substring(v + s, y), x.push(b), T.push(n(b, m)), w = y + u, k.push(E.length), E.push("")
				}
				if (d && E.length > 1)throw to("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
				if (!a || x.length) {
					var A = function (t) {
						for (var e = 0, n = x.length; n > e; e++) {
							if (h && g(t[e]))return;
							E[k[e]] = t[e]
						}
						return E.join("")
					}, _ = function (t) {
						return d ? i.getTrusted(d, t) : i.valueOf(t)
					}, N = function (t) {
						if (null == t)return "";
						switch (typeof t) {
							case"string":
								break;
							case"number":
								t = "" + t;
								break;
							default:
								t = V(t)
						}
						return t
					};
					return f(function (t) {
						var e = 0, n = x.length, i = new Array(n);
						try {
							for (; n > e; e++)i[e] = T[e](t);
							return A(i)
						} catch (a) {
							var s = to("interr", "Can't interpolate: {0}\n{1}", o, a.toString());
							r(s)
						}
					}, {
						exp: o, expressions: x, $$watchDelegate: function (t, e, n) {
							var r;
							return t.$watchGroup(T, function (n, i) {
								var o = A(n);
								C(e) && e.call(this, o, n !== i ? r : o, t), r = o
							}, n)
						}
					})
				}
			}

			var s = t.length, u = e.length, l = new RegExp(t.replace(/./g, o), "g"), c = new RegExp(e.replace(/./g, o), "g");
			return a.startSymbol = function () {
				return t
			}, a.endSymbol = function () {
				return e
			}, a
		}]
	}

	function vn() {
		this.$get = ["$rootScope", "$window", "$q", "$$q", function (t, e, n, r) {
			function i(i, a, s, u) {
				var l = e.setInterval, c = e.clearInterval, f = 0, d = $(u) && !u, h = (d ? r : n).defer(), p = h.promise;
				return s = $(s) ? s : 0, p.then(null, null, i), p.$$intervalId = l(function () {
					h.notify(f++), s > 0 && f >= s && (h.resolve(f), c(p.$$intervalId), delete o[p.$$intervalId]), d || t.$apply()
				}, a), o[p.$$intervalId] = h, p
			}

			var o = {};
			return i.cancel = function (t) {
				return t && t.$$intervalId in o ? (o[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete o[t.$$intervalId], !0) : !1
			}, i
		}]
	}

	function gn() {
		this.$get = function () {
			return {
				id: "en-us",
				NUMBER_FORMATS: {
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						minInt: 1,
						minFrac: 0,
						maxFrac: 3,
						posPre: "",
						posSuf: "",
						negPre: "-",
						negSuf: "",
						gSize: 3,
						lgSize: 3
					}, {
						minInt: 1,
						minFrac: 2,
						maxFrac: 2,
						posPre: "\xa4",
						posSuf: "",
						negPre: "(\xa4",
						negSuf: ")",
						gSize: 3,
						lgSize: 3
					}],
					CURRENCY_SYM: "$"
				},
				DATETIME_FORMATS: {
					MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
					SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
					DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
					SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
					AMPMS: ["AM", "PM"],
					medium: "MMM d, y h:mm:ss a",
					"short": "M/d/yy h:mm a",
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					mediumDate: "MMM d, y",
					shortDate: "M/d/yy",
					mediumTime: "h:mm:ss a",
					shortTime: "h:mm a"
				},
				pluralCat: function (t) {
					return 1 === t ? "one" : "other"
				}
			}
		}
	}

	function $n(t) {
		for (var e = t.split("/"), n = e.length; n--;)e[n] = Y(e[n]);
		return e.join("/")
	}

	function yn(t, e) {
		var n = ir(t);
		e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = d(n.port) || no[n.protocol] || null
	}

	function bn(t, e) {
		var n = "/" !== t.charAt(0);
		n && (t = "/" + t);
		var r = ir(t);
		e.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), e.$$search = X(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
	}

	function wn(t, e) {
		return 0 === e.indexOf(t) ? e.substr(t.length) : void 0
	}

	function xn(t) {
		var e = t.indexOf("#");
		return -1 == e ? t : t.substr(0, e)
	}

	function Cn(t) {
		return t.replace(/(#.+)|#$/, "$1")
	}

	function Tn(t) {
		return t.substr(0, xn(t).lastIndexOf("/") + 1)
	}

	function Sn(t) {
		return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
	}

	function En(t, e) {
		this.$$html5 = !0, e = e || "";
		var r = Tn(t);
		yn(t, this), this.$$parse = function (t) {
			var e = wn(r, t);
			if (!b(e))throw ro("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, r);
			bn(e, this), this.$$path || (this.$$path = "/"), this.$$compose()
		}, this.$$compose = function () {
			var t = G(this.$$search), e = this.$$hash ? "#" + Y(this.$$hash) : "";
			this.$$url = $n(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = r + this.$$url.substr(1)
		}, this.$$parseLinkUrl = function (i, o) {
			if (o && "#" === o[0])return this.hash(o.slice(1)), !0;
			var a, s, u;
			return (a = wn(t, i)) !== n ? (s = a, u = (a = wn(e, a)) !== n ? r + (wn("/", a) || a) : t + s) : (a = wn(r, i)) !== n ? u = r + a : r == i + "/" && (u = r), u && this.$$parse(u), !!u
		}
	}

	function kn(t, e) {
		var n = Tn(t);
		yn(t, this), this.$$parse = function (r) {
			function i(t, e, n) {
				var r, i = /^\/[A-Z]:(\/.*)/;
				return 0 === e.indexOf(n) && (e = e.replace(n, "")), i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
			}

			var o, a = wn(t, r) || wn(n, r);
			"#" === a.charAt(0) ? (o = wn(e, a), g(o) && (o = a)) : o = this.$$html5 ? a : "", bn(o, this), this.$$path = i(this.$$path, o, t), this.$$compose()
		}, this.$$compose = function () {
			var n = G(this.$$search), r = this.$$hash ? "#" + Y(this.$$hash) : "";
			this.$$url = $n(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + (this.$$url ? e + this.$$url : "")
		}, this.$$parseLinkUrl = function (e) {
			return xn(t) == xn(e) ? (this.$$parse(e), !0) : !1
		}
	}

	function An(t, e) {
		this.$$html5 = !0, kn.apply(this, arguments);
		var n = Tn(t);
		this.$$parseLinkUrl = function (r, i) {
			if (i && "#" === i[0])return this.hash(i.slice(1)), !0;
			var o, a;
			return t == xn(r) ? o = r : (a = wn(n, r)) ? o = t + e + a : n === r + "/" && (o = n), o && this.$$parse(o), !!o
		}, this.$$compose = function () {
			var n = G(this.$$search), r = this.$$hash ? "#" + Y(this.$$hash) : "";
			this.$$url = $n(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + e + this.$$url
		}
	}

	function _n(t) {
		return function () {
			return this[t]
		}
	}

	function Nn(t, e) {
		return function (n) {
			return g(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
		}
	}

	function Dn() {
		var t = "", e = {enabled: !1, requireBase: !0, rewriteLinks: !0};
		this.hashPrefix = function (e) {
			return $(e) ? (t = e, this) : t
		}, this.html5Mode = function (t) {
			return N(t) ? (e.enabled = t, this) : y(t) ? (N(t.enabled) && (e.enabled = t.enabled), N(t.requireBase) && (e.requireBase = t.requireBase), N(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
		}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, r, i, o, a) {
			function s(t, e, n) {
				var i = l.url(), o = l.$$state;
				try {
					r.url(t, e, n), l.$$state = r.state()
				} catch (a) {
					throw l.url(i), l.$$state = o, a
				}
			}

			function u(t, e) {
				n.$broadcast("$locationChangeSuccess", l.absUrl(), t, l.$$state, e)
			}

			var l, c, f, d = r.baseHref(), h = r.url();
			if (e.enabled) {
				if (!d && e.requireBase)throw ro("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
				f = Sn(h) + (d || "/"), c = i.history ? En : An
			} else f = xn(h), c = kn;
			l = new c(f, "#" + t), l.$$parseLinkUrl(h, h), l.$$state = r.state();
			var p = /^\s*(javascript|mailto):/i;
			o.on("click", function (t) {
				if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && 2 != t.which) {
					for (var i = Zr(t.target); "a" !== R(i[0]);)if (i[0] === o[0] || !(i = i.parent())[0])return;
					var s = i.prop("href"), u = i.attr("href") || i.attr("xlink:href");
					y(s) && "[object SVGAnimatedString]" === s.toString() && (s = ir(s.animVal).href), p.test(s) || !s || i.attr("target") || t.isDefaultPrevented() || l.$$parseLinkUrl(s, u) && (t.preventDefault(), l.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
				}
			}), l.absUrl() != h && r.url(l.absUrl(), !0);
			var m = !0;
			return r.onUrlChange(function (t, e) {
				n.$evalAsync(function () {
					var r, i = l.absUrl(), o = l.$$state;
					l.$$parse(t), l.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, l.absUrl() === t && (r ? (l.$$parse(i), l.$$state = o, s(i, !1, o)) : (m = !1, u(i, o)))
				}), n.$$phase || n.$digest()
			}), n.$watch(function () {
				var t = Cn(r.url()), e = Cn(l.absUrl()), o = r.state(), a = l.$$replace, c = t !== e || l.$$html5 && i.history && o !== l.$$state;
				(m || c) && (m = !1, n.$evalAsync(function () {
					var e = l.absUrl(), r = n.$broadcast("$locationChangeStart", e, t, l.$$state, o).defaultPrevented;
					l.absUrl() === e && (r ? (l.$$parse(t), l.$$state = o) : (c && s(e, a, o === l.$$state ? null : l.$$state), u(t, o)))
				})), l.$$replace = !1
			}), l
		}]
	}

	function On() {
		var t = !0, e = this;
		this.debugEnabled = function (e) {
			return $(e) ? (t = e, this) : t
		}, this.$get = ["$window", function (n) {
			function r(t) {
				return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
			}

			function i(t) {
				var e = n.console || {}, i = e[t] || e.log || p, a = !1;
				try {
					a = !!i.apply
				} catch (s) {
				}
				return a ? function () {
					var t = [];
					return o(arguments, function (e) {
						t.push(r(e))
					}), i.apply(e, t)
				} : function (t, e) {
					i(t, null == e ? "" : e)
				}
			}

			return {
				log: i("log"), info: i("info"), warn: i("warn"), error: i("error"), debug: function () {
					var n = i("debug");
					return function () {
						t && n.apply(e, arguments)
					}
				}()
			}
		}]
	}

	function jn(t, e) {
		if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t)throw oo("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
		return t
	}

	function Rn(t, e) {
		if (t) {
			if (t.constructor === t)throw oo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
			if (t.window === t)throw oo("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
			if (t.children && (t.nodeName || t.prop && t.attr && t.find))throw oo("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
			if (t === Object)throw oo("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
		}
		return t
	}

	function Fn(t, e) {
		if (t) {
			if (t.constructor === t)throw oo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
			if (t === ao || t === so || t === uo)throw oo("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e)
		}
	}

	function Pn(t) {
		return t.constant
	}

	function Hn(t, e, n, r, i) {
		Rn(t, i), Rn(e, i);
		for (var o, a = n.split("."), s = 0; a.length > 1; s++) {
			o = jn(a.shift(), i);
			var u = 0 === s && e && e[o] || t[o];
			u || (u = {}, t[o] = u), t = Rn(u, i)
		}
		return o = jn(a.shift(), i), Rn(t[o], i), t[o] = r, r
	}

	function In(t) {
		return "constructor" == t
	}

	function Mn(t, e, r, i, o, a, s) {
		jn(t, a), jn(e, a), jn(r, a), jn(i, a), jn(o, a);
		var u = function (t) {
			return Rn(t, a)
		}, l = s || In(t) ? u : m, c = s || In(e) ? u : m, f = s || In(r) ? u : m, d = s || In(i) ? u : m, h = s || In(o) ? u : m;
		return function (a, s) {
			var u = s && s.hasOwnProperty(t) ? s : a;
			return null == u ? u : (u = l(u[t]), e ? null == u ? n : (u = c(u[e]), r ? null == u ? n : (u = f(u[r]), i ? null == u ? n : (u = d(u[i]), o ? null == u ? n : u = h(u[o]) : u) : u) : u) : u)
		}
	}

	function Ln(t, e) {
		return function (n, r) {
			return t(n, r, Rn, e)
		}
	}

	function qn(t, e, r) {
		var i = e.expensiveChecks, a = i ? vo : mo, s = a[t];
		if (s)return s;
		var u = t.split("."), l = u.length;
		if (e.csp)s = 6 > l ? Mn(u[0], u[1], u[2], u[3], u[4], r, i) : function (t, e) {
			var o, a = 0;
			do o = Mn(u[a++], u[a++], u[a++], u[a++], u[a++], r, i)(t, e), e = n, t = o; while (l > a);
			return o
		}; else {
			var c = "";
			i && (c += "s = eso(s, fe);\nl = eso(l, fe);\n");
			var f = i;
			o(u, function (t, e) {
				jn(t, r);
				var n = (e ? "s" : '((l&&l.hasOwnProperty("' + t + '"))?l:s)') + "." + t;
				(i || In(t)) && (n = "eso(" + n + ", fe)", f = !0), c += "if(s == null) return undefined;\ns=" + n + ";\n"
			}), c += "return s;";
			var d = new Function("s", "l", "eso", "fe", c);
			d.toString = v(c), f && (d = Ln(d, r)), s = d
		}
		return s.sharedGetter = !0, s.assign = function (e, n, r) {
			return Hn(e, r, t, n, t)
		}, a[t] = s, s
	}

	function Un(t) {
		return C(t.valueOf) ? t.valueOf() : go.call(t)
	}

	function Vn() {
		var t = le(), e = le();
		this.$get = ["$filter", "$sniffer", function (n, r) {
			function i(t) {
				var e = t;
				return t.sharedGetter && (e = function (e, n) {
					return t(e, n)
				}, e.literal = t.literal, e.constant = t.constant, e.assign = t.assign), e
			}

			function a(t, e) {
				for (var n = 0, r = t.length; r > n; n++) {
					var i = t[n];
					i.constant || (i.inputs ? a(i.inputs, e) : -1 === e.indexOf(i) && e.push(i))
				}
				return e
			}

			function s(t, e) {
				return null == t || null == e ? t === e : "object" == typeof t && (t = Un(t), "object" == typeof t) ? !1 : t === e || t !== t && e !== e
			}

			function u(t, e, n, r) {
				var i, o = r.$$inputs || (r.$$inputs = a(r.inputs, []));
				if (1 === o.length) {
					var u = s;
					return o = o[0], t.$watch(function (t) {
						var e = o(t);
						return s(e, u) || (i = r(t), u = e && Un(e)), i
					}, e, n)
				}
				for (var l = [], c = 0, f = o.length; f > c; c++)l[c] = s;
				return t.$watch(function (t) {
					for (var e = !1, n = 0, a = o.length; a > n; n++) {
						var u = o[n](t);
						(e || (e = !s(u, l[n]))) && (l[n] = u && Un(u))
					}
					return e && (i = r(t)), i
				}, e, n)
			}

			function l(t, e, n, r) {
				var i, o;
				return i = t.$watch(function (t) {
					return r(t)
				}, function (t, n, r) {
					o = t, C(e) && e.apply(this, arguments), $(t) && r.$$postDigest(function () {
						$(o) && i()
					})
				}, n)
			}

			function c(t, e, n, r) {
				function i(t) {
					var e = !0;
					return o(t, function (t) {
						$(t) || (e = !1)
					}), e
				}

				var a, s;
				return a = t.$watch(function (t) {
					return r(t)
				}, function (t, n, r) {
					s = t, C(e) && e.call(this, t, n, r), i(t) && r.$$postDigest(function () {
						i(s) && a()
					})
				}, n)
			}

			function f(t, e, n, r) {
				var i;
				return i = t.$watch(function (t) {
					return r(t)
				}, function () {
					C(e) && e.apply(this, arguments), i()
				}, n)
			}

			function d(t, e) {
				if (!e)return t;
				var n = t.$$watchDelegate, r = n !== c && n !== l, i = r ? function (n, r) {
					var i = t(n, r);
					return e(i, n, r)
				} : function (n, r) {
					var i = t(n, r), o = e(i, n, r);
					return $(i) ? o : i
				};
				return t.$$watchDelegate && t.$$watchDelegate !== u ? i.$$watchDelegate = t.$$watchDelegate : e.$stateful || (i.$$watchDelegate = u, i.inputs = [t]), i
			}

			var h = {csp: r.csp, expensiveChecks: !1}, m = {csp: r.csp, expensiveChecks: !0};
			return function (r, o, a) {
				var s, v, g;
				switch (typeof r) {
					case"string":
						g = r = r.trim();
						var $ = a ? e : t;
						if (s = $[g], !s) {
							":" === r.charAt(0) && ":" === r.charAt(1) && (v = !0, r = r.substring(2));
							var y = a ? m : h, b = new ho(y), w = new po(b, n, y);
							s = w.parse(r), s.constant ? s.$$watchDelegate = f : v ? (s = i(s), s.$$watchDelegate = s.literal ? c : l) : s.inputs && (s.$$watchDelegate = u), $[g] = s
						}
						return d(s, o);
					case"function":
						return d(r, o);
					default:
						return d(p, o)
				}
			}
		}]
	}

	function Bn() {
		this.$get = ["$rootScope", "$exceptionHandler", function (t, e) {
			return zn(function (e) {
				t.$evalAsync(e)
			}, e)
		}]
	}

	function Wn() {
		this.$get = ["$browser", "$exceptionHandler", function (t, e) {
			return zn(function (e) {
				t.defer(e)
			}, e)
		}]
	}

	function zn(t, e) {
		function i(t, e, n) {
			function r(e) {
				return function (n) {
					i || (i = !0, e.call(t, n))
				}
			}

			var i = !1;
			return [r(e), r(n)]
		}

		function a() {
			this.$$state = {status: 0}
		}

		function s(t, e) {
			return function (n) {
				e.call(t, n)
			}
		}

		function u(t) {
			var r, i, o;
			o = t.pending, t.processScheduled = !1, t.pending = n;
			for (var a = 0, s = o.length; s > a; ++a) {
				i = o[a][0], r = o[a][t.status];
				try {
					C(r) ? i.resolve(r(t.value)) : 1 === t.status ? i.resolve(t.value) : i.reject(t.value)
				} catch (u) {
					i.reject(u), e(u)
				}
			}
		}

		function l(e) {
			!e.processScheduled && e.pending && (e.processScheduled = !0, t(function () {
				u(e)
			}))
		}

		function c() {
			this.promise = new a, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
		}

		function f(t) {
			var e = new c, n = 0, r = ci(t) ? [] : {};
			return o(t, function (t, i) {
				n++, g(t).then(function (t) {
					r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
				}, function (t) {
					r.hasOwnProperty(i) || e.reject(t)
				})
			}), 0 === n && e.resolve(r), e.promise
		}

		var d = r("$q", TypeError), h = function () {
			return new c
		};
		a.prototype = {
			then: function (t, e, n) {
				var r = new c;
				return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), this.$$state.status > 0 && l(this.$$state), r.promise
			}, "catch": function (t) {
				return this.then(null, t)
			}, "finally": function (t, e) {
				return this.then(function (e) {
					return v(e, !0, t)
				}, function (e) {
					return v(e, !1, t)
				}, e)
			}
		}, c.prototype = {
			resolve: function (t) {
				this.promise.$$state.status || (t === this.promise ? this.$$reject(d("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : this.$$resolve(t))
			}, $$resolve: function (t) {
				var n, r;
				r = i(this, this.$$resolve, this.$$reject);
				try {
					(y(t) || C(t)) && (n = t && t.then), C(n) ? (this.promise.$$state.status = -1, n.call(t, r[0], r[1], this.notify)) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, l(this.promise.$$state))
				} catch (o) {
					r[1](o), e(o)
				}
			}, reject: function (t) {
				this.promise.$$state.status || this.$$reject(t)
			}, $$reject: function (t) {
				this.promise.$$state.value = t, this.promise.$$state.status = 2, l(this.promise.$$state)
			}, notify: function (n) {
				var r = this.promise.$$state.pending;
				this.promise.$$state.status <= 0 && r && r.length && t(function () {
					for (var t, i, o = 0, a = r.length; a > o; o++) {
						i = r[o][0], t = r[o][3];
						try {
							i.notify(C(t) ? t(n) : n)
						} catch (s) {
							e(s)
						}
					}
				})
			}
		};
		var p = function (t) {
			var e = new c;
			return e.reject(t), e.promise
		}, m = function (t, e) {
			var n = new c;
			return e ? n.resolve(t) : n.reject(t), n.promise
		}, v = function (t, e, n) {
			var r = null;
			try {
				C(n) && (r = n())
			} catch (i) {
				return m(i, !1)
			}
			return D(r) ? r.then(function () {
				return m(t, e)
			}, function (t) {
				return m(t, !1)
			}) : m(t, e)
		}, g = function (t, e, n, r) {
			var i = new c;
			return i.resolve(t), i.promise.then(e, n, r)
		}, $ = function b(t) {
			function e(t) {
				r.resolve(t)
			}

			function n(t) {
				r.reject(t)
			}

			if (!C(t))throw d("norslvr", "Expected resolverFn, got '{0}'", t);
			if (!(this instanceof b))return new b(t);
			var r = new c;
			return t(e, n), r.promise
		};
		return $.defer = h, $.reject = p, $.when = g, $.all = f, $
	}

	function Xn() {
		this.$get = ["$window", "$timeout", function (t, e) {
			var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame, r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame, i = !!n, o = i ? function (t) {
				var e = n(t);
				return function () {
					r(e)
				}
			} : function (t) {
				var n = e(t, 16.66, !1);
				return function () {
					e.cancel(n)
				}
			};
			return o.supported = i, o
		}]
	}

	function Gn() {
		var t = 10, e = r("$rootScope"), n = null, a = null;
		this.digestTtl = function (e) {
			return arguments.length && (t = e), t
		}, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (r, s, u, c) {
			function f() {
				this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
			}

			function d(t) {
				if (w.$$phase)throw e("inprog", "{0} already in progress", w.$$phase);
				w.$$phase = t
			}

			function h() {
				w.$$phase = null
			}

			function m(t, e, n) {
				do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
			}

			function v() {
			}

			function $() {
				for (; S.length;)try {
					S.shift()()
				} catch (t) {
					s(t)
				}
				a = null
			}

			function b() {
				null === a && (a = c.defer(function () {
					w.$apply($)
				}))
			}

			f.prototype = {
				constructor: f, $new: function (t, e) {
					function n() {
						r.$$destroyed = !0
					}

					var r;
					return e = e || this, t ? (r = new f, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function () {
						this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = l(), this.$$ChildScope = null
					}, this.$$ChildScope.prototype = this), r = new this.$$ChildScope), r.$parent = e, r.$$prevSibling = e.$$childTail, e.$$childHead ? (e.$$childTail.$$nextSibling = r, e.$$childTail = r) : e.$$childHead = e.$$childTail = r, (t || e != this) && r.$on("$destroy", n), r
				}, $watch: function (t, e, r) {
					var i = u(t);
					if (i.$$watchDelegate)return i.$$watchDelegate(this, e, r, i);
					var o = this, a = o.$$watchers, s = {fn: e, last: v, get: i, exp: t, eq: !!r};
					return n = null, C(e) || (s.fn = p), a || (a = o.$$watchers = []), a.unshift(s), function () {
						F(a, s), n = null
					}
				}, $watchGroup: function (t, e) {
					function n() {
						u = !1, l ? (l = !1, e(i, i, s)) : e(i, r, s)
					}

					var r = new Array(t.length), i = new Array(t.length), a = [], s = this, u = !1, l = !0;
					if (!t.length) {
						var c = !0;
						return s.$evalAsync(function () {
							c && e(i, i, s)
						}), function () {
							c = !1
						}
					}
					return 1 === t.length ? this.$watch(t[0], function (t, n, o) {
						i[0] = t, r[0] = n, e(i, t === n ? i : r, o)
					}) : (o(t, function (t, e) {
						var o = s.$watch(t, function (t, o) {
							i[e] = t, r[e] = o, u || (u = !0, s.$evalAsync(n))
						});
						a.push(o)
					}), function () {
						for (; a.length;)a.shift()()
					})
				}, $watchCollection: function (t, e) {
					function n(t) {
						o = t;
						var e, n, r, s, u;
						if (!g(o)) {
							if (y(o))if (i(o)) {
								a !== h && (a = h, v = a.length = 0, f++), e = o.length, v !== e && (f++, a.length = v = e);
								for (var l = 0; e > l; l++)u = a[l], s = o[l], r = u !== u && s !== s, r || u === s || (f++, a[l] = s)
							} else {
								a !== p && (a = p = {}, v = 0, f++), e = 0;
								for (n in o)o.hasOwnProperty(n) && (e++, s = o[n], u = a[n], n in a ? (r = u !== u && s !== s, r || u === s || (f++, a[n] = s)) : (v++, a[n] = s, f++));
								if (v > e) {
									f++;
									for (n in a)o.hasOwnProperty(n) || (v--, delete a[n])
								}
							} else a !== o && (a = o, f++);
							return f
						}
					}

					function r() {
						if (m ? (m = !1, e(o, o, l)) : e(o, s, l), c)if (y(o))if (i(o)) {
							s = new Array(o.length);
							for (var t = 0; t < o.length; t++)s[t] = o[t]
						} else {
							s = {};
							for (var n in o)Gr.call(o, n) && (s[n] = o[n])
						} else s = o
					}

					n.$stateful = !0;
					var o, a, s, l = this, c = e.length > 1, f = 0, d = u(t, n), h = [], p = {}, m = !0, v = 0;
					return this.$watch(d, r)
				}, $digest: function () {
					var r, i, o, u, l, f, p, m, g, y, b = t, S = this, E = [];
					d("$digest"), c.$$checkUrlChange(), this === w && null !== a && (c.defer.cancel(a), $()), n = null;
					do {
						for (f = !1, m = S; x.length;) {
							try {
								y = x.shift(), y.scope.$eval(y.expression, y.locals)
							} catch (k) {
								s(k)
							}
							n = null
						}
						t:do {
							if (u = m.$$watchers)for (l = u.length; l--;)try {
								if (r = u[l])if ((i = r.get(m)) === (o = r.last) || (r.eq ? I(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
									if (r === n) {
										f = !1;
										break t
									}
								} else f = !0, n = r, r.last = r.eq ? P(i, null) : i, r.fn(i, o === v ? i : o, m), 5 > b && (g = 4 - b, E[g] || (E[g] = []), E[g].push({
									msg: C(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp,
									newVal: i,
									oldVal: o
								}))
							} catch (k) {
								s(k)
							}
							if (!(p = m.$$childHead || m !== S && m.$$nextSibling))for (; m !== S && !(p = m.$$nextSibling);)m = m.$parent
						} while (m = p);
						if ((f || x.length) && !b--)throw h(), e("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, E)
					} while (f || x.length);
					for (h(); T.length;)try {
						T.shift()()
					} catch (k) {
						s(k)
					}
				}, $destroy: function () {
					if (!this.$$destroyed) {
						var t = this.$parent;
						if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== w) {
							for (var e in this.$$listenerCount)m(this, this.$$listenerCount[e], e);
							t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function () {
								return p
							}, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
						}
					}
				}, $eval: function (t, e) {
					return u(t)(this, e)
				}, $evalAsync: function (t, e) {
					w.$$phase || x.length || c.defer(function () {
						x.length && w.$digest()
					}), x.push({scope: this, expression: t, locals: e})
				}, $$postDigest: function (t) {
					T.push(t)
				}, $apply: function (t) {
					try {
						return d("$apply"), this.$eval(t)
					} catch (e) {
						s(e)
					} finally {
						h();
						try {
							w.$digest()
						} catch (e) {
							throw s(e), e
						}
					}
				}, $applyAsync: function (t) {
					function e() {
						n.$eval(t)
					}

					var n = this;
					t && S.push(e), b()
				}, $on: function (t, e) {
					var n = this.$$listeners[t];
					n || (this.$$listeners[t] = n = []), n.push(e);
					var r = this;
					do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++; while (r = r.$parent);
					var i = this;
					return function () {
						var r = n.indexOf(e);
						-1 !== r && (n[r] = null, m(i, 1, t))
					}
				}, $emit: function (t) {
					var e, n, r, i = [], o = this, a = !1, u = {
						name: t, targetScope: o, stopPropagation: function () {
							a = !0
						}, preventDefault: function () {
							u.defaultPrevented = !0
						}, defaultPrevented: !1
					}, l = M([u], arguments, 1);
					do {
						for (e = o.$$listeners[t] || i, u.currentScope = o, n = 0, r = e.length; r > n; n++)if (e[n])try {
							e[n].apply(null, l)
						} catch (c) {
							s(c)
						} else e.splice(n, 1), n--, r--;
						if (a)return u.currentScope = null, u;
						o = o.$parent
					} while (o);
					return u.currentScope = null, u
				}, $broadcast: function (t) {
					var e = this, n = e, r = e, i = {
						name: t, targetScope: e, preventDefault: function () {
							i.defaultPrevented = !0
						}, defaultPrevented: !1
					};
					if (!e.$$listenerCount[t])return i;
					for (var o, a, u, l = M([i], arguments, 1); n = r;) {
						for (i.currentScope = n, o = n.$$listeners[t] || [], a = 0, u = o.length; u > a; a++)if (o[a])try {
							o[a].apply(null, l)
						} catch (c) {
							s(c)
						} else o.splice(a, 1), a--, u--;
						if (!(r = n.$$listenerCount[t] && n.$$childHead || n !== e && n.$$nextSibling))for (; n !== e && !(r = n.$$nextSibling);)n = n.$parent
					}
					return i.currentScope = null, i
				}
			};
			var w = new f, x = w.$$asyncQueue = [], T = w.$$postDigestQueue = [], S = w.$$applyAsyncQueue = [];
			return w
		}]
	}

	function Yn() {
		var t = /^\s*(https?|ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
		this.aHrefSanitizationWhitelist = function (e) {
			return $(e) ? (t = e, this) : t
		}, this.imgSrcSanitizationWhitelist = function (t) {
			return $(t) ? (e = t, this) : e
		}, this.$get = function () {
			return function (n, r) {
				var i, o = r ? e : t;
				return i = ir(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
			}
		}
	}

	function Jn(t) {
		if ("self" === t)return t;
		if (b(t)) {
			if (t.indexOf("***") > -1)throw $o("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
			return t = di(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
		}
		if (T(t))return new RegExp("^" + t.source + "$");
		throw $o("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
	}

	function Qn(t) {
		var e = [];
		return $(t) && o(t, function (t) {
			e.push(Jn(t))
		}), e
	}

	function Kn() {
		this.SCE_CONTEXTS = yo;
		var t = ["self"], e = [];
		this.resourceUrlWhitelist = function (e) {
			return arguments.length && (t = Qn(e)), t
		}, this.resourceUrlBlacklist = function (t) {
			return arguments.length && (e = Qn(t)), e
		}, this.$get = ["$injector", function (r) {
			function i(t, e) {
				return "self" === t ? or(e) : !!t.exec(e.href)
			}

			function o(n) {
				var r, o, a = ir(n.toString()), s = !1;
				for (r = 0, o = t.length; o > r; r++)if (i(t[r], a)) {
					s = !0;
					break
				}
				if (s)for (r = 0, o = e.length; o > r; r++)if (i(e[r], a)) {
					s = !1;
					break
				}
				return s
			}

			function a(t) {
				var e = function (t) {
					this.$$unwrapTrustedValue = function () {
						return t
					}
				};
				return t && (e.prototype = new t), e.prototype.valueOf = function () {
					return this.$$unwrapTrustedValue()
				}, e.prototype.toString = function () {
					return this.$$unwrapTrustedValue().toString()
				}, e
			}

			function s(t, e) {
				var r = d.hasOwnProperty(t) ? d[t] : null;
				if (!r)throw $o("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
				if (null === e || e === n || "" === e)return e;
				if ("string" != typeof e)throw $o("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
				return new r(e)
			}

			function u(t) {
				return t instanceof f ? t.$$unwrapTrustedValue() : t
			}

			function l(t, e) {
				if (null === e || e === n || "" === e)return e;
				var r = d.hasOwnProperty(t) ? d[t] : null;
				if (r && e instanceof r)return e.$$unwrapTrustedValue();
				if (t === yo.RESOURCE_URL) {
					if (o(e))return e;
					throw $o("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
				}
				if (t === yo.HTML)return c(e);
				throw $o("unsafe", "Attempting to use an unsafe value in a safe context.")
			}

			var c = function () {
				throw $o("unsafe", "Attempting to use an unsafe value in a safe context.")
			};
			r.has("$sanitize") && (c = r.get("$sanitize"));
			var f = a(), d = {};
			return d[yo.HTML] = a(f), d[yo.CSS] = a(f), d[yo.URL] = a(f), d[yo.JS] = a(f), d[yo.RESOURCE_URL] = a(d[yo.URL]), {
				trustAs: s,
				getTrusted: l,
				valueOf: u
			}
		}]
	}

	function Zn() {
		var t = !0;
		this.enabled = function (e) {
			return arguments.length && (t = !!e), t
		}, this.$get = ["$parse", "$sceDelegate", function (e, n) {
			if (t && 8 > Kr)throw $o("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
			var r = H(yo);
			r.isEnabled = function () {
				return t
			}, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function (t, e) {
				return e
			}, r.valueOf = m), r.parseAs = function (t, n) {
				var i = e(n);
				return i.literal && i.constant ? i : e(n, function (e) {
					return r.getTrusted(t, e)
				})
			};
			var i = r.parseAs, a = r.getTrusted, s = r.trustAs;
			return o(yo, function (t, e) {
				var n = Xr(e);
				r[me("parse_as_" + n)] = function (e) {
					return i(t, e)
				}, r[me("get_trusted_" + n)] = function (e) {
					return a(t, e)
				}, r[me("trust_as_" + n)] = function (e) {
					return s(t, e)
				}
			}), r
		}]
	}

	function tr() {
		this.$get = ["$window", "$document", function (t, e) {
			var n, r, i = {}, o = d((/android (\d+)/.exec(Xr((t.navigator || {}).userAgent)) || [])[1]), a = /Boxee/i.test((t.navigator || {}).userAgent), s = e[0] || {}, u = /^(Moz|webkit|ms)(?=[A-Z])/, l = s.body && s.body.style, c = !1, f = !1;
			if (l) {
				for (var h in l)if (r = u.exec(h)) {
					n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
					break
				}
				n || (n = "WebkitOpacity"in l && "webkit"), c = !!("transition"in l || n + "Transition"in l), f = !!("animation"in l || n + "Animation"in l), !o || c && f || (c = b(s.body.style.webkitTransition), f = b(s.body.style.webkitAnimation))
			}
			return {
				history: !(!t.history || !t.history.pushState || 4 > o || a), hasEvent: function (t) {
					if ("input" === t && 11 >= Kr)return !1;
					if (g(i[t])) {
						var e = s.createElement("div");
						i[t] = "on" + t in e
					}
					return i[t]
				}, csp: hi(), vendorPrefix: n, transitions: c, animations: f, android: o
			}
		}]
	}

	function er() {
		this.$get = ["$templateCache", "$http", "$q", function (t, e, n) {
			function r(i, o) {
				function a(t) {
					if (!o)throw Xi("tpload", "Failed to load template: {0}", i);
					return n.reject(t)
				}

				r.totalPendingRequests++;
				var s = e.defaults && e.defaults.transformResponse;
				ci(s) ? s = s.filter(function (t) {
					return t !== on
				}) : s === on && (s = null);
				var u = {cache: t, transformResponse: s};
				return e.get(i, u)["finally"](function () {
					r.totalPendingRequests--
				}).then(function (t) {
					return t.data
				}, a)
			}

			return r.totalPendingRequests = 0, r
		}]
	}

	function nr() {
		this.$get = ["$rootScope", "$browser", "$location", function (t, e, n) {
			var r = {};
			return r.findBindings = function (t, e, n) {
				var r = t.getElementsByClassName("ng-binding"), i = [];
				return o(r, function (t) {
					var r = si.element(t).data("$binding");
					r && o(r, function (r) {
						if (n) {
							var o = new RegExp("(^|\\s)" + di(e) + "(\\s|\\||$)");
							o.test(r) && i.push(t)
						} else-1 != r.indexOf(e) && i.push(t)
					})
				}), i
			}, r.findModels = function (t, e, n) {
				for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
					var o = n ? "=" : "*=", a = "[" + r[i] + "model" + o + '"' + e + '"]', s = t.querySelectorAll(a);
					if (s.length)return s
				}
			}, r.getLocation = function () {
				return n.url()
			}, r.setLocation = function (e) {
				e !== n.url() && (n.url(e), t.$digest())
			}, r.whenStable = function (t) {
				e.notifyWhenNoOutstandingRequests(t)
			}, r
		}]
	}

	function rr() {
		this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (t, e, n, r, i) {
			function o(o, s, u) {
				var l, c = $(u) && !u, f = (c ? r : n).defer(), d = f.promise;
				return l = e.defer(function () {
					try {
						f.resolve(o())
					} catch (e) {
						f.reject(e), i(e)
					} finally {
						delete a[d.$$timeoutId]
					}
					c || t.$apply()
				}, s), d.$$timeoutId = l, a[l] = f, d
			}

			var a = {};
			return o.cancel = function (t) {
				return t && t.$$timeoutId in a ? (a[t.$$timeoutId].reject("canceled"), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
			}, o
		}]
	}

	function ir(t) {
		var e = t;
		return Kr && (bo.setAttribute("href", e), e = bo.href), bo.setAttribute("href", e), {
			href: bo.href,
			protocol: bo.protocol ? bo.protocol.replace(/:$/, "") : "",
			host: bo.host,
			search: bo.search ? bo.search.replace(/^\?/, "") : "",
			hash: bo.hash ? bo.hash.replace(/^#/, "") : "",
			hostname: bo.hostname,
			port: bo.port,
			pathname: "/" === bo.pathname.charAt(0) ? bo.pathname : "/" + bo.pathname
		}
	}

	function or(t) {
		var e = b(t) ? ir(t) : t;
		return e.protocol === wo.protocol && e.host === wo.host
	}

	function ar() {
		this.$get = v(t)
	}

	function sr(t) {
		function e(r, i) {
			if (y(r)) {
				var a = {};
				return o(r, function (t, n) {
					a[n] = e(n, t)
				}), a
			}
			return t.factory(r + n, i)
		}

		var n = "Filter";
		this.register = e, this.$get = ["$injector", function (t) {
			return function (e) {
				return t.get(e + n)
			}
		}], e("currency", fr), e("date", xr), e("filter", ur), e("json", Cr), e("limitTo", Tr), e("lowercase", Eo), e("number", dr), e("orderBy", Sr), e("uppercase", ko)
	}

	function ur() {
		return function (t, e, n) {
			if (!ci(t))return t;
			var r, i;
			switch (typeof e) {
				case"function":
					r = e;
					break;
				case"boolean":
				case"number":
				case"string":
					i = !0;
				case"object":
					r = lr(e, n, i);
					break;
				default:
					return t
			}
			return t.filter(r)
		}
	}

	function lr(t, e, n) {
		var r, i = y(t) && "$"in t;
		return e === !0 ? e = I : C(e) || (e = function (t, e) {
			return y(t) || y(e) ? !1 : (t = Xr("" + t), e = Xr("" + e), -1 !== t.indexOf(e))
		}), r = function (r) {
			return i && !y(r) ? cr(r, t.$, e, !1) : cr(r, t, e, n)
		}
	}

	function cr(t, e, n, r, i) {
		var o = typeof t, a = typeof e;
		if ("string" === a && "!" === e.charAt(0))return !cr(t, e.substring(1), n, r);
		if (ci(t))return t.some(function (t) {
			return cr(t, e, n, r)
		});
		switch (o) {
			case"object":
				var s;
				if (r) {
					for (s in t)if ("$" !== s.charAt(0) && cr(t[s], e, n, !0))return !0;
					return i ? !1 : cr(t, e, n, !1)
				}
				if ("object" === a) {
					for (s in e) {
						var u = e[s];
						if (!C(u)) {
							var l = "$" === s, c = l ? t : t[s];
							if (!cr(c, u, n, l, l))return !1
						}
					}
					return !0
				}
				return n(t, e);
			case"function":
				return !1;
			default:
				return n(t, e)
		}
	}

	function fr(t) {
		var e = t.NUMBER_FORMATS;
		return function (t, n, r) {
			return g(n) && (n = e.CURRENCY_SYM), g(r) && (r = e.PATTERNS[1].maxFrac), null == t ? t : hr(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n)
		}
	}

	function dr(t) {
		var e = t.NUMBER_FORMATS;
		return function (t, n) {
			return null == t ? t : hr(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
		}
	}

	function hr(t, e, n, r, i) {
		if (!isFinite(t) || y(t))return "";
		var o = 0 > t;
		t = Math.abs(t);
		var a = t + "", s = "", u = [], l = !1;
		if (-1 !== a.indexOf("e")) {
			var c = a.match(/([\d\.]+)e(-?)(\d+)/);
			c && "-" == c[2] && c[3] > i + 1 ? t = 0 : (s = a, l = !0)
		}
		if (l)i > 0 && 1 > t && (s = t.toFixed(i), t = parseFloat(s)); else {
			var f = (a.split(xo)[1] || "").length;
			g(i) && (i = Math.min(Math.max(e.minFrac, f), e.maxFrac)), t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i);
			var d = ("" + t).split(xo), h = d[0];
			d = d[1] || "";
			var p, m = 0, v = e.lgSize, $ = e.gSize;
			if (h.length >= v + $)for (m = h.length - v, p = 0; m > p; p++)(m - p) % $ === 0 && 0 !== p && (s += n), s += h.charAt(p);
			for (p = m; p < h.length; p++)(h.length - p) % v === 0 && 0 !== p && (s += n), s += h.charAt(p);
			for (; d.length < i;)d += "0";
			i && "0" !== i && (s += r + d.substr(0, i))
		}
		return 0 === t && (o = !1), u.push(o ? e.negPre : e.posPre, s, o ? e.negSuf : e.posSuf), u.join("")
	}

	function pr(t, e, n) {
		var r = "";
		for (0 > t && (r = "-", t = -t), t = "" + t; t.length < e;)t = "0" + t;
		return n && (t = t.substr(t.length - e)), r + t
	}

	function mr(t, e, n, r) {
		return n = n || 0, function (i) {
			var o = i["get" + t]();
			return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), pr(o, e, r)
		}
	}

	function vr(t, e) {
		return function (n, r) {
			var i = n["get" + t](), o = Yr(e ? "SHORT" + t : t);
			return r[o][i]
		}
	}

	function gr(t) {
		var e = -1 * t.getTimezoneOffset(), n = e >= 0 ? "+" : "";
		return n += pr(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + pr(Math.abs(e % 60), 2)
	}

	function $r(t) {
		var e = new Date(t, 0, 1).getDay();
		return new Date(t, 0, (4 >= e ? 5 : 12) - e)
	}

	function yr(t) {
		return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
	}

	function br(t) {
		return function (e) {
			var n = $r(e.getFullYear()), r = yr(e), i = +r - +n, o = 1 + Math.round(i / 6048e5);
			return pr(o, t)
		}
	}

	function wr(t, e) {
		return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
	}

	function xr(t) {
		function e(t) {
			var e;
			if (e = t.match(n)) {
				var r = new Date(0), i = 0, o = 0, a = e[8] ? r.setUTCFullYear : r.setFullYear, s = e[8] ? r.setUTCHours : r.setHours;
				e[9] && (i = d(e[9] + e[10]), o = d(e[9] + e[11])), a.call(r, d(e[1]), d(e[2]) - 1, d(e[3]));
				var u = d(e[4] || 0) - i, l = d(e[5] || 0) - o, c = d(e[6] || 0), f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
				return s.call(r, u, l, c, f), r
			}
			return t
		}

		var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function (n, r, i) {
			var a, s, u = "", l = [];
			if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, b(n) && (n = So.test(n) ? d(n) : e(n)), w(n) && (n = new Date(n)), !x(n))return n;
			for (; r;)s = To.exec(r), s ? (l = M(l, s, 1), r = l.pop()) : (l.push(r), r = null);
			return i && "UTC" === i && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())), o(l, function (e) {
				a = Co[e], u += a ? a(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
			}), u
		}
	}

	function Cr() {
		return function (t, e) {
			return g(e) && (e = 2), V(t, e)
		}
	}

	function Tr() {
		return function (t, e) {
			return w(t) && (t = t.toString()), ci(t) || b(t) ? (e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : d(e), e ? e > 0 ? t.slice(0, e) : t.slice(e) : b(t) ? "" : []) : t
		}
	}

	function Sr(t) {
		return function (e, n, r) {
			function o(t, e) {
				for (var r = 0; r < n.length; r++) {
					var i = n[r](t, e);
					if (0 !== i)return i
				}
				return 0
			}

			function a(t, e) {
				return e ? function (e, n) {
					return t(n, e)
				} : t
			}

			function s(t) {
				switch (typeof t) {
					case"number":
					case"boolean":
					case"string":
						return !0;
					default:
						return !1
				}
			}

			function u(t) {
				return null === t ? "null" : "function" == typeof t.valueOf && (t = t.valueOf(), s(t)) ? t : "function" == typeof t.toString && (t = t.toString(), s(t)) ? t : ""
			}

			function l(t, e) {
				var n = typeof t, r = typeof e;
				return n === r && "object" === n && (t = u(t), e = u(e)), n === r ? ("string" === n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : e > t ? -1 : 1) : r > n ? -1 : 1
			}

			return i(e) ? (n = ci(n) ? n : [n], 0 === n.length && (n = ["+"]), n = n.map(function (e) {
				var n = !1, r = e || m;
				if (b(e)) {
					if (("+" == e.charAt(0) || "-" == e.charAt(0)) && (n = "-" == e.charAt(0), e = e.substring(1)), "" === e)return a(l, n);
					if (r = t(e), r.constant) {
						var i = r();
						return a(function (t, e) {
							return l(t[i], e[i])
						}, n)
					}
				}
				return a(function (t, e) {
					return l(r(t), r(e))
				}, n)
			}), ni.call(e).sort(a(o, r))) : e
		}
	}

	function Er(t) {
		return C(t) && (t = {link: t}), t.restrict = t.restrict || "AC", v(t)
	}

	function kr(t, e) {
		t.$name = e
	}

	function Ar(t, e, r, i, a) {
		var s = this, u = [], l = s.$$parentForm = t.parent().controller("form") || No;
		s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = a(e.name || e.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, l.$addControl(s), s.$rollbackViewValue = function () {
			o(u, function (t) {
				t.$rollbackViewValue()
			})
		}, s.$commitViewValue = function () {
			o(u, function (t) {
				t.$commitViewValue()
			})
		}, s.$addControl = function (t) {
			ae(t.$name, "input"), u.push(t), t.$name && (s[t.$name] = t)
		}, s.$$renameControl = function (t, e) {
			var n = t.$name;
			s[n] === t && delete s[n], s[e] = t, t.$name = e
		}, s.$removeControl = function (t) {
			t.$name && s[t.$name] === t && delete s[t.$name], o(s.$pending, function (e, n) {
				s.$setValidity(n, null, t)
			}), o(s.$error, function (e, n) {
				s.$setValidity(n, null, t)
			}), o(s.$$success, function (e, n) {
				s.$setValidity(n, null, t)
			}), F(u, t)
		}, Vr({
			ctrl: this, $element: t, set: function (t, e, n) {
				var r = t[e];
				if (r) {
					var i = r.indexOf(n);
					-1 === i && r.push(n)
				} else t[e] = [n]
			}, unset: function (t, e, n) {
				var r = t[e];
				r && (F(r, n), 0 === r.length && delete t[e])
			}, parentForm: l, $animate: i
		}), s.$setDirty = function () {
			i.removeClass(t, da), i.addClass(t, ha), s.$dirty = !0, s.$pristine = !1, l.$setDirty()
		}, s.$setPristine = function () {
			i.setClass(t, da, ha + " " + Do), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, o(u, function (t) {
				t.$setPristine()
			})
		}, s.$setUntouched = function () {
			o(u, function (t) {
				t.$setUntouched()
			})
		}, s.$setSubmitted = function () {
			i.addClass(t, Do), s.$submitted = !0, l.$setSubmitted()
		}
	}

	function _r(t) {
		t.$formatters.push(function (e) {
			return t.$isEmpty(e) ? e : e.toString()
		})
	}

	function Nr(t, e, n, r, i, o) {
		Dr(t, e, n, r, i, o), _r(r)
	}

	function Dr(t, e, n, r, i, o) {
		var a = Xr(e[0].type);
		if (!i.android) {
			var s = !1;
			e.on("compositionstart", function () {
				s = !0
			}), e.on("compositionend", function () {
				s = !1, u()
			})
		}
		var u = function (t) {
			if (l && (o.defer.cancel(l), l = null), !s) {
				var i = e.val(), u = t && t.type;
				"password" === a || n.ngTrim && "false" === n.ngTrim || (i = fi(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
			}
		};
		if (i.hasEvent("input"))e.on("input", u); else {
			var l, c = function (t, e, n) {
				l || (l = o.defer(function () {
					l = null, e && e.value === n || u(t)
				}))
			};
			e.on("keydown", function (t) {
				var e = t.keyCode;
				91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || c(t, this, this.value)
			}), i.hasEvent("paste") && e.on("paste cut", c)
		}
		e.on("change", u), r.$render = function () {
			e.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
		}
	}

	function Or(t, e) {
		if (x(t))return t;
		if (b(t)) {
			qo.lastIndex = 0;
			var n = qo.exec(t);
			if (n) {
				var r = +n[1], i = +n[2], o = 0, a = 0, s = 0, u = 0, l = $r(r), c = 7 * (i - 1);
				return e && (o = e.getHours(), a = e.getMinutes(), s = e.getSeconds(), u = e.getMilliseconds()), new Date(r, 0, l.getDate() + c, o, a, s, u)
			}
		}
		return 0 / 0
	}

	function jr(t, e) {
		return function (n, r) {
			var i, a;
			if (x(n))return n;
			if (b(n)) {
				if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Fo.test(n))return new Date(n);
				if (t.lastIndex = 0, i = t.exec(n))return i.shift(), a = r ? {
					yyyy: r.getFullYear(),
					MM: r.getMonth() + 1,
					dd: r.getDate(),
					HH: r.getHours(),
					mm: r.getMinutes(),
					ss: r.getSeconds(),
					sss: r.getMilliseconds() / 1e3
				} : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, o(i, function (t, n) {
					n < e.length && (a[e[n]] = +t)
				}), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
			}
			return 0 / 0
		}
	}

	function Rr(t, e, r, i) {
		return function (o, a, s, u, l, c, f) {
			function d(t) {
				return t && !(t.getTime && t.getTime() !== t.getTime())
			}

			function h(t) {
				return $(t) ? x(t) ? t : r(t) : n
			}

			Fr(o, a, s, u), Dr(o, a, s, u, l, c);
			var p, m = u && u.$options && u.$options.timezone;
			if (u.$$parserName = t, u.$parsers.push(function (t) {
						if (u.$isEmpty(t))return null;
						if (e.test(t)) {
							var i = r(t, p);
							return "UTC" === m && i.setMinutes(i.getMinutes() - i.getTimezoneOffset()), i
						}
						return n
					}), u.$formatters.push(function (t) {
						if (t && !x(t))throw ga("datefmt", "Expected `{0}` to be a date", t);
						if (d(t)) {
							if (p = t, p && "UTC" === m) {
								var e = 6e4 * p.getTimezoneOffset();
								p = new Date(p.getTime() + e)
							}
							return f("date")(t, i, m)
						}
						return p = null, ""
					}), $(s.min) || s.ngMin) {
				var v;
				u.$validators.min = function (t) {
					return !d(t) || g(v) || r(t) >= v
				}, s.$observe("min", function (t) {
					v = h(t), u.$validate()
				})
			}
			if ($(s.max) || s.ngMax) {
				var y;
				u.$validators.max = function (t) {
					return !d(t) || g(y) || r(t) <= y
				}, s.$observe("max", function (t) {
					y = h(t), u.$validate()
				})
			}
		}
	}

	function Fr(t, e, r, i) {
		var o = e[0], a = i.$$hasNativeValidators = y(o.validity);
		a && i.$parsers.push(function (t) {
			var r = e.prop(zr) || {};
			return r.badInput && !r.typeMismatch ? n : t
		})
	}

	function Pr(t, e, r, i, o, a) {
		if (Fr(t, e, r, i), Dr(t, e, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function (t) {
					return i.$isEmpty(t) ? null : Io.test(t) ? parseFloat(t) : n
				}), i.$formatters.push(function (t) {
					if (!i.$isEmpty(t)) {
						if (!w(t))throw ga("numfmt", "Expected `{0}` to be a number", t);
						t = t.toString()
					}
					return t
				}), r.min || r.ngMin) {
			var s;
			i.$validators.min = function (t) {
				return i.$isEmpty(t) || g(s) || t >= s
			}, r.$observe("min", function (t) {
				$(t) && !w(t) && (t = parseFloat(t, 10)), s = w(t) && !isNaN(t) ? t : n, i.$validate()
			})
		}
		if (r.max || r.ngMax) {
			var u;
			i.$validators.max = function (t) {
				return i.$isEmpty(t) || g(u) || u >= t
			}, r.$observe("max", function (t) {
				$(t) && !w(t) && (t = parseFloat(t, 10)), u = w(t) && !isNaN(t) ? t : n, i.$validate()
			})
		}
	}

	function Hr(t, e, n, r, i, o) {
		Dr(t, e, n, r, i, o), _r(r), r.$$parserName = "url", r.$validators.url = function (t, e) {
			var n = t || e;
			return r.$isEmpty(n) || Po.test(n)
		}
	}

	function Ir(t, e, n, r, i, o) {
		Dr(t, e, n, r, i, o), _r(r), r.$$parserName = "email", r.$validators.email = function (t, e) {
			var n = t || e;
			return r.$isEmpty(n) || Ho.test(n)
		}
	}

	function Mr(t, e, n, r) {
		g(n.name) && e.attr("name", l());
		var i = function (t) {
			e[0].checked && r.$setViewValue(n.value, t && t.type)
		};
		e.on("click", i), r.$render = function () {
			var t = n.value;
			e[0].checked = t == r.$viewValue
		}, n.$observe("value", r.$render)
	}

	function Lr(t, e, n, i, o) {
		var a;
		if ($(i)) {
			if (a = t(i), !a.constant)throw r("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
			return a(e)
		}
		return o
	}

	function qr(t, e, n, r, i, o, a, s) {
		var u = Lr(s, t, "ngTrueValue", n.ngTrueValue, !0), l = Lr(s, t, "ngFalseValue", n.ngFalseValue, !1), c = function (t) {
			r.$setViewValue(e[0].checked, t && t.type)
		};
		e.on("click", c), r.$render = function () {
			e[0].checked = r.$viewValue
		}, r.$isEmpty = function (t) {
			return t === !1
		}, r.$formatters.push(function (t) {
			return I(t, u)
		}), r.$parsers.push(function (t) {
			return t ? u : l
		})
	}

	function Ur(t, e) {
		return t = "ngClass" + t, ["$animate", function (n) {
			function r(t, e) {
				var n = [];
				t:for (var r = 0; r < t.length; r++) {
					for (var i = t[r], o = 0; o < e.length; o++)if (i == e[o])continue t;
					n.push(i)
				}
				return n
			}

			function i(t) {
				if (ci(t))return t;
				if (b(t))return t.split(" ");
				if (y(t)) {
					var e = [];
					return o(t, function (t, n) {
						t && (e = e.concat(n.split(" ")))
					}), e
				}
				return t
			}

			return {
				restrict: "AC", link: function (a, s, u) {
					function l(t) {
						var e = f(t, 1);
						u.$addClass(e)
					}

					function c(t) {
						var e = f(t, -1);
						u.$removeClass(e)
					}

					function f(t, e) {
						var n = s.data("$classCounts") || {}, r = [];
						return o(t, function (t) {
							(e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
						}), s.data("$classCounts", n), r.join(" ")
					}

					function d(t, e) {
						var i = r(e, t), o = r(t, e);
						i = f(i, 1), o = f(o, -1), i && i.length && n.addClass(s, i), o && o.length && n.removeClass(s, o)
					}

					function h(t) {
						if (e === !0 || a.$index % 2 === e) {
							var n = i(t || []);
							if (p) {
								if (!I(t, p)) {
									var r = i(p);
									d(r, n)
								}
							} else l(n)
						}
						p = H(t)
					}

					var p;
					a.$watch(u[t], h, !0), u.$observe("class", function () {
						h(a.$eval(u[t]))
					}), "ngClass" !== t && a.$watch("$index", function (n, r) {
						var o = 1 & n;
						if (o !== (1 & r)) {
							var s = i(a.$eval(u[t]));
							o === e ? l(s) : c(s)
						}
					})
				}
			}
		}]
	}

	function Vr(t) {
		function e(t, e, u) {
			e === n ? r("$pending", t, u) : i("$pending", t, u), N(e) ? e ? (f(s.$error, t, u), c(s.$$success, t, u)) : (c(s.$error, t, u), f(s.$$success, t, u)) : (f(s.$error, t, u), f(s.$$success, t, u)), s.$pending ? (o(va, !0), s.$valid = s.$invalid = n, a("", null)) : (o(va, !1), s.$valid = Br(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
			var l;
			l = s.$pending && s.$pending[t] ? n : s.$error[t] ? !1 : s.$$success[t] ? !0 : null, a(t, l), d.$setValidity(t, l, s)
		}

		function r(t, e, n) {
			s[t] || (s[t] = {}), c(s[t], e, n)
		}

		function i(t, e, r) {
			s[t] && f(s[t], e, r), Br(s[t]) && (s[t] = n)
		}

		function o(t, e) {
			e && !l[t] ? (h.addClass(u, t), l[t] = !0) : !e && l[t] && (h.removeClass(u, t), l[t] = !1)
		}

		function a(t, e) {
			t = t ? "-" + ne(t, "-") : "", o(ca + t, e === !0), o(fa + t, e === !1)
		}

		var s = t.ctrl, u = t.$element, l = {}, c = t.set, f = t.unset, d = t.parentForm, h = t.$animate;
		l[fa] = !(l[ca] = u.hasClass(ca)), s.$setValidity = e
	}

	function Br(t) {
		if (t)for (var e in t)return !1;
		return !0
	}

	var Wr = /^\/(.+)\/([a-z]*)$/, zr = "validity", Xr = function (t) {
		return b(t) ? t.toLowerCase() : t
	}, Gr = Object.prototype.hasOwnProperty, Yr = function (t) {
		return b(t) ? t.toUpperCase() : t
	}, Jr = function (t) {
		return b(t) ? t.replace(/[A-Z]/g, function (t) {
			return String.fromCharCode(32 | t.charCodeAt(0))
		}) : t
	}, Qr = function (t) {
		return b(t) ? t.replace(/[a-z]/g, function (t) {
			return String.fromCharCode(-33 & t.charCodeAt(0))
		}) : t
	};
	"i" !== "I".toLowerCase() && (Xr = Jr, Yr = Qr);
	var Kr, Zr, ti, ei, ni = [].slice, ri = [].splice, ii = [].push, oi = Object.prototype.toString, ai = r("ng"), si = t.angular || (t.angular = {}), ui = 0;
	Kr = e.documentMode, p.$inject = [], m.$inject = [];
	var li, ci = Array.isArray, fi = function (t) {
		return b(t) ? t.trim() : t
	}, di = function (t) {
		return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
	}, hi = function () {
		if ($(hi.isActive_))return hi.isActive_;
		var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
		if (!t)try {
			new Function("")
		} catch (n) {
			t = !0
		}
		return hi.isActive_ = t
	}, pi = ["ng-", "data-ng-", "ng:", "x-ng-"], mi = /[A-Z]/g, vi = !1, gi = 1, $i = 3, yi = 8, bi = 9, wi = 11, xi = {
		full: "1.3.10",
		major: 1,
		minor: 3,
		dot: 10,
		codeName: "heliotropic-sundial"
	};
	be.expando = "ng339";
	var Ci = be.cache = {}, Ti = 1, Si = function (t, e, n) {
		t.addEventListener(e, n, !1)
	}, Ei = function (t, e, n) {
		t.removeEventListener(e, n, !1)
	};
	be._data = function (t) {
		return this.cache[t[this.expando]] || {}
	};
	var ki = /([\:\-\_]+(.))/g, Ai = /^moz([A-Z])/, _i = {
		mouseleave: "mouseout",
		mouseenter: "mouseover"
	}, Ni = r("jqLite"), Di = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Oi = /<|&#?\w+;/, ji = /<([\w:]+)/, Ri = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fi = {
		option: [1, '<select multiple="multiple">', "</select>"],
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};
	Fi.optgroup = Fi.option, Fi.tbody = Fi.tfoot = Fi.colgroup = Fi.caption = Fi.thead, Fi.th = Fi.td;
	var Pi = be.prototype = {
		ready: function (n) {
			function r() {
				i || (i = !0, n())
			}

			var i = !1;
			"complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), be(t).on("load", r))
		}, toString: function () {
			var t = [];
			return o(this, function (e) {
				t.push("" + e)
			}), "[" + t.join(", ") + "]"
		}, eq: function (t) {
			return Zr(t >= 0 ? this[t] : this[this.length + t])
		}, length: 0, push: ii, sort: [].sort, splice: [].splice
	}, Hi = {};
	o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (t) {
		Hi[Xr(t)] = t
	});
	var Ii = {};
	o("input,select,option,textarea,button,form,details".split(","), function (t) {
		Ii[t] = !0
	});
	var Mi = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
	o({data: Ee, removeData: Te}, function (t, e) {
		be[e] = t
	}), o({
		data: Ee, inheritedData: Oe, scope: function (t) {
			return Zr.data(t, "$scope") || Oe(t.parentNode || t, ["$isolateScope", "$scope"])
		}, isolateScope: function (t) {
			return Zr.data(t, "$isolateScope") || Zr.data(t, "$isolateScopeNoTemplate")
		}, controller: De, injector: function (t) {
			return Oe(t, "$injector")
		}, removeAttr: function (t, e) {
			t.removeAttribute(e)
		}, hasClass: ke, css: function (t, e, n) {
			return e = me(e), $(n) ? void(t.style[e] = n) : t.style[e]
		}, attr: function (t, e, r) {
			var i = Xr(e);
			if (Hi[i]) {
				if (!$(r))return t[e] || (t.attributes.getNamedItem(e) || p).specified ? i : n;
				r ? (t[e] = !0, t.setAttribute(e, i)) : (t[e] = !1, t.removeAttribute(i))
			} else if ($(r))t.setAttribute(e, r); else if (t.getAttribute) {
				var o = t.getAttribute(e, 2);
				return null === o ? n : o
			}
		}, prop: function (t, e, n) {
			return $(n) ? void(t[e] = n) : t[e]
		}, text: function () {
			function t(t, e) {
				if (g(e)) {
					var n = t.nodeType;
					return n === gi || n === $i ? t.textContent : ""
				}
				t.textContent = e
			}

			return t.$dv = "", t
		}(), val: function (t, e) {
			if (g(e)) {
				if (t.multiple && "select" === R(t)) {
					var n = [];
					return o(t.options, function (t) {
						t.selected && n.push(t.value || t.text)
					}), 0 === n.length ? null : n
				}
				return t.value
			}
			t.value = e
		}, html: function (t, e) {
			return g(e) ? t.innerHTML : (xe(t, !0), void(t.innerHTML = e))
		}, empty: je
	}, function (t, e) {
		be.prototype[e] = function (e, r) {
			var i, o, a = this.length;
			if (t !== je && (2 == t.length && t !== ke && t !== De ? e : r) === n) {
				if (y(e)) {
					for (i = 0; a > i; i++)if (t === Ee)t(this[i], e); else for (o in e)t(this[i], o, e[o]);
					return this
				}
				for (var s = t.$dv, u = s === n ? Math.min(a, 1) : a, l = 0; u > l; l++) {
					var c = t(this[l], e, r);
					s = s ? s + c : c
				}
				return s
			}
			for (i = 0; a > i; i++)t(this[i], e, r);
			return this
		}
	}), o({
		removeData: Te, on: function Ba(t, e, n, r) {
			if ($(r))throw Ni("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
			if (ge(t)) {
				var i = Se(t, !0), o = i.events, a = i.handle;
				a || (a = i.handle = Ie(t, o));
				for (var s = e.indexOf(" ") >= 0 ? e.split(" ") : [e], u = s.length; u--;) {
					e = s[u];
					var l = o[e];
					l || (o[e] = [], "mouseenter" === e || "mouseleave" === e ? Ba(t, _i[e], function (t) {
						var n = this, r = t.relatedTarget;
						(!r || r !== n && !n.contains(r)) && a(t, e)
					}) : "$destroy" !== e && Si(t, e, a), l = o[e]), l.push(n)
				}
			}
		}, off: Ce, one: function (t, e, n) {
			t = Zr(t), t.on(e, function r() {
				t.off(e, n), t.off(e, r)
			}), t.on(e, n)
		}, replaceWith: function (t, e) {
			var n, r = t.parentNode;
			xe(t), o(new be(e), function (e) {
				n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
			})
		}, children: function (t) {
			var e = [];
			return o(t.childNodes, function (t) {
				t.nodeType === gi && e.push(t)
			}), e
		}, contents: function (t) {
			return t.contentDocument || t.childNodes || []
		}, append: function (t, e) {
			var n = t.nodeType;
			if (n === gi || n === wi) {
				e = new be(e);
				for (var r = 0, i = e.length; i > r; r++) {
					var o = e[r];
					t.appendChild(o)
				}
			}
		}, prepend: function (t, e) {
			if (t.nodeType === gi) {
				var n = t.firstChild;
				o(new be(e), function (e) {
					t.insertBefore(e, n)
				})
			}
		}, wrap: function (t, e) {
			e = Zr(e).eq(0).clone()[0];
			var n = t.parentNode;
			n && n.replaceChild(e, t), e.appendChild(t)
		}, remove: Re, detach: function (t) {
			Re(t, !0)
		}, after: function (t, e) {
			var n = t, r = t.parentNode;
			e = new be(e);
			for (var i = 0, o = e.length; o > i; i++) {
				var a = e[i];
				r.insertBefore(a, n.nextSibling), n = a
			}
		}, addClass: _e, removeClass: Ae, toggleClass: function (t, e, n) {
			e && o(e.split(" "), function (e) {
				var r = n;
				g(r) && (r = !ke(t, e)), (r ? _e : Ae)(t, e)
			})
		}, parent: function (t) {
			var e = t.parentNode;
			return e && e.nodeType !== wi ? e : null
		}, next: function (t) {
			return t.nextElementSibling
		}, find: function (t, e) {
			return t.getElementsByTagName ? t.getElementsByTagName(e) : []
		}, clone: we, triggerHandler: function (t, e, n) {
			var r, i, a, s = e.type || e, u = Se(t), l = u && u.events, c = l && l[s];
			c && (r = {
				preventDefault: function () {
					this.defaultPrevented = !0
				}, isDefaultPrevented: function () {
					return this.defaultPrevented === !0
				}, stopImmediatePropagation: function () {
					this.immediatePropagationStopped = !0
				}, isImmediatePropagationStopped: function () {
					return this.immediatePropagationStopped === !0
				}, stopPropagation: p, type: s, target: t
			}, e.type && (r = f(r, e)), i = H(c), a = n ? [r].concat(n) : [r], o(i, function (e) {
				r.isImmediatePropagationStopped() || e.apply(t, a)
			}))
		}
	}, function (t, e) {
		be.prototype[e] = function (e, n, r) {
			for (var i, o = 0, a = this.length; a > o; o++)g(i) ? (i = t(this[o], e, n, r), $(i) && (i = Zr(i))) : Ne(i, t(this[o], e, n, r));
			return $(i) ? i : this
		}, be.prototype.bind = be.prototype.on, be.prototype.unbind = be.prototype.off
	}), qe.prototype = {
		put: function (t, e) {
			this[Le(t, this.nextUid)] = e
		}, get: function (t) {
			return this[Le(t, this.nextUid)]
		}, remove: function (t) {
			var e = this[t = Le(t, this.nextUid)];
			return delete this[t], e
		}
	};
	var Li = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, qi = /,/, Ui = /^\s*(_?)(\S+?)\1\s*$/, Vi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Bi = r("$injector");
	Be.$$annotate = Ve;
	var Wi = r("$animate"), zi = ["$provide", function (t) {
		this.$$selectors = {}, this.register = function (e, n) {
			var r = e + "-animation";
			if (e && "." != e.charAt(0))throw Wi("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
			this.$$selectors[e.substr(1)] = r, t.factory(r, n)
		}, this.classNameFilter = function (t) {
			return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null), this.$$classNameFilter
		}, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (t, e, n) {
			function r(e) {
				var r, i = t.defer();
				return i.promise.$$cancelFn = function () {
					r && r()
				}, n.$$postDigest(function () {
					r = e(function () {
						i.resolve()
					})
				}), i.promise
			}

			function i(t, e) {
				var n = [], r = [], i = le();
				return o((t.attr("class") || "").split(/\s+/), function (t) {
					i[t] = !0
				}), o(e, function (t, e) {
					var o = i[e];
					t === !1 && o ? r.push(e) : t !== !0 || o || n.push(e)
				}), n.length + r.length > 0 && [n.length ? n : null, r.length ? r : null]
			}

			function a(t, e, n) {
				for (var r = 0, i = e.length; i > r; ++r) {
					var o = e[r];
					t[o] = n
				}
			}

			function s() {
				return l || (l = t.defer(), e(function () {
					l.resolve(), l = null
				})), l.promise
			}

			function u(t, e) {
				if (si.isObject(e)) {
					var n = f(e.from || {}, e.to || {});
					t.css(n)
				}
			}

			var l;
			return {
				animate: function (t, e, n) {
					return u(t, {from: e, to: n}), s()
				}, enter: function (t, e, n, r) {
					return u(t, r), n ? n.after(t) : e.prepend(t), s()
				}, leave: function (t) {
					return t.remove(), s()
				}, move: function (t, e, n, r) {
					return this.enter(t, e, n, r)
				}, addClass: function (t, e, n) {
					return this.setClass(t, e, [], n)
				}, $$addClassImmediately: function (t, e, n) {
					return t = Zr(t), e = b(e) ? e : ci(e) ? e.join(" ") : "", o(t, function (t) {
						_e(t, e)
					}), u(t, n), s()
				}, removeClass: function (t, e, n) {
					return this.setClass(t, [], e, n)
				}, $$removeClassImmediately: function (t, e, n) {
					return t = Zr(t), e = b(e) ? e : ci(e) ? e.join(" ") : "", o(t, function (t) {
						Ae(t, e)
					}), u(t, n), s()
				}, setClass: function (t, e, n, o) {
					var s = this, u = "$$animateClasses", l = !1;
					t = Zr(t);
					var c = t.data(u);
					c ? o && c.options && (c.options = si.extend(c.options || {}, o)) : (c = {
						classes: {},
						options: o
					}, l = !0);
					var f = c.classes;
					return e = ci(e) ? e : e.split(" "), n = ci(n) ? n : n.split(" "), a(f, e, !0), a(f, n, !1), l && (c.promise = r(function (e) {
						var n = t.data(u);
						if (t.removeData(u), n) {
							var r = i(t, n.classes);
							r && s.$$setClassImmediately(t, r[0], r[1], n.options)
						}
						e()
					}), t.data(u, c)), c.promise
				}, $$setClassImmediately: function (t, e, n, r) {
					return e && this.$$addClassImmediately(t, e), n && this.$$removeClassImmediately(t, n), u(t, r), s()
				}, enabled: p, cancel: p
			}
		}]
	}], Xi = r("$compile");
	Qe.$inject = ["$provide", "$$sanitizeUriProvider"];
	var Gi = /^((?:x|data)[\:\-_])/i, Yi = "application/json", Ji = {"Content-Type": Yi + ";charset=utf-8"}, Qi = /^\[|^\{(?!\{)/, Ki = {
		"[": /]$/,
		"{": /}$/
	}, Zi = /^\)\]\}',?\n/, to = r("$interpolate"), eo = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, no = {
		http: 80,
		https: 443,
		ftp: 21
	}, ro = r("$location"), io = {
		$$html5: !1, $$replace: !1, absUrl: _n("$$absUrl"), url: function (t) {
			if (g(t))return this.$$url;
			var e = eo.exec(t);
			return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
		}, protocol: _n("$$protocol"), host: _n("$$host"), port: _n("$$port"), path: Nn("$$path", function (t) {
			return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
		}), search: function (t, e) {
			switch (arguments.length) {
				case 0:
					return this.$$search;
				case 1:
					if (b(t) || w(t))t = t.toString(), this.$$search = X(t); else {
						if (!y(t))throw ro("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
						t = P(t, {}), o(t, function (e, n) {
							null == e && delete t[n]
						}), this.$$search = t
					}
					break;
				default:
					g(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
			}
			return this.$$compose(), this
		}, hash: Nn("$$hash", function (t) {
			return null !== t ? t.toString() : ""
		}), replace: function () {
			return this.$$replace = !0, this
		}
	};
	o([An, kn, En], function (t) {
		t.prototype = Object.create(io), t.prototype.state = function (e) {
			if (!arguments.length)return this.$$state;
			if (t !== En || !this.$$html5)throw ro("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
			return this.$$state = g(e) ? null : e, this
		}
	});
	var oo = r("$parse"), ao = Function.prototype.call, so = Function.prototype.apply, uo = Function.prototype.bind, lo = le();
	o({
		"null": function () {
			return null
		}, "true": function () {
			return !0
		}, "false": function () {
			return !1
		}, undefined: function () {
		}
	}, function (t, e) {
		t.constant = t.literal = t.sharedGetter = !0, lo[e] = t
	}), lo["this"] = function (t) {
		return t
	}, lo["this"].sharedGetter = !0;
	var co = f(le(), {
		"+": function (t, e, r, i) {
			return r = r(t, e), i = i(t, e), $(r) ? $(i) ? r + i : r : $(i) ? i : n
		}, "-": function (t, e, n, r) {
			return n = n(t, e), r = r(t, e), ($(n) ? n : 0) - ($(r) ? r : 0)
		}, "*": function (t, e, n, r) {
			return n(t, e) * r(t, e)
		}, "/": function (t, e, n, r) {
			return n(t, e) / r(t, e)
		}, "%": function (t, e, n, r) {
			return n(t, e) % r(t, e)
		}, "===": function (t, e, n, r) {
			return n(t, e) === r(t, e)
		}, "!==": function (t, e, n, r) {
			return n(t, e) !== r(t, e)
		}, "==": function (t, e, n, r) {
			return n(t, e) == r(t, e)
		}, "!=": function (t, e, n, r) {
			return n(t, e) != r(t, e)
		}, "<": function (t, e, n, r) {
			return n(t, e) < r(t, e)
		}, ">": function (t, e, n, r) {
			return n(t, e) > r(t, e)
		}, "<=": function (t, e, n, r) {
			return n(t, e) <= r(t, e)
		}, ">=": function (t, e, n, r) {
			return n(t, e) >= r(t, e)
		}, "&&": function (t, e, n, r) {
			return n(t, e) && r(t, e)
		}, "||": function (t, e, n, r) {
			return n(t, e) || r(t, e)
		}, "!": function (t, e, n) {
			return !n(t, e)
		}, "=": !0, "|": !0
	}), fo = {n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, ho = function (t) {
		this.options = t
	};
	ho.prototype = {
		constructor: ho, lex: function (t) {
			for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
				var e = this.text.charAt(this.index);
				if ('"' === e || "'" === e)this.readString(e); else if (this.isNumber(e) || "." === e && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(e))this.readIdent(); else if (this.is(e, "(){}[].,;:?"))this.tokens.push({
					index: this.index,
					text: e
				}), this.index++; else if (this.isWhitespace(e))this.index++; else {
					var n = e + this.peek(), r = n + this.peek(2), i = co[e], o = co[n], a = co[r];
					if (i || o || a) {
						var s = a ? r : o ? n : e;
						this.tokens.push({index: this.index, text: s, operator: !0}), this.index += s.length
					} else this.throwError("Unexpected next character ", this.index, this.index + 1)
				}
			}
			return this.tokens
		}, is: function (t, e) {
			return -1 !== e.indexOf(t)
		}, peek: function (t) {
			var e = t || 1;
			return this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
		}, isNumber: function (t) {
			return t >= "0" && "9" >= t && "string" == typeof t
		}, isWhitespace: function (t) {
			return " " === t || "\r" === t || "	" === t || "\n" === t || "" === t || "\xa0" === t
		}, isIdent: function (t) {
			return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
		}, isExpOperator: function (t) {
			return "-" === t || "+" === t || this.isNumber(t)
		}, throwError: function (t, e, n) {
			n = n || this.index;
			var r = $(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
			throw oo("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text)
		}, readNumber: function () {
			for (var t = "", e = this.index; this.index < this.text.length;) {
				var n = Xr(this.text.charAt(this.index));
				if ("." == n || this.isNumber(n))t += n; else {
					var r = this.peek();
					if ("e" == n && this.isExpOperator(r))t += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1))t += n; else {
						if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1))break;
						this.throwError("Invalid exponent")
					}
				}
				this.index++
			}
			this.tokens.push({index: e, text: t, constant: !0, value: Number(t)})
		}, readIdent: function () {
			for (var t = this.index; this.index < this.text.length;) {
				var e = this.text.charAt(this.index);
				if (!this.isIdent(e) && !this.isNumber(e))break;
				this.index++
			}
			this.tokens.push({index: t, text: this.text.slice(t, this.index), identifier: !0})
		}, readString: function (t) {
			var e = this.index;
			this.index++;
			for (var n = "", r = t, i = !1; this.index < this.text.length;) {
				var o = this.text.charAt(this.index);
				if (r += o, i) {
					if ("u" === o) {
						var a = this.text.substring(this.index + 1, this.index + 5);
						a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
					} else {
						var s = fo[o];
						n += s || o
					}
					i = !1
				} else if ("\\" === o)i = !0; else {
					if (o === t)return this.index++, void this.tokens.push({index: e, text: r, constant: !0, value: n});
					n += o
				}
				this.index++
			}
			this.throwError("Unterminated quote", e)
		}
	};
	var po = function (t, e, n) {
		this.lexer = t, this.$filter = e, this.options = n
	};
	po.ZERO = f(function () {
		return 0
	}, {sharedGetter: !0, constant: !0}), po.prototype = {
		constructor: po, parse: function (t) {
			this.text = t, this.tokens = this.lexer.lex(t);
			var e = this.statements();
			return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
		}, primary: function () {
			var t;
			this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.peek().identifier && this.peek().text in lo ? t = lo[this.consume().text] : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
			for (var e, n; e = this.expect("(", "[", ".");)"(" === e.text ? (t = this.functionCall(t, n), n = null) : "[" === e.text ? (n = t, t = this.objectIndex(t)) : "." === e.text ? (n = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
			return t
		}, throwError: function (t, e) {
			throw oo("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
		}, peekToken: function () {
			if (0 === this.tokens.length)throw oo("ueoe", "Unexpected end of expression: {0}", this.text);
			return this.tokens[0]
		}, peek: function (t, e, n, r) {
			return this.peekAhead(0, t, e, n, r)
		}, peekAhead: function (t, e, n, r, i) {
			if (this.tokens.length > t) {
				var o = this.tokens[t], a = o.text;
				if (a === e || a === n || a === r || a === i || !e && !n && !r && !i)return o
			}
			return !1
		}, expect: function (t, e, n, r) {
			var i = this.peek(t, e, n, r);
			return i ? (this.tokens.shift(), i) : !1
		}, consume: function (t) {
			if (0 === this.tokens.length)throw oo("ueoe", "Unexpected end of expression: {0}", this.text);
			var e = this.expect(t);
			return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
		}, unaryFn: function (t, e) {
			var n = co[t];
			return f(function (t, r) {
				return n(t, r, e)
			}, {constant: e.constant, inputs: [e]})
		}, binaryFn: function (t, e, n, r) {
			var i = co[e];
			return f(function (e, r) {
				return i(e, r, t, n)
			}, {constant: t.constant && n.constant, inputs: !r && [t, n]})
		}, identifier: function () {
			for (var t = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");)t += this.consume().text + this.consume().text;
			return qn(t, this.options, this.text)
		}, constant: function () {
			var t = this.consume().value;
			return f(function () {
				return t
			}, {constant: !0, literal: !0})
		}, statements: function () {
			for (var t = []; ;)if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";"))return 1 === t.length ? t[0] : function (e, n) {
				for (var r, i = 0, o = t.length; o > i; i++)r = t[i](e, n);
				return r
			}
		}, filterChain: function () {
			for (var t, e = this.expression(); t = this.expect("|");)e = this.filter(e);
			return e
		}, filter: function (t) {
			var e, r, i = this.$filter(this.consume().text);
			if (this.peek(":"))for (e = [], r = []; this.expect(":");)e.push(this.expression());
			var o = [t].concat(e || []);
			return f(function (o, a) {
				var s = t(o, a);
				if (r) {
					r[0] = s;
					for (var u = e.length; u--;)r[u + 1] = e[u](o, a);
					return i.apply(n, r)
				}
				return i(s)
			}, {constant: !i.$stateful && o.every(Pn), inputs: !i.$stateful && o})
		}, expression: function () {
			return this.assignment()
		}, assignment: function () {
			var t, e, n = this.ternary();
			return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), f(function (e, r) {
				return n.assign(e, t(e, r), r)
			}, {inputs: [n, t]})) : n
		}, ternary: function () {
			var t, e, n = this.logicalOR();
			if ((e = this.expect("?")) && (t = this.assignment(), this.consume(":"))) {
				var r = this.assignment();
				return f(function (e, i) {
					return n(e, i) ? t(e, i) : r(e, i)
				}, {constant: n.constant && t.constant && r.constant})
			}
			return n
		}, logicalOR: function () {
			for (var t, e = this.logicalAND(); t = this.expect("||");)e = this.binaryFn(e, t.text, this.logicalAND(), !0);
			return e
		}, logicalAND: function () {
			for (var t, e = this.equality(); t = this.expect("&&");)e = this.binaryFn(e, t.text, this.equality(), !0);
			return e
		}, equality: function () {
			for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");)e = this.binaryFn(e, t.text, this.relational());
			return e
		}, relational: function () {
			for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");)e = this.binaryFn(e, t.text, this.additive());
			return e
		}, additive: function () {
			for (var t, e = this.multiplicative(); t = this.expect("+", "-");)e = this.binaryFn(e, t.text, this.multiplicative());
			return e
		}, multiplicative: function () {
			for (var t, e = this.unary(); t = this.expect("*", "/", "%");)e = this.binaryFn(e, t.text, this.unary());
			return e
		}, unary: function () {
			var t;
			return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(po.ZERO, t.text, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.text, this.unary()) : this.primary()
		}, fieldAccess: function (t) {
			var e = this.identifier();
			return f(function (r, i, o) {
				var a = o || t(r, i);
				return null == a ? n : e(a)
			}, {
				assign: function (n, r, i) {
					var o = t(n, i);
					return o || t.assign(n, o = {}, i), e.assign(o, r)
				}
			})
		}, objectIndex: function (t) {
			var e = this.text, r = this.expression();
			return this.consume("]"), f(function (i, o) {
				var a, s = t(i, o), u = r(i, o);
				return jn(u, e), s ? a = Rn(s[u], e) : n
			}, {
				assign: function (n, i, o) {
					var a = jn(r(n, o), e), s = Rn(t(n, o), e);
					return s || t.assign(n, s = {}, o), s[a] = i
				}
			})
		}, functionCall: function (t, e) {
			var r = [];
			if (")" !== this.peekToken().text)do r.push(this.expression()); while (this.expect(","));
			this.consume(")");
			var i = this.text, o = r.length ? [] : null;
			return function (a, s) {
				var u = e ? e(a, s) : $(e) ? n : a, l = t(a, s, u) || p;
				if (o)for (var c = r.length; c--;)o[c] = Rn(r[c](a, s), i);
				Rn(u, i), Fn(l, i);
				var f = l.apply ? l.apply(u, o) : l(o[0], o[1], o[2], o[3], o[4]);
				return Rn(f, i)
			}
		}, arrayDeclaration: function () {
			var t = [];
			if ("]" !== this.peekToken().text)do {
				if (this.peek("]"))break;
				t.push(this.expression())
			} while (this.expect(","));
			return this.consume("]"), f(function (e, n) {
				for (var r = [], i = 0, o = t.length; o > i; i++)r.push(t[i](e, n));
				return r
			}, {literal: !0, constant: t.every(Pn), inputs: t})
		}, object: function () {
			var t = [], e = [];
			if ("}" !== this.peekToken().text)do {
				if (this.peek("}"))break;
				var n = this.consume();
				n.constant ? t.push(n.value) : n.identifier ? t.push(n.text) : this.throwError("invalid key", n), this.consume(":"), e.push(this.expression())
			} while (this.expect(","));
			return this.consume("}"), f(function (n, r) {
				for (var i = {}, o = 0, a = e.length; a > o; o++)i[t[o]] = e[o](n, r);
				return i
			}, {literal: !0, constant: e.every(Pn), inputs: e})
		}
	};
	var mo = le(), vo = le(), go = Object.prototype.valueOf, $o = r("$sce"), yo = {
		HTML: "html",
		CSS: "css",
		URL: "url",
		RESOURCE_URL: "resourceUrl",
		JS: "js"
	}, Xi = r("$compile"), bo = e.createElement("a"), wo = ir(t.location.href);
	sr.$inject = ["$provide"], fr.$inject = ["$locale"], dr.$inject = ["$locale"];
	var xo = ".", Co = {
		yyyy: mr("FullYear", 4),
		yy: mr("FullYear", 2, 0, !0),
		y: mr("FullYear", 1),
		MMMM: vr("Month"),
		MMM: vr("Month", !0),
		MM: mr("Month", 2, 1),
		M: mr("Month", 1, 1),
		dd: mr("Date", 2),
		d: mr("Date", 1),
		HH: mr("Hours", 2),
		H: mr("Hours", 1),
		hh: mr("Hours", 2, -12),
		h: mr("Hours", 1, -12),
		mm: mr("Minutes", 2),
		m: mr("Minutes", 1),
		ss: mr("Seconds", 2),
		s: mr("Seconds", 1),
		sss: mr("Milliseconds", 3),
		EEEE: vr("Day"),
		EEE: vr("Day", !0),
		a: wr,
		Z: gr,
		ww: br(2),
		w: br(1)
	}, To = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, So = /^\-?\d+$/;
	xr.$inject = ["$locale"];
	var Eo = v(Xr), ko = v(Yr);
	Sr.$inject = ["$parse"];
	var Ao = v({
		restrict: "E", compile: function (t, e) {
			return e.href || e.xlinkHref || e.name ? void 0 : function (t, e) {
				var n = "[object SVGAnimatedString]" === oi.call(e.prop("href")) ? "xlink:href" : "href";
				e.on("click", function (t) {
					e.attr(n) || t.preventDefault()
				})
			}
		}
	}), _o = {};
	o(Hi, function (t, e) {
		if ("multiple" != t) {
			var n = Ke("ng-" + e);
			_o[n] = function () {
				return {
					restrict: "A", priority: 100, link: function (t, r, i) {
						t.$watch(i[n], function (t) {
							i.$set(e, !!t)
						})
					}
				}
			}
		}
	}), o(Mi, function (t, e) {
		_o[e] = function () {
			return {
				priority: 100, link: function (t, n, r) {
					if ("ngPattern" === e && "/" == r.ngPattern.charAt(0)) {
						var i = r.ngPattern.match(Wr);
						if (i)return void r.$set("ngPattern", new RegExp(i[1], i[2]))
					}
					t.$watch(r[e], function (t) {
						r.$set(e, t)
					})
				}
			}
		}
	}), o(["src", "srcset", "href"], function (t) {
		var e = Ke("ng-" + t);
		_o[e] = function () {
			return {
				priority: 99, link: function (n, r, i) {
					var o = t, a = t;
					"href" === t && "[object SVGAnimatedString]" === oi.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(e, function (e) {
						return e ? (i.$set(a, e), void(Kr && o && r.prop(o, i[a]))) : void("href" === t && i.$set(a, null))
					})
				}
			}
		}
	});
	var No = {
		$addControl: p,
		$$renameControl: kr,
		$removeControl: p,
		$setValidity: p,
		$setDirty: p,
		$setPristine: p,
		$setSubmitted: p
	}, Do = "ng-submitted";
	Ar.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
	var Oo = function (t) {
		return ["$timeout", function (e) {
			var r = {
				name: "form", restrict: t ? "EAC" : "E", controller: Ar, compile: function (t) {
					return t.addClass(da).addClass(ca), {
						pre: function (t, r, i, o) {
							if (!("action"in i)) {
								var a = function (e) {
									t.$apply(function () {
										o.$commitViewValue(), o.$setSubmitted()
									}), e.preventDefault()
								};
								Si(r[0], "submit", a), r.on("$destroy", function () {
									e(function () {
										Ei(r[0], "submit", a)
									}, 0, !1)
								})
							}
							var s = o.$$parentForm, u = o.$name;
							u && (Hn(t, null, u, o, u), i.$observe(i.name ? "name" : "ngForm", function (e) {
								u !== e && (Hn(t, null, u, n, u), u = e, Hn(t, null, u, o, u), s.$$renameControl(o, u))
							})), r.on("$destroy", function () {
								s.$removeControl(o), u && Hn(t, null, u, n, u), f(o, No)
							})
						}
					}
				}
			};
			return r
		}]
	}, jo = Oo(), Ro = Oo(!0), Fo = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Po = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Ho = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Io = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Mo = /^(\d{4})-(\d{2})-(\d{2})$/, Lo = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, qo = /^(\d{4})-W(\d\d)$/, Uo = /^(\d{4})-(\d\d)$/, Vo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Bo = {
		text: Nr,
		date: Rr("date", Mo, jr(Mo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
		"datetime-local": Rr("datetimelocal", Lo, jr(Lo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
		time: Rr("time", Vo, jr(Vo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
		week: Rr("week", qo, Or, "yyyy-Www"),
		month: Rr("month", Uo, jr(Uo, ["yyyy", "MM"]), "yyyy-MM"),
		number: Pr,
		url: Hr,
		email: Ir,
		radio: Mr,
		checkbox: qr,
		hidden: p,
		button: p,
		submit: p,
		reset: p,
		file: p
	}, Wo = ["$browser", "$sniffer", "$filter", "$parse", function (t, e, n, r) {
		return {
			restrict: "E", require: ["?ngModel"], link: {
				pre: function (i, o, a, s) {
					s[0] && (Bo[Xr(a.type)] || Bo.text)(i, o, a, s[0], e, t, n, r)
				}
			}
		}
	}], zo = /^(true|false|\d+)$/, Xo = function () {
		return {
			restrict: "A", priority: 100, compile: function (t, e) {
				return zo.test(e.ngValue) ? function (t, e, n) {
					n.$set("value", t.$eval(n.ngValue))
				} : function (t, e, n) {
					t.$watch(n.ngValue, function (t) {
						n.$set("value", t)
					})
				}
			}
		}
	}, Go = ["$compile", function (t) {
		return {
			restrict: "AC", compile: function (e) {
				return t.$$addBindingClass(e), function (e, r, i) {
					t.$$addBindingInfo(r, i.ngBind), r = r[0], e.$watch(i.ngBind, function (t) {
						r.textContent = t === n ? "" : t
					})
				}
			}
		}
	}], Yo = ["$interpolate", "$compile", function (t, e) {
		return {
			compile: function (r) {
				return e.$$addBindingClass(r), function (r, i, o) {
					var a = t(i.attr(o.$attr.ngBindTemplate));
					e.$$addBindingInfo(i, a.expressions), i = i[0], o.$observe("ngBindTemplate", function (t) {
						i.textContent = t === n ? "" : t
					})
				}
			}
		}
	}], Jo = ["$sce", "$parse", "$compile", function (t, e, n) {
		return {
			restrict: "A", compile: function (r, i) {
				var o = e(i.ngBindHtml), a = e(i.ngBindHtml, function (t) {
					return (t || "").toString()
				});
				return n.$$addBindingClass(r), function (e, r, i) {
					n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function () {
						r.html(t.getTrustedHtml(o(e)) || "")
					})
				}
			}
		}
	}], Qo = v({
		restrict: "A", require: "ngModel", link: function (t, e, n, r) {
			r.$viewChangeListeners.push(function () {
				t.$eval(n.ngChange)
			})
		}
	}), Ko = Ur("", !0), Zo = Ur("Odd", 0), ta = Ur("Even", 1), ea = Er({
		compile: function (t, e) {
			e.$set("ngCloak", n), t.removeClass("ng-cloak")
		}
	}), na = [function () {
		return {restrict: "A", scope: !0, controller: "@", priority: 500}
	}], ra = {}, ia = {blur: !0, focus: !0};
	o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
		var e = Ke("ng-" + t);
		ra[e] = ["$parse", "$rootScope", function (n, r) {
			return {
				restrict: "A", compile: function (i, o) {
					var a = n(o[e], null, !0);
					return function (e, n) {
						n.on(t, function (n) {
							var i = function () {
								a(e, {$event: n})
							};
							ia[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i)
						})
					}
				}
			}
		}]
	});
	var oa = ["$animate", function (t) {
		return {
			multiElement: !0,
			transclude: "element",
			priority: 600,
			terminal: !0,
			restrict: "A",
			$$tlb: !0,
			link: function (n, r, i, o, a) {
				var s, u, l;
				n.$watch(i.ngIf, function (n) {
					n ? u || a(function (n, o) {
						u = o, n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "), s = {clone: n}, t.enter(n, r.parent(), r)
					}) : (l && (l.remove(), l = null), u && (u.$destroy(), u = null), s && (l = ue(s.clone), t.leave(l).then(function () {
						l = null
					}), s = null))
				})
			}
		}
	}], aa = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (t, e, n, r) {
		return {
			restrict: "ECA",
			priority: 400,
			terminal: !0,
			transclude: "element",
			controller: si.noop,
			compile: function (i, o) {
				var a = o.ngInclude || o.src, s = o.onload || "", u = o.autoscroll;
				return function (i, o, l, c, f) {
					var d, h, p, m = 0, v = function () {
						h && (h.remove(), h = null), d && (d.$destroy(), d = null), p && (n.leave(p).then(function () {
							h = null
						}), h = p, p = null)
					};
					i.$watch(r.parseAsResourceUrl(a), function (r) {
						var a = function () {
							!$(u) || u && !i.$eval(u) || e()
						}, l = ++m;
						r ? (t(r, !0).then(function (t) {
							if (l === m) {
								var e = i.$new();
								c.template = t;
								var u = f(e, function (t) {
									v(), n.enter(t, null, o).then(a)
								});
								d = e, p = u, d.$emit("$includeContentLoaded", r), i.$eval(s)
							}
						}, function () {
							l === m && (v(), i.$emit("$includeContentError", r))
						}), i.$emit("$includeContentRequested", r)) : (v(), c.template = null)
					})
				}
			}
		}
	}], sa = ["$compile", function (t) {
		return {
			restrict: "ECA", priority: -400, require: "ngInclude", link: function (n, r, i, o) {
				return /SVG/.test(r[0].toString()) ? (r.empty(), void t($e(o.template, e).childNodes)(n, function (t) {
					r.append(t)
				}, {futureParentElement: r})) : (r.html(o.template), void t(r.contents())(n))
			}
		}
	}], ua = Er({
		priority: 450, compile: function () {
			return {
				pre: function (t, e, n) {
					t.$eval(n.ngInit)
				}
			}
		}
	}), la = function () {
		return {
			restrict: "A", priority: 100, require: "ngModel", link: function (t, e, r, i) {
				var a = e.attr(r.$attr.ngList) || ", ", s = "false" !== r.ngTrim, u = s ? fi(a) : a, l = function (t) {
					if (!g(t)) {
						var e = [];
						return t && o(t.split(u), function (t) {
							t && e.push(s ? fi(t) : t)
						}), e
					}
				};
				i.$parsers.push(l), i.$formatters.push(function (t) {
					return ci(t) ? t.join(a) : n
				}), i.$isEmpty = function (t) {
					return !t || !t.length
				}
			}
		}
	}, ca = "ng-valid", fa = "ng-invalid", da = "ng-pristine", ha = "ng-dirty", pa = "ng-untouched", ma = "ng-touched", va = "ng-pending", ga = new r("ngModel"), $a = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (t, e, r, i, a, s, u, l, c, f) {
		this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(r.name || "", !1)(t);
		var d = a(r.ngModel), h = d.assign, m = d, v = h, y = null, b = this;
		this.$$setOptions = function (t) {
			if (b.$options = t, t && t.getterSetter) {
				var e = a(r.ngModel + "()"), n = a(r.ngModel + "($$$p)");
				m = function (t) {
					var n = d(t);
					return C(n) && (n = e(t)), n
				}, v = function (t) {
					C(d(t)) ? n(t, {$$$p: b.$modelValue}) : h(t, b.$modelValue)
				}
			} else if (!d.assign)throw ga("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, W(i))
		}, this.$render = p, this.$isEmpty = function (t) {
			return g(t) || "" === t || null === t || t !== t
		};
		var x = i.inheritedData("$formController") || No, T = 0;
		Vr({
			ctrl: this, $element: i, set: function (t, e) {
				t[e] = !0
			}, unset: function (t, e) {
				delete t[e]
			}, parentForm: x, $animate: s
		}), this.$setPristine = function () {
			b.$dirty = !1, b.$pristine = !0, s.removeClass(i, ha), s.addClass(i, da)
		}, this.$setDirty = function () {
			b.$dirty = !0, b.$pristine = !1, s.removeClass(i, da), s.addClass(i, ha), x.$setDirty()
		}, this.$setUntouched = function () {
			b.$touched = !1, b.$untouched = !0, s.setClass(i, pa, ma)
		}, this.$setTouched = function () {
			b.$touched = !0, b.$untouched = !1, s.setClass(i, ma, pa)
		}, this.$rollbackViewValue = function () {
			u.cancel(y), b.$viewValue = b.$$lastCommittedViewValue, b.$render()
		}, this.$validate = function () {
			if (!w(b.$modelValue) || !isNaN(b.$modelValue)) {
				var t = b.$$lastCommittedViewValue, e = b.$$rawModelValue, r = b.$$parserName || "parse", i = b.$error[r] ? !1 : n, o = b.$valid, a = b.$modelValue, s = b.$options && b.$options.allowInvalid;
				b.$$runValidators(i, e, t, function (t) {
					s || o === t || (b.$modelValue = t ? e : n, b.$modelValue !== a && b.$$writeModelToScope())
				})
			}
		}, this.$$runValidators = function (t, e, r, i) {
			function a(t) {
				var e = b.$$parserName || "parse";
				if (t === n)l(e, null); else if (l(e, t), !t)return o(b.$validators, function (t, e) {
					l(e, null)
				}), o(b.$asyncValidators, function (t, e) {
					l(e, null)
				}), !1;
				return !0
			}

			function s() {
				var t = !0;
				return o(b.$validators, function (n, i) {
					var o = n(e, r);
					t = t && o, l(i, o)
				}), t ? !0 : (o(b.$asyncValidators, function (t, e) {
					l(e, null)
				}), !1)
			}

			function u() {
				var t = [], i = !0;
				o(b.$asyncValidators, function (o, a) {
					var s = o(e, r);
					if (!D(s))throw ga("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
					l(a, n), t.push(s.then(function () {
						l(a, !0)
					}, function () {
						i = !1, l(a, !1)
					}))
				}), t.length ? c.all(t).then(function () {
					f(i)
				}, p) : f(!0)
			}

			function l(t, e) {
				d === T && b.$setValidity(t, e)
			}

			function f(t) {
				d === T && i(t)
			}

			T++;
			var d = T;
			return a(t) && s() ? void u() : void f(!1)
		}, this.$commitViewValue = function () {
			var t = b.$viewValue;
			u.cancel(y), (b.$$lastCommittedViewValue !== t || "" === t && b.$$hasNativeValidators) && (b.$$lastCommittedViewValue = t, b.$pristine && this.$setDirty(), this.$$parseAndValidate())
		}, this.$$parseAndValidate = function () {
			function e() {
				b.$modelValue !== s && b.$$writeModelToScope()
			}

			var r = b.$$lastCommittedViewValue, i = r, o = g(i) ? n : !0;
			if (o)for (var a = 0; a < b.$parsers.length; a++)if (i = b.$parsers[a](i), g(i)) {
				o = !1;
				break
			}
			w(b.$modelValue) && isNaN(b.$modelValue) && (b.$modelValue = m(t));
			var s = b.$modelValue, u = b.$options && b.$options.allowInvalid;
			b.$$rawModelValue = i, u && (b.$modelValue = i, e()), b.$$runValidators(o, i, b.$$lastCommittedViewValue, function (t) {
				u || (b.$modelValue = t ? i : n, e())
			})
		}, this.$$writeModelToScope = function () {
			v(t, b.$modelValue), o(b.$viewChangeListeners, function (t) {
				try {
					t()
				} catch (n) {
					e(n)
				}
			})
		}, this.$setViewValue = function (t, e) {
			b.$viewValue = t, (!b.$options || b.$options.updateOnDefault) && b.$$debounceViewValueCommit(e)
		}, this.$$debounceViewValueCommit = function (e) {
			var n, r = 0, i = b.$options;
			i && $(i.debounce) && (n = i.debounce, w(n) ? r = n : w(n[e]) ? r = n[e] : w(n["default"]) && (r = n["default"])), u.cancel(y), r ? y = u(function () {
				b.$commitViewValue()
			}, r) : l.$$phase ? b.$commitViewValue() : t.$apply(function () {
				b.$commitViewValue()
			})
		}, t.$watch(function () {
			var e = m(t);
			if (e !== b.$modelValue) {
				b.$modelValue = b.$$rawModelValue = e;
				for (var r = b.$formatters, i = r.length, o = e; i--;)o = r[i](o);
				b.$viewValue !== o && (b.$viewValue = b.$$lastCommittedViewValue = o, b.$render(), b.$$runValidators(n, e, o, p))
			}
			return e
		})
	}], ya = ["$rootScope", function (t) {
		return {
			restrict: "A",
			require: ["ngModel", "^?form", "^?ngModelOptions"],
			controller: $a,
			priority: 1,
			compile: function (e) {
				return e.addClass(da).addClass(pa).addClass(ca), {
					pre: function (t, e, n, r) {
						var i = r[0], o = r[1] || No;
						i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function (t) {
							i.$name !== t && o.$$renameControl(i, t)
						}), t.$on("$destroy", function () {
							o.$removeControl(i)
						})
					}, post: function (e, n, r, i) {
						var o = i[0];
						o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function (t) {
							o.$$debounceViewValueCommit(t && t.type)
						}), n.on("blur", function () {
							o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched))
						})
					}
				}
			}
		}
	}], ba = /(\s+|^)default(\s+|$)/, wa = function () {
		return {
			restrict: "A", controller: ["$scope", "$attrs", function (t, e) {
				var r = this;
				this.$options = t.$eval(e.ngModelOptions), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = fi(this.$options.updateOn.replace(ba, function () {
					return r.$options.updateOnDefault = !0, " "
				}))) : this.$options.updateOnDefault = !0
			}]
		}
	}, xa = Er({terminal: !0, priority: 1e3}), Ca = ["$locale", "$interpolate", function (t, e) {
		var n = /{}/g, r = /^when(Minus)?(.+)$/;
		return {
			restrict: "EA", link: function (i, a, s) {
				function u(t) {
					a.text(t || "")
				}

				var l, c = s.count, f = s.$attr.when && a.attr(s.$attr.when), d = s.offset || 0, h = i.$eval(f) || {}, p = {}, m = e.startSymbol(), v = e.endSymbol(), g = m + c + "-" + d + v, $ = si.noop;
				o(s, function (t, e) {
					var n = r.exec(e);
					if (n) {
						var i = (n[1] ? "-" : "") + Xr(n[2]);
						h[i] = a.attr(s.$attr[e])
					}
				}), o(h, function (t, r) {
					p[r] = e(t.replace(n, g))
				}), i.$watch(c, function (e) {
					var n = parseFloat(e), r = isNaN(n);
					r || n in h || (n = t.pluralCat(n - d)), n === l || r && isNaN(l) || ($(), $ = i.$watch(p[n], u), l = n)
				})
			}
		}
	}], Ta = ["$parse", "$animate", function (t, a) {
		var s = "$$NG_REMOVED", u = r("ngRepeat"), l = function (t, e, n, r, i, o, a) {
			t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & e))
		}, c = function (t) {
			return t.clone[0]
		}, f = function (t) {
			return t.clone[t.clone.length - 1]
		};
		return {
			restrict: "A",
			multiElement: !0,
			transclude: "element",
			priority: 1e3,
			terminal: !0,
			$$tlb: !0,
			compile: function (r, d) {
				var h = d.ngRepeat, p = e.createComment(" end ngRepeat: " + h + " "), m = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
				if (!m)throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", h);
				var v = m[1], g = m[2], $ = m[3], y = m[4];
				if (m = v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !m)throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", v);
				var b = m[3] || m[1], w = m[2];
				if ($ && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test($) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test($)))throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", $);
				var x, C, T, S, E = {$id: Le};
				return y ? x = t(y) : (T = function (t, e) {
					return Le(e)
				}, S = function (t) {
					return t
				}), function (t, e, r, d, m) {
					x && (C = function (e, n, r) {
						return w && (E[w] = e), E[b] = n, E.$index = r, x(t, E)
					});
					var v = le();
					t.$watchCollection(g, function (r) {
						var d, g, y, x, E, k, A, _, N, D, O, j, R = e[0], F = le();
						if ($ && (t[$] = r), i(r))N = r, _ = C || T; else {
							_ = C || S, N = [];
							for (var P in r)r.hasOwnProperty(P) && "$" != P.charAt(0) && N.push(P);
							N.sort()
						}
						for (x = N.length, O = new Array(x), d = 0; x > d; d++)if (E = r === N ? d : N[d], k = r[E], A = _(E, k, d), v[A])D = v[A], delete v[A], F[A] = D, O[d] = D; else {
							if (F[A])throw o(O, function (t) {
								t && t.scope && (v[t.id] = t)
							}), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", h, A, k);
							O[d] = {id: A, scope: n, clone: n}, F[A] = !0
						}
						for (var H in v) {
							if (D = v[H], j = ue(D.clone), a.leave(j), j[0].parentNode)for (d = 0, g = j.length; g > d; d++)j[d][s] = !0;
							D.scope.$destroy()
						}
						for (d = 0; x > d; d++)if (E = r === N ? d : N[d], k = r[E], D = O[d], D.scope) {
							y = R;
							do y = y.nextSibling; while (y && y[s]);
							c(D) != y && a.move(ue(D.clone), null, Zr(R)), R = f(D), l(D.scope, d, b, k, w, E, x)
						} else m(function (t, e) {
							D.scope = e;
							var n = p.cloneNode(!1);
							t[t.length++] = n, a.enter(t, null, Zr(R)), R = n, D.clone = t, F[D.id] = D, l(D.scope, d, b, k, w, E, x)
						});
						v = F
					})
				}
			}
		}
	}], Sa = "ng-hide", Ea = "ng-hide-animate", ka = ["$animate", function (t) {
		return {
			restrict: "A", multiElement: !0, link: function (e, n, r) {
				e.$watch(r.ngShow, function (e) {
					t[e ? "removeClass" : "addClass"](n, Sa, {tempClasses: Ea})
				})
			}
		}
	}], Aa = ["$animate", function (t) {
		return {
			restrict: "A", multiElement: !0, link: function (e, n, r) {
				e.$watch(r.ngHide, function (e) {
					t[e ? "addClass" : "removeClass"](n, Sa, {tempClasses: Ea})
				})
			}
		}
	}], _a = Er(function (t, e, n) {
		t.$watchCollection(n.ngStyle, function (t, n) {
			n && t !== n && o(n, function (t, n) {
				e.css(n, "")
			}), t && e.css(t)
		})
	}), Na = ["$animate", function (t) {
		return {
			restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
				this.cases = {}
			}], link: function (n, r, i, a) {
				var s = i.ngSwitch || i.on, u = [], l = [], c = [], f = [], d = function (t, e) {
					return function () {
						t.splice(e, 1)
					}
				};
				n.$watch(s, function (n) {
					var r, i;
					for (r = 0, i = c.length; i > r; ++r)t.cancel(c[r]);
					for (c.length = 0, r = 0, i = f.length; i > r; ++r) {
						var s = ue(l[r].clone);
						f[r].$destroy();
						var h = c[r] = t.leave(s);
						h.then(d(c, r))
					}
					l.length = 0, f.length = 0, (u = a.cases["!" + n] || a.cases["?"]) && o(u, function (n) {
						n.transclude(function (r, i) {
							f.push(i);
							var o = n.element;
							r[r.length++] = e.createComment(" end ngSwitchWhen: ");
							var a = {clone: r};
							l.push(a), t.enter(r, o.parent(), o)
						})
					})
				})
			}
		}
	}], Da = Er({
		transclude: "element",
		priority: 1200,
		require: "^ngSwitch",
		multiElement: !0,
		link: function (t, e, n, r, i) {
			r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
				transclude: i,
				element: e
			})
		}
	}), Oa = Er({
		transclude: "element",
		priority: 1200,
		require: "^ngSwitch",
		multiElement: !0,
		link: function (t, e, n, r, i) {
			r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: i, element: e})
		}
	}), ja = Er({
		restrict: "EAC", link: function (t, e, n, i, o) {
			if (!o)throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", W(e));
			o(function (t) {
				e.empty(), e.append(t)
			})
		}
	}), Ra = ["$templateCache", function (t) {
		return {
			restrict: "E", terminal: !0, compile: function (e, n) {
				if ("text/ng-template" == n.type) {
					var r = n.id, i = e[0].text;
					t.put(r, i)
				}
			}
		}
	}], Fa = r("ngOptions"), Pa = v({restrict: "A", terminal: !0}), Ha = ["$compile", "$parse", function (t, r) {
		var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, s = {$setViewValue: p};
		return {
			restrict: "E",
			require: ["select", "?ngModel"],
			controller: ["$element", "$scope", "$attrs", function (t, e, n) {
				var r, i, o = this, a = {}, u = s;
				o.databound = n.ngModel, o.init = function (t, e, n) {
					u = t, r = e, i = n
				}, o.addOption = function (e, n) {
					ae(e, '"option value"'), a[e] = !0, u.$viewValue == e && (t.val(e), i.parent() && i.remove()), n && n[0].hasAttribute("selected") && (n[0].selected = !0)
				}, o.removeOption = function (t) {
					this.hasOption(t) && (delete a[t], u.$viewValue === t && this.renderUnknownOption(t))
				}, o.renderUnknownOption = function (e) {
					var n = "? " + Le(e) + " ?";
					i.val(n), t.prepend(i), t.val(n), i.prop("selected", !0)
				}, o.hasOption = function (t) {
					return a.hasOwnProperty(t)
				}, e.$on("$destroy", function () {
					o.renderUnknownOption = p
				})
			}],
			link: function (s, u, l, c) {
				function f(t, e, n, r) {
					n.$render = function () {
						var t = n.$viewValue;
						r.hasOption(t) ? (S.parent() && S.remove(), e.val(t), "" === t && p.prop("selected", !0)) : g(t) && p ? e.val("") : r.renderUnknownOption(t)
					}, e.on("change", function () {
						t.$apply(function () {
							S.parent() && S.remove(), n.$setViewValue(e.val())
						})
					})
				}

				function d(t, e, n) {
					var r;
					n.$render = function () {
						var t = new qe(n.$viewValue);
						o(e.find("option"), function (e) {
							e.selected = $(t.get(e.value))
						})
					}, t.$watch(function () {
						I(r, n.$viewValue) || (r = H(n.$viewValue), n.$render())
					}), e.on("change", function () {
						t.$apply(function () {
							var t = [];
							o(e.find("option"), function (e) {
								e.selected && t.push(e.value)
							}), n.$setViewValue(t)
						})
					})
				}

				function h(e, s, u) {
					function l(t, n, r) {
						return I[k] = r, N && (I[N] = n), t(e, I)
					}

					function c() {
						e.$apply(function () {
							var t, n = j(e) || [];
							if (y)t = [], o(s.val(), function (e) {
								e = F ? P[e] : e, t.push(f(e, n[e]))
							}); else {
								var r = F ? P[s.val()] : s.val();
								t = f(r, n[r])
							}
							u.$setViewValue(t), g()
						})
					}

					function f(t, e) {
						if ("?" === t)return n;
						if ("" === t)return null;
						var r = _ ? _ : O;
						return l(r, t, e)
					}

					function d() {
						var t, n = j(e);
						if (n && ci(n)) {
							t = new Array(n.length);
							for (var r = 0, i = n.length; i > r; r++)t[r] = l(E, r, n[r]);
							return t
						}
						if (n) {
							t = {};
							for (var o in n)n.hasOwnProperty(o) && (t[o] = l(E, o, n[o]))
						}
						return t
					}

					function h(t) {
						var e;
						if (y)if (F && ci(t)) {
							e = new qe([]);
							for (var n = 0; n < t.length; n++)e.put(l(F, null, t[n]), !0)
						} else e = new qe(t); else F && (t = l(F, null, t));
						return function (n, r) {
							var i;
							return i = F ? F : _ ? _ : O, y ? $(e.remove(l(i, n, r))) : t === l(i, n, r)
						}
					}

					function p() {
						x || (e.$$postDigest(g), x = !0)
					}

					function v(t, e, n) {
						t[e] = t[e] || 0, t[e] += n ? 1 : -1
					}

					function g() {
						x = !1;
						var t, n, r, i, c, f, d, p, g, b, S, k, A, _, O, R, M, L = {"": []}, q = [""], U = u.$viewValue, V = j(e) || [], B = N ? a(V) : V, W = {}, z = h(U), X = !1;
						for (P = {}, k = 0; b = B.length, b > k; k++)d = k, N && (d = B[k], "$" === d.charAt(0)) || (p = V[d], t = l(D, d, p) || "", (n = L[t]) || (n = L[t] = [], q.push(t)), A = z(d, p), X = X || A, R = l(E, d, p), R = $(R) ? R : "", M = F ? F(e, I) : N ? B[k] : k, F && (P[M] = d), n.push({
							id: M,
							label: R,
							selected: A
						}));
						for (y || (w || null === U ? L[""].unshift({
							id: "",
							label: "",
							selected: !X
						}) : X || L[""].unshift({id: "?", label: "", selected: !0})), S = 0, g = q.length; g > S; S++) {
							for (t = q[S], n = L[t], H.length <= S ? (i = {
								element: T.clone().attr("label", t),
								label: n.label
							}, c = [i], H.push(c), s.append(i.element)) : (c = H[S], i = c[0], i.label != t && i.element.attr("label", i.label = t)), _ = null, k = 0, b = n.length; b > k; k++)r = n[k], (f = c[k + 1]) ? (_ = f.element, f.label !== r.label && (v(W, f.label, !1), v(W, r.label, !0), _.text(f.label = r.label), _.prop("label", f.label)), f.id !== r.id && _.val(f.id = r.id), _[0].selected !== r.selected && (_.prop("selected", f.selected = r.selected), Kr && _.prop("selected", f.selected))) : ("" === r.id && w ? O = w : (O = C.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).prop("label", r.label).text(r.label), c.push(f = {
								element: O,
								label: r.label,
								id: r.id,
								selected: r.selected
							}), v(W, r.label, !0), _ ? _.after(O) : i.element.append(O), _ = O);
							for (k++; c.length > k;)r = c.pop(), v(W, r.label, !1), r.element.remove()
						}
						for (; H.length > S;) {
							for (n = H.pop(), k = 1; k < n.length; ++k)v(W, n[k].label, !1);
							n[0].element.remove()
						}
						o(W, function (t, e) {
							t > 0 ? m.addOption(e) : 0 > t && m.removeOption(e)
						})
					}

					var S;
					if (!(S = b.match(i)))throw Fa("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", b, W(s));
					var E = r(S[2] || S[1]), k = S[4] || S[6], A = / as /.test(S[0]) && S[1], _ = A ? r(A) : null, N = S[5], D = r(S[3] || ""), O = r(S[2] ? S[1] : k), j = r(S[7]), R = S[8], F = R ? r(S[8]) : null, P = {}, H = [[{
						element: s,
						label: ""
					}]], I = {};
					w && (t(w)(e), w.removeClass("ng-scope"), w.remove()), s.empty(), s.on("change", c), u.$render = g, e.$watchCollection(j, p), e.$watchCollection(d, p), y && e.$watchCollection(function () {
						return u.$modelValue
					}, p)
				}

				if (c[1]) {
					for (var p, m = c[0], v = c[1], y = l.multiple, b = l.ngOptions, w = !1, x = !1, C = Zr(e.createElement("option")), T = Zr(e.createElement("optgroup")), S = C.clone(), E = 0, k = u.children(), A = k.length; A > E; E++)if ("" === k[E].value) {
						p = w = k.eq(E);
						break
					}
					m.init(v, w, S), y && (v.$isEmpty = function (t) {
						return !t || 0 === t.length
					}), b ? h(s, u, v) : y ? d(s, u, v) : f(s, u, v, m)
				}
			}
		}
	}], Ia = ["$interpolate", function (t) {
		var e = {addOption: p, removeOption: p};
		return {
			restrict: "E", priority: 100, compile: function (n, r) {
				if (g(r.value)) {
					var i = t(n.text(), !0);
					i || r.$set("value", n.text())
				}
				return function (t, n, r) {
					var o = "$selectController", a = n.parent(), s = a.data(o) || a.parent().data(o);
					s && s.databound || (s = e), i ? t.$watch(i, function (t, e) {
						r.$set("value", t), e !== t && s.removeOption(e), s.addOption(t, n)
					}) : s.addOption(r.value, n), n.on("$destroy", function () {
						s.removeOption(r.value)
					})
				}
			}
		}
	}], Ma = v({restrict: "E", terminal: !1}), La = function () {
		return {
			restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
				r && (n.required = !0, r.$validators.required = function (t, e) {
					return !n.required || !r.$isEmpty(e)
				}, n.$observe("required", function () {
					r.$validate()
				}))
			}
		}
	}, qa = function () {
		return {
			restrict: "A", require: "?ngModel", link: function (t, e, i, o) {
				if (o) {
					var a, s = i.ngPattern || i.pattern;
					i.$observe("pattern", function (t) {
						if (b(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test)throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, t, W(e));
						a = t || n, o.$validate()
					}), o.$validators.pattern = function (t) {
						return o.$isEmpty(t) || g(a) || a.test(t)
					}
				}
			}
		}
	}, Ua = function () {
		return {
			restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
				if (r) {
					var i = -1;
					n.$observe("maxlength", function (t) {
						var e = d(t);
						i = isNaN(e) ? -1 : e, r.$validate()
					}), r.$validators.maxlength = function (t, e) {
						return 0 > i || r.$isEmpty(t) || e.length <= i
					}
				}
			}
		}
	}, Va = function () {
		return {
			restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
				if (r) {
					var i = 0;
					n.$observe("minlength", function (t) {
						i = d(t) || 0, r.$validate()
					}), r.$validators.minlength = function (t, e) {
						return r.$isEmpty(e) || e.length >= i
					}
				}
			}
		}
	};
	return t.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (re(), he(si), void Zr(e).ready(function () {
		K(e, Z)
	}))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), function (t, e) {
	"use strict";
	function n() {
		function t(t, n) {
			return e.extend(Object.create(t), n)
		}

		function n(t, e) {
			var n = e.caseInsensitiveMatch, r = {originalPath: t, regexp: t}, i = r.keys = [];
			return t = t.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (t, e, n, r) {
				var o = "?" === r ? r : null, a = "*" === r ? r : null;
				return i.push({
					name: n,
					optional: !!o
				}), e = e || "", "" + (o ? "" : e) + "(?:" + (o ? e : "") + (a && "(.+?)" || "([^/]+)") + (o || "") + ")" + (o || "")
			}).replace(/([\/$\*])/g, "\\$1"), r.regexp = new RegExp("^" + t + "$", n ? "i" : ""), r
		}

		var r = {};
		this.when = function (t, i) {
			var o = e.copy(i);
			if (e.isUndefined(o.reloadOnSearch) && (o.reloadOnSearch = !0), e.isUndefined(o.caseInsensitiveMatch) && (o.caseInsensitiveMatch = this.caseInsensitiveMatch), r[t] = e.extend(o, t && n(t, o)), t) {
				var a = "/" == t[t.length - 1] ? t.substr(0, t.length - 1) : t + "/";
				r[a] = e.extend({redirectTo: t}, n(a, o))
			}
			return this
		}, this.caseInsensitiveMatch = !1, this.otherwise = function (t) {
			return "string" == typeof t && (t = {redirectTo: t}), this.when(null, t), this
		}, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (n, i, o, a, u, l, c) {
			function f(t, e) {
				var n = e.keys, r = {};
				if (!e.regexp)return null;
				var i = e.regexp.exec(t);
				if (!i)return null;
				for (var o = 1, a = i.length; a > o; ++o) {
					var s = n[o - 1], u = i[o];
					s && u && (r[s.name] = u)
				}
				return r
			}

			function d(t) {
				var r = y.current;
				v = p(), g = v && r && v.$$route === r.$$route && e.equals(v.pathParams, r.pathParams) && !v.reloadOnSearch && !$, g || !r && !v || n.$broadcast("$routeChangeStart", v, r).defaultPrevented && t && t.preventDefault()
			}

			function h() {
				var t = y.current, r = v;
				g ? (t.params = r.params, e.copy(t.params, o), n.$broadcast("$routeUpdate", t)) : (r || t) && ($ = !1, y.current = r, r && r.redirectTo && (e.isString(r.redirectTo) ? i.path(m(r.redirectTo, r.params)).search(r.params).replace() : i.url(r.redirectTo(r.pathParams, i.path(), i.search())).replace()), a.when(r).then(function () {
					if (r) {
						var t, n, i = e.extend({}, r.resolve);
						return e.forEach(i, function (t, n) {
							i[n] = e.isString(t) ? u.get(t) : u.invoke(t, null, null, n)
						}), e.isDefined(t = r.template) ? e.isFunction(t) && (t = t(r.params)) : e.isDefined(n = r.templateUrl) && (e.isFunction(n) && (n = n(r.params)), n = c.getTrustedResourceUrl(n), e.isDefined(n) && (r.loadedTemplateUrl = n, t = l(n))), e.isDefined(t) && (i.$template = t), a.all(i)
					}
				}).then(function (i) {
					r == y.current && (r && (r.locals = i, e.copy(r.params, o)), n.$broadcast("$routeChangeSuccess", r, t))
				}, function (e) {
					r == y.current && n.$broadcast("$routeChangeError", r, t, e)
				}))
			}

			function p() {
				var n, o;
				return e.forEach(r, function (r) {
					!o && (n = f(i.path(), r)) && (o = t(r, {
						params: e.extend({}, i.search(), n),
						pathParams: n
					}), o.$$route = r)
				}), o || r[null] && t(r[null], {params: {}, pathParams: {}})
			}

			function m(t, n) {
				var r = [];
				return e.forEach((t || "").split(":"), function (t, e) {
					if (0 === e)r.push(t); else {
						var i = t.match(/(\w+)(?:[?*])?(.*)/), o = i[1];
						r.push(n[o]), r.push(i[2] || ""), delete n[o]
					}
				}), r.join("")
			}

			var v, g, $ = !1, y = {
				routes: r, reload: function () {
					$ = !0, n.$evalAsync(function () {
						d(), h()
					})
				}, updateParams: function (t) {
					if (!this.current || !this.current.$$route)throw s("norout", "Tried updating route when with no current route");
					var n = {}, r = this;
					e.forEach(Object.keys(t), function (e) {
						r.current.pathParams[e] || (n[e] = t[e])
					}), t = e.extend({}, this.current.params, t), i.path(m(this.current.$$route.originalPath, t)), i.search(e.extend({}, i.search(), n))
				}
			};
			return n.$on("$locationChangeStart", d), n.$on("$locationChangeSuccess", h), y
		}]
	}

	function r() {
		this.$get = function () {
			return {}
		}
	}

	function i(t, n, r) {
		return {
			restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function (i, o, a, s, u) {
				function l() {
					h && (r.cancel(h), h = null), f && (f.$destroy(), f = null), d && (h = r.leave(d), h.then(function () {
						h = null
					}), d = null)
				}

				function c() {
					var a = t.current && t.current.locals, s = a && a.$template;
					if (e.isDefined(s)) {
						var c = i.$new(), h = t.current, v = u(c, function (t) {
							r.enter(t, null, d || o).then(function () {
								!e.isDefined(p) || p && !i.$eval(p) || n()
							}), l()
						});
						d = v, f = h.scope = c, f.$emit("$viewContentLoaded"), f.$eval(m)
					} else l()
				}

				var f, d, h, p = a.autoscroll, m = a.onload || "";
				i.$on("$routeChangeSuccess", c), c()
			}
		}
	}

	function o(t, e, n) {
		return {
			restrict: "ECA", priority: -400, link: function (r, i) {
				var o = n.current, a = o.locals;
				i.html(a.$template);
				var s = t(i.contents());
				if (o.controller) {
					a.$scope = r;
					var u = e(o.controller, a);
					o.controllerAs && (r[o.controllerAs] = u), i.data("$ngControllerController", u), i.children().data("$ngControllerController", u)
				}
				s(r)
			}
		}
	}

	var a = e.module("ngRoute", ["ng"]).provider("$route", n), s = e.$$minErr("ngRoute");
	a.provider("$routeParams", r), a.directive("ngView", i), a.directive("ngView", o), i.$inject = ["$route", "$anchorScroll", "$animate"], o.$inject = ["$compile", "$controller", "$route"]
}(window, window.angular), !function () {
	angular.module("growlNotifications.config", []).value("growlNotifications.config", {debug: !0}), angular.module("growlNotifications.directives", []), angular.module("growlNotifications.filters", []), angular.module("growlNotifications.services", []), angular.module("growlNotifications", ["growlNotifications.config", "growlNotifications.directives", "growlNotifications.filters", "growlNotifications.services"])
}(), function () {
	function t(t, n, r) {
		var i = {ttl: t.options.ttl || 5e3};
		return {
			restrict: "AE",
			scope: !0,
			controller: e,
			controllerAs: "$growlNotification",
			link: function (e, o, a, s) {
				var u = angular.extend({}, i, e.$eval(a.growlNotificationOptions));
				a.ttl && (u.ttl = e.$eval(a.ttl)), n.move(o, t.element), s.timer = r(function () {
					n.leave(o)
				}, u.ttl)
			}
		}
	}

	function e(t, e) {
		this.timer = null, this.remove = function () {
			e.leave(t), this.timer && this.timer.cancel && this.timer.cancel()
		}
	}

	t.$inject = ["growlNotifications", "$animate", "$timeout"], e.$inject = ["$element", "$animate"], angular.module("growlNotifications.directives").directive("growlNotification", t)
}(), function () {
	function t(t) {
		return {
			restrict: "AE", link: function (e, n) {
				t.element = n
			}
		}
	}

	t.$inject = ["growlNotifications"], angular.module("growlNotifications.directives").directive("growlNotifications", t)
}(), function () {
	function t() {
		var t = {ttl: 5e3};
		this.setOptions = function (e) {
			return angular.extend(t, e), this
		}, this.ttl = function (e) {
			return angular.isDefined(e) ? (t.ttl = e, this) : t.ttl
		}, this.$get = function () {
			function e() {
				this.options = t, this.element = null
			}

			return new e
		}
	}

	angular.module("growlNotifications.services").provider("growlNotifications", t)
}(), function () {
	var t = angular.module("angularFileUpload", []);
	t.service("$upload", ["$http", "$q", "$timeout", function (t, e, n) {
		function r(r) {
			r.method = r.method || "POST", r.headers = r.headers || {}, r.transformRequest = r.transformRequest || function (e, n) {
				return window.ArrayBuffer && e instanceof window.ArrayBuffer ? e : t.defaults.transformRequest[0](e, n)
			};
			var i = e.defer();
			window.XMLHttpRequest.__isShim && (r.headers.__setXHR_ = function () {
				return function (t) {
					t && (r.__XHR = t, r.xhrFn && r.xhrFn(t), t.upload.addEventListener("progress", function (t) {
						i.notify(t)
					}, !1), t.upload.addEventListener("load", function (t) {
						t.lengthComputable && i.notify(t)
					}, !1))
				}
			}), t(r).then(function (t) {
				i.resolve(t)
			}, function (t) {
				i.reject(t)
			}, function (t) {
				i.notify(t)
			});
			var o = i.promise;
			return o.success = function (t) {
				return o.then(function (e) {
					t(e.data, e.status, e.headers, r)
				}), o
			}, o.error = function (t) {
				return o.then(null, function (e) {
					t(e.data, e.status, e.headers, r)
				}), o
			}, o.progress = function (t) {
				return o.then(null, null, function (e) {
					t(e)
				}), o
			}, o.abort = function () {
				return r.__XHR && n(function () {
					r.__XHR.abort()
				}), o
			}, o.xhr = function (t) {
				return r.xhrFn = function (e) {
					return function () {
						e && e.apply(o, arguments), t.apply(o, arguments)
					}
				}(r.xhrFn), o
			}, o
		}

		this.upload = function (e) {
			e.headers = e.headers || {}, e.headers["Content-Type"] = void 0, e.transformRequest = e.transformRequest || t.defaults.transformRequest;
			var n = new FormData, i = e.transformRequest, o = e.data;
			return e.transformRequest = function (t, n) {
				if (o)if (e.formDataAppender)for (var r in o) {
					var a = o[r];
					e.formDataAppender(t, r, a)
				} else for (var r in o) {
					var a = o[r];
					if ("function" == typeof i)a = i(a, n); else for (var s = 0; s < i.length; s++) {
						var u = i[s];
						"function" == typeof u && (a = u(a, n))
					}
					t.append(r, a)
				}
				if (null != e.file) {
					var l = e.fileFormDataName || "file";
					if ("[object Array]" === Object.prototype.toString.call(e.file))for (var c = "[object String]" === Object.prototype.toString.call(l), s = 0; s < e.file.length; s++)t.append(c ? l : l[s], e.file[s], e.fileName && e.fileName[s] || e.file[s].name); else t.append(l, e.file, e.fileName || e.file.name)
				}
				return t
			}, e.data = n, r(e)
		}, this.http = function (t) {
			return r(t)
		}
	}]), t.directive("ngFileSelect", ["$parse", "$timeout", function (t, e) {
		return function (n, r, i) {
			var o = t(i.ngFileSelect);
			if ("input" !== r[0].tagName.toLowerCase() || "file" !== (r.attr("type") && r.attr("type").toLowerCase())) {
				for (var a = angular.element('<input type="file">'), s = 0; s < r[0].attributes.length; s++)a.attr(r[0].attributes[s].name, r[0].attributes[s].value);
				r.attr("data-multiple") && a.attr("multiple", "true"), a.css("top", 0).css("bottom", 0).css("left", 0).css("right", 0).css("width", "100%").css("opacity", 0).css("position", "absolute").css("filter", "alpha(opacity=0)"), r.append(a), ("" === r.css("position") || "static" === r.css("position")) && r.css("position", "relative"), r = a
			}
			r.bind("change", function (t) {
				var r, i, a = [];
				if (r = t.__files_ || t.target.files, null != r)for (i = 0; i < r.length; i++)a.push(r.item(i));
				e(function () {
					o(n, {$files: a, $event: t})
				})
			})
		}
	}]), t.directive("ngFileDropAvailable", ["$parse", "$timeout", function (t, e) {
		return function (n, r, i) {
			if ("draggable"in document.createElement("span")) {
				var o = t(i.ngFileDropAvailable);
				e(function () {
					o(n)
				})
			}
		}
	}]), t.directive("ngFileDrop", ["$parse", "$timeout", "$location", function (t, e, n) {
		return function (r, i, o) {
			function a(t) {
				return /^[\000-\177]*$/.test(t)
			}

			function s(t, r) {
				var i = [], o = t.dataTransfer.items;
				if (o && o.length > 0 && o[0].webkitGetAsEntry && "file" != n.protocol() && o[0].webkitGetAsEntry().isDirectory)for (var s = 0; s < o.length; s++) {
					var l = o[s].webkitGetAsEntry();
					null != l && (a(l.name) ? u(i, l) : i.push(o[s].getAsFile()))
				} else {
					var c = t.dataTransfer.files;
					if (null != c)for (var s = 0; s < c.length; s++)i.push(c.item(s))
				}
				!function d(t) {
					e(function () {
						f ? d(10) : r(i)
					}, t || 0)
				}()
			}

			function u(t, e) {
				if (null != e)if (e.isDirectory) {
					var n = e.createReader();
					f++, n.readEntries(function (e) {
						for (var n = 0; n < e.length; n++)u(t, e[n]);
						f--
					})
				} else f++, e.file(function (e) {
					f--, t.push(e)
				})
			}

			if ("draggable"in document.createElement("span")) {
				var l = null;
				i[0].addEventListener("dragover", function (n) {
					if (n.stopPropagation(), n.preventDefault(), e.cancel(l), !i[0].__drag_over_class_) {
						var a = t(o.ngFileDragOverClass);
						if (a instanceof Function) {
							var s = a(r, {$event: n});
							i[0].__drag_over_class_ = s
						} else i[0].__drag_over_class_ = o.ngFileDragOverClass || "dragover"
					}
					i.addClass(i[0].__drag_over_class_)
				}, !1), i[0].addEventListener("dragenter", function (t) {
					t.stopPropagation(), t.preventDefault()
				}, !1), i[0].addEventListener("dragleave", function () {
					l = e(function () {
						i.removeClass(i[0].__drag_over_class_), i[0].__drag_over_class_ = null
					})
				}, !1);
				var c = t(o.ngFileDrop);
				i[0].addEventListener("drop", function (t) {
					t.stopPropagation(), t.preventDefault(), i.removeClass(i[0].__drag_over_class_), i[0].__drag_over_class_ = null, s(t, function (e) {
						c(r, {$files: e, $event: t})
					})
				}, !1);
				var f = 0
			}
		}
	}])
}(), function (t, e, n) {
	"use strict";
	function r(t) {
		return null != t && "" !== t && "hasOwnProperty" !== t && s.test("." + t)
	}

	function i(t, e) {
		if (!r(e))throw a("badmember", 'Dotted member path "@{0}" is invalid.', e);
		for (var i = e.split("."), o = 0, s = i.length; s > o && t !== n; o++) {
			var u = i[o];
			t = null !== t ? t[u] : n
		}
		return t
	}

	function o(t, n) {
		n = n || {}, e.forEach(n, function (t, e) {
			delete n[e]
		});
		for (var r in t)!t.hasOwnProperty(r) || "$" === r.charAt(0) && "$" === r.charAt(1) || (n[r] = t[r]);
		return n
	}

	var a = e.$$minErr("$resource"), s = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
	e.module("ngResource", ["ng"]).provider("$resource", function () {
		var t = this;
		this.defaults = {
			stripTrailingSlashes: !0,
			actions: {
				get: {method: "GET"},
				save: {method: "POST"},
				query: {method: "GET", isArray: !0},
				remove: {method: "DELETE"},
				"delete": {method: "DELETE"}
			}
		}, this.$get = ["$http", "$q", function (r, s) {
			function u(t) {
				return l(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
			}

			function l(t, e) {
				return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
			}

			function c(e, n) {
				this.template = e, this.defaults = p({}, t.defaults, n), this.urlParams = {}
			}

			function f(u, l, g, $) {
				function y(t, e) {
					var n = {};
					return e = p({}, l, e), h(e, function (e, r) {
						v(e) && (e = e()), n[r] = e && e.charAt && "@" == e.charAt(0) ? i(t, e.substr(1)) : e
					}), n
				}

				function b(t) {
					return t.resource
				}

				function w(t) {
					o(t || {}, this)
				}

				var x = new c(u, $);
				return g = p({}, t.defaults.actions, g), w.prototype.toJSON = function () {
					var t = p({}, this);
					return delete t.$promise, delete t.$resolved, t
				}, h(g, function (t, i) {
					var u = /^(POST|PUT|PATCH)$/i.test(t.method);
					w[i] = function (l, c, f, g) {
						var $, C, T, S = {};
						switch (arguments.length) {
							case 4:
								T = g, C = f;
							case 3:
							case 2:
								if (!v(c)) {
									S = l, $ = c, C = f;
									break
								}
								if (v(l)) {
									C = l, T = c;
									break
								}
								C = c, T = f;
							case 1:
								v(l) ? C = l : u ? $ = l : S = l;
								break;
							case 0:
								break;
							default:
								throw a("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
						}
						var E = this instanceof w, k = E ? $ : t.isArray ? [] : new w($), A = {}, _ = t.interceptor && t.interceptor.response || b, N = t.interceptor && t.interceptor.responseError || n;
						h(t, function (t, e) {
							"params" != e && "isArray" != e && "interceptor" != e && (A[e] = m(t))
						}), u && (A.data = $), x.setUrlParams(A, p({}, y($, t.params || {}), S), t.url);
						var D = r(A).then(function (n) {
							var r = n.data, s = k.$promise;
							if (r) {
								if (e.isArray(r) !== !!t.isArray)throw a("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}", i, t.isArray ? "array" : "object", e.isArray(r) ? "array" : "object");
								t.isArray ? (k.length = 0, h(r, function (t) {
									k.push("object" == typeof t ? new w(t) : t)
								})) : (o(r, k), k.$promise = s)
							}
							return k.$resolved = !0, n.resource = k, n
						}, function (t) {
							return k.$resolved = !0, (T || d)(t), s.reject(t)
						});
						return D = D.then(function (t) {
							var e = _(t);
							return (C || d)(e, t.headers), e
						}, N), E ? D : (k.$promise = D, k.$resolved = !1, k)
					}, w.prototype["$" + i] = function (t, e, n) {
						v(t) && (n = e, e = t, t = {});
						var r = w[i].call(this, t, this, e, n);
						return r.$promise || r
					}
				}), w.bind = function (t) {
					return f(u, p({}, l, t), g)
				}, w
			}

			var d = e.noop, h = e.forEach, p = e.extend, m = e.copy, v = e.isFunction;
			return c.prototype = {
				setUrlParams: function (t, n, r) {
					var i, o, s = this, l = r || s.template, c = s.urlParams = {};
					h(l.split(/\W/), function (t) {
						if ("hasOwnProperty" === t)throw a("badname", "hasOwnProperty is not a valid parameter name.");
						!new RegExp("^\\d+$").test(t) && t && new RegExp("(^|[^\\\\]):" + t + "(\\W|$)").test(l) && (c[t] = !0)
					}), l = l.replace(/\\:/g, ":"), n = n || {}, h(s.urlParams, function (t, r) {
						i = n.hasOwnProperty(r) ? n[r] : s.defaults[r], e.isDefined(i) && null !== i ? (o = u(i), l = l.replace(new RegExp(":" + r + "(\\W|$)", "g"), function (t, e) {
							return o + e
						})) : l = l.replace(new RegExp("(/?):" + r + "(\\W|$)", "g"), function (t, e, n) {
							return "/" == n.charAt(0) ? n : e + n
						})
					}), s.defaults.stripTrailingSlashes && (l = l.replace(/\/+$/, "") || "/"), l = l.replace(/\/\.(?=\w+($|\?))/, "."), t.url = l.replace(/\/\\\./, "/."), h(n, function (e, n) {
						s.urlParams[n] || (t.params = t.params || {}, t.params[n] = e)
					})
				}
			}, f
		}]
	})
}(window, window.angular), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var r = t(this), i = r.data("bs.affix"), o = "object" == typeof e && e;
			i || r.data("bs.affix", i = new n(this, o)), "string" == typeof e && i[e]()
		})
	}

	var n = function (e, r) {
		this.options = t.extend({}, n.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
	};
	n.VERSION = "3.3.1", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
		offset: 0,
		target: window
	}, n.prototype.getState = function (t, e, n, r) {
		var i = this.$target.scrollTop(), o = this.$element.offset(), a = this.$target.height();
		if (null != n && "top" == this.affixed)return n > i ? "top" : !1;
		if ("bottom" == this.affixed)return null != n ? i + this.unpin <= o.top ? !1 : "bottom" : t - r >= i + a ? !1 : "bottom";
		var s = null == this.affixed, u = s ? i : o.top, l = s ? a : e;
		return null != n && n >= u ? "top" : null != r && u + l >= t - r ? "bottom" : !1
	}, n.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset)return this.pinnedOffset;
		this.$element.removeClass(n.RESET).addClass("affix");
		var t = this.$target.scrollTop(), e = this.$element.offset();
		return this.pinnedOffset = e.top - t
	}, n.prototype.checkPositionWithEventLoop = function () {
		setTimeout(t.proxy(this.checkPosition, this), 1)
	}, n.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var e = this.$element.height(), r = this.options.offset, i = r.top, o = r.bottom, a = t("body").height();
			"object" != typeof r && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
			var s = this.getState(a, e, i, o);
			if (this.affixed != s) {
				null != this.unpin && this.$element.css("top", "");
				var u = "affix" + (s ? "-" + s : ""), l = t.Event(u + ".bs.affix");
				if (this.$element.trigger(l), l.isDefaultPrevented())return;
				this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == s && this.$element.offset({top: a - e - o})
		}
	};
	var r = t.fn.affix;
	t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
		return t.fn.affix = r, this
	}, t(window).on("load", function () {
		t('[data-spy="affix"]').each(function () {
			var n = t(this), r = n.data();
			r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), e.call(n, r)
		})
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var n = t(this), i = n.data("bs.alert");
			i || n.data("bs.alert", i = new r(this)), "string" == typeof e && i[e].call(n)
		})
	}

	var n = '[data-dismiss="alert"]', r = function (e) {
		t(e).on("click", n, this.close)
	};
	r.VERSION = "3.3.1", r.TRANSITION_DURATION = 150, r.prototype.close = function (e) {
		function n() {
			a.detach().trigger("closed.bs.alert").remove()
		}

		var i = t(this), o = i.attr("data-target");
		o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
		var a = t(o);
		e && e.preventDefault(), a.length || (a = i.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n())
	};
	var i = t.fn.alert;
	t.fn.alert = e, t.fn.alert.Constructor = r, t.fn.alert.noConflict = function () {
		return t.fn.alert = i, this
	}, t(document).on("click.bs.alert.data-api", n, r.prototype.close)
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var r = t(this), i = r.data("bs.button"), o = "object" == typeof e && e;
			i || r.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e)
		})
	}

	var n = function (e, r) {
		this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.isLoading = !1
	};
	n.VERSION = "3.3.1", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
		var n = "disabled", r = this.$element, i = r.is("input") ? "val" : "html", o = r.data();
		e += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(t.proxy(function () {
			r[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
		}, this), 0)
	}, n.prototype.toggle = function () {
		var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var n = this.$element.find("input");
			"radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
		t && this.$element.toggleClass("active")
	};
	var r = t.fn.button;
	t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
		return t.fn.button = r, this
	}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
		var r = t(n.target);
		r.hasClass("btn") || (r = r.closest(".btn")), e.call(r, "toggle"), n.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
		t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var r = t(this), i = r.data("bs.carousel"), o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e), a = "string" == typeof e ? e : o.slide;
			i || r.data("bs.carousel", i = new n(this, o)), "number" == typeof e ? i.to(e) : a ? i[a]() : o.interval && i.pause().cycle()
		})
	}

	var n = function (e, n) {
		this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
	};
	n.VERSION = "3.3.1", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, n.prototype.keydown = function (t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			t.preventDefault()
		}
	}, n.prototype.cycle = function (e) {
		return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
	}, n.prototype.getItemIndex = function (t) {
		return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
	}, n.prototype.getItemForDirection = function (t, e) {
		var n = "prev" == t ? -1 : 1, r = this.getItemIndex(e), i = (r + n) % this.$items.length;
		return this.$items.eq(i)
	}, n.prototype.to = function (t) {
		var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			e.to(t)
		}) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
	}, n.prototype.pause = function (e) {
		return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, n.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next")
	}, n.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev")
	}, n.prototype.slide = function (e, r) {
		var i = this.$element.find(".item.active"), o = r || this.getItemForDirection(e, i), a = this.interval, s = "next" == e ? "left" : "right", u = "next" == e ? "first" : "last", l = this;
		if (!o.length) {
			if (!this.options.wrap)return;
			o = this.$element.find(".item")[u]()
		}
		if (o.hasClass("active"))return this.sliding = !1;
		var c = o[0], f = t.Event("slide.bs.carousel", {relatedTarget: c, direction: s});
		if (this.$element.trigger(f), !f.isDefaultPrevented()) {
			if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var d = t(this.$indicators.children()[this.getItemIndex(o)]);
				d && d.addClass("active")
			}
			var h = t.Event("slid.bs.carousel", {relatedTarget: c, direction: s});
			return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
				o.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
					l.$element.trigger(h)
				}, 0)
			}).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), a && this.cycle(), this
		}
	};
	var r = t.fn.carousel;
	t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
		return t.fn.carousel = r, this
	};
	var i = function (n) {
		var r, i = t(this), o = t(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
		if (o.hasClass("carousel")) {
			var a = t.extend({}, o.data(), i.data()), s = i.attr("data-slide-to");
			s && (a.interval = !1), e.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault()
		}
	};
	t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), t(window).on("load", function () {
		t('[data-ride="carousel"]').each(function () {
			var n = t(this);
			e.call(n, n.data())
		})
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		var n, r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
		return t(r)
	}

	function n(e) {
		return this.each(function () {
			var n = t(this), i = n.data("bs.collapse"), o = t.extend({}, r.DEFAULTS, n.data(), "object" == typeof e && e);
			!i && o.toggle && "show" == e && (o.toggle = !1), i || n.data("bs.collapse", i = new r(this, o)), "string" == typeof e && i[e]()
		})
	}

	var r = function (e, n) {
		this.$element = t(e), this.options = t.extend({}, r.DEFAULTS, n), this.$trigger = t(this.options.trigger).filter('[href="#' + e.id + '"], [data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	r.VERSION = "3.3.1", r.TRANSITION_DURATION = 350, r.DEFAULTS = {
		toggle: !0,
		trigger: '[data-toggle="collapse"]'
	}, r.prototype.dimension = function () {
		var t = this.$element.hasClass("width");
		return t ? "width" : "height"
	}, r.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var e, i = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
			if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
				var o = t.Event("show.bs.collapse");
				if (this.$element.trigger(o), !o.isDefaultPrevented()) {
					i && i.length && (n.call(i, "hide"), e || i.data("bs.collapse", null));
					var a = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var s = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!t.support.transition)return s.call(this);
					var u = t.camelCase(["scroll", a].join("-"));
					this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[a](this.$element[0][u])
				}
			}
		}
	}, r.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var e = t.Event("hide.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var n = this.dimension();
				this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var i = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
			}
		}
	}, r.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, r.prototype.getParent = function () {
		return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, r) {
			var i = t(r);
			this.addAriaAndCollapsedClass(e(i), i)
		}, this)).end()
	}, r.prototype.addAriaAndCollapsedClass = function (t, e) {
		var n = t.hasClass("in");
		t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
	};
	var i = t.fn.collapse;
	t.fn.collapse = n, t.fn.collapse.Constructor = r, t.fn.collapse.noConflict = function () {
		return t.fn.collapse = i, this
	}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (r) {
		var i = t(this);
		i.attr("data-target") || r.preventDefault();
		var o = e(i), a = o.data("bs.collapse"), s = a ? "toggle" : t.extend({}, i.data(), {trigger: this});
		n.call(o, s)
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		e && 3 === e.which || (t(i).remove(), t(o).each(function () {
			var r = t(this), i = n(r), o = {relatedTarget: this};
			i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", o)))
		}))
	}

	function n(e) {
		var n = e.attr("data-target");
		n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
		var r = n && t(n);
		return r && r.length ? r : e.parent()
	}

	function r(e) {
		return this.each(function () {
			var n = t(this), r = n.data("bs.dropdown");
			r || n.data("bs.dropdown", r = new a(this)), "string" == typeof e && r[e].call(n)
		})
	}

	var i = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', a = function (e) {
		t(e).on("click.bs.dropdown", this.toggle)
	};
	a.VERSION = "3.3.1", a.prototype.toggle = function (r) {
		var i = t(this);
		if (!i.is(".disabled, :disabled")) {
			var o = n(i), a = o.hasClass("open");
			if (e(), !a) {
				"ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
				var s = {relatedTarget: this};
				if (o.trigger(r = t.Event("show.bs.dropdown", s)), r.isDefaultPrevented())return;
				i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
			}
			return !1
		}
	}, a.prototype.keydown = function (e) {
		if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
			var r = t(this);
			if (e.preventDefault(), e.stopPropagation(), !r.is(".disabled, :disabled")) {
				var i = n(r), a = i.hasClass("open");
				if (!a && 27 != e.which || a && 27 == e.which)return 27 == e.which && i.find(o).trigger("focus"), r.trigger("click");
				var s = " li:not(.divider):visible a", u = i.find('[role="menu"]' + s + ', [role="listbox"]' + s);
				if (u.length) {
					var l = u.index(e.target);
					38 == e.which && l > 0 && l--, 40 == e.which && l < u.length - 1 && l++, ~l || (l = 0), u.eq(l).trigger("focus")
				}
			}
		}
	};
	var s = t.fn.dropdown;
	t.fn.dropdown = r, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
		return t.fn.dropdown = s, this
	}, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var r = t(this), i = r.data("bs.tab");
			i || r.data("bs.tab", i = new n(this)), "string" == typeof e && i[e]()
		})
	}

	var n = function (e) {
		this.element = t(e)
	};
	n.VERSION = "3.3.1", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
		var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), r = e.data("target");
		if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
			var i = n.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}), a = t.Event("show.bs.tab", {relatedTarget: i[0]});
			if (i.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
				var s = t(r);
				this.activate(e.closest("li"), n), this.activate(s, s.parent(), function () {
					i.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
						type: "shown.bs.tab",
						relatedTarget: i[0]
					})
				})
			}
		}
	}, n.prototype.activate = function (e, r, i) {
		function o() {
			a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
		}

		var a = r.find("> .active"), s = i && t.support.transition && (a.length && a.hasClass("fade") || !!r.find("> .fade").length);
		a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
	};
	var r = t.fn.tab;
	t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
		return t.fn.tab = r, this
	};
	var i = function (n) {
		n.preventDefault(), e.call(t(this), "show")
	};
	t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), +function (t) {
	"use strict";
	function e() {
		var t = document.createElement("bootstrap"), e = {
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "oTransitionEnd otransitionend",
			transition: "transitionend"
		};
		for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
		return !1
	}

	t.fn.emulateTransitionEnd = function (e) {
		var n = !1, r = this;
		t(this).one("bsTransitionEnd", function () {
			n = !0
		});
		var i = function () {
			n || t(r).trigger(t.support.transition.end)
		};
		return setTimeout(i, e), this
	}, t(function () {
		t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
			bindType: t.support.transition.end,
			delegateType: t.support.transition.end,
			handle: function (e) {
				return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery), +function (t) {
	"use strict";
	function e(n, r) {
		var i = t.proxy(this.process, this);
		this.$body = t("body"), this.$scrollElement = t(t(n).is("body") ? window : n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", i), this.refresh(), this.process()
	}

	function n(n) {
		return this.each(function () {
			var r = t(this), i = r.data("bs.scrollspy"), o = "object" == typeof n && n;
			i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
		})
	}

	e.VERSION = "3.3.1", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, e.prototype.refresh = function () {
		var e = "offset", n = 0;
		t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
		var r = this;
		this.$body.find(this.selector).map(function () {
			var r = t(this), i = r.data("target") || r.attr("href"), o = /^#./.test(i) && t(i);
			return o && o.length && o.is(":visible") && [[o[e]().top + n, i]] || null
		}).sort(function (t, e) {
			return t[0] - e[0]
		}).each(function () {
			r.offsets.push(this[0]), r.targets.push(this[1])
		})
	}, e.prototype.process = function () {
		var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, o = this.targets, a = this.activeTarget;
		if (this.scrollHeight != n && this.refresh(), e >= r)return a != (t = o[o.length - 1]) && this.activate(t);
		if (a && e < i[0])return this.activeTarget = null, this.clear();
		for (t = i.length; t--;)a != o[t] && e >= i[t] && (!i[t + 1] || e <= i[t + 1]) && this.activate(o[t])
	}, e.prototype.activate = function (e) {
		this.activeTarget = e, this.clear();
		var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', r = t(n).parents("li").addClass("active");
		r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
	}, e.prototype.clear = function () {
		t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var r = t.fn.scrollspy;
	t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
		return t.fn.scrollspy = r, this
	}, t(window).on("load.bs.scrollspy.data-api", function () {
		t('[data-spy="scroll"]').each(function () {
			var e = t(this);
			n.call(e, e.data())
		})
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e, r) {
		return this.each(function () {
			var i = t(this), o = i.data("bs.modal"), a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
			o || i.data("bs.modal", o = new n(this, a)), "string" == typeof e ? o[e](r) : a.show && o.show(r)
		})
	}

	var n = function (e, n) {
		this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	n.VERSION = "3.3.1", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, n.prototype.toggle = function (t) {
		return this.isShown ? this.hide() : this.show(t)
	}, n.prototype.show = function (e) {
		var r = this, i = t.Event("show.bs.modal", {relatedTarget: e});
		this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
			var i = t.support.transition && r.$element.hasClass("fade");
			r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.options.backdrop && r.adjustBackdrop(), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in").attr("aria-hidden", !1), r.enforceFocus();
			var o = t.Event("shown.bs.modal", {relatedTarget: e});
			i ? r.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
				r.$element.trigger("focus").trigger(o)
			}).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
		}))
	}, n.prototype.hide = function (e) {
		e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
	}, n.prototype.enforceFocus = function () {
		t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		}, this))
	}, n.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
			27 == t.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, n.prototype.resize = function () {
		this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
	}, n.prototype.hideModal = function () {
		var t = this;
		this.$element.hide(), this.backdrop(function () {
			t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
		})
	}, n.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, n.prototype.backdrop = function (e) {
		var r = this, i = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var o = t.support.transition && i;
			if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", t.proxy(function (t) {
						t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
					}, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
			o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var a = function () {
				r.removeBackdrop(), e && e()
			};
			t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
		} else e && e()
	}, n.prototype.handleUpdate = function () {
		this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
	}, n.prototype.adjustBackdrop = function () {
		this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
	}, n.prototype.adjustDialog = function () {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
		})
	}, n.prototype.resetAdjustments = function () {
		this.$element.css({paddingLeft: "", paddingRight: ""})
	}, n.prototype.checkScrollbar = function () {
		this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
	}, n.prototype.setScrollbar = function () {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	}, n.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", "")
	}, n.prototype.measureScrollbar = function () {
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure", this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t), e
	};
	var r = t.fn.modal;
	t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
		return t.fn.modal = r, this
	}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
		var r = t(this), i = r.attr("href"), o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), a = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(i) && i}, o.data(), r.data());
		r.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
			t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
				r.is(":visible") && r.trigger("focus")
			})
		}), e.call(o, a, this)
	})
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var r = t(this), i = r.data("bs.tooltip"), o = "object" == typeof e && e, a = o && o.selector;
			(i || "destroy" != e) && (a ? (i || r.data("bs.tooltip", i = {}), i[a] || (i[a] = new n(this, o))) : i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof e && i[e]())
		})
	}

	var n = function (t, e) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
	};
	n.VERSION = "3.3.1", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {selector: "body", padding: 0}
	}, n.prototype.init = function (e, n, r) {
		this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
		for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
			var a = i[o];
			if ("click" == a)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
				var s = "hover" == a ? "mouseenter" : "focusin", u = "hover" == a ? "mouseleave" : "focusout";
				this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, n.prototype.getDefaults = function () {
		return n.DEFAULTS
	}, n.prototype.getOptions = function (e) {
		return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}), e
	}, n.prototype.getDelegateOptions = function () {
		var e = {}, n = this.getDefaults();
		return this._options && t.each(this._options, function (t, r) {
			n[t] != r && (e[t] = r)
		}), e
	}, n.prototype.enter = function (e) {
		var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
			"in" == n.hoverState && n.show()
		}, n.options.delay.show)) : n.show())
	}, n.prototype.leave = function (e) {
		var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
			"out" == n.hoverState && n.hide()
		}, n.options.delay.hide)) : n.hide()
	}, n.prototype.show = function () {
		var e = t.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);
			var r = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (e.isDefaultPrevented() || !r)return;
			var i = this, o = this.tip(), a = this.getUID(this.type);
			this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
			var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, u = /\s?auto?\s?/i, l = u.test(s);
			l && (s = s.replace(u, "") || "top"), o.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
			var c = this.getPosition(), f = o[0].offsetWidth, d = o[0].offsetHeight;
			if (l) {
				var h = s, p = this.options.container ? t(this.options.container) : this.$element.parent(), m = this.getPosition(p);
				s = "bottom" == s && c.bottom + d > m.bottom ? "top" : "top" == s && c.top - d < m.top ? "bottom" : "right" == s && c.right + f > m.width ? "left" : "left" == s && c.left - f < m.left ? "right" : s, o.removeClass(h).addClass(s)
			}
			var v = this.getCalculatedOffset(s, c, f, d);
			this.applyPlacement(v, s);
			var g = function () {
				var t = i.hoverState;
				i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
			};
			t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
		}
	}, n.prototype.applyPlacement = function (e, n) {
		var r = this.tip(), i = r[0].offsetWidth, o = r[0].offsetHeight, a = parseInt(r.css("margin-top"), 10), s = parseInt(r.css("margin-left"), 10);
		isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, t.offset.setOffset(r[0], t.extend({
			using: function (t) {
				r.css({top: Math.round(t.top), left: Math.round(t.left)})
			}
		}, e), 0), r.addClass("in");
		var u = r[0].offsetWidth, l = r[0].offsetHeight;
		"top" == n && l != o && (e.top = e.top + o - l);
		var c = this.getViewportAdjustedDelta(n, e, u, l);
		c.left ? e.left += c.left : e.top += c.top;
		var f = /top|bottom/.test(n), d = f ? 2 * c.left - i + u : 2 * c.top - o + l, h = f ? "offsetWidth" : "offsetHeight";
		r.offset(e), this.replaceArrow(d, r[0][h], f)
	}, n.prototype.replaceArrow = function (t, e, n) {
		this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
	}, n.prototype.setContent = function () {
		var t = this.tip(), e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
	}, n.prototype.hide = function (e) {
		function r() {
			"in" != i.hoverState && o.detach(), i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
		}

		var i = this, o = this.tip(), a = t.Event("hide.bs." + this.type);
		return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this)
	}, n.prototype.fixTitle = function () {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	}, n.prototype.hasContent = function () {
		return this.getTitle()
	}, n.prototype.getPosition = function (e) {
		e = e || this.$element;
		var n = e[0], r = "BODY" == n.tagName, i = n.getBoundingClientRect();
		null == i.width && (i = t.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
		var o = r ? {
			top: 0,
			left: 0
		} : e.offset(), a = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, s = r ? {
			width: t(window).width(),
			height: t(window).height()
		} : null;
		return t.extend({}, i, a, s, o)
	}, n.prototype.getCalculatedOffset = function (t, e, n, r) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - n / 2
		} : "top" == t ? {
			top: e.top - r,
			left: e.left + e.width / 2 - n / 2
		} : "left" == t ? {top: e.top + e.height / 2 - r / 2, left: e.left - n} : {
			top: e.top + e.height / 2 - r / 2,
			left: e.left + e.width
		}
	}, n.prototype.getViewportAdjustedDelta = function (t, e, n, r) {
		var i = {top: 0, left: 0};
		if (!this.$viewport)return i;
		var o = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var s = e.top - o - a.scroll, u = e.top + o - a.scroll + r;
			s < a.top ? i.top = a.top - s : u > a.top + a.height && (i.top = a.top + a.height - u)
		} else {
			var l = e.left - o, c = e.left + o + n;
			l < a.left ? i.left = a.left - l : c > a.width && (i.left = a.left + a.width - c)
		}
		return i
	}, n.prototype.getTitle = function () {
		var t, e = this.$element, n = this.options;
		return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
	}, n.prototype.getUID = function (t) {
		do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
		return t
	}, n.prototype.tip = function () {
		return this.$tip = this.$tip || t(this.options.template)
	}, n.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, n.prototype.enable = function () {
		this.enabled = !0
	}, n.prototype.disable = function () {
		this.enabled = !1
	}, n.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, n.prototype.toggle = function (e) {
		var n = this;
		e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
	}, n.prototype.destroy = function () {
		var t = this;
		clearTimeout(this.timeout), this.hide(function () {
			t.$element.off("." + t.type).removeData("bs." + t.type)
		})
	};
	var r = t.fn.tooltip;
	t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
		return t.fn.tooltip = r, this
	}
}(jQuery), +function (t) {
	"use strict";
	function e(e) {
		return this.each(function () {
			var r = t(this), i = r.data("bs.popover"), o = "object" == typeof e && e, a = o && o.selector;
			(i || "destroy" != e) && (a ? (i || r.data("bs.popover", i = {}), i[a] || (i[a] = new n(this, o))) : i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]())
		})
	}

	var n = function (t, e) {
		this.init("popover", t, e)
	};
	if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
	n.VERSION = "3.3.1", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
		return n.DEFAULTS
	}, n.prototype.setContent = function () {
		var t = this.tip(), e = this.getTitle(), n = this.getContent();
		t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
	}, n.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, n.prototype.getContent = function () {
		var t = this.$element, e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	}, n.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, n.prototype.tip = function () {
		return this.$tip || (this.$tip = t(this.options.template)), this.$tip
	};
	var r = t.fn.popover;
	t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
		return t.fn.popover = r, this
	}
}(jQuery), function () {
	angular.module("Fit.services", ["ngRoute", "ngResource", "growlNotifications", "angularFileUpload"]), this.Fit = angular.module("Fit", ["Fit.services"]), angular.module("Fit").config(["$httpProvider", function (t) {
		var e;
		return e = $('meta[name="csrf-token"]').attr("content"), t.defaults.headers.common["X-CSRF-TOKEN"] = e, t.interceptors.push("InterceptorService")
	}])
}.call(this), function () {
	angular.module("Fit").factory("Common", ["$window", "$http", function () {
		return {
			currentUser: {}, flashNotification: function (t, e) {
				return t.message = e, t.notify = !0, setTimeout(function () {
					return t.notify = !1
				}, 2e3)
			}, serverErrorHandler: function () {
				return alert("There was a server error, please reload the page and try again.")
			}, get_current_user: function () {
				return this.currentUser
			}, update_current_user: function (t) {
				return t ? (this.currentUser.id = t.id, this.currentUser.name = t.name, this.currentUser.email = t.email, this.currentUser.authorized = "true") : this.currentUser.authorized = "false"
			}
		}
	}])
}.call(this), function () {
	angular.module("Fit").controller("CommentsFormCtrl", ["$scope", "$routeParams", "CommentService", "Common", function (t, e, n, r) {
		var i, o;
		return t.notify = !1, t.init = function () {
			return this.commentService = new n(e.id, i)
		}, t.newComment = function (e, n) {
			return this.commentService.create({text: e, user_id: r.get_current_user().id}, o, n, t)
		}, o = function (t, e) {
			return e.comments.push(t)
		}, i = function () {
			return alert("There was a server error, please reload the page and try again.")
		}
	}])
}.call(this), function () {
	angular.module("Fit").controller("LikeFormCtrl", ["$scope", "$routeParams", "$http", "LikeService", "Common", function (t, e, n, r, i) {
		var o, a;
		return t.like = [], t.init = function () {
			return this.likeService = new r(o)
		}, t.newLike = function (t) {
			return this.likeService.create(t, {user_id: i.get_current_user().id})
		}, t.destroyLike = function (n) {
			var r, o, a;
			a = n.likes;
			for (r in a)o = a[r], o.user_id === i.get_current_user().id && (t.like = o);
			return this.likeService["delete"](t.like, n, e.id)
		}, o = function () {
			return alert("There was a server error, please reload the page and try again.")
		}, a = function (t, e) {
			return e.likes.push(t)
		}
	}])
}.call(this), function () {
	angular.module("Fit").controller("MediaIndexCtrl", ["$scope", "$routeParams", "$location", "$http", "$upload", "MediumService", "Common", function (t, e, n, r, i, o, a) {
		var s;
		return t.media = [], t.text = [], t.file = [], t.init = function () {
			return this.mediumService = new o(s), this.mediumService.all(t)
		}, t.selectMedium = function (t) {
			return n.url("/media/" + t.id)
		}, t.upload = function (e, n) {
			return i.upload({
				url: "/media.json",
				method: "POST",
				data: {text: n},
				file: e,
				fileFormDataName: "medium[image_video]",
				formDataAppender: function (t, e, n) {
					return angular.isArray(n) ? angular.forEach(n, function (n) {
						return t.append("medium[" + e + "]", n)
					}) : t.append("medium[" + e + "]", n)
				}
			}).progress(function (t) {
				return console.log("percent: " + parseInt(100 * t.loaded / t.total))
			}).success(function (e) {
				return t.media.push(e.medium)
			})
		}, t.chooseFile = function (e) {
			return t.file = e[0]
		}, t.userOwnsMedium = function (t) {
			return t.user_id === a.get_current_user().id ? !0 : void 0
		}, t.destroyMedium = function (e) {
			return this.mediumService["delete"](e, t)
		}, t.templates = [{
			name: "mediumNew.html",
			url: "templates/content/media/_form.html"
		}, {name: "mediumDestroy.html", url: "templates/content/media/_destroy.html"}], s = function () {
			return alert("There was a server error, please reload the page and try again.")
		}
	}])
}.call(this), function () {
	angular.module("Fit").controller("MediumShowCtrl", ["$scope", "$routeParams", "MediumService", "Common", "UserService", function (t, e, n, r, i) {
		var o, a;
		return t.medium = [], t.comments = [], t.likes = [], t.avatar = [], t.userHasLiked = "false", t.current_user = [], t.init = function () {
			var e;
			return e = new n(a), o(e), t.current_user = r.get_current_user().id
		}, t.$watch("likes", function () {
			var e, n, i, o;
			if (i = 0, 0 === t.likes.length)return t.userHasLiked = "false";
			o = t.likes;
			for (e in o)n = o[e], parseInt(n) === r.get_current_user().id && (i = 1);
			return t.userHasLiked = 1 === i ? "true" : "false"
		}, !0), t.set_avatar = function () {
			var n;
			return n = new i(a), n.set_avatar(e.id, t), console.log("Set avatar")
		}, o = function (n) {
			return n.find(e.id).$promise.then(function (e) {
				return t.medium = e.medium, t.avatar = e.medium.user.avatar, t.comments = e.medium.comments, t.likes = e.medium.likes
			}, function () {
				return a()
			})
		}, t.templates = [{
			name: "commentsShow.html",
			url: "templates/content/comments/_show.html"
		}, {name: "commentsForm.html", url: "templates/content/comments/_form.html"}, {
			name: "likesForm.html",
			url: "templates/content/likes/_form.html"
		}, {name: "likeDestroy.html", url: "templates/content/likes/_destroy.html"}], a = function () {
			return alert("There was a server error, please reload the page and try again.")
		}
	}])
}.call(this), function () {
	angular.module("Fit").controller("DashboardCtrl", ["$scope", "$location", "$http", "UserService", "Common", "FeedService", function (t, e, n, r, i, o) {
		var a;
		return t.users = [], t.feed = [], a = i.serverErrorHandler, t.init = function () {
			return this.userService = new r(a), this.feedService = new o(a), this.userService.all(t), this.feedService.all(t)
		}, t.select_medium = function (t) {
			return e.url("/media/" + t.id)
		}
	}])
}.call(this), function () {
	angular.module("Fit").controller("SessionCtrl", ["$scope", "$location", "$http", "UserService", "Common", "SessionService", "$window", function (t, e, n, r, i, o) {
		var a;
		return a = i.serverErrorHandler, t.remember_me = !1, t.email = [], t.password = [], t.message = [], t.sessionService = [], t.init = function () {
			return this.userService = new r(a), t.sessionService = new o(a)
		}, t.init_current_user = function (t) {
			return i.update_current_user(t)
		}, t.sign_in = function (e, n) {
			return t.sessionService.login(t, {email: e, password: n})
		}, t.sign_out = function () {
			return t.sessionService = new o(a), t.sessionService.logout(t, i.get_current_user())
		}, t.create = function (e) {
			return this.userService.createUser(e, t)
		}
	}])
}.call(this), function () {
	angular.module("Fit").controller("FollowFormCtrl", ["$scope", "$routeParams", "RelationshipService", "Common", function (t, e, n, r) {
		var i;
		return i = r.serverErrorHandler, t.current_user = r.get_current_user(), t.init = function () {
			return this.relationshipService = new n(i)
		}, t.follow = function (e, n) {
			return this.relationshipService.follow(e, n, t)
		}, t.unFollow = function (e, n) {
			return this.relationshipService.unFollow(e, n, t)
		}
	}])
}.call(this), function () {
	angular.module("Fit").controller("ShowFollowCtrl", ["$scope", "$routeParams", "$http", "RelationshipService", "Common", function (t, e, n, r, i) {
		var o;
		return t.user = [], t.users = [], o = i.serverErrorHandler, t.init = function () {
			var n;
			return n = new r(o), "following" === e.type ? n.allFollowing(e.id, e.type, t) : n.allFollowers(e.id, e.type, t)
		}
	}])
}.call(this), function () {
	angular.module("Fit").controller("UserEditCtrl", ["$scope", "$location", "$http", "UserService", "Common", "SessionService", "$window", function (t, e, n, r, i, o) {
		var a;
		return a = i.serverErrorHandler, t.message = [], t.user = [], t.init = function () {
			return this.userService = new r(a), this.sessionService = new o(a), t.user = i.get_current_user()
		}, t.update = function (e) {
			return console.log(e), this.userService.updateUser(e, e.id, t)
		}
	}])
}.call(this), function () {
	angular.module("Fit").controller("UsersIndexCtrl", ["$scope", "$http", "Common", "UserService", "RoleService", function (t, e, n, r, i) {
		var o;
		return t.users = [], t.roles = [], t.notify = !1, o = n.serverErrorHandler, t.init = function () {
			return this.userService = new r(o), this.roleService = new i(o), this.userService.all(t), this.roleService.all(t)
		}, t.updateUser = function (e, n) {
			return this.userService.updateRole(e, {role: n.key}, t)
		}
	}])
}.call(this), function () {
	angular.module("Fit").controller("UsersShowCtrl", ["$scope", "$routeParams", "$location", "UserService", "Common", "MediumService", function (t, e, n, r, i, o) {
		var a;
		return t.user = [], t.media = [], t.followers = [], t.following = [], t.isFollowing = !1, a = i.serverErrorHandler, t.init = function () {
			return this.userService = new r(a), this.mediumService = new o(a), this.userService.find(e.id, t)
		}, t.selectMedium = function (t) {
			return n.url("/media/" + t.id)
		}, t.userOwnsMedium = function (t) {
			return t.user_id === i.get_current_user().id ? !0 : void 0
		}, t.destroyMedium = function (e) {
			return this.mediumService["delete"](e, t)
		}, t.templates = [{name: "mediumDestroy.html", url: "templates/content/media/_destroy.html"}]
	}])
}.call(this), function () {
	angular.module("Fit").config(["$routeProvider", "$locationProvider", function (t, e) {
		return t.when("/", {
			templateUrl: "templates/dashboard/index.html",
			controller: "DashboardCtrl"
		}).when("/users/sign_in", {
			templateUrl: "templates/devise/sessions/new.html",
			controller: "SessionCtrl"
		}).when("/users/sign_up", {
			templateUrl: "templates/devise/registrations/new.html",
			controller: "SessionCtrl"
		}).when("/users/edit", {
			templateUrl: "templates/devise/registrations/edit.html",
			controller: "UserEditCtrl"
		}).when("/users", {
			templateUrl: "templates/users/index.html",
			controller: "UsersIndexCtrl"
		}).when("/users/:id", {
			templateUrl: "templates/users/show.html",
			controller: "UsersShowCtrl"
		}).when("/users/:id/:type", {
			templateUrl: "templates/users/show_follow.html",
			controller: "ShowFollowCtrl"
		}).when("/users/:id/:type", {
			templateUrl: "templates/users/show_follow.html",
			controller: "ShowFollowCtrl"
		}).when("/media", {
			templateUrl: "templates/content/media/index.html",
			controller: "MediaIndexCtrl"
		}).when("/media/:id", {
			templateUrl: "templates/content/media/show.html",
			controller: "MediumShowCtrl"
		}).otherwise({redirectTo: "/"}), e.html5Mode(!0)
	}])
}.call(this), function () {
	angular.module("Fit").factory("CommentService", ["$resource", "$http", "$routeParams", "Common", function (t, e, n, r) {
		var i;
		return i = function () {
			function n(n) {
				var r;
				this.service = t("/media/:id/comments/:comment_id.json", {
					id: "@id",
					comment_id: "@commentId"
				}, {
					create: {method: "POST"},
					"delete": {method: "DELETE"}
				}), this.errorHandler = n, r = e.defaults.headers, r.patch = r.patch || {}, r.patch["Content-Type"] = "application/json"
			}

			return n.prototype.create = function (t, e, n, i) {
				return new this.service({comment: t}).$save({id: n.id}, function (t) {
					return e(t.comment, n)
				}, function (t) {
					return r.flashNotification(i, t.data.comments[0])
				})
			}, n.prototype["delete"] = function () {
			}, n
		}()
	}])
}.call(this), function () {
	angular.module("Fit").factory("FeedService", ["$resource", "$http", "$routeParams", function (t, e) {
		var n;
		return n = function () {
			function n(n) {
				var r;
				this.service = t("/feed/:id.json", {id: "@id"}, {
					query: {
						method: "GET",
						isArray: !1
					}
				}), this.errorHandler = n, r = e.defaults.headers, r.patch = r.patch || {}, r.patch["Content-Type"] = "application/json"
			}

			return n.prototype.all = function (t) {
				return this.service.query(function (e) {
					return t.feed = e.feed
				}, this.errorHandler)
			}, n
		}()
	}])
}.call(this), function () {
	this.Fit.factory("InterceptorService", ["$q", "$rootScope", "$location", function (t, e, n) {
		return {
			responseError: function (r) {
				return 401 === r.status ? (e.$broadcast("event:unauthorized"), n.path("/users/sign_in"), r) : t.reject(r)
			}
		}
	}])
}.call(this), function () {
	angular.module("Fit").factory("LikeService", ["$resource", "$http", "$routeParams", "Common", function (t, e, n, r) {
		var i;
		return i = function () {
			function n(n) {
				var r;
				this.service = t("/media/:id/likes/:like_id.json", {
					id: "@id",
					like_id: "@likeId"
				}, {
					query: {method: "GET", isArray: !1},
					create: {method: "POST"},
					"delete": {method: "DELETE"}
				}), this.errorHandler = n, r = e.defaults.headers, r.patch = r.patch || {}, r.patch["Content-Type"] = "application/json"
			}

			return n.prototype.create = function (t, e) {
				return new this.service({like: e}).$save({id: t.id}, function () {
					return t.likes.push(e.user_id)
				}, this.errorHandler)
			}, n.prototype["delete"] = function (t, e, n) {
				return (new this.service).$delete({like_id: 1, id: n}, function () {
					var n, i, o;
					i = e.likes, o = [];
					for (n in i)t = i[n], o.push(parseInt(t) === r.get_current_user().id ? e.likes.splice(n, 1) : void 0);
					return o
				}, this.errorHandler)
			}, n
		}()
	}])
}.call(this), function () {
	angular.module("Fit").factory("MediumService", ["$resource", "$http", "$routeParams", function (t, e) {
		var n;
		return n = function () {
			function n(n) {
				var r;
				this.service = t("/media/:id.json", {id: "@id"}, {
					all: {method: "GET", isArray: !1},
					create: {method: "POST"}
				}), this.errorHandler = n, r = e.defaults.headers, r.patch = r.patch || {}, r.patch["Content-Type"] = "application/json"
			}

			return n.prototype.create = function (t, e) {
				return new this.service({medium: t}).$save(function (t) {
					return e(t)
				}, this.errorHandler)
			}, n.prototype["delete"] = function (t, e) {
				return (new this.service).$delete({id: t.id}, function (n) {
					var r, i, o;
					i = e.media, o = [];
					for (r in i)t = i[r], o.push(t.id === n.medium.id ? e.media.splice(r, 1) : void 0);
					return o
				}, this.errorHandler)
			}, n.prototype.find = function (t) {
				return this.service.get({id: t}, function () {
					return null
				}, this.errorHandler)
			}, n.prototype.all = function (t) {
				return this.service.query(function (e) {
					return t.media = e
				}, this.errorHandler)
			}, n
		}()
	}])
}.call(this), function () {
	angular.module("Fit").factory("RelationshipService", ["$resource", "$http", "$routeParams", "Common", function (t, e, n, r) {
		var i;
		return i = function () {
			function n(n) {
				var r;
				this.service = t("/users/:id/:relationship_type.json", {
					id: "@id",
					relationship_type: "@type"
				}, {
					query: {method: "GET", isArray: !1},
					create: {method: "POST"}
				}), this.errorHandler = n, r = e.defaults.headers, r.patch = r.patch || {}, r.patch["Content-Type"] = "application/json"
			}

			return n.prototype.allFollowers = function (t, e, n) {
				return this.service.query({id: t, relationship_type: e}, function (t) {
					return n.user = t.user, n.users = t.users
				}, this.errorHandler)
			}, n.prototype.allFollowing = function (t, e, n) {
				return this.service.query({id: t, relationship_type: e}, function (t) {
					return n.user = t.user, n.users = t.users
				}, this.errorHandler)
			}, n.prototype.follow = function (t, n, i) {
				return e({
					method: "POST",
					url: "/relationships.json",
					data: {user_to_follow_id: t.id}
				}).success(function () {
					return n.push({id: r.get_current_user().id}), i.is_following = !0
				}).error(function () {
					return this.errorHandler
				})
			}, n.prototype.unFollow = function (t, n, i) {
				return e({method: "DELETE", url: "/relationships/" + t.id + ".json"}).success(function () {
					var t, e;
					for (e in n)t = n[e], t.id === r.get_current_user().id && n.splice(e, 1);
					return i.is_following = !1
				}).error(function () {
					return this.errorHandler
				})
			}, n
		}()
	}])
}.call(this), function () {
	angular.module("Fit").factory("RoleService", ["$resource", "$http", "$routeParams", function (t, e) {
		var n;
		return n = function () {
			function n(n) {
				var r;
				this.service = t("/roles/:id.json", {id: "@id"}, {
					query: {method: "GET", isArray: !0},
					create: {method: "POST"}
				}), this.errorHandler = n, r = e.defaults.headers, r.patch = r.patch || {}, r.patch["Content-Type"] = "application/json"
			}

			return n.prototype.all = function (t) {
				return this.service.query(function (e) {
					return t.roles = e
				}, this.errorHandler)
			}, n
		}()
	}])
}.call(this), function () {
	angular.module("Fit").factory("SessionService", ["$resource", "$http", "$routeParams", "Common", "$window", "$location", function (t, e, n, r, i) {
		var o;
		return o = function () {
			function n(n) {
				var r;
				this.service = t("/users/:param.json", {}, {
					login: {method: "POST"},
					logout: {method: "DELETE"}
				}), this.errorHandler = n, r = e.defaults.headers, r.patch = r.patch || {}, r.patch["Content-Type"] = "application/json"
			}

			return n.prototype.login = function (t, e) {
				return new this.service({user: e}).$save({param: "sign_in"}, function (e) {
					return e.error && r.flashNotification(t, e.error), e.user ? r.update_current_user(e.user) && (i.location.href = "/") : void 0
				}, this.errorHandler)
			}, n.prototype.logout = function (t, e) {
				return new this.service({user: e}).$delete({param: "sign_out"}, function (e) {
					return e.error && r.flashNotification(t, e.error), i.location.href = "/"
				}, this.errorHandler)
			}, n
		}()
	}])
}.call(this), function () {
	angular.module("Fit").factory("UserService", ["$resource", "$http", "$routeParams", "Common", function (t, e, n, r) {
		var i;
		return i = function () {
			function n(n) {
				var r;
				this.service = t("/users/:id/:option.json", {}, {
					query: {method: "GET", isArray: !1},
					create: {method: "POST"},
					update: {method: "PATCH"},
					save: {method: "POST"},
					avatar: {method: "POST"}
				}), this.errorHandler = n, r = e.defaults.headers, r.patch = r.patch || {}, r.patch["Content-Type"] = "application/json"
			}

			return n.prototype.all = function (t) {
				return this.service.query(function (e) {
					return t.users = e.users
				}, this.errorHandler)
			}, n.prototype.find = function (t, e) {
				return this.service.get({id: t}, function (t) {
					return e.media = t.media, e.user = t.user, e.followers = t.followers, e.following = t.following, e.is_following = t.is_following
				}, this.errorHandler)
			}, n.prototype.updateRole = function (t, e, n) {
				return new this.service({user: e}).$update({id: t.id}, function (e) {
					return t.id === e.user.id ? (t.role = e.user.role, r.flashNotification(n, "Updated role for user: " + t.name)) : void 0
				}, this.errorHandler)
			}, n.prototype.updateUser = function (t, e) {
				return delete t.id, delete t.authorized, new this.service({user: t}).$update({id: e}, function (t) {
					return console.log(t)
				}, this.errorHandler)
			}, n.prototype.createUser = function (t) {
				return new this.service({user: t}).$save({id: ""}, function (t) {
					return console.log(t)
				}, this.errorHandler)
			}, n.prototype.set_avatar = function (t, e) {
				return new this.service({avatar: {medium_id: t}}).$avatar({
					id: e.current_user,
					option: "set_avatar"
				}, function (t) {
					return console.log(t)
				})
			}, n
		}()
	}])
}.call(this), function () {
	this.GoogleAnalytics = function () {
		function t() {
		}

		return t.load = function () {
			var e, n;
			return window._gaq = [], window._gaq.push(["_setAccount", t.analyticsId()]), n = document.createElement("script"), n.type = "text/javascript", n.async = !0, n.src = ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js", e = document.getElementsByTagName("script")[0], e.parentNode.insertBefore(n, e), "undefined" != typeof Turbolinks && Turbolinks.supported ? document.addEventListener("page:change", function () {
				return t.trackPageview()
			}, !0) : t.trackPageview()
		}, t.trackPageview = function (e) {
			return t.isLocalRequest() ? void 0 : (window._gaq.push(e ? ["_trackPageview", e] : ["_trackPageview"]), window._gaq.push(["_trackPageLoadTime"]))
		}, t.isLocalRequest = function () {
			return t.documentDomainIncludes("local")
		}, t.documentDomainIncludes = function (t) {
			return -1 !== document.domain.indexOf(t)
		}, t.analyticsId = function () {
			return "1"
		}, t
	}(), GoogleAnalytics.load()
}.call(this), function () {
}.call(this);