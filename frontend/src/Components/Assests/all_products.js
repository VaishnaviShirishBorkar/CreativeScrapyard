// homedecor images
import bottle_craft from './homedecor/bottle_craft.jpg'
import Decorative_candle_trays from './homedecor/Decorative_candle_trays.png'
import kitchen_organiser from './homedecor/kitchen_organiser.jpg'
import lamp_holder from './homedecor/lamp_holder.jpg'
import metallic_vase from './homedecor/metallic_vase.webp'
import newspaper_tea_coaster from './homedecor/newspaper_tea_coaster.png'
import paper_cups_lights from './homedecor/paper_cups_lights.jpg'
import pebbles_doormat from './homedecor/pebbles_doormat.png'
import pen_holder from './homedecor/pen_holder.jpg'
import table_mats from './homedecor/table_mats.png'

//Environment images
import bags_using_shirts from './Environment/bags_using_shirts.jpg'
import cd_coaster from './Environment/cd_coaster.webp'
import fancy_desk_organizer from './Environment/fancy_desk_organizer.jpg'
import lamp_plastic from './Environment/lamp_plastic.jpg'
import plastic_bottle_holder from './Environment/plastic_bottle_holder.png'
import plastic_piggybank from './Environment/plastic_piggybank.jpg'
import rakhi from './Environment/rakhi.jpg'
import terrarium from './Environment/terrarium.jpg'
import wooden_crate_shelf from './Environment/wooden_crate_shelf.png'

//Garden images
import bicycle_plants from './Garden/bicycle_plants.jpg'
import bird_feeder from './Garden/bird_feeder.jpg'
import bottle_plants from './Garden/bottle_plants.jpg'
import curtain_clay_pots from './Garden/curtain_clay_pots.jpg'
import garden_tire_recycling from './Garden/garden_tire_recycling.jpg'
import kitchenware_planters from'./Garden/kitchenware_planters.jpg'
import old_boot_planters from './Garden/old_boot_planters.jpg'
import old_furniture_planter from './Garden/old_furniture_planter.jpg'
import plastic_bottle_planter from './Garden/plastic_bottle_planter.jpg'

//Kids images
import glass_bottles_alien from './kids/glass_bottles_alien.jpg'
import make3d_card from './kids/make3d_card.jpg'
import photo_frame from './kids/photo_frame.jpg'
import piggy_bank from './kids/piggy_bank.jpg'
import plastic_brushholder from './kids/plastic_brushholder.jpg'
import reindeer_keyholder from './kids/reindeer_keyholder.jpg'
import tabletop_craft from './kids/tabletop_craft.png'
import tabletop_plane_trinket from './kids/tabletop_plane_trinket.jpg'
import wooden_frame from './kids/wooden_frame.jpg'

