import { Box, Heading } from "@efishery/onefish";
import { Button } from "@repo/ui/button";

const CustomButton = () => {
  return (
    // <Box>
      // <Heading as="h2">Wrapped in One Fish Component</Heading>
      <Button appName="web" className={""}>
        Click me!
      </Button>
    // </Box>
  );
};

export default CustomButton;
