// eslint-disable-next-line react/prop-types
export function Berbin({ name }) {
  return (
    <div>
      {/* <p>{name} oru thevudiya</p> */}
      {/* <p>Berbin Oru thevudiya</p> */}
      <div>
        {name === "dhilipan" ? name + " oru pombala" : name + " oru thevudiya"}
      </div>
    </div>
  );
}
