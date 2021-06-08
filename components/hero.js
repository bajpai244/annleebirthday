/*@jsxImportSource theme-ui*/

import { Container } from "theme-ui";

const Component = () => {
  return (
    <Container
      variant="wide"
      sx={{
        bg: "purple",
        color: "white",
        pt: [4],
        pb: [2],
        textAlign: "center",
        maxHeight: 220,
      }}
    >
      <h1 sx={{ my: [0], fontSize: [5] }}>Happy Birthday Annlee 🎉</h1>
      <p sx={{ fontSize: [1], mt: [1] }}>
        A very very Happy Birthday to the superhuman of Hack Club APAC!
      </p>
      <img
        src="./annlee.jpeg"
        sx={{
          borderRadius: "circle",
          width: [125],
          position: "relative",
          bottom: "-50%",
          cursor: "pointer",
          transition: "1s",
          ":hover": {
            transform: "rotate(360deg)",
            transition: "2s",
          },
        }}
      />
    </Container>
  );
};

export default Component;
