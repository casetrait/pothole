import L from "leaflet";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

export function iconSelect(category) {
  let icon;
  let iconDefs = {
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
    shadowUrl: markerShadow,
    shadowAnchor: [24, 80],
    shadowSize: [80, 80],
  };
  if (category === "Pothole") {
    icon = L.icon({
      iconUrl: require("../static/icons/pothole.png"),
      ...iconDefs,
    });
  } else if (category === "Drainage") {
    icon = L.icon({
      iconUrl: require("../static/icons/drainage.png"),
      ...iconDefs,
    });
  } else if (category === "Pedestrian") {
    icon = L.icon({
      iconUrl: require("../static/icons/pedestrian.png"),
      ...iconDefs,
    });
  } else if (category === "Traffic Light") {
    icon = L.icon({
      iconUrl: require("../static/icons/traffic-lights.png"),
      ...iconDefs,
    });
  } else if (category === "Speed Limit") {
    icon = L.icon({
      iconUrl: require("../static/icons/speed-limit.png"),
      ...iconDefs,
    });
  } else if (category === "Snow") {
    icon = L.icon({
      iconUrl: require("../static/icons/snow.png"),
      ...iconDefs,
    });
  } else if (category === "Ice") {
    icon = L.icon({
      iconUrl: require("../static/icons/icey.png"),
      ...iconDefs,
    });
  }

  return icon;
}
