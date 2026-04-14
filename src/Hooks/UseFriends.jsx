import React, { useEffect, useState } from 'react';



const UseFriends = () => {

 const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      fetch("/friends.json")
        .then((res) => res.json())
        .then((data) => {
          setFriends(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to load friends:", error);
          setLoading(false);
        });
    }, 1000);
  }, [])
    return  {friends, loading}

};

export default UseFriends;