import { useLanguage } from "@/global/context/languageContext";
import { useState } from "react";
import styled from "styled-components";
import { sectionType } from "../../interfaces/dashboard";
import { ColorBtn, ColorBtnSecond } from "@/global/styles/globals";
import ArrowRight from "@/global/icons/arrowRight";
import InfoUsers from "./infoUsers";

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-top: 15px;
  font-size: 1.5rem;
`;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
`;

const AccordionTitle = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  padding: 18px;
  outline: none;
  background-color: #f1f1f1;
  font-size: 1.1rem;
  width: min-content;
  border-bottom: 2px solid
    ${({ isOpen }) => (isOpen ? ColorBtn : "transparent")};
  &:hover {
    border-bottom: 2px solid ${ColorBtn};
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  transition: max-height 0.6s ease;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const Dashboard = () => {
  const { text } = useLanguage();

  const [sections, setSections] = useState({
    sectionUsers: false,
    sectionRealEstate: false,
  });
  const toggleAccordion = (section: sectionType) => {
    setSections({ ...sections, [section]: !sections[section] });
  };

  return (
    <>
      <Title>{text.titleDashboard}</Title>
      <AccordionSection>
        <AccordionTitle
          onClick={() => toggleAccordion("sectionUsers")}
          isOpen={sections.sectionUsers}
        >
          <span>
            <ArrowRight
              size="25"
              color={!sections.sectionUsers ? ColorBtn : ""}
            />
          </span>
          {text.dashboardSectionUsers}
        </AccordionTitle>

        {sections.sectionUsers && (
          <AccordionContent isOpen={sections.sectionUsers}>
            <InfoUsers />
          </AccordionContent>
        )}

        <AccordionTitle
          onClick={() => toggleAccordion("sectionRealEstate")}
          isOpen={sections.sectionRealEstate}
        >
          <span>
            <ArrowRight
              size="25"
              color={!sections.sectionRealEstate ? ColorBtn : ""}
            />
          </span>
          {text.dashboardSectionRealEstate}
        </AccordionTitle>
        {sections.sectionRealEstate && (
          <AccordionContent isOpen={sections.sectionRealEstate}>
            {
              <div>
                <p>olf</p>
                <span>saosa</span>
              </div>
            }
          </AccordionContent>
        )}
      </AccordionSection>
    </>
  );
};
