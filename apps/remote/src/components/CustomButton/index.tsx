import { Box, Heading } from "@efishery/onefish";
import { Button } from "@repo/ui/button";

const CustomButton = () => {
  return (
    <Box>
      <Heading as="h2">Wrapped in OneFish Component</Heading>
      <Button appName="web" className={""}>
        Click this Button! (from Remote App)
      </Button>
    </Box>
  );
};

export default CustomButton;
