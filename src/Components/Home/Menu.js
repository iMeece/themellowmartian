import MenuDisplay from "./MenuDisplay";

const Menu = () => {

    const menuList = [
        {
            title: 'Egg Breakfast',
            items: [
                {
                    name: 'Classic Breakfast',
                    description: 'Egg on toasted bread, fries, sausage, and tomatoes',
                    price: 'R19.99'
                },
                {
                    name: 'Scrambled Egg Breakfast',
                    description: 'Scrambled eggs with a slice of toasted bread, bacon, and mushrooms',
                    price: 'R20.99'
                },
                {
                    name: 'Omelette Breakfast',
                    description: 'Omelette stuffed with bacon, cheese, and mushrooms',
                    price: 'R21.99'
                },
            ]
        },
        {
            title: 'Sandwiches',
            items: [
                {
                    name: 'Chicken Sandwich',
                    description: 'Toasted chicken sandwich with fries',
                    price: 'R13.99'
                },
                {
                    name: 'Ham Sandwich',
                    description: 'Toasted ham sandwich with fries',
                    price: 'R15.99'
                },
                {
                    name: 'Egg Sandwich',
                    description: 'Toasted scrambled egg sandwich with fries',
                    price: 'R14.99'
                },
            ]
        },
        {
            title: 'Pancakes',
            items: [
                {
                    name: 'Maple Pancakes',
                    description: 'Pancakes dressed with maple syrup',
                    price: 'R15.99'
                },
                {
                    name: 'Caramel Pancakes',
                    description: 'Pancakes dressed with caramel and banana toppings',
                    price: 'R17.99'
                },
                {
                    name: 'Blueberry Pancakes',
                    description: 'Pancake dressed with maple syrup and blueberry toppings',
                    price: 'R17.99'
                },
            ]
        }
    ];
    
    return (
        <article id='home-menu'>
            <div id='home-menu-container' className='container'>
                <h3>Menu</h3>
                <MenuDisplay menuList={ menuList }/>
            </div>
        </article>
    );
}
 
export default Menu;