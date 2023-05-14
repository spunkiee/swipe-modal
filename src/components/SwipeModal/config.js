import {
  SlideInLeft,
  SlideInUp,
  SlideInDown,
  SlideInRight,
  SlideOutLeft,
  SlideOutDown,
  SlideOutRight,
  SlideOutUp,
} from "react-native-reanimated";
import tw from "twrnc";

const positions = {
  top: {
    style: tw`top-0 w-full`,
    animation: {
      slideIn: SlideInUp,
      slideOut: SlideOutUp,
    },
  },
  bottom: {
    style: tw`bottom-0 w-full`,
    animation: {
      slideIn: SlideInDown,
      slideOut: SlideOutDown,
    },
  },
  left: {
    style: tw`left-0 h-full`,
    animation: {
      slideIn: SlideInLeft,
      slideOut: SlideOutLeft,
    },
  },
  right: {
    style: tw`right-0 h-full`,
    animation: {
      slideIn: SlideInRight,
      slideOut: SlideOutRight,
    },
  },
};

const positionStyling = (value) =>
  positions[value] ? positions[value].style : positions[left].style;

export { positions, positionStyling };
