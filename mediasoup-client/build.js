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
        "eDg8": [function(require, module, exports) {
            var define;
            var e;
            ! function(t, r) {
                "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof e && e.amd ? e([], r) : "object" == typeof exports ? exports.bowser = r() : t.bowser = r()
            }(this, function() {
                return function(e) {
                    var t = {};

                    function r(n) {
                        if (t[n]) return t[n].exports;
                        var i = t[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
                    }
                    return r.m = e, r.c = t, r.d = function(e, t, n) {
                        r.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: n
                        })
                    }, r.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, r.t = function(e, t) {
                        if (1 & t && (e = r(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var n = Object.create(null);
                        if (r.r(n), Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e)
                            for (var i in e) r.d(n, i, function(t) {
                                return e[t]
                            }.bind(null, i));
                        return n
                    }, r.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return r.d(t, "a", t), t
                    }, r.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, r.p = "", r(r.s = 90)
                }({
                    17: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n = r(18),
                            i = function() {
                                function e() {}
                                return e.getFirstMatch = function(e, t) {
                                    var r = t.match(e);
                                    return r && r.length > 0 && r[1] || ""
                                }, e.getSecondMatch = function(e, t) {
                                    var r = t.match(e);
                                    return r && r.length > 1 && r[2] || ""
                                }, e.matchAndReturnConst = function(e, t, r) {
                                    if (e.test(t)) return r
                                }, e.getWindowsVersionName = function(e) {
                                    switch (e) {
                                        case "NT":
                                            return "NT";
                                        case "XP":
                                            return "XP";
                                        case "NT 5.0":
                                            return "2000";
                                        case "NT 5.1":
                                            return "XP";
                                        case "NT 5.2":
                                            return "2003";
                                        case "NT 6.0":
                                            return "Vista";
                                        case "NT 6.1":
                                            return "7";
                                        case "NT 6.2":
                                            return "8";
                                        case "NT 6.3":
                                            return "8.1";
                                        case "NT 10.0":
                                            return "10";
                                        default:
                                            return
                                    }
                                }, e.getMacOSVersionName = function(e) {
                                    var t = e.split(".").splice(0, 2).map(function(e) {
                                        return parseInt(e, 10) || 0
                                    });
                                    if (t.push(0), 10 === t[0]) switch (t[1]) {
                                        case 5:
                                            return "Leopard";
                                        case 6:
                                            return "Snow Leopard";
                                        case 7:
                                            return "Lion";
                                        case 8:
                                            return "Mountain Lion";
                                        case 9:
                                            return "Mavericks";
                                        case 10:
                                            return "Yosemite";
                                        case 11:
                                            return "El Capitan";
                                        case 12:
                                            return "Sierra";
                                        case 13:
                                            return "High Sierra";
                                        case 14:
                                            return "Mojave";
                                        case 15:
                                            return "Catalina";
                                        default:
                                            return
                                    }
                                }, e.getAndroidVersionName = function(e) {
                                    var t = e.split(".").splice(0, 2).map(function(e) {
                                        return parseInt(e, 10) || 0
                                    });
                                    if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                                }, e.getVersionPrecision = function(e) {
                                    return e.split(".").length
                                }, e.compareVersions = function(t, r, n) {
                                    void 0 === n && (n = !1);
                                    var i = e.getVersionPrecision(t),
                                        s = e.getVersionPrecision(r),
                                        o = Math.max(i, s),
                                        a = 0,
                                        u = e.map([t, r], function(t) {
                                            var r = o - e.getVersionPrecision(t),
                                                n = t + new Array(r + 1).join(".0");
                                            return e.map(n.split("."), function(e) {
                                                return new Array(20 - e.length).join("0") + e
                                            }).reverse()
                                        });
                                    for (n && (a = o - Math.min(i, s)), o -= 1; o >= a;) {
                                        if (u[0][o] > u[1][o]) return 1;
                                        if (u[0][o] === u[1][o]) {
                                            if (o === a) return 0;
                                            o -= 1
                                        } else if (u[0][o] < u[1][o]) return -1
                                    }
                                }, e.map = function(e, t) {
                                    var r, n = [];
                                    if (Array.prototype.map) return Array.prototype.map.call(e, t);
                                    for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                                    return n
                                }, e.find = function(e, t) {
                                    var r, n;
                                    if (Array.prototype.find) return Array.prototype.find.call(e, t);
                                    for (r = 0, n = e.length; r < n; r += 1) {
                                        var i = e[r];
                                        if (t(i, r)) return i
                                    }
                                }, e.assign = function(e) {
                                    for (var t, r, n = e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
                                    if (Object.assign) return Object.assign.apply(Object, [e].concat(s));
                                    var a = function() {
                                        var e = s[t];
                                        "object" == typeof e && null !== e && Object.keys(e).forEach(function(t) {
                                            n[t] = e[t]
                                        })
                                    };
                                    for (t = 0, r = s.length; t < r; t += 1) a();
                                    return e
                                }, e.getBrowserAlias = function(e) {
                                    return n.BROWSER_ALIASES_MAP[e]
                                }, e.getBrowserTypeByAlias = function(e) {
                                    return n.BROWSER_MAP[e] || ""
                                }, e
                            }();
                        t.default = i, e.exports = t.default
                    },
                    18: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                            "Amazon Silk": "amazon_silk",
                            "Android Browser": "android",
                            Bada: "bada",
                            BlackBerry: "blackberry",
                            Chrome: "chrome",
                            Chromium: "chromium",
                            Electron: "electron",
                            Epiphany: "epiphany",
                            Firefox: "firefox",
                            Focus: "focus",
                            Generic: "generic",
                            "Google Search": "google_search",
                            Googlebot: "googlebot",
                            "Internet Explorer": "ie",
                            "K-Meleon": "k_meleon",
                            Maxthon: "maxthon",
                            "Microsoft Edge": "edge",
                            "MZ Browser": "mz",
                            "NAVER Whale Browser": "naver",
                            Opera: "opera",
                            "Opera Coast": "opera_coast",
                            PhantomJS: "phantomjs",
                            Puffin: "puffin",
                            QupZilla: "qupzilla",
                            QQ: "qq",
                            QQLite: "qqlite",
                            Safari: "safari",
                            Sailfish: "sailfish",
                            "Samsung Internet for Android": "samsung_internet",
                            SeaMonkey: "seamonkey",
                            Sleipnir: "sleipnir",
                            Swing: "swing",
                            Tizen: "tizen",
                            "UC Browser": "uc",
                            Vivaldi: "vivaldi",
                            "WebOS Browser": "webos",
                            WeChat: "wechat",
                            "Yandex Browser": "yandex",
                            Roku: "roku"
                        }, t.BROWSER_MAP = {
                            amazon_silk: "Amazon Silk",
                            android: "Android Browser",
                            bada: "Bada",
                            blackberry: "BlackBerry",
                            chrome: "Chrome",
                            chromium: "Chromium",
                            electron: "Electron",
                            epiphany: "Epiphany",
                            firefox: "Firefox",
                            focus: "Focus",
                            generic: "Generic",
                            googlebot: "Googlebot",
                            google_search: "Google Search",
                            ie: "Internet Explorer",
                            k_meleon: "K-Meleon",
                            maxthon: "Maxthon",
                            edge: "Microsoft Edge",
                            mz: "MZ Browser",
                            naver: "NAVER Whale Browser",
                            opera: "Opera",
                            opera_coast: "Opera Coast",
                            phantomjs: "PhantomJS",
                            puffin: "Puffin",
                            qupzilla: "QupZilla",
                            qq: "QQ Browser",
                            qqlite: "QQ Browser Lite",
                            safari: "Safari",
                            sailfish: "Sailfish",
                            samsung_internet: "Samsung Internet for Android",
                            seamonkey: "SeaMonkey",
                            sleipnir: "Sleipnir",
                            swing: "Swing",
                            tizen: "Tizen",
                            uc: "UC Browser",
                            vivaldi: "Vivaldi",
                            webos: "WebOS Browser",
                            wechat: "WeChat",
                            yandex: "Yandex Browser"
                        }, t.PLATFORMS_MAP = {
                            tablet: "tablet",
                            mobile: "mobile",
                            desktop: "desktop",
                            tv: "tv"
                        }, t.OS_MAP = {
                            WindowsPhone: "Windows Phone",
                            Windows: "Windows",
                            MacOS: "macOS",
                            iOS: "iOS",
                            Android: "Android",
                            WebOS: "WebOS",
                            BlackBerry: "BlackBerry",
                            Bada: "Bada",
                            Tizen: "Tizen",
                            Linux: "Linux",
                            ChromeOS: "Chrome OS",
                            PlayStation4: "PlayStation 4",
                            Roku: "Roku"
                        }, t.ENGINE_MAP = {
                            EdgeHTML: "EdgeHTML",
                            Blink: "Blink",
                            Trident: "Trident",
                            Presto: "Presto",
                            Gecko: "Gecko",
                            WebKit: "WebKit"
                        }
                    },
                    90: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, i = (n = r(91)) && n.__esModule ? n : {
                                default: n
                            },
                            s = r(18);

                        function o(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }
                        var a = function() {
                            function e() {}
                            var t, r;
                            return e.getParser = function(e, t) {
                                if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
                                return new i.default(e, t)
                            }, e.parse = function(e) {
                                return new i.default(e).getResult()
                            }, t = e, r = [{
                                key: "BROWSER_MAP",
                                get: function() {
                                    return s.BROWSER_MAP
                                }
                            }, {
                                key: "ENGINE_MAP",
                                get: function() {
                                    return s.ENGINE_MAP
                                }
                            }, {
                                key: "OS_MAP",
                                get: function() {
                                    return s.OS_MAP
                                }
                            }, {
                                key: "PLATFORMS_MAP",
                                get: function() {
                                    return s.PLATFORMS_MAP
                                }
                            }], null && o(t.prototype, null), r && o(t, r), e
                        }();
                        t.default = a, e.exports = t.default
                    },
                    91: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n = u(r(92)),
                            i = u(r(93)),
                            s = u(r(94)),
                            o = u(r(95)),
                            a = u(r(17));

                        function u(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        var d = function() {
                            function e(e, t) {
                                if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                                this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                            }
                            var t = e.prototype;
                            return t.getUA = function() {
                                return this._ua
                            }, t.test = function(e) {
                                return e.test(this._ua)
                            }, t.parseBrowser = function() {
                                var e = this;
                                this.parsedResult.browser = {};
                                var t = a.default.find(n.default, function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t)
                                    });
                                    throw new Error("Browser's test function is not valid")
                                });
                                return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                            }, t.getBrowser = function() {
                                return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                            }, t.getBrowserName = function(e) {
                                return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                            }, t.getBrowserVersion = function() {
                                return this.getBrowser().version
                            }, t.getOS = function() {
                                return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                            }, t.parseOS = function() {
                                var e = this;
                                this.parsedResult.os = {};
                                var t = a.default.find(i.default, function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t)
                                    });
                                    throw new Error("Browser's test function is not valid")
                                });
                                return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                            }, t.getOSName = function(e) {
                                var t = this.getOS().name;
                                return e ? String(t).toLowerCase() || "" : t || ""
                            }, t.getOSVersion = function() {
                                return this.getOS().version
                            }, t.getPlatform = function() {
                                return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                            }, t.getPlatformType = function(e) {
                                void 0 === e && (e = !1);
                                var t = this.getPlatform().type;
                                return e ? String(t).toLowerCase() || "" : t || ""
                            }, t.parsePlatform = function() {
                                var e = this;
                                this.parsedResult.platform = {};
                                var t = a.default.find(s.default, function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t)
                                    });
                                    throw new Error("Browser's test function is not valid")
                                });
                                return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                            }, t.getEngine = function() {
                                return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                            }, t.getEngineName = function(e) {
                                return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                            }, t.parseEngine = function() {
                                var e = this;
                                this.parsedResult.engine = {};
                                var t = a.default.find(o.default, function(t) {
                                    if ("function" == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t)
                                    });
                                    throw new Error("Browser's test function is not valid")
                                });
                                return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                            }, t.parse = function() {
                                return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                            }, t.getResult = function() {
                                return a.default.assign({}, this.parsedResult)
                            }, t.satisfies = function(e) {
                                var t = this,
                                    r = {},
                                    n = 0,
                                    i = {},
                                    s = 0;
                                if (Object.keys(e).forEach(function(t) {
                                        var o = e[t];
                                        "string" == typeof o ? (i[t] = o, s += 1) : "object" == typeof o && (r[t] = o, n += 1)
                                    }), n > 0) {
                                    var o = Object.keys(r),
                                        u = a.default.find(o, function(e) {
                                            return t.isOS(e)
                                        });
                                    if (u) {
                                        var d = this.satisfies(r[u]);
                                        if (void 0 !== d) return d
                                    }
                                    var c = a.default.find(o, function(e) {
                                        return t.isPlatform(e)
                                    });
                                    if (c) {
                                        var f = this.satisfies(r[c]);
                                        if (void 0 !== f) return f
                                    }
                                }
                                if (s > 0) {
                                    var l = Object.keys(i),
                                        h = a.default.find(l, function(e) {
                                            return t.isBrowser(e, !0)
                                        });
                                    if (void 0 !== h) return this.compareVersion(i[h])
                                }
                            }, t.isBrowser = function(e, t) {
                                void 0 === t && (t = !1);
                                var r = this.getBrowserName().toLowerCase(),
                                    n = e.toLowerCase(),
                                    i = a.default.getBrowserTypeByAlias(n);
                                return t && i && (n = i.toLowerCase()), n === r
                            }, t.compareVersion = function(e) {
                                var t = [0],
                                    r = e,
                                    n = !1,
                                    i = this.getBrowserVersion();
                                if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(a.default.compareVersions(i, r, n)) > -1
                            }, t.isOS = function(e) {
                                return this.getOSName(!0) === String(e).toLowerCase()
                            }, t.isPlatform = function(e) {
                                return this.getPlatformType(!0) === String(e).toLowerCase()
                            }, t.isEngine = function(e) {
                                return this.getEngineName(!0) === String(e).toLowerCase()
                            }, t.is = function(e) {
                                return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e)
                            }, t.some = function(e) {
                                var t = this;
                                return void 0 === e && (e = []), e.some(function(e) {
                                    return t.is(e)
                                })
                            }, e
                        }();
                        t.default = d, e.exports = t.default
                    },
                    92: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, i = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            s = /version\/(\d+(\.?_?\d+)+)/i,
                            o = [{
                                test: [/googlebot/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Googlebot"
                                        },
                                        r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opera/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:opera)[\s\/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opr\/|opios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera"
                                        },
                                        r = i.default.getFirstMatch(/(?:opr|opios)[\s\/](\S+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/SamsungBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Samsung Internet for Android"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/Whale/i],
                                describe: function(e) {
                                    var t = {
                                            name: "NAVER Whale Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/MZBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "MZ Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/focus/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Focus"
                                        },
                                        r = i.default.getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/swing/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Swing"
                                        },
                                        r = i.default.getFirstMatch(/(?:swing)[\s\/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/coast/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera Coast"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:coast)[\s\/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/yabrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Yandex Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/ucbrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "UC Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s\/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/Maxthon|mxios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Maxthon"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s\/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/epiphany/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Epiphany"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:epiphany)[\s\/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/puffin/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Puffin"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:puffin)[\s\/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/sleipnir/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Sleipnir"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:sleipnir)[\s\/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/k-meleon/i],
                                describe: function(e) {
                                    var t = {
                                            name: "K-Meleon"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:k-meleon)[\s\/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/micromessenger/i],
                                describe: function(e) {
                                    var t = {
                                            name: "WeChat"
                                        },
                                        r = i.default.getFirstMatch(/(?:micromessenger)[\s\/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/qqbrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[\/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/msie|trident/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Internet Explorer"
                                        },
                                        r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/\sedg\//i],
                                describe: function(e) {
                                    var t = {
                                            name: "Microsoft Edge"
                                        },
                                        r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/edg([ea]|ios)/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Microsoft Edge"
                                        },
                                        r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/vivaldi/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Vivaldi"
                                        },
                                        r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/seamonkey/i],
                                describe: function(e) {
                                    var t = {
                                            name: "SeaMonkey"
                                        },
                                        r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/sailfish/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Sailfish"
                                        },
                                        r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/silk/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Amazon Silk"
                                        },
                                        r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/phantom/i],
                                describe: function(e) {
                                    var t = {
                                            name: "PhantomJS"
                                        },
                                        r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/slimerjs/i],
                                describe: function(e) {
                                    var t = {
                                            name: "SlimerJS"
                                        },
                                        r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                                describe: function(e) {
                                    var t = {
                                            name: "BlackBerry"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/(web|hpw)[o0]s/i],
                                describe: function(e) {
                                    var t = {
                                            name: "WebOS Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/bada/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Bada"
                                        },
                                        r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/tizen/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Tizen"
                                        },
                                        r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/qupzilla/i],
                                describe: function(e) {
                                    var t = {
                                            name: "QupZilla"
                                        },
                                        r = i.default.getFirstMatch(/(?:qupzilla)[\s\/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/firefox|iceweasel|fxios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Firefox"
                                        },
                                        r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s\/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/electron/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Electron"
                                        },
                                        r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/chromium/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Chromium"
                                        },
                                        r = i.default.getFirstMatch(/(?:chromium)[\s\/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/chrome|crios|crmo/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Chrome"
                                        },
                                        r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/GSA/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Google Search"
                                        },
                                        r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    var t = !e.test(/like android/i),
                                        r = e.test(/android/i);
                                    return t && r
                                },
                                describe: function(e) {
                                    var t = {
                                            name: "Android Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/playstation 4/i],
                                describe: function(e) {
                                    var t = {
                                            name: "PlayStation 4"
                                        },
                                        r = i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/safari|applewebkit/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Safari"
                                        },
                                        r = i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/.*/i],
                                describe: function(e) {
                                    var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                    return {
                                        name: i.default.getFirstMatch(t, e),
                                        version: i.default.getSecondMatch(t, e)
                                    }
                                }
                            }];
                        t.default = o, e.exports = t.default
                    },
                    93: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, i = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            s = r(18),
                            o = [{
                                test: [/Roku\/DVP/],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                                    return {
                                        name: s.OS_MAP.Roku,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/windows phone/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.WindowsPhone,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/windows /i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                        r = i.default.getWindowsVersionName(t);
                                    return {
                                        name: s.OS_MAP.Windows,
                                        version: t,
                                        versionName: r
                                    }
                                }
                            }, {
                                test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
                                describe: function(e) {
                                    var t = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                                    return {
                                        name: s.OS_MAP.iOS,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/macintosh/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                        r = i.default.getMacOSVersionName(t),
                                        n = {
                                            name: s.OS_MAP.MacOS,
                                            version: t
                                        };
                                    return r && (n.versionName = r), n
                                }
                            }, {
                                test: [/(ipod|iphone|ipad)/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                                    return {
                                        name: s.OS_MAP.iOS,
                                        version: t
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = !e.test(/like android/i),
                                        r = e.test(/android/i);
                                    return t && r
                                },
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/android[\s\/-](\d+(\.\d+)*)/i, e),
                                        r = i.default.getAndroidVersionName(t),
                                        n = {
                                            name: s.OS_MAP.Android,
                                            version: t
                                        };
                                    return r && (n.versionName = r), n
                                }
                            }, {
                                test: [/(web|hpw)[o0]s/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                        r = {
                                            name: s.OS_MAP.WebOS
                                        };
                                    return t && t.length && (r.version = t), r
                                }
                            }, {
                                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                                    return {
                                        name: s.OS_MAP.BlackBerry,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/bada/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.Bada,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/tizen/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.Tizen,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/linux/i],
                                describe: function() {
                                    return {
                                        name: s.OS_MAP.Linux
                                    }
                                }
                            }, {
                                test: [/CrOS/],
                                describe: function() {
                                    return {
                                        name: s.OS_MAP.ChromeOS
                                    }
                                }
                            }, {
                                test: [/PlayStation 4/],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/PlayStation 4[\/\s](\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.PlayStation4,
                                        version: t
                                    }
                                }
                            }];
                        t.default = o, e.exports = t.default
                    },
                    94: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, i = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            s = r(18),
                            o = [{
                                test: [/googlebot/i],
                                describe: function() {
                                    return {
                                        type: "bot",
                                        vendor: "Google"
                                    }
                                }
                            }, {
                                test: [/huawei/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                        r = {
                                            type: s.PLATFORMS_MAP.mobile,
                                            vendor: "Huawei"
                                        };
                                    return t && (r.model = t), r
                                }
                            }, {
                                test: [/nexus\s*(?:7|8|9|10).*/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Nexus"
                                    }
                                }
                            }, {
                                test: [/ipad/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Apple",
                                        model: "iPad"
                                    }
                                }
                            }, {
                                test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Apple",
                                        model: "iPad"
                                    }
                                }
                            }, {
                                test: [/kftt build/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Amazon",
                                        model: "Kindle Fire HD 7"
                                    }
                                }
                            }, {
                                test: [/silk/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Amazon"
                                    }
                                }
                            }, {
                                test: [/tablet(?! pc)/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = e.test(/ipod|iphone/i),
                                        r = e.test(/like (ipod|iphone)/i);
                                    return t && !r
                                },
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "Apple",
                                        model: t
                                    }
                                }
                            }, {
                                test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "Nexus"
                                    }
                                }
                            }, {
                                test: [/[^-]mobi/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "blackberry" === e.getBrowserName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "BlackBerry"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "bada" === e.getBrowserName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "windows phone" === e.getBrowserName()
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "Microsoft"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = Number(String(e.getOSVersion()).split(".")[0]);
                                    return "android" === e.getOSName(!0) && t >= 3
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "android" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "macos" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.desktop,
                                        vendor: "Apple"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "windows" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.desktop
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "linux" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.desktop
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "playstation 4" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tv
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "roku" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tv
                                    }
                                }
                            }];
                        t.default = o, e.exports = t.default
                    },
                    95: function(e, t, r) {
                        "use strict";
                        t.__esModule = !0, t.default = void 0;
                        var n, i = (n = r(17)) && n.__esModule ? n : {
                                default: n
                            },
                            s = r(18),
                            o = [{
                                test: function(e) {
                                    return "microsoft edge" === e.getBrowserName(!0)
                                },
                                describe: function(e) {
                                    if (/\sedg\//i.test(e)) return {
                                        name: s.ENGINE_MAP.Blink
                                    };
                                    var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                                    return {
                                        name: s.ENGINE_MAP.EdgeHTML,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/trident/i],
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.Trident
                                        },
                                        r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    return e.test(/presto/i)
                                },
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.Presto
                                        },
                                        r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    var t = e.test(/gecko/i),
                                        r = e.test(/like gecko/i);
                                    return t && !r
                                },
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.Gecko
                                        },
                                        r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/(apple)?webkit\/537\.36/i],
                                describe: function() {
                                    return {
                                        name: s.ENGINE_MAP.Blink
                                    }
                                }
                            }, {
                                test: [/(apple)?webkit/i],
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.WebKit
                                        },
                                        r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }];
                        t.default = o, e.exports = t.default
                    }
                })
            });
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
            "use strict";

            function e(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function n(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function t(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var r = require("debug"),
                o = "mediasoup-client",
                c = function() {
                    function n(t) {
                        e(this, n), t ? (this._debug = r.default("".concat(o, ":").concat(t)), this._warn = r.default("".concat(o, ":WARN:").concat(t)), this._error = r.default("".concat(o, ":ERROR:").concat(t))) : (this._debug = r.default(o), this._warn = r.default("".concat(o, ":WARN")), this._error = r.default("".concat(o, ":ERROR"))), this._debug.log = console.info.bind(console), this._warn.log = console.warn.bind(console), this._error.log = console.error.bind(console)
                    }
                    return t(n, [{
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
                    }]), n
                }();
            exports.Logger = c;
        }, {
            "debug": "BYFN"
        }],
        "p8GN": [function(require, module, exports) {
            "use strict";

            function t(r) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(r)
            }

            function r(t, r) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function e(t, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(r && r.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), r && p(t, r)
            }

            function n(t) {
                var r = a();
                return function() {
                    var e, n = s(t);
                    if (r) {
                        var c = s(this).constructor;
                        e = Reflect.construct(n, arguments, c)
                    } else e = n.apply(this, arguments);
                    return o(this, e)
                }
            }

            function o(r, e) {
                return !e || "object" !== t(e) && "function" != typeof e ? c(r) : e
            }

            function c(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function u(t) {
                var r = "function" == typeof Map ? new Map : void 0;
                return (u = function(t) {
                    if (null === t || !f(t)) return t;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== r) {
                        if (r.has(t)) return r.get(t);
                        r.set(t, e)
                    }

                    function e() {
                        return i(t, arguments, s(this).constructor)
                    }
                    return e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), p(e, t)
                })(t)
            }

            function i(t, r, e) {
                return (i = a() ? Reflect.construct : function(t, r, e) {
                    var n = [null];
                    n.push.apply(n, r);
                    var o = new(Function.bind.apply(t, n));
                    return e && p(o, e.prototype), o
                }).apply(null, arguments)
            }

            function a() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }

            function f(t) {
                return -1 !== Function.toString.call(t).indexOf("[native code]")
            }

            function p(t, r) {
                return (p = Object.setPrototypeOf || function(t, r) {
                    return t.__proto__ = r, t
                })(t, r)
            }

            function s(t) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var l = function(t) {
                e(i, u(Error));
                var o = n(i);

                function i(t) {
                    var e;
                    return r(this, i), (e = o.call(this, t)).name = "UnsupportedError", Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(c(e), i) : e.stack = new Error(t).stack, e
                }
                return i
            }();
            exports.UnsupportedError = l;
            var y = function(t) {
                e(i, u(Error));
                var o = n(i);

                function i(t) {
                    var e;
                    return r(this, i), (e = o.call(this, t)).name = "InvalidStateError", Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(c(e), i) : e.stack = new Error(t).stack, e
                }
                return i
            }();
            exports.InvalidStateError = y;
        }, {}],
        "AoQt": [function(require, module, exports) {
            function e(e, n) {
                var o;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (o = r(e)) || n && e && "number" == typeof e.length) {
                        o && (e = o);
                        var t = 0,
                            l = function() {};
                        return {
                            s: l,
                            n: function() {
                                return t >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[t++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: l
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    s = !1;
                return {
                    s: function() {
                        o = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = o.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == o.return || o.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function r(e, r) {
                if (e) {
                    if ("string" == typeof e) return n(e, r);
                    var o = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? n(e, r) : void 0
                }
            }

            function n(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, o = new Array(r); n < r; n++) o[n] = e[n];
                return o
            }

            function o(e, r) {
                for (var n = 0; n < r.length; n++) {
                    var o = r[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function t(e, r, n) {
                return r && o(e.prototype, r), n && o(e, n), e
            }

            function l(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }
            var i = require("debug")("h264-profile-level-id");
            i.log = console.info.bind(console);
            var a = 1,
                s = 2,
                f = 3,
                p = 4,
                c = 5;
            exports.ProfileConstrainedBaseline = a, exports.ProfileBaseline = s, exports.ProfileMain = f, exports.ProfileConstrainedHigh = p, exports.ProfileHigh = c;
            var u = 0,
                v = 10,
                d = 11,
                x = 12,
                h = 13,
                w = 20,
                L = 21,
                g = 22,
                b = 30,
                y = 31,
                _ = 32,
                m = 40,
                I = 41,
                P = 42,
                S = 50,
                k = 51,
                A = 52;
            exports.Level1_b = u, exports.Level1 = v, exports.Level1_1 = d, exports.Level1_2 = x, exports.Level1_3 = h, exports.Level2 = w, exports.Level2_1 = L, exports.Level2_2 = g, exports.Level3 = b, exports.Level3_1 = y, exports.Level3_2 = _, exports.Level4 = m, exports.Level4_1 = I, exports.Level4_2 = P, exports.Level5 = S, exports.Level5_1 = k, exports.Level5_2 = A;
            var T = function e(r, n) {
                l(this, e), this.profile = r, this.level = n
            };
            exports.ProfileLevelId = T;
            var E = new T(a, y),
                j = 16,
                C = function() {
                    function e(r) {
                        l(this, e), this._mask = ~B("x", r), this._maskedValue = B("1", r)
                    }
                    return t(e, [{
                        key: "isMatch",
                        value: function(e) {
                            return this._maskedValue === (e & this._mask)
                        }
                    }]), e
                }(),
                M = function e(r, n, o) {
                    l(this, e), this.profile_idc = r, this.profile_iop = n, this.profile = o
                },
                z = [new M(66, new C("x1xx0000"), a), new M(77, new C("1xxx0000"), a), new M(88, new C("11xx0000"), a), new M(66, new C("x0xx0000"), s), new M(88, new C("10xx0000"), s), new M(77, new C("0x0x0000"), f), new M(100, new C("00000000"), c), new M(100, new C("00001100"), p)];

            function B(e, r) {
                return (r[0] === e) << 7 | (r[1] === e) << 6 | (r[2] === e) << 5 | (r[3] === e) << 4 | (r[4] === e) << 3 | (r[5] === e) << 2 | (r[6] === e) << 1 | (r[7] === e) << 0
            }

            function F(e, r) {
                return e === u ? r !== v && r !== u : r === u ? e !== v : e < r
            }

            function H(e, r) {
                return F(e, r) ? e : r
            }

            function O() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})["level-asymmetry-allowed"];
                return 1 === e || "1" === e
            }
            exports.parseProfileLevelId = function(r) {
                if ("string" != typeof r || 6 !== r.length) return null;
                var n = parseInt(r, 16);
                if (0 === n) return null;
                var o, t = 255 & n,
                    l = n >> 8 & 255,
                    a = n >> 16 & 255;
                switch (t) {
                    case d:
                        o = 0 != (l & j) ? u : d;
                        break;
                    case v:
                    case x:
                    case h:
                    case w:
                    case L:
                    case g:
                    case b:
                    case y:
                    case _:
                    case m:
                    case I:
                    case P:
                    case S:
                    case k:
                    case A:
                        o = t;
                        break;
                    default:
                        return i("parseProfileLevelId() | unrecognized level_idc:%s", t), null
                }
                var s, f = e(z);
                try {
                    for (f.s(); !(s = f.n()).done;) {
                        var p = s.value;
                        if (a === p.profile_idc && p.profile_iop.isMatch(l)) return new T(p.profile, o)
                    }
                } catch (c) {
                    f.e(c)
                } finally {
                    f.f()
                }
                return i("parseProfileLevelId() | unrecognized profile_idc/profile_iop combination"), null
            }, exports.profileLevelIdToString = function(e) {
                if (e.level == u) switch (e.profile) {
                    case a:
                        return "42f00b";
                    case s:
                        return "42100b";
                    case f:
                        return "4d100b";
                    default:
                        return i("profileLevelIdToString() | Level 1_b not is allowed for profile:%s", e.profile), null
                }
                var r;
                switch (e.profile) {
                    case a:
                        r = "42e0";
                        break;
                    case s:
                        r = "4200";
                        break;
                    case f:
                        r = "4d00";
                        break;
                    case p:
                        r = "640c";
                        break;
                    case c:
                        r = "6400";
                        break;
                    default:
                        return i("profileLevelIdToString() | unrecognized profile:%s", e.profile), null
                }
                var n = e.level.toString(16);
                return 1 === n.length && (n = "0".concat(n)), "".concat(r).concat(n)
            }, exports.parseSdpProfileLevelId = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})["profile-level-id"];
                return e ? exports.parseProfileLevelId(e) : E
            }, exports.isSameProfile = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = exports.parseSdpProfileLevelId(e),
                    o = exports.parseSdpProfileLevelId(r);
                return Boolean(n && o && n.profile === o.profile)
            }, exports.generateProfileLevelIdForAnswer = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e["profile-level-id"] && !r["profile-level-id"]) return i("generateProfileLevelIdForAnswer() | no profile-level-id in local and remote params"), null;
                var n = exports.parseSdpProfileLevelId(e),
                    o = exports.parseSdpProfileLevelId(r);
                if (!n) throw new TypeError("invalid local_profile_level_id");
                if (!o) throw new TypeError("invalid remote_profile_level_id");
                if (n.profile !== o.profile) throw new TypeError("H264 Profile mismatch");
                var t = O(e) && O(r),
                    l = n.level,
                    a = H(l, o.level),
                    s = t ? l : a;
                return i("generateProfileLevelIdForAnswer() | result: [profile:%s, level:%s]", n.profile, s), exports.profileLevelIdToString(new T(n.profile, s))
            };
        }, {
            "debug": "BYFN"
        }],
        "FOZT": [function(require, module, exports) {
            "use strict";

            function t(o) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(o)
            }

            function o(o) {
                return "object" !== t(o) ? {} : JSON.parse(JSON.stringify(o))
            }

            function e() {
                return Math.round(1e7 * Math.random())
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.clone = o, exports.generateRandomNumber = e;
        }, {}],
        "alA0": [function(require, module, exports) {
            "use strict";

            function e(e, t) {
                var a;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (a = r(e)) || t && e && "number" == typeof e.length) {
                        a && (e = a);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, c = !0,
                    s = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            c || null == a.return || a.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function r(e, r) {
                if (e) {
                    if ("string" == typeof e) return t(e, r);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? t(e, r) : void 0
                }
            }

            function t(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
                return a
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var n = require("h264-profile-level-id"),
                o = require("./utils"),
                i = "probator",
                c = 1234,
                s = 127;

            function p(r) {
                if ("object" !== a(r)) throw new TypeError("caps is not an object");
                if (r.codecs && !Array.isArray(r.codecs)) throw new TypeError("caps.codecs is not an array");
                r.codecs || (r.codecs = []);
                var t, n = e(r.codecs);
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        d(t.value)
                    }
                } catch (c) {
                    n.e(c)
                } finally {
                    n.f()
                }
                if (r.headerExtensions && !Array.isArray(r.headerExtensions)) throw new TypeError("caps.headerExtensions is not an array");
                r.headerExtensions || (r.headerExtensions = []);
                var o, i = e(r.headerExtensions);
                try {
                    for (i.s(); !(o = i.n()).done;) {
                        f(o.value)
                    }
                } catch (c) {
                    i.e(c)
                } finally {
                    i.f()
                }
            }

            function d(r) {
                var t = new RegExp("^(audio|video)/(.+)", "i");
                if ("object" !== a(r)) throw new TypeError("codec is not an object");
                if (!r.mimeType || "string" != typeof r.mimeType) throw new TypeError("missing codec.mimeType");
                var n = t.exec(r.mimeType);
                if (!n) throw new TypeError("invalid codec.mimeType");
                if (r.kind = n[1].toLowerCase(), r.preferredPayloadType && "number" != typeof r.preferredPayloadType) throw new TypeError("invalid codec.preferredPayloadType");
                if ("number" != typeof r.clockRate) throw new TypeError("missing codec.clockRate");
                "audio" === r.kind ? "number" != typeof r.channels && (r.channels = 1) : delete r.channels, r.parameters && "object" === a(r.parameters) || (r.parameters = {});
                for (var o = 0, i = Object.keys(r.parameters); o < i.length; o++) {
                    var c = i[o],
                        s = r.parameters[c];
                    if (void 0 === s && (r.parameters[c] = "", s = ""), "string" != typeof s && "number" != typeof s) throw new TypeError("invalid codec parameter [key:".concat(c, "s, value:").concat(s, "]"));
                    if ("apt" === c && "number" != typeof s) throw new TypeError("invalid codec apt parameter")
                }
                r.rtcpFeedback && Array.isArray(r.rtcpFeedback) || (r.rtcpFeedback = []);
                var p, d = e(r.rtcpFeedback);
                try {
                    for (d.s(); !(p = d.n()).done;) {
                        y(p.value)
                    }
                } catch (f) {
                    d.e(f)
                } finally {
                    d.f()
                }
            }

            function y(e) {
                if ("object" !== a(e)) throw new TypeError("fb is not an object");
                if (!e.type || "string" != typeof e.type) throw new TypeError("missing fb.type");
                e.parameter && "string" == typeof e.parameter || (e.parameter = "")
            }

            function f(e) {
                if ("object" !== a(e)) throw new TypeError("ext is not an object");
                if (e.kind && "string" == typeof e.kind || (e.kind = ""), "" !== e.kind && "audio" !== e.kind && "video" !== e.kind) throw new TypeError("invalid ext.kind");
                if (!e.uri || "string" != typeof e.uri) throw new TypeError("missing ext.uri");
                if ("number" != typeof e.preferredId) throw new TypeError("missing ext.preferredId");
                if (e.preferredEncrypt && "boolean" != typeof e.preferredEncrypt) throw new TypeError("invalid ext.preferredEncrypt");
                if (e.preferredEncrypt || (e.preferredEncrypt = !1), e.direction && "string" != typeof e.direction) throw new TypeError("invalid ext.direction");
                e.direction || (e.direction = "sendrecv")
            }

            function l(r) {
                if ("object" !== a(r)) throw new TypeError("params is not an object");
                if (r.mid && "string" != typeof r.mid) throw new TypeError("params.mid is not a string");
                if (!Array.isArray(r.codecs)) throw new TypeError("missing params.codecs");
                var t, n = e(r.codecs);
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        m(t.value)
                    }
                } catch (p) {
                    n.e(p)
                } finally {
                    n.f()
                }
                if (r.headerExtensions && !Array.isArray(r.headerExtensions)) throw new TypeError("params.headerExtensions is not an array");
                r.headerExtensions || (r.headerExtensions = []);
                var o, i = e(r.headerExtensions);
                try {
                    for (i.s(); !(o = i.n()).done;) {
                        u(o.value)
                    }
                } catch (p) {
                    i.e(p)
                } finally {
                    i.f()
                }
                if (r.encodings && !Array.isArray(r.encodings)) throw new TypeError("params.encodings is not an array");
                r.encodings || (r.encodings = []);
                var c, s = e(r.encodings);
                try {
                    for (s.s(); !(c = s.n()).done;) {
                        h(c.value)
                    }
                } catch (p) {
                    s.e(p)
                } finally {
                    s.f()
                }
                if (r.rtcp && "object" !== a(r.rtcp)) throw new TypeError("params.rtcp is not an object");
                r.rtcp || (r.rtcp = {}), v(r.rtcp)
            }

            function m(r) {
                var t = new RegExp("^(audio|video)/(.+)", "i");
                if ("object" !== a(r)) throw new TypeError("codec is not an object");
                if (!r.mimeType || "string" != typeof r.mimeType) throw new TypeError("missing codec.mimeType");
                var n = t.exec(r.mimeType);
                if (!n) throw new TypeError("invalid codec.mimeType");
                if ("number" != typeof r.payloadType) throw new TypeError("missing codec.payloadType");
                if ("number" != typeof r.clockRate) throw new TypeError("missing codec.clockRate");
                "audio" === n[1].toLowerCase() ? "number" != typeof r.channels && (r.channels = 1) : delete r.channels, r.parameters && "object" === a(r.parameters) || (r.parameters = {});
                for (var o = 0, i = Object.keys(r.parameters); o < i.length; o++) {
                    var c = i[o],
                        s = r.parameters[c];
                    if (void 0 === s && (r.parameters[c] = "", s = ""), "string" != typeof s && "number" != typeof s) throw new TypeError("invalid codec parameter [key:".concat(c, "s, value:").concat(s, "]"));
                    if ("apt" === c && "number" != typeof s) throw new TypeError("invalid codec apt parameter")
                }
                r.rtcpFeedback && Array.isArray(r.rtcpFeedback) || (r.rtcpFeedback = []);
                var p, d = e(r.rtcpFeedback);
                try {
                    for (d.s(); !(p = d.n()).done;) {
                        y(p.value)
                    }
                } catch (f) {
                    d.e(f)
                } finally {
                    d.f()
                }
            }

            function u(e) {
                if ("object" !== a(e)) throw new TypeError("ext is not an object");
                if (!e.uri || "string" != typeof e.uri) throw new TypeError("missing ext.uri");
                if ("number" != typeof e.id) throw new TypeError("missing ext.id");
                if (e.encrypt && "boolean" != typeof e.encrypt) throw new TypeError("invalid ext.encrypt");
                e.encrypt || (e.encrypt = !1), e.parameters && "object" === a(e.parameters) || (e.parameters = {});
                for (var r = 0, t = Object.keys(e.parameters); r < t.length; r++) {
                    var n = t[r],
                        o = e.parameters[n];
                    if (void 0 === o && (e.parameters[n] = "", o = ""), "string" != typeof o && "number" != typeof o) throw new TypeError("invalid header extension parameter")
                }
            }

            function h(e) {
                if ("object" !== a(e)) throw new TypeError("encoding is not an object");
                if (e.ssrc && "number" != typeof e.ssrc) throw new TypeError("invalid encoding.ssrc");
                if (e.rid && "string" != typeof e.rid) throw new TypeError("invalid encoding.rid");
                if (e.rtx && "object" !== a(e.rtx)) throw new TypeError("invalid encoding.rtx");
                if (e.rtx && "number" != typeof e.rtx.ssrc) throw new TypeError("missing encoding.rtx.ssrc");
                if (e.dtx && "boolean" == typeof e.dtx || (e.dtx = !1), e.scalabilityMode && "string" != typeof e.scalabilityMode) throw new TypeError("invalid encoding.scalabilityMode")
            }

            function v(e) {
                if ("object" !== a(e)) throw new TypeError("rtcp is not an object");
                if (e.cname && "string" != typeof e.cname) throw new TypeError("invalid rtcp.cname");
                e.reducedSize && "boolean" == typeof e.reducedSize || (e.reducedSize = !0)
            }

            function w(e) {
                if ("object" !== a(e)) throw new TypeError("caps is not an object");
                if (!e.numStreams || "object" !== a(e.numStreams)) throw new TypeError("missing caps.numStreams");
                b(e.numStreams)
            }

            function b(e) {
                if ("object" !== a(e)) throw new TypeError("numStreams is not an object");
                if ("number" != typeof e.OS) throw new TypeError("missing numStreams.OS");
                if ("number" != typeof e.MIS) throw new TypeError("missing numStreams.MIS")
            }

            function T(e) {
                if ("object" !== a(e)) throw new TypeError("params is not an object");
                if ("number" != typeof e.port) throw new TypeError("missing params.port");
                if ("number" != typeof e.OS) throw new TypeError("missing params.OS");
                if ("number" != typeof e.MIS) throw new TypeError("missing params.MIS");
                if ("number" != typeof e.maxMessageSize) throw new TypeError("missing params.maxMessageSize")
            }

            function x(e) {
                if ("object" !== a(e)) throw new TypeError("params is not an object");
                if ("number" != typeof e.streamId) throw new TypeError("missing params.streamId");
                var r = !1;
                if ("boolean" == typeof e.ordered ? r = !0 : e.ordered = !0, e.maxPacketLifeTime && "number" != typeof e.maxPacketLifeTime) throw new TypeError("invalid params.maxPacketLifeTime");
                if (e.maxRetransmits && "number" != typeof e.maxRetransmits) throw new TypeError("invalid params.maxRetransmits");
                if (e.maxPacketLifeTime && e.maxRetransmits) throw new TypeError("cannot provide both maxPacketLifeTime and maxRetransmits");
                if (r && e.ordered && (e.maxPacketLifeTime || e.maxRetransmits)) throw new TypeError("cannot be ordered with maxPacketLifeTime or maxRetransmits");
                if (r || !e.maxPacketLifeTime && !e.maxRetransmits || (e.ordered = !1), e.priority && "string" != typeof e.priority) throw new TypeError("invalid params.priority");
                if (e.label && "string" != typeof e.label) throw new TypeError("invalid params.label");
                if (e.protocol && "string" != typeof e.protocol) throw new TypeError("invalid params.protocol")
            }

            function E(r, t) {
                var a, n = {
                        codecs: [],
                        headerExtensions: []
                    },
                    o = e(t.codecs || []);
                try {
                    var i = function() {
                        var e = a.value;
                        if (A(e)) return "continue";
                        var t = (r.codecs || []).find(function(r) {
                            return I(r, e, {
                                strict: !0,
                                modify: !0
                            })
                        });
                        if (!t) return "continue";
                        var o = {
                            mimeType: t.mimeType,
                            kind: t.kind,
                            clockRate: t.clockRate,
                            channels: t.channels,
                            localPayloadType: t.preferredPayloadType,
                            localRtxPayloadType: void 0,
                            remotePayloadType: e.preferredPayloadType,
                            remoteRtxPayloadType: void 0,
                            localParameters: t.parameters,
                            remoteParameters: e.parameters,
                            rtcpFeedback: L(t, e)
                        };
                        n.codecs.push(o)
                    };
                    for (o.s(); !(a = o.n()).done;) i()
                } catch (l) {
                    o.e(l)
                } finally {
                    o.f()
                }
                var c, s = e(n.codecs);
                try {
                    var p = function() {
                        var e = c.value,
                            a = r.codecs.find(function(r) {
                                return A(r) && r.parameters.apt === e.localPayloadType
                            }),
                            n = t.codecs.find(function(r) {
                                return A(r) && r.parameters.apt === e.remotePayloadType
                            });
                        a && n && (e.localRtxPayloadType = a.preferredPayloadType, e.remoteRtxPayloadType = n.preferredPayloadType)
                    };
                    for (s.s(); !(c = s.n()).done;) p()
                } catch (l) {
                    s.e(l)
                } finally {
                    s.f()
                }
                var d, y = e(t.headerExtensions);
                try {
                    var f = function() {
                        var e = d.value,
                            t = r.headerExtensions.find(function(r) {
                                return C(r, e)
                            });
                        if (!t) return "continue";
                        var a = {
                            kind: e.kind,
                            uri: e.uri,
                            sendId: t.preferredId,
                            recvId: e.preferredId,
                            encrypt: t.preferredEncrypt,
                            direction: "sendrecv"
                        };
                        switch (e.direction) {
                            case "sendrecv":
                                a.direction = "sendrecv";
                                break;
                            case "recvonly":
                                a.direction = "sendonly";
                                break;
                            case "sendonly":
                                a.direction = "recvonly";
                                break;
                            case "inactive":
                                a.direction = "inactive"
                        }
                        n.headerExtensions.push(a)
                    };
                    for (y.s(); !(d = y.n()).done;) f()
                } catch (l) {
                    y.e(l)
                } finally {
                    y.f()
                }
                return n
            }

            function k(r) {
                var t, a = {
                        codecs: [],
                        headerExtensions: []
                    },
                    n = e(r.codecs);
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        var o = t.value,
                            i = {
                                mimeType: o.mimeType,
                                kind: o.kind,
                                preferredPayloadType: o.remotePayloadType,
                                clockRate: o.clockRate,
                                channels: o.channels,
                                parameters: o.localParameters,
                                rtcpFeedback: o.rtcpFeedback
                            };
                        if (a.codecs.push(i), o.remoteRtxPayloadType) {
                            var c = {
                                mimeType: "".concat(o.kind, "/rtx"),
                                kind: o.kind,
                                preferredPayloadType: o.remoteRtxPayloadType,
                                clockRate: o.clockRate,
                                parameters: {
                                    apt: o.remotePayloadType
                                },
                                rtcpFeedback: []
                            };
                            a.codecs.push(c)
                        }
                    }
                } catch (f) {
                    n.e(f)
                } finally {
                    n.f()
                }
                var s, p = e(r.headerExtensions);
                try {
                    for (p.s(); !(s = p.n()).done;) {
                        var d = s.value;
                        if ("sendrecv" === d.direction || "recvonly" === d.direction) {
                            var y = {
                                kind: d.kind,
                                uri: d.uri,
                                preferredId: d.recvId,
                                preferredEncrypt: d.encrypt,
                                direction: d.direction
                            };
                            a.headerExtensions.push(y)
                        }
                    }
                } catch (f) {
                    p.e(f)
                } finally {
                    p.f()
                }
                return a
            }

            function g(r, t) {
                var a, n = {
                        mid: void 0,
                        codecs: [],
                        headerExtensions: [],
                        encodings: [],
                        rtcp: {}
                    },
                    o = e(t.codecs);
                try {
                    for (o.s(); !(a = o.n()).done;) {
                        var i = a.value;
                        if (i.kind === r) {
                            var c = {
                                mimeType: i.mimeType,
                                payloadType: i.localPayloadType,
                                clockRate: i.clockRate,
                                channels: i.channels,
                                parameters: i.localParameters,
                                rtcpFeedback: i.rtcpFeedback
                            };
                            if (n.codecs.push(c), i.localRtxPayloadType) {
                                var s = {
                                    mimeType: "".concat(i.kind, "/rtx"),
                                    payloadType: i.localRtxPayloadType,
                                    clockRate: i.clockRate,
                                    parameters: {
                                        apt: i.localPayloadType
                                    },
                                    rtcpFeedback: []
                                };
                                n.codecs.push(s)
                            }
                        }
                    }
                } catch (l) {
                    o.e(l)
                } finally {
                    o.f()
                }
                var p, d = e(t.headerExtensions);
                try {
                    for (d.s(); !(p = d.n()).done;) {
                        var y = p.value;
                        if (!(y.kind && y.kind !== r || "sendrecv" !== y.direction && "sendonly" !== y.direction)) {
                            var f = {
                                uri: y.uri,
                                id: y.sendId,
                                encrypt: y.encrypt,
                                parameters: {}
                            };
                            n.headerExtensions.push(f)
                        }
                    }
                } catch (l) {
                    d.e(l)
                } finally {
                    d.f()
                }
                return n
            }

            function P(r, t) {
                var a, n = {
                        mid: void 0,
                        codecs: [],
                        headerExtensions: [],
                        encodings: [],
                        rtcp: {}
                    },
                    o = e(t.codecs);
                try {
                    for (o.s(); !(a = o.n()).done;) {
                        var i = a.value;
                        if (i.kind === r) {
                            var c = {
                                mimeType: i.mimeType,
                                payloadType: i.localPayloadType,
                                clockRate: i.clockRate,
                                channels: i.channels,
                                parameters: i.remoteParameters,
                                rtcpFeedback: i.rtcpFeedback
                            };
                            if (n.codecs.push(c), i.localRtxPayloadType) {
                                var s = {
                                    mimeType: "".concat(i.kind, "/rtx"),
                                    payloadType: i.localRtxPayloadType,
                                    clockRate: i.clockRate,
                                    parameters: {
                                        apt: i.localPayloadType
                                    },
                                    rtcpFeedback: []
                                };
                                n.codecs.push(s)
                            }
                        }
                    }
                } catch (E) {
                    o.e(E)
                } finally {
                    o.f()
                }
                var p, d = e(t.headerExtensions);
                try {
                    for (d.s(); !(p = d.n()).done;) {
                        var y = p.value;
                        if (!(y.kind && y.kind !== r || "sendrecv" !== y.direction && "sendonly" !== y.direction)) {
                            var f = {
                                uri: y.uri,
                                id: y.sendId,
                                encrypt: y.encrypt,
                                parameters: {}
                            };
                            n.headerExtensions.push(f)
                        }
                    }
                } catch (E) {
                    d.e(E)
                } finally {
                    d.f()
                }
                if (n.headerExtensions.some(function(e) {
                        return "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri
                    })) {
                    var l, m = e(n.codecs);
                    try {
                        for (m.s(); !(l = m.n()).done;) {
                            var u = l.value;
                            u.rtcpFeedback = (u.rtcpFeedback || []).filter(function(e) {
                                return "goog-remb" !== e.type
                            })
                        }
                    } catch (E) {
                        m.e(E)
                    } finally {
                        m.f()
                    }
                } else if (n.headerExtensions.some(function(e) {
                        return "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri
                    })) {
                    var h, v = e(n.codecs);
                    try {
                        for (v.s(); !(h = v.n()).done;) {
                            var w = h.value;
                            w.rtcpFeedback = (w.rtcpFeedback || []).filter(function(e) {
                                return "transport-cc" !== e.type
                            })
                        }
                    } catch (E) {
                        v.e(E)
                    } finally {
                        v.f()
                    }
                } else {
                    var b, T = e(n.codecs);
                    try {
                        for (T.s(); !(b = T.n()).done;) {
                            var x = b.value;
                            x.rtcpFeedback = (x.rtcpFeedback || []).filter(function(e) {
                                return "transport-cc" !== e.type && "goog-remb" !== e.type
                            })
                        }
                    } catch (E) {
                        T.e(E)
                    } finally {
                        T.f()
                    }
                }
                return n
            }

            function R(e, r) {
                var t = [];
                if (r) {
                    for (var a = 0; a < e.length; ++a)
                        if (I(e[a], r)) {
                            t.push(e[a]), A(e[a + 1]) && t.push(e[a + 1]);
                            break
                        } if (0 === t.length) throw new TypeError("no matching codec found")
                } else t.push(e[0]), A(e[1]) && t.push(e[1]);
                return t
            }

            function S(e) {
                l(e = o.clone(e));
                var r = {
                    mid: i,
                    codecs: [],
                    headerExtensions: [],
                    encodings: [{
                        ssrc: c
                    }],
                    rtcp: {
                        cname: "probator"
                    }
                };
                return r.codecs.push(e.codecs[0]), r.codecs[0].payloadType = s, r.headerExtensions = e.headerExtensions, r
            }

            function j(e, r) {
                return r.codecs.some(function(r) {
                    return r.kind === e
                })
            }

            function F(e, r) {
                if (l(e), 0 === e.codecs.length) return !1;
                var t = e.codecs[0];
                return r.codecs.some(function(e) {
                    return e.remotePayloadType === t.payloadType
                })
            }

            function A(e) {
                return !!e && /.+\/rtx$/i.test(e.mimeType)
            }

            function I(e, r) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = t.strict,
                    o = void 0 !== a && a,
                    i = t.modify,
                    c = void 0 !== i && i,
                    s = e.mimeType.toLowerCase();
                if (s !== r.mimeType.toLowerCase()) return !1;
                if (e.clockRate !== r.clockRate) return !1;
                if (e.channels !== r.channels) return !1;
                switch (s) {
                    case "video/h264":
                        if ((e.parameters["packetization-mode"] || 0) !== (r.parameters["packetization-mode"] || 0)) return !1;
                        if (o) {
                            if (!n.isSameProfile(e.parameters, r.parameters)) return !1;
                            var p;
                            try {
                                p = n.generateProfileLevelIdForAnswer(e.parameters, r.parameters)
                            } catch (d) {
                                return !1
                            }
                            c && (p ? e.parameters["profile-level-id"] = p : delete e.parameters["profile-level-id"])
                        }
                        break;
                    case "video/vp9":
                        if (o)
                            if ((e.parameters["profile-id"] || 0) !== (r.parameters["profile-id"] || 0)) return !1
                }
                return !0
            }

            function C(e, r) {
                return (!e.kind || !r.kind || e.kind === r.kind) && e.uri === r.uri
            }

            function L(r, t) {
                var a, n = [],
                    o = e(r.rtcpFeedback || []);
                try {
                    var i = function() {
                        var e = a.value,
                            r = (t.rtcpFeedback || []).find(function(r) {
                                return r.type === e.type && (r.parameter === e.parameter || !r.parameter && !e.parameter)
                            });
                        r && n.push(r)
                    };
                    for (o.s(); !(a = o.n()).done;) i()
                } catch (c) {
                    o.e(c)
                } finally {
                    o.f()
                }
                return n
            }
            exports.validateRtpCapabilities = p, exports.validateRtpCodecCapability = d, exports.validateRtcpFeedback = y, exports.validateRtpHeaderExtension = f, exports.validateRtpParameters = l, exports.validateRtpCodecParameters = m, exports.validateRtpHeaderExtensionParameters = u, exports.validateRtpEncodingParameters = h, exports.validateRtcpParameters = v, exports.validateSctpCapabilities = w, exports.validateNumSctpStreams = b, exports.validateSctpParameters = T, exports.validateSctpStreamParameters = x, exports.getExtendedRtpCapabilities = E, exports.getRecvRtpCapabilities = k, exports.getSendingRtpParameters = g, exports.getSendingRemoteRtpParameters = P, exports.reduceCodecs = R, exports.generateProbatorRtpParameters = S, exports.canSend = j, exports.canReceive = F;
        }, {
            "h264-profile-level-id": "AoQt",
            "./utils": "FOZT"
        }],
        "wXtN": [function(require, module, exports) {
            "use strict";

            function e(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var o = 0,
                            s = function() {};
                        return {
                            s: s,
                            n: function() {
                                return o >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[o++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: s
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i = !0,
                    u = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        u = !0, a = e
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                }
            }

            function r(e, r) {
                if (e) {
                    if ("string" == typeof e) return t(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t(e, r) : void 0
                }
            }

            function t(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function n(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function s(e, r, t) {
                return r && o(e.prototype, r), t && o(e, t), e
            }
            var a = this && this.__awaiter || function(e, r, t, n) {
                return new(t || (t = Promise))(function(o, s) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (r) {
                            s(r)
                        }
                    }

                    function i(e) {
                        try {
                            u(n.throw(e))
                        } catch (r) {
                            s(r)
                        }
                    }

                    function u(e) {
                        var r;
                        e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                            e(r)
                        })).then(a, i)
                    }
                    u((n = n.apply(e, r || [])).next())
                })
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var i = function() {
                function r() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            ClosedErrorClass: Error,
                            StoppedErrorClass: Error
                        },
                        t = e.ClosedErrorClass,
                        o = e.StoppedErrorClass;
                    n(this, r), this._closed = !1, this._pendingTasks = [], this._ClosedErrorClass = Error, this._StoppedErrorClass = Error, this._ClosedErrorClass = t, this._StoppedErrorClass = o
                }
                return s(r, [{
                    key: "close",
                    value: function() {
                        this._closed = !0
                    }
                }, {
                    key: "push",
                    value: function(e) {
                        return a(this, void 0, void 0, regeneratorRuntime.mark(function r() {
                            var t = this;
                            return regeneratorRuntime.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if ("function" == typeof e) {
                                            r.next = 2;
                                            break
                                        }
                                        throw new TypeError("given task is not a function");
                                    case 2:
                                        return r.abrupt("return", new Promise(function(r, n) {
                                            var o = {
                                                execute: e,
                                                resolve: r,
                                                reject: n,
                                                stopped: !1
                                            };
                                            t._pendingTasks.push(o), 1 === t._pendingTasks.length && t._next()
                                        }));
                                    case 3:
                                    case "end":
                                        return r.stop()
                                }
                            }, r)
                        }))
                    }
                }, {
                    key: "stop",
                    value: function() {
                        var r, t = e(this._pendingTasks);
                        try {
                            for (t.s(); !(r = t.n()).done;) {
                                var n = r.value;
                                n.stopped = !0, n.reject(new this._StoppedErrorClass("AwaitQueue stopped"))
                            }
                        } catch (o) {
                            t.e(o)
                        } finally {
                            t.f()
                        }
                        this._pendingTasks.length = 0
                    }
                }, {
                    key: "_next",
                    value: function() {
                        return a(this, void 0, void 0, regeneratorRuntime.mark(function e() {
                            var r;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = this._pendingTasks[0]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, this._executeTask(r);
                                    case 5:
                                        this._pendingTasks.shift(), this._next();
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }))
                    }
                }, {
                    key: "_executeTask",
                    value: function(e) {
                        return a(this, void 0, void 0, regeneratorRuntime.mark(function r() {
                            var t;
                            return regeneratorRuntime.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (!this._closed) {
                                            r.next = 3;
                                            break
                                        }
                                        return e.reject(new this._ClosedErrorClass("AwaitQueue closed")), r.abrupt("return");
                                    case 3:
                                        if (!e.stopped) {
                                            r.next = 5;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 5:
                                        return r.prev = 5, r.next = 8, e.execute();
                                    case 8:
                                        if (t = r.sent, !this._closed) {
                                            r.next = 12;
                                            break
                                        }
                                        return e.reject(new this._ClosedErrorClass("AwaitQueue closed")), r.abrupt("return");
                                    case 12:
                                        if (!e.stopped) {
                                            r.next = 14;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 14:
                                        e.resolve(t), r.next = 25;
                                        break;
                                    case 17:
                                        if (r.prev = 17, r.t0 = r.catch(5), !this._closed) {
                                            r.next = 22;
                                            break
                                        }
                                        return e.reject(new this._ClosedErrorClass("AwaitQueue closed")), r.abrupt("return");
                                    case 22:
                                        if (!e.stopped) {
                                            r.next = 24;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 24:
                                        e.reject(r.t0);
                                    case 25:
                                    case "end":
                                        return r.stop()
                                }
                            }, r, this, [
                                [5, 17]
                            ])
                        }))
                    }
                }]), r
            }();
            exports.AwaitQueue = i;
        }, {}],
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
            "use strict";

            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function e(t, e, r, n, o, u, i) {
                try {
                    var c = t[u](i),
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
                    return new Promise(function(o, u) {
                        var i = t.apply(r, n);

                        function c(t) {
                            e(i, o, u, c, f, "next", t)
                        }

                        function f(t) {
                            e(i, o, u, c, f, "throw", t)
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

            function u(t, e, r) {
                return e && o(t.prototype, e), r && o(t, r), t
            }

            function i(t, e) {
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
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var y = require("events"),
                v = require("./Logger"),
                h = new v.Logger("EnhancedEventEmitter"),
                m = function(t) {
                    i(o, y.EventEmitter);
                    var e = f(o);

                    function o() {
                        var t;
                        return n(this, o), (t = e.call(this)).setMaxListeners(1 / 0), t
                    }
                    return u(o, [{
                        key: "safeEmit",
                        value: function(t) {
                            var e = this.listenerCount(t);
                            try {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                                return this.emit.apply(this, [t].concat(n))
                            } catch (u) {
                                return h.error("safeEmit() | event listener threw an error [event:%s]:%o", t, u), Boolean(e)
                            }
                        }
                    }, {
                        key: "safeEmitAsPromise",
                        value: function() {
                            var t = r(regeneratorRuntime.mark(function t(e) {
                                var r, n, o, u = this,
                                    i = arguments;
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            for (r = i.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = i[o];
                                            return t.abrupt("return", new Promise(function(t, r) {
                                                return u.safeEmit.apply(u, [e].concat(n, [t, r]))
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
            exports.EnhancedEventEmitter = m;
        }, {
            "events": "vY5P",
            "./Logger": "p5bA"
        }],
        "oKFT": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t, r, n, a, i, o) {
                try {
                    var s = e[i](o),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function r(e) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise(function(a, i) {
                        var o = e.apply(r, n);

                        function s(e) {
                            t(o, a, i, s, c, "next", e)
                        }

                        function c(e) {
                            t(o, a, i, s, c, "throw", e)
                        }
                        s(void 0)
                    })
                }
            }

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function i(e, t, r) {
                return t && a(e.prototype, t), r && a(e, r), e
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && s(e, t)
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e) {
                var t = f();
                return function() {
                    var r, n = l(e);
                    if (t) {
                        var a = l(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return u(this, r)
                }
            }

            function u(t, r) {
                return !r || "object" !== e(r) && "function" != typeof r ? d(t) : r
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function f() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var p = require("./Logger"),
                h = require("./EnhancedEventEmitter"),
                k = require("./errors"),
                _ = new p.Logger("Producer"),
                y = function(t) {
                    o(s, h.EnhancedEventEmitter);
                    var a = c(s);

                    function s(e) {
                        var t, r = e.id,
                            i = e.localId,
                            o = e.rtpSender,
                            c = e.track,
                            u = e.rtpParameters,
                            f = e.stopTracks,
                            l = e.disableTrackOnPause,
                            p = e.zeroRtpOnPause,
                            h = e.appData;
                        return n(this, s), (t = a.call(this))._closed = !1, _.debug("constructor()"), t._id = r, t._localId = i, t._rtpSender = o, t._track = c, t._kind = c.kind, t._rtpParameters = u, t._paused = !!l && !c.enabled, t._maxSpatialLayer = void 0, t._stopTracks = f, t._disableTrackOnPause = l, t._zeroRtpOnPause = p, t._appData = h, t._onTrackEnded = t._onTrackEnded.bind(d(t)), t._handleTrack(), t
                    }
                    return i(s, [{
                        key: "close",
                        value: function() {
                            this._closed || (_.debug("close()"), this._closed = !0, this._destroyTrack(), this.emit("@close"))
                        }
                    }, {
                        key: "transportClosed",
                        value: function() {
                            this._closed || (_.debug("transportClosed()"), this._closed = !0, this._destroyTrack(), this.safeEmit("transportclose"))
                        }
                    }, {
                        key: "getStats",
                        value: function() {
                            var e = r(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this._closed) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new k.InvalidStateError("closed");
                                        case 2:
                                            return e.abrupt("return", this.safeEmitAsPromise("@getstats"));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "pause",
                        value: function() {
                            _.debug("pause()"), this._closed ? _.error("pause() | Producer closed") : (this._paused = !0, this._track && this._disableTrackOnPause && (this._track.enabled = !1), this._zeroRtpOnPause && this.safeEmitAsPromise("@replacetrack", null).catch(function() {}))
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            _.debug("resume()"), this._closed ? _.error("resume() | Producer closed") : (this._paused = !1, this._track && this._disableTrackOnPause && (this._track.enabled = !0), this._zeroRtpOnPause && this.safeEmitAsPromise("@replacetrack", this._track).catch(function() {}))
                        }
                    }, {
                        key: "replaceTrack",
                        value: function() {
                            var e = r(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.track, _.debug("replaceTrack() [track:%o]", r), !this._closed) {
                                                e.next = 7;
                                                break
                                            }
                                            if (r && this._stopTracks) try {
                                                r.stop()
                                            } catch (n) {}
                                            throw new k.InvalidStateError("closed");
                                        case 7:
                                            if (!r || "ended" !== r.readyState) {
                                                e.next = 9;
                                                break
                                            }
                                            throw new k.InvalidStateError("track ended");
                                        case 9:
                                            if (r !== this._track) {
                                                e.next = 12;
                                                break
                                            }
                                            return _.debug("replaceTrack() | same track, ignored"), e.abrupt("return");
                                        case 12:
                                            if (this._zeroRtpOnPause && this._paused) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 15, this.safeEmitAsPromise("@replacetrack", r);
                                        case 15:
                                            this._destroyTrack(), this._track = r, this._track && this._disableTrackOnPause && (this._paused ? this._paused && (this._track.enabled = !1) : this._track.enabled = !0), this._handleTrack();
                                        case 19:
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
                        key: "setMaxSpatialLayer",
                        value: function() {
                            var e = r(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this._closed) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new k.InvalidStateError("closed");
                                        case 4:
                                            if ("video" === this._kind) {
                                                e.next = 8;
                                                break
                                            }
                                            throw new k.UnsupportedError("not a video Producer");
                                        case 8:
                                            if ("number" == typeof t) {
                                                e.next = 10;
                                                break
                                            }
                                            throw new TypeError("invalid spatialLayer");
                                        case 10:
                                            if (t !== this._maxSpatialLayer) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            return e.next = 14, this.safeEmitAsPromise("@setmaxspatiallayer", t);
                                        case 14:
                                            this._maxSpatialLayer = t;
                                        case 15:
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
                        key: "setRtpEncodingParameters",
                        value: function() {
                            var t = r(regeneratorRuntime.mark(function t(r) {
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this._closed) {
                                                t.next = 4;
                                                break
                                            }
                                            throw new k.InvalidStateError("closed");
                                        case 4:
                                            if ("object" === e(r)) {
                                                t.next = 6;
                                                break
                                            }
                                            throw new TypeError("invalid params");
                                        case 6:
                                            return t.next = 8, this.safeEmitAsPromise("@setrtpencodingparameters", r);
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, this)
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_onTrackEnded",
                        value: function() {
                            _.debug('track "ended" event'), this.safeEmit("trackended")
                        }
                    }, {
                        key: "_handleTrack",
                        value: function() {
                            this._track && this._track.addEventListener("ended", this._onTrackEnded)
                        }
                    }, {
                        key: "_destroyTrack",
                        value: function() {
                            if (this._track) try {
                                this._track.removeEventListener("ended", this._onTrackEnded), this._stopTracks && this._track.stop()
                            } catch (e) {}
                        }
                    }, {
                        key: "id",
                        get: function() {
                            return this._id
                        }
                    }, {
                        key: "localId",
                        get: function() {
                            return this._localId
                        }
                    }, {
                        key: "closed",
                        get: function() {
                            return this._closed
                        }
                    }, {
                        key: "kind",
                        get: function() {
                            return this._kind
                        }
                    }, {
                        key: "rtpSender",
                        get: function() {
                            return this._rtpSender
                        }
                    }, {
                        key: "track",
                        get: function() {
                            return this._track
                        }
                    }, {
                        key: "rtpParameters",
                        get: function() {
                            return this._rtpParameters
                        }
                    }, {
                        key: "paused",
                        get: function() {
                            return this._paused
                        }
                    }, {
                        key: "maxSpatialLayer",
                        get: function() {
                            return this._maxSpatialLayer
                        }
                    }, {
                        key: "appData",
                        get: function() {
                            return this._appData
                        },
                        set: function(e) {
                            throw new Error("cannot override appData object")
                        }
                    }]), s
                }();
            exports.Producer = y;
        }, {
            "./Logger": "p5bA",
            "./EnhancedEventEmitter": "Oomd",
            "./errors": "p8GN"
        }],
        "nZfe": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t, r, n, o, c, u) {
                try {
                    var i = e[c](u),
                        a = i.value
                } catch (s) {
                    return void r(s)
                }
                i.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function r(e) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise(function(o, c) {
                        var u = e.apply(r, n);

                        function i(e) {
                            t(u, o, c, i, a, "next", e)
                        }

                        function a(e) {
                            t(u, o, c, i, a, "throw", e)
                        }
                        i(void 0)
                    })
                }
            }

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function c(e, t, r) {
                return t && o(e.prototype, t), r && o(e, r), e
            }

            function u(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && i(e, t)
            }

            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function a(e) {
                var t = d();
                return function() {
                    var r, n = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return s(this, r)
                }
            }

            function s(t, r) {
                return !r || "object" !== e(r) && "function" != typeof r ? f(t) : r
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var p = require("./Logger"),
                h = require("./EnhancedEventEmitter"),
                y = require("./errors"),
                _ = new p.Logger("Consumer"),
                k = function(e) {
                    u(o, h.EnhancedEventEmitter);
                    var t = a(o);

                    function o(e) {
                        var r, c = e.id,
                            u = e.localId,
                            i = e.producerId,
                            a = e.rtpReceiver,
                            s = e.track,
                            d = e.rtpParameters,
                            l = e.appData;
                        return n(this, o), (r = t.call(this))._closed = !1, _.debug("constructor()"), r._id = c, r._localId = u, r._producerId = i, r._rtpReceiver = a, r._track = s, r._rtpParameters = d, r._paused = !s.enabled, r._appData = l, r._onTrackEnded = r._onTrackEnded.bind(f(r)), r._handleTrack(), r
                    }
                    return c(o, [{
                        key: "close",
                        value: function() {
                            this._closed || (_.debug("close()"), this._closed = !0, this._destroyTrack(), this.emit("@close"))
                        }
                    }, {
                        key: "transportClosed",
                        value: function() {
                            this._closed || (_.debug("transportClosed()"), this._closed = !0, this._destroyTrack(), this.safeEmit("transportclose"))
                        }
                    }, {
                        key: "getStats",
                        value: function() {
                            var e = r(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this._closed) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new y.InvalidStateError("closed");
                                        case 2:
                                            return e.abrupt("return", this.safeEmitAsPromise("@getstats"));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "pause",
                        value: function() {
                            _.debug("pause()"), this._closed ? _.error("pause() | Consumer closed") : (this._paused = !0, this._track.enabled = !1)
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            _.debug("resume()"), this._closed ? _.error("resume() | Consumer closed") : (this._paused = !1, this._track.enabled = !0)
                        }
                    }, {
                        key: "_onTrackEnded",
                        value: function() {
                            _.debug('track "ended" event'), this.safeEmit("trackended")
                        }
                    }, {
                        key: "_handleTrack",
                        value: function() {
                            this._track.addEventListener("ended", this._onTrackEnded)
                        }
                    }, {
                        key: "_destroyTrack",
                        value: function() {
                            try {
                                this._track.removeEventListener("ended", this._onTrackEnded), this._track.stop()
                            } catch (e) {}
                        }
                    }, {
                        key: "id",
                        get: function() {
                            return this._id
                        }
                    }, {
                        key: "localId",
                        get: function() {
                            return this._localId
                        }
                    }, {
                        key: "producerId",
                        get: function() {
                            return this._producerId
                        }
                    }, {
                        key: "closed",
                        get: function() {
                            return this._closed
                        }
                    }, {
                        key: "kind",
                        get: function() {
                            return this._track.kind
                        }
                    }, {
                        key: "rtpReceiver",
                        get: function() {
                            return this._rtpReceiver
                        }
                    }, {
                        key: "track",
                        get: function() {
                            return this._track
                        }
                    }, {
                        key: "rtpParameters",
                        get: function() {
                            return this._rtpParameters
                        }
                    }, {
                        key: "paused",
                        get: function() {
                            return this._paused
                        }
                    }, {
                        key: "appData",
                        get: function() {
                            return this._appData
                        },
                        set: function(e) {
                            throw new Error("cannot override appData object")
                        }
                    }]), o
                }();
            exports.Consumer = k;
        }, {
            "./Logger": "p5bA",
            "./EnhancedEventEmitter": "Oomd",
            "./errors": "p8GN"
        }],
        "lgs9": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function r(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && a(e, t)
            }

            function a(e, t) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function s(e) {
                var t = u();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return i(this, n)
                }
            }

            function i(t, n) {
                return !n || "object" !== e(n) && "function" != typeof n ? c(t) : n
            }

            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function u() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var f = require("./Logger"),
                d = require("./EnhancedEventEmitter"),
                h = require("./errors"),
                p = new f.Logger("DataProducer"),
                y = function(e) {
                    o(a, d.EnhancedEventEmitter);
                    var n = s(a);

                    function a(e) {
                        var r, o = e.id,
                            s = e.dataChannel,
                            i = e.sctpStreamParameters,
                            c = e.appData;
                        return t(this, a), (r = n.call(this))._closed = !1, p.debug("constructor()"), r._id = o, r._dataChannel = s, r._sctpStreamParameters = i, r._appData = c, r._handleDataChannel(), r
                    }
                    return r(a, [{
                        key: "close",
                        value: function() {
                            this._closed || (p.debug("close()"), this._closed = !0, this._dataChannel.close(), this.emit("@close"))
                        }
                    }, {
                        key: "transportClosed",
                        value: function() {
                            this._closed || (p.debug("transportClosed()"), this._closed = !0, this._dataChannel.close(), this.safeEmit("transportclose"))
                        }
                    }, {
                        key: "send",
                        value: function(e) {
                            if (p.debug("send()"), this._closed) throw new h.InvalidStateError("closed");
                            this._dataChannel.send(e)
                        }
                    }, {
                        key: "_handleDataChannel",
                        value: function() {
                            var e = this;
                            this._dataChannel.addEventListener("open", function() {
                                e._closed || (p.debug('DataChannel "open" event'), e.safeEmit("open"))
                            }), this._dataChannel.addEventListener("error", function(t) {
                                if (!e._closed) {
                                    var n = t.error;
                                    n || (n = new Error("unknown DataChannel error")), "sctp-failure" === n.errorDetail ? p.error("DataChannel SCTP error [sctpCauseCode:%s]: %s", n.sctpCauseCode, n.message) : p.error('DataChannel "error" event: %o', n), e.safeEmit("error", n)
                                }
                            }), this._dataChannel.addEventListener("close", function() {
                                e._closed || (p.warn('DataChannel "close" event'), e._closed = !0, e.emit("@close"), e.safeEmit("close"))
                            }), this._dataChannel.addEventListener("message", function() {
                                e._closed || p.warn('DataChannel "message" event in a DataProducer, message discarded')
                            }), this._dataChannel.addEventListener("bufferedamountlow", function() {
                                e._closed || e.safeEmit("bufferedamountlow")
                            })
                        }
                    }, {
                        key: "id",
                        get: function() {
                            return this._id
                        }
                    }, {
                        key: "closed",
                        get: function() {
                            return this._closed
                        }
                    }, {
                        key: "sctpStreamParameters",
                        get: function() {
                            return this._sctpStreamParameters
                        }
                    }, {
                        key: "readyState",
                        get: function() {
                            return this._dataChannel.readyState
                        }
                    }, {
                        key: "label",
                        get: function() {
                            return this._dataChannel.label
                        }
                    }, {
                        key: "protocol",
                        get: function() {
                            return this._dataChannel.protocol
                        }
                    }, {
                        key: "bufferedAmount",
                        get: function() {
                            return this._dataChannel.bufferedAmount
                        }
                    }, {
                        key: "bufferedAmountLowThreshold",
                        get: function() {
                            return this._dataChannel.bufferedAmountLowThreshold
                        },
                        set: function(e) {
                            this._dataChannel.bufferedAmountLowThreshold = e
                        }
                    }, {
                        key: "appData",
                        get: function() {
                            return this._appData
                        },
                        set: function(e) {
                            throw new Error("cannot override appData object")
                        }
                    }]), a
                }();
            exports.DataProducer = y;
        }, {
            "./Logger": "p5bA",
            "./EnhancedEventEmitter": "Oomd",
            "./errors": "p8GN"
        }],
        "ui0n": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function r(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && a(e, t)
            }

            function a(e, t) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e) {
                var t = u();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return i(this, n)
                }
            }

            function i(t, n) {
                return !n || "object" !== e(n) && "function" != typeof n ? s(t) : n
            }

            function s(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function u() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var f = require("./Logger"),
                d = require("./EnhancedEventEmitter"),
                p = new f.Logger("DataConsumer"),
                h = function(e) {
                    o(a, d.EnhancedEventEmitter);
                    var n = c(a);

                    function a(e) {
                        var r, o = e.id,
                            c = e.dataProducerId,
                            i = e.dataChannel,
                            s = e.sctpStreamParameters,
                            u = e.appData;
                        return t(this, a), (r = n.call(this))._closed = !1, p.debug("constructor()"), r._id = o, r._dataProducerId = c, r._dataChannel = i, r._sctpStreamParameters = s, r._appData = u, r._handleDataChannel(), r
                    }
                    return r(a, [{
                        key: "close",
                        value: function() {
                            this._closed || (p.debug("close()"), this._closed = !0, this._dataChannel.close(), this.emit("@close"))
                        }
                    }, {
                        key: "transportClosed",
                        value: function() {
                            this._closed || (p.debug("transportClosed()"), this._closed = !0, this._dataChannel.close(), this.safeEmit("transportclose"))
                        }
                    }, {
                        key: "_handleDataChannel",
                        value: function() {
                            var e = this;
                            this._dataChannel.addEventListener("open", function() {
                                e._closed || (p.debug('DataChannel "open" event'), e.safeEmit("open"))
                            }), this._dataChannel.addEventListener("error", function(t) {
                                if (!e._closed) {
                                    var n = t.error;
                                    n || (n = new Error("unknown DataChannel error")), "sctp-failure" === n.errorDetail ? p.error("DataChannel SCTP error [sctpCauseCode:%s]: %s", n.sctpCauseCode, n.message) : p.error('DataChannel "error" event: %o', n), e.safeEmit("error", n)
                                }
                            }), this._dataChannel.addEventListener("close", function() {
                                e._closed || (p.warn('DataChannel "close" event'), e._closed = !0, e.emit("@close"), e.safeEmit("close"))
                            }), this._dataChannel.addEventListener("message", function(t) {
                                e._closed || e.safeEmit("message", t.data)
                            })
                        }
                    }, {
                        key: "id",
                        get: function() {
                            return this._id
                        }
                    }, {
                        key: "dataProducerId",
                        get: function() {
                            return this._dataProducerId
                        }
                    }, {
                        key: "closed",
                        get: function() {
                            return this._closed
                        }
                    }, {
                        key: "sctpStreamParameters",
                        get: function() {
                            return this._sctpStreamParameters
                        }
                    }, {
                        key: "readyState",
                        get: function() {
                            return this._dataChannel.readyState
                        }
                    }, {
                        key: "label",
                        get: function() {
                            return this._dataChannel.label
                        }
                    }, {
                        key: "protocol",
                        get: function() {
                            return this._dataChannel.protocol
                        }
                    }, {
                        key: "binaryType",
                        get: function() {
                            return this._dataChannel.binaryType
                        },
                        set: function(e) {
                            this._dataChannel.binaryType = e
                        }
                    }, {
                        key: "appData",
                        get: function() {
                            return this._appData
                        },
                        set: function(e) {
                            throw new Error("cannot override appData object")
                        }
                    }]), a
                }();
            exports.DataConsumer = h;
        }, {
            "./Logger": "p5bA",
            "./EnhancedEventEmitter": "Oomd"
        }],
        "bVaN": [function(require, module, exports) {
            "use strict";

            function e(r) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(r)
            }

            function r(e, r, t, n, a, o, i) {
                try {
                    var c = e[o](i),
                        s = c.value
                } catch (u) {
                    return void t(u)
                }
                c.done ? r(s) : Promise.resolve(s).then(n, a)
            }

            function t(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(a, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            r(i, a, o, c, s, "next", e)
                        }

                        function s(e) {
                            r(i, a, o, c, s, "throw", e)
                        }
                        c(void 0)
                    })
                }
            }

            function n(e, r) {
                var t;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (t = a(e)) || r && e && "number" == typeof e.length) {
                        t && (e = t);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, c = !0,
                    s = !1;
                return {
                    s: function() {
                        t = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = t.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            c || null == t.return || t.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function a(e, r) {
                if (e) {
                    if ("string" == typeof e) return o(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? o(e, r) : void 0
                }
            }

            function o(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function i(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function s(e, r, t) {
                return r && c(e.prototype, r), t && c(e, t), e
            }

            function u(e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(r && r.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), r && d(e, r)
            }

            function d(e, r) {
                return (d = Object.setPrototypeOf || function(e, r) {
                    return e.__proto__ = r, e
                })(e, r)
            }

            function p(e) {
                var r = h();
                return function() {
                    var t, n = m(e);
                    if (r) {
                        var a = m(this).constructor;
                        t = Reflect.construct(n, arguments, a)
                    } else t = n.apply(this, arguments);
                    return l(this, t)
                }
            }

            function l(r, t) {
                return !t || "object" !== e(t) && "function" != typeof t ? f(r) : t
            }

            function f(e) {
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

            function m(e) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var w = require("awaitqueue"),
                v = require("./Logger"),
                y = require("./EnhancedEventEmitter"),
                b = require("./errors"),
                g = require("./utils"),
                _ = require("./ortc"),
                k = require("./Producer"),
                x = require("./Consumer"),
                P = require("./DataProducer"),
                S = require("./DataConsumer"),
                R = new v.Logger("Transport"),
                E = function(r) {
                    u(o, y.EnhancedEventEmitter);
                    var a = p(o);

                    function o(e) {
                        var r, t = e.direction,
                            n = e.id,
                            c = e.iceParameters,
                            s = e.iceCandidates,
                            u = e.dtlsParameters,
                            d = e.sctpParameters,
                            p = e.iceServers,
                            l = e.iceTransportPolicy,
                            f = e.additionalSettings,
                            h = e.proprietaryConstraints,
                            m = e.appData,
                            v = e.handlerFactory,
                            y = e.extendedRtpCapabilities,
                            _ = e.canProduceByKind;
                        return i(this, o), (r = a.call(this))._closed = !1, r._connectionState = "new", r._producers = new Map, r._consumers = new Map, r._dataProducers = new Map, r._dataConsumers = new Map, r._probatorConsumerCreated = !1, r._awaitQueue = new w.AwaitQueue({
                            ClosedErrorClass: b.InvalidStateError
                        }), R.debug("constructor() [id:%s, direction:%s]", n, t), r._id = n, r._direction = t, r._extendedRtpCapabilities = y, r._canProduceByKind = _, r._maxSctpMessageSize = d ? d.maxMessageSize : null, delete(f = g.clone(f)).iceServers, delete f.iceTransportPolicy, delete f.bundlePolicy, delete f.rtcpMuxPolicy, delete f.sdpSemantics, r._handler = v(), r._handler.run({
                            direction: t,
                            iceParameters: c,
                            iceCandidates: s,
                            dtlsParameters: u,
                            sctpParameters: d,
                            iceServers: p,
                            iceTransportPolicy: l,
                            additionalSettings: f,
                            proprietaryConstraints: h,
                            extendedRtpCapabilities: y
                        }), r._appData = m, r._handleHandler(), r
                    }
                    return s(o, [{
                        key: "close",
                        value: function() {
                            if (!this._closed) {
                                R.debug("close()"), this._closed = !0, this._awaitQueue.close(), this._handler.close();
                                var e, r = n(this._producers.values());
                                try {
                                    for (r.s(); !(e = r.n()).done;) {
                                        e.value.transportClosed()
                                    }
                                } catch (u) {
                                    r.e(u)
                                } finally {
                                    r.f()
                                }
                                this._producers.clear();
                                var t, a = n(this._consumers.values());
                                try {
                                    for (a.s(); !(t = a.n()).done;) {
                                        t.value.transportClosed()
                                    }
                                } catch (u) {
                                    a.e(u)
                                } finally {
                                    a.f()
                                }
                                this._consumers.clear();
                                var o, i = n(this._dataProducers.values());
                                try {
                                    for (i.s(); !(o = i.n()).done;) {
                                        o.value.transportClosed()
                                    }
                                } catch (u) {
                                    i.e(u)
                                } finally {
                                    i.f()
                                }
                                this._dataProducers.clear();
                                var c, s = n(this._dataConsumers.values());
                                try {
                                    for (s.s(); !(c = s.n()).done;) {
                                        c.value.transportClosed()
                                    }
                                } catch (u) {
                                    s.e(u)
                                } finally {
                                    s.f()
                                }
                                this._dataConsumers.clear()
                            }
                        }
                    }, {
                        key: "getStats",
                        value: function() {
                            var e = t(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this._closed) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new b.InvalidStateError("closed");
                                        case 2:
                                            return e.abrupt("return", this._handler.getTransportStats());
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "restartIce",
                        value: function() {
                            var e = t(regeneratorRuntime.mark(function e(r) {
                                var n, a = this;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = r.iceParameters, R.debug("restartIce()"), !this._closed) {
                                                e.next = 6;
                                                break
                                            }
                                            throw new b.InvalidStateError("closed");
                                        case 6:
                                            if (n) {
                                                e.next = 8;
                                                break
                                            }
                                            throw new TypeError("missing iceParameters");
                                        case 8:
                                            return e.abrupt("return", this._awaitQueue.push(t(regeneratorRuntime.mark(function e() {
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", a._handler.restartIce(n));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            }))));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "updateIceServers",
                        value: function() {
                            var e = t(regeneratorRuntime.mark(function e() {
                                var r, n, a = this,
                                    o = arguments;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = o.length > 0 && void 0 !== o[0] ? o[0] : {}, n = r.iceServers, R.debug("updateIceServers()"), !this._closed) {
                                                e.next = 6;
                                                break
                                            }
                                            throw new b.InvalidStateError("closed");
                                        case 6:
                                            if (Array.isArray(n)) {
                                                e.next = 8;
                                                break
                                            }
                                            throw new TypeError("missing iceServers");
                                        case 8:
                                            return e.abrupt("return", this._awaitQueue.push(t(regeneratorRuntime.mark(function e() {
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", a._handler.updateIceServers(n));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            }))));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "produce",
                        value: function() {
                            var r = t(regeneratorRuntime.mark(function r() {
                                var n, a, o, i, c, s, u, d, p, l, f, h, m, w = this,
                                    v = arguments;
                                return regeneratorRuntime.wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (n = v.length > 0 && void 0 !== v[0] ? v[0] : {}, a = n.track, o = n.encodings, i = n.codecOptions, c = n.codec, s = n.stopTracks, u = void 0 === s || s, d = n.disableTrackOnPause, p = void 0 === d || d, l = n.zeroRtpOnPause, f = void 0 !== l && l, h = n.appData, m = void 0 === h ? {} : h, R.debug("produce() [track:%o]", a), a) {
                                                r.next = 6;
                                                break
                                            }
                                            throw new TypeError("missing track");
                                        case 6:
                                            if ("send" === this._direction) {
                                                r.next = 10;
                                                break
                                            }
                                            throw new b.UnsupportedError("not a sending Transport");
                                        case 10:
                                            if (this._canProduceByKind[a.kind]) {
                                                r.next = 14;
                                                break
                                            }
                                            throw new b.UnsupportedError("cannot produce ".concat(a.kind));
                                        case 14:
                                            if ("ended" !== a.readyState) {
                                                r.next = 18;
                                                break
                                            }
                                            throw new b.InvalidStateError("track ended");
                                        case 18:
                                            if (0 !== this.listenerCount("connect") || "new" !== this._connectionState) {
                                                r.next = 22;
                                                break
                                            }
                                            throw new TypeError('no "connect" listener set into this transport');
                                        case 22:
                                            if (0 !== this.listenerCount("produce")) {
                                                r.next = 26;
                                                break
                                            }
                                            throw new TypeError('no "produce" listener set into this transport');
                                        case 26:
                                            if (!m || "object" === e(m)) {
                                                r.next = 28;
                                                break
                                            }
                                            throw new TypeError("if given, appData must be an object");
                                        case 28:
                                            return r.abrupt("return", this._awaitQueue.push(t(regeneratorRuntime.mark(function e() {
                                                var r, t, n, s, d, l, h, v;
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!o || Array.isArray(o)) {
                                                                e.next = 4;
                                                                break
                                                            }
                                                            throw TypeError("encodings must be an array");
                                                        case 4:
                                                            o && 0 === o.length ? r = void 0 : o && (r = o.map(function(e) {
                                                                var r = {
                                                                    active: !0
                                                                };
                                                                return !1 === e.active && (r.active = !1), "number" == typeof e.maxBitrate && (r.maxBitrate = e.maxBitrate), "number" == typeof e.maxFramerate && (r.maxFramerate = e.maxFramerate), "number" == typeof e.scaleResolutionDownBy && (r.scaleResolutionDownBy = e.scaleResolutionDownBy), "boolean" == typeof e.dtx && (r.dtx = e.dtx), "string" == typeof e.scalabilityMode && (r.scalabilityMode = e.scalabilityMode), "string" == typeof e.priority && (r.priority = e.priority), "string" == typeof e.networkPriority && (r.networkPriority = e.networkPriority), r
                                                            }));
                                                        case 5:
                                                            return e.next = 7, w._handler.send({
                                                                track: a,
                                                                encodings: r,
                                                                codecOptions: i,
                                                                codec: c
                                                            });
                                                        case 7:
                                                            return t = e.sent, n = t.localId, s = t.rtpParameters, d = t.rtpSender, e.prev = 11, _.validateRtpParameters(s), e.next = 15, w.safeEmitAsPromise("produce", {
                                                                kind: a.kind,
                                                                rtpParameters: s,
                                                                appData: m
                                                            });
                                                        case 15:
                                                            return l = e.sent, h = l.id, v = new k.Producer({
                                                                id: h,
                                                                localId: n,
                                                                rtpSender: d,
                                                                track: a,
                                                                rtpParameters: s,
                                                                stopTracks: u,
                                                                disableTrackOnPause: p,
                                                                zeroRtpOnPause: f,
                                                                appData: m
                                                            }), w._producers.set(v.id, v), w._handleProducer(v), e.abrupt("return", v);
                                                        case 23:
                                                            throw e.prev = 23, e.t0 = e.catch(11), w._handler.stopSending(n).catch(function() {}), e.t0;
                                                        case 27:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e, null, [
                                                    [11, 23]
                                                ])
                                            }))).catch(function(e) {
                                                if (u) try {
                                                    a.stop()
                                                } catch (r) {}
                                                throw e
                                            }));
                                        case 29:
                                        case "end":
                                            return r.stop()
                                    }
                                }, r, this)
                            }));
                            return function() {
                                return r.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "consume",
                        value: function() {
                            var r = t(regeneratorRuntime.mark(function r(n) {
                                var a, o, i, c, s, u, d = this;
                                return regeneratorRuntime.wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (a = n.id, o = n.producerId, i = n.kind, c = n.rtpParameters, s = n.appData, u = void 0 === s ? {} : s, R.debug("consume()"), !this._closed) {
                                                r.next = 6;
                                                break
                                            }
                                            throw new b.InvalidStateError("closed");
                                        case 6:
                                            if ("recv" === this._direction) {
                                                r.next = 10;
                                                break
                                            }
                                            throw new b.UnsupportedError("not a receiving Transport");
                                        case 10:
                                            if ("string" == typeof a) {
                                                r.next = 14;
                                                break
                                            }
                                            throw new TypeError("missing id");
                                        case 14:
                                            if ("string" == typeof o) {
                                                r.next = 18;
                                                break
                                            }
                                            throw new TypeError("missing producerId");
                                        case 18:
                                            if ("audio" === i || "video" === i) {
                                                r.next = 22;
                                                break
                                            }
                                            throw new TypeError("invalid kind '".concat(i, "'"));
                                        case 22:
                                            if (0 !== this.listenerCount("connect") || "new" !== this._connectionState) {
                                                r.next = 26;
                                                break
                                            }
                                            throw new TypeError('no "connect" listener set into this transport');
                                        case 26:
                                            if (!u || "object" === e(u)) {
                                                r.next = 28;
                                                break
                                            }
                                            throw new TypeError("if given, appData must be an object");
                                        case 28:
                                            return r.abrupt("return", this._awaitQueue.push(t(regeneratorRuntime.mark(function e() {
                                                var r, t, n, s, p, l;
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (_.canReceive(c, d._extendedRtpCapabilities)) {
                                                                e.next = 3;
                                                                break
                                                            }
                                                            throw new b.UnsupportedError("cannot consume this Producer");
                                                        case 3:
                                                            return e.next = 5, d._handler.receive({
                                                                trackId: a,
                                                                kind: i,
                                                                rtpParameters: c
                                                            });
                                                        case 5:
                                                            if (r = e.sent, t = r.localId, n = r.rtpReceiver, s = r.track, p = new x.Consumer({
                                                                    id: a,
                                                                    localId: t,
                                                                    producerId: o,
                                                                    rtpReceiver: n,
                                                                    track: s,
                                                                    rtpParameters: c,
                                                                    appData: u
                                                                }), d._consumers.set(p.id, p), d._handleConsumer(p), d._probatorConsumerCreated || "video" !== i) {
                                                                e.next = 24;
                                                                break
                                                            }
                                                            return e.prev = 13, l = _.generateProbatorRtpParameters(p.rtpParameters), e.next = 17, d._handler.receive({
                                                                trackId: "probator",
                                                                kind: "video",
                                                                rtpParameters: l
                                                            });
                                                        case 17:
                                                            R.debug("consume() | Consumer for RTP probation created"), d._probatorConsumerCreated = !0, e.next = 24;
                                                            break;
                                                        case 21:
                                                            e.prev = 21, e.t0 = e.catch(13), R.error("consume() | failed to create Consumer for RTP probation:%o", e.t0);
                                                        case 24:
                                                            return e.abrupt("return", p);
                                                        case 25:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e, null, [
                                                    [13, 21]
                                                ])
                                            }))));
                                        case 29:
                                        case "end":
                                            return r.stop()
                                    }
                                }, r, this)
                            }));
                            return function(e) {
                                return r.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "produceData",
                        value: function() {
                            var r = t(regeneratorRuntime.mark(function r() {
                                var n, a, o, i, c, s, u, d, p, l, f, h, m, w = this,
                                    v = arguments;
                                return regeneratorRuntime.wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (n = v.length > 0 && void 0 !== v[0] ? v[0] : {}, a = n.ordered, o = void 0 === a || a, i = n.maxPacketLifeTime, c = n.maxRetransmits, s = n.priority, u = void 0 === s ? "low" : s, d = n.label, p = void 0 === d ? "" : d, l = n.protocol, f = void 0 === l ? "" : l, h = n.appData, m = void 0 === h ? {} : h, R.debug("produceData()"), "send" === this._direction) {
                                                r.next = 6;
                                                break
                                            }
                                            throw new b.UnsupportedError("not a sending Transport");
                                        case 6:
                                            if (this._maxSctpMessageSize) {
                                                r.next = 10;
                                                break
                                            }
                                            throw new b.UnsupportedError("SCTP not enabled by remote Transport");
                                        case 10:
                                            if (["very-low", "low", "medium", "high"].includes(u)) {
                                                r.next = 14;
                                                break
                                            }
                                            throw new TypeError("wrong priority");
                                        case 14:
                                            if (0 !== this.listenerCount("connect") || "new" !== this._connectionState) {
                                                r.next = 18;
                                                break
                                            }
                                            throw new TypeError('no "connect" listener set into this transport');
                                        case 18:
                                            if (0 !== this.listenerCount("producedata")) {
                                                r.next = 22;
                                                break
                                            }
                                            throw new TypeError('no "producedata" listener set into this transport');
                                        case 22:
                                            if (!m || "object" === e(m)) {
                                                r.next = 24;
                                                break
                                            }
                                            throw new TypeError("if given, appData must be an object");
                                        case 24:
                                            return (i || c) && (o = !1), r.abrupt("return", this._awaitQueue.push(t(regeneratorRuntime.mark(function e() {
                                                var r, t, n, a, s, d;
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, w._handler.sendDataChannel({
                                                                ordered: o,
                                                                maxPacketLifeTime: i,
                                                                maxRetransmits: c,
                                                                priority: u,
                                                                label: p,
                                                                protocol: f
                                                            });
                                                        case 2:
                                                            return r = e.sent, t = r.dataChannel, n = r.sctpStreamParameters, _.validateSctpStreamParameters(n), e.next = 8, w.safeEmitAsPromise("producedata", {
                                                                sctpStreamParameters: n,
                                                                label: p,
                                                                protocol: f,
                                                                appData: m
                                                            });
                                                        case 8:
                                                            return a = e.sent, s = a.id, d = new P.DataProducer({
                                                                id: s,
                                                                dataChannel: t,
                                                                sctpStreamParameters: n,
                                                                appData: m
                                                            }), w._dataProducers.set(d.id, d), w._handleDataProducer(d), e.abrupt("return", d);
                                                        case 14:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            }))));
                                        case 26:
                                        case "end":
                                            return r.stop()
                                    }
                                }, r, this)
                            }));
                            return function() {
                                return r.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "consumeData",
                        value: function() {
                            var r = t(regeneratorRuntime.mark(function r(n) {
                                var a, o, i, c, s, u, d, p, l, f = this;
                                return regeneratorRuntime.wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (a = n.id, o = n.dataProducerId, i = n.sctpStreamParameters, c = n.label, s = void 0 === c ? "" : c, u = n.protocol, d = void 0 === u ? "" : u, p = n.appData, l = void 0 === p ? {} : p, R.debug("consumeData()"), !this._closed) {
                                                r.next = 6;
                                                break
                                            }
                                            throw new b.InvalidStateError("closed");
                                        case 6:
                                            if ("recv" === this._direction) {
                                                r.next = 10;
                                                break
                                            }
                                            throw new b.UnsupportedError("not a receiving Transport");
                                        case 10:
                                            if (this._maxSctpMessageSize) {
                                                r.next = 14;
                                                break
                                            }
                                            throw new b.UnsupportedError("SCTP not enabled by remote Transport");
                                        case 14:
                                            if ("string" == typeof a) {
                                                r.next = 18;
                                                break
                                            }
                                            throw new TypeError("missing id");
                                        case 18:
                                            if ("string" == typeof o) {
                                                r.next = 22;
                                                break
                                            }
                                            throw new TypeError("missing dataProducerId");
                                        case 22:
                                            if (0 !== this.listenerCount("connect") || "new" !== this._connectionState) {
                                                r.next = 26;
                                                break
                                            }
                                            throw new TypeError('no "connect" listener set into this transport');
                                        case 26:
                                            if (!l || "object" === e(l)) {
                                                r.next = 28;
                                                break
                                            }
                                            throw new TypeError("if given, appData must be an object");
                                        case 28:
                                            return _.validateSctpStreamParameters(i), r.abrupt("return", this._awaitQueue.push(t(regeneratorRuntime.mark(function e() {
                                                var r, t, n;
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, f._handler.receiveDataChannel({
                                                                sctpStreamParameters: i,
                                                                label: s,
                                                                protocol: d
                                                            });
                                                        case 2:
                                                            return r = e.sent, t = r.dataChannel, n = new S.DataConsumer({
                                                                id: a,
                                                                dataProducerId: o,
                                                                dataChannel: t,
                                                                sctpStreamParameters: i,
                                                                appData: l
                                                            }), f._dataConsumers.set(n.id, n), f._handleDataConsumer(n), e.abrupt("return", n);
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            }))));
                                        case 30:
                                        case "end":
                                            return r.stop()
                                    }
                                }, r, this)
                            }));
                            return function(e) {
                                return r.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_handleHandler",
                        value: function() {
                            var e = this,
                                r = this._handler;
                            r.on("@connect", function(r, t, n) {
                                var a = r.dtlsParameters;
                                e._closed ? n(new b.InvalidStateError("closed")) : e.safeEmit("connect", {
                                    dtlsParameters: a
                                }, t, n)
                            }), r.on("@connectionstatechange", function(r) {
                                r !== e._connectionState && (R.debug("connection state changed to %s", r), e._connectionState = r, e._closed || e.safeEmit("connectionstatechange", r))
                            })
                        }
                    }, {
                        key: "_handleProducer",
                        value: function(e) {
                            var r = this;
                            e.on("@close", function() {
                                r._producers.delete(e.id), r._closed || r._awaitQueue.push(t(regeneratorRuntime.mark(function t() {
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", r._handler.stopSending(e.localId));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t)
                                }))).catch(function(e) {
                                    return R.warn("producer.close() failed:%o", e)
                                })
                            }), e.on("@replacetrack", function(n, a, o) {
                                r._awaitQueue.push(t(regeneratorRuntime.mark(function t() {
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", r._handler.replaceTrack(e.localId, n));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t)
                                }))).then(a).catch(o)
                            }), e.on("@setmaxspatiallayer", function(n, a, o) {
                                r._awaitQueue.push(t(regeneratorRuntime.mark(function t() {
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", r._handler.setMaxSpatialLayer(e.localId, n));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t)
                                }))).then(a).catch(o)
                            }), e.on("@setrtpencodingparameters", function(n, a, o) {
                                r._awaitQueue.push(t(regeneratorRuntime.mark(function t() {
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", r._handler.setRtpEncodingParameters(e.localId, n));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t)
                                }))).then(a).catch(o)
                            }), e.on("@getstats", function(t, n) {
                                if (r._closed) return n(new b.InvalidStateError("closed"));
                                r._handler.getSenderStats(e.localId).then(t).catch(n)
                            })
                        }
                    }, {
                        key: "_handleConsumer",
                        value: function(e) {
                            var r = this;
                            e.on("@close", function() {
                                r._consumers.delete(e.id), r._closed || r._awaitQueue.push(t(regeneratorRuntime.mark(function t() {
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", r._handler.stopReceiving(e.localId));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t)
                                }))).catch(function() {})
                            }), e.on("@getstats", function(t, n) {
                                if (r._closed) return n(new b.InvalidStateError("closed"));
                                r._handler.getReceiverStats(e.localId).then(t).catch(n)
                            })
                        }
                    }, {
                        key: "_handleDataProducer",
                        value: function(e) {
                            var r = this;
                            e.on("@close", function() {
                                r._dataProducers.delete(e.id)
                            })
                        }
                    }, {
                        key: "_handleDataConsumer",
                        value: function(e) {
                            var r = this;
                            e.on("@close", function() {
                                r._dataConsumers.delete(e.id)
                            })
                        }
                    }, {
                        key: "id",
                        get: function() {
                            return this._id
                        }
                    }, {
                        key: "closed",
                        get: function() {
                            return this._closed
                        }
                    }, {
                        key: "direction",
                        get: function() {
                            return this._direction
                        }
                    }, {
                        key: "handler",
                        get: function() {
                            return this._handler
                        }
                    }, {
                        key: "connectionState",
                        get: function() {
                            return this._connectionState
                        }
                    }, {
                        key: "appData",
                        get: function() {
                            return this._appData
                        },
                        set: function(e) {
                            throw new Error("cannot override appData object")
                        }
                    }]), o
                }();
            exports.Transport = E;
        }, {
            "awaitqueue": "wXtN",
            "./Logger": "p5bA",
            "./EnhancedEventEmitter": "Oomd",
            "./errors": "p8GN",
            "./utils": "FOZT",
            "./ortc": "alA0",
            "./Producer": "oKFT",
            "./Consumer": "nZfe",
            "./DataProducer": "lgs9",
            "./DataConsumer": "ui0n"
        }],
        "dlbw": [function(require, module, exports) {
            var e = module.exports = {
                v: [{
                    name: "version",
                    reg: /^(\d*)$/
                }],
                o: [{
                    name: "origin",
                    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
                    names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"],
                    format: "%s %s %d %s IP%d %s"
                }],
                s: [{
                    name: "name"
                }],
                i: [{
                    name: "description"
                }],
                u: [{
                    name: "uri"
                }],
                e: [{
                    name: "email"
                }],
                p: [{
                    name: "phone"
                }],
                z: [{
                    name: "timezones"
                }],
                r: [{
                    name: "repeats"
                }],
                t: [{
                    name: "timing",
                    reg: /^(\d*) (\d*)/,
                    names: ["start", "stop"],
                    format: "%d %d"
                }],
                c: [{
                    name: "connection",
                    reg: /^IN IP(\d) (\S*)/,
                    names: ["version", "ip"],
                    format: "IN IP%d %s"
                }],
                b: [{
                    push: "bandwidth",
                    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
                    names: ["type", "limit"],
                    format: "%s:%s"
                }],
                m: [{
                    reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
                    names: ["type", "port", "protocol", "payloads"],
                    format: "%s %d %s %s"
                }],
                a: [{
                    push: "rtp",
                    reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
                    names: ["payload", "codec", "rate", "encoding"],
                    format: function(e) {
                        return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s"
                    }
                }, {
                    push: "fmtp",
                    reg: /^fmtp:(\d*) ([\S| ]*)/,
                    names: ["payload", "config"],
                    format: "fmtp:%d %s"
                }, {
                    name: "control",
                    reg: /^control:(.*)/,
                    format: "control:%s"
                }, {
                    name: "rtcp",
                    reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
                    names: ["port", "netType", "ipVer", "address"],
                    format: function(e) {
                        return null != e.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d"
                    }
                }, {
                    push: "rtcpFbTrrInt",
                    reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
                    names: ["payload", "value"],
                    format: "rtcp-fb:%d trr-int %d"
                }, {
                    push: "rtcpFb",
                    reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
                    names: ["payload", "type", "subtype"],
                    format: function(e) {
                        return null != e.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s"
                    }
                }, {
                    push: "ext",
                    reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
                    names: ["value", "direction", "encrypt-uri", "uri", "config"],
                    format: function(e) {
                        return "extmap:%d" + (e.direction ? "/%s" : "%v") + (e["encrypt-uri"] ? " %s" : "%v") + " %s" + (e.config ? " %s" : "")
                    }
                }, {
                    name: "extmapAllowMixed",
                    reg: /^(extmap-allow-mixed)/
                }, {
                    push: "crypto",
                    reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
                    names: ["id", "suite", "config", "sessionConfig"],
                    format: function(e) {
                        return null != e.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s"
                    }
                }, {
                    name: "setup",
                    reg: /^setup:(\w*)/,
                    format: "setup:%s"
                }, {
                    name: "connectionType",
                    reg: /^connection:(new|existing)/,
                    format: "connection:%s"
                }, {
                    name: "mid",
                    reg: /^mid:([^\s]*)/,
                    format: "mid:%s"
                }, {
                    name: "msid",
                    reg: /^msid:(.*)/,
                    format: "msid:%s"
                }, {
                    name: "ptime",
                    reg: /^ptime:(\d*(?:\.\d*)*)/,
                    format: "ptime:%d"
                }, {
                    name: "maxptime",
                    reg: /^maxptime:(\d*(?:\.\d*)*)/,
                    format: "maxptime:%d"
                }, {
                    name: "direction",
                    reg: /^(sendrecv|recvonly|sendonly|inactive)/
                }, {
                    name: "icelite",
                    reg: /^(ice-lite)/
                }, {
                    name: "iceUfrag",
                    reg: /^ice-ufrag:(\S*)/,
                    format: "ice-ufrag:%s"
                }, {
                    name: "icePwd",
                    reg: /^ice-pwd:(\S*)/,
                    format: "ice-pwd:%s"
                }, {
                    name: "fingerprint",
                    reg: /^fingerprint:(\S*) (\S*)/,
                    names: ["type", "hash"],
                    format: "fingerprint:%s %s"
                }, {
                    push: "candidates",
                    reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
                    names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"],
                    format: function(e) {
                        var r = "candidate:%s %d %s %d %s %d typ %s";
                        return r += null != e.raddr ? " raddr %s rport %d" : "%v%v", r += null != e.tcptype ? " tcptype %s" : "%v", null != e.generation && (r += " generation %d"), r += null != e["network-id"] ? " network-id %d" : "%v", r += null != e["network-cost"] ? " network-cost %d" : "%v"
                    }
                }, {
                    name: "endOfCandidates",
                    reg: /^(end-of-candidates)/
                }, {
                    name: "remoteCandidates",
                    reg: /^remote-candidates:(.*)/,
                    format: "remote-candidates:%s"
                }, {
                    name: "iceOptions",
                    reg: /^ice-options:(\S*)/,
                    format: "ice-options:%s"
                }, {
                    push: "ssrcs",
                    reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
                    names: ["id", "attribute", "value"],
                    format: function(e) {
                        var r = "ssrc:%d";
                        return null != e.attribute && (r += " %s", null != e.value && (r += ":%s")), r
                    }
                }, {
                    push: "ssrcGroups",
                    reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
                    names: ["semantics", "ssrcs"],
                    format: "ssrc-group:%s %s"
                }, {
                    name: "msidSemantic",
                    reg: /^msid-semantic:\s?(\w*) (\S*)/,
                    names: ["semantic", "token"],
                    format: "msid-semantic: %s %s"
                }, {
                    push: "groups",
                    reg: /^group:(\w*) (.*)/,
                    names: ["type", "mids"],
                    format: "group:%s %s"
                }, {
                    name: "rtcpMux",
                    reg: /^(rtcp-mux)/
                }, {
                    name: "rtcpRsize",
                    reg: /^(rtcp-rsize)/
                }, {
                    name: "sctpmap",
                    reg: /^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/,
                    names: ["sctpmapNumber", "app", "maxMessageSize"],
                    format: function(e) {
                        return null != e.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s"
                    }
                }, {
                    name: "xGoogleFlag",
                    reg: /^x-google-flag:([^\s]*)/,
                    format: "x-google-flag:%s"
                }, {
                    push: "rids",
                    reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
                    names: ["id", "direction", "params"],
                    format: function(e) {
                        return e.params ? "rid:%s %s %s" : "rid:%s %s"
                    }
                }, {
                    push: "imageattrs",
                    reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
                    names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
                    format: function(e) {
                        return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "")
                    }
                }, {
                    name: "simulcast",
                    reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
                    names: ["dir1", "list1", "dir2", "list2"],
                    format: function(e) {
                        return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "")
                    }
                }, {
                    name: "simulcast_03",
                    reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
                    names: ["value"],
                    format: "simulcast: %s"
                }, {
                    name: "framerate",
                    reg: /^framerate:(\d+(?:$|\.\d+))/,
                    format: "framerate:%s"
                }, {
                    name: "sourceFilter",
                    reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
                    names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"],
                    format: "source-filter: %s %s %s %s %s"
                }, {
                    name: "bundleOnly",
                    reg: /^(bundle-only)/
                }, {
                    name: "label",
                    reg: /^label:(.+)/,
                    format: "label:%s"
                }, {
                    name: "sctpPort",
                    reg: /^sctp-port:(\d+)$/,
                    format: "sctp-port:%s"
                }, {
                    name: "maxMessageSize",
                    reg: /^max-message-size:(\d+)$/,
                    format: "max-message-size:%s"
                }, {
                    push: "tsRefClocks",
                    reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
                    names: ["clksrc", "clksrcExt"],
                    format: function(e) {
                        return "ts-refclk:%s" + (null != e.clksrcExt ? "=%s" : "")
                    }
                }, {
                    name: "mediaClk",
                    reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
                    names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"],
                    format: function(e) {
                        var r = "mediaclk:";
                        return r += null != e.id ? "id=%s %s" : "%v%s", r += null != e.mediaClockValue ? "=%s" : "", r += null != e.rateNumerator ? " rate=%s" : "", r += null != e.rateDenominator ? "/%s" : ""
                    }
                }, {
                    name: "keywords",
                    reg: /^keywds:(.+)$/,
                    format: "keywds:%s"
                }, {
                    name: "content",
                    reg: /^content:(.+)/,
                    format: "content:%s"
                }, {
                    name: "bfcpFloorCtrl",
                    reg: /^floorctrl:(c-only|s-only|c-s)/,
                    format: "floorctrl:%s"
                }, {
                    name: "bfcpConfId",
                    reg: /^confid:(\d+)/,
                    format: "confid:%s"
                }, {
                    name: "bfcpUserId",
                    reg: /^userid:(\d+)/,
                    format: "userid:%s"
                }, {
                    name: "bfcpFloorId",
                    reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
                    names: ["id", "mStream"],
                    format: "floorid:%s mstrm:%s"
                }, {
                    push: "invalid",
                    names: ["value"]
                }]
            };
            Object.keys(e).forEach(function(r) {
                e[r].forEach(function(e) {
                    e.reg || (e.reg = /(.*)/), e.format || (e.format = "%s")
                })
            });
        }, {}],
        "gZPd": [function(require, module, exports) {
            var r = function(r) {
                    return String(Number(r)) === r ? Number(r) : r
                },
                t = function(t, e, n, s) {
                    if (s && !n) e[s] = r(t[1]);
                    else
                        for (var a = 0; a < n.length; a += 1) null != t[a + 1] && (e[n[a]] = r(t[a + 1]))
                },
                e = function(r, e, n) {
                    var s = r.name && r.names;
                    r.push && !e[r.push] ? e[r.push] = [] : s && !e[r.name] && (e[r.name] = {});
                    var a = r.push ? {} : s ? e[r.name] : e;
                    t(n.match(r.reg), a, r.names, r.name), r.push && e[r.push].push(a)
                },
                n = require("./grammar"),
                s = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
            exports.parse = function(r) {
                var t = {},
                    a = [],
                    p = t;
                return r.split(/(\r\n|\r|\n)/).filter(s).forEach(function(r) {
                    var t = r[0],
                        s = r.slice(2);
                    "m" === t && (a.push({
                        rtp: [],
                        fmtp: []
                    }), p = a[a.length - 1]);
                    for (var u = 0; u < (n[t] || []).length; u += 1) {
                        var i = n[t][u];
                        if (i.reg.test(s)) return e(i, p, s)
                    }
                }), t.media = a, t
            };
            var a = function(t, e) {
                var n = e.split(/=(.+)/, 2);
                return 2 === n.length ? t[n[0]] = r(n[1]) : 1 === n.length && e.length > 1 && (t[n[0]] = void 0), t
            };
            exports.parseParams = function(r) {
                return r.split(/;\s?/).reduce(a, {})
            }, exports.parseFmtpConfig = exports.parseParams, exports.parsePayloads = function(r) {
                return r.toString().split(" ").map(Number)
            }, exports.parseRemoteCandidates = function(t) {
                for (var e = [], n = t.split(" ").map(r), s = 0; s < n.length; s += 3) e.push({
                    component: n[s],
                    ip: n[s + 1],
                    port: n[s + 2]
                });
                return e
            }, exports.parseImageAttributes = function(r) {
                return r.split(" ").map(function(r) {
                    return r.substring(1, r.length - 1).split(",").reduce(a, {})
                })
            }, exports.parseSimulcastStreamList = function(t) {
                return t.split(";").map(function(t) {
                    return t.split(",").map(function(t) {
                        var e, n = !1;
                        return "~" !== t[0] ? e = r(t) : (e = r(t.substring(1, t.length)), n = !0), {
                            scid: e,
                            paused: n
                        }
                    })
                })
            };
        }, {
            "./grammar": "dlbw"
        }],
        "WHEy": [function(require, module, exports) {
            var n = require("./grammar"),
                r = /%[sdv%]/g,
                a = function(n) {
                    var a = 1,
                        u = arguments,
                        e = u.length;
                    return n.replace(r, function(n) {
                        if (a >= e) return n;
                        var r = u[a];
                        switch (a += 1, n) {
                            case "%%":
                                return "%";
                            case "%s":
                                return String(r);
                            case "%d":
                                return Number(r);
                            case "%v":
                                return ""
                        }
                    })
                },
                u = function(n, r, u) {
                    var e = [n + "=" + (r.format instanceof Function ? r.format(r.push ? u : u[r.name]) : r.format)];
                    if (r.names)
                        for (var o = 0; o < r.names.length; o += 1) {
                            var s = r.names[o];
                            r.name ? e.push(u[r.name][s]) : e.push(u[r.names[o]])
                        } else e.push(u[r.name]);
                    return a.apply(null, e)
                },
                e = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
                o = ["i", "c", "b", "a"];
            module.exports = function(r, a) {
                a = a || {}, null == r.version && (r.version = 0), null == r.name && (r.name = " "), r.media.forEach(function(n) {
                    null == n.payloads && (n.payloads = "")
                });
                var s = a.outerOrder || e,
                    t = a.innerOrder || o,
                    i = [];
                return s.forEach(function(a) {
                    n[a].forEach(function(n) {
                        n.name in r && null != r[n.name] ? i.push(u(a, n, r)) : n.push in r && null != r[n.push] && r[n.push].forEach(function(r) {
                            i.push(u(a, n, r))
                        })
                    })
                }), r.media.forEach(function(r) {
                    i.push(u("m", n.m[0], r)), t.forEach(function(a) {
                        n[a].forEach(function(n) {
                            n.name in r && null != r[n.name] ? i.push(u(a, n, r)) : n.push in r && null != r[n.push] && r[n.push].forEach(function(r) {
                                i.push(u(a, n, r))
                            })
                        })
                    })
                }), i.join("\r\n") + "\r\n"
            };
        }, {
            "./grammar": "dlbw"
        }],
        "tbaU": [function(require, module, exports) {
            var e = require("./parser"),
                r = require("./writer");
            exports.write = r, exports.parse = e.parse, exports.parseParams = e.parseParams, exports.parseFmtpConfig = e.parseFmtpConfig, exports.parsePayloads = e.parsePayloads, exports.parseRemoteCandidates = e.parseRemoteCandidates, exports.parseImageAttributes = e.parseImageAttributes, exports.parseSimulcastStreamList = e.parseSimulcastStreamList;
        }, {
            "./parser": "gZPd",
            "./writer": "WHEy"
        }],
        "FBSL": [function(require, module, exports) {
            "use strict";

            function e(e, t) {
                var a;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (a = r(e)) || t && e && "number" == typeof e.length) {
                        a && (e = a);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, c = !0,
                    f = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        f = !0, i = e
                    },
                    f: function() {
                        try {
                            c || null == a.return || a.return()
                        } finally {
                            if (f) throw i
                        }
                    }
                }
            }

            function r(e, r) {
                if (e) {
                    if ("string" == typeof e) return t(e, r);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? t(e, r) : void 0
                }
            }

            function t(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
                return a
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var a = require("sdp-transform");

            function n(r) {
                var t, n = r.sdpObject,
                    o = new Map,
                    i = [],
                    c = !1,
                    f = !1,
                    p = e(n.media);
                try {
                    for (p.s(); !(t = p.n()).done;) {
                        var u = t.value,
                            s = u.type;
                        switch (s) {
                            case "audio":
                                if (c) continue;
                                c = !0;
                                break;
                            case "video":
                                if (f) continue;
                                f = !0;
                                break;
                            default:
                                continue
                        }
                        var l, d = e(u.rtp);
                        try {
                            for (d.s(); !(l = d.n()).done;) {
                                var y = l.value,
                                    v = {
                                        kind: s,
                                        mimeType: "".concat(s, "/").concat(y.codec),
                                        preferredPayloadType: y.payload,
                                        clockRate: y.rate,
                                        channels: y.encoding,
                                        parameters: {},
                                        rtcpFeedback: []
                                    };
                                o.set(v.preferredPayloadType, v)
                            }
                        } catch (M) {
                            d.e(M)
                        } finally {
                            d.f()
                        }
                        var m, h = e(u.fmtp || []);
                        try {
                            for (h.s(); !(m = h.n()).done;) {
                                var b = m.value,
                                    g = a.parseParams(b.config),
                                    w = o.get(b.payload);
                                w && (g && g["profile-level-id"] && (g["profile-level-id"] = String(g["profile-level-id"])), w.parameters = g)
                            }
                        } catch (M) {
                            h.e(M)
                        } finally {
                            h.f()
                        }
                        var k, x = e(u.rtcpFb || []);
                        try {
                            for (x.s(); !(k = x.n()).done;) {
                                var j = k.value,
                                    O = o.get(j.payload);
                                if (O) {
                                    var P = {
                                        type: j.type,
                                        parameter: j.subtype
                                    };
                                    P.parameter || delete P.parameter, O.rtcpFeedback.push(P)
                                }
                            }
                        } catch (M) {
                            x.e(M)
                        } finally {
                            x.f()
                        }
                        var T, A = e(u.ext || []);
                        try {
                            for (A.s(); !(T = A.n()).done;) {
                                var S = T.value;
                                if (!S["encrypt-uri"]) {
                                    var C = {
                                        kind: s,
                                        uri: S.uri,
                                        preferredId: S.value
                                    };
                                    i.push(C)
                                }
                            }
                        } catch (M) {
                            A.e(M)
                        } finally {
                            A.f()
                        }
                    }
                } catch (M) {
                    p.e(M)
                } finally {
                    p.f()
                }
                return {
                    codecs: Array.from(o.values()),
                    headerExtensions: i
                }
            }

            function o(e) {
                var r = e.sdpObject,
                    t = (r.media || []).find(function(e) {
                        return e.iceUfrag && 0 !== e.port
                    });
                if (!t) throw new Error("no active media section found");
                var a, n = t.fingerprint || r.fingerprint;
                switch (t.setup) {
                    case "active":
                        a = "client";
                        break;
                    case "passive":
                        a = "server";
                        break;
                    case "actpass":
                        a = "auto"
                }
                return {
                    role: a,
                    fingerprints: [{
                        algorithm: n.type,
                        value: n.hash
                    }]
                }
            }

            function i(e) {
                var r = (e.offerMediaObject.ssrcs || []).find(function(e) {
                    return "cname" === e.attribute
                });
                return r ? r.value : ""
            }

            function c(r) {
                var t, n = r.offerRtpParameters,
                    o = r.answerMediaObject,
                    i = e(n.codecs);
                try {
                    var c = function() {
                        var e = t.value,
                            r = e.mimeType.toLowerCase();
                        if ("audio/opus" !== r) return "continue";
                        if (!(o.rtp || []).find(function(r) {
                                return r.payload === e.payloadType
                            })) return "continue";
                        o.fmtp = o.fmtp || [];
                        var n = o.fmtp.find(function(r) {
                            return r.payload === e.payloadType
                        });
                        n || (n = {
                            payload: e.payloadType,
                            config: ""
                        }, o.fmtp.push(n));
                        var i = a.parseParams(n.config);
                        switch (r) {
                            case "audio/opus":
                                var c = e.parameters["sprop-stereo"];
                                void 0 !== c && (i.stereo = c ? 1 : 0)
                        }
                        n.config = "";
                        for (var f = 0, p = Object.keys(i); f < p.length; f++) {
                            var u = p[f];
                            n.config && (n.config += ";"), n.config += "".concat(u, "=").concat(i[u])
                        }
                    };
                    for (i.s(); !(t = i.n()).done;) c()
                } catch (f) {
                    i.e(f)
                } finally {
                    i.f()
                }
            }
            exports.extractRtpCapabilities = n, exports.extractDtlsParameters = o, exports.getCname = i, exports.applyCodecParameters = c;
        }, {
            "sdp-transform": "tbaU"
        }],
        "Dujs": [function(require, module, exports) {
            "use strict";

            function r(r, s) {
                return n(r) || e(r, s) || a(r, s) || t()
            }

            function t() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function e(r, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) {
                    var e = [],
                        n = !0,
                        s = !1,
                        a = void 0;
                    try {
                        for (var o, i = r[Symbol.iterator](); !(n = (o = i.next()).done) && (e.push(o.value), !t || e.length !== t); n = !0);
                    } catch (u) {
                        s = !0, a = u
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                    return e
                }
            }

            function n(r) {
                if (Array.isArray(r)) return r
            }

            function s(r, t) {
                var e;
                if ("undefined" == typeof Symbol || null == r[Symbol.iterator]) {
                    if (Array.isArray(r) || (e = a(r)) || t && r && "number" == typeof r.length) {
                        e && (r = e);
                        var n = 0,
                            s = function() {};
                        return {
                            s: s,
                            n: function() {
                                return n >= r.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: r[n++]
                                }
                            },
                            e: function(r) {
                                throw r
                            },
                            f: s
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    u = !1;
                return {
                    s: function() {
                        e = r[Symbol.iterator]()
                    },
                    n: function() {
                        var r = e.next();
                        return i = r.done, r
                    },
                    e: function(r) {
                        u = !0, o = r
                    },
                    f: function() {
                        try {
                            i || null == e.return || e.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function a(r, t) {
                if (r) {
                    if ("string" == typeof r) return o(r, t);
                    var e = Object.prototype.toString.call(r).slice(8, -1);
                    return "Object" === e && r.constructor && (e = r.constructor.name), "Map" === e || "Set" === e ? Array.from(r) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? o(r, t) : void 0
                }
            }

            function o(r, t) {
                (null == t || t > r.length) && (t = r.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
                return n
            }

            function i(t) {
                var e, n = t.offerMediaObject,
                    a = new Set,
                    o = s(n.ssrcs || []);
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var i = e.value.id;
                        a.add(i)
                    }
                } catch (E) {
                    o.e(E)
                } finally {
                    o.f()
                }
                if (0 === a.size) throw new Error("no a=ssrc lines found");
                var u, c = new Map,
                    f = s(n.ssrcGroups || []);
                try {
                    for (f.s(); !(u = f.n()).done;) {
                        var l = u.value;
                        if ("FID" === l.semantics) {
                            var d = r(l.ssrcs.split(/\s+/), 2),
                                v = d[0],
                                m = d[1];
                            v = Number(v), m = Number(m), a.has(v) && (a.delete(v), a.delete(m), c.set(v, m))
                        }
                    }
                } catch (E) {
                    f.e(E)
                } finally {
                    f.f()
                }
                var y, h = s(a);
                try {
                    for (h.s(); !(y = h.n()).done;) {
                        var p = y.value;
                        c.set(p, null)
                    }
                } catch (E) {
                    h.e(E)
                } finally {
                    h.f()
                }
                var b, w = [],
                    S = s(c);
                try {
                    for (S.s(); !(b = S.n()).done;) {
                        var g = r(b.value, 2),
                            j = g[0],
                            I = g[1],
                            A = {
                                ssrc: j
                            };
                        I && (A.rtx = {
                            ssrc: I
                        }), w.push(A)
                    }
                } catch (E) {
                    S.e(E)
                } finally {
                    S.f()
                }
                return w
            }

            function u(t) {
                var e = t.offerMediaObject,
                    n = t.numStreams;
                if (n <= 1) throw new TypeError("numStreams must be greater than 1");
                var s = (e.ssrcs || []).find(function(r) {
                    return "msid" === r.attribute
                });
                if (!s) throw new Error("a=ssrc line with msid information not found");
                var a, o = r(s.value.split(" ")[0], 2),
                    i = o[0],
                    u = o[1],
                    c = s.id;
                (e.ssrcGroups || []).some(function(r) {
                    if ("FID" !== r.semantics) return !1;
                    var t = r.ssrcs.split(/\s+/);
                    return Number(t[0]) === c && (a = Number(t[1]), !0)
                });
                var f = e.ssrcs.find(function(r) {
                    return "cname" === r.attribute
                });
                if (!f) throw new Error("a=ssrc line with cname information not found");
                for (var l = f.value, d = [], v = [], m = 0; m < n; ++m) d.push(c + m), a && v.push(a + m);
                e.ssrcGroups = [], e.ssrcs = [], e.ssrcGroups.push({
                    semantics: "SIM",
                    ssrcs: d.join(" ")
                });
                for (var y = 0; y < d.length; ++y) {
                    var h = d[y];
                    e.ssrcs.push({
                        id: h,
                        attribute: "cname",
                        value: l
                    }), e.ssrcs.push({
                        id: h,
                        attribute: "msid",
                        value: "".concat(i, " ").concat(u)
                    })
                }
                for (var p = 0; p < v.length; ++p) {
                    var b = d[p],
                        w = v[p];
                    e.ssrcs.push({
                        id: w,
                        attribute: "cname",
                        value: l
                    }), e.ssrcs.push({
                        id: w,
                        attribute: "msid",
                        value: "".concat(i, " ").concat(u)
                    }), e.ssrcGroups.push({
                        semantics: "FID",
                        ssrcs: "".concat(b, " ").concat(w)
                    })
                }
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.getRtpEncodings = i, exports.addLegacySimulcast = u;
        }, {}],
        "iuhH": [function(require, module, exports) {
            "use strict";

            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function e(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function n(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && r(t, e)
            }

            function r(t, e) {
                return (r = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function o(t) {
                var e = f();
                return function() {
                    var n, r = i(t);
                    if (e) {
                        var o = i(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }

            function c(e, n) {
                return !n || "object" !== t(n) && "function" != typeof n ? u(e) : n
            }

            function u(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function f() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }

            function i(t) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var s = require("../EnhancedEventEmitter"),
                a = function(t) {
                    n(c, s.EnhancedEventEmitter);
                    var r = o(c);

                    function c() {
                        return e(this, c), r.call(this)
                    }
                    return c
                }();
            exports.HandlerInterface = a;
        }, {
            "../EnhancedEventEmitter": "Oomd"
        }],
        "f7De": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && a(e, t)
            }

            function a(e, t) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function i(e) {
                var t = n();
                return function() {
                    var a, i = o(e);
                    if (t) {
                        var c = o(this).constructor;
                        a = Reflect.construct(i, arguments, c)
                    } else a = i.apply(this, arguments);
                    return r(this, a)
                }
            }

            function r(t, a) {
                return !a || "object" !== e(a) && "function" != typeof a ? c(t) : a
            }

            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function n() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function s(e, t) {
                var a;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (a = d(e)) || t && e && "number" == typeof e.length) {
                        a && (e = a);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, n = !0,
                    o = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return n = e.done, e
                    },
                    e: function(e) {
                        o = !0, c = e
                    },
                    f: function() {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                }
            }

            function d(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? p(e, t) : void 0
                }
            }

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, i = new Array(t); a < t; a++) i[a] = e[a];
                return i
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function l(e, t, a) {
                return t && m(e.prototype, t), a && m(e, a), e
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var b = require("../../utils"),
                f = function() {
                    function e(t) {
                        var a = t.iceParameters,
                            i = t.iceCandidates,
                            r = t.dtlsParameters,
                            c = t.planB,
                            n = void 0 !== c && c;
                        if (u(this, e), this._mediaObject = {}, this._planB = n, a && this.setIceParameters(a), i) {
                            this._mediaObject.candidates = [];
                            var o, d = s(i);
                            try {
                                for (d.s(); !(o = d.n()).done;) {
                                    var p = o.value,
                                        m = {
                                            component: 1
                                        };
                                    m.foundation = p.foundation, m.ip = p.ip, m.port = p.port, m.priority = p.priority, m.transport = p.protocol, m.type = p.type, p.tcpType && (m.tcptype = p.tcpType), this._mediaObject.candidates.push(m)
                                }
                            } catch (l) {
                                d.e(l)
                            } finally {
                                d.f()
                            }
                            this._mediaObject.endOfCandidates = "end-of-candidates", this._mediaObject.iceOptions = "renomination"
                        }
                        r && this.setDtlsRole(r.role)
                    }
                    return l(e, [{
                        key: "getObject",
                        value: function() {
                            return this._mediaObject
                        }
                    }, {
                        key: "setIceParameters",
                        value: function(e) {
                            this._mediaObject.iceUfrag = e.usernameFragment, this._mediaObject.icePwd = e.password
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            this._mediaObject.direction = "inactive", delete this._mediaObject.ext, delete this._mediaObject.ssrcs, delete this._mediaObject.ssrcGroups, delete this._mediaObject.simulcast, delete this._mediaObject.simulcast_03, delete this._mediaObject.rids
                        }
                    }, {
                        key: "close",
                        value: function() {
                            this._mediaObject.direction = "inactive", this._mediaObject.port = 0, delete this._mediaObject.ext, delete this._mediaObject.ssrcs, delete this._mediaObject.ssrcGroups, delete this._mediaObject.simulcast, delete this._mediaObject.simulcast_03, delete this._mediaObject.rids, delete this._mediaObject.extmapAllowMixed
                        }
                    }, {
                        key: "mid",
                        get: function() {
                            return String(this._mediaObject.mid)
                        }
                    }, {
                        key: "closed",
                        get: function() {
                            return 0 === this._mediaObject.port
                        }
                    }]), e
                }();
            exports.MediaSection = f;
            var y = function(e) {
                t(r, f);
                var a = i(r);

                function r(e) {
                    var t, i = e.iceParameters,
                        c = e.iceCandidates,
                        n = e.dtlsParameters,
                        o = e.sctpParameters,
                        d = e.plainRtpParameters,
                        p = e.planB,
                        m = void 0 !== p && p,
                        l = e.offerMediaObject,
                        f = e.offerRtpParameters,
                        y = e.answerRtpParameters,
                        v = e.codecOptions,
                        _ = e.extmapAllowMixed,
                        j = void 0 !== _ && _;
                    switch (u(this, r), (t = a.call(this, {
                        iceParameters: i,
                        iceCandidates: c,
                        dtlsParameters: n,
                        planB: m
                    }))._mediaObject.mid = String(l.mid), t._mediaObject.type = l.type, t._mediaObject.protocol = l.protocol, d ? (t._mediaObject.connection = {
                        ip: d.ip,
                        version: d.ipVersion
                    }, t._mediaObject.port = d.port) : (t._mediaObject.connection = {
                        ip: "127.0.0.1",
                        version: 4
                    }, t._mediaObject.port = 7), l.type) {
                        case "audio":
                        case "video":
                            t._mediaObject.direction = "recvonly", t._mediaObject.rtp = [], t._mediaObject.rtcpFb = [], t._mediaObject.fmtp = [];
                            var h, x = s(y.codecs);
                            try {
                                var g = function() {
                                    var e = h.value,
                                        a = {
                                            payload: e.payloadType,
                                            codec: O(e),
                                            rate: e.clockRate
                                        };
                                    e.channels > 1 && (a.encoding = e.channels), t._mediaObject.rtp.push(a);
                                    var i = b.clone(e.parameters || {});
                                    if (v) {
                                        var r = v.opusStereo,
                                            c = v.opusFec,
                                            n = v.opusDtx,
                                            o = v.opusMaxPlaybackRate,
                                            d = v.opusPtime,
                                            p = v.videoGoogleStartBitrate,
                                            u = v.videoGoogleMaxBitrate,
                                            m = v.videoGoogleMinBitrate,
                                            l = f.codecs.find(function(t) {
                                                return t.payloadType === e.payloadType
                                            });
                                        switch (e.mimeType.toLowerCase()) {
                                            case "audio/opus":
                                                void 0 !== r && (l.parameters["sprop-stereo"] = r ? 1 : 0, i.stereo = r ? 1 : 0), void 0 !== c && (l.parameters.useinbandfec = c ? 1 : 0, i.useinbandfec = c ? 1 : 0), void 0 !== n && (l.parameters.usedtx = n ? 1 : 0, i.usedtx = n ? 1 : 0), void 0 !== o && (i.maxplaybackrate = o), void 0 !== d && (l.parameters.ptime = d, i.ptime = d);
                                                break;
                                            case "video/vp8":
                                            case "video/vp9":
                                            case "video/h264":
                                            case "video/h265":
                                                void 0 !== p && (i["x-google-start-bitrate"] = p), void 0 !== u && (i["x-google-max-bitrate"] = u), void 0 !== m && (i["x-google-min-bitrate"] = m)
                                        }
                                    }
                                    for (var y = {
                                            payload: e.payloadType,
                                            config: ""
                                        }, _ = 0, j = Object.keys(i); _ < j.length; _++) {
                                        var x = j[_];
                                        y.config && (y.config += ";"), y.config += "".concat(x, "=").concat(i[x])
                                    }
                                    y.config && t._mediaObject.fmtp.push(y);
                                    var g, P = s(e.rtcpFeedback);
                                    try {
                                        for (P.s(); !(g = P.n()).done;) {
                                            var w = g.value;
                                            t._mediaObject.rtcpFb.push({
                                                payload: e.payloadType,
                                                type: w.type,
                                                subtype: w.parameter
                                            })
                                        }
                                    } catch (S) {
                                        P.e(S)
                                    } finally {
                                        P.f()
                                    }
                                };
                                for (x.s(); !(h = x.n()).done;) g()
                            } catch (z) {
                                x.e(z)
                            } finally {
                                x.f()
                            }
                            t._mediaObject.payloads = y.codecs.map(function(e) {
                                return e.payloadType
                            }).join(" "), t._mediaObject.ext = [];
                            var P, w = s(y.headerExtensions);
                            try {
                                var S = function() {
                                    var e = P.value;
                                    if (!(l.ext || []).some(function(t) {
                                            return t.uri === e.uri
                                        })) return "continue";
                                    t._mediaObject.ext.push({
                                        uri: e.uri,
                                        value: e.id
                                    })
                                };
                                for (w.s(); !(P = w.n()).done;) S()
                            } catch (z) {
                                w.e(z)
                            } finally {
                                w.f()
                            }
                            if (j && "extmap-allow-mixed" === l.extmapAllowMixed && (t._mediaObject.extmapAllowMixed = "extmap-allow-mixed"), l.simulcast) {
                                t._mediaObject.simulcast = {
                                    dir1: "recv",
                                    list1: l.simulcast.list1
                                }, t._mediaObject.rids = [];
                                var k, R = s(l.rids || []);
                                try {
                                    for (R.s(); !(k = R.n()).done;) {
                                        var T = k.value;
                                        "send" === T.direction && t._mediaObject.rids.push({
                                            id: T.id,
                                            direction: "recv"
                                        })
                                    }
                                } catch (z) {
                                    R.e(z)
                                } finally {
                                    R.f()
                                }
                            } else if (l.simulcast_03) {
                                t._mediaObject.simulcast_03 = {
                                    value: l.simulcast_03.value.replace(/send/g, "recv")
                                }, t._mediaObject.rids = [];
                                var M, B = s(l.rids || []);
                                try {
                                    for (B.s(); !(M = B.n()).done;) {
                                        var A = M.value;
                                        "send" === A.direction && t._mediaObject.rids.push({
                                            id: A.id,
                                            direction: "recv"
                                        })
                                    }
                                } catch (z) {
                                    B.e(z)
                                } finally {
                                    B.f()
                                }
                            }
                            t._mediaObject.rtcpMux = "rtcp-mux", t._mediaObject.rtcpRsize = "rtcp-rsize", t._planB && "video" === t._mediaObject.type && (t._mediaObject.xGoogleFlag = "conference");
                            break;
                        case "application":
                            "number" == typeof l.sctpPort ? (t._mediaObject.payloads = "webrtc-datachannel", t._mediaObject.sctpPort = o.port, t._mediaObject.maxMessageSize = o.maxMessageSize) : l.sctpmap && (t._mediaObject.payloads = o.port, t._mediaObject.sctpmap = {
                                app: "webrtc-datachannel",
                                sctpmapNumber: o.port,
                                maxMessageSize: o.maxMessageSize
                            })
                    }
                    return t
                }
                return l(r, [{
                    key: "setDtlsRole",
                    value: function(e) {
                        switch (e) {
                            case "client":
                                this._mediaObject.setup = "active";
                                break;
                            case "server":
                                this._mediaObject.setup = "passive";
                                break;
                            case "auto":
                                this._mediaObject.setup = "actpass"
                        }
                    }
                }]), r
            }();
            exports.AnswerMediaSection = y;
            var v = function(e) {
                t(r, f);
                var a = i(r);

                function r(e) {
                    var t, i = e.iceParameters,
                        c = e.iceCandidates,
                        n = e.dtlsParameters,
                        o = e.sctpParameters,
                        d = e.plainRtpParameters,
                        p = e.planB,
                        m = void 0 !== p && p,
                        l = e.mid,
                        b = e.kind,
                        f = e.offerRtpParameters,
                        y = e.streamId,
                        v = e.trackId,
                        _ = e.oldDataChannelSpec,
                        j = void 0 !== _ && _;
                    switch (u(this, r), (t = a.call(this, {
                        iceParameters: i,
                        iceCandidates: c,
                        dtlsParameters: n,
                        planB: m
                    }))._mediaObject.mid = String(l), t._mediaObject.type = b, d ? (t._mediaObject.connection = {
                        ip: d.ip,
                        version: d.ipVersion
                    }, t._mediaObject.protocol = "RTP/AVP", t._mediaObject.port = d.port) : (t._mediaObject.connection = {
                        ip: "127.0.0.1",
                        version: 4
                    }, t._mediaObject.protocol = o ? "UDP/DTLS/SCTP" : "UDP/TLS/RTP/SAVPF", t._mediaObject.port = 7), b) {
                        case "audio":
                        case "video":
                            t._mediaObject.direction = "sendonly", t._mediaObject.rtp = [], t._mediaObject.rtcpFb = [], t._mediaObject.fmtp = [], t._planB || (t._mediaObject.msid = "".concat(y || "-", " ").concat(v));
                            var h, x = s(f.codecs);
                            try {
                                for (x.s(); !(h = x.n()).done;) {
                                    var g = h.value,
                                        P = {
                                            payload: g.payloadType,
                                            codec: O(g),
                                            rate: g.clockRate
                                        };
                                    g.channels > 1 && (P.encoding = g.channels), t._mediaObject.rtp.push(P);
                                    for (var w = {
                                            payload: g.payloadType,
                                            config: ""
                                        }, S = 0, k = Object.keys(g.parameters); S < k.length; S++) {
                                        var R = k[S];
                                        w.config && (w.config += ";"), w.config += "".concat(R, "=").concat(g.parameters[R])
                                    }
                                    w.config && t._mediaObject.fmtp.push(w);
                                    var T, M = s(g.rtcpFeedback);
                                    try {
                                        for (M.s(); !(T = M.n()).done;) {
                                            var B = T.value;
                                            t._mediaObject.rtcpFb.push({
                                                payload: g.payloadType,
                                                type: B.type,
                                                subtype: B.parameter
                                            })
                                        }
                                    } catch (I) {
                                        M.e(I)
                                    } finally {
                                        M.f()
                                    }
                                }
                            } catch (I) {
                                x.e(I)
                            } finally {
                                x.f()
                            }
                            t._mediaObject.payloads = f.codecs.map(function(e) {
                                return e.payloadType
                            }).join(" "), t._mediaObject.ext = [];
                            var A, z = s(f.headerExtensions);
                            try {
                                for (z.s(); !(A = z.n()).done;) {
                                    var D = A.value;
                                    t._mediaObject.ext.push({
                                        uri: D.uri,
                                        value: D.id
                                    })
                                }
                            } catch (I) {
                                z.e(I)
                            } finally {
                                z.f()
                            }
                            t._mediaObject.rtcpMux = "rtcp-mux", t._mediaObject.rtcpRsize = "rtcp-rsize";
                            var F = f.encodings[0],
                                C = F.ssrc,
                                G = F.rtx && F.rtx.ssrc ? F.rtx.ssrc : void 0;
                            t._mediaObject.ssrcs = [], t._mediaObject.ssrcGroups = [], f.rtcp.cname && t._mediaObject.ssrcs.push({
                                id: C,
                                attribute: "cname",
                                value: f.rtcp.cname
                            }), t._planB && t._mediaObject.ssrcs.push({
                                id: C,
                                attribute: "msid",
                                value: "".concat(y || "-", " ").concat(v)
                            }), G && (f.rtcp.cname && t._mediaObject.ssrcs.push({
                                id: G,
                                attribute: "cname",
                                value: f.rtcp.cname
                            }), t._planB && t._mediaObject.ssrcs.push({
                                id: G,
                                attribute: "msid",
                                value: "".concat(y || "-", " ").concat(v)
                            }), t._mediaObject.ssrcGroups.push({
                                semantics: "FID",
                                ssrcs: "".concat(C, " ").concat(G)
                            }));
                            break;
                        case "application":
                            j ? (t._mediaObject.payloads = o.port, t._mediaObject.sctpmap = {
                                app: "webrtc-datachannel",
                                sctpmapNumber: o.port,
                                maxMessageSize: o.maxMessageSize
                            }) : (t._mediaObject.payloads = "webrtc-datachannel", t._mediaObject.sctpPort = o.port, t._mediaObject.maxMessageSize = o.maxMessageSize)
                    }
                    return t
                }
                return l(r, [{
                    key: "setDtlsRole",
                    value: function(e) {
                        this._mediaObject.setup = "actpass"
                    }
                }, {
                    key: "planBReceive",
                    value: function(e) {
                        var t = e.offerRtpParameters,
                            a = e.streamId,
                            i = e.trackId,
                            r = t.encodings[0],
                            c = r.ssrc,
                            n = r.rtx && r.rtx.ssrc ? r.rtx.ssrc : void 0;
                        t.rtcp.cname && this._mediaObject.ssrcs.push({
                            id: c,
                            attribute: "cname",
                            value: t.rtcp.cname
                        }), this._mediaObject.ssrcs.push({
                            id: c,
                            attribute: "msid",
                            value: "".concat(a || "-", " ").concat(i)
                        }), n && (t.rtcp.cname && this._mediaObject.ssrcs.push({
                            id: n,
                            attribute: "cname",
                            value: t.rtcp.cname
                        }), this._mediaObject.ssrcs.push({
                            id: n,
                            attribute: "msid",
                            value: "".concat(a || "-", " ").concat(i)
                        }), this._mediaObject.ssrcGroups.push({
                            semantics: "FID",
                            ssrcs: "".concat(c, " ").concat(n)
                        }))
                    }
                }, {
                    key: "planBStopReceiving",
                    value: function(e) {
                        var t = e.offerRtpParameters.encodings[0],
                            a = t.ssrc,
                            i = t.rtx && t.rtx.ssrc ? t.rtx.ssrc : void 0;
                        this._mediaObject.ssrcs = this._mediaObject.ssrcs.filter(function(e) {
                            return e.id !== a && e.id !== i
                        }), i && (this._mediaObject.ssrcGroups = this._mediaObject.ssrcGroups.filter(function(e) {
                            return e.ssrcs !== "".concat(a, " ").concat(i)
                        }))
                    }
                }]), r
            }();

            function O(e) {
                var t = new RegExp("^(audio|video)/(.+)", "i").exec(e.mimeType);
                if (!t) throw new TypeError("invalid codec.mimeType");
                return t[2]
            }
            exports.OfferMediaSection = v;
        }, {
            "../../utils": "FOZT"
        }],
        "aH4R": [function(require, module, exports) {
            "use strict";

            function e(e, i) {
                var a;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (a = t(e)) || i && e && "number" == typeof e.length) {
                        a && (e = a);
                        var r = 0,
                            s = function() {};
                        return {
                            s: s,
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
                            f: s
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, d = !0,
                    o = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return d = e.done, e
                    },
                    e: function(e) {
                        o = !0, n = e
                    },
                    f: function() {
                        try {
                            d || null == a.return || a.return()
                        } finally {
                            if (o) throw n
                        }
                    }
                }
            }

            function t(e, t) {
                if (e) {
                    if ("string" == typeof e) return i(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? i(e, t) : void 0
                }
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                return a
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function s(e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var n = require("sdp-transform"),
                d = require("../../Logger"),
                o = require("./MediaSection"),
                c = new d.Logger("RemoteSdp"),
                m = function() {
                    function t(e) {
                        var i = e.iceParameters,
                            r = e.iceCandidates,
                            s = e.dtlsParameters,
                            n = e.sctpParameters,
                            d = e.plainRtpParameters,
                            o = e.planB,
                            c = void 0 !== o && o;
                        if (a(this, t), this._mediaSections = [], this._midToIndex = new Map, this._iceParameters = i, this._iceCandidates = r, this._dtlsParameters = s, this._sctpParameters = n, this._plainRtpParameters = d, this._planB = c, this._sdpObject = {
                                version: 0,
                                origin: {
                                    address: "0.0.0.0",
                                    ipVer: 4,
                                    netType: "IN",
                                    sessionId: 1e4,
                                    sessionVersion: 0,
                                    username: "mediasoup-client"
                                },
                                name: "-",
                                timing: {
                                    start: 0,
                                    stop: 0
                                },
                                media: []
                            }, i && i.iceLite && (this._sdpObject.icelite = "ice-lite"), s) {
                            this._sdpObject.msidSemantic = {
                                semantic: "WMS",
                                token: "*"
                            };
                            var m = this._dtlsParameters.fingerprints.length;
                            this._sdpObject.fingerprint = {
                                type: s.fingerprints[m - 1].algorithm,
                                hash: s.fingerprints[m - 1].value
                            }, this._sdpObject.groups = [{
                                type: "BUNDLE",
                                mids: ""
                            }]
                        }
                        d && (this._sdpObject.origin.address = d.ip, this._sdpObject.origin.ipVer = d.ipVersion)
                    }
                    return s(t, [{
                        key: "updateIceParameters",
                        value: function(t) {
                            c.debug("updateIceParameters() [iceParameters:%o]", t), this._iceParameters = t, this._sdpObject.icelite = t.iceLite ? "ice-lite" : void 0;
                            var i, a = e(this._mediaSections);
                            try {
                                for (a.s(); !(i = a.n()).done;) {
                                    i.value.setIceParameters(t)
                                }
                            } catch (r) {
                                a.e(r)
                            } finally {
                                a.f()
                            }
                        }
                    }, {
                        key: "updateDtlsRole",
                        value: function(t) {
                            c.debug("updateDtlsRole() [role:%s]", t), this._dtlsParameters.role = t;
                            var i, a = e(this._mediaSections);
                            try {
                                for (a.s(); !(i = a.n()).done;) {
                                    i.value.setDtlsRole(t)
                                }
                            } catch (r) {
                                a.e(r)
                            } finally {
                                a.f()
                            }
                        }
                    }, {
                        key: "getNextMediaSectionIdx",
                        value: function() {
                            for (var e = 0; e < this._mediaSections.length; ++e) {
                                var t = this._mediaSections[e];
                                if (t.closed) return {
                                    idx: e,
                                    reuseMid: t.mid
                                }
                            }
                            return {
                                idx: this._mediaSections.length
                            }
                        }
                    }, {
                        key: "send",
                        value: function(e) {
                            var t = e.offerMediaObject,
                                i = e.reuseMid,
                                a = e.offerRtpParameters,
                                r = e.answerRtpParameters,
                                s = e.codecOptions,
                                n = e.extmapAllowMixed,
                                d = void 0 !== n && n,
                                c = new o.AnswerMediaSection({
                                    iceParameters: this._iceParameters,
                                    iceCandidates: this._iceCandidates,
                                    dtlsParameters: this._dtlsParameters,
                                    plainRtpParameters: this._plainRtpParameters,
                                    planB: this._planB,
                                    offerMediaObject: t,
                                    offerRtpParameters: a,
                                    answerRtpParameters: r,
                                    codecOptions: s,
                                    extmapAllowMixed: d
                                });
                            i ? this._replaceMediaSection(c, i) : this._midToIndex.has(c.mid) ? this._replaceMediaSection(c) : this._addMediaSection(c)
                        }
                    }, {
                        key: "receive",
                        value: function(e) {
                            var t, i = e.mid,
                                a = e.kind,
                                r = e.offerRtpParameters,
                                s = e.streamId,
                                n = e.trackId,
                                d = this._midToIndex.get(i);
                            void 0 !== d && (t = this._mediaSections[d]), t ? (t.planBReceive({
                                offerRtpParameters: r,
                                streamId: s,
                                trackId: n
                            }), this._replaceMediaSection(t)) : (t = new o.OfferMediaSection({
                                iceParameters: this._iceParameters,
                                iceCandidates: this._iceCandidates,
                                dtlsParameters: this._dtlsParameters,
                                plainRtpParameters: this._plainRtpParameters,
                                planB: this._planB,
                                mid: i,
                                kind: a,
                                offerRtpParameters: r,
                                streamId: s,
                                trackId: n
                            }), this._addMediaSection(t))
                        }
                    }, {
                        key: "disableMediaSection",
                        value: function(e) {
                            var t = this._midToIndex.get(e);
                            if (void 0 === t) throw new Error("no media section found with mid '".concat(e, "'"));
                            this._mediaSections[t].disable()
                        }
                    }, {
                        key: "closeMediaSection",
                        value: function(e) {
                            var t = this._midToIndex.get(e);
                            if (void 0 === t) throw new Error("no media section found with mid '".concat(e, "'"));
                            var i = this._mediaSections[t];
                            if (e === this._firstMid) return c.debug("closeMediaSection() | cannot close first media section, disabling it instead [mid:%s]", e), void this.disableMediaSection(e);
                            i.close(), this._regenerateBundleMids()
                        }
                    }, {
                        key: "planBStopReceiving",
                        value: function(e) {
                            var t = e.mid,
                                i = e.offerRtpParameters,
                                a = this._midToIndex.get(t);
                            if (void 0 === a) throw new Error("no media section found with mid '".concat(t, "'"));
                            var r = this._mediaSections[a];
                            r.planBStopReceiving({
                                offerRtpParameters: i
                            }), this._replaceMediaSection(r)
                        }
                    }, {
                        key: "sendSctpAssociation",
                        value: function(e) {
                            var t = e.offerMediaObject,
                                i = new o.AnswerMediaSection({
                                    iceParameters: this._iceParameters,
                                    iceCandidates: this._iceCandidates,
                                    dtlsParameters: this._dtlsParameters,
                                    sctpParameters: this._sctpParameters,
                                    plainRtpParameters: this._plainRtpParameters,
                                    offerMediaObject: t
                                });
                            this._addMediaSection(i)
                        }
                    }, {
                        key: "receiveSctpAssociation",
                        value: function() {
                            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).oldDataChannelSpec,
                                t = void 0 !== e && e,
                                i = new o.OfferMediaSection({
                                    iceParameters: this._iceParameters,
                                    iceCandidates: this._iceCandidates,
                                    dtlsParameters: this._dtlsParameters,
                                    sctpParameters: this._sctpParameters,
                                    plainRtpParameters: this._plainRtpParameters,
                                    mid: "datachannel",
                                    kind: "application",
                                    oldDataChannelSpec: t
                                });
                            this._addMediaSection(i)
                        }
                    }, {
                        key: "getSdp",
                        value: function() {
                            return this._sdpObject.origin.sessionVersion++, n.write(this._sdpObject)
                        }
                    }, {
                        key: "_addMediaSection",
                        value: function(e) {
                            this._firstMid || (this._firstMid = e.mid), this._mediaSections.push(e), this._midToIndex.set(e.mid, this._mediaSections.length - 1), this._sdpObject.media.push(e.getObject()), this._regenerateBundleMids()
                        }
                    }, {
                        key: "_replaceMediaSection",
                        value: function(e, t) {
                            if ("string" == typeof t) {
                                var i = this._midToIndex.get(t);
                                if (void 0 === i) throw new Error("no media section found for reuseMid '".concat(t, "'"));
                                var a = this._mediaSections[i];
                                this._mediaSections[i] = e, this._midToIndex.delete(a.mid), this._midToIndex.set(e.mid, i), this._sdpObject.media[i] = e.getObject(), this._regenerateBundleMids()
                            } else {
                                var r = this._midToIndex.get(e.mid);
                                if (void 0 === r) throw new Error("no media section found with mid '".concat(e.mid, "'"));
                                this._mediaSections[r] = e, this._sdpObject.media[r] = e.getObject()
                            }
                        }
                    }, {
                        key: "_regenerateBundleMids",
                        value: function() {
                            this._dtlsParameters && (this._sdpObject.groups[0].mids = this._mediaSections.filter(function(e) {
                                return !e.closed
                            }).map(function(e) {
                                return e.mid
                            }).join(" "))
                        }
                    }]), t
                }();
            exports.RemoteSdp = m;
        }, {
            "sdp-transform": "tbaU",
            "../../Logger": "p5bA",
            "./MediaSection": "f7De"
        }],
        "QdG4": [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var e = new RegExp("^[LS]([1-9]\\d{0,1})T([1-9]\\d{0,1})");

            function r(r) {
                var a = e.exec(r || "");
                return a ? {
                    spatialLayers: Number(a[1]),
                    temporalLayers: Number(a[2])
                } : {
                    spatialLayers: 1,
                    temporalLayers: 1
                }
            }
            exports.parse = r;
        }, {}],
        "vpFN": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
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
                var s, c = !0,
                    o = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        o = !0, s = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                }
            }

            function r(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach(function(t) {
                        s(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function s(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function c(e, t, r, n, a, i, s) {
                try {
                    var c = e[i](s),
                        o = c.value
                } catch (u) {
                    return void r(u)
                }
                c.done ? t(o) : Promise.resolve(o).then(n, a)
            }

            function o(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, a) {
                        var i = e.apply(t, r);

                        function s(e) {
                            c(i, n, a, s, o, "next", e)
                        }

                        function o(e) {
                            c(i, n, a, s, o, "throw", e)
                        }
                        s(void 0)
                    })
                }
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t, r) {
                return t && p(e.prototype, t), r && p(e, r), e
            }

            function l(e, t) {
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

            function m(e) {
                var t = v();
                return function() {
                    var r, n = y(e);
                    if (t) {
                        var a = y(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return h(this, r)
                }
            }

            function h(t, r) {
                return !r || "object" !== e(r) && "function" != typeof r ? g(t) : r
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v() {
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
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var b = require("sdp-transform"),
                R = require("../Logger"),
                S = require("../utils"),
                _ = require("../ortc"),
                w = require("./sdp/commonUtils"),
                x = require("./sdp/unifiedPlanUtils"),
                k = require("./HandlerInterface"),
                D = require("./sdp/RemoteSdp"),
                P = require("../scalabilityModes"),
                T = new R.Logger("Chrome74"),
                C = {
                    OS: 1024,
                    MIS: 1024
                },
                O = function(e) {
                    l(n, k.HandlerInterface);
                    var r = m(n);

                    function n() {
                        var e;
                        return u(this, n), (e = r.call(this))._mapMidTransceiver = new Map, e._sendStream = new MediaStream, e._hasDataChannelMediaSection = !1, e._nextSendSctpStreamId = 0, e._transportReady = !1, e
                    }
                    return d(n, [{
                        key: "close",
                        value: function() {
                            if (T.debug("close()"), this._pc) try {
                                this._pc.close()
                            } catch (e) {}
                        }
                    }, {
                        key: "getNativeRtpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                var t, r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return T.debug("getNativeRtpCapabilities()"), t = new RTCPeerConnection({
                                                iceServers: [],
                                                iceTransportPolicy: "all",
                                                bundlePolicy: "max-bundle",
                                                rtcpMuxPolicy: "require",
                                                sdpSemantics: "unified-plan"
                                            }), e.prev = 2, t.addTransceiver("audio"), t.addTransceiver("video"), e.next = 7, t.createOffer();
                                        case 7:
                                            r = e.sent;
                                            try {
                                                t.close()
                                            } catch (i) {}
                                            return n = b.parse(r.sdp), a = w.extractRtpCapabilities({
                                                sdpObject: n
                                            }), e.abrupt("return", a);
                                        case 14:
                                            e.prev = 14, e.t0 = e.catch(2);
                                            try {
                                                t.close()
                                            } catch (s) {}
                                            throw e.t0;
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [2, 14]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getNativeSctpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return T.debug("getNativeSctpCapabilities()"), e.abrupt("return", {
                                                numStreams: C
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "run",
                        value: function(e) {
                            var t = this,
                                r = e.direction,
                                n = e.iceParameters,
                                a = e.iceCandidates,
                                s = e.dtlsParameters,
                                c = e.sctpParameters,
                                o = e.iceServers,
                                u = e.iceTransportPolicy,
                                p = e.additionalSettings,
                                d = e.proprietaryConstraints,
                                l = e.extendedRtpCapabilities;
                            T.debug("run()"), this._direction = r, this._remoteSdp = new D.RemoteSdp({
                                iceParameters: n,
                                iceCandidates: a,
                                dtlsParameters: s,
                                sctpParameters: c
                            }), this._sendingRtpParametersByKind = {
                                audio: _.getSendingRtpParameters("audio", l),
                                video: _.getSendingRtpParameters("video", l)
                            }, this._sendingRemoteRtpParametersByKind = {
                                audio: _.getSendingRemoteRtpParameters("audio", l),
                                video: _.getSendingRemoteRtpParameters("video", l)
                            }, this._pc = new RTCPeerConnection(i({
                                iceServers: o || [],
                                iceTransportPolicy: u || "all",
                                bundlePolicy: "max-bundle",
                                rtcpMuxPolicy: "require",
                                sdpSemantics: "unified-plan"
                            }, p), d), this._pc.addEventListener("iceconnectionstatechange", function() {
                                switch (t._pc.iceConnectionState) {
                                    case "checking":
                                        t.emit("@connectionstatechange", "connecting");
                                        break;
                                    case "connected":
                                    case "completed":
                                        t.emit("@connectionstatechange", "connected");
                                        break;
                                    case "failed":
                                        t.emit("@connectionstatechange", "failed");
                                        break;
                                    case "disconnected":
                                        t.emit("@connectionstatechange", "disconnected");
                                        break;
                                    case "closed":
                                        t.emit("@connectionstatechange", "closed")
                                }
                            })
                        }
                    }, {
                        key: "updateIceServers",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            T.debug("updateIceServers()"), (r = this._pc.getConfiguration()).iceServers = t, this._pc.setConfiguration(r);
                                        case 4:
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
                        key: "restartIce",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T.debug("restartIce()"), this._remoteSdp.updateIceParameters(t), this._transportReady) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if ("send" !== this._direction) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 7, this._pc.createOffer({
                                                iceRestart: !0
                                            });
                                        case 7:
                                            return r = e.sent, T.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", r), e.next = 11, this._pc.setLocalDescription(r);
                                        case 11:
                                            return n = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", n), e.next = 15, this._pc.setRemoteDescription(n);
                                        case 15:
                                            e.next = 27;
                                            break;
                                        case 17:
                                            return a = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", a), e.next = 21, this._pc.setRemoteDescription(a);
                                        case 21:
                                            return e.next = 23, this._pc.createAnswer();
                                        case 23:
                                            return i = e.sent, T.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", i), e.next = 27, this._pc.setLocalDescription(i);
                                        case 27:
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
                        key: "getTransportStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this._pc.getStats());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "send",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(r) {
                                var n, a, i, s, c, o, u, p, d, l, f, m, h, g, v, y, R, k;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = r.track, a = r.encodings, i = r.codecOptions, s = r.codec, this._assertSendDirection(), T.debug("send() [kind:%s, track.id:%s]", n.kind, n.id), a && a.length > 1 && a.forEach(function(e, t) {
                                                e.rid = "r".concat(t)
                                            }), (c = S.clone(this._sendingRtpParametersByKind[n.kind])).codecs = _.reduceCodecs(c.codecs, s), (o = S.clone(this._sendingRemoteRtpParametersByKind[n.kind])).codecs = _.reduceCodecs(o.codecs, s), u = this._remoteSdp.getNextMediaSectionIdx(), p = this._pc.addTransceiver(n, {
                                                direction: "sendonly",
                                                streams: [this._sendStream],
                                                sendEncodings: a
                                            }), e.next = 12, this._pc.createOffer();
                                        case 12:
                                            if (d = e.sent, l = b.parse(d.sdp), this._transportReady) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 17, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: l
                                            });
                                        case 17:
                                            return m = !1, h = P.parse((a || [{}])[0].scalabilityMode), a && 1 === a.length && h.spatialLayers > 1 && "video/vp9" === c.codecs[0].mimeType.toLowerCase() && (T.debug("send() | enabling legacy simulcast for VP9 SVC"), m = !0, l = b.parse(d.sdp), f = l.media[u.idx], x.addLegacySimulcast({
                                                offerMediaObject: f,
                                                numStreams: h.spatialLayers
                                            }), d = {
                                                type: "offer",
                                                sdp: b.write(l)
                                            }), T.debug("send() | calling pc.setLocalDescription() [offer:%o]", d), e.next = 23, this._pc.setLocalDescription(d);
                                        case 23:
                                            if (g = p.mid, c.mid = g, l = b.parse(this._pc.localDescription.sdp), f = l.media[u.idx], c.rtcp.cname = w.getCname({
                                                    offerMediaObject: f
                                                }), a ? 1 === a.length ? (v = x.getRtpEncodings({
                                                    offerMediaObject: f
                                                }), Object.assign(v[0], a[0]), m && (v = [v[0]]), c.encodings = v) : c.encodings = a : c.encodings = x.getRtpEncodings({
                                                    offerMediaObject: f
                                                }), c.encodings.length > 1 && ("video/vp8" === c.codecs[0].mimeType.toLowerCase() || "video/h264" === c.codecs[0].mimeType.toLowerCase())) {
                                                y = t(c.encodings);
                                                try {
                                                    for (y.s(); !(R = y.n()).done;) R.value.scalabilityMode = "S1T3"
                                                } catch (D) {
                                                    y.e(D)
                                                } finally {
                                                    y.f()
                                                }
                                            }
                                            return this._remoteSdp.send({
                                                offerMediaObject: f,
                                                reuseMid: u.reuseMid,
                                                offerRtpParameters: c,
                                                answerRtpParameters: o,
                                                codecOptions: i,
                                                extmapAllowMixed: !0
                                            }), k = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("send() | calling pc.setRemoteDescription() [answer:%o]", k), e.next = 35, this._pc.setRemoteDescription(k);
                                        case 35:
                                            return this._mapMidTransceiver.set(g, p), e.abrupt("return", {
                                                localId: g,
                                                rtpParameters: c,
                                                rtpSender: p.sender
                                            });
                                        case 37:
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
                        key: "stopSending",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), T.debug("stopSending() [localId:%s]", t), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return r.sender.replaceTrack(null), this._pc.removeTrack(r.sender), this._remoteSdp.closeMediaSection(r.mid), e.next = 10, this._pc.createOffer();
                                        case 10:
                                            return n = e.sent, T.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", n), e.next = 14, this._pc.setLocalDescription(n);
                                        case 14:
                                            return a = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", a), e.next = 18, this._pc.setRemoteDescription(a);
                                        case 18:
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
                        key: "replaceTrack",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r ? T.debug("replaceTrack() [localId:%s, track.id:%s]", t, r.id) : T.debug("replaceTrack() [localId:%s, no track]", t), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return e.next = 7, n.sender.replaceTrack(r);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setMaxSpatialLayer",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), T.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t, r), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return (a = n.sender.getParameters()).encodings.forEach(function(e, t) {
                                                e.active = t <= r
                                            }), e.next = 9, n.sender.setParameters(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setRtpEncodingParameters",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), T.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t, r), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return (a = n.sender.getParameters()).encodings.forEach(function(e, t) {
                                                a.encodings[t] = i(i({}, e), r)
                                            }), e.next = 9, n.sender.setParameters(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getSenderStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 4:
                                            return e.abrupt("return", r.sender.getStats());
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
                        key: "sendDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, s, c, o, u, p, d, l, f, m;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.ordered, n = t.maxPacketLifeTime, a = t.maxRetransmits, i = t.label, s = t.protocol, c = t.priority, this._assertSendDirection(), o = {
                                                    negotiated: !0,
                                                    id: this._nextSendSctpStreamId,
                                                    ordered: r,
                                                    maxPacketLifeTime: n,
                                                    maxRetransmits: a,
                                                    protocol: s,
                                                    priority: c
                                                }, T.debug("sendDataChannel() [options:%o]", o), u = this._pc.createDataChannel(i, o), this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % C.MIS, this._hasDataChannelMediaSection) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 9, this._pc.createOffer();
                                        case 9:
                                            if (p = e.sent, d = b.parse(p.sdp), l = d.media.find(function(e) {
                                                    return "application" === e.type
                                                }), this._transportReady) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 15, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: d
                                            });
                                        case 15:
                                            return T.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", p), e.next = 18, this._pc.setLocalDescription(p);
                                        case 18:
                                            return this._remoteSdp.sendSctpAssociation({
                                                offerMediaObject: l
                                            }), f = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", f), e.next = 23, this._pc.setRemoteDescription(f);
                                        case 23:
                                            this._hasDataChannelMediaSection = !0;
                                        case 24:
                                            return m = {
                                                streamId: o.id,
                                                ordered: o.ordered,
                                                maxPacketLifeTime: o.maxPacketLifeTime,
                                                maxRetransmits: o.maxRetransmits
                                            }, e.abrupt("return", {
                                                dataChannel: u,
                                                sctpStreamParameters: m
                                            });
                                        case 26:
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
                        key: "receive",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, s, c, o, u, p;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.trackId, n = t.kind, a = t.rtpParameters, this._assertRecvDirection(), T.debug("receive() [trackId:%s, kind:%s]", r, n), i = a.mid || String(this._mapMidTransceiver.size), this._remoteSdp.receive({
                                                mid: i,
                                                kind: n,
                                                offerRtpParameters: a,
                                                streamId: a.rtcp.cname,
                                                trackId: r
                                            }), s = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", s), e.next = 9, this._pc.setRemoteDescription(s);
                                        case 9:
                                            return e.next = 11, this._pc.createAnswer();
                                        case 11:
                                            if (c = e.sent, o = b.parse(c.sdp), u = o.media.find(function(e) {
                                                    return String(e.mid) === i
                                                }), w.applyCodecParameters({
                                                    offerRtpParameters: a,
                                                    answerMediaObject: u
                                                }), c = {
                                                    type: "answer",
                                                    sdp: b.write(o)
                                                }, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: o
                                            });
                                        case 19:
                                            return T.debug("receive() | calling pc.setLocalDescription() [answer:%o]", c), e.next = 22, this._pc.setLocalDescription(c);
                                        case 22:
                                            if (p = this._pc.getTransceivers().find(function(e) {
                                                    return e.mid === i
                                                })) {
                                                e.next = 25;
                                                break
                                            }
                                            throw new Error("new RTCRtpTransceiver not found");
                                        case 25:
                                            return this._mapMidTransceiver.set(i, p), e.abrupt("return", {
                                                localId: i,
                                                track: p.receiver.track,
                                                rtpReceiver: p.receiver
                                            });
                                        case 27:
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
                        key: "stopReceiving",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertRecvDirection(), T.debug("stopReceiving() [localId:%s]", t), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return this._remoteSdp.closeMediaSection(r.mid), n = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", n), e.next = 10, this._pc.setRemoteDescription(n);
                                        case 10:
                                            return e.next = 12, this._pc.createAnswer();
                                        case 12:
                                            return a = e.sent, T.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", a), e.next = 16, this._pc.setLocalDescription(a);
                                        case 16:
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
                        key: "getReceiverStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertRecvDirection(), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 4:
                                            return e.abrupt("return", r.receiver.getStats());
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
                        key: "receiveDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, s, c, o, u, p, d, l, f;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.sctpStreamParameters, n = t.label, a = t.protocol, this._assertRecvDirection(), i = r.streamId, s = r.ordered, c = r.maxPacketLifeTime, o = r.maxRetransmits, u = {
                                                    negotiated: !0,
                                                    id: i,
                                                    ordered: s,
                                                    maxPacketLifeTime: c,
                                                    maxRetransmits: o,
                                                    protocol: a
                                                }, T.debug("receiveDataChannel() [options:%o]", u), p = this._pc.createDataChannel(n, u), this._hasDataChannelMediaSection) {
                                                e.next = 23;
                                                break
                                            }
                                            return this._remoteSdp.receiveSctpAssociation(), d = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", d), e.next = 12, this._pc.setRemoteDescription(d);
                                        case 12:
                                            return e.next = 14, this._pc.createAnswer();
                                        case 14:
                                            if (l = e.sent, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return f = b.parse(l.sdp), e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: f
                                            });
                                        case 19:
                                            return T.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", l), e.next = 22, this._pc.setLocalDescription(l);
                                        case 22:
                                            this._hasDataChannelMediaSection = !0;
                                        case 23:
                                            return e.abrupt("return", {
                                                dataChannel: p
                                            });
                                        case 24:
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
                        key: "_setupTransport",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.localDtlsRole, (n = t.localSdpObject) || (n = b.parse(this._pc.localDescription.sdp)), (a = w.extractDtlsParameters({
                                                sdpObject: n
                                            })).role = r, this._remoteSdp.updateDtlsRole("client" === r ? "server" : "client"), e.next = 7, this.safeEmitAsPromise("@connect", {
                                                dtlsParameters: a
                                            });
                                        case 7:
                                            this._transportReady = !0;
                                        case 8:
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
                        key: "_assertSendDirection",
                        value: function() {
                            if ("send" !== this._direction) throw new Error('method can just be called for handlers with "send" direction')
                        }
                    }, {
                        key: "_assertRecvDirection",
                        value: function() {
                            if ("recv" !== this._direction) throw new Error('method can just be called for handlers with "recv" direction')
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "Chrome74"
                        }
                    }], [{
                        key: "createFactory",
                        value: function() {
                            return function() {
                                return new n
                            }
                        }
                    }]), n
                }();
            exports.Chrome74 = O;
        }, {
            "sdp-transform": "tbaU",
            "../Logger": "p5bA",
            "../utils": "FOZT",
            "../ortc": "alA0",
            "./sdp/commonUtils": "FBSL",
            "./sdp/unifiedPlanUtils": "Dujs",
            "./HandlerInterface": "iuhH",
            "./sdp/RemoteSdp": "aH4R",
            "../scalabilityModes": "QdG4"
        }],
        "wNnR": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
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
                var s, c = !0,
                    o = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        o = !0, s = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                }
            }

            function r(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach(function(t) {
                        s(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function s(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function c(e, t, r, n, a, i, s) {
                try {
                    var c = e[i](s),
                        o = c.value
                } catch (u) {
                    return void r(u)
                }
                c.done ? t(o) : Promise.resolve(o).then(n, a)
            }

            function o(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, a) {
                        var i = e.apply(t, r);

                        function s(e) {
                            c(i, n, a, s, o, "next", e)
                        }

                        function o(e) {
                            c(i, n, a, s, o, "throw", e)
                        }
                        s(void 0)
                    })
                }
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t, r) {
                return t && p(e.prototype, t), r && p(e, r), e
            }

            function l(e, t) {
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

            function m(e) {
                var t = v();
                return function() {
                    var r, n = y(e);
                    if (t) {
                        var a = y(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return h(this, r)
                }
            }

            function h(t, r) {
                return !r || "object" !== e(r) && "function" != typeof r ? g(t) : r
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v() {
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
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var b = require("sdp-transform"),
                R = require("../Logger"),
                S = require("../utils"),
                _ = require("../ortc"),
                w = require("./sdp/commonUtils"),
                x = require("./sdp/unifiedPlanUtils"),
                k = require("./HandlerInterface"),
                D = require("./sdp/RemoteSdp"),
                P = require("../scalabilityModes"),
                T = new R.Logger("Chrome70"),
                O = {
                    OS: 1024,
                    MIS: 1024
                },
                C = function(e) {
                    l(n, k.HandlerInterface);
                    var r = m(n);

                    function n() {
                        var e;
                        return u(this, n), (e = r.call(this))._mapMidTransceiver = new Map, e._sendStream = new MediaStream, e._hasDataChannelMediaSection = !1, e._nextSendSctpStreamId = 0, e._transportReady = !1, e
                    }
                    return d(n, [{
                        key: "close",
                        value: function() {
                            if (T.debug("close()"), this._pc) try {
                                this._pc.close()
                            } catch (e) {}
                        }
                    }, {
                        key: "getNativeRtpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                var t, r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return T.debug("getNativeRtpCapabilities()"), t = new RTCPeerConnection({
                                                iceServers: [],
                                                iceTransportPolicy: "all",
                                                bundlePolicy: "max-bundle",
                                                rtcpMuxPolicy: "require",
                                                sdpSemantics: "unified-plan"
                                            }), e.prev = 2, t.addTransceiver("audio"), t.addTransceiver("video"), e.next = 7, t.createOffer();
                                        case 7:
                                            r = e.sent;
                                            try {
                                                t.close()
                                            } catch (i) {}
                                            return n = b.parse(r.sdp), a = w.extractRtpCapabilities({
                                                sdpObject: n
                                            }), e.abrupt("return", a);
                                        case 14:
                                            e.prev = 14, e.t0 = e.catch(2);
                                            try {
                                                t.close()
                                            } catch (s) {}
                                            throw e.t0;
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [2, 14]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getNativeSctpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return T.debug("getNativeSctpCapabilities()"), e.abrupt("return", {
                                                numStreams: O
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "run",
                        value: function(e) {
                            var t = this,
                                r = e.direction,
                                n = e.iceParameters,
                                a = e.iceCandidates,
                                s = e.dtlsParameters,
                                c = e.sctpParameters,
                                o = e.iceServers,
                                u = e.iceTransportPolicy,
                                p = e.additionalSettings,
                                d = e.proprietaryConstraints,
                                l = e.extendedRtpCapabilities;
                            T.debug("run()"), this._direction = r, this._remoteSdp = new D.RemoteSdp({
                                iceParameters: n,
                                iceCandidates: a,
                                dtlsParameters: s,
                                sctpParameters: c
                            }), this._sendingRtpParametersByKind = {
                                audio: _.getSendingRtpParameters("audio", l),
                                video: _.getSendingRtpParameters("video", l)
                            }, this._sendingRemoteRtpParametersByKind = {
                                audio: _.getSendingRemoteRtpParameters("audio", l),
                                video: _.getSendingRemoteRtpParameters("video", l)
                            }, this._pc = new RTCPeerConnection(i({
                                iceServers: o || [],
                                iceTransportPolicy: u || "all",
                                bundlePolicy: "max-bundle",
                                rtcpMuxPolicy: "require",
                                sdpSemantics: "unified-plan"
                            }, p), d), this._pc.addEventListener("iceconnectionstatechange", function() {
                                switch (t._pc.iceConnectionState) {
                                    case "checking":
                                        t.emit("@connectionstatechange", "connecting");
                                        break;
                                    case "connected":
                                    case "completed":
                                        t.emit("@connectionstatechange", "connected");
                                        break;
                                    case "failed":
                                        t.emit("@connectionstatechange", "failed");
                                        break;
                                    case "disconnected":
                                        t.emit("@connectionstatechange", "disconnected");
                                        break;
                                    case "closed":
                                        t.emit("@connectionstatechange", "closed")
                                }
                            })
                        }
                    }, {
                        key: "updateIceServers",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            T.debug("updateIceServers()"), (r = this._pc.getConfiguration()).iceServers = t, this._pc.setConfiguration(r);
                                        case 4:
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
                        key: "restartIce",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T.debug("restartIce()"), this._remoteSdp.updateIceParameters(t), this._transportReady) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if ("send" !== this._direction) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 7, this._pc.createOffer({
                                                iceRestart: !0
                                            });
                                        case 7:
                                            return r = e.sent, T.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", r), e.next = 11, this._pc.setLocalDescription(r);
                                        case 11:
                                            return n = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", n), e.next = 15, this._pc.setRemoteDescription(n);
                                        case 15:
                                            e.next = 27;
                                            break;
                                        case 17:
                                            return a = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", a), e.next = 21, this._pc.setRemoteDescription(a);
                                        case 21:
                                            return e.next = 23, this._pc.createAnswer();
                                        case 23:
                                            return i = e.sent, T.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", i), e.next = 27, this._pc.setLocalDescription(i);
                                        case 27:
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
                        key: "getTransportStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this._pc.getStats());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "send",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(r) {
                                var n, a, i, s, c, o, u, p, d, l, f, m, h, g, v, y, R, k, D, O, C, j;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = r.track, a = r.encodings, i = r.codecOptions, s = r.codec, this._assertSendDirection(), T.debug("send() [kind:%s, track.id:%s]", n.kind, n.id), (c = S.clone(this._sendingRtpParametersByKind[n.kind])).codecs = _.reduceCodecs(c.codecs, s), (o = S.clone(this._sendingRemoteRtpParametersByKind[n.kind])).codecs = _.reduceCodecs(o.codecs, s), u = this._remoteSdp.getNextMediaSectionIdx(), p = this._pc.addTransceiver(n, {
                                                direction: "sendonly",
                                                streams: [this._sendStream]
                                            }), e.next = 11, this._pc.createOffer();
                                        case 11:
                                            if (d = e.sent, l = b.parse(d.sdp), this._transportReady) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.next = 16, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: l
                                            });
                                        case 16:
                                            return a && a.length > 1 && (T.debug("send() | enabling legacy simulcast"), l = b.parse(d.sdp), f = l.media[u.idx], x.addLegacySimulcast({
                                                offerMediaObject: f,
                                                numStreams: a.length
                                            }), d = {
                                                type: "offer",
                                                sdp: b.write(l)
                                            }), m = !1, h = P.parse((a || [{}])[0].scalabilityMode), a && 1 === a.length && h.spatialLayers > 1 && "video/vp9" === c.codecs[0].mimeType.toLowerCase() && (T.debug("send() | enabling legacy simulcast for VP9 SVC"), m = !0, l = b.parse(d.sdp), f = l.media[u.idx], x.addLegacySimulcast({
                                                offerMediaObject: f,
                                                numStreams: h.spatialLayers
                                            }), d = {
                                                type: "offer",
                                                sdp: b.write(l)
                                            }), T.debug("send() | calling pc.setLocalDescription() [offer:%o]", d), e.next = 23, this._pc.setLocalDescription(d);
                                        case 23:
                                            if (!a) {
                                                e.next = 38;
                                                break
                                            }
                                            T.debug("send() | applying given encodings"), g = p.sender.getParameters(), v = 0;
                                        case 27:
                                            if (!(v < (g.encodings || []).length)) {
                                                e.next = 36;
                                                break
                                            }
                                            if (y = g.encodings[v], R = a[v]) {
                                                e.next = 32;
                                                break
                                            }
                                            return e.abrupt("break", 36);
                                        case 32:
                                            g.encodings[v] = Object.assign(y, R);
                                        case 33:
                                            ++v, e.next = 27;
                                            break;
                                        case 36:
                                            return e.next = 38, p.sender.setParameters(g);
                                        case 38:
                                            if (k = p.mid, c.mid = k, l = b.parse(this._pc.localDescription.sdp), f = l.media[u.idx], c.rtcp.cname = w.getCname({
                                                    offerMediaObject: f
                                                }), c.encodings = x.getRtpEncodings({
                                                    offerMediaObject: f
                                                }), a)
                                                for (D = 0; D < c.encodings.length; ++D) a[D] && Object.assign(c.encodings[D], a[D]);
                                            if (m && (c.encodings = [c.encodings[0]]), c.encodings.length > 1 && ("video/vp8" === c.codecs[0].mimeType.toLowerCase() || "video/h264" === c.codecs[0].mimeType.toLowerCase())) {
                                                O = t(c.encodings);
                                                try {
                                                    for (O.s(); !(C = O.n()).done;) C.value.scalabilityMode = "S1T3"
                                                } catch (M) {
                                                    O.e(M)
                                                } finally {
                                                    O.f()
                                                }
                                            }
                                            return this._remoteSdp.send({
                                                offerMediaObject: f,
                                                reuseMid: u.reuseMid,
                                                offerRtpParameters: c,
                                                answerRtpParameters: o,
                                                codecOptions: i
                                            }), j = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("send() | calling pc.setRemoteDescription() [answer:%o]", j), e.next = 52, this._pc.setRemoteDescription(j);
                                        case 52:
                                            return this._mapMidTransceiver.set(k, p), e.abrupt("return", {
                                                localId: k,
                                                rtpParameters: c,
                                                rtpSender: p.sender
                                            });
                                        case 54:
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
                        key: "stopSending",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), T.debug("stopSending() [localId:%s]", t), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return r.sender.replaceTrack(null), this._pc.removeTrack(r.sender), this._remoteSdp.closeMediaSection(r.mid), e.next = 10, this._pc.createOffer();
                                        case 10:
                                            return n = e.sent, T.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", n), e.next = 14, this._pc.setLocalDescription(n);
                                        case 14:
                                            return a = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", a), e.next = 18, this._pc.setRemoteDescription(a);
                                        case 18:
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
                        key: "replaceTrack",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r ? T.debug("replaceTrack() [localId:%s, track.id:%s]", t, r.id) : T.debug("replaceTrack() [localId:%s, no track]", t), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return e.next = 7, n.sender.replaceTrack(r);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setMaxSpatialLayer",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), T.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t, r), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return (a = n.sender.getParameters()).encodings.forEach(function(e, t) {
                                                e.active = t <= r
                                            }), e.next = 9, n.sender.setParameters(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setRtpEncodingParameters",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), T.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t, r), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return (a = n.sender.getParameters()).encodings.forEach(function(e, t) {
                                                a.encodings[t] = i(i({}, e), r)
                                            }), e.next = 9, n.sender.setParameters(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getSenderStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 4:
                                            return e.abrupt("return", r.sender.getStats());
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
                        key: "sendDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, s, c, o, u, p, d, l, f, m;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.ordered, n = t.maxPacketLifeTime, a = t.maxRetransmits, i = t.label, s = t.protocol, c = t.priority, this._assertSendDirection(), o = {
                                                    negotiated: !0,
                                                    id: this._nextSendSctpStreamId,
                                                    ordered: r,
                                                    maxPacketLifeTime: n,
                                                    maxRetransmitTime: n,
                                                    maxRetransmits: a,
                                                    protocol: s,
                                                    priority: c
                                                }, T.debug("sendDataChannel() [options:%o]", o), u = this._pc.createDataChannel(i, o), this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % O.MIS, this._hasDataChannelMediaSection) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 9, this._pc.createOffer();
                                        case 9:
                                            if (p = e.sent, d = b.parse(p.sdp), l = d.media.find(function(e) {
                                                    return "application" === e.type
                                                }), this._transportReady) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 15, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: d
                                            });
                                        case 15:
                                            return T.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", p), e.next = 18, this._pc.setLocalDescription(p);
                                        case 18:
                                            return this._remoteSdp.sendSctpAssociation({
                                                offerMediaObject: l
                                            }), f = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", f), e.next = 23, this._pc.setRemoteDescription(f);
                                        case 23:
                                            this._hasDataChannelMediaSection = !0;
                                        case 24:
                                            return m = {
                                                streamId: o.id,
                                                ordered: o.ordered,
                                                maxPacketLifeTime: o.maxPacketLifeTime,
                                                maxRetransmits: o.maxRetransmits
                                            }, e.abrupt("return", {
                                                dataChannel: u,
                                                sctpStreamParameters: m
                                            });
                                        case 26:
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
                        key: "receive",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, s, c, o, u, p;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.trackId, n = t.kind, a = t.rtpParameters, this._assertRecvDirection(), T.debug("receive() [trackId:%s, kind:%s]", r, n), i = a.mid || String(this._mapMidTransceiver.size), this._remoteSdp.receive({
                                                mid: i,
                                                kind: n,
                                                offerRtpParameters: a,
                                                streamId: a.rtcp.cname,
                                                trackId: r
                                            }), s = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", s), e.next = 9, this._pc.setRemoteDescription(s);
                                        case 9:
                                            return e.next = 11, this._pc.createAnswer();
                                        case 11:
                                            if (c = e.sent, o = b.parse(c.sdp), u = o.media.find(function(e) {
                                                    return String(e.mid) === i
                                                }), w.applyCodecParameters({
                                                    offerRtpParameters: a,
                                                    answerMediaObject: u
                                                }), c = {
                                                    type: "answer",
                                                    sdp: b.write(o)
                                                }, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: o
                                            });
                                        case 19:
                                            return T.debug("receive() | calling pc.setLocalDescription() [answer:%o]", c), e.next = 22, this._pc.setLocalDescription(c);
                                        case 22:
                                            if (p = this._pc.getTransceivers().find(function(e) {
                                                    return e.mid === i
                                                })) {
                                                e.next = 25;
                                                break
                                            }
                                            throw new Error("new RTCRtpTransceiver not found");
                                        case 25:
                                            return this._mapMidTransceiver.set(i, p), e.abrupt("return", {
                                                localId: i,
                                                track: p.receiver.track,
                                                rtpReceiver: p.receiver
                                            });
                                        case 27:
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
                        key: "stopReceiving",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertRecvDirection(), T.debug("stopReceiving() [localId:%s]", t), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return this._remoteSdp.closeMediaSection(r.mid), n = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", n), e.next = 10, this._pc.setRemoteDescription(n);
                                        case 10:
                                            return e.next = 12, this._pc.createAnswer();
                                        case 12:
                                            return a = e.sent, T.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", a), e.next = 16, this._pc.setLocalDescription(a);
                                        case 16:
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
                        key: "getReceiverStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertRecvDirection(), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 4:
                                            return e.abrupt("return", r.receiver.getStats());
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
                        key: "receiveDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, s, c, o, u, p, d, l, f;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.sctpStreamParameters, n = t.label, a = t.protocol, this._assertRecvDirection(), i = r.streamId, s = r.ordered, c = r.maxPacketLifeTime, o = r.maxRetransmits, u = {
                                                    negotiated: !0,
                                                    id: i,
                                                    ordered: s,
                                                    maxPacketLifeTime: c,
                                                    maxRetransmitTime: c,
                                                    maxRetransmits: o,
                                                    protocol: a
                                                }, T.debug("receiveDataChannel() [options:%o]", u), p = this._pc.createDataChannel(n, u), this._hasDataChannelMediaSection) {
                                                e.next = 23;
                                                break
                                            }
                                            return this._remoteSdp.receiveSctpAssociation(), d = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", d), e.next = 12, this._pc.setRemoteDescription(d);
                                        case 12:
                                            return e.next = 14, this._pc.createAnswer();
                                        case 14:
                                            if (l = e.sent, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return f = b.parse(l.sdp), e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: f
                                            });
                                        case 19:
                                            return T.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", l), e.next = 22, this._pc.setLocalDescription(l);
                                        case 22:
                                            this._hasDataChannelMediaSection = !0;
                                        case 23:
                                            return e.abrupt("return", {
                                                dataChannel: p
                                            });
                                        case 24:
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
                        key: "_setupTransport",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.localDtlsRole, (n = t.localSdpObject) || (n = b.parse(this._pc.localDescription.sdp)), (a = w.extractDtlsParameters({
                                                sdpObject: n
                                            })).role = r, this._remoteSdp.updateDtlsRole("client" === r ? "server" : "client"), e.next = 7, this.safeEmitAsPromise("@connect", {
                                                dtlsParameters: a
                                            });
                                        case 7:
                                            this._transportReady = !0;
                                        case 8:
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
                        key: "_assertSendDirection",
                        value: function() {
                            if ("send" !== this._direction) throw new Error('method can just be called for handlers with "send" direction')
                        }
                    }, {
                        key: "_assertRecvDirection",
                        value: function() {
                            if ("recv" !== this._direction) throw new Error('method can just be called for handlers with "recv" direction')
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "Chrome70"
                        }
                    }], [{
                        key: "createFactory",
                        value: function() {
                            return function() {
                                return new n
                            }
                        }
                    }]), n
                }();
            exports.Chrome70 = C;
        }, {
            "sdp-transform": "tbaU",
            "../Logger": "p5bA",
            "../utils": "FOZT",
            "../ortc": "alA0",
            "./sdp/commonUtils": "FBSL",
            "./sdp/unifiedPlanUtils": "Dujs",
            "./HandlerInterface": "iuhH",
            "./sdp/RemoteSdp": "aH4R",
            "../scalabilityModes": "QdG4"
        }],
        "nNFi": [function(require, module, exports) {
            "use strict";

            function r(r, a) {
                return n(r) || e(r, a) || s(r, a) || t()
            }

            function t() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function e(r, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) {
                    var e = [],
                        n = !0,
                        a = !1,
                        s = void 0;
                    try {
                        for (var o, i = r[Symbol.iterator](); !(n = (o = i.next()).done) && (e.push(o.value), !t || e.length !== t); n = !0);
                    } catch (c) {
                        a = !0, s = c
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw s
                        }
                    }
                    return e
                }
            }

            function n(r) {
                if (Array.isArray(r)) return r
            }

            function a(r, t) {
                var e;
                if ("undefined" == typeof Symbol || null == r[Symbol.iterator]) {
                    if (Array.isArray(r) || (e = s(r)) || t && r && "number" == typeof r.length) {
                        e && (r = e);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= r.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: r[n++]
                                }
                            },
                            e: function(r) {
                                throw r
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    c = !1;
                return {
                    s: function() {
                        e = r[Symbol.iterator]()
                    },
                    n: function() {
                        var r = e.next();
                        return i = r.done, r
                    },
                    e: function(r) {
                        c = !0, o = r
                    },
                    f: function() {
                        try {
                            i || null == e.return || e.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function s(r, t) {
                if (r) {
                    if ("string" == typeof r) return o(r, t);
                    var e = Object.prototype.toString.call(r).slice(8, -1);
                    return "Object" === e && r.constructor && (e = r.constructor.name), "Map" === e || "Set" === e ? Array.from(r) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? o(r, t) : void 0
                }
            }

            function o(r, t) {
                (null == t || t > r.length) && (t = r.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
                return n
            }

            function i(t) {
                var e, n, s = t.offerMediaObject,
                    o = t.track,
                    i = new Set,
                    c = a(s.ssrcs || []);
                try {
                    for (c.s(); !(n = c.n()).done;) {
                        var u = n.value;
                        if ("msid" === u.attribute)
                            if (u.value.split(" ")[1] === o.id) {
                                var f = u.id;
                                i.add(f), e || (e = f)
                            }
                    }
                } catch (M) {
                    c.e(M)
                } finally {
                    c.f()
                }
                if (0 === i.size) throw new Error("a=ssrc line with msid information not found [track.id:".concat(o.id, "]"));
                var l, d = new Map,
                    m = a(s.ssrcGroups || []);
                try {
                    for (m.s(); !(l = m.n()).done;) {
                        var v = l.value;
                        if ("FID" === v.semantics) {
                            var y = r(v.ssrcs.split(/\s+/), 2),
                                h = y[0],
                                p = y[1];
                            h = Number(h), p = Number(p), i.has(h) && (i.delete(h), i.delete(p), d.set(h, p))
                        }
                    }
                } catch (M) {
                    m.e(M)
                } finally {
                    m.f()
                }
                var b, w = a(i);
                try {
                    for (w.s(); !(b = w.n()).done;) {
                        var S = b.value;
                        d.set(S, null)
                    }
                } catch (M) {
                    w.e(M)
                } finally {
                    w.f()
                }
                var g, j = [],
                    I = a(d);
                try {
                    for (I.s(); !(g = I.n()).done;) {
                        var A = r(g.value, 2),
                            E = A[0],
                            x = A[1],
                            G = {
                                ssrc: E
                            };
                        x && (G.rtx = {
                            ssrc: x
                        }), j.push(G)
                    }
                } catch (M) {
                    I.e(M)
                } finally {
                    I.f()
                }
                return j
            }

            function c(r) {
                var t, e, n, a = r.offerMediaObject,
                    s = r.track,
                    o = r.numStreams;
                if (o <= 1) throw new TypeError("numStreams must be greater than 1");
                if (!(a.ssrcs || []).find(function(r) {
                        return "msid" === r.attribute && (r.value.split(" ")[1] === s.id && (t = r.id, n = r.value.split(" ")[0], !0))
                    })) throw new Error("a=ssrc line with msid information not found [track.id:".concat(s.id, "]"));
                (a.ssrcGroups || []).some(function(r) {
                    if ("FID" !== r.semantics) return !1;
                    var n = r.ssrcs.split(/\s+/);
                    return Number(n[0]) === t && (e = Number(n[1]), !0)
                });
                var i = a.ssrcs.find(function(r) {
                    return "cname" === r.attribute && r.id === t
                });
                if (!i) throw new Error("a=ssrc line with cname information not found [track.id:".concat(s.id, "]"));
                for (var c = i.value, u = [], f = [], l = 0; l < o; ++l) u.push(t + l), e && f.push(e + l);
                a.ssrcGroups = a.ssrcGroups || [], a.ssrcs = a.ssrcs || [], a.ssrcGroups.push({
                    semantics: "SIM",
                    ssrcs: u.join(" ")
                });
                for (var d = 0; d < u.length; ++d) {
                    var m = u[d];
                    a.ssrcs.push({
                        id: m,
                        attribute: "cname",
                        value: c
                    }), a.ssrcs.push({
                        id: m,
                        attribute: "msid",
                        value: "".concat(n, " ").concat(s.id)
                    })
                }
                for (var v = 0; v < f.length; ++v) {
                    var y = u[v],
                        h = f[v];
                    a.ssrcs.push({
                        id: h,
                        attribute: "cname",
                        value: c
                    }), a.ssrcs.push({
                        id: h,
                        attribute: "msid",
                        value: "".concat(n, " ").concat(s.id)
                    }), a.ssrcGroups.push({
                        semantics: "FID",
                        ssrcs: "".concat(y, " ").concat(h)
                    })
                }
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.getRtpEncodings = i, exports.addLegacySimulcast = c;
        }, {}],
        "gY4Q": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
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
                    o = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        o = !0, c = e
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                }
            }

            function r(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach(function(t) {
                        c(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function c(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function s(e, t, r, n, a, i, c) {
                try {
                    var s = e[i](c),
                        o = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? t(o) : Promise.resolve(o).then(n, a)
            }

            function o(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, a) {
                        var i = e.apply(t, r);

                        function c(e) {
                            s(i, n, a, c, o, "next", e)
                        }

                        function o(e) {
                            s(i, n, a, c, o, "throw", e)
                        }
                        c(void 0)
                    })
                }
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t, r) {
                return t && p(e.prototype, t), r && p(e, r), e
            }

            function l(e, t) {
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

            function h(e) {
                var t = v();
                return function() {
                    var r, n = b(e);
                    if (t) {
                        var a = b(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return m(this, r)
                }
            }

            function m(t, r) {
                return !r || "object" !== e(r) && "function" != typeof r ? g(t) : r
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var R = require("sdp-transform"),
                S = require("../Logger"),
                y = require("../utils"),
                _ = require("../ortc"),
                w = require("./sdp/commonUtils"),
                k = require("./sdp/planBUtils"),
                x = require("./HandlerInterface"),
                D = require("./sdp/RemoteSdp"),
                P = new S.Logger("Chrome67"),
                I = {
                    OS: 1024,
                    MIS: 1024
                },
                O = function(e) {
                    l(n, x.HandlerInterface);
                    var r = h(n);

                    function n() {
                        var e;
                        return u(this, n), (e = r.call(this))._sendStream = new MediaStream, e._mapSendLocalIdRtpSender = new Map, e._nextSendLocalId = 0, e._mapRecvLocalIdInfo = new Map, e._hasDataChannelMediaSection = !1, e._nextSendSctpStreamId = 0, e._transportReady = !1, e
                    }
                    return d(n, [{
                        key: "close",
                        value: function() {
                            if (P.debug("close()"), this._pc) try {
                                this._pc.close()
                            } catch (e) {}
                        }
                    }, {
                        key: "getNativeRtpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                var t, r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return P.debug("getNativeRtpCapabilities()"), t = new RTCPeerConnection({
                                                iceServers: [],
                                                iceTransportPolicy: "all",
                                                bundlePolicy: "max-bundle",
                                                rtcpMuxPolicy: "require",
                                                sdpSemantics: "plan-b"
                                            }), e.prev = 2, e.next = 5, t.createOffer({
                                                offerToReceiveAudio: !0,
                                                offerToReceiveVideo: !0
                                            });
                                        case 5:
                                            r = e.sent;
                                            try {
                                                t.close()
                                            } catch (i) {}
                                            return n = R.parse(r.sdp), a = w.extractRtpCapabilities({
                                                sdpObject: n
                                            }), e.abrupt("return", a);
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(2);
                                            try {
                                                t.close()
                                            } catch (c) {}
                                            throw e.t0;
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [2, 12]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getNativeSctpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return P.debug("getNativeSctpCapabilities()"), e.abrupt("return", {
                                                numStreams: I
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "run",
                        value: function(e) {
                            var t = this,
                                r = e.direction,
                                n = e.iceParameters,
                                a = e.iceCandidates,
                                c = e.dtlsParameters,
                                s = e.sctpParameters,
                                o = e.iceServers,
                                u = e.iceTransportPolicy,
                                p = e.additionalSettings,
                                d = e.proprietaryConstraints,
                                l = e.extendedRtpCapabilities;
                            P.debug("run()"), this._direction = r, this._remoteSdp = new D.RemoteSdp({
                                iceParameters: n,
                                iceCandidates: a,
                                dtlsParameters: c,
                                sctpParameters: s,
                                planB: !0
                            }), this._sendingRtpParametersByKind = {
                                audio: _.getSendingRtpParameters("audio", l),
                                video: _.getSendingRtpParameters("video", l)
                            }, this._sendingRemoteRtpParametersByKind = {
                                audio: _.getSendingRemoteRtpParameters("audio", l),
                                video: _.getSendingRemoteRtpParameters("video", l)
                            }, this._pc = new RTCPeerConnection(i({
                                iceServers: o || [],
                                iceTransportPolicy: u || "all",
                                bundlePolicy: "max-bundle",
                                rtcpMuxPolicy: "require",
                                sdpSemantics: "plan-b"
                            }, p), d), this._pc.addEventListener("iceconnectionstatechange", function() {
                                switch (t._pc.iceConnectionState) {
                                    case "checking":
                                        t.emit("@connectionstatechange", "connecting");
                                        break;
                                    case "connected":
                                    case "completed":
                                        t.emit("@connectionstatechange", "connected");
                                        break;
                                    case "failed":
                                        t.emit("@connectionstatechange", "failed");
                                        break;
                                    case "disconnected":
                                        t.emit("@connectionstatechange", "disconnected");
                                        break;
                                    case "closed":
                                        t.emit("@connectionstatechange", "closed")
                                }
                            })
                        }
                    }, {
                        key: "updateIceServers",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            P.debug("updateIceServers()"), (r = this._pc.getConfiguration()).iceServers = t, this._pc.setConfiguration(r);
                                        case 4:
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
                        key: "restartIce",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (P.debug("restartIce()"), this._remoteSdp.updateIceParameters(t), this._transportReady) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if ("send" !== this._direction) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 7, this._pc.createOffer({
                                                iceRestart: !0
                                            });
                                        case 7:
                                            return r = e.sent, P.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", r), e.next = 11, this._pc.setLocalDescription(r);
                                        case 11:
                                            return n = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", n), e.next = 15, this._pc.setRemoteDescription(n);
                                        case 15:
                                            e.next = 27;
                                            break;
                                        case 17:
                                            return a = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", a), e.next = 21, this._pc.setRemoteDescription(a);
                                        case 21:
                                            return e.next = 23, this._pc.createAnswer();
                                        case 23:
                                            return i = e.sent, P.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", i), e.next = 27, this._pc.setLocalDescription(i);
                                        case 27:
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
                        key: "getTransportStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this._pc.getStats());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "send",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(r) {
                                var n, a, i, c, s, o, u, p, d, l, f, h, m, g, v;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = r.track, a = r.encodings, i = r.codecOptions, c = r.codec, this._assertSendDirection(), P.debug("send() [kind:%s, track.id:%s]", n.kind, n.id), c && P.warn("send() | codec selection is not available in %s handler", this.name), this._sendStream.addTrack(n), this._pc.addTrack(n, this._sendStream), e.next = 8, this._pc.createOffer();
                                        case 8:
                                            if (s = e.sent, o = R.parse(s.sdp), (p = y.clone(this._sendingRtpParametersByKind[n.kind])).codecs = _.reduceCodecs(p.codecs), (d = y.clone(this._sendingRemoteRtpParametersByKind[n.kind])).codecs = _.reduceCodecs(d.codecs), this._transportReady) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 17, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: o
                                            });
                                        case 17:
                                            return "video" === n.kind && a && a.length > 1 && (P.debug("send() | enabling simulcast"), o = R.parse(s.sdp), u = o.media.find(function(e) {
                                                return "video" === e.type
                                            }), k.addLegacySimulcast({
                                                offerMediaObject: u,
                                                track: n,
                                                numStreams: a.length
                                            }), s = {
                                                type: "offer",
                                                sdp: R.write(o)
                                            }), P.debug("send() | calling pc.setLocalDescription() [offer:%o]", s), e.next = 21, this._pc.setLocalDescription(s);
                                        case 21:
                                            if (o = R.parse(this._pc.localDescription.sdp), u = o.media.find(function(e) {
                                                    return e.type === n.kind
                                                }), p.rtcp.cname = w.getCname({
                                                    offerMediaObject: u
                                                }), p.encodings = k.getRtpEncodings({
                                                    offerMediaObject: u,
                                                    track: n
                                                }), a)
                                                for (l = 0; l < p.encodings.length; ++l) a[l] && Object.assign(p.encodings[l], a[l]);
                                            if (p.encodings.length > 1 && "video/vp8" === p.codecs[0].mimeType.toLowerCase()) {
                                                f = t(p.encodings);
                                                try {
                                                    for (f.s(); !(h = f.n()).done;) h.value.scalabilityMode = "S1T3"
                                                } catch (b) {
                                                    f.e(b)
                                                } finally {
                                                    f.f()
                                                }
                                            }
                                            return this._remoteSdp.send({
                                                offerMediaObject: u,
                                                offerRtpParameters: p,
                                                answerRtpParameters: d,
                                                codecOptions: i
                                            }), m = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("send() | calling pc.setRemoteDescription() [answer:%o]", m), e.next = 32, this._pc.setRemoteDescription(m);
                                        case 32:
                                            return g = String(this._nextSendLocalId), this._nextSendLocalId++, v = this._pc.getSenders().find(function(e) {
                                                return e.track === n
                                            }), this._mapSendLocalIdRtpSender.set(g, v), e.abrupt("return", {
                                                localId: g,
                                                rtpParameters: p,
                                                rtpSender: v
                                            });
                                        case 37:
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
                        key: "stopSending",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), P.debug("stopSending() [localId:%s]", t), r = this._mapSendLocalIdRtpSender.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpSender not found");
                                        case 5:
                                            return this._pc.removeTrack(r), r.track && this._sendStream.removeTrack(r.track), this._mapSendLocalIdRtpSender.delete(t), e.next = 10, this._pc.createOffer();
                                        case 10:
                                            return n = e.sent, P.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", n), e.prev = 12, e.next = 15, this._pc.setLocalDescription(n);
                                        case 15:
                                            e.next = 23;
                                            break;
                                        case 17:
                                            if (e.prev = 17, e.t0 = e.catch(12), 0 !== this._sendStream.getTracks().length) {
                                                e.next = 22;
                                                break
                                            }
                                            return P.warn("stopSending() | ignoring expected error due no sending tracks: %s", e.t0.toString()), e.abrupt("return");
                                        case 22:
                                            throw e.t0;
                                        case 23:
                                            if ("stable" !== this._pc.signalingState) {
                                                e.next = 25;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 25:
                                            return a = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", a), e.next = 29, this._pc.setRemoteDescription(a);
                                        case 29:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [12, 17]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "replaceTrack",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r ? P.debug("replaceTrack() [localId:%s, track.id:%s]", t, r.id) : P.debug("replaceTrack() [localId:%s, no track]", t), n = this._mapSendLocalIdRtpSender.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpSender not found");
                                        case 5:
                                            return a = n.track, e.next = 8, n.replaceTrack(r);
                                        case 8:
                                            a && this._sendStream.removeTrack(a), r && this._sendStream.addTrack(r);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setMaxSpatialLayer",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), P.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t, r), n = this._mapSendLocalIdRtpSender.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpSender not found");
                                        case 5:
                                            return (a = n.getParameters()).encodings.forEach(function(e, t) {
                                                e.active = t <= r
                                            }), e.next = 9, n.setParameters(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setRtpEncodingParameters",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), P.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t, r), n = this._mapSendLocalIdRtpSender.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpSender not found");
                                        case 5:
                                            return (a = n.getParameters()).encodings.forEach(function(e, t) {
                                                a.encodings[t] = i(i({}, e), r)
                                            }), e.next = 9, n.setParameters(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getSenderStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r = this._mapSendLocalIdRtpSender.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpSender not found");
                                        case 4:
                                            return e.abrupt("return", r.getStats());
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
                        key: "sendDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, s, o, u, p, d, l, f, h;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.ordered, n = t.maxPacketLifeTime, a = t.maxRetransmits, i = t.label, c = t.protocol, s = t.priority, this._assertSendDirection(), o = {
                                                    negotiated: !0,
                                                    id: this._nextSendSctpStreamId,
                                                    ordered: r,
                                                    maxPacketLifeTime: n,
                                                    maxRetransmitTime: n,
                                                    maxRetransmits: a,
                                                    protocol: c,
                                                    priority: s
                                                }, P.debug("sendDataChannel() [options:%o]", o), u = this._pc.createDataChannel(i, o), this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % I.MIS, this._hasDataChannelMediaSection) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 9, this._pc.createOffer();
                                        case 9:
                                            if (p = e.sent, d = R.parse(p.sdp), l = d.media.find(function(e) {
                                                    return "application" === e.type
                                                }), this._transportReady) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 15, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: d
                                            });
                                        case 15:
                                            return P.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", p), e.next = 18, this._pc.setLocalDescription(p);
                                        case 18:
                                            return this._remoteSdp.sendSctpAssociation({
                                                offerMediaObject: l
                                            }), f = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", f), e.next = 23, this._pc.setRemoteDescription(f);
                                        case 23:
                                            this._hasDataChannelMediaSection = !0;
                                        case 24:
                                            return h = {
                                                streamId: o.id,
                                                ordered: o.ordered,
                                                maxPacketLifeTime: o.maxPacketLifeTime,
                                                maxRetransmits: o.maxRetransmits
                                            }, e.abrupt("return", {
                                                dataChannel: u,
                                                sctpStreamParameters: h
                                            });
                                        case 26:
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
                        key: "receive",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, s, o, u, p, d;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.trackId, n = t.kind, a = t.rtpParameters, this._assertRecvDirection(), P.debug("receive() [trackId:%s, kind:%s]", r, n), i = r, c = n, this._remoteSdp.receive({
                                                mid: c,
                                                kind: n,
                                                offerRtpParameters: a,
                                                streamId: a.rtcp.cname,
                                                trackId: r
                                            }), s = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", s), e.next = 10, this._pc.setRemoteDescription(s);
                                        case 10:
                                            return e.next = 12, this._pc.createAnswer();
                                        case 12:
                                            if (o = e.sent, u = R.parse(o.sdp), p = u.media.find(function(e) {
                                                    return String(e.mid) === c
                                                }), w.applyCodecParameters({
                                                    offerRtpParameters: a,
                                                    answerMediaObject: p
                                                }), o = {
                                                    type: "answer",
                                                    sdp: R.write(u)
                                                }, this._transportReady) {
                                                e.next = 20;
                                                break
                                            }
                                            return e.next = 20, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: u
                                            });
                                        case 20:
                                            return P.debug("receive() | calling pc.setLocalDescription() [answer:%o]", o), e.next = 23, this._pc.setLocalDescription(o);
                                        case 23:
                                            if (d = this._pc.getReceivers().find(function(e) {
                                                    return e.track && e.track.id === i
                                                })) {
                                                e.next = 26;
                                                break
                                            }
                                            throw new Error("new RTCRtpReceiver not");
                                        case 26:
                                            return this._mapRecvLocalIdInfo.set(i, {
                                                mid: c,
                                                rtpParameters: a,
                                                rtpReceiver: d
                                            }), e.abrupt("return", {
                                                localId: i,
                                                track: d.track,
                                                rtpReceiver: d
                                            });
                                        case 28:
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
                        key: "stopReceiving",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this._assertRecvDirection(), P.debug("stopReceiving() [localId:%s]", t), r = this._mapRecvLocalIdInfo.get(t) || {}, n = r.mid, a = r.rtpParameters, this._mapRecvLocalIdInfo.delete(t), this._remoteSdp.planBStopReceiving({
                                                mid: n,
                                                offerRtpParameters: a
                                            }), i = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", i), e.next = 9, this._pc.setRemoteDescription(i);
                                        case 9:
                                            return e.next = 11, this._pc.createAnswer();
                                        case 11:
                                            return c = e.sent, P.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", c), e.next = 15, this._pc.setLocalDescription(c);
                                        case 15:
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
                        key: "getReceiverStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertRecvDirection(), r = this._mapRecvLocalIdInfo.get(t) || {}, n = r.rtpReceiver) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpReceiver not found");
                                        case 4:
                                            return e.abrupt("return", n.getStats());
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
                        key: "receiveDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, s, o, u, p, d, l, f;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.sctpStreamParameters, n = t.label, a = t.protocol, this._assertRecvDirection(), i = r.streamId, c = r.ordered, s = r.maxPacketLifeTime, o = r.maxRetransmits, u = {
                                                    negotiated: !0,
                                                    id: i,
                                                    ordered: c,
                                                    maxPacketLifeTime: s,
                                                    maxRetransmitTime: s,
                                                    maxRetransmits: o,
                                                    protocol: a
                                                }, P.debug("receiveDataChannel() [options:%o]", u), p = this._pc.createDataChannel(n, u), this._hasDataChannelMediaSection) {
                                                e.next = 23;
                                                break
                                            }
                                            return this._remoteSdp.receiveSctpAssociation({
                                                oldDataChannelSpec: !0
                                            }), d = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", d), e.next = 12, this._pc.setRemoteDescription(d);
                                        case 12:
                                            return e.next = 14, this._pc.createAnswer();
                                        case 14:
                                            if (l = e.sent, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return f = R.parse(l.sdp), e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: f
                                            });
                                        case 19:
                                            return P.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", l), e.next = 22, this._pc.setLocalDescription(l);
                                        case 22:
                                            this._hasDataChannelMediaSection = !0;
                                        case 23:
                                            return e.abrupt("return", {
                                                dataChannel: p
                                            });
                                        case 24:
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
                        key: "_setupTransport",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.localDtlsRole, (n = t.localSdpObject) || (n = R.parse(this._pc.localDescription.sdp)), (a = w.extractDtlsParameters({
                                                sdpObject: n
                                            })).role = r, this._remoteSdp.updateDtlsRole("client" === r ? "server" : "client"), e.next = 7, this.safeEmitAsPromise("@connect", {
                                                dtlsParameters: a
                                            });
                                        case 7:
                                            this._transportReady = !0;
                                        case 8:
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
                        key: "_assertSendDirection",
                        value: function() {
                            if ("send" !== this._direction) throw new Error('method can just be called for handlers with "send" direction')
                        }
                    }, {
                        key: "_assertRecvDirection",
                        value: function() {
                            if ("recv" !== this._direction) throw new Error('method can just be called for handlers with "recv" direction')
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "Chrome67"
                        }
                    }], [{
                        key: "createFactory",
                        value: function() {
                            return function() {
                                return new n
                            }
                        }
                    }]), n
                }();
            exports.Chrome67 = O;
        }, {
            "sdp-transform": "tbaU",
            "../Logger": "p5bA",
            "../utils": "FOZT",
            "../ortc": "alA0",
            "./sdp/commonUtils": "FBSL",
            "./sdp/planBUtils": "nNFi",
            "./HandlerInterface": "iuhH",
            "./sdp/RemoteSdp": "aH4R"
        }],
        "PqYG": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
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
                var c, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        s = !0, c = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw c
                        }
                    }
                }
            }

            function r(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach(function(t) {
                        c(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function c(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function o(e, t, r, n, a, i, c) {
                try {
                    var o = e[i](c),
                        s = o.value
                } catch (u) {
                    return void r(u)
                }
                o.done ? t(s) : Promise.resolve(s).then(n, a)
            }

            function s(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, a) {
                        var i = e.apply(t, r);

                        function c(e) {
                            o(i, n, a, c, s, "next", e)
                        }

                        function s(e) {
                            o(i, n, a, c, s, "throw", e)
                        }
                        c(void 0)
                    })
                }
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t, r) {
                return t && p(e.prototype, t), r && p(e, r), e
            }

            function l(e, t) {
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

            function m(e) {
                var t = v();
                return function() {
                    var r, n = y(e);
                    if (t) {
                        var a = y(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return h(this, r)
                }
            }

            function h(t, r) {
                return !r || "object" !== e(r) && "function" != typeof r ? g(t) : r
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v() {
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
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var b = require("sdp-transform"),
                S = require("../Logger"),
                R = require("../errors"),
                _ = require("../utils"),
                w = require("../ortc"),
                x = require("./sdp/commonUtils"),
                k = require("./sdp/planBUtils"),
                D = require("./HandlerInterface"),
                P = require("./sdp/RemoteSdp"),
                O = new S.Logger("Chrome55"),
                I = {
                    OS: 1024,
                    MIS: 1024
                },
                C = function(e) {
                    l(n, D.HandlerInterface);
                    var r = m(n);

                    function n() {
                        var e;
                        return u(this, n), (e = r.call(this))._sendStream = new MediaStream, e._mapSendLocalIdTrack = new Map, e._nextSendLocalId = 0, e._mapRecvLocalIdInfo = new Map, e._hasDataChannelMediaSection = !1, e._nextSendSctpStreamId = 0, e._transportReady = !1, e
                    }
                    return d(n, [{
                        key: "close",
                        value: function() {
                            if (O.debug("close()"), this._pc) try {
                                this._pc.close()
                            } catch (e) {}
                        }
                    }, {
                        key: "getNativeRtpCapabilities",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e() {
                                var t, r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return O.debug("getNativeRtpCapabilities()"), t = new RTCPeerConnection({
                                                iceServers: [],
                                                iceTransportPolicy: "all",
                                                bundlePolicy: "max-bundle",
                                                rtcpMuxPolicy: "require",
                                                sdpSemantics: "plan-b"
                                            }), e.prev = 2, e.next = 5, t.createOffer({
                                                offerToReceiveAudio: !0,
                                                offerToReceiveVideo: !0
                                            });
                                        case 5:
                                            r = e.sent;
                                            try {
                                                t.close()
                                            } catch (i) {}
                                            return n = b.parse(r.sdp), a = x.extractRtpCapabilities({
                                                sdpObject: n
                                            }), e.abrupt("return", a);
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(2);
                                            try {
                                                t.close()
                                            } catch (c) {}
                                            throw e.t0;
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [2, 12]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getNativeSctpCapabilities",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return O.debug("getNativeSctpCapabilities()"), e.abrupt("return", {
                                                numStreams: I
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "run",
                        value: function(e) {
                            var t = this,
                                r = e.direction,
                                n = e.iceParameters,
                                a = e.iceCandidates,
                                c = e.dtlsParameters,
                                o = e.sctpParameters,
                                s = e.iceServers,
                                u = e.iceTransportPolicy,
                                p = e.additionalSettings,
                                d = e.proprietaryConstraints,
                                l = e.extendedRtpCapabilities;
                            O.debug("run()"), this._direction = r, this._remoteSdp = new P.RemoteSdp({
                                iceParameters: n,
                                iceCandidates: a,
                                dtlsParameters: c,
                                sctpParameters: o,
                                planB: !0
                            }), this._sendingRtpParametersByKind = {
                                audio: w.getSendingRtpParameters("audio", l),
                                video: w.getSendingRtpParameters("video", l)
                            }, this._sendingRemoteRtpParametersByKind = {
                                audio: w.getSendingRemoteRtpParameters("audio", l),
                                video: w.getSendingRemoteRtpParameters("video", l)
                            }, this._pc = new RTCPeerConnection(i({
                                iceServers: s || [],
                                iceTransportPolicy: u || "all",
                                bundlePolicy: "max-bundle",
                                rtcpMuxPolicy: "require",
                                sdpSemantics: "plan-b"
                            }, p), d), this._pc.addEventListener("iceconnectionstatechange", function() {
                                switch (t._pc.iceConnectionState) {
                                    case "checking":
                                        t.emit("@connectionstatechange", "connecting");
                                        break;
                                    case "connected":
                                    case "completed":
                                        t.emit("@connectionstatechange", "connected");
                                        break;
                                    case "failed":
                                        t.emit("@connectionstatechange", "failed");
                                        break;
                                    case "disconnected":
                                        t.emit("@connectionstatechange", "disconnected");
                                        break;
                                    case "closed":
                                        t.emit("@connectionstatechange", "closed")
                                }
                            })
                        }
                    }, {
                        key: "updateIceServers",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            O.debug("updateIceServers()"), (r = this._pc.getConfiguration()).iceServers = t, this._pc.setConfiguration(r);
                                        case 4:
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
                        key: "restartIce",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (O.debug("restartIce()"), this._remoteSdp.updateIceParameters(t), this._transportReady) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if ("send" !== this._direction) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 7, this._pc.createOffer({
                                                iceRestart: !0
                                            });
                                        case 7:
                                            return r = e.sent, O.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", r), e.next = 11, this._pc.setLocalDescription(r);
                                        case 11:
                                            return n = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", n), e.next = 15, this._pc.setRemoteDescription(n);
                                        case 15:
                                            e.next = 27;
                                            break;
                                        case 17:
                                            return a = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", a), e.next = 21, this._pc.setRemoteDescription(a);
                                        case 21:
                                            return e.next = 23, this._pc.createAnswer();
                                        case 23:
                                            return i = e.sent, O.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", i), e.next = 27, this._pc.setLocalDescription(i);
                                        case 27:
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
                        key: "getTransportStats",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this._pc.getStats());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "send",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(r) {
                                var n, a, i, c, o, s, u, p, d, l, f, m, h, g;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = r.track, a = r.encodings, i = r.codecOptions, c = r.codec, this._assertSendDirection(), O.debug("send() [kind:%s, track.id:%s]", n.kind, n.id), c && O.warn("send() | codec selection is not available in %s handler", this.name), this._sendStream.addTrack(n), this._pc.addStream(this._sendStream), e.next = 8, this._pc.createOffer();
                                        case 8:
                                            if (o = e.sent, s = b.parse(o.sdp), (p = _.clone(this._sendingRtpParametersByKind[n.kind])).codecs = w.reduceCodecs(p.codecs), (d = _.clone(this._sendingRemoteRtpParametersByKind[n.kind])).codecs = w.reduceCodecs(d.codecs), this._transportReady) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 17, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: s
                                            });
                                        case 17:
                                            return "video" === n.kind && a && a.length > 1 && (O.debug("send() | enabling simulcast"), s = b.parse(o.sdp), u = s.media.find(function(e) {
                                                return "video" === e.type
                                            }), k.addLegacySimulcast({
                                                offerMediaObject: u,
                                                track: n,
                                                numStreams: a.length
                                            }), o = {
                                                type: "offer",
                                                sdp: b.write(s)
                                            }), O.debug("send() | calling pc.setLocalDescription() [offer:%o]", o), e.next = 21, this._pc.setLocalDescription(o);
                                        case 21:
                                            if (s = b.parse(this._pc.localDescription.sdp), u = s.media.find(function(e) {
                                                    return e.type === n.kind
                                                }), p.rtcp.cname = x.getCname({
                                                    offerMediaObject: u
                                                }), p.encodings = k.getRtpEncodings({
                                                    offerMediaObject: u,
                                                    track: n
                                                }), a)
                                                for (l = 0; l < p.encodings.length; ++l) a[l] && Object.assign(p.encodings[l], a[l]);
                                            if (p.encodings.length > 1 && "video/vp8" === p.codecs[0].mimeType.toLowerCase()) {
                                                f = t(p.encodings);
                                                try {
                                                    for (f.s(); !(m = f.n()).done;) m.value.scalabilityMode = "S1T3"
                                                } catch (v) {
                                                    f.e(v)
                                                } finally {
                                                    f.f()
                                                }
                                            }
                                            return this._remoteSdp.send({
                                                offerMediaObject: u,
                                                offerRtpParameters: p,
                                                answerRtpParameters: d,
                                                codecOptions: i
                                            }), h = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("send() | calling pc.setRemoteDescription() [answer:%o]", h), e.next = 32, this._pc.setRemoteDescription(h);
                                        case 32:
                                            return g = String(this._nextSendLocalId), this._nextSendLocalId++, this._mapSendLocalIdTrack.set(g, n), e.abrupt("return", {
                                                localId: g,
                                                rtpParameters: p
                                            });
                                        case 36:
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
                        key: "stopSending",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), O.debug("stopSending() [localId:%s]", t), r = this._mapSendLocalIdTrack.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("track not found");
                                        case 5:
                                            return this._mapSendLocalIdTrack.delete(t), this._sendStream.removeTrack(r), this._pc.addStream(this._sendStream), e.next = 10, this._pc.createOffer();
                                        case 10:
                                            return n = e.sent, O.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", n), e.prev = 12, e.next = 15, this._pc.setLocalDescription(n);
                                        case 15:
                                            e.next = 23;
                                            break;
                                        case 17:
                                            if (e.prev = 17, e.t0 = e.catch(12), 0 !== this._sendStream.getTracks().length) {
                                                e.next = 22;
                                                break
                                            }
                                            return O.warn("stopSending() | ignoring expected error due no sending tracks: %s", e.t0.toString()), e.abrupt("return");
                                        case 22:
                                            throw e.t0;
                                        case 23:
                                            if ("stable" !== this._pc.signalingState) {
                                                e.next = 25;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 25:
                                            return a = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", a), e.next = 29, this._pc.setRemoteDescription(a);
                                        case 29:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [12, 17]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "replaceTrack",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t, r) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not implemented");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setMaxSpatialLayer",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t, r) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError(" not implemented");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setRtpEncodingParameters",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t, r) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not supported");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getSenderStats",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not implemented");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "sendDataChannel",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, o, s, u, p, d, l, f, m;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.ordered, n = t.maxPacketLifeTime, a = t.maxRetransmits, i = t.label, c = t.protocol, o = t.priority, this._assertSendDirection(), s = {
                                                    negotiated: !0,
                                                    id: this._nextSendSctpStreamId,
                                                    ordered: r,
                                                    maxPacketLifeTime: n,
                                                    maxRetransmitTime: n,
                                                    maxRetransmits: a,
                                                    protocol: c,
                                                    priority: o
                                                }, O.debug("sendDataChannel() [options:%o]", s), u = this._pc.createDataChannel(i, s), this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % I.MIS, this._hasDataChannelMediaSection) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 9, this._pc.createOffer();
                                        case 9:
                                            if (p = e.sent, d = b.parse(p.sdp), l = d.media.find(function(e) {
                                                    return "application" === e.type
                                                }), this._transportReady) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 15, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: d
                                            });
                                        case 15:
                                            return O.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", p), e.next = 18, this._pc.setLocalDescription(p);
                                        case 18:
                                            return this._remoteSdp.sendSctpAssociation({
                                                offerMediaObject: l
                                            }), f = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", f), e.next = 23, this._pc.setRemoteDescription(f);
                                        case 23:
                                            this._hasDataChannelMediaSection = !0;
                                        case 24:
                                            return m = {
                                                streamId: s.id,
                                                ordered: s.ordered,
                                                maxPacketLifeTime: s.maxPacketLifeTime,
                                                maxRetransmits: s.maxRetransmits
                                            }, e.abrupt("return", {
                                                dataChannel: u,
                                                sctpStreamParameters: m
                                            });
                                        case 26:
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
                        key: "receive",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, o, s, u, p, d, l, f;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.trackId, n = t.kind, a = t.rtpParameters, this._assertRecvDirection(), O.debug("receive() [trackId:%s, kind:%s]", r, n), i = r, c = n, o = a.rtcp.cname, this._remoteSdp.receive({
                                                mid: c,
                                                kind: n,
                                                offerRtpParameters: a,
                                                streamId: o,
                                                trackId: r
                                            }), s = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", s), e.next = 11, this._pc.setRemoteDescription(s);
                                        case 11:
                                            return e.next = 13, this._pc.createAnswer();
                                        case 13:
                                            if (u = e.sent, p = b.parse(u.sdp), d = p.media.find(function(e) {
                                                    return String(e.mid) === c
                                                }), x.applyCodecParameters({
                                                    offerRtpParameters: a,
                                                    answerMediaObject: d
                                                }), u = {
                                                    type: "answer",
                                                    sdp: b.write(p)
                                                }, this._transportReady) {
                                                e.next = 21;
                                                break
                                            }
                                            return e.next = 21, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: p
                                            });
                                        case 21:
                                            return O.debug("receive() | calling pc.setLocalDescription() [answer:%o]", u), e.next = 24, this._pc.setLocalDescription(u);
                                        case 24:
                                            if (l = this._pc.getRemoteStreams().find(function(e) {
                                                    return e.id === o
                                                }), f = l.getTrackById(i)) {
                                                e.next = 28;
                                                break
                                            }
                                            throw new Error("remote track not found");
                                        case 28:
                                            return this._mapRecvLocalIdInfo.set(i, {
                                                mid: c,
                                                rtpParameters: a
                                            }), e.abrupt("return", {
                                                localId: i,
                                                track: f
                                            });
                                        case 30:
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
                        key: "stopReceiving",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this._assertRecvDirection(), O.debug("stopReceiving() [localId:%s]", t), r = this._mapRecvLocalIdInfo.get(t) || {}, n = r.mid, a = r.rtpParameters, this._mapRecvLocalIdInfo.delete(t), this._remoteSdp.planBStopReceiving({
                                                mid: n,
                                                offerRtpParameters: a
                                            }), i = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", i), e.next = 9, this._pc.setRemoteDescription(i);
                                        case 9:
                                            return e.next = 11, this._pc.createAnswer();
                                        case 11:
                                            return c = e.sent, O.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", c), e.next = 15, this._pc.setLocalDescription(c);
                                        case 15:
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
                        key: "getReceiverStats",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not implemented");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "receiveDataChannel",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, o, s, u, p, d, l, f;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.sctpStreamParameters, n = t.label, a = t.protocol, this._assertRecvDirection(), i = r.streamId, c = r.ordered, o = r.maxPacketLifeTime, s = r.maxRetransmits, u = {
                                                    negotiated: !0,
                                                    id: i,
                                                    ordered: c,
                                                    maxPacketLifeTime: o,
                                                    maxRetransmitTime: o,
                                                    maxRetransmits: s,
                                                    protocol: a
                                                }, O.debug("receiveDataChannel() [options:%o]", u), p = this._pc.createDataChannel(n, u), this._hasDataChannelMediaSection) {
                                                e.next = 23;
                                                break
                                            }
                                            return this._remoteSdp.receiveSctpAssociation({
                                                oldDataChannelSpec: !0
                                            }), d = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", d), e.next = 12, this._pc.setRemoteDescription(d);
                                        case 12:
                                            return e.next = 14, this._pc.createAnswer();
                                        case 14:
                                            if (l = e.sent, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return f = b.parse(l.sdp), e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: f
                                            });
                                        case 19:
                                            return O.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", l), e.next = 22, this._pc.setLocalDescription(l);
                                        case 22:
                                            this._hasDataChannelMediaSection = !0;
                                        case 23:
                                            return e.abrupt("return", {
                                                dataChannel: p
                                            });
                                        case 24:
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
                        key: "_setupTransport",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.localDtlsRole, (n = t.localSdpObject) || (n = b.parse(this._pc.localDescription.sdp)), (a = x.extractDtlsParameters({
                                                sdpObject: n
                                            })).role = r, this._remoteSdp.updateDtlsRole("client" === r ? "server" : "client"), e.next = 7, this.safeEmitAsPromise("@connect", {
                                                dtlsParameters: a
                                            });
                                        case 7:
                                            this._transportReady = !0;
                                        case 8:
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
                        key: "_assertSendDirection",
                        value: function() {
                            if ("send" !== this._direction) throw new Error('method can just be called for handlers with "send" direction')
                        }
                    }, {
                        key: "_assertRecvDirection",
                        value: function() {
                            if ("recv" !== this._direction) throw new Error('method can just be called for handlers with "recv" direction')
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "Chrome55"
                        }
                    }], [{
                        key: "createFactory",
                        value: function() {
                            return function() {
                                return new n
                            }
                        }
                    }]), n
                }();
            exports.Chrome55 = C;
        }, {
            "sdp-transform": "tbaU",
            "../Logger": "p5bA",
            "../errors": "p8GN",
            "../utils": "FOZT",
            "../ortc": "alA0",
            "./sdp/commonUtils": "FBSL",
            "./sdp/planBUtils": "nNFi",
            "./HandlerInterface": "iuhH",
            "./sdp/RemoteSdp": "aH4R"
        }],
        "sZJw": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
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
                    o = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        o = !0, c = e
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                }
            }

            function r(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach(function(t) {
                        c(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function c(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function s(e, t, r, n, a, i, c) {
                try {
                    var s = e[i](c),
                        o = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? t(o) : Promise.resolve(o).then(n, a)
            }

            function o(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, a) {
                        var i = e.apply(t, r);

                        function c(e) {
                            s(i, n, a, c, o, "next", e)
                        }

                        function o(e) {
                            s(i, n, a, c, o, "throw", e)
                        }
                        c(void 0)
                    })
                }
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t, r) {
                return t && p(e.prototype, t), r && p(e, r), e
            }

            function l(e, t) {
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

            function m(e) {
                var t = v();
                return function() {
                    var r, n = y(e);
                    if (t) {
                        var a = y(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return h(this, r)
                }
            }

            function h(t, r) {
                return !r || "object" !== e(r) && "function" != typeof r ? g(t) : r
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v() {
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
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var b = require("sdp-transform"),
                R = require("../Logger"),
                _ = require("../errors"),
                S = require("../utils"),
                w = require("../ortc"),
                x = require("./sdp/commonUtils"),
                k = require("./sdp/unifiedPlanUtils"),
                D = require("./HandlerInterface"),
                P = require("./sdp/RemoteSdp"),
                T = new R.Logger("Firefox60"),
                O = {
                    OS: 16,
                    MIS: 2048
                },
                C = function(e) {
                    l(n, D.HandlerInterface);
                    var r = m(n);

                    function n() {
                        var e;
                        return u(this, n), (e = r.call(this))._mapMidTransceiver = new Map, e._sendStream = new MediaStream, e._hasDataChannelMediaSection = !1, e._nextSendSctpStreamId = 0, e._transportReady = !1, e
                    }
                    return d(n, [{
                        key: "close",
                        value: function() {
                            if (T.debug("close()"), this._pc) try {
                                this._pc.close()
                            } catch (e) {}
                        }
                    }, {
                        key: "getNativeRtpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                var t, r, n, a, i, c, s, o, u, p;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return T.debug("getNativeRtpCapabilities()"), t = new RTCPeerConnection({
                                                iceServers: [],
                                                iceTransportPolicy: "all",
                                                bundlePolicy: "max-bundle",
                                                rtcpMuxPolicy: "require"
                                            }), (r = document.createElement("canvas")).getContext("2d"), n = r.captureStream(), a = n.getVideoTracks()[0], e.prev = 6, t.addTransceiver("audio", {
                                                direction: "sendrecv"
                                            }), i = t.addTransceiver(a, {
                                                direction: "sendrecv"
                                            }), c = i.sender.getParameters(), s = [{
                                                rid: "r0",
                                                maxBitrate: 1e5
                                            }, {
                                                rid: "r1",
                                                maxBitrate: 5e5
                                            }], c.encodings = s, e.next = 14, i.sender.setParameters(c);
                                        case 14:
                                            return e.next = 16, t.createOffer();
                                        case 16:
                                            o = e.sent;
                                            try {
                                                r.remove()
                                            } catch (d) {}
                                            try {
                                                a.stop()
                                            } catch (d) {}
                                            try {
                                                t.close()
                                            } catch (d) {}
                                            return u = b.parse(o.sdp), p = x.extractRtpCapabilities({
                                                sdpObject: u
                                            }), e.abrupt("return", p);
                                        case 25:
                                            e.prev = 25, e.t0 = e.catch(6);
                                            try {
                                                r.remove()
                                            } catch (l) {}
                                            try {
                                                a.stop()
                                            } catch (l) {}
                                            try {
                                                t.close()
                                            } catch (l) {}
                                            throw e.t0;
                                        case 31:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [6, 25]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getNativeSctpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return T.debug("getNativeSctpCapabilities()"), e.abrupt("return", {
                                                numStreams: O
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "run",
                        value: function(e) {
                            var t = this,
                                r = e.direction,
                                n = e.iceParameters,
                                a = e.iceCandidates,
                                c = e.dtlsParameters,
                                s = e.sctpParameters,
                                o = e.iceServers,
                                u = e.iceTransportPolicy,
                                p = e.additionalSettings,
                                d = e.proprietaryConstraints,
                                l = e.extendedRtpCapabilities;
                            T.debug("run()"), this._direction = r, this._remoteSdp = new P.RemoteSdp({
                                iceParameters: n,
                                iceCandidates: a,
                                dtlsParameters: c,
                                sctpParameters: s
                            }), this._sendingRtpParametersByKind = {
                                audio: w.getSendingRtpParameters("audio", l),
                                video: w.getSendingRtpParameters("video", l)
                            }, this._sendingRemoteRtpParametersByKind = {
                                audio: w.getSendingRemoteRtpParameters("audio", l),
                                video: w.getSendingRemoteRtpParameters("video", l)
                            }, this._pc = new RTCPeerConnection(i({
                                iceServers: o || [],
                                iceTransportPolicy: u || "all",
                                bundlePolicy: "max-bundle",
                                rtcpMuxPolicy: "require"
                            }, p), d), this._pc.addEventListener("iceconnectionstatechange", function() {
                                switch (t._pc.iceConnectionState) {
                                    case "checking":
                                        t.emit("@connectionstatechange", "connecting");
                                        break;
                                    case "connected":
                                    case "completed":
                                        t.emit("@connectionstatechange", "connected");
                                        break;
                                    case "failed":
                                        t.emit("@connectionstatechange", "failed");
                                        break;
                                    case "disconnected":
                                        t.emit("@connectionstatechange", "disconnected");
                                        break;
                                    case "closed":
                                        t.emit("@connectionstatechange", "closed")
                                }
                            })
                        }
                    }, {
                        key: "updateIceServers",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new _.UnsupportedError("not supported");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "restartIce",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T.debug("restartIce()"), this._remoteSdp.updateIceParameters(t), this._transportReady) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if ("send" !== this._direction) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 7, this._pc.createOffer({
                                                iceRestart: !0
                                            });
                                        case 7:
                                            return r = e.sent, T.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", r), e.next = 11, this._pc.setLocalDescription(r);
                                        case 11:
                                            return n = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", n), e.next = 15, this._pc.setRemoteDescription(n);
                                        case 15:
                                            e.next = 27;
                                            break;
                                        case 17:
                                            return a = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", a), e.next = 21, this._pc.setRemoteDescription(a);
                                        case 21:
                                            return e.next = 23, this._pc.createAnswer();
                                        case 23:
                                            return i = e.sent, T.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", i), e.next = 27, this._pc.setLocalDescription(i);
                                        case 27:
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
                        key: "getTransportStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this._pc.getStats());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "send",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(r) {
                                var n, a, i, c, s, o, u, p, d, l, f, m, h, g, v, y, R;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = r.track, a = r.encodings, i = r.codecOptions, c = r.codec, this._assertSendDirection(), T.debug("send() [kind:%s, track.id:%s]", n.kind, n.id), a && a.length > 1 && (a.forEach(function(e, t) {
                                                    e.rid = "r".concat(t)
                                                }), s = S.clone(a).reverse()), (o = S.clone(this._sendingRtpParametersByKind[n.kind])).codecs = w.reduceCodecs(o.codecs, c), (u = S.clone(this._sendingRemoteRtpParametersByKind[n.kind])).codecs = w.reduceCodecs(u.codecs, c), p = this._pc.addTransceiver(n, {
                                                    direction: "sendonly",
                                                    streams: [this._sendStream]
                                                }), !s) {
                                                e.next = 14;
                                                break
                                            }
                                            return (d = p.sender.getParameters()).encodings = s, e.next = 14, p.sender.setParameters(d);
                                        case 14:
                                            return e.next = 16, this._pc.createOffer();
                                        case 16:
                                            if (l = e.sent, f = b.parse(l.sdp), this._transportReady) {
                                                e.next = 21;
                                                break
                                            }
                                            return e.next = 21, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: f
                                            });
                                        case 21:
                                            return T.debug("send() | calling pc.setLocalDescription() [offer:%o]", l), e.next = 24, this._pc.setLocalDescription(l);
                                        case 24:
                                            if (m = p.mid, o.mid = m, f = b.parse(this._pc.localDescription.sdp), h = f.media[f.media.length - 1], o.rtcp.cname = x.getCname({
                                                    offerMediaObject: h
                                                }), a ? 1 === a.length ? (g = k.getRtpEncodings({
                                                    offerMediaObject: h
                                                }), Object.assign(g[0], a[0]), o.encodings = g) : o.encodings = a : o.encodings = k.getRtpEncodings({
                                                    offerMediaObject: h
                                                }), o.encodings.length > 1 && ("video/vp8" === o.codecs[0].mimeType.toLowerCase() || "video/h264" === o.codecs[0].mimeType.toLowerCase())) {
                                                v = t(o.encodings);
                                                try {
                                                    for (v.s(); !(y = v.n()).done;) y.value.scalabilityMode = "S1T3"
                                                } catch (_) {
                                                    v.e(_)
                                                } finally {
                                                    v.f()
                                                }
                                            }
                                            return this._remoteSdp.send({
                                                offerMediaObject: h,
                                                offerRtpParameters: o,
                                                answerRtpParameters: u,
                                                codecOptions: i,
                                                extmapAllowMixed: !0
                                            }), R = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("send() | calling pc.setRemoteDescription() [answer:%o]", R), e.next = 36, this._pc.setRemoteDescription(R);
                                        case 36:
                                            return this._mapMidTransceiver.set(m, p), e.abrupt("return", {
                                                localId: m,
                                                rtpParameters: o,
                                                rtpSender: p.sender
                                            });
                                        case 38:
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
                        key: "stopSending",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T.debug("stopSending() [localId:%s]", t), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated transceiver not found");
                                        case 4:
                                            return r.sender.replaceTrack(null), this._pc.removeTrack(r.sender), this._remoteSdp.disableMediaSection(r.mid), e.next = 9, this._pc.createOffer();
                                        case 9:
                                            return n = e.sent, T.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", n), e.next = 13, this._pc.setLocalDescription(n);
                                        case 13:
                                            return a = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", a), e.next = 17, this._pc.setRemoteDescription(a);
                                        case 17:
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
                        key: "replaceTrack",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r ? T.debug("replaceTrack() [localId:%s, track.id:%s]", t, r.id) : T.debug("replaceTrack() [localId:%s, no track]", t), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return e.next = 7, n.sender.replaceTrack(r);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setMaxSpatialLayer",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), T.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t, r), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated transceiver not found");
                                        case 5:
                                            return a = n.sender.getParameters(), r = a.encodings.length - 1 - r, a.encodings.forEach(function(e, t) {
                                                e.active = t >= r
                                            }), e.next = 10, n.sender.setParameters(a);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setRtpEncodingParameters",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), T.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t, r), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return (a = n.sender.getParameters()).encodings.forEach(function(e, t) {
                                                a.encodings[t] = i(i({}, e), r)
                                            }), e.next = 9, n.sender.setParameters(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getSenderStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 4:
                                            return e.abrupt("return", r.sender.getStats());
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
                        key: "sendDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, s, o, u, p, d, l, f, m;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.ordered, n = t.maxPacketLifeTime, a = t.maxRetransmits, i = t.label, c = t.protocol, s = t.priority, this._assertSendDirection(), o = {
                                                    negotiated: !0,
                                                    id: this._nextSendSctpStreamId,
                                                    ordered: r,
                                                    maxPacketLifeTime: n,
                                                    maxRetransmits: a,
                                                    protocol: c,
                                                    priority: s
                                                }, T.debug("sendDataChannel() [options:%o]", o), u = this._pc.createDataChannel(i, o), this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % O.MIS, this._hasDataChannelMediaSection) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 9, this._pc.createOffer();
                                        case 9:
                                            if (p = e.sent, d = b.parse(p.sdp), l = d.media.find(function(e) {
                                                    return "application" === e.type
                                                }), this._transportReady) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 15, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: d
                                            });
                                        case 15:
                                            return T.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", p), e.next = 18, this._pc.setLocalDescription(p);
                                        case 18:
                                            return this._remoteSdp.sendSctpAssociation({
                                                offerMediaObject: l
                                            }), f = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", f), e.next = 23, this._pc.setRemoteDescription(f);
                                        case 23:
                                            this._hasDataChannelMediaSection = !0;
                                        case 24:
                                            return m = {
                                                streamId: o.id,
                                                ordered: o.ordered,
                                                maxPacketLifeTime: o.maxPacketLifeTime,
                                                maxRetransmits: o.maxRetransmits
                                            }, e.abrupt("return", {
                                                dataChannel: u,
                                                sctpStreamParameters: m
                                            });
                                        case 26:
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
                        key: "receive",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, s, o, u, p;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.trackId, n = t.kind, a = t.rtpParameters, this._assertRecvDirection(), T.debug("receive() [trackId:%s, kind:%s]", r, n), i = a.mid || String(this._mapMidTransceiver.size), this._remoteSdp.receive({
                                                mid: i,
                                                kind: n,
                                                offerRtpParameters: a,
                                                streamId: a.rtcp.cname,
                                                trackId: r
                                            }), c = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", c), e.next = 9, this._pc.setRemoteDescription(c);
                                        case 9:
                                            return e.next = 11, this._pc.createAnswer();
                                        case 11:
                                            if (s = e.sent, o = b.parse(s.sdp), u = o.media.find(function(e) {
                                                    return String(e.mid) === i
                                                }), x.applyCodecParameters({
                                                    offerRtpParameters: a,
                                                    answerMediaObject: u
                                                }), s = {
                                                    type: "answer",
                                                    sdp: b.write(o)
                                                }, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: o
                                            });
                                        case 19:
                                            return T.debug("receive() | calling pc.setLocalDescription() [answer:%o]", s), e.next = 22, this._pc.setLocalDescription(s);
                                        case 22:
                                            if (p = this._pc.getTransceivers().find(function(e) {
                                                    return e.mid === i
                                                })) {
                                                e.next = 25;
                                                break
                                            }
                                            throw new Error("new RTCRtpTransceiver not found");
                                        case 25:
                                            return this._mapMidTransceiver.set(i, p), e.abrupt("return", {
                                                localId: i,
                                                track: p.receiver.track,
                                                rtpReceiver: p.receiver
                                            });
                                        case 27:
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
                        key: "stopReceiving",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertRecvDirection(), T.debug("stopReceiving() [localId:%s]", t), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return this._remoteSdp.closeMediaSection(r.mid), n = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", n), e.next = 10, this._pc.setRemoteDescription(n);
                                        case 10:
                                            return e.next = 12, this._pc.createAnswer();
                                        case 12:
                                            return a = e.sent, T.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", a), e.next = 16, this._pc.setLocalDescription(a);
                                        case 16:
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
                        key: "getReceiverStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertRecvDirection(), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 4:
                                            return e.abrupt("return", r.receiver.getStats());
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
                        key: "receiveDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, s, o, u, p, d, l, f;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.sctpStreamParameters, n = t.label, a = t.protocol, this._assertRecvDirection(), i = r.streamId, c = r.ordered, s = r.maxPacketLifeTime, o = r.maxRetransmits, u = {
                                                    negotiated: !0,
                                                    id: i,
                                                    ordered: c,
                                                    maxPacketLifeTime: s,
                                                    maxRetransmits: o,
                                                    protocol: a
                                                }, T.debug("receiveDataChannel() [options:%o]", u), p = this._pc.createDataChannel(n, u), this._hasDataChannelMediaSection) {
                                                e.next = 23;
                                                break
                                            }
                                            return this._remoteSdp.receiveSctpAssociation(), d = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, T.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", d), e.next = 12, this._pc.setRemoteDescription(d);
                                        case 12:
                                            return e.next = 14, this._pc.createAnswer();
                                        case 14:
                                            if (l = e.sent, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return f = b.parse(l.sdp), e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: f
                                            });
                                        case 19:
                                            return T.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", l), e.next = 22, this._pc.setLocalDescription(l);
                                        case 22:
                                            this._hasDataChannelMediaSection = !0;
                                        case 23:
                                            return e.abrupt("return", {
                                                dataChannel: p
                                            });
                                        case 24:
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
                        key: "_setupTransport",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.localDtlsRole, (n = t.localSdpObject) || (n = b.parse(this._pc.localDescription.sdp)), (a = x.extractDtlsParameters({
                                                sdpObject: n
                                            })).role = r, this._remoteSdp.updateDtlsRole("client" === r ? "server" : "client"), e.next = 7, this.safeEmitAsPromise("@connect", {
                                                dtlsParameters: a
                                            });
                                        case 7:
                                            this._transportReady = !0;
                                        case 8:
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
                        key: "_assertSendDirection",
                        value: function() {
                            if ("send" !== this._direction) throw new Error('method can just be called for handlers with "send" direction')
                        }
                    }, {
                        key: "_assertRecvDirection",
                        value: function() {
                            if ("recv" !== this._direction) throw new Error('method can just be called for handlers with "recv" direction')
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "Firefox60"
                        }
                    }], [{
                        key: "createFactory",
                        value: function() {
                            return function() {
                                return new n
                            }
                        }
                    }]), n
                }();
            exports.Firefox60 = C;
        }, {
            "sdp-transform": "tbaU",
            "../Logger": "p5bA",
            "../errors": "p8GN",
            "../utils": "FOZT",
            "../ortc": "alA0",
            "./sdp/commonUtils": "FBSL",
            "./sdp/unifiedPlanUtils": "Dujs",
            "./HandlerInterface": "iuhH",
            "./sdp/RemoteSdp": "aH4R"
        }],
        "qfh9": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
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
                var s, c = !0,
                    o = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        o = !0, s = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                }
            }

            function r(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach(function(t) {
                        s(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function s(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function c(e, t, r, n, a, i, s) {
                try {
                    var c = e[i](s),
                        o = c.value
                } catch (u) {
                    return void r(u)
                }
                c.done ? t(o) : Promise.resolve(o).then(n, a)
            }

            function o(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, a) {
                        var i = e.apply(t, r);

                        function s(e) {
                            c(i, n, a, s, o, "next", e)
                        }

                        function o(e) {
                            c(i, n, a, s, o, "throw", e)
                        }
                        s(void 0)
                    })
                }
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t, r) {
                return t && p(e.prototype, t), r && p(e, r), e
            }

            function l(e, t) {
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

            function h(e) {
                var t = v();
                return function() {
                    var r, n = y(e);
                    if (t) {
                        var a = y(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return m(this, r)
                }
            }

            function m(t, r) {
                return !r || "object" !== e(r) && "function" != typeof r ? g(t) : r
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v() {
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
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var b = require("sdp-transform"),
                R = require("../Logger"),
                S = require("../utils"),
                _ = require("../ortc"),
                w = require("./sdp/commonUtils"),
                x = require("./sdp/unifiedPlanUtils"),
                k = require("./HandlerInterface"),
                D = require("./sdp/RemoteSdp"),
                P = new R.Logger("Safari12"),
                T = {
                    OS: 1024,
                    MIS: 1024
                },
                O = function(e) {
                    l(n, k.HandlerInterface);
                    var r = h(n);

                    function n() {
                        var e;
                        return u(this, n), (e = r.call(this))._mapMidTransceiver = new Map, e._sendStream = new MediaStream, e._hasDataChannelMediaSection = !1, e._nextSendSctpStreamId = 0, e._transportReady = !1, e
                    }
                    return d(n, [{
                        key: "close",
                        value: function() {
                            if (P.debug("close()"), this._pc) try {
                                this._pc.close()
                            } catch (e) {}
                        }
                    }, {
                        key: "getNativeRtpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                var t, r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return P.debug("getNativeRtpCapabilities()"), t = new RTCPeerConnection({
                                                iceServers: [],
                                                iceTransportPolicy: "all",
                                                bundlePolicy: "max-bundle",
                                                rtcpMuxPolicy: "require"
                                            }), e.prev = 2, t.addTransceiver("audio"), t.addTransceiver("video"), e.next = 7, t.createOffer();
                                        case 7:
                                            r = e.sent;
                                            try {
                                                t.close()
                                            } catch (i) {}
                                            return n = b.parse(r.sdp), a = w.extractRtpCapabilities({
                                                sdpObject: n
                                            }), e.abrupt("return", a);
                                        case 14:
                                            e.prev = 14, e.t0 = e.catch(2);
                                            try {
                                                t.close()
                                            } catch (s) {}
                                            throw e.t0;
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [2, 14]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getNativeSctpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return P.debug("getNativeSctpCapabilities()"), e.abrupt("return", {
                                                numStreams: T
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "run",
                        value: function(e) {
                            var t = this,
                                r = e.direction,
                                n = e.iceParameters,
                                a = e.iceCandidates,
                                s = e.dtlsParameters,
                                c = e.sctpParameters,
                                o = e.iceServers,
                                u = e.iceTransportPolicy,
                                p = e.additionalSettings,
                                d = e.proprietaryConstraints,
                                l = e.extendedRtpCapabilities;
                            P.debug("run()"), this._direction = r, this._remoteSdp = new D.RemoteSdp({
                                iceParameters: n,
                                iceCandidates: a,
                                dtlsParameters: s,
                                sctpParameters: c
                            }), this._sendingRtpParametersByKind = {
                                audio: _.getSendingRtpParameters("audio", l),
                                video: _.getSendingRtpParameters("video", l)
                            }, this._sendingRemoteRtpParametersByKind = {
                                audio: _.getSendingRemoteRtpParameters("audio", l),
                                video: _.getSendingRemoteRtpParameters("video", l)
                            }, this._pc = new RTCPeerConnection(i({
                                iceServers: o || [],
                                iceTransportPolicy: u || "all",
                                bundlePolicy: "max-bundle",
                                rtcpMuxPolicy: "require"
                            }, p), d), this._pc.addEventListener("iceconnectionstatechange", function() {
                                switch (t._pc.iceConnectionState) {
                                    case "checking":
                                        t.emit("@connectionstatechange", "connecting");
                                        break;
                                    case "connected":
                                    case "completed":
                                        t.emit("@connectionstatechange", "connected");
                                        break;
                                    case "failed":
                                        t.emit("@connectionstatechange", "failed");
                                        break;
                                    case "disconnected":
                                        t.emit("@connectionstatechange", "disconnected");
                                        break;
                                    case "closed":
                                        t.emit("@connectionstatechange", "closed")
                                }
                            })
                        }
                    }, {
                        key: "updateIceServers",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            P.debug("updateIceServers()"), (r = this._pc.getConfiguration()).iceServers = t, this._pc.setConfiguration(r);
                                        case 4:
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
                        key: "restartIce",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (P.debug("restartIce()"), this._remoteSdp.updateIceParameters(t), this._transportReady) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if ("send" !== this._direction) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 7, this._pc.createOffer({
                                                iceRestart: !0
                                            });
                                        case 7:
                                            return r = e.sent, P.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", r), e.next = 11, this._pc.setLocalDescription(r);
                                        case 11:
                                            return n = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", n), e.next = 15, this._pc.setRemoteDescription(n);
                                        case 15:
                                            e.next = 27;
                                            break;
                                        case 17:
                                            return a = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", a), e.next = 21, this._pc.setRemoteDescription(a);
                                        case 21:
                                            return e.next = 23, this._pc.createAnswer();
                                        case 23:
                                            return i = e.sent, P.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", i), e.next = 27, this._pc.setLocalDescription(i);
                                        case 27:
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
                        key: "getTransportStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this._pc.getStats());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "send",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(r) {
                                var n, a, i, s, c, o, u, p, d, l, f, h, m, g, v, y;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = r.track, a = r.encodings, i = r.codecOptions, s = r.codec, this._assertSendDirection(), P.debug("send() [kind:%s, track.id:%s]", n.kind, n.id), (c = S.clone(this._sendingRtpParametersByKind[n.kind])).codecs = _.reduceCodecs(c.codecs, s), (o = S.clone(this._sendingRemoteRtpParametersByKind[n.kind])).codecs = _.reduceCodecs(o.codecs, s), u = this._remoteSdp.getNextMediaSectionIdx(), p = this._pc.addTransceiver(n, {
                                                direction: "sendonly",
                                                streams: [this._sendStream]
                                            }), e.next = 11, this._pc.createOffer();
                                        case 11:
                                            if (d = e.sent, l = b.parse(d.sdp), this._transportReady) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.next = 16, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: l
                                            });
                                        case 16:
                                            return a && a.length > 1 && (P.debug("send() | enabling legacy simulcast"), l = b.parse(d.sdp), f = l.media[u.idx], x.addLegacySimulcast({
                                                offerMediaObject: f,
                                                numStreams: a.length
                                            }), d = {
                                                type: "offer",
                                                sdp: b.write(l)
                                            }), P.debug("send() | calling pc.setLocalDescription() [offer:%o]", d), e.next = 20, this._pc.setLocalDescription(d);
                                        case 20:
                                            if (h = p.mid, c.mid = h, l = b.parse(this._pc.localDescription.sdp), f = l.media[u.idx], c.rtcp.cname = w.getCname({
                                                    offerMediaObject: f
                                                }), c.encodings = x.getRtpEncodings({
                                                    offerMediaObject: f
                                                }), a)
                                                for (m = 0; m < c.encodings.length; ++m) a[m] && Object.assign(c.encodings[m], a[m]);
                                            if (c.encodings.length > 1 && ("video/vp8" === c.codecs[0].mimeType.toLowerCase() || "video/h264" === c.codecs[0].mimeType.toLowerCase())) {
                                                g = t(c.encodings);
                                                try {
                                                    for (g.s(); !(v = g.n()).done;) v.value.scalabilityMode = "S1T3"
                                                } catch (R) {
                                                    g.e(R)
                                                } finally {
                                                    g.f()
                                                }
                                            }
                                            return this._remoteSdp.send({
                                                offerMediaObject: f,
                                                reuseMid: u.reuseMid,
                                                offerRtpParameters: c,
                                                answerRtpParameters: o,
                                                codecOptions: i
                                            }), y = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("send() | calling pc.setRemoteDescription() [answer:%o]", y), e.next = 33, this._pc.setRemoteDescription(y);
                                        case 33:
                                            return this._mapMidTransceiver.set(h, p), e.abrupt("return", {
                                                localId: h,
                                                rtpParameters: c,
                                                rtpSender: p.sender
                                            });
                                        case 35:
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
                        key: "stopSending",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), P.debug("stopSending() [localId:%s]", t), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return r.sender.replaceTrack(null), this._pc.removeTrack(r.sender), this._remoteSdp.closeMediaSection(r.mid), e.next = 10, this._pc.createOffer();
                                        case 10:
                                            return n = e.sent, P.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", n), e.next = 14, this._pc.setLocalDescription(n);
                                        case 14:
                                            return a = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", a), e.next = 18, this._pc.setRemoteDescription(a);
                                        case 18:
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
                        key: "replaceTrack",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r ? P.debug("replaceTrack() [localId:%s, track.id:%s]", t, r.id) : P.debug("replaceTrack() [localId:%s, no track]", t), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return e.next = 7, n.sender.replaceTrack(r);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setMaxSpatialLayer",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), P.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t, r), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return (a = n.sender.getParameters()).encodings.forEach(function(e, t) {
                                                e.active = t <= r
                                            }), e.next = 9, n.sender.setParameters(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setRtpEncodingParameters",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), P.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t, r), n = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return (a = n.sender.getParameters()).encodings.forEach(function(e, t) {
                                                a.encodings[t] = i(i({}, e), r)
                                            }), e.next = 9, n.sender.setParameters(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getSenderStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 4:
                                            return e.abrupt("return", r.sender.getStats());
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
                        key: "sendDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, s, c, o, u, p, d, l, f, h;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.ordered, n = t.maxPacketLifeTime, a = t.maxRetransmits, i = t.label, s = t.protocol, c = t.priority, this._assertSendDirection(), o = {
                                                    negotiated: !0,
                                                    id: this._nextSendSctpStreamId,
                                                    ordered: r,
                                                    maxPacketLifeTime: n,
                                                    maxRetransmits: a,
                                                    protocol: s,
                                                    priority: c
                                                }, P.debug("sendDataChannel() [options:%o]", o), u = this._pc.createDataChannel(i, o), this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % T.MIS, this._hasDataChannelMediaSection) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 9, this._pc.createOffer();
                                        case 9:
                                            if (p = e.sent, d = b.parse(p.sdp), l = d.media.find(function(e) {
                                                    return "application" === e.type
                                                }), this._transportReady) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 15, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: d
                                            });
                                        case 15:
                                            return P.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", p), e.next = 18, this._pc.setLocalDescription(p);
                                        case 18:
                                            return this._remoteSdp.sendSctpAssociation({
                                                offerMediaObject: l
                                            }), f = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", f), e.next = 23, this._pc.setRemoteDescription(f);
                                        case 23:
                                            this._hasDataChannelMediaSection = !0;
                                        case 24:
                                            return h = {
                                                streamId: o.id,
                                                ordered: o.ordered,
                                                maxPacketLifeTime: o.maxPacketLifeTime,
                                                maxRetransmits: o.maxRetransmits
                                            }, e.abrupt("return", {
                                                dataChannel: u,
                                                sctpStreamParameters: h
                                            });
                                        case 26:
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
                        key: "receive",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, s, c, o, u, p;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.trackId, n = t.kind, a = t.rtpParameters, this._assertRecvDirection(), P.debug("receive() [trackId:%s, kind:%s]", r, n), i = a.mid || String(this._mapMidTransceiver.size), this._remoteSdp.receive({
                                                mid: i,
                                                kind: n,
                                                offerRtpParameters: a,
                                                streamId: a.rtcp.cname,
                                                trackId: r
                                            }), s = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", s), e.next = 9, this._pc.setRemoteDescription(s);
                                        case 9:
                                            return e.next = 11, this._pc.createAnswer();
                                        case 11:
                                            if (c = e.sent, o = b.parse(c.sdp), u = o.media.find(function(e) {
                                                    return String(e.mid) === i
                                                }), w.applyCodecParameters({
                                                    offerRtpParameters: a,
                                                    answerMediaObject: u
                                                }), c = {
                                                    type: "answer",
                                                    sdp: b.write(o)
                                                }, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: o
                                            });
                                        case 19:
                                            return P.debug("receive() | calling pc.setLocalDescription() [answer:%o]", c), e.next = 22, this._pc.setLocalDescription(c);
                                        case 22:
                                            if (p = this._pc.getTransceivers().find(function(e) {
                                                    return e.mid === i
                                                })) {
                                                e.next = 25;
                                                break
                                            }
                                            throw new Error("new RTCRtpTransceiver not found");
                                        case 25:
                                            return this._mapMidTransceiver.set(i, p), e.abrupt("return", {
                                                localId: i,
                                                track: p.receiver.track,
                                                rtpReceiver: p.receiver
                                            });
                                        case 27:
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
                        key: "stopReceiving",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertRecvDirection(), P.debug("stopReceiving() [localId:%s]", t), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 5:
                                            return this._remoteSdp.closeMediaSection(r.mid), n = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", n), e.next = 10, this._pc.setRemoteDescription(n);
                                        case 10:
                                            return e.next = 12, this._pc.createAnswer();
                                        case 12:
                                            return a = e.sent, P.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", a), e.next = 16, this._pc.setLocalDescription(a);
                                        case 16:
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
                        key: "getReceiverStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertRecvDirection(), r = this._mapMidTransceiver.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpTransceiver not found");
                                        case 4:
                                            return e.abrupt("return", r.receiver.getStats());
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
                        key: "receiveDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, s, c, o, u, p, d, l, f;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.sctpStreamParameters, n = t.label, a = t.protocol, this._assertRecvDirection(), i = r.streamId, s = r.ordered, c = r.maxPacketLifeTime, o = r.maxRetransmits, u = {
                                                    negotiated: !0,
                                                    id: i,
                                                    ordered: s,
                                                    maxPacketLifeTime: c,
                                                    maxRetransmits: o,
                                                    protocol: a
                                                }, P.debug("receiveDataChannel() [options:%o]", u), p = this._pc.createDataChannel(n, u), this._hasDataChannelMediaSection) {
                                                e.next = 23;
                                                break
                                            }
                                            return this._remoteSdp.receiveSctpAssociation(), d = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", d), e.next = 12, this._pc.setRemoteDescription(d);
                                        case 12:
                                            return e.next = 14, this._pc.createAnswer();
                                        case 14:
                                            if (l = e.sent, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return f = b.parse(l.sdp), e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: f
                                            });
                                        case 19:
                                            return P.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", l), e.next = 22, this._pc.setLocalDescription(l);
                                        case 22:
                                            this._hasDataChannelMediaSection = !0;
                                        case 23:
                                            return e.abrupt("return", {
                                                dataChannel: p
                                            });
                                        case 24:
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
                        key: "_setupTransport",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.localDtlsRole, (n = t.localSdpObject) || (n = b.parse(this._pc.localDescription.sdp)), (a = w.extractDtlsParameters({
                                                sdpObject: n
                                            })).role = r, this._remoteSdp.updateDtlsRole("client" === r ? "server" : "client"), e.next = 7, this.safeEmitAsPromise("@connect", {
                                                dtlsParameters: a
                                            });
                                        case 7:
                                            this._transportReady = !0;
                                        case 8:
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
                        key: "_assertSendDirection",
                        value: function() {
                            if ("send" !== this._direction) throw new Error('method can just be called for handlers with "send" direction')
                        }
                    }, {
                        key: "_assertRecvDirection",
                        value: function() {
                            if ("recv" !== this._direction) throw new Error('method can just be called for handlers with "recv" direction')
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "Safari12"
                        }
                    }], [{
                        key: "createFactory",
                        value: function() {
                            return function() {
                                return new n
                            }
                        }
                    }]), n
                }();
            exports.Safari12 = O;
        }, {
            "sdp-transform": "tbaU",
            "../Logger": "p5bA",
            "../utils": "FOZT",
            "../ortc": "alA0",
            "./sdp/commonUtils": "FBSL",
            "./sdp/unifiedPlanUtils": "Dujs",
            "./HandlerInterface": "iuhH",
            "./sdp/RemoteSdp": "aH4R"
        }],
        "LRIx": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
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
                    o = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        o = !0, c = e
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                }
            }

            function r(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach(function(t) {
                        c(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function c(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function s(e, t, r, n, a, i, c) {
                try {
                    var s = e[i](c),
                        o = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? t(o) : Promise.resolve(o).then(n, a)
            }

            function o(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, a) {
                        var i = e.apply(t, r);

                        function c(e) {
                            s(i, n, a, c, o, "next", e)
                        }

                        function o(e) {
                            s(i, n, a, c, o, "throw", e)
                        }
                        c(void 0)
                    })
                }
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t, r) {
                return t && p(e.prototype, t), r && p(e, r), e
            }

            function l(e, t) {
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

            function h(e) {
                var t = v();
                return function() {
                    var r, n = b(e);
                    if (t) {
                        var a = b(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return m(this, r)
                }
            }

            function m(t, r) {
                return !r || "object" !== e(r) && "function" != typeof r ? g(t) : r
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var S = require("sdp-transform"),
                y = require("../Logger"),
                R = require("../utils"),
                _ = require("../ortc"),
                w = require("./sdp/commonUtils"),
                k = require("./sdp/planBUtils"),
                x = require("./HandlerInterface"),
                D = require("./sdp/RemoteSdp"),
                P = new y.Logger("Safari11"),
                I = {
                    OS: 1024,
                    MIS: 1024
                },
                O = function(e) {
                    l(n, x.HandlerInterface);
                    var r = h(n);

                    function n() {
                        var e;
                        return u(this, n), (e = r.call(this))._sendStream = new MediaStream, e._mapSendLocalIdRtpSender = new Map, e._nextSendLocalId = 0, e._mapRecvLocalIdInfo = new Map, e._hasDataChannelMediaSection = !1, e._nextSendSctpStreamId = 0, e._transportReady = !1, e
                    }
                    return d(n, [{
                        key: "close",
                        value: function() {
                            if (P.debug("close()"), this._pc) try {
                                this._pc.close()
                            } catch (e) {}
                        }
                    }, {
                        key: "getNativeRtpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                var t, r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return P.debug("getNativeRtpCapabilities()"), t = new RTCPeerConnection({
                                                iceServers: [],
                                                iceTransportPolicy: "all",
                                                bundlePolicy: "max-bundle",
                                                rtcpMuxPolicy: "require",
                                                sdpSemantics: "plan-b"
                                            }), e.prev = 2, e.next = 5, t.createOffer({
                                                offerToReceiveAudio: !0,
                                                offerToReceiveVideo: !0
                                            });
                                        case 5:
                                            r = e.sent;
                                            try {
                                                t.close()
                                            } catch (i) {}
                                            return n = S.parse(r.sdp), a = w.extractRtpCapabilities({
                                                sdpObject: n
                                            }), e.abrupt("return", a);
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(2);
                                            try {
                                                t.close()
                                            } catch (c) {}
                                            throw e.t0;
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [2, 12]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getNativeSctpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return P.debug("getNativeSctpCapabilities()"), e.abrupt("return", {
                                                numStreams: I
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "run",
                        value: function(e) {
                            var t = this,
                                r = e.direction,
                                n = e.iceParameters,
                                a = e.iceCandidates,
                                c = e.dtlsParameters,
                                s = e.sctpParameters,
                                o = e.iceServers,
                                u = e.iceTransportPolicy,
                                p = e.additionalSettings,
                                d = e.proprietaryConstraints,
                                l = e.extendedRtpCapabilities;
                            P.debug("run()"), this._direction = r, this._remoteSdp = new D.RemoteSdp({
                                iceParameters: n,
                                iceCandidates: a,
                                dtlsParameters: c,
                                sctpParameters: s,
                                planB: !0
                            }), this._sendingRtpParametersByKind = {
                                audio: _.getSendingRtpParameters("audio", l),
                                video: _.getSendingRtpParameters("video", l)
                            }, this._sendingRemoteRtpParametersByKind = {
                                audio: _.getSendingRemoteRtpParameters("audio", l),
                                video: _.getSendingRemoteRtpParameters("video", l)
                            }, this._pc = new RTCPeerConnection(i({
                                iceServers: o || [],
                                iceTransportPolicy: u || "all",
                                bundlePolicy: "max-bundle",
                                rtcpMuxPolicy: "require"
                            }, p), d), this._pc.addEventListener("iceconnectionstatechange", function() {
                                switch (t._pc.iceConnectionState) {
                                    case "checking":
                                        t.emit("@connectionstatechange", "connecting");
                                        break;
                                    case "connected":
                                    case "completed":
                                        t.emit("@connectionstatechange", "connected");
                                        break;
                                    case "failed":
                                        t.emit("@connectionstatechange", "failed");
                                        break;
                                    case "disconnected":
                                        t.emit("@connectionstatechange", "disconnected");
                                        break;
                                    case "closed":
                                        t.emit("@connectionstatechange", "closed")
                                }
                            })
                        }
                    }, {
                        key: "updateIceServers",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            P.debug("updateIceServers()"), (r = this._pc.getConfiguration()).iceServers = t, this._pc.setConfiguration(r);
                                        case 4:
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
                        key: "restartIce",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (P.debug("restartIce()"), this._remoteSdp.updateIceParameters(t), this._transportReady) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if ("send" !== this._direction) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 7, this._pc.createOffer({
                                                iceRestart: !0
                                            });
                                        case 7:
                                            return r = e.sent, P.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", r), e.next = 11, this._pc.setLocalDescription(r);
                                        case 11:
                                            return n = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", n), e.next = 15, this._pc.setRemoteDescription(n);
                                        case 15:
                                            e.next = 27;
                                            break;
                                        case 17:
                                            return a = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", a), e.next = 21, this._pc.setRemoteDescription(a);
                                        case 21:
                                            return e.next = 23, this._pc.createAnswer();
                                        case 23:
                                            return i = e.sent, P.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", i), e.next = 27, this._pc.setLocalDescription(i);
                                        case 27:
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
                        key: "getTransportStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this._pc.getStats());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "send",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(r) {
                                var n, a, i, c, s, o, u, p, d, l, f, h, m, g, v;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = r.track, a = r.encodings, i = r.codecOptions, c = r.codec, this._assertSendDirection(), P.debug("send() [kind:%s, track.id:%s]", n.kind, n.id), c && P.warn("send() | codec selection is not available in %s handler", this.name), this._sendStream.addTrack(n), this._pc.addTrack(n, this._sendStream), e.next = 8, this._pc.createOffer();
                                        case 8:
                                            if (s = e.sent, o = S.parse(s.sdp), (p = R.clone(this._sendingRtpParametersByKind[n.kind])).codecs = _.reduceCodecs(p.codecs), (d = R.clone(this._sendingRemoteRtpParametersByKind[n.kind])).codecs = _.reduceCodecs(d.codecs), this._transportReady) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 17, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: o
                                            });
                                        case 17:
                                            return "video" === n.kind && a && a.length > 1 && (P.debug("send() | enabling simulcast"), o = S.parse(s.sdp), u = o.media.find(function(e) {
                                                return "video" === e.type
                                            }), k.addLegacySimulcast({
                                                offerMediaObject: u,
                                                track: n,
                                                numStreams: a.length
                                            }), s = {
                                                type: "offer",
                                                sdp: S.write(o)
                                            }), P.debug("send() | calling pc.setLocalDescription() [offer:%o]", s), e.next = 21, this._pc.setLocalDescription(s);
                                        case 21:
                                            if (o = S.parse(this._pc.localDescription.sdp), u = o.media.find(function(e) {
                                                    return e.type === n.kind
                                                }), p.rtcp.cname = w.getCname({
                                                    offerMediaObject: u
                                                }), p.encodings = k.getRtpEncodings({
                                                    offerMediaObject: u,
                                                    track: n
                                                }), a)
                                                for (l = 0; l < p.encodings.length; ++l) a[l] && Object.assign(p.encodings[l], a[l]);
                                            if (p.encodings.length > 1 && "video/vp8" === p.codecs[0].mimeType.toLowerCase()) {
                                                f = t(p.encodings);
                                                try {
                                                    for (f.s(); !(h = f.n()).done;) h.value.scalabilityMode = "S1T3"
                                                } catch (b) {
                                                    f.e(b)
                                                } finally {
                                                    f.f()
                                                }
                                            }
                                            return this._remoteSdp.send({
                                                offerMediaObject: u,
                                                offerRtpParameters: p,
                                                answerRtpParameters: d,
                                                codecOptions: i
                                            }), m = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("send() | calling pc.setRemoteDescription() [answer:%o]", m), e.next = 32, this._pc.setRemoteDescription(m);
                                        case 32:
                                            return g = String(this._nextSendLocalId), this._nextSendLocalId++, v = this._pc.getSenders().find(function(e) {
                                                return e.track === n
                                            }), this._mapSendLocalIdRtpSender.set(g, v), e.abrupt("return", {
                                                localId: g,
                                                rtpParameters: p,
                                                rtpSender: v
                                            });
                                        case 37:
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
                        key: "stopSending",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r = this._mapSendLocalIdRtpSender.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpSender not found");
                                        case 4:
                                            return r.track && this._sendStream.removeTrack(r.track), this._mapSendLocalIdRtpSender.delete(t), e.next = 8, this._pc.createOffer();
                                        case 8:
                                            return n = e.sent, P.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", n), e.prev = 10, e.next = 13, this._pc.setLocalDescription(n);
                                        case 13:
                                            e.next = 21;
                                            break;
                                        case 15:
                                            if (e.prev = 15, e.t0 = e.catch(10), 0 !== this._sendStream.getTracks().length) {
                                                e.next = 20;
                                                break
                                            }
                                            return P.warn("stopSending() | ignoring expected error due no sending tracks: %s", e.t0.toString()), e.abrupt("return");
                                        case 20:
                                            throw e.t0;
                                        case 21:
                                            if ("stable" !== this._pc.signalingState) {
                                                e.next = 23;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 23:
                                            return a = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", a), e.next = 27, this._pc.setRemoteDescription(a);
                                        case 27:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [10, 15]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "replaceTrack",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r ? P.debug("replaceTrack() [localId:%s, track.id:%s]", t, r.id) : P.debug("replaceTrack() [localId:%s, no track]", t), n = this._mapSendLocalIdRtpSender.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpSender not found");
                                        case 5:
                                            return a = n.track, e.next = 8, n.replaceTrack(r);
                                        case 8:
                                            a && this._sendStream.removeTrack(a), r && this._sendStream.addTrack(r);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setMaxSpatialLayer",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), P.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t, r), n = this._mapSendLocalIdRtpSender.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpSender not found");
                                        case 5:
                                            return (a = n.getParameters()).encodings.forEach(function(e, t) {
                                                e.active = t <= r
                                            }), e.next = 9, n.setParameters(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setRtpEncodingParameters",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), P.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t, r), n = this._mapSendLocalIdRtpSender.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("associated RTCRtpSender not found");
                                        case 5:
                                            return (a = n.getParameters()).encodings.forEach(function(e, t) {
                                                a.encodings[t] = i(i({}, e), r)
                                            }), e.next = 9, n.setParameters(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getSenderStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), r = this._mapSendLocalIdRtpSender.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpSender not found");
                                        case 4:
                                            return e.abrupt("return", r.getStats());
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
                        key: "sendDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, s, o, u, p, d, l, f, h;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.ordered, n = t.maxPacketLifeTime, a = t.maxRetransmits, i = t.label, c = t.protocol, s = t.priority, this._assertSendDirection(), o = {
                                                    negotiated: !0,
                                                    id: this._nextSendSctpStreamId,
                                                    ordered: r,
                                                    maxPacketLifeTime: n,
                                                    maxRetransmits: a,
                                                    protocol: c,
                                                    priority: s
                                                }, P.debug("sendDataChannel() [options:%o]", o), u = this._pc.createDataChannel(i, o), this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % I.MIS, this._hasDataChannelMediaSection) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 9, this._pc.createOffer();
                                        case 9:
                                            if (p = e.sent, d = S.parse(p.sdp), l = d.media.find(function(e) {
                                                    return "application" === e.type
                                                }), this._transportReady) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 15, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: d
                                            });
                                        case 15:
                                            return P.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", p), e.next = 18, this._pc.setLocalDescription(p);
                                        case 18:
                                            return this._remoteSdp.sendSctpAssociation({
                                                offerMediaObject: l
                                            }), f = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", f), e.next = 23, this._pc.setRemoteDescription(f);
                                        case 23:
                                            this._hasDataChannelMediaSection = !0;
                                        case 24:
                                            return h = {
                                                streamId: o.id,
                                                ordered: o.ordered,
                                                maxPacketLifeTime: o.maxPacketLifeTime,
                                                maxRetransmits: o.maxRetransmits
                                            }, e.abrupt("return", {
                                                dataChannel: u,
                                                sctpStreamParameters: h
                                            });
                                        case 26:
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
                        key: "receive",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, s, o, u, p, d;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.trackId, n = t.kind, a = t.rtpParameters, this._assertRecvDirection(), P.debug("receive() [trackId:%s, kind:%s]", r, n), i = r, c = n, this._remoteSdp.receive({
                                                mid: c,
                                                kind: n,
                                                offerRtpParameters: a,
                                                streamId: a.rtcp.cname,
                                                trackId: r
                                            }), s = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", s), e.next = 10, this._pc.setRemoteDescription(s);
                                        case 10:
                                            return e.next = 12, this._pc.createAnswer();
                                        case 12:
                                            if (o = e.sent, u = S.parse(o.sdp), p = u.media.find(function(e) {
                                                    return String(e.mid) === c
                                                }), w.applyCodecParameters({
                                                    offerRtpParameters: a,
                                                    answerMediaObject: p
                                                }), o = {
                                                    type: "answer",
                                                    sdp: S.write(u)
                                                }, this._transportReady) {
                                                e.next = 20;
                                                break
                                            }
                                            return e.next = 20, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: u
                                            });
                                        case 20:
                                            return P.debug("receive() | calling pc.setLocalDescription() [answer:%o]", o), e.next = 23, this._pc.setLocalDescription(o);
                                        case 23:
                                            if (d = this._pc.getReceivers().find(function(e) {
                                                    return e.track && e.track.id === i
                                                })) {
                                                e.next = 26;
                                                break
                                            }
                                            throw new Error("new RTCRtpReceiver not");
                                        case 26:
                                            return this._mapRecvLocalIdInfo.set(i, {
                                                mid: c,
                                                rtpParameters: a,
                                                rtpReceiver: d
                                            }), e.abrupt("return", {
                                                localId: i,
                                                track: d.track,
                                                rtpReceiver: d
                                            });
                                        case 28:
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
                        key: "stopReceiving",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this._assertRecvDirection(), P.debug("stopReceiving() [localId:%s]", t), r = this._mapRecvLocalIdInfo.get(t) || {}, n = r.mid, a = r.rtpParameters, this._mapRecvLocalIdInfo.delete(t), this._remoteSdp.planBStopReceiving({
                                                mid: n,
                                                offerRtpParameters: a
                                            }), i = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", i), e.next = 9, this._pc.setRemoteDescription(i);
                                        case 9:
                                            return e.next = 11, this._pc.createAnswer();
                                        case 11:
                                            return c = e.sent, P.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", c), e.next = 15, this._pc.setLocalDescription(c);
                                        case 15:
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
                        key: "getReceiverStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertRecvDirection(), r = this._mapRecvLocalIdInfo.get(t) || {}, n = r.rtpReceiver) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("associated RTCRtpReceiver not found");
                                        case 4:
                                            return e.abrupt("return", n.getStats());
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
                        key: "receiveDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, s, o, u, p, d, l, f;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.sctpStreamParameters, n = t.label, a = t.protocol, this._assertRecvDirection(), i = r.streamId, c = r.ordered, s = r.maxPacketLifeTime, o = r.maxRetransmits, u = {
                                                    negotiated: !0,
                                                    id: i,
                                                    ordered: c,
                                                    maxPacketLifeTime: s,
                                                    maxRetransmits: o,
                                                    protocol: a
                                                }, P.debug("receiveDataChannel() [options:%o]", u), p = this._pc.createDataChannel(n, u), this._hasDataChannelMediaSection) {
                                                e.next = 23;
                                                break
                                            }
                                            return this._remoteSdp.receiveSctpAssociation({
                                                oldDataChannelSpec: !0
                                            }), d = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, P.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", d), e.next = 12, this._pc.setRemoteDescription(d);
                                        case 12:
                                            return e.next = 14, this._pc.createAnswer();
                                        case 14:
                                            if (l = e.sent, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return f = S.parse(l.sdp), e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: f
                                            });
                                        case 19:
                                            return P.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", l), e.next = 22, this._pc.setLocalDescription(l);
                                        case 22:
                                            this._hasDataChannelMediaSection = !0;
                                        case 23:
                                            return e.abrupt("return", {
                                                dataChannel: p
                                            });
                                        case 24:
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
                        key: "_setupTransport",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.localDtlsRole, (n = t.localSdpObject) || (n = S.parse(this._pc.localDescription.sdp)), (a = w.extractDtlsParameters({
                                                sdpObject: n
                                            })).role = r, this._remoteSdp.updateDtlsRole("client" === r ? "server" : "client"), e.next = 7, this.safeEmitAsPromise("@connect", {
                                                dtlsParameters: a
                                            });
                                        case 7:
                                            this._transportReady = !0;
                                        case 8:
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
                        key: "_assertSendDirection",
                        value: function() {
                            if ("send" !== this._direction) throw new Error('method can just be called for handlers with "send" direction')
                        }
                    }, {
                        key: "_assertRecvDirection",
                        value: function() {
                            if ("recv" !== this._direction) throw new Error('method can just be called for handlers with "recv" direction')
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "Safari11"
                        }
                    }], [{
                        key: "createFactory",
                        value: function() {
                            return function() {
                                return new n
                            }
                        }
                    }]), n
                }();
            exports.Safari11 = O;
        }, {
            "sdp-transform": "tbaU",
            "../Logger": "p5bA",
            "../utils": "FOZT",
            "../ortc": "alA0",
            "./sdp/commonUtils": "FBSL",
            "./sdp/planBUtils": "nNFi",
            "./HandlerInterface": "iuhH",
            "./sdp/RemoteSdp": "aH4R"
        }],
        "AbBu": [function(require, module, exports) {
            "use strict";

            function e(e, n) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = t(e)) || n && e && "number" == typeof e.length) {
                        r && (e = r);
                        var a = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, l = !0,
                    c = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        c = !0, i = e
                    },
                    f: function() {
                        try {
                            l || null == r.return || r.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function t(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var r = require("../../utils");

            function a() {
                var t, n = RTCRtpReceiver.getCapabilities(),
                    a = r.clone(n),
                    o = e(a.codecs);
                try {
                    for (o.s(); !(t = o.n()).done;) {
                        var i = t.value;
                        if (i.channels = i.numChannels, delete i.numChannels, i.mimeType = i.mimeType || "".concat(i.kind, "/").concat(i.name), i.parameters) {
                            var l = i.parameters;
                            l.apt && (l.apt = Number(l.apt)), l["packetization-mode"] && (l["packetization-mode"] = Number(l["packetization-mode"]))
                        }
                        var c, u = e(i.rtcpFeedback || []);
                        try {
                            for (u.s(); !(c = u.n()).done;) {
                                var m = c.value;
                                m.parameter || (m.parameter = "")
                            }
                        } catch (f) {
                            u.e(f)
                        } finally {
                            u.f()
                        }
                    }
                } catch (f) {
                    o.e(f)
                } finally {
                    o.f()
                }
                return a
            }

            function o(t) {
                var n = r.clone(t);
                n.mid && (n.muxId = n.mid, delete n.mid);
                var a, o = e(n.codecs);
                try {
                    for (o.s(); !(a = o.n()).done;) {
                        var i = a.value;
                        i.channels && (i.numChannels = i.channels, delete i.channels), i.mimeType && !i.name && (i.name = i.mimeType.split("/")[1]), delete i.mimeType
                    }
                } catch (l) {
                    o.e(l)
                } finally {
                    o.f()
                }
                return n
            }
            exports.getCapabilities = a, exports.mangleRtpParameters = o;
        }, {
            "../../utils": "FOZT"
        }],
        "BDvo": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function r(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? t(Object(a), !0).forEach(function(t) {
                        n(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }

            function n(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function a(e, t, r, n, a, o, i) {
                try {
                    var c = e[o](i),
                        s = c.value
                } catch (u) {
                    return void r(u)
                }
                c.done ? t(s) : Promise.resolve(s).then(n, a)
            }

            function o(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            a(i, n, o, c, s, "next", e)
                        }

                        function s(e) {
                            a(i, n, o, c, s, "throw", e)
                        }
                        c(void 0)
                    })
                }
            }

            function i(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = c(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    s = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0
                }
            }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t, r) {
                return t && p(e.prototype, t), r && p(e, r), e
            }

            function l(e, t) {
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

            function h(e) {
                var t = m();
                return function() {
                    var r, n = y(e);
                    if (t) {
                        var a = y(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return g(this, r)
                }
            }

            function g(t, r) {
                return !r || "object" !== e(r) && "function" != typeof r ? v(t) : r
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function m() {
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
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var b = require("../Logger"),
                R = require("../errors"),
                w = require("../utils"),
                k = require("../ortc"),
                _ = require("./ortc/edgeUtils"),
                S = require("./HandlerInterface"),
                T = new b.Logger("Edge11"),
                x = function(e) {
                    l(n, S.HandlerInterface);
                    var t = h(n);

                    function n() {
                        var e;
                        return u(this, n), (e = t.call(this))._rtpSenders = new Map, e._rtpReceivers = new Map, e._nextSendLocalId = 0, e._transportReady = !1, e
                    }
                    return d(n, [{
                        key: "close",
                        value: function() {
                            T.debug("close()");
                            try {
                                this._iceGatherer.close()
                            } catch (c) {}
                            try {
                                this._iceTransport.stop()
                            } catch (c) {}
                            try {
                                this._dtlsTransport.stop()
                            } catch (c) {}
                            var e, t = i(this._rtpSenders.values());
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var r = e.value;
                                    try {
                                        r.stop()
                                    } catch (c) {}
                                }
                            } catch (s) {
                                t.e(s)
                            } finally {
                                t.f()
                            }
                            var n, a = i(this._rtpReceivers.values());
                            try {
                                for (a.s(); !(n = a.n()).done;) {
                                    var o = n.value;
                                    try {
                                        o.stop()
                                    } catch (c) {}
                                }
                            } catch (s) {
                                a.e(s)
                            } finally {
                                a.f()
                            }
                        }
                    }, {
                        key: "getNativeRtpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return T.debug("getNativeRtpCapabilities()"), e.abrupt("return", _.getCapabilities());
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getNativeSctpCapabilities",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return T.debug("getNativeSctpCapabilities()"), e.abrupt("return", {
                                                numStreams: {
                                                    OS: 0,
                                                    MIS: 0
                                                }
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "run",
                        value: function(e) {
                            e.direction;
                            var t = e.iceParameters,
                                r = e.iceCandidates,
                                n = e.dtlsParameters,
                                a = (e.sctpParameters, e.iceServers),
                                o = e.iceTransportPolicy,
                                i = (e.additionalSettings, e.proprietaryConstraints, e.extendedRtpCapabilities);
                            T.debug("run()"), this._sendingRtpParametersByKind = {
                                audio: k.getSendingRtpParameters("audio", i),
                                video: k.getSendingRtpParameters("video", i)
                            }, this._remoteIceParameters = t, this._remoteIceCandidates = r, this._remoteDtlsParameters = n, this._cname = "CNAME-".concat(w.generateRandomNumber()), this._setIceGatherer({
                                iceServers: a,
                                iceTransportPolicy: o
                            }), this._setIceTransport(), this._setDtlsTransport()
                        }
                    }, {
                        key: "updateIceServers",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not supported");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "restartIce",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T.debug("restartIce()"), this._remoteIceParameters = t, this._transportReady) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            T.debug("restartIce() | calling iceTransport.start()"), this._iceTransport.start(this._iceGatherer, t, "controlling"), r = i(this._remoteIceCandidates);
                                            try {
                                                for (r.s(); !(n = r.n()).done;) a = n.value, this._iceTransport.addRemoteCandidate(a)
                                            } catch (o) {
                                                r.e(o)
                                            } finally {
                                                r.f()
                                            }
                                            this._iceTransport.addRemoteCandidate({});
                                        case 9:
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
                        key: "getTransportStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this._iceTransport.getStats());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "send",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, o, c, s, u, p, d, l, f;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.track, n = t.encodings, t.codecOptions, a = t.codec, T.debug("send() [kind:%s, track.id:%s]", r.kind, r.id), this._transportReady) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 5, this._setupTransport({
                                                localDtlsRole: "server"
                                            });
                                        case 5:
                                            T.debug("send() | calling new RTCRtpSender()"), o = new RTCRtpSender(r, this._dtlsTransport), (c = w.clone(this._sendingRtpParametersByKind[r.kind])).codecs = k.reduceCodecs(c.codecs, a), s = c.codecs.some(function(e) {
                                                return /.+\/rtx$/i.test(e.mimeType)
                                            }), n || (n = [{}]), u = i(n);
                                            try {
                                                for (u.s(); !(p = u.n()).done;)(d = p.value).ssrc = w.generateRandomNumber(), s && (d.rtx = {
                                                    ssrc: w.generateRandomNumber()
                                                })
                                            } catch (h) {
                                                u.e(h)
                                            } finally {
                                                u.f()
                                            }
                                            return c.encodings = n, c.rtcp = {
                                                cname: this._cname,
                                                reducedSize: !0,
                                                mux: !0
                                            }, l = _.mangleRtpParameters(c), T.debug("send() | calling rtpSender.send() [params:%o]", l), e.next = 19, o.send(l);
                                        case 19:
                                            return f = String(this._nextSendLocalId), this._nextSendLocalId++, this._rtpSenders.set(f, o), e.abrupt("return", {
                                                localId: f,
                                                rtpParameters: c,
                                                rtpSender: o
                                            });
                                        case 23:
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
                        key: "stopSending",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T.debug("stopSending() [localId:%s]", t), r = this._rtpSenders.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("RTCRtpSender not found");
                                        case 4:
                                            this._rtpSenders.delete(t), e.prev = 5, T.debug("stopSending() | calling rtpSender.stop()"), r.stop(), e.next = 14;
                                            break;
                                        case 10:
                                            throw e.prev = 10, e.t0 = e.catch(5), T.warn("stopSending() | rtpSender.stop() failed:%o", e.t0), e.t0;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [5, 10]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "replaceTrack",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r ? T.debug("replaceTrack() [localId:%s, track.id:%s]", t, r.id) : T.debug("replaceTrack() [localId:%s, no track]", t), n = this._rtpSenders.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("RTCRtpSender not found");
                                        case 4:
                                            n.setTrack(r);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setMaxSpatialLayer",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, r) {
                                var n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", t, r), n = this._rtpSenders.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("RTCRtpSender not found");
                                        case 4:
                                            return (a = n.getParameters()).encodings.forEach(function(e, t) {
                                                e.active = t <= r
                                            }), e.next = 8, n.setParameters(a);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setRtpEncodingParameters",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t, n) {
                                var a, o;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T.debug("setRtpEncodingParameters() [localId:%s, params:%o]", t, n), a = this._rtpSenders.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("RTCRtpSender not found");
                                        case 4:
                                            return (o = a.getParameters()).encodings.forEach(function(e, t) {
                                                o.encodings[t] = r(r({}, e), n)
                                            }), e.next = 8, a.setParameters(o);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getSenderStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = this._rtpSenders.get(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw new Error("RTCRtpSender not found");
                                        case 3:
                                            return e.abrupt("return", r.getStats());
                                        case 4:
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
                        key: "sendDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not implemented");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "receive",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, o, i, c;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.trackId, n = t.kind, a = t.rtpParameters, T.debug("receive() [trackId:%s, kind:%s]", r, n), this._transportReady) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 5, this._setupTransport({
                                                localDtlsRole: "server"
                                            });
                                        case 5:
                                            return T.debug("receive() | calling new RTCRtpReceiver()"), (o = new RTCRtpReceiver(this._dtlsTransport, n)).addEventListener("error", function(e) {
                                                T.error('rtpReceiver "error" event [event:%o]', e)
                                            }), i = _.mangleRtpParameters(a), T.debug("receive() | calling rtpReceiver.receive() [params:%o]", i), e.next = 12, o.receive(i);
                                        case 12:
                                            return c = r, this._rtpReceivers.set(c, o), e.abrupt("return", {
                                                localId: c,
                                                track: o.track,
                                                rtpReceiver: o
                                            });
                                        case 15:
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
                        key: "stopReceiving",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T.debug("stopReceiving() [localId:%s]", t), r = this._rtpReceivers.get(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("RTCRtpReceiver not found");
                                        case 4:
                                            this._rtpReceivers.delete(t);
                                            try {
                                                T.debug("stopReceiving() | calling rtpReceiver.stop()"), r.stop()
                                            } catch (n) {
                                                T.warn("stopReceiving() | rtpReceiver.stop() failed:%o", n)
                                            }
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
                        key: "getReceiverStats",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = this._rtpReceivers.get(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw new Error("RTCRtpReceiver not found");
                                        case 3:
                                            return e.abrupt("return", r.getStats());
                                        case 4:
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
                        key: "receiveDataChannel",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not implemented");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_setIceGatherer",
                        value: function(e) {
                            var t = e.iceServers,
                                r = e.iceTransportPolicy,
                                n = new RTCIceGatherer({
                                    iceServers: t || [],
                                    gatherPolicy: r || "all"
                                });
                            n.addEventListener("error", function(e) {
                                T.error('iceGatherer "error" event [event:%o]', e)
                            });
                            try {
                                n.gather()
                            } catch (a) {
                                T.debug("_setIceGatherer() | iceGatherer.gather() failed: %s", a.toString())
                            }
                            this._iceGatherer = n
                        }
                    }, {
                        key: "_setIceTransport",
                        value: function() {
                            var e = this,
                                t = new RTCIceTransport(this._iceGatherer);
                            t.addEventListener("statechange", function() {
                                switch (t.state) {
                                    case "checking":
                                        e.emit("@connectionstatechange", "connecting");
                                        break;
                                    case "connected":
                                    case "completed":
                                        e.emit("@connectionstatechange", "connected");
                                        break;
                                    case "failed":
                                        e.emit("@connectionstatechange", "failed");
                                        break;
                                    case "disconnected":
                                        e.emit("@connectionstatechange", "disconnected");
                                        break;
                                    case "closed":
                                        e.emit("@connectionstatechange", "closed")
                                }
                            }), t.addEventListener("icestatechange", function() {
                                switch (t.state) {
                                    case "checking":
                                        e.emit("@connectionstatechange", "connecting");
                                        break;
                                    case "connected":
                                    case "completed":
                                        e.emit("@connectionstatechange", "connected");
                                        break;
                                    case "failed":
                                        e.emit("@connectionstatechange", "failed");
                                        break;
                                    case "disconnected":
                                        e.emit("@connectionstatechange", "disconnected");
                                        break;
                                    case "closed":
                                        e.emit("@connectionstatechange", "closed")
                                }
                            }), t.addEventListener("candidatepairchange", function(e) {
                                T.debug('iceTransport "candidatepairchange" event [pair:%o]', e.pair)
                            }), this._iceTransport = t
                        }
                    }, {
                        key: "_setDtlsTransport",
                        value: function() {
                            var e = this,
                                t = new RTCDtlsTransport(this._iceTransport);
                            t.addEventListener("statechange", function() {
                                T.debug('dtlsTransport "statechange" event [state:%s]', t.state)
                            }), t.addEventListener("dtlsstatechange", function() {
                                T.debug('dtlsTransport "dtlsstatechange" event [state:%s]', t.state), "closed" === t.state && e.emit("@connectionstatechange", "closed")
                            }), t.addEventListener("error", function(e) {
                                T.error('dtlsTransport "error" event [event:%o]', e)
                            }), this._dtlsTransport = t
                        }
                    }, {
                        key: "_setupTransport",
                        value: function() {
                            var e = o(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, o, c;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.localDtlsRole, T.debug("_setupTransport()"), (n = this._dtlsTransport.getLocalParameters()).role = r, e.next = 6, this.safeEmitAsPromise("@connect", {
                                                dtlsParameters: n
                                            });
                                        case 6:
                                            this._iceTransport.start(this._iceGatherer, this._remoteIceParameters, "controlling"), a = i(this._remoteIceCandidates);
                                            try {
                                                for (a.s(); !(o = a.n()).done;) c = o.value, this._iceTransport.addRemoteCandidate(c)
                                            } catch (s) {
                                                a.e(s)
                                            } finally {
                                                a.f()
                                            }
                                            this._iceTransport.addRemoteCandidate({}), this._remoteDtlsParameters.fingerprints = this._remoteDtlsParameters.fingerprints.filter(function(e) {
                                                return "sha-256" === e.algorithm || "sha-384" === e.algorithm || "sha-512" === e.algorithm
                                            }), this._dtlsTransport.start(this._remoteDtlsParameters), this._transportReady = !0;
                                        case 13:
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
                        key: "name",
                        get: function() {
                            return "Edge11"
                        }
                    }], [{
                        key: "createFactory",
                        value: function() {
                            return function() {
                                return new n
                            }
                        }
                    }]), n
                }();
            exports.Edge11 = x;
        }, {
            "../Logger": "p5bA",
            "../errors": "p8GN",
            "../utils": "FOZT",
            "../ortc": "alA0",
            "./ortc/edgeUtils": "AbBu",
            "./HandlerInterface": "iuhH"
        }],
        "fsTO": [function(require, module, exports) {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function t(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
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
                var c, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        s = !0, c = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw c
                        }
                    }
                }
            }

            function r(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach(function(t) {
                        c(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function c(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function o(e, t, r, n, a, i, c) {
                try {
                    var o = e[i](c),
                        s = o.value
                } catch (u) {
                    return void r(u)
                }
                o.done ? t(s) : Promise.resolve(s).then(n, a)
            }

            function s(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise(function(n, a) {
                        var i = e.apply(t, r);

                        function c(e) {
                            o(i, n, a, c, s, "next", e)
                        }

                        function s(e) {
                            o(i, n, a, c, s, "throw", e)
                        }
                        c(void 0)
                    })
                }
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t, r) {
                return t && p(e.prototype, t), r && p(e, r), e
            }

            function l(e, t) {
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

            function m(e) {
                var t = v();
                return function() {
                    var r, n = y(e);
                    if (t) {
                        var a = y(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return h(this, r)
                }
            }

            function h(t, r) {
                return !r || "object" !== e(r) && "function" != typeof r ? g(t) : r
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v() {
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
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var b = require("sdp-transform"),
                S = require("../Logger"),
                R = require("../errors"),
                _ = require("../utils"),
                w = require("../ortc"),
                k = require("./sdp/commonUtils"),
                x = require("./sdp/planBUtils"),
                D = require("./HandlerInterface"),
                P = require("./sdp/RemoteSdp"),
                O = new S.Logger("ReactNative"),
                I = {
                    OS: 1024,
                    MIS: 1024
                },
                C = function(e) {
                    l(n, D.HandlerInterface);
                    var r = m(n);

                    function n() {
                        var e;
                        return u(this, n), (e = r.call(this))._sendStream = new MediaStream, e._mapSendLocalIdTrack = new Map, e._nextSendLocalId = 0, e._mapRecvLocalIdInfo = new Map, e._hasDataChannelMediaSection = !1, e._nextSendSctpStreamId = 0, e._transportReady = !1, e
                    }
                    return d(n, [{
                        key: "close",
                        value: function() {
                            if (O.debug("close()"), this._pc) try {
                                this._pc.close()
                            } catch (e) {}
                        }
                    }, {
                        key: "getNativeRtpCapabilities",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e() {
                                var t, r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return O.debug("getNativeRtpCapabilities()"), t = new RTCPeerConnection({
                                                iceServers: [],
                                                iceTransportPolicy: "all",
                                                bundlePolicy: "max-bundle",
                                                rtcpMuxPolicy: "require",
                                                sdpSemantics: "plan-b"
                                            }), e.prev = 2, e.next = 5, t.createOffer({
                                                offerToReceiveAudio: !0,
                                                offerToReceiveVideo: !0
                                            });
                                        case 5:
                                            r = e.sent;
                                            try {
                                                t.close()
                                            } catch (i) {}
                                            return n = b.parse(r.sdp), a = k.extractRtpCapabilities({
                                                sdpObject: n
                                            }), e.abrupt("return", a);
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(2);
                                            try {
                                                t.close()
                                            } catch (c) {}
                                            throw e.t0;
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [2, 12]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getNativeSctpCapabilities",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return O.debug("getNativeSctpCapabilities()"), e.abrupt("return", {
                                                numStreams: I
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "run",
                        value: function(e) {
                            var t = this,
                                r = e.direction,
                                n = e.iceParameters,
                                a = e.iceCandidates,
                                c = e.dtlsParameters,
                                o = e.sctpParameters,
                                s = e.iceServers,
                                u = e.iceTransportPolicy,
                                p = e.additionalSettings,
                                d = e.proprietaryConstraints,
                                l = e.extendedRtpCapabilities;
                            O.debug("run()"), this._direction = r, this._remoteSdp = new P.RemoteSdp({
                                iceParameters: n,
                                iceCandidates: a,
                                dtlsParameters: c,
                                sctpParameters: o,
                                planB: !0
                            }), this._sendingRtpParametersByKind = {
                                audio: w.getSendingRtpParameters("audio", l),
                                video: w.getSendingRtpParameters("video", l)
                            }, this._sendingRemoteRtpParametersByKind = {
                                audio: w.getSendingRemoteRtpParameters("audio", l),
                                video: w.getSendingRemoteRtpParameters("video", l)
                            }, this._pc = new RTCPeerConnection(i({
                                iceServers: s || [],
                                iceTransportPolicy: u || "all",
                                bundlePolicy: "max-bundle",
                                rtcpMuxPolicy: "require",
                                sdpSemantics: "plan-b"
                            }, p), d), this._pc.addEventListener("iceconnectionstatechange", function() {
                                switch (t._pc.iceConnectionState) {
                                    case "checking":
                                        t.emit("@connectionstatechange", "connecting");
                                        break;
                                    case "connected":
                                    case "completed":
                                        t.emit("@connectionstatechange", "connected");
                                        break;
                                    case "failed":
                                        t.emit("@connectionstatechange", "failed");
                                        break;
                                    case "disconnected":
                                        t.emit("@connectionstatechange", "disconnected");
                                        break;
                                    case "closed":
                                        t.emit("@connectionstatechange", "closed")
                                }
                            })
                        }
                    }, {
                        key: "updateIceServers",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            O.debug("updateIceServers()"), (r = this._pc.getConfiguration()).iceServers = t, this._pc.setConfiguration(r);
                                        case 4:
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
                        key: "restartIce",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (O.debug("restartIce()"), this._remoteSdp.updateIceParameters(t), this._transportReady) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if ("send" !== this._direction) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 7, this._pc.createOffer({
                                                iceRestart: !0
                                            });
                                        case 7:
                                            return r = e.sent, O.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", r), e.next = 11, this._pc.setLocalDescription(r);
                                        case 11:
                                            return n = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", n), e.next = 15, this._pc.setRemoteDescription(n);
                                        case 15:
                                            e.next = 27;
                                            break;
                                        case 17:
                                            return a = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", a), e.next = 21, this._pc.setRemoteDescription(a);
                                        case 21:
                                            return e.next = 23, this._pc.createAnswer();
                                        case 23:
                                            return i = e.sent, O.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", i), e.next = 27, this._pc.setLocalDescription(i);
                                        case 27:
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
                        key: "getTransportStats",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this._pc.getStats());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "send",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(r) {
                                var n, a, i, c, o, s, u, p, d, l, f, m, h, g;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = r.track, a = r.encodings, i = r.codecOptions, c = r.codec, this._assertSendDirection(), O.debug("send() [kind:%s, track.id:%s]", n.kind, n.id), c && O.warn("send() | codec selection is not available in %s handler", this.name), this._sendStream.addTrack(n), this._pc.addStream(this._sendStream), e.next = 8, this._pc.createOffer();
                                        case 8:
                                            if (o = e.sent, s = b.parse(o.sdp), (p = _.clone(this._sendingRtpParametersByKind[n.kind])).codecs = w.reduceCodecs(p.codecs), (d = _.clone(this._sendingRemoteRtpParametersByKind[n.kind])).codecs = w.reduceCodecs(d.codecs), this._transportReady) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 17, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: s
                                            });
                                        case 17:
                                            return "video" === n.kind && a && a.length > 1 && (O.debug("send() | enabling simulcast"), s = b.parse(o.sdp), u = s.media.find(function(e) {
                                                return "video" === e.type
                                            }), x.addLegacySimulcast({
                                                offerMediaObject: u,
                                                track: n,
                                                numStreams: a.length
                                            }), o = {
                                                type: "offer",
                                                sdp: b.write(s)
                                            }), O.debug("send() | calling pc.setLocalDescription() [offer:%o]", o), e.next = 21, this._pc.setLocalDescription(o);
                                        case 21:
                                            if (s = b.parse(this._pc.localDescription.sdp), u = s.media.find(function(e) {
                                                    return e.type === n.kind
                                                }), p.rtcp.cname = k.getCname({
                                                    offerMediaObject: u
                                                }), p.encodings = x.getRtpEncodings({
                                                    offerMediaObject: u,
                                                    track: n
                                                }), a)
                                                for (l = 0; l < p.encodings.length; ++l) a[l] && Object.assign(p.encodings[l], a[l]);
                                            if (p.encodings.length > 1 && ("video/vp8" === p.codecs[0].mimeType.toLowerCase() || "video/h264" === p.codecs[0].mimeType.toLowerCase())) {
                                                f = t(p.encodings);
                                                try {
                                                    for (f.s(); !(m = f.n()).done;) m.value.scalabilityMode = "S1T3"
                                                } catch (v) {
                                                    f.e(v)
                                                } finally {
                                                    f.f()
                                                }
                                            }
                                            return this._remoteSdp.send({
                                                offerMediaObject: u,
                                                offerRtpParameters: p,
                                                answerRtpParameters: d,
                                                codecOptions: i
                                            }), h = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("send() | calling pc.setRemoteDescription() [answer:%o]", h), e.next = 32, this._pc.setRemoteDescription(h);
                                        case 32:
                                            return g = String(this._nextSendLocalId), this._nextSendLocalId++, this._mapSendLocalIdTrack.set(g, n), e.abrupt("return", {
                                                localId: g,
                                                rtpParameters: p
                                            });
                                        case 36:
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
                        key: "stopSending",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._assertSendDirection(), O.debug("stopSending() [localId:%s]", t), r = this._mapSendLocalIdTrack.get(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("track not found");
                                        case 5:
                                            return this._mapSendLocalIdTrack.delete(t), this._sendStream.removeTrack(r), this._pc.addStream(this._sendStream), e.next = 10, this._pc.createOffer();
                                        case 10:
                                            return n = e.sent, O.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", n), e.prev = 12, e.next = 15, this._pc.setLocalDescription(n);
                                        case 15:
                                            e.next = 23;
                                            break;
                                        case 17:
                                            if (e.prev = 17, e.t0 = e.catch(12), 0 !== this._sendStream.getTracks().length) {
                                                e.next = 22;
                                                break
                                            }
                                            return O.warn("stopSending() | ignoring expected error due no sending tracks: %s", e.t0.toString()), e.abrupt("return");
                                        case 22:
                                            throw e.t0;
                                        case 23:
                                            if ("stable" !== this._pc.signalingState) {
                                                e.next = 25;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 25:
                                            return a = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", a), e.next = 29, this._pc.setRemoteDescription(a);
                                        case 29:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [12, 17]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "replaceTrack",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t, r) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not implemented");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setMaxSpatialLayer",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t, r) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not implemented");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setRtpEncodingParameters",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t, r) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not implemented");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getSenderStats",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not implemented");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "sendDataChannel",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, o, s, u, p, d, l, f, m;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.ordered, n = t.maxPacketLifeTime, a = t.maxRetransmits, i = t.label, c = t.protocol, o = t.priority, this._assertSendDirection(), s = {
                                                    negotiated: !0,
                                                    id: this._nextSendSctpStreamId,
                                                    ordered: r,
                                                    maxPacketLifeTime: n,
                                                    maxRetransmitTime: n,
                                                    maxRetransmits: a,
                                                    protocol: c,
                                                    priority: o
                                                }, O.debug("sendDataChannel() [options:%o]", s), u = this._pc.createDataChannel(i, s), this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % I.MIS, this._hasDataChannelMediaSection) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 9, this._pc.createOffer();
                                        case 9:
                                            if (p = e.sent, d = b.parse(p.sdp), l = d.media.find(function(e) {
                                                    return "application" === e.type
                                                }), this._transportReady) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 15, this._setupTransport({
                                                localDtlsRole: "server",
                                                localSdpObject: d
                                            });
                                        case 15:
                                            return O.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", p), e.next = 18, this._pc.setLocalDescription(p);
                                        case 18:
                                            return this._remoteSdp.sendSctpAssociation({
                                                offerMediaObject: l
                                            }), f = {
                                                type: "answer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", f), e.next = 23, this._pc.setRemoteDescription(f);
                                        case 23:
                                            this._hasDataChannelMediaSection = !0;
                                        case 24:
                                            return m = {
                                                streamId: s.id,
                                                ordered: s.ordered,
                                                maxPacketLifeTime: s.maxPacketLifeTime,
                                                maxRetransmits: s.maxRetransmits
                                            }, e.abrupt("return", {
                                                dataChannel: u,
                                                sctpStreamParameters: m
                                            });
                                        case 26:
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
                        key: "receive",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, o, s, u, p, d, l, f;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.trackId, n = t.kind, a = t.rtpParameters, this._assertRecvDirection(), O.debug("receive() [trackId:%s, kind:%s]", r, n), i = r, c = n, o = a.rtcp.cname, O.debug("receive() | forcing a random remote streamId to avoid well known bug in react-native-webrtc"), o += "-hack-".concat(_.generateRandomNumber()), this._remoteSdp.receive({
                                                mid: c,
                                                kind: n,
                                                offerRtpParameters: a,
                                                streamId: o,
                                                trackId: r
                                            }), s = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", s), e.next = 13, this._pc.setRemoteDescription(s);
                                        case 13:
                                            return e.next = 15, this._pc.createAnswer();
                                        case 15:
                                            if (u = e.sent, p = b.parse(u.sdp), d = p.media.find(function(e) {
                                                    return String(e.mid) === c
                                                }), k.applyCodecParameters({
                                                    offerRtpParameters: a,
                                                    answerMediaObject: d
                                                }), u = {
                                                    type: "answer",
                                                    sdp: b.write(p)
                                                }, this._transportReady) {
                                                e.next = 23;
                                                break
                                            }
                                            return e.next = 23, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: p
                                            });
                                        case 23:
                                            return O.debug("receive() | calling pc.setLocalDescription() [answer:%o]", u), e.next = 26, this._pc.setLocalDescription(u);
                                        case 26:
                                            if (l = this._pc.getRemoteStreams().find(function(e) {
                                                    return e.id === o
                                                }), f = l.getTrackById(i)) {
                                                e.next = 30;
                                                break
                                            }
                                            throw new Error("remote track not found");
                                        case 30:
                                            return this._mapRecvLocalIdInfo.set(i, {
                                                mid: c,
                                                rtpParameters: a
                                            }), e.abrupt("return", {
                                                localId: i,
                                                track: f
                                            });
                                        case 32:
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
                        key: "stopReceiving",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this._assertRecvDirection(), O.debug("stopReceiving() [localId:%s]", t), r = this._mapRecvLocalIdInfo.get(t) || {}, n = r.mid, a = r.rtpParameters, this._mapRecvLocalIdInfo.delete(t), this._remoteSdp.planBStopReceiving({
                                                mid: n,
                                                offerRtpParameters: a
                                            }), i = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", i), e.next = 9, this._pc.setRemoteDescription(i);
                                        case 9:
                                            return e.next = 11, this._pc.createAnswer();
                                        case 11:
                                            return c = e.sent, O.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", c), e.next = 15, this._pc.setLocalDescription(c);
                                        case 15:
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
                        key: "getReceiverStats",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            throw new R.UnsupportedError("not implemented");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "receiveDataChannel",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a, i, c, o, s, u, p, d, l, f;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.sctpStreamParameters, n = t.label, a = t.protocol, this._assertRecvDirection(), i = r.streamId, c = r.ordered, o = r.maxPacketLifeTime, s = r.maxRetransmits, u = {
                                                    negotiated: !0,
                                                    id: i,
                                                    ordered: c,
                                                    maxPacketLifeTime: o,
                                                    maxRetransmitTime: o,
                                                    maxRetransmits: s,
                                                    protocol: a
                                                }, O.debug("receiveDataChannel() [options:%o]", u), p = this._pc.createDataChannel(n, u), this._hasDataChannelMediaSection) {
                                                e.next = 23;
                                                break
                                            }
                                            return this._remoteSdp.receiveSctpAssociation({
                                                oldDataChannelSpec: !0
                                            }), d = {
                                                type: "offer",
                                                sdp: this._remoteSdp.getSdp()
                                            }, O.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", d), e.next = 12, this._pc.setRemoteDescription(d);
                                        case 12:
                                            return e.next = 14, this._pc.createAnswer();
                                        case 14:
                                            if (l = e.sent, this._transportReady) {
                                                e.next = 19;
                                                break
                                            }
                                            return f = b.parse(l.sdp), e.next = 19, this._setupTransport({
                                                localDtlsRole: "client",
                                                localSdpObject: f
                                            });
                                        case 19:
                                            return O.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", l), e.next = 22, this._pc.setLocalDescription(l);
                                        case 22:
                                            this._hasDataChannelMediaSection = !0;
                                        case 23:
                                            return e.abrupt("return", {
                                                dataChannel: p
                                            });
                                        case 24:
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
                        key: "_setupTransport",
                        value: function() {
                            var e = s(regeneratorRuntime.mark(function e(t) {
                                var r, n, a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.localDtlsRole, (n = t.localSdpObject) || (n = b.parse(this._pc.localDescription.sdp)), (a = k.extractDtlsParameters({
                                                sdpObject: n
                                            })).role = r, this._remoteSdp.updateDtlsRole("client" === r ? "server" : "client"), e.next = 7, this.safeEmitAsPromise("@connect", {
                                                dtlsParameters: a
                                            });
                                        case 7:
                                            this._transportReady = !0;
                                        case 8:
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
                        key: "_assertSendDirection",
                        value: function() {
                            if ("send" !== this._direction) throw new Error('method can just be called for handlers with "send" direction')
                        }
                    }, {
                        key: "_assertRecvDirection",
                        value: function() {
                            if ("recv" !== this._direction) throw new Error('method can just be called for handlers with "recv" direction')
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "ReactNative"
                        }
                    }], [{
                        key: "createFactory",
                        value: function() {
                            return function() {
                                return new n
                            }
                        }
                    }]), n
                }();
            exports.ReactNative = C;
        }, {
            "sdp-transform": "tbaU",
            "../Logger": "p5bA",
            "../errors": "p8GN",
            "../utils": "FOZT",
            "../ortc": "alA0",
            "./sdp/commonUtils": "FBSL",
            "./sdp/planBUtils": "nNFi",
            "./HandlerInterface": "iuhH",
            "./sdp/RemoteSdp": "aH4R"
        }],
        "tDuG": [function(require, module, exports) {
            "use strict";

            function e(e, r, t, a, i, n, o) {
                try {
                    var s = e[n](o),
                        c = s.value
                } catch (d) {
                    return void t(d)
                }
                s.done ? r(c) : Promise.resolve(c).then(a, i)
            }

            function r(r) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise(function(i, n) {
                        var o = r.apply(t, a);

                        function s(r) {
                            e(o, i, n, s, c, "next", r)
                        }

                        function c(r) {
                            e(o, i, n, s, c, "throw", r)
                        }
                        s(void 0)
                    })
                }
            }

            function t(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var a = r[t];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function i(e, r, t) {
                return r && a(e.prototype, r), t && a(e, t), e
            }

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var o = require("bowser"),
                s = require("./Logger"),
                c = require("./errors"),
                d = require("./ortc"),
                p = require("./Transport"),
                l = require("./handlers/Chrome74"),
                h = require("./handlers/Chrome70"),
                u = require("./handlers/Chrome67"),
                f = require("./handlers/Chrome55"),
                v = require("./handlers/Firefox60"),
                y = require("./handlers/Safari12"),
                m = require("./handlers/Safari11"),
                b = require("./handlers/Edge11"),
                C = require("./handlers/ReactNative"),
                g = new s.Logger("Device");

            function w() {
                if ("object" === ("undefined" == typeof navigator ? "undefined" : n(navigator)) && "ReactNative" === navigator.product) return "undefined" == typeof RTCPeerConnection ? void g.warn("this._detectDevice() | unsupported ReactNative without RTCPeerConnection") : (g.debug("this._detectDevice() | ReactNative handler chosen"), "ReactNative");
                if ("object" !== ("undefined" == typeof navigator ? "undefined" : n(navigator)) || "string" != typeof navigator.userAgent) g.warn("this._detectDevice() | unknown device");
                else {
                    var e = navigator.userAgent,
                        r = o.getParser(e),
                        t = r.getEngine();
                    if (r.satisfies({
                            chrome: ">=74",
                            chromium: ">=74"
                        })) return "Chrome74";
                    if (r.satisfies({
                            chrome: ">=70",
                            chromium: ">=70"
                        })) return "Chrome70";
                    if (r.satisfies({
                            chrome: ">=67",
                            chromium: ">=67"
                        })) return "Chrome67";
                    if (r.satisfies({
                            chrome: ">=55",
                            chromium: ">=55"
                        })) return "Chrome55";
                    if (r.satisfies({
                            firefox: ">=60"
                        })) return "Firefox60";
                    if (r.satisfies({
                            safari: ">=12.0"
                        }) && "undefined" != typeof RTCRtpTransceiver && RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection")) return "Safari12";
                    if (r.satisfies({
                            safari: ">=11"
                        })) return "Safari11";
                    if (r.satisfies({
                            "microsoft edge": ">=11"
                        }) && r.satisfies({
                            "microsoft edge": "<=18"
                        })) return "Edge11";
                    if (t.name && "blink" === t.name.toLowerCase()) {
                        var a = e.match(/(?:(?:Chrome|Chromium))[ \/](\w+)/i);
                        if (a) {
                            var i = Number(a[1]);
                            return i >= 74 ? "Chrome74" : i >= 70 ? "Chrome70" : i >= 67 ? "Chrome67" : "Chrome55"
                        }
                        return "Chrome74"
                    }
                    g.warn("this._detectDevice() | browser not supported [name:%s, version:%s]", r.getBrowserName(), r.getBrowserVersion())
                }
            }
            exports.detectDevice = w;
            var _ = function() {
                function e() {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = r.handlerName,
                        i = r.handlerFactory,
                        n = r.Handler;
                    if (t(this, e), this._loaded = !1, g.debug("constructor()"), n) {
                        if (g.warn("constructor() | Handler option is DEPRECATED, use handlerName or handlerFactory instead"), "string" != typeof n) throw new TypeError("non string Handler option no longer supported, use handlerFactory instead");
                        a = n
                    }
                    if (a && i) throw new TypeError("just one of handlerName or handlerInterface can be given");
                    if (i) this._handlerFactory = i;
                    else {
                        if (a) g.debug("constructor() | handler given: %s", a);
                        else {
                            if (!(a = w())) throw new c.UnsupportedError("device not supported");
                            g.debug("constructor() | detected handler: %s", a)
                        }
                        switch (a) {
                            case "Chrome74":
                                this._handlerFactory = l.Chrome74.createFactory();
                                break;
                            case "Chrome70":
                                this._handlerFactory = h.Chrome70.createFactory();
                                break;
                            case "Chrome67":
                                this._handlerFactory = u.Chrome67.createFactory();
                                break;
                            case "Chrome55":
                                this._handlerFactory = f.Chrome55.createFactory();
                                break;
                            case "Firefox60":
                                this._handlerFactory = v.Firefox60.createFactory();
                                break;
                            case "Safari12":
                                this._handlerFactory = y.Safari12.createFactory();
                                break;
                            case "Safari11":
                                this._handlerFactory = m.Safari11.createFactory();
                                break;
                            case "Edge11":
                                this._handlerFactory = b.Edge11.createFactory();
                                break;
                            case "ReactNative":
                                this._handlerFactory = C.ReactNative.createFactory();
                                break;
                            default:
                                throw new TypeError('unknown handlerName "'.concat(a, '"'))
                        }
                    }
                    var o = this._handlerFactory();
                    this._handlerName = o.name, o.close(), this._extendedRtpCapabilities = void 0, this._recvRtpCapabilities = void 0, this._canProduceByKind = {
                        audio: !1,
                        video: !1
                    }, this._sctpCapabilities = void 0
                }
                return i(e, [{
                    key: "load",
                    value: function() {
                        var e = r(regeneratorRuntime.mark(function e(r) {
                            var t, a, i;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = r.routerRtpCapabilities, g.debug("load() [routerRtpCapabilities:%o]", t), e.prev = 2, !this._loaded) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new c.InvalidStateError("already loaded");
                                    case 5:
                                        return d.validateRtpCapabilities(t), a = this._handlerFactory(), e.next = 9, a.getNativeRtpCapabilities();
                                    case 9:
                                        return i = e.sent, g.debug("load() | got native RTP capabilities:%o", i), d.validateRtpCapabilities(i), this._extendedRtpCapabilities = d.getExtendedRtpCapabilities(i, t), g.debug("load() | got extended RTP capabilities:%o", this._extendedRtpCapabilities), this._canProduceByKind.audio = d.canSend("audio", this._extendedRtpCapabilities), this._canProduceByKind.video = d.canSend("video", this._extendedRtpCapabilities), this._recvRtpCapabilities = d.getRecvRtpCapabilities(this._extendedRtpCapabilities), d.validateRtpCapabilities(this._recvRtpCapabilities), g.debug("load() | got receiving RTP capabilities:%o", this._recvRtpCapabilities), e.next = 21, a.getNativeSctpCapabilities();
                                    case 21:
                                        this._sctpCapabilities = e.sent, g.debug("load() | got native SCTP capabilities:%o", this._sctpCapabilities), d.validateSctpCapabilities(this._sctpCapabilities), g.debug("load() succeeded"), this._loaded = !0, a.close(), e.next = 33;
                                        break;
                                    case 29:
                                        throw e.prev = 29, e.t0 = e.catch(2), a && a.close(), e.t0;
                                    case 33:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this, [
                                [2, 29]
                            ])
                        }));
                        return function(r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "canProduce",
                    value: function(e) {
                        if (!this._loaded) throw new c.InvalidStateError("not loaded");
                        if ("audio" !== e && "video" !== e) throw new TypeError('invalid kind "'.concat(e, '"'));
                        return this._canProduceByKind[e]
                    }
                }, {
                    key: "createSendTransport",
                    value: function(e) {
                        var r = e.id,
                            t = e.iceParameters,
                            a = e.iceCandidates,
                            i = e.dtlsParameters,
                            n = e.sctpParameters,
                            o = e.iceServers,
                            s = e.iceTransportPolicy,
                            c = e.additionalSettings,
                            d = e.proprietaryConstraints,
                            p = e.appData,
                            l = void 0 === p ? {} : p;
                        return g.debug("createSendTransport()"), this._createTransport({
                            direction: "send",
                            id: r,
                            iceParameters: t,
                            iceCandidates: a,
                            dtlsParameters: i,
                            sctpParameters: n,
                            iceServers: o,
                            iceTransportPolicy: s,
                            additionalSettings: c,
                            proprietaryConstraints: d,
                            appData: l
                        })
                    }
                }, {
                    key: "createRecvTransport",
                    value: function(e) {
                        var r = e.id,
                            t = e.iceParameters,
                            a = e.iceCandidates,
                            i = e.dtlsParameters,
                            n = e.sctpParameters,
                            o = e.iceServers,
                            s = e.iceTransportPolicy,
                            c = e.additionalSettings,
                            d = e.proprietaryConstraints,
                            p = e.appData,
                            l = void 0 === p ? {} : p;
                        return g.debug("createRecvTransport()"), this._createTransport({
                            direction: "recv",
                            id: r,
                            iceParameters: t,
                            iceCandidates: a,
                            dtlsParameters: i,
                            sctpParameters: n,
                            iceServers: o,
                            iceTransportPolicy: s,
                            additionalSettings: c,
                            proprietaryConstraints: d,
                            appData: l
                        })
                    }
                }, {
                    key: "_createTransport",
                    value: function(e) {
                        var r = e.direction,
                            t = e.id,
                            a = e.iceParameters,
                            i = e.iceCandidates,
                            o = e.dtlsParameters,
                            s = e.sctpParameters,
                            d = e.iceServers,
                            l = e.iceTransportPolicy,
                            h = e.additionalSettings,
                            u = e.proprietaryConstraints,
                            f = e.appData,
                            v = void 0 === f ? {} : f;
                        if (!this._loaded) throw new c.InvalidStateError("not loaded");
                        if ("string" != typeof t) throw new TypeError("missing id");
                        if ("object" !== n(a)) throw new TypeError("missing iceParameters");
                        if (!Array.isArray(i)) throw new TypeError("missing iceCandidates");
                        if ("object" !== n(o)) throw new TypeError("missing dtlsParameters");
                        if (s && "object" !== n(s)) throw new TypeError("wrong sctpParameters");
                        if (v && "object" !== n(v)) throw new TypeError("if given, appData must be an object");
                        return new p.Transport({
                            direction: r,
                            id: t,
                            iceParameters: a,
                            iceCandidates: i,
                            dtlsParameters: o,
                            sctpParameters: s,
                            iceServers: d,
                            iceTransportPolicy: l,
                            additionalSettings: h,
                            proprietaryConstraints: u,
                            appData: v,
                            handlerFactory: this._handlerFactory,
                            extendedRtpCapabilities: this._extendedRtpCapabilities,
                            canProduceByKind: this._canProduceByKind
                        })
                    }
                }, {
                    key: "handlerName",
                    get: function() {
                        return this._handlerName
                    }
                }, {
                    key: "loaded",
                    get: function() {
                        return this._loaded
                    }
                }, {
                    key: "rtpCapabilities",
                    get: function() {
                        if (!this._loaded) throw new c.InvalidStateError("not loaded");
                        return this._recvRtpCapabilities
                    }
                }, {
                    key: "sctpCapabilities",
                    get: function() {
                        if (!this._loaded) throw new c.InvalidStateError("not loaded");
                        return this._sctpCapabilities
                    }
                }]), e
            }();
            exports.Device = _;
        }, {
            "bowser": "eDg8",
            "./Logger": "p5bA",
            "./errors": "p8GN",
            "./ortc": "alA0",
            "./Transport": "bVaN",
            "./handlers/Chrome74": "vpFN",
            "./handlers/Chrome70": "wNnR",
            "./handlers/Chrome67": "gY4Q",
            "./handlers/Chrome55": "PqYG",
            "./handlers/Firefox60": "sZJw",
            "./handlers/Safari12": "qfh9",
            "./handlers/Safari11": "LRIx",
            "./handlers/Edge11": "BDvo",
            "./handlers/ReactNative": "fsTO"
        }],
        "eFF2": [function(require, module, exports) {
            "use strict";

            function r(r) {
                for (var e in r) exports.hasOwnProperty(e) || (exports[e] = r[e])
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), r(require("./Device")), r(require("./Transport")), r(require("./Producer")), r(require("./Consumer")), r(require("./DataProducer")), r(require("./DataConsumer")), r(require("./handlers/HandlerInterface")), r(require("./errors"));
        }, {
            "./Device": "tDuG",
            "./Transport": "bVaN",
            "./Producer": "oKFT",
            "./Consumer": "nZfe",
            "./DataProducer": "lgs9",
            "./DataConsumer": "ui0n",
            "./handlers/HandlerInterface": "iuhH",
            "./errors": "p8GN"
        }],
        "Focm": [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var e = require("./Device");
            exports.Device = e.Device, exports.detectDevice = e.detectDevice;
            var r = require("./types");
            exports.types = r, exports.version = "3.6.9";
            var t = require("./scalabilityModes");
            exports.parseScalabilityMode = t.parse;
        }, {
            "./Device": "tDuG",
            "./types": "eFF2",
            "./scalabilityModes": "QdG4"
        }]
    }, {}, ["Focm"], null)
//# sourceMappingURL=/index.js.map
export default module.exports;