import React from 'react';
import { connect } from 'react-redux';

import { addNewMember } from '../actions';

class DragonList extends React.Component {
  state = {
    newMember: ''
  };

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };

  addMember = e => {
    e.preventDefault();
    this.props.addNewMember(this.state.newMember);
    this.setState({ newMember: '' });
  };

  render() {
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
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
        <button onClick={this.addMember}>Add member</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    members: state.members
  };
};

export default connect(
  mapStateToProps,
  { addNewMember }
)(DragonList);
