
import axios from "axios";
const SERVER_URL = "http://localhost:5000"

// Dummy user data
let users = [
    {
        _id: "1",
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "User",
        isVerified: true,
        approved: false,
        conditions: {
            PCOS: true,
            PMS: false,
            Endometriosis: false,
            ThyroidIssues: true,
            Diabetes: false,
            Hypertension: false,
        },
    },
    {
        _id: "2",
        name: "Dr. Sarah Lee",
        email: "sarah@example.com",
        role: "HealthcareProfessional",
        isVerified: true,
        approved: true,
        conditions: {
            PCOS: false,
            PMS: false,
            Endometriosis: false,
            ThyroidIssues: false,
            Diabetes: false,
            Hypertension: false,
        },
    },
    {
        _id: "3",
        name: "Maya Patel",
        email: "maya@example.com",
        role: "User",
        isVerified: false,
        approved: false,
        conditions: {
            PCOS: false,
            PMS: true,
            Endometriosis: false,
            ThyroidIssues: false,
            Diabetes: true,
            Hypertension: false,
        },
    },
];

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Get all users
export const getUsers = async () => {
    await delay(500); // simulate network
    return users;
};

// Delete user
export const deleteUser = async (id) => {
    await delay(200);
    users = users.filter((u) => u._id !== id);
    return { success: true };
};

// Approve / Unapprove user
export const toggleApproveUser = async (id) => {
    await delay(200);
    users = users.map((u) =>
        u._id === id ? { ...u, approved: !u.approved } : u
    );
    return { success: true };
};

// ---------- Doctor Apis ----------

let doctors = [
    {
        _id: "1",
        name: "Pavan",
        email: "pavan@example.com",
        role: "User",
        isVerified: true,
        approved: false
    },
    {
        _id: "2",
        name: "Dr. Divya Lee",
        email: "divya@example.com",
        role: "HealthcareProfessional",
        isVerified: true,
        approved: true
    },
    {
        _id: "3",
        name: "Maya Patel",
        email: "maya@example.com",
        role: "User",
        isVerified: false,
        approved: false
    },
];

export const addDoctor = async (user) => {
    await delay(300);
    // const newUser = { ...user, _id: Date.now().toString() }; // generate dummy ID
    // users.push(newUser);
    return true;
};


// Get all users
export const getDoctors = async () => {
    await delay(500); // simulate network
    return doctors;
};

// Delete user
export const deleteDoctor = async (id) => {
    await delay(200);
    doctors = doctors.filter((u) => u._id !== id);
    return { success: true };
};

// Approve / Unapprove user
export const toggleApproveDoctor = async (id) => {
    await delay(200);
    doctors = doctors.map((u) =>
        u._id === id ? { ...u, approved: !u.approved } : u
    );
    return { success: true };
};


export const adminLogin = async (email, password) => {
    try {
        console.log(email, password);
        const response = await axios.post(
            `${SERVER_URL}/api/admins/login`,
            { email, password },
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        return response;
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        throw error;
    }
};


export const roleList = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/api/roles/getall`);
        console.log(response);
        return response.data.data;
    } catch (error) {
        console.error("Failed:", error.response?.data || error.message);
        throw error;
    }
};


export const addRole = async (role) => {
    try {
        const response = await axios.post(`${SERVER_URL}/api/roles/add`, role);
        return response.data;
    } catch (error) {
        console.error("Failed:", error.response?.data || error.message);
        throw error;
    }
};

export const editRole = async () => {
    try {
        const response = await axios.post(
        );

        return response.data;
    } catch (error) {
        console.error("Failed:", error.response?.data || error.message);
        throw error;
    }
};


export const deleteRole = async (roleId) => {
    try {
        const response = await axios.delete(`${SERVER_URL}/api/roles/delete/${roleId}`);
        return response.data;
    } catch (error) {
        console.error("Delete failed:", error.response?.data || error.message);
        throw error;
    }
};

export const viewRole = async () => {
    try {
        const response = await axios.post(
        );

        return response.data;
    } catch (error) {
        console.error("Failed:", error.response?.data || error.message);
        throw error;
    }
};

// ----------- Staff Apis -----------
export const staffList = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/api/admins/staff/getall`);
        console.log(response);
        return response.data.data;
    } catch (error) {
        console.error("Failed:", error.response?.data || error.message);
        throw error;
    }
};


export const addStaff = async (staff) => {
    try {
        const response = await axios.post(`${SERVER_URL}/api/admins/staff/add`, staff);
        return response.data;
    } catch (error) {
        console.error("Failed:", error.response?.data || error.message);
        throw error;
    }
};

export const editStaff = async () => {
};


export const deleteStaff = async (roleId) => {
    try {
        const response = await axios.delete(`${SERVER_URL}/api/roles/delete/${roleId}`);
        return response.data;
    } catch (error) {
        console.error("Delete failed:", error.response?.data || error.message);
        throw error;
    }
};

export const viewStaff = async () => {
};

