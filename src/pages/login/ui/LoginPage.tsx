import React, { useState } from "react"
import { LoginForm } from "../../../features/login/ui/LoginForm"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { RegistrationForm } from "../../../features/registration/ui/RegistrationForm"
import { AuthFormLink } from "../../../shared/ui/Link/AuthFormLink"
import { textsAndPlaceholders } from "../../../shared/model/appTextsAndPlaceHolders"
import { useAppSelector } from "../../../shared/model/hooks"
import { selectAuthError } from "../../../entities/session/model/slice"

export const LoginPage: React.FC = () => {
    const [isLogin, setLogin] = useState(true)
    const error = useAppSelector(selectAuthError)

    function handleClick() {
        setLogin(!isLogin)
    }

    return (
        <main className="flex flex-col w-[327px] md:w-[400px] bg-primaryPale rounded-[20px] mt-14 xl:mt-20 px-8 py-8">
            {isLogin ? (
                <>
                    <HeaderSection>
                        {textsAndPlaceholders.authForm.loginHeader}
                    </HeaderSection>
                    <LoginForm />
                    <AuthFormLink
                        text={textsAndPlaceholders.authForm.loginText}
                        link={textsAndPlaceholders.authForm.registrationHeader}
                        handleClick={handleClick}
                    />
                </>
            ) : (
                <>
                    <HeaderSection>
                        {textsAndPlaceholders.authForm.registrationHeader}
                    </HeaderSection>
                    <RegistrationForm />
                    <AuthFormLink
                        text={textsAndPlaceholders.authForm.registrationText}
                        link={textsAndPlaceholders.authForm.loginHeader}
                        handleClick={handleClick}
                    />
                </>
            )}
            {error && <p>{error?.message}</p>}
        </main>
    )
}
