import { createContext, useMemo, useState } from "react";
import { getDataFromLocalStorage } from "../utils/context-utils";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
    const [userData, setUserData] = useState(getDataFromLocalStorage("userData", {}));

    const userDataProviderValue = useMemo(
        () => ({ userData, setUserData }),
        [userData, setUserData]
    );

    return (
        <UserContext.Provider value={userDataProviderValue}>
            {children}
        </UserContext.Provider>
    );
}
