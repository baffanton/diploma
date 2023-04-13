import { createStateSelector } from "../helpers";

const modal = {
    modal: createStateSelector('modal.modal'),
    isOpen: createStateSelector('modal.isOpen')
}

export { modal };
