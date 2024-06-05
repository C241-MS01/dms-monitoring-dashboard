
import React, { useEffect } from 'react'
import {Loader} from '@googlemaps/js-api-loader'

export default function Map() {

    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const initMap = async() => {
            const loader = new Loader({
              apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
              
            });

            const {Map}= await loader.importLibrary('maps');

            // Init a Marker
            const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary
            
            const position = {
              lat: -5.987153,
              lng: 106.0390158,
            };

            const mapOption: google.maps.MapOptions = {
              center: position,
              zoom: 17,
              mapId: "127371ae24949f0e",
            };

            //setup teh map 
            const map = new Map(mapRef.current as HTMLDivElement, mapOption);

            // put up a marker
            const marker = new Marker({
              map: map,
              position: position,
            });
        }
        initMap();
    })
  return (
    <div style={{ height: '400px' }} ref={mapRef}/>
  )
}
