import { GreenCheck } from "./Controls.styled";

export interface ControlsProps {
  checkBoxText: string;
  sliderText: string;
  checked: boolean;
  slid: boolean;
  handleToggle: () => void;
  handleCheck: () => void;
}

interface GreenCheckProps {
  onClick: () => void;
}

export const GreenCheckBox: React.FC<GreenCheckProps> = ({ onClick }) => {
  return (
    <GreenCheck
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      onClick={onClick}
    >
      <rect width="18" height="18" rx="4" fill="#087B2F" />
      <path
        d="M5 10.0303L7.5 12L13 7"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </GreenCheck>
  );
};
