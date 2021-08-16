import React from 'react'
import WelcomeScreen from './../components/WelcomeScreen'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import {Link as Router} from 'react-router-dom'
import {IconContext} from 'react-icons'
import {WiDaySunny} from 'react-icons/wi'

const WelcomePage = props => {
    return (
       <WelcomeScreen>
                <Grid container direction="column" justify="center" className="full">
                    <div className="highlight">
                        <Grid item container xs={12} justify="center" alignItems="center">
                            <Grid item>
                                <IconContext.Provider value={{size:"6em"}}>
                                    <WiDaySunny/>
                                </IconContext.Provider>
                            </Grid>
                            <Grid item container justify="center" direction="column" alignItems="center">
                                <Typography variant="h4" color="inherit">
                                    Weather App
                                </Typography>
                                <Link color="inherit" aria-label="menu" component={Router} to="/main">
                                        Ingresar
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
        </WelcomeScreen>
    )
}

export default WelcomePage
