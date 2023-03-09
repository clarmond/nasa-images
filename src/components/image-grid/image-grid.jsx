import { Component } from 'react';
import ImageCard from '../image-card/image-card';

import './image-grid.css';

class ImageGrid extends Component {
    render() {
        return (
          <div className="image-grid">
            {
                this.props.images.map((image) => {
                    return <ImageCard key={image.nasa_id} image={image} />
                })
            }
          </div>
        );
    }
}

export default ImageGrid;