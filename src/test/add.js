const add=(a,b)=>a+b;
const generateGreeting=(name="Anonymous")=>`Hello ${name}`
test("shud add 2 no.s",()=>{
  const result=add(3,4);
  expect(result).toBe(7);
  if(result!==7){
    throw new Error(`obtained value is ${result},expected 7`)
  }})
  test("greeting",()=>{
const result=generateGreeting("chandu")
expect(result).toBe("Hello chandu");
  })
  test("greeting",()=>{
    const result=generateGreeting()
    expect(result).toBe("Hello Anonymous");
      })
