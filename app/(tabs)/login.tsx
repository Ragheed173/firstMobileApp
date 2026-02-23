import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
            <Controller
                control={control}
                name={"email"}
                rules={{ 
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address"
                    }
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View style={styles.container}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={[styles.input, error && styles.errorInput]}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                        />
                        {error && (
                            <Text style={styles.errorText}>
                                {error.message || "Email is required"}
                            </Text>
                        )}
                    </View>
                )}
            ></Controller>

            <Controller
                control={control}
                name={"password"}
                rules={{ 
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                    }
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={[styles.input, error && styles.errorInput]}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Enter your password"
                            secureTextEntry={true}
                        />
                    </View>
                )}
            ></Controller>
            <Pressable
                onPress={handleSubmit(onSubmit)}
                style={({ pressed }) => [
                    styles.button,
                    pressed && { opacity: 0.7 },
                ]}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        backgroundColor: "#f9fafb",
    },
    title: {
        fontSize: 28,
        fontWeight: "900",
        marginBottom: 40,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#0051ff",
        paddingVertical: 16,
        borderRadius: 20,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
    },
    label: {
        marginBottom: 6,
        fontSize: 20,
        fontWeight: "600",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },
    errorInput: {
        borderColor: "#ff4d4f",
    },
    errorText: {
        color: "#ff4d4f",
        marginTop: 4,
        fontSize: 12,
    },
});