# React Native GPS Recorder Assignment

## Features
- **Add Location Coordinate:** Tap the FAB to add the current GPS coordinates (latitude and longitude) to the list.
- **Delete Location Coordinate:** Remove any coordinate from the list using the associated delete button.
- **Offline Handling:** Recorded coordinates are saved locally, so they persist even after closing the app.
- **Bonus Feature:** Tapping a coordinate opens a popup showing the corresponding address.
- **Best Practices:** Care has been taken in updating and refining the file structure, along with type safeties in order to use all the best practices that I am aware of. The application is fully working and compatible with android & iOS devices.

## Stack
- **Framework:** React Native (v0.76.1)
- **State Management:** Redux Toolkit
- **Navigation:** React Navigation
- **Storage:** @react-native-communityAsyncStorage
- **Geolocation:** @react-native-community/geolocation
- **Maps:** react-native-maps

## Installation
Requirements: -> Node v20

```bash
git clone https://github.com/lakshit-rattan/gpsRecorder.git
cd gpsRecorder
```

- Step 1 : run npm install
- Step 2 (Optional) : Put your Google Maps API key in App.tsx line 13 if you want to access the Bonus Feature of seeing the coordinates on google maps on pressing them.
- Step 3 : run 'npm start --reset-cache'
- Step 4 : enter 'a' after metro runs for android (ensure emulator/device is connected via 'adb devices') and 'i' for iOS (ensure apple simulator opened)
- Step 5 : App tested working for iOS on XCode 16.1 & Android Studio Ladybug 2024.2.1 for android


## Usage

- Launch the app. Allow app to use location, and the initial screen will display a floating action button (FAB).
- Tap the FAB to add your current GPS coordinates to the list.
- View the list of coordinates displayed as a simple list.
- Use the delete button next to any coordinate to remove it from the list.
- (Bonus) - Tap on a coordinate to see its corresponding address. (Only if step 2 is completed)
