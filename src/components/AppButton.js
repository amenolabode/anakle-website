import PropTypes from "prop-types"
import "./../styles/Button.css";

function Button ({ txtColor, bgColor, buttonText, onClick, fontsize ,fontweight}) {

  return (
    <button
      className="primary-button"
      onClick={onClick}
      style={{color: txtColor, backgroundColor: bgColor, fontSize: fontsize, fontWeight: fontweight}}
      >
      
      {buttonText}
    </button>
  );
};

Button.propTypes = {
    txtColor: PropTypes.string,
    bgColor: PropTypes.string,
    buttonText: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button;
