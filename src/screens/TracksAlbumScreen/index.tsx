import React, { useCallback, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import FromContainer from '../../components/layout/FromContainer';
import { useReduxDispatch, useReduxSelector } from '../../store/store';
import { getAlbumTracksAction } from '../../redux/ArtistRedux/ArtistAction';
import { TrackType } from '../../redux/ArtistRedux/types';
import { useRoute } from '@react-navigation/native';
import LoadingIndicator from '../../components/UI/LoadingIndicator';
import { cs } from './styles';
import TrackCard from './components/TrackCard';

const TOP_TRACKS_TEXT = 'Top Tracks';

const TracksAlbumScreen = () => {
    const { params } = useRoute<any>();
    const dispatch = useReduxDispatch();
    const { loading, albumTracksData } = useReduxSelector(state => state?.artist);

    useEffect(() => {
        dispatch(getAlbumTracksAction({ name: params?.name, album: params?.album }));
    }, [dispatch, params]);

    const RenderTrackCallback = useCallback(({ item }: { item: TrackType }) => <TrackCard name={item?.name} rank={item?.['@attr']?.rank} />, []);

    return (
        <FromContainer>
            <Text style={cs.toTrackText}>{TOP_TRACKS_TEXT}</Text>
            {
                loading ? <LoadingIndicator /> : (
                    <>
                        {albumTracksData && (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={albumTracksData}
                                keyExtractor={key => key?.name}
                                contentContainerStyle={cs.mt20}
                                renderItem={RenderTrackCallback}
                            />
                        )}
                    </>
                )
            }
        </FromContainer>
    );
};

export default TracksAlbumScreen;
