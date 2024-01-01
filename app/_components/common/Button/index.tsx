import * as S from './style';

import type { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  isActive?: boolean;
}

const Button = ({ children, isActive = false, ...props }: ButtonProps) => {
  return (
    <S.CommonButton $isActive={isActive} {...props}>
      {children}
    </S.CommonButton>
  );
};

export default Button;
