import { Alert, Dimensions, Image, Pressable, StyleSheet, Text, View, } from "react-native";
import React, { useState } from "react";

const Lab78sc2 = (props) => {
  const { navigation } = props;
  const [count, setCount] = useState(1);

  const onAdd = () => {
    setCount((count) => count + 1);
  };

  const onSubtract = () => {
    if (count == 1) {
      setCount(1);
      Alert.alert("Không thể không có sản phẩm");
    } else {
      setCount((count) => count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: Dimensions.get.width, height: 250 }}
        source={require("../../../media_phainop/iconlab8a1.png")}
      />
      <Pressable
        style={{
          position: "absolute",
          top: 50,
          left: 45,
          tintColor: "white",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../../../media_phainop/back.png")} />
      </Pressable>
      <View style={styles.body}>
        <View style={styles.line1}>
          <View style={styles.name}>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 27,
                fontWeight: "700",
                color: "rgba(74, 74, 74, 1)",
                marginLeft: 20,
              }}
            >
              Fried Rice
            </Text>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontWeight: "300",
                color: "rgba(97, 97, 97, 1)",
                marginLeft: 20,
              }}
            >
              Pista House, Kukatpally
            </Text>
          </View>
          <View style={styles.favBut}>
          </View>
        </View>
        <View style={styles.line2}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 27.32,
              fontWeight: "600",
              color: "rgba(94, 89, 89, 1)",
            }}
          >
            Description
          </Text>
          <Text
            style={{
              fontSize: 13,
              lineHeight: 19.5,
              fontWeight: "500",
              color: "rgba(94, 89, 89, 1)",
            }}
          >
            Nutritional Value
          </Text>
        </View>
        <View style={styles.line3}>
          <View style={{ marginStart: 31, width: 150 }}>
            <Text
              style={{
                fontSize: 10,
                lineHeight: 15,
                fontWeight: "400",
                color: "rgba(94, 89, 89, 1)",
              }}
            >
              Our fried rice is made from the finest ingredients and veggies.
              single dish is made with fresh vegetables, rescued.
            </Text>
          </View>
          <View
            style={{
              marginStart: 51,
              width: 180,
              borderTopColor: "rgba(93, 89, 89, 1)",
              borderTopWidth: 0.6,
              borderBottomColor: "rgba(93, 89, 89, 1)",
              borderBottomWidth: 0.6,
            }}
          >
            <View style={styles.detail}>
              <Text
                style={{
                  fontSize: 9,
                  lineHeight: 13.5,
                  fontWeight: "300",
                  fontStyle: "italic",
                  color: "rgba(15, 12, 12, 1)",
                }}
              >
                Protein
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  lineHeight: 13.5,
                  fontWeight: "500",
                  color: "rgba(15, 12, 12, 1)",
                }}
              >
                2.5g
              </Text>
            </View>
            <View style={styles.detail}>
              <Text
                style={{
                  fontSize: 9,
                  lineHeight: 13.5,
                  fontWeight: "300",
                  fontStyle: "italic",
                  color: "rgba(15, 12, 12, 1)",
                }}
              >
                Carbohydrates
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  lineHeight: 13.5,
                  fontWeight: "500",
                  color: "rgba(15, 12, 12, 1)",
                }}
              >
                14.7g
              </Text>
            </View>
            <View style={styles.detail}>
              <Text
                style={{
                  fontSize: 9,
                  lineHeight: 13.5,
                  fontWeight: "300",
                  fontStyle: "italic",
                  color: "rgba(15, 12, 12, 1)",
                }}
              >
                Sodium
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  lineHeight: 13.5,
                  fontWeight: "500",
                  color: "rgba(15, 12, 12, 1)",
                }}
              >
                19%*
              </Text>
            </View>
            <View style={styles.detail}>
              <Text
                style={{
                  fontSize: 9,
                  lineHeight: 13.5,
                  fontWeight: "300",
                  fontStyle: "italic",
                  color: "rgba(15, 12, 12, 1)",
                }}
              >
                Potassium
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  lineHeight: 13.5,
                  fontWeight: "500",
                  color: "rgba(15, 12, 12, 1)",
                }}
              >
                5%*
              </Text>
            </View>
            <View style={styles.detail}>
              <Text
                style={{
                  fontSize: 9,
                  lineHeight: 13.5,
                  fontWeight: "300",
                  fontStyle: "italic",
                  color: "rgba(15, 12, 12, 1)",
                }}
              >
                Rich in Vitamin A, C and B3
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.line4}>
          <View style={styles.boxTime}>
            <Text
              style={{
                fontSize: 10,
                lineHeight: 15,
                fontWeight: "500",
                color: "rgba(158, 158, 158, 1)",
              }}
            >
              Rescued
            </Text>
            <Text
              style={{
                fontSize: 10,
                lineHeight: 15,
                fontWeight: "500",
                color: "rgba(158, 158, 158, 1)",
              }}
            >
              Vegan
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 10,
                  lineHeight: 15,
                  fontWeight: "500",
                  color: "rgba(158, 158, 158, 1)",
                }}
              >
                30 min
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 10,
              lineHeight: 15,
              fontWeight: "400",
              color: "rgba(158, 158, 158, 1)",
            }}
          >
            🔥 145 cal
          </Text>
          <Text
            style={{
              fontSize: 6,
              lineHeight: 9,
              fontWeight: "300",
              fontStyle: "italic",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            *Daily value
          </Text>
        </View>
        <View style={styles.ingredients}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 21,
              fontWeight: "500",
              fontStyle: "italic",
              color: "rgba(121, 121, 121, 1)",
              marginLeft: 22,
              marginTop: 5,
            }}
          >
            Ingredients
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Image
              style={{ borderRadius: 15 }}
              source={require("../../../media_phainop/back.png")}
            />
            <Image
              style={{ borderRadius: 15 }}
              source={require("../../../media_phainop/back.png")}
            />
            <Image
              style={{ borderRadius: 15 }}
              source={require("../../../media_phainop/back.png")}
            />
            <Image
              style={{ borderRadius: 15 }}
              source={require("../../../media_phainop/back.png")}
            />
          </View>
        </View>
        <View style={styles.line5}>
          <View style={styles.selectUser}>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 25.5,
                fontWeight: "500",
                color: "rgba(94, 89, 89, 1)",
              }}
            >
              Select User -
            </Text>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 25.5,
                fontWeight: "300",
                fontStyle: "italic",
                color: "rgba(94, 89, 89, 1)",
              }}
            >
              User 1
            </Text>
            <Image
              style={{ marginTop: 12 }}
              source={require("../../../media_phainop/back.png")}
            />
          </View>
          <Text
            style={{
              fontSize: 13,
              lineHeight: 20,
              fontWeight: "300",
              color: "rgba(117, 117, 117, 1)",
            }}
          >
            Edit 🖊️
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 27,
            fontWeight: "500",
            fontStyle: "italic",
            color: "rgba(94, 89, 89, 1)",
            marginLeft: 38,
          }}
        >
          Additions
        </Text>
        <View style={styles.paneer}>
          <Text
            style={{
              fontSize: 10,
              lineHeight: 15,
              fontWeight: "400",
              color: "rgba(94, 89, 89, 1)",
              marginLeft: 13,
              marginTop: 5,
            }}
          >
            Paneer
          </Text>
          <Image
            style={{
              marginRight: 10,
              marginTop: 10,
              tintColor: "rgba(255, 120, 91, 1)",
            }}
            source={require("../../../media_phainop/back.png")}
          />
        </View>
        <View style={styles.addtobag}>
          <Text
            style={{
              fontSize: 21,
              lineHeight: 21,
              fontWeight: "500",
              color: "rgba(254, 250, 249, 1)",
              marginTop: 20,
            }}
          >
            ₹100
          </Text>
          <View style={styles.addSL}>
            <Text
              onPress={onSubtract}
              style={{
                fontSize: 21,
                lineHeight: 29,
                fontWeight: "900",
                color: "rgba(254, 251, 250, 1)",
              }}
            >
              -
            </Text>
            <Text
              style={{
                fontSize: 21,
                lineHeight: 29,
                fontWeight: "900",
                color: "rgba(254, 251, 250, 1)",
              }}
            >
              {count}
            </Text>
            <Text
              onPress={onAdd}
              style={{
                fontSize: 21,
                lineHeight: 29,
                fontWeight: "900",
                color: "rgba(254, 251, 250, 1)",
              }}
            >
              +
            </Text>
          </View>
          <View style={styles.bag}>
            <Image
              style={{ alignSelf: "center", marginTop: 4 }}
              source={require("../../../media_phainop/back.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Lab78sc2;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "column",
  },
  rating: {
    width: 118,
    height: 38,
    backgroundColor: "rgba(0, 0, 0, 0.43)",
    borderRadius: 32,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    position: "absolute",
    top: 20,
    left: 270,
    flexDirection: "row",
  },
  body: {
    width: "100%",
    height: "200%",
    position: "absolute",
    top: 220,
    backgroundColor: "#FCF4F4",
    borderRadius: 40,
  },
  line1: {
    flexDirection: "row",
  },
  name: {
    width: 171,
    height: 51,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 32,
    top: -20,
    left: 35,
  },
  favBut: {
    position: "absolute",
    width: 38,
    height: 35,
    left: 340,
    top: -15,
    borderColor: "rgba(255, 120, 91, 1)",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  line2: {
    marginTop: 55,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  line3: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  line4: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  boxTime: {
    width: 190,
    height: 25,
    borderWidth: 1,
    borderColor: "rgba(234, 234, 234, 1)",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  ingredients: {
    marginTop: 27,
    marginStart: 28,
    marginEnd: 36,
    width: Dimensions.get.width,
    height: 80,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 25,
    marginBottom: 50,
  },
  line5: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 22,
  },
  selectUser: {
    width: 295,
    height: 35,
    borderRadius: 20,
    backgroundColor: "rgba(241, 241, 241, 1)",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  paneer: {
    marginStart: 31,
    marginEnd: 22,
    width: Dimensions.get.width,
    height: 30,
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: "rgba(255, 120, 91, 1)",
    backgroundColor: "rgba(255, 255, 255, 0.99)",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 31,
  },
  addtobag: {
    marginStart: 26,
    marginEnd: 13,
    width: Dimensions.get.width,
    height: 60,
    backgroundColor: "rgba(248, 119, 74, 1)",
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  addSL: {
    width: 130,
    height: 35,
    marginTop: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(254, 251, 250, 1)",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bag: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(254, 251, 250, 1)",
    borderRadius: 15,
    marginTop: 12,
  },
});
