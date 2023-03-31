import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/GlobalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from "../Form/Form";

const Incomes = () => {
  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Ingresos</h1>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes"></div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  );
};

const IncomesStyled = styled.div``;
export default Incomes;
