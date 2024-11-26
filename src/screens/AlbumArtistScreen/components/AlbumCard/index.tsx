import React from 'react';
import { Text, Image } from 'react-native';
import ButtonDefault from '../../../../components/UI/ButtonDefault';
import { cs } from './styles';

interface AlbumCardProps {
    name: string
    img: string
    onPress: () => void
}

const AlbumCard = ({ name, img, onPress }: AlbumCardProps) => {
    return (
        <ButtonDefault buttoStyles={cs.container} onPress={onPress}>
            <Image source={{ uri: img }} style={cs.impStyle} />
            <Text>{name}</Text>
        </ButtonDefault>
    );
};

export default AlbumCard;
