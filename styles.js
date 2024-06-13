import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212',
      },
      button: {
        padding: 20,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 16,
        color: '#FFF',
      },
      image: {
        width: 400,
        height: 400,
        marginVertical: 10,
        borderRadius: 10,
      },
      listContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
})