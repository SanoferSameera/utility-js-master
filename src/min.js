const min = (list,len) => {
    if( len == 1)
    {
        return list[0];
    }
    return Math.min(list[len-1],min(list,len-1));
}
module.exports = min;