import { StyleSheet, Text, View, Pressable } from "react-native";
import SwipeModal from "./src/components/SwipeModal";
import { useState } from "react";
import tw from "twrnc";

const initialModalState = {
  left: false,
  right: false,
  top: false,
  bottom: false,
};

export default function App() {
  const [modalState, setModalState] = useState(initialModalState);

  const checkForModalShow = () => {
    for (const item in modalState) if (modalState[item]) return true;
    return false;
  };

  const getModalPosition = () => {
    for (const item in modalState) if (modalState[item]) return item;
  };

  const modalBody = () => {
    return <Text>Modal Body Content</Text>;
  };

  return (
    <View style={styles.container}>
      <View style={tw`flex-row`}>
        <Pressable
          style={tw`p-2.5 border mr-2.5`}
          onPress={() => setModalState({ ...modalState, right: true })}
        >
          <Text>Right</Text>
        </Pressable>
        <Pressable
          style={tw`p-2.5 border mr-2.5`}
          onPress={() => setModalState({ ...modalState, top: true })}
        >
          <Text>Top</Text>
        </Pressable>
        <Pressable
          style={tw`p-2.5 border mr-2.5`}
          onPress={() => setModalState({ ...modalState, bottom: true })}
        >
          <Text>Bottom</Text>
        </Pressable>
        <Pressable
          style={tw`p-2.5 border mr-2.5`}
          onPress={() => setModalState({ ...modalState, left: true })}
        >
          <Text>Left</Text>
        </Pressable>
      </View>
      {checkForModalShow() && (
        <SwipeModal
          position={getModalPosition()}
          onClose={() => setModalState(initialModalState)}
          body={modalBody}
          closeOnBackdropPress
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
