import { createContext } from "react";

export default createContext ({
    isModeAdmin: false, 
    setIsModeAdmin: () => {},

    isCollapsed: false, 
    setIsCollapsed: () => {},

    isAddSelected: true, 
    setIsAddSelected: () => {},

    isEditSelected: false, 
    setIsEditSelected: () => {},

    currentTabSelected: false, 
    setCurrentTabSelected: () => {},

    menu : [],
    handleAdd: () => {},
    handleDelete: () => {},
})