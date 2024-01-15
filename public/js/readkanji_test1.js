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
      371: [
        function (require, module, exports) {
          !(function () {
            require("./arrayShuffle");
            var r = [
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
            var o = [
              "Ngày, Mặt trời, Nhật Bản, Số đếm cho ngày",
              "Một",
              "Đất nước, Quốc gia",
              "Con người",
              "Năm(5), Số đếm cho năm",
              "Rộng, Lớn",
              "Mười(10)",
              "Hai(2)",
              "Sách, Hiện tại, Đúng, Số đếm cho những thứ hình trụ dài",
              "Trong, Bên trong, Giữa, Trung bình, Trung tâm",
              "Dài, Lãnh đạo, Cấp trên, Cao cấp",
              "Thoát ra, Rời khỏi, Đi ra",
              "Ba(3)",
              "Thời gian, Giờ",
              "Đi, Hành trình, Thực hiện, Đường kẻ, Hàng",
              "Thấy, Hy vọng, Cơ hội, Ý tưởng, Ý kiến, Nhìn vào, Có thể nhìn thấy",
              "Tháng, Mặt trăng",
              "Một phần, Từng phút, Hiểu được",
              "Đằng sau, Sau khi",
              "Phía trước, Trước khi",
              "Cuộc sống, Chân thật, Sinh",
              "Năm(5)",
              "Khoảng thời gian, Khoảng không gian",
              "Bên trên, Phía trên",
              "Phía Đông",
              "Bốn(4)",
              "Bây giờ, Hiện tại",
              "Vàng",
              "Chín(9)",
              "Đi vào, Chèn vào",
              "Học, Học hỏi, Khoa học",
              "Cao, Độ cao, Đắt",
              "Vòng tròn, Yên, Hình tròn",
              "Đứa trẻ",
              "Bên ngoài",
              "Tám(8)",
              "Sáu(6)",
              "Bên dưới, Xuống, Hạ xuống, Đưa cho , Thấp, Thấp kém",
              "Đến, Đến hạn, Tiếp theo, Nguyên nhân, Trở thành",
              "Tinh thần, Tâm trí, Không khí, Bầu không khí, Tâm trạng",
              "Bé, Nhỏ",
              "Bảy(7)",
              "Đồi núi",
              "Câu chuyện, Nói chuyện",
              "Con gái, Phụ nữ",
              "Phía Bắc",
              "Buổi trưa, Dấu hiệu của con ngựa",
              "Trăm(100)",
              "Viết",
              "Trước, Phía trước, Đằng trước, Tương lai, Ưu tiên trước",
              "Tên, Lưu ý, Nổi bật, Danh tiếng",
              "Sông, Dòng chảy",
              "Nghìn(1000)",
              "Nước",
              "Một nửa, Ở giữa, Số lẻ, Nửa",
              "Con trai, Đàn ông",
              "Phía Tây",
              "Điện, Chạy bằng điện",
              "Trường học, Kì thi",
              "Từ, Lời nói, Ngôn ngữ",
              "Đất, Trái Đất, Mặt đất",
              "Cây, Gỗ",
              "Nghe, Hỏi",
              "Ăn, Đồ ăn",
              "Xe, Bánh xe",
              "Cái gì ?",
              "Phía Nam",
              "Mười nghìn(10000)",
              "Mỗi",
              "Trắng",
              "Thiên đường, Bầu trời, Đế quốc, Hoàng gia",
              "Mẹ",
              "Lửa",
              "Bên phải",
              "Đọc",
              "Bạn bè",
              "Bên trái",
              "Nghỉ ngơi, Ngày nghỉ, Nghỉ hưu, Ngủ",
              "Cha",
              "Mưa",
            ];
      
            new Vue({
              el: "#kanjitest1-page",
              data: {
                current:"",
                kanjiWord: Array.from(r),
                meanArr: Array.from(o),
                fraction: 0,
                random: 0,
                randommean:[],
                
              },
              methods: {
                reset: function(){
                  console.log("reset"),
                  (this.random = ~~(Math.random() *this.meanArr.length)),
                  (this.current = this.kanjiWord[this.random]),
                  this.randommeanW(),
                  $(".card").removeClass(
                    "mdui-color-red-a400 no-drop mdui-color-green"
                  );
                },
                refresh: function () {
                  (this.meanArr = Array.from(o)),
                    (this.kanjiWord = Array.from(r)),
                    this.reset(),
                    (this.fraction = 0);
                },
                verification: function (r, o) {
                  console.log("verification");
                  var t = this.meanArr.indexOf(r);
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
                      this.meanArr.splice(t, 1),
                      this.kanjiWord.splice(t, 1),
                      this.fraction++,
                      setTimeout(this.reset, 500))
                    : ($(o.currentTarget).addClass("no-drop mdui-color-red-a400"),
                      this.fraction--);
                },
                randommeanW: function () {
                  console.log("randommeanW");
                  var r = this.meanArr[this.random];
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
                  })(this.meanArr, r, 3);
                  return (
                    o.splice(~~(4 * Math.random()), 0, r),
                    (this.randommean = o),
                    o
                  );
                },
              },
              mounted: function () {
                this.random = ~~(Math.random() * this.kanjiWord.length);
                this.current = this.kanjiWord[this.random];
                this.randommeanW();
              },
            });
          })();
        },
        { "./arrayShuffle": 403 },
      ],
    },
    {},
    [371],
    null
  );