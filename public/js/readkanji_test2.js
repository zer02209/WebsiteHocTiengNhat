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
    379: [
      function (require, module, exports) {
        !(function () {
          require("./arrayShuffle");
          var r = [
            "ニチ、ジツ",
            "イチ",
            "コク",
            "ジン、ニン",
            "ネン",
            "ダイ、タイ",
            "ジュウ",
            "ニ、 ジ",
            "ホン",
            "チュウ",
            "チョウ",
            "シュツ、 スイ",
            "サン",
            "ジ",
            "コウ、 ギョウ、アン",
            "ケン",
            "ゲツ、 ガツ",
            "ブン、 フン、 ブ",
            "ゴ、 コウ",
            "ゼン",
            "セイ、 ショウ",
            "ゴ",
            "カン、 ケン",
            "ジョウ、 ショウ、 シャン",
            "トウ",
            "シ",
            "コン、 キン",
            "キン、 コン、 ゴン",
            "キュウ、 ク",
            "ニュウ",
            "ガク",
            "コウ",
            "エン",
            "シ、 ス、 ツ",
            "ガイ、 ゲ",
            "ハチ",
            "ロク",
            "カ、 ゲ",
            "ライ、 タイ",
            "キ、 ケ",
            "ショウ",
            "シチ",
            "サン、 セン",
            "ワ",
            "ジョ",
            "ホク",
            "ゴ",
            "ヒャク、 ビャク",
            "ショ",
            "セン",
            "メイ、 ミョウ",
            "セン",
            "セン",
            "スイ",
            "ハン",
            "ダン、 ナン",
            "セイ、 サイ",
            "デン",
            "コウ",
            "ゴ",
            "ド、 ト",
            "ボク、 モク",
            "ブン、 モン",
            "ショク、 ジキ",
            "シャ",
            "カ",
            "ナン、 ナ",
            "マン、 バン",
            "マイ",
            "ハク、 ビャク",
            "テン",
            "ボ",
            "カ",
            "ウ、 ユウ",
            "ドク、 トク、トウ",
            "ユウ",
            "サ、 シャ",
            "キュウ",
            "フ",
            "ウ",
          ];
          var o = [
            "日",
            "一",
            "国",
            "人",
            "年",
            "大",
            "十",
            "二",
            "本",
            "中",
            "長",
            "出",
            "三",
            "時",
            "行",
            "見",
            "月",
            "分",
            "後",
            "前",
            "生",
            "五",
            "間",
            "上",
            "東",
            "四",
            "今",
            "金",
            "九",
            "入",
            "学",
            "高",
            "円",
            "子",
            "外",
            "八",
            "六",
            "下",
            "来",
            "気",
            "小",
            "七",
            "山",
            "話",
            "女",
            "北",
            "午",
            "百",
            "書",
            "先",
            "名",
            "川",
            "千",
            "水",
            "半",
            "男",
            "西",
            "電",
            "校",
            "語",
            "土",
            "木",
            "聞",
            "食",
            "車",
            "何",
            "南",
            "万",
            "毎",
            "白",
            "天",
            "母",
            "火",
            "右",
            "読",
            "友",
            "左",
            "休",
            "父",
            "雨",
          ];
          var i = [
            "ひ, -び,-か",
            "ひと(つ)",
            "くに",
            "ひと",
            "とし",
            "おお(きい)",
            "とお、 と",
            "ふた(つ)",
            "もと",
            "なか、 うち、 あた(る)",
            "なが(い)、 おさ",
            "で(る)、 だ(す)、 い(でる)",
            "み(つ)",
            "とき、 -どき",
            "い(く)、 ゆ(く)、 おこな(う)",
            "み(る)、 み(せる)",
            "つき",
            "わ(ける)",
            "のち、 うし(ろ)、 あと",
            "まえ",
            "い(きる)、 う(む)、 お(う)、 は(える)、 なま",
            "いつ(つ)",
            "あいだ、 ま、 あい",
            "うえ、 うわ-、 かみ、 あ(げる)、 のぼ(る)、 たてまつ(る)",
            "ひがし",
            "よ(つ)、 よん",
            "いま",
            "かね、 かな-、-がね",
            "ここの(つ)",
            "い(る)、はい(る)",
            "まな(ぶ)",
            "たか(い)",
            "まる(い)",
            "こ、 ね",
            "そと、 ほか、 はず(す)、 と-",
            "や(つ)、 よう",
            "む(つ)、 むい",
            "した、 しも、 もと、 さ(げる)、 くだ(る)、 お(ろす)",
            "く.る、きた.る、 き、 こ",
            "いき",
            "ちい(さい)、 こ-、 お-、 さ-",
            "なな(つ)、 なの",
            "やま",
            "はな(す)、 はなし",
            "おんな、 め",
            "きた",
            "うま",
            "もも",
            "か(く)",
            "さき、 ま(ず)",
            "な",
            "かわ",
            "ち",
            "みず",
            "なか(ば)",
            "おとこ、 お",
            "にし",
            "",
            "",
            "かた(る)",
            "つち",
            "き、 こ-",
            "き(く)",
            "く(う)、 た(べる)、 は(む)",
            "くるま",
            "なに、 なん",
            "みなみ",
            "",
            "ごと(に)",
            "しろ(い)",
            "あまつ",
            "はは、 かあ",
            "ひ、 -び、 ほ-",
            "みぎ",
            "よ(む)",
            "とも",
            "ひだり",
            "やす(む)",
            "ちち、 とう",
            "あめ、 あま",
        ];

          new Vue({
            el: "#kanjitest2-page",
            data: {
              current: "",
              currentType: "Kunyomi",
              kanjiWord: Array.from(o),
              onkun: Array.from(r),
              fraction: 0,
              random: 0,
              randomkanji: [],
            },
            methods: {
                toggleCurrent: function () {
                    console.log(this.current),
                      this.current == this.onkun[this.random]
                        ? ((this.current = i[this.random]),
                          (this.currentType = "Onyomi"))
                        : this.current == i[this.random] &&
                          ((this.current = this.onkun[this.random]),
                          (this.currentType = "Kunyomi"));
                },
              reset: function () {
                console.log("reset"),
                  (this.random = ~~(Math.random() * this.kanjiWord.length)),
                  (this.current = this.onkun[this.random]),
                  this.randomkanjiW(),
                  $(".card").removeClass(
                    "mdui-color-red-a400 no-drop mdui-color-green"
                  );
              },
              refresh: function () {
                (this.kanjiWord = Array.from(o)),
                  (this.onkun = Array.from(r)),
                  this.reset(),
                  (this.fraction = 0);
              },
              verification: function (r, o, i) {
                console.log("verification");
                var t = this.kanjiWord.indexOf(r);
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
                    this.kanjiWord.splice(t, 1),
                    this.onkun.splice(t, 1),
                    this.fraction++,
                    setTimeout(this.reset, 500))
                  : ($(o.currentTarget).addClass("no-drop mdui-color-red-a400"),
                    this.fraction--);
              },
              randomkanjiW: function () {
                console.log("randomkanjiW");
                var r = this.kanjiWord[this.random];
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
                })(this.kanjiWord, r, 3);
                return (
                  o.splice(~~(4 * Math.random()), 0, r),
                  (this.randomkanji = o),
                  o
                );
              },
            },
            mounted: function () {
              this.random = ~~(Math.random() * this.kanjiWord.length);
              this.current = this.onkun[this.random];
              this.randomkanjiW();
            },
          });
        })();
      },
      { "./arrayShuffle": 403 },
    ],
  },
  {},
  [379],
  null
);
