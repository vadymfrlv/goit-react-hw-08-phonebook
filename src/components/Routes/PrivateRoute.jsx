import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from 'redux/authorization/authorization-selectors';
import Loader from '../Loader';

const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <Suspense fallback={<Loader />}>{isLoggedIn ? <Component /> : <Navigate to="/" />}</Suspense>
  );
};

PrivateRoute.prototype = {
  component: PropTypes.object,
};

export default PrivateRoute;
