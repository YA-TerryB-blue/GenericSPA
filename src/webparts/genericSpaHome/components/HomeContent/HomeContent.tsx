import * as React from "react";
import { Text, Button } from "@fluentui/react-components";
import CarouselSection from "./CarouselSection";
import FreqAsked from "./FreqAsked";
import styles from "./HomeContent.module.scss";

interface HomeContentProps {
  sendEmail: () => void;
}

const HomeContent: React.FC<HomeContentProps> = ({ sendEmail }) => {
  return (
    <div role="tabpanel" aria-labelledby="Home">
      <div className={styles.heroSection}>
        <Text as="h1" className={styles.heroTitle}>
          Home Page
        </Text>
        <Text as="p" className={styles.heroSubtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis blanditiis, iure assumenda eum, provident tempora id quasi pariatur expedita ad fugit consequuntur. Culpa fugit reiciendis facilis nulla libero! Eveniet, amet!
        </Text>
        <Button
          appearance="primary"
          size="large"
          className={styles.heroButton}
          onClick={sendEmail}
        >
          Send Email
        </Button>
      </div>
      <CarouselSection />
      <FreqAsked />
    </div>
  );
};

export default HomeContent;
