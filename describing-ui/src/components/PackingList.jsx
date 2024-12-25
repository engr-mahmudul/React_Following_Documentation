function Item({ name, isPacked }) {
  let listContent = <li>{name}</li>;
  if (isPacked) {
    listContent = <li>{name} ✅</li>;
  }

  return listContent;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={false} name="Helmet with a golden leaf" />
        <Item isPacked={true} name="Photo of Tam" />
      </ul>
    </section>
  );
}
