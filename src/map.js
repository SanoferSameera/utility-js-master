const map = (array,funcName) => {
    if(funcName == 'cube')
    {
        return array.map(findCube);
    }
    if(funcName == 'identity')
    {
        return array.map(findIdentity);
    }
    return array.map(funcName);
}

function findCube(num)
{
    return num ** 3;
}

function findIdentity(num)
{
    return num;
}
module.exports = map;