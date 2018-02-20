// @flow
import styled from 'styled-components';

import { COLOR, SIZE } from '../constants/styles';

export const CommentForm = styled.form`
  margin: ${SIZE.MARGIN.PAGE} 50% ${SIZE.MARGIN.PAGE} 0;
`;

export const CommentLabel = styled.label`
  display: block;
  font-size: 1rem;
`;

export const CommentArea = styled.textarea.attrs({
  rows: 5,
})`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${COLOR.BORDER};
`;

export const CommentButton = styled.input.attrs({
  type: 'submit',
})`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${COLOR.BORDER};
`;

export const CommentBlock = styled.dl`
  margin: ${SIZE.MARGIN.PAGE} 0 ${SIZE.MARGIN.LIST};
  &::before {
    content: 'Comments';
    font-size: 1rem;
  }
  &:empty::before {
    content: 'No comments';
  }
`;

export const CommentTime = styled.dt`
  font-size: 0.7rem;
  color: ${COLOR.TEXT.FOCUSED};
  margin-top: 1em;
`;

export const CommentText = styled.dd`
  font-size: 0.9rem;
  margin: 0;
`;
