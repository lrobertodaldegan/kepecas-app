import {useState} from 'react';
import { 
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput
} from "react-native";
import Button1 from "../../components/Button1";
import Button2 from "../../components/Button2";
import Label from "../../components/Label";
import Logo from "../../components/Logo";
import Divider from '../../components/Divider';


const Step2Screen = ({navigation}) => {
  const [placa, setPlaca] = useState(null);
  const [marca, setMarca] = useState(null);
  const [modelo, setModelo] = useState(null);
  const [ano, setAno] = useState(null);

  return (
    <>
      <StatusBar backgroundColor='#B6ECFF' barStyle='dark-content'/>

      <View style={styles.wrap}>
        <Logo style={styles.logo}/>

        <View style={styles.inputsWrap}>
          <Label value='Agora nos conte sobre seu(s) carro(s):'/>

          <TextInput style={styles.input} placeholderTextColor='#134C83' 
              onChangeText={() => setPlaca(placa)} value={placa}
              placeholder='Placa'/>

          <TextInput style={styles.input} placeholderTextColor='#134C83' 
              onChangeText={() => setMarca(marca)} value={marca}
              placeholder='Marca'/>

          <View style={styles.inputsLineWrap}>
            <TextInput style={[styles.input, styles.inputModel]} placeholderTextColor='#134C83' 
                onChangeText={() => setModelo(modelo)} value={modelo}
                placeholder='Modelo'/>

            <TextInput style={[styles.input, styles.inputYear]} placeholderTextColor='#134C83' 
                onChangeText={() => setAno(ano)} value={ano}
                placeholder='Ano'/>
          </View>

          <Divider />

          <Button2 label='Adicionar mais um carro'/>

          <Button1 label='Continuar' action={() => navigation.navigate('step3')}/>

          <Label style={styles.legend}
              value='Fique tranquilo! Não compartilharemos nenhum dos seus dados com terceiros!'/>
        </View>
      </View>
    </>
  );
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    backgroundColor:'#B6ECFF',
    width:screen.width,
    height:screen.height,
    padding:20,
  },
  logo:{
    marginTop:50,
    alignSelf:'center'
  },
  inputsWrap:{
    marginTop: 50
  },
  inputsLineWrap:{
    flexDirection:'row'
  },
  input:{
    borderRadius:10,
    borderWidth:1,
    borderColor:'#0489CC',
    height: 50,
    width: screen.width - 40,
    marginTop:10,
    backgroundColor:'rgba(255,255,255,0.5)',
    paddingHorizontal: 20,
    fontFamily:'Montserrat-Regular'
  },
  inputModel:{
    width:screen.width - (screen.width / 3) - 40,
    marginRight: 10
  },
  inputYear:{
    width:(screen.width / 3) - 10,
  },
  btnWrap:{
    marginTop: (screen.height / 3.5) - 50
  },
  title: {
    fontSize:26,
    fontFamily:'Montserrat-Bold',
    marginBottom:5
  },
  legend: {
    fontSize: 12,
    marginBottom: 10,
  },
});

export default Step2Screen;