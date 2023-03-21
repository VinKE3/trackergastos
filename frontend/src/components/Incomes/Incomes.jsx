import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/GlobalContext";
import { InnerLayout } from "../../styles/Layouts";

const Incomes = () => {
  const { addIncome } = useGlobalContext();
  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Ingresos</h1>
        <div className="income-content">
          <div className="form-container">
            <div className="incomes"></div>
          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  );
};

const IncomesStyled = styled.div``;
export default Incomes;
