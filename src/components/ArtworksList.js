import React, { PureComponent, Fragment } from "react"
import styled from "styled-components"

import ArtworkItem from "./ArtworkItem"
import '../ui/loader.css'

const Wrapper = styled.div`
  h1 {
    font-size: ${props => props.theme.fontSizes[6]}px;
    font-family: ${props => props.theme.fontFamilySerif};
    font-weight: normal;
  }
  p {
    font-style: italic;
  }
  .art-list {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    max-width: 1300px;
    margin: 0 auto;
  }
`

const List = styled.div`
  div {
    flex: 1 1 0;
    margin: 10px;
  }
`

export default class ArtworksList extends PureComponent {
  componentDidMount () {
    this.props.getItemsOnLoad()
  }

  render() {
    const filteredItems = this.props.items.filter(item => {
      return item.artwork_title.toLowerCase().includes(this.props.search)
    })

    const artList = this.props.isLoading ? <div className="loader"></div> :
      <Fragment>
        <h1>Original Art for Sale</h1>
        <List className="art-list">
          {filteredItems.map(item => (
            <ArtworkItem
              key={item.artId}
              id={item.artId}
              artwork_title={item.artwork_title}
              artwork_url={item.artwork_url}
              profile_url={item.profile_url}
              image_url={item.image_url}
              subject={item.subject}
              artist={item.artist}
              dimensions={item.dimensions}
              category={item.category}
              product={item.product}
              storage={localStorage}
              toggleFav={this.props.toggleFavorite}
            />
          ))}
        </List>
      </Fragment>

    return (
      <Wrapper>
        {artList}
      </Wrapper>
    )
  }
}
