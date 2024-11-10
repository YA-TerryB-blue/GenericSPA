import * as React from "react";
import styles from "./DocumentsContent.module.scss";
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";
import FileDataGrid from "./FileDataGrid";

interface IDocumentsContentProps {
  files: MicrosoftGraph.DriveItem[];
}

const DocumentsContent: React.FC<IDocumentsContentProps> = ({ files }) => {
  // Map the Microsoft Graph data to the FileDataGrid's expected format
  const items = files.map((file) => ({
    name: file.name,
    createdBy: {
      label:
        file.createdBy?.user?.displayName ||
        file.createdBy?.application?.displayName,
      status: file.createdBy?.user ? "available" : undefined, // optional status if applicable
    },
    createdDateTime: file.createdDateTime,
    lastModifiedBy: {
      label:
        file.lastModifiedBy?.user?.displayName ||
        file.lastModifiedBy?.application?.displayName,
      status: file.lastModifiedBy?.user ? "available" : undefined,
    },
    lastModifiedDateTime: file.lastModifiedDateTime,
    webUrl: file.webUrl,
  }));

  return (
    <>
      {/* Message for small screens */}
      <div className={styles.smallScreenMessage}>
        Sorry, your screen is too small to view the content on this page.
      </div>

      <FileDataGrid items={items} />
    </>
  );
};

export default DocumentsContent;
