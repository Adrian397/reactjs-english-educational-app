import { Box, TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)`
  min-height: 100vh;
  background-color: rgb(251, 248, 255);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomizedTableRow = styled(TableRow)`
  background-color: #be63f9;
  position: sticky;
  top: 0;
`;

export const CustomizedTableCell = styled(TableCell)`
  font-weight: bold;
  color: white;
`;
