//https://stackoverflow.com/questions/21910998/how-to-sort-an-array-so-that-the-largest-value-gets-in-the-middle

const pyramidSort = (arr) => {
    return arr.filter((v, i)=>i % 2 === 0).reverse().concat(arr.filter((v, i)=>i % 2 === 1));
}

export default pyramidSort;
