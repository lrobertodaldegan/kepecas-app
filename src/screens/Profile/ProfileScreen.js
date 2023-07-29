import {useState, useEffect} from 'react';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { 
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";
import Button2 from "../../components/Button2";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Label from "../../components/Label";
import logo from '../../assets/img/logo_menor.png';


const ProfileScreen = ({route, navigation}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    let userId = null;
    
    if(route && route !== null && route.params && route.params !== null){
      userId = route.params.userId;
    }

    setUser({
      foto:logo,
      id:0,
      nome:'Usuário X',
      desc:'Resumo resumo resumo resumo'
    });
  }

  const getPosts = () => {
    let posts = [];

    for(let i = 0; i < 13; i++){
      posts.push(<ImageBackground key={i + i} source={/*user.posts[0]*/logo} 
                    style={styles.postImage}
                    resizeMode='contain'/>);
    }
    
    return posts;
  }

  return (
    <>
      <StatusBar backgroundColor='#fafafa' barStyle='dark-content'/>

      <View style={styles.wrap}>
        <Header navigation={navigation}/>

        <ScrollView style={styles.content}>
          <View style={styles.profileCardWrap}>
            <ImageBackground source={user.foto && user.foto != null ? user.foto : logo} 
                style={styles.profileImage}
                resizeMode='contain'/>

            <Label value={user.nome} style={styles.profileName}/>

            <Label value={user.desc} 
                style={styles.profileDesc}/>
          
            <Button2 label={'Bloquear usuário'} style={styles.blockBtn}/>
          </View>

          <View style={styles.postsWrap}>
            {getPosts()}
          </View>
        </ScrollView>

        <Footer navigation={navigation} 
            selected={user && user !== null ? "feed" : 'profile'}/>
      </View>
    </>
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
    marginTop: 40,
    marginBottom: 150,
    height:size.height - 200
  },
  profileCardWrap:{
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    width: size.width - 40,
    height: size.height / 3,
    backgroundColor: '#134C83',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
  },
  profileImage: {
    width:100,
    height: 100,
    backgroundColor:'#fafafa',
    borderRadius:100
  },
  profileName: {
    fontFamily:'Montserrat-Bold',
    fontSize:18,
    color:'#fafafa',
    marginVertical:10,
  },
  profileDesc: {
    fontSize:14,
    color:'#fafafa'
  },
  blockBtn:{
    width: size.width - 80,
    marginTop: 20
  },
  postsWrap:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'flex-start'
  },
  postImage: {
    height:100,
    width:(size.width - 52) / 3,
    margin:2,
  },
});

export default ProfileScreen;