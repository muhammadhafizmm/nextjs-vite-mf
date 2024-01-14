import { Box, Heading, Text } from "@efishery/onefish";
import { Button } from "@repo/ui/button";
import { useRef } from "react";

const CustomButton = () => {
  const ref = useRef(null);
  return (
    <Box>
      <Heading as="h3">Wrapped in OneFish Component</Heading>
      <Button appName="web" className={""}>
        Click this Button! (from Remote App)
      </Button>
      <Box ref={ref}>
        <Text>This Box is use hook (useRef)</Text>
      </Box>
    </Box>
  );
};

export default CustomButton;
