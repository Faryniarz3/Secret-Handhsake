import Homepage from "./Components/Homepage";
import ProfilePage from "./Components/ProfilePage";
import Signup from "./Components/Signup";

const routes = [
    {
        path: "/",
        element: <Homepage />,
        children: [
            {
                path: "/Profile",
                element: <ProfilePage />
            },
            {
                path: "/SignupLogin",
                element: <Signup />
            }
        ]
    }
]

export default routes