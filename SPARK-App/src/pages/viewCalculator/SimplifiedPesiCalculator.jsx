import React from 'react'
import { Button } from '@mui/material'
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

const SimplifiedPesi = () => {
    const handleSubmit = (event) => {
        // event.preventDefault();
        // console.log(formValues);
      };

    const tabs = [
        {
          label: "General Information",
          Component: (
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="center" justify="center" direction="column" style={{margin: '50px'}}>
                    <Grid item>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                    Submit
                    </Button>
                </Grid>
            </form>
            
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