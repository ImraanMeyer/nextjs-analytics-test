import Head from 'next/head';
import Header from './Header';

const Layout = (props) => (
	<div>
		<Head>
			<script
				dangerouslySetInnerHTML={{
					__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','UA-164209859-1%22%3E');`
				}}
			/>

			<noscript
				dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=UA-164209859-1%22%3E" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
				}}
			/>

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
