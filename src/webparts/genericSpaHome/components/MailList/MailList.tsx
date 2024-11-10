import * as React from "react";
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";
import styles from "./MailList.module.scss";

interface MailListProps {
  emails: MicrosoftGraph.Message[];
}

const MailList: React.FC<MailListProps> = ({ emails }) => {
  return (
    <div className={styles.mailListContainer}>
      {emails.length > 0 ? (
        <div>
          {emails.map((email, index) => (
            <div key={email.id} className={styles.mailListCard}>
              <p className={styles.mailListCardContent}>
                {index + 1} - {email.subject}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No emails found.</p>
      )}
    </div>
  );
};

export default MailList;
