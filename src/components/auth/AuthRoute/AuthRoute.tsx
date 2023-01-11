import { Navigate, useLocation } from 'react-router-dom';

// import { useFirebase } from '../../../context/firebase';
import Loader from '../../common/Loader';

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  // const { user, isFetchingUser } = useFirebase();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/home';

  // return isFetchingUser ? (
  //   <Loader />
  // ) : !!user ? (
  //   <Navigate to={from} state={{ from: location }} replace />
  // ) : (
  //   <>{children}</>
  // );
  return <>{children}</>;
  
};

export default AuthRoute;
