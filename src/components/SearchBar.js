import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          placeholder="Search book..."
          onChange={this.props.handleSearch}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
