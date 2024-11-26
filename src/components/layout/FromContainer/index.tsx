import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

interface Props {
    containerStyles?: ViewStyle | ViewStyle[];
    children?: ReactNode;
}

const FromContainer = ({ containerStyles, children }: Props) => {
    return (
        <SafeAreaView style={[cs.flex1, containerStyles]}>
            {children}
        </SafeAreaView>
    );
};

const cs = StyleSheet.create({
    flex1: {
        flex: 1,
        backgroundColor: '#d4ffff',
    },
});

export default FromContainer;
