
import Typography from '@mui/material/Typography';

export const Mainheader = ({ children }) => {
    return (<Typography id="" variant="h5" component="h2">
        {children}</Typography >
    )
}

export const Header = ({ children }) => {
    return (<Typography id="" variant="h4" component="h4">{children}</Typography >
    )
}

export const Subheader = ({ children }) => {
    return (<Typography id="" variant="h6" component="h6">{children}</Typography >
    )
}

export const Text = ({ children }) => {
    return (<Typography id="" variant="body1" component="p">{children}</Typography>
    )
}