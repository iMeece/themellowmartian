import { useState } from "react";
import MenuDisplayExtend from "./MenuDisplayExtend";

const MenuDisplayItem = ({item, index, menuList}) => {

    const [expanded, setExpanded] = useState(false);
    
    function expandItem() {
        if (expanded === true) {
            setExpanded(false);
        } else {
            setExpanded(true);
        };
    }

    return (
        <div onClick={expandItem} className={'home-menu-item home-menu-item-' + index}>
            <div className='home-menu-item-container'>
                <div><h4 className='home-menu-item-title'>{ item.title }</h4></div>
                {expanded && <MenuDisplayExtend menuList={menuList} />}
            </div>
        </div>
    );
}
 
export default MenuDisplayItem;