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
// // 示例：fn(tree, '1', 'id') // [2，3，4，5，6，7，8，9]
// // 示例：fn(tree, '2', 'id') // [3，4，5，6，7]
// // 示例：fn(tree, '8', 'id') // [9]
// // 示例：fn(tree, '7', 'id') // '当前节点下无子节点'

let f = (tree) => {
    let arr = [];
    tree.map((item) => {
        arr.push(item.id);
        if (item.children) {
            arr.push(...f(item.children))
        }
    })
    return arr;
}

let fn = (tree, num, id) => {
    let arr = [];
    tree.map((item) => {
        console.log('item', item.id, 'num', num)
        if (item.id === num) {
            console.log('item.id', item.id)
            if (item.children)
                arr = [...f(item.children)];
            console.log('arr', arr)
        } else {
            if (item.children) {
                arr.push(...fn(item.children, num, id))
            }
        }
    })
    return arr;
}

console.log(fn(tree, '2', 'id'))// [2，3，4，5，6，7，8，9]