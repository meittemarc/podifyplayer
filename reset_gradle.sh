#!/bin/bash

echo "🔄 Suppression des caches Gradle et des builds Android..."

# Supprimer le cache Gradle
rm -rf android/.gradle
rm -rf android/build
rm -rf android/app/build

# Supprimer les fichiers temporaires de Node.js
rm -rf node_modules
rm -f package-lock.json yarn.lock

# Réinstaller les dépendances
echo "📦 Réinstallation des dépendances..."
npm install

# Nettoyage de Gradle
echo "🧹 Nettoyage de Gradle..."
cd android || exit
./gradlew clean

# Reconstruction du projet
## echo "⚙️ Reconstruction de l'application..."
##cd ..
##npx react-native run-android

##echo "✅ Réinitialisation et reconstruction terminées !"
