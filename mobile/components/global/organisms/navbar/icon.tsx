import { TouchableOpacity } from "react-native";
import React from "react";
import { fourtyColor } from "../../../../constants/colors/color";
import { useLinkTo } from "@react-navigation/native";

type Route = "Home" | "Profile";

interface Params {
  v: { icon: any; name: string; route: string };
  actual: Route;
}

const Icon = ({ v, actual }: Params) => {
  //get actual route
  const actually = v.route == actual;
  const colorIcon = !actually ? "white" : fourtyColor;

  //redirect to the route
  const navigate = useLinkTo();
  const handleRedirect = () => {
    navigate("/" + v.route);
  };

  return (
    <TouchableOpacity onPress={handleRedirect}>
      <v.icon name={v.name} size={38} color={colorIcon} />
    </TouchableOpacity>
  );
};

export default Icon;

