import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { Grid } from '@mui/material';
import { Navbar } from '../components/Navbar';
import Me from '../images/me.jpg';

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Navbar />
      </Grid>
      <Grid item xs={8}>
        <div>
          <h1> Krishan Varsani </h1>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className='toggle-container'>
          <ThemeToggle />
        </div>
      </Grid>

      <Grid item xs={12}>
        <p>
          Welcome to my portfolio :)
        </p>

      </Grid>

    </Grid>

  )
}

export default Home
