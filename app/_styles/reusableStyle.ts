import { css } from '@emotion/react';

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const flexAround = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const flexStart = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const flexEnd = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export { flexColumn, flexCenter, flexBetween, flexAround, flexStart, flexEnd };
