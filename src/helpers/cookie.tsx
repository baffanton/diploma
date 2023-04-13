const getCookie = (name: string): string | null => {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : null;
}

const setCookie = (name: string, value: any, opt?: any) => {
    const options = {
        path: '/',
        ...opt
    };

    const updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + `; max-age=${options.maxAge}`;

    document.cookie = updatedCookie;
}

const deleteCookie = (name: string) => {
    setCookie(name, "", { maxAge: -1 })
  }

export { getCookie, setCookie, deleteCookie };
