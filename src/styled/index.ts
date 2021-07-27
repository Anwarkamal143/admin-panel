import styledComponents, {
    ThemedStyledComponentsModule,
} from "styled-components"
import { StyleClosetTheme } from "./theme"
export * from "./theme"
export * from "./Global.styled"
export * from "./StyledLayoutWrapper"



const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
} = styledComponents as Partial<ThemedStyledComponentsModule<StyleClosetTheme>>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
