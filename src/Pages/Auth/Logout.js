const logout = props => {
  localStorage.removeItem("userDetails");
};

export default logout;
