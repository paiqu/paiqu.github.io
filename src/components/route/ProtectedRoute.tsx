import React, { ContextType, useContext } from 'react';
import { 
	Route, 
	Redirect,
	RouteComponentProps,
	RouteProps
} from 'react-router-dom';
import { AuthContext } from '../../context';


interface ProtectedRouteProps extends RouteProps {

};

export default function ProtectedRoute(props: ProtectedRouteProps) {
  const authenticated = useContext(AuthContext).authenticated;

	// return (
	// 	<Route render={(props: RouteComponentProps) => {
	// 		if (!authenticated) {
	// 			return <Redirect to="/login" />;
	// 		}

	// 		return <Route {...props} />
	// 	}} />
	// );
	if (!authenticated) {
		return <Redirect to="/login" />;
	}

	return <Route {...props} />;
}