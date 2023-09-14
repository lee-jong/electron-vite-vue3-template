export const emailValid =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

// 임시로 가장 흔한 비밀번호 조건은 영어소문자, 숫자 포함 8자 이상의 비밀번호.
export const pwValid = /(?=.*\d)(?=.*[a-z]).{8,}/;
