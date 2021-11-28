import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {
  RecipeCardContainer,
  RecipeCardContent,
  TypographyCard,
} from "./styled";

const RecipeCard = (props) => {
 console.log(props)
  return (
    <RecipeCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={props.name}
          height={'250px'}
          image={props.image}
          title={props.name}
        />
        <RecipeCardContent>
          <TypographyCard align={'center'}>
            {props.name}
          </TypographyCard>
        </RecipeCardContent>
      </CardActionArea>
    </RecipeCardContainer>
  )
}

export default RecipeCard
