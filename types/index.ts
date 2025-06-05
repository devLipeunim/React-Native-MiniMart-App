// The Product type
export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
};

// The CartItem type
export type CartItem = Product & {
  quantity: number;
};
