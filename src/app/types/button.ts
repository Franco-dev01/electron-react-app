export type ButtonType = {
    title?: string,
    icon?: React.ReactNode,
    id: string,
    className?: string,
    variant?: "contained" | "outlined"
    disabled?: boolean,
    tooltip?: string,
    shape?: "circle" | "round",
    loading?: boolean
    block?: boolean,
    type?: "primary" | "ghost" | "dashed" | "link" | "default", 
    onClick: (event: any) => void
    onFocus?: (e: any) => void
    onBlur?: (e: any) => void
}

