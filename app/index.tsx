import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "@/styles";
import { useState } from "react";
import { geradorTreino } from "@/services/ia/generator";

export default function Index() {
  const [parteDoCorpo, setParteDoCorpo] = useState("");
  const [resposta, setResposta] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const gerarExecicio = async () => {
    if(parteDoCorpo.length < 3){
      alert("Digite uma parte do corpo válida");
      return;
  }

  setIsLoading(true);

  try {
    const resut = await geradorTreino(parteDoCorpo);
    setResposta(resut);
  }catch (error){
    alert(error);
  }finally{
    setIsLoading(false);
  }
  
  const resut = await geradorTreino(parteDoCorpo);
  setResposta(resut);
}
  return (
    <View
     style={styles.container}
    >
      <Text style={styles.titulo}>GYM QUEST</Text>
      <Text style={styles.subtitulo}>Seu aplicativo de dicas de treino</Text>
      <TextInput
      onChangeText={setParteDoCorpo}
      value={parteDoCorpo}
      style={styles.input} 
      placeholder="Digite a parte do corpo que deseja treinar"
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={gerarExecicio}>
        <Text style={styles.buttonText}>{isLoading ? "Carregando..." : "Gerar seu treino"}</Text>
      </TouchableOpacity>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>Exercícios:</Text>
      <Text style={styles.cardText}>{resposta}</Text>
    </View>

    </View>
  );
}
