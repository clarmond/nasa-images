import { Component } from 'react';
import ImageGrid from './components/image-grid/image-grid';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    fetch('https://images-assets.nasa.gov/popular.json')
      .then((resp) =>  resp.json())
      .then((results) => {
        const images = results.collection.items.map((item) => {
          return {
            altText: item.data[0].description_508,
            description: item.data[0].description,
            href: `https://images.nasa.gov/details/${item.data[0].nasa_id}`,
            imageURL: item.links[0].href,
            nasaID: item.data[0].nasa_id,
            title: item.data[0].title,
          }
        });
        this.setState({ images })
      });
  }

  render() {
    const filteredImages = this.state.images.slice(0, 24);

    return (
      <div className="App">
        <ImageGrid images={filteredImages} />
      </div>
    );
  }
}

export default App;