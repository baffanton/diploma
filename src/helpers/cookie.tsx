const getCookie = (name: string): string | null => {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : null;
}

const setCookie = (name: string, value: any) => {
    const options = {
        path: '/',
        maxAge: 604800,
    };

    const updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + `; max-age=${options.maxAge}`;

    document.cookie = updatedCookie;
}

export { getCookie, setCookie };
