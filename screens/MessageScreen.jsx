import React from "react";
import { SafeAreaView } from "react-native";
import MessagesRender from "../components/gameplay/MessagesRender";
import messagesData from "../data/messagesData";
import { palette } from "../theme/theme";

console.log("mesa", messagesData);

const MessageScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette.black }}>
      <MessagesRender messages={messagesData} />
    </SafeAreaView>
  );
};

export default MessageScreen;
