export const API_ENDPOINTS = {
    PRODUCTS: {
        LIST: '/products',
        DETAIL: '/products',
        CREATE: '/products',
        UPDATE: '/products',
        DELETE: '/products'
    },
    CATEGORIES: {
        LIST: '/categories',
        DETAIL: '/categories',
        CREATE: '/categories',
        UPDATE: '/categories',
        DELETE: '/categories'
    },
    AUTHORIZATION: {
        LOGIN: '/authorization',
        REGISTER: '/authorization/register',
        LOGOUT: '/authorization/logout',
    },
    BLOGS: {
        LIST: '/blogs',
        DETAIL: '/blogs',
        CREATE: '/blogs',
        UPDATE: '/blogs',
        DELETE: '/blogs'
    },
    CONTACT: {
        LIST: '/contact',
        UPDATE: '/contact',
    },
    ABOUT: {
        LIST: '/about',
        UPDATE: '/about',
    },
    CARTS: {
        LIST: '/carts',
        DETAIL: '/carts',
        CREATE: '/carts',
        UPDATE: '/carts',
        DELETE: '/carts'
    },
    USERS: {
        LIST: '/users',
    },
    EMAIL: {
        SEND: '/email',
    },
    MOMO: {
        PAYMENT: '/payment',
    }
};

export const ROLES = {
    ADMIN: "Admin",
    USER: "User"
};