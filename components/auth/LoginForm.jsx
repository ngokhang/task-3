"use client";

import { useState } from "react";
import classes from "./LoginForm.module.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { validatePassword, validateUsername } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage();
    if (!formData.username) {
      setErrorMessage("Tên đăng nhập không được để trống");
      return;
    }
    if (!formData.password) {
      setErrorMessage("Mật khẩu không được để trống");
      return;
    }
    if (
      !validateUsername(formData.username) ||
      !validatePassword(formData.password)
    ) {
      setErrorMessage("Thông tin đăng nhập không đúng định dạng");
      return;
    }

    // Call API to login
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);
    if (response.status === "success") {
      alert(response.message);
      Cookies.set("status", response.data.status);
      router.push("/");
    } else {
      alert(response.message);
    }
    setFormData({ username: "", password: "" });
  };

  return (
    <div className={classes.container}>
      <div className={classes.loginBox}>
        <img src="/logo.png" alt="logo" className={classes.logo} />
        <h2>Office Management System</h2>
        <form id="loginForm" onSubmit={handleSubmit} method="post">
          <div className={classes.textbox}>
            <FaUser style={{ color: "#000000" }} />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              value={formData.username}
            />
          </div>
          <div className={classes.textbox}>
            <FaLock />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
            />
          </div>
          {errorMessage && (
            <div className={classes.errorMessage}>{errorMessage}</div>
          )}
          <input
            type="submit"
            className={classes.btnLogin}
            defaultValue="Log in"
          />
        </form>
      </div>
      <div className={classes.loginImg}>
        <img src="/login-img.png" alt="image_right" />
      </div>
    </div>
  );
};

export default LoginForm;
