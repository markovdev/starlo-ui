import React from "react";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import Grid from "../Containers/Layout/Grid";
import {
  LiaBabyCarriageSolid,
  LiaBabySolid,
  LiaCampgroundSolid,
  LiaChildSolid,
  LiaEvernote,
  LiaHeart,
  LiaHeartSolid,
  LiaLeafSolid,
  LiaMapSolid,
  LiaUsersSolid,
  LiaWifiSolid,
} from "react-icons/lia";
import Reveal from "../../Animations/Reveal";
import Fade from "../../Animations/Fade";
import Heading from "../Typography/Heading";
import Section from "../Section/Section";
import Paragraph from "../UI/Paragraph";
import Animate from "../UI/Animate";
const Features = () => {
  return (
    <Section className="section--features" id="section--features">
      <Heading text="Some of our features" isSecondary />

      <Animate hidden={{ opacity: 0 }} visible={{ opacity: 1 }}>
        <Grid col="3" className="container">
          <FeaturesCard>
            <LiaLeafSolid className="features__icon" />
            <Heading text="A beautiful scenery" isTertiary />
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              voluptatum, laborum voluptate assumenda eaque magni?
            </Paragraph>
          </FeaturesCard>
          <FeaturesCard>
            <LiaHeart className="features__icon" />
            <Heading isTertiary text="Healthy food" />
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              voluptatum, laborum voluptate assumenda eaque magni?
            </Paragraph>
          </FeaturesCard>
          <FeaturesCard>
            <LiaMapSolid className="features__icon" />
            <Heading isTertiary text="Amazing tours" />
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              voluptatum, laborum voluptate assumenda eaque magni?"
            </Paragraph>
          </FeaturesCard>
          <FeaturesCard>
            <LiaUsersSolid className="features__icon" />
            <Heading isTertiary text="perfect for meeting" />
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              voluptatum, laborum voluptate assumenda eaque magni?
            </Paragraph>
          </FeaturesCard>
          <FeaturesCard>
            <LiaBabyCarriageSolid className="features__icon" />
            <Heading isTertiary text="Special place for kids" />
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              voluptatum, laborum voluptate assumenda eaque magni?
            </Paragraph>
          </FeaturesCard>
          <FeaturesCard>
            <LiaWifiSolid className="features__icon" />
            <Heading isTertiary text="A free wifi for your needs" />
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              voluptatum, laborum voluptate assumenda eaque magni?
            </Paragraph>
          </FeaturesCard>
        </Grid>
      </Animate>
    </Section>
  );
};

export default Features;
