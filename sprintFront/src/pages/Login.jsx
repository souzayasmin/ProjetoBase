import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import home from "../../img/iconehome.png";
import logo from "../../img/logo.png";
import api from "../services/axios";

function Login() {
  const styles = getStyles();
  const [usuario, setUsuario] = useState({ email: "", senha: "" });
  const navigate = useNavigate();

  const onChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Login();
  };

  async function Login() {
    await api.postLogin(usuario).then(
      (response) => {
        alert(response.data.message);
        navigate("/principal");
      },
      (error) => {
        console.log(error);
        alert(error.response.data.error);
      }
    );
  }

  return (
    <Container component="main" sx={styles.container}>
      <Box sx={styles.header}>
        <Button component={Link} to="/home" sx={styles.buttonHome}>
          <img
            src={home}
            alt="Home"
            style={{ width: "65px", height: "65px" }}
          />
        </Button>
      </Box>
        <Box
          component="form"
          sx={styles.form}
          onSubmit={handleSubmit}
          noValidate
        >
          <Box component="img" src={logo} alt="Logo" sx={styles.logo} />
          <TextField
            required
            fullWidth
            id="email"
            placeholder=" e-mail"
            name="email"
            margin="normal"
            value={usuario.email}
            onChange={onChange}
            sx={styles.textField}
          />
          <TextField
            required
            fullWidth
            id="senha"
            placeholder=" senha"
            name="senha"
            type="password"
            margin="normal"
            value={usuario.senha}
            onChange={onChange}
            sx={{ ...styles.textField, mt: 3 }}
          />
          <Button sx={styles.buttonLogin} type="submit" variant="contained">
            Login
          </Button>
          <Button
            component={Link}
            to="/cadastro"
            sx={styles.buttonCadastro}
            variant="text"
          >
            Cadastre-se
          </Button>
        </Box>
      <Box sx={styles.footer}>
        <Typography sx={styles.footerText}>
          &copy; Desenvolvido por: Vinicius Fogaça, Maria Júlia e Maria Fernanda
        </Typography>
      </Box>
    </Container>
  );
}

function getStyles() {
  return {
    header: {
      backgroundColor: "rgba(177, 16, 16, 1)",
      width: "210vh",
      height: "11vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      borderBottom: "5px solid white",
    },
    buttonHome: {
      mr:8,
    },
    form: {
      mt:14.8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      paddingRight: 6,
      paddingLeft: 6,
      paddingTop: 9,
      paddingBottom: 5,
      borderRadius: 10,
    },
    logo: {
      width: "280px",
      height: "auto",
      mb: 4,
      border: 5,
      borderColor: "white",
      borderRadius: 4,
    },
    textField: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": { border: "none" },
        "&:hover fieldset": { border: "none" },
        "&.Mui-focused fieldset": { border: "none" },
      },
      "& input::placeholder": {
        fontSize: "17px",
        color: "black",
      },
      width: "35vh",
      height: "5.5vh",
      backgroundColor: "white",
      display: "flex",
      border: "0px transparent",
      borderRadius: 10,
    },
    buttonLogin: {
      "&.MuiButton-root": {
        border: "none",
        boxShadow: "none",
        "&:hover": {
          border: "none",
          backgroundColor: "rgba(255, 0, 0, 0.55)",
        },
      },
      mt: 4,
      color: "white",
      backgroundColor: "rgba(255, 0, 0, 1)",
      width: 85,
      height: 45,
      fontWeight: 600,
      fontSize: 15,
      borderRadius: 15,
      textTransform: "none",
    },
    buttonCadastro: {
      color: "rgb(152, 0, 0)",
      backgroundColor: "transparent",
      fontWeight: "bold",
      fontSize: 15.5,
      textDecoration: "underline",
      textDecorationThickness: "1.5px",
      textUnderlineOffset: "4px",
      mt: 2,
      textTransform: "none",
      "&:hover": {
        textDecoration: "underline",
        backgroundColor: "transparent",
        color: "rgb(167, 63, 63)",
      },
    },
    footer: {
      mt:17.5,
      backgroundColor: "rgba(177, 16, 16, 1)",
      width: "210vh",
      height: "7vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderTop: "5px solid white",
    },
    footerText: {
      color: "white",
      fontSize: 18,
    },
  };
}

export default Login;
