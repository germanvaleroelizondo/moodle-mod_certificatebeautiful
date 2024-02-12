/** grapesjs-tui-image-editor - 0.1.3 */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["grapesjs-tui-image-editor"] = e() : t["grapesjs-tui-image-editor"] = e()
}(window, function() {
    return function(t) {
        var e = {};

        function n(o) {
            if (e[o]) return e[o].exports;
            var r = e[o] = {i : o, l : !1, exports : {}};
            return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }

        return n.m = t, n.c = e, n.d = function(t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {enumerable : !0, get : o})
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value : "Module"}), Object.defineProperty(t, "__esModule", {value : !0})
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable : !0,
                value      : t
            }), 2 & e && "string" != typeof t) for (var r in t) n.d(o, r, function(e) {
                return t[e]
            }.bind(null, r));
            return o
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 2)
    }([function(t, e, n) {
        var o = n(6);
        t.exports = function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))), r.forEach(function(e) {
                    o(t, e, n[e])
                })
            }
            return t
        }
    }, function(t, e, n) {
        var o = n(3), r = n(4), i = n(5);
        t.exports = function(t) {
            return o(t) || r(t) || i()
        }
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(1), r = n.n(o), i = n(0), a = n.n(i);
        e.default = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = "https://raw.githubusercontent.com/nhnent/tui.image-editor/production/dist/svg/", o = a()({}, {
                    config : {},
                    constructor : "",
                    labelImageEditor : "Image Editor",
                    labelApply : "Apply",
                    height : "650px",
                    width : "100%",
                    commandId : "tui-image-editor",
                    toolbarIcon : '<svg viewBox="0 0 24 24">\n                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z">\n                    </path>\n                  </svg>',
                    hideHeader : 1,
                    onApply : 0,
                    addToAssets : 1,
                    upload : 0,
                    onApplyButton : function() {
                    },
                    icons : {
                        "menu.normalIcon.path" : "".concat(n, "icon-d.svg"),
                        "menu.activeIcon.path" : "".concat(n, "icon-b.svg"),
                        "menu.disabledIcon.path" : "".concat(n, "icon-a.svg"),
                        "menu.hoverIcon.path" : "".concat(n, "icon-c.svg"),
                        "submenu.normalIcon.path" : "".concat(n, "icon-d.svg"),
                        "submenu.activeIcon.path" : "".concat(n, "icon-c.svg")
                    },
                    script : ["https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js", "https://uicdn.toast.com/tui.code-snippet/v1.5.0/tui-code-snippet.min.js", "https://uicdn.toast.com/tui-color-picker/v2.2.0/tui-color-picker.min.js", "https://uicdn.toast.com/tui-image-editor/v3.4.0/tui-image-editor.min.js"],
                    style : ["https://uicdn.toast.com/tui-color-picker/v2.2.0/tui-color-picker.min.css", "https://uicdn.toast.com/tui-image-editor/v3.4.0/tui-image-editor.min.css"]
                }, e), i = o.script, c = o.style, u = o.height, s = o.width, l = o.hideHeader, d = o.icons, p = o.onApply,
                f = o.upload, g = o.addToAssets, m = o.commandId, h = function() {
                    return o.constructor || window.tui && window.tui.ImageEditor
                }, b = h();
            if (!b && i) {
                var y = document.head, v = Array.isArray(i) ? r()(i) : [i];
                !function t(e) {
                    if (e.length) {
                        var n = document.createElement("link");
                        n.href = e.shift(), n.rel = "stylesheet", y.appendChild(n), t(e)
                    }
                }(Array.isArray(c) ? r()(c) : [c]), function t(e) {
                    if (e.length) {
                        var n = document.createElement("script");
                        n.src = e.shift(), n.onerror = n.onload = t.bind(null, e), y.appendChild(n)
                    } else b = h()
                }(v)
            }
            var I = t.DomComponents, j = I.getType("image").model;
            I.addType("image", {
                model : {
                    initToolbar : function() {
                        j.prototype.initToolbar.apply(this, arguments);
                        var t = this.get("toolbar");
                        t.some(function(t) {
                            return t.command === m
                        }) || (t.unshift({command : m, label : o.toolbarIcon}), this.set("toolbar", t))
                    }
                }
            }), t.Commands.add(m, {
                run                : function(t, e) {
                    var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = this.id;
                    if (!b) return t.log("TOAST UI Image editor not found", {
                        level : "error",
                        ns    : m
                    }), t.stopCommand(i);
                    this.editor = t, this.target = r.target || t.getSelected();
                    var a = this.createContent(), c = o.labelImageEditor, u = a.children[1];
                    t.Modal.open({title : c, content : a}).getModel().once("change:open", function() {
                        return t.stopCommand(i)
                    }), this.imageEditor = new b(a.children[0], this.getEditorConfig()), t.getModel().setEditing(1), u.onclick = function() {
                        return n.applyChanges()
                    }, o.onApplyButton(u)
                }, stop            : function(t) {
                    var e = this.imageEditor;
                    e && e.destroy(), t.getModel().setEditing(0)
                }, getEditorConfig : function() {
                    var t = a()({}, o.config), e = this.target.get("src");
                    return t.includeUI || (t.includeUI = {}), t.includeUI = a()({theme : {}}, t.includeUI, {
                        loadImage : {
                            path : e,
                            name : 1
                        },
                        uiSize    : {
                            height : u,
                            width  : s
                        }
                    }), l && (t.includeUI.theme["header.display"] = "none"), d && (t.includeUI.theme = a()({}, t.includeUI.theme, d)), t
                }, createContent   : function() {
                    var t = document.createElement("div");
                    return t.style = "position: relative", t.innerHTML = '\n        <div></div>\n        <button class="tui-image-editor__apply-btn" style="\n          position: absolute;\n          top: 0; right: 0;\n          margin: 10px;\n          background-color: #fff;\n          font-size: 1rem;\n          border-radius: 3px;\n          border: none;\n          padding: 10px 20px;\n          cursor: pointer\n        ">\n          '.concat(o.labelApply, "\n        </botton>\n      "), t
                }, applyChanges    : function() {
                    var t = this, e = this.imageEditor, n = this.target, o = this.editor.AssetManager;
                    p ? p(e, n) : "CROPPER" === e.getDrawingMode() ? e.crop(e.getCropzoneRect()).then(function() {
                        t.uploadImage(e, n, o)
                    }) : this.uploadImage(e, n, o)
                }, uploadImage     : function(t, e, n) {
                    var o = this, r = t.toDataURL();
                    if (f) {
                        var i = this.dataUrlToBlob(r);
                        n.FileUploader().uploadFile({dataTransfer : {files : [i]}}, function(t) {
                            var e = t && t.data && t.data[0], n = e && ("string" == typeof e ? e : e.src);
                            n && o.applyToTarget(n)
                        })
                    } else g && n.add({src : r, name : (e.get("src") || "").split("/").pop()}), this.applyToTarget(r)
                }, applyToTarget   : function(t) {
                    this.target.set({src : t}), this.editor.Modal.close()
                }, dataUrlToBlob   : function(t) {
                    for (var e = t.split(","), n = window.atob(e[1]), o = e[0].split(":")[1].split(";")[0], r = new ArrayBuffer(n.length), i = new Uint8Array(r), a = 0; a < n.length; a++) i[a] = n.charCodeAt(a);
                    return new Blob([r], {type : o})
                }
            })
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }
    }, function(t, e) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }, function(t, e) {
        t.exports = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value        : n,
                enumerable   : !0,
                configurable : !0,
                writable     : !0
            }) : t[e] = n, t
        }
    }])
});
