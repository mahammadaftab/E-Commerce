const Message = ({ variant, children }) => (
  <div className={`alert alert-${variant}`}>{children}</div>
);

Message.defaultProps = {
  variant: 'info'
};

export default Message;
