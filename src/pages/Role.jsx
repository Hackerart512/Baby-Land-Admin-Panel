import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { roleList, deleteRole, addRole } from "../api/Api";

export default function RoleTable() {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);

    // Add User modal
    const [showModal, setShowModal] = useState(false);
    const [newRole, setNewRole] = useState({ name: "", permissions: [] });


    const fetchRoles = async () => {
        const res = await roleList();
        setRoles(res);
        setLoading(false);
    };

    useEffect(() => {
        fetchRoles();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this usroleer?")) {
            await deleteRole(id);
            fetchRoles();
        }
    };

    const handleAddRole = async (e) => {
        e.preventDefault();
        try {
            await addRole(newRole);
            fetchRoles();
            setShowModal(false);
            setNewRole({ name: "", permissions: [] });
        } catch (err) {
            console.error(err);
        }
    };



    const columns = [
        { name: "Name", selector: row => row.name, sortable: true },
        { name: "Permissions", selector: row => row.permissions, sortable: true },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex gap-2">
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
            <h2 className="text-2xl font-bold mb-4">Roles</h2>
            <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Add User
            </button>
            <DataTable
                columns={columns}
                data={roles}
                progressPending={loading}
                pagination
                highlightOnHover
                pointerOnHover
            />
            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h3 className="text-xl font-bold mb-4">Add New Doctor</h3>
                        <form onSubmit={handleAddRole} className="flex flex-col gap-3">
                             
                             <input
                                type="text"
                                placeholder="Role Name"
                                value={newRole.name}
                                onChange={(e) =>
                                    setNewRole({ ...newRole, name: e.target.value })
                                }
                                className="border p-2 rounded"
                                required
                            />

                            {/* Example permissions input (comma separated) */}
                            <input
                                type="text"
                                placeholder="Permissions (comma separated)"
                                value={newRole.permissions.join(",")}
                                onChange={(e) =>
                                    setNewRole({
                                        ...newRole,
                                        permissions: e.target.value.split(",").map((p) => p.trim()),
                                    })
                                }
                                className="border p-2 rounded"
                            />

                            <div className="flex justify-end gap-2 mt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-3 py-1 bg-gray-300 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-3 py-1 bg-blue-500 text-white rounded"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
