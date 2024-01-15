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
    403: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = Array.prototype.shuffle =
            function () {
              for (var t, e, r = this.length; r; )
                (e = Math.floor(Math.random() * r--)),
                  (t = this[r]),
                  (this[r] = this[e]),
                  (this[e] = t);
              return this;
            });
      },
      {},
    ],
    370: [
      function (require, module, exports) {
        !(function () {
          function r(r, a, o) {
            var i,
              t,
              n = r.slice(0),
              m = r.length,
              d = m - o;
            r: for (
              ;
              m-- > d &&
              ((t = Math.floor((m + 1) * Math.random())), (i = n[t]) !== a);

            )
              (n[t] = n[m]), (n[m] = i);
            return n.slice(d);
          }
          require("./arrayShuffle");
          var a = [
              "あ",
              "い",
              "う",
              "え",
              "お",
              "か",
              "き",
              "く",
              "け",
              "こ",
              "さ",
              "し",
              "す",
              "せ",
              "そ",
              "た",
              "ち",
              "つ",
              "て",
              "と",
              "な",
              "に",
              "ぬ",
              "ね",
              "の",
              "は",
              "ひ",
              "ふ",
              "へ",
              "ほ",
              "ま",
              "み",
              "む",
              "め",
              "も",
              "や",
              "ゆ",
              "よ",
              "ら",
              "り",
              "る",
              "れ",
              "ろ",
              "わ",
              "を",
              "ん",
            ],
            o = [
              "ア",
              "イ",
              "ウ",
              "エ",
              "オ",
              "カ",
              "キ",
              "ク",
              "ケ",
              "コ",
              "サ",
              "シ",
              "ス",
              "セ",
              "ソ",
              "タ",
              "チ",
              "ツ",
              "テ",
              "ト",
              "ナ",
              "ニ",
              "ヌ",
              "ネ",
              "ノ",
              "ハ",
              "ヒ",
              "フ",
              "ヘ",
              "ホ",
              "マ",
              "ミ",
              "ム",
              "メ",
              "モ",
              "ヤ",
              "ユ",
              "ヨ",
              "ラ",
              "リ",
              "ル",
              "レ",
              "ロ",
              "ワ",
              "ヲ",
              "ン",
            ],
            i = new Vue({
              el: "#pronunciation-page",
              data: {
                hiraWord: Array.from(a),
                kataWord: Array.from(o),
                audioArr: Array.from([
                  "a.mp3",
                  "i.mp3",
                  "u.mp3",
                  "e.mp3",
                  "o.mp3",
                  "ka.mp3",
                  "ki.mp3",
                  "ku.mp3",
                  "ke.mp3",
                  "ko.mp3",
                  "sa.mp3",
                  "si.mp3",
                  "su.mp3",
                  "se.mp3",
                  "so.mp3",
                  "ta.mp3",
                  "ti.mp3",
                  "tu.mp3",
                  "te.mp3",
                  "to.mp3",
                  "na.mp3",
                  "ni.mp3",
                  "nu.mp3",
                  "ne.mp3",
                  "no.mp3",
                  "ha.mp3",
                  "hi.mp3",
                  "hu.mp3",
                  "he.mp3",
                  "ho.mp3",
                  "ma.mp3",
                  "mi.mp3",
                  "mu.mp3",
                  "me.mp3",
                  "mo.mp3",
                  "ya.mp3",
                  "yu.mp3",
                  "yo.mp3",
                  "ra.mp3",
                  "ri.mp3",
                  "ru.mp3",
                  "re.mp3",
                  "ro.mp3",
                  "wa.mp3",
                  "wo.mp3",
                  "n.mp3",
                ]),
                fraction: 0,
                hira: !1,
                kata: !1,
                random: 0,
                pronunciation: "",
                randomHira: [],
                randomKata: [],
              },
              methods: {
                reset: function () {
                  console.log("reset"),
                    (this.random = ~~(Math.random() * this.audioArr.length)),
                    this.getAudio(),
                    this.randomHiraWord(),
                    this.randomKataWord(),
                    (this.hira = !1),
                    (this.kata = !1),
                    $(".card").removeClass(
                      "mdui-color-red-a400 no-drop mdui-color-green"
                    );
                },
                refresh: function () {
                  (this.hiraWord = Array.from(a)),
                    (this.kataWord = Array.from(o)),
                    this.reset(),
                    (this.fraction = 0);
                },
                verification: function (r, a, o) {
                  console.log("verification");
                  var t = ("hira" == o ? this.hiraWord : this.kataWord).indexOf(
                    r
                  );
                  t == this.random
                    ? ($(a.currentTarget)
                        .parents(".bb")
                        .find(".card")
                        .addClass("no-drop"),
                      $(a.currentTarget)
                        .parents(".bb")
                        .find(".card.mdui-color-red-a400")
                        .removeClass("mdui-color-red-a400"),
                      $(a.currentTarget).addClass("no-drop mdui-color-green"),
                      "hira" == o
                        ? (this.hiraWord.splice(t, 1),
                          (this.hira = !0),
                          this.fraction++)
                        : "kata" == o &&
                          (this.kataWord.splice(t, 1),
                          (this.kata = !0),
                          this.fraction++))
                    : ($(a.currentTarget).addClass(
                        "no-drop mdui-color-red-a400"
                      ),
                      this.fraction--),
                    this.hira &&
                      this.kata &&
                      setTimeout(function () {
                        i.reset(), i.audioArr.splice(t, 1);
                      }, 500);
                },
                playAudio: function (r) {
                  console.log("playAudio"), $("#audio")[0].play();
                },
                getAudio: function () {
                  console.log("getAudio");
                  var r = "./assets/audio/" + this.audioArr[this.random];
                  return (
                    (this.pronunciation = this.audioArr[this.random].replace(
                      /\.mp3/,
                      ""
                    )),
                    r
                  );
                },
                randomHiraWord: function () {
                  console.log("randomHiraWord");
                  var a = this.hiraWord[this.random],
                    o = r(this.hiraWord, a, 3);
                  return (
                    o.splice(~~(4 * Math.random()), 0, a),
                    (this.randomHira = o),
                    o
                  );
                },
                randomKataWord: function () {
                  console.log(this.kataWord[this.random]),
                    console.log("randomKataWord");
                  var a = this.kataWord[this.random],
                    o = r(this.kataWord, a, 3);
                  return (
                    o.splice(~~(4 * Math.random()), 0, a),
                    (this.randomKata = o),
                    o
                  );
                },
              },
              mounted: function () {
                (this.random = ~~(Math.random() * this.audioArr.length)),
                  this.randomKataWord(),
                  this.randomHiraWord();
              },
            });
        })();
      },
      { "./arrayShuffle": 403 },
    ],
  },
  {},
  [370],
  null
);
