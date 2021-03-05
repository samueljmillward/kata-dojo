// This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).
// If the input is 0 or negative value, then you should return "00:00"

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
