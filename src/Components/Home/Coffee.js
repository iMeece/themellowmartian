const Coffee = () => {

    const menuList = {
        listOne: [
            {
                title: 'Black',
                price: 'R9.99'
            },
            {
                title: 'Latte',
                price: 'R12.99'
            },
            {
                title: 'Cappuccino',
                price: 'R13.99'
            }
        ],
        listTwo: [
            {
                title: 'Americano',
                price: 'R9.99'
            },
            {
                title: 'Espresso',
                price: 'R12.99'
            },
            {
                title: 'Doppio',
                price: 'R13.99'
            }
        ],
        listThree: [
            {
                title: 'Red Eye',
                price: 'R9.99'
            },
            {
                title: 'Cortado',
                price: 'R12.99'
            },
            {
                title: 'Irish',
                price: 'R13.99'
            }
        ]
    };

    return (
        <article id='home-coffee'>
            <div id='home-coffee-container' className='container'>
                <h3>Coffee Selection</h3>
                <div className='home-coffee-item'>
                    <div className='home-coffee-item-list'>
                        {menuList.listOne.map((item, index) => (
                            <div className='home-coffee-item-container' key={ 'listOne-' + index }>
                                <h5 className='home-coffee-item-title'>{ item.title }</h5>
                                <h5 className='home-coffee-item-price'>{ item.price }</h5>
                            </div>
                        ))}
                    </div>
                    <div id='home-coffee-item-img-1' className='home-coffee-item-img'></div>
                </div>

                <div className='home-coffee-item'>
                    <div id='home-coffee-item-img-2' className='home-coffee-item-img'></div>
                    <div className='home-coffee-item-list-right'>
                        {menuList.listTwo.map((item, index) => (
                            <div className='home-coffee-item-container' key={ 'listTwo-' + index }>
                                <h5 className='home-coffee-item-title'>{ item.title }</h5>
                                <h5 className='home-coffee-item-price'>{ item.price }</h5>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='home-coffee-item'>
                    <div className='home-coffee-item-list'>
                        {menuList.listThree.map((item, index) => (
                            <div className='home-coffee-item-container' key={ 'listThree-' + index }>
                                <h5 className='home-coffee-item-title'>{ item.title }</h5>
                                <h5 className='home-coffee-item-price'>{ item.price }</h5>
                            </div>
                        ))}
                    </div>
                    <div id='home-coffee-item-img-3' className='home-coffee-item-img'></div>
                </div>
            </div>
        </article>
    );
}
 
export default Coffee;