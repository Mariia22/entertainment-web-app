import React, { useState } from "react"
import { LoginForm } from "../../../features/login/ui/LoginForm"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { LoginFormLink } from "../../../features/login/ui/LoginFormLink"

export const LoginPage: React.FC = () => {
    const [isLogin, setLogin] = useState(true)

    function handleClick() {
        setLogin(!isLogin)
    }

    return (
        <main className="flex flex-col w-[400px] bg-primaryPale rounded-[20px] mt-20 px-8 py-8">
            {isLogin ? (
                <>
                    <HeaderSection>Login</HeaderSection>
                    <LoginForm />
                    <LoginFormLink
                        text={"Don't have an account?"}
                        link={"Sign Up"}
                        handleClick={handleClick}
                    />
                </>
            ) : (
                <>
                    <HeaderSection>Sign Up</HeaderSection>
                    <LoginForm />
                    <LoginFormLink
                        text={"Already have an account?"}
                        link={"Login"}
                        handleClick={handleClick}
                    />
                </>
            )}
        </main>
    )
}
