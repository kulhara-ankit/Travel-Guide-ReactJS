import {
  LocationCardContainer,
  HeadingDescriptionContainer,
  Heading,
  Paragraph,
  Image,
  ListLocation,
} from './styledComponents'

const LocationContainer = props => {
  const {locationData} = props
  const {name, imageUrl, description} = locationData

  return (
    <ListLocation>
      <LocationCardContainer>
        <Image src={imageUrl} alt={name} className="image" />
        <HeadingDescriptionContainer>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </HeadingDescriptionContainer>
      </LocationCardContainer>
    </ListLocation>
  )
}

export default LocationContainer
