const comma = x => {
  if (x != null) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

const replaceSpacing = v => {
  return v.replaceAll('^', ', ')
}

const replaceDateString = v => {
  return v.replace('-', '년 ').replace('-', '월 ') + '일'
}

export default { comma, replaceSpacing, replaceDateString };