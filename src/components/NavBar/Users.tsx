import { Outlet } from "@tanstack/react-router";

function Users(){
    return(
        <>
         <div>
            <h1>
                Users who have access over these files and folders
            </h1>
         </div>
         <div>
            <Outlet/>
         </div>
        </>
    )
}

export default Users;