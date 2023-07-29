import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  type,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              keyboardType={type}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // width: "100%",
    // borderColor: "#e8e8e8",
    // borderWidth: 1,
    // borderRadius: 5,
    // height: 40,
    // paddingHorizontal: 10,
    // marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: "#94ADD7",
    borderBottomWidth: 2,
    borderRadius: 5,
    paddingLeft: 5,
  },
});

export default CustomInput;
