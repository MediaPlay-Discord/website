if (!self.define) {
    const e = e => {
            "require" !== e && (e += ".js");
            let s = Promise.resolve();
            return a[e] || (s = new Promise((async s => {
                if ("document" in self) {
                    const a = document.createElement("script");
                    a.src = e, document.head.appendChild(a), a.onload = s
                } else importScripts(e), s()
            }))), s.then((() => {
                if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
                return a[e]
            }))
        },
        s = (s, a) => {
            Promise.all(s.map(e)).then((e => a(1 === e.length ? e[0] : e)))
        },
        a = {
            require: Promise.resolve(s)
        };
    self.define = (s, i, c) => {
        a[s] || (a[s] = Promise.resolve().then((() => {
            let a = {};
            const r = {
                uri: location.origin + s.slice(1)
            };
            return Promise.all(i.map((s => {
                switch (s) {
                    case "exports":
                        return a;
                    case "module":
                        return r;
                    default:
                        return e(s)
                }
            }))).then((e => {
                const s = c(...e);
                return a.default || (a.default = s), a
            }))
        })))
    }
}
define("./service-worker.js", ["./workbox-4d718be7"], (function (e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{
        url: "404.html",
        revision: "334a06eb5cd9b1164042ad4b1ad7c164"
    }, {
        url: "assets/icons/apple-icon-180.png",
        revision: "691044100b78259100226a8b04808eba"
    }, {
        url: "assets/icons/apple-splash-1125-2436.jpg",
        revision: "8e6903f6a332662666e8248ed5fdeb15"
    }, {
        url: "assets/icons/apple-splash-1136-640.jpg",
        revision: "6b22a3808e5e3d71955851c1db3b2623"
    }, {
        url: "assets/icons/apple-splash-1170-2532.jpg",
        revision: "7dfe6e5701e4393bb5b65c4ce8f798cc"
    }, {
        url: "assets/icons/apple-splash-1242-2208.jpg",
        revision: "e76caf900901394696ab3b1ad9ab98ed"
    }, {
        url: "assets/icons/apple-splash-1242-2688.jpg",
        revision: "406464aa8e2c7e93ba7ca649b51638f9"
    }, {
        url: "assets/icons/apple-splash-1284-2778.jpg",
        revision: "addde3eed9689014cbfde269d99c40d8"
    }, {
        url: "assets/icons/apple-splash-1334-750.jpg",
        revision: "cbdf620a64e3c85f83517bfca8a183b4"
    }, {
        url: "assets/icons/apple-splash-1536-2048.jpg",
        revision: "aaedc615b3bb000477ae5eecc93943d3"
    }, {
        url: "assets/icons/apple-splash-1620-2160.jpg",
        revision: "444aee6b83f417a2dd784dfbdc522270"
    }, {
        url: "assets/icons/apple-splash-1668-2224.jpg",
        revision: "c1c1e44e971f00ac1063f7e2b2f9772e"
    }, {
        url: "assets/icons/apple-splash-1668-2388.jpg",
        revision: "0c8e8600dff7440591e99004d5a7bb32"
    }, {
        url: "assets/icons/apple-splash-1792-828.jpg",
        revision: "b2d7d564e6f46c02ec178e9a12cb3c5d"
    }, {
        url: "assets/icons/apple-splash-2048-1536.jpg",
        revision: "c4279e63aefc511fea7492c6215377c2"
    }, {
        url: "assets/icons/apple-splash-2048-2732.jpg",
        revision: "c37c7c2f7e78e2b956f31259c2d9ac85"
    }, {
        url: "assets/icons/apple-splash-2160-1620.jpg",
        revision: "8fb8eea1faf3f95208ee662e33e9ff60"
    }, {
        url: "assets/icons/apple-splash-2208-1242.jpg",
        revision: "e1171e2e04777003c2447a5fa4cf3b9c"
    }, {
        url: "assets/icons/apple-splash-2224-1668.jpg",
        revision: "f26f3a1fa40576eb10d33cb0daf16bb7"
    }, {
        url: "assets/icons/apple-splash-2388-1668.jpg",
        revision: "c75ae89bc25784991e6282731520f2fa"
    }, {
        url: "assets/icons/apple-splash-2436-1125.jpg",
        revision: "6c3bfe1a6f488076078478a17d92451b"
    }, {
        url: "assets/icons/apple-splash-2532-1170.jpg",
        revision: "daf53e91675f08f0d2359fb75cde468b"
    }, {
        url: "assets/icons/apple-splash-2688-1242.jpg",
        revision: "3f401ccb61d20f6709fb2dc57887059e"
    }, {
        url: "assets/icons/apple-splash-2732-2048.jpg",
        revision: "6e40a7ffa96a027822b887f64824f047"
    }, {
        url: "assets/icons/apple-splash-2778-1284.jpg",
        revision: "dab87a83ecfad2860101c80064854c08"
    }, {
        url: "assets/icons/apple-splash-640-1136.jpg",
        revision: "b469352323e3f41e6081c5ad4a07b1cd"
    }, {
        url: "assets/icons/apple-splash-750-1334.jpg",
        revision: "bdb5ef4c95425f3347f6c20d6ef6b330"
    }, {
        url: "assets/icons/apple-splash-828-1792.jpg",
        revision: "409bb7f506285c678f45c9fe883af4b4"
    }, {
        url: "assets/icons/manifest-icon-192.png",
        revision: "90d2872b1f15aafb2d2094ed4000c465"
    }, {
        url: "assets/icons/manifest-icon-512.png",
        revision: "92bfab3098d7b7e73ca06c6cfce989e3"
    }, {
        url: "assets/Members.png",
        revision: "f5e6c93f52c344c12e915240b0b24313"
    }, {
        url: "assets/MPD-Button-Left.png",
        revision: "a742fcd10a2ef25759ade99bd49d6280"
    }, {
        url: "assets/MPD-Button-Right.png",
        revision: "aaf67f933dd33274e53b776c752c6c12"
    }, {
        url: "assets/MPD-Family-1-Picture-Compressed.webp",
        revision: "1830b8ad10e0d55e6710ca39f59bf275"
    }, {
        url: "assets/MPD-Family-1-Picture.png",
        revision: "76db3abcc3ce8e445df63a17233ae3ad"
    }, {
        url: "assets/MPD-Family-2-Picture-Compressed.webp",
        revision: "e0572e90239d815cb8e0e64d395d3319"
    }, {
        url: "assets/MPD-Family-2-Picture.png",
        revision: "40ab85c923e51610989eb164332e3ac9"
    }, {
        url: "assets/MPD-Family-3-Picture-Compressed.webp",
        revision: "ea92e3f9f4f7c455b16e1fcc5a26911f"
    }, {
        url: "assets/MPD-Family-3-Picture.png",
        revision: "094138d9e5c47eeb411d8a7ac64d3a5f"
    }, {
        url: "assets/MPD-Family-4-Picture-Compressed.webp",
        revision: "95eaafb2731b9817e2d0b5ab26947d03"
    }, {
        url: "assets/MPD-Favicon.ico",
        revision: "d8aed79cd341f5dfe56ba85e401377b9"
    }, {
        url: "assets/MPD-Logo-512px.png",
        revision: "1b331cfa8f01439d6a467993f72c51b6"
    }, {
        url: "assets/MPD-Logo-with-Text.png",
        revision: "eab35af58babab6cebcee313d42d24f0"
    }, {
        url: "assets/MPD-Logo.png",
        revision: "e570c93e31e94343d292209428b7bc7d"
    }, {
        url: "assets/News.png",
        revision: "e7f7a15d67a79e5e38a4443d1f266c01"
    }, {
        url: "assets/Status.png",
        revision: "702b183d23bdea8174756cd0a363b077"
    }, {
        url: "assets/svg/404-page-art.svg",
        revision: "c9c637b41712ca9b7734ecf468041eba"
    }, {
        url: "community.html",
        revision: "6c4e4f45e76fcd9c03adc1d37a0c4089"
    }, {
        url: "css/scrollBar.css",
        revision: "5da1bcb79c03edcf8ffd911162903c84"
    }, {
        url: "googlee68d914ab31c66fc.html",
        revision: "8f831b89609383addbdebe6c2a2aad37"
    }, {
        url: "index.html",
        revision: "02ef427f241867c77f6f15077329b8e5"
    }, {
        url: "manifest.json",
        revision: "f2f3c9bdfd90e62fd6d4bb6942de8d2d"
    }, {
        url: "README.md",
        revision: "bf11479ddf1e9c4b5bf6e8ea53dec42a"
    }, {
        url: "servers.html",
        revision: "76bfeaff19161088efb28409748b8886"
    }, {
        url: "submissions/404-page-art/sketch1613828200299.png",
        revision: "250851e828769100bb3b307bd210e4ac"
    }, {
        url: "submissions/Submissions.md",
        revision: "95e5bae3a742ffd935aed831a06946f9"
    }], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
    })
}));
//# sourceMappingURL=service-worker.js.map