import { Navigate, useLocation } from 'react-router-dom';

// import { useFirebase } from '../../../context/firebase';
import Loader from '../../common/Loader';

/**
 * Renders a component if there is a logged in user, otherwise redirect to login.
 */
const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  // const { user, isFetchingUser } = useFirebase();
  const location = useLocation();

  // return isFetchingUser ? (
  //   <Loader />
  // ) : !!user ? (
  //   <>{children}</>
  // ) : (
  //   <Navigate to={'/'} state={{ from: location }} replace />
  // );
  return <Loader />;
};

export default AuthRoute;
