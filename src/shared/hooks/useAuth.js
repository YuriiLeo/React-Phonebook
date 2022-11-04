const { useSelector } = require("react-redux")
const { selectIsLogin } = require("redux/auth/auth-selectors")


export const useAuth = () => {
    const result = useSelector(selectIsLogin);

    return result;
};
