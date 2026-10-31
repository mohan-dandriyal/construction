import {
  House,
  Warehouse,
  Box,
  Sofa,
  PencilRuler,
  Leaf,
} from "lucide-react";
import serviceData from "@/app/data/services.json";

const serviceIcons = [House, Warehouse, Box, Sofa, PencilRuler, Leaf];

const services = serviceData.items.map((item, index) => ({
  ...item,
  icon: serviceIcons[index % serviceIcons.length],
}));

export { services };
