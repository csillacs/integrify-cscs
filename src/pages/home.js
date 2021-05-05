import React, { useEffect, useState } from "react";
import axios from "axios";

import UserCard from "../compontents/UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading) {
    if (!users) {
      return <div>Something went wrong :(</div>;
    }

    if (users) {
      return (
        <div className="wrapper">
          <div className="list">
            {users.map((u) => (
              <UserCard
                key={u.id}
                id={u.id}
                name={u.name}
                username={u.username}
                website={u.website}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}
