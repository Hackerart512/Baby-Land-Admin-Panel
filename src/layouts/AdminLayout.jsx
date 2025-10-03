import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    CssBaseline,
    Box,
    Tooltip,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AdminLayout = ({ children }) => {
    const [avatarUrl, setAvatarUrl] = useState("");
    const [anchorElUser, setAnchorElUser] = useState(null);
    const settings = ["Profile", "Logout"];
    const navigate = useNavigate();

    useEffect(() => {
        // Generate a random avatar on each refresh
        const randomId = Math.floor(Math.random() * 1000);
        setAvatarUrl(`https://i.pravatar.cc/150?img=${randomId}`);
    }, []);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const OnLogout = () => {
        localStorage.removeItem('token');
        navigate("/");

    }

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            {/* Top Navbar */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6" noWrap>
                        Admin Panel
                    </Typography>

                    {/* User Avatar & Menu */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Admin" src={avatarUrl} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            anchorEl={anchorElUser}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={() => {
                                        handleCloseUserMenu();
                                        if (setting === "Logout") OnLogout(); // trigger logout
                                    }}
                                >
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Sidebar */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        <ListItem button component={Link} to="/dashboard">
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button component={Link} to="/user">
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Patient" />
                        </ListItem>
                        <ListItem button component={Link} to="/role">
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Role" />
                        </ListItem>
                        <ListItem button component={Link} to="/staff">
                            <ListItemIcon>
                                <ManageAccountsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Staff" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            {/* Page Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default AdminLayout;
