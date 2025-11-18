/**
 * - Union
 * - Літеральні типи ( "small", "medium", "large", "extralarge")
 */

type Status = "active" | "pending" | "paused";

type IsManager = boolean;

// status: active | pending | paused
let status: Status;

status = "active";

status.toUpperCase();

// status = "hello";

let array: (number | string | boolean)[] = [1, "hello", true, { foo: "bar" }];

interface User {
  username: string;
  age: number;
  status: Status;
}

let user: null | User = null;

user = {
  username: "dave",
  age: 10,
  status: "active",
};
