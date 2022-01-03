const MenuDisplayExtend = ({menuList}) => {
    return (
        <div className='home-menu-item-expanded'>
            { menuList.items.map((item, index) => (
                <div className='home-menu-item-expanded-container' key={menuList.title + '-' + index}>
                    <div>
                        <h6 className='home-menu-item-expanded-title'>{ item.name }</h6>
                        <h6 className='home-menu-item-expanded-description'>{ item.description }</h6>
                    </div>
                    <div>
                        <h6>{ item.price }</h6>
                    </div>
                </div>
            )) }
        </div>
    );
}
 
export default MenuDisplayExtend;