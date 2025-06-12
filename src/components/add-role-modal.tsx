import { useMyProfile, useUpdateLookingForRoles } from "@/api/my-profile";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const AddRoleModal: React.FC<Props> = ({ visible, onClose }) => {
  const { data: profile } = useMyProfile();
  const { mutate: updateRoles } = useUpdateLookingForRoles();
  const [newRole, setNewRole] = useState("");

  const handleAddRole = () => {
    if (!newRole.trim()) {
      Alert.alert("Error", "Please enter a role name");
      return;
    }

    const currentRoles = profile?.looking_for_roles || [];
    console.log("Current roles before add:", currentRoles);
    const updatedRoles = [...currentRoles, newRole.trim()];
    console.log(
      "Attempting to add role:",
      newRole.trim(),
      "Updated roles:",
      updatedRoles
    );

    updateRoles(
      { roles: updatedRoles },
      {
        onSuccess: () => {
          setNewRole("");
          onClose();
          console.log(
            "Role added successfully. Current roles should update on UI."
          );
        },
        onError: (error) => {
          console.log("Add role error:", error);
          Alert.alert("Error", "Failed to add role. Please try again.");
        },
      }
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-gray-800 rounded-xl p-6 w-[90%] max-w-[400px]">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-poppins-semibold text-white">
              Add New Role
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#ecac6d" />
            </TouchableOpacity>
          </View>

          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3 mb-4 font-poppins"
            placeholder="Enter role name..."
            placeholderTextColor="#9CA3AF"
            value={newRole}
            onChangeText={setNewRole}
          />

          <TouchableOpacity
            className="bg-[#ecac6d] rounded-lg p-3"
            onPress={handleAddRole}
          >
            <Text className="text-gray-900 text-center font-poppins-semibold">
              Add Role
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
