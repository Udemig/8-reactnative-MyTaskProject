import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/uı/floatActionButton';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE} from '../../utils/router';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';

const MyNotes = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />

        <FlatList
          data={mockData}
          renderItem={({item}) => <NoteCard item={item} />}
          keyExtractor={item => item.id.toString()}
        />

        <FloatActionButton onPress={() => navigation.navigate(ADDNOTE)} />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;

const styles = StyleSheet.create({});
