import { useRouteError } from "react-router-dom";



const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <h3>this is error page</h3>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default Error;