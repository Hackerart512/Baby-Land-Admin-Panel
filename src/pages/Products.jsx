import React from "react";
import DataTable from "react-data-table-component";

const data = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 150 },
];

const columns = [
  { name: "ID", selector: row => row.id, sortable: true },
  { name: "Product Name", selector: row => row.name, sortable: true },
  { name: "Price", selector: row => row.price, sortable: true },
  {
    name: "Actions",
    cell: row => (
      <button
        onClick={() => alert(`Edit ${row.name}`)}
        className="px-2 py-1 bg-blue-500 text-white rounded"
      >
        Edit
      </button>
    )
  }
];

export default function Products() {
  return <DataTable columns={columns} data={data} pagination />;
}
