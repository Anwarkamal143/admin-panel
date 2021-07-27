import React, {
    CSSProperties,
    HTMLAttributes,
    ReactElement,
    ReactNode,
    useEffect,
    useState,
} from "react"

import { ButtonContainer } from "./button.styled"
export type asComp = keyof Omit<
    HTMLElementTagNameMap,
    "applet" | "dir" | "font" | "frame" | "frameset" | "marquee"
>
export type Icon = {
    icon?:
        | string
        | ReactNode
        | ReactElement
        | JSX.Element
        | React.ElementType<any>
    as?: asComp
    iconExt?: "svg" | "jpg" | "jpeg" | "png"
    styles?: CSSProperties
    className?: string
    props: Omit<HTMLAttributes<HTMLElement>, "style" | "className">
}
export type IButtonType = React.ComponentPropsWithRef<"button"> & {
    leftIcon?: Icon
    rightIcon?: Icon

    main?: {
        as?: asComp
        styles?: CSSProperties
        className?: string
        props?: Omit<HTMLAttributes<HTMLElement>, "style" | "className">
    }

    styles?: CSSProperties
    className?: string
    props?: Omit<HTMLAttributes<HTMLElement>, "style" | "className">
}
// applet' does not exist on type 'JSX.IntrinsicElements'.ts(2339)
// Property 'dir' does not exist on type 'JSX.IntrinsicElements'.ts(2339)
// Property 'font' does not exist on type 'JSX.IntrinsicElements'.ts(2339)
// Property 'frame' does not exist on type 'JSX.IntrinsicElements'.ts(2339)
// Property 'frameset' does not exist on type 'JSX.IntrinsicElements'.ts(2339)
// Property 'marquee'
export function Button(bProps: IButtonType): ReactElement {
    const {
        leftIcon,
        rightIcon,
        children,
        main,
        styles,
        className,
        props,
        ...rest
    } = bProps
    // const leftIconRef = useRef<any>(<></>)
    // const rightIconRef = useRef<any>(<></>)
    const MainComp: asComp = main?.as || "div"
    const LeftIconComp: asComp = leftIcon?.as || "span"
    const RightIconComp: asComp = rightIcon?.as || "span"

    const [leftIconComp, setLeftIconComp] = useState<any>(<></>)
    const [rightIconComp, setRightIconComp] = useState<any>(<></>)
    // eslint-disable-next-line
    async function importIcon(icon: any, ext: any, rightIconStyles = {}) {
        // eslint-disable-next-line
        let IcomComp: any = <></>
        if (icon) {
            if (typeof icon != "string") {
                // eslint-disable-next-line
                IcomComp = icon as any
            } else {
                try {
                    // iconRef.current = (
                    //     await import(`../../Assets/icons/flags/${path}`)
                    // ).ReactComponent;
                    IcomComp = (
                        await import(
                            `../../assets/icons/${icon}${ext ? `.${ext}` : ""}`
                        )
                    ).default
                    // eslint-disable-next-line
                    IcomComp = (<IcomComp style={rightIconStyles} />) as any
                    /* ------------------ For storybook uncomment this ----------------*/
                    //  iconRef.current =  await import(`../../Assets/icons/flags/${path}`)
                    // iconRef.current = (
                    //     await import(`@Styles/icons/flags/${path}`)
                    // ).default;
                } catch (err) {
                    console.log("No Icon exist... ")
                } finally {
                    console.log("imported")
                }
                return IcomComp
                // console.log(IconComp)
                // setIconComp(<IconComp />)
            }
        }
    }
    useEffect(() => {
        async function getIcon() {
            if (leftIcon?.icon) {
                const LeftIcon = await importIcon(
                    leftIcon.icon,
                    leftIcon.iconExt,
                    leftIcon.styles
                )
                setLeftIconComp(LeftIcon)
            }
            if (rightIcon?.icon) {
                const RightIcon = await importIcon(
                    rightIcon.icon,
                    rightIcon.iconExt,
                    rightIcon.styles
                )
                setRightIconComp(RightIcon)
            }
        }
        getIcon()
    }, [
        leftIcon?.icon,
        leftIcon?.iconExt,
        rightIcon?.icon,
        rightIcon?.iconExt,
        leftIcon?.styles,
        rightIcon?.styles,
    ])
    return (
        <ButtonContainer
            style={styles}
            className={className}
            {...props}
            {...rest}>
            {leftIcon?.icon && (
                <LeftIconComp
                    className={`leftIcon ${leftIcon.className}`}
                    style={leftIcon.styles}
                    {...leftIcon?.props}>
                    {leftIconComp}
                </LeftIconComp>
            )}
            <MainComp
                className={`main_content ${main?.className}`}
                style={main?.styles}
                {...main?.props}>
                {React.Children.map(children, child => child)}
            </MainComp>
            {rightIcon?.icon && (
                <RightIconComp
                    style={rightIcon.styles}
                    className={`rightIcon ${rightIcon.className}`}
                    {...rightIcon?.props}>
                    {rightIconComp}
                </RightIconComp>
            )}
        </ButtonContainer>
    )
}
