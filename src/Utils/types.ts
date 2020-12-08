export interface CardItem {
  id: number,
  name: string,
  price: number,
  description: string,
  quantity: number,
}

export interface CardSectionProps {
  data: CardItem[],
  number: number,
  title: string
}

export interface CartContextProps {
  items: CardItem[],
  addItem: (item: CardItem) => {},
  removeItem: (item: CardItem) => {},
  clearItem: () => {}
};

export interface CheckoutItemProps {
  data: CardItem
}