
import{
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { faMapLocation, faShop } from '@fortawesome/free-solid-svg-icons'
import Label from './Label';
import Icon from './Icon';

const ServicoListItem = ({item, onSelect=() => null}) => {

  const getFoto = () => {
    if(item.fotos[10] && item.fotos[10] !== null){
      return <ImageBackground  style={styles.fotos}
                resizeMode='contain'
                source={{uri: item.fotos[0]}} />
    } else {
      return <Icon icon={faShop} style={styles.icon} size={60}/>
    }
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.fotosWrap}>
        {getFoto()}
      </View>

      <View style={styles.details}>
        <Label value={item.title} style={styles.titleLbl}/>
        <Label value={item.desc} style={styles.detailLbl}/>
      </View>

      <View style={styles.selectBtn}>
        <TouchableHighlight underlayColor='#fafafa'
            onPress={() => null}>
          <Icon icon={faMapLocation} style={styles.icon} size={20}/>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const size = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    flexDirection:'row',
    backgroundColor:'#fafafa',
    width:size.width - 40,
    height: 100,
    marginBottom:10,
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius: 10,
    justifyContent:'space-between',
    alignItems:'center'
  },
  details:{
    width:(size.width - 40 )/2,
  },
  titleLbl:{
    fontSize:14,
    alignSelf:'flex-start'
  },
  detailLbl:{
    fontSize:12,
  },
  fotosWrap: {
    flexDirection:'row'
  },
  fotos: {
    width:50,
    height:50,
  },
  icon:{
    color:'#134C83'
  }
});

export default ServicoListItem;