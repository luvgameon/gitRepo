async function outer(){


let posts = [
    { title: "First Post", body: "First post body",LastUserActivity: new Date().getMilliseconds()  },
    { title: "Second Post", body: "Second post body",LastUserActivity: new Date().getMilliseconds()  },
  ];

  function CreatePost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let error = false;
        if (!error) {
          console.log("Student Create Successful");
          posts.push();
          resolve();
        } else {
          reject("error 404");
        }
      }, 1000);
    });
  }

  function getPost() {
    let str = "";
    posts.forEach((e) => {
      str += `<li> ${e.title} last update ${new Date().getMilliseconds()} sec ago</li>`;
    });
    document.body.innerHTML = str;
  }

  function DeletePost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length) {
        
          posts.pop();
          console.log("post delete succesfull");
          resolve();
        } else {
          reject("array is Empty");
        }
      }, 3000);
    });
  }

  await CreatePost({ title: "Post Four ", body: "First post body" });
 getPost();
 await DeletePost();
 getPost();
 return "hogya sab"
}
outer().then((e)=>{
    console.log(e)
}).catch(()=>{
    console.log("oops something went wrong")
})



























































