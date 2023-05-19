import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    
    const [user, setUser] = setState({
        userId: 1,
        userLoginName: "guest_user",
        userLoginPassword: "password",
        userFailedLogins: 0,
        userLastLogin: "2023-01-01",
        userDateOfBirth: "2023-01-01",
        userAccountCreateDate: "2023-01-01",
        userUsername: "Guest",
        userImageType: "local",
        userImageLocal: "/images/guest.jpg",
        userImageUrl: "https://example.com/guest.jpg",
        userSubscriptionType: "Free",
        userAccessLevel: 1,
        userEmail: "noemail@notanemail.com",
        userQuote: "Logged in as guest.",
        userNotepad: "Guest accounts may not be modified.  Have a nice day.",
      });

    const loginUser = (userData) => {
        setUser(userData);
    };

    const logoutUser = () => {
        setUser({
            userId: 1,
            userLoginName: "guest_user",
            userLoginPassword: "password",
            userFailedLogins: 0,
            userLastLogin: "2023-01-01",
            userDateOfBirth: "2023-01-01",
            userAccountCreateDate: "2023-01-01",
            userUsername: "Guest",
            userImageType: "local",
            userImageLocal: "/images/guest.jpg",
            userImageUrl: "https://example.com/guest.jpg",
            userSubscriptionType: "Free",
            userAccessLevel: 1,
            userEmail: "noemail@notanemail.com",
            userQuote: "Logged in as guest.",
            userNotepad: "Guest accounts may not be modified.  Have a nice day.",
          });
    };

    //Send user context value and functions to child components
    return (
        <UserContext.Provider value={{user, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    );
};