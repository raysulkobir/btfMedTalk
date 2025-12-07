export const Card = ({ title, subtitle, children, onPress }) => {
    const Container = onPress ? StyledTouchableOpacity : StyledView;

    return (
        <Container
            className="bg-white rounded-2xl shadow-lg p-5 mb-4"
            onPress={onPress}
        >
            {title && (
                <StyledText className="text-xl font-bold text-gray-800 mb-1">
                    {title}
                </StyledText>
            )}
            {subtitle && (
                <StyledText className="text-sm text-gray-500 mb-3">
                    {subtitle}
                </StyledText>
            )}
            {children}
        </Container>
    );
};