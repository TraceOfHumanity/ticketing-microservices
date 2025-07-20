import axios from "axios";
import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  // console.log(currentUser);
  // axios.get('/api/users/currentuser');
  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

// LandingPage.getInitialProps = async ({ req }) => {
//   console.log('req', req.headers);
//   if (typeof window === 'undefined') {
//     // we are on the server!
//     // requests should be made to http://ingress-nginx.ingress-nginx...laksdjfk
//     try {
//       const { data } = await axios.get(
//         'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
//         {
//           headers: req.headers,
//         }
//       );

//       return data;
//     } catch (error) {
//       // 401 is expected for unauthenticated users
//       if (error.response?.status === 401) {
//         return {};
//       }
//       console.error('Error fetching current user on server:', error.message);
//       return {};
//     }
//   } else {
//     // we are on the browser!
//     // requests can be made with a base url of ''
//     try {
//       const { data } = await axios.get('/api/users/currentuser');
//       return data;
//     } catch (error) {
//       // 401 is expected for unauthenticated users
//       if (error.response?.status === 401) {
//         return {};
//       }
//       console.error('Error fetching current user on browser:', error.message);
//       return {};
//     }
//   }
// };

export default LandingPage;
