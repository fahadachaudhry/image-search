import React from "react";
import Unsplash from "../API/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImagesList";
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList img={this.state.images} />
      </div>
    );
  }
}
export default App;
