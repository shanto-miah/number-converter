import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Text from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root : {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));

const ListItemLink = (props) => {
    return <ListItem button component={Link} {...props}/>
}

const Home = () => {

    const classes = useStyles();

    return (

        <Container maxWidth="md" className={classes.root}>
            
            <Grid container spacing={3}>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Text variant="h6">Binary To</Text>
                            <Divider/>
                            <List>
                                <ListItemLink button to="binary-to-octal">
                                    <ListItemText>Octal</ListItemText>
                                </ListItemLink>
                                <ListItemLink button to="binary-to-decimal">
                                    <ListItemText>Decimal</ListItemText>
                                </ListItemLink>
                                <ListItemLink button to="binary-to-hexadecimal">
                                    <ListItemText>Hexadecimal</ListItemText>
                                </ListItemLink>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

               
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Text variant="h6">Octal To</Text>
                            <Divider/>
                            <List>
                                <ListItemLink button to="octal-to-binary">
                                    <ListItemText>Binary</ListItemText>
                                </ListItemLink>
                                <ListItemLink button to="octal-to-decimal">
                                    <ListItemText>Decimal</ListItemText>
                                </ListItemLink>
                                <ListItemLink button to="octal-to-hexadecimal">
                                    <ListItemText>Hexadecimal</ListItemText>
                                </ListItemLink>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

               
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Text variant="h6">Decimal To</Text>
                            <Divider/>
                            <List>
                                <ListItemLink button to="decimal-to-binary">
                                    <ListItemText>Binary</ListItemText>
                                </ListItemLink>
                                <ListItemLink button to="decimal-to-octal">
                                    <ListItemText>Octal</ListItemText>
                                </ListItemLink>
                                <ListItemLink button to="decimal-to-hexadecimal">
                                    <ListItemText>Hexadecimal</ListItemText>
                                </ListItemLink>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

               
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Text variant="h6">Hexadecimal To</Text>
                            <Divider/>
                            <List>
                                <ListItemLink button to="hexadecimal-to-binary">
                                    <ListItemText>Binary</ListItemText>
                                </ListItemLink>
                                <ListItemLink button to="hexadecimal-to-octal">
                                    <ListItemText>Octal</ListItemText>
                                </ListItemLink>
                                <ListItemLink button to="hexadecimal-to-decimal">
                                    <ListItemText>Decimal</ListItemText>
                                </ListItemLink>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        </Container>
    );


}

export default Home;