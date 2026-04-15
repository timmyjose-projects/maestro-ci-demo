import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 5,
    margin: 10,
    width: '80%',
    height: 60,
    fontSize: 16
  },
  button: {
    padding: 10,
    backgroundColor: "#dedede",
    borderRadius: 5,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    width: '60%',
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  smallButton: {
    padding: 5,
    backgroundColor: "#dedede",
    borderRadius: 5,
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
    width: '15%',
    height: 60,
    justifyContent: "center",
    alignItems: "center", 
  }
})

export default Styles