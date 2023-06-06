const getShortName = (name: string, surname: string, patronymic: string) => {
    if (!name || !surname || !patronymic) {
        return null;
    }

    return `${surname} ${name[0]}.${patronymic[0]}.`;
}

export { getShortName };
