function timeConvert(num) {
  if (num < 0) return '00:00';
  let hours = Math.floor(num / 60);
  let minutes = num % 60;

  return (
    (hours.toString().length < 2 ? '0' + hours : '' + hours) +
    ':' +
    ('00' + minutes).slice(-2)
  );
}
