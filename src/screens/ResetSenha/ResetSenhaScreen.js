import {useState} from 'react';
import { 
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput
} from "react-native";
import Button1 from "../../components/Button1";
import Label from "../../components/Label";
import Logo from "../../components/Logo";


const ResetSenhaScreen = () => {
  const [email, setEmail] = useState(null);

  return (
    <>
      <StatusBar backgroundColor='#B6ECFF' barStyle='dark-content'/>

      <View style={styles.wrap}>
        <Logo style={styles.logo}/>

        <View style={styles.inputsWrap}>
          <Label value='Confirme seu e-mail:'/>

          <TextInput style={styles.input} placeholderTextColor='#134C83' 
              onChangeText={() => setEmail(email)} value={email}
              placeholder='E-mail cadastrado'/>

          <Button1 label='Enviar link' action={() => null}/>

          <Label style={styles.legend}
              value='Enviaremos um link de reset de senha automático para o e-mail cadastrado.'/>
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
    marginTop: (screen.height / 3.5) - 50
  },
  input:{
    borderRadius:10,
    borderWidth:1,
    borderColor:'#0489CC',
    height: 50,
    width: screen.width - 40,
    marginTop:15,
    backgroundColor:'rgba(255,255,255,0.5)',
    paddingHorizontal: 20,
    fontFamily:'Montserrat-Regular'
  },
  legend: {
    fontSize: 12,
    marginBottom: 10,
  },
});

export default ResetSenhaScreen;