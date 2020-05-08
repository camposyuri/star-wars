import React from "react";
import { Table } from "reactstrap";

const TableDark = ({ children }) => {
  return (
    <>
      <Table responsive hover size="sm">
        {children}
      </Table>
    </>
  );
};

export default TableDark;
