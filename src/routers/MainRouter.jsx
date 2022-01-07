import { useEffect } from "react";
import { AppRouter } from "./AppRouter"
import { FrontRouter } from "./FrontRouter";
import { Loading } from "../components/UI/Loading";
import { useUser } from "../hooks/useUser";

export const MainRouter = () => {

    const { user, checking, authCheck } = useUser();

    useEffect(() => {
        authCheck();
    }, [authCheck]);

    if ( checking ) {
        return <Loading />
    }

    return (!!user.id ) ? <AppRouter /> : <FrontRouter />
}
