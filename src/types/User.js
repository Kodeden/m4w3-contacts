import PropTypes from "prop-types";

export default PropTypes.exact({
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
});
