import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { staffList, deleteStaff, addStaff, roleList } from "../api/Api";

export default function StaffTable() {
    const [staffs, setStaffs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [roles, setRoles] = useState([]);

    // Add User modal
    const [showModal, setShowModal] = useState(false);
    const [newStaff, setNewStaff] = useState({ name: "", email: "", password: "", roleId: "" });


    const fetchStaffs = async () => {
        const res = await staffList();
        setStaffs(res);
        setLoading(false);
    };

    const fetchRoles = async () => {
        const res = await roleList();
        setRoles(res);
    };

    useEffect(() => {
        fetchStaffs();
        fetchRoles();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this usroleer?")) {
            await deleteStaff(id);
            fetchStaffs();
        }
    };

    const handleAddStaff = async (e) => {
        e.preventDefault();
        try {
            await addStaff(newStaff);
            fetchStaffs();
            setShowModal(false);
            setNewStaff({ name: "", email: "", password: "", roleId: "" });
        } catch (err) {
            console.error(err);
        }
    };



    const columns = [
        { name: "Name", selector: row => row.name, sortable: true },
        { name: "Email", selector: row => row.email, sortable: true },
        {
            name: "Role",
            selector: row => {
                const role = roles.find(r => r._id === row.roleId);
                return role ? role.name : "Unknown";
            },
            sortable: true
        },
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
            <h2 className="text-2xl font-bold mb-4">Staff</h2>
            <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Add User
            </button>
            <DataTable
                columns={columns}
                data={staffs}
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
                        <form onSubmit={handleAddStaff} className="flex flex-col gap-3">

                            <input
                                type="text"
                                placeholder="Role Name"
                                value={newStaff.name}
                                onChange={(e) =>
                                    setNewStaff({ ...newStaff, name: e.target.value })
                                }
                                className="border p-2 rounded"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={newStaff.email}
                                onChange={(e) =>
                                    setNewStaff({ ...newStaff, email: e.target.value })
                                }
                                className="border p-2 rounded"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Password"
                                value={newStaff.password}
                                onChange={(e) =>
                                    setNewStaff({ ...newStaff, password: e.target.value })
                                }
                                className="border p-2 rounded"
                                required
                            />

                            <select
                                id="role"
                                value={newStaff.roleId || ""}
                                onChange={(e) =>
                                    setNewStaff({ ...newStaff, roleId: e.target.value })
                                }
                                className="border p-2 rounded w-full"
                                required
                            >
                                <option value="">-- Select a Role --</option>
                                {roles.map((role) => (
                                    <option key={role._id} value={role._id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>




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
