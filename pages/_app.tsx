import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Footer, Header } from "../components";
import { Center } from "../components/Style";
import { GlobalStyle, theme } from "../styles";
import "antd/dist/antd.css";

export function reportWebVitals(metric: any) {
	console.log(metric)
}

export default function MyApp({ Component, pageProps }: AppProps & NextPage) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle theme={theme} />
			<Head>
				
			</Head>
			<Head>
				<title>Next.ts</title>
			</Head>
			<Header />
			<main className="main">
				<Center>
					<Component {...pageProps} />
				</Center>
			</main>
			<Footer />
		</ThemeProvider>
	)
}

