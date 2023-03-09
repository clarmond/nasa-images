import { Component } from 'react';

import './image-card.css';

class ImageCard extends Component {
    render() {
        const { altText, href, imageURL, title } = this.props.image;
        return (
          <div className="image-card">
            <div>
              <a href={href} target="_blank" rel="noreferrer">
                <img src={imageURL} className="image" alt={altText} />
              </a>
              <div className="image-title">
                {title}
              </div>
            </div>
          </div>
        );
    }
}

export default ImageCard;