# react-native-firebase-automl
Firebase AutoML wrapper for Android allows you to use your own trained machine learning models from Firebase ML Kit - AutoML Vision Edge

## Installation

[Add Firebase](https://firebase.google.com/docs/android/setup) to your project.

### Create your Android native Java class in android/app/src/main/java/com/<name-of-your-app> (FirebaseML.java). Note few things here:

The Java class must extends ReactContextBaseJavaModule

You must override "getName()" method and must return the name of the class as String

The bridge method (predict() in our case) must be annotated with @ReactMethod

If you want to return object you must use callbacks

### Create Package Java class in android/app/src/main/java/com/<name-of-your-app> (FirebaseMLPackage.java). Note few things here:

The Java class must extends ReactPackage

Must add the bridge class to the modules

### Add the package class instance in the MainApplication.java file in android/app/src/main/java/com/<name-of-your-app> 

```
 @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new FirebaseMLPackage()
      );
    }
```

## Usage


### Create js file to export the bridge class in the root directory of your project

### Import your bridge class in the files you need it (prediction.js file in our case

```
import FirebaseML from '@firebaseML'

getPrediction(pictureUri) {
   return new Promise((resolve, reject) => {
       FirebaseML.predict(
          pictureUri,
            error => {
                console.log(error);
                reject(error);
            },
            (appliance, confidence) => {
                resolve({ appliance, confidence});
          },
       )
   })
}
```