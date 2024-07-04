import { useLinkTo } from "@react-navigation/native";
import { fiveColor } from "../../../global/constants/colors/color";
import { Text, View, StyleSheet } from "react-native";

export function LoginJSX() {
    const navigate = useLinkTo();
    const recuperateAccount = () => {
      navigate("/Login");
    };

    const styles = StyleSheet.create({
      title: {
        color: fiveColor,
        fontSize: 13,
      },
    });

    return (
      <View>
        <Text onPress={recuperateAccount} style={styles.title}>
          ¿Ya tienes una cuenta?
        </Text>
      </View>
    );
  }