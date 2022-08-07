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
  const p = (tree) => {
    console.log(tree)
    tree.map(item => {
      console.log(item)
      if (item.children) {
        p(item.children);
      }
      arr.push(item.id);
    })
  }
  let arr = [];
  function fn(tree, num, key) {
    console.log(tree)
  
    tree.forEach(item => {
      console.log(item[key])
      if (item[key] === num) {
      console.log(item.children)
  
        if (item.children) {
          p(item.children)
        }
        else {
          arr.push("当前节点下无子节点");
        }
      }
      if (item.children) {
        fn(item.children, num, key)
      }
    })
  }
  fn(tree, '1', 'id')
  console.log(arr)