import { useState , useEffect} from "react";

const UserListFunctional = () => {
  // const [ userName , setUserName ] = useState('Marina')
  // const [ title , setTitle ] = useState('Frontend Developer');

  const [userData, setUserData] = useState({
    username: "Marina",
    title: "Frontend Developer",
  });

  useEffect(() => {
    console.log('MOUNT')
    return () => {
        console.log("Will unmout")
    }
  }, [])

  useEffect(() => {
    console.log("USER DATA UPDATED")
  }, [userData])



  return (
    <>
      <h1>Username : {userData.username}</h1>
      <h3>{userData.title}</h3>
      <button
        onClick={() =>
          setUserData({
            ...userData,
            username: "Ahmed",
          })
        }
      >
        Change Name
      </button>
    </>
  );
};

export default UserListFunctional;
