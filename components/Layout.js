import Head from 'next/head';
import Header from './Header';
import ReactGA from 'react-ga';



const Layout = (props) => (
	ReactGA.initialize('UA-164284027-1');
	ReactGA.pageview(window.location.pathname + window.location.search);

	<div>
		<Head>
			

			{/*bootstrap link*/}
			<link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossOrigin="anonymous"
			/>
			{/*fontawesome link*/}
			<link
				rel="stylesheet"
				href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
				integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
				crossOrigin="anonymous"
			/>
		</Head>
		<Header />
		{props.children} {/*where data goes*/}
	</div>
);

export default Layout;
