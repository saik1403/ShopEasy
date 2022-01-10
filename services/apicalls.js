import {API_URL} from '@env';
const loginapi = async (user)=>{
    console.log(API_URL);
    return fetch(API_URL+"/auth/local", {
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
export {loginapi};