/**@jsxImportSource theme-ui */

import { Box, Flex } from "theme-ui";
import ReactPlayer from "react-player";

const Component = ({
  img_url,
  text,
  video_url = undefined,
  name,
  video_poster,
  poster_img_url,
}) => {
  return (
    <Box
      sx={{
        bg: "sheet",
        borderRadius: [10],
        border: "3px solid",
        borderColor: "purple",
        my: [4],
        px: [3],
        py: video_url ? [3] : [1],
        mx: [3, 2],
        transition: "0.5s",
        position: "relative",
        ":hover": {
          transform: [null, "rotate(-5deg) scale(1.1)"],
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
      {video_url ? (
        <video
          sx={{ width: "100%", height: "100%", borderRadius: [10] }}
          controls
          poster={video_poster}
        >
          <source src="video_cgc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p sx={{ fontSize: [1], mb: [3] }}>{text}</p>
      )}

      {poster_img_url ? (
        <img
          src={poster_img_url}
          sx={{ width: "100%", height: "100%", borderRadius: [10] }}
        />
      ) : null}

      {name ? <p sx={{ fontSize: [1], mb: [3] }}>- {name}</p> : null}
    </Box>
  );
};

export default Component;
