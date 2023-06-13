import { ModalTypes } from "enums/modalTypes";
import { NewsModal } from "./components/NewsModal";
import { MessageModal } from "./components/MessageModal";

export const getModal = (type: ModalTypes, closeModal: any, option: any): React.ReactElement | null => {
    switch (type) {
        case ModalTypes.newsModal:
            return <NewsModal onClose={closeModal} option={option} />
        case ModalTypes.messageModal:
            return <MessageModal onClose={closeModal} option={option} />
        default:
            return null;
    }
}