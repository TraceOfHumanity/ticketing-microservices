import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  try {
    const { data } = await client.get("/api/users/currentuser");
    return data;
  } catch (error) {
    if (error.response?.status === 401) {
      return { currentUser: null };
    }
    console.error('Error fetching current user:', error.message);
    return { currentUser: null };
  }
};

export default LandingPage;
