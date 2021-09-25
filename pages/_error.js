const Error = ({ statusCode, title }) =>
    <div>{title}==={statusCode}</div>

const initialProps = ({ res, err }) => {
    const statusCode = res && res.statusCode ? res.statusCode : err?.statusCode || 404;
    return { statusCode, title: err?.message || '' };
};

Error.getInitialProps = initialProps;

Error.displayName = 'Error';

export default Error;