import { Text, View } from "react-native";

const NewComponent = ( props: { name: string, email: string, password: string }) => {
  const { name, email, password } = props;

   return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Password: {password}</Text>
    </View>
   );
};

export default NewComponent;