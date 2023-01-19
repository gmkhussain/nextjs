import React from "react"
import { wrapper } from "../redux/store"

const App = function({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);