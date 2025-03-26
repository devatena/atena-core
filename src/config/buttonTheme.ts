export type ButtonVariant = {
  textColor: string;
  bgColor?: string | undefined;
  border?: string;
};

const defaultButtonTheme: Record<string, ButtonVariant> = {
  primary: { textColor: "#FFFFFF", bgColor: "#A50087" },
  secondary: { textColor: "#A50087", bgColor: "#F0C3F4" },
  outline: { textColor: "#A50087", border: "#A50087" },
};

export default defaultButtonTheme;
