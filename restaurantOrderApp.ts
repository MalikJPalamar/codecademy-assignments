import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket) {
 switch (price) {
  case PriceBracket.Low:
    return 10.0;
  case PriceBracket.Medium:
    return 20.0;
  case PriceBracket.High:
    return 30.0;
  default:
    return 0;
  }
}
// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
  let filteredOrders: Order[][] = [];
  orders.forEach(restaurantOrders => {
    filteredOrders.push(
      restaurantOrders.filter(order => order.price <= getMaxPrice(price))
    );
  });
  return filteredOrders;
}

const eligibleOrders = getOrders(PriceBracket.Low, orders);

// Add your printOrders() function below:
function printOrders(restaurants, eligibleOrders) {
  eligibleOrders.forEach((orders, index) => {
    if (orders.length > 0) {
      console.log(restaurants[index].name);
      orders.forEach(order => {
        console.log(`- ${order.name}: $${order.price}`);
      });
    }
  });
}

printOrders(restaurants, eligibleOrders);

// Main

