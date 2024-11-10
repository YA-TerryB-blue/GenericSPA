import * as React from "react";
import {
  Card,
  CardHeader,
  CardPreview,
  Button,
  Text,
  Caption1,
} from "@fluentui/react-components";
import { FREQCARDS } from "./data";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import styles from "./FreqAsked.module.scss";

const FreqAsked: React.FC = () => {
  return (
    <>
      <Text
        as="h2"
        style={{
          display: "block",
          marginTop: "1em",
          fontSize: "2em",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Frequently asked
      </Text>
      <div className={styles.FreqAsked}>
        {FREQCARDS.map((service, index) => (
          <Card key={index} className={styles.card}>
            <CardPreview>
              <img
                src={service.imageSrc}
                alt={service.title}
                className={styles.cardImage}
              />
            </CardPreview>
            <CardHeader
              header={
                <Text className={styles.cardHeaderText}>{service.title}</Text>
              }
              description={
                <Caption1 className={styles.cardCaption}>
                  {service.description}
                </Caption1>
              }
              action={
                <Button
                  icon={<MoreHorizontal20Regular />}
                  appearance="transparent"
                  onClick={() => window.open(service.link, "_blank")}
                />
              }
            />
          </Card>
        ))}
      </div>
    </>
  );
};

export default FreqAsked;
