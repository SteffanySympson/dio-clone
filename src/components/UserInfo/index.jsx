import React from "react"
import { Container, NameText, Progress, UserPicture} from "./styles";

const UserInfo = ({nome,image, percent}) => {
    return (
      <Container>
          <UserPicture src={image} />
          <div>
              <NameText>{nome}</NameText>
              <Progress percent={percent} />
          </div>
      </Container>
    )
  }
  
  export { UserInfo }