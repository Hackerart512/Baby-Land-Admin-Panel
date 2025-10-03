import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getUsers, deleteUser, toggleApproveUser } from "../api/Api";

export default function UsersTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        const res = await getUsers();
        setUsers(res);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            await deleteUser(id);
            fetchUsers();
        }
    };

    const handleApprove = async (id) => {
        await toggleApproveUser(id);
        fetchUsers();
    };

    const columns = [
        { name: "Name", selector: row => row.name, sortable: true },
        { name: "Email", selector: row => row.email, sortable: true },
        { name: "Role", selector: row => row.role, sortable: true },
        { name: "Verified", selector: row => row.isVerified ? "Yes" : "No" },
        { name: "Approved", selector: row => row.approved ? "Yes" : "No" },
        { name: "PCOS", selector: row => row.conditions?.PCOS ? "Yes" : "No" },
        { name: "PMS", selector: row => row.conditions?.PMS ? "Yes" : "No" },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex gap-2">
                    <button
                        onClick={() => handleApprove(row._id)}
                        className={`px-2 py-1 rounded ${row.approved ? 'bg-yellow-500' : 'bg-green-500'} text-white`}
                    >
                        {row.approved ? "Unapprove" : "Approve"}
                    </button>
                    <button
                        onClick={() => handleDelete(row._id)}
                        className="px-2 py-1 bg-red-500 rounded text-white"
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Users</h2>
            <DataTable
                columns={columns}
                data={users}
                progressPending={loading}
                pagination
                highlightOnHover
                pointerOnHover
            />
        </div>
    );
}
