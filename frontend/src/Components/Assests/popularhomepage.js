import bottle_craft from './homedecor/bottle_craft.jpg'
import kitchen_organiser from './homedecor/kitchen_organiser.jpg'
import plastic_piggybank from './Environment/plastic_piggybank.jpg'
import lamp_plastic from './Environment/lamp_plastic.jpg'
import bicycle_plants from './Garden/bicycle_plants.jpg'
import tabletop_craft from './kids/tabletop_craft.png'

let popular_product = [
    {
        id: 1,
        name:"Bottle Craft Art",
        image: bottle_craft,
        new_price: 250.00,
        old_price: 350.00
    },
    {
        id: 2,
        name:"Kitchen Organizer",
        image: kitchen_organiser,
        new_price: 200.00,
        old_price: 350.00
    },
    {
        id: 1,
        name:"Plastic PiggyBank",
        image: plastic_piggybank,
        new_price: 150.00,
        old_price: 250.00
    },
    {
        id: 1,
        name:"Plastic Lamp",
        image: lamp_plastic,
        new_price: 330.00,
        old_price: 450.00
    },
    {
        id: 1,
        name:"Bicycle Plants",
        image: bicycle_plants,
        new_price: 499.00,
        old_price: 599.00
    },
    {
        id: 1,
        name:"Tabletop Craft",
        image: tabletop_craft,
        new_price: 150.00,
        old_price: 290.00
    }
]

export default popular_product;