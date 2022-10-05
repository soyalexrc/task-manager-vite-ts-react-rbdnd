import {
  Navigate,
  // useLocation,
} from 'react-router-dom';
// import useAuth from '../hooks/api/auth/useAuth'

interface props {
  children: JSX.Element
}

export default function UserProtectedRoute({ children }: props) {
  // const { token } = useAuth();
  // console.log(token);
  // const location = useLocation();

  if ( !localStorage.getItem('al-token')) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  return children;
};
