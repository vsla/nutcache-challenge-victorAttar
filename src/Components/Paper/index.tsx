import React, { FC } from "react";
import { Paper as MaterialPaper, Typography } from "@mui/material";

import styled from "styled-components";

interface Props {
  children: any;
  title?: string;
  ButtonTitle?: FC;
}

export default function Paper({ children, title = "", ButtonTitle }: Props) {
  return (
    <PaperComponent data-testid="paper" elevation={1}>
      <TitleContainer>
        {title && (
          <Typography data-testid="paper-title" variant="h4" display="inline">
            {title}
          </Typography>
        )}
        {ButtonTitle && (
          <ButtonContainer>
            <ButtonTitle />
          </ButtonContainer>
        )}
      </TitleContainer>

      {children}
    </PaperComponent>
  );
}

const PaperComponent = styled(MaterialPaper)`
  padding: 24px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: end;
`;

const TitleContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
`;
