async function apiRequest(url = '', optionsObject = null, errMsg = null) {
    try {
        const response = await fetch(url, optionsObject);
        if (!response.ok) throw Error("Please reload the application");
    } catch (err) {
        errMsg = err;
    } finally {
        return errMsg;
    }
}

export default apiRequest;