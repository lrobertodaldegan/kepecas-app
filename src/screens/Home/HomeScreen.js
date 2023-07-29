import { 
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import Icon from "../../components/Icon";
import Label from "../../components/Label";
import { faCartFlatbed, faShop } from '@fortawesome/free-solid-svg-icons'
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.wrap}>
      <StatusBar backgroundColor='#fafafa' barStyle='dark-content'/>

      <Header navigation={navigation}/>

      <View style={styles.content}>
        <Label value='Seu consultor automotivo de bolso!'
            style={styles.title}/>

        <Label value='Consulte peças e serviços parceiros'
            style={styles.subtitle}/>

        <View style={styles.cardsWrap}>
          <Card style={styles.cardP} content={
              <View style={styles.cardContent}>
                <Icon style={styles.cardPIcon} size={70} icon={faCartFlatbed}/>

                <Label value='Buscar por peças' style={styles.cardLbl}/>
              </View>
           }/>

          <Card style={styles.cardS} content={
              <View style={styles.cardContent}>
                <Icon style={styles.cardSIcon} size={70} icon={faShop}/>

                <Label value='Buscar por serviços' style={styles.cardLbl}/>
              </View>
           }/>

          <Card style={styles.cardAd} content={
              <View style={styles.cardAdContent}>
                <Label value='ANÚNCIO' style={styles.adLbl}/>
                <Label value='(LINK EXTERNO)' style={styles.adLbl}/>
              </View>
           }/>
        </View>
      </View>

      <Footer navigation={navigation}/>
    </View>
  );
}

const size = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    backgroundColor:'#fafafa',
    width:size.width,
    height:size.height,
    paddingHorizontal:20,
  },
  content:{
    marginTop: 40
  },
  title: {
    fontSize:18,
    fontFamily:'Montserrat-Bold',
    marginBottom:5
  },
  subtitle:{
    fontSize:15,
  },
  cardsWrap:{
    marginTop:30
  },
  cardP: {
    backgroundColor:'#134C83',
  },
  cardS: {
    backgroundColor:'#0489CC',
    marginTop:20
  },
  cardAd: {
    backgroundColor:'#fafafa',
    marginTop:20
  },
  cardContent:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:150
  },
  cardAdContent:{
    justifyContent:'center',
    alignItems:'center',
    height:150,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#134C83'
  },
  cardPIcon: {
    color:'#fafafa',
    transform: [{rotate:'20deg'}],
    marginRight: 20,
  },
  cardSIcon: {
    color:'#fafafa',
    transform: [{rotate:'-20deg'}],
    marginRight: 20,
  },
  cardLbl: {
    color:'#fafafa',
    fontSize:18,
    fontFamily:'Montserrat-Bold'
  },
  adLbl:{
    color:'#134C83',
    fontFamily:'Montserrat-Bold'
  },
});

export default HomeScreen;