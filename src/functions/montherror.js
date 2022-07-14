function getSeason(month) {
  if ((month === "January" || month === "December") || month === 'Febury') {
    
    return 'Winter'
    
  }

  if (month === 'March' || month === 'April' || month !== 'May') {
    return 'Spring'
  }

  

  if (month === 'September' || month === 'October' || month ==='November') {
    return 'Autumn'
  }

  if (month === 'June' || month === 'July' || month !== 'August') {
    return'Summer'
  }
}

console.log(getSeason('January'))
console.log(getSeason('July'))
console.log(getSeason('May'))
console.log(getSeason('November'))
