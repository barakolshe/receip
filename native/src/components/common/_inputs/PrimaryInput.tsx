import { FunctionComponent } from "react";
import { TextInput } from "react-native-paper";
import { Props as MuiTextInputProps } from "react-native-paper/src/components/TextInput/TextInput";

interface PrimaryInputProps extends MuiTextInputProps {}

const PrimaryInput: FunctionComponent<PrimaryInputProps> = ({
  children,
  ...props
}) => {
  return <TextInput mode="outlined" {...props}></TextInput>;
};

export default PrimaryInput;
