type Responses<T, U extends string = "success", V = undefined> = {
  data: T;
  status: U;
  message: string;
  additionalInfo?: V; 
};

const response1: Responses<number> = {
  data: 42,
  status: "success",
  message: "Operation completed successfully."
};

const response2: Responses<string, "error", string> = {
  data: "An error occurred.",
  status: "error",
  message: "Failed to fetch data.",
  additionalInfo: "Network issue."
};

console.log(response1, response2);
