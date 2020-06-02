// import youtuber from "./foo";

// youtuber.list.business.youtuber[0].teachProgramming();

// youtuber.plan();

// youtuber.list.entertainment.makeSmile();

// test

// youtuber.plan();

// youtuber.list.entertainment.makeSmile();

async function callApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
}

callApi();