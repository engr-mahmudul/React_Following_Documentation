/* eslint-disable react/prop-types */
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function TodaysDate({ firstProp, secondProp }) {
  return (
    <>
      <p>First Prop:{firstProp}</p>
      <p>Second Prop's value:{secondProp.a}</p>
      {formatDate(today)}
    </>
  );
}
