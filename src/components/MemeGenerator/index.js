import React, {Component} from 'react'
import {
  Heading,
  MainContainer,
  ContentContainer,
  FormContainer,
  Input,
  Label,
  LabelContainer,
  SelectContainer,
  Select,
  Option,
  Button,
  ImageContainer,
  ImgHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {optionId: '8', displayText: '8'},
  {optionId: '12', displayText: '12'},
  {optionId: '16', displayText: '16'},
  {optionId: '20', displayText: '20'},
  {optionId: '24', displayText: '24'},
  {optionId: '28', displayText: '28'},
  {optionId: '32', displayText: '32'},
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    bgImg: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    topText: '',
    bottomText: '',
    activeFontSize: '',
  }

  onClickGenerator = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state
    this.setState({
      bgImg: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }
  onChangeTopTextInput = event => {
    this.setState({
      topTextInput: event.target.value,
    })
  }

  onChangeBottomTextInput = event => {
    this.setState({
      bottomTextInput: event.target.value,
    })
  }

  onChangefontSize = event => {
    this.setState({
      activeFontSizeOptionId: event.target.value,
    })
  }

  onChangeBgImg = event => {
    this.setState({
      backgroundImageUrlInput: event.target.value,
    })
  }

  render() {
    const {
      topTextInput,
      bottomTextInput,
      bottomText,

      topText,
      activeFontSizeOptionId,
      activeFontSizeId,
      bgImg,
    } = this.state

    return (
      <MainContainer>
        <Heading>Meme Generator</Heading>
        <ContentContainer>
          <FormContainer id="form" onSubmit={this.onClickGenerator}>
            <LabelContainer>
              <Label htmlFor="img">Image url</Label>
              <Input
                value={this.state.backgroundImageUrlInput}
                onChange={this.onChangeBgImg}
                type="text"
                id="img"
                placeholder="Enter the Image URL"
              />
            </LabelContainer>
            <LabelContainer>
              <Label htmlFor="top">Top Text</Label>
              <Input
                onChange={this.onChangeTopTextInput}
                value={topTextInput}
                type="text"
                id="top"
                placeholder="Enter the Top Text"
              />
            </LabelContainer>
            <LabelContainer>
              <Label htmlFor="bottom">Bottom Text</Label>
              <Input
                onChange={this.onChangeBottomTextInput}
                value={bottomTextInput}
                type="text"
                id="bottom"
                placeholder="Enter the Bottom Text"
              />
            </LabelContainer>
            <SelectContainer>
              <Label htmlFor="fontsize">Font Size</Label>
              <Select
                id="fontsize"
                value={activeFontSizeOptionId}
                onChange={this.onChangefontSize}
              >
                {fontSizesOptionsList.map(each => (
                  <Option value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </Option>
                ))}
              </Select>
            </SelectContainer>
            <Button type="submit">Generate</Button>
          </FormContainer>

          {bgImg && (
            <ImageContainer data-testid="meme" backgroundImageUrl={bgImg}>
              <ImgHeading ImgfontSize={`${activeFontSizeId}px`}>
                {topText}
              </ImgHeading>
              <ImgHeading ImgfontSize={`${activeFontSizeId}px`}>
                {bottomText}
              </ImgHeading>
            </ImageContainer>
          )}
        </ContentContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
