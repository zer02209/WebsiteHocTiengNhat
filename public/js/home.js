parcelRequire = (function (e, r, n, t) {
  function i(n, t) {
    function o(e) {
      return i(o.resolve(e));
    }
    function c(r) {
      return e[n][1][r] || r;
    }
    if (!r[n]) {
      if (!e[n]) {
        var l = "function" == typeof parcelRequire && parcelRequire;
        if (!t && l) return l(n, !0);
        if (u) return u(n, !0);
        if (f && "string" == typeof n) return f(n);
        var p = new Error("Cannot find module '" + n + "'");
        throw ((p.code = "MODULE_NOT_FOUND"), p);
      }
      o.resolve = c;
      var a = (r[n] = new i.Module(n));
      e[n][0].call(a.exports, o, a, a.exports, this);
    }
    return r[n].exports;
  }
  function o(e) {
    (this.id = e), (this.bundle = i), (this.exports = {});
  }
  var u = "function" == typeof parcelRequire && parcelRequire,
    f = "function" == typeof require && require;
  (i.isParcelRequire = !0),
    (i.Module = o),
    (i.modules = e),
    (i.cache = r),
    (i.parent = u);
  for (var c = 0; c < n.length; c++) i(n[c]);
  if (n.length) {
    var l = i(n[n.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : t && (this[t] = l);
  }
  return i;
})(
  {
    404: [
      function (require, module, exports) {
        "use strict";
        function e(e, t, n, i) {
          var o,
            c = e,
            u = c.getContext("2d"),
            r = new Array(),
            a = new Array(),
            h = new Array(),
            s = new Array(),
            d = new Array(),
            l = new Array();
          function g(e, t, n) {
            "pad" == c.id
              ? (r.push(e), a.push(t), h.push(n))
              : "pad2" == c.id && (s.push(e), d.push(t), l.push(n));
          }
          function p() {
            if (
              (u.clearRect(0, 0, u.canvas.width, u.canvas.height),
              (u.strokeStyle = "blue"),
              (u.lineJoin = "round"),
              (u.lineWidth = 10),
              "pad" == c.id)
            )
              for (var e = 0; e < r.length; e++)
                u.beginPath(),
                  h[e] && e
                    ? u.moveTo(r[e - 1], a[e - 1])
                    : u.moveTo(r[e] - 1, a[e]),
                  u.lineTo(r[e], a[e]),
                  u.closePath(),
                  u.stroke();
            else if ("pad2" == c.id)
              for (e = 0; e < s.length; e++)
                u.beginPath(),
                  l[e] && e
                    ? u.moveTo(s[e - 1], d[e - 1])
                    : u.moveTo(s[e] - 1, d[e]),
                  u.lineTo(s[e], d[e]),
                  u.closePath(),
                  u.stroke();
          }
          (c.width = t),
            (c.height = n),
            $(".clear-canvas").on("click", function (e) {
              var t = $(this).parents(".mdui-row").eq(0).find("canvas")[0];
              t.getContext("2d").clearRect(0, 0, c.width, c.height),
                "pad" == t.id
                  ? ((r = new Array()), (a = new Array()), (h = new Array()))
                  : "pad2" == t.id &&
                    ((s = new Array()), (d = new Array()), (l = new Array()));
            }),
            (c.onmousedown = function (e) {
              e.pageX,
                this.getBoundingClientRect().x,
                e.y,
                this.getBoundingClientRect().y;
              (o = !0),
                g(
                  e.pageX - this.getBoundingClientRect().x,
                  e.y - this.getBoundingClientRect().y
                );
            }),
            (c.onmousemove = function (e) {
              o &&
                (g(
                  e.pageX - this.getBoundingClientRect().x,
                  e.y - this.getBoundingClientRect().y,
                  !0
                ),
                p());
            }),
            (c.onmouseup = function (e) {
              o = !1;
            }),
            (c.ontouchstart = function (e) {
              e.preventDefault();
              e.touches[0].clientX,
                this.getBoundingClientRect().x,
                e.touches[0].clientY,
                this.getBoundingClientRect().y;
              (o = !0),
                g(
                  e.touches[0].clientX - this.getBoundingClientRect().x,
                  e.touches[0].clientY - this.getBoundingClientRect().y
                );
            }),
            (c.ontouchmove = function (e) {
              e.preventDefault(),
                o &&
                  (g(
                    e.touches[0].clientX - this.getBoundingClientRect().x,
                    e.touches[0].clientY - this.getBoundingClientRect().y,
                    !0
                  ),
                  p());
            }),
            (c.ontouchhend = function (e) {
              e.preventDefault(), (o = !1);
            });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    372: [
      function (require, module, exports) {
        !(function () {
          var r = require("./initCanvas").default;
          new Vue({
            el: "#home-page",
            data: {
              wordData: {
                hira: "",
                kata: "",
                audio: "",
                hiraStrokeOrder: "",
                kataStrokeOrder: "",
                wordSource: "",
                kataWordSource: "",
              },
            },
            methods: {
              playAudio: function (r, e) {
                e ? new Audio(e).play() : new Audio(this.wordData.audio).play();
              },
              search: function (r) {
                $(r.currentTarget).val().trim() && console.log("search");
              },
              border: function (r) {
                var e = String(r);
                function a(r) {
                  return (
                    -1 != r.indexOf(0) ||
                    -1 != r.indexOf(1) ||
                    -1 != r.indexOf(2) ||
                    -1 != r.indexOf(3) ||
                    -1 != r.indexOf(4)
                  );
                }
                return Number(r) < 10
                  ? a(e)
                    ? "border"
                    : "border2"
                  : a(e.slice(1))
                  ? "border"
                  : "border2";
              },
              showDialog: function (e, a, o, t, d, i) {
                (this.wordData = {
                  hira: a,
                  kata: o,
                  audio: t,
                  hiraStrokeOrder: d,
                  kataStrokeOrder: i,
                  
                }),
                  this.$nextTick(function (e) {
                    r(
                      $("#pad")[0],
                      $("#pad")[0].offsetWidth,
                      $("#pad")[0].offsetHeight,
                      e
                    ),
                      r(
                        $("#pad2")[0],
                        $("#pad2")[0].offsetWidth,
                        $("#pad2")[0].offsetHeight,
                        e
                      );
                  });
              },
            },
          });
        })();
      },
      { "./initCanvas": 404 },
    ],
  },
  {},
  [372],
  null
);
