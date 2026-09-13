'use client';

import React, { useRef } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

interface GooglePlacesAutocompleteProps {
  onPlaceSelected: (address: string) => void;
}

const libraries: ("places")[] = ["places"];

const inputClassName =
  'bg-transparent border-b border-white text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent h-9 w-full';

const GooglePlacesAutocomplete: React.FC<GooglePlacesAutocompleteProps> = ({ onPlaceSelected }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place?.formatted_address) {
      onPlaceSelected(place.formatted_address);
    }
  };

  if (loadError) {
    return (
      <input
        type="text"
        placeholder="Enter your address"
        className={inputClassName}
        onBlur={(e) => {
          if (e.target.value.trim()) onPlaceSelected(e.target.value.trim());
        }}
      />
    );
  }

  if (!isLoaded) {
    return (
      <input
        type="text"
        placeholder="Enter your address"
        className={inputClassName}
        aria-busy="true"
        disabled
      />
    );
  }

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input
        type="text"
        placeholder="Enter your address"
        className={inputClassName}
      />
    </Autocomplete>
  );
};

export default GooglePlacesAutocomplete;
