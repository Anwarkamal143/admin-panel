import { Globe } from "@assets/icons"
import { Input } from "@components"
import React from "react"
import { UsersWrapper } from "./users.styled"
interface Props {}

const Users = (props: Props) => {
    return (
        <UsersWrapper>
            <Input
                type="text"
                parentClasses="w-30"
                placeholder={"place holder"}
                leftIcon={{
                    icon: "fa-angle-right",
                    variant: "fas",
                }}
                hasLeftIcon={true}
                hasRightIcon={true}
                rightIcon={{
                    icon: Globe,
                }}
            />
        </UsersWrapper>
    )
}

export { Users }
