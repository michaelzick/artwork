import React, { PureComponent } from "react"
import styled from "styled-components"

import ArtworkItem from "./ArtworkItem"

const Wrapper = styled.div`
  h1 {
    font-size: ${props => props.theme.fontSizes[6]}px;
    font-family: ${props => props.theme.fontFamilySerif};
    font-weight: normal;
  }
  p {
    font-style: italic;
  }
`
const List = styled.div``

export default class ArtworksList extends PureComponent {
  componentDidMount () {
    this.props.getItemsOnLoad()
  }

  render() {
    const artList = this.props.isLoading ? <img src="/img/sa-logo.svg" /> :
      <List>
        {this.props.items.map(item => (
          <ArtworkItem
            key={item.artId}
            artwork_title={item.artwork_title}
            artwork_url={item.artwork_url}
            profile_url={item.profile_url}
            image_url={item.image_url}
            subject={item.subject}
            artist={item.artist}
            dimensions={item.dimensions}
            category={item.category}
            product={item.product}
          />
        ))}
      </List>

    return (
      <Wrapper>
        <h1>Original Art for Sale</h1>
        {artList}
      </Wrapper>
    )
  }
}
