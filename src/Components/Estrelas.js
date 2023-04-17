import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Estrela from "./Estrela";

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);

    const RenderEstrelas = ( ) => {
      const listaEstelas = [];
      for (let i = 0; i < 5; i ++) {
        listaEstelas.push(
          <Estrela 
            key={i}
            onPress={() => setQuantidade(i + 1)}
            desabilitada={!editavel}
            preenchida={i < quantidade}
            grande={grande}
          />
        )
      }

      return listaEstelas;
    }

    return <View style={estilos.estrelasView}>
      <RenderEstrelas />
    </View>
}

const estilos = StyleSheet.create({
  estrelasView:{
    flexDirection: 'row',
  }
})