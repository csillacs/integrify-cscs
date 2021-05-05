import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Avatar from "react-avatar";

import HomeButton from "../compontents/HomeButton";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading) {
    if (!user) {
      return <div>Something went wrong :(</div>;
    }

    if (user) {
      return (
        <div className="profile-card">
          <Avatar name={user.name} round={true} color="lightgray" />
          <h1> {user.name}</h1>
          <div className="container1">
            <p>username: @{user.username}</p>
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>
            <p>company: {user.company.name}</p>
            <p>website: http://{user.website}</p>
          </div>

          <p>address:</p>
          <p>street:{user.address.street}</p>
          <p>suite: {user.address.suite} </p>
          <p>city: {user.address.city} </p>
          <p>zipcode: {user.address.zipcode} </p>
          <HomeButton />
        </div>
      );
    }
  }
};

export default UserPage;
