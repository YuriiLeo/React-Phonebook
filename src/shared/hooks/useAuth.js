const { useSelector } = require("react-redux")
const { selectIsLogin } = require("redux/auth/authSelectors")


export const useAuth = () => {
    const result = useSelector(selectIsLogin);

    return result;
};
