import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../styles/globals.css";

storyblokInit({
  accessToken: "bAIGr0QLo25JJhu79kwXKQtt",
  // bridge: false,
  apiOptions: {
    region: "eu", // Pass this key/value if your space was created under US region
  },
  use: [apiPlugin],
  components: {
//    page: Page,
//    teaser: Teaser,
//    grid: Grid,
//    feature: Feature,
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
