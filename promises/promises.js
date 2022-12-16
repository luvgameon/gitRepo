let currentTime = new Date().getMilliseconds();
let posts = [
  { title: "First Post", body: "First post body" },
  { title: "Second Post", body: "Second post body" },
];
function CreatePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        console.log("Student Create Successful");
        posts.push(post);
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
    str += `<li> ${e.title}</li>`;
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
DeletePost().then(getPost).catch((e)=>{
  console.log(e);
})
DeletePost().then(getPost).catch((e)=>{
  console.log(e);
})
CreatePost({ title: "New ssss", body: "First post body" })
  .then(()=>{
    getPost();
    DeletePost().then(getPost).catch((error) => {
      console.log("error aa gya bro " + error);
    });
  })
  .catch((error) => {
    console.log("error aa gya bro " + error);
  });

DeletePost().then(getPost).catch((e)=>{
  console.log(e);
})
CreatePost({ title: "Post Four ", body: "First post body" })
  .then(()=>{
    getPost();
    })
  .catch((error) => {
    console.log("error aa gya bro " + error);
  });