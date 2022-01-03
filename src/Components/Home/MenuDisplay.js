import MenuDisplayItem from "./MenuDisplayItem";

const MenuDisplay = ({ menuList }) => {
    return (
        <div className='menu-display'>
            { menuList.map((item, index) => (
                <MenuDisplayItem key={'menu-item-' + index} item={item} index={index} menuList={menuList[index]}/>
            )) }
        </div>
    );
}
 
export default MenuDisplay;