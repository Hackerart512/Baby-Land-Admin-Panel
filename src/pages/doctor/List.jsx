import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getDoctors, deleteDoctor, toggleApproveDoctor, addDoctor  } from "../../api/Api";

export default function DoctorTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        const res = await getDoctors();
        setUsers(res);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            await deleteDoctor(id);
            fetchUsers();
        }
    };

    const handleApprove = async (id) => {
        await toggleApproveDoctor(id);
        fetchUsers();
    };
 
    
    // Add User modal
    const [showModal, setShowModal] = useState(false);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    });



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

    const handleAddUser = async (e) => {
        e.preventDefault();
        await addDoctor(newUser);
        setShowModal(false);
        setNewUser({ name: "", email: "", role: "User", isVerified: false, approved: false, conditions: { PCOS: false, PMS: false } });
        fetchUsers();
    };


    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Doctor</h2>
            <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Add User
            </button>
            <DataTable
                columns={columns}
                data={users}
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
                        <form onSubmit={handleAddUser} className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Name"
                                value={newUser.name}
                                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                className="border p-2 rounded"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                className="border p-2 rounded"
                                required
                            /> 
                            <input
                                type="text"
                                placeholder="Password"
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                className="border p-2 rounded"
                                required
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
