/**@jsxImportSource theme-ui */

import { Box, Flex } from "theme-ui";

const Component = ({ img_url, text }) => {
  return (
    <Box
      sx={{
        bg: "sheet",
        borderRadius: [10],
        border: "3px solid",
        borderColor: "purple",
        my: [4],
        px: [3],
        py: [1],
        mx: [3, 2],
        transition: "0.5s",
        position: "relative",
        ":hover": {
          transform: "rotate(-5deg) scale(1.1)",
          transition: "0.5s",
        },
        ":after": {
          content: '""',
          display: "inline-block",
          position: "absolute",
          bottom: [0],
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          width: ["3rem", "3rem"],
          height: ["3rem", "3rem"],
          bottom: ["-1.5rem"],
          right: ["0.5rem"],
          backgroundImage: `url(${img_url})`,
          borderRadius: "circle",
        },
      }}
    >
      <p sx={{ fontSize: [1], mb: [3] }}>{text}</p>
    </Box>
  );
};

export default Component;