let all_products = [
    {
        id: 1,
        name:"Bottle Craft Art",
        category:"homedecor",
        image: bottle_craft,
        new_price: 250.00,
        old_price: 350.00,
        description: "Empty glass bottles are often thrown away.Instead, reuse them for simple decorations at home. Make a table lamp, showpiece, or flower vase out of used bottles Coloured papers or old magazines pages, good quality glue, and a flat brush are all that one needs to create a stunning bottle that can be used as a decor item\nThings required:\n 1.Empty glass bottles\n 2.Coloured papers or old magazine pages\n 3.Good quality glue\n 4.Sand and tiny shells (optional)\n"
    },
    {
        id: 2,
        name:"Decorative Candle Trays",
        category:"homedecor",
        image: Decorative_candle_trays,
        new_price: 150.00,
        old_price: 299.00,
        description: "Mirrors come in various shapes and sizes. But old mirrors can develop spots. Instead of throwing them, reuse them as sparkling trays for candles. Smoothen the edges of the mirror or fix a wooden frame around it. Place the mirror tray with candles and enjoy the soft reflected glow.\nThings required:\n 1.Old teacups\n 2.Wax\n 3.Fragrance\n Oil 4.Wick\n"
    },
    {
        id: 3,
        name:"Kitchen Organiser",
        category:"homedecor",
        image: kitchen_organiser,
        new_price: 250.00,
        old_price: 360.00,
        description: "From chocolates to cookies and sweets (rasgullas) many food items are packaged in tin cans these days. Reuse those tins as kitchen organisers, to keep the kitchen neat. After cleaning, decorate the tin with lace, wasabi tape, colored papers, fabric, coir, or simply spray paint it. Use the colourful tin box for storing knives, spoons, small masala packets, etc.\nThings required:\n 1.Tin Box\n 2.Decorative Tin Box like lace,paint,etc\n"
    },
    {
        id: 4,
        name:"Lamp Holder",
        category:"homedecor",
        image: lamp_holder,
        new_price: 550.00,
        old_price: 660.00,
        description:""
    },
    {
        id: 5,
        name:"Metallic Vase",
        category:"homedecor",
        image: metallic_vase,
        new_price: 499.00,
        old_price: 599.00,
        description:""
    },
    {
        id: 6,
        name:"Newspaper Tea Coaster",
        category:"homedecor",
        image: newspaper_tea_coaster,
        new_price: 250.00,
        old_price: 320.00,
        description:""
    },
    {
        id: 7,
        name:"Paper Cups Lights",
        category:"homedecor",
        image: paper_cups_lights,
        new_price: 120.00,
        old_price: 250.00,
        description:""
    },
    {
        id: 8,
        name:"Pebbles Doormat",
        category:"homedecor",
        image: pebbles_doormat,
        new_price: 130.00,
        old_price: 220.00,
        description:""
    },
    {
        id: 9,
        name:"Pen Holder",
        category:"homedecor",
        image: pen_holder,
        new_price: 199.00,
        old_price: 299.00,
        description:""
    },
    {
        id: 10,
        name:"Table Mats",
        category:"homedecor",
        image: table_mats,
        new_price: 260.00,
        old_price: 350.00,
        description:""
    },
    {
        id: 11,
        name:"Bags using Shirts",
        category:"Environment",
        image: bags_using_shirts,
        new_price: 399.00,
        old_price: 290.00,
        description:""
    },
    {
        id: 12,
        name:"CD Coaster",
        category:"Environment",
        image: cd_coaster,
        new_price: 280.00,
        old_price: 390.00,
        description:""
    },
    {
        id: 13,
        name:"Fancy Desk Organizer",
        category:"Environment",
        image: fancy_desk_organizer,
        new_price: 540.00,
        old_price: 650.00,
        description:""
    },
    {
        id: 14,
        name:"Plastic Lamp",
        category:"Environment",
        image: lamp_plastic,
        new_price: 370.00,
        old_price: 460.00,
        description:""
    },
    {
        id: 15,
        name:"Plastic Bottle Holder",
        category:"Environment",
        image: plastic_bottle_holder,
        new_price: 180.00,
        old_price: 260.00,
        description:""
    },
    {
        id: 16,
        name:"Plastic Piggybank",
        category:"Environment",
        image: plastic_piggybank,
        new_price: 260.00,
        old_price: 320.00,
        description:""
    },
    {
        id: 17,
        name:"Eco-friendly Rakhi",
        category:"Environment",
        image: rakhi,
        new_price: 280.00,
        old_price: 360.00,
        description:""
    },
    {
        id: 18,
        name:"Terrarium",
        category:"Environment",
        image: terrarium,
        new_price: 760.00,
        old_price: 840.00,
        description:""
    },
    {
        id: 19,
        name:"Wooden Crate Shelf",
        category:"Environment",
        image: wooden_crate_shelf,
        new_price: 570.00,
        old_price: 660.00,
        description:""
    },
    {
        id: 20,
        name:"Bicycle Plants",
        category:"Garden and Outdoors",
        image: bicycle_plants,
        new_price: 660.00,
        old_price: 780.00,
        description:""
    },
    {
        id: 21,
        name:"Bird Feeder",
        category:"Garden and Outdoors",
        image: bird_feeder,
        new_price: 250.00,
        old_price: 350.00,
        description:""
    },
    {
        id: 22,
        name:"Bottle Plants",
        category:"Garden and Outdoors",
        image: bottle_plants,
        new_price: 370.00,
        old_price: 450.00,
        description:""
    },
    {
        id: 23,
        name:"Curtain Clay Pots",
        category:"Garden and Outdoors",
        image: curtain_clay_pots,
        new_price: 599.00,
        old_price: 699.00,
        description:""
    },
    {
        id: 24,
        name:"Garden Tire Recycling",
        category:"Garden and Outdoors",
        image: garden_tire_recycling,
        new_price: 399.00,
        old_price: 490.00,
        description:""
    },
    {
        id: 25,
        name:"Kitchenware Planters",
        category:"Garden and Outdoors",
        image: kitchenware_planters,
        new_price: 460.00,
        old_price: 550.00,
        description:""
    },
    {
        id: 26,
        name:"Old Boot Planters",
        category:"Garden and Outdoors",
        image: old_boot_planters,
        new_price: 320.00,
        old_price: 450.00,
        description:""
    },
    {
        id: 27,
        name:"Old Furniture Planter",
        category:"Garden and Outdoors",
        image: old_furniture_planter,
        new_price: 770.00,
        old_price: 890.00,
        description:""
    },
    {
        id: 28,
        name:"Plastic Bottle Planter",
        category:"Garden and Outdoors",
        image: plastic_bottle_planter,
        new_price: 490.00,
        old_price: 599.00,
        description:""
    },
    {
        id: 29,
        name:"Alien Glass Bottles",
        category: "Kids",
        image: glass_bottles_alien,
        new_price: 199.00,
        old_price: 299.00,
        description:""
    },
    {
        id: 30,
        name:"3D Card",
        category: "Kids",
        image: make3d_card,
        new_price: 150.00,
        old_price: 290.00,
        description:""
    },
    {
        id: 31,
        name:"Photo Frame",
        category: "Kids",
        image: photo_frame,
        new_price: 360.00,
        old_price: 420.00,
        description:""
    },
    {
        id: 32,
        name:"Plastic Piggy Bank",
        category: "Kids",
        image: piggy_bank,
        new_price: 150.00,
        old_price: 250.00
    },
    {
        id: 33,
        name:"Plastic Brush Holder",
        category: "Kids",
        image: plastic_brushholder,
        new_price: 270.00,
        old_price: 360.00,
        description:""
    },
    {
        id: 34,
        name:"Reindeer Keyholder",
        category: "Kids",
        image: reindeer_keyholder,
        new_price: 310.00,
        old_price: 420.00,
        description:""
    },
    {
        id: 35,
        name:"Tabletop Craft",
        category: "Kids",
        image: tabletop_craft,
        new_price: 499.00,
        old_price: 599.00,
        description:""
    },
    {
        id: 36,
        name:"Tabletop Plane Trinket",
        category: "Kids",
        image: tabletop_plane_trinket,
        new_price: 280.00,
        old_price: 390.00,
        description:""
    }
]

export default all_products;