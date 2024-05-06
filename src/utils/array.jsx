export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array))
}

export const findObjectById = (id, array) => { 
    return Array.isArray(array) && array.find((itemInArray) => itemInArray.id === id)
}

export const findIndexById = (idWidthUnknowIndex, array) => {
    return array.findIndex((itemInArray) => itemInArray.id === idWidthUnknowIndex)
}

export const removeObjectById = (idOfItemToRemove, array) => {
    return array.filter((item) => item.id !== idOfItemToRemove)
}

export const isEmpty = (array) => { 
    return array.length === 0
}
