import { createContext, useReducer, useContext, ReactNode, useEffect, Dispatch } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = Product[];

const CartContext = createContext({} as { cart: CartState; dispatch: Dispatch<CartAction> });

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: number; action: 'increase' | 'decrease' } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: number } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: Product[], action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find((item) => item.id === action.payload?.id);

      if (existingItem) {
        return state.map((item) => (item.id === action.payload?.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        return [...state, { ...action.payload, quantity: 1 } as any];
      }

    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.itemId
          ? {
              ...item,
              quantity:
                action.payload.action === 'increase'
                  ? item.quantity + 1
                  : action.payload.action === 'decrease'
                    ? Math.max(1, item.quantity - 1)
                    : item.quantity
            }
          : item
      );

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload?.id);

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};

type CartProviderProps = {
  children: ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const savedCart = JSON.parse(localStorage.getItem('cart') || '[]') as CartState;
  const [cart, dispatch] = useReducer(cartReducer, savedCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch } as { cart: CartState; dispatch: React.Dispatch<CartAction> }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
