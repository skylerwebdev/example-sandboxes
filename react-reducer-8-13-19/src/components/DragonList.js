import React from 'react';

class DragonList extends React.Component {
  state = {
    newMember: '',
    members: [
      { name: 'Brandi', dragonStatus: true },
      { name: 'Josh', dragonStatus: false }
    ]
  };

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.state.members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button>Add member</button>
      </React.Fragment>
    );
  }
}

export default DragonList;
