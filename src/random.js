function choice(arr){
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

export { choice };