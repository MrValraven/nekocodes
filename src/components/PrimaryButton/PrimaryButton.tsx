import "./styles.scss";

type PrimaryButtonProps = {
  buttonText: string;
};

const PrimaryButton = ({ buttonText }: PrimaryButtonProps) => {
  return <button className="primaryButton">{buttonText}</button>;
};

export default PrimaryButton;
