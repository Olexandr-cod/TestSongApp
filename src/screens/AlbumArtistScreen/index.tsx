import React, { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useReduxDispatch, useReduxSelector } from '../../store/store';
import { getTopAlbumAction } from '../../redux/ArtistRedux/ArtistAction';
import { Album } from '../../redux/ArtistRedux/types';
import { useNavigation } from '@react-navigation/native';
import { DASHBOARD_ROUTES } from '../../navigation/routes';
import FromContainer from '../../components/layout/FromContainer';
import AlbumCard from './components/AlbumCard';
import { cs } from './styles';
import HeaderInfo from './components/HeaderInfo';
import LoadingIndicator from '../../components/UI/LoadingIndicator';


const AlbumArtistScreen = () => {
    const navigation = useNavigation<any>();
    const dispatch = useReduxDispatch();
    const { loading, currentPage, topAlbumData } = useReduxSelector(state => state?.artist);

    useEffect(() => {
        dispatch(getTopAlbumAction({ name: 'Bon Jovi', page: 1 }));
    }, [dispatch]);

    const loadMore = useCallback(() => {
        if (!loading && topAlbumData) {
            const nextPage = currentPage + 1;
            dispatch(getTopAlbumAction({ name: topAlbumData['@attr'].artist, page: nextPage }));
        }
    }, [dispatch, loading, topAlbumData, currentPage]);

    const RenderAlbumsCallback = useCallback(({ item }: { item: Album }) => {
        return (
            item?.name === '(null)' ? null :
                <AlbumCard
                    name={item?.name}
                    img={item?.image[3]['#text'] !== '' ? item?.image[3]['#text'] : 'https://lastfm.freetls.fastly.net/i/u/174s/0fc7892659cf5d7046e6b4ce639d800c.png'}
                    onPress={() => navigation.navigate(DASHBOARD_ROUTES.TRACKS_ALBUM_SCREEN, { name: item?.artist?.name, album: item?.name })}
                />
        );
    }, [navigation]);

    return (
        <FromContainer>
            <HeaderInfo nameArtist={topAlbumData?.['@attr']?.artist} onPress={() => navigation.navigate(DASHBOARD_ROUTES.ARTIST_BIO_SCREEN, { name: topAlbumData?.['@attr']?.artist })} />
            <FlatList
                data={topAlbumData?.album}
                keyExtractor={key => key?.name}
                contentContainerStyle={cs.containerList}
                renderItem={RenderAlbumsCallback}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <LoadingIndicator /> : null}
            />
        </FromContainer>
    );
};

export default AlbumArtistScreen;
