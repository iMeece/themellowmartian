import { useState } from 'react';

const Specials = () => {

    const specialsList = [
        {
            imageId: 'home-special-one',
            title: 'Classic Breakfast',
            description: 'A classic breakfast served with coffee'
        },
        {
            imageId: 'home-special-two',
            title: 'Chicken Sandwich',
            description: 'Toasted chicken sandwich with fries'
        },
        {
            imageId: 'home-special-three',
            title: 'Caramel Pancakes',
            description: 'Pancakes dressed with caramel and banana toppings'
        }
    ];

    const [special, setSpecial] = useState(specialsList[0]);

    function changeSpecials(num) {
        setSpecial(specialsList[num]);
    }
    
    return (
        <article id='home-specials'>
            <div id={special.imageId} className='container'>
                <div className='home-specials-text'>
                    <div className='home-specials-text-container'>
                        <h3 className='home-specials-title'>{ special.title }</h3>
                        <p className='home-specials-description'>{ special.description }</p>
                        <div id='home-specials-button-container'>
                            <button className='home-specials-button' onClick={() => {changeSpecials(0)}}></button>
                            <button className='home-specials-button' onClick={() => {changeSpecials(1)}}></button>
                            <button className='home-specials-button' onClick={() => {changeSpecials(2)}}></button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
 
export default Specials;