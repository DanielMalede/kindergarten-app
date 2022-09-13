export default async function teachersApi() {
    try {
        return await fetch('https://my-json-server.typicode.com/DanielMalede/json/Teachers').then(response=>response.json())
    } catch (error) {
        
    }
}