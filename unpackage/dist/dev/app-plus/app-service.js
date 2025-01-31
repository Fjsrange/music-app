if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0$2 = "/static/logo.png";
  function debounceRef(value, duration = 500) {
    let timer;
    return vue.customRef((track, trigger) => {
      return {
        // 获取当前防抖引用的值
        get() {
          track();
          return value;
        },
        // 设置新的值，但受防抖逻辑控制
        set(newValue) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            value = newValue;
            trigger();
          }, duration);
        }
      };
    });
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$7 = {
    __name: "searchVue",
    setup(__props) {
      const songName = debounceRef("", 500);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "search" }, [
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(songName) ? songName.value = $event : null),
              type: "text",
              placeholder: "搜索你想找的音乐",
              "cursor-color": "#3cc51f",
              "confirm-type": "done"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, vue.unref(songName)]
          ])
        ]);
      };
    }
  };
  const ComponentsSearchVueSearchVue = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "D:/A-test/github/music-app/components/searchVue/searchVue.vue"]]);
  const code = 200;
  const msg = "成功";
  const data = [
    {
      song: "平日狂欢",
      sing: "卓沅",
      pic: "http://p1.music.126.net/a9_c2FtRhKe3-oLWjjMnCg==/109951170315154621.jpg",
      id: 2660398404,
      url: "https://music.163.com/song/media/outer/url?id=2660398404"
    },
    {
      song: "来者何人也",
      alias: "《燕云十六声》公测宣传曲",
      sing: "龚琳娜/燕云十六声",
      pic: "http://p1.music.126.net/dz_4nVKP8wKrwy-i7jqa4w==/109951170310173330.jpg",
      id: 2659972109,
      url: "https://music.163.com/song/media/outer/url?id=2659972109"
    },
    {
      song: "和雨相拥",
      alias: "Touch the Rain",
      sing: "吴垚滔",
      pic: "http://p1.music.126.net/447EgdoOOq_6ECpPlAm8cw==/109951170330722731.jpg",
      id: 2661401289,
      url: "https://music.163.com/song/media/outer/url?id=2661401289"
    },
    {
      song: "当原野的风拥抱我",
      alias: "网易云音乐2024年度听歌报告主题曲",
      sing: "知晏",
      pic: "http://p1.music.126.net/sPizlMqPakJWDrGNVWg0eQ==/109951170303542366.jpg",
      id: 2659625860,
      url: "https://music.163.com/song/media/outer/url?id=2659625860"
    },
    {
      song: "预判结局",
      sing: "贤/听潮阁",
      pic: "http://p1.music.126.net/nS4ukz8HRKdacBKFdeFGOg==/109951170309952456.jpg",
      id: 2659952784,
      url: "https://music.163.com/song/media/outer/url?id=2659952784"
    },
    {
      song: "三天可见",
      sing: "沙一汀EL",
      pic: "http://p1.music.126.net/Toef2cTMGbbjVn3LCmYUvA==/109951170331023605.jpg",
      id: 2661403060,
      url: "https://music.163.com/song/media/outer/url?id=2661403060"
    },
    {
      song: "星夜",
      sing: "陈粒",
      pic: "http://p1.music.126.net/Y_gGYz_Int5nPncoz6sI3A==/109951170330193320.jpg",
      id: 2661346991,
      url: "https://music.163.com/song/media/outer/url?id=2661346991"
    },
    {
      song: "Merry Wannabe",
      sing: "Capper",
      pic: "http://p1.music.126.net/i9OWGHKMdTYik4njsL_2BA==/109951170300791469.jpg",
      id: 2659382255,
      url: "https://music.163.com/song/media/outer/url?id=2659382255"
    },
    {
      song: "坏哥哥II",
      sing: "那奇沃夫/池野林Club",
      pic: "http://p1.music.126.net/1S6Byf2bH2fikZOhFPZJGw==/109951170300468724.jpg",
      id: 2659354154,
      url: "https://music.163.com/song/media/outer/url?id=2659354154"
    },
    {
      song: "一.一",
      sing: "蒋敦豪",
      pic: "http://p1.music.126.net/tnwx8Q3XByY6CS4icqG20A==/109951170312319209.jpg",
      id: 2660173730,
      url: "https://music.163.com/song/media/outer/url?id=2660173730"
    },
    {
      song: "Good Night（晚安）",
      sing: "顾谦/赵千辰/造梦师DreamMaker",
      pic: "http://p1.music.126.net/2ZIogUp9lfyiWcx0Rlu7PQ==/109951170318417269.jpg",
      id: 2660529971,
      url: "https://music.163.com/song/media/outer/url?id=2660529971"
    },
    {
      song: "石头想有糖的温度",
      sing: "棱镜乐队",
      pic: "http://p1.music.126.net/s9BLBYU0nWKEDuHsX2LU7w==/109951170318167578.jpg",
      id: 2660508786,
      url: "https://music.163.com/song/media/outer/url?id=2660508786"
    },
    {
      song: "疤痕体Pt.2",
      sing: "欧泊Opal/郑州人",
      pic: "http://p1.music.126.net/5l37Ywtc45uRaj6XuErVRA==/109951170312837113.jpg",
      id: 2660223107,
      url: "https://music.163.com/song/media/outer/url?id=2660223107"
    },
    {
      song: "茧Jian",
      sing: "王OK",
      pic: "http://p1.music.126.net/EuLXPlIXohSBZxq4NDcEOg==/109951170257546892.jpg",
      id: 2656194629,
      url: "https://music.163.com/song/media/outer/url?id=2656194629"
    },
    {
      song: "一知半解",
      sing: "NINEONE#乃万/GALI",
      pic: "http://p1.music.126.net/fyoSFfaooQhpjFT_iu2diw==/109951170299886697.jpg",
      id: 2659279598,
      url: "https://music.163.com/song/media/outer/url?id=2659279598"
    },
    {
      song: "18",
      sing: "Top Barry",
      pic: "http://p1.music.126.net/583DfXGYvDgkYDTurU7pag==/109951170281138645.jpg",
      id: 2658088685,
      url: "https://music.163.com/song/media/outer/url?id=2658088685"
    },
    {
      song: "花椒",
      sing: "大宽",
      pic: "http://p1.music.126.net/MIrbG0BVQrUV4Rxc-VUGSA==/109951170312036989.jpg",
      id: 2660141438,
      url: "https://music.163.com/song/media/outer/url?id=2660141438"
    },
    {
      song: "做个好梦",
      alias: "Sun through the dark",
      sing: "萨满（Saman）/听潮阁",
      pic: "http://p1.music.126.net/MDvuFLRcSkcheZqlrNlgVQ==/109951170331000915.jpg",
      id: 2660569444,
      url: "https://music.163.com/song/media/outer/url?id=2660569444"
    },
    {
      song: "岁末",
      sing: "AFMC黑子/Y.Z.H于哲浩/胡碧文荟",
      pic: "http://p1.music.126.net/-2fBDnZWvC6OF9kHeQlvnw==/109951170318540039.jpg",
      id: 2660537100,
      url: "https://music.163.com/song/media/outer/url?id=2660537100"
    },
    {
      song: "我独自行走",
      sing: "Quinn葵因",
      pic: "http://p1.music.126.net/0h90Z1C4WDjZkUd0VsZApQ==/109951170333785726.jpg",
      id: 2661673163,
      url: "https://music.163.com/song/media/outer/url?id=2661673163"
    },
    {
      song: "爱的赞美诗",
      alias: "The Hymn of Love",
      sing: "旅行团乐队",
      pic: "http://p1.music.126.net/TZb0uRGq7mMmsZePv56JgA==/109951170281427969.jpg",
      id: 2658127889,
      url: "https://music.163.com/song/media/outer/url?id=2658127889"
    },
    {
      song: "NEW YEAR'S",
      sing: "Shanghai Qiutian",
      pic: "http://p1.music.126.net/A2aD6haHZe8u0zLhh45Ohw==/109951170335341984.jpg",
      id: 2661820417,
      url: "https://music.163.com/song/media/outer/url?id=2661820417"
    },
    {
      song: "龍",
      sing: "KenRobb",
      pic: "http://p1.music.126.net/0GXPjgK1Ee_Wd1UdCOLo9g==/109951170334197932.jpg",
      id: 2661720117,
      url: "https://music.163.com/song/media/outer/url?id=2661720117"
    },
    {
      song: "头像",
      sing: "江辰/封茗囧菌",
      pic: "http://p1.music.126.net/Kc9SWUoUlrcf7tPihgap-A==/109951170169444876.jpg",
      id: 2648204045,
      url: "https://music.163.com/song/media/outer/url?id=2648204045"
    },
    {
      song: "镜",
      sing: "Andy Yue",
      pic: "http://p1.music.126.net/x4sw-52Z8RYeytAKWmQBuQ==/109951170300439106.jpg",
      id: 2659340461,
      url: "https://music.163.com/song/media/outer/url?id=2659340461"
    },
    {
      song: "刀与花-张泽&毛二",
      sing: "张泽/毛二",
      pic: "http://p1.music.126.net/QKgzlIsfXu2M7SS4FucrKw==/109951170333850079.jpg",
      id: 2661699460,
      url: "https://music.163.com/song/media/outer/url?id=2661699460"
    },
    {
      song: "小丽（Shirley）",
      sing: "化骨龙乐队",
      pic: "http://p1.music.126.net/S1pGgThThylC00KJk_M-_A==/109951170328068356.jpg",
      id: 2661183985,
      url: "https://music.163.com/song/media/outer/url?id=2661183985"
    },
    {
      song: "未知设想",
      sing: "XMASwu(吴骜)",
      pic: "http://p1.music.126.net/FfHloQXHaWDz5mOe-nWHEA==/109951170316866189.jpg",
      id: 2660447727,
      url: "https://music.163.com/song/media/outer/url?id=2660447727"
    },
    {
      song: "恭喜老板发大财",
      sing: "马飞",
      pic: "http://p1.music.126.net/m38noL1J0clwnYlzpD15xA==/109951170310082763.jpg",
      id: 2659968060,
      url: "https://music.163.com/song/media/outer/url?id=2659968060"
    },
    {
      song: "For All 2025",
      sing: "布瑞吉Bridge",
      pic: "http://p1.music.126.net/h5FCFnnfpsBH0RD66hBnTQ==/109951170330190792.jpg",
      id: 2661345958,
      url: "https://music.163.com/song/media/outer/url?id=2661345958"
    },
    {
      song: "对台戏",
      sing: "NIAN424/万妮达Vinida Weng",
      pic: "http://p1.music.126.net/6QhqO-PSCBlfy3ND8UnHeA==/109951170333590779.jpg",
      id: 2661673438,
      url: "https://music.163.com/song/media/outer/url?id=2661673438"
    },
    {
      song: "致平凡的",
      sing: "尚东峰",
      pic: "http://p1.music.126.net/JjDx2LJl_zikDB1TAL4rcg==/109951170300370194.jpg",
      id: 2659353531,
      url: "https://music.163.com/song/media/outer/url?id=2659353531"
    },
    {
      song: "永久的错过",
      alias: "Last Love",
      sing: "9The",
      pic: "http://p1.music.126.net/CJvg4bEp-tceO9Jjkly3rw==/109951170303754084.jpg",
      id: 2660009612,
      url: "https://music.163.com/song/media/outer/url?id=2660009612"
    },
    {
      song: "瞧瞧你",
      sing: "Dogcloud",
      pic: "http://p1.music.126.net/OHE4UAbzZpXxxU2qPQIXAw==/109951170336831778.jpg",
      id: 2661892697,
      url: "https://music.163.com/song/media/outer/url?id=2661892697"
    },
    {
      song: "告解",
      alias: "《世界之外》易遇生日主题歌",
      sing: "世界之外",
      pic: "http://p1.music.126.net/3hl2ZRvpV57Hr8H9oWEpvw==/109951170302803202.jpg",
      id: 2657026293,
      url: "https://music.163.com/song/media/outer/url?id=2657026293"
    },
    {
      song: "林火",
      sing: "陈壹千",
      pic: "http://p1.music.126.net/Fe3FMtqf8CybfvE0EgJRvg==/109951170318267312.jpg",
      id: 2660191938,
      url: "https://music.163.com/song/media/outer/url?id=2660191938"
    },
    {
      song: "穿堂风",
      sing: "丁肆Dicey/海底时光机/饭卡",
      pic: "http://p1.music.126.net/FjNIuFOtfxySzIpG-NZc0w==/109951170303427583.jpg",
      id: 2643122641,
      url: "https://music.163.com/song/media/outer/url?id=2643122641"
    },
    {
      song: "夜别",
      alias: "夜にさようなら",
      sing: "马頔/ハンバート ハンバート",
      pic: "http://p1.music.126.net/rDexVEytgOmCrqvvZzAmLw==/109951170303541634.jpg",
      id: 2659662047,
      url: "https://music.163.com/song/media/outer/url?id=2659662047"
    },
    {
      song: "Grace",
      alias: "优雅",
      sing: "Nova Heart",
      pic: "http://p1.music.126.net/mGuUbnZ3o2kkDVK00cBX1w==/109951169712302043.jpg",
      id: 2660492589,
      url: "https://music.163.com/song/media/outer/url?id=2660492589"
    },
    {
      song: "白鹤与梦",
      sing: "河图",
      pic: "http://p1.music.126.net/KE1gFCyht6tGdPPpIihVFw==/109951170312611468.jpg",
      id: 2660203344,
      url: "https://music.163.com/song/media/outer/url?id=2660203344"
    },
    {
      song: "人生电影",
      sing: "帆布小镇",
      pic: "http://p1.music.126.net/65p9q1s9lGzMB-Z_AURxPg==/109951170330097447.jpg",
      id: 2661334639,
      url: "https://music.163.com/song/media/outer/url?id=2661334639"
    },
    {
      song: "总有美好在路上",
      alias: "人民日报新媒体跨年主题歌曲",
      sing: "周深",
      pic: "http://p1.music.126.net/qRSKuog0yVwgnP9U8qt6KQ==/109951170312123183.jpg",
      id: 2660150669,
      url: "https://music.163.com/song/media/outer/url?id=2660150669"
    },
    {
      song: "第十九颗启明星",
      alias: "The Nineteenth Ishtar",
      sing: "鬼慈",
      pic: "http://p1.music.126.net/vQj-2n0fZPkkGjlaLtpBSA==/109951170333849298.jpg",
      id: 2661564223,
      url: "https://music.163.com/song/media/outer/url?id=2661564223"
    },
    {
      song: "我们",
      sing: "普信主义",
      pic: "http://p1.music.126.net/326szxF2Qw7Z3u6tIud4Qw==/109951170245508919.jpg",
      id: 2659236816,
      url: "https://music.163.com/song/media/outer/url?id=2659236816"
    },
    {
      song: "游戏机坏咯",
      sing: "魔鬼花园（李安健）",
      pic: "http://p1.music.126.net/xI3tXxMSXyBrqiA7TCeMKQ==/109951170096963986.jpg",
      id: 2660001977,
      url: "https://music.163.com/song/media/outer/url?id=2660001977"
    },
    {
      song: "致素未谋面却如此相似的我们",
      alias: "天空树",
      sing: "姜云升",
      pic: "http://p1.music.126.net/1c0jugMGrYvJjUQV3xnBCw==/109951170300948913.jpg",
      id: 2657136754,
      url: "https://music.163.com/song/media/outer/url?id=2657136754"
    },
    {
      song: "总在不停循环的夜晚",
      sing: "蒋敦豪",
      pic: "http://p1.music.126.net/tnwx8Q3XByY6CS4icqG20A==/109951170312319209.jpg",
      id: 2660176526,
      url: "https://music.163.com/song/media/outer/url?id=2660176526"
    },
    {
      song: "实现理想不挑地方",
      alias: "2024年末贺礼特别企划「允许一切发生」",
      sing: "海洋Bo/卫某人",
      pic: "http://p1.music.126.net/T-5AiewTxfTqTwVTSTVKiA==/109951170313279253.jpg",
      id: 2660261841,
      url: "https://music.163.com/song/media/outer/url?id=2660261841"
    },
    {
      song: "嘿哟嘿哟",
      sing: "邓加宇/马格南MAGNUM/夏小桐",
      pic: "http://p1.music.126.net/FjNIuFOtfxySzIpG-NZc0w==/109951170303427583.jpg",
      id: 2643121995,
      url: "https://music.163.com/song/media/outer/url?id=2643121995"
    },
    {
      song: "我不信",
      sing: "Skiluv/michiyo",
      pic: "http://p1.music.126.net/1d8vdCpo_5pb_REb9CJe2w==/109951170325337420.jpg",
      id: 2660974635,
      url: "https://music.163.com/song/media/outer/url?id=2660974635"
    },
    {
      song: "Dancing In The Past“今人不见古时月”",
      sing: "OneOne/雾都L4WUDU",
      pic: "http://p1.music.126.net/AFPtoItU1xeEjaKE4pMrfg==/109951170331627860.jpg",
      id: 2661480254,
      url: "https://music.163.com/song/media/outer/url?id=2661480254"
    },
    {
      song: "The Eye",
      alias: "《时光代理人 英都篇》动画片头曲",
      sing: "白鲨JAWS",
      pic: "http://p1.music.126.net/ttG6Q91RIfDlPBYM9nV66Q==/109951170268789674.jpg",
      id: 2657178566,
      url: "https://music.163.com/song/media/outer/url?id=2657178566"
    },
    {
      song: "魔法少女失格",
      sing: "左乙/猫眼以太 CaTEye",
      pic: "http://p1.music.126.net/Sow8s0hhcjCP5TzvoDPwIw==/109951170290583047.jpg",
      id: 2658437500,
      url: "https://music.163.com/song/media/outer/url?id=2658437500"
    },
    {
      song: "我知道 I KNOW",
      sing: "诺米么Lodmemo",
      pic: "http://p1.music.126.net/XtT4uOkIbWVki4wdPG6kzw==/109951170313117950.jpg",
      id: 2660245957,
      url: "https://music.163.com/song/media/outer/url?id=2660245957"
    },
    {
      song: "蜉蝣",
      sing: "往昔乐队",
      pic: "http://p1.music.126.net/kp_K38T4qd4MTs6oM9xzhQ==/109951170329928127.jpg",
      id: 2661326748,
      url: "https://music.163.com/song/media/outer/url?id=2661326748"
    },
    {
      song: "《No Regrets》",
      sing: "第五人格/philoi",
      pic: "http://p1.music.126.net/r-46GTvYf7C07X1ZdHQTlQ==/109951170321539511.jpg",
      id: 2660738285,
      url: "https://music.163.com/song/media/outer/url?id=2660738285"
    },
    {
      song: "if u 2",
      alias: "揉制音乐",
      sing: "Jei Cyclist/祝梓IANZIE/姚思睿",
      pic: "http://p1.music.126.net/FjNIuFOtfxySzIpG-NZc0w==/109951170303427583.jpg",
      id: 2643122859,
      url: "https://music.163.com/song/media/outer/url?id=2643122859"
    },
    {
      song: "人呐",
      sing: "达桑嘉措/赵晨唏/sususu",
      pic: "http://p1.music.126.net/FjNIuFOtfxySzIpG-NZc0w==/109951170303427583.jpg",
      id: 2643122820,
      url: "https://music.163.com/song/media/outer/url?id=2643122820"
    },
    {
      song: "心动敲击",
      alias: "Heartbeat",
      sing: "格雷森GrayZon/DOKAFUTUREBOY",
      pic: "http://p1.music.126.net/5Y_WJIdrng-ANkcOdLDdLA==/109951170320733455.jpg",
      id: 2635669542,
      url: "https://music.163.com/song/media/outer/url?id=2635669542"
    },
    {
      song: "小白",
      sing: "郑润泽/罗言",
      pic: "http://p1.music.126.net/xcsukmv_qdz_0NfywJvYnA==/109951170299710628.jpg",
      id: 2659260745,
      url: "https://music.163.com/song/media/outer/url?id=2659260745"
    },
    {
      song: "Romance",
      sing: "michiyo/DearKey7",
      pic: "http://p1.music.126.net/zpPCH9BknQYzAQscaVUUhQ==/109951170310070759.jpg",
      id: 2659967995,
      url: "https://music.163.com/song/media/outer/url?id=2659967995"
    },
    {
      song: "Tasteless",
      sing: "Flameee/Jesse MargieLa/-Kilo",
      pic: "http://p1.music.126.net/Nr5Sj8wprKxWZD4-2OxGtg==/109951170333637510.jpg",
      id: 2661657463,
      url: "https://music.163.com/song/media/outer/url?id=2661657463"
    },
    {
      song: "人生这一路",
      sing: "TCG尹妹",
      pic: "http://p1.music.126.net/DhMArsKLLNhNfLvD9thJPg==/109951170317901552.jpg",
      id: 2660492815,
      url: "https://music.163.com/song/media/outer/url?id=2660492815"
    },
    {
      song: "写给被没收勇气的你",
      sing: "黄誉博/王晨艺/许天奇",
      pic: "http://p1.music.126.net/ocK8-5ivYlZkRHcDBIDAeA==/109951170308404382.jpg",
      id: 2659798894,
      url: "https://music.163.com/song/media/outer/url?id=2659798894"
    },
    {
      song: "根",
      sing: "奥Zha/马也_Crabbit",
      pic: "http://p1.music.126.net/pDZDyrqk48bWezB2lFiv3A==/109951170334231890.jpg",
      id: 2661726975,
      url: "https://music.163.com/song/media/outer/url?id=2661726975"
    },
    {
      song: "昏因",
      alias: "婚姻 Freestyle",
      sing: "Sasuke/WilB da water",
      pic: "http://p1.music.126.net/2dn2IJdBeuFAmc8IQjDEww==/109951170309568540.jpg",
      id: 2659907346,
      url: "https://music.163.com/song/media/outer/url?id=2659907346"
    },
    {
      song: "碎镜",
      sing: "Lonn.E",
      pic: "http://p1.music.126.net/bvKO0oM5bwQoWAfHf1Ethw==/109951170317885513.jpg",
      id: 2660490718,
      url: "https://music.163.com/song/media/outer/url?id=2660490718"
    },
    {
      song: "想要你",
      sing: "荷四",
      pic: "http://p1.music.126.net/_r6Vb5pbTpM2V1Sy19HITA==/109951170323666586.jpg",
      id: 2660883595,
      url: "https://music.163.com/song/media/outer/url?id=2660883595"
    },
    {
      song: "附属品",
      sing: "APMOZART",
      pic: "http://p1.music.126.net/OL5-8bh3QqUIuZo-C4OVkQ==/109951170299890140.jpg",
      id: 2659279715,
      url: "https://music.163.com/song/media/outer/url?id=2659279715"
    },
    {
      song: "空窗期",
      alias: "我是你空窗期的替代品",
      sing: "安息日",
      pic: "http://p1.music.126.net/MQfhBZr6umszDPuR3ItjDw==/109951170312572359.jpg",
      id: 2660195488,
      url: "https://music.163.com/song/media/outer/url?id=2660195488"
    },
    {
      song: "“是我”",
      sing: "Bo Peep",
      pic: "http://p1.music.126.net/-BCfSF8kC-4ejrzDTv1LvQ==/109951170313312026.jpg",
      id: 2660263004,
      url: "https://music.163.com/song/media/outer/url?id=2660263004"
    },
    {
      song: "烂货",
      sing: "罗可Lorkin",
      pic: "http://p1.music.126.net/gzv-w2Wje5W00hxCCi261Q==/109951170298483255.jpg",
      id: 2658557176,
      url: "https://music.163.com/song/media/outer/url?id=2658557176"
    },
    {
      song: "漆园",
      sing: "九重临",
      pic: "http://p1.music.126.net/S6LSVFLpw3Av_9YEkjbICA==/109951170330021051.jpg",
      id: 2661401731,
      url: "https://music.163.com/song/media/outer/url?id=2661401731"
    },
    {
      song: "珍珠",
      sing: "龚琳",
      pic: "http://p1.music.126.net/IGtKHrQU89GRZEsVH2zOWA==/109951170334091678.jpg",
      id: 2661707098,
      url: "https://music.163.com/song/media/outer/url?id=2661707098"
    },
    {
      song: "新年",
      sing: "Joyside",
      pic: "http://p1.music.126.net/Nk52Jn4DiFhIUfD2ra2Pbg==/109951170310737501.jpg",
      id: 2660037230,
      url: "https://music.163.com/song/media/outer/url?id=2660037230"
    },
    {
      song: "这世界的浪漫还有很多",
      sing: "Newbiao好梦一场/洛天依Official",
      pic: "http://p1.music.126.net/nHSo_b1Gq7L60QCu5kakQQ==/109951170340653590.jpg",
      id: 2660536911,
      url: "https://music.163.com/song/media/outer/url?id=2660536911"
    },
    {
      song: "我们在微笑中飘荡",
      sing: "赵太阳/听潮阁",
      pic: "http://p1.music.126.net/0p6oQLy42GQeOs3lyd7kew==/109951170309542257.jpg",
      id: 2659914173,
      url: "https://music.163.com/song/media/outer/url?id=2659914173"
    },
    {
      song: "凝望",
      sing: "黄业圆/凌零/Shawee",
      pic: "http://p1.music.126.net/FjNIuFOtfxySzIpG-NZc0w==/109951170303427583.jpg",
      id: 2643122056,
      url: "https://music.163.com/song/media/outer/url?id=2643122056"
    },
    {
      song: "过客",
      sing: "大星",
      pic: "http://p1.music.126.net/vVcaivndZZ4PosveBEjwEg==/109951170240367587.jpg",
      id: 2654830739,
      url: "https://music.163.com/song/media/outer/url?id=2654830739"
    },
    {
      song: "今天有没有下雨",
      sing: "许钊豪",
      pic: "http://p1.music.126.net/gAl04Gf28NLZnOYIfRE7Kw==/109951170322087981.jpg",
      id: 2660774822,
      url: "https://music.163.com/song/media/outer/url?id=2660774822"
    },
    {
      song: "无人区",
      sing: "贺子玲",
      pic: "http://p1.music.126.net/JNziE5P0c0BYAz4d28zWDg==/109951170309891244.jpg",
      id: 2657374404,
      url: "https://music.163.com/song/media/outer/url?id=2657374404"
    },
    {
      song: "冬日逃跑计划",
      sing: "赋生",
      pic: "http://p1.music.126.net/dLIfnLFjZmSA-I3kNZVLEQ==/109951170310168944.jpg",
      id: 2659969057,
      url: "https://music.163.com/song/media/outer/url?id=2659969057"
    },
    {
      song: "刘海柱（Prod.lejJA）",
      sing: "Pango27Ar1es/九莲",
      pic: "http://p1.music.126.net/pjiqHyz0ITtDTAhVRTh70w==/109951170303680416.jpg",
      id: 2659689134,
      url: "https://music.163.com/song/media/outer/url?id=2659689134"
    },
    {
      song: "纠缠",
      sing: "刘思鉴",
      pic: "http://p1.music.126.net/isuniJPp0CDlGG47F-rsvQ==/109951170303224980.jpg",
      id: 2659630485,
      url: "https://music.163.com/song/media/outer/url?id=2659630485"
    },
    {
      song: "Cold 9（寒夜如歌）",
      sing: "Yinger Liam",
      pic: "http://p1.music.126.net/iFXXnDp89f0PZOlfq7KTrg==/109951170004743545.jpg",
      id: 2659323144,
      url: "https://music.163.com/song/media/outer/url?id=2659323144"
    },
    {
      song: "散心",
      alias: "C'est la vie",
      sing: "KEY.L刘聪/李佳隆",
      pic: "http://p1.music.126.net/s-olUSa2vk80dXr_30ZVNg==/109951170303451167.jpg",
      id: 2659654589,
      url: "https://music.163.com/song/media/outer/url?id=2659654589"
    },
    {
      song: "缥缈愿",
      sing: "MOCKER44./Ari鸦不齐/CTY2P",
      pic: "http://p1.music.126.net/hxDCDQzBMQWzy2rux4zfvw==/109951170334174695.jpg",
      id: 2661615042,
      url: "https://music.163.com/song/media/outer/url?id=2661615042"
    },
    {
      song: "虚位以待",
      sing: "YangYang/B.T.M/落Romantic",
      pic: "http://p1.music.126.net/_h1-dVTexgZkUUs6nwzHQQ==/109951170331656423.jpg",
      id: 2661481078,
      url: "https://music.163.com/song/media/outer/url?id=2661481078"
    },
    {
      song: "戏游九州",
      sing: "洛天依Official/陈丽君",
      pic: "http://p1.music.126.net/e6NsBDf3VTZYub_VJdS9Ag==/109951170318582758.jpg",
      id: 2660541862,
      url: "https://music.163.com/song/media/outer/url?id=2660541862"
    },
    {
      song: "降临",
      sing: "门门",
      pic: "http://p1.music.126.net/A_bij6tGZlm-WmEplVq0Hg==/109951170330277290.jpg",
      id: 2661352909,
      url: "https://music.163.com/song/media/outer/url?id=2661352909"
    },
    {
      song: "具名之花",
      sing: "双笙（陈元汐）",
      pic: "http://p1.music.126.net/yuEbO_Pk01UAK5UDJaGdNg==/109951170313519549.jpg",
      id: 2660294931,
      url: "https://music.163.com/song/media/outer/url?id=2660294931"
    },
    {
      song: "重逢初雪",
      sing: "JA_徐小斗_",
      pic: "http://p1.music.126.net/GopKc44nfmAsf4y2QJVZtA==/109951170277783769.jpg",
      id: 2657695209,
      url: "https://music.163.com/song/media/outer/url?id=2657695209"
    },
    {
      song: "泊木",
      sing: "Lucid17s",
      pic: "http://p1.music.126.net/weSf86ucM0OP7cox-rFvOw==/109951170333877631.jpg",
      id: 2661687212,
      url: "https://music.163.com/song/media/outer/url?id=2661687212"
    },
    {
      song: "Bolaī Bìe Buì",
      sing: "安格拉Angola",
      pic: "http://p1.music.126.net/oum2Yu9xZFEl1k56hJW5PA==/109951170312708737.jpg",
      id: 2660215176,
      url: "https://music.163.com/song/media/outer/url?id=2660215176"
    },
    {
      song: "老倌儿",
      sing: "范德安娜",
      pic: "http://p2.music.126.net/dz0k9RWVuUwX44g1N_GNcw==/109951170311037052.jpg",
      id: 2660053619,
      url: "https://music.163.com/song/media/outer/url?id=2660053619"
    },
    {
      song: "埋葬愛 Bury Love",
      sing: "8KARAT",
      pic: "http://p1.music.126.net/eJ7SQw9bHWg6daAocdXAwg==/109951170080656079.jpg",
      id: 2640455696,
      url: "https://music.163.com/song/media/outer/url?id=2640455696"
    },
    {
      song: "不知年岁的风",
      sing: "怪兽",
      pic: "http://p1.music.126.net/sHokFfdHqenmkxwvqo5_Sw==/109951170330270444.jpg",
      id: 2661351107,
      url: "https://music.163.com/song/media/outer/url?id=2661351107"
    },
    {
      song: "吟楼台",
      sing: "汪记杂货铺",
      pic: "http://p1.music.126.net/eFC5pWgSMIeCuRqfWw4z5A==/109951170331408550.jpg",
      id: 2661401763,
      url: "https://music.163.com/song/media/outer/url?id=2661401763"
    },
    {
      song: "开心最重要",
      sing: "陈一玲",
      pic: "http://p1.music.126.net/om_DbVLDMFw3OcIlTyVNaA==/109951170318496997.jpg",
      id: 2660542079,
      url: "https://music.163.com/song/media/outer/url?id=2660542079"
    },
    {
      song: "日冕",
      sing: "李欣儒",
      pic: "http://p1.music.126.net/uI-aw8fvWwuk8-CAK6uxGA==/109951170327853394.jpg",
      id: 2661171365,
      url: "https://music.163.com/song/media/outer/url?id=2661171365"
    }
  ];
  const getMovies = {
    code,
    msg,
    data
  };
  const title = "hello";
  const _sfc_main$6 = {
    __name: "index",
    setup(__props) {
      uni.setStorageSync("movies", JSON.stringify(getMovies.data));
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(ComponentsSearchVueSearchVue),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("image", {
                class: "logo",
                src: _imports_0$2
              }),
              vue.createElementVNode("view", { class: "text-area" }, [
                vue.createElementVNode("text", { class: "title" }, vue.toDisplayString(title) + " asd")
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "D:/A-test/github/music-app/pages/index/index.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const tabList = [
    {
      id: 1,
      title: "收藏",
      icon: "/static/logo.png",
      url: "/pages/my/list",
      sum: 18
    },
    {
      id: 2,
      title: "本地",
      icon: "/static/logo.png",
      url: "/pages/my/local/local",
      sum: 35
    },
    {
      id: 3,
      title: "最近",
      icon: "/static/logo.png",
      url: "/pages/my/list",
      sum: 5
    },
    {
      id: 4,
      title: "历史",
      icon: "/static/logo.png",
      url: "/pages/my/list",
      sum: 17
    }
  ];
  const _sfc_main$5 = {
    __name: "my",
    setup(__props) {
      formatAppLog("log", "at pages/my/my.vue:51", "tabList", tabList);
      vue.ref([]);
      let cardTabList = vue.ref(tabList);
      function goTab(url) {
        uni.navigateTo({
          url
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(ComponentsSearchVueSearchVue),
            vue.createElementVNode("view", { class: "my-card" }, [
              vue.createElementVNode("view", { class: "card-msg" }, [
                vue.createElementVNode("image", {
                  src: _imports_0$2,
                  mode: "",
                  class: "msg-img"
                }),
                vue.createElementVNode("view", { class: "msg-name" }, "风九四")
              ])
            ]),
            vue.createElementVNode("view", { class: "card-tab" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(cardTabList), (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "tab",
                    onClick: ($event) => goTab(item.url)
                  }, [
                    vue.createElementVNode("image", {
                      src: item.icon,
                      mode: "",
                      style: { "width": "40px", "height": "40px" }
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "span",
                      null,
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "span",
                      null,
                      vue.toDisplayString(item.sum),
                      1
                      /* TEXT */
                    )
                  ], 8, ["onClick"]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "my-song" }, [
              vue.createElementVNode("view", { class: "song-title" }, " 我的歌单 "),
              vue.createElementVNode("view", { class: "song-list" }, [
                (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(4, (item) => {
                    return vue.createElementVNode("view", { class: "song-item" }, [
                      vue.createElementVNode("image", {
                        src: _imports_0$2,
                        mode: "",
                        class: "msg-img"
                      }),
                      vue.createElementVNode("view", { class: "item-left" }, [
                        vue.createElementVNode("view", { class: "top" }, " 名称 "),
                        vue.createElementVNode("view", { class: "bottom" }, " 125首 ")
                      ])
                    ]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ]),
            vue.createCommentVNode(' <view class="music-time-machine">\r\n		<view class="music-title">\r\n			<view class="left">音乐时光机</view>\r\n			<view class="content">{{date.toLocaleDateString()}}</view>\r\n			<view class="right">\r\n				<uni-icons type="forward" size="18" color="#777"></uni-icons>\r\n			</view>\r\n		</view>\r\n		<view class="music-card">\r\n			\r\n		</view>\r\n	</view> ')
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "D:/A-test/github/music-app/pages/my/my.vue"]]);
  const _imports_0$1 = "/static/images/play/prev-icon.png";
  const _imports_1$2 = "/static/images/play/next-icon.png";
  const _imports_2$1 = "/static/images/play/list-icon.png";
  const _sfc_main$4 = {
    __name: "test",
    setup(__props) {
      let playMode = vue.ref("list");
      let context = vue.ref({});
      let duration = vue.ref(-1);
      let currentTime = vue.ref(0);
      const songList = vue.ref(JSON.parse(uni.getStorageSync("movies")));
      let songIndex = vue.ref(0);
      let playStatus = vue.ref(false);
      let playStatusMode = vue.ref("stop");
      let isPopupShow = vue.ref(true);
      function getSongIndex() {
        const index = uni.getStorageSync("songIndex");
        return index.data !== null ? parseInt(index.data) : 0;
      }
      songIndex.value = getSongIndex();
      vue.watch(
        songIndex,
        (newIndex) => {
          uni.setStorageSync("songIndex", newIndex);
        },
        { immediate: true }
      );
      vue.onMounted(() => {
        formatAppLog("log", "at pages/test/test.vue:171", "songList", songList.value);
        songIndex.value = JSON.parse(uni.getStorageSync("songIndex")) || 0;
        if (uni.getStorageSync("songIndex"))
          playMode.value = JSON.parse(uni.getStorageSync("playMode")) || "list";
        context.value = uni.createInnerAudioContext();
        setAndSrc(songIndex.value);
        playStatus.value = context.value.paused;
        formatAppLog("log", "at pages/test/test.vue:182", "当前歌曲", context.value);
        context.value.onCanplay(() => {
          duration.value = context.value.duration;
        });
        context.value.onError((res) => {
          formatAppLog("log", "at pages/test/test.vue:191", res.errMsg);
          formatAppLog("log", "at pages/test/test.vue:192", res.errCode);
        });
        context.value.onTimeUpdate(() => {
          currentTime.value = context.value.currentTime;
        });
        setupAudioListeners();
      });
      function setAndSrc(index) {
        context.value.src = songList.value[index].url;
      }
      const changeMode = () => {
        if (playMode.value === "list") {
          playMode.value = "single";
          uni.showToast({
            title: "单曲循环",
            icon: "success"
          });
        } else if (playMode.value === "single") {
          playMode.value = "random";
          uni.showToast({
            title: "随机播放",
            icon: "success"
          });
        } else {
          playMode.value = "list";
          uni.showToast({
            title: "顺序播放",
            icon: "success"
          });
        }
        uni.setStorageSync("playMode", JSON.stringify(playMode.value));
      };
      function setupAudioListeners() {
        context.value.onEnded(() => {
          if (playMode.value === "single") {
            context.value.seek(0);
            playMusic();
          } else if (playMode.value === "random") {
            songIndex.value = Math.floor(Math.random() * songList.value.length);
            setAndSrc(songIndex.value);
            context.value.seek(0);
            playMusic();
          } else {
            changeSong("next");
          }
        });
      }
      function onPlay() {
        if (!context.value.paused) {
          context.value.pause();
          playStatusMode.value = "stop";
        } else {
          playMusic();
          playStatusMode.value = "play";
        }
      }
      const changeSong = (type, index) => {
        formatAppLog("log", "at pages/test/test.vue:276", "type", type);
        formatAppLog("log", "at pages/test/test.vue:277", "index", index);
        if (type === "prev") {
          if (songIndex.value === 0) {
            songIndex.value = songList.value.length - 1;
          } else {
            songIndex.value--;
          }
          setAndSrc(songIndex.value);
          onPlay();
        } else if (type === "next") {
          if (songIndex.value === songList.value.length - 1) {
            songIndex.value = 0;
          } else {
            songIndex.value++;
          }
          setAndSrc(songIndex.value);
          onPlay();
        } else {
          songIndex.value = index;
          setAndSrc(index);
          onPlay();
        }
      };
      function openPopup() {
        isPopupShow.value = true;
      }
      function closePopup() {
        isPopupShow.value = false;
      }
      function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
      }
      const sliderChange = (e) => {
        const value = e.detail.value;
        context.value.seek(value);
      };
      function playMusic() {
        formatAppLog("log", "at pages/test/test.vue:332", "context.value.duration", context.value.duration);
        if (!context.value.duration) {
          uni.showToast({
            title: "该歌曲暂不支持播放",
            icon: "none"
          });
          context.value.duration == null ? changeSong("next") : 0;
        } else {
          context.value.play();
        }
      }
      vue.onUnmounted(() => {
        context.value.destroy();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { style: { "width": "80%", "height": "80%", "margin": "auto", "padding": "10% 0" } }, [
              vue.createElementVNode("view", { style: { "width": "600rpx", "height": "600rpx" } }, [
                vue.createElementVNode("img", {
                  style: { "width": "100%", "border-radius": "6%" },
                  src: songList.value[vue.unref(songIndex)].pic
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { style: { "padding-top": "40rpx", "line-height": "2" } }, [
                vue.createElementVNode(
                  "view",
                  { style: { "font-size": "40rpx", "font-weight": "bold" } },
                  vue.toDisplayString(songList.value[vue.unref(songIndex)].sing),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  null,
                  vue.toDisplayString(songList.value[vue.unref(songIndex)].song),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", null, "歌词")
              ])
            ]),
            vue.createElementVNode("view", { class: "music" }, [
              vue.createElementVNode("view", { class: "music-box" }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("slider", {
                    max: vue.unref(duration),
                    value: vue.unref(currentTime),
                    onChange: sliderChange,
                    activeColor: "#000",
                    backgroundColor: "#ccc",
                    "block-color": "#000",
                    "block-size": "12",
                    style: { "margin": "0" }
                  }, null, 40, ["max", "value"])
                ]),
                vue.createElementVNode("view", { class: "music-time" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "time-left" },
                    vue.toDisplayString(formatTime(vue.unref(currentTime))),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "time-right" },
                    vue.toDisplayString(formatTime(vue.unref(duration))),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", { class: "play-btn" }, [
                vue.createElementVNode("view", { class: "no-play" }, [
                  vue.createElementVNode("image", {
                    src: `../../static/images/play/${vue.unref(playMode)}-loop-icon.png`,
                    mode: "",
                    onClick: changeMode
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", {
                  class: "no-play",
                  onClick: _cache[0] || (_cache[0] = ($event) => changeSong("prev"))
                }, [
                  vue.createElementVNode("image", {
                    src: _imports_0$1,
                    mode: ""
                  })
                ]),
                vue.createElementVNode("view", {
                  class: "play",
                  onClick: onPlay
                }, [
                  vue.createElementVNode("image", {
                    src: `../../static/images/play/${vue.unref(playStatusMode)}-icon.png`,
                    mode: ""
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", {
                  class: "no-play",
                  onClick: _cache[1] || (_cache[1] = ($event) => changeSong("next"))
                }, [
                  vue.createElementVNode("image", {
                    src: _imports_1$2,
                    mode: ""
                  })
                ]),
                vue.createElementVNode("view", {
                  class: "no-play",
                  onClick: openPopup
                }, [
                  vue.createElementVNode("image", {
                    src: _imports_2$1,
                    mode: ""
                  })
                ])
              ])
            ]),
            vue.createElementVNode("view", null, [
              vue.createCommentVNode(" 歌曲列表 "),
              vue.createCommentVNode(" 弹出层 "),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["popup", { "popup-show": vue.unref(isPopupShow) }])
                },
                [
                  vue.createElementVNode("view", { class: "popup-content" }, [
                    vue.createCommentVNode(" 弹出层内容 "),
                    vue.createElementVNode("view", { class: "popup-header" }, "歌曲名称：xxx"),
                    vue.createCommentVNode(" <view>歌曲名称：{{ currentSong.name }}</view> "),
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(songList.value, (song, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          key: index,
                          onClick: ($event) => openPopup()
                        }, [
                          vue.createCommentVNode(" {{ song }} "),
                          vue.createElementVNode("view", {
                            onClick: ($event) => changeSong(_ctx._, index),
                            style: { "display": "flex", "justify-content": "space-between", "align-items": "center", "padding": "10rpx 0", "width": "90vw" }
                          }, [
                            vue.createElementVNode(
                              "view",
                              {
                                class: vue.normalizeClass({ currentIndex: index === vue.unref(songIndex) }),
                                style: { "display": "flex", "align-items": "center", "width": "80%", "white-space": "nowrap" }
                              },
                              [
                                vue.createElementVNode(
                                  "view",
                                  null,
                                  vue.toDisplayString(song.song),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode(
                                  "view",
                                  {
                                    class: vue.normalizeClass([{ currentIndex: index === vue.unref(songIndex) }, "popup-content-sing"])
                                  },
                                  vue.toDisplayString(" - " + song.sing),
                                  3
                                  /* TEXT, CLASS */
                                )
                              ],
                              2
                              /* CLASS */
                            ),
                            vue.createElementVNode("view", { style: { "color": "rgba(51, 51, 51, 0.8)", "display": "flex", "align-items": "center" } }, [
                              vue.createElementVNode(
                                "view",
                                {
                                  class: vue.normalizeClass({ currentIndex: index === vue.unref(songIndex) }),
                                  style: { "margin": "20rpx" }
                                },
                                "xxx",
                                2
                                /* CLASS */
                              ),
                              vue.createElementVNode("view", null, "X")
                            ])
                          ], 8, ["onClick"])
                        ], 8, ["onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ],
                2
                /* CLASS */
              ),
              vue.createCommentVNode(" 遮罩层 "),
              vue.unref(isPopupShow) ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "mask",
                onClick: closePopup
              })) : vue.createCommentVNode("v-if", true)
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "D:/A-test/github/music-app/pages/test/test.vue"]]);
  const _imports_0 = "/static/tabs/back.png";
  const _imports_1$1 = "/static/tabs/menu.png";
  const _imports_2 = "/static/tabs/view.png";
  const _imports_3 = "/static/tabs/sort.png";
  const _imports_4 = "/static/tabs/multiple.png";
  const _imports_1 = "/static/images/play/play-icon.png";
  const _sfc_main$3 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "player" }, [
      vue.createElementVNode("view", { class: "player-left" }, [
        vue.createElementVNode("image", {
          src: _imports_0$2,
          style: { "width": "80rpx", "height": "80rpx" }
        }),
        vue.createElementVNode("view", { class: "player-left-content" }, [
          vue.createTextVNode(" 你 - 薛之谦 "),
          vue.createCommentVNode(' <view class="player-left-content-title">你</view>\r\n        <view class="player-left-content-song">薛之谦</view> ')
        ])
      ]),
      vue.createElementVNode("view", { class: "player-right" }, [
        vue.createElementVNode("image", {
          src: _imports_1,
          style: { "width": "50rpx", "height": "50rpx" }
        }),
        vue.createElementVNode("image", {
          src: _imports_2$1,
          style: { "width": "50rpx", "height": "50rpx", "margin-left": "20rpx" }
        })
      ])
    ]);
  }
  const playerVue = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__scopeId", "data-v-dd16a17b"], ["__file", "D:/A-test/github/music-app/components/playerVue/playerVue.vue"]]);
  const _sfc_main$2 = {
    __name: "local",
    setup(__props) {
      const isPopupVisible = vue.ref(false);
      const audioList = vue.ref([]);
      const context = vue.ref(null);
      vue.onMounted(() => {
        formatAppLog("log", "at pages/my/local/local.vue:126", "onMounted", JSON.parse(uni.getStorageSync("audio-list")));
        audioList.value = JSON.parse(uni.getStorageSync("audio-list")).map((item) => {
          return {
            id: item.id,
            sing: item.title,
            song: item.artist,
            url: item.path,
            autoplay: false,
            // 是否自动播放
            currentTime: 0,
            // 当前播放时间
            paused: false
            // 是否暂停
          };
        });
        formatAppLog("log", "at pages/my/local/local.vue:138", "audioList.value", audioList.value);
        context.value = uni.createInnerAudioContext();
        context.value.src = audioList.value[0].url;
        formatAppLog("log", "at pages/my/local/local.vue:141", "context.value", context.value);
        context.value.play();
        context.value.onPlay(() => {
          formatAppLog("log", "at pages/my/local/local.vue:145", "开始播放");
        });
        context.value.onError((res) => {
          formatAppLog("log", "at pages/my/local/local.vue:148", res);
        });
        context.value.onEnded(() => {
          formatAppLog("log", "at pages/my/local/local.vue:151", "播放结束");
        });
      });
      function onRightButtonClick() {
        isPopupVisible.value = !isPopupVisible.value;
      }
      function goScan() {
        uni.navigateTo({
          url: "/pages/my/local/scan/scan"
        });
        isPopupVisible.value = false;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("header", null, [
              vue.createElementVNode("view", { class: "navbar" }, [
                vue.createElementVNode("view", {
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back())
                }, [
                  vue.createElementVNode("image", {
                    src: _imports_0,
                    style: { "width": "48rpx", "height": "48rpx" }
                  })
                ]),
                vue.createElementVNode("view", { class: "title" }, "页面标题"),
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("image", {
                    src: _imports_1$1,
                    class: "menu",
                    onClick: onRightButtonClick
                  })
                ])
              ])
            ]),
            vue.createCommentVNode(" 排序 "),
            vue.createElementVNode("view", {
              class: "",
              style: { "display": "flex", "justify-content": "space-between", "align-items": "center", "padding": "20rpx 40rpx", "margin-top": "32rpx" }
            }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex" }
              }, [
                vue.createElementVNode("view", { class: "" }, " > "),
                vue.createElementVNode("view", { class: "" }, " 全部播放(50) ")
              ]),
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "width": "120rpx", "justify-content": "space-between", "align-items": "center" }
              }, [
                vue.createElementVNode("image", {
                  src: _imports_2,
                  style: { "width": "28rpx", "height": "28rpx" }
                }),
                vue.createElementVNode("image", {
                  src: _imports_3,
                  style: { "width": "38rpx", "height": "40rpx" }
                }),
                vue.createElementVNode("image", {
                  src: _imports_4,
                  style: { "width": "28rpx", "height": "28rpx" }
                })
              ])
            ]),
            vue.createCommentVNode(" 列表 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(audioList.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  style: { "display": "flex", "justify-content": "space-between", "align-items": "center", "padding": "20rpx 40rpx" },
                  key: item.id
                }, [
                  vue.createElementVNode("view", { class: "" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "" },
                      vue.toDisplayString(item.sing),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", {
                      class: "",
                      style: { "font-size": "24rpx", "color": "rgb(102, 102, 102, 0.9)", "display": "flex", "align-items": "center" }
                    }, [
                      vue.createElementVNode(
                        "span",
                        null,
                        vue.toDisplayString(item.song),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { style: { "padding": "2px", "background": "#eee", "margin-left": "2px" } }, "6")
                    ])
                  ]),
                  vue.createElementVNode("view", {
                    class: "",
                    style: { "display": "flex", "width": "120rpx", "justify-content": "space-between" }
                  }, [
                    vue.createElementVNode("view", { class: "" }, " > "),
                    vue.createElementVNode("view", { class: "" }, " > "),
                    vue.createElementVNode("view", { class: "" }, " > ")
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createCommentVNode(" 模块 "),
            vue.createElementVNode(
              "view",
              {
                class: "setting-popup",
                style: vue.normalizeStyle({ display: isPopupVisible.value ? "block" : "none" })
              },
              [
                vue.createElementVNode("view", { class: "setting-popup-content" }, [
                  vue.createCommentVNode(' <view class="setting-popup-item">设置</view> '),
                  vue.createElementVNode("view", {
                    class: "setting-popup-item",
                    onClick: goScan
                  }, "扫描歌曲"),
                  vue.createCommentVNode(' <navigator url="/pages/my/local/scan/scan">\n        <view>扫描歌曲</view>\n      </navigator> ')
                ])
              ],
              4
              /* STYLE */
            ),
            vue.createCommentVNode(" 设置 "),
            vue.createCommentVNode(` 	 底部弹窗  @click="toggle('bottom')"
	 
	<uni-popup ref="popup" background-color="#fff" @change="change">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }"><text
						class="text">popup 内容</text></view>
			</uni-popup> `),
            vue.createVNode(vue.unref(playerVue))
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyLocalLocal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b206a8a5"], ["__file", "D:/A-test/github/music-app/pages/my/local/local.vue"]]);
  const _sfc_main$1 = {
    __name: "scan",
    setup(__props) {
      const isStart = vue.ref(false);
      const audioList = vue.ref([]);
      const infoArr = vue.ref([]);
      function startScan() {
        if (isStart.value) {
          formatAppLog("log", "at pages/my/local/scan/scan.vue:32", "取消扫描");
          uni.navigateBack();
        } else {
          formatAppLog("log", "at pages/my/local/scan/scan.vue:35", "开始扫描");
          isStart.value = true;
          if (cursor.moveToFirst()) {
            do {
              const id = cursor.getString(
                cursor.getColumnIndexOrThrow(MediaStore.Audio.Media._ID)
              );
              const title2 = cursor.getString(
                cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.TITLE)
              );
              const artist = cursor.getString(
                cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.ARTIST)
              );
              const path = cursor.getString(
                cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DATA)
              );
              const retriever = new MediaMetadataRetriever();
              retriever.setDataSource(path);
              const duration = retriever.extractMetadata(
                MediaMetadataRetriever.METADATA_KEY_DURATION
              );
              const durationInSeconds = parseInt(duration, 10) / 1e3;
              let info = cursor.getString(
                cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DATA)
              );
              audioList.value.push({
                id,
                title: title2,
                artist,
                path,
                duration: durationInSeconds
              });
              infoArr.value.push(info);
            } while (cursor.moveToNext());
          }
          cursor.close();
          uni.setStorageSync("audio-list", JSON.stringify(audioList.value));
          uni.setStorageSync("info-arr", JSON.stringify(infoArr.value));
        }
      }
      plus.android.importClass("android.content.Context");
      plus.android.importClass(
        "android.content.ContentResolver"
      );
      plus.android.importClass("android.net.Uri");
      const MediaStore = plus.android.importClass("android.provider.MediaStore");
      plus.android.importClass("android.database.Cursor");
      const MediaMetadataRetriever = plus.android.importClass(
        "android.media.MediaMetadataRetriever"
      );
      const main = plus.android.runtimeMainActivity();
      const contentResolver = main.getContentResolver();
      const uri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
      const projection = [
        MediaStore.Audio.Media._ID,
        MediaStore.Audio.Media.TITLE,
        MediaStore.Audio.Media.ARTIST,
        MediaStore.Audio.Media.DATA
      ];
      const cursor = contentResolver.query(uri, projection, null, null, null);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "logo" }, [
              vue.createElementVNode("image", {
                src: _imports_0$2,
                alt: ""
              })
            ]),
            vue.createCommentVNode(" 如果没有开始扫描，则显示扫描说明 "),
            !isStart.value ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "much-select"
            }, [
              vue.createElementVNode("view", null, "一件扫描手机内的歌曲文件"),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("view", null, "不扫描 60s 以下的文件"),
                vue.createElementVNode("view", null, "不扫描 100k 以下的歌曲")
              ])
            ])) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createCommentVNode(" 如果已经开始扫描，则显示开始扫描 "),
                vue.createElementVNode("view", { class: "much-select" }, "开始扫描")
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            )),
            vue.createCommentVNode(" 点击按钮开始或取消扫描 "),
            vue.createElementVNode(
              "view",
              {
                class: "btn",
                onClick: startScan
              },
              vue.toDisplayString(!isStart.value ? "开始扫描" : "取消"),
              1
              /* TEXT */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyLocalScanScan = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cc63abb6"], ["__file", "D:/A-test/github/music-app/pages/my/local/scan/scan.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("components/searchVue/searchVue", ComponentsSearchVueSearchVue);
  __definePage("pages/test/test", PagesTestTest);
  __definePage("pages/my/local/local", PagesMyLocalLocal);
  __definePage("pages/my/local/scan/scan", PagesMyLocalScanScan);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/A-test/github/music-app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
