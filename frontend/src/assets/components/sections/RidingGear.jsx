const ridingGears = {
    Helmets: [
      "Full-face helmets",
      "Open-face helmets",
      "Modular helmets",
      "Half helmets",
      "Off-road helmets",
      "DOT, ECE, and SNELL certified helmets"
    ],
    Gloves: [
      "Riding gloves",
      "Winter gloves",
      "Touchscreen gloves"
    ]
  };
  
  export const RidingGear = () => {
    return (
      <div className="flex justify-start">
        <h2>Riding Gears</h2>
        {Object.entries(ridingGears).map(([gearCategory, gears], indexGear) => (
          <div key={indexGear} className="mt-4">
            <h3 className="text-lg font-semibold">{gearCategory}</h3>
            <ul>
              {gears.map((subGear, indexSubGear) => (
                <li key={indexSubGear} className="pl-4">{subGear}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  