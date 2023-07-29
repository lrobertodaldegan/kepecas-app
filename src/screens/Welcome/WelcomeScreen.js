import { 
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import Button1 from "../../components/Button1";
import Button2 from "../../components/Button2";
import Label from "../../components/Label";
import Logo from "../../components/Logo";


const WelcomeScreen = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor='#B6ECFF' barStyle='dark-content'/>

      <View style={styles.wrap}>
        <Logo style={styles.logo}/>

        <View style={styles.lblWrap}>
          <Label value='Olá, você que ama carro!' style={styles.title}/>

          <Label value='Este é o seu mais novo consultor automotivo!'/>
        </View>

        <View style={styles.btnWrap}>
          <Label value='Seja muito bem-vindo!' style={styles.legend}/>

          <Button2 label='É o meu primeiro acesso' action={() => navigation.navigate('step1')}/>
          <Button1 label='Já sou cadastrado!' action={() => navigation.navigate('login')}/>
        </View>
      </View>
    </>
  );
}

const size = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
}

const styles = StyleSheet.create({
  wrap:{
    backgroundColor:'#B6ECFF',
    width:size.width,
    height:size.height,
    padding:20,
  },
  logo:{
    marginTop:50,
    alignSelf:'center'
  },
  lblWrap:{
    marginTop: (size.height / 3.5) - 50
  },
  btnWrap:{
    marginTop: (size.height / 3.5) - 50
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

export default WelcomeScreen;