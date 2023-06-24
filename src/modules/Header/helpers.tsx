const getShortName = (firstname: string, lastname: string, surname: string) => {
    if (!firstname || !lastname || !surname) {
        return null;
    }

    return `${lastname} ${firstname[0]}.${surname[0]}.`;
};

export { getShortName };
