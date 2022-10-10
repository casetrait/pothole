import L from "leaflet";
export function iconSelect(category) {
  let icon;
  if (category === "Pothole") {
    icon = L.icon({
      iconUrl: require("../static/icons/pothole.png"),
      iconSize: [50, 50],
      iconAnchor: [25,50]
    });
  } else if (category === "Drainage") {
    icon = L.icon({
      iconUrl: require("../static/icons/drainage.png"),
      iconSize: [50, 50],
      iconAnchor: [25,50]
    });
  } else if (category === "Pedestrian") {
    icon = L.icon({
      iconUrl: require("../static/icons/pedestrian.png"),
      iconSize: [50, 50],
      iconAnchor: [25,50]
    });
  } else if (category === "Traffic Light") {
    icon = L.icon({
      iconUrl: require("../static/icons/traffic-lights.png"),
      iconSize: [50, 50],
      iconAnchor: [25,50]
    });
  } else if (category === "Speed Limit") {
    icon = L.icon({
      iconUrl: require("../static/icons/speed-limit.png"),
      iconSize: [50, 50],
      iconAnchor: [25,50]
    });
  } else if (category === "Snow") {
    icon = L.icon({
      iconUrl: require("../static/icons/snow.png"),
      iconSize: [50, 50],
      iconAnchor: [25,50]
    });

  } else if (category === "Ice") {
    icon = L.icon({
      iconUrl: require("../static/icons/icey.png"),
      iconSize: [50, 50],
      iconAnchor: [25,50]
    });
  }

  return icon;
}
