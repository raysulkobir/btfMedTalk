// src/ui/components/NextEligible.tsx
import DateBadge from '@/ui/components/DateBadge';
import { Colors } from '@/ui/theme/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getProportionalFontSize } from '@/ui/theme/typography';
import Fonts from '@/ui/theme/fonts';

type Props = {
    lastDonationLabel: string;      // e.g., "Last Donation"
    lastDonationDate?: Date | string | null; // "26 January 2025" or Date
};

const NextEligible: React.FC<Props> = ({ lastDonationLabel, lastDonationDate }) => {
    return (
        <View style={styles.nextEligible}>
            <View style={styles.nextEligibleTextContainer}>
                <Text style={styles.nextEligibleText}>{lastDonationLabel}</Text>
            </View>

            <DateBadge
                date={lastDonationDate}
                style={styles.dateContainer}
            />
        </View>
    );
};

export default NextEligible;

const styles = StyleSheet.create({
    nextEligible: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginVertical: 10,
    },
    nextEligibleTextContainer: {
        flex: 1,
    },
    nextEligibleText: {
        fontFamily: Fonts.font_500,
        fontSize: getProportionalFontSize(12),
        color: Colors.black,
    },
    dateContainer: {
        
    },
});
