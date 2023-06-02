import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { MyStackParamList } from "../App";
import { View, Text, Image, StyleSheet } from "react-native";
import { getUser } from "../services/visitUser/getUser";
import { UserType } from "../interfaces/global/user";
import { useComments } from "../hooks/visitUser/commentsContext";
import { Comments } from "../interfaces/visitUser/comments";
import { secondaryColor } from "../constants/colors/color";
import { fiveColor } from "../constants/colors/color";
import Profile from "../components/visitUser/profile";

const VisitUser = ({
  route,
  navigation,
}: StackScreenProps<MyStackParamList, "VisitUser">) => {
  // =================== DATA USER ===================
  const idUser = route.params.idUser;

  const [user, setUser] = useState<UserType[]>([]);

  useEffect(() => {
    const handleLoadData = async () => {
      const res = await getUser(idUser);
      if (res) setUser(res.data);
    };

    handleLoadData();
  }, [idUser]);

  // =================== comments ===================

  const { data: comments, setIdCommentUser } = useComments();
  const [commentsState, setCommentsState] = useState<Comments[]>([]);

  useEffect(() => {
    setIdCommentUser(idUser);

    const showComments = () => {
      const newData = comments.getAllCommentsByUser;
      console.log(newData);
      setCommentsState(newData);
    };

    if (comments) {
      showComments();
    }
  }, [idUser, comments]);

  return (
    <View style={styles.container}>
      {user[0] != undefined && <Profile user={user[0]} />}

      {commentsState.map((v) => (
        <Text>{v.commentator}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryColor,
  },
});

export default VisitUser;
