


export function get(callback){

    fetch("https://databasesuperheros-0cba.restdb.io/rest/cards", {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "5f96ac894b77c1637d147e06",
          "cache-control": "no-cache"
        }
      })
        .then(e => e.json())
        .then(data=>callback(data));

}

