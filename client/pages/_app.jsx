import buildClient from "../api/build-client";
import "../globals.css";
import { Header } from "../components/Header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);

  try {
    const { data } = await client.get("/api/users/currentuser");
    let pageProps = {};

    if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }

    return { pageProps, ...data };
  } catch (error) {
    if (error.response?.status === 401) {
      return { currentUser: null };
    }
    console.error("Error fetching current user:", error.message);
    return { currentUser: null };
  }
};

export default AppComponent;
