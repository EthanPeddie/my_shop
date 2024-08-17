import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface MyModalProps {
  visible: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  style?: ViewStyle;
}

const MyModal = ({
  visible,
  title,
  children,
  onClose,
  style,
}: MyModalProps) => {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={[styles.modalContainer, style]}>
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>
          {children}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  closeText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default MyModal;
