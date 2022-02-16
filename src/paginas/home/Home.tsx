import React from 'react';
import { Grid, Box, Typography, Button } from "@material-ui/core";
import './Home.css';

function Home(){
    return(
        <>
            <Grid className="Home" container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Sejam bem vindes </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Expresse aqui seu amor e admiração pelo SANTOS!!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "black", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>

                </Grid>

                <Grid item xs={6}>
                    <img src="https://logodownload.org/wp-content/uploads/2017/02/santos-logo-escudo-9.png" alt="" width="500px" height="500px" />
                </Grid>

                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>

            </Grid>
        </>
    );
};
export default Home;