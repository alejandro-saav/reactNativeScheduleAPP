// ProfileImagePicker.js
import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import * as ImagePicker from "expo-image-picker";
import profileIMG from "../../assets/images/profileIMG.png";
import { FONT, COLORS, SIZES } from "../../constants/theme";

const ProfileImagePicker = () => {
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const pickImage = async () => {
    // Image picker logic here...
    // No permissions request is necessary for launching the image library
    const permi = await requestPermission();
    if (permi.granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } else {
      createTwoButtonAlert();
    }
  };

  return (
    <TouchableOpacity style={styles.imgProfile} onPress={pickImage}>
      <Image source={image ? { uri: image } : profileIMG} style={styles.img} />
      {!image ? (
        <Text style={styles.plusSign}>
          <AntDesign
            name="pluscircle"
            style={styles.plusIcon}
            color="#89CFF0"
            size={20}
          />
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Your styles for ProfileImagePicker component
  imgProfile: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.gray2,
    borderRadius: 500,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 500,
  },

  plusSign: {
    position: "absolute",
    bottom: 0,
    right: 15,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
  plusIcon: {
    borderRadius: 500,
  },
});

export default ProfileImagePicker;
