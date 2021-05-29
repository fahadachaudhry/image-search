import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit=(e)=>{
e.preventDefault();
this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form"
        onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image search</label>
            <input
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
