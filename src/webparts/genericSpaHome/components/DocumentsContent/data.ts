import { PresenceBadgeStatus } from "@fluentui/react-badge";
import {
  DocumentRegular,
  FolderRegular,
  VideoRegular,
  DocumentPdfRegular,
} from "@fluentui/react-icons";
import * as React from "react";
import { TableColumnDefinition, DataGridCellFocusMode } from "@fluentui/react-table";

// Define types for each cell
type FileCell = {
  label: string;
  icon: React.ReactNode;
};

type LastUpdatedCell = {
  label: string;
  timestamp: number;
};

type AuthorCell = {
  label: string;
  status: PresenceBadgeStatus;
};

type Item = {
  file: FileCell;
  author: AuthorCell;
  lastUpdated: LastUpdatedCell;
};

// Sample items
export const items: Item[] = [
  {
    file: {
      label: "Meeting notes",
      icon: React.createElement(DocumentRegular),
    },
    author: { label: "Max Mustermann", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
  },
  {
    file: {
      label: "Thursday presentation",
      icon: React.createElement(FolderRegular),
    },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: {
      label: "Training recording",
      icon: React.createElement(VideoRegular),
    },
    author: { label: "John Doe", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
  },
  {
    file: {
      label: "Purchase order",
      icon: React.createElement(DocumentPdfRegular),
    },
    author: { label: "Jane Doe", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
  },
];

// Define the columns for the data grid
export const columns: TableColumnDefinition<Item>[] = [
  {
    columnId: "file",
    compare: (a, b) => a.file.label.localeCompare(b.file.label),
    renderHeaderCell: () => React.createElement("div", null, "File"),
    renderCell: (item) => React.createElement("div", null, item.file.icon, item.file.label),
  },
  {
    columnId: "author",
    compare: (a, b) => a.author.label.localeCompare(b.author.label),
    renderHeaderCell: () => React.createElement("div", null, "Author"),
    renderCell: (item) =>
      React.createElement("div", null, item.author.label + " - " + item.author.status),
  },
  {
    columnId: "lastUpdated",
    compare: (a, b) => a.lastUpdated.timestamp - b.lastUpdated.timestamp,
    renderHeaderCell: () => React.createElement("div", null, "Last Updated"),
    renderCell: (item) => React.createElement("span", null, item.lastUpdated.label),
  },
];

// Function to determine the focus mode for each cell
export const getCellFocusMode = (
  columnId: string
): DataGridCellFocusMode | undefined => {
  switch (columnId) {
    case "file":
      return "cell"; // The file cell is focusable
    case "author":
      return "none"; // The author cell is not focusable
    case "lastUpdated":
      return "none"; // The last updated cell is not focusable
    default:
      return undefined; // Default case when the columnId doesn't match
  }
};

// Handling column labels separately
export const columnLabels = {
  file: "File",
  author: "Author",
  lastUpdated: "Last Updated",
};
