const styles = (theme) => ({
  bar: {
    background: "#00bcd4",
  },
  badge: {
    borderRadius: 200,
    width: 40,
    height: 40,
    right: 5,
    wordWrap: "break-word",
    backgroundColor: "red",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#127d8b",
    border: "0.05em solid #00bcd4",
    margin: 15,
    borderRadius: 3,
  },
  subHeadDiv: {
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 20,
  },
  optionText: {
    textAlign: "left",
    display: "flex",
  },
  barDiv: {
    borderRadius: 5,
    margin: "0 20px 10px 20px",
    padding: 2,
    border: "0.05em solid #00bcd4",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
