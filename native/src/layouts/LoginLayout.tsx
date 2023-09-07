import {  FunctionComponent, ReactNode } from "react"
import { View } from "react-native";

interface LoginLayoutProps {
    children: ReactNode
}
 
const LoginLayout: FunctionComponent<LoginLayoutProps> = ({children}) => {
    return <>{children}</>
}
 
export default LoginLayout;