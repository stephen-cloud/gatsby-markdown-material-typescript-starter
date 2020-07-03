import Typography from "typography"
// import { gitHubTheme as typographyTheme } from 'typography-theme-github'
import { stowLakeTheme as typographyTheme}  from 'typography-theme-stow-lake'

const typography = new Typography(typographyTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

// Export helper functions
export const { scale, rhythm, options } = typography

export default typography
