import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { STATUS } from "../../../app/constants/status";
import { STATUS_STYLE_TRANFORM } from "../../../app/constants/statusStyle";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Product Name",
    width: 160,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "category",
    headerName: "Category",
    width: 160,
    align: "center",
    headerAlign: "center",

  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 160,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "quantity",
    headerName: "Quantity",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <div className={STATUS_STYLE_TRANFORM[params?.value]}>
          {STATUS[params?.value]}
        </div>
      )
    }
  },
  {
    field: "actions",
    headerName: "Action",
    sortable: false,
    width: 200,
    align: "center",
    headerAlign: "center",
    renderCell: () => {
      return (
        <>
          <IconButton size="small" sx={{ color: "gray" }}>
            <Delete />
          </IconButton>

          <IconButton size="small" sx={{ color: "gray" }}>
            <Edit />
          </IconButton>
        </>
      );
    },
    disableColumnMenu: true,
    disableExport: true,
    disableReorder: true,
    hideSortIcons: true
  }
];

const rows = [
  {
    id: 1,
    name: "Mackbook Pro 2017",
    category: "pc",
    price: 1000000,
    quantity: 1,
    status: "PAID"
  },
  {
    id: 2,
    name: "Mackbook Pro 2017",
    category: "pc",
    price: 1000000,
    quantity: 3,
    status: "REFUSED"
  },
  {
    id: 3,
    name: "Mackbook Pro 2017",
    category: "pc",
    price: 1000000,
    quantity: 4,
    status: "PROGRESS"
  },
  {
    id: 4,
    name: "Mackbook Pro 2017",
    category: "pc",
    price: 1000000,
    quantity: 5,
    status: "PROGRESS"
  },
  {
    id: 5,
    name: "Mackbook Pro 2017",
    category: "pc",
    price: 1000000,
    quantity: 15,
    status: "SENT"
  },
  {
    id: 6,
    name: "Mackbook Pro 2017",
    category: "pc",
    price: 1000000,
    quantity: 2,
    status: "SENT"
  },
  {
    id: 7,
    name: "Mackbook Pro 2017",
    category: "pc",
    price: 1000000,
    quantity: 18,
    status: "REFUSED"
  }
];

export default function ProductTable() {

  return (
    <div style={{ height: 400, width: "100%", backgroundColor:"#fff" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableColumnSelector
      />
    </div>
  );
}
