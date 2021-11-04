import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("user").role === "admin")
          return <Component {...props} />;
        else
          return (
            <Redirect
              to={{ path: "/Homee", state: { from: props.location } }}
            />
          );
      }}
    />
  );
};

export default ProtectedRoute;
