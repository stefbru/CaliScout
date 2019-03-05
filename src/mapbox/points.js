import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { Styles }  from '../css';

Mapbox.setAccessToken('pk.eyJ1Ijoic3RlZmE1NyIsImEiOiJjam5iMnNrMDkwM3BwM3Bwb2t1anprc3A2In0.kf5G3j9TXpRQGOY0HWHM4g');

const Points = () =>
    <View>
        <Mapbox.PointAnnotation
            key='pointAnnotation1'
            id='pointAnnotation1'
            coordinate={[8.5333396, 47.378]}>

            <View style={Styles.annotationContainer}>
                <View style={Styles.annotationFill} />
            </View>
            <Mapbox.Callout title='Look! An annotation!1' />
        </Mapbox.PointAnnotation>
        <Mapbox.PointAnnotation
            key='pointAnnotation2'
            id='pointAnnotation2'
            coordinate={[8.5333396, 47.398]}>

            <View style={Styles.annotationContainer}>
                <View style={Styles.annotationFill} />
            </View>
            <Mapbox.Callout title='Look! An annotation!2' />
        </Mapbox.PointAnnotation>
    </View>;

export default Points;