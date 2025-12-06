import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// If you want to use size-matters:
// import { ScaledSheet } from 'react-native-size-matters';

type InitialScreenProps = {
    navigation: any; // you can type this better with RootStackParamList later
};

const InitialScreen: React.FC<InitialScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to btfMedTalk 👋</Text>
                <Text style={styles.subtitle}>
                    This is your InitialScreen. Set me as initialRouteName in your navigator.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home' as never)} // change 'Home' to any existing screen
                >
                    <Text style={styles.buttonText}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default InitialScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 24,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        alignSelf: 'flex-start',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
});
