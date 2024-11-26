import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import FromContainer from '../../components/layout/FromContainer';

const BIOGRAPHY_TEXT = 'Biography';

const ArtistBioScreen = () => {
    return (
        <FromContainer>
            <ScrollView>
                <View>
                    <Text>Name</Text>
                </View>
                <Text>{BIOGRAPHY_TEXT}</Text>
                <Text>summary</Text>
            </ScrollView>

        </FromContainer>
    );
};

export default ArtistBioScreen;
