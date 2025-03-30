import React from "react"
import AdminHeader from "./Admin/components/Header/index.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";

const AdminLayout = () => {
    return (
        <>
            <AdminHeader />
            <main>
                <AdminRoutes />
            </main>
        </>
    )
}

export default AdminLayout