interface Order {
  id: number;
  price: number;
  status: string;
}

interface OrderResponse {
  items: Order[];
  meta: {
    totalCount: number;
  };
}

interface Client {
  id: number;
  username: string;
  age: number;
}

interface ClientReponse {
  items: Client[];
  meta: {
    totalCount: number;
  };
}

interface APIResponse<T> {
  items: T[];
  meta: {
    totalCount: number;
  };
}

let clientResponse: APIResponse<Client> = {
  items: [{ id: 1, username: "Dave", age: 10 }],
  meta: {
    totalCount: 1,
  },
};

let orderResponse: APIResponse<Order> = {
  items: [{ id: 1, price: 100, status: "Active" }],
  meta: {
    totalCount: 1,
  },
};

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let res1 = getFirstElement<number>([1, 2, 3, 4]); // 1
let res2 = getFirstElement<string>(["a", "b", "c", "d"]); // "a"
let res3 = getFirstElement<{ id: number }>([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]); // {id: 1}

let res4 = getFirstElement<number | string | boolean>([1, "a", true]);

if (typeof res4 === "number") {
  res4.toFixed;
} else if (typeof res4 === "string") {
  res4.toUpperCase();
}

function post<Input, Output>(payload: Input): Output {}

post<
  { price: number; status: string },
  { id: string; price: number; status: string }
>({});
