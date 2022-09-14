const dateFormat = (date: string) => {
  const dateArr = date.split('T')[0].split('-');

  return `${dateArr[0]}년 ${dateArr[1]}월 ${dateArr[2]}일`;
};

export default dateFormat;
