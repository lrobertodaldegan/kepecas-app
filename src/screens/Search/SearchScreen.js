import {useState} from 'react';
import { faArrowLeftLong, faCartFlatbed, faShop, faUser } from "@fortawesome/free-solid-svg-icons";
import { 
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableHighlight,
  TextInput,
  FlatList,
} from "react-native";
import Icon from "../../components/Icon";
import Label from "../../components/Label";
import PecaListItem from '../../components/PecaListItem';
import ServicoListItem from '../../components/ServicoListItem';
import UsuarioListItem from '../../components/UsuarioListItem';

const result = [
  {i:0, title:'teste', desc:'teste', fotos:['data:image/webp;base64,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','data:image/webp;base64,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']},
  {i:1, title:'teste', desc:'teste', fotos:[]}
];

const SearchScreen = ({navigation}) => {
  const [word, setWord] = useState(null);
  const [filter, setFilter] = useState('pecas');
  const [results, setResults] = useState(result);

  return (
    <>
      <StatusBar backgroundColor='#134C83' barStyle='light-content'/>

      <View style={styles.wrap}>
        <View style={styles.searchHeader}>
          <TouchableHighlight underlayColor='#134C83'
              onPress={() => navigation.goBack()}>
            <Icon icon={faArrowLeftLong} style={styles.goBackIcon}/>
          </TouchableHighlight>

          <Label value='Pesquisar' style={styles.title}/>

          <TextInput style={styles.input} placeholderTextColor='#fafafa' 
              onChangeText={() => setWord(word)} value={word}
              placeholder='O que procura?'/>
          
          <View style={styles.filters}>
            <TouchableHighlight underlayColor='#fafafa'
                onPress={() => setFilter('pecas')}>

              <View style={[styles.filter, filter === 'pecas' ? styles.filterSelected : {}]}>
                <Icon icon={faCartFlatbed} 
                    style={[styles.filterIcon, filter === 'pecas' ? styles.filterIconSelected : {}]}/>

                <Label value='Peças' 
                    style={[styles.filterLbl, filter === 'pecas' ? styles.filterLblSelected : {}]}/>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#fafafa'
                onPress={() => setFilter('servicos')}>

              <View style={[filter === 'servicos' ? styles.filterSelected : {}, styles.filter]}>
                <Icon icon={faShop} 
                    style={[styles.filterIcon, filter === 'servicos' ? styles.filterIconSelected : {}]}/>

                <Label value='Serviços' 
                    style={[styles.filterLbl, filter === 'servicos' ? styles.filterLblSelected : {}]}/>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#fafafa'
                onPress={() => setFilter('usuarios')}>

              <View style={[styles.filter, filter === 'usuarios' ? styles.filterSelected : {}]}>
                <Icon icon={faUser} 
                    style={[styles.filterIcon, filter === 'usuarios' ? styles.filterIconSelected : {}]}/>

                <Label value='Usuários' 
                    style={[styles.filterLbl, filter === 'usuarios' ? styles.filterLblSelected : {}]}/>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <FlatList 
            style={styles.list}
            data={results}
            keyExtractor={(item) => item.i}
            renderItem={({item}) => {
              if(filter === 'pecas')
                return <PecaListItem item={item}/>
              
              if(filter === 'servicos')
                return <ServicoListItem item={item}/>

              return <UsuarioListItem item={item} 
                        onPress={() => navigation.navigate('profile', {user:'x'})}/>
            }}
        />


        <View style={styles.searchPFooter}>
          <TouchableHighlight underlayColor='#fafafa'
              style={styles.searchPFooterBtns}
              onPress={() => null}>
              <Label value='Enviar itens'/>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='#fafafa'
              style={styles.searchPFooterBtns}
              onPress={() => null}>
              <Label value='Exportar PDF'/>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
}

const size = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    backgroundColor:'#134C83',
    width:size.width,
    height:size.height,
    padding:20,
  },
  searchHeader:{
    backgroundColor:'#134C83',
    marginBottom:10
  },
  goBackIcon:{
    color:'#fafafa'
  },
  title:{
    fontFamily:'Montserrat-Bold',
    fontSize:16,
    color:'#fafafa',
    marginTop:30
  },
  input:{
    borderRadius:10,
    height: 50,
    width: size.width - 40,
    marginTop:10,
    backgroundColor:'rgba(255,255,255,0.2)',
    paddingHorizontal: 20,
    fontFamily:'Montserrat-Regular'
  },
  filters:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:10
  },
  filter:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:10,
    paddingHorizontal:15,
    paddingVertical:10,
  },
  filterLbl:{
    color:'#fafafa',
    fontSize:14
  },
  filterIcon:{
    color:'#fafafa',
    marginRight:5
  },
  filterSelected:{
    backgroundColor:'#fafafa',
  },
  filterLblSelected:{
    color:'#134C83',
    fontFamily:'Montserrat-Bold'
  },
  filterIconSelected:{
    color:'#134C83',
  },
  list:{
    height:size.height - 350,
    marginBottom:150
  },
  searchPFooter: {
    flexDirection:'row',
    position:'absolute',
    bottom:70,
    paddingHorizontal:20,
    paddingVertical:20,
    width:size.width,
    justifyContent:'space-between',
    backgroundColor:'#134C83',
  },
  searchPFooterBtns: {
    width:(size.width - 60)/2,
    backgroundColor:'#fafafa',
    borderRadius:5,
    alignItems:'center',
    paddingVertical:15
  },
  searchPFooterBtnsLbl:{
    color:'#134C83'
  },
});

export default SearchScreen;