import { Typography, Button, ButtonGroup } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from "@mui/system";
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';

const Create = () => {
    return (
        <Container>
            <Typography
                variant="h6"
                component="h1"
                color="textSecondary"
                gutterBottom
            >
                Create a New Note
            </Typography>
            <Button
                type="submit"
                variant="contained"
                style={{ marginInline: "5px", marginLeft: 0 }}
                color="error"
                startIcon={<AcUnitOutlinedIcon />}
            >
                Primary
            </Button>
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                disableElevation
                style={{ marginInline: "5px" }}
                endIcon={<SendIcon />}
            >
                Secondary
            </Button>
        </Container>
    );
}

export default Create;