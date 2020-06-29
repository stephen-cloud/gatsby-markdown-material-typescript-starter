import Typography from "typography"
import gitHubTheme from 'typography-theme-github'

// const typography = new Typography(fairyGatesTheme)
const typography = new Typography(gitHubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
