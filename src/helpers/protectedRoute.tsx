import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

interface IProtectedRoute {
    auth: boolean;
    children: JSX.Element;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ auth, children }) => {
    if (!auth) {
        return <Navigate to='/' />
    }

    return children;
}

const mapStateToProps = (state: any) => {
    const { user } = state;

    return {
        auth: user.auth,
    }
}

export default connect(mapStateToProps)(ProtectedRoute);
