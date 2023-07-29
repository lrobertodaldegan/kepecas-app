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
import Divider from '../../components/Divider';


const Step1Screen = ({navigation}) => {
  const [nome, setNome] = useState(null);
  const [login, setLogin] = useState(null);
  const [senha, setSenha] = useState(null);
  const [whats, setWhats] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <>
      <StatusBar backgroundColor='#B6ECFF' barStyle='dark-content'/>

      <View style={styles.wrap}>
        <Logo style={styles.logo}/>

        <View style={styles.inputsWrap}>
          <Label value='É um prazer te conhecer!'/>
          <Label value='Informe seus dados para o cadastro:'/>

          <TextInput style={styles.input} placeholderTextColor='#134C83' 
              onChangeText={() => setNome(nome)} value={nome}
              placeholder='Seu nome'/>

          <TextInput style={styles.input} placeholderTextColor='#134C83' 
              onChangeText={() => setLogin(login)} value={login}
              placeholder='Seu novo login'/>

          <TextInput style={styles.input} placeholderTextColor='#134C83' 
              onChangeText={() => setSenha(senha)} value={senha}
              placeholder='Sua nova senha'/>

          <Divider />

          <TextInput style={styles.input} placeholderTextColor='#134C83' 
              onChangeText={() => setWhats(whats)} value={whats}
              placeholder='Seu número do WhatsApp'/>

          <Label value='ou' style={styles.ou}/>

          <TextInput style={styles.input} placeholderTextColor='#134C83' 
              onChangeText={() => setEmail(email)} value={email}
              placeholder='Seu e-mail'/>

          <Button1 label='Continuar' style={styles.continuar} action={() => navigation.navigate('step2')}/>

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
    marginTop: (screen.height / 3.5) - 150
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
  ou:{
    alignSelf:'center'
  },
  continuar:{
    marginTop: 20
  }
});

export default Step1Screen;