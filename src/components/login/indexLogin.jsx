import React, { useEffect, useState } from "react";
import axios from "axios";

const Body = () => {
  const initialCounters = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
  ];
  const [counts, setCounts] = useState(initialCounters);
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios("http://10.71.5.42:3001/api/users");
  //     setPosts(result.data);
  //   };
  //   fetchData();
  // }, []);

  // const handleClick = (id) => {
  //   const updateCounts = counts.map(el => el.id ===id ? {...el,});
  //   setCount(updateCounts);
  // };

  // const handleReset = () => {
  //   // setCount(0);
  // };

  return (
    <body>
      <section>
        <form action="#" className="login">
          Введите email <input type="email" name="email" id="email" />
          <br />
          Введите пароль <input type="password" name="password" id="password" />
        </form>
        <div>
          Полученные данные:
          <ul>
            {counts.map((el) => {
              <li key={el.id}>
                {el.value}
                {/* <button onClick={() => handleClick(el.id)}>add</button>
                <button onClick={() => handleReset(el.id)}>res</button> */}
              </li>;
            })}
          </ul>
          {posts.map((item) => (
            <div /*key={item.id} */>{item.name}</div>
          ))}
        </div>
      </section>
    </body>
  );
};

export default Body;
