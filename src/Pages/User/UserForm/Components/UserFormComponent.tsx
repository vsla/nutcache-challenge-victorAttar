import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import styled from "styled-components";
import {
  UserFormInterface,
  UserInterface,
} from "../../../../Interfaces/UserInterfaces";
import { useFormik } from "formik";
import * as yup from "yup";
import dayJs from "dayjs";

const today = new Date();

const validationSchema = yup.object({
  Email: yup.string().email().required(),
  name: yup.string().required(),
  Gender: yup.string().required(),
  Team: yup.string().required(),
  CPF: yup
    .string()
    .matches(
      /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
      "Insert a valid cpf"
    )
    .required(),
  birthDate: yup
    .date()
    .required("Insert a valid Date")
    .max(dayJs(today).format("YYYY-MM-DD")),
  StartDate: yup
    .date()
    .required("Insert a valid Date")
    .max(dayJs(today).format("YYYY-MM")),
});

const Genders = ["Male", "Female"];

const Teams = ["FrontEnd", "BackEnd", "Mobile"];

interface UserFormComponentInterface {
  handleSubmit: (userData: UserFormInterface) => void;
  employee?: UserInterface | null;
}

const UserformComponent = ({
  handleSubmit,
  employee,
}: UserFormComponentInterface) => {
  const initialValues: UserFormInterface = {
    name: "",
    birthDate: "",
    Gender: "",
    Email: "",
    CPF: "",
    StartDate: "",
    Team: "",
  };

  const formik = useFormik({
    initialValues: employee ? employee : initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: UserFormInterface) => {
      handleSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="filled"
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="filled"
            label="CPF"
            name="CPF"
            value={formik.values.CPF}
            onChange={formik.handleChange}
            error={formik.touched.CPF && Boolean(formik.errors.CPF)}
            helperText={formik.touched.CPF && formik.errors.CPF}
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl
            error={formik.touched.Gender && Boolean(formik.errors.Gender)}
            variant="filled"
            fullWidth
          >
            <InputLabel id="Gender-select">Gender</InputLabel>
            <Select
              labelId="Gender-select"
              name="Gender"
              value={formik.values.Gender}
              onChange={formik.handleChange}
            >
              {Genders.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.Gender && (
              <FormHelperText>{formik.errors.Gender}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl
            error={formik.touched.Team && Boolean(formik.errors.Team)}
            variant="filled"
            fullWidth
          >
            <InputLabel id="Team-select">Team</InputLabel>
            <Select
              labelId="Team-select"
              name="Team"
              value={formik.values.Team}
              onChange={formik.handleChange}
            >
              {Teams.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.Team && (
              <FormHelperText>{formik.errors.Team}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ max: dayJs(today).format("YYYY-MM-DD") }}
            label="Birthday"
            type="date"
            fullWidth
            variant="filled"
            name="birthDate"
            value={formik.values.birthDate}
            onChange={formik.handleChange}
            error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
            helperText={formik.touched.birthDate && formik.errors.birthDate}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ max: dayJs(today).format("YYYY-MM") }}
            label="Start date"
            type="month"
            fullWidth
            variant="filled"
            name="StartDate"
            value={formik.values.StartDate}
            onChange={formik.handleChange}
            error={formik.touched.StartDate && Boolean(formik.errors.StartDate)}
            helperText={formik.touched.StartDate && formik.errors.StartDate}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="filled"
            label="Email"
            name="Email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            helperText={formik.touched.Email && formik.errors.Email}
          />
        </Grid>
        <Grid item xs={12}>
          <SaveButtonContainer>
            <Button type="submit" variant="contained">
              Send
            </Button>
          </SaveButtonContainer>
        </Grid>
      </Grid>
    </form>
  );
};

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default UserformComponent;
