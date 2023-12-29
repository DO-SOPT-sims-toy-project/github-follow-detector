import { PropsWithChildren } from 'react';
import * as S from './style';

const Container = ({ children }: PropsWithChildren) => {
  return <S.CommonContainer>{children}</S.CommonContainer>;
};

export default Container;
