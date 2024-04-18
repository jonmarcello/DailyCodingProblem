// Given a sorted array, convert it into a height-balanced binary search tree.

const array = [-10,-3,0,5,9];

const createBST = (array, a=[]) => {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);

    const node = {
        value: array[mid],
        left: createBST(array.slice(0, mid)),
        right: createBST(array.slice(mid + 1))
    };

    return node;
}


const bstToArr = (bst, a=[]) => {
    if (bst === null) return;

    a.push(bst.value);
    bstToArr(bst.left, a);
    bstToArr(bst.right, a);

    return a;
}

const a = bstToArr(createBST(array));

console.log(a);