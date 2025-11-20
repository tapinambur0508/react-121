{
  enum Status {
    Active = "Active",
    Paused = "Paused",
    Disabled = "Disabled",
    Deleted = "Deleted",
  }

  let status: Status = Status.Disabled;
  console.log(status); // "Disabled"

  interface User {
    username: string;
    age: number;
    status: Status;
  }

  let user: User = {
    username: "Dave",
    age: 10,
    status: Status.Active,
  };
}

{
  type Status = "Active" | "Processing" | "Canceled";

  interface Order {
    id: number;
    price: number;
    status: Status;
  }

  let status: Status = "Active";

  let order: Order = {
    id: 1,
    price: 100,
    status: "Active",
  };
}
