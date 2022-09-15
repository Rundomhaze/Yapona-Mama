/* eslint-disable camelcase */
const initialState = {
  foods: [],
  details: [{ total_price: 0 }],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CART': {
      return { 
        ...state,
        foods: action.payload.foods,
        details: action.payload.details,
      };
    }
    case 'CLEAR_CART': {
      return { 
        ...state,
        foods: [],
        details: [{ total_price: 0 }],
      };
    }
    case 'EDIT_QUANTITY': {
      const { add, order_id, food_id } = action.payload;
      const newFoods = [...state.foods];
      if (add) {
        newFoods.map((food) => {
          if (food.order_id === order_id && food.food_id === food_id) {
            food.quantity += 1;
          } 
          return food;
        });
      } else if (!add) {
        newFoods.map((food) => {
          if (food.order_id === order_id && food.food_id === food_id) {
            if (food.quantity > 1) {
              food.quantity -= 1;
            }
          } 
          return food;
        });
      }
      return { 
        ...state,
        foods: newFoods,
      };
    }
    case 'DELETE_FOOD': {
      const { order_id, food_id } = action.payload;
      const newFoods = state.foods.filter((food) => (food.order_id !== order_id || food.food_id !== food_id));
      return { 
        ...state,
        foods: newFoods,
      };
    }
    case 'COUNT_TOTAL': {
      const newDetails = { ...state.details };

      if (state.foods.length > 0) {
        let total = 0;
        state.foods.forEach((food) => {
          total += food['Food.new_price'] * food.quantity;
        });
  
        newDetails.total_price = total;
      } else {
        newDetails.total_price = 0;
      }

      return { 
        ...state,
        details: newDetails
      };
    }
    case 'ADD_FOOD': {
      const { order_id, roll } = action.payload;
      let newFoods = [...state.foods];

      const index = newFoods.findIndex((food) => (food.food_id === roll.id));

      if (index < 0) {
        newFoods = [...state.foods, {
          quantity: 1,
          order_id,
          food_id: roll.id,
          'Food.title': roll.title,
          'Food.photo': roll.photo,
          'Food.new_price': roll.new_price,
          'Food.description': roll.description
        }];
      } else {
        newFoods[index].quantity += 1;
      }
      return { 
        ...state,
        foods: newFoods,
      };
    }
    default: 
      return state;
  } 
}
