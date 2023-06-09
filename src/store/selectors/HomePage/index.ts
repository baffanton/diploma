import { createStateSelector } from "../helpers";

const homePage = {
    news: createStateSelector('homePage.news'),
    events: createStateSelector('homePage.events')
}

export { homePage };
