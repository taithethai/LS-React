import React, {Component} from 'react';

export default class Profile extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return(
      <div className="profile">
        <img className="profilePic" src={this.props.profile.profileImageUrl} alt="Profile icon"/>
        <h3>{this.props.profile.name}</h3>
        <h4>{this.props.profile.handle}</h4>
        
      </div>
      );
  }
}

      // {this.props.profile.map((user) => {
      //   return(
      //     <h1>{user.name}</h1>
      //   );
      // })}XX