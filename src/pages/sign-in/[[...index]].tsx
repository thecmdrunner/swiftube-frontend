import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <main className="flex h-screen flex-col items-center justify-start bg-gray-900 px-4 py-16">
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="#"
      redirectUrl={"/create"}
      appearance={{
        variables: {
          colorPrimary: "#5653DB",
          borderRadius: "8px",
          // fontFamily: "Raleway, sans-serif",
          fontWeight: {
            normal: 400,
            medium: 500,
            bold: 600,
          },
        },
        layout: {
          socialButtonsVariant: "blockButton",
        },
        elements: {
          footerAction__signIn: {
            display: "none",
          },
          card: {
            borderRadius: "32px",
          },
          logoImage: {
            filter: "hue-rotate(342deg) brightness(1.4)",
          },
          main: {
            gap: "1.5rem",
          },
          headerTitle: {
            fontSize: "24px",
          },
          headerSubtitle: {
            fontSize: "16px",
          },
          socialButtons: {
            display: "flex",
          },
          socialButtonsIconButton: {
            borderRadius: "100%",
            padding: 18,
          },
          dividerBox: {
            display: "none",
          },
          formFieldInput: {
            borderRadius: "100px",
          },
          formButtonPrimary: {
            borderRadius: "100px",
            textTransform: "none",
          },
          footerActionLink: {
            fontWeight: 500,
          },
        },
      }}
    />
  </main>
);
export default SignInPage;

const purpleDark = {
  baseTheme: {
    variables: {
      colorBackground: "#19191A",
      colorInputBackground: "#19191A",
      colorAlphaShade: "white",
      colorText: "white",
      colorInputText: "white",
    },
    __type: "prebuilt_appearance",
  },

  layout: {
    socialButtonsVariant: "blockButton",
  },
  variables: {
    colorPrimary: "#FFFFFF",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  },
  elements: {
    card: {
      background: "linear-gradient(180deg, #39269B 0%, #342480 100%)",
    },
    logoImage: {
      filter: "brightness(0) invert(1)",
    },
    headerTitle: {
      fontSize: "28px",
    },
    headerSubtitle: {
      color: "#FFFFFF",
    },
    main: {
      gap: "2rem",
    },
    socialButtonsProviderIcon__github: {
      filter: "brightness(0) invert(1)",
    },
    dividerBox: {
      display: "none",
    },
    formFieldInput: {
      backgroundColor: "transparent",
    },
    formButtonPrimary: {
      backgroundColor: "#FFFFFF30",
      fontSize: "12px",
      textTransform: "none",
      "&:focus": {
        backgroundColor: "#FFFFFF15",
      },
      "&:active": {
        backgroundColor: "#FFFFFF15",
      },
      "&:hover": {
        backgroundColor: "#FFFFFF15",
      },
    },
    footer: {
      "& + div": {
        backgroundColor: "#130162",
      },
    },
  },
};
