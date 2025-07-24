// import type { CardItem } from "./Сards"

// export const MockCardsData: CardItem[] = [
//     {
//         id: 1,
//         name: "Tortilla Chips",
//         details: {
//             article: "44087-1225",
//             price: 300,
//             quantity: 1,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 2,
//         name: "Garlic Herb Seasoning",
//         details: {
//             article: "16590-023",
//             price: 200,
//             quantity: 5,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 3,
//         name: "Chicken Breasts",
//         details: {
//             article: "55154-1345",
//             price: 1000,
//             quantity: 5,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 4,
//         name: "Lemon Garlic Shrimp",
//         details: {
//             article: "48951-1053",
//             price: 900,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 5,
//         name: "Personal Blender with Travel Lid",
//         details: {
//             article: "36987-3198",
//             price: 3500,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 6,
//         name: "Cheddar Cheese Slices",
//         details: {
//             article: "55154-6163",
//             price: 350,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 7,
//         name: "Infrared Space Heater",
//         details: {
//             article: "41520-180",
//             price: 10000,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 8,
//         name: "Gardening Gloves with Claws",
//         details: {
//             article: "53645-1210",
//             price: 2500,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 9,
//         name: "Motion Sensor Light",
//         details: {
//             article: "68084-202",
//             price: 2000,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 10,
//         name: "Customizable Photo Calendar",
//         details: {
//             article: "54868-5010",
//             price: 2000,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 11,
//         name: "Inspirational Wall Art",
//         details: {
//             article: "48951-1025",
//             price: 2500,
//             quantity: 2,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 12,
//         name: "Plant Pot Drip Trays",
//         details: {
//             article: "54868-5829",
//             price: 1000,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 13,
//         name: "Trainers with Mesh Inserts",
//         details: {
//             article: "0143-9769",
//             price: 7000,
//             quantity: 1,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 14,
//         name: "Herbed Couscous",
//         details: {
//             article: "49158-503",
//             price: 250,
//             quantity: 2,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 15,
//         name: "Diced Tomatoes (canned)",
//         details: {
//             article: "55289-606",
//             price: 150,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 16,
//         name: "Artisan Bread",
//         details: {
//             article: "63354-871",
//             price: 460,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 17,
//         name: "Travel Makeup Organizer",
//         details: {
//             article: "0143-9757",
//             price: 2600,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 18,
//         name: "Savory Oatmeal",
//         details: {
//             article: "33261-646",
//             price: 250,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 19,
//         name: "Chocolate Mint Cookies",
//         details: {
//             article: "0378-0373",
//             price: 230,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 20,
//         name: "Brown Rice",
//         details: {
//             article: "0093-5124",
//             price: 180,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 21,
//         name: "Tortilla Chips",
//         details: {
//             article: "44087-1225",
//             price: 300,
//             quantity: 1,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 22,
//         name: "Garlic Herb Seasoning",
//         details: {
//             article: "16590-023",
//             price: 200,
//             quantity: 5,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 23,
//         name: "Chicken Breasts",
//         details: {
//             article: "55154-1345",
//             price: 1000,
//             quantity: 5,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 24,
//         name: "Lemon Garlic Shrimp",
//         details: {
//             article: "48951-1053",
//             price: 900,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 25,
//         name: "Personal Blender with Travel Lid",
//         details: {
//             article: "36987-3198",
//             price: 3500,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 26,
//         name: "Cheddar Cheese Slices",
//         details: {
//             article: "55154-6163",
//             price: 350,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 27,
//         name: "Infrared Space Heater",
//         details: {
//             article: "41520-180",
//             price: 10000,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 28,
//         name: "Gardening Gloves with Claws",
//         details: {
//             article: "53645-1210",
//             price: 2500,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 29,
//         name: "Motion Sensor Light",
//         details: {
//             article: "68084-202",
//             price: 2000,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 30,
//         name: "Customizable Photo Calendar",
//         details: {
//             article: "54868-5010",
//             price: 2000,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 31,
//         name: "Inspirational Wall Art",
//         details: {
//             article: "48951-1025",
//             price: 2500,
//             quantity: 2,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 32,
//         name: "Plant Pot Drip Trays",
//         details: {
//             article: "54868-5829",
//             price: 1000,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 33,
//         name: "Trainers with Mesh Inserts",
//         details: {
//             article: "0143-9769",
//             price: 7000,
//             quantity: 1,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 34,
//         name: "Herbed Couscous",
//         details: {
//             article: "49158-503",
//             price: 250,
//             quantity: 2,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 35,
//         name: "Diced Tomatoes (canned)",
//         details: {
//             article: "55289-606",
//             price: 150,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 36,
//         name: "Artisan Bread",
//         details: {
//             article: "63354-871",
//             price: 460,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 37,
//         name: "Travel Makeup Organizer",
//         details: {
//             article: "0143-9757",
//             price: 2600,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 38,
//         name: "Savory Oatmeal",
//         details: {
//             article: "33261-646",
//             price: 250,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 39,
//         name: "Chocolate Mint Cookies",
//         details: {
//             article: "0378-0373",
//             price: 230,
//             quantity: 4,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     },
//     {
//         id: 40,
//         name: "Brown Rice",
//         details: {
//             article: "0093-5124",
//             price: 180,
//             quantity: 3,
//         },
//         get totalPrice() {
//             return this.details.price * this.details.quantity
//         }
//     }
 
// ]
