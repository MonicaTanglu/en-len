module.exports = {
    title: "《学习大全》",
    description: "学习大全",
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