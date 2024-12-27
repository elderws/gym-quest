import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    titulo:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#1a1a82",
        marginBottom: 10,

    },
    subtitulo:{
        fontSize: 16,
        color: "#666",
        fontStyle: "italic",
        marginBottom: 20,

    },
    input:{
        width: "90%",
        backgroundColor: "#f9f9f9",
        height: 40,
        borderColor: "#666",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button:{
        backgroundColor: "#1a1a82",
        padding: 10,
        borderRadius: 5,
        width: "90%",
        alignItems: "center",
    },
    buttonText:{
        color: "#fff",
        fontWeight: "bold",
    },
    card:{
        borderWidth: 1,
        backgroundColor: "#f9f9f9",
        marginTop: 30,
        width: "100%",
        borderRadius: 10,
        padding: 20,
        borderColor: "#ddd",
    },
    cardTitle:{
        fontSize: 18,
        fontWeight: "bold",

    },
    cardText:{
        fontSize: 16,
        marginTop: 5,
        color: "#666",

    },


})


export default styles;