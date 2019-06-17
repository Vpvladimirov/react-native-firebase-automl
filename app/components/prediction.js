import React from 'react'
import FirebaseML from '@firebaseML'

export default class Prediction extends React.Component {
    getPrediction(pictureUri) {
        return new Promise((resolve, reject) => {
            FirebaseML.show(
            pictureUri,
            error => {
                console.log(error);
                reject(error);
            },
            (appliance, confidence) => {
                resolve({ appliance, confidence});
            },
            )
        })
    }

    render() {
        return (
        <View style={ { flex: 1 } }>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
        </View>
        );
    }
}