import { createStore } from "redux";

const initial = { items: [], count: 0 };

function reducer(state = initial, action) {
  if (action.type === "add") {
    if (!state.items.find((i) => i.id === action.item.id)) {
      return {
        ...state,
        items: [...state.items, { ...action.item, qty: 1 }],
        count: state.count + 1,
      };
    }
  }
  if (action.type === "inc") {
    return {
      ...state,
      items: state.items.map((i) =>
        i.id === action.id ? { ...i, qty: i.qty + 1 } : i
      ),
    };
  }
  if (action.type === "dec") {
    return {
      ...state,
      items: state.items.map((i) =>
        i.id === action.id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
      ),
    };
  }
  if (action.type === "del") {
    return {
      ...state,
      items: state.items.filter((i) => i.id !== action.id),
      count: state.count - 1,
    };
  }
  return state;
}

const store = createStore(reducer);
export default store;
