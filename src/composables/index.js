// hooks/useNavigateHook.js

import { useNavigate } from "react-router-dom";


const useNavigateHook = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return { handleNavigate };
};

export default useNavigateHook;
