const pyramidSort = (arr) => {
    return arr.filter((v, i)=>i % 2 === 0).reverse().concat(arr.filter((v, i)=>i % 2 === 1));
}

export default pyramidSort;
