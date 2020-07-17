/**
 * EasyHTTP Library
 * Library for mkaing HTTP requests
 * 
 * @version 3.0.0
 * @author PaulNorthern
 * @license MIT
 * 
**/

class EasyHTTP{
    // GET-request
    async get(url){

        const response = await fetch(url);
        const resData = await response.json();
        return resData;

        // return new Promise( (resolve, reject) => {
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err));
        // });
    }

    // POST-request
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data) // sending data (JS to JSON)
            });     

        const resData = await response.json();
        return resData;     
    }

    // PUT-request
    async put(url, data){
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data) // sending data (JS to JSON)
            });
        const resData = await response.json();
        return resData; 
    }

    // DELETE-request
    async delete(url){
        const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },  
            });  
        const resData = await 'Resourece deleted'
        return resData;            
    }
}

export const http = new EasyHTTP();