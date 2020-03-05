import React, { useContext} from 'react'
import { StyleSheet, FlatList } from 'react-native';
import { PropTypes } from 'prop-types';
import ListItem from './ListItem';
import { MediaContext } from '../contexts/MediaContext'; 
import { getAllMedia } from '../hooks/APIHooks';

const List = (props) => {
    const [media, setMedia] = useContext(MediaContext);
    const [data] = getAllMedia();
    setMedia(data);

    return (
        <FlatList 
            data={media}
            keyExtractor={(item, index)=> index.toString()}
            renderItem={({item}) => <ListItem navigation={props.navigation} singleMedia={item} />}
            style={styles.container}
        />
    );
};

const styles= StyleSheet.create({
    container:{
        backgroundColor:'black',
        paddingTop: 50,
    }
});
List.propTypes = {
    mediaArray: PropTypes.array,
};


export default List;

