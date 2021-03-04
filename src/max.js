const max = (list,len) => {
    if(len == 1)
    {
        return list[0];
    }
    return Math.max(list[len-1],max(list,len-1));
}

module.exports= max;