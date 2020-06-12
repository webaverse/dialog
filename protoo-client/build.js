const exports = {};
const module = {
    exports
};
var
    parcelRequire = function(e, r, t, n) {
        var i, o = "function" == typeof parcelRequire && parcelRequire,
            u = "function" == typeof require && require;

        function f(t, n) {
            if (!r[t]) {
                if (!e[t]) {
                    var i = "function" == typeof parcelRequire && parcelRequire;
                    if (!n && i) return i(t, !0);
                    if (o) return o(t, !0);
                    if (u && "string" == typeof t) return u(t);
                    var c = new Error("Cannot find module '" + t + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                p.resolve = function(r) {
                    return e[t][1][r] || r
                }, p.cache = {};
                var l = r[t] = new f.Module(t);
                e[t][0].call(l.exports, p, l, l.exports, this)
            }
            return r[t].exports;

            function p(e) {
                return f(p.resolve(e))
            }
        }
        f.isParcelRequire = !0, f.Module = function(e) {
            this.id = e, this.bundle = f, this.exports = {}
        }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
            e[r] = [function(e, r) {
                r.exports = t
            }, {}]
        };
        for (var c = 0; c < t.length; c++) try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
        if (t.length) {
            var l = f(t[t.length - 1]);
            "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
                return l
            }) : n && (this[n] = l)
        }
        if (parcelRequire = f, i) throw i;
        return f
    }({
        "EHrm": [function(require, module, exports) {
            module.exports = {
                _from: "protoo-client@^4.0.4",
                _id: "protoo-client@4.0.4",
                _inBundle: !1,
                _integrity: "sha512-+WZUJJTlBSTWYeNu0Tv8SGI3kjettLvr2IUdBsAfioi0Szf8peeky79h6li7gThA3pIpNC+A+IuCUWaK7MlFfQ==",
                _location: "/protoo-client",
                _phantomChildren: {},
                _requested: {
                    type: "range",
                    registry: !0,
                    raw: "protoo-client@^4.0.4",
                    name: "protoo-client",
                    escapedName: "protoo-client",
                    rawSpec: "^4.0.4",
                    saveSpec: null,
                    fetchSpec: "^4.0.4"
                },
                _requiredBy: ["/"],
                _resolved: "https://registry.npmjs.org/protoo-client/-/protoo-client-4.0.4.tgz",
                _shasum: "597070eebe5dc13350d31260ea3c55c06031a0b8",
                _spec: "protoo-client@^4.0.4",
                _where: "/Users/k/Documents/GitHub/dialog",
                author: {
                    name: "Iñaki Baz Castillo",
                    email: "ibc@aliax.net"
                },
                bugs: {
                    url: "https://github.com/ibc/protoo/issues"
                },
                bundleDependencies: !1,
                dependencies: {
                    debug: "^4.1.1",
                    events: "^3.1.0",
                    retry: "^0.12.0",
                    websocket: "^1.0.31"
                },
                deprecated: !1,
                description: "protoo JavaScript client module",
                devDependencies: {
                    eslint: "^5.16.0"
                },
                engines: {
                    node: ">=8.0.0"
                },
                homepage: "https://protoojs.org",
                keywords: ["nodejs", "browser", "websocket"],
                license: "MIT",
                main: "lib/index.js",
                name: "protoo-client",
                optionalDependencies: {
                    websocket: "^1.0.31"
                },
                repository: {
                    type: "git",
                    url: "git+https://github.com/ibc/protoo.git"
                },
                scripts: {
                    lint: "eslint -c .eslintrc.js lib"
                },
                version: "4.0.4"
            };
        }, {}],
        "J3Y7": [function(require, module, exports) {
            var s = 1e3,
                e = 60 * s,
                r = 60 * e,
                a = 24 * r,
                n = 7 * a,
                c = 365.25 * a;

            function t(t) {
                if (!((t = String(t)).length > 100)) {
                    var u = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
                    if (u) {
                        var i = parseFloat(u[1]);
                        switch ((u[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return i * c;
                            case "weeks":
                            case "week":
                            case "w":
                                return i * n;
                            case "days":
                            case "day":
                            case "d":
                                return i * a;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return i * r;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return i * e;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return i * s;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return i;
                            default:
                                return
                        }
                    }
                }
            }

            function u(n) {
                var c = Math.abs(n);
                return c >= a ? Math.round(n / a) + "d" : c >= r ? Math.round(n / r) + "h" : c >= e ? Math.round(n / e) + "m" : c >= s ? Math.round(n / s) + "s" : n + "ms"
            }

            function i(n) {
                var c = Math.abs(n);
                return c >= a ? o(n, c, a, "day") : c >= r ? o(n, c, r, "hour") : c >= e ? o(n, c, e, "minute") : c >= s ? o(n, c, s, "second") : n + " ms"
            }

            function o(s, e, r, a) {
                var n = e >= 1.5 * r;
                return Math.round(s / r) + " " + a + (n ? "s" : "")
            }
            module.exports = function(s, e) {
                e = e || {};
                var r = typeof s;
                if ("string" === r && s.length > 0) return t(s);
                if ("number" === r && isFinite(s)) return e.long ? i(s) : u(s);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(s))
            };
        }, {}],
        "PId8": [function(require, module, exports) {
            function e(e) {
                function n(e) {
                    let n = 0;
                    for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                    return t.colors[Math.abs(n) % t.colors.length]
                }

                function t(e) {
                    let o;

                    function i(...e) {
                        if (!i.enabled) return;
                        const n = i,
                            s = Number(new Date),
                            r = s - (o || s);
                        n.diff = r, n.prev = o, n.curr = s, o = s, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                        let a = 0;
                        e[0] = e[0].replace(/%([a-zA-Z%])/g, (s, r) => {
                            if ("%%" === s) return s;
                            a++;
                            const o = t.formatters[r];
                            if ("function" == typeof o) {
                                const t = e[a];
                                s = o.call(n, t), e.splice(a, 1), a--
                            }
                            return s
                        }), t.formatArgs.call(n, e), (n.log || t.log).apply(n, e)
                    }
                    return i.namespace = e, i.enabled = t.enabled(e), i.useColors = t.useColors(), i.color = n(e), i.destroy = s, i.extend = r, "function" == typeof t.init && t.init(i), t.instances.push(i), i
                }

                function s() {
                    const e = t.instances.indexOf(this);
                    return -1 !== e && (t.instances.splice(e, 1), !0)
                }

                function r(e, n) {
                    const s = t(this.namespace + (void 0 === n ? ":" : n) + e);
                    return s.log = this.log, s
                }

                function o(e) {
                    return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return t.debug = t, t.default = t, t.coerce = function(e) {
                    if (e instanceof Error) return e.stack || e.message;
                    return e
                }, t.disable = function() {
                    const e = [...t.names.map(o), ...t.skips.map(o).map(e => "-" + e)].join(",");
                    return t.enable(""), e
                }, t.enable = function(e) {
                    let n;
                    t.save(e), t.names = [], t.skips = [];
                    const s = ("string" == typeof e ? e : "").split(/[\s,]+/),
                        r = s.length;
                    for (n = 0; n < r; n++) s[n] && ("-" === (e = s[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                    for (n = 0; n < t.instances.length; n++) {
                        const e = t.instances[n];
                        e.enabled = t.enabled(e.namespace)
                    }
                }, t.enabled = function(e) {
                    if ("*" === e[e.length - 1]) return !0;
                    let n, s;
                    for (n = 0, s = t.skips.length; n < s; n++)
                        if (t.skips[n].test(e)) return !1;
                    for (n = 0, s = t.names.length; n < s; n++)
                        if (t.names[n].test(e)) return !0;
                    return !1
                }, t.humanize = require("ms"), Object.keys(e).forEach(n => {
                    t[n] = e[n]
                }), t.instances = [], t.names = [], t.skips = [], t.formatters = {}, t.selectColor = n, t.enable(t.load()), t
            }
            module.exports = e;
        }, {
            "ms": "J3Y7"
        }],
        "kfLt": [function(require, module, exports) {

            var t, e, n = module.exports = {};

            function r() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function i(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }

            function u(t) {
                if (e === clearTimeout) return clearTimeout(t);
                if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
                try {
                    return e(t)
                } catch (n) {
                    try {
                        return e.call(null, t)
                    } catch (n) {
                        return e.call(this, t)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : r
                } catch (n) {
                    t = r
                }
                try {
                    e = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (n) {
                    e = o
                }
            }();
            var c, s = [],
                l = !1,
                a = -1;

            function f() {
                l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h())
            }

            function h() {
                if (!l) {
                    var t = i(f);
                    l = !0;
                    for (var e = s.length; e;) {
                        for (c = s, s = []; ++a < e;) c && c[a].run();
                        a = -1, e = s.length
                    }
                    c = null, l = !1, u(t)
                }
            }

            function m(t, e) {
                this.fun = t, this.array = e
            }

            function p() {}
            n.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                s.push(new m(t, e)), 1 !== s.length || l || i(h)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(t) {
                return []
            }, n.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, n.cwd = function() {
                return "/"
            }, n.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, n.umask = function() {
                return 0
            };
        }, {}],
        "BYFN": [function(require, module, exports) {
            var process = require("process");
            var e = require("process");

            function o() {
                return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }

            function C(e) {
                if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff), !this.useColors) return;
                const o = "color: " + this.color;
                e.splice(1, 0, o, "color: inherit");
                let C = 0,
                    t = 0;
                e[0].replace(/%[a-zA-Z%]/g, e => {
                    "%%" !== e && (C++, "%c" === e && (t = C))
                }), e.splice(t, 0, o)
            }

            function t(...e) {
                return "object" == typeof console && console.log && console.log(...e)
            }

            function r(e) {
                try {
                    e ? exports.storage.setItem("debug", e) : exports.storage.removeItem("debug")
                } catch (o) {}
            }

            function n() {
                let o;
                try {
                    o = exports.storage.getItem("debug")
                } catch (C) {}
                return !o && void 0 !== e && "env" in e && (o = void 0), o
            }

            function s() {
                try {
                    return localStorage
                } catch (e) {}
            }
            exports.log = t, exports.formatArgs = C, exports.save = r, exports.load = n, exports.useColors = o, exports.storage = s(), exports.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], module.exports = require("./common")(exports);
            const {
                formatters: F
            } = module.exports;
            F.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (o) {
                    return "[UnexpectedJSONParseError]: " + o.message
                }
            };
        }, {
            "./common": "PId8",
            "process": "kfLt"
        }],
        "p5bA": [function(require, module, exports) {
            function n(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function e(n, e) {
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                }
            }

            function o(n, o, r) {
                return o && e(n.prototype, o), r && e(n, r), n
            }
            var r = require("debug"),
                t = "protoo-client",
                c = function() {
                    function e(o) {
                        n(this, e), o ? (this._debug = r("".concat(t, ":").concat(o)), this._warn = r("".concat(t, ":WARN:").concat(o)), this._error = r("".concat(t, ":ERROR:").concat(o))) : (this._debug = r(t), this._warn = r("".concat(t, ":WARN")), this._error = r("".concat(t, ":ERROR"))), this._debug.log = console.info.bind(console), this._warn.log = console.warn.bind(console), this._error.log = console.error.bind(console)
                    }
                    return o(e, [{
                        key: "debug",
                        get: function() {
                            return this._debug
                        }
                    }, {
                        key: "warn",
                        get: function() {
                            return this._warn
                        }
                    }, {
                        key: "error",
                        get: function() {
                            return this._error
                        }
                    }]), e
                }();
            module.exports = c;
        }, {
            "debug": "BYFN"
        }],
        "vY5P": [function(require, module, exports) {
            "use strict";
            var e, t = "object" == typeof Reflect ? Reflect : null,
                n = t && "function" == typeof t.apply ? t.apply : function(e, t, n) {
                    return Function.prototype.apply.call(e, t, n)
                };

            function r(e) {
                console && console.warn && console.warn(e)
            }
            e = t && "function" == typeof t.ownKeys ? t.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };
            var i = Number.isNaN || function(e) {
                return e != e
            };

            function o() {
                o.init.call(this)
            }
            module.exports = o, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
            var s = 10;

            function u(e) {
                if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function f(e) {
                return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners
            }

            function v(e, t, n, i) {
                var o, s, v;
                if (u(n), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), v = s[t]), void 0 === v) v = s[t] = n, ++e._eventsCount;
                else if ("function" == typeof v ? v = s[t] = i ? [n, v] : [v, n] : i ? v.unshift(n) : v.push(n), (o = f(e)) > 0 && v.length > o && !v.warned) {
                    v.warned = !0;
                    var l = new Error("Possible EventEmitter memory leak detected. " + v.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = v.length, r(l)
                }
                return e
            }

            function l() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function a(e, t, n) {
                var r = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: n
                    },
                    i = l.bind(r);
                return i.listener = n, r.wrapFn = i, i
            }

            function h(e, t, n) {
                var r = e._events;
                if (void 0 === r) return [];
                var i = r[t];
                return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? d(i) : c(i, i.length)
            }

            function p(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var n = t[e];
                    if ("function" == typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function c(e, t) {
                for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
                return n
            }

            function y(e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop()
            }

            function d(e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                return t
            }
            Object.defineProperty(o, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(e) {
                    if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    s = e
                }
            }), o.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, o.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, o.prototype.getMaxListeners = function() {
                return f(this)
            }, o.prototype.emit = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
                var i = "error" === e,
                    o = this._events;
                if (void 0 !== o) i = i && void 0 === o.error;
                else if (!i) return !1;
                if (i) {
                    var s;
                    if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
                    var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                    throw u.context = s, u
                }
                var f = o[e];
                if (void 0 === f) return !1;
                if ("function" == typeof f) n(f, this, t);
                else {
                    var v = f.length,
                        l = c(f, v);
                    for (r = 0; r < v; ++r) n(l[r], this, t)
                }
                return !0
            }, o.prototype.addListener = function(e, t) {
                return v(this, e, t, !1)
            }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e, t) {
                return v(this, e, t, !0)
            }, o.prototype.once = function(e, t) {
                return u(t), this.on(e, a(this, e, t)), this
            }, o.prototype.prependOnceListener = function(e, t) {
                return u(t), this.prependListener(e, a(this, e, t)), this
            }, o.prototype.removeListener = function(e, t) {
                var n, r, i, o, s;
                if (u(t), void 0 === (r = this._events)) return this;
                if (void 0 === (n = r[e])) return this;
                if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
                else if ("function" != typeof n) {
                    for (i = -1, o = n.length - 1; o >= 0; o--)
                        if (n[o] === t || n[o].listener === t) {
                            s = n[o].listener, i = o;
                            break
                        } if (i < 0) return this;
                    0 === i ? n.shift() : y(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t)
                }
                return this
            }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e) {
                var t, n, r;
                if (void 0 === (n = this._events)) return this;
                if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                if (0 === arguments.length) {
                    var i, o = Object.keys(n);
                    for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
                return this
            }, o.prototype.listeners = function(e) {
                return h(this, e, !0)
            }, o.prototype.rawListeners = function(e) {
                return h(this, e, !1)
            }, o.listenerCount = function(e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
            }, o.prototype.listenerCount = p, o.prototype.eventNames = function() {
                return this._eventsCount > 0 ? e(this._events) : []
            };
        }, {}],
        "Oomd": [function(require, module, exports) {
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function e(t, e, r, n, o, i, u) {
                try {
                    var c = t[i](u),
                        f = c.value
                } catch (a) {
                    return void r(a)
                }
                c.done ? e(f) : Promise.resolve(f).then(n, o)
            }

            function r(t) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise(function(o, i) {
                        var u = t.apply(r, n);

                        function c(t) {
                            e(u, o, i, c, f, "next", t)
                        }

                        function f(t) {
                            e(u, o, i, c, f, "throw", t)
                        }
                        c(void 0)
                    })
                }
            }

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function i(t, e, r) {
                return e && o(t.prototype, e), r && o(t, r), t
            }

            function u(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && c(t, e)
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function f(t) {
                var e = l();
                return function() {
                    var r, n = p(t);
                    if (e) {
                        var o = p(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return a(this, r)
                }
            }

            function a(e, r) {
                return !r || "object" !== t(r) && "function" != typeof r ? s(e) : r
            }

            function s(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function l() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var y = require("events"),
                h = y.EventEmitter,
                v = require("./Logger"),
                m = function(t) {
                    u(o, h);
                    var e = f(o);

                    function o(t) {
                        var r;
                        return n(this, o), (r = e.call(this)).setMaxListeners(1 / 0), r._logger = t || new v("EnhancedEventEmitter"), r
                    }
                    return i(o, [{
                        key: "safeEmit",
                        value: function(t) {
                            try {
                                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                                this.emit.apply(this, [t].concat(r))
                            } catch (o) {
                                this._logger.error("safeEmit() | event listener threw an error [event:%s]:%o", t, o)
                            }
                        }
                    }, {
                        key: "safeEmitAsPromise",
                        value: function() {
                            var t = r(regeneratorRuntime.mark(function t(e) {
                                var r, n, o, i = this,
                                    u = arguments;
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            for (r = u.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = u[o];
                                            return t.abrupt("return", new Promise(function(t, r) {
                                                i.safeEmit.apply(i, [e].concat(n, [t, r]))
                                            }));
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }]), o
                }();
            module.exports = m;
        }, {
            "events": "vY5P",
            "./Logger": "p5bA"
        }],
        "FOZT": [function(require, module, exports) {
            exports.generateRandomNumber = function() {
                return Math.round(1e7 * Math.random())
            };
        }, {}],
        "fyRg": [function(require, module, exports) {
            function e(r) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(r)
            }

            function r(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, r) {
                for (var o = 0; o < r.length; o++) {
                    var t = r[o];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
                }
            }

            function t(e, r, t) {
                return r && o(e.prototype, r), t && o(e, t), e
            }
            var n = require("./Logger"),
                i = require("./utils"),
                a = i.generateRandomNumber,
                s = new n("Message"),
                u = function() {
                    function o() {
                        r(this, o)
                    }
                    return t(o, null, [{
                        key: "parse",
                        value: function(r) {
                            var o, t = {};
                            try {
                                o = JSON.parse(r)
                            } catch (n) {
                                return void s.error("parse() | invalid JSON: %s", n)
                            }
                            if ("object" === e(o) && !Array.isArray(o)) {
                                if (o.request) {
                                    if (t.request = !0, "string" != typeof o.method) return void s.error("parse() | missing/invalid method field");
                                    if ("number" != typeof o.id) return void s.error("parse() | missing/invalid id field");
                                    t.id = o.id, t.method = o.method, t.data = o.data || {}
                                } else if (o.response) {
                                    if (t.response = !0, "number" != typeof o.id) return void s.error("parse() | missing/invalid id field");
                                    t.id = o.id, o.ok ? (t.ok = !0, t.data = o.data || {}) : (t.ok = !1, t.errorCode = o.errorCode, t.errorReason = o.errorReason)
                                } else {
                                    if (!o.notification) return void s.error("parse() | missing request/response field");
                                    if (t.notification = !0, "string" != typeof o.method) return void s.error("parse() | missing/invalid method field");
                                    t.method = o.method, t.data = o.data || {}
                                }
                                return t
                            }
                            s.error("parse() | not an object")
                        }
                    }, {
                        key: "createRequest",
                        value: function(e, r) {
                            return {
                                request: !0,
                                id: a(),
                                method: e,
                                data: r || {}
                            }
                        }
                    }, {
                        key: "createSuccessResponse",
                        value: function(e, r) {
                            return {
                                response: !0,
                                id: e.id,
                                ok: !0,
                                data: r || {}
                            }
                        }
                    }, {
                        key: "createErrorResponse",
                        value: function(e, r, o) {
                            return {
                                response: !0,
                                id: e.id,
                                ok: !1,
                                errorCode: r,
                                errorReason: o
                            }
                        }
                    }, {
                        key: "createNotification",
                        value: function(e, r) {
                            return {
                                notification: !0,
                                method: e,
                                data: r || {}
                            }
                        }
                    }]), o
                }();
            module.exports = u;
        }, {
            "./Logger": "p5bA",
            "./utils": "FOZT"
        }],
        "VMrj": [function(require, module, exports) {
            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t, n, r, o, i, c) {
                try {
                    var s = e[i](c),
                        u = s.value
                } catch (a) {
                    return void n(a)
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function n(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(o, i) {
                        var c = e.apply(n, r);

                        function s(e) {
                            t(c, o, i, s, u, "next", e)
                        }

                        function u(e) {
                            t(c, o, i, s, u, "throw", e)
                        }
                        s(void 0)
                    })
                }
            }

            function r(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, s = !0,
                    u = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        u = !0, c = e
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (u) throw c
                        }
                    }
                }
            }

            function o(e, t) {
                if (e) {
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                }
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t, n) {
                return t && s(e.prototype, t), n && s(e, n), e
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function l(e) {
                var t = h();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }

            function d(t, n) {
                return !n || "object" !== e(n) && "function" != typeof n ? p(t) : n
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var m = require("./Logger"),
                v = require("./EnhancedEventEmitter"),
                _ = require("./Message"),
                b = new m("Peer"),
                g = function(e) {
                    a(o, v);
                    var t = l(o);

                    function o(e) {
                        var n;
                        return c(this, o), n = t.call(this, b), b.debug("constructor()"), n._closed = !1, n._transport = e, n._connected = !1, n._data = {}, n._sents = new Map, n._handleTransport(), n
                    }
                    return u(o, [{
                        key: "close",
                        value: function() {
                            if (!this._closed) {
                                b.debug("close()"), this._closed = !0, this._connected = !1, this._transport.close();
                                var e, t = r(this._sents.values());
                                try {
                                    for (t.s(); !(e = t.n()).done;) {
                                        e.value.close()
                                    }
                                } catch (n) {
                                    t.e(n)
                                } finally {
                                    t.f()
                                }
                                this.safeEmit("close")
                            }
                        }
                    }, {
                        key: "request",
                        value: function() {
                            var e = n(regeneratorRuntime.mark(function e(t) {
                                var n, r, o = this,
                                    i = arguments;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = i.length > 1 && void 0 !== i[1] ? i[1] : void 0, r = _.createRequest(t, n), this._logger.debug("request() [method:%s, id:%s]", t, r.id), e.next = 5, this._transport.send(r);
                                        case 5:
                                            return e.abrupt("return", new Promise(function(e, t) {
                                                var n = 1500 * (15 + .1 * o._sents.size),
                                                    i = {
                                                        id: r.id,
                                                        method: r.method,
                                                        resolve: function(t) {
                                                            o._sents.delete(r.id) && (clearTimeout(i.timer), e(t))
                                                        },
                                                        reject: function(e) {
                                                            o._sents.delete(r.id) && (clearTimeout(i.timer), t(e))
                                                        },
                                                        timer: setTimeout(function() {
                                                            o._sents.delete(r.id) && t(new Error("request timeout"))
                                                        }, n),
                                                        close: function() {
                                                            clearTimeout(i.timer), t(new Error("peer closed"))
                                                        }
                                                    };
                                                o._sents.set(r.id, i)
                                            }));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "notify",
                        value: function() {
                            var e = n(regeneratorRuntime.mark(function e(t) {
                                var n, r, o = arguments;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = o.length > 1 && void 0 !== o[1] ? o[1] : void 0, r = _.createNotification(t, n), this._logger.debug("notify() [method:%s]", t), e.next = 5, this._transport.send(r);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_handleTransport",
                        value: function() {
                            var e = this;
                            if (this._transport.closed) return this._closed = !0, void setTimeout(function() {
                                e._closed || (e._connected = !1, e.safeEmit("close"))
                            });
                            this._transport.on("open", function() {
                                e._closed || (b.debug('emit "open"'), e._connected = !0, e.safeEmit("open"))
                            }), this._transport.on("disconnected", function() {
                                e._closed || (b.debug('emit "disconnected"'), e._connected = !1, e.safeEmit("disconnected"))
                            }), this._transport.on("failed", function(t) {
                                e._closed || (b.debug('emit "failed" [currentAttempt:%s]', t), e._connected = !1, e.safeEmit("failed", t))
                            }), this._transport.on("close", function() {
                                e._closed || (e._closed = !0, b.debug('emit "close"'), e._connected = !1, e.safeEmit("close"))
                            }), this._transport.on("message", function(t) {
                                t.request ? e._handleRequest(t) : t.response ? e._handleResponse(t) : t.notification && e._handleNotification(t)
                            })
                        }
                    }, {
                        key: "_handleRequest",
                        value: function(e) {
                            var t = this;
                            try {
                                this.emit("request", e, function(n) {
                                    var r = _.createSuccessResponse(e, n);
                                    t._transport.send(r).catch(function() {})
                                }, function(n, r) {
                                    n instanceof Error ? (n = 500, r = String(n)) : "number" == typeof n && r instanceof Error && (r = String(r));
                                    var o = _.createErrorResponse(e, n, r);
                                    t._transport.send(o).catch(function() {})
                                })
                            } catch (r) {
                                var n = _.createErrorResponse(e, 500, String(r));
                                this._transport.send(n).catch(function() {})
                            }
                        }
                    }, {
                        key: "_handleResponse",
                        value: function(e) {
                            var t = this._sents.get(e.id);
                            if (t)
                                if (e.ok) t.resolve(e.data);
                                else {
                                    var n = new Error(e.errorReason);
                                    n.code = e.errorCode, t.reject(n)
                                }
                            else b.error("received response does not match any sent request [id:%s]", e.id)
                        }
                    }, {
                        key: "_handleNotification",
                        value: function(e) {
                            this.safeEmit("notification", e)
                        }
                    }, {
                        key: "closed",
                        get: function() {
                            return this._closed
                        }
                    }, {
                        key: "connected",
                        get: function() {
                            return this._connected
                        }
                    }, {
                        key: "data",
                        get: function() {
                            return this._data
                        },
                        set: function(e) {
                            throw new Error("cannot override data object")
                        }
                    }]), o
                }();
            module.exports = g;
        }, {
            "./Logger": "p5bA",
            "./EnhancedEventEmitter": "Oomd",
            "./Message": "fyRg"
        }],
        "ML23": [function(require, module, exports) {
            var t = function() {
                if ("object" == typeof self && self) return self;
                if ("object" == typeof window && window) return window;
                throw new Error("Unable to resolve global `this`")
            };
            module.exports = function() {
                if (this) return this;
                if ("object" == typeof globalThis && globalThis) return globalThis;
                try {
                    Object.defineProperty(Object.prototype, "__global__", {
                        get: function() {
                            return this
                        },
                        configurable: !0
                    })
                } catch (e) {
                    return t()
                }
                try {
                    return __global__ || t()
                } finally {
                    delete Object.prototype.__global__
                }
            }();
        }, {}],
        "bR10": [function(require, module, exports) {
            module.exports = {
                _args: [
                    ["websocket@1.0.31", "/Users/k/Documents/GitHub/dialog"]
                ],
                _from: "websocket@1.0.31",
                _id: "websocket@1.0.31",
                _inBundle: !1,
                _integrity: "sha512-VAouplvGKPiKFDTeCCO65vYHsyay8DqoBSlzIO3fayrfOgU94lQN5a1uWVnFrMLceTJw/+fQXR5PGbUVRaHshQ==",
                _location: "/websocket",
                _phantomChildren: {
                    ms: "2.0.0"
                },
                _requested: {
                    type: "version",
                    registry: !0,
                    raw: "websocket@1.0.31",
                    name: "websocket",
                    escapedName: "websocket",
                    rawSpec: "1.0.31",
                    saveSpec: null,
                    fetchSpec: "1.0.31"
                },
                _requiredBy: ["/protoo-client", "/protoo-server"],
                _resolved: "https://registry.npmjs.org/websocket/-/websocket-1.0.31.tgz",
                _spec: "1.0.31",
                _where: "/Users/k/Documents/GitHub/dialog",
                author: {
                    name: "Brian McKelvey",
                    email: "theturtle32@gmail.com",
                    url: "https://github.com/theturtle32"
                },
                browser: "lib/browser.js",
                bugs: {
                    url: "https://github.com/theturtle32/WebSocket-Node/issues"
                },
                config: {
                    verbose: !1
                },
                contributors: [{
                    name: "Iñaki Baz Castillo",
                    email: "ibc@aliax.net",
                    url: "http://dev.sipdoc.net"
                }],
                dependencies: {
                    debug: "^2.2.0",
                    "es5-ext": "^0.10.50",
                    nan: "^2.14.0",
                    "typedarray-to-buffer": "^3.1.5",
                    yaeti: "^0.0.6"
                },
                description: "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
                devDependencies: {
                    "buffer-equal": "^1.0.0",
                    faucet: "^0.0.1",
                    gulp: "^4.0.2",
                    "gulp-jshint": "^2.0.4",
                    jshint: "^2.0.0",
                    "jshint-stylish": "^2.2.1",
                    tape: "^4.9.1"
                },
                directories: {
                    lib: "./lib"
                },
                engines: {
                    node: ">=0.10.0"
                },
                homepage: "https://github.com/theturtle32/WebSocket-Node",
                keywords: ["websocket", "websockets", "socket", "networking", "comet", "push", "RFC-6455", "realtime", "server", "client"],
                license: "Apache-2.0",
                main: "index",
                name: "websocket",
                repository: {
                    type: "git",
                    url: "git+https://github.com/theturtle32/WebSocket-Node.git"
                },
                scripts: {
                    gulp: "gulp",
                    install: "(node-gyp rebuild 2> builderror.log) || (exit 0)",
                    test: "faucet test/unit"
                },
                version: "1.0.31"
            };
        }, {}],
        "CGCI": [function(require, module, exports) {
            module.exports = require("../package.json").version;
        }, {
            "../package.json": "bR10"
        }],
        "eEKz": [function(require, module, exports) {
            var e;
            try {
                e = require("es5-ext/global")
            } catch (t) {} finally {
                if (e || "undefined" == typeof window || (e = window), !e) throw new Error("Could not determine global this")
            }
            var n = e.WebSocket || e.MozWebSocket,
                o = require("./version");

            function r(e, o) {
                return o ? new n(e, o) : new n(e)
            }
            n && ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function(e) {
                Object.defineProperty(r, e, {
                    get: function() {
                        return n[e]
                    }
                })
            }), module.exports = {
                w3cwebsocket: n ? r : null,
                version: o
            };
        }, {
            "es5-ext/global": "ML23",
            "./version": "CGCI"
        }],
        "dNUO": [function(require, module, exports) {
            function t(t, e) {
                "boolean" == typeof e && (e = {
                    forever: e
                }), this._originalTimeouts = JSON.parse(JSON.stringify(t)), this._timeouts = t, this._options = e || {}, this._maxRetryTime = e && e.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
            }
            module.exports = t, t.prototype.reset = function() {
                this._attempts = 1, this._timeouts = this._originalTimeouts
            }, t.prototype.stop = function() {
                this._timeout && clearTimeout(this._timeout), this._timeouts = [], this._cachedTimeouts = null
            }, t.prototype.retry = function(t) {
                if (this._timeout && clearTimeout(this._timeout), !t) return !1;
                var e = (new Date).getTime();
                if (t && e - this._operationStart >= this._maxRetryTime) return this._errors.unshift(new Error("RetryOperation timeout occurred")), !1;
                this._errors.push(t);
                var i = this._timeouts.shift();
                if (void 0 === i) {
                    if (!this._cachedTimeouts) return !1;
                    this._errors.splice(this._errors.length - 1, this._errors.length), this._timeouts = this._cachedTimeouts.slice(0), i = this._timeouts.shift()
                }
                var o = this,
                    r = setTimeout(function() {
                        o._attempts++, o._operationTimeoutCb && (o._timeout = setTimeout(function() {
                            o._operationTimeoutCb(o._attempts)
                        }, o._operationTimeout), o._options.unref && o._timeout.unref()), o._fn(o._attempts)
                    }, i);
                return this._options.unref && r.unref(), !0
            }, t.prototype.attempt = function(t, e) {
                this._fn = t, e && (e.timeout && (this._operationTimeout = e.timeout), e.cb && (this._operationTimeoutCb = e.cb));
                var i = this;
                this._operationTimeoutCb && (this._timeout = setTimeout(function() {
                    i._operationTimeoutCb()
                }, i._operationTimeout)), this._operationStart = (new Date).getTime(), this._fn(this._attempts)
            }, t.prototype.try = function(t) {
                console.log("Using RetryOperation.try() is deprecated"), this.attempt(t)
            }, t.prototype.start = function(t) {
                console.log("Using RetryOperation.start() is deprecated"), this.attempt(t)
            }, t.prototype.start = t.prototype.try, t.prototype.errors = function() {
                return this._errors
            }, t.prototype.attempts = function() {
                return this._attempts
            }, t.prototype.mainError = function() {
                if (0 === this._errors.length) return null;
                for (var t = {}, e = null, i = 0, o = 0; o < this._errors.length; o++) {
                    var r = this._errors[o],
                        s = r.message,
                        n = (t[s] || 0) + 1;
                    t[s] = n, n >= i && (e = r, i = n)
                }
                return e
            };
        }, {}],
        "rxeB": [function(require, module, exports) {
            var r = require("./retry_operation");
            exports.operation = function(t) {
                var e = exports.timeouts(t);
                return new r(e, {
                    forever: t && t.forever,
                    unref: t && t.unref,
                    maxRetryTime: t && t.maxRetryTime
                })
            }, exports.timeouts = function(r) {
                if (r instanceof Array) return [].concat(r);
                var t = {
                    retries: 10,
                    factor: 2,
                    minTimeout: 1e3,
                    maxTimeout: 1 / 0,
                    randomize: !1
                };
                for (var e in r) t[e] = r[e];
                if (t.minTimeout > t.maxTimeout) throw new Error("minTimeout is greater than maxTimeout");
                for (var o = [], n = 0; n < t.retries; n++) o.push(this.createTimeout(n, t));
                return r && r.forever && !o.length && o.push(this.createTimeout(n, t)), o.sort(function(r, t) {
                    return r - t
                }), o
            }, exports.createTimeout = function(r, t) {
                var e = t.randomize ? Math.random() + 1 : 1,
                    o = Math.round(e * t.minTimeout * Math.pow(t.factor, r));
                return o = Math.min(o, t.maxTimeout)
            }, exports.wrap = function(r, t, e) {
                if (t instanceof Array && (e = t, t = null), !e)
                    for (var o in e = [], r) "function" == typeof r[o] && e.push(o);
                for (var n = 0; n < e.length; n++) {
                    var i = e[n],
                        a = r[i];
                    r[i] = function(e) {
                        var o = exports.operation(t),
                            n = Array.prototype.slice.call(arguments, 1),
                            i = n.pop();
                        n.push(function(r) {
                            o.retry(r) || (r && (arguments[0] = o.mainError()), i.apply(this, arguments))
                        }), o.attempt(function() {
                            e.apply(r, n)
                        })
                    }.bind(r, a), r[i].options = t
                }
            };
        }, {
            "./retry_operation": "dNUO"
        }],
        "jaZo": [function(require, module, exports) {
            module.exports = require("./lib/retry");
        }, {
            "./lib/retry": "rxeB"
        }],
        "l4pJ": [function(require, module, exports) {
            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t, n, r, o, s, i) {
                try {
                    var c = e[s](i),
                        u = c.value
                } catch (f) {
                    return void n(f)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function n(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(o, s) {
                        var i = e.apply(n, r);

                        function c(e) {
                            t(i, o, s, c, u, "next", e)
                        }

                        function u(e) {
                            t(i, o, s, c, u, "throw", e)
                        }
                        c(void 0)
                    })
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            }

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function u(e) {
                var t = l();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }

            function f(t, n) {
                return !n || "object" !== e(n) && "function" != typeof n ? a(t) : n
            }

            function a(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function l() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var _ = require("websocket").w3cwebsocket,
                d = require("retry"),
                y = require("../Logger"),
                h = require("../EnhancedEventEmitter"),
                b = require("../Message"),
                m = "protoo",
                w = {
                    retries: 10,
                    factor: 2,
                    minTimeout: 1e3,
                    maxTimeout: 8e3
                },
                v = new y("WebSocketTransport"),
                g = function(e) {
                    i(o, h);
                    var t = u(o);

                    function o(e, n) {
                        var s;
                        return r(this, o), s = t.call(this, v), v.debug("constructor() [url:%s, options:%o]", e, n), s._closed = !1, s._url = e, s._options = n || {}, s._ws = null, s._runWebSocket(), s
                    }
                    return s(o, [{
                        key: "close",
                        value: function() {
                            if (!this._closed) {
                                v.debug("close()"), this._closed = !0, this.safeEmit("close");
                                try {
                                    this._ws.onopen = null, this._ws.onclose = null, this._ws.onerror = null, this._ws.onmessage = null, this._ws.close()
                                } catch (e) {
                                    v.error("close() | error closing the WebSocket: %o", e)
                                }
                            }
                        }
                    }, {
                        key: "send",
                        value: function() {
                            var e = n(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this._closed) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("transport closed");
                                        case 2:
                                            e.prev = 2, this._ws.send(JSON.stringify(t)), e.next = 10;
                                            break;
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(2), v.warn("send() failed:%o", e.t0), e.t0;
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [2, 6]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_runWebSocket",
                        value: function() {
                            var e = this,
                                t = d.operation(this._options.retry || w),
                                n = !1;
                            t.attempt(function(r) {
                                e._closed ? t.stop() : (v.debug("_runWebSocket() [currentAttempt:%s]", r), e._ws = new _(e._url, m, e._options.origin, e._options.headers, e._options.requestOptions, e._options.clientConfig), e._ws.onopen = function() {
                                    e._closed || (n = !0, e.safeEmit("open"))
                                }, e._ws.onclose = function(o) {
                                    if (!e._closed) {
                                        if (v.warn('WebSocket "close" event [wasClean:%s, code:%s, reason:"%s"]', o.wasClean, o.code, o.reason), 4e3 !== o.code) {
                                            if (n) {
                                                if (t.stop(), e.safeEmit("disconnected"), e._closed) return;
                                                return void e._runWebSocket()
                                            }
                                            if (e.safeEmit("failed", r), e._closed) return;
                                            if (t.retry(!0)) return
                                        }
                                        e._closed = !0, e.safeEmit("close")
                                    }
                                }, e._ws.onerror = function() {
                                    e._closed || v.error('WebSocket "error" event')
                                }, e._ws.onmessage = function(t) {
                                    if (!e._closed) {
                                        var n = b.parse(t.data);
                                        n && (0 !== e.listenerCount("message") ? e.safeEmit("message", n) : v.error('no listeners for WebSocket "message" event, ignoring received message'))
                                    }
                                })
                            })
                        }
                    }, {
                        key: "closed",
                        get: function() {
                            return this._closed
                        }
                    }]), o
                }();
            module.exports = g;
        }, {
            "websocket": "eEKz",
            "retry": "jaZo",
            "../Logger": "p5bA",
            "../EnhancedEventEmitter": "Oomd",
            "../Message": "fyRg"
        }],
        "Focm": [function(require, module, exports) {
            var e = require("../package.json"),
                r = e.version,
                o = require("./Peer"),
                s = require("./transports/WebSocketTransport");
            exports.version = r, exports.Peer = o, exports.WebSocketTransport = s;
        }, {
            "../package.json": "EHrm",
            "./Peer": "VMrj",
            "./transports/WebSocketTransport": "l4pJ"
        }]
    }, {}, ["Focm"], null)
//# sourceMappingURL=/index.js.map
export default module.exports;