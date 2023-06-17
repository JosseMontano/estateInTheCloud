import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { MyStackParamList } from "../App";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { getUser } from "../services/visitUser/getUser";
import { UserType } from "../interfaces/global/user";
import { useComments } from "../hooks/visitUser/commentsContext";
import { Comments } from "../interfaces/visitUser/comments";
import { fiveColor, secondaryColor } from "../constants/colors/color";
import Profile from "../components/visitUser/profile";
import CommentsComponent from "../components/visitUser/comments";
import { useQuery } from "@apollo/client";
import { getREByProfile } from "../services/profile/realEstate";
import InfoPost from "../components/profile/infoPost";
import FormComment from "../components/visitUser/formComment";
import handleSendWhatsapp from "../utils/sendWhatsapp";

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

  //contactar a whatsapp

  const handleSendMessage = () => {
    handleSendWhatsapp(user[0].cellphone_number);
  };

  return (
    <ScrollView style={styles.container}>
      {/* ============== SHOW INFO USER ============== */}
      {user[0] != undefined && <Profile user={user[0]} />}

      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.btnWhatsapp}
          onPress={() => handleSendMessage()}
        >
          <Text style={styles.txtBtn}>Contactar</Text>
        </TouchableOpacity>
      </View>

      {/* ============== SHOW INFO REAL ESTATES ============== */}

      {!loading && data.GET_REAL_ESTATE_BY_ID_USER.length > 0 && (
        <InfoPost data={data.GET_REAL_ESTATE_BY_ID_USER} />
      )}

      {/* ============== SHOW FORM COMMENTS ============== */}

      <FormComment userVisited={idUser} addComment={addComment} />

      {/* ============== SHOW COMMENTS ============== */}

      <CommentsComponent
        commentsState={commentsState}
        handleDelete={handleDelete}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryColor,
  },
  containerBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  btnWhatsapp: {
    backgroundColor: "#128C7E",
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  txtBtn: {
    color: fiveColor,
    fontSize: 16,
    textAlign: "center",
  },
});

export default VisitUser;
