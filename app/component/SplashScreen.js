import React from 'react';
import { View , StyleSheet, Image, Text } from 'react-native';

export default class NewsListItem extends React.Component{

    render (){
        return(
            <View style={styles.container}>
                <Text>Hello world</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})