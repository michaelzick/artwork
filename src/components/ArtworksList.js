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
  componentWillMount () {
    this.props.getItemsOnLoad();
    console.log(this.props)
  }

  render() {
    return (
      <Wrapper>
        <h1>Original Art for Sale</h1>

        <List>
          <ul>
            {!this.props.isLoading && this.props.items.map(item => (
              <li key={item.artId}>
                <ArtworkItem
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
              </li>
            ))}
          </ul>
        </List>
      </Wrapper>
    )
  }
}
