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
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
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
    setup(__props, { expose: __expose }) {
      __expose();
      const songName = debounceRef("", 500);
      const __returned__ = { songName, ref: vue.ref, get debounceRef() {
        return debounceRef;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "search" }, [
      vue.withDirectives(vue.createElementVNode(
        "input",
        {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.songName = $event),
          type: "text",
          placeholder: "搜索你想找的音乐",
          "cursor-color": "#3cc51f",
          "confirm-type": "done"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [vue.vModelText, $setup.songName]
      ])
    ]);
  }
  const ComponentsSearchVueSearchVue = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/A_学习/github/music/components/searchVue/searchVue.vue"]]);
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
    setup(__props, { expose: __expose }) {
      __expose();
      const currentTime = vue.ref(0);
      const duration = vue.ref(100);
      const isPlaying = vue.ref(false);
      const isCustomActive = vue.ref(false);
      const isActivityActive = vue.ref(false);
      uni.setStorageSync("movies", JSON.stringify(getMovies.data));
      function handleTouchStart(type) {
        formatAppLog("log", "at pages/index/index.vue:155", "开始触摸");
        if (type === "isCustomActive") {
          isCustomActive.value = true;
        }
      }
      function handleTouchEnd(type) {
        formatAppLog("log", "at pages/index/index.vue:161", "结束触摸");
        if (type === "isCustomActive") {
          setTimeout(() => {
            isCustomActive.value = false;
          }, 120);
        }
      }
      function onPlaySong() {
        formatAppLog("log", "at pages/index/index.vue:172", "播放歌曲");
      }
      const togglePlay = () => {
        isPlaying.value = !isPlaying.value;
      };
      const __returned__ = { title, currentTime, duration, isPlaying, isCustomActive, isActivityActive, handleTouchStart, handleTouchEnd, onPlaySong, togglePlay, ref: vue.ref, searchVue: ComponentsSearchVueSearchVue, get getMovies() {
        return getMovies;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 本周精选 "),
        vue.createElementVNode("view", { class: "week-recommend" }, [
          vue.createCommentVNode(" 背景图 "),
          vue.createElementVNode("image", {
            src: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1000",
            mode: "aspectFill",
            class: "bg-image"
          }),
          vue.createCommentVNode(" 渐变遮罩层（从下往上） "),
          vue.createElementVNode("view", { class: "overlay" }),
          vue.createCommentVNode(" 文字内容区 "),
          vue.createElementVNode("view", { class: "text-content" }, [
            vue.createElementVNode("span", { class: "tag" }, "本周精选"),
            vue.createElementVNode("h2", { class: "title" }, "赛博之声 2024"),
            vue.createElementVNode("p", { class: "subtitle" }, "感受跨越维度的数字律动")
          ])
        ]),
        vue.createCommentVNode(" 为你定制 "),
        vue.createElementVNode("view", { class: "custom-made" }, [
          vue.createElementVNode("view", { class: "custom-made-title" }, [
            vue.createElementVNode("text", { class: "title" }, "为你定制"),
            vue.createElementVNode("text", { class: "more" }, "全部")
          ]),
          vue.createElementVNode("view", { class: "custom-made-list" }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["custom-made-item", { active: $setup.isCustomActive }]),
                onTouchstart: _cache[0] || (_cache[0] = ($event) => $setup.handleTouchStart("isCustomActive")),
                onTouchend: _cache[1] || (_cache[1] = ($event) => $setup.handleTouchEnd("isCustomActive")),
                onTouchcancel: _cache[2] || (_cache[2] = ($event) => $setup.handleTouchEnd("isCustomActive")),
                onClick: $setup.onPlaySong
              },
              [
                vue.createElementVNode("view", { class: "custom-made-item-container" }, [
                  vue.createElementVNode("image", {
                    src: "https://picsum.photos/seed/p1/400/400",
                    mode: "aspectFill",
                    class: "custom-made-item-image"
                  }),
                  vue.createElementVNode("view", { class: "play-icon" })
                ]),
                vue.createElementVNode("text", { class: "title" }, "2024 年度热门"),
                vue.createElementVNode("text", { class: "msg" }, "为您精选的年度最热歌曲。")
              ],
              34
              /* CLASS, NEED_HYDRATION */
            ),
            vue.createElementVNode("view", { class: "custom-made-item" }, [
              vue.createElementVNode("view", { class: "custom-made-item-container" }, [
                vue.createElementVNode("image", {
                  src: "https://picsum.photos/seed/p2/400/400",
                  mode: "aspectFill",
                  class: "custom-made-item-image"
                }),
                vue.createElementVNode("view", { class: "play-icon" })
              ]),
              vue.createElementVNode("text", { class: "title" }, "放松时光"),
              vue.createElementVNode("text", { class: "msg" }, "在忙碌的午后享受片刻宁静。")
            ])
          ])
        ]),
        vue.createCommentVNode(" 活动歌单推荐 "),
        vue.createElementVNode("view", { class: "activity-song-list" }, [
          vue.createElementVNode("text", { class: "title" }, "活动歌单推荐"),
          vue.createElementVNode("view", { class: "song-list" }, [
            vue.createElementVNode("view", { class: "song-item" }, [
              vue.createElementVNode("image", {
                src: "https://picsum.photos/200/300",
                mode: "aspectFill",
                class: "song-item-image"
              }),
              vue.createElementVNode("text", { class: "tag" }, "歌单"),
              vue.createElementVNode("text", { class: "msg" }, "为您精选的年度最热歌曲。")
            ]),
            vue.createElementVNode("view", { class: "song-item" }, [
              vue.createElementVNode("image", {
                src: "https://picsum.photos/200/300",
                mode: "aspectFill",
                class: "song-item-image"
              }),
              vue.createElementVNode("text", { class: "tag" }, "歌单"),
              vue.createElementVNode("text", { class: "msg" }, "在忙碌的午后享受片刻宁静。")
            ]),
            vue.createElementVNode("view", { class: "song-item" }, [
              vue.createElementVNode("image", {
                src: "https://picsum.photos/200/300",
                mode: "aspectFill",
                class: "song-item-image"
              }),
              vue.createElementVNode("text", { class: "tag" }, "歌单"),
              vue.createElementVNode("text", { class: "msg" }, "在忙碌的午后享受片刻宁静。")
            ]),
            vue.createElementVNode("view", { class: "song-item" }, [
              vue.createElementVNode("image", {
                src: "https://picsum.photos/200/300",
                mode: "aspectFill",
                class: "song-item-image"
              }),
              vue.createElementVNode("text", { class: "tag" }, "歌单"),
              vue.createElementVNode("text", { class: "msg" }, "在忙碌的午后享受片刻宁静。")
            ])
          ])
        ]),
        vue.createElementVNode("view", { style: { "height": "120rpx" } }),
        vue.createCommentVNode(" 播放栏 "),
        vue.createElementVNode("view", { class: "music-player" }, [
          vue.createElementVNode("image", {
            src: "https://picsum.photos/200/200",
            mode: "aspectFill",
            class: "player-cover"
          }),
          vue.createElementVNode("view", { class: "player-info" }, [
            vue.createElementVNode("text", { class: "song-name" }, "霓虹灰色"),
            vue.createElementVNode("text", { class: "artist" }, "周深"),
            vue.createElementVNode("view", null, [
              vue.createCommentVNode(' @change="sliderChange" '),
              vue.createElementVNode("slider", {
                max: $setup.duration,
                value: $setup.currentTime,
                activeColor: "#8A6DE9",
                backgroundColor: "#ccc",
                "block-size": "12",
                style: { "margin": "0" }
              }, null, 8, ["max", "value"])
            ])
          ]),
          vue.createElementVNode("view", { class: "player-controls" }, [
            vue.createCommentVNode(' <text class="control-btn">⏮</text> '),
            vue.createElementVNode(
              "text",
              {
                class: "play-btn",
                onClick: $setup.togglePlay
              },
              vue.toDisplayString($setup.isPlaying ? "⏸" : "▶"),
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "control-btn" }, "⏭")
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "D:/A_学习/github/music/pages/index/index.vue"]]);
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$5 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code2 = this.icons.find((v) => v.font_class === this.type);
        if (code2) {
          return code2.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/A_学习/github/music/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _imports_0$1 = "/static/logo.png";
  const _sfc_main$4 = {
    __name: "my",
    setup(__props, { expose: __expose }) {
      __expose();
      const songList = vue.ref([]);
      let timestamp = Date.now();
      let date = new Date(timestamp);
      function toSetting() {
        uni.navigateTo({
          url: "/pages/setting/setting"
        });
      }
      const __returned__ = { songList, get timestamp() {
        return timestamp;
      }, set timestamp(v) {
        timestamp = v;
      }, get date() {
        return date;
      }, set date(v) {
        date = v;
      }, toSetting, ref: vue.ref, searchVue: ComponentsSearchVueSearchVue };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" <searchVue></searchVue> "),
        vue.createCommentVNode(' <uni-nav-bar>\r\n    <view>标题栏</view>\r\n    <template v-slot:left><view>left</view></template>\r\n    <template v-slot:right><view>right</view></template>\r\n  </uni-nav-bar>\r\n  <view class="container">\r\n    <uni-section\r\n      title="带返回箭头+右侧图标"\r\n      subTitle="使用 left-icon/right-icon 设置左右图标"\r\n      type="line"\r\n      style="margin-bottom: 3px"\r\n    >\r\n      <view class="box-bg">\r\n        <uni-nav-bar shadow left-icon="left" right-icon="cart" title="标题" />\r\n      </view>\r\n    </uni-section>\r\n  </view> '),
        vue.createElementVNode("view", { class: "top-tab" }, [
          vue.createElementVNode("view", { class: "tab-left" }),
          vue.createElementVNode("view", { class: "tab-right" }, [
            vue.createCommentVNode(' <view class="msg">msg</view>\r\n      <view class="setting" @click="toSetting">设置</view> '),
            vue.createVNode(_component_uni_icons, {
              type: "email",
              size: "28",
              class: "msg"
            }),
            vue.createVNode(_component_uni_icons, {
              type: "settings",
              size: "28",
              onClick: $setup.toSetting
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "my-card" }, [
          vue.createElementVNode("view", { class: "card-msg" }, [
            vue.createElementVNode("image", {
              src: _imports_0$1,
              mode: "",
              class: "msg-img"
            }),
            vue.createElementVNode("view", { class: "msg-name" }, "风九四")
          ])
        ]),
        vue.createElementVNode("view", { class: "card-tab" }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(4, (item) => {
              return vue.createElementVNode("view", { class: "tab" }, [
                vue.createElementVNode("image", {
                  src: _imports_0$1,
                  mode: "",
                  style: { "width": "40px", "height": "40px" }
                }),
                vue.createElementVNode("span", null, "喜欢"),
                vue.createElementVNode("span", null, "188")
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
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
                    src: _imports_0$1,
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
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/A_学习/github/music/pages/my/my.vue"]]);
  const lyrics = [
    {
      pid: 2660294931,
      // 网易云音乐歌曲id
      sing: "双笙（陈元汐）",
      song: "具名之花",
      lyrics: `他们说 像荆棘,被织成爱的模型,演绎出你该有的边际,梦里也要屏息,是分不清 还是不愿分清,什么是具象的爱意,如果答案是秘密,就自己说给自己听,你会做巨大的花,伫立在乱流的碎石泥巴,任风猎猎吹 也吹不折你的枝芽,声音有真假 灌溉不同的疤,别害怕 不要停下,你应该的耳语,延伸进脊柱里,随着椎骨长出你,一生该有的标记,是分不清 还是不愿分清,什么是具象的爱意,脆弱时允许哭泣,你是自己的谜题,你会做巨大的花,伫立在乱流的碎石泥巴,任风猎猎吹 也吹不折你的枝芽,声音有真假 灌溉不同的疤,别害怕 不要停下,我要做巨大的花,伫立在乱流的碎石泥巴,任风猎猎吹 也吹不断我的枝丫,声音有真假 灌溉不同的疤,不害怕 去缀化,无垠外长着 不具名的花,哼着 唱着 她们的梦话`,
      isLike: 1
    }
  ];
  const _imports_0 = "/static/images/play/prev-icon.png";
  const _imports_1 = "/static/images/play/next-icon.png";
  const _imports_2 = "/static/images/play/list-icon.png";
  const _sfc_main$3 = {
    __name: "test",
    setup(__props, { expose: __expose }) {
      __expose();
      formatAppLog("log", "at pages/test/test.vue:112", "lyrics", lyrics);
      const lyricsContainerHeight = vue.ref(300);
      const currentLyricIndex = vue.ref(0);
      const displayedLyrics = vue.ref([]);
      let playMode = vue.ref("list");
      let context = vue.ref({});
      let duration = vue.ref(-1);
      let currentTime = vue.ref(0);
      const songList = vue.ref(JSON.parse(uni.getStorageSync("movies")));
      let songIndex = vue.ref(0);
      let playStatus = vue.ref(false);
      let playStatusMode = vue.ref("stop");
      let isPopupShow = vue.ref(false);
      function getSongIndex() {
        const index = uni.getStorageSync("songIndex");
        const parsedIndex = parseInt(index);
        return isNaN(parsedIndex) ? 0 : parsedIndex;
      }
      songIndex.value = getSongIndex();
      vue.watch(songIndex, (newIndex) => {
        uni.setStorageSync("songIndex", newIndex);
      });
      vue.onMounted(() => {
        formatAppLog("log", "at pages/test/test.vue:152", "进入页面");
        songIndex.value = getSongIndex();
        playMode.value = uni.getStorageSync("playMode") || "list";
        context.value = uni.createInnerAudioContext();
        setAndSrc(songIndex.value);
        playStatus.value = context.value.paused;
        formatAppLog("log", "at pages/test/test.vue:162", "当前歌曲", context.value);
        context.value.onCanplay(() => {
          duration.value = context.value.duration;
        });
        context.value.onError((res) => {
          formatAppLog("log", "at pages/test/test.vue:171", res.errMsg);
          formatAppLog("log", "at pages/test/test.vue:172", res.errCode);
        });
        context.value.onTimeUpdate(() => {
          currentTime.value = context.value.currentTime;
        });
        setupAudioListeners();
      });
      function setAndSrc(index) {
        songIndex.value = index;
        context.value.src = songList.value[songIndex.value].url;
        const currentLyrics = lyrics.find((item) => item.pid == songList.value[songIndex.value].id);
        context.value.lyrics = currentLyrics ? currentLyrics.lyrics : "无歌词";
      }
      function formatLyrics(lyricsText) {
        if (!lyricsText || lyricsText === "无歌词") {
          return ["暂无歌词"];
        }
        return lyricsText.split(",");
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
        uni.setStorageSync("playMode", playMode.value);
      };
      function setupAudioListeners() {
        context.value.onEnded(() => {
          if (playMode.value === "single") {
            context.value.seek(0);
            context.value.play();
          } else if (playMode.value === "random") {
            songIndex.value = Math.floor(Math.random() * songList.value.length);
            setAndSrc(songIndex.value);
            context.value.seek(0);
            context.value.play();
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
          context.value.play();
          playStatusMode.value = "play";
        }
      }
      const changeSong = (type, index) => {
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
      vue.onUnmounted(() => {
        context.value.destroy();
      });
      const __returned__ = { lyricsContainerHeight, currentLyricIndex, displayedLyrics, get playMode() {
        return playMode;
      }, set playMode(v) {
        playMode = v;
      }, get context() {
        return context;
      }, set context(v) {
        context = v;
      }, get duration() {
        return duration;
      }, set duration(v) {
        duration = v;
      }, get currentTime() {
        return currentTime;
      }, set currentTime(v) {
        currentTime = v;
      }, songList, get songIndex() {
        return songIndex;
      }, set songIndex(v) {
        songIndex = v;
      }, get playStatus() {
        return playStatus;
      }, set playStatus(v) {
        playStatus = v;
      }, get playStatusMode() {
        return playStatusMode;
      }, set playStatusMode(v) {
        playStatusMode = v;
      }, get isPopupShow() {
        return isPopupShow;
      }, set isPopupShow(v) {
        isPopupShow = v;
      }, getSongIndex, setAndSrc, formatLyrics, changeMode, setupAudioListeners, onPlay, changeSong, openPopup, closePopup, formatTime, sliderChange, ref: vue.ref, onMounted: vue.onMounted, onUnmounted: vue.onUnmounted, watch: vue.watch, get lyrics() {
        return lyrics;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    var _a, _b, _c;
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { style: { "width": "90%", "height": "80%", "margin": "auto", "padding": "0 0 10% 0" } }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("img", {
              style: { "width": "100%", "border-radius": "6%" },
              src: (_a = $setup.songList[$setup.songIndex]) == null ? void 0 : _a.pic
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { style: { "padding-top": "40rpx", "line-height": "2" } }, [
            vue.createElementVNode(
              "view",
              { style: { "font-size": "40rpx", "font-weight": "bold" } },
              vue.toDisplayString((_b = $setup.songList[$setup.songIndex]) == null ? void 0 : _b.sing),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              null,
              vue.toDisplayString((_c = $setup.songList[$setup.songIndex]) == null ? void 0 : _c.song),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              {
                class: "lyrics-container",
                ref: "lyricsContainerRef",
                style: vue.normalizeStyle([{ height: $setup.lyricsContainerHeight + "rpx" }, { "margin-top": "20rpx" }])
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.formatLyrics($setup.context.lyrics), (line, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        key: index,
                        class: vue.normalizeClass({ "current-line": index === $setup.currentLyricIndex })
                      },
                      vue.toDisplayString(line),
                      3
                      /* TEXT, CLASS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              4
              /* STYLE */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "music" }, [
          vue.createElementVNode("view", { class: "music-box" }, [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("slider", {
                max: $setup.duration,
                value: $setup.currentTime,
                onChange: $setup.sliderChange,
                activeColor: "#FFCC33",
                backgroundColor: "#ccc",
                "block-color": "#8A6DE9",
                "block-size": "12",
                style: { "margin": "0" }
              }, null, 40, ["max", "value"])
            ]),
            vue.createElementVNode("view", { class: "music-time" }, [
              vue.createElementVNode(
                "view",
                { class: "time-left" },
                vue.toDisplayString($setup.formatTime($setup.currentTime)),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "time-right" },
                vue.toDisplayString($setup.formatTime($setup.duration)),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createElementVNode("view", { class: "play-btn" }, [
            vue.createElementVNode("view", { class: "no-play" }, [
              vue.createElementVNode("image", {
                src: `../../static/images/play/${$setup.playMode}-loop-icon.png`,
                mode: "",
                onClick: $setup.changeMode
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode("view", {
              class: "no-play",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.changeSong("prev"))
            }, [
              vue.createElementVNode("image", {
                src: _imports_0,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", {
              class: "play",
              onClick: $setup.onPlay
            }, [
              vue.createElementVNode("image", {
                src: `../../static/images/play/${$setup.playStatusMode}-icon.png`,
                mode: ""
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode("view", {
              class: "no-play",
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.changeSong("next"))
            }, [
              vue.createElementVNode("image", {
                src: _imports_1,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", {
              class: "no-play",
              onClick: $setup.openPopup
            }, [
              vue.createElementVNode("image", {
                src: _imports_2,
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
              class: vue.normalizeClass(["popup", { "popup-show": $setup.isPopupShow }])
            },
            [
              vue.createElementVNode("view", { class: "popup-content" }, [
                vue.createCommentVNode(" 弹出层内容 "),
                vue.createElementVNode("view", { class: "popup-header" }, "歌曲名称：xxx"),
                vue.createCommentVNode(" <view>歌曲名称：{{ currentSong.name }}</view> "),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.songList, (song, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      onClick: ($event) => $setup.openPopup(song)
                    }, [
                      vue.createCommentVNode(" {{ song }} "),
                      vue.createElementVNode("view", {
                        onClick: ($event) => $setup.changeSong(_ctx._, index),
                        style: { "display": "flex", "justify-content": "space-between", "align-items": "center", "padding": "10rpx 0", "width": "90vw" }
                      }, [
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass({ "currentIndex": index === $setup.songIndex }),
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
                                class: vue.normalizeClass([{ "currentIndex": index === $setup.songIndex }, "popup-content-sing"])
                              },
                              vue.toDisplayString(" - " + song.sing),
                              3
                              /* TEXT, CLASS */
                            )
                          ],
                          2
                          /* CLASS */
                        ),
                        vue.createElementVNode("view", { style: { "color": "rgba(51, 51, 51,0.8)", "display": "flex", "align-items": "center" } }, [
                          vue.createElementVNode(
                            "view",
                            {
                              class: vue.normalizeClass({ "currentIndex": index === $setup.songIndex }),
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
          $setup.isPopupShow ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "mask",
            onClick: $setup.closePopup
          })) : vue.createCommentVNode("v-if", true)
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/A_学习/github/music/pages/test/test.vue"]]);
  const _sfc_main$2 = {
    __name: "setting",
    setup(__props, { expose: __expose }) {
      __expose();
      function toAccount(index) {
        formatAppLog("log", "at pages/setting/setting.vue:27", index);
      }
      function toTheme() {
        uni.navigateTo({
          url: "/pages/setting/theme/theme"
        });
      }
      const __returned__ = { toAccount, toTheme, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 组件 "),
        vue.createElementVNode("view", { class: "account" }, [
          vue.createElementVNode("span", { class: "title" }, "账号"),
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(5, (value, index) => {
              return vue.createElementVNode("view", {
                key: index,
                onClick: ($event) => $setup.toAccount(index),
                class: "account-item"
              }, [
                vue.createElementVNode("view", null, "个人资料"),
                vue.createCommentVNode(" <view>></view> "),
                vue.createVNode(_component_uni_icons, {
                  type: "right",
                  size: "16"
                })
              ], 8, ["onClick"]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", {
          onClick: $setup.toTheme,
          class: "account-item"
        }, [
          vue.createElementVNode("view", null, "主题设置"),
          vue.createCommentVNode(" <view>></view> "),
          vue.createVNode(_component_uni_icons, {
            type: "right",
            size: "16"
          })
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesSettingSetting = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/A_学习/github/music/pages/setting/setting.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 选择主题 ");
  }
  const PagesSettingThemeTheme = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/A_学习/github/music/pages/setting/theme/theme.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("components/searchVue/searchVue", ComponentsSearchVueSearchVue);
  __definePage("pages/test/test", PagesTestTest);
  __definePage("pages/setting/setting", PagesSettingSetting);
  __definePage("pages/setting/theme/theme", PagesSettingThemeTheme);
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
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/A_学习/github/music/App.vue"]]);
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
