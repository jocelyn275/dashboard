import React from "react";
import Card from "../widgets/Cards/Card";
import { Grid } from "@material-ui/core";
import { Container } from "react-bootstrap";
import { CardData } from "../widgets/Cards/CardData";
import CardLinks from "../widgets/Cards/CardLinks";
import CardTeams from "../widgets/Cards/CardTeams";
import Footer from "../widgets/Footer/Footer";

export default function Dashboard() {
  return (
    <>
      <Container>
        <Grid container spacing={0.5}>
          <Grid item xs={12} sm={12} md={6}>
            <Card
              cardTitle={CardData[0].title}
              cardImage={CardData[0].image}
              desc={CardData[0].description}
              btnTitle={CardData[0].buttonTitle}
              color={CardData[0].color}
              btnColor={"#55C2E5"}
              hoverColor={"#55C2E5CC"}
              icon={CardData[0].hoverIcon}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card
              cardTitle={CardData[1].title}
              cardImage={CardData[1].image}
              desc={CardData[1].description}
              btnTitle={CardData[1].buttonTitle}
              btnColor={"#00acab"}
              hoverColor={"#00acabCC"}
              icon={CardData[1].hoverIcon}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Card
              cardTitle={CardData[2].title}
              cardImage={CardData[2].image}
              desc={CardData[2].description}
              btnTitle={CardData[2].buttonTitle}
              btnColor={"#ea4c6e"}
              hoverColor={"#ea4c6eCC"}
              icon={CardData[2].hoverIcon}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              cardTitle={CardData[3].title}
              cardImage={CardData[3].image}
              desc={CardData[3].description}
              btnTitle={CardData[3].buttonTitle}
              btnColor={"#fab54d"}
              hoverColor={"#fab54dCC"}
              icon={CardData[3].hoverIcon}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              cardTitle={CardData[4].title}
              cardImage={CardData[4].image}
              desc={CardData[4].description}
              btnTitle={CardData[4].buttonTitle}
              btnColor={"#264c99"}
              hoverColor={"#264c99CC"}
              icon={CardData[4].hoverIcon}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <CardLinks />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <CardTeams />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
