interface Order {
  id: number;
  price: number;
  status: string;
}

function getOrders(): Promise<Order[]> {
  return new Promise((resolve) => {
    const orders: Order[] = [
      { id: 1, price: 100, status: "Active" },
      { id: 2, price: 200, status: "Pending" },
    ];

    resolve(orders);
  });
}

getOrders().then((data) => {
  const ids = data.map((order) => order.id);
});
