import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import { Container } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "whitesmoke",
    },
    "& label": {
      color: "#999",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "whitesmoke",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "whitesmoke",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "whitesmoke",
      },

      "&:hover fieldset": {
        borderColor: "#999",
      },
      "&.Mui-focused fieldset": {
        borderColor: "whitesmoke",
      },
    },
  },
})(TextValidator);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   margin: {
//     margin: theme.spacing(4),
//   },
// }));

// function SignUp(props) {
//   const [details, setDetails] = React.useState({
//     name: "",
//     surname: "",
//     email: "",
//     password: "",
//     birthDate: "",
//     street: "",
//     city: "",
//     zip: "",
//     card: "",
//   });

//   const [disabled, setDisabled] = React.useState(true);
//   const classes = useStyles();

//   const handleChange = (e) => {
//     let temp = details;

//     let currentId = e.currentTarget.name;
//     temp[currentId] = e.currentTarget.value;

//     setDetails({ ...temp });
//     console.log(details);
//     // let emptyField = Object.values(details).find(
//     //   (input) => input.isEmpty === undefined
//     // );
//     // {
//     //   emptyField == undefined && setDisabled(false);
//     // }
//   };
//   const myForm = React.useRef();
//   const onSubmit = (e) => {
//     console.log("success");
//     e.preventDefault();
//     setDetails({ ...details });
//     console.log(details);
//   };

//   return (
//     <Container className=" mt-4">
//       <ValidatorForm
//         myForm="form"
//         className={classes.root}
//         onSubmit={onSubmit}
//         onError={(errors) => console.log(errors)}
//         autoComplete="off"
//       >
//         <TextValidator
//           //   error={details.name.isEmpty}
//           className="w-50 mb-4"
//           label="Name"
//           variant="outlined"
//           name="name"
//           validators={["required"]}
//           errorMessages={["this field is required"]}
//           id="custom-css-outlined-input"
//           value={details.name.value}
//           onChange={handleChange}
//         />
//         {/* <CssTextField
//           //   error={details.surname.isEmpty}
//           className="w-50 mb-4"
//           label="Surname"
//           variant="outlined"
//           name="surname"
//           validators={["required"]}
//           errorMessages={["this field is required"]}
//           id="custom-css-outlined-input "
//           value={details.surname.value}
//           onChange={handleChange}
//         />
//         <CssTextField
//           //   error={details.email.isEmpty}
//           className="w-50 mb-4"
//           label="Email"
//           variant="outlined"
//           name="email"
//           validators={["required", "isEmail"]}
//           errorMessages={["this field is required", "email is not valid"]}
//           id="custom-css-outlined-input "
//           value={details.email.value}
//           onChange={handleChange}
//         />
//         <CssTextField
//           //   error={details.password.isEmpty}
//           className="w-50 mb-4"
//           label="Password"
//           variant="outlined"
//           name="password"
//           validators={["required"]}
//           errorMessages={["this field is required"]}
//           id="custom-css-outlined-input password"
//           value={details.password.value}
//           onChange={handleChange}
//         />
//         <CssTextField
//           //   error={details.birthDate.isEmpty}
//           className="w-50 mb-4"
//           variant="outlined"
//           id="custom-css-outlined-input "
//           name="birthDate"
//           validators={["required"]}
//           errorMessages={["this field is required"]}
//           type="date"
//           value={details.birthDate.value}
//           onChange={handleChange}
//         />
//         <CssTextField
//           //   error={details.street.isEmpty}
//           className="w-50 mb-4"
//           label="Street Address"
//           variant="outlined"
//           validators={["required"]}
//           errorMessages={["this field is required"]}
//           name="street"
//           id="custom-css-outlined-input "
//           value={details.street.value}
//           onChange={handleChange}
//         />
//         <CssTextField
//           //   error={details.city.isEmpty}
//           className="w-50 mb-4"
//           label="City"
//           variant="outlined"
//           id="custom-css-outlined-input "
//           validators={["required"]}
//           errorMessages={["this field is required"]}
//           name="city"
//           value={details.city.value}
//           onChange={handleChange}
//         />
//         <CssTextField
//           //   error={details.zip.isEmpty}
//           className="w-50 mb-4"
//           label="ZIP"
//           variant="outlined"
//           id="custom-css-outlined-input "
//           validators={["required"]}
//           errorMessages={["this field is required"]}
//           name="zip"
//           value={details.zip.value}
//           onChange={handleChange}
//         />
//         <CssTextField
//           //   error={details.card.isEmpty}
//           className="w-50 mb-4"
//           label="Credit Card"
//           variant="outlined"
//           id="custom-css-outlined-input"
//           validators={["required"]}
//           errorMessages={["this field is required"]}
//           name="card"
//           value={details.card.value}
//           onChange={handleChange}
//         /> */}
//         <Button
//           // disabled={disabled}
//           type="submit"
//           variant="contained"
//           color="primary"
//         >
//           Submit
//         </Button>
//       </ValidatorForm>
//     </Container>
//   );
// }

// export default SignUp;

export default class SignUp extends React.Component {
  state = {
    formData: {
      name: "",
      surname: "",
      email: "",
      password: "",
      birthDate: "",
      street: "",
      city: "",
      zip: "",
      card: "",
      confirmPassword: "",
    },

    submitted: false,
  };

  CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "whitesmoke",
      },
      "& label": {
        color: "#999",
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: "whitesmoke",
      },

      "& .MuiInput-underline:after": {
        borderBottomColor: "whitesmoke",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "whitesmoke",
        },

        "&:hover fieldset": {
          borderColor: "#999",
        },
        "&.Mui-focused fieldset": {
          borderColor: "whitesmoke",
        },
      },
    },
  })(TextValidator);
  useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    margin: {
      margin: theme.spacing(4),
    },
  }));

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = () => {
    this.setState({ submitted: true });
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== this.state.formData.password) {
        return false;
      }
      return true;
    });
  }

  render() {
    const { formData, submitted } = this.state;
    const classes = this.useStyles;
    return (
      <Container>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          className={classes.root}
        >
          <CssTextField
            label="Name"
            onChange={this.handleChange}
            name="name"
            value={formData.name}
            validators={["required"]}
            errorMessages={["this field is required"]}
            variant="outlined"
          />
          <br />
          <CssTextField
            label="Surname"
            onChange={this.handleChange}
            name="surname"
            value={formData.surname}
            validators={["required"]}
            errorMessages={["this field is required"]}
            variant="outlined"
          />
          <br />

          <CssTextField
            label="Email"
            onChange={this.handleChange}
            name="email"
            value={formData.email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
            variant="outlined"
          />
          <br />

          <CssTextField
            label="Password"
            onChange={this.handleChange}
            name="password"
            value={formData.password}
            validators={["required"]}
            errorMessages={["this field is required"]}
            variant="outlined"
          />
          <br />
          <CssTextField
            label="Confirm Password"
            onChange={this.handleChange}
            name="confirmPassword"
            value={formData.confirmPassword}
            validators={["isPasswordMatch", "required"]}
            errorMessages={["password mismatch", "this field is required"]}
            variant="outlined"
          />
          <br />
          <CssTextField
            label="Date of Birth"
            onChange={this.handleChange}
            name="birthDate"
            type="date"
            value={formData.birthDate}
            validators={["required"]}
            errorMessages={["this field is required"]}
            variant="outlined"
          />
          <br />
          <CssTextField
            label="Street"
            onChange={this.handleChange}
            name="street"
            value={formData.street}
            validators={["required"]}
            errorMessages={["this field is required"]}
            variant="outlined"
          />
          <br />
          <CssTextField
            label="City"
            onChange={this.handleChange}
            name="city"
            value={formData.city}
            validators={["required"]}
            errorMessages={["this field is required"]}
            variant="outlined"
          />
          <br />
          <CssTextField
            label="ZIP"
            onChange={this.handleChange}
            name="zip"
            value={formData.zip}
            validators={["required"]}
            errorMessages={["this field is required"]}
            variant="outlined"
          />
          <br />
          <CssTextField
            label="Credit Card"
            onChange={this.handleChange}
            name="card"
            value={formData.card}
            variant="outlined"
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={submitted}
          >
            {(submitted && "Your form is submitted!") ||
              (!submitted && "Submit")}
          </Button>
        </ValidatorForm>
      </Container>
    );
  }
}
