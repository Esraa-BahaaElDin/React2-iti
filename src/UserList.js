import React from "react";
import UserName from "./UserName";

class UserList extends React.Component {
  constructor() {
    super();
    console.log("CONSTRUCTOR");
    this.state = {
      name: "Marina",
      title: "Frontend Developer",
      tools: ["HTML", "CSS", "React"],
      isLoggedIn: true,
    };
  }

  componentDidMount() {
    console.log("DID MOUNT");
  }

  //   shouldComponentUpdate(){

  //   }

  componentDidUpdate() {
    console.log("DID UPDATE");
  }

  componentWillUnmount() {
    console.log("WILL UNMOUNT");
  }

  changeName = () => {
    console.log(this.state.name);
    this.setState({
      name: "Ahmed",
    });
  };

  render() {
    console.log("RENDER");
    return (
      <>
        {this.state.isLoggedIn && (
          <>
            <UserName name={this.state.name} title={this.state.title} />
            <h3>Title : {this.state.title}</h3>
            <ul>
            {this.state.tools.map((tool , index) => {
              return <li key={index}>{tool}</li>
            })}
            </ul>
            <button onClick={() => this.changeName()}>Change Name</button>
          </>
        )}
      </>
    );
  }
}

export default UserList;
