import {createContext} from 'react';
import { CardItem } from './types';

export const GlobalCartContext = createContext({
  items: [],
  hidden: true,
  setHidden: () => {},
  addItem: (item: CardItem) => {},
  clearItem: () => {}
});

export const LoadingContext = createContext({
  active: false,
  toggle: () => {},
  start: () => {},
  stop: () => {}
})

export const StoreContext = createContext({
  store: []
});
