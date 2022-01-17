import { API_URL } from '@env';
const loginapi = async (user) => {
  console.log(API_URL);
  return fetch(API_URL + "/auth/local", {
    method: "POST",
    body: JSON.stringify({
      identifier: user.identifier,
      password: user.password
    }),
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(error => console.log(error))
}
const createAccount = async (user) => {
  console.log(user);
  return fetch(API_URL + "/auth/local/register", {
    method: "POST",
    body: JSON.stringify({
      username: user.username,
      email: user.email,
      provider: user.provider,
      password: user.password
    }
    ),
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(error => console.log(error))
}
const getProducts = async (category, user) => {
  console.log(`Bearer ${user.jwt}`);
  const URL = API_URL + "/products?Category=" + category;
  console.log(URL);
  return fetch(API_URL + "/products?Category=" + category, {
    method: "GET",
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json",
      "Authentication": `Bearer ${user.jwt}`
    }
  })
    .then(response => response.json())
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(error => console.log(error))
}
const placeOrder = async (orders, user) => {
  const data={
    OrderItems: orders,
    user: user
  };
  console.log(data);
  return fetch(API_URL + "/orders", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${user.jwt}`
    }
  })
    .then(response => response.json())
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(error => console.log(error))
}
const getOrders = async (user) => {
  console.log(`Bearer ${user.jwt}`);
  return fetch(API_URL + "/orders", {
    method: "GET",
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${user.jwt}`
    }
  })
    .then(response => response.json())
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(error => console.log(error))
}
export { loginapi, createAccount, getProducts, placeOrder, getOrders };