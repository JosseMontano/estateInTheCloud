import ColContent from "../login/components/colContent";
import ColPhoto from "../login/components/colPhoto";

import { Suspense } from "react";

import { useLanguage } from "@/global/context/languageContext";
import { Modal, useModal } from "jz-modal";
import FormRegister from "../login/components/formRegister";
import FormRecuperate from "../login/components/formRecuperateAccount";
import { Container, ContainerSoon } from "@/public/login/styles";
import ModalConfig from "@/global/components/navbar/modalConfig";

export function Register(): JSX.Element {
  const { text } = useLanguage();

  const { isShown: isShownRA, toggle: toggleRA } = useModal({});


  return (
    <Suspense fallback={<p>Loading</p>}>
      <Container>
        <ContainerSoon>
          <ColPhoto />
          <ColContent
            title={text.loginTitle}
            text={text.loginSubtitle}
            form={<FormRegister toggleRA={toggleRA}/>}
          />
        </ContainerSoon>
      </Container>

      <Modal
        isShown={isShownRA}
        hide={toggleRA}
        modalContent={<FormRecuperate />}
      />
    </Suspense>
  );
}

export default Register;
