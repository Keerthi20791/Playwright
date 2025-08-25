import {test, expect, request} from '@playwright/test'


const getURL = "https://reqres.in/api/users?page=2"
const putURL = "https://reqres.in/api/users/2"
const postURL = "https://reqres.in/api/users"
const deleteURL = "https://reqres.in/api/users/2"

const putPayload = {
    name: "Test",
    job: "Testing"
}

const postPayload = {
    "name": "API",
    "job": "CEO"
}

test('GET method API automation', async()=>{
    const apiContext = await request.newContext()
    const getResponse = await apiContext.get(getURL,{
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })
    await expect(getResponse.status()).toBe(200)
    const data = await getResponse.json()
})

test('PUT method API automation', async()=>{
    const apiContext = await request.newContext()
    const putResponse = await apiContext.put(putURL,{
        data: putPayload,
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })
    await expect(putResponse.status()).toBe(200)
    const data = await putResponse.json()
    // console.log(await data.keys)
    console.log(await data.name);
    console.log(await data.job);
})


