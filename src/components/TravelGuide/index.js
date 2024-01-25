import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LocationContainer from '../LocationContainer'

import {
  AppContainer,
  TravelHeading,
  HorizontalLine,
  LocationsContainer,
  LoaderContainer,
  LocationsList,
} from './styledComponents'

class TravelGuide extends Component {
  state = {
    travelList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getTravelGuidPackage()
  }

  getTravelGuidPackage = async () => {
    this.setState({isLoading: true})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {method: 'GET'}
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachData => ({
        id: eachData.id,
        name: eachData.name,
        imageUrl: eachData.image_url,
        description: eachData.description,
      }))
      this.setState({travelList: updatedData, isLoading: false})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderLocationsList = () => {
    const {travelList} = this.state
    return (
      <LocationsList>
        {travelList.map(location => (
          <LocationContainer locationData={location} key={location.id} />
        ))}
      </LocationsList>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <AppContainer>
        <TravelHeading>Travel Guide</TravelHeading>
        <HorizontalLine className="horizontal-line" />
        <LocationsContainer>
          {isLoading ? this.renderLoader() : this.renderLocationsList()}
        </LocationsContainer>
      </AppContainer>
    )
  }
}

export default TravelGuide
