import * as React from "react";
import {
  FolderRegular,
  PeopleRegular,
  NewRegular,
  TimelineRegular,
  LinkRegular,
} from "@fluentui/react-icons";
import {
  PresenceBadgeStatus,
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  TableColumnDefinition,
  createTableColumn,
} from "@fluentui/react-components";
import style from "./FileDataGrid.module.scss"; // Import styles from CSS module

// Define types based on your sample data structure
type AuthorCell = {
  label: string;
  status?: PresenceBadgeStatus; // Status can be optional for "SharePoint App" user
};

type Item = {
  name: string;
  createdBy: AuthorCell;
  createdDateTime: string;
  lastModifiedBy: AuthorCell;
  lastModifiedDateTime: string;
  webUrl: string;
};

interface FileDataGridProps {
  items: any;
}

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "name",
    compare: (a, b) => a.name.localeCompare(b.name),
    renderHeaderCell: () => (
      <div className={style.headerCell}>
        <FolderRegular style={{ marginRight: 8 }} />
        Folder Name
      </div>
    ),
    renderCell: (item) => (
      <div className={style.dataGridCell}>
        <FolderRegular style={{ marginRight: 8 }} />
        {item.name}
      </div>
    ),
  }),
  createTableColumn<Item>({
    columnId: "createdBy",
    compare: (a, b) => a.createdBy.label.localeCompare(b.createdBy.label),
    renderHeaderCell: () => (
      <div className={style.headerCell}>
        <PeopleRegular style={{ marginRight: 8 }} />
        Created By
      </div>
    ),
    renderCell: (item) => (
      <div className={style.dataGridCell}>
        <PeopleRegular style={{ marginRight: 8 }} />
        {item.createdBy.label}
      </div>
    ),
  }),
  createTableColumn<Item>({
    columnId: "createdDateTime",
    compare: (a, b) =>
      new Date(a.createdDateTime).getTime() -
      new Date(b.createdDateTime).getTime(),
    renderHeaderCell: () => (
      <div className={style.headerCell}>
        <NewRegular style={{ marginRight: 8 }} />
        Created Date
      </div>
    ),
    renderCell: (item) => new Date(item.createdDateTime).toLocaleString(),
  }),
  createTableColumn<Item>({
    columnId: "lastModifiedBy",
    compare: (a, b) =>
      a.lastModifiedBy.label.localeCompare(b.lastModifiedBy.label),
    renderHeaderCell: () => (
      <div className={style.headerCell}>
        <PeopleRegular style={{ marginRight: 8 }} />
        Last Modified By
      </div>
    ),
    renderCell: (item) => (
      <div className={style.dataGridCell}>
        <PeopleRegular style={{ marginRight: 8 }} />
        {item.lastModifiedBy.label}
      </div>
    ),
  }),
  createTableColumn<Item>({
    columnId: "lastModifiedDateTime",
    compare: (a, b) =>
      new Date(a.lastModifiedDateTime).getTime() -
      new Date(b.lastModifiedDateTime).getTime(),
    renderHeaderCell: () => (
      <div className={style.headerCell}>
        <TimelineRegular style={{ marginRight: 8 }} />
        Last Modified Date
      </div>
    ),
    renderCell: (item) => new Date(item.lastModifiedDateTime).toLocaleString(),
  }),
  createTableColumn<Item>({
    columnId: "webUrl",
    compare: () => 0,
    renderHeaderCell: () => (
      <div className={style.headerCell}>
        <LinkRegular style={{ marginRight: 8 }} />
        Link
      </div>
    ),
    renderCell: (item) => (
      <a
        href={item.webUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={style.dataGridCell}
      >
        <LinkRegular style={{ marginRight: 8 }} />
        Open Folder
      </a>
    ),
  }),
];

export const FileDataGrid: React.FC<FileDataGridProps> = ({ items }) => {
  return (
    <div className={style.dataGridContainer}>
      <DataGrid
        items={items}
        columns={columns}
        sortable
        selectionMode="multiselect"
        getRowId={(item) => item.name}
        focusMode="composite"
        style={{ minWidth: "550px" }}
      >
        <DataGridHeader>
          <DataGridRow
            selectionCell={{
              checkboxIndicator: { "aria-label": "Select all rows" },
            }}
          >
            {({ renderHeaderCell }) => (
              <DataGridHeaderCell className={style.headerCell}>
                {renderHeaderCell()}
              </DataGridHeaderCell>
            )}
          </DataGridRow>
        </DataGridHeader>
        <DataGridBody<Item>>
          {({ item, rowId }) => (
            <DataGridRow<Item> key={rowId}>
              {({ renderCell }) => (
                <DataGridCell className={style.dataGridCell}>
                  {renderCell(item)}
                </DataGridCell>
              )}
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGrid>
    </div>
  );
};

export default FileDataGrid;
