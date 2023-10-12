export const SET_PRODUCTS = 'SET_PRODUCTS'

export function setProducts() {
    return {
        type: SET_PRODUCTS,
        payload: [
            {
                id: 1,
                name: "Galaxy S20",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image:
                    "https://dkstatics-public.digikala.com/digikala-products/2e16bad7f6ea176ae6502406d7342afe9982fbf7_1608030120.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 300,
            },

            {
                id: 2,
                name: "iPhone 12",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image: "https://dkstatics-public.digikala.com/digikala-products/9f5d8f6583a7289a096a9180ac88708856f4bd8f_1607433653.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 500,
            },

            {
                id: 3,
                name: "Redmi Note 8",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image:
                    "https://dkstatics-public.digikala.com/digikala-products/113846203.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 600,
            },

            {
                id: 4,
                name: "Galaxy A71",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image:
                    "https://dkstatics-public.digikala.com/digikala-products/120415904.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 700,
            },
        ]
    }
}