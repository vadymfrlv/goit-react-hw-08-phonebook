import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from 'redux/authorization/authorization-selectors';
import Loader from '../Loader';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <Suspense fallback={<Loader />}>
      {isLoggedIn && restricted ? <Navigate to="/contacts" /> : children}
    </Suspense>
  );
};

PublicRoute.propTypes = {
  // component: PropTypes.object,
  restricted: PropTypes.bool,
};

export default PublicRoute;
