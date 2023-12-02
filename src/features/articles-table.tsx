import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";

import { Article } from "../entity/article";
import LinkIcon from "../assets/link.svg?react";
import { formatDate } from "../utils";
import { ReactNode } from "react";

export function ArticlesTable({
  rows,
  pagination,
  onRowClick,
}: {
  rows?: Article[];
  pagination?: ReactNode;
  onRowClick: (artice: Article) => void;
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Authors</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell sx={{ whiteSpace: "nowrap" }}>
              Publication date
            </StyledTableCell>
            <StyledTableCell sx={{ whiteSpace: "nowrap" }}>
              Original URL
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {!!rows &&
            rows.length > 0 &&
            rows.map((row, idx) => (
              <TableRow
                key={`${row.publishedAt}-${idx}`}
                onClick={() => onRowClick({ ...row, id: idx + 1 })}
              >
                <TableCell>
                  <figure className="w-[100px] h-[70px]">
                    <img
                      src={row.urlToImage}
                      alt="article"
                      className="object-cover h-full w-full"
                    />
                  </figure>
                </TableCell>

                <TableCell>
                  <TextEllipsisWrapper>{row.title}</TextEllipsisWrapper>
                </TableCell>

                <TableCell>
                  <TextEllipsisWrapper>{row.author}</TextEllipsisWrapper>
                </TableCell>

                <TableCell>
                  <TextEllipsisWrapper>{row.description}</TextEllipsisWrapper>
                </TableCell>

                <TableCell>{formatDate(row.publishedAt)}</TableCell>

                <TableCell>
                  <a
                    href={row.url}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className="flex justify-center p-[2px]"
                  >
                    <LinkIcon width={20} height={20} />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          {(!rows || rows.length === 0) && (
            <TableRow style={{ height: 53 }}>
              <TableCell colSpan={6} sx={{ textAlign: "center" }}>
                No records found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>{pagination}</TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ECF0F6",
    color: "#212932",
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {},
}));

function TextEllipsisWrapper({ children }: { children: string }) {
  return (
    <div className="overflow-hidden line-clamp-2 text-ellipsis">{children}</div>
  );
}
