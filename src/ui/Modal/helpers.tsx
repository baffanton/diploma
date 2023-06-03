import { ModalTypes } from "enums/modalTypes";
import { AddUserModal } from "./components/AddUserModal";
import { EditUserModal } from "./components/EditUserModal";

export const getModal = (type: ModalTypes, closeModal: any, option: any): React.ReactElement | null => {
    switch (type) {
        case ModalTypes.addUser:
            return <AddUserModal onClose={closeModal} option={option} />;
        case ModalTypes.editUser:
            return <EditUserModal onClose={closeModal} option={option} />;
        default:
            return null;
    }
}