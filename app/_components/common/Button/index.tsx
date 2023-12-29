import * as S from './style';

import React, { PropsWithChildren } from 'react';

interface ButtonPropsTypes {
  isActive?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, isActive, disabled, onClick, type = 'button' }: PropsWithChildren<ButtonPropsTypes>) => {
  return (
    <S.CommonButton $isActive={isActive} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </S.CommonButton>
  );
};

export default Button;
