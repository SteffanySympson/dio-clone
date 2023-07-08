import React from "react";
import { Card } from "../../components/Card/card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header/header";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          <UserInfo nome="Steffany Sympson" image="https://avatars.githubusercontent.com/u/85596886?v=4" percent={25}/>
          <UserInfo nome="Steffany Sympson" image="https://avatars.githubusercontent.com/u/85596886?v=4" percent={65}/>
          <UserInfo nome="Steffany Sympson" image="https://avatars.githubusercontent.com/u/85596886?v=4" percent={45}/>
          <UserInfo nome="Steffany Sympson" image="https://avatars.githubusercontent.com/u/85596886?v=4" percent={72}/>
        </Column>
      </Container>
    </>
  )
}

export { Feed }; 