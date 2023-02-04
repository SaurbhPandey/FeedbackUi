import PropTypes from 'prop-types'
const Header = (props) => {
  const headerStyles = {
    backgroundColor : props.bgColor,
    color : props.color
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h1>{props.text}</h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text : "Feedback UI",
  bgColor: 'rgba(0,0,0,0.4)',
  color: '#ff6a95'
}
Header.defaultPropType={
  text: PropTypes.string,
  color: PropTypes.string,
  bgColor:PropTypes.string
}
export default Header;
