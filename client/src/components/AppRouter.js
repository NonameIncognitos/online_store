import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { authRouter, publicRouter } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "..";

const AppRouter = () => {
    const { user } = useContext(Context)

    console.log('user: ', user)
    

    return (
        <Routes>
            {user.isAuth &&
                authRouter.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} exact />
                ))}
            {publicRouter.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))}
            {/* Добавляем Navigate для неизвестных адресов */}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
