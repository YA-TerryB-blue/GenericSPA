import * as React from "react";
import {
  Carousel,
  CarouselSlider,
  CarouselCard,
  Image,
  Text,
  Button,
  CarouselNavContainer,
  CarouselNav,
  CarouselNavButton,
} from "@fluentui/react-components";
import { CAROUSEL_ITEMS } from "./data";
import styles from "./CarouselSection.module.scss";

const getAnnouncement = (index: number, totalSlides: number) => {
  return `Carousel slide ${index + 1} of ${totalSlides}`;
};

const CarouselSection: React.FC = () => {
  return (
    <Carousel groupSize={1} circular announcement={getAnnouncement}>
      <CarouselSlider>
        {CAROUSEL_ITEMS.map((item, index) => (
          <CarouselCard key={index} className={styles.bannerCard}>
            <Image fit="cover" src={item.imageSrc} role="presentation" />
            <div className={styles.cardContainer}>
              <Text className={styles.carouselText}>{item.text}</Text>
              <Button
                className={styles.carouselButton}
                size="small"
                shape="rounded"
                appearance="primary"
                as="a"
                href={item.link}
                target="_blank"
              >
                Open
              </Button>
            </div>
          </CarouselCard>
        ))}
      </CarouselSlider>

      <CarouselNavContainer layout="inline">
        <CarouselNav>
          {(index) => (
            <CarouselNavButton aria-label={`Go to slide ${index + 1}`} />
          )}
        </CarouselNav>
      </CarouselNavContainer>
    </Carousel>
  );
};

export default CarouselSection;
