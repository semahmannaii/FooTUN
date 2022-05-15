import * as actionTypes from "./types"

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "River Plate Home Kit",
            price: 95,
            img: require("../../images/river.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 2,
            title: "Boca Home Kit",
            price: 95,
            img: require("../../images/boca.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 3,
            title: "Man Utd Home Kit",
            price: 70,
            img: require("../../images/manchester.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 4,
            title: "Real Madrid Home kit",
            price: 75,
            img: require("../../images/real.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 5,
            title: "FC Barcelona Home Kit",
            price: 75,
            img: require("../../images/barcelona.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 5,
            title: "Bayern Munich Home Kit",
            price: 60,
            img: require("../../images/bayern.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 7,
            title: "Black Jogging Pant",
            price: 50,
            img: require("../../images/jogging.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 35,
            title: "Gray Jogging Pant",
            price: 75,
            img: require("../../images/gray.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 9,
            title: "Red Jogging Pant",
            price: 45,
            img: require("../../images/red.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 10,
            title: "Nike Phantom Black",
            price: 75,
            img: require("../../images/black.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 11,
            title: "Nike Phantom Blue",
            price: 90,
            img: require("../../images/blue.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 12,
            title: "Nike Phantom Orange",
            price: 120,
            img: require("../../images/orange.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 13,
            title: "Adidas NMD R1",
            price: 80,
            img: require("../../images/nmd.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 14,
            title: "Adidas Puremotion",
            price: 75,
            img: require("../../images/puremotion.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            id: 15,
            title: "Adidas Men's Superstar",
            price: 50,
            img: require("../../images/superstar.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, felis non dignissim facilisis, est justo convallis erat, non facilisis ante est eu augue. Integer tempor ultricies mauris, id molestie leo varius id. Aenean commodo convallis mauris id vulputate. Donec laoreet blandit mi, non porttitor lacus congue feugiat. Etiam sed mauris lacinia erat varius congue id in arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
    ],
    cart: [],
    currentItem: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case actionTypes.ADD_ITEM:

            const item = state.products.find((product) => product.id === action.payload.id)

            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false)

            return {
                ...state,
                cart: inCart ? state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }]
            }

        case actionTypes.REMOVE_ITEM:

            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            }

        case actionTypes.ADJUST_QTY:

            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item)
            }

        case actionTypes.LOAD_CURRENT_ITEM:

            return {
                ...state,
                currentItem: action.payload
            }

        default:

            return state
    }
}

export default reducer