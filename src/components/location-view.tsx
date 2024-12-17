import { LocationData } from "@/types/location";
import * as Location from "expo-location";
import { FC, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import MapView, { Details, Region } from "react-native-maps";

const DEFAULT_DELTA = {
  latitudeDelta: 0.025,
  longitudeDelta: 0.0125,
};

const MIN_DELTA = {
  latitudeDelta: 1,
  longitudeDelta: 1,
};

interface Props {
  location: LocationData;
  onLocationChange: (location: LocationData | null) => void;
}

export const LocationView: FC<Props> = ({ location, onLocationChange }) => {
  const [region, setRegion] = useState<Region>();
  const [neighborhood, setNeighborhood] = useState("");

  useEffect(() => {
    if (location?.latitude && location?.longitude && location?.neighborhood) {
      setRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        ...DEFAULT_DELTA,
      });
      setNeighborhood(location.neighborhood);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRegionChangeComplete = async (region: Region, details: Details) => {
    if (
      region.latitudeDelta > MIN_DELTA.latitudeDelta ||
      region.longitudeDelta > MIN_DELTA.longitudeDelta
    ) {
      setNeighborhood("Zoom into your neighborhood");
      onLocationChange(null);
      return;
    }

    try {
      const location = await Location.reverseGeocodeAsync({
        latitude: region.latitude,
        longitude: region.longitude,
      });

      const address = location[0];
      let neighborhood = "";

      if (address.city) {
        neighborhood = address.city;
      } else if (address.subregion) {
        neighborhood = address.subregion;
      } else if (address.region) {
        neighborhood = address.region;
      } else {
        neighborhood = "Invalid location";
        setNeighborhood(neighborhood);
        onLocationChange(null);
        return;
      }

      setNeighborhood(neighborhood);
      onLocationChange({
        latitude: region.latitude,
        longitude: region.longitude,
        neighborhood: neighborhood,
      });
    } catch (error: any) {
      switch (error.code) {
        case "E_RATE_EXCEEDED":
          Alert.alert("Error", "Too many requests. Please try again later;");
          break;
        default:
          Alert.alert("Error", "Something went wrong. Please try again later;");
          break;
      }
    }
  };

  return (
    <View className="w-full h-3/5 justify-center items-center">
      <MapView
        className="w-full h-full"
        region={region}
        onRegionChangeComplete={onRegionChangeComplete}
      />
      <View
        className="bg-black absolute py-2 px-4 rounded-md"
        pointerEvents="none"
      >
        <Text className="text-white text-base font-poppins-regular">
          {neighborhood}
        </Text>
      </View>
    </View>
  );
};
