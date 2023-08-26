const UNITS = {
  celcius: "°C",
  fahrenheit: "°F",
};

function converTemperatureTo(temperature, unitTo) {
  if (unitTo === UNITS.celcius) {
    return (temperature - 32) / 1.8;
  } else if (unitTo === UNITS.fahrenheit) {
    return temperature * 1.8 + 32;
  }
}

function oppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}

function isCold(temperature, unit) {
  if (unit === UNITS.celcius) {
    return temperature <= 0;
  } else if (unit === UNITS.fahrenheit) {
    return temperature <= 32;
  } else {
    throw new Error("Error");
  }
}

export { UNITS, converTemperatureTo, oppositeUnit, isCold };
