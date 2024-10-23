import classes from "./auth.module.css";

const AuthLayout = ({ children }) => {
  return <section className={classes.body}>{children}</section>;
};

export default AuthLayout;
