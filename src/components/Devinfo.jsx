import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Text from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles(theme =>({
    header : {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        color: '#ffffff',
        background: 'linear-gradient(45deg, #673AB7, #3F51B5)'
    }
}));
function Devinfo(props) {
    const classes = useStyles();
    return (
        <>
        <Box className={classes.header}>
            <Container maxWidth="md">
                <Text variant="h2">Number Converter</Text>
                <Text variant="subtitle1">This is a simple number converter application which allow you to convert Binary, Decimal, Octal & Hexadecimal to Binary, Decimal, Octal and Hexadecimal. So just enjoy (:-</Text>
            </Container>
        </Box>
        <Box my={3}>
            <Container maxWidth="md">
                <Grid container>
                    <Grid item xs={12} sm={5} md={4}>
                        <Text variant="h4">Developer Info</Text>
                    </Grid>
                    <Grid item xs={12} sm={7} md={8}>
                        <Text variant="h6">Name : <Link target="_blank" href="https://github.com/shanto-miah">Shanto Miah</Link></Text>
                        <Text variant="h6">Email : <Link target="_blank" href="mailto:contact@shantoisonline.com">contact@shantoisonline.com</Link></Text>
                        <Text variant="h6">Website : <Link target="_blank" href="https://shantoisonline.com">https://shantoisonline.com</Link></Text>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </>
    );
}

export default Devinfo;