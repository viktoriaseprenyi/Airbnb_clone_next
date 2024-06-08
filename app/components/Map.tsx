"use client"
//Components for map
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

//To get countries
import { useCountries } from "../lib/getCountries";


const ICON = icon({
    iconUrl:
      "https://images.vexels.com/media/users/3/131261/isolated/preview/b2e48580147ca0ed3f970f30bf8bb009-karten-standortmarkierung.png",
    iconSize: [50, 50],
  });

export default function Map({ locationValue }: { locationValue: string }){
    const { getCountryByValue } = useCountries();
    const latLang = getCountryByValue(locationValue)?.latLang;

    return (
        <MapContainer 
        scrollWheelZoom={false} 
        center={latLang ?? [52.505,-0.09]} 
        className="h-[50vh] rounded-lg relative z-0" 
        zoom={8}>
                  <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latLang ?? [52.505, -0.09]} icon={ICON}/>
        </MapContainer>
    )
}