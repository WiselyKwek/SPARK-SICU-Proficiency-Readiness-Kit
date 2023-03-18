import React from 'react'
import { Button, ToggleButton, ToggleButtonGroup, Paper, Divider, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import axios from 'axios'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react'
import { margin } from '@mui/system'
import CalculatorTab from '../../components/calculatorIcon/TabPanel'
import TextField from '@mui/material/TextField';
import { spacing } from '@mui/system';
import { borders } from '@mui/system';
import CalcResultCard from '../../components/calculator/CalcResultCard';

const SimplifiedPesi = () => {
    const handleSubmit = (event) => {
        // event.preventDefault();
        // console.log(formValues);
      };
      
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'left',
        boxShadow: 'none',
    }));

    const tabs = [
        {
          label: "General Information",
          Component: (
            <div style={{marginLeft:'10%', marginRight:'10%'}}>
            <form onSubmit={handleSubmit}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} my={1} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                                <Typography>
                                    Age, years
                                </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                                <ToggleButtonGroup color="primary" exclusive>
                                    <ToggleButton value="">
                                        ≤80
                                    </ToggleButton>
                                    <ToggleButton value="">
                                        &gt;80
                                    </ToggleButton>
                                </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid container spacing={2} my={1} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                                <Typography>
                                    History of cancer
                                </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                                <ToggleButtonGroup color="primary" exclusive>
                                    <ToggleButton value="">
                                        Yes
                                    </ToggleButton>
                                    <ToggleButton value="">
                                        No
                                    </ToggleButton>
                                </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid container spacing={2} my={1} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                                <Typography>
                                    History of chronic cardiopulmonary disease
                                </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                                <ToggleButtonGroup color="primary" exclusive>
                                    <ToggleButton value="">
                                        Yes
                                    </ToggleButton>
                                    <ToggleButton value="">
                                        No
                                    </ToggleButton>
                                </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid container spacing={2} my={1} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                                <Typography>
                                    Heart rate, bpm
                                </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                                <ToggleButtonGroup color="primary" exclusive>
                                    <ToggleButton value="">
                                        &lt;110
                                    </ToggleButton>
                                    <ToggleButton value="">
                                        ≥110
                                    </ToggleButton>
                                </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid container spacing={2} my={1} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                                <Typography>
                                    Systolic BP, mmHg
                                </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                                <ToggleButtonGroup color="primary" exclusive>
                                    <ToggleButton value="">
                                        ≥100
                                    </ToggleButton>
                                    <ToggleButton value="">
                                        &lt;100
                                    </ToggleButton>
                                </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid container spacing={2} my={1} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                                <Typography>
                                    O₂ saturation
                                </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                                <ToggleButtonGroup color="primary" exclusive>
                                    <ToggleButton value="">
                                        ≥90%
                                    </ToggleButton>
                                    <ToggleButton value="">
                                        &lt;90%
                                    </ToggleButton>
                                </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <div>
                        <Button variant="contained" sx={{mt: 2}} color="primary" type="submit">
                            Reset
                        </Button>
                    </div>
                </Box>
            </form>
            <Typography variant="h6" mt={5} mb={1} sx={{fontWeight:'bold'}} component="div">
                Results
            </Typography>
            <CalcResultCard></CalcResultCard>
            </div>
          )
        },
        {
          label: "Point System",
          Component: (
            <div>
              <h1>Tab with heading</h1>
              <p>Hello I am a tab with a heading</p>
            </div>
          )
        }
      ];

    return (
        <Box pt={5}>
            <div className="pageTitle">
                <h1 style={{fontSize: '30px', fontWeight: 'bold', marginBottom: "25px", textAlign: 'center'}}>Simplified PESI (Pulmonary Embolism Severity Index)</h1>
                <h6 style={{textAlign: 'center', color: '#04484A'}}>Predicts 30-day outcome of patients with PE, with fewer criteria than the original PESI.</h6>
            </div>
            <div style={{textAlign: 'center', padding: '50px 0px'}}>
                <CalculatorTab tabs={tabs} />
            </div>
        </Box>
    )
}

export default SimplifiedPesi