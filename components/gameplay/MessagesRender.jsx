import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { palette } from "../../theme/theme";
import { FlashList } from "@shopify/flash-list";
import { createBox } from "@shopify/restyle";

const avatars = {
  // me: require("../../assets/avatars/me.png"),
  // lawyer: require("../../assets/avatars/lawyer.png"),
  // detective: require("../../assets/avatars/detective.png"),
  other: require("../../assets/images/wallpaper_private_eye_1.png"),
};

const Box = createBox();

const MessagesRender = ({ messages }) => {
  const renderMessageItem = ({ item }) => {
    const isMyMessage = item.sender === "me";

    return (
      <View style={[styles.messageRow, isMyMessage && styles.myMessageRow]}>
        {/* Avatar */}
        {!isMyMessage && (
          <Image
            source={avatars.other || avatars[item.sender]}
            style={styles.avatar}
          />
        )}

        {/* Message Bubble */}
        <View
          style={[
            styles.messageContainer,
            isMyMessage ? styles.myMessage : styles.otherMessage,
          ]}
        >
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
      </View>
    );
  };

  const renderDateSection = ({ item }) => {
    return (
      <View>
        <Text style={styles.dateText}>{item.date}</Text>
        <FlashList
          data={item.messages}
          renderItem={renderMessageItem}
          keyExtractor={(msg, index) => index.toString()}
          estimatedItemSize={50}
        />
      </View>
    );
  };

  // Convert JSON object to an array
  const messagesArray = Object.keys(messages).map((date) => ({
    date,
    messages: messages[date].flat(),
  }));

  return (
    <View>
      <Box backgroundColor="primary" padding="s">
        <Text>hello</Text>
      </Box>
      <FlatList
        data={messagesArray}
        style={{ marginBottom: 50 }}
        renderItem={renderDateSection}
        keyExtractor={(item) => item.date}
      />
      <Box padding="m" backgroundColor="primary">
        <Text>hel2lo</Text>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888",
    textAlign: "center",
    marginVertical: 10,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  myMessageRow: {
    flexDirection: "row-reverse",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContainer: {
    maxWidth: "70%",
    padding: 12,
    borderRadius: 12,
  },
  myMessage: {
    backgroundColor: "#007AFF",
    alignSelf: "flex-end",
  },
  otherMessage: {
    backgroundColor: palette.darkGray,
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
    color: "#fff",
  },
  messageTime: {
    fontSize: 10,
    color: "#ddd",
    alignSelf: "flex-end",
    marginTop: 4,
  },
});

export default MessagesRender;
