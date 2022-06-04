import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Select } from "@mui/material";

export const Input = styled(TextField)(() => ({
    backgroundColor: "#f3f6f9",
    borderRadius: "5px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f3f6f9"
      },
      "&:hover fieldset": {
        borderColor: "#f3f6f9"
      },
    }
  }));
  
 export const InputSelect = styled(Select)(() => ({
    backgroundColor: "#f3f6f9",
    color: "#000",
    width: "100%",
    boder:"none",
    borderRadius: "5px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f3f6f9"
      },
      "&:hover fieldset": {
        borderColor: "#f3f6f9"
      },
    }
  }));
  
 export const classes = {
    paddingLeft: 10,
    paddingRight: 10,
    border: "none",
    width: "40%",
  };
  
 export const tableStyle = {
    position: "sticky",
    top: "0px",
    padding: "50px",
    fontSize: "20px"
  };