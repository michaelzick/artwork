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
    this.props.getItemsOnLoad();
  }

  render() {
    return (
      <Wrapper>
        <h1>Original Art for Sale</h1>

        <List>
          <ul>
            {/* {this.props.items.map(item => (
              <li key={item.id}>
                <ArtworkItem />
              </li>
            ))} */}
          </ul>
        </List>
      </Wrapper>
    )
  }
}
