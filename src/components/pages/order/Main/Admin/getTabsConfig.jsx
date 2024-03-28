import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import EditForm from "../../Admin-Panel/EditForm.jsx";
import AddForm from "../../Admin-Panel/AddForm.jsx";
import HintMessage from "../../Admin-Panel/HintMessage.jsx"

export const getTabsConfig = (hasAlreadyBeenClicked) => [
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus />,
        Content : <AddForm />,
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline />,
        Content : hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
    },
]

export const getTabSelected = (tabs, currentTabSelected) => 
    tabs.find((tab) => tab.index === currentTabSelected)