import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { MyStackParamList } from "../App";
import { View, Text } from "react-native";
import { getUser } from "../services/visitUser/getUser";
import { UserType } from "../interfaces/global/user";
import Usefetch from "../hooks/usefetchParams";
import { useComments } from "../hooks/visitUser/commentsContext";
import { Comments } from "../interfaces/visitUser/comments";

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
    <View>
      <Text>{idUser}</Text>
      {user[0] != undefined && <Text>{user[0].url_photo}</Text>}
      {commentsState.map((v) => (
        <Text>{v.commentator}</Text>
      ))}
    </View>
  );
};

export default VisitUser;
