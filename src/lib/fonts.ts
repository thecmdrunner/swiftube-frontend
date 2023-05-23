import {
  Unbounded,
  Phudu,
  Rubik,
  Inter,
  K2D,
  Bebas_Neue,
  Raleway,
} from "next/font/google";

// If loading a variable font, you don't need to specify the font weight

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const unbounded = Unbounded({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const phudu = Phudu({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
});

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
});

const k2d = K2D({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  preload: true,
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const fonts = {
  unbounded,
  rubik,
  phudu,
  inter,
  k2d,
  bebasNeue,
  raleway,
};

export default fonts;
