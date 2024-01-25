import styled from 'styled-components/macro'

export const LocationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px;
  border-radius: 12px;
`

export const HeadingDescriptionContainer = styled.div`
  padding: 10px;
`

export const Heading = styled.h1`
  font-size: 15px;
  text-align: left;
`

export const Paragraph = styled.p`
  font-size: 15px;
  text-align: left;
`
export const Image = styled.img`
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`
export const ListLocation = styled.li`
  list-style-type: none;
  margin-bottom: 48px;
  margin-right: 10px;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
