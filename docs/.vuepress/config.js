module.exports = {
    title: "《学习大全》",
    description: "学习大全",
    head: [
        ["link", { rel: "stylesheet", href: "/common.css" }],
        // ['link',{rel: 'stylesheet',href='/public/common.css'}]
    ],
    themeConfig: {
        sidebar: [
            // '/',
            {
                title: "Harry Potter and the Sorcerer's Stone",
                path: '/one/preface/name',
                collapsable: false,
                children: [
                    {
                        title: '前言', 
                        path: '/one/preface/name', 
                        children: [
                            { title: '1.1 人名', path: '/one/preface/name' },
                            { title: '1.2 地名', path: '/one/preface/placename' }
                        ]
                    },{
                        title: '第一章 大难不死的男孩',
                        path: '/one/chapter_1.md'
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