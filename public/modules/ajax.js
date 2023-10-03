
export class Ajax {
    static get(params = {}) {
        let status;

        return fetch(params.url, {
            method: "GET",
            mode: "cors",
            credentials: "include",
        })
            .then(
                (response) => {
                    status = response.status;
                    const contentType = response.headers.get("content-type")
                    if ( contentType && contentType.indexOf("application/json") !== -1 )
                        return response.json();
                    else
                        return Promise.resolve(null);
                },
                (error) => {
                    console.error(error); // ошибка отправки
                }
            )
            .then((parsedJson) => {
                return {
                    status,
                    parsedJson,
                };
            });
    }

    static post(url = "", data = {}) {
        let status;

        return fetch(url, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(
                (response) => {
                    status = response.status;
                    const contentType = response.headers.get("content-type")
                    if ( contentType && contentType.indexOf("application/json") !== -1 )
                        return response.json();
                    else
                        return Promise.resolve(null);
                },
                (error) => {
                    console.error(error);
                }
            )
            .then((parsedJson) => {
                return {
                    status,
                    parsedJson,
                };
            });
    }

    static async postAsync(url = "", data = {}) {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const parsedJson = await response.json();
        return {
            status: response.status,
            parsedJson,
        };
    }

    static async getAsync(params = {}) {
        const response = await fetch(params.url, {
            method: "GET",
            mode: "cors",
            credentials: "include",
        });
        const parsedJson = await response.json();

        return {
            status: response.status,
            parsedJson,
        };
    }
}
