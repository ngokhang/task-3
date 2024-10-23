import Header from "@/components/Header";
import classes from "./layout.module.css";
import Sidebar from "@/components/Sidebar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      <section className={classes.container}>
        <Sidebar />
        {children}
      </section>
    </>
  );
};

export default HomeLayout;
