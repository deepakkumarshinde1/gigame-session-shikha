import { use, useEffect, useState } from "react";

function CallAnAPI() {
  let [usersList, setUsersList] = useState([]);
  let [loader, setLoader] = useState(true);
  let getData = async () => {
    try {
      let url = "https://jsonplaceholder.typicode.com/users";
      let response = await fetch(url);
      let data = await response.json();
      setUsersList(data);
      setLoader(false);
    } catch (error) {
      alert(error.message);
    }
  };

  let getPostData = async () => {
    try {
      let url = "https://jsonplaceholder.typicode.com/posts";
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (usersList.length > 0) getPostData();
  }, [usersList]);
  return (
    <div>
      <h2>Call an API</h2>
      <button onClick={getData}>GET Data</button>
      <p>Here we will get data from an API</p>
      {loader ? <p>Loading...</p> : null}
      <ul>
        {usersList.map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default CallAnAPI;
