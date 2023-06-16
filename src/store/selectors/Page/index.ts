import { createStateSelector } from "../helpers";

const page = {
    modal: createStateSelector('page.modal'),
    isOpenModal: createStateSelector('page.isOpenModal'),
    loaderPoints: createStateSelector('page.loaderPoints'),
}

export { page };
