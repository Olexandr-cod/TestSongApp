import React from 'react';
import { View, Text } from 'react-native';
import { cs } from '../../styles';

interface TrackCardProps {
    rank: number,
    name: string
}

const TrackCard = ({ rank, name }: TrackCardProps) => {
    return (
        <View style={cs.treckCardContainer}>
            <Text style={cs.rankText}>{rank}.</Text>
            <Text style={cs.nameSongText}>{name}</Text>
        </View>
    );
};

export default TrackCard;
