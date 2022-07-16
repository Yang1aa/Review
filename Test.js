// 遍历给定节点id的所有子节点，如有结果以数组形式输出
const tree = [
    {
        id: "1",
        children: [
            {
                id: "2",
                children: [
                    {
                        id: "3",
                        children: [{ id: "4" }]
                    },
                    { id: "5" },
                    {
                        id: "6",
                        children: [{ id: "7" }]
                    },
                ]
            },
            {
                id: "8",
                children: [{ id: "9" }]
            }
        ]
    }
]
// const f = (children) => {
//     children.map((item) => {
//         arr.push(item.id);
//         if (item.children) {
//             f(item.children);
//         }
//     })
// }

// const fn = (tree, id, string) => {
//     tree.map((item) => {
//         if (item[string] === id) {
//             if (item.children)
//                 f(item.children)
//         } else {
//             if (item.children) {
//                 fn(item.children, id, string);
//             }
//         }
//     })
// }
// let arr = [];
// // 示例：fn(tree, '1', 'id') // [2，3，4，5，6，7，8，9]
// // 示例：fn(tree, '2', 'id') // [3，4，5，6，7]
// // 示例：fn(tree, '8', 'id') // [9]
// // 示例：fn(tree, '7', 'id') // '当前节点下无子节点'

const f = (tree) => {
    let arr = [];
    tree.map((item) => {
        if (item.id > 3) {
            arr.push(item.id);
        }
        if (item.children) {
            arr.push(...f(item.children))
        }
    })
    return arr;
}
console.log(f(tree))