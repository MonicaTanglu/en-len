module.exports = {
    base: "/en/",
    title: "=_=",
    description: "学习大全",
    head: [
        ["link", { rel: "stylesheet", href: "/common.css" }],
        ["script", { charset: "utf-8", src: "/init.js" }]
        // ['link',{rel: 'stylesheet',href='/public/common.css'}]
    ],
    themeConfig: {
        // navbar: false,
        sidebar: [
            // '/',
            {
                title: "Harry Potter and the Sorcerer's Stone",
                path: '/one/preface/name',
                collapsable: true,
                children: [
                    {
                        title: '前言',
                        path: '/one/preface/name',
                        children: [
                            { title: '1.1 人名', path: '/one/preface/name' },
                            { title: '1.2 地名', path: '/one/preface/placename' }
                        ]
                    }, {
                        title: '第一章 大难不死的男孩',
                        path: '/one/chapter_1.md'
                    }, {
                        title: '第二章 悄悄消失的玻璃',
                        path: '/one/chapter_2.md'
                    }, {
                        title: '第三章 猫头鹰传书',
                        path: '/one/chapter_3.md'
                    }, {
                        title: '第四章 钥匙保管员',
                        path: '/one/chapter_4.md'
                    }, {
                        title: '第五章 对角巷',
                        path: '/one/chapter_5.md'
                    }, {
                        title: '第六章 9 3/4站台开始的旅程',
                        path: '/one/chapter_6.md'
                    }, {
                        title: '第七章 分院帽',
                        path: '/one/chapter_7.md'
                    }, {
                        title: '第八章 魔药课老师',
                        path: '/one/chapter_8.md'
                    }, {
                        title: '第九章 午夜决斗',
                        path: '/one/chapter_9.md'
                    }, {
                        title: '第十章 万圣节前夕',
                        path: '/one/chapter_10.md'
                    }, {
                        title: '第十一章 魁地奇比赛',
                        path: '/one/chapter_11.md'
                    }, {
                        title: '第十二章 厄里斯魔镜',
                        path: '/one/chapter_12.md'
                    }, {
                        title: '第十三章 尼可·勒梅',
                        path: '/one/chapter_13.md'
                    }, {
                        title: '第十四章 挪威脊背龙',
                        path: '/one/chapter_14.md'
                    }, {
                        title: '第十五章 禁林',
                        path: '/one/chapter_15.md'
                    }, {
                        title: '第十六章 穿越活板门',
                        path: '/one/chapter_16.md'
                    }, {
                        title: '第十七章 双面人',
                        path: '/one/chapter_17.md'
                    }

                ]
            }
        ]
    }

    // dest: 'docs',
    // sidebarDepth: 3,
    // themeConfig: {
    //     sidebar: [
    //         {
    //             title: "Harry Potter and the Sorcerer's Stone",
    //             path: "/one/preface/index",
    //             collapsable: false,
    //             children: [
    //                 '/one/preface/name',
    //                 '/one/preface/placename'
    //             ]
    //         }
    //     ]
    // }
}