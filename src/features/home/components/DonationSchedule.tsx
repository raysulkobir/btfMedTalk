// src/ui/components/DonationSchedule.tsx
import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity } from 'react-native';
import Divider from '@/ui/components/Divider';
import { images } from '@/utils/images';
import { Colors } from '@/ui/theme/colors';
import Fonts from '@/ui/theme/fonts';

type Props = {
    title?: string;
    date?: string;         // e.g. "26 January 2025"
    time?: string;         // e.g. "10:00 AM"
    venue?: string;        // e.g. "BloodLine Uttara"
    address?: string;      // e.g. "Uttara, Dhaka"
};

const DonationSchedule: React.FC<Props> = ({
    title = 'Your Next Blood Donation Schedule',
    date = '26 January 2025',
    time = '10:00 AM',
    venue = 'BloodLine Uttara',
    address = 'Uttara, Dhaka',
}) => {
    return (
        <View style={styles.card} accessible accessibilityRole="summary">
            {/* Header */}
            <Text style={styles.title} accessibilityRole="header">{title}</Text>
            <Divider insetTop={8} insetBottom={12} color="rgba(0,0,0,0.08)" />

            {/* Content row */}
            <View style={styles.row}>
                {/* Date & Time */}
                <View style={styles.block}>
                    <Image source={images.calendar} style={styles.icon} resizeMode="contain" />
                    <View style={styles.texts}>
                        <Text style={styles.primary} numberOfLines={1}>{date}</Text>
                        <Text style={styles.secondary} numberOfLines={1}>{time}</Text>
                    </View>
                </View>

                {/* Vertical divider */}
                <Divider
                    vertical
                    side="right"
                    length={40}
                    insetTop={2}
                    insetBottom={2}
                    color="rgba(0,0,0,0.12)"
                    style={styles.vDivider}
                />

                {/* Venue & Address */}
                <View style={styles.block}>
                    <Image source={images.loc} style={styles.icon} resizeMode="contain" />
                    <View style={styles.texts}>
                        <Text style={styles.primary} numberOfLines={1}>{venue}</Text>
                        <Text style={styles.secondary} numberOfLines={1}>{address}</Text>
                    </View>
                </View>

                
            </View>
            <View style={styles.buttonContainer}>
                {/* <View style={styles.block}> */}
                    <TouchableOpacity onPress={() => {}} style={styles.button}>
                        <Text style={styles.buttonText} numberOfLines={1}>Pre/Post-donation tips</Text>
                    </TouchableOpacity>
                {/* </View> */}

                {/* <View style={styles.block}> */}
                    <TouchableOpacity onPress={() => {}} style={styles.button}>
                        <Text style={styles.buttonText} numberOfLines={1}>Get Map Direction</Text>
                    </TouchableOpacity>
                {/* </View> */}
            </View>
            
        </View>
    );
};

export default memo(DonationSchedule);

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: Colors.white ?? '#FFFFFF',
        borderRadius: 12,
        paddingTop: 12,
        paddingBottom: 14,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey ?? 'rgba(0,0,0,0.12)',
        // subtle shadow
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOpacity: 0.08,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 3 },
            },
            android: { elevation: 2 },
        }),
    },

    title: {
        fontSize: 16,
        color: Colors.primary,
        textAlign: 'center',
        fontFamily: Fonts.font_600,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        gap: 12,
    },

    block: {
        flex: 1,
        minWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },

    icon: {
        marginRight: 10,
    },

    texts: {
        flex: 1,
    },

    primary: {
        fontSize: 14,
        color: Colors.black,
        fontFamily: Fonts.font_600,
    },

    secondary: {
        marginTop: 2,
        fontSize: 12,
        color: Colors.grey ?? '#6B7280',
        fontFamily: Fonts.font_400,
    },

    vDivider: {
        marginHorizontal: 4, // tiny breathing room around the vertical bar
    },

    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
    },
    button:{
        backgroundColor: Colors.surface,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10
    },
    buttonText:{
        textAlign: 'center',
        color: Colors.black,
    }
});
