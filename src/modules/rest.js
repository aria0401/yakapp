
export function get(callback){
    fetch("https://fe2020autumn-8542.restdb.io/rest/cards", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "5f96a7f34b77c1637d147dd0",
        "cache-control": "no-cache",
      },
    })
      .then((e) => e.json())
      .then(data=>callback(data));
} 
export function post(payload, cards, callback){
    fetch("https://fe2020autumn-8542.restdb.io/rest/cards", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "5f96a7f34b77c1637d147dd0",
        "cache-control": "no-cache",
      },
      body: JSON.stringify(payload)
    })
      .then((e) => e.json())
      .then(data=>{
          callback(cards.concat(data))
      });
} 

