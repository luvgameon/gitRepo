console.log("person 1 :I have tickets")
console.log("person 2 :I have tickets")
// const wifegetticket = new Promise((resolve,reject)=>{
//              setTimeout(()=>{
//                console.log("hus : meri wife ticket la rahi h")
//                resolve("wife : i have ticket");
//              },3000);
// });
// const popcorn = wifegetticket.then((t)=>{
//   console.log(t);

//   console.log("husband : ab chale")
//   console.log("wife : nahi pop lao pehle")
//   new Promise((resolve,reject)=>{resolve("yeh lo popcorn");})
// });
// const butterwale =popcorn.then((a)=>{
//   console.log(a);
//   console.log("husband : ab chale re bab")
//   console.log("wife : popcorn butter wale ")
//   new Promise((resolve,reject)=>{resolve("yeh lo butter wale");})
// });
// butterwale.then((e)=>{
//   console.log(`${e} hai ab chalo `)
// })

// async 

const movie= async()=>{
   const wifegetticket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("hus : meri wife ticket la rahi h")
      resolve("tickets");
    },3000);
    });
    const popcorn = new Promise((resolve,reject)=>{resolve("popcorn");})
    const butter = new Promise((resolve,reject)=>{resolve("butter");})
    const coldrink = new Promise((resolve,reject)=>{resolve("coldrink");})

let ticket = await wifegetticket;
console.log(`wife i have ${ticket}`);
console.log("husband : ab chale")
console.log("wife : nahi pop lao pehle")

let pop = await popcorn;

console.log(`hus i have ${pop}`);
console.log("husband : ab chale")
console.log("wife : nahi butter wale")

let but = await butter;
console.log(`hus i have ${but}`);
console.log("husband : ab chale re baba")
console.log("wife : cold drink aur mil jati toh maza aajata ")
let drink=await coldrink;
console.log(`hus i have your ${drink}`);

console.log("wife : m toh kb se ready hu chalo na ")


return ticket;

}

movie().then((m)=>{
  console.log(`lo bhaiya hamari ${m}`);
})
console.log("person 4 : I haave tickets")
