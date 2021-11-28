import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from "@material-ui/core/Typography";


export const RecipeCardContainer = styled(Card)`
  width: 300px;
  height: 300px;
  margin: 20px
`

export const RecipeCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`

export const TypographyCard = styled(Typography)`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin-bottom: 15px;

`;