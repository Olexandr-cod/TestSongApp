import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cs } from './styles';
import ButtonDefault from '../../UI/ButtonDefault';
import { useNavigation } from '@react-navigation/native';

interface CustomHeaderProps {
    title: string;
    showBackBtn?: boolean
}

const CustomHeader = ({ title, showBackBtn = false }: CustomHeaderProps) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const paddingInsets = insets.top ? insets.top + 10 : 20;

    return (
        <View
            style={[
                showBackBtn ? cs.container : cs.containerTwo,
                {
                    paddingTop: paddingInsets,
                },
            ]}>
            {!!showBackBtn && <ButtonDefault onPress={() => navigation.goBack()}>
                <Text style={cs.textHeader}>
                    {'<- Back'}
                </Text>
            </ButtonDefault>}
            <Text style={cs.textHeader}>
                {title}
            </Text>
            {!!showBackBtn && <ButtonDefault buttoStyles={{ opacity: 0 }} onPress={() => true}>
                <Text style={cs.textHeader}>
                    {'<- Back'}
                </Text>
            </ButtonDefault>}
        </View>
    );
};

export default CustomHeader;
