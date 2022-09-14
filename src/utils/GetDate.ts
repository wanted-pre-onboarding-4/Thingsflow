export const getMyDate = (myDate: string) => {
  const date = new Date(myDate);
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  return `${yyyy}년 ${mm}월 ${dd}일`;
};
