import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { MyStackParamList } from "../App";
import { StyleSheet, ScrollView } from "react-native";
import { getUser } from "../services/visitUser/getUser";
import { UserType } from "../interfaces/global/user";
import { useComments } from "../hooks/visitUser/commentsContext";
import { Comments } from "../interfaces/visitUser/comments";
import { secondaryColor } from "../constants/colors/color";
import Profile from "../components/visitUser/profile";
import CommentsComponent from "../components/visitUser/comments";
import { useQuery } from "@apollo/client";
import { getREByProfile } from "../services/profile/realEstate";
import InfoPost from "../components/profile/infoPost";
import FormComment from "../components/visitUser/formComment";


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

  // =================== REAL ESTATES =================

  const { data, loading, refetch } = useQuery(getREByProfile, {
    variables: { idUser: idUser },
  });
  useEffect(() => {
    const getRealEstate = (id: any) => {
      refetch({
        idUser: id,
      });
    };

    if (idUser) {
      getRealEstate(idUser);
    }
  }, [idUser]);

  // =================== comments ===================

  const {
    data: comments,
    setIdCommentUser,
    addComment,
    deleteCommentState,
    handleDelete,
  } = useComments();
  const [commentsState, setCommentsState] = useState<Comments[]>([]);

  useEffect(() => {
    setIdCommentUser(idUser);

    const showComments = () => {
      const newData = comments.getAllCommentsByUser;
      setCommentsState(newData);
    };

    if (comments) {
      showComments();
    }
  }, [idUser, comments]);

  return (
    <ScrollView style={styles.container}>
      {/* ============== SHOW INFO USER ============== */}
      {user[0] != undefined && <Profile user={user[0]} />}

      {/* ============== SHOW INFO REAL ESTATES ============== */}

      {!loading && data.GET_REAL_ESTATE_BY_ID_USER.length > 0 && (
        <InfoPost data={data.GET_REAL_ESTATE_BY_ID_USER} />
      )}

      {/* ============== SHOW FORM COMMENTS ============== */}

      <FormComment userVisited={idUser} addComment={addComment}/>

      {/* ============== SHOW COMMENTS ============== */}

      <CommentsComponent commentsState={commentsState} handleDelete={handleDelete} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryColor,
  },
});

export default VisitUser;
