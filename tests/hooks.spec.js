// Hooks

// test.beforeAll() - It will be execute once before executing all of the test case
// test.beforeEach() - It will run once before each and every test case
// test() - Declare the test
// test.afterEach() - It will run once after each and every test case
// test.afterAll() - It will run once after all the test cases are executed


const {test, expect} = require('@playwright/test')


test.afterEach(async ()=>{
    console.log("After Each")
})

test.afterAll(async ()=>{
    console.log("After All")
})

test.beforeAll(async ()=>{
    console.log("Before All")
})

test.beforeEach(async ()=>{
    console.log("Before Each")
})

test("Test1", async ()=>{
    console.log("Test1")
})
test("Test2", async ()=>{
    console.log("Test2")
})

test("Test3", async ()=>{
    console.log("Test3")
})


// Annotation - control the test case / Execution