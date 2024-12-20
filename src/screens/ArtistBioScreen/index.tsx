import React, { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import FromContainer from '../../components/layout/FromContainer';
import { useReduxDispatch, useReduxSelector } from '../../store/store';
import { getArtistInfoAction } from '../../redux/ArtistRedux/ArtistAction';
import { cs } from './styles';

const BIOGRAPHY_TEXT = 'Biography';

type ArtistBioRouteParams = {
    ArtistBioScreen: {
        name: string;
    };
};

const ArtistBioScreen = () => {
    const { params } = useRoute<RouteProp<ArtistBioRouteParams, 'ArtistBioScreen'>>();
    const dispatch = useReduxDispatch();
    const { artistOneData } = useReduxSelector(state => state?.artist);

    useEffect(() => {
        dispatch(getArtistInfoAction(params?.name));
    }, [dispatch, params]);

    return (
        <FromContainer>
            <ScrollView contentContainerStyle={cs.container}>
                <Text style={cs.nameArtistText}>{artistOneData?.name}</Text>
                <Text style={cs.bioText}>- {BIOGRAPHY_TEXT}</Text>
                <Text>{artistOneData?.bio?.summary}</Text>
            </ScrollView>
        </FromContainer>
    );
};

export default ArtistBioScreen;
