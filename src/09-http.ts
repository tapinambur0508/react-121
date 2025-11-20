import axios from "axios";

interface User {
  name: string;
  age: number;
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch("http://localhost:8080/api/users");
  const users = (await response.json()) as User[];
  return users;
}

interface Order {
  id: string;
  price: number;
  status: string;
}

async function fetchOrder(): Promise<Order[]> {
  const response = await axios.get<Order[]>("http://localhost:8080/api/orders");
  return response.data;
}
