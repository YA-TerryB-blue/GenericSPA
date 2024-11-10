// GenericSpaHome.tsx
import * as React from "react";
import { IGenericSpaHomeProps } from "./IGenericSpaHomeProps";
import styles from "./GenericSpaHome.module.scss";
import Navbar from "./NavBar";
import HomeContent from "./HomeContent";
import Footer from "./Footer";
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";
import MailList from "./MailList";
import DocumentsContent from "./DocumentsContent";

const GenericSpaHome: React.FC<IGenericSpaHomeProps> = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("home");
  const [emails, setEmails] = React.useState<MicrosoftGraph.Message[]>([]);
  const [files, setFiles] = React.useState<MicrosoftGraph.DriveItem[]>([]);

  const sendEmail = () => {
    window.location.href =
      "mailto:support@email.com?subject=Support Ticket&body=Please describe your issue here.";
  };

  const onTabSelect = (
    event: React.MouseEvent<HTMLElement>,
    data: { value: string }
  ) => {
    setSelectedValue(data.value);
  };

  React.useEffect(() => {
    if (selectedValue === "emails") {
      fetchEmails();
    }
    if (selectedValue === "documents") {
      fetchFiles();
    }
  }, [selectedValue]);

  const fetchEmails = async () => {
    try {
      const client = await props.context.msGraphClientFactory.getClient("3");
      const response = await client
        .api("/me/messages")
        .top(5)
        .orderby("receivedDateTime desc")
        .get();
      setEmails(response.value);
    } catch (error) {
      console.error("Error fetching emails", error);
    }
  };

  const fetchFiles = async () => {
    if (!props.context || !props.context.msGraphClientFactory) {
      console.error("Graph client is not available.");
      return;
    }

    try {
      const client = await props.context.msGraphClientFactory.getClient("3");
      const response = await client
        .api(
          "/groups/f0b5ca8e-03ab-4a41-a70c-2f1d5a7dbb0a/drive/items/root/children"
        )
        .top(50)
        .get();
      if (response.value) {
        setFiles(response.value);
      } else {
        console.error("No files found in the response.");
      }
    } catch (error) {
      console.error("Error fetching files", error);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar
        userName={props.context.pageContext.user.displayName}
        onTabSelect={onTabSelect}
        selectedValue={selectedValue}
      />

      {selectedValue === "home" && <HomeContent sendEmail={sendEmail} />}
      {selectedValue === "documents" && <DocumentsContent files={files} />}
      {selectedValue === "emails" && (
        <div>
          <h3 className={styles.mailListCardHeader}>Latest Emails</h3>
          <MailList emails={emails} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GenericSpaHome;
