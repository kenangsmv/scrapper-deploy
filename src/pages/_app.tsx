import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper } from '@store/store'


/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default storeWrapper.withRedux(CustomApp)
