/** grapesjs-style-bg - 2.0.1 */
!function(e, t) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports["grapesjs-style-bg"] = t() : e["grapesjs-style-bg"] = t()
}('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : this, (() => (() => {
    var e = {
        180 : function(e) {
            var t;
            'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window && window, t = () => (() => {
                var e = {
                    9 : function(e) {
                        "undefined" != typeof self && self, 1 && (e.exports = function(e) {
                            function t(r) {
                                if (n[r]) return n[r].exports;
                                var o = n[r] = {i : r, l : !1, exports : {}};
                                return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                            }

                            var n = {};
                            return t.m = e, t.c = n, t.d = function(e, n, r) {
                                t.o(e, n) || Object.defineProperty(e, n, {configurable : !1, enumerable : !0, get : r})
                            }, t.n = function(e) {
                                var n = e && e.__esModule ? function() {
                                    return e.default
                                } : function() {
                                    return e
                                };
                                return t.d(n, "a", n), n
                            }, t.o = function(e, t) {
                                return Object.prototype.hasOwnProperty.call(e, t)
                            }, t.p = "", t(t.s = 1)
                        }([function(e, t, n) {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {value : !0}), t.on = function(e, t, n) {
                                t = t.split(/\s+/);
                                for (var r = 0; r < t.length; ++r) e.addEventListener(t[r], n)
                            }, t.off = function(e, t, n) {
                                t = t.split(/\s+/);
                                for (var r = 0; r < t.length; ++r) e.removeEventListener(t[r], n)
                            }, t.isFunction = function(e) {
                                return "function" == typeof e
                            }, t.isDef = function(e) {
                                return void 0 !== e
                            }, t.getPointerEvent = function(e) {
                                return e.touches && e.touches[0] || e
                            }
                        }, function(e, t, n) {
                            "use strict";
                            var r = function(e) {
                                return e && e.__esModule ? e : {default : e}
                            }(n(2));
                            e.exports = function(e) {
                                return new r.default(e)
                            }
                        }, function(e, t, n) {
                            "use strict";

                            function r(e) {
                                return e && e.__esModule ? e : {default : e}
                            }

                            function o(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }

                            function i(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }

                            Object.defineProperty(t, "__esModule", {value : !0});
                            var a  = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                    }
                                }

                                return function(t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t
                                }
                            }(), l = r(n(3)), c = r(n(4)), u = n(0), s = function(e, t) {
                                return e.position - t.position
                            }, d   = function(e) {
                                return e + "-gradient("
                            }, p   = function(e) {
                                function t() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    o(this, t);
                                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                                    e = Object.assign({}, e);
                                    var r = {
                                        pfx        : "grp",
                                        el         : ".grp",
                                        colorEl    : "",
                                        min        : 0,
                                        max        : 100,
                                        direction  : "90deg",
                                        type       : "linear",
                                        height     : "30px",
                                        width      : "100%",
                                        emptyColor : "#000",
                                        onValuePos : function(e) {
                                            return parseInt(e)
                                        }
                                    };
                                    for (var a in r) a in e || (e[a] = r[a]);
                                    var l = e.el;
                                    if (!((l = "string" == typeof l ? document.querySelector(l) : l) instanceof HTMLElement)) throw"Element not found, given " + l;
                                    return n.el = l, n.handlers = [], n.options = e, n.on("handler:color:change", (function(e, t) {
                                        return n.change(t)
                                    })), n.on("handler:position:change", (function(e, t) {
                                        return n.change(t)
                                    })), n.on("handler:remove", (function(e) {
                                        return n.change(1)
                                    })), n.on("handler:add", (function(e) {
                                        return n.change(1)
                                    })), n.render(), n
                                }

                                return function(e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                    e.prototype = Object.create(t && t.prototype, {
                                        constructor : {
                                            value        : e,
                                            enumerable   : !1,
                                            writable     : !0,
                                            configurable : !0
                                        }
                                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                                }(t, e), a(t, [{
                                    key : "destroy", value : function() {
                                        var e = this;
                                        this.clear(), this.e = {}, ["el", "handlers", "options", "colorPicker"].forEach((function(t) {
                                            return e[t] = 0
                                        })), ["previewEl", "wrapperEl", "sandEl"].forEach((function(t) {
                                            var n = e[t];
                                            n && n.parentNode && n.parentNode.removeChild(n), delete e[t]
                                        }))
                                    }
                                }, {
                                    key : "setColorPicker", value : function(e) {
                                        this.colorPicker = e
                                    }
                                }, {
                                    key : "getValue", value : function(e, t) {
                                        var n = this.getColorValue(), r = e || this.getType(),
                                            o = ["top", "left", "bottom", "right", "center"],
                                            i = t || this.getDirection();
                                        return ["linear", "repeating-linear"].indexOf(r) >= 0 && o.indexOf(i) >= 0 && (i = "center" === i ? "to right" : "to " + i), ["radial", "repeating-radial"].indexOf(r) >= 0 && o.indexOf(i) >= 0 && (i = "circle at " + i), n ? r + "-gradient(" + i + ", " + n + ")" : ""
                                    }
                                }, {
                                    key : "getSafeValue", value : function(e, t) {
                                        var n = this.previewEl, r = this.getValue(e, t);
                                        if (!this.sandEl && (this.sandEl = document.createElement("div")), !n || !r) return "";
                                        for (var o                          = this.sandEl.style, i = [r].concat(function(e) {
                                            if (Array.isArray(e)) {
                                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                                return n
                                            }
                                            return Array.from(e)
                                        }(this.getPrefixedValues(e, t))), a = void 0, l = 0; l < i.length && (a = i[l], o.backgroundImage = a, o.backgroundImage != a); l++) ;
                                        return o.backgroundImage
                                    }
                                }, {
                                    key : "setValue", value : function() {
                                        var e = this,
                                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            r = this.type, o = this.direction, i = t.indexOf("(") + 1,
                                            a = t.lastIndexOf(")"), l = t.substring(i, a), c = l.split(/,(?![^(]*\)) /);
                                        if (this.clear(n), l) {
                                            c.length > 2 && (o = c.shift());
                                            var u = void 0;
                                            ["repeating-linear", "repeating-radial", "linear", "radial"].forEach((function(e) {
                                                t.indexOf(d(e)) > -1 && !u && (u = 1, r = e)
                                            })), this.setDirection(o, n), this.setType(r, n), c.forEach((function(t) {
                                                var r = t.split(" "), o = parseFloat(r.pop()), i = r.join("");
                                                e.addHandler(o, i, 0, n)
                                            })), this.updatePreview()
                                        } else this.updatePreview()
                                    }
                                }, {
                                    key : "getColorValue", value : function() {
                                        var e = this.handlers;
                                        return e.sort(s), (e = 1 == e.length ? [e[0], e[0]] : e).map((function(e) {
                                            return e.getValue()
                                        })).join(", ")
                                    }
                                }, {
                                    key : "getPrefixedValues", value : function(e, t) {
                                        var n = this.getValue(e, t);
                                        return ["-moz-", "-webkit-", "-o-", "-ms-"].map((function(e) {
                                            return "" + e + n
                                        }))
                                    }
                                }, {
                                    key : "change", value : function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        this.updatePreview(), !t.silent && this.emit("change", e)
                                    }
                                }, {
                                    key : "setDirection", value : function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        this.options.direction = e;
                                        var n = t.complete, r = void 0 === n ? 1 : n;
                                        this.change(r, t)
                                    }
                                }, {
                                    key : "getDirection", value : function() {
                                        return this.options.direction
                                    }
                                }, {
                                    key : "setType", value : function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        this.options.type = e;
                                        var n = t.complete, r = void 0 === n ? 1 : n;
                                        this.change(r, t)
                                    }
                                }, {
                                    key : "getType", value : function() {
                                        return this.options.type
                                    }
                                }, {
                                    key : "addHandler", value : function(e, t) {
                                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                            o = new c.default(this, e, t, n, r);
                                        return !r.silent && this.emit("handler:add", o), o
                                    }
                                }, {
                                    key : "getHandler", value : function(e) {
                                        return this.handlers[e]
                                    }
                                }, {
                                    key : "getHandlers", value : function() {
                                        return this.handlers
                                    }
                                }, {
                                    key : "clear", value : function() {
                                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this.handlers, n = t.length - 1; n >= 0; n--) t[n].remove(e)
                                    }
                                }, {
                                    key : "getSelected", value : function() {
                                        for (var e = this.getHandlers(), t = 0; t < e.length; t++) {
                                            var n = e[t];
                                            if (n.isSelected()) return n
                                        }
                                        return null
                                    }
                                }, {
                                    key : "updatePreview", value : function() {
                                        var e = this.previewEl;
                                        e && (e.style.backgroundImage = this.getValue("linear", "to right"))
                                    }
                                }, {
                                    key : "initEvents", value : function() {
                                        var e = this, t = this.previewEl;
                                        t && (0, u.on)(t, "click", (function(n) {
                                            var r = e.options, o = r.min, i = r.max,
                                                a = {w : t.clientWidth, h : t.clientHeight},
                                                l = n.offsetX - t.clientLeft, c = n.offsetY - t.clientTop,
                                                u = l / a.w * 100;
                                            if (!(u > i || u < o || c > a.h || c < 0)) {
                                                var s = document.createElement("canvas"), d = s.getContext("2d");
                                                s.width = a.w, s.height = a.h;
                                                var p = d.createLinearGradient(0, 0, a.w, a.h);
                                                e.getHandlers().forEach((function(e) {
                                                    return p.addColorStop(e.position / 100, e.color)
                                                })), d.fillStyle = p, d.fillRect(0, 0, s.width, s.height), s.style.background = "black";
                                                var f = s.getContext("2d").getImageData(l, c, 1, 1).data,
                                                    h = "rgba(" + f[0] + ", " + f[1] + ", " + f[2] + ", " + f[3] + ")",
                                                    v = "rgba(0, 0, 0, 0)" == h ? r.emptyColor : h;
                                                e.addHandler(u, v)
                                            }
                                        }))
                                    }
                                }, {
                                    key : "render", value : function() {
                                        var e = this.options, t = this.el, n = e.pfx, r = e.height, o = e.width;
                                        if (t) {
                                            var i = n + "-wrapper", a = n + "-preview";
                                            t.innerHTML = '\n      <div class="' + i + '">\n        <div class="' + a + '"></div>\n      </div>\n    ';
                                            var l = t.querySelector("." + i), c = t.querySelector("." + a), u = l.style;
                                            u.position = "relative", this.wrapperEl = l, this.previewEl = c, r && (u.height = r), o && (u.width = o), this.initEvents(), this.updatePreview()
                                        }
                                    }
                                }]), t
                            }(l.default);
                            t.default = p
                        }, function(e, t, n) {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {value : !0});
                            var r  = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                    }
                                }

                                return function(t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t
                                }
                            }(), o = function() {
                                function e() {
                                    !function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e)
                                }

                                return r(e, [{
                                    key : "on", value : function(e, t, n) {
                                        var r = this.e || (this.e = {});
                                        return (r[e] || (r[e] = [])).push({fn : t, ctx : n}), this
                                    }
                                }, {
                                    key : "once", value : function(e, t, n) {
                                        function r() {
                                            o.off(e, r), t.apply(n, arguments)
                                        }

                                        var o = this;
                                        return r._ = t, this.on(e, r, n)
                                    }
                                }, {
                                    key : "emit", value : function(e) {
                                        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, t);
                                        return this
                                    }
                                }, {
                                    key : "off", value : function(e, t) {
                                        var n = this.e || (this.e = {}), r = n[e], o = [];
                                        if (r && t) for (var i = 0, a = r.length; i < a; i++) r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
                                        return o.length ? n[e] = o : delete n[e], this
                                    }
                                }]), e
                            }();
                            t.default = o
                        }, function(e, t, n) {
                            "use strict";

                            function r(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }

                            Object.defineProperty(t, "__esModule", {value : !0});
                            var o  = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                    }
                                }

                                return function(t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t
                                }
                            }(), i = n(0), a = function() {
                                function e(t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "black",
                                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                                    r(this, e), t.getHandlers().push(this), this.gp = t, this.position = n, this.color = o, this.selected = 0, this.render(), i && this.select(a)
                                }

                                return o(e, [{
                                    key : "toJSON", value : function() {
                                        return {position : this.position, selected : this.selected, color : this.color}
                                    }
                                }, {
                                    key : "setColor", value : function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                                        this.color = e, this.emit("handler:color:change", this, t)
                                    }
                                }, {
                                    key : "setPosition", value : function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                            n = this.getEl();
                                        this.position = e, n && (n.style.left = e + "%"), this.emit("handler:position:change", this, t)
                                    }
                                }, {
                                    key : "getColor", value : function() {
                                        return this.color
                                    }
                                }, {
                                    key : "getPosition", value : function() {
                                        var e = this.position, t = this.gp.options.onValuePos;
                                        return (0, i.isFunction)(t) ? t(e) : e
                                    }
                                }, {
                                    key : "isSelected", value : function() {
                                        return !!this.selected
                                    }
                                }, {
                                    key : "getValue", value : function() {
                                        return this.getColor() + " " + this.getPosition() + "%"
                                    }
                                }, {
                                    key : "select", value : function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            t = this.getEl(), n = this.gp.getHandlers();
                                        !e.keepSelect && n.forEach((function(e) {
                                            return e.deselect()
                                        })), this.selected = 1;
                                        var r = this.getSelectedCls();
                                        t && (t.className += " " + r), this.emit("handler:select", this)
                                    }
                                }, {
                                    key : "deselect", value : function() {
                                        var e = this.getEl();
                                        this.selected = 0;
                                        var t = this.getSelectedCls();
                                        e && (e.className = e.className.replace(t, "").trim()), this.emit("handler:deselect", this)
                                    }
                                }, {
                                    key : "getSelectedCls", value : function() {
                                        return this.gp.options.pfx + "-handler-selected"
                                    }
                                }, {
                                    key : "remove", value : function() {
                                        var e = this,
                                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            n = this.cpFn, r = this.getEl(), o = this.gp.getHandlers(),
                                            a = o.splice(o.indexOf(this), 1)[0];
                                        return r && r.parentNode.removeChild(r), !t.silent && this.emit("handler:remove", a), (0, i.isFunction)(n) && n(this), ["el", "gp"].forEach((function(t) {
                                            return e[t] = 0
                                        })), a
                                    }
                                }, {
                                    key : "getEl", value : function() {
                                        return this.el
                                    }
                                }, {
                                    key : "initEvents", value : function() {
                                        var e = this, t = this.getEl(), n = this.gp.previewEl, r = this.gp.options,
                                            o = r.min, a = r.max, l = t.querySelector("[data-toggle=handler-close]"),
                                            c = t.querySelector("[data-toggle=handler-color-c]"),
                                            u = t.querySelector("[data-toggle=handler-color-wrap]"),
                                            s = t.querySelector("[data-toggle=handler-color]"),
                                            d = t.querySelector("[data-toggle=handler-drag]"), p = function(t) {
                                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                                    r = t.target.value;
                                                e.setColor(r, n), u && (u.style.backgroundColor = r)
                                            };
                                        if (c && (0, i.on)(c, "click", (function(e) {
                                            return e.stopPropagation()
                                        })), l && (0, i.on)(l, "click", (function(t) {
                                            t.stopPropagation(), e.remove()
                                        })), s && ((0, i.on)(s, "change", p), (0, i.on)(s, "input", (function(e) {
                                            return p(e, 0)
                                        }))), d) {
                                            var f = 0, h = 0, v = 0, g = {}, y = {}, m = {}, b = function(t) {
                                                var n = (0, i.getPointerEvent)(t);
                                                v = 1, m.x = n.clientX - y.x, m.y = n.clientY - y.y, f = 100 * m.x, f /= g.w, f = (f = (f = h + f) < o ? o : f) > a ? a : f, e.setPosition(f, 0), e.emit("handler:drag", e, f), (0, i.isDef)(t.button) && 0 === t.which && k(t)
                                            }, k  = function t(n) {
                                                (0, i.off)(document, "touchmove mousemove", b), (0, i.off)(document, "touchend mouseup", t), v && (v = 0, e.setPosition(f), e.emit("handler:drag:end", e, f))
                                            };
                                            (0, i.on)(d, "touchstart mousedown", (function(t) {
                                                if (!(0, i.isDef)(t.button) || 0 === t.button) {
                                                    e.select();
                                                    var r = (0, i.getPointerEvent)(t);
                                                    h = e.position, g.w = n.clientWidth, g.h = n.clientHeight, y.x = r.clientX, y.y = r.clientY, (0, i.on)(document, "touchmove mousemove", b), (0, i.on)(document, "touchend mouseup", k), e.emit("handler:drag:start", e)
                                                }
                                            })), (0, i.on)(d, "click", (function(e) {
                                                return e.stopPropagation()
                                            }))
                                        }
                                    }
                                }, {
                                    key : "emit", value : function() {
                                        var e;
                                        (e = this.gp).emit.apply(e, arguments)
                                    }
                                }, {
                                    key : "render", value : function() {
                                        var e = this.gp, t = e.options, n = e.previewEl, r = e.colorPicker, o = t.pfx,
                                            i = t.colorEl, a = this.getColor();
                                        if (n) {
                                            var l = document.createElement("div"), c = l.style, u = o + "-handler";
                                            return l.className = u, l.innerHTML = '\n      <div class="' + u + '-close-c">\n        <div class="' + u + '-close" data-toggle="handler-close">&Cross;</div>\n      </div>\n      <div class="' + u + '-drag" data-toggle="handler-drag"></div>\n      <div class="' + u + '-cp-c" data-toggle="handler-color-c">\n        ' + (i || '\n          <div class="' + u + '-cp-wrap" data-toggle="handler-color-wrap" style="background-color: ' + a + '">\n            <input type="color" data-toggle="handler-color" value="' + a + '">\n          </div>') + "\n      </div>\n    ", c.position = "absolute", c.top = 0, c.left = this.position + "%", n.appendChild(l), this.el = l, this.initEvents(), this.cpFn = r && r(this), l
                                        }
                                    }
                                }]), e
                            }();
                            t.default = a
                        }]))
                    }
                }, t  = {};

                function n(r) {
                    var o = t[r];
                    if (void 0 !== o) return o.exports;
                    var i = t[r] = {exports : {}};
                    return e[r].call(i.exports, i, i.exports, n), i.exports
                }

                n.n = e => {
                    var t = e && e.__esModule ? () => e['default'] : () => e;
                    return n.d(t, {a : t}), t
                }, n.d = (e, t) => {
                    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                        enumerable : !0,
                        get        : t[r]
                    })
                }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value : 'Module'}), Object.defineProperty(e, '__esModule', {value : !0})
                };
                var r = {};
                return (() => {
                    "use strict";
                    n.r(r), n.d(r, {
                        GRAD_DIRS     : () => u,
                        GRAD_TYPES    : () => s,
                        default       : () => g,
                        getValidDir   : () => c,
                        parseGradient : () => a,
                        toGradient    : () => l
                    });
                    var e = n(9), t = n.n(e), o = void 0 && (void 0).__assign || function() {
                            return o = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }, o.apply(this, arguments)
                        }, i = void 0 && (void 0).__spreadArray || function(e, t, n) {
                            if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                            return e.concat(r || Array.prototype.slice.call(t))
                        }, a = function(e) {
                            var t = e.indexOf('(') + 1, n = e.lastIndexOf(')'), r = e.substring(t, n),
                                o = r.split(/,(?![^(]*\))/),
                                i = {direction : 'left', type : 'linear', content : r, colors : r, stops : []};
                            if (!r) return i;
                            o.length > 2 && (i.direction = o.shift(), i.colors = o.join(',').trim());
                            var a = !1;
                            return ['repeating-linear', 'repeating-radial', 'linear', 'radial'].forEach((function(t) {
                                e.indexOf(function(e) {
                                    return "".concat(e, "-gradient(")
                                }(t)) > -1 && !a && (a = !0, i.type = t)
                            })), i.stops = o.map((function(e) {
                                var t = e.split(' '), n = (t.length > 1 ? t.pop() : '').trim();
                                return {color : t.join(' ').trim(), position : n}
                            })), i
                        }, l = function(e, t, n) {
                            var r = i(i([], u, !0), ['center'], !1), o = t;
                            return ['linear', 'repeating-linear'].indexOf(e) >= 0 && r.indexOf(o) >= 0 && (o = 'center' === o ? 'to right' : "to ".concat(o)), ['radial', 'repeating-radial'].indexOf(e) >= 0 && r.indexOf(o) >= 0 && (o = "circle at ".concat(o)), n ? "".concat(e, "-gradient(").concat(o, ", ").concat(n, ")") : ''
                        }, c = function(e) {
                            return u.filter((function(t) {
                                return e.indexOf(t) > -1
                            }))[0]
                        }, u = ['right', 'bottom', 'left', 'top'],
                        s = ['linear', 'radial', 'repeating-linear', 'repeating-radial'],
                        d = '[data-toggle="handler-color-wrap"]', p = 'background-image-gradient',
                        f = "".concat(p, "-dir"), h = "".concat(p, "-type"),
                        v = void 0 && (void 0).__assign || function() {
                            return v = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }, v.apply(this, arguments)
                        };
                    const g = function(e, n) {
                        void 0 === n && (n = {}), function(e, n) {
                            void 0 === n && (n = {});
                            var r = e.getModel(), i = e.Styles, v = n.colorPicker, g = n.builtInType, y = n.styleType,
                                m = function(t) {
                                    var n = t.getEl().querySelector(d), r = e.$(n);
                                    r.spectrum && r.spectrum('destroy')
                                };
                            y && i.addType(y, {
                                create     : function(e) {
                                    var i = e.change, a = document.createElement('div');
                                    a.className = 'gp-container', a.style.width = '100%';
                                    var l = new (t())(o({el : a}, n.grapickOpts));
                                    return l.on('change', (function(e) {
                                        return i({value : l.getValue(), partial : !e})
                                    })), this.gp = l, 'default' === v && (v = function(e) {
                                        var t = e.getEl(), n = t.querySelector(d), o = t.querySelector('input');
                                        null == o || o.parentNode.removeChild(o);
                                        var i = n.style;
                                        i.backgroundColor = e.getColor();
                                        var a = function(t, n) {
                                            void 0 === n && (n = 1);
                                            var r = function(e) {
                                                return (1 == e.getAlpha() ? e.toHexString() : e.toRgbString()).replace(/ /g, '')
                                            }(t);
                                            i.backgroundColor = r, e.setColor(r, n)
                                        };
                                        r.initBaseColorPicker(n, {
                                            color   : e.getColor(), change : function(e) {
                                                a(e)
                                            }, move : function(e) {
                                                a(e, 0)
                                            }
                                        })
                                    }, l.on('handler:remove', m)), v && l.setColorPicker(v), a
                                }, emit    : function(e, t) {
                                    var n = e.updateStyle, r = t.partial;
                                    n(t.value, {partial : r})
                                }, update  : function(e) {
                                    var t = e.value, r = this.gp;
                                    if (r.getValue() !== t) {
                                        var o = r.getHandlers();
                                        o.map(m), r.setValue(t, {silent : !0}), n.selectEdgeStops && [o[0], o[o.length - 1]].filter(Boolean).map((function(e) {
                                            return e.select({keepSelect : !0})
                                        }))
                                    }
                                }, destroy : function() {
                                    var e;
                                    null === (e = this.gp) || void 0 === e || e.destroy()
                                }
                            }), g && i.addBuiltIn(g, {
                                type       : 'composite',
                                fromStyle  : function(e, t) {
                                    var n, r = t.name, o = a(e[r] || ''), i = o.type || s[0],
                                        d = c(o.direction) || u[0];
                                    return (n = {})[p] = l(i, d, o.colors), n[h] = i, n[f] = d, n
                                },
                                toStyle    : function(e, t) {
                                    var n, r = t.name, o = e[p] || '', i = e[h] || s[0], c = e[f] || u[0], d = a(o),
                                        v = l(i, c, d.colors);
                                    return (n = {})[r] = v, n
                                },
                                properties : [{
                                    name     : ' ',
                                    full     : !0,
                                    defaults : 'none',
                                    type     : y,
                                    property : p
                                }, {
                                    name     : 'Direction',
                                    type     : 'select',
                                    defaults : 'right',
                                    property : f,
                                    options  : u.map((function(e) {
                                        return {value : e}
                                    }))
                                }, {
                                    name     : 'Type',
                                    type     : 'select',
                                    defaults : 'linear',
                                    property : h,
                                    options  : s.map((function(e) {
                                        return {value : e}
                                    }))
                                }]
                            })
                        }(e, v({
                            grapickOpts     : {},
                            selectEdgeStops : !0,
                            styleType       : 'gradient',
                            builtInType     : 'background-image'
                        }, n))
                    }
                })(), r
            })(), 1 && (e.exports = t())
        }
    }, t  = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {exports : {}};
        return e[r].call(i.exports, i, i.exports, n), i.exports
    }

    n.n = e => {
        var t = e && e.__esModule ? () => e['default'] : () => e;
        return n.d(t, {a : t}), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable : !0, get : t[r]})
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value : 'Module'}), Object.defineProperty(e, '__esModule', {value : !0})
    };
    var r = {};
    return (() => {
        "use strict";
        n.r(r), n.d(r, {BackgroundType : () => e, default : () => y});
        var e, t = n(180), o = n.n(t), i = void 0 && (void 0).__assign || function() {
            return i = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        };
        !function(e) {
            e["Image"] = "image", e["Color"] = "color", e["Grad"] = "grad"
        }(e || (e = {}));
        var a = function(e) {
                return e.map((function(e) {
                    return {id : e}
                }))
            }, l = function(n) {
                var r, o = ((r = {})[s] = e.Image, r);
                if (n.indexOf('url(') > -1) o[d] = n; else if (n.indexOf('gradient(') > -1) {
                    var i = (0, t.parseGradient)(n), a = i.stops;
                    if (2 === a.length && 'linear' === i.type && a[0].color === a[1].color) o[s] = e.Color, o[p] = a[0].color; else {
                        var l = (0, t.getValidDir)(i.direction) || t.GRAD_DIRS[0], c = i.type || t.GRAD_TYPES[0];
                        o[s] = e.Grad, o[f] = (0, t.toGradient)(c, l, i.colors), o[v] = c, o[h] = l
                    }
                }
                return o
            }, c = 'style="max-height: 16px; display: block; margin: 0 auto" viewBox="0 0 24 24"', u = 'background-image',
            s = '__background-type', d = u, p = "".concat(d, "-color"), f = "".concat(d, "-gradient"),
            h = "".concat(f, "-dir"), v = "".concat(f, "-type"), g = 'none';
        const y = function(n, r) {
            void 0 === r && (r = {});
            var y = i({
                styleGradientOpts : {}, propExtender : function(e) {
                    return e
                }
            }, r);
            o()(n, i({colorPicker : 'default'}, y.styleGradientOpts));
            n.Styles.addBuiltIn('background', {
                type           : 'stack',
                layerSeparator : /(?<!\(.*[^)]),(?![^(]*\))/,
                layerJoin      : ', ',
                detached       : !0,
                layerLabel     : function(e, t) {
                    var n, r = t.values, o = t.property.getProperty(s).getOption(r[s]);
                    return (null == o ? void 0 : o.title) ? "".concat((n = o.title) && n.charAt(0).toUpperCase() + n.substring(1)) : ''
                },
                fromStyle      : function(e, t) {
                    var n = t.property, r = t.name, o = n.getLayerSeparator(), a = n.getProperties(), c = [];
                    return e[u] ? (c = n.__splitStyleName(e, u, o).map(l), a.forEach((function(t) {
                        var r = t.getId(), a = t.getName();
                        a !== u && n.__splitStyleName(e, a, o).map((function(e) {
                            var n;
                            return (n = {})[r] = e || t.getDefaultValue(), n
                        })).forEach((function(e, t) {
                            c[t] = c[t] ? i(i({}, c[t]), e) : e
                        }))
                    }))) : e[r] && (c = n.__splitStyleName(e, r, /(?![^)(]*\([^)(]*?\)\)),(?![^\(]*\))/).map((function(e) {
                        return e.substring(0, e.lastIndexOf(')') + 1)
                    })).map(l)), c
                },
                toStyle        : function(n) {
                    var r = i({}, n), o = r[s], a = r[d];
                    if (o === e.Color) {
                        var l = r[p];
                        a = l === g ? g : "linear-gradient(".concat(l, " 0%, ").concat(l, " 100%)")
                    } else if (o === e.Grad) {
                        var c = (0, t.parseGradient)(r[f] || '');
                        a = (0, t.toGradient)(r[v] || t.GRAD_TYPES[0], r[h] || t.GRAD_DIRS[0], c.colors)
                    }
                    return delete r[d], delete r[p], delete r[f], delete r[h], delete r[v], i(i({}, r), {'background-image' : a || g})
                },
                properties     : [{
                    label    : ' ',
                    property : s,
                    type     : 'radio',
                    default  : e.Image,
                    onChange : function(t) {
                        var n = t.property, r = t.to.value;
                        r && n.getParent().getProperties().forEach((function(t) {
                            var n = t.getName(), o = !1;
                            n !== s && ((r === e.Image && [p, f, h, v].indexOf(n) < 0 || r === e.Color && n === p || r === e.Grad && [f, h, v].indexOf(n) >= 0) && (o = !0), t.up({visible : o}))
                        }))
                    },
                    options  : [{
                        id    : e.Image,
                        title : 'Image',
                        label : "<svg ".concat(c, "><path fill=\"currentColor\" d=\"M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z\"/></svg>")
                    }, {
                        id    : e.Color,
                        title : 'Color',
                        label : "<svg ".concat(c, "><path fill=\"currentColor\" d=\"M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z\"/></svg>")
                    }, {
                        id    : e.Grad,
                        title : 'Gradient',
                        label : "<svg ".concat(c, "><path fill=\"currentColor\" d=\"M11 9h2v2h-2V9m-2 2h2v2H9v-2m4 0h2v2h-2v-2m2-2h2v2h-2V9M7 9h2v2H7V9m12-6H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2M9 18H7v-2h2v2m4 0h-2v-2h2v2m4 0h-2v-2h2v2m2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z\"/></svg>")
                    }]
                }, {
                    label        : 'Image',
                    property     : d,
                    default      : 'none',
                    functionName : 'url',
                    type         : 'file',
                    full         : !0
                }, {
                    property : 'background-repeat',
                    default  : 'repeat',
                    type     : 'select',
                    options  : [{id : 'repeat', label : 'Repeat'}, {
                        id    : 'repeat-x',
                        label : 'Repeat x'
                    }, {id : 'repeat-y', label : 'Repeat y'}, {id : 'no-repeat', label : 'No repeat'}, {
                        id    : 'space',
                        label : 'Space'
                    }, {id : 'round', label : 'Round'}]
                }, {
                    property : 'background-position',
                    default  : 'left top',
                    type     : 'select',
                    options  : a(['left top', 'left center', 'left bottom', 'right top', 'right center', 'right bottom', 'center top', 'center center', 'center bottom'])
                }, {
                    property : 'background-attachment',
                    default  : 'scroll',
                    type     : 'select',
                    options  : a(['scroll', 'fixed', 'local'])
                }, {
                    type     : 'select',
                    default  : 'auto',
                    property : 'background-size',
                    options  : a(['auto', 'cover', 'contain'])
                }, {label : 'Color', property : p, default : 'none', type : 'color', full : !0}, {
                    label    : 'Gradient',
                    property : f,
                    default  : 'linear-gradient(right, black 0%, white 100%)',
                    type     : 'gradient',
                    full     : !0
                }, {
                    name     : 'Direction',
                    property : h,
                    type     : 'select',
                    default  : 'right',
                    options  : a(t.GRAD_DIRS)
                }, {
                    name     : 'Type',
                    property : v,
                    default  : 'linear',
                    type     : 'select',
                    options  : a(t.GRAD_TYPES)
                }].map((function(e) {
                    var t;
                    return (null === (t = y.propExtender) || void 0 === t ? void 0 : t.call(y, e)) || e
                }))
            })
        }
    })(), r
})()));
