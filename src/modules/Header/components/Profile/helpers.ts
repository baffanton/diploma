export const getShortNameByFullName = (name: string, surname: string, patronymic: string) => {
    return `${surname} ${Array.from(name)[0]}.${Array.from(patronymic)[0]}.`;
};
