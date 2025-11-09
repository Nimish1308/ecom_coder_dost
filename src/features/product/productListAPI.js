
export function fetchAllProducts() {
    //TODO: Currently fetching API with json-sever
    return new Promise(async (resolve) => {
        const response = await fetch(`http://localhost:8080/products`)
        const data = await response.json()
        resolve({ data })
    }

    )
}

export function fetchProductsByFilters(filter) {

    //Use after question mark i.e APICall--> `htttp://localhost:8080/products?queryString`
    let queryString = '';
    //filter Object--> filter={"category":"smartphone"}
    for (let key in filter) {
        //&--> to handle more than one string query
        queryString += `${key}=${filter[key]}&`
    }
    //TODO: Currently fetching API with json-sever
    return new Promise(async (resolve) => {
        const response = await fetch(`http://localhost:8080/products?`+queryString)
        const data = await response.json()
        resolve({ data })
    }

    )
}