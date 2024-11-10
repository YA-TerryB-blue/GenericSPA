// DocumentsDataGrid.tsx
import * as React from "react";
import {
  DataGrid,
  DataGridBody,
  DataGridHeader,
  DataGridRow,
  DataGridCell,
  DataGridHeaderCell,
} from "@fluentui/react-components";
import { getCellFocusMode } from "../data";
import styles from "./DocumentsDataGrid.module.scss";

interface IDocumentsDataGridProps {
  items: any[];
  columns: any[];
  onSelectionChange: (e: React.SyntheticEvent, data: any) => void;
}

const DocumentsDataGrid: React.FC<IDocumentsDataGridProps> = ({
  items,
  columns,
  onSelectionChange,
}) => {
  return (
    <div className={styles.dataGridContainer}>
      <DataGrid
        items={items}
        columns={columns}
        sortable
        selectionMode="multiselect"
        getRowId={(item) => item.file.label}
        onSelectionChange={onSelectionChange}
      >
        <DataGridHeader>
          <DataGridRow>
            {({ renderHeaderCell }) => (
              <DataGridHeaderCell className={styles.headerCell}>
                {renderHeaderCell()}
              </DataGridHeaderCell>
            )}
          </DataGridRow>
        </DataGridHeader>
        <DataGridBody>
          {({ item, rowId }) => (
            <DataGridRow key={rowId}>
              {({ renderCell, columnId }) => (
                <DataGridCell
                  focusMode={getCellFocusMode(columnId as string)}
                  className={styles.dataGridCell}
                >
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

export default DocumentsDataGrid;
