import PropTypes from "prop-types";

export default function Dialog({ children }) {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="rounded-lg bg-white p-4 shadow-lg"
        role="dialog"
        aria-labelledby="dialogTitle"
        aria-describedby="dialogDesc"
      >
        {children}
      </div>
    </div>
  );
}

Dialog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
