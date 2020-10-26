import DateObject from "react-date-object";

// var date = new DateObject(1597994736).format("dddd, DD MMMM 'YY");

export default function date(d) {
  return new DateObject(d).format("dddd, DD MMMM 'YY");
}