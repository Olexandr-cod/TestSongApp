import React from 'react';
import { View, Text } from 'react-native';
import ButtonDefault from '../../../../components/UI/ButtonDefault';
import { cs } from './styles';

const ABOUT_ARTIST_TEXT = 'About Artist -->';

interface HeaderInfoProps {
    nameArtist: string | undefined
    onPress: () => void
}

const HeaderInfo = ({ nameArtist, onPress }: HeaderInfoProps) => {
    return (
        <View style={cs.headerContainer}>
            <Text style={cs.fz30}>{nameArtist}</Text>
            <ButtonDefault buttoStyles={cs.buttonStyle} onPress={onPress}>
                <Text style={cs.buttonTextStyle}>{ABOUT_ARTIST_TEXT}</Text>
            </ButtonDefault>
        </View>
    );
};

export default HeaderInfo;
