import { 
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Linking,
} from "react-native";
import MiniLogo from "./MiniLogo";
import Icon from "./Icon";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'


const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableHighlight underlayColor='#fafafa' 
          onPress={async () => await Linking.openURL('https://www.kepecas.com.br/')}>
        <MiniLogo />
      </TouchableHighlight>
      
      <TouchableHighlight underlayColor='#fafafa' onPress={() => navigation.navigate('profile')}>
        <Icon icon={faCircleUser} style={styles.hIcon}/>
      </TouchableHighlight>
    </View>
  );
}

const size = Dimensions.get('screen');

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fafafa',
    marginTop:30
  },
  hIcon: {
    color:'#134C83',
  },
});

export default Header;