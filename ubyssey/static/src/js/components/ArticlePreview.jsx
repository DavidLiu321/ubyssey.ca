import React, { Component } from 'react'
import humanizeDateTime from '../modules/Dates'

class ArticlePreview extends Component{
  constructor(props) {
    super(props)
  }
  
  goToArticle() {
    window.location = this.props.url
  }

  render() {
    const msec = Date.parse(this.props.publishTime)
    const publishedDate = new Date(msec)
    console.log(publishedDate.toDateString())
    return (
      <a
        // onClick={() => this.goToArticle()}
        href={this.props.url}
        id={'suggested-article-' + String(this.props.articleId)}
        className='article-preview'>
          <div className='sa-content'>
            {this.props.featuredImageUrl && 
              <div
                className='sa-thumbnail-image'
                style={{backgroundImage: 'url(' + this.props.featuredImageUrl + ')'}}></div>
            }
            {!this.props.featuredImageUrl && 
              <div className='sa-thumbnail-image'>
                No image
              </div>
            }
            <h3>{this.props.headline}</h3>
          </div>
          <div className='sa-subtitle'>
            <span className='sa-date'>{publishedDate.toDateString().slice(4)}</span>
            <span className='sa-author'><em>{this.props.authors[0]}</em></span>
          </div>
      </a>
    )
  }
}

export default ArticlePreview;