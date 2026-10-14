
import {
  House,
  Warehouse,
  Box,
  Sofa,
  PencilRuler,
  Leaf,
} from "lucide-react";


// Put your images in /public/images/services/
const services = [
  {
    title: "Home Interior Design",
    description:
      "Stylish and functional interiors that reflect your personality and enhance everyday living.",
    image: "/images/services/home-interior.jpg",
    icon: House,
    href: "/services/home-interior-design",
  },
  {
    title: "Home Exterior Design",
    description:
      "Elegant and durable exterior designs that create a lasting first impression with modern aesthetics.",
    image: "/images/services/home-exterior.jpg",
    icon: Warehouse,
    href: "/services/home-exterior-design",
  },
  {
    title: "2D/3D Design Layout",
    description:
      "Detailed 2D and 3D design layouts to help you visualize your dream space before construction.",
    image: "/images/services/design-layout.jpg",
    icon: Box,
    href: "/services/2d-3d-design-layout",
  },
  {
    title: "Furniture's Design",
    description:
      "Custom furniture designs that blend style, comfort, and functionality for modern spaces.",
    image: "/images/services/furniture.jpg",
    icon: Sofa,
    href: "/services/furniture-design",
  },
  {
    title: "Modern Home Interior",
    description:
      "Contemporary interior solutions with innovative design and space optimization for modern homes.",
    image: "/images/services/modern-interior.jpg",
    icon: PencilRuler,
    href: "/services/modern-home-interior",
  },
  {
    title: "Custom Design Plan",
    description:
      "Personalized design plans tailored to your needs, lifestyle, and budget.",
    image: "/images/services/custom-plan.jpg",
    icon: Leaf,
    href: "/services/custom-design-plan",
  },
];


export {
    services
}