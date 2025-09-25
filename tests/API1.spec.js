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
    console.log(data.total_pages);
})


test('Post method API automation', async()=>{
    const apiContext = await request.newContext()
    const postResponse = await apiContext.post(postURL,{
        data: postPayload,
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })
    await expect(postResponse.status()).toBe(201)
    const postData = await postResponse.json()
    console.log(postData);
    await expect(postData.name).toContain("API");
    await expect(postData.job).toBe("CEO");


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
    const putData = await putResponse.json()
    console.log(putData)
    await expect(putData.name).toContain("Test");
    await expect(putData.job).toBe("Testing");
})

test('Delete method API automation', async()=>{
    const apiContext = await request.newContext()
    const deleteResponse = await apiContext.delete(deleteURL,{
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })
    await expect(deleteResponse.status()).toBe(204)
})




