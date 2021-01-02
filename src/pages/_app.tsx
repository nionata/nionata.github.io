import '@styles/globals.css'
import { AppProps } from 'next/app'
import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="h-screen">
			<div className="h-1/12 bg-blue-200 flex items-center">
				<Image 
					src="/logo.png"
					width={100}
					height={100}
					layout="fixed"
				/>
			</div>
			<div className="">
				<Component {...pageProps} />
			</div>
		</div>
	)
}