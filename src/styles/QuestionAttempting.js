const styles = (theme) => ({
  answerLabels: {
    fontSize: 18,
  },
  radio: {
    color: "#00bcd4",
    padding: 30,
    "&$checked": {
      color: "#00bcd4",
    },
  },
  checked: {},
  button: {
    border: "0.1em solid #00bcd4",
    backgroundColor: "white",
    width: "100%",
    "&:hover": {
      backgroundColor: "#00bcd4",
    },
    marginTop: 18,
  },
  root: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    textAlign: "left",
    padding: 20,
  },
});

export default styles;
