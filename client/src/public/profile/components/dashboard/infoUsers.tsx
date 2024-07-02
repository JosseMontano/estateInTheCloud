import { useLanguage } from "@/global/context/languageContext";
import { Button, ColorBtnSecond } from "@/global/styles/globals";
import styled from "styled-components";
import { disabledUser, enabledUser, getUsers } from "../../services/dashboard";
import { User, stateUser } from "../../interfaces/dashboard";
import { useEffect, useState } from "react";
import { showToast } from "@/global/utilities/toast";

const Table = styled.table`
  width: 500px;
  border-collapse: collapse;

  thead {
    background: ${ColorBtnSecond};
    color: #fff;
    tr th {
      padding: 10px;
    }
  }

  tr td {
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    border: 0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

    thead {
      display: none;
    }

    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }

    tr {
      margin-bottom: 15px;
    }

    td {
      text-align: right;
      padding-left: 50%;
      position: relative;
      text-align: right;

      &::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        padding-left: 15px;
        font-weight: bold;
        text-align: left;
      }
    }
  }
`;

const InfoUsers = () => {
  const { text } = useLanguage();
  const headers = [
    text.tableUserColGmail,
    text.tableUserPhoto,
    text.tableUserCellphone,
    text.tableUserActions,
  ];
  const [users, setUsers] = useState([] as User[]);

  const handleGetUser = async () => {
    const { json } = await getUsers<User[]>();
    setUsers(json);
  };

  const handleStateUser = async (id: number, state: stateUser) => {
    state === "available"
      ? await disabledUser<User[]>(id)
      : await enabledUser<User[]>(id);

    const msgToast = state === "available" ? text.msgUserDisabled : text.msgUserAvailable;

    //edit the user
    const newUsers = users.map((v) => {
      if (v.id === id) {
        v.available = !v.available;
      }
      return v;
    });
    setUsers(newUsers);
    showToast(msgToast)
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((v) => (
          <tr key={v.id}>
            <td>{v.email}</td>
            <td>
              <img src={v.url_photo} alt={v.email} />
            </td>
            <td>{v.cellphone_number}</td>
            <td>
              <Button
                onClick={
                  v.available
                    ? () => handleStateUser(v.id, "available")
                    : () => handleStateUser(v.id, "noAvailable")
                }
                ColorBtn={ColorBtnSecond}
                padding
              >
                {v.available
                  ? text.tableUserAvailable
                  : text.tableUserNoAvailable}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InfoUsers;
