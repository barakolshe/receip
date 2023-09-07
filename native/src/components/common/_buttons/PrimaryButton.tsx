import { FunctionComponent, ReactNode } from "react";
import { Button as MuiButton } from "react-native-paper";
import { Props as MuiButtonProps } from "react-native-paper/src/components/Button/Button";
import { useTheme } from "react-native-paper";

interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
}

const PrimaryButton: FunctionComponent<ButtonProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
    <MuiButton
      mode="contained"
      style={{ borderRadius: 8 }}
      buttonColor={theme.colors.primaryContainer}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default PrimaryButton;
