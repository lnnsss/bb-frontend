import { observer } from "mobx-react-lite";
import { useStores } from "../stores/root-store-context.js";
import AdminLayout from "./adminLayout.jsx";
import Layout from "./layout.jsx";
import Modal from "./Modal/index.jsx";

const Wrapper = observer(() => {
    const {
        token: { hasRole }
    } = useStores();

    const isAdmin = hasRole('ADMIN');

    return (
        <div className="wrapper">
            {isAdmin ? <AdminLayout /> : <Layout />}
            <Modal />
        </div>
    );
});

export default Wrapper;
