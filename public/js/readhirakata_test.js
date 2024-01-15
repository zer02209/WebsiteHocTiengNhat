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
    368: [
      function (require, module, exports) {
        !(function () {
          require("./arrayShuffle");
          var r = [
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
            ],
            i = [
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
            ];
          new Vue({
            el: "#syllabaryPronunciation-page",
            data: {
              current: "",
              currentType: "Katakana",
              audioArr: Array.from(o),
              hiraWord: Array.from(r),
              fraction: 0,
              random: 0,
              pronunciation: "",
              randomAudio: [],
            },
            methods: {
              toggleCurrent: function () {
                console.log(this.current),
                  this.current == this.hiraWord[this.random]
                    ? ((this.current = i[this.random]),
                      (this.currentType = "Hiragana"))
                    : this.current == i[this.random] &&
                      ((this.current = this.hiraWord[this.random]),
                      (this.currentType = "Katakana"));
              },
              reset: function () {
                console.log("reset"),
                  (this.random = ~~(Math.random() * this.audioArr.length)),
                  (this.current = this.hiraWord[this.random]),
                  this.getAudio(),
                  this.randomAudioW(),
                  $(".card").removeClass(
                    "mdui-color-red-a400 no-drop mdui-color-green"
                  );
              },
              refresh: function () {
                (this.audioArr = Array.from(o)),
                  (this.hiraWord = Array.from(r)),
                  this.reset(),
                  (this.fraction = 0);
              },
              verification: function (r, o, i) {
                console.log("verification");
                var t = this.audioArr.indexOf(r);
                t == this.random
                  ? ($(o.currentTarget)
                      .parents(".bb")
                      .find(".card")
                      .addClass("no-drop"),
                    $(o.currentTarget)
                      .parents(".bb")
                      .find(".card.mdui-color-red-a400")
                      .removeClass("mdui-color-red-a400"),
                    $(o.currentTarget).addClass("no-drop mdui-color-green"),
                    this.audioArr.splice(t, 1),
                    this.hiraWord.splice(t, 1),
                    this.fraction++,
                    setTimeout(this.reset, 500))
                  : ($(o.currentTarget).addClass("no-drop mdui-color-red-a400"),
                    this.fraction--);
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
              randomAudioW: function () {
                console.log("randomAudioW");
                var r = this.audioArr[this.random];
                console.log(r);
                var o = (function (r, o, i) {
                  var t,
                    a,
                    n = r.slice(0),
                    e = r.length,
                    m = e - i;
                  for (
                    ;
                    e-- > m &&
                    ((a = Math.floor((e + 1) * Math.random())),
                    (t = n[a]) !== o);

                  )
                    (n[a] = n[e]), (n[e] = t);
                  return n.slice(m);
                })(this.audioArr, r, 3);
                return (
                  o.splice(~~(4 * Math.random()), 0, r),
                  (this.randomAudio = o),
                  o
                );
              },
            },
            mounted: function () {
              (this.random = ~~(Math.random() * this.audioArr.length)),
                (this.current = this.hiraWord[this.random]),
                this.randomAudioW(),
                this.getAudio();
            },
          });
        })();
      },
      { "./arrayShuffle": 403},
    ],
  },
  {},
  [368],
  null
);
