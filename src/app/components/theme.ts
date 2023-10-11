import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Accordion: {
      parts: ["container"],
      baseStyle: {
        container: {
          borderRadius: "3xl",
          borderBottom: "0", // Remove the bottom border
          borderColor: "orange.500",
          p: 5,
        },
      },
    },
    AccordionItem: {
      parts: ["button", "panel"],
      baseStyle: {
        button: {
          p: 2,
          _hover: {
            bg: "gray.100",
          },
          rounded: "md", // Add this to round the button corners
        },
        panel: {
          p: 4,
          borderWidth: "1px",
          borderColor: "gray.300",
        },
      },
    },
  },
});

export default theme;