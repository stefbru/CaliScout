import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import Points from './points'
import { Styles }  from '../css';

Mapbox.setAccessToken('pk.eyJ1Ijoic3RlZmE1NyIsImEiOiJjam5iMnNrMDkwM3BwM3Bwb2t1anprc3A2In0.kf5G3j9TXpRQGOY0HWHM4g');

export default class MapCali extends Component<{}>{
    render() {
        return (
            <View style={Styles.container}>
                <Mapbox.MapView
                    styleURL={Mapbox.StyleURL.Street}
                    centerCoordinate={[8.5333396, 47.388]}
                    zoomLevel={12}
                    style={Styles.container}>
                    {Points()}
                </Mapbox.MapView>
            </View>
        )
    }
};
