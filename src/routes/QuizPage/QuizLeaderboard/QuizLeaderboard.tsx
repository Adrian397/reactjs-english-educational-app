import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { quizService } from "@services/QuizService";
import { useQuery } from "@tanstack/react-query";
import { ReactElement, useState } from "react";
import {
  CustomizedTableCell,
  CustomizedTableRow,
  Wrapper,
} from "./QuizLeaderboard.styled";

const QuizLeaderboard = (): ReactElement => {
  const [args, setArgs] = useState({
    limit: 6,
    page: 0,
  });

  const { data } = useQuery(["quiz", args], () =>
    quizService.getUsersScore(args)
  );
  return (
    <Wrapper>
      <Paper sx={{ width: "55rem" }}>
        <TableContainer sx={{ height: "374.59px" }}>
          <Table>
            <TableHead>
              <CustomizedTableRow>
                <CustomizedTableCell align="center">
                  Username
                </CustomizedTableCell>
                <CustomizedTableCell align="center">Score</CustomizedTableCell>
                <CustomizedTableCell align="center">
                  Difficulty
                </CustomizedTableCell>
              </CustomizedTableRow>
            </TableHead>

            <TableBody>
              {data &&
                data.list.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell align="center">{user.username}</TableCell>
                    <TableCell align="center">{user.result.score}</TableCell>
                    <TableCell align="center">
                      {user.result.difficulty}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {data && (
          <TablePagination
            component="div"
            count={data.numberOfRows}
            onPageChange={(e, newPage) => setArgs({ ...args, page: newPage })}
            onRowsPerPageChange={(e) =>
              setArgs({ ...args, limit: +e.target.value })
            }
            page={args.page}
            rowsPerPage={args.limit}
            rowsPerPageOptions={[6, 12, 24, 48]}
          />
        )}
      </Paper>
    </Wrapper>
  );
};

export default QuizLeaderboard;
