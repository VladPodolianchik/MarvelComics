import { useState, useCallback } from "react";

export const useHttp = () => {   // можно через export default, неважно как
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const [process, setProcess] = useState('waiting')

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        // setLoading(true);
        setProcess('loading')
        try { // метод будет только отправлять запрос, но не обрабатывать его через .then .catch, поэтому исп-ем try-catch
            const response = await fetch(url, {method, body,headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            // setLoading(false);
            return data
        } catch(e) {
            // setLoading(false);
            // setError(e.message);
            setProcess('error');
            throw e;
        }

    }, []);

    const clearError = useCallback(() => {
        // setError(null);   // нужно очистить ошибку, дабы после ее выпадения, мы могли подгружать снова данные, иначе ошибка будет висеть
        setProcess('loading');
    }, []);

    return {request,clearError, process, setProcess}
}