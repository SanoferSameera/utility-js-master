const filter = (arr,funcName) => {
    if(funcName == 'filterUpperCase')
    {
        return arr.filter(filterUpperCase);
    }
    return arr.filter(funcName);
}

function filterUpperCase(ele)
{
    if(ele == ele.toUpperCase())
    {
        return ele;
    }
}
module.exports=filter;

