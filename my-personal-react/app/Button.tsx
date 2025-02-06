import React, { useRef } from "react";
import { Animated, Pressable, Text } from "react-native";
import { theme } from "./theme";

export interface ButtonProps {
    name: React.ReactNode;
    press: () => void;
}

export function SGX_AnimatedButton({ name, press }: ButtonProps) {
    const scale = useRef(new Animated.Value(1)).current;
    const backgroundColor = useRef(new Animated.Value(0)).current; // 0: 默认, 1: 悬停, -1: 按下

    const animateScale = (toValue: number) => {
        Animated.spring(scale, {
            toValue,
            useNativeDriver: true,
            speed: 10,
            bounciness: 8,
        }).start();
    };

    const animateBackground = (toValue: number) => {
        Animated.timing(backgroundColor, {
            toValue,
            duration: 150,
            useNativeDriver: false,
        }).start();
    };

    const bgColorInterpolation = backgroundColor.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ["#28004D", "#4B0091", "#921AFF"] // 按下时变暗，默认，悬停时变亮
    });

    return (
        <Pressable
            onPress={press}
            onPressIn={() => {
                animateScale(0.9);
                animateBackground(-1);
            }}
            onPressOut={() => {
                animateScale(0.95);
                animateBackground(0);
            }}
            onHoverIn={() => {
                animateScale(1);
                animateBackground(1);
            }}
            onHoverOut={() => {
                animateScale(0.95);
                animateBackground(0);
            }}
            style={{ overflow: "hidden", borderRadius: 12 }}
        >
            <Animated.View style={[theme.pressable, {
                transform: [{ scale }],
                backgroundColor: bgColorInterpolation,
            }]}>
                <Text style={theme.text} selectable={false}>{name}</Text>
            </Animated.View>
        </Pressable>
    );
}
