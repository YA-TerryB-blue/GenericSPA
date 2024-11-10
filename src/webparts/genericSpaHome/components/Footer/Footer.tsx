import * as React from "react";
import { Text } from "@fluentui/react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Text as="p" style={{ marginBottom: "10px" }}>
        <a className={styles.footerContact} href="mailto:support@email.com">
          Contact
        </a>
      </Text>
    </div>
  );
};

export default Footer;
