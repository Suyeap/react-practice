import {createContext} from 'react';

// 컨텍스트: 리액트 컴포넌트를 담은 객체이므로 대문자
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {},
});

