export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array))
}

export const find = (id, array) => { 
    return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndex = (idWidthUnknowIndex, array) => {
    return array.findIndex((itemInArray) => itemInArray.id === idWidthUnknowIndex)
}

export const filter = (idOfItemToRemove, array) => {
    return array.filter((item) => item.id !== idOfItemToRemove)
}