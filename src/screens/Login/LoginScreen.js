import {useState} from 'react';
import { 
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput
} from "react-native";
import Button1 from "../../components/Button1";
import Link from "../../components/Link";
import Label from "../../components/Label";
import Logo from "../../components/Logo";


const LoginScreen = ({navigation}) => {
  const [u, setU] = useState(null);
  const [p, setP] = useState(null);

  return (
    <>
      <StatusBar backgroundColor='#B6ECFF' barStyle='dark-content'/>

      <View style={styles.wrap}>
        <Logo style={styles.logo}/>

        <View style={styles.inputsWrap}>
          <Label value='Bem-vindo de volta!'/>

          <TextInput style={styles.input} placeholderTextColor='#134C83' 
              onChangeText={() => setU(u)} value={u}
              placeholder='Seu login'/>

          <TextInput style={styles.input} placeholderTextColor='#134C83' 
              onChangeText={() => setP(p)} value={p}
              placeholder='Sua senha'/>
        </View>

        <View style={styles.btnWrap}>
          <Button1 label='Entrar' action={() => navigation.navigate('home')}/>

          <Link value='Clique aqui se esqueceu a sua senha.' 
              style={styles.legend} action={() => navigation.navigate('reset')}/>
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
    fontSize: 14,
    marginBottom: 10,
  },
});

export default LoginScreen;