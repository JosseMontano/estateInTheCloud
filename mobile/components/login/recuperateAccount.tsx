import { useLinkTo } from "@react-navigation/native";
import { fiveColor } from "../../constants/colors/color";
import { Text, View, StyleSheet } from "react-native";

export function RecuperateAccount() {
    const navigate = useLinkTo();
    const recuperateAccount = () => {
      navigate("/RecuperateAccount");
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
          ¿Olvidaste tu contraseña?
        </Text>
      </View>
    );
  }