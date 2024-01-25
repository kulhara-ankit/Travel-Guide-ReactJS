import Styled from 'styled-components'

export const AppContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background-color: #eef4f7;
`
export const TravelHeading = Styled.h1`
  font-family: 'Roboto';
  color: #334155;
  margin-bottom: 0px;
`
export const HorizontalLine = Styled.hr`
  width: 12vw;
  height: 4px;
  background-color: #52bbf0;
  margin-top: 0px;
   @media screen and (max-width: 768px) {
    width: 50vw;
  }
`
export const LocationsContainer = Styled.div`
  width: 100%;
  min-height: 80vh;
`

export const LoaderContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LocationsList = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
